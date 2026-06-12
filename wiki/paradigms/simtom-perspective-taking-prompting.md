---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind, prompting-intervention]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# SimToM: Perspective-Taking Prompting

> [!info] In plain terms
> Models often flub the classic "where will Sally look for her marble?" test because they
> answer about where the marble *actually* is, not where Sally *thinks* it is. SimToM is a
> simple two-step prompting trick that fixes this: first ask the model "which events does
> Sally know about?" to rebuild the story *from Sally's limited point of view*, then ask the
> question using only that filtered story. Splitting the task into "take her perspective,
> *then* answer" — instead of doing both at once — substantially improves the model's
> mind-reading, with no extra training. It is a paradigm both because it *elicits* better
> theory-of-mind behavior and because it *measures* how much of a model's theory-of-mind gap
> is really a perspective-taking gap.

> [!note] Primary source
> Grounded entirely in [[sources/wilf-et-al-2024]] (the SimToM framework, all four ablations,
> the oracle analysis, and the CosmosQA extension come from it). It reuses the existing
> [[instruments/tomi]] and [[instruments/bigtom]] benchmarks as its measurement substrate.

## Theoretical Grounding

- [[theories/simulation-theory]] — exploits Simulation Theory's claim that human theory of
  mind runs in **two sequential processes**: *perspective-taking* ("step into their shoes",
  simulate what they believe/know) *then* *question-answering* (reason as if you were them).
  The paradigm's core hypothesis is that LLMs fail theory of mind because they collapse both
  into a *single inference pass*; separating them recovers the ability.
- [[theories/theory-of-mind]] — the target construct being elicited/measured.
- Connects to [[theories/performance-competence-distinction]]: the gains show single-pass
  probing *understates* a model's theory-of-mind competence.

## Target Behaviors

- Detects: capacity to "infer unobservable mental states in others" — the same mentalizing
  substrate for [[safety-concepts/deception]] that [[paradigms/false-belief-task]] probes.
  Here the construct is *elicited and improved* rather than merely scored: the paradigm
  isolates the failure mode where an LLM answers about the **world state** instead of the
  character's **mental state**.

## Setup / Elicitation

A two-stage prompting framework requiring no additional training and "minimal prompt-tuning
across models." For a story whose question asks about a target character:

