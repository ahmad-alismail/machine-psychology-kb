---
type: debate
field: machine-psychology
lens: na
eval_axis: na
tags: [validity, reliability, methodology, standards, contamination, reproducibility]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Is Current Machine-Psychology Methodology Guidance Sufficient?

> [!info] In plain terms
> When researchers run psychological tests on AI, is "design the prompts carefully" enough to trust the results? One camp says careful study and prompt design largely suffices. The other says no — the field is missing the basic validity criteria (does the test reliably measure what it claims?) that psychology demands, and that no current study meets them.

## The Disagreement
Does sound machine-psychology research need only **careful study and prompt design**, or does it additionally require a set of **necessary, formal validity criteria** (reliability, construct validity, contamination control, fairness, reproducibility) that current guidance omits and current studies fail to meet?

## Position A
**Claim**: Careful design of studies and prompts is the core requirement; good prompt design and developmentally-informed methods largely suffice to draw meaningful conclusions about LLMs.
**Held by**: [[sources/hagendorff-et-al-2024]] (and Hagendorff 2023); Frank (2023).
**Arguments**: Because LLM outputs are highly sensitive to prompt wording, order, and technical biases, the high-leverage interventions are practical ones — prompt batteries, contamination-aware rephrasing, robust controls, appropriate scoring. Hagendorff's guidelines concentrate on prompt/experiment design; Frank advocates combining developmentalist and computational methods to surface abstract representations.
**Evidence**: A synthesized set of best practices for designing and analyzing behavioral experiments on LLMs.

## Position B
**Claim**: Practical design guidance is necessary but **not sufficient**; the field also lacks the strictly necessary *validity criteria* for a test to be a meaningful instrument — and essentially no study currently satisfies them.
**Held by**: [[sources/loehn-kiehne-et-al-2024]] ([[entities/niklas-kiehne]] & Lea Löhn).
**Arguments**: Prior guidance (Hagendorff 2023; Frank 2023) addresses the *design* of studies, not the *prerequisites of correct testing* drawn from psychometric standards. Löhn & Kiehne derive seven requirements — R1 reliability, R2 construct validity, R3 suitability, R4 non-disclosure/contamination control, R5a–c fairness/translation/transparent-reproducible use — and argue these must be met for results to be meaningful.
**Evidence**: An audit of 25 machine-psychology studies (12 constructs, 34 tests): **not one** provides evidence of fulfilling all requirements, even under deliberately lenient grading. See [[validity/test-validity-requirements]].

## Synthesis
The positions are layered rather than strictly opposed: Position A's design practices and Position B's validity criteria address different levels of the same problem. But on the central question of *sufficiency*, the weight of the argument favors **Position B**. Careful prompting cannot, by itself, certify that a test measures the intended construct in an LLM, that scores are reliable across rephrasings, or that results are uncontaminated and reproducible. Validity is the foundational layer on which design choices must rest; until reliability and construct validity are demonstrated for LLMs as a distinct population, even well-designed studies yield claims of uncertain meaning. The constructive reading is that Hagendorff supplies the operational craft and Löhn & Kiehne supply the evidentiary bar that craft must ultimately clear.
