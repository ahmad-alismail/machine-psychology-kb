---
type: question
field: machine-psychology
lens: na
tags: [methodology, validity]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Did cognitive biases really disappear in newer LLMs, or did the tests stop working?

> [!info] In plain terms
> Newer models no longer fall for the classic trick questions that caught both humans
> and older models. That could mean they genuinely reason better — or that they've seen
> the famous puzzles in their training data and memorized the answers, while the
> underlying shortcuts are still there, hidden.

## Why It Matters

This is a test case for the central validity problem of machine psychology: separating
genuine construct change from instrument failure (contamination + stimulus saturation).
If the disappearance is an artifact, capability and safety assessments built on clean
bias profiles are overconfident.

## What Sources Say

[[hagendorff-et-al-2024]]: human-like heuristics and biases
"have largely disappeared in the latest generation of LLMs" (citing Chen et al. 2023;
Hagendorff et al. 2023), but the review immediately offers two deflationary readings —
the stimuli "possibly no longer challenge the growing reasoning abilities in LLMs," and
"this could also be due to leakage into the training set."

[[sources/ong-2024]] poses the **cross-model** version of the same puzzle (Outstanding
Issue 2): "What should we make of contexts when 'smaller models' fail at a certain task,
while 'bigger/better models' succeed" — GPT-4 yes, GPT-3 no? His pessimistic verdict is
that "those questions seem like they would yield engineering answers, rather than
cognitive insights," and that even a per-model idiosyncrasy (an ability "restricted to
one particular model … but not shared by other models of similar specifications") is a
meta-scientific problem the field has not resolved. He also supplies the mechanism behind
the contamination reading: trivial alterations to canonical items "like word order or
changing names can break LLM performance," consistent with memorized — not genuinely
reasoned — successes.

## Suggested Investigation (toward a new paradigm)

Re-test the disappeared biases with procedurally generated, structure-matched items that
cannot be memorized (cf. [[instruments/cogbench]]), at difficulty levels calibrated to
the model rather than to human participants. If biases reappear on novel items, the
"disappearance" was contamination; if not, it reflects capability. Extends
[[paradigms/heuristics-and-biases-battery]].