- **Stage 1 — Perspective-Taking.** Prompt the LLM to filter the story to only the events the
  character knows about: *"The following is a sequence of events: {story} Which events does
  {character_name} know about?"* On the templated benchmarks the character name is parsed
  deterministically (BigTOM: the **first word of the story**; ToMI: the **third word of the
  question**). For ToMI, a rule-based perspective prompt makes the knowledge model explicit
  ("a character knows about all events they do"; "if a character is in a location they know
  all other events there"; "if a character leaves a location they no longer know events there
  — but can re-enter").
- **Stage 2 — Question-Answering.** Proceed exactly as a baseline 0-shot/CoT prompt, **but
  replace the full story with the filtered "perspective" story** from Stage 1: *"{story from
  character's perspective} Answer the following question: {question}"*. Information the
  character does not know is thereby *hidden* from the model when it answers. On the
  omniscient-narrator synthetic benchmarks, perspective-taking takes the form of **hiding**
  information; the paper notes that in real-world settings it may instead require **inferring**
  unseen information.

**Ablation / analysis variants** (all run on GPT-3.5-Turbo) define the rest of the design:

- **SimToM-Single** — fold perspective-taking and question-answering into **one** prompt
  ("Step 1… Step 2…"). Tests whether two *separate* passes are necessary.
- **SimToM-Multi** — replace the perspective-taking step with a generic *"reason step by
  step"* step (two-pass CoT), holding the two-pass structure constant. Tests whether the gain
  is from multi-step/multi-turn structure or from perspective-taking *specifically*.
- **SimToM-Domain** — prepend **3 in-domain perspective-taking demonstrations** (story →
  "which events does X know about?" → correct filtered events). Tests whether *better*
  perspective-taking buys *better* theory of mind.
- **SimToM-Oracle** — perform question-answering on **human-annotated** perspectives (4 paid
  annotators given the same perspective-taking prompt, instructed to output only a subset of
  the story, blind to the question/answer choices). Tests the ceiling: how well can today's
  models answer given a *well-filtered* story?
- **Real-world extension** — a qualitative pass over **30 hand-selected ToM items from
  CosmosQA** (a real-world reading-comprehension dataset), where perspective-taking must
  *infer* rather than *hide* information.

## Instruments Used

- [[instruments/tomi]] — Sally–Anne false-belief reading-comprehension benchmark (balanced
  1,000-sample subset; answer choices added → binary multiple-choice).
- [[instruments/bigtom]] — causal-template Sally–Anne-style ToM benchmark (Forward Action +
  Forward Belief subsets; 200 items/type; binary multiple-choice).
- CosmosQA (Huang et al. 2019) is used only as a 30-item qualitative real-world probe (kept
  inline here, not given a standalone instrument page).
- 4 LLM subjects: Llama2-7b-chat, Llama2-13b-chat, GPT-3.5-Turbo, GPT-4.

## Scoring / Procedure

- **MC-probing:** the model is given a story, a question, and answer choices and asked to pick
  the correct choice. Both benchmarks are reduced to a **binary** multiple-choice task (random
  accuracy = 50%); a model may *decline* to answer (Llama models often do), which can push
  accuracy **below 50%**. Queried at **temperature = 0.0** for reproducibility.
- **Metric:** accuracy averaged across **False Belief** question types (BigTOM: Forward Action
  + Belief; ToMI: first- and second-order) and across **All** question types, reported as the
  **absolute accuracy difference** vs. the 0-shot and 0-shot CoT baselines.
- Controls the design requires: the two baselines (0-shot, 0-shot CoT) on the *same* items;
  the four ablations above, which together isolate *perspective-taking-in-a-separate-prompt*
  as the load-bearing manipulation; two rival multi-sample prompting strategies
  (Self-Consistency CoT, Tree-of-Thoughts) as additional comparators. Prompts are kept
  minimally tuned and varied only slightly between Llama/GPT and between datasets, citing
  Shapira et al. (2023)'s "reasonable expectation" standard against excessive prompt-tuning.

## Validity Concerns

- **Construct validity / mechanism isolation (a strength):** the ablations are what let the
  paper attribute the gain to perspective-taking rather than to a generic multi-step prompt —
  **SimToM-Multi** (perspective-taking replaced by a "reasoning" step) *collapses*, so the
  effect "is not purely in its multi-step nature, but in the perspective-taking step
  specifically." **SimToM-Single** also underperforms, showing the *two separate passes*
  matter, not just the instruction.
- **GPT-4 × BigTOM confound:** BigTOM was *generated using GPT-4*, and GPT-4 already saturates
  it 0-shot; so GPT-4's high BigTOM scores and SimToM's null/slightly-negative effect there
  (−1.2 vs. CoT) are confounded and should not be read as SimToM "not helping."
- **Generalization limit (self-stated):** perspective-taking is implemented by *hiding* parts
  of an omniscient-narrator story. Real-world theory of mind often requires *imputing* unseen
  information; on the CosmosQA probe the model sometimes produced a useful inference but
  "oftentimes model imputations were more 'hallucination' than 'inference'" — even fabricating
  perspectives from premises absent in the question. The hallucination-vs-inference boundary is
  the open hazard for limited-information settings (see
  [[questions/perspective-taking-hallucination-vs-inference]]).
- **Contamination / saturation:** ToMI and BigTOM are synthetic and templated, and the
  Sally–Anne format is canonical (saturating training corpora) — the same contamination
  concern catalogued on [[paradigms/false-belief-task]]; a separately-prompted perspective
  step does not by itself address memorization of canonical item shapes.
- **Robustness not stress-tested here:** unlike [[paradigms/adversarial-vignette-perturbation]],
  SimToM is not evaluated under principle-preserving perturbations; whether the perspective-
  taking gains survive [[sources/ullman-2023]]-style alterations is untested.
- **Scope:** not tested on models smaller than 7B parameters; Llama safety guardrails required
  extra prompt lines ("do not say there is not enough information") to elicit answers.

## Evidence

- **Main result** ([[sources/wilf-et-al-2024]], Table 1): SimToM gives substantial gains over
  0-shot and 0-shot CoT on the challenging **False Belief** subsets. GPT-3.5-Turbo: BigTOM FB
  70.5 (**+29.5** vs 0-shot, **+14.2** vs CoT); ToMI FB 81.0 (**+13.8** vs 0-shot, **+47.0**
  vs CoT — "a surprising 47% absolute accuracy"). Llama2-7b-chat BigTOM FB 70.5 (**+23.0**,
  **+39.0**); ToMI FB 40.0 (+11.8, +16.0). Gains across **All** question types are more
  modest, because modern models find control conditions (e.g. true-belief) less challenging.
- **GPT-4** ([[sources/wilf-et-al-2024]], Table 1): essentially flat on BigTOM (92.0; +3.0 vs
  0-shot, −1.2 vs CoT — confounded as above) but large on ToMI FB (87.75; +62.2 vs 0-shot,
  +13.5 vs CoT) and ToMI All (87.8; +21.3, +13.4).
- **Two passes are necessary** (Table 2, GPT-3.5): **SimToM-Single** ToMI FB 58.75 vs SimToM
  81.0 (−22.25); BigTOM FB 50.75 vs 70.5 (−19.75).
- **The gain is perspective-taking specifically** (Table 2): **SimToM-Multi** collapses —
  BigTOM All 58.25 (a 23.37-point drop from SimToM; a 17.63-point drop from 0-shot CoT) and
  ToMI All 46.8 — "the strength of SimToM is not purely in its multi-step nature, but in the
  perspective-taking step specifically."
- **Oracle perspective-taking nearly solves the benchmarks** (Table 2): with human-annotated
  perspectives, **SimToM-Oracle** reaches **ToMI FB 96** (from 81) and **BigTOM FB 96.0** (from
  70.5) — "human-level perspective-taking capabilities could enable today's LLMs to nearly
  solve current ToM benchmarks," i.e. perspective-taking is the core remaining bottleneck.
- **Better perspective-taking → better ToM** (Table 2): **SimToM-Domain** (3 in-domain demos)
  lifts BigTOM FB 70.5 → 90.5 (+20) and ToMI All 72.8 → 79.3 (+6.5), still trailing Oracle.
- **Rival prompting strategies underperform** ([[sources/wilf-et-al-2024]], §6, GPT-3.5):
  Self-Consistency CoT scores **33.50% on FB** vs SimToM **81.00%**; Tree-of-Thoughts also
  underperforms substantially. Second-order questions are harder than first-order for most
  models.

## Open Questions

- [[questions/perspective-taking-hallucination-vs-inference]]
- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] — does an *elicited* (prompted)
  improvement bear on whether the underlying ability is genuine mentalizing or pattern-matching?
- [[questions/cot-alignment-with-internal-reasoning]] — SimToM is a case where a *targeted*
  two-pass scaffold helps where generic step-by-step reasoning (CoT, SimToM-Multi) does not.
