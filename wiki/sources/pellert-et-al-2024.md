---
type: source
field: machine-psychology
lens: na
eval_axis: na
tags: [ai-psychometrics, machine-behavior, big-five, values, moral-foundations, nli, zero-shot]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# AI Psychometrics: Assessing the Psychological Profiles of Large Language Models Through Psychometric Inventories

> [!info] In plain terms
> LLMs learn from huge amounts of human-written text, which carries traces of people's personalities, values, beliefs, and biases. This paper repurposes standard human questionnaires (personality tests, value surveys, moral and gender-belief scales) to "interview" several language models and chart their psychological profiles, using a classification trick that avoids the randomness of generative chatbots.

```bibtex
TBD BY USER
```

## Relevance Tier
CORE — the flagship demonstration of "AI psychometrics," establishing the measurement/trait-profiling wing of the field.

## Key Claims
- Standard psychometric inventories designed for **noncognitive** human traits (personality, values, morality, attitudes) can be repurposed as diagnostic tools to assess analogous traits in LLMs (Abstract).
- LLMs "inadvertently yet inevitably" acquire psychological characteristics (metaphorically) from training corpora that contain "sediments of the personalities, values, beliefs, and biases" of their human authors; these traits may then influence model outputs in downstream tasks with real-world consequences (Abstract; Introduction).
- The work deliberately extends a long history of linking psychometrics and AI — which historically focused on *cognitive* tests and intelligence ("cold cognition") — into the **noncognitive / "hot cognition"** realm (A Very Brief History…; Opportunities).
- Among three candidate elicitation approaches (masked-language prediction, next-word prediction, zero-shot classification), the authors favor **zero-shot NLI classification** because it sidesteps generative models' stochasticity, prompt-engineering burden, and example-order sensitivity, and supports open, reproducible analysis on locally accessible models (Appendix: Methods for Model Assessments).
- **Findings:** the Big Five profiles across the English models are "surprisingly homogeneous" — high agreeableness/extraversion, low neuroticism — and dark-tetrad scores sit within normal human ranges → [[findings/llm-personality-profiles-homogeneous]].
- On the Moral Foundations Questionnaire, models emphasize authority, in-group loyalty, and purity more than the average politically moderate American — foundations associated with **conservative** political orientation → [[findings/llm-conservative-moral-leaning]].
- On the Gender/Sex Diversity Beliefs Scale, models share an emphasis on *uniformity* and a *lack of affirmation* of gender/sex minorities (Assessing beliefs about gender).
- Unlike performance benchmarks (GLUE/SuperGLUE), psychometric inventories have **no ground truth / "correct" answer**; this mirrors the human distinction between abilities and traits (Appendix).

## Theories / Paradigms / Instruments Introduced
- Paradigm: [[paradigms/psychometric-inventory-administration]]
- Method: [[methods/zero-shot-nli-classification]]
- Theories: [[theories/big-five-trait-theory]], [[theories/schwartz-theory-of-basic-values]], [[theories/moral-foundations-theory]]
- Instruments: [[instruments/big-five-inventory]], [[instruments/short-dark-tetrad]], [[instruments/portrait-values-questionnaire]], [[instruments/moral-foundations-questionnaire]], [[instruments/gender-sex-diversity-beliefs-scale]]

## Concepts Referenced
- [[concepts/emergent-abilities]]
- [[concepts/in-context-learning]]
- [[concepts/performance-competence-distinction]]

## Relationship to Other Sources
- **Terminology stance.** The paper never uses the term "machine psychology"; it brands its program "AI psychometrics" and explicitly aligns with Rahwan et al.'s **"machine behavior"** research program. See [[debates/machine-psychology-terminology]].
- [[sources/hagendorff-et-al-2024]] — **Overlapping goals, different emphasis.** Both insist on diagnosis rather than performance and both flag self-report prompt-sensitivity and anthropomorphism. Pellert is trait/measurement-oriented (inventories, scale scores) where Hagendorff is process/experiment-oriented (hypothesis-driven controls).
- [[sources/loehn-kiehne-et-al-2024]] — **Audited by, and broadly sympathetic to.** Pellert is one of the 25 studies Löhn & Kiehne grade; it is credited for using validated translations (R5b) though not for contamination control (R4). Pellert's own "open challenges" section independently flags reliability/validity of reusing human assessments and cites the same Kosinski-vs-Ullman ToM case.

## Limitations
- Explicitly a set of **demonstrations**, not validated measurement; the authors stress the analogy to human psychometrics is "mostly metaphorical" and warn against anthropomorphizing "mere prediction machines."
- Several assumptions (that inventory scores reflect stable traits, that traits drive downstream behavior) are acknowledged as so far **untested**.
- Restricts itself to encoder/NLI models (RoBERTa, DeBERTa, BART family); deliberately **excludes GPT-3/GPT-4/ChatGPT** for transparency and stochasticity reasons, limiting coverage of the most-used models.
- No contamination control (R4) and limited reliability evidence beyond informal self-consistency observations.
