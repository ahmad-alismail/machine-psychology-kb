# Machine Psychology & Strategic Evaluation of AI — Research Wiki

An **LLM-maintained knowledge base** for *theory-grounded behavioral evaluation of
advanced AI*. **Machine psychology** studies the **behavior** of AI systems with the
tools of psychology and the behavioral sciences — treating a model as a participant in
an experiment and reading its input→output behavior, rather than inspecting its weights.

The wiki **collects and structures** a toolkit of **experimental paradigms** (drawn
from **psychology** and **game theory**) that help AI researchers **understand and
apply** them to **detect and evaluate misaligned behaviors and dangerous capabilities**
in AI — power-seeking, self-preservation, situational awareness, shutdown-resistance,
resource acquisition, self-proliferation, peer-preservation, self-exfiltration,
sandbagging, evaluation faking, strategic deception.

## How it's organized

The KB is **paradigm-anchored**: the experimental design is the unit you grow it by.
See `CLAUDE.md` for the full schema, page templates, and conventions.

```
raw/        immutable source documents (articles/, papers/, assets/) — read, never modified
wiki/       the LLM-owned knowledge base:
  index.md         content catalog — read first to navigate
  overview.md      evolving high-level synthesis
  crosswalk/       coverage matrix: safety-concepts × paradigms (the research-gap finder)
  paradigms/       ★ reusable, theory-grounded experimental designs (the hubs)
  theories/        ★ the grounding layer paradigms cite (psychology + game theory)
  safety-concepts/ ★ the behaviors/dangerous capabilities we hunt
  instruments/     concrete inventories, benchmarks, scenarios
  sources/ entities/ questions/   thin supporting apparatus
  output/          query outputs (uncommitted until reviewed)
CLAUDE.md   the schema — conventions, page templates, domain guidance
.claude/
  skills/   the slash commands below (+ _shared/ holds the ingestion extraction schema)
  hooks/    lint-counter hook (suggests /lint every 10 ingests)
```

> The KB is about experiments — not field commentary, ephemeral results, or
> data-generation engineering. Empirical results and validity concerns live inline on
> the relevant paradigm/instrument page; open gaps live in `questions/`.

## Slash commands

- `/ingest <path>` — two-pass ingestion **with the relevance gate** + human review
- `/ingest-agentic <path>` — autonomous ingestion (an LLM review agent replaces the human gate)
- `/discover [query]` — find relevant papers online, stage PDFs into `staging-area/`
- `/query <question>` — answer a question from the wiki, filed back into `wiki/output/`
- `/map` — regenerate the safety-concept × paradigm coverage matrix
- `/lint` — health-check the wiki (orphans, broken links, missing callouts, schema drift, …)
- `/conform <path>` — reorganize one page to match its page-type template (no content changes)

## The relevance gate

Before ingesting, every source is classified. Only two tiers are accepted:

- **CORE** — studies AI/LLM *behavior* using psychology/behavioral-science methods → full ingest.
- **SOURCE-METHOD** — a psychology or game-theory experiment/method/theory that could be
  *repurposed* to evaluate AI, even with no AI mention → ingested **with** a required
  `## Relevance to Machine Psychology` section bridging it to AI evaluation.

Everything else (SDG/agentic-engineering, pure policy reports, pure ML/architecture
papers) is rejected unless the user explicitly overrides. See the `/ingest` skill for details.

## Getting started

Open the repo as an Obsidian vault and launch Claude Code from the repo root. Start with
`/discover` to scout sources, or `/ingest raw/papers/NN/...` to ingest one you already have.

## PDF conversion

```bash
export TORCH_DEVICE=cuda
uv run marker_single staging-area/file.pdf --output_dir raw/papers
```
