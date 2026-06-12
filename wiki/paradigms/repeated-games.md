---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [cooperation, coordination, social-interaction, prisoners-dilemma, battle-of-the-sexes]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# Repeated Games

> [!info] In plain terms
> Have a model play the same simple game (like the prisoner's dilemma) over and over —
> against another model, a scripted opponent, or a human. One round shows a single
> choice; many rounds show *strategy*: does it cooperate, retaliate, forgive, exploit,
> coordinate? The pattern across rounds is a behavioral fingerprint you can't get from a
> one-shot question. The canonical realization (Akata et al. 2023) finds LLMs are good at
> selfish games but bad at games that need taking turns.

## Theoretical Grounding

- [[theories/behavioral-game-theory]] — the framing theory: human agents deviate from
  rational/selfish utility maximization, so iterated games reveal social-behavioral
  signatures. [[sources/akata-et-al-2023]] explicitly proposes "a behavioural game theory
  for machines."
- [[theories/social-dilemma]] — the Prisoner's Dilemma stage game (defection dominant;
  mutual defection the equilibrium under a known finite horizon), which exploits the gap
  between the defect baseline and any observed cooperation.
- [[theories/robinson-goforth-topology]] — the complete classification of 2×2 games into
  families, used for the exhaustive families sweep.
- [[theories/theory-of-mind]] — invoked to interpret the coordination failure: the
  prediction-vs-action dissociation and the "social chain-of-thought" repair are read as
  ToM probes/interventions.
- Coordination / convention formation: humans solve coordination games by forming
  conventions such as turn-taking (Hawkins & Goldstone 2016; Young 1996; Lau & Mui 2008).
  The Battle of the Sexes is the canonical convention-formation game used here. (Not given
  a separate theory page; treated as a property of the stage game.)

## Target Behaviors

- Detects: [[safety-concepts/value-alignment]] — whether an LLM behaves like a "truly
  social and well-aligned machine" or a selfish/uncoordinated one in repeated social
  interaction ([[sources/akata-et-al-2023]]). The paradigm reads cooperation, retaliation,
  forgiveness, and convention-following as "behavioural signatures" of social conduct.
- Strategic exploitation of a cooperating partner (unforgiving defection after a single
  defection) is adjacent to [[safety-concepts/deception]], but the source frames the
  behavior as a cooperation/coordination phenomenon, not deception. No dedicated
  safety-concept page yet owns strategic defection/exploitation (crosswalk gap).

## Setup / Elicitation

The model is prompted with the rules and payoff structure of a simple game and plays
repeated rounds, receiving the history of prior moves in context. Opponents can be other
LLM instances, hand-coded strategies, or humans. The observed variables are the move
sequences — cooperation rates, retaliation patterns, coordination rates, and their
stability across rounds.

In the canonical realization ([[sources/akata-et-al-2023]]), five LLMs (GPT-4,
text-davinci-003, text-davinci-002, Claude 2, Llama 2 70B) play finitely repeated games
over **10 rounds** with full information, via **prompt-chaining**: the prompt is updated
each round with the concatenated history of past interactions and re-submitted to both
players. Payoff matrices are turned into neutral textual rules; to avoid contamination,
choice options are labeled neutral **'F' and 'J'** and only barebones payoff descriptions
are given. Models answer with **one token**, sampled at **temperature 0**; the chosen
option is the argmax over the option-token probabilities.

Three nested sub-studies:

