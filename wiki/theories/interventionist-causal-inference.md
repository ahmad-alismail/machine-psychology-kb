---
type: theory
field: machine-psychology
lens: psychological
tags: [causal-reasoning, intervention, do-operator, seeing-vs-doing, decision-making]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Interventionist Causal Inference (Seeing vs. Doing)

> [!info] In plain terms
> Watching a barometer needle tells you about the weather. But if you *grab the needle and
> move it yourself*, it tells you nothing — you broke the link between the needle and the
> weather. People intuitively know that *observing* a variable and *making it happen* lead to
> different conclusions. This theory captures that difference, and it gives a clean way to test
> whether an agent reasons about cause and effect or just memorizes correlations.

## Statement

There is a fundamental asymmetry between **observing** a variable take a value and
**intervening** to *set* it to that value. Waldmann & Hagmayer (2005) ("Seeing versus doing")
showed people are sensitive to this difference. Subjects first see 20 observations of a
three-variable system, then learn its causal structure:

- **Common-cause condition** — *A* causes both *B* and *C* (*B* ← *A* → *C*).
- **Causal-chain condition** — *B* → *A* → *C*.

They then predict how often *C* is active across 20 new cases under one of two regimes:
**observing** *B*'s value vs. **intervening** to fix *B*. In the common-cause condition,
*observing* *B* = 1 licenses inferring *A* (and hence *C*) is likely active, whereas
*intervening* on *B* does not — because the intervention severs *B* from its cause *A*.

Pearl's *do*() operator (Pearl 2009) formalizes intervention: `do(B = b)` sets *B* to *b* but
**deletes every arrow pointing into *B*** in the causal graph. The key testable prediction:

- In the **common-cause** condition, observing and intervening on *B* yield **different**
  predictions for *C* (there is an arrow *A* → *B* to delete).
- In the **causal-chain** condition, observing and intervening yield **identical** predictions
  (no arrow points into *B*, so deletion changes nothing).

An agent that reasons causally produces this condition-dependent pattern; an agent that ignores
causal structure produces the same prediction regardless of structure or regime.

## Relevance to Machine Psychology

[[sources/binz-schulz-2022]] adapts the Waldmann & Hagmayer design (with a wine-cask cover
story from Meder et al. 2008) to test GPT-3. GPT-3 matched the normative interventional
inference in the *common-cause* condition, but in the *causal-chain* condition "made identical
predictions compared to the common-cause condition," showing it "was not able to incorporate
the additional information about the underlying causal structure into its inference process" —
which makes the common-cause success "likely purely accidental." The seeing-vs-doing contrast
thus acts as a discriminating test: matching one condition is not evidence of causal reasoning
unless the agent also *differentiates* the conditions.

## Paradigms Grounded in This Theory

- [[paradigms/interventional-causal-inference-task]]

## Sources

- [[sources/binz-schulz-2022]]
