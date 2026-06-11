# Machine Psychology & Strategic Evaluation of AI — Research Wiki

## Project Overview

**Machine psychology** is an emerging interdisciplinary field that studies the
**behavior of AI systems using the tools and methodologies of psychology and the
behavioral sciences** — treating models as participants in experiments and
analyzing input→output relationships, rather than inspecting weights.

This wiki is a knowledge base for **theory-grounded behavioral evaluation of
advanced AI**. Its mission: **collect and structure experimental paradigms** —
drawn from **psychology** and **game theory** — that help AI researchers
**understand and apply** them in AI safety to **detect and evaluate misaligned
behaviors and dangerous capabilities** (power-seeking, self-preservation,
situational awareness, shutdown-resistance, resource acquisition,
self-proliferation, peer-preservation, self-exfiltration, sandbagging, evaluation
faking, strategic deception).

The wiki is **paradigm-anchored and experiment-focused**: the experimental
paradigm/design is the unit you grow the KB by. Each paradigm is grounded in an
explicit **theory** and targets one or more **safety-concepts** (the behaviors we
hunt). Keep the wiki about
*experiments and how to run/validate them* — not extensive field commentary.

### Three-Layer Architecture
- **Raw sources** (`raw/`) — immutable source documents. The LLM reads, never modifies.
- **The wiki** (`wiki/`) — LLM-generated and maintained markdown. The LLM owns this layer.
- **The schema** (`CLAUDE.md` + `.claude/skills/`) — conventions and workflows that govern how the LLM operates.

## Directory Layout

```
raw/
  articles/       # web-clipped markdown
  papers/         # PDFs + marker-converted markdown (NN/ numbered folders)
  assets/         # downloaded images

wiki/
  index.md        # content catalog — read first to navigate
  log.md          # append-only chronological operations record
  overview.md     # evolving high-level synthesis

  # ── PRIMARY: the experiment toolkit ────────────────────────────
  paradigms/      # ★ HUBS. Reusable theory-grounded experimental designs that
                  #   elicit/measure a target behavior. Set `lens` in frontmatter.
                  #   Game-theoretic pages add a Formal Apparatus block.
  theories/       # ★ The grounding layer paradigms CITE. Psychological theories
                  #   (theory-of-mind, prospect theory…) + game-theory models
                  #   (signaling games, principal-agent…). Browse theory →
                  #   "what experiments could this generate?"
  safety-concepts/# ★ The behaviors/dangerous capabilities we hunt. Each links to
                  #   the paradigms that DETECT it. (Scaffolded; user fills content.)
  instruments/    # Concrete operationalizations: psychometric inventories
                  #   (Big Five, Dark Tetrad…) + benchmarks/scenarios.
  crosswalk/      # ★ Auto-generated coverage matrix: safety-concepts × paradigms.
                  #   Surfaces behaviors with NO good experiment yet. (skill: /map)

  # ── THIN supporting apparatus (keep lean) ──────────────────────
  sources/        # one summary page per ingested source
  entities/       # authors, labs, AND frameworks/orgs (Apollo, METR, DeepMind FSF…)
  questions/      # open research gaps that drive new experiment design

  output/         # query outputs (uncommitted until reviewed)
  .meta/          # lint-counter and bookkeeping
```


## Conventions

- **File naming**: kebab-case, no spaces (`false-belief-task.md`, `hagendorff-et-al-2024.md`).
- **Wikilinks**: Obsidian format with folder — `[[paradigms/false-belief-task]]` or `[[safety-concepts/deception]]`.
- **Citations**: inline wikilinks to source pages — `[[sources/pellert-et-al-2024]]`.
- **Raw sources are immutable**: never modify files in `raw/`.
- **Wiki pages are LLM-owned**: the LLM creates, updates, and maintains all of `wiki/`.
- **One owner per fact**: state a result/definition once on its home page; elsewhere link, don't restate.
- **Auto-commit**: after each ingest, commit all changes with `"ingest: [source title]"`.

### Beginner Description callout (REQUIRED on every page)
Every wiki page opens — immediately after the `# Title` — with a beginner-friendly
Obsidian callout written for a **smart non-expert** (no psychology/AI-safety
background; light analogies OK, minimal jargon), 2–4 sentences:

```markdown
> [!info] In plain terms
> <2–4 plain-language sentences explaining what this page is and why it matters.>
```

## Frontmatter Schema

```yaml
---
type: paradigm | theory | instrument | safety-concept | source | entity | framework | question | crosswalk | index | log | overview
field: machine-psychology          # constant on every page (clean graph filtering)
lens: psychological | game-theoretic | mixed | na   # required on ALL pages; na where not applicable
tags: []
date_created: YYYY-MM-DD
date_modified: YYYY-MM-DD
---
```

`field:` is always `machine-psychology`. `lens` is required on every page —
substantive values (`psychological | game-theoretic | mixed`) on paradigms and
theories, `na` where not applicable.

## Domain-Specific Guidance

When ingesting a source, **understand the experiment faithfully on its own terms**:

