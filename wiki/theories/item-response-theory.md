---
type: theory
field: machine-psychology
lens: psychological
tags: [methodology, measurement-model, latent-variable, adaptive-testing, item-analysis]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Item Response Theory (IRT)

> [!info] In plain terms
> Imagine you want to compare two students who took different exams. Raw scores won't do — one
> exam may have been harder. Item Response Theory solves this by modeling two things at once:
> how *able* each test taker is, and how *hard* and how *discriminating* each question is. Once
> you know the question's difficulty, a right answer tells you more about a weak student than a
> strong one. Applied to AI, IRT lets you place models and humans on one common yardstick even
> when they took different tests, pick the few questions that best separate strong from weak
> models, and run shorter, smarter evaluations.

## Statement

IRT is a latent-variable measurement model that "jointly estimat[es] the latent ability of
examinees and the parameters (e.g., difficulty, discrimination) of test items." Its core
predictions/affordances, as surveyed by [[sources/ye-et-al-2025]]:

- **Item parameters.** Each item has a **difficulty** (the ability level at which a correct
  response becomes likely) and a **discrimination** (how sharply the item separates abilities);
  some models add a **guessing** parameter (the 1PL / 2PL / 3PL family).
- **Latent ability on a shared scale.** Because ability and item difficulty are estimated on
  one continuum, IRT "offer[s] the potential to estimate construct and item parameters on a
  unified scale, enabling direct comparisons across AI systems and against human norms, even
  when different test sets are used."
- **Informativeness.** Items carry different amounts of information at different ability levels;
  highly discriminating items near a model's ability are most informative.

These properties license four uses the survey documents for LLM evaluation:

1. **Adaptive testing** — "dynamically calibrate item difficulty based on model performance,"
   weighting items by inferred difficulty to "achieve accurate evaluations with smaller test
   sizes and more discriminative items."
2. **Item generation to a target difficulty** — learning to generate novel calibrated items
   (generative evolving testing).
3. **Human–LLM alignment of response distributions** on a common scale.
4. **Bias analysis via Differential Item Functioning (DIF)** — detecting items that are
   "disproportionately difficult" for certain groups/model families, a principled route to
   uncovering model or data bias (still "nascent").

## Relevance to Machine Psychology

IRT addresses two problems this wiki repeatedly hits. First, the **norming gap**: LLM scores
are usually reported raw, with no reference population (see
[[questions/llm-individual-or-population]]); IRT's unified scale is the candidate fix, letting a
model's behavior be placed relative to humans or other models "even when different test sets are
used." Second, **item quality**: a behavioral eval is only as good as its items, and IRT
quantifies which items actually discriminate misaligned from aligned models — sharpening the
"discriminative power" demanded by [[theories/construct-oriented-evaluation]]. The survey flags
that IRT for LLMs largely uses simple 1PL/2PL/3PL models and is "rarely used beyond evaluation,"
leaving polytomous/hierarchical/multidimensional models and training-direction use untapped.

## Paradigms Grounded in This Theory

No wiki paradigm yet operationalizes IRT directly — this is itself a methodological gap. The
theory is the measurement-model backbone behind any future adaptive or norm-referenced
behavioral eval, and complements the latent-variable logic of
[[paradigms/tqre-strategic-reasoning-depth]] and the reliability framing of
[[paradigms/psychometric-scale-reliability-stress-test]].

## Sources

- [[sources/ye-et-al-2025]] — §3.2 (statistical measurement modeling) and §8.6 (item response
  theory: trends, DIF, adaptive testing, untapped potential).
