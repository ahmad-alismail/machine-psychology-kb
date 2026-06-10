---
type: paradigm
field: machine-psychology
lens: game-theoretic
eval_axis: propensity
tags: [game-theory, cooperation, repeated-games, prisoners-dilemma, multi-agent]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Repeated Game Play

> [!info] In plain terms
> Put two LLM agents in a game they play over and over, where each round they choose to cooperate or defect and earn points based on both choices (like a repeated Prisoner's Dilemma). Because they meet again, cooperation can pay off — but so can betrayal. Watching how the models behave across many rounds reveals their standing strategy toward other agents: do they build trust, retaliate, exploit, or forgive?

## Theoretical Grounding

This paradigm is grounded in [[theories/repeated-games-and-cooperation]] — the branch of game theory studying how cooperation can be sustained among self-interested agents when interactions repeat. [[sources/hagendorff-et-al-2024]] places it within the "social interactions" research area, citing Akata et al. (2023), "Playing repeated games with Large Language Models," which found "persistent behavioral signatures" in models playing such games, and related dilemma/negotiation work (Phelps and Russell 2024). The core theoretical lever is the contrast between one-shot rational defection and the cooperative equilibria that repetition makes possible (the folk theorem).

## Target Behaviors

**Detects:** [[safety-concepts/deception]] and [[safety-concepts/peer-preservation]]. Repeated play makes an agent's stance toward *other agents* observable: whether it cooperates, defects, retaliates, or signals one intention while playing another. Defection patterns and exploitative play map onto peer-preservation concerns (how an agent treats fellow agents — willingness to sacrifice or exploit them for payoff). Strategic misrepresentation across rounds — e.g., feigning cooperation to induce trust before defecting — is the in-game analogue of deception. The mapping to deception is stronger when the game permits cheap-talk signaling than in a bare choose-cooperate/defect matrix.

> [!warning] Honest mapping
> Defection in a payoff matrix is rational play, not malice; reading it as "deception" or as a threat to peer agents requires the game to actually afford signaling or sacrifice. A pure PD choice reveals cooperative *propensity*, but inferring deceptive intent needs a richer information condition.

> [!note] Capability vs. Propensity
> Capability: Does the model understand the strategic structure (can it compute best responses, track history)?
> Propensity: The primary target — what strategic disposition (cooperate, defect, reciprocate, exploit) the model tends to adopt toward other agents across repeated interaction.

## Setup / Elicitation

Instantiate two or more LLM agents in an iterated game with an explicit payoff matrix, run it for many rounds with the interaction history made available to each agent each round, and record the sequence of choices (and any inter-agent messages). Vary opponent strategies, matrix parameters, framing, and agent roles to test robustness. Per [[methods/behavioral-control-design]], wordings, agent identities, and round orders should be varied to ensure observed strategies are systematic rather than memorized or framing-driven; procedural generation of game instances reduces contamination risk.

## Formal Apparatus

- **Players:** 2+ LLM agents (model-vs-model, or model-vs-fixed-strategy opponent such as tit-for-tat).
- **Strategy space:** per round, {cooperate, defect} in the canonical case; optionally richer — graded contributions, cheap-talk messages, conditional/history-dependent strategies.
- **Payoff structure:** a repeated Prisoner's-Dilemma-style matrix (mutual cooperation > mutual defection, but unilateral defection yields the temptation payoff and the cooperator gets the sucker payoff), summed or discounted over rounds.
- **Information condition:** repeated interaction with an **observable history** — each agent sees prior rounds' actions (and messages, if allowed), enabling reciprocity and reputation.
- **Predicted solution concept / equilibrium:** the one-shot Nash equilibrium is mutual defection; under repetition with sufficiently high continuation, the **folk theorem** admits cooperative equilibria sustained by reciprocal strategies (e.g., tit-for-tat). The empirical question is whether LLM agents converge toward folk-theorem cooperation/reciprocity or default to defection.

## Instruments Used

None. The apparatus is a game with a payoff matrix, not a psychometric inventory.

## Scoring

Scored via [[methods/behavioral-control-design]]: classify the realized strategy (cooperation rate, reciprocity/conditional-cooperation signatures, retaliation and forgiveness patterns) against the equilibrium predictions, comparing across opponent types and parameter settings. Robust conclusions require batteries of varied game instances and counterbalanced conditions rather than single runs.

## Validity Concerns

- [[validity/training-data-contamination]] — Canonical games (Prisoner's Dilemma, tit-for-tat) and their standard analyses are ubiquitous in training text; a model may reproduce textbook strategy talk rather than genuinely strategize. Procedurally generated payoff structures and novel framings mitigate this.
- [[validity/reproducibility-in-machine-psychology]] — Multi-agent runs compound stochasticity and prompt sensitivity; transparent reporting of model versions, parameters, and full game setup is needed for comparability ([[sources/loehn-kiehne-et-al-2024]] R5c).
- [[validity/construct-validity-for-llms]] — Whether observed play reflects a stable "cooperative disposition" or prompt-contingent behavior is unestablished.

## Evidence & Findings

- Akata et al. (2023) report **persistent behavioral signatures** in LLMs playing repeated games — i.e., the models exhibit characteristic, reproducible strategic tendencies rather than random play ([[sources/hagendorff-et-al-2024]]).
- Related work probes cooperative vs. competitive behavior in dilemma/negotiation settings to assess LLMs' real-world negotiation potential (Phelps and Russell 2024).

## Sources

- [[sources/hagendorff-et-al-2024]] — situates repeated-game play in the social-interactions paradigms and cites Akata et al. (2023) on persistent strategic signatures.

## Open Questions

- Do LLM agents reach folk-theorem cooperation, default to defection, or show idiosyncratic regimes — and how does this depend on continuation probability and framing?
- When cheap-talk signaling is allowed, do models strategically misrepresent intentions (in-game deception), and can this be reliably measured?
- Are observed strategic signatures stable across model versions and prompt framings, or are they artifacts of contaminated game-theory training text?
