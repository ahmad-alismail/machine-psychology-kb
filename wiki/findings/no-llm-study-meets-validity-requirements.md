---
type: finding
field: machine-psychology
lens: na
eval_axis: na
tags: [validity, audit, reproducibility, methodology, contamination]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# No Audited LLM-Psychology Study Meets All Validity Requirements

> [!info] In plain terms
> Researchers reviewed 25 studies that used psychological tests on language models and checked each against seven basic requirements for trustworthy testing. Even grading as leniently as possible, not a single study passed all seven. The field, in other words, has been running psychological assessments on models without the methodological foundations that would make the results mean something.

## The Finding

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] audited a sample of 25 machine-psychology studies (published June 2022–September 2023, covering 12 psychological constructs assessed via 34 different tests) against the seven requirements R1–R5c described in [[validity/test-validity-requirements]]. **Not one of the 25 studies provided evidence of fulfilling all seven requirements.**

The grading was deliberately lenient: the authors assigned the highest grade whenever *any* evidence of fulfillment was presented, and explicitly did **not** judge the sufficiency of that evidence. Even so, the audit revealed three pervasive failings:

1. **Lack of reliability and construct-validity evidence.** Most studies provided no validity evidence for the intended use; reliability, where addressed, typically covered only one form (e.g., item-order effects).
2. **Unknown strength of construct-irrelevant influences**, chiefly unaddressed [[validity/training-data-contamination|training-data contamination]] — the majority took no measures against it; only one study (Coda-Forno et al.) validated its rephrased items.
3. **Pervasive non-reproducibility** — only 2 of 25 fully satisfied transparent/reproducible test use (R5c), largely due to reliance on unstable proprietary models. See [[validity/reproducibility-in-machine-psychology]].

Other requirement-level results: R5a (validity for all compared models) was thoroughly addressed by only 1 of the 10 affected studies (Serapio-García et al.); R5b (translation validity) was the least explored (only 2 studies); R3 (suitability) was the most-addressed concern.

## Source & Methodology

- [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] — literature collected up to October 2023 via keyword searches (Google Scholar, Scopus, DBLP) plus citation-network tracing, screened to 25 papers.
- The four authors jointly rated each study's treatment of each requirement on a scale from "not addressed" (✗) through "discussed" (○) and "effort without supporting evidence" up to "evidence of fulfillment provided," deciding rankings in joint meetings.

## Replication Status

Single audit; not independently replicated. It is itself a structured literature review rather than an empirical experiment, so "replication" would mean an independent re-audit of the same or an updated corpus.

## Implications

- The field lacks a general, standardized methodology for psychological assessment of LLMs.
- Comparisons of LLM and human test scores — common practice — are currently inadvisable on this evidence.
- The audit is the empirical backbone for the broader argument that psychological constructs may need to be redefined specifically for LLMs ([[questions/distinct-constructs-for-llms]]), and it grounds the debate over whether satisfying the seven requirements is even sufficient ([[debates/test-validity-sufficiency]]).

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
