---
type: theory
field: machine-psychology
lens: game-theoretic
tags: [bounded-rationality, strategic-reasoning, game-theory]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Behavioral Game Theory

> [!info] In plain terms
> Classical game theory assumes players are perfect calculators who always pick the move that maxes
> out their payoff. Real people don't: they make mistakes, think only a few steps ahead, and act a
> bit randomly. Behavioral game theory is the repaired version — it keeps the games but swaps the
> "perfectly rational robot" assumption for models of *bounded, noisy, human-like* reasoning. That
> makes it a natural lens for studying an AI that was trained on human behavior.

## Statement

Classical game theory begins with **Nash Equilibrium (NE)**, in which subjects are "assumed to be
fully rational: they possess unlimited reasoning capacity, have perfect knowledge of the game, and
make deterministic best responses." Empirically, subjects deviate from NE frequently — "overbidding
in auctions or early cooperation in public goods games." **Behavioral game theory** "progressively
relaxes NE's strong assumptions" to fit observed play. Two core empirical insights drive it:

1. **Stochastic choice.** Subjects "do not always select the utility-maximizing option
   deterministically"; instead they "respond to incentives in a probabilistic pattern," formalized
   by the **Quantal Response Equilibrium (QRE)** (McKelvey & Palfrey 1995).
2. **Heterogeneous reasoning depth.** Subjects "differ in their depth of strategic reasoning
   levels"; rather than unbounded thinking, models such as the **Cognitive Hierarchy (CH)** posit
   that "individuals operate at varying levels of sophistication" (Camerer, Ho & Chong 2004).

The combination of these two refinements yields the measurement model used to evaluate LLMs here:
[[theories/truncated-quantal-response-equilibrium]].

## Relevance to Machine Psychology

[[sources/jia-et-al-2025]] argues NE is a poor metric for LLMs specifically: as "probabilistic
models trained on human-generated data," LLMs' "stochastic nature makes NE impractical," and using
NE to test rationality "falls into the circular reasoning fallacy." Behavioral game theory supplies
a non-circular alternative — fit a bounded-rationality model and *measure* the reasoning depth a
model actually exhibits, instead of asking the yes/no question of whether it hit the equilibrium.

A contrasting design keeps NE as the criterion: [[sources/guo-et-al-2026]] grades LLMs on whether
they identify a game's *complete* Nash-equilibrium set (exact-set accuracy) across all 144 game types,
rather than fitting a bounded-rationality model. The two are siblings with opposite measurement
philosophies — fitted reasoning depth ([[paradigms/tqre-strategic-reasoning-depth]]) vs. exact-NE
accuracy ([[paradigms/compositional-game-reasoning]]) — and the NE-accuracy line is precisely the
"yes/no, did it hit the equilibrium?" approach this theory's relevance-note critiques as circular for
stochastic LLMs.

## Paradigms Grounded in This Theory

- [[paradigms/tqre-strategic-reasoning-depth]] — fits a behavioral-game-theory model (TQRE) to an
  LLM's choice frequencies to recover strategic reasoning depth.

## Sources

- [[sources/jia-et-al-2025]] — adopts behavioral game theory (via TQRE) to evaluate LLM strategic
  reasoning; cites Camerer (1997, 2011), Camerer/Ho/Chong (2004), McKelvey/Palfrey (1995).
