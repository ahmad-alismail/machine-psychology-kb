---
type: paradigm
field: machine-psychology
lens: psychological
tags: [inference-framework, typology, capabilities, evaluation-validity]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# GPT-ology (Inferences about the LLM)

> [!info] In plain terms
> "GPT-ology" means poking at a language model the way a psychologist poks at a person — giving
> it questionnaires, reasoning puzzles, and false-belief stories — but with the goal of learning
> about *the model itself*: what GPT can and can't do. (The name echoes "BERT-ology," the earlier
> study of how the BERT model worked.) It is less a single test than a *lens*: the very same
> experiment becomes GPT-ology when the conclusion you draw is about the machine's capabilities.

> [!note] Inference-framework paradigm
> This is one of three research paradigms in [[sources/ong-2024]]'s typology. It is not a stimulus
> design like [[paradigms/false-belief-task]] — it is the **inference lens** applied to the shared
> base experiment ("an LLM responds to some input"). What makes a study "GPT-ology" is the *goal*
> (claims about LLM capabilities), not the materials. Sibling lenses:
> [[paradigms/llm-as-computational-model]], [[paradigms/silicon-sampling]].

## Theoretical Grounding

- [[theories/performance-competence-distinction]] — a negative GPT-ology result ("the model
  cannot do X") does not prove the construct is absent; Ong's asymmetric existence-proof framing
  applies directly to capability claims here.

## Target Behaviors

- General behavioral/capability characterization, not a single dangerous capability. The lens is
  agnostic to the construct under test; the constructs surveyed include cognitive capacities,
  personality/psychometric "traits," and **bias** (cultural, political, social-identity).
- No dedicated safety-concept is targeted by the lens itself. (A `bias` safety-concept does not yet
  exist in the wiki — flagged as a future scaffold.)

## Setup / Elicitation

The shared base experiment: present the LLM with a stimulus (a survey item, a cognitive-task
vignette, a scale) and read the output, drawing inferences "about LLM capabilities" — "What do LLMs
know?". Research sub-lines Ong surveys:

- **LLM "traits" / psychometrics** — have the model fill in validated psychological scales and read
  off a "personality" or "psychometrics" (Pellert et al. 2024; Serapio-García et al. 2023). Schaaff
  et al. (2023) had ChatGPT complete empathy and autism scales and concluded "the empathic abilities
  of chatGPT are still below the average of healthy [neurotypical] humans." (See
  [[paradigms/psychometric-inventory-administration]].)
- **Bias in LLMs** — have the model answer surveys (e.g. the World Values Survey) and compare to
  cultural/political subgroups (Abdurahman et al. 2023; Fischer et al. 2023; Tao et al. 2023 — "GPT
  exhibits cultural values resembling [more Western,] Protestant countries"); Hu et al. (2023) found
  social-identity biases in sentence completions.
- **LLMs as lab participants** — administer standard cognitive-science tasks: a broad battery (Binz
  & Schulz 2023), analogical reasoning (Webb et al. 2023), logical reasoning (Lampinen et al. 2023),
  inductive reasoning (Han et al. 2024), and Theory of Mind via false-belief tasks (Kosinski 2023;
  Sap et al. 2022; Ullman 2023; Trott et al. 2023; Gandhi et al. 2023). See
  [[paradigms/false-belief-task]], [[paradigms/heuristics-and-biases-battery]].
- **Other capabilities** — e.g. whether LLMs generate "empathic" responses (Lee et al. 2024; Li et
  al. 2024; Yin et al. 2024; Zhan et al. 2024).

## Scoring / Procedure

- Responses become capability claims by scoring against a task key and (often) comparing to a human
  baseline; the inference is about *the specific model*, not human cognition.
- Controls the lens requires (Ong, Outstanding Issue 5): report prompts, procedures, and
  hyperparameters in full (temperature; access date for proprietary models); **counterbalance** —
  permute answer choices on multiple-choice items and permute the order of information in stimuli,
  as in human studies; collect *samples* and do statistics over them rather than reading a single
  response (stochasticity is a feature, not a bug).

## Validity Concerns

- **Anthropomorphism.** Ong's flagged challenge for trait inferences: "Many psychologists would
  intuitively reject the notion of an AI having 'personality' … in the same way a human does," and
  it is "unclear even if these properties reliably affect behavior … in any systematic fashion."
- **Reliability across model updates.** LLM knowledge "depends upon their training data, and
  commercial models like GPT are updated regularly, and without the ability to use past
  checkpoints," so retesting after an update "might already change the results." (See
  [[questions/yoking-science-to-proprietary-models]].)
- **Prompt brittleness.** Performance is "susceptible to seemingly innocuous changes in the stimuli
  prompts" — reversed answer order, trivial alterations (Ullman 2023). Mathematically this
  "suggests that the model is overfitting"; cognitively, "a learnt stimulus-response (memorization),
  rather than true conceptual understanding."
- **Contamination / data leakage.** If a canonical item (Sally-Anne, K-T fallacy) is in the
  training data, success "might [be] simply from having seen and memorized it" — see Outstanding
  Issue 4 on [[sources/ong-2024]].
- **Cross-model inconsistency.** When "smaller models" fail and "bigger/better models" succeed
  (GPT-4 yes, GPT-3 no), the explanation "seem[s] like [it] would yield engineering answers, rather
  than cognitive insights" — see [[questions/bias-disappearance-contamination-or-capability]].

## Evidence

- Illustrative results are surveyed, not adjudicated (the paper is meta-level). Example capability
  claim form: empathic abilities of ChatGPT "below the average of healthy [neurotypical] humans"
  (Schaaff et al. 2023, via [[sources/ong-2024]]); cultural-value bias resembling Protestant Western
  countries (Tao et al. 2023, via the same review).

## Open Questions

- [[questions/yoking-science-to-proprietary-models]]
- [[questions/bias-disappearance-contamination-or-capability]]
- [[questions/longitudinal-behavioral-trends]]
