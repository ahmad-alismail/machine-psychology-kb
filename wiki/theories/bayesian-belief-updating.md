---
type: theory
field: machine-psychology
lens: psychological
tags: [bayesian, belief-updating, probabilistic-reasoning, system-neglect, decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Bayesian Belief Updating (and System Neglect)

> [!info] In plain terms
> The math of changing your mind correctly: combine what you believed before (the "prior") with
> new evidence (the "likelihood") to get an updated belief. People are systematically sloppy at
> this — they tend to underweight *both* their prior and the new evidence, a quirk called "system
> neglect." Measuring how much an agent leans on priors versus evidence reveals whether its
> reasoning is biased, over-confident, or stubborn.

## Statement

Bayes' rule prescribes how to update the probability of a hypothesis given new evidence:
P(A|B) ∝ P(B|A) · P(A), combining the **prior** P(A) and the **likelihood** P(B|A). A
**generalized** form adds weights to capture biased updating:

P(A|B) ∝ P(B|A)^β₂ · P(A)^β₁

where **β₁** is the prior weighting and **β₂** the likelihood weighting; a perfect Bayesian has
β₁ = β₂ = 1. The model is linear in log-odds and so the weights are recoverable by regression.

Key empirical prediction: **system neglect** (Massey & Wu 2005) — people "underweight both priors
and likelihoods" (β₁, β₂ < 1), being insufficiently sensitive to how informative a signal is.

## Relevance to Machine Psychology

[[sources/coda-forno-et-al-2024]] administers a wheel-of-fortune-and-urns probabilistic-reasoning
task to LLMs and recovers β₁ and β₂, finding models "place much more weight on priors than
observations" — an asymmetry distinct from the human pattern of underweighting both. The same study
shows chain-of-thought prompting improves posterior accuracy, i.e. moves the weights toward Bayes.

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — probabilistic-reasoning sub-task.

## Sources

- [[sources/coda-forno-et-al-2024]]
