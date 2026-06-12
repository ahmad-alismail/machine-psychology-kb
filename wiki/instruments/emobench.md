---
type: instrument
field: machine-psychology
lens: psychological
tags: [emotion, emotional-intelligence, multiple-choice, benchmark]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# EmoBench

> [!info] In plain terms
> A multiple-choice test of emotional intelligence: can the model figure out what someone is
> feeling and why (understanding), and can it pick a good way to respond to an emotional
> situation (application)? It comes with ground-truth answers and a human baseline to compare
> against.

## What It Measures

**Emotional intelligence** (Sabour et al. 2024), grounded in established psychological theory
(Salovey & Mayer 1990). Two sub-tests:
- **Emotion Understanding (EU)** — comprehending emotions and their underlying causes in a
  scenario.
- **Emotion Application (EA)** — applying emotional understanding to resolve emotional dilemmas
  (e.g. responding to a late-night text from a friend after a breakup).

## Administration

200 multiple-choice items per sub-test in [[sources/li-et-al-2024]], each with ground-truth
labels; scored by automatic key-matching. Robustness checked by rotating the correct option
across positions A–D and measuring score standard deviation σ.

## Used In (paradigms)

- [[paradigms/psychometric-inventory-administration]] — emotion-reasoning battery with a
  ground-truth key.

## Validity Notes

- [[sources/li-et-al-2024]]: all nine models score below 65% on both tests; best EU 58.4%
  (Llama3-70b) and best EA 64.7% (GPT-4), well below EmoBench's reported human baselines (~70%
  EU / ~78% EA). Position-bias σ is larger on EA than EU, and largest for the Llama3 series.

## Sources

- [[sources/li-et-al-2024]]
