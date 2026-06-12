---
type: theory
field: machine-psychology
lens: psychological
tags: [decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Heuristics and Biases

> [!info] In plain terms
> People rarely reason like calculators. Instead they use mental shortcuts ("heuristics")
> that are usually fast and good enough, but that fail in predictable ways ("biases") —
> like judging how likely something is by how easily examples come to mind. Because these
> failures are predictable, they make great experimental probes: show someone a trick
> question and their answer reveals how they actually think.

## Statement

Heuristics are "mental shortcuts that simplify reasoning or decision-making processes"
(Tversky & Kahneman 1974; Gigerenzer & Gaissmaier 2011). The framework studies how such
shortcuts "can help explain both the successes and the biases" in behavior. Key testable
prediction: an agent relying on a given heuristic will produce systematic, predictable
errors on stimuli engineered to put the shortcut in conflict with the normatively correct
answer — and a related prediction, that problem *phrasing* changes solutions (framing;
Tversky & Kahneman 1981; Cheng & Holyoak 1985).

## Relevance to Machine Psychology

[[sources/hagendorff-et-al-2024]] calls the framework "fertile ground"
for examining shortcuts in LLMs, "whose capabilities now overlap more with the human
abilities this literature studies": if an LLM shows a classic bias pattern, that reveals
the decision procedure it actually uses, independent of benchmark accuracy.

[[sources/binz-schulz-2022]] supplied an early primary instance: GPT-3 fell for the **conjunction
fallacy** (Linda) and showed **sample-size insensitivity** (hospital) like people, but — unlike
people — *avoided* the **base-rate fallacy** (cab) and the **congruence bias** in diagnostic test
selection, a mixed bias profile read off response-by-response rather than from an accuracy score.

## Paradigms Grounded in This Theory

- [[paradigms/heuristics-and-biases-battery]]
- [[paradigms/content-effects-on-reasoning]] — the framing/content-sensitivity branch
- [[paradigms/adversarial-vignette-perturbation]] — pairs these canonical bias items with perturbed
  twins to control for contamination.

## Sources

- [[sources/hagendorff-et-al-2024]]
- [[sources/binz-schulz-2022]] — primary GPT-3 application of the canonical bias vignettes.
