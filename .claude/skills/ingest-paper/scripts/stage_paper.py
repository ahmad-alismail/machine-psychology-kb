#!/usr/bin/env python
"""Stage a paper for the ingest-paper pipeline.

Two modes:

  --url <arxiv_or_pdf_url>   LINK mode: resolve metadata, build the BibTeX,
                             download the PDF into the staging dir under the
                             next number, and emit a JSON plan.

  --file <path_in_staging>   MANUAL mode: a PDF the user already dropped in.
                             Assign/normalise the number, rename to convention,
                             leave the BibTeX blank (the ingest agent derives the
                             citation key from the converted markdown).

The script ONLY does the deterministic, fiddly parts (arXiv id parsing, API
metadata, BibTeX construction, numbering, download, naming). It prints a single
JSON object to stdout; all human-readable logging goes to stderr. The skill
reads the JSON and drives marker + the ingest subagent from there.

Run it through the project's uv env so the interpreter matches the project:
    uv run python .claude/skills/ingest-paper/scripts/stage_paper.py --url ...
"""

import argparse
import json
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

ARXIV_API = "http://export.arxiv.org/api/query?id_list={id}"
ARXIV_PDF = "https://arxiv.org/pdf/{id}"
ARXIV_ABS = "https://arxiv.org/abs/{id}"
UA = "Mozilla/5.0 (ingest-paper-skill; research wiki)"


def log(*a):
    print(*a, file=sys.stderr, flush=True)


# --------------------------------------------------------------------------- #
# naming helpers
# --------------------------------------------------------------------------- #
def next_number(staging_dir):
    """Highest NN_ prefix in the staging dir, +1. Strict max+1, no gap-fill."""
    hi = 0
    if os.path.isdir(staging_dir):
        for name in os.listdir(staging_dir):
            m = re.match(r"^(\d+)[_\-]", name)
            if m:
                hi = max(hi, int(m.group(1)))
    return f"{hi + 1:02d}"


def last_token(full_name):
    """Surname token for citation keys: lowercase, keep internal hyphens."""
    toks = full_name.strip().split()
    surname = toks[-1] if toks else full_name
    surname = surname.lower()
    return re.sub(r"[^a-z0-9\-]", "", surname)


def author_key(authors, year):
    """1 author -> last; 2 -> last1-last2; 3+ -> last1-et-al. Plus -year."""
    surnames = [last_token(a) for a in authors if a.strip()]
    if not surnames:
        base = "unknown"
    elif len(surnames) == 1:
        base = surnames[0]
    elif len(surnames) == 2:
        base = f"{surnames[0]}-{surnames[1]}"
    else:
        base = f"{surnames[0]}-et-al"
    return f"{base}-{year}"


def title_to_filename(title):
    """Preserve the title's own capitalisation; punctuation -> gone, space -> _."""
    cleaned = re.sub(r"[^0-9A-Za-z\s\-]", "", title)
    cleaned = re.sub(r"\s+", "_", cleaned.strip())
    return cleaned.strip("_")


def first_author_surname_cap(authors):
    if not authors:
        return "Unknown"
    surname = authors[0].strip().split()[-1]
    surname = re.sub(r"[^0-9A-Za-z\-]", "", surname)
    return surname[:1].upper() + surname[1:] if surname else "Unknown"


# --------------------------------------------------------------------------- #
# duplicate detection (LINK mode)
# --------------------------------------------------------------------------- #
def find_duplicate(arxiv_id, source_filename, sources_dir):
    """Has this paper already been ingested? Two signals, strongest first.

    1. DEFINITIVE: the bare arXiv id appears in some wiki/sources/*.md (the
       LINK-ingest source page embeds it in the BibTeX `eprint`/`url`).
    2. COLLISION: the deterministic source filename (<authorkey>-<year>.md)
       already exists. Either it's the same paper, or a different paper by the
       same first-author/year that would clash on filename — both need a human.

    Returns (kind, existing_path) where kind is 'arxiv-id' | 'filename', or None.
    """
    if not os.path.isdir(sources_dir):
        return None
    id_re = re.compile(re.escape(arxiv_id) + r"(v\d+)?\b")
    for name in sorted(os.listdir(sources_dir)):
        if not name.endswith(".md"):
            continue
        path = os.path.join(sources_dir, name)
        try:
            with open(path, "r", encoding="utf-8") as f:
                text = f.read()
        except OSError:
            continue
        if id_re.search(text):
            return ("arxiv-id", path.replace("\\", "/"))
    collision = os.path.join(sources_dir, source_filename)
    if os.path.isfile(collision):
        return ("filename", collision.replace("\\", "/"))
    return None