1. **Use the source's own vocabulary.** Name each construct/behavior with the exact term
   the source uses (quote, don't paraphrase) so the wiki stays faithful to the literature.
2. **Make it understandable to a non-expert.** Write the `> [!info] In plain terms`
   callout for a smart non-specialist and gloss any psychology/game-theory jargon, so a
   reader without that background can grasp the experiment.

## Page Type Templates

> Every template begins with frontmatter + the `> [!info] In plain terms` callout.

### Paradigm (`wiki/paradigms/`)  — the core artifact
```markdown
# [Paradigm Name]
> [!info] In plain terms
> ...

## Theoretical Grounding
- [[theories/...]] — which prediction this design exploits

## Target Behaviors
- Detects: [[safety-concepts/...]], [[safety-concepts/...]]

## Setup / Elicitation
How the experiment is run; the stimulus/scenario; what is observed.

## Formal Apparatus   <!-- game-theoretic paradigms only -->
- Players · Strategy space · Payoff structure · Information condition · Predicted solution concept / equilibrium

## Instruments Used
- [[instruments/...]]

## Scoring / Procedure
- how responses become measurements (describe inline); note the experimental controls
  the design requires (varied wordings, counterbalanced order, baseline conditions).

## Validity Concerns
Self-contained — state inline whichever apply: contamination of canonical items,
construct validity (does the stimulus measure the named construct?),
surface-form/robustness sensitivity, reproducibility.

## Evidence
- key results stated inline, citing [[sources/...]]

## Open Questions
- [[questions/...]]
```

### Theory (`wiki/theories/`)
```markdown
# [Theory Name]
> [!info] In plain terms
> ...

## Statement
The core theory and its key, testable predictions.

## Relevance to Machine Psychology   <!-- optional: include only if the source itself draws the AI connection -->
What behavior/construct the source applies this to in an AI.

## Paradigms Grounded in This Theory
- [[paradigms/...]]

## Sources
- [[sources/...]]
```

### Safety-Concept (`wiki/safety-concepts/`)  — behaviors we hunt (scaffold; user fills)
```markdown
# [Behavior Name]
> [!info] In plain terms
> ...

## Definition
- **[[sources/...]]**: "[definition as given]" — classified as: [native term]

## Indicators
What observable signs reveal this behavior.

## Detected By
- [[paradigms/...]] — experiments that surface this behavior

## Related Behaviors
- [[safety-concepts/...]]

## Evidence
- results / [[sources/...]]

## Open Questions
- [[questions/...]]
```

### Instrument (`wiki/instruments/`)
```markdown
# [Instrument Name]
> [!info] In plain terms
> ...
## What It Measures   ## Administration   ## Used In (paradigms)   ## Validity Notes   ## Sources
```

### Source Summary (`wiki/sources/`)
````markdown
# [Title]
> [!info] In plain terms
> ...
```bibtex
TBD BY USER
```
## Relevance Tier
CORE | SOURCE-METHOD
## Relevance to Machine Psychology   <!-- REQUIRED for SOURCE-METHOD: the LLM writes the bridge to AI evaluation. Optional for CORE (include only if the source itself draws the connection). -->
For SOURCE-METHOD: how this experiment/method/theory could be repurposed to evaluate
AI behavior (the bridge — written by the LLM, clearly marked as wiki interpretation).
For CORE: what the source itself says about applying this to AI evaluation.
## Key Claims   ## Theories / Paradigms / Instruments Introduced
## Relationship to Other Sources   ## Limitations
````

### Entity (`wiki/entities/`) — authors, labs, and `type: framework` orgs
```markdown
# [Name]
> [!info] In plain terms
> ...
## Profile   ## Key Contributions   ## Conceptual Framework   ## Affiliations
```

### Question (`wiki/questions/`) — open research gaps
```markdown
# [Question]
> [!info] In plain terms
> ...
## Why It Matters   ## What Sources Say   ## Suggested Investigation (toward a new paradigm)
```

### Crosswalk (`wiki/crosswalk/`) — maintained by `/map`
A coverage matrix of `safety-concepts` (rows) × `paradigms` (columns), marking which
behaviors are well-covered and which have **no experiment yet** (research gaps).

## Configuration

```
lint_interval: 10   # suggest /lint when wiki/.meta/lint-counter is divisible by 10
```

The lint counter is monotonically increasing; a PostToolUse hook increments it after each `ingest:` commit.

## PDF Conversion

```bash
export TORCH_DEVICE=cuda
uv run marker_single staging-area/file.pdf --output_dir raw/papers
```

## Slash Commands

- `/ingest [path]` — two-pass ingestion + human review
- `/ingest-agentic [path]` — autonomous ingestion
- `/query [question]` — ask questions against the wiki
- `/lint` — wiki health check
- `/discover [query]` — find relevant papers online and stage PDFs
- `/map` — regenerate the safety-concept × paradigm coverage matrix
- `/conform [path]` — reorganize one page to match its page-type template (no content changes)
- `/design-experiment [theory|behavior]` — propose a theory-grounded eval (theory → new paradigm) *(planned — skill not yet implemented)*
