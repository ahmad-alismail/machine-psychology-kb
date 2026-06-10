---
type: question
field: machine-psychology
lens: na
eval_axis: na
tags: [constructs, construct-validity, ontology, transferability]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Should Psychological Constructs Be Redefined Specifically for LLMs?

> [!info] In plain terms
> Concepts like "personality," "anxiety," or "theory of mind" were invented to describe human minds — minds with bodies, feelings, and a lifetime of experience. The open question is whether it even makes sense to apply those same concepts to a language model, or whether the field needs to define fresh, model-specific concepts and build new tests around them rather than reusing the human ones.

## Why It Matters

If human construct definitions do not transfer to LLMs, then borrowing human tests measures something undefined, and comparing LLM scores to human scores compares different things. [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] argue this is the **fundamental question** of machine psychology: can a test validated as a measure of a construct *for humans* also be a valid measure of that *same* construct for LLMs? Their 25-study audit ([[findings/no-llm-study-meets-validity-requirements]]) found this question simply unaddressed in most work. The answer governs whether construct validity ([[validity/construct-validity-for-llms]]) is even attainable with borrowed instruments.

## What Sources Say

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] lay out why transfer is doubtful — LLMs:

- **lack a physical body**, so they cannot express the physiological variables that are part of many construct measurements;
- **operate only conditioned on input**, lacking the variety of lived situations humans encounter.

Two issues follow. First, comparing test scores across what may be *differing* constructs (human vs. LLM) is potentially misleading and currently inadvisable. Second, the *contents* of a human test may be inappropriate to measure the corresponding LLM construct. A related obstacle is **unknown response processes**: tests assume answers arise from construct-aligned cognitive processes, but it is unclear whether LLM and human internal processes are comparable at all. The authors' proposed solution is to **develop standalone construct definitions and corresponding tests specifically for LLMs**, rather than adopting them from human psychology — the central recommendation of the paper's abstract and conclusion. The authors further note that even "individual" vs. "population" carries a different meaning for LLMs, complicating *what* a test should apply to.

## Suggested Investigation

- Build LLM-native construct definitions grounded in what models actually are (input-conditioned, bodiless, corpus-derived), then design and validate instruments for those constructs.
- Empirically test transfer: where a human construct is borrowed, gather convergent/discriminant evidence ([[validity/construct-validity-for-llms]]) showing the instrument tracks the claimed construct *in the model*.
- Investigate LLM response processes (e.g., via interpretability) to check whether they plausibly align with the construct, replacing the human assumption that responses reflect construct-aligned cognition.
- Stop reporting human–LLM score comparisons until transfer is demonstrated.

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
