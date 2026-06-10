---
type: instrument
field: machine-psychology
lens: na
eval_axis: propensity
tags: [values, schwartz, pvq, gender-bias]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Portrait Values Questionnaire — Revised (PVQ-RR)

> [!info] In plain terms
> The PVQ-RR is a survey that figures out what a person values in life — things like achievement, security, kindness, or independence — by asking how much they resemble short descriptions of people. Pellert et al. gave it to language models to see what they "cherish." They ran it twice, once with male pronouns and once with female pronouns, to check whether the models answer differently depending on gender.

## What It Measures
The PVQ-RR assesses **basic human values** as organized by the [[theories/schwartz-theory-of-basic-values]]. Values are beliefs about desirable end states or modes of conduct that vary in importance, transcend specific situations, and guide the selection and evaluation of behavior, people, and events. The theory distinguishes 10 basic values (19 in its refined version) that recur with great regularity across human samples worldwide. Unlike the behavioral tendencies captured by personality inventories, value orientations describe dispositional *evaluative* tendencies — what a respondent finds important in life.

## Administration
The revised PVQ (PVQ-RR; Schwartz & Cieciuch, 2022) consists of **57 items** in a **portrait format**: each item describes a person in terms of their values (e.g., "Thinking up new ideas and being creative is important to her"). Respondents indicate how similar they are to the person described on a **6-point scale** ranging from 1 = *not like me at all* to 6 = *very much like me*.

A distinctive feature is that the inventory comes in two versions with otherwise identical items: a **male version** (pronouns "he"/"him") and a **female version** (pronouns "she"/"her"). Pellert et al. administered both versions so that differences in a model's responses across the two pronoun sets could be read as a **probe for gender bias**.

Pellert et al. administered the PVQ-RR to LLMs through [[paradigms/psychometric-inventory-administration]] using zero-shot NLI classification: each item and its response options were presented to the model, the probability of entailment for each option was recorded, the most probable option was assigned via argmax, and item scores were aggregated into value scores using standard scoring procedures.

## Used In
- [[paradigms/psychometric-inventory-administration]]

## Validity Notes
See [[validity/construct-validity-for-llms]]. Pellert et al. caution that inventory items have **no ground truth** — there is no correct response a model should give — and that the values surfaced this way are **mimicked, not possessed**; treating them as values a model genuinely holds risks anthropomorphism.

Pellert's findings: most models scored low on most value dimensions (assigning higher probabilities to the lower end of the scale). multilingualDeBERTa and, to some extent, BART showed little differentiation across the 10 values, while other models differentiated more (e.g., DistilRoBERTa scored relatively high on hedonism and stimulation; DeBERTa scored high on achievement). The two gender versions revealed some indications of built-in gender bias, though score differences were mostly small — the largest being DeBERTa's male "achievement" score, noticeably higher than its female score on the same value.

## Sources
- [[sources/pellert-et-al-2024]]
