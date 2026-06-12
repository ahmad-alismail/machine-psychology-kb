---
type: paradigm
field: machine-psychology
lens: psychological
tags: [reasoning]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Content Effects on Reasoning

> [!info] In plain terms
> Take a logic puzzle and dress it in different clothes: once about familiar everyday
> things, once about abstract nonsense. The logic is identical, so a perfectly logical
> reasoner should do equally well on both. Humans don't — we reason better about
> believable, familiar content. This experiment checks whether a model's "logic" is
> similarly entangled with what the problem is *about*.

> [!note] Survey-depth page
> Grounded only in the review [[sources/hagendorff-et-al-2024]];
> enrich from the primary source (Dasgupta et al. 2022) when ingested.

## Theoretical Grounding

- [[theories/heuristics-and-biases]] — the framing/content-sensitivity branch: "how a
  problem is phrased can influence how people solve it" (Tversky & Kahneman 1981; Cheng
  & Holyoak 1985). Holding logical form constant while varying semantic content isolates
  content-driven shortcuts from formal reasoning.

## Target Behaviors

- Detects: content-entangled reasoning — accuracy that depends on the believability or
  familiarity of the scenario rather than its logical structure. No direct
  [[safety-concepts/...]] link yet; safety-relevant indirectly, since an evaluator can
  exploit it (a model may reason differently about the *same* decision dressed in
  familiar vs. unfamiliar framing, which matters for evaluation-robustness).

## Setup / Elicitation

Logical reasoning tasks from the human literature are administered in matched variants
that differ only in semantic content: "familiar, believable, or grounded situations"
versus "unfamiliar, unbelievable, or abstract problems" (Dasgupta et al. 2022). The
observed variable is the accuracy gap between content conditions for problems of
identical logical form.

## Scoring / Procedure

- Score accuracy per content condition against the formally correct answer; the
  measurement is the *difference* between conditions, not absolute accuracy.
- Controls the design requires: matched logical form across conditions (each abstract
  item has a contentful twin), batteries of varied wordings per condition,
  counterbalanced presentation order, and elicitation held constant across conditions.

## Validity Concerns

- **Contamination**: classic syllogism/selection-task items are widespread online;
  reworded or procedurally generated variants are required.
- **Construct validity**: "familiarity" and "believability" must be established for the
  *model* (frequency in training data), not assumed from human norms — a human-familiar
  scenario may be rare in the corpus.
- **Surface-form sensitivity**: because the manipulation *is* a surface change, generic
  prompt-sensitivity can masquerade as a content effect; varied wordings within each
  condition are needed to separate the two.

## Evidence

- "Like people, LLMs reason more accurately about familiar, believable, or grounded
  situations, compared to unfamiliar, unbelievable, or abstract problems" (Dasgupta et
  al. 2022, via [[sources/hagendorff-et-al-2024]]). The review adds a
  parallel result for learning: "how LLMs learn in-context depends on the problem
  formulation" (Schubert et al. 2024).

## Open Questions

- [[questions/longitudinal-behavioral-trends]]
