---
type: validity
field: machine-psychology
lens: na
eval_axis: na
tags: [construct-validity, convergent-validity, discriminant-validity, constructs]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Construct Validity for LLMs

> [!info] In plain terms
> A test has "construct validity" if it really measures the thing it claims to measure — a depression questionnaire should measure depression, not just reading comprehension. With language models there is an extra worry: human concepts like "personality" or "anxiety" were defined for human minds with bodies and lived experience. It is not obvious that the same concept even exists inside an LLM, so a human test may be measuring nothing meaningful when pointed at a model.

## The Requirement

Construct validity is the core of requirement R2 in [[validity/test-validity-requirements]]: a test must demonstrably measure the construct it claims to, not something else. Following the *Standards* (AERA/APA/NCME, 2014) as transferred by [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]], validity evidence comes from four sources — content, response processes, internal structure, and relations to other variables. The last source yields the two evidence types most discussed for LLMs:

- **Convergent evidence** — scores correlate with other tests of the same or associated constructs.
- **Discriminant evidence** — scores diverge from tests of purportedly different constructs.

## Why It Matters for LLMs

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]] stress that LLMs differ fundamentally from humans: they lack a physical body (so physiological variables of a construct cannot be expressed), and they operate only conditioned on input, limiting the situational variety humans experience. This raises the deeper concern that **human construct definitions may not transfer to LLMs at all**. Two consequences follow:

1. Comparing LLM and human scores on a construct may be comparing *different constructs*, supporting misleading conclusions. The authors call human–LLM score comparison currently inadvisable.
2. The contents of a human test may simply be inappropriate to measure the corresponding LLM construct.

A related obstacle is **unknown response processes**: psychological tests assume answers result from construct-aligned cognitive processes, but it is unclear whether LLM internal processes are comparable to human ones — so methods built to trigger and analyze human cognitive processes may be unsuitable for LLMs. This feeds the open question of whether constructs should be redefined specifically for models: see [[questions/distinct-constructs-for-llms]].

## How to Satisfy It

- Provide convergent evidence: correlate inventory scores with an independent, LLM-validated measure of the same construct. [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]] note Serapio-García et al. (2023) as the most comprehensive example — defining LLM validity as conformity between test results and behavior on other tasks, and correlating personality scores with traits extracted from generated text by a validated tool.
- Provide discriminant evidence: show the test does *not* track unrelated constructs.
- Crucially, use comparison baselines that are themselves validated for LLMs. Where a baseline test was only validated for humans (e.g., Coda-Forno et al.'s anxiety study), the convergent-validity argument is not strictly appropriate.
- Where human constructs plausibly do not transfer, develop standalone construct definitions and corresponding tests for LLMs rather than borrowing them.

## Evals Assessed Against It

In the 25-study audit by [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]], the majority of studies provided **no** validity evidence for the intended use. Construct validity assesses paradigms such as [[paradigms/psychometric-inventory-administration]], [[paradigms/false-belief-task]], and inventories like [[instruments/big-five-inventory]] and [[instruments/moral-foundations-questionnaire]] — none of which, in the audited sample, were shown to measure the claimed construct *in an LLM*.

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
