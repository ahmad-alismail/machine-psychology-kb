---
type: question
field: machine-psychology
lens: psychological
tags: [training-data, provenance, open-problem]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Does training-data provenance shape a model's psychometric traits?

> [!info] In plain terms
> If a model trained on text from one corner of the internet ends up "different" from one
> trained on another, then a model's personality and values are downstream of what it read.
> This question asks how much of a model's measured profile traces back to *which* texts it
> was trained on — and proposes the controlled comparison that would show it.

## Why It Matters

[[theories/ai-psychometrics]] assumes traits are "sedimented" from training corpora, but the
acquisition arrow is asserted, not measured. Pinning down corpus → trait would (a) make
profiles *interpretable* (a bias has a source), (b) suggest *interventions* (curate the
corpus to shift the trait), and (c) test the sedimentation hypothesis itself. It is the
upstream complement to [[questions/traits-predict-downstream-behavior]].

## What Sources Say

- [[sources/pellert-et-al-2024]] poses the general version — "To what extent do models absorb
  (psychometric) aspects of their underlying training data?" — with concrete sub-questions:
  do models trained on text from "special communities on Reddit or 4chan" acquire matching
  characteristics? Do books/movie plots preferred by certain personality types induce similar
  traits? Does filtering of text about sexual-minority groups (Dodge et al. 2021) shape the
  models' diversity conceptions? It proposes isolating data's role by comparing **model series
  with identical architecture and training parameters that differ only in corpus** (e.g.
  TimeLMs; Loureiro et al. 2022).

## Suggested Investigation (toward a new paradigm)

- **Corpus-controlled series.** Profile a family of models that share architecture and
  hyperparameters but differ in training corpus; attribute profile differences to the corpus.
- **Ablation by provenance.** Add/remove a provenance-tagged slice (e.g. a specific community)
  and measure the trait shift via
  [[paradigms/psychometric-inventory-administration]].
- Relates to [[questions/bias-disappearance-contamination-or-capability]] (are profile shifts
  real trait change or instrument artifacts?).
