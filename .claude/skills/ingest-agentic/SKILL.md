---
name: ingest-agentic
description: Autonomous relevance-gated source ingestion into the Machine Psychology wiki. Classifies the source against the relevance gate, extracts structured data, has a review agent validate the extract, then integrates into paradigm/theory/instrument/safety-concept/source pages — no human review gate.
argument-hint: <path>
---

Ingest the source file at `$ARGUMENTS` into the wiki using a fully autonomous
workflow with agent-based review. Always follow the schema, templates, and
conventions in this wiki's `CLAUDE.md`. The relevance gate still applies — it is
just adjudicated by you instead of by the user.

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

On override, a framework/org report may become an `entities/` page (type `framework`,
`tags: [adjacent]`); SDG/agentic-engineering papers stay rejected.

**Print the classification + one-line reason.** If the verdict is REJECT, stop and
report it to the user — do not self-override. (Overrides require explicit user
instruction.) Record the gate decision in the log entry.

## Pass 1 — Extract

Extract structured data **following `.claude/skills/_shared/extraction-schema.md`**
(include the Relevance Tier). That
file defines the exact fields and the field-specific classification vocabulary —
do not invent your own format. Store the full extract text to pass to the review agent.

## Pass 1.5 — Agent Review

Spawn a review agent (using the Agent tool) as a quality gate. Pass it the full
source path, the full extract text, and `wiki/index.md`. Use this prompt template:

```
You are a review agent for a research wiki ingestion pipeline. Your job is to
validate an extract before it gets integrated into a machine-psychology wiki whose
unit of knowledge is the experimental paradigm.

## Source file
Read the source at: {source_path}

## Relevance gate (only two tiers are accepted)
- CORE — studies AI/LLM behavior using psychology/behavioral-science methods.
- SOURCE-METHOD — a psychology/game-theory experiment/method/theory repurposable to
  evaluate AI (even with no AI mention). The experiment itself must be documented on its
  own terms (no AI framing woven in); the extract must additionally include a
  "Relevance to Machine Psychology" bridge (how it could be repurposed to evaluate AI) —
  required for this tier, and clearly marked as interpretation, not a claim of the source.
- REJECT (everything else) — SDG/agentic-workflow engineering, pure AI-safety
  framework/policy reports, pure ML/architecture/capability papers with no behavioral angle.

## Wiki schema
Read: `.claude/skills/_shared/extraction-schema.md` (the extract field list) and
CLAUDE.md's "## Domain-Specific Guidance" — together they define what this field's
extract should capture.

## Current wiki state
Read: wiki/index.md

## Extract to review
{paste the full extract here}

## Review checklist
1. **Gate correctness** — Is the CORE / SOURCE-METHOD / REJECT classification right?
   Is the experiment documented faithfully on its own terms (no invented AI framing)?
2. **Completeness** — Did the extract miss theories, paradigms, instruments, claims,
   or validity considerations present in the source? Read the source and check.
3. **Accuracy** — Do the verbatim quotes actually appear in the source? Are claims
   attributed to the correct sections?
4. **Paradigm fidelity** — For each experimental design: are setup, target behavior,
   and scoring captured faithfully?
5. **Construct–measure alignment** — Does any instrument actually measure the behavior
   it claims to? Flag mismatches.
6. **Native vocabulary** — Is the source's own classification vocabulary preserved
   verbatim (e.g. "compound construct", "tactic", "threat model"), not paraphrased?

## Your output
Respond with ONE of:

VERDICT: APPROVED
[Optional notes for the integrator, e.g. "Paradigm X already exists under a
different name — integrator should update, not create."]

VERDICT: REVISE
[List each real problem: what is wrong/missing, where in the source to find the
correct information, and a suggested fix. Do NOT request revisions for stylistic
or minor wording choices.]
```

**After the review agent responds:**

- `VERDICT: APPROVED` — proceed to Pass 2. Print `"Review agent approved the extract. Proceeding to integration."` plus any notes.
- `VERDICT: REVISE` — apply the fixes, then **re-run the review agent once**. If the second review also returns REVISE, stop and present both the extract and the feedback to the user. Do not loop more than twice.

## Pass 2 — Integrate

After the review agent approves. **Every page created or updated must follow
CLAUDE.md: correct `type`, `field: machine-psychology`, `lens`, and the
`> [!info] In plain terms` beginner callout immediately after the `# Title`.**

1. **Read `wiki/index.md`** to understand current state.
2. **Source summary** → create the page in `wiki/sources/` (Source Summary template; bibtex `TBD BY USER`; Relevance Tier; a `## Relevance to Machine Psychology` section — **required for SOURCE-METHOD** (you write the AI-evaluation bridge), optional for CORE (only if the source itself draws the connection)).
3. **Theories** → create/update `wiki/theories/` for each grounding theory.
4. **Paradigms** → create/update `wiki/paradigms/` for each experimental design. Link its theory, target [[safety-concepts/...]], instruments. Describe scoring/elicitation **inline** in the "Scoring / Procedure" section and validity concerns **inline** (self-contained) in the "Validity Concerns" section. Game-theoretic paradigms fill the Formal Apparatus block.
5. **Instruments** → create/update `wiki/instruments/` for inventories/benchmarks/scenarios used.
6. **Safety-concepts** → do NOT overwrite user content in `wiki/safety-concepts/`. Update only the `## Detected By` back-link list when a new paradigm targets that behavior. If a brand-new behavior appears, create a fresh scaffold (structure only, empty content) and note it for the user to fill.
7. **Entities** → create/update `wiki/entities/` for authors/labs. Keep thin — facts that help experiment design, not biography.
8. **Questions** → create/update `wiki/questions/` for open research gaps surfaced (especially theory→new-experiment ideas).
9. **Empirical results & methodological lessons** → state a result inline on its home paradigm/instrument page (citing the source); record a methodological lesson inline in that paradigm's "Validity Concerns" section; capture a disagreement as a `> [!warning]` callout plus a `questions/` entry if it's an open issue.
10. **Refresh the coverage map** → if any paradigm was added or re-targeted, update `wiki/crosswalk/coverage-map.md` (or note that `/map` should be run).
11. **Update `wiki/index.md`** — add/modify catalog entries.
12. **Prepend to `wiki/log.md`** (newest first — insert directly below the header comment, above the previous newest entry):
    ```
    ## [YYYY-MM-DD] ingest-agentic | [Source Title]
    - Gate: CORE | SOURCE-METHOD (+ bridge)
    - Review: agent-approved (pass [1 or 2])
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
