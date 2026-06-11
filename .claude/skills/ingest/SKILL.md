---
name: ingest
description: Relevance-gated two-pass source ingestion into the Machine Psychology wiki. Classifies the source against the relevance gate, extracts structured data, then integrates it into paradigm, theory, instrument, safety-concept, source, and related pages.
argument-hint: <path>
disable-model-invocation: true
---

Ingest the source file at `$ARGUMENTS` into the wiki. Always follow the schema,
templates, and conventions in this wiki's `CLAUDE.md`.

## Pass 0 — Relevance Gate (REQUIRED, do this first)

Read the source, then classify it. **Only two tiers are accepted:**

- **CORE** — studies AI/LLM *behavior* using psychology/behavioral-science methods → accept, full ingest.
- **SOURCE-METHOD** — a psychology or game-theory experiment/method/theory that could be
  *repurposed* to evaluate AI, even with no AI mention (e.g. Milgram, prisoner's dilemma,
  Schwartz values, Kahneman–Tversky) → accept. Document the experiment faithfully on its
  own terms — never weave an AI framing into that documentation. The source page's
  `## Relevance to Machine Psychology` section is **required** for this tier: it is the
  one place you write the bridge (how this could be repurposed to evaluate AI), clearly
  as wiki interpretation, not as a claim of the source.
- **REJECT (everything else)** — SDG/agentic-workflow engineering papers (data generation, not
  experiments), pure AI-safety framework/policy reports, pure ML/architecture/capability papers
  with no psychological or behavioral angle.

**Present the classification + one-line reason to the user.**
- If REJECT: stop. The only override is for a framework/org report → an `entities/` page (type `framework`, `tags: [adjacent]`). SDG/agentic-engineering papers have no home and stay rejected. Only proceed on explicit user override.
- If borderline (SOURCE-METHOD vs REJECT): ask the user for a yes/no before continuing.
- Record the gate decision in the log entry.

## Pass 1 — Extract

Extract structured data following `.claude/skills/_shared/extraction-schema.md` (include the
Relevance Tier). **STOP and present the
extract to the user for review.** Wait for approval before Pass 2.

## Pass 2 — Integrate

After approval. **Every page created or updated must follow CLAUDE.md: correct `type`,
`field: machine-psychology`, `lens`, and the `> [!info] In plain terms` beginner
callout immediately after the `# Title`.**

1. **Read `wiki/index.md`** to understand current state.
2. **Create the source summary page** in `wiki/sources/` (Source Summary template; bibtex `TBD BY USER`; Relevance Tier; a `## Relevance to Machine Psychology` section — **required for SOURCE-METHOD** (you write the AI-evaluation bridge), optional for CORE (only if the source itself draws the connection)).
3. **Theories** → create/update `wiki/theories/` for each grounding theory.
4. **Paradigms** → create/update `wiki/paradigms/` for each experimental design. Link its theory, target [[safety-concepts/...]], instruments. Describe scoring/elicitation **inline** in the "Scoring / Procedure" section and validity concerns **inline** (self-contained) in the "Validity Concerns" section. Game-theoretic paradigms fill the Formal Apparatus block.
5. **Instruments** → create/update `wiki/instruments/` for inventories/benchmarks/scenarios used.
6. **Safety-concepts** → do NOT overwrite the user's content in `wiki/safety-concepts/`. You may update only the `## Detected By` back-link list when a new paradigm targets that behavior. If a brand-new behavior appears, create a fresh scaffold (empty content, structure only) and tell the user to fill it.
7. **Entities** → create/update `wiki/entities/` for authors/labs (and `type: framework` orgs on override). Keep these thin — facts that help experiment design, not biography.
8. **Questions** → create/update `wiki/questions/` for open research gaps surfaced (especially theory→new-experiment ideas).
9. **Empirical results & methodological lessons** → state a result inline on its home paradigm/instrument page (citing the source); record a methodological lesson inline in that paradigm's "Validity Concerns" section; capture a disagreement as a `> [!warning]` callout on the affected page plus a `questions/` entry if it's an open issue.
10. **Refresh the coverage map** → if any paradigm was added or re-targeted, update `wiki/crosswalk/coverage-map.md` (or note that `/map` should be run).
11. **Update `wiki/index.md`** — add/modify catalog entries.
12. **Prepend to `wiki/log.md`** (newest first — insert directly below the header comment, above the previous newest entry):
    ```
    ## [YYYY-MM-DD] ingest | [Source Title]
    - Gate: CORE | SOURCE-METHOD (+ bridge) | OVERRIDE
    - Pages created: [list]
    - Pages updated: [list]
    ```
13. **Check lint counter** — read `wiki/.meta/lint-counter` (monotonic). The hook increments after commit, so if `(counter + 1) % lint_interval == 0` suggest `/lint`.
14. **Present a diff summary** of all files created/modified.
15. **On user approval:** stage and commit:
    ```
    git add [changed files]
    git commit -m "ingest: [source title]"
    ```
