---
type: method
field: machine-psychology
lens: na
eval_axis: na
tags: [chain-of-thought, prompting, reasoning, capability-elicitation]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Chain-of-Thought Elicitation

> [!info] In plain terms
> LLMs often answer better if you let them "show their work" instead of blurting out a final answer. The simplest trick is appending "Let's think step by step," which prompts the model to reason through intermediate steps. Related variants generate several reasoning paths and take a majority vote, or break a hard problem into easier sub-problems. These techniques pull out abilities a model has but won't display by default — which is exactly why they matter, and why they complicate claims about what a model "really" can or will do.

## Description

Chain-of-thought (CoT) elicitation is a family of prompt augmentations that improve reasoning performance by inducing explicit intermediate reasoning, described in the "eliciting capabilities with prompts" section of [[sources/hagendorff-et-al-2024]]:

- **Zero-shot CoT:** append "Let's think step by step" to the prompt (Kojima et al. 2022; Wei, Wang, et al. 2022).
- **Self-consistency:** generate multiple CoT reasoning paths and take the majority answer (Wang, Wei, et al. 2022).
- **Least-to-most prompting:** decompose a problem into ordered sub-problems solved in sequence (Zhou et al. 2022).

These methods *elicit latent capability*: omitting them can lead to underestimating a model's competence, while adding them can reveal abilities the default prompt hides. [[sources/hagendorff-et-al-2024]] notes such augmentations typically help some tasks but not others, so they must be applied and reported deliberately. To preserve room for reasoning during scoring, models can be instructed to emit a final answer after a delimiter (e.g., "####") so verbose CoT output does not break automated evaluation.

> [!note] Capability vs. Propensity
> CoT elicitation directly raises the **capability-vs-propensity** problem central to machine psychology: a capability that only appears *under elicitation* is not the same as a behavior the model produces *spontaneously*. Reporting a CoT-elicited success measures competence (the performance–competence distinction), not what the model does unprompted — a distinction that must be kept explicit when interpreting results.

## Used By

- [[paradigms/false-belief-task]] — CoT can surface belief-tracking competence that a direct-answer prompt masks.
- [[paradigms/cognitive-bias-probe]] — CoT tests whether a bias is a surface artifact that dissolves under step-by-step reasoning, or a deeper reasoning failure.

## Strengths

- Reduces underestimation of model competence by giving room for intermediate reasoning.
- Zero-shot CoT is trivially cheap (one appended phrase) yet broadly effective on reasoning tasks.
- Self-consistency improves robustness by aggregating over multiple reasoning paths.
- Compatible with clean automated scoring via a final-answer delimiter.

## Limitations

- **Confounds capability with propensity:** elicited performance does not equal spontaneous behavior, so CoT results can overstate what a model will do in deployment.
- **Task-dependent and non-uniform:** a given augmentation may help one task and hurt another, reducing systematic comparability across studies ([[sources/hagendorff-et-al-2024]]).
- Adds degrees of freedom (which prompt augmentation, how many paths) that, if unreported, harm reproducibility.
- Multiple-choice framing combined with CoT can constrain reasoning if the model is pushed toward brief answers.

## Sources

- [[sources/hagendorff-et-al-2024]] — describes CoT, self-consistency, and least-to-most prompting as capability-elicitation methods and frames the elicited-vs-spontaneous (performance–competence) caveat.
