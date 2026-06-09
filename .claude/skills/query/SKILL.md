---
name: query
description: Answer questions using the wiki as a knowledge base. Synthesizes answers from concept pages, debates, evidence maps, and source summaries with citations. Saves output to wiki/output/queries/.
argument-hint: <question>
---

Answer the following question using the wiki as your knowledge base:

**Question:** $ARGUMENTS

## Workflow

1. **Read `wiki/index.md`** to identify pages relevant to the question.

2. **Read the relevant wiki pages.** Prioritize:
   - Concept pages directly related to the question
   - Debate pages if the question involves disagreements
   - Evidence maps if the question is about the strength of claims
   - Source summaries for primary source details
   - Comparison tables if a comparison already exists

   **Cross-check rule:** When the question involves relationships between concepts, do not trust concept-page relational metadata ("Instance of:", "Subsumes:", "Enables:") as the final word. Read the source summary pages for key cited sources to verify the claimed hierarchy — different sources may frame the same relationship differently or invert it.

3. **Synthesize an answer** that:
   - Cites sources using inline wikilinks: `[[sources/source-name]]`
   - Distinguishes between well-supported claims and contested ones
   - Notes where the wiki has gaps or where further investigation is needed
   - Surfaces relevant debates or contradictions

4. **Save the answer** as a markdown file in `wiki/output/queries/` (create the directory if it doesn't exist):
   - File name: kebab-case derived from the question (e.g., `how-does-concept-a-relate-to-concept-b.md`)
   - Frontmatter:
     ```yaml
     ---
     type: question
     query: "<the original question>"
     tags: []
     date_created: YYYY-MM-DD
     date_modified: YYYY-MM-DD
     ---
     ```

5. **Update `wiki/output/output_index.md`** — add the new entry under the **Queries** section. Create the file if it doesn't exist, using this format:
   ```markdown
   # Output Index

   ## Queries
   - [[output/queries/file-name]] — one-line description

   ## Debates

   ## Comparisons
   ```

6. **Do NOT auto-commit.** Leave the output file and index uncommitted for the user to review.

## Answer Format

Structure your answer with clear sections. Use Obsidian wikilinks for all references. If the question requires comparing sources, use a markdown table.
