# Configuring this template for a new field

Work through this checklist once, right after creating a new repo from the template. Everything you need to change is marked `>>> CONFIGURE <<<` in the files. The whole thing takes ~15 minutes, or let Claude Code interview you: *"Configure this template for [field] — walk through CONFIGURE.md with me."*

Throughout, pick a **field slug** in kebab-case (e.g. `machine-psychology`). You'll reuse it everywhere.

---

## 1. `CLAUDE.md` — the schema (most important)

This is where the wiki becomes domain-aware. Fill in, in order:

- [ ] **Title** — `# [Field Name] — Research Wiki`, and delete the `>>> CONFIGURE` comment banner at the top of the file.
- [ ] **Project Overview** — replace the placeholder paragraph. State what the field is, the research problem this wiki surfaces, and what a good knowledge base of it looks like (3-6 sentences).
- [ ] **Extraction Schema** ⭐ — the single most important block. Replace the bracketed `Classification used (...)` vocabulary with **your field's native classification terms**. This is what the `/ingest` skills read to know what to pull out of each source. Examples:
  - *AI safety* → `behavior / instrumental goal / capability / tactic / disposition`; key move: flag level-of-analysis confusion.
  - *Machine psychology* → `construct / measure / phenomenon / mechanism / paradigm`; key move: check whether a measure actually operationalizes the construct it claims to.
  - *Your field* → whatever distinctions actually matter when you read a paper.
- [ ] **Domain-Specific Guidance** — replace the 5 generic items with the analytical moves that matter in your field (what to watch for, what mismatches to flag).
- [ ] **Page Type Templates** — usually fine as-is. Optionally tweak the `## Classification` line's example levels and the "classified as:" examples to match your vocabulary. Delete any page type you'll never use (e.g. drop `methods` for a purely theoretical field).

## 2. Frontmatter — set the field slug everywhere

- [ ] In `CLAUDE.md`'s **Frontmatter Schema**, set the `field:` example to your slug.
- [ ] In the seed files `wiki/index.md`, `wiki/log.md`, `wiki/overview.md`: replace `[field-slug]` and the `YYYY-MM-DD` dates, and fill the `# [Field]` titles. Fill the overview's "in one paragraph" stub.

Keep `field:` **identical on every page** the LLM creates — it's what lets a future merged vault color-group the graph by field.

## 3. `README.md`

- [ ] Replace the template's README with a short one describing *your* field wiki (or keep a note linking back to the template). At minimum, change the title and the one-paragraph description.

## 4. `pyproject.toml` (only if you ingest PDFs)

- [ ] Set `name` and `description`.
- [ ] If your sources are web/text only, **delete the `dependencies` block and the `[tool.uv]` section** — the Marker/PDF stack is heavy and only needed for PDF → markdown conversion.
- [ ] If you do convert PDFs: `uv sync`, then `export TORCH_DEVICE=cuda` (or `cpu`) and `uv run marker_single <file.pdf> --output_dir raw/papers`.

## 5. Sanity checks

- [ ] `wiki/.meta/lint-counter` exists and contains `0`.
- [ ] The hook is executable: `chmod +x .claude/hooks/update-lint-counter.sh` (on Windows/Git Bash this is usually fine as-is).
- [ ] Launch Claude Code from the repo root and confirm the skills load: type `/` and check `/ingest`, `/query`, `/lint`, `/discover` appear.
- [ ] Open the repo as an Obsidian vault (point Obsidian at the repo root).

## 6. First run

- [ ] `/discover` to scout some papers, **or** drop a source into `raw/articles/` (web clip) or `raw/papers/` (converted PDF).
- [ ] `/ingest raw/articles/your-first-source.md` — review the extract, approve, and watch the wiki build.
- [ ] After ingesting, `git commit` happens automatically (message `ingest: <title>`). Check `wiki/index.md` and the Obsidian graph.

---

### What you do **not** need to touch

The skills (`.claude/skills/`), the hook, the directory layout, the conventions, and the page-type *structure* are all field-agnostic — leave them alone. The `/ingest` skills deliberately read their extraction vocabulary from `CLAUDE.md`'s **Extraction Schema** section, so configuring that one section is what adapts the whole pipeline to your field.

### Removing the PDF tooling entirely

If you'll never ingest PDFs: delete `pyproject.toml`, remove the **PDF Conversion** section from `CLAUDE.md`, and you can ignore `raw/papers/`.
