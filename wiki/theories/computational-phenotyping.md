---
type: theory
field: machine-psychology
lens: psychological
tags: [computational-phenotyping, cognitive-modeling, individual-differences, behavioral-metrics]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Computational Phenotyping

> [!info] In plain terms
> A "fingerprint" of how a mind works, written as a list of numbers. Instead of describing an agent
> in words, you fit mathematical models to its choices and read off parameters — how fast it learns,
> how much risk it takes, how planful it is. That parameter vector is its *computational phenotype*,
> and it lets you compare any two agents (people, or AI models) on the same precise scale.

## Statement

A **computational phenotype** is "a collection of mathematically derived parameters that precisely
describe individuals across different domains" (Patzelt et al. 2018; Montague et al. 2012; Schurr et
al. 2023). Originating in computational psychiatry, the approach fits cognitive models (reinforcement
learning, Bayesian updating, drift-diffusion, etc.) to behavior and treats the recovered parameters
as a quantitative profile of an individual's cognition. It enables:

- **Comparison on a common scale** across individuals (or, here, models).
- **Mechanistic description** — parameters name *how* a task is solved, not just how well.
- **Dissociation of behaviors** that performance scores alone conflate.

## Relevance to Machine Psychology

[[sources/coda-forno-et-al-2024]] is built on this framing: it derives a ten-metric computational
phenotype for each of 35 LLMs by fitting cognitive models to their task choices, then uses the
phenotype vectors (via UMAP and multilevel regression) to relate model features — size, RLHF, code
fine-tuning — to behavioral profiles. The phenotype is what reveals, e.g., that two models with equal
performance differ sharply in risk-taking and exploration.

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]]

## Sources

- [[sources/coda-forno-et-al-2024]]
