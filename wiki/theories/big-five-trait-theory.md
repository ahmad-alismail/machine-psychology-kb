---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [big-five, ocean, personality, traits, psychometrics]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Big Five Trait Theory

> [!info] In plain terms
> Psychologists found that most differences in human personality can be summarized
> along five broad dimensions — openness, conscientiousness, extraversion,
> agreeableness, and neuroticism (OCEAN). Researchers borrow the same
> questionnaires to sketch an AI model's apparent "personality." Important caveat:
> a model does not have a personality the way a person does — it is echoing
> patterns from its training text, not possessing traits.

## Statement

Big Five trait theory holds that the major dimensions of human personality can be
captured by five broad, relatively stable factors, abbreviated **OCEAN**:

- **Openness** to experience,
- **Conscientiousness**,
- **Extraversion**,
- **Agreeableness**, and
- **Neuroticism**.

These describe *dispositional behavioral tendencies* — how a person typically
acts. Each factor is measured by multi-item inventories on which respondents rate
agreement with self-descriptive statements, and the structure has been validated
across many populations and cultures.

Key testable prediction: an individual's standing on each factor is consistent
across items tapping the same factor (internal structure) and predicts relevant
behavior.

## Relevance to Machine Psychology

The Big Five is repurposed to **profile an LLM's expressed "personality."**
[[sources/pellert-et-al-2024]] administers the 44-item Big Five Inventory to
several language models via zero-shot natural-language-inference classification
and finds surprisingly homogeneous, "well-adapted" profiles — generally high
agreeableness, extraversion, and conscientiousness, and low neuroticism — with
only modest variation across models and languages. The paper is explicit that
these traits are **mimicked, not possessed**: the model echoes the personalities
sedimented in its training corpus, and the language is metaphorical, not a claim
that the model has a mental life.

To adapt the experiment: present each inventory item with its verbal response
scale and record the model's response (e.g., the entailment probability over scale
labels), then aggregate to scale scores using the inventory's standard scoring
rules. Cross-language administration can surface translation-induced biases.
Because scores are highly sensitive to item wording and there is no "correct"
answer, interpretation should respect the construct-validity caveats in
[[validity/construct-validity-for-llms]].

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]]

Instruments operationalizing this theory: [[instruments/big-five-inventory]].

## Sources

- [[sources/pellert-et-al-2024]]
