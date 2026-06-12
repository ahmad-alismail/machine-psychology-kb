---
type: question
field: machine-psychology
lens: psychological
tags: [scoring, value-measurement, annotation, open-problem]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Perceived vs. aligned traits: which one are we measuring?

> [!info] In plain terms
> Suppose a model says, "Wealthy individuals are not necessarily greedy; some may be motivated
> by concern for the greater good." A neutral annotator labels this as expressing the value
> *Power* (it's about social status). But a reader who personally prizes *Conformity*, not
> Power, feels the sentence matches *their own* values. So which value did the model "express"?
> The one an outside observer reads off the text (perceived), or the one it happens to resonate
> with in a given person (aligned)? This question asks which of these a trait/value score should
> even be reporting — and whether the two can be told apart.

## Why It Matters

[[sources/ye-et-al-2025]] (§8.3, drawing on Han et al. 2025a) names a discrepancy between two
quantities current scoring conflates:

- **Perceived trait** — "objective human annotation": the value/trait an outside observer reads
  off the response (in the example, *Power*).
- **Aligned trait** — "subjective human annotation": the value the response is felt to align
  with by an annotator holding particular personal values (in the example, *Conformity*).

This matters for three reasons the survey raises:

1. **Scoring assumes a universal standard.** "most scoring models or LLM-as-a-judge approaches
   assume a universal standard. How individual differences among judges affect interpretation
   remains largely unexplored" — i.e. judge subjectivity is an uncontrolled source of variance
   in [[paradigms/closed-vs-open-ended-construct-probe]]-style open-ended evaluation.
2. **It changes what an influence study measures.** When humans adopt an LLM's decisions and
   values, "it is uncertain whether they follow perceived or aligned traits" — so claims that a
   model shifts user values are ambiguous until the two are separated.
3. **It may generalize beyond values** to personality and other traits, contaminating any
   judge-scored construct.

## What Sources Say

- [[sources/ye-et-al-2025]] — introduces the perceived/aligned distinction and flags it as an
  open methodological problem; ties it to the broader mechanistic finding that LLMs express
  values via distinct **intrinsic vs. prompted** pathways (Han et al. 2025b; see
  [[theories/ai-psychometrics]]), so "similar outputs may arise from different processes."

## Suggested Investigation (toward a new paradigm)

- **Two-rater design**: score the same open-ended responses with (a) neutral content annotators
  and (b) annotators stratified by their own measured values; the gap between the two estimates
  the perceived–aligned divergence per construct.
- **Judge-panel sensitivity audit**: vary the LLM-as-judge's assigned persona/value profile and
  measure how much the trait score of a fixed response moves — quantifying judge-subjectivity
  variance the "universal standard" assumption ignores.
- **Influence disentanglement**: in a user-study, measure whether adoption tracks the perceived
  or the aligned trait, to make value-influence claims interpretable.
