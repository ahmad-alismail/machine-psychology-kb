---
name: conform
description: Reorganize a single wiki page so its structure matches the predefined template for its page type (concept, source). Reorders sections, relocates misplaced content, and sorts source references chronologically — without modifying any content. Use this skill whenever the user asks to conform, restructure, reorganize, or fix the structure of a wiki page. Also triggers on "this page is messy", "the structure is wrong", "move the definitions up", or similar structural complaints about wiki pages. Triggered only via /conform.
---

# Conform — Wiki Page Structure Reorganizer

Reorganize a single wiki page so its structure matches the predefined template. This skill reorders sections, relocates misplaced content to the correct section, and sorts source references chronologically — **without modifying any content**.

## Why This Matters

The wiki pages are ground truth for research. Every change must be a pure structural reorganization — moving existing text into the right place, never rewriting, summarizing, or deleting it. If you are unsure whether a piece of content belongs in a particular section, flag it with an inline TODO rather than guessing.

## Invocation

```
/conform [path]
```

The path argument is **required**. This skill operates on exactly **one page per invocation**. Never process multiple pages in a single run.

**Examples:**
- `/conform wiki/concepts/some-concept.md`
- `/conform wiki/sources/smith-et-al-2024.md`

## Supported Page Types

Currently supports:
- **concept** — pages in `wiki/concepts/`
- **source** — pages in `wiki/sources/`

If the page's `type` frontmatter field is not one of these, stop and tell the user this page type is not yet supported.

---

## Step-by-Step Workflow

### Step 1: Read and Parse

1. Read the target page.
2. Extract the `type` field from YAML frontmatter.
3. Parse the page into logical blocks:
   - **Frontmatter** — the YAML between `---` fences
   - **Pre-heading content** — anything between frontmatter and the first `# ` title (e.g., top-level callout blocks)
   - **Title** — the `# ` line
   - **Sections** — each `## ` heading and everything below it until the next `## ` heading or end of file
   - **Callout blocks** — `> [!note]`, `> [!warning]`, `> [!tip]` etc. Treat these as part of the section they appear in. When a section moves, its callouts move with it.

### Step 2: Determine Target Structure

Load the canonical section order for the page type:

#### Concept Page — Canonical Section Order:
1. `## Definitions`
2. `## Classification`
3. `## Relationships`
4. `## Evidence Summary`
5. `## Open Questions`

#### Source Page — Canonical Section Order:
1. (bibtex code block — immediately after the title, no section header)
2. `## Key Claims`
3. `## Methodology`
4. `## Concepts Referenced`
5. `## Relationship to Other Sources`
6. `## Limitations`

### Step 3: Identify Issues

Compare the page's actual structure against the canonical order. Build a list of issues:

#### 3a. Section Order Violations
Flag any section that appears out of the canonical order. For example, if `## Open Questions` appears before `## Evidence Summary`, that is a violation.

#### 3b. Misplaced Content
Scan each section's content for items that structurally belong in a different section. Use these identification patterns:

**Definition bullet** (belongs in `## Definitions`):
- Starts with `- **[[sources/` followed by `]]**:` or `]]:**`
- Contains a quoted definition (text in `"..."`)
- Contains `classified as:` or `— classified as:`
- All three signals together are definitive. Two out of three is strong evidence. Flag with TODO if only one signal is present.

**Evidence entry** (belongs in `## Evidence Summary`):
- Starts with `- **[[sources/` or `- [[sources/`
- Describes empirical findings, experimental results, or methodology
- Does NOT contain `classified as:` (that makes it a definition)
- References like `- Referenced by:` are evidence entries

**Relationship entry** (belongs in `## Relationships`):
- Starts with `- Related to:`, `- Component of:`, `- Enables:`, `- Predicted by:`, `- Requires:`, `- Subsumes:`, `- Mitigated by:`, `- May employ:`, `- Formally grounded by:`, `- Discussed in:`, or similar relational prefixes
- Contains wikilinks to concepts

**Open Question entry** (belongs in `## Open Questions`):
- Starts with `- [[questions/` or is phrased as a question (starts with `- Can`, `- Could`, `- How`, `- Why`, `- Does`, `- Is`, `- Will`, `- What`)
- Located outside the `## Open Questions` section

#### 3c. Custom Sections
Any `## ` heading that does not match the canonical section names for this page type is a **custom section**. Do NOT move or merge custom sections wholesale. Flag them with an inline HTML comment:

```markdown
<!-- TODO: Custom section "Some Nonstandard Heading" — does not match any template section. Review whether this content belongs in Evidence Summary or should remain as a standalone section. -->
## Some Nonstandard Heading (Smith et al. 2024)
```

#### 3e. Scan Custom Section Content for Misplaced Entries
After flagging custom sections (3c), scan the **individual entries** inside each custom section using the same identification patterns from Step 3b. Custom sections are NOT opaque blocks — they may contain definition bullets, evidence entries, relationship entries, or open-question entries that belong in canonical sections.

For each entry inside a custom section that matches a pattern from 3b:
1. Mark it as a **custom-section extraction candidate** — these require explicit user confirmation (see Step 6).
2. Track which custom section it came from and which canonical section it should move to.
3. If extracting all matched entries from a custom section would leave it with **no remaining content** (only the heading and whitespace), mark the custom section heading for removal.
4. If the custom section would still retain some content after extraction, keep the TODO comment from 3c on the remaining section.

#### 3d. Missing Sections
If a canonical section is entirely absent from the page, note it in the change summary but do NOT create an empty section. The skill reorganizes existing content — it does not generate new content.

