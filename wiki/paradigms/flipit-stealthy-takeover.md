---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [deception, resource-control, security-game, dark-triad, stealth]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# FlipIt — The Game of Stealthy Takeovers

> [!info] In plain terms
> A game built to model stealthy cyber-attacks. Two players — an attacker and a defender —
> fight for control of a resource, but neither can see who currently holds it without paying to
> look. You win by controlling the resource as much as possible while spending as little as you
> can on moves. It rewards patient, covert, well-timed grabs rather than brute force — exactly
> the kind of stealthy, resource-seeking strategy AI-safety researchers worry about.

## Theoretical Grounding

- [[theories/dark-triad]] — Curtis et al. (2021) used FlipIt to study dark-trait **strategic
  resource control**; covert, cost-sensitive takeover behavior maps onto the dark core's
  utility-maximizing, manipulative tendencies.
- Security game theory (van Dijk et al. 2012) — "stealthy takeover" of a contested resource
  under hidden state.

## Target Behaviors

- Surfaces stealthy **resource control / strategic deception** (no dedicated safety-concept
  page yet — relevant to resource-acquisition and deception; flagged for the user).

## Setup / Elicitation

Two players — an **attacker** and a **defender** — compete to control a shared resource. Each
player's objective is to maximize **benefit** = the fraction of time it controls the resource
**minus** average move cost (van Dijk et al. 2012). Following Curtis et al. (2021), the
participant **always plays the attacker** against a computerized defender.

Played under a **"Fog of War"** condition: the board state is hidden, and the participant must
**spend allocated tokens to reveal the board and "flip" (take control of) resources** — trading
the cost of flips against time-in-control.

> [!note] Humans only in this study
> [[sources/lulla-et-al-2025]] ran FlipIt in Study 1 (humans) but **excluded it from the LLM
> evaluation** (Study 2): it relies on dynamic trial-by-trial feedback and temporal decision
> processes that "cannot be reproduced in single-turn benchmarks," and it showed weaker
> predictive validity than the retained instruments. Listed here as a reusable design.

## Formal Apparatus

- **Players:** attacker (participant) vs. defender (computerized).
- **Strategy space:** timing and frequency of costly "flips" to seize the resource under hidden state.
- **Payoff structure:** benefit = fraction of time in control − average move cost.
- **Information condition:** "Fog of War" — board state hidden unless the player pays to reveal it.
- **Predicted solution concept:** optimal stealthy-takeover timing balancing control duration
  against flip cost (the game's namesake equilibrium analysis, van Dijk et al. 2012).

## Instruments Used

- FlipIt game implementation (van Dijk et al. 2012; attacker-vs-system variant of Curtis et al. 2021).

## Scoring / Procedure

Across trials: **average points earned** (overall performance), **average cost of resources
acquired** (attention to risk), and **average value of resources gained** (attention to reward).

## Validity Concerns

- **LLM incompatibility.** The task's dynamic feedback, probabilistic learning, and implicit
  temporal metrics don't transfer to single-turn LLM evaluation — the explicit reason it was
  dropped from Study 2.
- **Weak/inconsistent signal.** In Study 1's network analysis, FlipIt metrics (win rate, control
  time ratio) were among the **least central / lowest-redundancy** nodes; risk-and-control
  behavior was an inconsistent marker of the Dark Triad.

## Evidence

- [[sources/lulla-et-al-2025]] — FlipIt control-time/win-rate metrics contributed relatively
  unique but low-centrality variance in the Study 1 behavioral network; not a reliable primary
  Dark Triad marker.

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — could a turn-based FlipIt variant make stealthy resource-seeking measurable in LLM agents?
