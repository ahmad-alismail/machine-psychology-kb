---
type: theory
field: machine-psychology
lens: game-theoretic
tags: [game-theory, normal-form, nash-equilibrium, taxonomy, strategic-reasoning]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Robinson-Goforth Topology of 2×2 Games

> [!info] In plain terms
> There are only so many genuinely different two-player, two-choice games. If you ignore the exact
> numbers and keep only the *ranking* of who prefers what, every such game falls into one of exactly
> 144 distinct types. The Robinson-Goforth topology is the map that lays all 144 out as a neat 12×12
> grid, with the famous games (Prisoner's Dilemma, Stag Hunt, Chicken…) sitting at known positions.
> Because the map is symmetric — flip it across one diagonal and a game lands on its mirror-image
> "sister" — you can use it both to test a reasoner on *every* game type and to catch a reasoner that
> is answering by where a game sits on the grid rather than by the game itself.

## Statement

A 2×2 normal-form game has two players, each with two strategies, and a payoff pair in each of the
four cells. If only the *ordinal* ranking of payoffs matters (not their exact magnitudes), the space
of such games partitions into **144 distinct strategically inequivalent types**. The **Robinson-Goforth
topology** (Robinson & Goforth 2005) organizes these 144 types as a **12×12 grid**:

- **Symmetric games** (both players face the same structure) lie on the **counter-diagonal**; this is
  where the canonical named games — Prisoner's Dilemma, Stag Hunt, Chicken, Battle of the Sexes —
  are located.
- **Asymmetric games** are paired with a **"sister game"** reflected across the diagonal; the two
  members of a sister pair share the same logical structure and therefore the same correct answer.

The key testable property is the **distribution of solution types**, classified by the number of
pure-strategy Nash equilibria:

- **108 games** have exactly **one** NE (at least one player has a dominant strategy);
- **18 games** have **two** NE;
- **18 games** have **no** pure-strategy NE (some player always has an incentive to deviate).

This distribution is **symmetric across the counter-diagonal**. The topology thus supplies two things
an evaluator needs at once: **exhaustive coverage** of strategic structures, and a built-in **symmetry**
that any structure-faithful reasoner must respect (sister games and reflected positions should receive
mirror-consistent answers).

## Relevance to Machine Psychology

[[sources/guo-et-al-2026]] uses the topology as the backbone of an LLM evaluation. Covering all 144
types "eliminat[es] the sampling bias that undermines existing evaluations" that test only a handful
of famous games. The topology's symmetry is turned into measurement: because correct answers are
symmetric across the counter-diagonal, deviations from that symmetry expose **position bias** — a
model answering by grid position rather than payoff structure. This grounds the Bias Degree (BD) and
Significance Degree (SD) metrics, and the **sister-game** pairing supplies matched failure cases (a
model that solves one sister but contradicts itself on the other is reasoning non-robustly, not from
structure). See [[paradigms/compositional-game-reasoning]] and [[instruments/tmgbench]].

## Paradigms Grounded in This Theory

- [[paradigms/compositional-game-reasoning]] — uses the 144-type grid for exhaustive coverage and its
  counter-diagonal symmetry for the bias/significance metrics.

## Sources

- [[sources/guo-et-al-2026]] — adopts the Robinson-Goforth topology (Robinson & Goforth 2005) as the
  complete game-coverage framework and exploits its symmetry for bias measurement.
