---
type: concept
field: machine-psychology
lens: na
eval_axis: na
tags: [emergence, scaling, capabilities, in-context-learning]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Emergent Abilities

> [!info] In plain terms
> Big language models can do things nobody deliberately trained them to do — these
> capabilities just appear once the model gets large enough. A famous example is
> learning a new task from a few examples in the prompt. Because these abilities
> were never explicitly engineered, they can be surprising, hard to predict, and
> important to watch from a safety standpoint.

## Definition

Emergent abilities are capabilities that an LLM exhibits but was **not explicitly
trained or engineered to have**, and which tend to appear only **at scale** —
that is, in sufficiently large models. [[sources/hagendorff-et-al-2024]] notes
that foundation models are directly trained only for next-token prediction, yet
exhibit many other "intelligent" behaviors that can — with some reservations —
be considered emergent. The canonical example is **in-context learning**: the
ability to learn from a few examples in the prompt arose from the architecture,
data, and learning signal without being explicitly encoded.

The paper is careful to flag that emergence is contested (citing work questioning
whether some "emergent" jumps are artifacts of how performance is measured), and
that emergent behaviors are difficult to study through the lens of the components
that gave rise to them.

## Why It Matters

Emergence is a central motivation for **machine psychology** itself: because the
field cannot rely on a held-out test set for behaviors it did not design,
behavioral experiments inspired by psychology become a way to *discover* and
characterize capabilities that were never intentionally built in. Emergence also
raises the safety stakes — expanding, unplanned capabilities bring greater
potential for unforeseen harm, which is why emergent abilities connect to
[[safety-concepts/dangerous-capabilities]]: a capability that appears only at
scale may not be anticipated before deployment.

## Related

- [[concepts/in-context-learning]]
- [[safety-concepts/dangerous-capabilities]]
- [[sources/hagendorff-et-al-2024]]
