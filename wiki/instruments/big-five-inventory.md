---
type: instrument
field: machine-psychology
lens: na
eval_axis: propensity
tags: [personality, big-five, ocean, bfi]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Big Five Inventory (BFI)

> [!info] In plain terms
> The Big Five Inventory is a classic personality questionnaire that humans fill out to describe themselves. It scores a person on five broad traits often abbreviated OCEAN. Pellert et al. handed the same 44 statements to language models and read off a "personality" for each one. Surprisingly, the models came out looking very similar to each other: friendly, outgoing, and emotionally stable.

## What It Measures
The BFI assesses global personality in terms of the five broad dimensions of the [[theories/big-five-trait-theory]], commonly abbreviated **OCEAN**:

- **Openness** — curiosity, imagination, preference for novelty
- **Conscientiousness** — orderliness, thoroughness, self-discipline
- **Extraversion** — sociability, talkativeness, assertiveness
- **Agreeableness** — warmth, cooperativeness, trust
- **Neuroticism** — emotional instability, anxiety, negative affect

These five dimensions describe dispositional *behavioral* tendencies — how a person (or, by analogy, a model) typically acts.

## Administration
The BFI consists of **44 items**, each a self-descriptive statement (e.g., "I am someone who is talkative," "I am someone who does a thorough job"). Respondents rate each item on a **5-point Likert scale**: 1 = *disagree strongly*, 2 = *disagree a little*, 3 = *neither agree nor disagree*, 4 = *agree a little*, 5 = *agree strongly*. The inventory is available in English and German (the German BFI-44 adds an item for agreeableness; Rammstedt, 1997).

Pellert et al. administered the BFI to LLMs through [[paradigms/psychometric-inventory-administration]]. Rather than prompting generatively, each item and its candidate response options were presented to the models using zero-shot NLI classification: for every response option the model's probability of entailment was recorded, the most probable option (via argmax) was assigned as the item score, and item scores were aggregated into the five scale scores using the BFI's standard scoring rules.

## Used In
- [[paradigms/psychometric-inventory-administration]]

## Validity Notes
See [[validity/construct-validity-for-llms]]. Pellert et al. caution that, unlike performance benchmarks, inventory items have **no ground truth** — there is no "correct" answer a model should give, only a response that is then aggregated. They stress that any "personality" surfaced this way is **mimicked, not possessed**: the models are prediction machines reflecting the personalities sedimented in their training text, and reading the results in human terms risks anthropomorphism.

Pellert's key empirical finding with the BFI was that the model "personalities" were **surprisingly homogeneous** — all six English models scored relatively high on agreeableness and extraversion and low on neuroticism, yielding balanced, well-adapted profiles with no extreme accentuation.

## Sources
- [[sources/pellert-et-al-2024]]
