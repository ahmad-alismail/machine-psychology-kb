---
type: question
field: machine-psychology
lens: na
tags: [methodology, ai-safety]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Can longitudinal machine-psychology data predict future behavioral potentials in LLMs?

> [!info] In plain terms
> If you give every new model generation the *same* battery of psychological tests, you
> get a time series of how machine behavior is changing — like a growth chart for AI.
> Could that chart let safety researchers see dangerous capabilities coming before they
> fully arrive?

## Why It Matters

Safety evaluation is reactive if every capability is discovered only after it emerges.
A stable, repeated test battery would let researchers "extrapolate trends regarding the
development of reasoning abilities in LLMs" and anticipate risks.

## What Sources Say

[[hagendorff-et-al-2024]] proposes exactly this: "once test
settings for machine psychology are established, researchers can investigate how LLMs
develop over time by applying the same tasks multiple times, yielding longitudinal data
… increasingly important for AI safety and AI alignment research to predict future
behavioral potentials in LLMs." Tension the same source documents: reusing identical
tasks across generations invites training-data contamination, and stimuli "designed to
be challenging for human study participants" saturate as capabilities grow.

## Suggested Investigation (toward a new paradigm)

Design a longitudinal battery that is **procedurally generated** (contamination-resistant
by construction, as in [[instruments/cogbench]]) yet **psychometrically stable** across
generations — fixed task *structure*, fresh surface forms per administration — and apply
it to each frontier-model release. Candidate components: 
[[paradigms/heuristics-and-biases-battery]], [[paradigms/false-belief-task]],
[[paradigms/repeated-games]].
