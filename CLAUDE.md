<!--
═══════════════════════════════════════════════════════════════════════════
  RESEARCH WIKI TEMPLATE — ENGINE SCHEMA
  This file is the domain-agnostic "engine". To stand up a new field wiki,
  fill in every block marked  >>> CONFIGURE <<<  below, then delete this
  comment banner. See CONFIGURE.md for the full checklist.
═══════════════════════════════════════════════════════════════════════════
-->

# >>> CONFIGURE: [Field Name] — Research Wiki

## Project Overview

<!--
>>> CONFIGURE <<<
Describe the field this wiki investigates and the research question it serves.
Replace the placeholder paragraph below. Keep it to 3-6 sentences: what the
field is, what tension or gap this wiki is trying to surface, and what a
"good" structured knowledge base of it looks like.
-->

This wiki investigates **[FIELD]** and the structural relationships between its
core concepts. [State the research problem — e.g., the field lacks a unified
framework; the same concept is classified differently across sources; etc.]
This wiki builds a structured, interlinked knowledge base that surfaces these
issues and works toward a coherent account.

### Three-Layer Architecture

- **Raw sources** (`raw/`) — immutable source documents. The LLM reads from these but never modifies them.
- **The wiki** (`wiki/`) — LLM-generated and maintained markdown files. The LLM owns this layer entirely.
- **The schema** (`CLAUDE.md` + `.claude/skills/`) — conventions and workflows that govern how the LLM operates.

## Directory Layout

```
raw/
  articles/       # web-clipped markdown (via Obsidian Web Clipper)
  papers/         # PDFs and marker-converted markdown
  assets/         # downloaded images

wiki/
  index.md        # content catalog — read this first to navigate the wiki
  log.md          # chronological append-only record of operations
  overview.md     # high-level synthesis (evolves over time)
  concepts/       # one page per concept
  sources/        # one summary page per ingested source
  entities/       # authors, labs, research groups
  debates/        # dedicated disagreement/ambiguity pages
  evidence/       # evidence maps for specific claims
  methods/        # evaluation methods and methodologies
  findings/       # key findings across sources
  questions/      # open questions and research gaps
  comparisons/    # generated comparison tables
  output/         # query/compare/debate outputs (uncommitted until reviewed)
```

## Conventions

- **File naming**: kebab-case, no spaces (e.g., `theory-of-mind.md`, `smith-et-al-2024.md`)
- **Wikilinks**: Obsidian format — `[[concepts/some-concept]]` or `[[concepts/some-concept|Display Name]]`
- **Citations**: inline wikilinks to source pages — `[[sources/smith-et-al-2024]]`
- **Raw sources are immutable**: never modify files in `raw/`
- **Wiki pages are LLM-owned**: the LLM creates, updates, and maintains all files in `wiki/`
- **Auto-commit**: after each ingest, commit all changes with message `"ingest: [source title]"`

## Frontmatter Schema

Every wiki page uses this minimal frontmatter:

```yaml
---
type: concept | source | entity | debate | evidence | method | finding | question | comparison
field: [field-slug]    # e.g. machine-psychology — enables clean graph filtering if wikis are merged later
tags: []
date_created: YYYY-MM-DD
date_modified: YYYY-MM-DD
---
```

> [!note] The `field:` key
> Keep `field:` identical on every page in this wiki (set it once during setup).
> It costs nothing now and makes a future cross-field merge cheap: a merged
> Obsidian vault can color-group the graph by `field:` so each field stays a
> legible cluster instead of a hairball.

## Extraction Schema

<!--
═══════════════════════════════════════════════════════════════════════════
  >>> CONFIGURE — THIS IS THE MOST IMPORTANT BLOCK TO CUSTOMIZE <<<
  The ingest skills read THIS section to know what to pull out of each source.
  The block below is a generic starting point. Replace the bracketed parts and
  the "Domain Fields" list with the vocabulary and distinctions that matter in
  YOUR field. This is what makes the wiki domain-aware.

  Example (AI safety): concepts are classified as behavior/goal/capability/
  tactic, and the key analytical move is flagging "level-of-analysis" confusion.
  Example (machine psychology): concepts might be classified as construct/
  measure/phenomenon/mechanism, and the key move is checking whether a measure
  actually operationalizes the construct it claims to.
═══════════════════════════════════════════════════════════════════════════
-->

When ingesting a source, extract the following structured data:

```
### Metadata
- Title:
- Authors:
- Year:
- Venue/URL:

### Concepts Mentioned
For each concept:
- Name:
- Definition given (verbatim quote):
- Classification used ([>>> CONFIGURE: your field's classification vocabulary, e.g. construct/measure/phenomenon/mechanism]):
- Level of analysis:

### Claims
For each substantive claim:
- Claim:
- Evidence type (empirical/theoretical/review/opinion):
- Strength (strong/moderate/weak):
- Section/page:

### Methodology
- Type:
- Details:

### Relationships Asserted Between Concepts
- [Concept A] → [relationship] → [Concept B]

### Level of Analysis
How does this source organize its ontology? What implicit taxonomy does it use?

### Agreements/Disagreements
Does the source explicitly agree or disagree with other work? Note these.
```

## Domain-Specific Guidance

