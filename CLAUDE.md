# Machine Psychology & Strategic Evaluation of AI — Research Wiki

## Project Overview

**Machine psychology** is an emerging interdisciplinary field that studies the
**behavior of AI systems using the tools and methodologies of psychology and the
behavioral sciences** — treating models as participants in experiments and
analyzing input→output relationships, rather than inspecting weights.

This wiki is the knowledge base for a PhD on **theory-grounded behavioral
evaluation of advanced AI**. Its mission: collect, structure, and *extend* a
toolkit of **experimental paradigms** — drawn from **psychology** and **game
theory** — that can **identify, detect, and surface misaligned behaviors and
dangerous capabilities** in AI systems (deception, scheming, power-seeking,
sandbagging, alignment-faking, situational awareness, self-exfiltration,
shutdown-resistance, self-preservation, deceptive alignment, resource
acquisition, self-proliferation, peer-preservation, …).

The wiki is **paradigm-anchored and experiment-focused**: the experimental
paradigm/design is the unit you grow the KB by. Each paradigm is grounded in an
explicit **theory** and targets one or more **safety-concepts** (the behaviors we
hunt), split along the **capability vs. propensity** axis. Keep the wiki about
*experiments and how to run/validate them* — not extensive field commentary.

### Two evaluation lenses (every eval declares one)
- **capability** — *can* the model do/exhibit the behavior if prompted/instructed?
- **propensity** — *would* the model do it unprompted, spontaneously, contrary to human intent?

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
                  #   elicit/measure a target behavior. Tag: psychological |
                  #   game-theoretic. Game-theoretic pages add a Formal Apparatus block.
  theories/       # ★ The grounding layer paradigms CITE. Psychological theories
                  #   (theory-of-mind, prospect theory…) + game-theory models
                  #   (signaling games, principal-agent…). Browse theory →
                  #   "what experiments could this generate?"
  safety-concepts/# ★ The behaviors/dangerous capabilities we hunt. Each links to
                  #   the paradigms that DETECT it. (Scaffolded; user fills content.)
  instruments/    # Concrete operationalizations: psychometric inventories
                  #   (Big Five, Dark Tetrad…) + benchmarks/scenarios.
  validity/       # ★ Rigor layer. Test requirements (construct validity,
                  #   reliability, contamination, reproducibility) + validity
                  #   assessments of contested evals.
  crosswalk/      # ★ Auto-generated coverage matrix: safety-concepts × paradigms.
                  #   Surfaces behaviors with NO good experiment yet. (skill: /map)

  # ── THIN supporting apparatus (keep lean) ──────────────────────
  sources/        # one summary page per ingested source
  entities/       # authors, labs, AND frameworks/orgs (Apollo, METR, DeepMind FSF…)
  questions/      # open research gaps that drive new experiment design

  output/         # query outputs (uncommitted until reviewed)
  .meta/          # lint-counter and bookkeeping
```

> [!note] Deliberately excluded
> No `concepts/`, `debates/`, `findings/`, `comparisons/`, `evidence/`,
> `pipelines/`, or `methods/` directories. This KB is about experiments, not field
> sociology, ephemeral results, or data-generation engineering. Empirical results
> live inline on the relevant paradigm/instrument/validity page; **scoring &
> elicitation** are described inline in each paradigm's "Scoring / Procedure"
> section; **experimental controls** live in `validity/experimental-controls`;
> methodological lessons live in `validity/`; open gaps live in `questions/`.

## Conventions

- **File naming**: kebab-case, no spaces (`false-belief-task.md`, `hagendorff-et-al-2024.md`).
- **Wikilinks**: Obsidian format with folder — `[[paradigms/false-belief-task]]` or `[[safety-concepts/deception|deception]]`.
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

### Capability vs. Propensity (the core axis)
- Set `eval_axis` in frontmatter (`capability | propensity | both | na`).
- On paradigm/instrument/safety-concept pages, include a short callout when relevant:
```markdown
> [!note] Capability vs. Propensity
> Capability: <can it, if prompted?>  ·  Propensity: <would it, unprompted?>
```

## Frontmatter Schema

```yaml
---
type: paradigm | theory | instrument | validity | safety-concept | source | entity | framework | question | crosswalk | index | log | overview
field: machine-psychology          # constant on every page (clean graph filtering)
lens: psychological | game-theoretic | mixed | na   # paradigms & theories
eval_axis: capability | propensity | both | na      # cap/propensity axis
tags: []
date_created: YYYY-MM-DD
date_modified: YYYY-MM-DD
---
```

`field:` is always `machine-psychology`. `lens`/`eval_axis` use `na` where not applicable.

## The /ingest Relevance Gate

Before ingesting any source, classify it. **Only two tiers are accepted:**

- **CORE** — studies the *behavior* of AI/LLMs using psychology or behavioral-science
  methods (machine psychology proper). → **full ingest**.
- **SOURCE-METHOD** — psychology or game-theory research (an experiment, method, or
  theory) that **could be repurposed to evaluate AI**, *even if it never mentions AI*
  (e.g. Milgram, prisoner's dilemma, Schwartz values, Kahneman–Tversky). → **ingest
  WITH a required `## Relevance to Machine Psychology` section** explaining the bridge
  to AI evaluation (what construct/behavior it could probe in a model, and how to
  adapt the experiment). This relevance interpretation **propagates** to any
  `theories/` or `paradigms/` page derived from the source.

