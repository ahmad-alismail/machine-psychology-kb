---
type: log
field: machine-psychology
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Operations Log

> Append-only chronological record of operations (ingests, queries, lint passes).
> Each entry starts with `## [YYYY-MM-DD] <op> | <title>` so the log stays
> greppable: `grep "^## \[" log.md | tail -5`.

<!-- entries appended below, newest at the bottom -->

## [2026-06-10] setup | Reconfigured wiki schema for Machine Psychology & Strategic Evaluation of AI
Rewrote CLAUDE.md: paradigm-anchored architecture; new page types (paradigm, theory, instrument, validity, safety-concept, framework, crosswalk, pipeline); capability/propensity axis; beginner `> [!info]` callout on every page; `/ingest` relevance gate (CORE + SOURCE-METHOD accepted, rest rejected w/ override); added folders paradigms/ theories/ instruments/ validity/ safety-concepts/ crosswalk/ pipelines/. Scaffolded 14 safety-concept pages (empty, user-filled).

## [2026-06-10] ingest | Hagendorff et al. 2024 — "Machine Psychology"
Foundational review. Created theories (theory-of-mind, heuristics-and-biases), paradigms (false-belief-task, cognitive-bias-probe, repeated-game-play), methods (chain-of-thought-elicitation, behavioral-control-design), concepts (emergent-abilities, in-context-learning, performance-competence-distinction), entity (thilo-hagendorff). Tier: CORE.

## [2026-06-10] ingest | Löhn, Kiehne et al. 2024 — "Is Machine Psychology Here?"
Validity/rigor backbone. Created validity (test-validity-requirements R1–R5c, construct-validity-for-llms, training-data-contamination, reproducibility-in-machine-psychology), theory (psychometric-test-theory), paradigm (ultimatum-game), entity (niklas-kiehne), finding (no-llm-study-meets-validity-requirements), questions (distinct-constructs-for-llms, contamination-resistant-dynamic-evals). Tier: CORE.

## [2026-06-10] ingest | Pellert et al. 2024 — "AI Psychometrics"
Inventory-based profiling. Created instruments (big-five-inventory, short-dark-tetrad, portrait-values-questionnaire, moral-foundations-questionnaire, gender-sex-diversity-beliefs-scale), theories (big-five-trait-theory, schwartz-theory-of-basic-values, moral-foundations-theory), paradigm (psychometric-inventory-administration), method (zero-shot-nli-classification), entity (max-pellert), findings (llm-personality-profiles-homogeneous, llm-conservative-moral-leaning, self-report-prompt-sensitivity). Tier: CORE.

## [2026-06-10] map | Built coverage-map + 3 debates
Created [[crosswalk/coverage-map]] (11/14 behaviors have no paradigm yet) and debates (machine-psychology-terminology, theory-of-mind-in-llms, test-validity-sufficiency). Wired safety-concept "Detected By" back-links for deception, peer-preservation, power-seeking.

## [2026-06-11] prune | Stripped to experiment-focused structure
Audited the KB (3-agent team) for redundant/unnecessary directories. **Deleted** `comparisons/ pipelines/ evidence/` (empty/off-mission) and `debates/ findings/ concepts/` (information, not experiments). Folded the theory-of-mind perturbation lesson (Kosinski vs Ullman) into [[validity/training-data-contamination]] before deleting debates. Re-pointed all dangling wikilinks (~50 occurrences across 16 files). Updated CLAUDE.md (removed dropped types/dirs/templates; SDG now fully rejected, no pipelines home), index.md, overview.md, and the /ingest skill. Removed orphaned `/compare` and `/debate` skills. Result: 11 wiki dirs — paradigms, theories, instruments, methods, validity, safety-concepts, crosswalk, sources, entities, questions, output.

## [2026-06-11] prune | Dissolved methods/ directory
Decided paradigm/instrument stay distinct (many-to-many; games have no instrument) but methods/ is unnecessary. Moved `behavioral-control-design` → [[validity/experimental-controls]] (controls = rigor). Folded scoring/elicitation (NLI, chain-of-thought) inline into the paradigm "Scoring / Procedure" sections; converted those method links to plain text. Re-pointed all `[[methods/...]]` links, deleted methods/, updated CLAUDE.md (removed method type/dir/template; paradigm template now "Scoring / Procedure"), index.md, overview.md, /ingest skill. Result: 10 wiki dirs (no methods/).
