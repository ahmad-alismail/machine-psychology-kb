---
type: instrument
field: machine-psychology
lens: psychological
tags: [emotion, affect, panas, mood, likert]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# PANAS (Positive and Negative Affect Schedule)

> [!info] In plain terms
> A short, widely used mood checklist. It lists twenty feeling words — ten pleasant ("excited",
> "inspired") and ten unpleasant ("upset", "afraid") — and you rate how strongly you feel each one
> right now, from 1 ("very slightly or not at all") to 5 ("extremely"). Add up the ten positive
> words for one score and the ten negative words for another. It is the simple, direct instrument
> in EmotionBench because it asks about emotions head-on.

## What It Measures

**Positive affect** and **negative affect** as two separate components of current mood/emotion
(Watson et al. 1988). PANAS can be keyed to different time frames (this moment, the past day/week/
year, or "in general"), so it measures state affect, trait/dispositional affect, fluctuations over
a period, or emotional responses to events — in EmotionBench it is used as a **present-moment
state** measure, before and after situation imagination.

## Administration

20 items, **10 positive + 10 negative**, each rated on a 5-point Likert scale from 1 ("Very
slightly or not at all") to 5 ("Extremely"). Each component is scored by **summing its ten items**,
giving a positive and a negative score each ranging **10–50**; higher = more of that affect.
Described by [[sources/huang-et-al-2025]] as "a straightforward and easy benchmark" because it
inquires directly into emotional states. Administered to LLMs with question order randomized per
run and numeric-only responses enforced.

## Used In (paradigms)

- [[paradigms/emotion-appraisal-situation-induction]] — the **primary** pre/post measure for both
  LLMs and the human baseline.

## Validity Notes

- Canonical, widely circulated affect scale → contamination risk in LLM training corpora;
  [[sources/huang-et-al-2025]] does **not** paraphrase items, relying on order randomization
  instead.
- Direct emotion-naming makes PANAS an *easier* test than the eight emotion-specific "challenging
  benchmarks" in [[instruments/emotionbench-situation-set]], which require inferring the emotion
  from indirect statements.
- Observed ceiling/floor artifacts on models (e.g. GPT-4's negative score floors at 10.0 ± 0.0)
  show measured affect is partly entangled with instruction-following — see the paradigm's
  Validity Concerns.

## Sources

- [[sources/huang-et-al-2025]]