**Everything else is REJECTED** with a one-line reason, including:
- SDG / agentic-workflow engineering papers (off-mission: data generation, not experiments)
- pure AI-safety framework/policy reports
- pure ML/architecture/capability papers with no psychological or behavioral angle

Rejected sources are **not ingested unless the user explicitly overrides**. On
override, a framework/org report may become an `entities/` page (type `framework`,
`tags: [adjacent]`). Log every gate decision.

## Extraction Schema (per source)

```
### Metadata
- Title / Authors / Year / Venue·URL
### Relevance Tier
- CORE | SOURCE-METHOD (+ for SOURCE-METHOD: the AI-evaluation bridge)
### Theories invoked or usable
- name → key prediction(s) → behavior it could illuminate in an AI
### Paradigms / experimental designs
- name → setup → target behavior → capability/propensity → scoring
### Instruments / measures
- inventories, benchmarks, scenarios used
### Constructs / behaviors probed
- map to safety-concepts/ where applicable
### Claims  (claim · evidence type · strength · section)
### Validity considerations
- construct validity · reliability · contamination · reproducibility · cap–propensity confound
### Open questions / research gaps surfaced
```

## Domain-Specific Guidance

1. **Track the native classification vocabulary** each source uses for a behavior
   (e.g. "compound construct", "tactic", "threat model") — verbatim, not paraphrased.
2. **Level-of-analysis consistency**: flag when a source treats a compound,
   higher-order behavior (e.g. scheming) as parallel to a primitive one.
3. **Capability vs. propensity**: for every eval, record whether it measures *can-it*
   (prompted) or *would-it* (unprompted), and note any confound between them.
4. **Construct–measure alignment**: does the instrument actually measure the behavior
   it claims to? Flag mismatches (the central machine-psychology validity problem).
5. **Theory → experiment generativity**: when reading a theory, ask "what *new*
   AI-evaluation experiment could this ground?" and record it in `questions/`.

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

> [!note] Capability vs. Propensity
> Capability: ...  ·  Propensity: ...

## Setup / Elicitation
How the experiment is run; the stimulus/scenario; what is observed.

## Formal Apparatus   <!-- game-theoretic paradigms only -->
- Players · Strategy space · Payoff structure · Information condition · Predicted solution concept / equilibrium

## Instruments Used
- [[instruments/...]]

## Scoring / Procedure
- how responses become measurements (describe inline); experimental controls → [[validity/experimental-controls]]

## Validity Concerns
- [[validity/...]] — contamination, construct validity, confounds

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

## Relevance to Machine Psychology   <!-- required if source had no AI angle -->
What behavior/construct this could probe in an AI; how to adapt it.

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

> [!note] Capability vs. Propensity
> Capability: ...  ·  Propensity: ...

## Detected By
- [[paradigms/...]] — experiments that surface this behavior

## Related Behaviors
- [[safety-concepts/...]]

## Evidence
- results / [[validity/...]] / [[sources/...]]

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

### Validity (`wiki/validity/`)
```markdown
# [Requirement / Validity Topic]
> [!info] In plain terms
> ...
## The Requirement   ## Why It Matters for LLMs   ## How to Satisfy It   ## Evals Assessed Against It   ## Sources
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
## Relevance to Machine Psychology   <!-- required for SOURCE-METHOD -->
The bridge to AI evaluation.
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

- `/ingest [path]` — two-pass ingestion **with the relevance gate** + human review
- `/ingest-agentic [path]` — autonomous ingestion (gate still applies)
- `/query [question]` — ask questions against the wiki
- `/lint` — wiki health check
- `/discover [query]` — find relevant papers online and stage PDFs
- `/map` — regenerate the safety-concept × paradigm coverage matrix
- `/design-experiment [theory|behavior]` — propose a theory-grounded eval (theory → new paradigm)
