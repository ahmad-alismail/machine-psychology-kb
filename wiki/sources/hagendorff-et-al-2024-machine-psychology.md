---
type: source
field: machine-psychology
lens: mixed
tags: [review, field-defining]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Machine Psychology (Hagendorff, Dasgupta, et al. 2024)

> [!info] In plain terms
> This is the paper that names and defines the field this wiki is about. It argues that
> the best way to understand what large language models can do — and what they might do
> wrong — is to run them through behavioral experiments borrowed from psychology, the way
> a psychologist studies a person: by designing clever tasks and watching the responses,
> not by opening up the machinery.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE — the paper itself proposes studying AI/LLM behavior with the methods of
psychology and the behavioral sciences; it is the field-defining review.

## Relevance to Machine Psychology

The source draws the safety connection itself: once machine-psychology test settings are
established, applying "the same tasks multiple times" across model generations yields
longitudinal data that "may be increasingly important for AI safety and AI alignment
research to predict future behavioral potentials in LLMs." It also flags two
safety-adjacent research lines it surveys: the "emerging capability of LLMs to induce
false beliefs in other agents" and how LLMs "trade off various communicative values like
honesty and helpfulness" — both feeding [[safety-concepts/deception]].

## Key Claims

- **Behavioral evaluation complements mechanistic interpretability.** Studying
  input→output relationships scales gracefully with model size, captures behavior "at
  the interface of the model, where human users interact," and works on closed-source
  models whose internals are not disclosed.
- **Experiments must be hypothesis-driven with controls**: "if the agent has
  representation or construct X, we would expect to see behavior Y, otherwise we would
  see behavior Z" — and a good control must rule out alternative explanations for Y.
- **Self-report measures are unreliable**: properties like personality or morality are
  "famously sensitive to prompting"; results should be read as contextual properties of
  a specific prompt+model, "instead of as a fundamental or general property of the LLM
  itself."
- **Cognitive biases observed in earlier models have largely disappeared** in the latest
  generation — possibly genuine capability gains, possibly training-set leakage (see
  [[questions/bias-disappearance-contamination-or-capability]]).
- **Theory-of-mind performance improved across generations** (GPT-3 struggled; later
  models "demonstrate an increasing ability to reliably infer unobservable mental states
  in others") but test setups are fragile to "distracting alterations" (Ullman 2023).
- **Interpretation requires the performance–competence distinction** — see
  [[theories/performance-competence-distinction]].
- **Methodological program** (the "Design and analysis" section): avoid training-data
  contamination by rewording or procedurally generating stimuli; use batteries of varied
  prompts rather than convenience samples; control for recency, common-token, and
  majority-label biases; compare multiple scoring methods; mind that omitted elicitation
  scaffolds (chain-of-thought, few-shot) cause capability underestimates. These lessons
  are recorded inline in the Validity Concerns sections of the paradigm pages below.

## Theories / Paradigms / Instruments Introduced

- Theories invoked: [[theories/heuristics-and-biases]], [[theories/theory-of-mind]],
  [[theories/performance-competence-distinction]], [[theories/ecological-rationality]]
- Paradigms surveyed (pages grounded in this source, at survey depth):
  [[paradigms/heuristics-and-biases-battery]], [[paradigms/content-effects-on-reasoning]],
  [[paradigms/false-belief-task]], [[paradigms/repeated-games]]
- Instruments: [[instruments/cogbench]]
- Also surveyed but not given paradigm pages (lower safety relevance): psycholinguistic
  paradigms (surprisal measures, priming, garden-path sentences, deconfounded stimuli)
  and in-context-learning/generalization paradigms (rule-based vs. exemplar-based
  generalization, novel analogy problems, data-distribution studies).

## Relationship to Other Sources

- Synthesizes the empirical work it surveys (Binz & Schulz 2023; Dasgupta et al. 2022;
  Akata et al. 2023; Ullman 2023; Strachan et al. 2024; Coda-Forno et al. 2024, among
  others) — when those primary sources are ingested, their pages should link back here
  as the framing review.

## Limitations

- A review/perspective article: paradigm descriptions are survey-depth, with no new
  experiments or data of its own; paradigm pages grounded only in this source need
  enrichment from the primary literature.
- The authors note the field's own risk: psychological terms applied to machines are
  "normatively laden and can foster mismatches in expectations" — the thick-description
  defense (using mental terms because they add explanatory power over black boxes) is a
  philosophical position, not an empirical result.
