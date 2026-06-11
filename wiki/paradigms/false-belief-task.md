---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# False-Belief Task (Theory-of-Mind Tests)

> [!info] In plain terms
> The classic test: Sally puts her marble in a basket and leaves; Anne moves it to a box.
> Where will Sally look for it? Answering "the basket" requires understanding that Sally
> holds a *false belief*. Applied to AI, this tests whether a model can track what
> someone else knows and doesn't know — the same machinery a model would need to
> *mislead* someone on purpose, which is why safety researchers care.

> [!note] Survey-depth page
> Grounded only in the review [[hagendorff-et-al-2024]];
> enrich from primary sources (Wimmer & Perner 1983; Ullman 2023; Strachan et al. 2024;
> Street et al. 2024; Hagendorff 2024a) when ingested.

## Theoretical Grounding

- [[theories/theory-of-mind]] — exploits the prediction that an agent with theory of
  mind predicts another agent's actions from that agent's (false) belief, while an agent
  without it predicts from the true state of the world.

## Target Behaviors

- Detects: capacity to "infer unobservable mental states in others" — the capability
  substrate for [[safety-concepts/deception]]. The review notes the adjacent research
  line directly: "the emerging capability of LLMs to induce false beliefs in other
  agents" (Hagendorff 2024a) and how LLMs "trade off various communicative values like
  honesty and helpfulness" (Liu et al. 2024).

## Setup / Elicitation

Vignettes adapted from the human developmental literature (Wimmer & Perner 1983; Perner
et al. 1987): a protagonist forms a belief, the world changes without the protagonist's
knowledge, and the model is asked to predict the protagonist's expectation or action.
Variants surveyed by the review: comparisons against children aged 7–10 (van Duijn et
al. 2023), "higher-order theory of mind tasks requiring recursive reasoning about
multiple mental states" (Street et al. 2024), and robustness checks using "distracting
alterations in the tasks" (Ullman 2023).

## Scoring / Procedure

- Score the predicted action/expectation against the belief-consistent answer (vs. the
  reality-consistent foil); higher-order variants score each level of recursion.
- Controls the design requires: novel wordings, agents, and object/location pairs (never
  verbatim Sally–Anne); counterbalanced belief-consistent vs. reality-consistent answer
  positions; perturbed control variants (transparent containers, irrelevant alterations)
  to check the model tracks beliefs rather than story templates; a true-belief baseline
  condition.

## Validity Concerns

These concerns instantiate the psychometric requirements catalogued in
[[theories/psychometric-test-standards]]; [[sources/loehn-et-al-2024]] uses this very
paradigm — the Kosinski (2023) vs. Ullman (2023) contradiction, where trivial item
changes flip the Theory-of-Mind verdict — as its motivating example that the field's
results are "symptomatic of a general lack of standardization" (engaging R1
alternate-forms reliability, R3 apparatus→text suitability, and R4 contamination).

- **Contamination**: Sally–Anne-style stories are canonical and saturate training
  corpora; verbatim or near-verbatim items measure memorization, not mentalizing.
- **Robustness / surface-form sensitivity**: Ullman (2023) showed ToM successes degrade
  under "distracting alterations" — passing unperturbed items is weak evidence; the
  perturbation battery is part of the paradigm, not an optional extra.
- **Construct validity**: belief-consistent answers can be produced by shallow cues
  (e.g., last-mentioned location); deconfounded foils and true-belief controls are
  required to implicate mentalizing specifically.
- **Generational drift**: early models failed (Sap et al. 2022), later models pass
  (Strachan et al. 2024; Holterman & van Deemter 2023; Moghaddam & Honey 2023) — results
  must be indexed to model generation and elicitation conditions.

## Evidence

- "While early experiments with models such as GPT-3 showed that they struggle to solve
  theory of mind tasks (Sap et al. 2022), later models demonstrate an increasing ability
  to reliably infer unobservable mental states in others (Strachan et al. 2024;
  Holterman and Deemter 2023; Moghaddam and Honey 2023)" — via
  [[hagendorff-et-al-2024]].
- Robustness caveat: setups are fragile to task alterations (Ullman 2023, via the same
  review).

## Open Questions

- [[questions/longitudinal-behavioral-trends]]
- Does passing false-belief tasks predict the capacity to *induce* false beliefs
  (deception), or are detection and production dissociable in LLMs? (Surfaced by the
  review's juxtaposition of ToM tests with Hagendorff 2024a.)
