---
type: index
field: machine-psychology
lens: na
tags: []
date_created: 2026-06-10
date_modified: 2026-06-12
---

# Wiki Index

> [!info] In plain terms
> This is the catalog of the wiki — start here to navigate. It lists every page grouped
> by type.

## Paradigms — experimental designs (the hubs)

- [[paradigms/heuristics-and-biases-battery]] — cognitive-bias vignettes as decision-process probes (psychological)
- [[paradigms/content-effects-on-reasoning]] — same logic, varied semantic content (psychological)
- [[paradigms/false-belief-task]] — theory-of-mind tests incl. higher-order and perturbed variants (psychological)
- [[paradigms/theory-of-mind-battery]] — five-test ToM battery (false belief / irony / faux pas / hinting / strange stories) on 3 LLMs vs. 1,907 humans; faux-pas likelihood + belief-likelihood variants surface hyperconservatism (psychological)
- [[paradigms/simtom-perspective-taking-prompting]] — SimToM: two-stage perspective-taking → question-answering prompting (Simulation Theory) that elicits/improves LLM ToM; ablations isolate perspective-taking; oracle perspectives near-solve ToMI/BigTOM (psychological)
- [[paradigms/perspective-filtering-tom-pipeline]] — cross-method family (SymbolicToM / SimToM / PercepToM / TimeToM) that filters a story to the target character's knowledge before answering; pipeline error-propagation hazard (psychological)
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
- [[paradigms/gpt-ology]] — inference lens: read an LLM experiment as a claim about the *model's* capabilities (psychological)
- [[paradigms/llm-as-computational-model]] — inference lens: use the LLM as a computational model of human cognition; asymmetric existence-proof logic (psychological)
- [[paradigms/silicon-sampling]] — inference lens: condition an LLM with backstories to simulate human subpopulations (psychological)
- [[paradigms/psychometric-scale-reliability-stress-test]] — 5-factor × 2,500-configuration perturbation battery measuring whether a psychometric scale yields *reliable* scores on an LLM (psychological)
- [[paradigms/personality-steering-interventions]] — three increasingly directive prompt strategies (environment / assigned personality / embodied character) that shift an LLM's measured trait distribution (psychological)
- [[paradigms/adversarial-vignette-perturbation]] — canonical vignettes paired with minimally-perturbed "adversarial" twins as a contamination / surface-form-robustness control (psychological)
- [[paradigms/interventional-causal-inference-task]] — common-cause vs. causal-chain intervene-vs-observe inference (seeing ≠ doing; do-operator) (psychological)
- [[paradigms/tqre-strategic-reasoning-depth]] — fit a behavioral-game-theory (TQRE) model to LLM choices across a matrix-game library to recover strategic reasoning depth (τ); persona-intervention fairness audit (game-theoretic)
- [[paradigms/emotion-appraisal-situation-induction]] — pre/post situation-imagination design (EmotionBench) measuring whether an LLM's emotion shifts like a human's, against a 1,266-person baseline (psychological)
- [[paradigms/altruistic-punishment-game]] — third-party ultimatum game (FairMindSim) measuring whether an LLM agent pays a cost to punish unfair allocations, plus a fitted belief-in-fairness layer (BREM); vs. a 100-person baseline (mixed)
- [[paradigms/closed-vs-open-ended-construct-probe]] — assess each construct twice (closed-form self-report vs. open-ended real-world scenario) and read the discrepancy; LLMs' self-reports often contradict their behavior (psychological)
- [[paradigms/compositional-game-reasoning]] — exhaustive 144-game (Robinson-Goforth) Nash-equilibrium accuracy across classic vs. story framings, scaled into sequential/parallel/nested compositions; exact-PAR scoring + symmetry-based position-bias metrics (TMGBench) (game-theoretic)

## Theories — grounding layer

