---
name: lint
description: Run a comprehensive wiki health check. Finds orphan pages, broken wikilinks, missing definitions, out-of-sync index, and other structural issues.
---

Run a comprehensive health check on the wiki and report findings.

## Checks

### 1. Orphan Pages
Scan all wiki pages. Identify pages with **no inbound wikilinks** from other pages (excluding index.md and log.md). Orphan pages are disconnected from the knowledge graph.

### 2. Broken Wikilinks
Scan all wiki pages for `[[...]]` wikilinks. Check that each target page exists. Report any broken links.

### 3. Concept Pages Missing Definitions
Check every page in `wiki/concepts/`. Flag any that lack a `## Definitions` section or have an empty one.

### 4. Sources Not Cross-Referenced
Check every page in `wiki/sources/`. For each source, verify it is referenced by at least one concept, entity, or other wiki page. Flag sources that exist in isolation.

### 5. Index Out of Sync
Compare the pages listed in `wiki/index.md` against the actual files in `wiki/`. Report:
- Pages that exist on disk but are missing from the index
- Index entries pointing to pages that no longer exist

### 6. Missing Debate Pages
Scan concept pages for `> [!warning]` callout blocks referencing debates. Check that the referenced debate page exists in `wiki/debates/`.

### 7. Untracked Concepts
Scan all source summary pages for concept wikilinks. Check that each referenced concept has its own page in `wiki/concepts/`. Flag concepts mentioned in sources but lacking a dedicated page.

### 8. Open Questions Addressable
Review pages in `wiki/questions/`. For each open question, check if any existing source pages might address it (based on topics and concepts covered). Flag questions that may already be answerable.

### 9. Entity Pages Without Sources
Check every page in `wiki/entities/`. Flag any that don't link to at least one source page.

## Reporting

Present findings organized by check, with counts and specifics:

```
## Lint Report — [YYYY-MM-DD]

### Summary
- Orphan pages: N
- Broken wikilinks: N
- ...

### Details
[grouped by check, with specific pages and suggested fixes]
```

## Fixing

After presenting the report, offer to fix each category of issues. For each fix:
1. Make the change
2. Update `wiki/index.md` if affected

## Logging (always, even with 0 fixes)

After the lint run completes (whether fixes were applied or not):

1. **Append to `wiki/log.md`:**
   ```
   ## [YYYY-MM-DD] lint | [N] issues found, [M] fixed
   ```
2. **Commit all changes** (at minimum the log entry):
   ```
   git commit -m "lint: [N] issues found, [M] fixed"
   ```

> [!note] The lint counter (`wiki/.meta/lint-counter`) is monotonically increasing and never resets. Lint is suggested every 10th ingest (when counter is divisible by 10). The log entry documents when lint was run.
