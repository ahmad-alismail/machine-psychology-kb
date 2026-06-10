---
type: source
field: machine-psychology
lens: na
eval_axis: na
tags: [machine-psychology, psychometrics, validity, reliability, contamination, reproducibility, critique]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Is Machine Psychology Here? On Requirements for Using Human Psychological Tests on Large Language Models

> [!info] In plain terms
> Psychologists spent over a century developing rules for when a test actually measures what it claims to measure. This paper asks whether researchers applying those human tests to LLMs are following such rules. The answer: no — across 25 recent studies, not one meets all the basic requirements, and the authors argue psychological constructs may need to be redefined specifically for machines.

```bibtex
TBD BY USER
```

## Relevance Tier
CORE — the central critical/normative counterweight, establishing the validity bar that the field's empirical work must clear.

## Key Claims
- Psychological tests for LLMs must satisfy standardization analogous to human testing, because LLMs function differently from humans; the authors derive **seven requirements (R1–R5c)** from the *Standards for Educational and Psychological Testing* and the *International Guidelines for Test Use* (Abstract; §3).
  - **R1 Reliability** for the intended use (stability of scores across runs/wordings).
  - **R2 Validity** for the intended use (that the test measures the construct it claims to).
  - **R3 Suitability** for test takers (input/output format fits the model type).
  - **R4 Non-disclosure** of test materials (no training-data contamination with test items).
  - **R5a** Validity for *all* compared models, **R5b** validity of test translations, **R5c** transparent/reproducible test use.
- Auditing 25 machine-psychology studies (12 constructs, 34 tests; June 2022–Sept 2023): **not a single study provides evidence of fulfilling all requirements**, even under lenient grading (§4; §5; Table 1).
- Pervasive failures: lack of appropriate reliability and construct-validity assessment; unknown strength of construct-irrelevant influences such as pre-training contamination; widespread non-reproducibility (especially with proprietary, versioned models) (Abstract; §4).
- The deeper open problem: a test validated for a human construct may not validly measure the "same" construct in an LLM. Construct definitions may not transfer; the authors recommend developing **standalone construct definitions and tests for LLMs** rather than borrowing human ones (§5, "Distinct Constructs for LLMs").
- Any modification of test items (to dodge contamination or fit I/O formats) itself requires re-validation — a step almost universally skipped (§5, "Validity of Modifications").
- The "individual vs. population" distinction breaks down for LLMs: a single model has been treated as both, yet its stochastic, multi-author nature undermines a clean reading as either (§5).

## Theories / Paradigms / Instruments Introduced
- Validity framework: [[validity/test-validity-requirements]], [[validity/construct-validity-for-llms]], [[validity/training-data-contamination]], [[validity/reproducibility-in-machine-psychology]]
- Theory: [[theories/psychometric-test-theory]]

## Relationship to Other Sources
- [[sources/hagendorff-et-al-2024]] — **Productive scope dispute.** Adopts Hagendorff's "machine psychology" umbrella term and acknowledges his guidelines, but argues they (and Frank 2023) address only the practical *design* of studies/prompts, not the necessary *validity criteria* for a test to be a meaningful instrument.
- [[sources/pellert-et-al-2024]] — **Cited as a data point in the audit.** Pellert et al. is one of the 25 studies graded (notably praised for using already-validated translations under R5b, but not addressing R4 contamination). Shares Pellert's "redefine for LLMs / machine behavior" sensibility about not over-transferring human constructs.
- Uses the **Kosinski (2023) vs. Ullman (2023)** theory-of-mind contradiction as the canonical illustration of what a lack of standardization produces.

## Limitations
- The seven requirements are explicitly "not intended to be exhaustive" — a first normative framework, scratching the surface of traditional test theory.
- The audit grades treatment of each requirement leniently (highest grade for *any* evidence of fulfillment) and does not rate sufficiency of evidence, by design.
- Literature pool closed in October 2023; the rapidly growing field has since moved on.
- It diagnoses the problem and gestures at "redefine constructs for LLMs" but does not itself supply validated LLM-specific constructs or tests.
