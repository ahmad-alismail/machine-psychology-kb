---
type: question
field: machine-psychology
lens: psychological
tags: [causal-reasoning, exploration, embodiment, open-problem, capability]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Does directed exploration and causal reasoning require active interaction, not just passive text?

> [!info] In plain terms
> Humans learn about the world by *doing* — poking things, asking questions, intervening — while a
> language model learns by passively reading text and predicting the next word. GPT-3 turned out to
> be missing exactly the two abilities that seem to come from doing rather than reading: seeking out
> information it lacks (directed exploration) and reasoning about what would happen if it *changed*
> something (causal intervention). This question asks whether those gaps are a fundamental
> consequence of training on passive data — and whether they would close if models were trained by
> interacting with the world.

## Why It Matters

If two specific failure modes — no directed exploration and no structure-sensitive causal
reasoning — trace to a *single* root cause (passive next-token training), then they are predictable
and may not be fixed by scale alone. That bears directly on capable-agent forecasting: an agent that
cannot reason about its own interventions is unreliable at planning, and one that cannot explore
strategically will under-gather information it needs. Conversely, if these gaps close with scale or
with interaction-based training, the field gains a lever for building more capable — and more
double-edged — agents.

## What Sources Say

[[sources/binz-schulz-2022]] surfaces the conjecture directly. GPT-3 "did not show any signatures of
directed exploration," which the authors "believe … can be explained by the differences in how
humans and GPT-3 learn about the world": humans "learn by connecting with other people, asking them
questions, and actively engaging with their environments," whereas LLMs "learn by being passively fed
a lot of text." On causal reasoning they argue "it makes sense that GPT-3 struggles to reason
causally because acquiring knowledge about interventions from passive streams of data is hard to
impossible," and recommend that "to create more intelligent agents researchers should not only scale
up algorithms that are passively fed with data but instead let agents directly interact and engage
with the world." They also note larger models *might* "acquire more robust and sophisticated
reasoning abilities," leaving the scale-vs-interaction question open.

## Suggested Investigation (toward a new paradigm)

- **Re-test across training regimes.** Run [[paradigms/interventional-causal-inference-task]] and the
  horizon-task directed-exploration measure on models that differ in *interaction* exposure
  (tool-use / RL-from-environment fine-tunes, agentic-trajectory training) holding scale roughly
  fixed, to isolate the interaction factor from the scale factor.
- **Scale ablation.** Track both abilities across a model-size ladder to test the "larger models may
  acquire it" alternative; pair with [[questions/longitudinal-behavioral-trends]].
- **Mechanism probe.** Where a later model *does* show directed exploration or causal differentiation,
  check via perturbations (cf. [[paradigms/adversarial-vignette-perturbation]]) whether it reflects a
  genuine strategy or a memorized template — connecting to
  [[questions/cognitive-task-external-validity-for-llms]].
