---
type: safety-concept
field: machine-psychology
lens: na
tags: [scaffold]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Value Alignment

> [!info] In plain terms
> _TBD by user — scaffold created during ingest of [[sources/lei-et-al-2024]] (FairMindSim), which
> asks whether an LLM agent shares human moral/social values — specifically fairness and justice —
> by watching whether it will pay a personal cost to punish an unfair allocation, and whether that
> "belief in fairness" stays stable over repeated rounds. The paper finds GPT-4o enforces fairness
> more than humans do and holds a steadier fairness belief, while humans' values fluctuate with
> emotion. Distinct from a dangerous *capability*: here the question is whether the model's elicited
> values match human norms, and whether they drift._

## Definition

_TBD by user._

## Indicators

_TBD by user._

## Detected By

- [[paradigms/altruistic-punishment-game]] — the FairMindSim third-party ultimatum game measures
  whether an LLM agent will pay a cost to punish unfair allocations (rejection rate as the behavioral
  signal), and the BREM layer fits a latent "belief in fairness/justice" and tracks whether it stays
  stable across 20 rounds ([[sources/lei-et-al-2024]]).
- [[paradigms/closed-vs-open-ended-construct-probe]] — for the values dimension, compares
  closed-form value ratings against behavior on moral/human-centered-value scenarios
  ([[instruments/moralchoice]], [[instruments/human-centered-values-survey]]); finds standard
  value adherence (>90%) collapses by >20% under persuasive adversarial framing (ChatGPT), and
  high-ambiguity moral discernment is weak (top model 74.3% commonsense alignment)
  ([[sources/li-et-al-2024]]).

## Related Behaviors

_TBD by user._

## Evidence

_TBD by user._

## Open Questions

_TBD by user._
