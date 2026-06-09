---
name: debate
description: Create or update a debate page for a conceptual disagreement. Identifies opposing positions across sources with evidence and synthesis. Saves output to wiki/output/debates/.
argument-hint: <topic>
disable-model-invocation: true
---

Create or update a debate page for the following disagreement:

**Topic:** $ARGUMENTS

## Workflow

1. **Read `wiki/index.md`** to check if a debate page already exists for this topic or a closely related one.

2. **Read relevant pages:**
   - Concept pages related to the disagreement
   - Source summaries that take positions on the topic
   - Existing evidence maps that bear on the claim

3. **If no debate page exists**, create one in `wiki/output/debates/` (create the directory if it doesn't exist) following the Debate Page template in CLAUDE.md:
   - State the disagreement clearly
   - Identify Position A and Position B (or more positions if applicable)
   - For each position: list the sources, arguments, and evidence
   - Write a synthesis assessing which position is better supported
   - Frontmatter:
     ```yaml
     ---
     type: debate
     debate: "<the original topic>"
     tags: []
     date_created: YYYY-MM-DD
     date_modified: YYYY-MM-DD
     ---
     ```

4. **If a debate page already exists** (in `wiki/debates/` or `wiki/output/debates/`), update it:
   - Add any new sources or evidence
   - Revise the synthesis if the balance of evidence has shifted

5. **Update affected concept pages:**
   - Add or update `> [!warning] Terminological Disagreement` callout blocks
   - Link to the debate page: `See [[debates/debate-page-name]]` or `See [[output/debates/debate-page-name]]` as appropriate

6. **Update `wiki/output/output_index.md`** — add the new entry under the **Debates** section. Create the file if it doesn't exist, using this format:
   ```markdown
   # Output Index

   ## Queries

   ## Debates
   - [[output/debates/file-name]] — one-line description

   ## Comparisons
   ```

7. **Do NOT auto-commit.** Leave the output file and index uncommitted for the user to review.
