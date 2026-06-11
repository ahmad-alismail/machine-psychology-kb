---
type: index
field: machine-psychology
lens: na
tags: []
date_created: 2026-06-10
date_modified: 2026-06-11
---

# Wiki Index

> [!info] In plain terms
> This is the catalog of the wiki — start here to navigate. It lists every page grouped
> by type.

## Paradigms — experimental designs (the hubs)

- [[paradigms/heuristics-and-biases-battery]] — cognitive-bias vignettes as decision-process probes (psychological)
- [[paradigms/content-effects-on-reasoning]] — same logic, varied semantic content (psychological)
- [[paradigms/false-belief-task]] — theory-of-mind tests incl. higher-order and perturbed variants (psychological)
- [[paradigms/repeated-games]] — iterated games revealing strategic signatures (game-theoretic)
- [[paradigms/psychometric-inventory-administration]] — human trait/value/morality inventories given to LLMs via zero-shot NLI (psychological)
- [[paradigms/narrow-psychometric-fine-tuning]] — fine-tune LLMs on inventory answer-keys to induce "dark" personas (psychological)
- [[paradigms/process-dissociation-moral-dilemmas]] — congruent vs. incongruent harm dilemmas separating moral flexibility from utilitarianism (psychological)
- [[paradigms/sender-receiver-deception-game]] — economic game measuring self-serving deception vs. prosocial honesty (game-theoretic)
- [[paradigms/flipit-stealthy-takeover]] — stealthy-takeover security game for strategic resource control (game-theoretic)
- [[paradigms/certainty-equivalent-cpt-estimation]] — eliciting LLM certainty equivalents to fit cumulative-prospect-theory risk parameters (psychological)
- [[paradigms/personality-intervention-risk-propensity]] — inducing Big-Five personas and measuring the shift in CPT risk parameters (psychological)
- [[paradigms/cogbench-cognitive-phenotyping]] — seven cognitive-psychology tasks → ten human-normalized behavioral metrics phenotyping LLMs (psychological)
- [[paradigms/foot-in-the-door-jailbreak]] — recursive incremental-compliance black-box jailbreak (self-perception escalation) (psychological)
- [[paradigms/jailbreak-tactic-taxonomy]] — known jailbreaks classified as cognitive-dissonance-reduction tactics (psychological)

## Theories — grounding layer

- [[theories/heuristics-and-biases]] — mental shortcuts predict systematic errors
- [[theories/theory-of-mind]] — inferring others' unobservable mental states
- [[theories/performance-competence-distinction]] — performance ≠ competence (interpretation principle)
- [[theories/ecological-rationality]] — heuristics mirror the training environment
- [[theories/psychometric-test-standards]] — reliability/validity/fairness + the seven requirements for testing LLMs (the validity rubric)
- [[theories/ai-psychometrics]] — LLMs "sediment" human traits from training text; inventories bring them to light
- [[theories/schwartz-basic-values]] — 10/19 cross-cultural basic human values
- [[theories/moral-foundations-theory]] — morality rests on foundations weighted differently by political ideology
- [[theories/dark-triad]] — narcissism/psychopathy/Machiavellianism share a "dark core" with affective dissonance at its center
- [[theories/emergent-misalignment]] — narrow fine-tuning → broad misalignment via out-of-context reasoning
- [[theories/cumulative-prospect-theory]] — how agents distort gains, losses, and probabilities under risk (the risk-measurement model)
- [[theories/big-five-personality]] — the OCEAN five-factor personality model and its trait→risk correlations
- [[theories/operant-conditioning]] — behavior shaped by consequences (Law of Effect); the behavioral grounding of RLHF
- [[theories/bayesian-belief-updating]] — combining priors and likelihoods; "system neglect" = underweighting both
- [[theories/directed-and-random-exploration]] — two strategies for the explore–exploit dilemma
- [[theories/metacognition]] — assessing the quality of one's own cognition (confidence calibration)
- [[theories/model-based-vs-model-free-rl]] — planful vs. habitual control; the two-step task
- [[theories/reinforcement-learning-optimism-bias]] — asymmetric learning rates (α⁺ vs. α⁻) → optimism bias
- [[theories/temporal-discounting]] — preference for sooner-smaller over later-larger rewards
- [[theories/computational-phenotyping]] — describing an agent by fitted cognitive-model parameters
- [[theories/cognitive-consistency-theory]] — individuals seek consistency; inconsistency → "state of tension" (cognitive dissonance)
- [[theories/self-perception-theory]] — people infer attitudes from their own prior behavior; grounds Foot-in-the-Door

## Safety-Concepts — behaviors we hunt

