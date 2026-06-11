---
type: safety-concept
field: machine-psychology
lens: na
tags: [risk-taking, risk-propensity, decision-under-risk, scaffold]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Risk-Taking

> [!info] In plain terms
> How willing an AI agent is to gamble — to choose uncertain, high-variance options over safe
> ones. A model that takes too much risk in a high-stakes setting (trading, resource
> allocation, autonomous action) can cause outsized harm; one that is risk-neutral or risk-averse
> behaves more predictably. This page is a scaffold; the experiments that measure it are linked
> below.

> [!note] Scaffold — content for the user to fill
> Structure only. The Definition / Indicators / Related Behaviors / Evidence sections await the
> user's input. The "Detected By" back-links are maintained by the ingest pipeline.

## Definition

- **[[sources/hartley-et-al-2024]]**: risk-propensity operationalized via cumulative prospect
  theory — gain sensitivity (α), loss sensitivity (β), loss aversion (λ), probability sensitivity
  (γ); a risk-neutral rational agent has α = β = λ = γ = 1.

## Indicators

_TBD by user._

## Detected By

- [[paradigms/certainty-equivalent-cpt-estimation]] — measures baseline risk-propensity / whether
  the model is a risk-neutral rational agent.
- [[paradigms/personality-intervention-risk-propensity]] — measures how induced personality shifts
  risk-propensity.
- [[paradigms/cogbench-cognitive-phenotyping]] — measures risk-taking behaviorally via the BART
  sub-task (average balloon-inflation attempts).

## Related Behaviors

_TBD by user._

## Evidence

_TBD by user._

## Open Questions

- [[questions/traits-predict-downstream-behavior]]
