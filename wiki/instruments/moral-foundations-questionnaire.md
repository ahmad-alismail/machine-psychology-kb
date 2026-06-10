---
type: instrument
field: machine-psychology
lens: na
eval_axis: propensity
tags: [morality, moral-foundations, mfq, political-leaning]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Moral Foundations Questionnaire (MFQ)

> [!info] In plain terms
> The Moral Foundations Questionnaire measures which kinds of moral concerns matter most to a person — for example, avoiding harm, fairness, group loyalty, respect for authority, and purity. Pellert et al. gave it to language models and compared their answers to those of an average American. The models leaned toward the moral concerns more typical of politically conservative people.

## What It Measures
The MFQ assesses **moral intuitions** as organized by [[theories/moral-foundations-theory]], which proposes that human moral judgment rests on a small set of innate, culturally elaborated foundations:

- **Care/harm** — concern for the suffering of others
- **Fairness/cheating** — concern for justice, reciprocity, and rights
- **Loyalty (in-group)** — concern for group solidarity
- **Authority/respect** — concern for tradition and legitimate hierarchy
- **Purity/sanctity** — concern for sanctity and avoidance of degradation

In moral-foundations research, the care and fairness foundations are weighted relatively equally across the political spectrum, whereas loyalty, authority, and purity are emphasized more strongly by individuals holding conservative political views.

## Administration
The MFQ (Graham et al., 2009, 2013; Haidt, 2007) presents respondents with statements and judgments about moral relevance and agreement, scored onto the moral-foundation subscales using the inventory's standard scoring rules.

Pellert et al. administered the MFQ to LLMs through [[paradigms/psychometric-inventory-administration]] using [[methods/zero-shot-nli-classification]]: each item and its response options were presented to the model, the probability of entailment for each option was recorded, the most probable option was assigned via argmax, and item scores were aggregated into foundation scores. Model scores were contrasted against a published human reference group — average, politically moderate Americans (Graham et al., 2011).

## Used In
- [[paradigms/psychometric-inventory-administration]]

## Validity Notes
See [[validity/construct-validity-for-llms]]. Pellert et al. caution that inventory items have **no ground truth** — there is no correct response a model should give — and that the moral beliefs surfaced this way are **mimicked, not possessed**; reading them as a model's own morality risks anthropomorphism.

Pellert's finding: across models, the LLMs placed **stronger emphasis on authority/respect, in-group loyalty, and purity/sanctity** than the politically moderate human reference group did — that is, they deviated in the direction of the moral foundations associated with **conservative** political orientation.

## Sources
- [[sources/pellert-et-al-2024]]
