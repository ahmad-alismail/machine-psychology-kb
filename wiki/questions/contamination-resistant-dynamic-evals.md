---
type: question
field: machine-psychology
lens: na
eval_axis: na
tags: [contamination, dynamic-evals, procedural-generation, staleness, benchmarks]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# How to Build Contamination-Resistant, Dynamic Evaluations

> [!info] In plain terms
> Because the tests we give language models often end up inside the next model's training data, any fixed test eventually "leaks" and stops measuring real ability — the model has effectively seen the answer key. The open question is how to design evaluations that resist this: tests that are regularly refreshed, generated on the fly, or otherwise kept novel, so they keep measuring capability rather than memorization.

## Why It Matters

A static test, once published and absorbed into pretraining corpora, no longer distinguishes capability from memorization — the [[validity/training-data-contamination|contamination]] problem (requirement R4 in [[validity/test-validity-requirements]]). Worse, contamination grows over time as more models train on more of the web, so a benchmark can silently *go stale*: results drift upward not because models improve but because the test leaks. Evaluations that stay valid as models and corpora evolve are therefore a prerequisite for trustworthy longitudinal measurement.

## What Sources Say

[[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] argue researchers must ensure LLMs have never seen the test before and go beyond mere memorization: prompts may be structurally like existing tasks but should use **new wordings, agents, orders, and actions**. They explicitly endorse **procedurally generated** experiments — generating items dynamically instead of drawing from a static dataset — as **inherently less susceptible to data contamination** (citing CogBench / Coda-Forno et al. 2024). They also note that older heuristics-and-biases results "disappearing" in newer models may partly reflect leakage of those classic tasks into training sets, underscoring the staleness risk.

[[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] frame the same problem under R4: either demonstrate the absence of contamination effects or ensure item uniqueness. In their audit, 9 of 25 studies modified items (rephrasing or new stimuli) to reduce the chance of prior exposure — but only one (Coda-Forno et al.) validated that the modified test remained a valid measure. They stress that **any modification requires re-validation**, so contamination-resistance cannot be bought at the cost of construct validity.

## Suggested Investigation

- **Procedural / generative item construction**: parameterized templates that synthesize fresh items (new agents, orders, surface forms) on each run, so no fixed answer key exists to memorize.
- **Regularly-updated, dynamic benchmarks**: refresh item pools on a schedule; compare model series that share architecture/training but differ only in regularly-updated corpora (an approach [[sources/pellert-et-al-2024|Pellert et al. (2024)]] suggest for isolating the role of data) to detect leakage-driven drift.
- **Validate every variant**: pair each rephrasing/generation scheme with convergent evidence that the new items still measure the intended construct ([[validity/construct-validity-for-llms]]).
- **Contamination diagnostics**: where training data is inaccessible (proprietary models), develop tests for memorization signatures rather than assuming cleanliness.

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
- [[sources/hagendorff-et-al-2024]]
