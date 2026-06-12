---
type: instrument
field: machine-psychology
lens: game-theoretic
tags: [matrix-games, normal-form, strategic-reasoning, stimulus-set]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Matrix-Game Library (Jia et al. 2025)

> [!info] In plain terms
> A curated set of small two-player games written as payoff tables — the "test paper" handed to a
> language model to measure how it reasons strategically. It covers competitive (one wins, one
> loses), cooperative, mixed-motive (like the Prisoner's Dilemma), and games with hidden
> information, so a model is probed across the main flavors of strategic situation rather than just
> one.

## What It Measures

The stimulus set for [[paradigms/tqre-strategic-reasoning-depth]]: an LLM's one-shot action choices
across strategic structures, from which strategic reasoning depth (τ) and decision precision (γ) are
estimated. The library is **13 matrix (normal-form) games spanning 7 core types** from behavioral
game theory, grouped by information condition:

- **Complete-information** (fully known payoffs):
  - *Competitive* — zero-sum; each player's gain is the other's loss (tests adversarial reasoning).
  - *Cooperation* — risky coordination; mutual cooperation yields the highest joint payoff.
  - *Mixed-Motive* — social dilemmas balancing private vs. joint outcomes (e.g. Prisoner's Dilemma).
  - *Sequential* — temporal structure; Player 1 moves first, decisions elicited from the first mover.
- **Incomplete-information** (reason under uncertainty):
  - *Bayesian Coordination* — players act under priors (e.g. 30% vs. 70%) over two payoff-matrix types.
  - *Signaling* — the sender sees both real and fake matrices; the receiver must infer the true game.

Games also vary in **stakes** (high/low) and payoff structure (e.g. high vs. low punishment;
asymmetric payoff). Each cell shows (Player 1, Player 2) payoffs.

Included separately: the **SW10 matrix** (Stahl & Wilson 1994), "a benchmark for identifying human
reasoning levels," used to compare LLMs against human participants on the same game.

## Administration

Payoff matrices are presented in the prompt; the model selects one irreversible action. 30
independent trials per model-game pair yield the empirical choice frequencies fed to the
maximum-likelihood (τ, γ) fit. For sequential games only the first mover's action is analyzed.

## Used In (paradigms)

- [[paradigms/tqre-strategic-reasoning-depth]] — the core paradigm that fits behavioral parameters
  to choices across this library.

## Related Instruments

- [[instruments/tmgbench]] — the sibling strategic-reasoning stimulus set ([[sources/guo-et-al-2026]]).
  Where this library is **13 games / 7 types** (including incomplete-information) used to fit a
  continuous reasoning-depth score, TMGBench is **all 144 game types** (complete-information only),
  graded by exact Nash-equilibrium accuracy and extended into composed (sequential/parallel/nested)
  forms.

## Validity Notes

The library is **abstracted but representative**: the authors argue these normal-form payoffs
"directly mirror real-world interactions" (recommender systems, negotiation, procurement, ad
bidding). The canonical structures (Prisoner's Dilemma, SW10) are widely documented in training
corpora, so a contamination control (novel payoff framings) is advisable but is not applied in the
source.

## Sources

- [[sources/jia-et-al-2025]] — defines the 13-game / 7-type library and the SW10 benchmark
  (SW10 from Stahl & Wilson 1994).
