---
name: kb-fact-check
description: Fact-check wiki markdown content against the original raw source papers in raw/papers/. Takes either a wiki page path (e.g. wiki/paradigms/false-belief-task.md) or a pasted text snippet, decomposes it into claims, resolves each claim's cited sources to the ground-truth paper, and verifies citation faithfulness and quote/number accuracy. Writes a report to wiki/output/fact-checks/ and surfaces a summary in chat so the user can apply corrections later. Use whenever the user wants to verify, fact-check, or audit whether a wiki page's claims, quotes, or numbers faithfully reflect the cited source papers. Also triggers on "does the source actually say this", "check these claims against the paper", "are the numbers on this page right", "verify the citations". Triggered only via /kb-fact-check.
argument-hint: <wiki page path | pasted text snippet>
---

Fact-check the following wiki content against the **raw source papers** (the ground truth in `raw/papers/`), not against other wiki pages. The wiki is a secondary summary; the raw paper is what the claim must ultimately answer to.

**Input:**
```
$ARGUMENTS
```

## What this skill verifies

Two things, and only these two — keep the scope tight so each verdict is sharp:

1. **Citation faithfulness** — does the cited raw paper actually support the claim attributed to it? (Not "is the claim true in general," but "does *this source* say *this*.")
2. **Quote/number accuracy** — are verbatim quotes, statistics, percentages, p-values, model names, and figures reproduced exactly as they appear in the raw paper?

You are *not* auditing classification consistency, missing citations, or wiki-internal coherence here. If you notice something egregious outside this scope, you may note it briefly under "Other observations," but it does not get a verdict.

## How citation resolution works

This is the core mechanism. A wiki claim cites a source with an Obsidian wikilink like `[[sources/coda-forno-et-al-2024]]`. To reach the ground-truth paper you need the **paper folder index** — a two-digit number like `07`. This repo encodes that index in one of two places (try them in order), with a fuzzy-match fallback:

1. **Open the source page**: `wiki/sources/coda-forno-et-al-2024.md`.
2. **Frontmatter `citation_key`** — newer source pages carry `citation_key: 07-coda-forno-et-al-2024`. The leading digits (`07`) are the folder index.
3. **BibTeX key** — if there is no `citation_key` field, read the BibTeX block in the page body. Its key encodes the same index: `@misc{07-coda-forno-et-al-2024,` or `@article{01-hagendorff-et-al-2024,`. Take the leading digits.
4. **The raw paper** lives in `raw/papers/07/`, as a markdown file named `07_*.md` (marker-converted) — e.g. `raw/papers/07/07_CogBench...md`. That `.md` is the ground truth. Figures sit beside it as `_page_*.jpeg`.

So `[[sources/NAME]]` → `wiki/sources/NAME.md` → index `NN` (from `citation_key` **or** the BibTeX key) → `raw/papers/NN/NN_*.md`.

**Fallback / uncertain resolution.** Some BibTeX keys carry no leading number (e.g. `@inproceedings{lohn-etal-2024-machine-psychology,`) and the page has no `citation_key`. In that case, fuzzy-match by title/author/year against the folder names under `raw/papers/` — the markdown filenames embed the title, author, and year (e.g. `08_Foot_In_The_Door_..._Wang_2024.md`) — and against `wiki/index.md`. Pick the best candidate and **flag the resolution as uncertain**. If nothing plausible matches, the claim is `UNVERIFIABLE`.

## Workflow

### Step 1 — Determine the input and load the content

- If `$ARGUMENTS` is a path to an existing file (e.g. `wiki/paradigms/false-belief-task.md`), read that file. This is a **page check**; the report name is the page's basename.
- Otherwise treat `$ARGUMENTS` as a **pasted snippet**. Derive a short kebab-case slug from its topic for the report name (e.g. `sandbagging-cot-claim`).

### Step 2 — Parse claims

Decompose the content into individual checkable claims. A claim is any statement asserting something factual that a source could confirm or contradict — what a paper found, argued, proposed, or measured; a definition it gave; a statistic or quote it reports.

For each claim, record:
- The **exact text** of the claim (verbatim from the input).
- Any **`[[sources/...]]` wikilinks** attached to it (a claim may cite several).
- Any **verbatim quotes, numbers, or named entities** embedded in it (these trigger the quote/number-accuracy check).

Skip pure connective prose, section headers, and the page's own meta-commentary — only extract assertions that have a source to answer to. The `> [!info] In plain terms` callout is deliberately a plain-language gloss, so judge it gently: check it for outright factual contradictions of the source, not for the looseness that comes from simplifying.

### Step 3 — Resolve sources and group claims by source

For each claim, resolve its cited sources to raw papers using the resolution chain above.

- **Cited claims:** map each `[[sources/...]]` wikilink → `raw/papers/NN/NN_*.md`.
- **Uncited claims:** the user wants these checked too, not skipped. Infer the most likely source by matching the claim's topic, author names, or distinctive terms against `wiki/index.md`, `wiki/sources/`, and the raw paper filenames. Pick the best candidate and **mark that the source was inferred** (so the verdict carries appropriate caution). If nothing plausible matches, the claim is `UNVERIFIABLE`.

Now **group claims by resolved source**. Every claim tied to `raw/papers/07/` goes in one bucket, every claim tied to `raw/papers/01/` in another. A claim citing two sources appears in both buckets (each source verifies its own attribution).

### Step 4 — Verify each source bucket (one subagent per source when there are several)

