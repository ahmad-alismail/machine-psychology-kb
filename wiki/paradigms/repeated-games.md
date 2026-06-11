---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [cooperation, social-interaction]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Repeated Games

> [!info] In plain terms
> Have a model play the same simple game (like the prisoner's dilemma) over and over —
> against another model, a scripted opponent, or a human. One round shows a single
> choice; many rounds show *strategy*: does it cooperate, retaliate, forgive, exploit?
> The pattern across rounds is a behavioral fingerprint you can't get from a one-shot
> question.

> [!note] Survey-depth page
> Grounded only in the review [[sources/hagendorff-et-al-2024-machine-psychology]];
> enrich from primary sources (Akata et al. 2023; Phelps & Russell 2024) when ingested.

## Theoretical Grounding

- Game theory of repeated interactions: finitely/infinitely iterated games where
  cooperation can be sustained (or unravel) depending on the shadow of the future. A
  dedicated theory page (e.g. `theories/repeated-game-theory`) should be created when a
  primary game-theoretic source is ingested; this review invokes the apparatus without
  stating it.

## Target Behaviors

- Detects: "cooperative and coordinative behavior" and "persistent behavioral
  signatures" in iterated play (Akata et al. 2023); cooperative vs. competitive conduct
  in "psychology-inspired dilemma situations" relevant to "real-world negotiations"
  (Phelps & Russell 2024). Strategic exploitation of a cooperating partner is adjacent
  to [[safety-concepts/deception]]; no dedicated safety-concept page exists yet for
  strategic cooperation/defection behavior.

## Setup / Elicitation

The model is prompted with the rules and payoff structure of a simple game and plays
repeated rounds, receiving the history of prior moves in context. Opponents can be other
LLM instances, scripted strategies, or humans. The observed variables are the move
sequences — cooperation rates, retaliation patterns, and their stability across rounds.
The review also surveys multi-agent extensions: LLM swarms forming networks analyzed
with "micro-level network principles such as preferential attachment or triadic closure"
(Papachristou & Yuan 2024).

## Formal Apparatus

- **Players**: 2 (model vs. model, scripted strategy, or human); n-player in network
  extensions.
- **Strategy space**: per-round actions of the stage game (e.g. cooperate/defect),
  giving history-contingent strategies across rounds.
- **Payoff structure**: stage-game payoff matrix (e.g. prisoner's-dilemma ordering),
  summed over rounds.
- **Information condition**: full history of prior moves available in context; payoffs
  common knowledge via the prompt.
- **Predicted solution concept / equilibrium**: stage-game Nash equilibrium (defection
  in the prisoner's dilemma) under backward induction in finitely repeated play;
  cooperative equilibria sustainable in indefinitely repeated play. Deviations from
  these baselines are the behavioral signal.

## Instruments Used

- _none documented yet_ — the stage games themselves (prisoner's dilemma and kin) merit
  instrument pages when a primary source specifies the exact scenarios used.

## Scoring / Procedure

- Score per-round moves against the payoff-maximizing and the cooperative baselines;
  aggregate into cooperation rates, conditional-response profiles (e.g.
  retaliation-after-defection), and cross-round stability of the strategy.
- Controls the design requires: varied surface descriptions of the same payoff matrix
  (so the strategy tracks payoffs, not story wording), counterbalanced action labels and
  orderings, opponent-strategy variation (cooperative, exploitative, random), and
  repeated runs to separate strategy from sampling noise.

## Validity Concerns

- **Contamination**: the prisoner's dilemma and famous tournament strategies
  (tit-for-tat) are extensively described in training corpora; a model may *narrate* the
  known optimal strategy rather than exhibit a strategic disposition. Novel payoff
  framings and unfamiliar cover stories are required.
- **Construct validity**: "cooperation" in token output need not reflect a stable
  preference — it may be an artifact of instruction-tuned politeness; baseline conditions
  with non-social framings of the same payoffs help separate the two.
- **Prompt sensitivity**: move histories interact with recency bias (over-weighting the
  most recent rounds); shuffle/format controls on history presentation are needed.

## Evidence

- LLMs playing repeated games reveal "persistent behavioral signatures in the models"
  (Akata et al. 2023, via [[sources/hagendorff-et-al-2024-machine-psychology]]).
- Dilemma-situation studies probe LLM ability "to participate in real-world
  negotiations" (Phelps & Russell 2024, via the same review).

## Open Questions

- [[questions/longitudinal-behavioral-trends]]
- Which safety-concept should own strategic defection/exploitation behavior? The
  current concept set has no page for it (crosswalk gap).