1. **Families sweep.** All known types of 2×2 games across **six families** (Win-Win,
   Prisoner's Dilemma family, Unfair, Cyclic, Biased, Second-Best) — **144 distinct
   canonical game types** (Methods), played by every LLM against every LLM (including
   itself) as both Player 1 and Player 2, yielding **1,224 games total** (324 win-win, 63
   Prisoner's Dilemma, 171 unfair, 162 cyclic, 396 biased, 108 second-best — the Results
   framing; the per-family counts differ because each family admits a different number of
   configurations).
2. **Canonical Prisoner's Dilemma zoom-in.** LLMs plus three hand-coded strategies:
   always-cooperate, always-defect, and a "**defect-once-then-always-cooperate**" agent
   introduced to test whether an LLM will rebuild trust.
3. **Canonical Battle of the Sexes zoom-in.** LLMs plus hand-coded strategies including an
   **alternating / turn-taking** agent that mirrors the human convention for solving this
   coordination game.

**Behavior-changing variants** run inside the zoom-ins:
- *Forgiveness intervention* — telling GPT-4 the other player can make mistakes (after
  Fudenberg, Rand & Dreber 2012) makes it cooperate again after a defection.
- *Prediction scenarios* (ToM probe) — GPT-4 is asked to predict the opponent's next move,
  either as a player in the game or as a detached observer of two other players.
- *Social chain-of-thought (SCoT)* — GPT-4 is asked to first predict the opponent's move
  and reason about it, then choose.

**Human experiment.** 195 Prolific participants (89 female, mean age 26.72) each play a
10-round Prisoner's Dilemma and a 10-round Battle of the Sexes against either **base GPT-4**
or **SCoT-prompted GPT-4** (between-subjects; game order counterbalanced; prompt reset
between games), then guess after each game whether the opponent was human or an artificial
agent.

## Formal Apparatus

- **Players**: 2 (model vs. model, hand-coded strategy, or human); the families sweep also
  pits every LLM against every LLM including itself, in both player positions.
- **Strategy space**: per-round binary action of the stage game (e.g. cooperate/defect, or
  the neutral 'F'/'J'), giving history-contingent strategies across the 10 rounds.
- **Payoff structure**: the stage-game payoff matrix, summed over rounds with discount
  factor δ (the experiments keep **δ = 1**). The canonical matrices used:
  - *Prisoner's Dilemma*: C/C (8,8), C/D (0,10), D/C (10,0), D/D (5,5) — "mutual cooperation
    is greater than mutual defection whereas defection remains the dominant strategy" (note
    P = 5 > S = 0, so this is not the canonical T > R > P > S ordering).
  - *Battle of the Sexes*: F/F (10,7), B/B (7,10), mismatches (0,0) — a biased coordination
    game with conflicting preferences.
- **Information condition**: full history of prior moves available in context; payoffs
  common knowledge via the prompt.
- **Predicted solution concept / equilibrium**: stage-game Nash equilibrium (defection in
  the PD) under backward induction in finitely repeated play with known horizon; in the
  Battle of the Sexes, coordinated equilibria reachable via a turn-taking convention.
  Deviations from these baselines are the behavioral signal.

## Instruments Used

- The stage games themselves are the instruments; the PD and Battle-of-the-Sexes payoff
  matrices are documented inline above. (Distinct from [[instruments/matrix-game-library]]
  and [[instruments/tmgbench]], which formalize other, normal-form game sets.)

## Scoring / Procedure

- **Primary metric**: per game, the model's achieved score divided by the maximum score
  achievable under ideal conditions (if the opponent had played so the analyzed player
  maxed out every round). Aggregated into per-family score ratios (Table 1).
- **Behavioral metrics**: defection rate, successful-coordination rate (both players pick
  the same option), joint-cooperation rate, and — for the prediction scenarios — the round
  at which the model first predicts the opponent's pattern correctly. In the human
  experiment, the proportion of participants judging the opponent to be human.
- **Statistical reporting**: two-sided tests with Cohen's d / standardized regression
  estimates and 95% CIs, plus Bayes Factors (Jeffreys-Zellner-Siow prior, scale √2/2).
- **Controls the design requires**: neutral option labels and barebones payoff
  descriptions (anti-contamination); randomized option order, relabeled options, and
  utilities expressed as points / dollars / coins; two alternative cover stories (cooking
  competition, collaborative project); explicit end goals; longer horizons; numeric
  outcomes described in text; and gradual morphing of the payoff matrix. Opponent-strategy
  variation (cooperative, exploitative, alternating) and repeated runs separate strategy
  from sampling noise.

## Validity Concerns

