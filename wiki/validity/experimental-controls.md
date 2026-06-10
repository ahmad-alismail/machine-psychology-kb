---
type: validity
field: machine-psychology
lens: na
eval_axis: na
tags: [experimental-design, controls, hypothesis-driven, prompt-robustness]
date_created: 2026-06-10
date_modified: 2026-06-11
---

# Experimental Controls

> [!info] In plain terms
> This is the discipline of running an LLM "experiment" carefully enough to trust the result. The core idea, borrowed from experimental psychology, is hypothesis-driven: if the model truly has ability X, we should see behavior Y; if not, we should see Z. To make that inference valid you add controls — shuffle the answer options so the model can't just favor the last one, reword the task and swap in new names and orderings so it can't be reciting something memorized, and rule out the technical biases LLMs are prone to. Without these controls, a "result" might just be a prompt artifact.

## The Requirement

Experimental controls are the rigor practices that turn a single suggestive prompt into a defensible inference about an underlying construct. Drawn from the empirical tradition of experimental psychology and adapted for LLMs in [[sources/hagendorff-et-al-2024]]. Its components:

- **Hypothesis-driven structure:** experiments are framed as "if the agent has representation/construct X, we expect behavior Y, otherwise behavior Z." The validity of the inference rests on good controls that ensure behavior Y has no alternative explanation and genuinely implicates X — and on awareness that the *absence* of Y need not imply the absence of X (the performance–competence distinction; relevant to [[safety-concepts/sandbagging]] and [[questions/capability-propensity-confound]]).
- **Counterbalancing option order:** shuffle the order of answer options across multiple runs to neutralize **recency bias** (LLMs over-weighting information near the prompt's end) and other position effects.
- **Defeating memorization / contamination:** keep tasks structurally similar to established paradigms but change wordings, agents, objects, orders, and actions so the model cannot simply reproduce memorized token patterns; procedurally generated stimuli are inherently more contamination-resistant (see [[validity/training-data-contamination]]).
- **Controlling prompting biases:** design prompts (and prompt variants) to avoid triggering known LLM biases — recency bias, common-token bias (favoring frequent tokens), and majority-label bias in few-shot settings.
- **Representative prompt batteries:** use varied prompt versions and adequate samples rather than small convenience samples, because slight wording changes can shift outputs substantially; only systematic re-occurrence across variants demonstrates a generalizable behavior (see [[validity/reproducibility-in-machine-psychology]]).

## Used By

The default control/scoring discipline for the psychological and game-theoretic paradigms that are not scored by an inventory-specific procedure:

- [[paradigms/false-belief-task]]
- [[paradigms/cognitive-bias-probe]]
- [[paradigms/repeated-game-play]]
- [[paradigms/ultimatum-game]]

(The [[paradigms/psychometric-inventory-administration]] paradigm uses these same control principles but scores via zero-shot NLI classification.)

## Limitations

- More expensive: representative batteries, counterbalancing, and rephrasings multiply the number of runs required.
- **Absence-of-behavior remains ambiguous:** even well-controlled designs cannot cleanly conclude a construct is *absent* from a failure, given the performance–competence gap.
- Modifying items to defeat memorization itself requires fresh validity evidence that the altered task still measures the intended construct — a re-validation burden [[sources/loehn-kiehne-et-al-2024]] found largely unmet in practice.
- Controls reduce but cannot eliminate prompt sensitivity; some construct-irrelevant variance always remains.

## Sources

- [[sources/hagendorff-et-al-2024]] — the "design and analysis" recommendations (hypothesis-driven controls, order shuffling, contamination avoidance, prompting-bias control, representative sampling) that constitute this discipline.
