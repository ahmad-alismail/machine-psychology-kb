---
type: paradigm
field: machine-psychology
lens: psychological
tags: [causal-reasoning, intervention, do-operator, seeing-vs-doing]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Interventional Causal-Inference Task

> [!info] In plain terms
> A test of whether an agent really understands cause and effect or just tracks which things
> happen together. The agent learns a simple system of three substances, is told how they cause
> one another, and then has to predict an outcome in two situations: when it *observes* one
> substance is present versus when it *deliberately adds* that substance. A causal reasoner
> answers differently in the two situations when the structure demands it; a pattern-matcher gives
> the same answer regardless. GPT-3 gave the same answer regardless — it failed.

## Theoretical Grounding

- [[theories/interventionist-causal-inference]] — exploits the prediction that *observing* and
  *intervening on* a variable license different inferences, and that this difference depends on
  causal structure (common-cause vs. causal-chain) via Pearl's *do*()-operator, which deletes
  arrows into the intervened variable.

## Target Behaviors

- Detects: presence/absence of **structure-sensitive causal reasoning** — a capability
  characterization. No direct dangerous-capability [[safety-concepts/...]] link; causal reasoning
  is a prerequisite competence whose absence bounds an agent's planning reliability.

## Setup / Elicitation

Adapted from Waldmann & Hagmayer (2005) with a wine-cask cover story (Meder et al. 2008) in
[[sources/binz-schulz-2022]]. The model reads 20 observations of a three-substance system
(*A*, *B*, *C* present/absent per cask), then receives the causal structure as text, in one of
two conditions:

- **Common-cause** — "*A* likely causes *B*" and "*A* likely causes *C*" (*B* ← *A* → *C*).
- **Causal-chain** — the *A*→*B* direction inverted (*B* → *A* → *C*).

It is then asked to predict, for 20 new casks in which substance *B* has been **manually added**
(an *intervention*), how many will contain *C* — and, separately, the **observational** version
(merely observing *B*'s value). The normative answers diverge across observe/intervene only in
the common-cause condition.

## Scoring / Procedure

- Compare the model's *interventional* and *observational* predictions for *C* against (a) the
  normative *do*()-operator prescription and (b) human judgments, **separately per condition**.
- The diagnostic is **condition differentiation**: a causal reasoner produces different
  observe-vs-intervene predictions in common-cause but identical ones in causal-chain. Producing
  *the same* pattern across both conditions indicates the agent ignored the supplied causal
  structure.
- Controls: counterbalance which structure is presented; include the observational baseline so
  the intervention effect is measured as a within-item contrast, not an absolute number.

## Validity Concerns

- **Single cover story / single model.** Tested only on GPT-3 with the wine-cask framing; the
  result inherits [[paradigms/adversarial-vignette-perturbation]]'s surface-form caveat — a
  different cover story might shift behavior.
- **Accidental success.** A model can match the normative answer in *one* condition by chance or
  by a non-causal heuristic; only the cross-condition differentiation is load-bearing, which is
  why the common-cause match was judged "likely purely accidental" once the causal-chain
  condition failed.
- **Reading comprehension vs. reasoning.** A failure could reflect not parsing the textual causal
  structure rather than an inability to apply it; ablations that re-state the structure more
  explicitly would separate these.

## Evidence

- GPT-3 matched the normative interventional inference in the common-cause condition but "made
  identical predictions compared to the common-cause condition" in the causal-chain condition,
  indicating it "was not able to incorporate the additional information about the underlying
  causal structure" — so the field reads GPT-3 as failing structure-sensitive causal reasoning
  ([[sources/binz-schulz-2022]]). It also did not lower its *C* prediction after observing
  *B* = 0, which was "neither the correct inference nor human-like."

## Open Questions

- [[questions/cognitive-task-external-validity-for-llms]]
- [[questions/active-interaction-for-causal-and-directed-exploration]]