- **Contamination**: the Prisoner's Dilemma, Battle of the Sexes, and famous tournament
  strategies (tit-for-tat) are extensively described in training corpora; a model may
  *narrate* a known strategy rather than exhibit a disposition. [[sources/akata-et-al-2023]]
  addresses this with neutral 'F'/'J' labels, barebones payoffs, and a robustness battery
  (option order, labels, utility units, cover stories, horizons, payoff morphing), reporting
  that the behavioral signatures are stable across all of them — but contamination is
  mitigated, not eliminated.
- **Construct validity (ToM vs. action)**: the prediction-vs-action dissociation is the
  design's own control for "does the model understand the convention?" — GPT-4 predicts the
  alternating pattern (round 5 as player, round 3 as observer) yet does not act on it,
  showing the coordination failure is not a prediction failure. Whether this is a genuine
  ToM failure mode remains interpretive (cf. the autistic-children analogy, Swettenham 1996).
- **Construct validity (cooperation)**: "cooperation" in token output need not reflect a
  stable preference; in the finitely repeated PD with known horizon, persistent defection is
  also the equilibrium policy, so the same behavior can be read as "selfish" *or* "rational"
  — the source notes both.
- **Backward induction / planning**: GPT-4 did not adjust last-round behavior or respond to
  varying continuation probabilities, suggesting it may lack backward-induction and
  long-term-planning mechanisms, attributed to next-token-prediction training (a methodological
  caveat for interpreting any repeated-game result on current LLMs).
- **Coverage limits**: only finite, known-horizon 2×2 games; indefinite / probabilistic-horizon
  games may yield different (more cooperative) behavior. Smaller open models were excluded for
  degenerate first-option bias (>95%), so the result generalizes only to the five strong models.

## Evidence

- **Selfish-yes, coordination-no.** LLMs "perform particularly well at self-interested games
  like the iterated Prisoner's Dilemma family" but "behave sub-optimally in games that require
  coordination, like the Battle of the Sexes" ([[sources/akata-et-al-2023]]). Overall score
  ratios: GPT-4 0.854 > davinci-003 0.839 > Claude 2 0.814 > davinci-002 0.730 > Llama 2 0.697;
  GPT-4 significantly best (vs. Claude 2: t(287) = 3.34, p < .001, d = 0.20, BF = 14.8).
- **Unforgiving PD play.** GPT-4 "never cooperates again when playing with an agent that
  defects once but then cooperates"; even told this explicitly, it defects throughout
  ([[sources/akata-et-al-2023]]).
- **Coordination failure ("a behavioural flaw").** Against an alternating agent GPT-4 keeps
  choosing its preferred option; successful-coordination rate ≈ 0.5 across prompt variations
  ([[sources/akata-et-al-2023]]).
- **SCoT repairs coordination.** SCoT makes GPT-4 alternate from round 5; in the human
  experiment it raised BoS scores (β = 0.74, BF = 80.6) but not PD scores (β = 0.10, BF = 0.2),
  increased BoS coordination (β = 0.33, BF = 13.4), slightly increased PD joint cooperation
  (β = 0.24, BF = 6.5), and made participants more likely to judge the model human (β = 0.54,
  BF = 17.6) ([[sources/akata-et-al-2023]]).

## Related Paradigms

- [[paradigms/morally-charged-social-dilemma]] — a specialization of this design (MORALSIM): iterated
  prisoner's-dilemma + public-goods play embedded in moral cover stories so cooperation is the
  ethical-but-payoff-costly action, with a survival condition and a variance-attribution analysis
  ([[sources/backmann-et-al-2025]]).
- [[paradigms/persona-prompted-strategic-games]] — a concrete instance of this design: repeated
  ultimatum game + prisoner's dilemma on GPT-4 under assigned fair/selfish personas, with
  elicited-reasoning text analysis ([[sources/guo-2023]]).

## Open Questions

- [[questions/longitudinal-behavioral-trends]]
- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] — is the predict-vs-act
  coordination failure a genuine ToM failure mode, or a different mechanism?
- [[questions/active-interaction-for-causal-and-directed-exploration]] — does the apparent
  lack of backward induction / long-term planning trace to passive next-token training?
- Which safety-concept should own strategic defection/exploitation behavior? The current
  concept set has no page for it (crosswalk gap).
