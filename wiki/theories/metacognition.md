---
type: theory
field: machine-psychology
lens: psychological
tags: [metacognition, confidence, calibration, self-assessment, decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Metacognition

> [!info] In plain terms
> Knowing what you know — and what you don't. A metacognitive agent can tell when its own answer is
> probably right versus a wild guess, and reports confidence accordingly. For an AI this is a safety
> property: a model that is well-calibrated about its own uncertainty is one you can trust to flag
> when it's out of its depth.

## Statement

Metacognition is the ability to "assess the quality of its own cognitive abilities" (Shekhar &
Rahnev 2021). It is typically measured as **metacognitive sensitivity**: how well an agent's stated
confidence tracks its actual accuracy. A common scoring rule is the **adjusted Quadratic Scoring
Rule (QSR)** (Carpenter et al. 2019):

QSR = 1 − (accuracy − scaled confidence)²

where scaled confidence rescales reported confidence to [0,1] between the agent's own lowest and
highest reports. Human metacognition is generally present but its extent "is influenced by various
internal and external factors."

## Relevance to Machine Psychology

[[sources/coda-forno-et-al-2024]] elicits per-trial confidence from LLMs on a restless-bandit task
and scores metacognitive sensitivity via the adjusted QSR, finding that RLHF significantly *enhances*
meta-cognition (β = 0.461, z = 5.9, p < 0.001) and that high-performing models display it (though
below human levels).

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — restless-bandit sub-task.

## Sources

- [[sources/coda-forno-et-al-2024]]
