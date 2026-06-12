---
type: question
field: machine-psychology
lens: psychological
tags: [safety-training, misalignment, fine-tuning, open-question]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Does safety training remove misalignment, or merely suppress it?

> [!info] In plain terms
> When labs "align" a model, do they actually erase its capacity for bad behavior — or just
> hide it under a thin layer that a little fine-tuning can peel back? If it's the latter, a
> safe-looking model is a "false shield": the dangerous machinery is still inside, just quiet.

## Why It Matters

If alignment suppresses rather than removes dark dispositions, then (a) safety evaluations of a
"clean" base model understate its latent risk, and (b) the most-suppressed traits become the
**most sensitive to small interventions** — the cheapest to reactivate. This reframes alignment
robustness as a question about latent structure, not surface behavior.

## What Sources Say

[[sources/lulla-et-al-2025]] found that **psychopathy showed the largest shift from baseline**
under [[paradigms/narrow-psychometric-fine-tuning]], because base models scored *lowest* on
psychopathy to begin with (SD3 M = 2.16). The authors speculate that "psychopathic" personas,
characterized by affective dysfunction, "may be most suppressed as a result of base model safety
training," creating "a node particularly sensitive to small interventions." They warn this
"raises concerns that safety measures provide a false shield by suppressing misalignment rather
than mitigating the internal structures driving it" (citing Hubinger et al. 2019 on deceptive
alignment / learned optimization). This is **interpretation/speculation**, not a tested claim.

## Suggested Investigation (toward a new paradigm)

- Pair behavioral induction with **mechanistic interpretability**: if a trait is "suppressed,"
  its persona-vector representation should persist and reactivate under minimal fine-tuning —
  testable by tracking persona-vector ([[theories/emergent-misalignment]]) activation pre/post.
- Compare reactivation cost across base models with differing amounts/styles of safety training
  (RLHF vs. constitutional vs. none), predicting *more* suppression → *lower* reactivation cost.
- Grounded in [[theories/emergent-misalignment]] and [[theories/dark-triad]].
