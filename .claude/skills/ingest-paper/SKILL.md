---
name: ingest-paper
description: >
  End-to-end pipeline that takes a paper from a link (or a PDF the user already dropped into
  staging-area/) all the way into the wiki: assigns the next staging number, downloads the PDF,
  converts it to markdown with marker, then spawns a subagent to run the full /ingest-agentic
  integration — writing the source page with the correct BibTeX and citation key. Use this whenever
  the user hands over an arXiv/PDF link and wants the paper added to the wiki, or points at a PDF they
  put in staging-area and wants it processed. Triggers on "ingest this arxiv paper <url>", "add this
  paper to the wiki", "download and ingest <link>", "run the pipeline on this paper", "process the PDF
  I just dropped in staging-area", and similar. This is the right skill when the starting point is a
  URL or a raw PDF. It is NOT for an already-converted markdown file — for that, use /ingest-agentic
  directly.
argument-hint: "<arxiv-url> | <path-to-staged-pdf>"
---

# Ingest Paper — Link/PDF → Wiki, end to end

Carry one paper from a URL or a raw PDF all the way into the wiki. The run is **fully autonomous**:
once started, go through every step without stopping for confirmation, and finish with a git commit.

The point of this skill is to chain four things that are otherwise done by hand — acquire, number,
convert, ingest — while preserving the project's exact conventions. Get those conventions right and
the rest is mechanical. The helper script `scripts/stage_paper.py` owns the fiddly parts (arXiv id
parsing, API metadata, BibTeX construction, numbering, download, naming) so you don't reinvent them
each run; you orchestrate marker and the ingest subagent around it.

## Conventions this skill must preserve

These are load-bearing — the wiki is internally consistent and a new paper must slot in cleanly:

- **Staging number** is strictly `max(existing prefix) + 1` (zero-padded to 2 digits). Gaps in the
  sequence are never backfilled. `staging-area/` is git-ignored, so the PDF there is never committed.
- **Converted markdown** lives in `raw/papers/<NN>/` — the folder is the **number only**, but the
  markdown file inside keeps the full stem (e.g. `raw/papers/05/05_Playing_Repeated_Games_with_LLMs.md`).
- **Citation key** = `<NN>-<authorkey>-<year>` where authorkey is: 1 author → `surname`;
  2 → `surname1-surname2`; 3+ → `surname1-et-al` (all lowercase). Example: `05-akata-et-al-2023`.
- **Source page filename drops the number**: `wiki/sources/<authorkey>-<year>.md`
  (e.g. `akata-et-al-2023.md`), but the `citation_key` frontmatter and the BibTeX key keep it.
- **BibTeX**: for arXiv, a canonical `@misc{...}` entry. For sources with no official export
  (system cards, lab blog posts, manually-dropped PDFs), the BibTeX block stays blank — leave the
  template's `TBD BY USER` placeholder untouched rather than fabricating an entry.
- **No duplicates**: in LINK mode the script refuses to re-ingest a paper already in the wiki. It
  checks the resolved arXiv id against every `wiki/sources/*.md` (the BibTeX `eprint`/`url` carry it)
  and the deterministic `<authorkey>-<year>.md` source filename. On a hit it exits non-zero **before
  downloading** — overriding requires an explicit `--force`. The number is still strictly `max+1`;
  duplicate detection never reuses or backfills a number.

## Step 1 — Determine mode and stage the file

`$ARGUMENTS` is either an arXiv/PDF **URL** (LINK mode) or a **path** to a PDF already sitting in
`staging-area/` (MANUAL mode). If the argument is empty or vague ("the paper I just dropped in"),
list `staging-area/` and pick the PDF whose number has no matching `raw/papers/<NN>/` folder yet; if
that's ambiguous, ask which file.

Run the helper from the project root through the project's uv env so the interpreter matches the
project:

```powershell
# LINK mode
uv run python .claude/skills/ingest-paper/scripts/stage_paper.py --url "<arxiv-url>"

# MANUAL mode
uv run python .claude/skills/ingest-paper/scripts/stage_paper.py --file "staging-area/<file>.pdf"
```

The script prints a JSON **plan** to stdout. Parse and keep it — every later step reads from it:
`number`, `pdf_path`, `title`, `citation_key`, `source_filename`, `bibtex`,
`expected_marker_dir`, `expected_markdown`, and `final_dir`.

In MANUAL mode the script normalises the filename (assigns the number, renames to convention) and
returns `title`/`citation_key`/`bibtex` as null/blank — those are derived later by the ingest
subagent from the converted markdown, because a raw PDF has no reliable machine-readable metadata.

If the script exits with an error (e.g. a non-arXiv URL in LINK mode), relay its message: the user
should download that PDF into `staging-area/` by hand and re-run in MANUAL mode.

If the script exits with a `DUPLICATE:` message, the paper is already in the wiki — **stop here**.
Relay the message (it names the existing source page) and do not convert or ingest. Only re-run with
`--force` appended if the user confirms they want to re-ingest anyway (e.g. the metadata genuinely
points at a different paper that merely collides on author/year).

## Step 2 — Convert with marker (background + poll)

