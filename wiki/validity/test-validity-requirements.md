---
type: validity
field: machine-psychology
lens: na
eval_axis: na
tags: [validity, reliability, psychometrics, standards, requirements]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Test Validity Requirements for Machine Psychology

> [!info] In plain terms
> Psychologists spent over a century working out rules for what makes a test trustworthy — does it give the same answer twice, does it really measure what it claims, was the test-taker exposed to the answers beforehand. When researchers borrow these tests to "diagnose" large language models, those rules still apply. This page lays out the seven requirements [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] argue any LLM psychology study must satisfy before its results mean anything.

## The Requirement

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne, Ljapunov & Balke (2024)]] extract seven requirements from established psychological testing theory — the *Standards for Educational and Psychological Testing* (AERA/APA/NCME, 2014) and the *International Guidelines for Test Use* (ITC, 2001) — and adapt them to LLMs. See [[theories/psychometric-test-theory]] for the underlying theory. The requirements are normative prerequisites: they describe what *must* hold for a psychological assessment of an LLM to be meaningful, not merely what is technically possible.

**R1 — Reliability for the Intended Use.** Test scores must be stable across repeated administrations. Variability can arise internally (in humans: motivation, attention) or externally (testing conditions, scoring). For LLMs, reliability must be established *per model*, since architecture, training data, and hyperparameters all affect it. Standard measures transfer: test-retest, alternate-forms (rephrased items), and internal consistency (e.g., Cronbach's Alpha). Lowering sampling temperature raises test-retest reliability — deterministic decoding can even guarantee perfect test-retest — but covers only a narrow slice of behavior. Because LLMs are unusually sensitive to wording, simple repetition is insufficient; alternate-forms and internal-consistency checks are needed.

**R2 — Validity for the Intended Use.** The interpretation of scores must be backed by theory and empirical evidence — i.e., the test must actually measure the construct it claims to. The *Standards* recognize four sources of validity evidence:
- **Content** — does the test's themes, format, and wording represent the construct domain? (usually expert judgment)
- **Response processes** — do the cognitive processes the test-taker uses while answering align with the construct? (in humans: interviews, eye-tracking)
- **Internal structure** — do relationships among items match the proposed (possibly multidimensional) construct? (often factor analysis)
- **Relations to other variables** — do scores correlate with tests of the same/associated constructs (*convergent* evidence) and diverge from tests of different constructs (*discriminant* evidence)?

See [[validity/construct-validity-for-llms]] for how these transfer to LLMs.

**R3 — Suitability for Test Takers.** The test must fit the test-taker's capabilities and characteristics. For LLMs this primarily means matching supported input/output formats: generative models need written tests with textual answers; a text-classification system cannot produce free-form text. Tests originally requiring physical props (e.g., the dolls-and-objects [[paradigms/false-belief-task]]) must be adapted to text — and any such adaptation requires *new* validity evidence.

**R4 — Non-Disclosure of Test Materials.** Test-takers must not have seen the items beforehand. For LLMs this translates to: the training data must not contain the test material. Because models reproduce patterns from training data, contamination of pretraining corpora with test items biases results. See [[validity/training-data-contamination]].

**R5 — Fairness.** Minimize construct-irrelevant influences on score variance so interpretations are comparable across test-takers. Three sub-requirements:
- **R5a — Test Validity for all Models.** In comparative studies, the test must be validated for *every* model being compared.
- **R5b — Validity of Test Translations.** When testing across languages, translations must themselves be validated (preferably published validated versions, or independent translation following ITC 2017 conventions).
- **R5c — Transparent / Reproducible Test Use.** Because decoding strategies, sampling parameters, and item wording all shift scores, the complete testing setup must be reported — model weights/version, input/output formatting, and generation parameters. See [[validity/reproducibility-in-machine-psychology]].

## Why It Matters for LLMs

LLMs differ fundamentally from humans in their internal operations and external representations, so requirements designed for human examinees do not transfer automatically and must be re-derived. Some human requirements (e.g., test-taker data privacy) drop out; others (contamination, reproducibility) sharpen because LLMs memorize training data and proprietary models change silently. Without these requirements, contradictory results proliferate — the canonical example being the [[debates/theory-of-mind-in-llms|theory-of-mind dispute]], where trivial item changes flip conclusions, a symptom of missing standardization.

## How to Satisfy It

- Establish reliability per model with alternate-forms and internal-consistency checks, not just repetition (R1).
- Provide at least one form of validity evidence — ideally convergent/discriminant against constructs (R2).
- Match the test's I/O format to the model; re-validate any adaptation (R3).
- Demonstrate absence of contamination, or procedurally generate / rephrase items and show the modified test is still valid (R4).
- Validate for every compared model and every language version; report the full, reproducible testing setup (R5a–c).

## Evals Assessed Against It

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] audited 25 machine-psychology studies (June 2022–September 2023; 12 constructs, 34 tests) against R1–R5c under deliberately lenient grading. **Not one study satisfied all seven requirements.** See [[findings/no-llm-study-meets-validity-requirements]]. Whether satisfying these seven requirements is even *sufficient* for valid LLM assessment — or whether deeper problems (e.g., constructs not transferring at all) remain — is treated in [[debates/test-validity-sufficiency]].

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
