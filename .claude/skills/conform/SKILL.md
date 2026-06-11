---
name: conform
description: Reorganize a single wiki page so its structure matches the predefined template for its page type (paradigm, theory, instrument, safety-concept, source, entity, framework, question). Reorders sections, relocates misplaced content, pins the "In plain terms" callout after the title, and sorts source references chronologically — without modifying any content. Use whenever the user asks to conform, restructure, reorganize, or fix the structure of a wiki page. Also triggers on "this page is messy", "the structure is wrong", "move the grounding up". Triggered only via /conform.
---

# Conform — Wiki Page Structure Reorganizer

Reorganize a single wiki page so its structure matches the canonical template for its
page type. This skill reorders sections, relocates misplaced content to the correct
section, keeps the beginner callout pinned right after the title, and sorts source
references chronologically — **without modifying any content**.

## Why This Matters

The wiki pages are ground truth for research. Every change must be a pure structural
reorganization — moving existing text into the right place, never rewriting,
summarizing, or deleting it. If unsure whether content belongs in a section, flag it
with an inline `<!-- TODO -->` rather than guessing.

## Invocation

```
/conform [path]
```

The path argument is **required**. Operates on exactly **one page per invocation**.

## Supported Page Types

`paradigm`, `theory`, `instrument`, `safety-concept`, `source`, `entity`,
`framework` (uses the entity template), `question`. If the page's `type` frontmatter is
none of these (e.g. `index`, `log`,
`overview`, `crosswalk`), stop and tell the user this type is freeform and not conformed.

---

## Step-by-Step Workflow

### Step 1 — Read and Parse

1. Read the target page and extract `type` from frontmatter.
2. Parse into blocks:
   - **Frontmatter** — the YAML between `---` fences.
   - **Beginner callout** — the `> [!info] In plain terms` block. It must sit
     **immediately after the `# Title`**, before any `##` section.
   - **Title** — the `# ` line.
   - **Sections** — each `## ` heading and its content up to the next `## ` or EOF.
   - **Callout blocks** (`> [!note]`, `> [!warning]`, …) — part of the section they
     appear in; they move with that section.

### Step 2 — Load the Canonical Section Order

**Do not hardcode section orders here** — read them from the matching template in the
`## Page Type Templates` section of this wiki's `CLAUDE.md`. That file is the single
source of truth; the section headings in the template (in order) define the canonical
order for the page's `type`. Note template-conditional sections:

- **Paradigm** — `## Formal Apparatus` only for game-theoretic paradigms.
- **Theory** — `## Relevance to Machine Psychology` is optional; keep it if present,
  never fabricate it.
- **Source** — `## Relevance to Machine Psychology` is required when the
  `## Relevance Tier` is SOURCE-METHOD (flag as missing — never fabricate it),
  optional for CORE.
- **Source** — the ```bibtex``` block sits immediately after the title (and after the
  beginner callout), with no section header.

### Step 3 — Identify Issues

**3a. Section order violations** — sections present but out of canonical order.

**3b. Misplaced content** — an entry that structurally belongs in another canonical
section (e.g. a `[[sources/...]]` empirical-result bullet sitting under "Target
Behaviors" when the template has an "Evidence" section; an open question phrased as a
question outside "Open Questions"). Move only when the destination is unambiguous;
otherwise flag with `<!-- TODO -->`.

**3c. Custom (non-template) sections** — any `## ` heading not in the canonical set.
Do NOT merge or delete them. Flag with an inline comment and keep them after the
canonical sections:
```markdown
<!-- TODO: Custom section "X" — not in the [type] template. Review placement. -->
```

**3d. Missing sections** — note canonical sections that are absent in the change
summary, but do **not** create empty sections. This skill reorganizes existing content;
it never generates new content.

**3e. Beginner callout** — if the `> [!info] In plain terms` callout is missing, note
it (do not fabricate one). If present but misplaced, move it to directly after the title.

### Step 4 — Sort Source References Chronologically

Sort bulleted lists by publication year (**oldest first**) **only** in sections that
are chronological evidence lists — i.e. a page's `## Evidence`, `## Evidence & Findings`,
`## Key Claims`, or `## Sources` section. Do **not** sort `## Target Behaviors`,
`## Relationships`/`## Related Behaviors`, `## Open Questions`, or any semantically
ordered section.

Determine year from the source wikilink filename: `[[sources/author-et-al-YYYY]]` → `YYYY`.
If unparseable, read the source page's `date_created` frontmatter. If still unknown,
place the entry last and add `<!-- TODO: could not determine publication year -->`.
Sort each bullet with all its continuation lines/sub-bullets as one unit; when a bullet
cites multiple sources, sort by the first. Bullets citing no source keep their relative
order, placed after source-referencing bullets.

### Step 5 — Build the Restructured Page

Assemble in order: frontmatter (with `date_modified` = today) → title → beginner
callout → (bibtex block for sources) → canonical sections in template order (with
relocated content and chronological sorting applied, callouts kept with their section) →
custom sections (original relative order, each TODO-flagged) → any unclassifiable
remainder (TODO-flagged).

### Step 6 — Change Summary + Confirmation

Present a concise report before writing:
```
## Conform Report — [page path]  (type: [type])
### Section Reordering        — [moves, or "none"]
### Content Relocated         — [moves, or "none"]
### Beginner Callout          — [ok / moved / MISSING]
### Chronological Sorting     — [sections reordered, or "none"]
### Custom Sections Flagged   — [list, or "none"]
### Missing Sections          — [list, or "none"]
```
Then ask, with AskUserQuestion:
> Options: "Apply changes" / "Show full restructured page first" / "Cancel".

If "Show full restructured page first", output the complete page, then ask again.

### Step 7 — Apply

On approval, write the restructured page with Edit/Write (`date_modified` already set
to today). On cancel, do nothing and report that no changes were made.

---

## Critical Safety Rules (non-negotiable)

1. **Never modify content.** Move text exactly as-is, character for character. No
   rewording, summarizing, correcting, or deleting.
2. **One page per invocation.**
3. **Preview before writing.** Always show the report and get explicit approval.
4. **When in doubt, flag — don't move.** Add a `<!-- TODO -->` explaining the ambiguity.
5. **Never fabricate.** Do not invent a beginner callout, a missing section's content,
   or a `## Relevance to Machine Psychology` block.
6. **Preserve all formatting** (bold, italics, wikilinks, code/callout blocks, blank
   lines) within content blocks.