<!--
>>> CONFIGURE <<<
List the field-specific things the LLM should pay attention to when ingesting.
Replace the generic items below with the analytical moves that matter in your
field. These guide judgment during extraction and integration.
-->

When ingesting sources for this wiki, pay special attention to:

1. **Classification vocabulary**: How does the source classify each concept? Track the exact terms used (the field's native vocabulary), not your paraphrase of them.

2. **Level-of-analysis consistency**: Flag when a source treats a higher-order, compound construct as if it were parallel to a primitive one. Surface the implied hierarchy.

3. **Implicit taxonomies**: Many sources embed an unstated ontology. Extract the implicit structure and make it explicit on the source summary page.

4. **Construct–measure alignment**: When a source proposes a measurement, benchmark, or operationalization, check whether what is actually measured matches the concept it claims to capture. Flag mismatches.

5. **[>>> CONFIGURE: a fifth guidance item specific to your field, or delete this line]**

## Page Type Templates

### Source Summary (`wiki/sources/`)
```markdown
# [Title]
```bibtex
TBD BY USER
```

## Key Claims
- [claim] (Section X)
- ...

## Methodology
...

## Concepts Referenced
- [[concepts/...]]

## Relationship to Other Sources
...

## Limitations
...
```

### Concept Page (`wiki/concepts/`)
```markdown
# [Concept Name]

## Definitions
- **[[sources/source-a]]**: "[definition as given]" — classified as: [field's classification term]
- **[[sources/source-b]]**: "[definition as given]" — classified as: [field's classification term]

## Classification
Level of analysis: [fill with your field's levels — e.g. construct | measure | phenomenon | mechanism]

## Relationships
- Related to: [[concepts/...]]
- Component of: [[concepts/...]]
- Enables: [[concepts/...]]

> [!warning] Terminological Disagreement
> Sources disagree on the classification of this concept. See [[debates/...]].

## Evidence Summary
...

## Open Questions
- ...
```

### Entity Page (`wiki/entities/`)
```markdown
# [Author/Lab/Org Name]

## Profile
...

## Key Contributions
- [[sources/...]]

## Conceptual Framework
How this entity classifies the field's concepts...

## Affiliations
...
```

### Debate Page (`wiki/debates/`)
```markdown
# [Disagreement Title]

## The Disagreement
[Clear statement of what sources disagree about]

## Position A
**Claim**: ...
**Held by**: [[sources/...]], [[sources/...]]
**Arguments**: ...
**Evidence**: ...

## Position B
**Claim**: ...
**Held by**: [[sources/...]], [[sources/...]]
**Arguments**: ...
**Evidence**: ...

## Synthesis
[Current assessment — which position is better supported and why, or why the disagreement remains unresolved]
```

### Evidence Map (`wiki/evidence/`)
```markdown
# [Claim Being Evaluated]

## The Claim
...

## Supporting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/...]] | ... | strong/moderate/weak |

## Contradicting Evidence
| Source | Methodology | Strength |
|--------|-------------|----------|
| [[sources/...]] | ... | strong/moderate/weak |

## Assessment
[well-supported | contested | under-investigated]
```

### Methods Page (`wiki/methods/`)
```markdown
# [Method Name]

## Description
...

## Papers Using This Method
- [[sources/...]]

## Strengths
...

## Limitations
...

## Concepts Evaluated
- [[concepts/...]]
```

### Findings Page (`wiki/findings/`)
```markdown
# [Finding Title]

## The Finding
...

## Source & Methodology
- [[sources/...]] using [methodology]

## Replication Status
[replicated | not yet replicated | contested]

## Implications for the Taxonomy
...
```

### Open Question (`wiki/questions/`)
```markdown
# [Question]

## Why It Matters
...

## What Sources Say
...

## Suggested Investigation
...
```

### Comparison Table (`wiki/comparisons/`)
```markdown
# [Comparison Title]

## Context
[What is being compared and why]

## Comparison

| Dimension | Source A | Source B | Source C |
|-----------|---------|---------|---------|
| ...       | ...     | ...     | ...     |

## Analysis
...
```

## Configuration

```
lint_interval: 10  # suggest /lint every Nth ingest (when counter divisible by 10)
```

The lint counter (`wiki/.meta/lint-counter`) is **monotonically increasing** and never resets. A PostToolUse hook increments it after each `ingest:` commit. Lint is suggested when the counter is divisible by `lint_interval` with no remainder (e.g., at 10, 20, 30...).

## PDF Conversion

Source PDFs are converted to markdown using the **Marker** framework with GPU acceleration. Dependencies are managed with `uv` (`pyproject.toml` + `uv.lock`).

```bash
export TORCH_DEVICE=cuda   # once per shell session
uv run marker_single source/file_name.pdf --output_dir raw/papers
```

## Slash Commands

Available workflows (see `.claude/skills/` for full instructions):

- `/ingest [path]` — two-pass source ingestion (with human review gate)
- `/ingest-agentic [path]` — autonomous two-pass source ingestion (no human review gate)
- `/query [question]` — ask questions against the wiki
- `/lint` — wiki health check
- `/compare [topic]` — generate comparison tables
- `/debate [topic]` — create/update debate pages
- `/discover [query]` — search for relevant papers online, review results, and stage accepted PDFs
