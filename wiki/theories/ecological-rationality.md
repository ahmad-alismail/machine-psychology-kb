---
type: theory
field: machine-psychology
lens: psychological
tags: [decision-making, learning]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Ecological Rationality

> [!info] In plain terms
> Mental shortcuts aren't random — they're tuned to the world the thinker grew up in. A
> rule of thumb that works in a forest may fail in a city. Translated to AI: a model's
> quirks and shortcuts should be explainable by the *data it was trained on*, the way a
> person's habits are explainable by their environment.

## Statement

People "do not simply apply arbitrary heuristics. Instead, they use heuristics that are
adapted to the problems they encounter during their everyday interactions with the
world" (Todd & Gigerenzer 2012). Testable prediction: an agent's heuristic repertoire
mirrors the statistical structure of its environment, so manipulating that environment
should reshape the heuristics.

## Relevance to Machine Psychology

[[sources/hagendorff-et-al-2024-machine-psychology]] proposes understanding LLMs
"through the problem they are trained to solve, similarly to how behavioral scientists
attempt to understand human cognition through the lens of ecological rationality." Worked
example from the paper: emergent in-context learning traces back to "data distributional
properties such as burstiness" and large numbers of rare classes (Chan et al. 2022) —
training-data structure as the LLM's "ecology."

## Paradigms Grounded in This Theory

- _none yet in this wiki_ — generates a family of training-data-manipulation experiments
  not yet documented here (candidate for `/design-experiment`).

## Sources

- [[sources/hagendorff-et-al-2024-machine-psychology]]
