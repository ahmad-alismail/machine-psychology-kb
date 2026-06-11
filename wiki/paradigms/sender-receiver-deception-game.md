---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [deception, honesty, sender-receiver, economic-game, dark-triad]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Sender–Receiver Deception Game (Deceptive Lies / Prosocial Honesty)

> [!info] In plain terms
> A simple economic game for catching liars. You know a secret that affects how much money
> both you and a stranger get; you send the stranger a message, and they act on it. In some
> rounds, lying pays you more but costs them — that's a **self-serving lie**. In other rounds,
> telling the truth helps them at little or no cost to you — that's **prosocial honesty**.
> Counting how often someone lies for personal gain vs. tells a helpful truth measures their
> willingness to deceive.

## Theoretical Grounding

- [[theories/dark-triad]] — predicts **self-serving deception** as a core behavioral signature,
  most strongly of narcissism (and of the dark core broadly).
- Economic deception / lying-aversion paradigms (Gneezy 2005; Erat & Gneezy 2012).

## Target Behaviors

- Detects: [[safety-concepts/deception]] — demonstrated strategic, self-serving deception
  (not merely a self-reported disposition).

## Setup / Elicitation

A sender–receiver game (the paper also calls it the **"Message Task"** in its Discussion). The
respondent is an **informed sender** who communicates payoff-relevant information to an
**uninformed receiver**. **6 trials**:

- **3 "deceptive lie" trials** — a deceptive message *increases the sender's payoff* while
  *decreasing the receiver's*.
- **3 "prosocial honesty" trials** — telling the truth *increases the receiver's payoff*, at no
  cost or a small cost to the sender.

The respondent chooses, per trial, to **lie or tell the truth**. Administered to humans
(Study 1) and LLMs (Study 2).

## Formal Apparatus

- **Players:** informed sender (the participant/model) vs. uninformed receiver.
- **Strategy space:** {send truthful message, send deceptive message} per trial.
- **Payoff structure:** deceptive-lie trials — lying raises sender payoff, lowers receiver
  payoff (incentive to deceive); prosocial-honesty trials — truth raises receiver payoff at
  no/small sender cost (incentive against the dishonest/selfish option).
- **Information condition:** asymmetric — sender knows the payoff-relevant state, receiver does
  not and relies on the message.
- **Predicted behavior:** a purely self-interested agent lies on deceptive-lie trials and is
  indifferent/withholding on prosocial-honesty trials; lying aversion (or prosociality) is read
  from deviations toward honesty.

## Instruments Used

- Sender–receiver deception scenarios (Gneezy 2005; Erat & Gneezy 2012).

## Scoring / Procedure

- Two measures: **count of deceptive lies told** (out of 3) and **count of prosocial-honesty
  acts** (out of 3).
- For LLMs, binary per-trial responses across five runs per variant (temperature 1) vs. baseline.

## Validity Concerns

- **Single-turn, hypothetical payoffs for LLMs.** Models face no real stakes and no iterated
  consequences; the score reflects stated choice in a described game, not incentive-driven
  behavior. The "prosocial honesty" metric was weak even statistically (ANOVA η² = .05).
- **Construct fidelity.** The task does measure *demonstrated* deception (an action with a
  payoff consequence), which is a stronger deception signal than self-report inventories.

## Evidence

All via [[sources/lulla-et-al-2025]]:

- **Humans (Study 1).** Deceptive lying emerged as a significant positive LASSO predictor of
  **narcissism** (and of the SD3 composite).
- **LLMs (Study 2).** Dark fine-tuned models told more deceptive lies (M = 1.44 vs. baseline
  1.03) with reduced prosocial honesty; the effect was strongest for **narcissistic** models
  (lies M = 1.62, lowest prosocial honesty M = 1.81) — mirroring the human result. ANOVA:
  deceptive lies η² = .32; prosocial honesty η² = .05 (weak).

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — does game-measured deception predict deception in deployment?
