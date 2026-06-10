---
type: theory
field: machine-psychology
lens: game-theoretic
eval_axis: na
tags: [game-theory, repeated-games, cooperation, defection, nash-equilibrium, bargaining, fairness]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Repeated Games and Cooperation

> [!info] In plain terms
> Game theory studies how rational players act when their payoffs depend on each
> other's choices. When the same game is played over and over, players can build
> (or break) cooperation — punishing betrayal, rewarding loyalty, or exploiting a
> partner. Researchers put AI models into these games to watch their strategic
> tendencies: do they cooperate, defect, exploit, or protect a partner across
> repeated rounds?

## Statement

This game-theoretic tradition analyzes strategic interaction among rational
agents whose outcomes are interdependent. Core constructs:

- **Nash equilibrium** — a strategy profile from which no player can profitably
  deviate unilaterally.
- **Repeated games** — the same stage game (e.g., a prisoner's-dilemma-style
  cooperation/defection choice) played over many rounds, where history enables
  reciprocity.
- **The folk theorem** — in infinitely (or indefinitely) repeated games, a wide
  range of cooperative outcomes can be sustained as equilibria via the threat of
  future punishment.
- **Tit-for-tat** and related reciprocal strategies — cooperate first, then mirror
  the partner's last move; a robust, forgiving way to sustain cooperation.
- **Bargaining and fairness** — in the **ultimatum game**, one player proposes a
  split and the other can accept or reject; purely self-interested theory predicts
  tiny offers should be accepted, but humans reject unfair offers, revealing
  fairness norms beyond narrow payoff maximization.

Key testable predictions: cooperation is sustainable under repetition; players
exhibit reciprocity (reward cooperation, punish defection); and fairness
considerations shape bargaining behavior away from the self-interested benchmark.

## Relevance to Machine Psychology

These paradigms probe an AI's **strategic propensities** across repeated
interaction — cooperation, defection, exploitation, and partner- or
**peer-preservation**. [[sources/hagendorff-et-al-2024]] reports work (Akata et
al.) in which LLMs play **repeated games**, revealing persistent behavioral
signatures, and related work on cooperative/competitive behavior in
dilemma-style negotiations. [[sources/loehn-kiehne-et-al-2024]], in its audit of
machine-psychology studies, includes economic / social-interaction paradigms
(e.g., **ultimatum-game** and Milgram-style scenarios) among the constructs tested
on LLMs.

To adapt the experiment: instantiate the stage game as a textual interaction,
have the model play many rounds against a fixed strategy or another model, and
read off its move distribution and adaptation over time. Contamination control and
robustness across rephrasings matter, since canonical game descriptions are
common in training data. Strategic signatures bear directly on safety: a model's
willingness to exploit, defect on, or instead protect a partner maps onto how it
might behave toward other agents in multi-agent deployments.

## Paradigms Grounded in This Theory

- [[paradigms/repeated-game-play]]
- [[paradigms/ultimatum-game]]

This theory targets the safety concepts [[safety-concepts/deception]] and
[[safety-concepts/peer-preservation]].

## Sources

- [[sources/hagendorff-et-al-2024]]
- [[sources/loehn-kiehne-et-al-2024]]
