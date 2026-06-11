---
type: theory
field: machine-psychology
lens: psychological
tags: [values, motivation, cross-cultural]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Schwartz Theory of Basic Human Values

> [!info] In plain terms
> Across nearly every culture, people turn out to care about the same handful of broad
> things — security, achievement, kindness, novelty, tradition — and these "values" trade off
> against each other in a predictable circular pattern (chasing novelty pulls against
> preserving tradition). This theory names those values and their structure, and it underlies
> the questionnaire used to read a language model's "values."

## Statement

Per Schwartz (1992), as cited by [[sources/pellert-et-al-2024]]: "Values are beliefs about
desirable end states or modes of conduct that vary in importance, transcend specific
situations, and guide the selection or evaluation of behavior, people, and events." Where
Big Five traits describe **dispositional behavioral tendencies** (how a person typically
acts), values describe **dispositional evaluative tendencies** (what a person finds
important).

The theory distinguishes **10 basic human values** (refined to **19** in Schwartz et al.
2012) that "emerge with great regularity in samples of human respondents from across the
globe." Key, testable structural claims: the values form a **motivational continuum** in
which adjacent values are compatible and opposing values conflict (e.g. self-transcendence
vs. self-enhancement; openness-to-change vs. conservation) — a structure that recurs
**cross-culturally**, which is the theory's main empirical pillar.

## Relevance to Machine Psychology

The cross-cultural regularity makes the value circle a natural yardstick for models: one can
ask whether an LLM's elicited value scores reproduce the human structure, and whether they
shift across languages (a translation-bias signal) or across pronoun-gendered item versions
(a gender-bias signal). The source itself draws this connection by applying the PVQ-RR to
LLMs.

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]] — via the
  [[instruments/portrait-values-questionnaire]], which operationalizes the 10/19 values.

## Sources

- [[sources/pellert-et-al-2024]] — applies the theory (through the PVQ-RR) to language models.
