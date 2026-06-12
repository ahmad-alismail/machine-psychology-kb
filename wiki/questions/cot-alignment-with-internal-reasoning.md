---
type: question
field: machine-psychology
lens: psychological
tags: [chain-of-thought, reasoning, prompting, open-problem]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Can external CoT prompts be aligned with a model's internal reasoning?

> [!info] In plain terms
> "Chain-of-thought" prompting — telling a model to think step by step — is usually assumed to make
> it smarter. But in strategic games it sometimes makes a model *worse*: if it starts from a wrong
> assumption, the extra reasoning just digs the hole deeper. This question asks how to design
> prompts that latch onto a model's *correct* internal reasoning and amplify it, instead of
> reinforcing a flawed premise.

## Why It Matters

If chains of thought help only when the model already has the right idea, then CoT is not a reliable
capability booster — it is a multiplier that can cut either way. For evaluation, this means longer
reasoning is not a safe proxy for better reasoning; for deployment, an agent that "reasons more"
under pressure may simply entrench a mistaken strategy. Understanding when extended reasoning helps
versus harms is a prerequisite for trusting CoT-style scaffolds in high-stakes interactive settings.

## What Sources Say

- [[sources/jia-et-al-2025]] finds CoT's effect on strategic reasoning is **mixed** — "no
  consistent improvement across all models and game types," echoing prior "CoT does not always help"
  results. The mechanism is asymmetric: when a model begins with a sound strategy, CoT "can support
  useful self-correction and refinement" (Claude-3-Opus identifies and corrects mid-chain
  calculation errors to recover a maximin decision); but "when the underlying reasoning is
  misaligned from the beginning, extended chains often lead to repetitive and unproductive loops"
  (GPT-4o, on the flawed premise that the opponent minimizes its payoff, gets "stuck in a verbose
  reasoning loop"). Separately, "longer reasoning chains often suggest hesitation and uncertainty,
  rather than deeper insight," and DeepSeek-R1's "repeated self-doubt" inflates tokens without
  improving competitive play. The authors pose the explicit open question: "how can external prompts
  be better aligned with a model's internal reasoning processes to ensure robust and interpretable
  behavior?"
- [[sources/wilf-et-al-2024]] supplies the converse data point in theory-of-mind: a *generic*
  "reason step by step" step is the wrong scaffold (its SimToM-Multi ablation, which swaps a
  reasoning step in for perspective-taking, *collapses* performance, and 0-shot CoT does "not
  perform reliably better than 0-shot"), whereas a *targeted, content-specific* two-pass scaffold —
  asking the model to reconstruct the character's perspective first — yields large gains
  ([[paradigms/simtom-perspective-taking-prompting]]). This suggests the alignment that matters is
  not chain *length* but whether the prompted step matches the *specific* sub-computation the task
  requires.

## Suggested Investigation (toward a new paradigm)

- **Premise-conditioned CoT.** Detect whether a model's opening premise in a strategic task is sound
  before eliciting extended reasoning, and compare outcomes of CoT applied to sound vs. flawed
  openings — turning the §4.3 anecdote into a controlled design over
  [[paradigms/tqre-strategic-reasoning-depth]].
- **Token-efficiency vs. quality.** Test whether RL-based training that rewards "decisive and
  diverse reasoning over repetitive patterns" (the authors' suggestion) reduces redundant loops
  without lowering reasoning depth.
- **Generalization beyond games.** Check whether the "CoT entrenches a flawed premise" failure
  recurs in non-game tasks, linking to [[questions/cognitive-task-external-validity-for-llms]].
</content>
