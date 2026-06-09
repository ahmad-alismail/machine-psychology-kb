---
name: compare
description: Generate a comparison table for a topic using wiki sources. Creates a new page in wiki/output/comparisons/ highlighting meaningful differences across sources.
argument-hint: <topic>
disable-model-invocation: true
---

Generate a comparison table for the following topic:

**Topic:** $ARGUMENTS

## Workflow

1. **Read `wiki/index.md`** to identify pages relevant to the comparison topic.

2. **Read the relevant wiki pages** — typically concept pages, source summaries, or methods pages depending on what's being compared.

3. **Generate a comparison table** in markdown format:
   - Rows or columns should represent the items being compared
   - Include source attributions as wikilinks
   - Choose dimensions that highlight meaningful differences, not trivial ones
   - Focus on the dimensions most relevant to the wiki's central research question

4. **Add analysis** below the table explaining:
   - Key patterns or clusters
   - Notable disagreements
   - Gaps where data is missing

5. **File the comparison** as a new page in `wiki/output/comparisons/` (create the directory if it doesn't exist) with appropriate frontmatter:
   ```yaml
   ---
   type: comparison
   comparison: "<the original topic>"
   tags: []
   date_created: YYYY-MM-DD
   date_modified: YYYY-MM-DD
   ---
   ```

6. **Update `wiki/output/output_index.md`** — add the new entry under the **Comparisons** section. Create the file if it doesn't exist, using this format:
   ```markdown
   # Output Index

   ## Queries

   ## Debates

   ## Comparisons
   - [[output/comparisons/file-name]] — one-line description
   ```

7. **Do NOT auto-commit.** Leave the output file and index uncommitted for the user to review.