# --------------------------------------------------------------------------- #
# arXiv
# --------------------------------------------------------------------------- #
def parse_arxiv_id(url):
    """Pull the bare arXiv id (sans version) out of an abs/pdf URL or raw id."""
    u = url.strip()
    u = re.sub(r"\.pdf($|\?)", r"\1", u)
    # new-style: 2411.03336  (optionally vN)
    m = re.search(r"(\d{4}\.\d{4,5})(v\d+)?", u)
    if m:
        return m.group(1)
    # old-style: cs/0309040
    m = re.search(r"([a-z\-]+(?:\.[A-Z]{2})?/\d{7})(v\d+)?", u)
    if m:
        return m.group(1)
    return None


def fetch_arxiv_meta(arxiv_id):
    req = urllib.request.Request(ARXIV_API.format(id=arxiv_id), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        xml = r.read().decode("utf-8")
    ns = {"a": "http://www.w3.org/2005/Atom", "arxiv": "http://arxiv.org/schemas/atom"}
    root = ET.fromstring(xml)
    entry = root.find("a:entry", ns)
    if entry is None:
        raise RuntimeError(f"arXiv API returned no entry for {arxiv_id}")
    title = re.sub(r"\s+", " ", entry.findtext("a:title", default="", namespaces=ns)).strip()
    authors = [
        re.sub(r"\s+", " ", a.findtext("a:name", default="", namespaces=ns)).strip()
        for a in entry.findall("a:author", ns)
    ]
    authors = [a for a in authors if a]
    published = entry.findtext("a:published", default="", namespaces=ns)
    year = published[:4] if published else ""
    pc = entry.find("arxiv:primary_category", ns)
    primary = pc.get("term") if pc is not None else ""
    return {"title": title, "authors": authors, "year": year, "primary_category": primary}


def build_bibtex(citation_key, meta, arxiv_id):
    authors = " and ".join(meta["authors"])
    return (
        f"@misc{{{citation_key},\n"
        f"      title={{{meta['title']}}}, \n"
        f"      author={{{authors}}},\n"
        f"      year={{{meta['year']}}},\n"
        f"      eprint={{{arxiv_id}}},\n"
        f"      archivePrefix={{arXiv}},\n"
        f"      primaryClass={{{meta['primary_category']}}},\n"
        f"      url={{{ARXIV_ABS.format(id=arxiv_id)}}}, \n"
        f"}}"
    )


def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    return len(data)


# --------------------------------------------------------------------------- #
# modes
# --------------------------------------------------------------------------- #
def run_link(url, staging_dir, papers_dir, sources_dir, force=False):
    arxiv_id = parse_arxiv_id(url)
    if not arxiv_id:
        raise SystemExit(
            "Could not parse an arXiv id from the URL. LINK mode currently "
            "supports arXiv. For other sources, download the PDF into "
            "staging-area/ manually and re-run with --file."
        )
    log(f"arXiv id: {arxiv_id}")
    meta = fetch_arxiv_meta(arxiv_id)
    log(f"title: {meta['title']}")
    log(f"authors: {meta['authors']}  year: {meta['year']}")

    akey = author_key(meta["authors"], meta["year"])
    source_filename = f"{akey}.md"

    dup = find_duplicate(arxiv_id, source_filename, sources_dir)
    if dup:
        kind, existing = dup
        if not force:
            reason = (
                f"arXiv id {arxiv_id} already appears in {existing}"
                if kind == "arxiv-id"
                else f"a source page already exists at {existing}"
            )
            raise SystemExit(
                f"DUPLICATE: this paper looks already ingested ({reason}). "
                "Nothing was downloaded. If this is a genuinely different paper "
                "that merely collides on author/year, or you intend to re-ingest "
                "on purpose, re-run with --force."
            )
        log(f"WARNING: duplicate signal ({kind} -> {existing}); proceeding due to --force")

    number = next_number(staging_dir)
    citation_key = f"{number}-{akey}"
    fname = f"{number}_{title_to_filename(meta['title'])}_{first_author_surname_cap(meta['authors'])}_{meta['year']}.pdf"
    pdf_path = os.path.join(staging_dir, fname)

    os.makedirs(staging_dir, exist_ok=True)
    size = download(ARXIV_PDF.format(id=arxiv_id), pdf_path)
    log(f"downloaded {size} bytes -> {pdf_path}")

    stem = fname[:-4]  # drop .pdf
    return {
        "mode": "link",
        "number": number,
        "pdf_path": pdf_path.replace("\\", "/"),
        "title": meta["title"],
        "authors": meta["authors"],
        "year": meta["year"],
        "arxiv_id": arxiv_id,
        "citation_key": citation_key,
        "source_filename": f"{akey}.md",
        "bibtex": build_bibtex(citation_key, meta, arxiv_id),
        "expected_marker_dir": os.path.join(papers_dir, stem).replace("\\", "/"),
        "expected_markdown": os.path.join(papers_dir, stem, stem + ".md").replace("\\", "/"),
        "final_dir": os.path.join(papers_dir, number).replace("\\", "/"),
    }


def run_manual(path, staging_dir, papers_dir):
    if not os.path.isfile(path):
        raise SystemExit(f"File not found: {path}")
    base = os.path.basename(path)
    stem_in, ext = os.path.splitext(base)

    m = re.match(r"^(\d+)[_\-]", base)
    if m and not os.path.isdir(os.path.join(papers_dir, f"{int(m.group(1)):02d}")):
        number = f"{int(m.group(1)):02d}"
        rest = base[m.end():]
    else:
        number = next_number(staging_dir)
        rest = re.sub(r"^\d+[_\-]", "", base)

    rest_stem = os.path.splitext(rest)[0]
    rest_stem = re.sub(r"[^0-9A-Za-z\-]+", "_", rest_stem).strip("_") or "paper"
    new_name = f"{number}_{rest_stem}{ext}"
    new_path = os.path.join(staging_dir, new_name)

    renamed = False
    if os.path.abspath(new_path) != os.path.abspath(path):
        os.rename(path, new_path)
        renamed = True
        log(f"renamed {base} -> {new_name}")
    else:
        log(f"name already conventional: {base}")

    stem = new_name[:-len(ext)]
    return {
        "mode": "manual",
        "number": number,
        "pdf_path": new_path.replace("\\", "/"),
        "renamed": renamed,
        "title": None,
        "authors": None,
        "year": None,
        "arxiv_id": None,
        "citation_key": None,      # ingest agent derives from converted markdown
        "source_filename": None,   # ingest agent names per convention
        "bibtex": "",              # left blank: no official export
        "expected_marker_dir": os.path.join(papers_dir, stem).replace("\\", "/"),
        "expected_markdown": os.path.join(papers_dir, stem, stem + ".md").replace("\\", "/"),
        "final_dir": os.path.join(papers_dir, number).replace("\\", "/"),
    }


def main():
    ap = argparse.ArgumentParser(description="Stage a paper for ingest-paper.")
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--url", help="arXiv (or direct PDF) URL")
    g.add_argument("--file", help="path to a PDF already in the staging dir")
    ap.add_argument("--staging-dir", default="staging-area")
    ap.add_argument("--papers-dir", default="raw/papers")
    ap.add_argument("--sources-dir", default="wiki/sources")
    ap.add_argument(
        "--force",
        action="store_true",
        help="proceed even if the paper looks already ingested (LINK mode)",
    )
    args = ap.parse_args()

    if args.url:
        plan = run_link(
            args.url, args.staging_dir, args.papers_dir, args.sources_dir, args.force
        )
    else:
        plan = run_manual(args.file, args.staging_dir, args.papers_dir)

    print(json.dumps(plan, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
