---
type: concept
field: machine-psychology
lens: na
eval_axis: na
tags: [in-context-learning, few-shot, prompting, learning, emergence]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# In-Context Learning

> [!info] In plain terms
> Normally an AI model only "learns" while it is being trained, by adjusting its
> internal weights. In-context learning is different: the model picks up a new
> task on the fly, just from the examples or instructions you put in the prompt,
> without any change to its weights. It is one of the surprising abilities that
> appeared in large language models on its own.

## Definition

In-context learning (ICL) is the ability of an LLM to **learn from its context —
the prompt — without any gradient-based updates to its weights**.
[[sources/hagendorff-et-al-2024]] describes it as the ability to learn from a few
examples in context, a capability that practitioners did not explicitly encode or
train for but that nonetheless arose from the machine-learning architecture, data,
and learning signal. It is the paper's flagship example of an emergent ability.

The paper notes that ICL is a fast-growing research area: as context windows
expand, models gain striking ICL-driven capabilities (e.g., learning an entire
language from context alone), but also new failure modes (e.g., many-shot prompts
that overcome safety fine-tuning). Work cited in the paper traces ICL's emergence
to **data-distributional properties** such as *burstiness* (items appearing in
clusters rather than uniformly) and the presence of many rarely occurring classes.

## Why It Matters

ICL is the prototypical capability that machine psychology must study
behaviorally, because its underlying learning algorithm is not specified by the
training procedure and must be uncovered empirically (e.g., by comparing model
outputs to hypothesized learning algorithms). It also matters for safety: the
same in-context mechanism that lets a model rapidly acquire a task from the prompt
can be exploited — for example, many-shot prompting to bypass safety
fine-tuning.

## Related

- [[concepts/emergent-abilities]]
- [[sources/hagendorff-et-al-2024]]