Each source bucket is checked against its raw paper independently. The reason to isolate per source is focus: an agent looking at exactly one paper reads it deeply rather than skimming many, which is where faithfulness and quote errors actually get caught.

Scale the mechanism to the work, since the fan-out has real cost:
- **One or two source buckets:** just check them yourself, inline, one paper at a time. Spawning subagents here adds latency and tokens for no gain.
- **Three or more source buckets:** spawn a subagent **per bucket, in parallel** — this is where the isolation pays off and the parallelism recovers the wall-clock.

Whether inline or delegated, each bucket is verified with the same instructions. Use this prompt shape for a subagent (and follow the same checklist yourself when checking inline):

```
You are fact-checking wiki claims against ONE raw source paper, which is the ground truth.

Paper: raw/papers/<NN>/<NN_filename>.md
(Read this file fully. If a claim references a figure/table, the figures are _page_*.jpeg files in the same folder — read the relevant one.)

Claims attributed to this paper:
1. "<exact claim text>"  [quotes/numbers to verify exactly: <list, or 'none'>]  [source was: cited | INFERRED]
2. ...

For EACH claim, verify:
- Citation faithfulness: does this paper actually support this claim? Find the specific passage.
- Quote/number accuracy: are any quoted phrases, statistics, p-values, percentages, or model names reproduced exactly? Even small drifts (0.65 vs 0.64, "strategic" vs "deliberate") count.

Return, for each claim, a structured verdict:
- claim (the text)
- verdict: SUPPORTED | PARTIALLY SUPPORTED | UNSUPPORTED | UNVERIFIABLE
- evidence: a brief VERBATIM quote from the paper (with rough location, e.g. "Section 4.2") showing what it actually says
- issue: if not SUPPORTED, the precise discrepancy (overstatement, omitted qualifier, wrong number, source doesn't claim this, etc.)
- suggested_fix: corrected wiki text, only if a fix is warranted
- inferred: true if this source was inferred rather than cited

Trust the paper over any intuition. If the paper does not contain support, say UNSUPPORTED — do not fill the gap from background knowledge.
```

Verdict definitions:
- **SUPPORTED** — the claim accurately reflects what the raw paper says; quotes/numbers match.
- **PARTIALLY SUPPORTED** — broadly correct but overstates, understates, omits a qualifier, or has a minor quote/number drift.
- **UNSUPPORTED** — contradicts the paper, or the paper does not make this claim.
- **UNVERIFIABLE** — no source could be resolved or inferred to check against.

### Step 5 — Aggregate, write the report, summarize in chat

Collect all subagent verdicts. Determine the current date for the filename (`Get-Date -Format yyyy-MM-dd` in PowerShell).

Write the report to `wiki/output/fact-checks/<name>-<YYYY-MM-DD>.md` using the template below. Create the `wiki/output/fact-checks/` directory if it does not exist. **Do not edit the source wiki page** — the user decides whether and when to apply fixes.

Then print a concise summary in chat: the verdict counts, the most important issues, and the report path. Lead with what's wrong, not what's right — the user is here to find problems.

## Report template

ALWAYS use this structure:

```markdown
---
type: finding
field: machine-psychology
lens: na
tags: [fact-check]
date_created: <YYYY-MM-DD>
date_modified: <YYYY-MM-DD>
---

# Fact-Check: <page name or snippet topic>

**Checked:** <wiki page path, or "pasted snippet"> against raw sources in `raw/papers/`
**Date:** <YYYY-MM-DD>

## Summary

| Verdict | Count |
|---------|-------|
| SUPPORTED | N |
| PARTIALLY SUPPORTED | N |
| UNSUPPORTED | N |
| UNVERIFIABLE | N |

### Key issues
- <most severe issues first; name the source and the nature of the discrepancy>

## Claim-by-claim

### Claim 1
- **Claim:** "<exact text>"
- **Source:** [[sources/...]] → `raw/papers/NN/` <(inferred) or (uncertain resolution) if applicable>
- **Verdict:** <SUPPORTED | PARTIALLY SUPPORTED | UNSUPPORTED | UNVERIFIABLE>
- **Evidence:** "<verbatim quote from the raw paper>" (Section/location)
- **Issue:** <discrepancy, if any>
- **Suggested fix:** <corrected wiki text, if any>

### Claim 2
...

## Other observations
- <optional: out-of-scope things noticed, e.g. a likely-missing citation — no verdict>
```

## Guidelines

- **The raw paper is ground truth.** If the wiki summary and the raw paper disagree, the paper wins — that disagreement is exactly the kind of finding this skill exists to surface.
- **Quote real text.** Every non-trivial verdict should carry a short verbatim quote from the raw paper. A verdict with no quote is an opinion, not a check.
- **Semantic accuracy over wording.** Don't flag a claim merely because the phrasing differs from the paper. Flag it when the *meaning* drifts, a number is wrong, or an attributed quote isn't actually in the source.
- **Be precise about numbers.** Statistics, p-values, percentages, accuracies, and model identifiers are the easiest things to get subtly wrong and the easiest to verify exactly. Check them character-for-character.
- **Caution on inferred or uncertainly-resolved sources.** When a source was inferred rather than cited, or the folder index was fuzzy-matched, say so in the verdict and lean toward PARTIALLY SUPPORTED / UNVERIFIABLE rather than a confident SUPPORTED.
- **Don't invent sources.** Only reference papers that exist in `raw/papers/`. If you can't resolve one, mark UNVERIFIABLE and explain.
