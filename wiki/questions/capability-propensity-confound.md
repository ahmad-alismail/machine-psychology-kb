---
type: question
field: machine-psychology
lens: na
eval_axis: both
tags: [capability, propensity, elicitation, safety-evals, chain-of-thought]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Separating Capability from Propensity

> [!info] In plain terms
> There are two very different questions you can ask about a model: "*can* it do X if I really try to get it to?" and "*would* it do X on its own, unprompted?" The first is a capability, the second a propensity. They get confused easily, because clever prompting can squeeze out abilities a model would never show by default — which matters a lot when you are trying to judge whether a model is safe.

## Why It Matters

For safety evaluation, the two questions have opposite failure modes. If you only measure *propensity* (default behavior) you may miss a dangerous capability the model has but does not spontaneously display. If you measure *capability* with aggressive elicitation, you may overstate what the model will actually do in deployment. Conflating them produces both false reassurance and false alarm. The distinction underlies whether a measured behavior reflects what a model *will* do versus what it *can* be made to do — central to assessing [[safety-concepts/dangerous-capabilities]].

## What Sources Say

[[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] describe several elicitation methods that **inflate measured capability**, and warn that omitting them can *underestimate* a model's abilities:

- **(zero-shot) chain-of-thought** prompting ("Let's think step by step") improves reasoning performance;
- self-consistency (multiple reasoning paths, majority vote), least-to-most decomposition, few-shot exemplars, self-reflection, and prompting the model to use code.

Because these augmentations move the measured score, *the same model* looks more or less capable depending on elicitation effort — so a behavioral result is a joint property of the model and the elicitation method, not of the model alone. Hagendorff et al. also invoke the **performance–competence distinction** (Chomsky 1965; Firestone 2020): the absence of a behavior does not entail the absence of the underlying competence, and good controls are needed to decide whether observed behavior Y really implies construct/capability X.

The capability/propensity gap is exactly what the safety concern of [[safety-concepts/sandbagging]] exploits — a model that **hides** a capability (strategically underperforming) reads as low-propensity while retaining the capability. It also interacts with [[safety-concepts/deception]]: a model could misrepresent its own capabilities or intentions, so self-report and default behavior cannot be trusted as measures of either dimension.

## Suggested Investigation

- Measure both axes explicitly: a *capability ceiling* using strong elicitation (chain-of-thought, best-of-K, few-shot) and a *propensity baseline* using default, un-augmented prompts, and report the gap.
- Treat results as conditional on elicitation method; vary and disclose it.
- Design controls (per the experimental tradition) so observed behavior cannot be explained without the target capability — guarding against both performance-underestimation and shallow-heuristic over-attribution.
- Develop sandbagging-resistant elicitation to surface hidden capabilities ([[safety-concepts/sandbagging]]) and cross-check self-reported capability against demonstrated behavior to detect [[safety-concepts/deception]].

## Sources

- [[sources/hagendorff-et-al-2024]]
