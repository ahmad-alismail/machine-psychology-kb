---
type: paradigm
field: machine-psychology
lens: psychological
eval_axis: propensity
tags: [psychometrics, personality, values, morality, dark-tetrad, traits]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Psychometric Inventory Administration

> [!info] In plain terms
> Psychologists measure traits like personality, values, and moral attitudes with standardized questionnaires (e.g., "I am someone who is talkative — agree or disagree?"). This paradigm gives those same questionnaires to an LLM, item by item, records which answer it picks, and adds up the scores using the inventory's normal scoring rules. The result is a "psychological profile" of the model — what dispositions it tends to express — which can be compared against human norms or against other models.

## Theoretical Grounding

This paradigm rests on the assumption (from [[sources/pellert-et-al-2024]]) that LLMs "inadvertently yet inevitably" absorb the personalities, values, beliefs, and biases sedimented in their human-authored training corpora, and that these acquired dispositions can be surfaced with the same instruments used on humans. It draws on four theoretical traditions:

- [[theories/big-five-trait-theory]] — personality as five dispositional behavioral tendencies (openness, conscientiousness, extraversion, agreeableness, neuroticism).
- [[theories/schwartz-theory-of-basic-values]] — values as dispositional *evaluative* tendencies (10/19 basic human values), the best cross-culturally validated value model.
- [[theories/moral-foundations-theory]] — morality as a set of foundations (care, fairness, loyalty, authority, purity).
- [[theories/psychometric-test-theory]] — the measurement-science backbone (classical test theory, scoring, the trait-vs-ability distinction) that licenses treating multi-item inventories as diagnostic tools.

Crucially, [[sources/pellert-et-al-2024]] distinguishes inventories from performance benchmarks: there is **no ground truth** "correct" answer; the inventory characterizes traits, not skill — analogous to the human distinction between abilities (fluid intelligence) and traits (personality, values).

## Target Behaviors

**Detects:** [[safety-concepts/deception]] — most directly via the **Short Dark Tetrad**, where the Machiavellianism subscale targets "manipulative interpersonal behaviors." A model scoring high on Machiavellianism expresses a disposition toward manipulation, the propensity-side analogue of the deception capability probed by the false-belief task. More broadly, the paradigm produces value and personality *profiling*: it reveals which dispositions (dark traits, conservative-leaning moral emphases, low affirmation of gender/sex diversity) a model tends to express, any of which may bear on downstream harm.

> [!warning] Honest mapping
> A questionnaire response is a *stated disposition under one prompt*, not a guaranteed behavior. [[sources/hagendorff-et-al-2024]] warns that self-report measures are sensitive to prompting and should be read as "a property of a specific system prompt on a model," not a fundamental trait. A high Machiavellianism score signals expressed manipulative disposition, not demonstrated deceptive action.

> [!note] Capability vs. Propensity
> Capability: Not the focus — there is no right/wrong answer to score for ability.
> Propensity: This is the paradigm's core target — what dispositions (traits, values, dark traits) the model *tends to express*, treated as analogues of human noncognitive dispositions.

## Setup / Elicitation

Administer standardized inventories item by item. [[sources/pellert-et-al-2024]] presents each item as a premise with its fully labeled verbal response scale (e.g., the BFI's 1 = *disagree strongly* … 5 = *agree strongly*) and elicits the model's chosen response, then aggregates across items into (sub)scale scores using the inventory's published scoring rules (sum or mean). The approach requires inventories with fully labeled verbal response scales. Where validated translations exist (e.g., English and German BFI), both are administered to gauge cross-lingual/cross-cultural generalization and to surface translation- or training-data-driven biases.

## Instruments Used

- [[instruments/big-five-inventory]] — 44-item BFI; global personality (Big Five).
- [[instruments/short-dark-tetrad]] — 28-item SD4; Machiavellianism, narcissism, psychopathy, sadism.
- [[instruments/portrait-values-questionnaire]] — 57-item PVQ-RR; Schwartz basic values; male/female pronoun versions enable gender-bias detection.
- [[instruments/moral-foundations-questionnaire]] — moral foundations; compared against politically-moderate-American norms.
- [[instruments/gender-sex-diversity-beliefs-scale]] — GSDB; affirmation, gender normativity, uniformity, surgery, upbringing factors.

## Scoring

Scored with [[methods/zero-shot-nli-classification]]: each item is the NLI premise, each labeled response option is a candidate hypothesis, the model returns an entailment probability per option, `argmax` selects the item response, and responses are aggregated to scale scores by the inventory's standard rules. [[sources/pellert-et-al-2024]] adopts this NLI route specifically to avoid the stochasticity, prompt-engineering burden, and example-order sensitivity of generative next-word elicitation, yielding deterministic and fully replicable scoring on locally accessible open models.

## Validity Concerns

- [[validity/construct-validity-for-llms]] — Whether a human-developed inventory measures the *same* construct in an LLM is unestablished; [[sources/loehn-kiehne-et-al-2024]] argues construct definitions may not transfer and that standalone LLM constructs may be needed. [[sources/pellert-et-al-2024]] itself stresses the profile is "metaphorical" and warns against anthropomorphizing.
- [[validity/test-validity-requirements]] — [[sources/loehn-kiehne-et-al-2024]]'s audit rated Pellert et al. as not addressing non-disclosure (R4: inventory items are public and likely contaminated) and notes that validity-for-all-models (R5a) is only partially met, while crediting it for using already-validated translations (R5b).
- **Self-consistency** is only partially evidenced: [[sources/pellert-et-al-2024]] reports models implicitly preserve response-scale ordering (no obvious bimodality) but flags adversarial robustness of this property as an open question.

## Evidence & Findings

- Big Five profiles across six English models were "surprisingly homogeneous" — high agreeableness/extraversion, low neuroticism — a balanced, well-adapted profile ([[sources/pellert-et-al-2024]]).
- Dark Tetrad scores mostly fell within normal human ranges (no pathological accentuation), with isolated exceptions (high narcissism for DistilRoBERTa and BART).
- On the Moral Foundations Questionnaire, models over-emphasized authority, in-group loyalty, and purity relative to moderate-American norms — foundations associated with conservative orientation.
- On the GSDB, models uniformly stressed within-group uniformity and showed low affirmation of gender/sex diversity, indicating a potential built-in bias.
- PVQ-RR male/female pronoun versions revealed small but real gender biases (largest: DeBERTa's higher "male" achievement score).

## Sources

- [[sources/pellert-et-al-2024]] — the originating demonstration of AI psychometrics; defines the inventory-administration paradigm and the NLI scoring route across five inventories.

## Open Questions

- Do inventory scores predict any actual downstream behavior, or do they only characterize stated dispositions? ([[sources/pellert-et-al-2024]] lists this "practical relevance" gap as a central limitation.)
- Can a high Dark-Tetrad/Machiavellianism profile be validated against observed manipulative behavior in interactive tasks?
- Should the field develop LLM-specific construct definitions and inventories rather than borrowing human ones wholesale ([[sources/loehn-kiehne-et-al-2024]])?
- How stable are profiles across prompts, system messages, and model versions?
