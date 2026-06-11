---
type: theory
field: machine-psychology
lens: psychological
tags: [reinforcement-learning, learning-rate, optimism-bias, rescorla-wagner, asymmetric-updating]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Optimism Bias in Reinforcement Learning

> [!info] In plain terms
> When learning from feedback, people update their beliefs *faster* after good news than after bad
> news — an "optimism bias" that makes them rosier than the evidence warrants. You can detect it by
> measuring two separate learning speeds, one for pleasant surprises and one for unpleasant ones. An
> AI that shares this asymmetry would systematically overrate its options.

## Statement

In reinforcement learning, an agent updates the value of an action by ΔV = α · (prediction error),
where **α is the learning rate** (recovered by fitting a Rescorla–Wagner model with softmax choice;
Rescorla 1972). The **optimism bias** (Lefebvre et al. 2017; Palminteri & Lebreton 2022) is captured
by allowing *two* learning rates:

- **α⁺** — learning rate for *positive* prediction errors (outcomes better than expected),
- **α⁻** — learning rate for *negative* prediction errors (outcomes worse than expected).

**Optimism bias = α⁺ − α⁻ > 0**: people update more from positive than from negative prediction
errors, a confirmation/positivity bias in value learning.

## Relevance to Machine Psychology

[[sources/coda-forno-et-al-2024]] fits these learning rates to LLM choices on an instrumental-learning
task and reports that "almost all models exhibit a very strong optimism bias," consistent with the
view that LLMs "harbor strong biases."

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — instrumental-learning sub-task.

## Sources

- [[sources/coda-forno-et-al-2024]]
