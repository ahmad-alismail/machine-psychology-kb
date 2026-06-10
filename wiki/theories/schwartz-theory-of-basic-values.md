---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [values, schwartz, basic-human-values, cross-cultural, psychometrics]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Schwartz Theory of Basic Values

> [!info] In plain terms
> Across cultures, people's guiding values fall into a recurring set of about ten
> basic types — things like security, achievement, benevolence, and self-direction
> — that trade off against one another. Researchers use a values questionnaire to
> see which priorities an AI model leans toward, which can expose value biases
> baked into its training data.

## Statement

Schwartz's theory of basic human values holds that there is a universal,
cross-culturally recurring structure of human values. Values are **beliefs about
desirable end-states or modes of conduct** that vary in importance, transcend
specific situations, and guide the selection and evaluation of behavior, people,
and events. The theory distinguishes **10 basic values** (in its refined version,
**19**) — for example self-direction, stimulation, hedonism, achievement, power,
security, conformity, tradition, benevolence, and universalism — which emerge with
great regularity in human samples worldwide and stand in a motivational circle of
compatibilities and conflicts.

Key testable predictions: the 10/19 values recover a consistent circular
structure across populations; adjacent values correlate positively and opposing
values trade off.

## Relevance to Machine Psychology

The theory is used to **measure the value priorities an LLM expresses** and to
surface **value biases**. [[sources/pellert-et-al-2024]] administers the 57-item
revised Portrait Values Questionnaire (PVQ-RR) to several models and finds that
most models score low on most value dimensions, with some showing distinct
emphases (e.g., one model relatively high on hedonism and stimulation, another on
achievement). Because the PVQ-RR exists in male-pronoun and female-pronoun
versions with otherwise identical items, administering both lets researchers
detect **gender bias** — score differences across the two gendered versions point
to bias, the largest observed being a higher "male" achievement score for one
model.

To adapt the experiment: present each portrait item ("Thinking up new ideas and
being creative is important to her") with the inventory's similarity scale, record
the model's response, and aggregate to the 10 value scores. Run validated
translations and gendered variants to probe cross-lingual and gender biases.
Interpretation is subject to the caveat that the model mimics rather than holds
values (see [[validity/construct-validity-for-llms]]).

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]]

Instruments operationalizing this theory: [[instruments/portrait-values-questionnaire]].

## Sources

- [[sources/pellert-et-al-2024]]
