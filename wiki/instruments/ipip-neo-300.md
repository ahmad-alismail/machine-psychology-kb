---
type: instrument
field: machine-psychology
lens: psychological
tags: [personality, big-five, inventory, ipip]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# IPIP-NEO-300 Personality Inventory

> [!info] In plain terms
> A 300-question personality quiz from the public-domain International Personality Item Pool.
> It scores the same five broad traits as the shorter Big Five questionnaires but in much more
> detail, breaking each trait into several finer "facets." Here it is given to a language model
> to read off its baseline personality profile.

## What It Measures

The **Big Five / Five-Factor Model** ([[theories/big-five-personality]]) — Openness,
Conscientiousness, Extraversion, Agreeableness, Neuroticism — decomposed into lower-level
**facets**. For example, Conscientiousness's first four facets are self-efficacy, orderliness,
dutifulness, and achievement-striving; the item "Worry about things" loads on the *Anxiety* facet
of Neuroticism (Goldberg et al. 1999).

## Administration

300 items, each rated on a **1–5 scale** measuring association with a personality facet. Trait
scores are the sum of responses for the facets belonging to each trait. In
[[sources/hartley-et-al-2024]] it is administered to GPT-4o by prompting it to self-report, over
25 runs, and the resulting trait scores are compared to a human sample (Johnson 2005, UK citizens
aged 30+).

## Used In (paradigms)

- [[paradigms/personality-intervention-risk-propensity]] — baseline personality self-report.

## Validity Notes

- Longer and more facet-rich than the [[instruments/big-five-inventory]] (BFI-44); both measure
  the same Five-Factor constructs.
- Canonical, widely circulated public-domain items → contamination risk in LLM training corpora;
  results should not be generalized beyond the system prompt used (Röttger et al. 2024).

## Sources

- [[sources/hartley-et-al-2024]]
