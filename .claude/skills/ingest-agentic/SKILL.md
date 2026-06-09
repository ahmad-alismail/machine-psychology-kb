---
name: ingest-agentic
description: Autonomous two-pass source ingestion. Extracts structured data, has a review agent validate the extract, then integrates into the wiki — no human review gate.
argument-hint: <path>
---

Ingest the source file at `$ARGUMENTS` into the wiki using a fully autonomous two-pass workflow with agent-based review.

## Pass 1 — Extract

1. Read the source markdown file at the path provided.
2. Extract structured data **following the `## Extraction Schema` section of this wiki's `CLAUDE.md`**. That section defines the exact fields to capture and the field-specific classification vocabulary to use — do not invent your own format.
3. Store the full extract text — you will pass it to the review agent next.

## Pass 1.5 — Agent Review

Spawn a review agent (using the Agent tool) with the following prompt. Pass it:
- The **full source file path** so it can read the original source
- The **full extract text** you produced above
- The **wiki index** (`wiki/index.md`) so it knows current wiki state

The review agent's job is to act as a quality gate. Use this exact prompt template (filling in the placeholders):

```
You are a review agent for a research wiki ingestion pipeline. Your job is to
validate an extract before it gets integrated into the wiki.

## Source file
Read the source at: {source_path}

## Wiki schema
Read: CLAUDE.md — specifically the "## Extraction Schema" and
"## Domain-Specific Guidance" sections, which define what this field's extract
should capture.

## Current wiki state
Read: wiki/index.md

## Extract to review
{paste the full extract here}

## Review checklist
Evaluate the extract against these criteria:

1. **Completeness** — Are there concepts, claims, or methodology details in the
   source that the extract missed? Read the source yourself and check.
2. **Accuracy** — Do the verbatim quotes actually appear in the source? Are
   claims attributed to the correct sections?
3. **Classification consistency** — Check wiki/concepts/ for existing concept
   pages. Does the extract's classification of concepts conflict with or
   duplicate existing entries? Flag these — they aren't errors, but the
   integrator needs to know.
4. **Relationship coverage** — Are important relationships between concepts
   captured? Are any asserted relationships not actually supported by the source?
5. **Fidelity** — Do paraphrased claims preserve the original meaning, scope,
   confidence level, definitions, and distinctions? Flag any instance where the
   extract exaggerates, simplifies away key nuance, or adds claims the source
   does not actually make. Read the source carefully to check.

## Your output
Respond with ONE of the following:

### If approved:
VERDICT: APPROVED

[Optional: minor notes for the integrator, e.g., "Concept X already exists in
the wiki under a different name — integrator should merge, not create new."]

### If revisions needed:
VERDICT: REVISE

[List each specific issue. For each issue state:]
- What is wrong or missing
- Where in the source to find the correct information
- Suggested fix

Only request revisions for real problems — missing concepts, wrong quotes,
unsupported claims, or missed methodology. Do NOT request revisions for
stylistic preferences or minor wording choices.
```

**After the review agent responds:**

- If `VERDICT: APPROVED` — proceed to Pass 2. Print a brief note to the user: `"Review agent approved the extract. Proceeding to integration."` Include any notes the reviewer left.
- If `VERDICT: REVISE` — apply the requested fixes to the extract, then **re-run the review agent once more** with the revised extract. If the second review also returns `REVISE`, stop and present both the extract and the feedback to the user for manual resolution. Do not loop more than twice.

## Pass 2 — Integrate

After the review agent approves the extract:

1. **Read `wiki/index.md`** to understand the current wiki state.

2. **Create source summary page** in `wiki/sources/` following the Source Summary template in CLAUDE.md.

3. **For each concept mentioned:**
   - Check if a concept page already exists in `wiki/concepts/`.
   - If it exists: read it. Update with new definitions, claims, and evidence. Add this source to references.
   - If new: create a concept page in `wiki/concepts/` following the Concept Page template.
   - If the new source's definition or classification **contradicts** an existing one: add a `> [!warning]` callout on the concept page pointing to a debate page, and create or update the corresponding debate page in `wiki/debates/`.

4. **For each author/lab mentioned:**
   - Create or update an entity page in `wiki/entities/`.

5. **Update evidence maps** in `wiki/evidence/` if this source's claims strengthen or weaken existing evidence for tracked claims.

6. **Update methods pages** in `wiki/methods/` if the source introduces a new methodology or provides a new application of an existing one.

7. **Add key findings** to `wiki/findings/` if the source reports novel empirical or theoretical findings.

8. **Note open questions** surfaced by this source — create or update pages in `wiki/questions/`.

9. **Update `wiki/index.md`** — add entries for all new pages, update summaries for modified pages.

10. **Append to `wiki/log.md`:**
    ```
    ## [YYYY-MM-DD] ingest-agentic | [Source Title]
    - Source: [filename]
    - Review: agent-approved (pass [1 or 2])
    - Pages created: [list]
    - Pages updated: [list]
    ```

11. **Check lint counter** — read the value from `wiki/.meta/lint-counter` (monotonically increasing). The counter will be incremented by the hook after the commit, so check if `(counter + 1)` is divisible by `lint_interval` (default: 10) with no remainder. If yes, suggest running `/lint`. Do NOT count from the log — the counter file is the authoritative source.

12. **Present a diff summary** to the user showing all files created and modified.

13. **On user approval:** stage all changed files and commit:
    ```
    git add [list of changed files]
    git commit -m "ingest: [source title]"
    ```
