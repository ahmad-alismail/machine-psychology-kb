---
type: instrument
field: machine-psychology
lens: psychological
tags: [personality, big-five, vignette, open-ended]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Big-Five Vignette Test

> [!info] In plain terms
> Instead of asking "rate how outgoing you are 1–5," this test gives a short real-world story
> and asks the model to respond freely, then reads the personality off the response. It is the
> open-ended counterpart to the tick-box Big Five quiz — used to catch the gap between what a
> model *says* about itself and how it *behaves*.

## What It Measures

The **Big Five / Five-Factor Model** traits (O/C/E/A/N) — but elicited behaviorally rather
than by self-rating. "The vignette test uses a short paragraph of real-world scenarios to
elicit open-ended responses that reveal psychological traits" (Kwantes et al. 2016).

## Administration

5 open-ended vignette items (sourced from Kwantes et al. 2016). In [[sources/li-et-al-2024]]
the free-text responses are scored by two LLM raters, GPT-4 and Llama3-70b, each assigning a
personality score 1–5; the final score is the average of the two raters' evaluations.

## Used In (paradigms)

- [[paradigms/closed-vs-open-ended-construct-probe]] — the open-ended leg paired against the
  closed-form [[instruments/big-five-inventory]] self-rating.

## Validity Notes

- Scored by LLM-as-judge; [[sources/li-et-al-2024]] reports inter-rater weighted κ = 0.86 on
  these vignettes, but agreement is not construct validity.
- Less canonical than the BFI, so it carries lower contamination risk — but that very
  asymmetry can produce an apparent self-report↔behavior gap.

## Sources

- [[sources/li-et-al-2024]]