marker on GPU can take several minutes, so run it in the **background** and poll for the output
markdown rather than blocking on a single long command that could time out.

```powershell
$env:TORCH_DEVICE = "cuda"
uv run marker_single "<pdf_path>" --output_dir raw/papers
```

Launch that as a background process, then poll until `expected_markdown` (from the plan) exists and
its size is stable. While polling, do nothing else destructive. If marker exits without producing the
file, surface its stderr and stop — do not proceed to ingest with no markdown.

marker writes to a folder named after the PDF stem (`expected_marker_dir`). Once the markdown is
present, rename that folder to the number-only form so it matches the convention:

```powershell
Move-Item "<expected_marker_dir>" "<final_dir>"
```

After the move, the converted markdown is at `<final_dir>/<stem>.md`. Confirm it exists before
moving on.

## Step 3 — Spawn the ingest subagent

Delegate the wiki integration to a **fresh subagent** (Agent tool) so it runs the full
`/ingest-agentic` workflow autonomously and keeps this conversation's context clean. The subagent
spawns its own review agent as part of that workflow — that's expected.

Give the subagent everything it needs and one hard constraint: **it must not commit** (you commit
once, centrally, in Step 4). Use a prompt along these lines, filling in the plan values:

```
Run the /ingest-agentic workflow (.claude/skills/ingest-agentic/SKILL.md) on this converted source,
fully autonomously, then STOP before any git commit and report back.

Source markdown: <final_dir>/<stem>.md

Source page requirements — apply these exactly when you create wiki/sources/<source_filename>:
- Frontmatter `citation_key: <citation_key>`
- Filename: wiki/sources/<source_filename>   (no number prefix, per convention)
- BibTeX block: <one of the two cases below>

  • If a BibTeX entry is provided here, paste it verbatim into the ```bibtex block, replacing the
    template's "TBD BY USER" placeholder:
    ---
    <bibtex>
    ---
  • If no BibTeX is provided (blank), LEAVE the "TBD BY USER" placeholder in place — do not fabricate
    an entry — but still set citation_key. Derive the citation key yourself from the paper's authors
    and year using the convention <NN>-<authorkey>-<year> (1 author -> surname; 2 -> surname1-surname2;
    3+ -> surname1-et-al; lowercase). The number prefix is <number>. Name the source file
    <authorkey>-<year>.md accordingly.

Author-surname sanity check: the citation key above was built by a heuristic that takes the last
whitespace token of each author name. If an author has a compound surname (e.g. "Schulze Buschoff" ->
schulze-buschoff, "Coda-Forno"), correct the authorkey to match how the wiki already names such
authors, and update BOTH the citation_key frontmatter and the BibTeX key consistently — but keep the
numeric prefix <number> fixed.

Do all of Pass 1 (extract), Pass 1.5 (agent review), and Pass 2 (integrate): source page, concept
pages, entities, evidence/methods/findings/questions as warranted, update wiki/index.md, append to
wiki/log.md. Do NOT run `git add` or `git commit`. When done, return a concise summary listing every
file created and every file updated, plus any lint-counter note from the ingest-agentic workflow.
```

Pass the actual `bibtex` string from the plan (which may be empty). Capture the subagent's summary of
created/updated files — you need it for the commit and the final report.

## Step 4 — Commit (autonomous)

Stage **only** the ingest artifacts — the converted paper and the wiki — and commit. Scope the
`git add` to `raw/papers/<NN>` and `wiki` rather than `git add -A`: the working tree may hold
unrelated changes (e.g. `.claude/` settings or skill edits) that do not belong in an `ingest:`
commit. `staging-area/` is git-ignored, so the PDF is excluded automatically either way.

```powershell
git add "raw/papers/<NN>" wiki
git commit -m "ingest: <title>"
```

Use the paper's real title in the message. The `ingest:` prefix matters: a PostToolUse hook watches
for it to bump `wiki/.meta/lint-counter`. If the subagent's summary flagged that lint is due
(counter divisible by the interval), relay that suggestion to the user — but do not run `/lint`
yourself unless asked.

## Step 5 — Report

Give the user a tight summary:

- Number assigned and staged PDF path
- Converted markdown location (`raw/papers/<NN>/...`)
- Source page created, with its citation key
- Pages created / updated (from the subagent's summary)
- The commit made
- Any lint suggestion

## Failure handling

- **Non-arXiv URL in LINK mode** — the script errors out cleanly. Tell the user to drop the PDF into
  `staging-area/` and re-run in MANUAL mode (BibTeX will be left blank, per convention).
- **Duplicate paper (LINK mode)** — the script exits with a `DUPLICATE:` message before downloading.
  Relay it and stop; the paper is already ingested. Re-run with `--force` only on explicit user
  confirmation. (No detection in MANUAL mode — a raw PDF has no pre-conversion metadata to match on;
  the number-collision guard still applies.)
- **marker produces no markdown** — surface stderr, stop before ingest. Nothing to integrate.
- **Subagent returns REVISE twice / can't resolve** — `/ingest-agentic` already escalates this to the
  user; relay it and stop before committing a half-integrated source.
- **Number race** — always recompute from `staging-area/` at run time; never hardcode.
