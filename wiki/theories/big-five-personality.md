---
type: theory
field: machine-psychology
lens: psychological
tags: [big-five, five-factor-model, personality, ocean]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Big Five / Five-Factor Model of Personality

> [!info] In plain terms
> The most widely accepted map of human personality: nearly any way a person differs
> dispositionally can be summarized along five broad dimensions — Openness,
> Conscientiousness, Extraversion, Agreeableness, and Neuroticism (the acronym OCEAN). Decades
> of human research tie these traits to behaviour, including how much risk someone takes. This
> page is the personality-theory layer; the questionnaires that measure it live on the
> instrument pages.

## Statement

The Big Five (Five-Factor Model) holds that human personality is well described by five
largely independent trait dimensions — **Openness, Conscientiousness, Extraversion,
Agreeableness, Neuroticism** (OCEAN) (McCrae & Costa 1987; Costa & McCrae 1992; Goldberg et al.
1999). Each trait decomposes into lower-level **facets** (e.g. Conscientiousness → self-efficacy,
orderliness, dutifulness, achievement-striving), measured by self-report inventories.

A key body of testable predictions concerns the **personality → risk-propensity** relationship
in humans, which [[sources/hartley-et-al-2024]] tests on LLMs:

- **Openness** — consistent positive predictor of risk-taking; positively associated with risk
  for gains, negatively for losses (Rustichini et al. 2016); accounts for ~22% of variance in
  risk-propensity (Highhouse et al. 2022) — the single most influential trait.
- **Extraversion** — positively correlates with risk-taking (Nicholson et al. 2005; Oehler &
  Wedlich 2018).
- **Neuroticism** — inversely related to risk-taking; greater risk-aversion, esp. in investment.
- **Agreeableness** — inversely related to risk-taking.
- **Conscientiousness** — complex: low Conscientiousness → more risk-taking for gains (Weller &
  Thulin 2012); high Conscientiousness → pronounced loss aversion (Boyce et al. 2016).

## Relevance to Machine Psychology

[[sources/hartley-et-al-2024]] treats these human trait→risk correlations as a benchmark: it
asks whether an LLM *generalises* them — i.e. whether inducing a Big-Five trait via prompting
shifts the model's risk-propensity in the human-predicted direction. GPT-4o reproduces the
Openness and Extraversion patterns (and the Conscientiousness/Agreeableness directions) but
breaks the Neuroticism pattern, while GPT-4-Turbo generalises only locally.

## Paradigms Grounded in This Theory

- [[paradigms/personality-intervention-risk-propensity]]

## Sources

- [[sources/hartley-et-al-2024]]
