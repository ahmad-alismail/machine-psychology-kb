---
type: question
field: machine-psychology
lens: psychological
tags: [construct-validity, methodology, open-problem]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Should psychological constructs be redefined specifically for LLMs?

> [!info] In plain terms
> "Anxiety," "personality," "Theory of Mind" — these words were defined to describe
> humans, who have bodies, feelings, and lifelong experience. A language model has none
> of that. So when we measure an LLM's "anxiety," are we measuring the same thing, or just
> borrowing a human label that doesn't fit? This question asks whether the field should
> build fresh, machine-specific definitions instead of recycling human ones.

## Why It Matters

If a construct defined for humans does not transfer to LLMs, then a test validated for
that construct in humans is *not* automatically a valid measure of it in an LLM — and the
score it produces may be meaningless. Two concrete harms follow, per
[[sources/loehn-et-al-2024]]:

1. **Misleading human↔LLM comparisons.** Comparing scores on a construct that means
   different things for each population "could be potentially harmful and support
   misleading conclusions"; the paper judges such comparison "currently inadvisable."
2. **Inappropriate test content.** A test built around human experience may simply fail
   to tap the corresponding (if any) LLM construct.

This is the load-bearing assumption behind validity ([[theories/psychometric-test-standards]],
R2): you cannot validate a measure of X without first pinning down what X *is* for this
test taker.

## What Sources Say

- [[sources/loehn-et-al-2024]] — "LLMs differ fundamentally from humans in their internal
  operations and external representations… construct definitions for humans might not be
  transferable to LLMs." Recommends developing **standalone construct definitions and
  corresponding tests for LLMs**, and notes the linked problem of **unknown response
  processes**: it is unclear whether the internal processes generating human and LLM
  responses are comparable at all.

## Suggested Investigation (toward a new paradigm)

- For a target construct, build a **discriminant-validity battery**: does the LLM
  "construct" correlate with the human-theory-predicted neighbors and diverge from its
  predicted non-neighbors? Divergence is evidence the borrowed definition does not hold.
- **Bottom-up construct discovery**: instead of importing an inventory, derive an LLM
  construct from observed behavioral covariation (factor structure over many tasks), then
  test whether it aligns with or departs from the human construct.
- Probe **response-process alignment** directly (e.g. chain-of-thought, perturbation
  sensitivity) to test whether human-process-isolating methods apply to LLMs at all.