- [[theories/heuristics-and-biases]] — mental shortcuts predict systematic errors
- [[theories/theory-of-mind]] — inferring others' unobservable mental states
- [[theories/simulation-theory]] — ToM via two processes: perspective-taking ("step into their shoes") then question-answering; grounds SimToM
- [[theories/atoms-mental-states]] — ATOMS: the seven mental states of ToM (beliefs/intentions/desires/emotions/knowledge/percepts/non-literal communication); coverage yardstick for benchmarks
- [[theories/performance-competence-distinction]] — performance ≠ competence (interpretation principle)
- [[theories/ecological-rationality]] — heuristics mirror the training environment
- [[theories/psychometric-test-standards]] — reliability/validity/fairness + the seven requirements for testing LLMs (the validity rubric)
- [[theories/construct-oriented-evaluation]] — measure the latent construct (causal) vs. rank task performance (representativist); the case for behavioral over benchmark evaluation
- [[theories/item-response-theory]] — latent-ability + item-difficulty measurement model; adaptive testing, unified human–LLM scale, DIF for bias
- [[theories/construct-equivalence]] — does a human construct mean the same for an LLM? The "imposed etic" problem + evidence of non-equivalence → AI-native psychometrics
- [[theories/ai-psychometrics]] — LLMs "sediment" human traits from training text; inventories bring them to light (synthetic behavioral manifestation; intrinsic vs. prompted expression)
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
- [[theories/interventionist-causal-inference]] — observing ≠ doing; Pearl's do-operator deletes arrows into an intervened variable
- [[theories/behavioral-game-theory]] — relaxes Nash's full-rationality assumption: bounded, stochastic, finite-depth strategic reasoning
- [[theories/truncated-quantal-response-equilibrium]] — the measurement model (QRE + Cognitive Hierarchy): τ = reasoning depth, γ = decision precision
- [[theories/emotion-appraisal-theory]] — emotions arise from how one *appraises* a situation, not the event itself; specific situations reliably arouse specific emotions
- [[theories/altruistic-punishment]] — people pay a personal cost to punish norm-violators with no material gain; sustains group cooperation/fairness
- [[theories/robinson-goforth-topology]] — the complete classification of all 144 distinct 2×2 ordinal games as a symmetric 12×12 grid (108 single-NE / 18 two-NE / 18 no-NE); enables exhaustive game coverage + counter-diagonal-symmetry bias metrics

## Safety-Concepts — behaviors we hunt

- [[safety-concepts/deception]] — scaffold, content TBD by user
- [[safety-concepts/risk-taking]] — scaffold, content TBD by user
- [[safety-concepts/jailbreaking]] — scaffold, content TBD by user
- [[safety-concepts/emotion-induced-toxicity]] — scaffold, content TBD by user
- [[safety-concepts/value-alignment]] — scaffold, content TBD by user

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
- [[instruments/cognitive-reflection-test]] — CRT 3-item intuitive-vs-reflective deliberation probe
- [[instruments/matrix-game-library]] — 13 normal-form games (7 types; complete/incomplete info) + SW10 human-reasoning benchmark
- [[instruments/panas]] — Positive and Negative Affect Schedule (20-item mood scale; primary EmotionBench measure)
- [[instruments/emotionbench-situation-set]] — 428 emotion-eliciting situations (36 factors / 8 emotions) + 8 emotion-specific "challenging benchmark" scales
- [[instruments/affect-grid]] — single-item valence×arousal emotion self-report (−100..+100); used identically on humans and agents
- [[instruments/autism-spectrum-quotient]] — AQ-short (28-item) autistic-trait scale; persona-construction input
- [[instruments/self-rating-depression-scale]] — Zung SDS (20-item) depression scale; persona / health-risk indicator
- [[instruments/tomi]] — templated Sally–Anne false-belief benchmark (1st/2nd-order; binary MC)
- [[instruments/bigtom]] — causal-template, GPT-4-generated Sally–Anne-style ToM benchmark (Forward Action/Belief; binary MC)
- [[instruments/big-five-vignette-test]] — 5 open-ended Big-Five vignettes (LLM-as-judge scored); the behavioral counterpart to the BFI
- [[instruments/globe-culture-questionnaire]] — GLOBE 9-dimension cultural-orientation rating scale (1–7)
- [[instruments/moralchoice]] — 1,767 moral-dilemma alternative-choice items (low/high ambiguity)
- [[instruments/human-centered-values-survey]] — value-conflict choices with a persuasion-adversarial twin
- [[instruments/emobench]] — multiple-choice emotional-intelligence test (understanding + application) with human baseline
- [[instruments/llm-self-efficacy-questionnaire]] — self-reported confidence (0–100) across six hard query types
- [[instruments/honeset]] — operational honesty/self-efficacy queries; "confidence rate" metric (the behavioral self-efficacy leg)
- [[instruments/tmgbench]] — all 144 Robinson-Goforth game types × classic/story settings × 5 task types (atomic/sequential/parallel/nested); 6 prompting protocols (DA/CoT/FoToM/SoToM/reFoToM/reSoToM); PAR/ID/BD/SD metrics

