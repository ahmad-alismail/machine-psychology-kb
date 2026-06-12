---
name: lint
description: Run a comprehensive health check on the Machine Psychology wiki. Finds orphan pages, broken wikilinks, missing "In plain terms" callouts, incomplete frontmatter, ungrounded paradigms, empty safety-concept back-links, sources missing a Relevance Tier, an out-of-sync index or coverage map, and any reappearance of excluded directories.
---

Run a comprehensive health check on the wiki and report findings. The wiki is
**paradigm-anchored**: paradigms cite theories, target safety-concepts, and carry
their validity concerns inline. The checks below enforce that schema (see
`CLAUDE.md` for the page templates, frontmatter schema, and exclusion policy).

## Checks

### 1. Orphan Pages
Pages with **no inbound wikilinks** from any other page. Exclude `index.md`, `log.md`,
`overview.md`, and `crosswalk/coverage-map.md` (these are entry points, not orphans).

### 2. Broken Wikilinks
Scan every page for `[[folder/page]]` links and verify the target file exists in
`wiki/`. Report each broken link with its source page. **Aliased wikilinks are banned**
in this wiki — any link that places display text after a vertical bar inside the
double brackets is itself a violation: flag it for rewording so the link text equals
the target.

### 3. Missing "In plain terms" Callout
Every wiki page **must** open with a `> [!info] In plain terms` callout immediately
after the `# Title` (CLAUDE.md requirement). Flag any page that lacks it.

### 4. Frontmatter Completeness
For every page, check required keys: `type`, `field` (must equal `machine-psychology`),
`lens`, `date_created`, `date_modified`. `lens` is required on **every** page (`na`
where not applicable; substantive values `psychological | game-theoretic | mixed` are
expected on paradigms and theories). Flag missing or malformed keys.

### 5. Paradigm Grounding
Every page in `wiki/paradigms/` must link **at least one** `[[theories/...]]` (its
theoretical grounding) and **at least one** `[[safety-concepts/...]]` (its target
behavior). Flag paradigms that are ungrounded or target no behavior — these break the
theory→paradigm→behavior chain.

### 6. Safety-Concept Back-links
Check every page in `wiki/safety-concepts/`. Flag any whose `## Detected By` section is
empty or absent — these are behaviors with no experiment (a research gap to record),
and also signal the coverage map may be stale.

### 7. Source Relevance Tier
Check every page in `wiki/sources/`. Each must declare a `## Relevance Tier`
(CORE or SOURCE-METHOD). Flag any source missing the tier. On **SOURCE-METHOD**
sources, the `## Relevance to Machine Psychology` bridge section is **required** —
flag its absence. On CORE sources it is optional — do not flag.

### 8. Sources Not Cross-Referenced
For each source, verify it is cited (`[[sources/...]]`) by at least one paradigm,
theory, instrument, or entity page. Flag isolated sources.

### 9. Entity Pages Without Sources
Check every page in `wiki/entities/`. Flag any that don't link to at least one source.

### 10. Index Out of Sync
Compare files on disk under `wiki/` against entries in `wiki/index.md`. Report pages
that exist but are missing from the index, and index entries pointing to missing files.

### 11. Coverage Map Out of Sync
Compare the paradigms (columns) and safety-concepts (rows) in
`wiki/crosswalk/coverage-map.md` against the actual files in `wiki/paradigms/` and
`wiki/safety-concepts/`. If any paradigm or behavior is missing from the map (or the
map lists one that no longer exists), recommend running `/map`.

### 12. Pages in Unexpected Locations
Every page under `wiki/` should live in one of the canonical directories —
`paradigms/`, `theories/`, `safety-concepts/`, `instruments/`,
`crosswalk/`, `sources/`, `entities/`, `questions/`, `output/` — or be a top-level
`index.md` / `log.md` / `overview.md`. Flag any page outside this set (a reappearing
`validity/` directory now counts as drift): it signals
structural drift (a new directory was created that the schema in CLAUDE.md does not
define). Also flag any page whose `type` frontmatter is not in the schema's allowed set.

## Reporting

```
## Lint Report — [YYYY-MM-DD]

### Summary
- Orphan pages: N
- Broken wikilinks: N
- Missing "In plain terms": N
- Frontmatter issues: N
- Ungrounded paradigms: N
- Empty safety-concept back-links: N
- Source tier issues: N
- ... (one line per check)

### Details
[grouped by check, with specific pages and suggested fixes]
```

## Fixing

After presenting the report, offer to fix each category. Safe auto-fixes: adding
missing index entries, repairing obviously-broken wikilinks (typo'd paths),
back-filling `date_modified`. **Do not** invent page content to satisfy a check
(e.g. never fabricate a definition or a theory link) — flag those for the user.
After any fix, update `wiki/index.md` if affected.

## Logging (always, even with 0 fixes)

1. **Prepend to `wiki/log.md`** (newest first — insert directly below the header comment):
   ```
   ## [YYYY-MM-DD] lint | [N] issues found, [M] fixed
   ```
2. **Commit all changes** (at minimum the log entry):
   ```
   git commit -m "lint: [N] issues found, [M] fixed"
   ```

> [!note] The lint counter (`wiki/.meta/lint-counter`) is monotonically increasing and
> never resets. Lint is suggested every 10th ingest (when the counter is divisible by
> 10). The log entry documents when lint was run.
