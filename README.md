# Research Wiki Template

A reusable template for building an **LLM-maintained research knowledge base** for any field. You bring the sources and the questions; an LLM agent (Claude Code) reads each source and incrementally builds a structured, interlinked Obsidian wiki — concept pages, source summaries, debates, evidence maps, findings, and more.

It is a domain-agnostic instantiation of the pattern described in [`llm-wiki.md`](llm-wiki.md). One field per repo: spin up a fresh wiki from this template for machine psychology, a second for AI safety, a third for whatever you're going deep on — each with a clean graph of its own.

## What's in the box

```
CLAUDE.md            # the "engine" schema — conventions, page templates, the
                     #   extraction schema (the parts you customize are marked
                     #   >>> CONFIGURE <<<)
CONFIGURE.md         # step-by-step checklist to configure this for a new field
llm-wiki.md          # the underlying pattern (read this to understand the idea)
.claude/
  skills/            # /ingest /ingest-agentic /query /lint /discover /compare /debate /conform
  hooks/             # lint-counter hook (suggests /lint every 10 ingests)
  settings.json      # wires up the hook
pyproject.toml       # optional: Marker deps for PDF -> markdown (delete if text-only)
raw/                 # immutable source documents (articles/, papers/, assets/)
wiki/                # the LLM-owned knowledge base (seeded index/log/overview)
```

The skills, conventions, and page templates are **field-agnostic**. The only field-specific things are the **Extraction Schema** and **Domain-Specific Guidance** sections of `CLAUDE.md`, plus a handful of placeholders — all marked `>>> CONFIGURE <<<`.

## How to use this as a GitHub template

1. Push this repo to GitHub.
2. On GitHub: **Settings → General → check "Template repository"**.
3. For each new field, click **"Use this template" → "Create a new repository"** (e.g. `machine-psychology-wiki`). You get a fresh repo with clean history.
4. Clone it, then follow **[`CONFIGURE.md`](CONFIGURE.md)** to fill in the field-specific blocks.
5. Open the repo as an Obsidian vault and launch Claude Code from the repo root. Start ingesting with `/ingest <path>` or `/discover`.

> **Tip:** the fastest way to configure a new field is to open the new repo in Claude Code and say: *"Configure this template for [field] — walk through CONFIGURE.md with me."* The agent will interview you and fill in the placeholders.

## Workflow at a glance

- `/discover [query]` — find relevant papers online, stage PDFs into `staging-area/`
- `/ingest <path>` — two-pass ingest with a human review gate
- `/ingest-agentic <path>` — autonomous ingest with an LLM review agent instead
- `/query <question>` — answer a question from the wiki, filed back into `wiki/output/`
- `/compare <topic>` / `/debate <topic>` — generate comparison / debate pages
- `/lint` — health-check the wiki (orphans, broken links, missing definitions, ...)
- `/conform <path>` — reorganize one page to match its template

## Merging fields later

Each field is its own repo and Obsidian vault — kept separate so each graph stays legible. If you later want cross-field links (a concept that appears in two fields), you can merge two wikis: relocate each under `wiki/<field>/`, rewrite the wikilinks, and color-group the merged Obsidian graph by the `field:` frontmatter key (which every page carries). Defer this until you actually have connections to draw — that's the only real reason to merge.