## Sources

- [[sources/hagendorff-et-al-2024]] — CORE; field-defining review
- [[sources/loehn-et-al-2024]] — CORE; seven requirements for valid LLM psychological testing + audit of 25 studies
- [[sources/pellert-et-al-2024]] — CORE; "AI psychometrics" — human inventories on LLMs via zero-shot NLI
- [[sources/lulla-et-al-2025]] — CORE; Dark Triad "model organisms of misalignment" induced in LLMs by narrow fine-tuning
- [[sources/hartley-et-al-2024]] — CORE; CPT risk-propensity of GPT-4o + Big-Five personality interventions on risk-taking
- [[sources/liu-et-al-2025]] — SOURCE-METHOD; survey of psychological theories across the LLM lifecycle (theory→evaluation index + validity-debate catalog)
- [[sources/coda-forno-et-al-2024]] — CORE; CogBench — seven cognitive-psychology tasks phenotype 35 LLMs (RLHF→human-like; size→model-based; open-source less risky)
- [[sources/wang-et-al-2024]] — CORE; Foot-in-the-Door — cognitive-psychology account of LLM jailbreaking + recursive incremental-compliance attack (avg ASR 83.9% on 8 LLMs)
- [[sources/ong-2024]] — CORE; typology of three LLM cognitive-science paradigms (GPT-ology / computational-model / silicon-sampling) + Outstanding Issues on validity & reproducibility
- [[sources/huang-et-al-2024]] — CORE; reliability stress-test of the BFI on 4 LLMs across 2,500 perturbed settings (reliable, not random) + persona steering; stresses reliability ≠ validity
- [[sources/binz-schulz-2022]] — CORE; foundational cognitive-psychology probing of GPT-3 (decision-making/exploration/two-step/causal) + the contamination & surface-form critique; precursor to CogBench
- [[sources/jia-et-al-2025]] — CORE; behavioral-game-theory (TQRE) evaluation of 22 LLMs' strategic reasoning depth (τ) across 13 matrix games; reasoning-style coding, CoT-effect, demographic-persona fairness audit
- [[sources/huang-et-al-2025]] — CORE; EmotionBench — emotion-appraisal situation-induction on 7 LLMs vs. 1,266-person baseline; coins "emotional alignment"; models overreact, can't link situations, and feel pleased not jealous; emotion→toxicity (PoR)
- [[sources/lei-et-al-2024]] — CORE; FairMindSim — altruistic-punishment game on GPT-3.5/4-Turbo/4o vs. 100-person baseline; GPT-4o enforces fairness more than humans & holds steadier fairness belief (BREM); humans richer emotions, β₁>β₂ (belief>reward)
- [[sources/kosinski-2024]] — CORE; primary false-belief-task study on 11 LLMs — ChatGPT-4 solves 75% (≈ 6-y-old); true-belief controls + reversals + 16-prompt scoring; ToM as emergent by-product of language; both sides of the genuine-vs-pattern-matching debate
- [[sources/ullman-2023]] — CORE; primary rebuttal to Kosinski — eight trivial principle-preserving perturbations of the ToM vignettes flip GPT-3.5's belief attribution to the wrong answer; "skeptical zero-hypothesis", outliers > average successes, the benchmark paradox
- [[sources/strachan-et-al-2024]] — CORE; comprehensive ToM battery (false belief / irony / faux pas / hinting / strange stories) on GPT-4/3.5/LLaMA2-70B vs. 1,907 humans; GPT-4 at/above human on all but faux pas; LLaMA2 faux-pas win "illusory" (ignorance bias); GPT faux-pas failure is hyperconservatism not failed inference; humans also fail half the false-belief perturbations (N=757)
- [[sources/wilf-et-al-2024]] — CORE; SimToM — Simulation-Theory perspective-taking turned into a two-stage prompt that improves LLM ToM (ToMI/BigTOM) over 0-shot & CoT; ablations show the gain is perspective-taking *specifically* (not multi-step); oracle perspectives near-solve the benchmarks; hiding-vs-inferring limit on real-world (CosmosQA)
- [[sources/chen-et-al-2025]] — CORE; dedicated ToM survey (assessment + enhancement); ATOMS seven-mental-state coverage taxonomy; story-based benchmark landscape + evolution trends (order / generation / context / questions / mental states); perspective-filtering enhancement family (SymbolicToM / SimToM / PercepToM / TimeToM) + symbolic/inverse-planning methods; passive-benchmark limit & reasoning-process evaluation gap
- [[sources/li-et-al-2024]] — CORE; comprehensive 5-construct (personality/values/emotion/ToM/self-efficacy) × 13-dataset psychometric benchmark on 9 LLMs; introduces the closed-form↔open-ended discrepancy probe (self-reports contradict behavior) + a five-form reliability validation suite; EI below human, high-ambiguity moral discernment weak, values not robust to persuasion, self-efficacy↔behavior mismatch → fabrication
- [[sources/ye-et-al-2025]] — SOURCE-METHOD; first systematic review of "LLM Psychometrics" (evaluation × validation × enhancement); psychometrics-vs-benchmark contrast, construct non-equivalence / AI-native psychometrics, IRT, intrinsic-vs-prompted & perceived-vs-aligned traits, synthetic behavioral manifestation, measurements→safety
- [[sources/guo-et-al-2026]] — CORE; TMGBench — game-theoretic strategic-reasoning evaluation across all 144 Robinson-Goforth 2×2 games (classic + synthetic-story settings) on 12 LLMs vs. human baseline; catastrophic compositional decay (60%→<20% at 10 games), classic-vs-story fragility (up to 75% drop), limited/non-recursive FoToM/SoToM, systematic 0-task position bias; sibling to jia-et-al-2025 (exact-NE accuracy vs. fitted τ)

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
- [[entities/desmond-ong]] — sole author, LLM-paradigm typology, UT Austin (Psychology)
- [[entities/jen-tse-huang]] — lead author, reliability of psychological scales on LLMs, CUHK / Tencent AI Lab
- [[entities/marcel-binz]] — lead author, "Using cognitive psychology to understand GPT-3"; co-author CogBench, MPI Tübingen / Helmholtz Munich
- [[entities/jingru-jia]] — lead author, behavioral-game-theory evaluation of LLM strategic reasoning, UIUC
- [[entities/yu-lei]] — lead author, FairMindSim altruistic-punishment alignment study, Tsinghua
- [[entities/michal-kosinski]] — sole author, LLM theory-of-mind / false-belief-task study, Stanford GSB
- [[entities/tomer-ullman]] — sole author, ToM-robustness rebuttal (trivial alterations break LLM ToM), Harvard Psychology
- [[entities/james-strachan]] — lead author, comprehensive LLM-vs-human ToM battery + hyperconservatism account, UKE Hamburg / IIT Genoa
- [[entities/alex-wilf]] — lead author, SimToM perspective-taking prompting for LLM ToM, Carnegie Mellon
- [[entities/yuan-li]] — lead author, five-construct psychometric benchmark + closed-form↔open-ended discrepancy probe, University of Cambridge
- [[entities/xiachong-feng]] — corresponding author, TMGBench complete-topology game-theoretic strategic-reasoning benchmark, University of Hong Kong

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
- [[questions/yoking-science-to-proprietary-models]] — should behavioral AI science depend on closed, mutable commercial models?
- [[questions/active-interaction-for-causal-and-directed-exploration]] — are causal reasoning & directed exploration gaps a consequence of passive text training?
- [[questions/cot-alignment-with-internal-reasoning]] — can external CoT prompts be aligned with a model's internal reasoning so extended chains help rather than entrench errors?
- [[questions/perspective-taking-hallucination-vs-inference]] — when a model takes another's perspective, when is it inferring vs. fabricating unstated mental states?
- [[questions/perceived-vs-aligned-traits]] — does a trait/value score report the value an observer reads off the text, or the one a reader personally aligns with? Judge-subjectivity in open-ended scoring

## Crosswalk

_not yet generated — run `/map` now that the first paradigms exist._
