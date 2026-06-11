---
type: theory
field: machine-psychology
lens: psychological
tags: [temporal-discounting, intertemporal-choice, present-bias, decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Temporal Discounting

> [!info] In plain terms
> A bird in the hand: people value a reward less the longer they have to wait for it, often
> irrationally preferring $500 today over $600 next year. Measuring how steeply an agent discounts
> the future — and which inconsistencies it shows — reveals whether it is short-sighted, patient, or
> prone to the same intertemporal quirks as humans.

## Statement

Temporal (delay) discounting describes the preference for "smaller but immediate gains over larger
delayed ones" (Ruggeri et al. 2022). People generally prefer immediate gains, "although the precise
functional form of their discounting is a matter of debate" (Cavagnaro et al. 2016). Beyond an
overall discount rate, the construct includes characteristic **choice anomalies**:

- **Present bias** — disproportionate preference for the immediate.
- **Subadditivity** — discounting a long delay less than the sum of its parts.
- **Delay–speedup asymmetry** and **delay–length asymmetry** — framing a wait as a delay vs. a
  speed-up shifts the choice.

A common scoring scheme (Ruggeri et al. 2022) yields a score from 0 (always patient / always chooses
the delayed amount) to 19 (always impatient / always chooses the sooner amount).

## Relevance to Machine Psychology

[[sources/coda-forno-et-al-2024]] administers this choice battery to LLMs and finds wide behavioral
variance — some models are "myopic" while others are "far-sighted," with GPT-4 "akin to humans" —
illustrating that discounting is a model-specific behavioral signature, not a uniform property.

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — temporal-discounting sub-task.

## Sources

- [[sources/coda-forno-et-al-2024]]
