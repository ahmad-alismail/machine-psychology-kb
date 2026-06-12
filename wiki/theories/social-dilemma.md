---
type: theory
field: machine-psychology
lens: game-theoretic
tags: [social-dilemma, prisoners-dilemma, public-goods, cooperation, free-riding]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Social Dilemma

> [!info] In plain terms
> A social dilemma is any situation where the choice that's best for *you* makes the group worse off
> than if everyone had cooperated. Two textbook examples: the **prisoner's dilemma** (two people are
> each better off betraying the other, so both betray and both lose) and the **public goods game**
> (everyone benefits if all chip in, but each person individually does best by chipping in nothing
> and "free-riding" on the others). The dilemma is that individually rational selfishness adds up to
> a collectively bad outcome.

## Statement

A social dilemma is a strategic situation in which the individually dominant (payoff-maximizing)
action yields an outcome that is collectively worse than mutual cooperation. The tension between
individual incentives and collective welfare is what makes the situation a *dilemma*. Two canonical
stage games instantiate it:

**Public goods game.** N players each receive an endowment E and independently choose a contribution
cᵢ ∈ [0, E] to a shared pool. The pool is multiplied by a factor a (with 1 < a < N) and redistributed
equally, regardless of who contributed. The payoff to player i is:

> pᵢ = E − cᵢ + (a · Σⱼ cⱼ) / N

Because each contributed unit returns only a/N < 1 to the contributor, the **dominant individual
strategy is to contribute nothing and free-ride**, even though the group as a whole is best off when
everyone contributes fully. (In the degenerate case a = 1, contributions change nothing and there is
no incentive to contribute at all.) Grounded in Olson 1971 and Isaac, Walker & Thomas 1984.

**Prisoner's dilemma.** Two players independently choose to cooperate or defect. Mutual cooperation
yields R; unilateral defection yields T for the defector and S for the cooperator; mutual defection
yields P. The ordering **T > R > P > S** makes defection a dominant strategy, so **mutual defection
is the unique Nash equilibrium even though mutual cooperation is collectively better**. Grounded in
Rapoport & Chammah 1965.

The key testable prediction: a purely payoff-maximizing agent free-rides / defects; any cooperation
beyond the Nash baseline signals a disposition (a norm, a value, reciprocity) that the bare payoff
structure does not require.

## Relevance to Machine Psychology

When the payoff-maximizing action is *also* made the ethically wrong action (by wrapping the game in
a moral cover story), the gap between an agent's behavior and the defect/free-ride baseline becomes a
measurement of moral behavior under incentive conflict — the basis of MORALSIM
([[sources/backmann-et-al-2025]]).

## Paradigms Grounded in This Theory

- [[paradigms/morally-charged-social-dilemma]] — MORALSIM: repeated PD / public-goods play embedded
  in moral contexts, with cooperation as the moral (payoff-costly) action.
- [[paradigms/repeated-games]] — iterated play of these and kindred stage games, read for strategic
  signatures.
- [[paradigms/altruistic-punishment-game]] — a related cooperation/fairness dilemma (third-party
  ultimatum game).

## Sources

- [[sources/backmann-et-al-2025]] — uses both the public goods game (Olson 1971; Isaac et al. 1984)
  and the prisoner's dilemma (Rapoport & Chammah 1965) as the stage games of MORALSIM.
