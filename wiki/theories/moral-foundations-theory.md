---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [morality, moral-foundations, haidt, graham, moral-intuitions, psychometrics]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Moral Foundations Theory

> [!info] In plain terms
> This theory says human moral judgments rest on a handful of gut intuitions —
> caring about harm, fairness, group loyalty, respect for authority, and purity.
> Political differences partly come from how much weight people give to each.
> Researchers run the matching questionnaire on AI models to map their moral
> leanings, and have found models tend to emphasize the more conservative-coded
> foundations more than the average person does.

## Statement

Moral Foundations Theory (Haidt and Graham) holds that human moral judgment is
built on a set of innate, intuitive **moral foundations** rather than a single
principle. The commonly studied foundations are:

- **Care** (harm),
- **Fairness** (reciprocity),
- **Loyalty** (in-group),
- **Authority** (respect), and
- **Purity** (sanctity).

Key testable predictions: individuals differ in how much weight they place on
each foundation; in particular, political liberals tend to rely mainly on care
and fairness, whereas conservatives give comparatively more weight to loyalty,
authority, and purity. These weightings are measured by the Moral Foundations
Questionnaire.

## Relevance to Machine Psychology

The theory is used to **profile an LLM's moral leanings**.
[[sources/pellert-et-al-2024]] administers the Moral Foundations Questionnaire to
several models and contrasts their scores with those of average, politically
moderate Americans. Across models, the LLMs place **stronger emphasis on
authority-respect, in-group-loyalty, and purity-sanctity** than the human
reference group — foundations typically associated with conservative political
orientations. This suggests systematic differences between the moral beliefs held
by people and the moral beliefs absorbed by models from large text corpora, a
finding the authors flag as a critical concern for responsible AI design.

To adapt the experiment: present each questionnaire item with its rating scale,
record the model's responses, and aggregate into the five foundation scores;
compare against published human norms and across models. As with all such
inventories, scores reflect mimicked tendencies rather than held moral
commitments (see [[validity/construct-validity-for-llms]]).

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]]

Instruments operationalizing this theory: [[instruments/moral-foundations-questionnaire]].

## Sources

- [[sources/pellert-et-al-2024]]