### Step 4: Sort Source References Chronologically

Sort bulleted lists that reference sources by publication year (**oldest first**), but **only in these sections**:

- **`## Definitions`** — sort all definition entries chronologically
- **`## Evidence Summary`** — sort all evidence entries chronologically

Do **NOT** sort entries in `## Relationships`, `## Open Questions`, `## Classification`, or any custom sections. These sections are organized by semantic structure (relationship type, conceptual priority) rather than chronology, and sorting by year would destroy their logical grouping.

**How to determine publication year:**

1. **Parse from filename**: Extract the 4-digit year from source wikilinks. Pattern: `[[sources/author-et-al-YYYY]]` → year is `YYYY`. Examples:
   - `[[sources/smith-et-al-2021]]` → 2021
   - `[[sources/jones-2008]]` → 2008
   - `[[sources/lab-2026-some-report]]` → 2026

2. **Fallback — read source frontmatter**: If no year is parseable from the filename, read the referenced source page's `date_created` frontmatter field and extract the year from it.

3. **If year is still unknown**: Place the entry at the end of the sorted list and add `<!-- TODO: Could not determine publication year for this source -->`.

**Sorting rules:**
- Sort the entire bullet and all its continuation lines (indented text, sub-bullets, callout blocks that follow it) as one unit.
- When multiple sources appear in the same bullet, sort by the **first** source referenced.
- Bullets that don't reference any source stay in their original relative position, placed after all source-referencing bullets.

### Step 5: Build Restructured Page

Assemble the restructured page in this order:

1. Frontmatter (with `date_modified` updated to today's date)
2. Pre-heading content (unchanged)
3. Title
4. Canonical sections in order, with:
   - Relocated content moved to the correct section
   - Source references sorted chronologically within each section
   - Callouts kept with their parent section
5. Custom sections (in their original relative order, each preceded by a TODO comment)
6. Any remaining content that could not be classified (with TODO comments)

### Step 6: Generate Change Summary

Before applying changes, present a concise change summary to the user. Format:

```
## Conform Report — [page path]

### Section Reordering
- Moved "## Open Questions" from position 4 to position 5
- Moved "## Evidence Summary" from position 5 to position 4

### Content Relocated
- Moved definition bullet (sources/smith-et-al-2021) from Evidence Summary → Definitions
- Moved relationship entry "Discussed in: ..." from Evidence Summary → Relationships

### Chronological Sorting
- Definitions: reordered 12 entries (was: ngo-2022, ji-2024, jones-2008, ... → now: jones-2008, ..., ngo-2022, ji-2024)
- Evidence Summary: reordered 8 entries

### Custom Sections Flagged
- "Some Nonstandard Heading" — marked with TODO comment

### Extractions from Custom Sections (requires confirmation)
List each entry inside a custom section that matched a canonical pattern (from Step 3e):

- ⚠️ EXTRACT definition bullet (sources/smith-et-al-2024) from custom section "Some Nonstandard Heading" → Definitions

If extraction would empty a custom section entirely:
- ⚠️ Custom section "Some Nonstandard Heading" will be REMOVED (all content extracted to canonical sections)

If no custom-section extractions are needed, write: "None".

### Missing Sections
- None (or list any missing canonical sections)

### No Changes Needed
- Classification: already correctly positioned, no source references to sort
```

After presenting the summary, **ask the user for confirmation** before writing any changes.

**If the report includes custom-section extractions**, use a **two-stage confirmation**. First ask about extractions specifically using the AskUserQuestion tool:

```
"The report includes content that would be extracted from custom sections (marked with ⚠️ above).
These entries matched canonical section patterns but lived inside non-standard sections.
Should I extract them?"
Options: "Extract all" / "Skip extractions (apply other changes only)" / "Let me pick which ones" / "Cancel everything"
```

- **"Extract all"** — proceed to the general confirmation prompt below.
- **"Skip extractions (apply other changes only)"** — remove all custom-section extractions from the plan, keep TODO comments on the custom sections, then proceed to the general confirmation.
- **"Let me pick which ones"** — list each extraction candidate individually and let the user accept/reject each one, then proceed.
- **"Cancel everything"** — stop. No changes applied.

**Then** (or if there are no custom-section extractions), ask for general confirmation:

```
"Here is the conformance report for [page]. Should I apply these changes?"
Options: "Apply changes" / "Show full restructured page first" / "Cancel"
```

If the user selects "Show full restructured page first", output the complete restructured page content, then ask again whether to apply.

### Step 7: Apply Changes

On user approval:
1. Write the restructured page using the Edit or Write tool.
2. The `date_modified` field in frontmatter should already be set to today's date in the restructured content.

If the user cancels, do nothing. Report that no changes were made.

---

## Critical Safety Rules

These rules are non-negotiable:

1. **Never modify content.** Do not reword, summarize, expand, correct, or delete any text. Move text exactly as-is, character for character.
2. **One page per invocation.** Never process multiple pages. If the user passes multiple paths, process only the first and tell them to run again for the rest.
3. **Preview before writing.** Always show the change summary and get explicit approval before modifying the file.
4. **When in doubt, flag — don't move.** If you are uncertain whether content belongs in a particular section, leave it where it is and add a `<!-- TODO -->` comment explaining the ambiguity.
5. **Preserve all whitespace and formatting** within content blocks (bold, italics, wikilinks, code blocks, callout syntax, blank lines between entries).
6. **Preserve pre-heading content.** Callout blocks or notes that appear before the first `## ` section heading stay in place.
