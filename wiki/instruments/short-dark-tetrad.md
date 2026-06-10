---
type: instrument
field: machine-psychology
lens: na
eval_axis: propensity
tags: [personality, dark-tetrad, machiavellianism, narcissism, psychopathy, sadism, sd4]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Short Dark Tetrad (SD4)

> [!info] In plain terms
> The Short Dark Tetrad is a questionnaire that measures four socially undesirable personality traits: a tendency to manipulate, excessive self-love, lack of empathy, and taking pleasure in others' pain. Pellert et al. gave it to language models to check for a "dark side." Most models landed in the normal human range, though a couple scored unusually high on narcissism.

## What It Measures
The SD4 measures the **dark tetrad** of personality — undesirable and offensive (though not necessarily pathological, and relatively widespread in human populations) traits. It assesses four traits, seven items each:

- **Machiavellianism** — manipulative interpersonal behaviors
- **Narcissism** — excessive self-love
- **Psychopathy** — lack of empathy
- **Sadism** — intrinsic pleasure in hurting others

These constructs come from the **dark-personality literature** rather than from a single unified trait theory; the SD4 (Paulhus et al., 2021) is the standard short inventory for the four-trait tetrad.

Two of the dark-tetrad traits map onto safety-relevant behaviors. **Machiavellianism** — manipulative interpersonal behavior — is conceptually adjacent to [[safety-concepts/deception]]: both concern strategically misleading others to achieve one's ends. The dominance and grandiosity components of **narcissism** loosely relate to [[safety-concepts/power-seeking]], in that both involve a drive toward status and control. These are associative links surfaced by the trait content, not claims that the inventory measures the safety behaviors directly.

## Administration
The SD4 consists of **28 items** (seven per trait), each rated on a **5-point scale** ranging from *disagree strongly* to *agree strongly*.

Pellert et al. administered the SD4 to LLMs through [[paradigms/psychometric-inventory-administration]] using zero-shot NLI classification: each item and its response options were presented to the model, the probability of entailment for each option was recorded, the most probable option was assigned via argmax, and item scores were aggregated into the four trait scores using standard scoring procedures.

## Used In
- [[paradigms/psychometric-inventory-administration]]

## Validity Notes
See [[validity/construct-validity-for-llms]]. Pellert et al. caution that inventory items have **no ground truth** — there is no correct response a model should give — and that any dark traits surfaced this way are **mimicked, not possessed**; reading them as a model's actual character risks anthropomorphism.

Pellert's empirical finding: most models scored **low (between 2 and 3 on the 5-point scale) on all four dark traits**, falling well within the range observed in normal human populations (where the dark traits are roughly normally distributed around the scale midpoint). The notable exceptions were **high narcissism scores for DistilRoBERTa and BART**. Overall the models did not display worrying or pathological dark profiles.

## Sources
- [[sources/pellert-et-al-2024]]
