---
type: paradigm
field: machine-psychology
lens: psychological
eval_axis: capability
tags: [heuristics-and-biases, reasoning, content-effects, framing]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Cognitive-Bias Probe

> [!info] In plain terms
> Humans take mental shortcuts ("heuristics") that usually help but sometimes lead to predictable mistakes — like judging a problem differently depending on how it is phrased. This paradigm presents an LLM with the classic puzzles psychologists used to expose those shortcuts (anchoring, framing, the conjunction fallacy, belief-biased syllogisms) and asks whether the model falls for the same traps. It is mostly a test of how robust and content-independent the model's reasoning is.

## Theoretical Grounding

This paradigm draws on [[theories/heuristics-and-biases]], one of the most influential research programs in psychology (Tversky and Kahneman 1974; Gigerenzer and Gaissmaier 2011). Heuristics are mental shortcuts that simplify reasoning; the framework studies both their successes and their characteristic failures. [[sources/hagendorff-et-al-2024]] treats heuristics-and-biases as the first of its four core machine-psychology research areas, citing Binz and Schulz (2023) as among the first to apply the paradigm to LLMs and Dasgupta et al. (2022) on *content effects* — the finding that models, like humans, reason more accurately about believable or familiar material than about abstract or unbelievable material.

## Target Behaviors

**Detects:** weak / largely indirect mapping to any dangerous behavior. Honestly, a cognitive-bias probe is primarily a measure of **reasoning robustness** and **susceptibility to framing** — it is not a direct detector of harmful intent or action. The loose safety connection is to [[safety-concepts/deception]] read as *manipulability*: a model whose answers swing with surface framing or anchoring is, by the same token, more steerable by an adversary who crafts inputs to push it toward a desired (possibly harmful) conclusion. That is a property of the input channel's exploitability, not evidence that the model itself deceives.

> [!warning] Honest mapping
> Do not over-claim. Susceptibility to a framing effect tells you the model's outputs can be nudged by wording; it does not tell you the model will deceive, scheme, or pursue any goal. Treat this paradigm as a reasoning-robustness diagnostic with a secondary, speculative bearing on manipulability.

> [!note] Capability vs. Propensity
> Capability: Does the model reason normatively (resist the bias) or does it reproduce the human shortcut?
> Propensity: Not a propensity measure — it characterizes a reasoning signature, not a disposition to act on any goal.

## Setup / Elicitation

Present classic heuristics-and-biases items and content-effect reasoning tasks, for example:

- **Framing / anchoring:** the same decision posed under gain vs. loss framing, or after a high vs. low numeric anchor.
- **Conjunction fallacy:** Linda-style problems probing whether a conjunction is judged more probable than its conjunct.
- **Content effects on logic:** matched logical syllogisms (e.g., Wason-style or modus-tollens problems) with believable vs. unbelievable vs. abstract content (Dasgupta et al. 2022), testing whether accuracy depends on semantic plausibility rather than logical form.

Each item is paired with the hypothesis-driven control structure of [[methods/behavioral-control-design]] (if the model reasons normatively, expect Y; if it relies on the heuristic, expect Z). [[methods/chain-of-thought-elicitation]] is frequently added to test whether the bias is a surface artifact that disappears under explicit step-by-step reasoning — surfacing the performance–competence distinction.

## Instruments Used

None. Stimuli are individual reasoning vignettes drawn from the cognitive-psychology literature, not standardized scored inventories.

## Scoring

Scored via [[methods/behavioral-control-design]]: classify each response as bias-consistent vs. normatively correct, comparing matched conditions (e.g., believable vs. abstract content; gain vs. loss frame) to isolate the effect. Because outputs are highly sensitive to prompt wording, robust scoring demands batteries of varied phrasings, counterbalanced answer orders (to defeat recency bias), and multiple runs rather than single convenience prompts.

## Validity Concerns

- [[validity/training-data-contamination]] — These items are classic and widely reproduced online; a "correct" answer may reflect a memorized canonical solution rather than genuine reasoning. [[sources/hagendorff-et-al-2024]] explicitly raises leakage as an explanation for why latest-generation models pass items that tripped earlier ones.
- **Benchmark staleness:** the stimuli were designed to be hard for *human* participants and may simply no longer challenge current LLMs' reasoning. [[sources/hagendorff-et-al-2024]] notes that human-like heuristics and biases "largely disappeared in the latest generation of LLMs" (Chen et al. 2023; Hagendorff et al. 2023), so the paradigm risks measuring nothing once items are saturated — an argument for procedurally generated, contamination-resistant variants (e.g., CogBench-style; Coda-Forno et al. 2024).
- [[validity/construct-validity-for-llms]] — whether a framing effect in an LLM reflects the *same* construct it does in humans is unestablished; the underlying response processes may differ entirely.

## Evidence & Findings

- GPT-3 displayed several human-like cognitive biases (Binz and Schulz 2023), per [[sources/hagendorff-et-al-2024]].
- LLMs show human-like *content effects*: better logical accuracy on familiar/believable material than on abstract material (Dasgupta et al. 2022).
- Human-like biases were prominent in earlier models but "largely disappeared" in ChatGPT-generation models (Chen et al. 2023; Hagendorff et al. 2023) — a moving-target finding consistent with both genuine capability gains and contamination/staleness.

## Sources

- [[sources/hagendorff-et-al-2024]] — establishes heuristics-and-biases as a core machine-psychology paradigm and documents the disappearance of biases in newer models.

## Open Questions

- Are vanishing biases in newer models evidence of improved reasoning, of training-data leakage, or of benchmark staleness — and how can these be disentangled?
- Does measured susceptibility to framing in a controlled probe predict real-world manipulability under adversarial prompting?
- Can procedurally generated bias items maintain difficulty and validity as models improve?
