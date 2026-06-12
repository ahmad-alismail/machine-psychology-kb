---
type: theory
field: machine-psychology
lens: game-theoretic
tags: [fairness, inequity-aversion, ultimatum-game, social-preferences, behavioral-economics]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Inequity Aversion (Fairness Concern)

> [!info] In plain terms
> Standard game theory assumes people only care about their own money, so they should accept
> any free cash, however unfair. Real people don't: many will reject a stingy split — turning
> down real money — just to punish an unfair offer, and many proposers offer near-even splits in
> the first place. The reason is that people dislike unfair outcomes themselves, not just the cash:
> this is called "fairness concern" or inequity aversion. It is the prediction that explains why
> people don't behave like the textbook self-interested player.

## Statement

**Inequity aversion** holds that an agent's utility depends not only on its own payoff but on how
that payoff compares to others' — agents are "willing to give up some material payoff to move in the
direction of more equitable outcomes" (Fehr & Schmidt 1999). The model distinguishes two components:
**disadvantageous-inequity aversion** (disliking getting less than others) and
**advantageous-inequity aversion** (disliking getting more than others), with the former typically
weighted more heavily.

Key, testable predictions, illustrated in the **ultimatum game** (a proposer offers a split of a
fixed sum; a responder accepts — the split stands — or rejects — both get nothing):

- **The standard (self-interest) prediction is the subgame perfect equilibrium (SPE):** by backward
  induction the proposer offers the smallest possible amount and the responder accepts it, because
  any positive amount beats zero. Inequity aversion predicts the opposite.
- **Responders reject low offers** — paying a personal cost to deny an unfair proposer — because the
  disutility of the unequal split outweighs the small gain. Rejection rates rise as offers fall.
- **Proposers make positive, near-fair offers** (human proposers average ~40% of the stake;
  Oosterbeek et al. 2004), both from their own fairness concern and in anticipation of rejection.

Inequity aversion is one of the social-preference accounts (alongside reciprocity) that explain why
human behavior in the ultimatum game, the prisoner's dilemma, and related games departs from the
self-interested Nash/SPE baseline.

## Relevance to Machine Psychology

[[sources/guo-2023]] uses "fairness concern" (with citation to Fehr & Schmidt 1999) as an
**assigned-persona trait** that GPT-4 is prompted to adopt in repeated ultimatum and prisoner's-dilemma
games. The inequity-aversion prediction becomes the yardstick: a "fair" GPT should make higher offers
and reject low offers more often than a "selfish" GPT — which is what the paper finds, with the fair
GPT proposer's ~40% offer matching the human meta-study average. The same prediction underlies the
third-party fairness enforcement probed by [[paradigms/altruistic-punishment-game]].

## Paradigms Grounded in This Theory

- [[paradigms/persona-prompted-strategic-games]] — the ultimatum-game half uses inequity aversion as
  the prediction the "fairness concern" persona should exhibit (positive offers, rejection of low
  offers), contrasted against a "selfishness" persona.
- [[paradigms/altruistic-punishment-game]] — a related costly-fairness-enforcement design (third-party
  ultimatum game).

## Sources

- [[sources/guo-2023]] — invokes "fairness concern" (Fehr & Schmidt 1999) as an assigned trait in the
  ultimatum game and prisoner's dilemma; finds the fair GPT offers ~40% and rejects more than the
  selfish GPT.
