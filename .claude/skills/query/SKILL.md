---
name: query
description: Answer questions using the Machine Psychology wiki as a knowledge base. Synthesizes answers from paradigm, theory, safety-concept, instrument, and source pages with citations. Saves output to wiki/output/queries/.
argument-hint: <question>
---

Answer the following question using the wiki as your knowledge base:

**Question:** $ARGUMENTS

## Workflow

1. **Read `wiki/index.md`** to identify pages relevant to the question. For coverage
   or "what behaviors lack an experiment" questions, also read
   `wiki/crosswalk/coverage-map.md`.

2. **Read the relevant wiki pages.** Prioritize by what the question is about:
   - **Paradigms** (`wiki/paradigms/`) — for "how would you test X" / experiment-design questions, and for rigor/reliability/contamination/"does the test work" questions (validity concerns live inline on each paradigm).
   - **Theories** (`wiki/theories/`) — for grounding and "what predicts X" questions.
   - **Safety-concepts** (`wiki/safety-concepts/`) — for "what is behavior X / how is it detected" questions.
   - **Instruments** (`wiki/instruments/`) — for inventory/benchmark/scenario details.
   - **Sources** (`wiki/sources/`) — for primary-source details and claims.

   **Cross-check rule:** Do not trust a single page's relational metadata
   ("Detects:", "Grounded in:", "Subsumes:") as the final word. When the question
   involves a relationship between pages, read the cited **source** summaries to
   verify the claimed hierarchy — different sources may frame or invert it. Surface
   disagreements (often captured in `> [!warning]` callouts) rather than flattening them.

3. **Synthesize an answer** that:
   - Cites sources with inline wikilinks: `[[sources/source-name]]` (and links to the
     relevant paradigm/theory pages).
   - Distinguishes well-supported claims from contested ones.
   - Notes wiki gaps or where further investigation is needed (e.g. a behavior with no
     paradigm yet, per the coverage map).

4. **Save the answer** as markdown in `wiki/output/queries/` (create the dir if needed):
   - File name: kebab-case from the question (e.g. `how-is-deception-detected.md`).
   - Frontmatter:
     ```yaml
     ---
     type: question
     field: machine-psychology
     query: "<the original question>"
     tags: []
     date_created: YYYY-MM-DD
     date_modified: YYYY-MM-DD
     ---
     ```

5. **Update `wiki/output/output_index.md`** — add the entry under **Queries**. Create
   the file if missing, using this format:
   ```markdown
   # Output Index

   ## Queries
   - [[output/queries/file-name]] — one-line description
   ```

6. **Do NOT auto-commit.** Leave the output file and index uncommitted for the user to review.

## Answer Format

Structure the answer with clear sections. Use Obsidian wikilinks for all references.
If the question requires comparing sources or paradigms, use a markdown table.
