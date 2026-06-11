---
type: theory
field: machine-psychology
lens: psychological
tags: [exploration, explore-exploit, bandit, decision-making, uncertainty]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Directed and Random Exploration

> [!info] In plain terms
> When you don't know which option is best, you face the explore–exploit dilemma: keep grabbing the
> choice that has paid off so far, or try the unknown one to learn more? People do both in two
> distinct ways — *directed* exploration deliberately seeks out the more uncertain option, while
> *random* exploration just adds noise to choices. Telling these apart shows whether an agent
> explores strategically or by accident.

## Statement

The explore–exploit trade-off (Wilson et al. 2014; Brandle et al. 2021) is solved by humans with a
**combination of two strategies**:

- **Directed exploration** — uncertainty-driven: deliberately choosing the *less observed* / more
  uncertain option to gain information. Measured by how an agent's choices respond to the decision
  *horizon* (longer horizons make information more valuable, so exploration should increase).
- **Random exploration** — noise injected into the policy: choosing the lower-value option simply
  through stochasticity. Measured by how reward-difference sensitivity changes with horizon (a
  reward × horizon interaction).

The horizon task operationalizes both by contrasting a short (1 free choice) vs. long (6 free
choices) horizon and equal- vs. unequal-information conditions.

## Relevance to Machine Psychology

[[sources/binz-schulz-2022]] is the primary machine-psychology application: a text-based horizon
task given to GPT-3, which achieved *lower* overall regret than humans (*M* = 2.72 vs. 3.24,
*t*(38878) = −5.03, *p* < .001) yet showed only **rudimentary random exploration** (reward-difference
effect β = 0.18 ± 0.01, *p* < .001), with **no strategic** random exploration (reward × horizon
interaction *p* = .14) and **no directed exploration** (β = −0.15 ± 0.27, *p* = .58) — plus a strong
perseveration/repeat bias. The same dissociation (win by exploitation, lack human exploratory
strategy) recurs in [[sources/coda-forno-et-al-2024]], which finds most models reach "super-human
performance" yet "still lack exploration" — a gap a performance score alone would hide. (Human
horizon baseline: Zaller et al. 2021.)

## Paradigms Grounded in This Theory

- [[paradigms/cogbench-cognitive-phenotyping]] — horizon sub-task (reuses the Binz & Schulz protocol).

## Sources

- [[sources/binz-schulz-2022]] — primary GPT-3 horizon-task application.
- [[sources/coda-forno-et-al-2024]]
