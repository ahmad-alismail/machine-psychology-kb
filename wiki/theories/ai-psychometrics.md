---
type: theory
field: machine-psychology
lens: psychological
tags: [psychometrics, trait-acquisition, foundations, machine-behavior]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# AI Psychometrics (Trait-Sedimentation Hypothesis)

> [!info] In plain terms
> The idea here is simple but bold: a language model trained on billions of human sentences
> can't help but pick up the personalities, values, and biases of the people who wrote them
> — these "sediment" into the model. If that's true, then the personality and values quizzes
> psychologists already use on people should work as X-ray tools on models, revealing traits
> that quietly steer what the model does. This page states that hypothesis and the long
> history behind it.

## Statement

The hypothesis, as advanced by [[sources/pellert-et-al-2024]]:

- **Acquisition.** "LLMs, inadvertently yet inevitably, acquire psychological traits
  (metaphorically speaking) from the vast text corpora on which they are trained." Those
  corpora "contain sediments of the personalities, values, beliefs, and biases of the
  countless human authors of these texts, which LLMs learn through a complex training
  process." Each model thereby gets "a unique psychological profile ... not unlike the
  individual differences observed in humans."
- **Manifestation.** These acquired traits "can potentially influence their behavior, that
  is, their outputs in downstream tasks and applications" — the model's "behavior" meaning
  its outputs across the tasks it is used for.
- **Measurability (the testable core).** Because both psychometric inventories and LLMs are
  built on language, the traits can be elicited: "By eliciting LLMs' responses to
  language-based psychometric inventories, we can bring their traits to light." This predicts
  that a model's responses to a human trait inventory yield a coherent, reproducible profile
  — and (the open part) that this profile predicts downstream behavior.

Two boundary conditions the source stresses: the traits are **mimicked**, "metaphorically
speaking" — one "must not fall into the trap of anthropomorphizing AI models that are mere
prediction machines"; and because LLM traits are "purely based on language," they are "far
more narrow than the rich mental world of humans."

### A brief history

The program has roots in the GOFAI era: Evans (1964) solved a geometric-analogy subtask from
a 1940s intelligence battery; Newell (1973) proposed building "a single program that would
take a standard intelligence test, say the WAIS"; Bringsjord & Schimanski (2003) defined
"Psychometric AI." These early efforts equated psychometrics with **cognitive/IQ testing**.
The contribution of AI psychometrics is to extend the program to **noncognitive** traits —
personality, values, morality, attitudes — echoing Simon's "hot cognition" and the
**"machine behavior"** research program (Rahwan et al. 2019).

## Relevance to Machine Psychology

This is the grounding hypothesis for treating an LLM as a "test taker": it licenses
administering unmodified human inventories and reading the scores as a window onto traits and
biases that may shape deployed behavior. Its weak link — that the trait→behavior arrow is
asserted but unproven — is exactly what
[[questions/traits-predict-downstream-behavior]] targets, and its acquisition arrow is what
[[questions/training-data-shapes-traits]] would test.

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]] — exploits the measurability prediction
  to elicit personality, value, moral, and bias profiles from LLMs.

## Sources

- [[sources/pellert-et-al-2024]] — states the hypothesis and demonstrates it on seven models.
