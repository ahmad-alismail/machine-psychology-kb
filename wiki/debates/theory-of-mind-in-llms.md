---
type: debate
field: machine-psychology
lens: na
eval_axis: na
tags: [theory-of-mind, false-belief, robustness, contamination, kosinski, ullman]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Do LLMs Have Theory of Mind?

> [!info] In plain terms
> Theory of mind is the ability to reason about what others believe — including beliefs that are false. One study reported that GPT-4 passes the classic false-belief tests, hinting that this ability emerged on its own. Another showed that tiny, meaning-preserving tweaks to the same tests make the model fail, suggesting it never had robust theory of mind at all. This clash is the field's canonical cautionary tale.

## The Disagreement
Have large language models acquired a genuine, robust **theory of mind** (the capacity to attribute mental states, including false beliefs, to others), or do apparent successes reflect pattern-matching that collapses under trivial perturbation? The question matters both as a test case for "emergent" social cognition and because the same skill underlies persuasion, manipulation, and [[safety-concepts/deception]].

## Position A
**Claim**: Theory of mind may have spontaneously emerged in LLMs; GPT-4 passes false-belief ("unexpected contents") tasks.
**Held by**: Kosinski (2023).
**Arguments**: The ability to ascribe unobservable mental states appears at scale, emerging as a by-product of training rather than being explicitly engineered — paralleling the developmental emergence of theory of mind in children.
**Evidence**: GPT-4 succeeds on standard unexpected-contents false-belief items, with reported performance compared to that of elementary-school children.

## Position B
**Claim**: The successes are not robust theory of mind; trivial, theory-of-mind-preserving alterations break performance.
**Held by**: Ullman (2023).
**Arguments**: If a model truly represented others' beliefs, small perturbations that keep the underlying false-belief logic intact should not flip its answers. That they do indicates reliance on surface patterns (and likely contamination by familiar test items) rather than a general capacity. This is a direct instance of the **performance–competence distinction**: passing a specific item does not establish the underlying competence.
**Evidence**: Minimal variations to the test items (that preserve theory-of-mind principles) make the apparent ability disappear.

## Synthesis
This Kosinski-vs-Ullman pair is cited by **both** [[sources/loehn-kiehne-et-al-2024]] and [[sources/pellert-et-al-2024]] as the emblematic example of **contradictory results produced by a lack of standardization**. The lesson is not a settled verdict on machine theory of mind but a methodological one: claims require contamination-controlled, perturbation-robust, standardized testing before they can be believed. The debate therefore motivates [[validity/test-validity-requirements]] and careful design of the [[paradigms/false-belief-task]]. Because theory of mind ([[theories/theory-of-mind]]) underwrites an agent's ability to model and mislead others, robust evidence here is also a prerequisite for assessing manipulation and [[safety-concepts/deception]]. On current evidence the robust-theory-of-mind claim is **not established**; apparent passes should be treated as item-specific until shown to survive principled perturbation.
