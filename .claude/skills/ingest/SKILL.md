---
name: ingest
description: Relevance-gated two-pass source ingestion into the Machine Psychology wiki. Classifies the source against the relevance gate, extracts structured data, then integrates it into paradigm, theory, instrument, validity, safety-concept, source, and related pages.
argument-hint: <path>
disable-model-invocation: true
---

Ingest the source file at `$ARGUMENTS` into the wiki. Always follow the schema,
templates, and conventions in this wiki's `CLAUDE.md`.

## Pass 0 — Relevance Gate (REQUIRED, do this first)

Read the source, then classify it per the `## The /ingest Relevance Gate` section
of `CLAUDE.md`:

- **CORE** — studies AI/LLM *behavior* using psychology/behavioral-science methods → accept, full ingest.
- **SOURCE-METHOD** — a psychology or game-theory experiment/method/theory that could be
  *repurposed* to evaluate AI, even with no AI mention → accept, but the source page and any
  derived theory/paradigm page **must** include a `## Relevance to Machine Psychology` section
  explaining the bridge to AI evaluation.
- **REJECT (everything else)** — SDG/agentic-engineering papers, pure safety-framework/policy
  reports, pure ML/architecture/capability papers with no behavioral angle.

**Present the classification + one-line reason to the user.**
- If REJECT: stop. Offer the override (SDG → `pipelines/`; framework → `entities/` type `framework`, `tags: [adjacent]`). Only proceed on explicit override.
- If borderline (SOURCE-METHOD vs REJECT): ask the user for a yes/no before continuing.
- Record the gate decision in the log entry.

## Pass 1 — Extract

Extract structured data following the `## Extraction Schema` in `CLAUDE.md` (include the
Relevance Tier and, for SOURCE-METHOD, the AI-evaluation bridge). **STOP and present the
extract to the user for review.** Wait for approval before Pass 2.

## Pass 2 — Integrate

After approval. **Every page created or updated must follow CLAUDE.md: correct `type`,
`field: machine-psychology`, `lens`/`eval_axis`, and the `> [!info] In plain terms` beginner
callout immediately after the `# Title`.**

1. **Read `wiki/index.md`** to understand current state.
2. **Create the source summary page** in `wiki/sources/` (Source Summary template; bibtex `TBD BY USER`; Relevance Tier; for SOURCE-METHOD the `## Relevance to Machine Psychology` section).
3. **Theories** → create/update `wiki/theories/` for each grounding theory; include the theory→AI-experiment relevance bridge.
4. **Paradigms** → create/update `wiki/paradigms/` for each experimental design. Link its theory, target [[safety-concepts/...]], capability/propensity callout, instruments, validity concerns. Describe scoring/elicitation **inline** in the paradigm's "Scoring / Procedure" section (there is no methods/ directory). Game-theoretic paradigms fill the Formal Apparatus block.
5. **Instruments** → create/update `wiki/instruments/` for inventories/benchmarks/scenarios used.
6. **Validity** → create/update `wiki/validity/` when the source bears on reliability, construct validity, contamination, reproducibility, experimental controls, or the cap–propensity confound.
8. **Safety-concepts** → do NOT overwrite the user's content in `wiki/safety-concepts/`. You may update only the `## Detected By` back-link list when a new paradigm targets that behavior. If a brand-new behavior appears, create a fresh scaffold (empty content, structure only) and tell the user to fill it.
9. **Entities** → create/update `wiki/entities/` for authors/labs (and `type: framework` orgs on override). Keep these thin — facts that help experiment design, not biography.
10. **Questions** → create/update `wiki/questions/` for open research gaps surfaced (especially theory→new-experiment ideas).
11. **Empirical results & methodological lessons** → do NOT create separate findings/debates/concepts pages (those directories are intentionally excluded). State a result inline on its home paradigm/instrument page (citing the source); record a methodological lesson on the relevant `wiki/validity/` page; capture a disagreement as a `> [!warning]` callout on the affected page plus a `questions/` entry if it's an open issue.
12. **Refresh the coverage map** → if any paradigm was added or re-targeted, update `wiki/crosswalk/coverage-map.md` (or note that `/map` should be run).
13. **Update `wiki/index.md`** — add/modify catalog entries.
14. **Append to `wiki/log.md`** (newest at bottom):
    ```
    ## [YYYY-MM-DD] ingest | [Source Title]
    - Gate: CORE | SOURCE-METHOD (+ bridge) | OVERRIDE
    - Pages created: [list]
    - Pages updated: [list]
    ```
17. **Check lint counter** — read `wiki/.meta/lint-counter` (monotonic). The hook increments after commit, so if `(counter + 1) % lint_interval == 0` suggest `/lint`.
18. **Present a diff summary** of all files created/modified.
19. **On user approval:** stage and commit:
    ```
    git add [changed files]
    git commit -m "ingest: [source title]"
    ```
