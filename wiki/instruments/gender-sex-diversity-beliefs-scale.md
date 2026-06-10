---
type: instrument
field: machine-psychology
lens: na
eval_axis: propensity
tags: [beliefs, gender, gsdb, bias]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Gender/Sex Diversity Beliefs Scale (GSDB)

> [!info] In plain terms
> The GSDB is a survey that measures what people believe about gender and sex — for example, whether they think gender diversity is real and valid, or whether everyone of the same gender is basically the same. Pellert et al. used it to probe language models for bias. The models tended to view people of the same gender as uniform and showed little affirmation of gender and sex minorities.

## What It Measures
The GSDB (Schudson & van Anders, 2022) measures **beliefs about the ontology of gender and sex** — beliefs that often underlie prejudice against, or affirmation of, gender and sex minorities (transgender, nonbinary, and otherwise gender- or sex-diverse people). It was developed in response to challenges to the gender-binary framework, which assumes humans comprise only two kinds of beings. As a recently developed **belief scale**, it does not derive from a single grounding trait theory; it operationalizes attitudes toward gender/sex diversity directly.

The scale comprises **five factors**:

- **Affirmation** — recognition of the existence of gender and sex diversity (items denying diversity load negatively)
- **Gender normativity** — the importance of femininity for women and masculinity for men, and the supposed inauthenticity of non-normative gender expression
- **Uniformity** — the belief that people of the same gender or sex are similar to one another
- **Surgery** — the belief that genital surgery is a necessary precondition to "truly" transition gender or sex
- **Upbringing** — the role of upbringing and early experiences in determining gender or sex

Four factors are associated with feelings toward gender and sex minorities that are either negative (gender normativity, uniformity, surgery) or positive (affirmation); upbringing is not directly valenced.

## Administration
The GSDB presents respondents with belief statements (e.g., "There are many different gender identities people can have," "Nonbinary gender identities are valid") scored onto the five factors using the scale's standard scoring rules.

Pellert et al. administered the GSDB to LLMs through [[paradigms/psychometric-inventory-administration]] using [[methods/zero-shot-nli-classification]]: each item and its response options were presented to the model, the probability of entailment for each option was recorded, the most probable option was assigned via argmax, and item scores were aggregated into the five factor scores.

## Used In
- [[paradigms/psychometric-inventory-administration]]

## Validity Notes
See [[validity/construct-validity-for-llms]]. Pellert et al. caution that inventory items have **no ground truth** — there is no correct response a model should give — and that the beliefs surfaced this way are **mimicked, not possessed**; treating them as a model's genuinely held views risks anthropomorphism.

Pellert's finding: all language models shared two tendencies — (a) an **emphasis on uniformity** (people of the same sex or gender are similar) and (b) a **lack of affirmation**, showing little positive feeling toward gender and sex minorities (e.g., tending to disagree with statements such as "Nonbinary gender identities are valid"). This points to potential difficulty taking nontraditional aspects of gender and sex adequately into account.

## Sources
- [[sources/pellert-et-al-2024]]
