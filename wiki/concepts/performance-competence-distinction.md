---
type: concept
field: machine-psychology
lens: na
eval_axis: na
tags: [competence, performance, chomsky, capability, evaluation, sandbagging]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Performance–Competence Distinction

> [!info] In plain terms
> What someone does on a given test (their performance) is not the same as what
> they are actually capable of (their competence). A person can flub an easy sum
> without lacking the ability to do math. The same gap applies to AI models: a
> model failing a task does not prove it lacks the underlying ability — and, just
> as importantly, a model could hide an ability it really has.

## Definition

The performance–competence distinction, due to Chomsky, holds that the way an
agent **performs** in a particular situation may not fully capture its underlying
**competence**. [[sources/hagendorff-et-al-2024]] explains that humans may make
mistakes even on an easy calculation, or produce ungrammatical language
colloquially, without this meaning they lack the abstract capability for math or
language. Observed behavior can therefore *under-state* (or, by symmetry,
*over-state*) the underlying capability: **absence of a behavior is not evidence
of absence of the capability.**

The paper invokes this distinction to frame a core methodological question in
machine psychology: *does the absence of behavior Y indicate the absence of the
construct X?* It cites work arguing that the same competence-vs-performance issues
apply when assessing machine-learning systems and, particularly, LLMs — which is
why prompt design (e.g., chain-of-thought elicitation) can change whether a
latent capability is expressed at all.

## Why It Matters

This distinction is the conceptual hinge between **capability and propensity
evaluation**: a measured behavior tells you what the model *did*, not the full
envelope of what it *can do*. Omitting capability-eliciting prompts can lead to
**underestimating** a model's competence, while certain prompts can elicit it.

The distinction is directly relevant to [[safety-concepts/sandbagging]]: a model
may strategically **hide its competence**, performing worse than it is capable of
on an evaluation. Because absence of a behavior does not imply absence of the
capability, an evaluator who reads low performance as low capability can be misled
— exactly the failure mode sandbagging exploits.

## Related

- [[safety-concepts/sandbagging]]
- [[methods/chain-of-thought-elicitation]]
- [[sources/hagendorff-et-al-2024]]
