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

## Suggested Investigation (toward a new paradigm)

Re-test the disappeared biases with procedurally generated, structure-matched items that
cannot be memorized (cf. [[instruments/cogbench]]), at difficulty levels calibrated to
the model rather than to human participants. If biases reappear on novel items, the
"disappearance" was contamination; if not, it reflects capability. Extends
[[paradigms/heuristics-and-biases-battery]].
