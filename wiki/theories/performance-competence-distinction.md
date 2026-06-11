---
type: theory
field: machine-psychology
lens: psychological
tags: [methodology, interpretation]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Performance–Competence Distinction

> [!info] In plain terms
> Someone fumbling a mental-math problem doesn't mean they can't do math — they might be
> tired, rushed, or confused by the wording. What an agent *does* in one situation
> (performance) can understate what it *can do* (competence). For AI evaluation this is a
> warning label: a model failing your test doesn't prove the ability is absent, and that
> cuts both ways when deciding how much to trust an experiment's negative result.

## Statement

"The way humans *perform* in a particular situation may not fully capture their
underlying *competence*" (Chomsky 1965). Humans make mistakes on easy calculations and
produce ungrammatical speech without lacking the abstract capability for math or
language. The testable consequence: a negative behavioral result licenses inferring the
absence of a construct only after performance-degrading factors (task wording, format,
elicitation conditions) have been ruled out.

## Relevance to Machine Psychology

[[hagendorff-et-al-2024]] flags this as one of two key
interpretive principles for LLM experiments (citing Firestone 2020; Lampinen 2022):
"does the absence of behavior Y indicate the absence of the construct X?" In practice,
omitting elicitation scaffolds such as chain-of-thought or few-shot examples "can lead
to underestimations of the model's capabilities" — every negative finding inherits this
caveat. See [[questions/longitudinal-behavioral-trends]] for the related interpretive
gap.

## Paradigms Grounded in This Theory

- Cross-cutting: it constrains interpretation of *all* paradigms rather than generating
  designs of its own; each paradigm page records the resulting elicitation controls in
  its Validity Concerns section.

## Sources

- [[hagendorff-et-al-2024]]