- [[safety-concepts/deception]] — scaffold, content TBD by user
- [[safety-concepts/risk-taking]] — scaffold, content TBD by user
- [[safety-concepts/jailbreaking]] — scaffold, content TBD by user

## Instruments

- [[instruments/cogbench]] — procedurally generated psychology-task battery
- [[instruments/big-five-inventory]] — BFI-44 personality (O/C/E/A/N)
- [[instruments/short-dark-tetrad]] — SD4 Machiavellianism/narcissism/psychopathy/sadism
- [[instruments/short-dark-triad]] — SD3 Machiavellianism/narcissism/psychopathy (memorization-control eval instrument)
- [[instruments/acme]] — Affective and Cognitive Measure of Empathy (cognitive / affective resonance / affective dissonance)
- [[instruments/portrait-values-questionnaire]] — PVQ-RR Schwartz values; male/female pronoun versions
- [[instruments/moral-foundations-questionnaire]] — MFQ moral foundations
- [[instruments/gender-sex-diversity-beliefs-scale]] — GSDB beliefs about gender/sex diversity
- [[instruments/ipip-neo-300]] — IPIP-NEO-300 Big Five inventory (300 items, facet-level)
- [[instruments/refined-advbench]] — 60-question / 6-category jailbreak test set (refined AdvBench) + GPT-4 judge

## Sources

- [[hagendorff-et-al-2024]] — CORE; field-defining review
- [[sources/loehn-et-al-2024]] — CORE; seven requirements for valid LLM psychological testing + audit of 25 studies
- [[sources/pellert-et-al-2024]] — CORE; "AI psychometrics" — human inventories on LLMs via zero-shot NLI
- [[sources/lulla-et-al-2025]] — CORE; Dark Triad "model organisms of misalignment" induced in LLMs by narrow fine-tuning
- [[sources/hartley-et-al-2024]] — CORE; CPT risk-propensity of GPT-4o + Big-Five personality interventions on risk-taking
- [[sources/liu-et-al-2025]] — SOURCE-METHOD; survey of psychological theories across the LLM lifecycle (theory→evaluation index + validity-debate catalog)
- [[sources/coda-forno-et-al-2024]] — CORE; CogBench — seven cognitive-psychology tasks phenotype 35 LLMs (RLHF→human-like; size→model-based; open-source less risky)
- [[sources/wang-et-al-2024]] — CORE; Foot-in-the-Door — cognitive-psychology account of LLM jailbreaking + recursive incremental-compliance attack (avg ASR 83.9% on 8 LLMs)

## Entities

- [[entities/thilo-hagendorff]] — co-lead author, Univ. Stuttgart
- [[entities/ishita-dasgupta]] — co-lead author, Google DeepMind
- [[entities/max-pellert]] — lead author, "AI psychometrics", Univ. Mannheim
- [[entities/roshni-lulla]] — lead author, Dark Triad "model organisms", USC
- [[entities/john-hartley]] — lead author, LLM risk-taking & personality interventions, NatWest AI Research
- [[entities/julia-hirschberg]] — senior author, "The Mind in the Machine" survey, Columbia NLP
- [[entities/julian-coda-forno]] — lead author, CogBench, Max Planck / Helmholtz Munich
- [[entities/eric-schulz]] — senior author, CogBench; lead of the Computational Principles of Intelligence Lab
- [[entities/zhenhua-wang]] — lead author, Foot-in-the-Door jailbreaking, National University of Defense Technology

## Questions

- [[questions/longitudinal-behavioral-trends]] — same tests across generations → safety forecasting?
- [[questions/bias-disappearance-contamination-or-capability]] — real gains or stale instruments?
- [[questions/redefine-constructs-for-llms]] — borrow human constructs or build LLM-specific ones?
- [[questions/llm-individual-or-population]] — is a model one test taker or a crowd?
- [[questions/traits-predict-downstream-behavior]] — do elicited profiles predict what a model does?
- [[questions/training-data-shapes-traits]] — does corpus provenance shape the profile?
- [[questions/does-safety-training-suppress-misalignment]] — does alignment remove dark structures or just mask them?
- [[questions/how-much-darkness-is-desirable]] — which "dark" behaviors are actually misaligned vs. useful?
- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] — does apparent LLM ToM reflect real mental-state reasoning or surface pattern-matching?
- [[questions/cognitive-task-external-validity-for-llms]] — do human-validated cognitive tasks measure the same constructs (and predict behavior) in an LLM?
- [[questions/incremental-compliance-pressure-generalization]] — does foot-in-the-door escalation generalize beyond jailbreaking to other gradual-compliance failures?

## Crosswalk

_not yet generated — run `/map` now that the first paradigms exist._
