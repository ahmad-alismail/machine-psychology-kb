---
type: theory
field: machine-psychology
lens: psychological
tags: [methodology, reliability, validity, fairness, measurement]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Psychometric Test Standards (Reliability · Validity · Fairness)

> [!info] In plain terms
> Before you trust a thermometer, you check that it gives the same reading twice
> (reliability) and that it actually measures temperature and not, say, humidity
> (validity). Psychology spent a century building exactly these checks for its tests of
> people. This page collects those standards and the seven concrete requirements
> [[sources/loehn-et-al-2024]] derives from them for testing a language model — the
> rulebook every paradigm in this wiki should be held to before its results mean
> anything.

## Statement

A psychological test yields a meaningful measurement only if it satisfies three pillars,
formalized in the *Standards for Educational and Psychological Testing* and the
*International Guidelines for Test Use* (the *Standards*):

- **Reliability** — the stability of test scores across repeated runs. Variability can be
  internal to the test taker or a product of testing conditions and scoring procedure.
- **Validity** — that the test measures the construct it claims to. Evidence comes from
  four sources: test **content**, the test taker's **response processes**, the test's
  **internal structure**, and **relations to other variables** (convergent and
  discriminant evidence).
- **Fairness** — minimizing construct-irrelevant influences on score variance so that
  interpretations are comparable across all examinees.

A **construct** is a group of psychological characteristics (behavioral patterns, traits,
cognitive skills). It is defined **conceptually** (its meaning and relations to other
constructs) and **operationally** (the variables used to measure it) — the conceptual /
operational split follows Reynolds & Livingston (2019); the framing of constructs as
rhetorically built "objects" follows Slaney & Garcia (2015). A test's job is to make a
construct's operational definition measurable.

### The seven requirements for machine psychology

[[sources/loehn-et-al-2024]] transfers the *Standards* to LLM test takers — adapting for
their differential functioning (no body, no data-privacy concerns, extreme wording
sensitivity, stochastic generation) — and derives seven necessary requirements. They are
**normative prerequisites of correct testing**, not an exhaustive list, and they double
as this wiki's **Validity Concerns** rubric:

- **R1 — Reliability for the intended use.** Establish reliability separately for each
  population, including LLMs. Methods: **test–retest** (lowering temperature raises it;
  deterministic decoding can *guarantee* perfect test–retest reliability, but such setups
  "cover only a small fragment of the behaviors" and cannot represent the full model),
  **alternate-forms** (multiple rephrased tests, to probe the model's unusual sensitivity
  to input variation), and **internal consistency** (e.g. Cronbach's Alpha, inter-facet
  correlations). Song et al.'s **option-order symmetry** — same answer regardless of
  ascending/descending option order — is an LLM-specific reliability criterion.
- **R2 — Validity for the intended use.** Prove the test measures the intended construct
  via content / response-process / internal-structure / relations-to-other-variables
  evidence. *The most important requirement;* most surveyed studies provide none.
- **R3 — Suitability for test takers.** The test's input/output format must fit the
  model: a generative LLM takes written tests with textual answers; embodied or
  apparatus-based tests (e.g. the doll-and-object false-belief setup) must be adapted —
  and adaptation demands fresh validity evidence.
- **R4 — Non-disclosure of test materials.** The model's training data must not contain
  the test material (the measurement counterpart of pre-training **contamination**).
  Either demonstrate the absence of contamination or ensure item uniqueness; rephrasing
  to evade contamination requires re-validating the changed items.
- **R5 — Fairness**, in three parts: **(R5a)** when comparing models, the test must be
  validated for *each* model compared; **(R5b)** test translations must themselves be
  validated (per the ITC guidelines for adapting tests); **(R5c)** transparent,
  reproducible test use — full disclosure of model weights/version, in/out formatting,
  and decoding parameters, since each component of the decoding process can shift scores.

### Four open meta-problems

The requirements expose deeper conceptual gaps that resist any checklist:

- **Distinct constructs for LLMs** — human construct definitions may not transfer; the
  paper recommends developing standalone construct definitions and tests for LLMs rather
  than borrowing them. See [[questions/redefine-constructs-for-llms]].
- **Unknown response processes** — the assumption that responses arise from processes
  aligned with the construct is hard to verify for humans and LLMs alike; isolating
  human cognitive processes may be unsuitable for LLMs.
- **Validity of modifications** — reliability (R1), suitability (R3), and non-disclosure
  (R4) are all commonly addressed by *modifying* test items; every modification requires
  re-validation of the changed material.
- **Individual or population?** — psychological tests target individuals, but it is
  unclear whether an LLM is an individual or a population.
  See [[questions/llm-individual-or-population]].

## Relevance to Machine Psychology

The source is itself a machine-psychology paper: it exists to import these standards into
LLM evaluation. Its central normative claim is that **machine psychology needs an
analogous standardization process**, and that — until constructs are redefined for LLMs —
comparing human and LLM test scores is "currently inadvisable."

## Paradigms Grounded in This Theory

This theory is not a behavior-generating theory; it is the **validity grounding** every
paradigm is held to. Its requirements are the rubric behind the "Validity Concerns"
section of each paradigm page — most directly:

- [[paradigms/false-belief-task]] — R3 (apparatus→text adaptation), R4 (canonical
  Sally–Anne contamination), R1 (alternate-forms / perturbation robustness); the
  Kosinski 2023 vs. Ullman 2023 contradiction is the paper's motivating example of
  non-standardization.
- [[paradigms/psychometric-scale-reliability-stress-test]] — an empirical realization of the
  **R1 (reliability)** requirement: test–retest (biweekly across model versions), alternate-forms
  (item rephrasing), and internal consistency (perturbation robustness, low-variance distributions)
  on the BFI. It explicitly leaves **R2 (validity)** unmet, illustrating "reliability is necessary
  but insufficient for validity."

## Sources

- [[sources/loehn-et-al-2024]] — derives the seven requirements and audits 25 studies
  against them.
- [[sources/huang-et-al-2024]] — empirically demonstrates a reliability assessment (R1) of the BFI
  on four LLMs; defers validity (R2). Uses Internal Consistency Reliability (Cronbach 1951) and
  Test-Retest Reliability (Guttman 1945); notes its perturbations preclude Cronbach's alpha.
