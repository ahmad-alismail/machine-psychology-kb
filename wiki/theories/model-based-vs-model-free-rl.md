---
type: theory
field: machine-psychology
lens: psychological
tags: [reinforcement-learning, model-based, model-free, planning, two-step-task, decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Model-Based vs. Model-Free Reinforcement Learning

> [!info] In plain terms
> Two ways to learn from rewards. *Model-free* learning is habit: repeat whatever paid off last time.
> *Model-based* learning is planning: build a mental map of how the world works and reason about
> which action leads where. The two look identical on a scoreboard but differ in *how* an agent
> reaches its choices — and a planful (model-based) agent is more flexible and goal-directed, which
> matters for predicting capable AI behavior.

## Statement

Daw et al. (2011) showed human choice reflects a **combination** of model-free and model-based
reinforcement learning, and introduced the **two-step task** to dissociate them. An agent first
chooses an action that leads, via a *common* (70%) or *rare* (30%) transition, to one of two
second-stage states, where a further choice probabilistically yields reward.

- **Model-free** control: choices depend only on the previous first-stage choice and whether it was
  rewarded ("repeat what worked").
- **Model-based** control: choices account for the *transition structure* — a reward reached via a
  rare transition should change the *first-stage* choice, because the agent reasons about which
  action most likely leads to the rewarding state.

**Model-basedness** is quantified as the **reward × transition-type interaction** coefficient in a
regression predicting "stay probability" (repeating the first-stage choice). The task is designed so
model-free and model-based agents earn the *same* average reward — performance cannot distinguish
them, only behavior can.

## Relevance to Machine Psychology

[[sources/binz-schulz-2022]] is the primary machine-psychology application of the two-step task: over
200 simulations, GPT-3's stay probability *decreased* after receiving treasures via a *rare*
transition (*t*(1982) = −6.16, *p* < .001) — the model-based signature — leading the authors to
conclude GPT-3 "relies on a deliberate model-based approach." Notably this is "at odds" with GPT-3's
failure on all three CRT items ([[instruments/cognitive-reflection-test]]), so "whether GPT-3 engages
in deliberate reasoning might be more nuanced than initially thought." Building on this,
[[sources/coda-forno-et-al-2024]] measures LLM model-basedness at scale, finding it rises with model
size (β = 0.481, z = 4.2, p < 0.001) — GPT-4 surpasses human levels — and is strongly boosted by
take-a-step-back prompting (+118.59%).

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — two-step sub-task (reuses the Binz & Schulz protocol).

## Sources

- [[sources/binz-schulz-2022]] — primary GPT-3 two-step-task application.
- [[sources/coda-forno-et-al-2024]]
