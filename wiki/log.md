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
