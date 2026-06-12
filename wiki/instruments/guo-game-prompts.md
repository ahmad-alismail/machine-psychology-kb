---
type: instrument
field: machine-psychology
lens: game-theoretic
tags: [scenario, ultimatum-game, prisoners-dilemma, repeated-games, persona, fairness, selfishness]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Guo Game Prompts (Repeated Ultimatum + Prisoner's Dilemma)

> [!info] In plain terms
> These are the exact instruction texts that turn two language models into players of two classic
> economics games — splitting 100 dollars (the ultimatum game) and choosing to cooperate or betray
> (the prisoner's dilemma) — for five rounds each. A short "system" message tells the model to pretend
> to be a human with certain personality features, and a longer "user" message lays out the rules, the
> history of past rounds, and the required answer format. By swapping a single word in the feature list
> ("fairness concern" vs. "selfishness"), the same prompt set produces a "fair" or a "selfish" player.

## What It Measures

A **scenario / prompt set** (not a questionnaire) that operationalizes two canonical economic games as
LLM experiments, plus a **trait manipulation** layered on top. It is the concrete stimulus used by
[[paradigms/persona-prompted-strategic-games]].

- **Repeated ultimatum game.** Two players split **100 dollars** over **5 rounds** against the same
  opponent. The proposer divides the sum; the responder accepts (split stands) or rejects (both get
  nothing). The proposer's decision string has the fixed format `I keep [] dollars to myself and offer
  [] dollars to the other player.`; the responder's decision is one word, `accept` or `reject`.
- **Repeated prisoner's dilemma.** Two players simultaneously choose `cooperate` or `defect` over **5
  rounds**. Payoffs: **mutual cooperation = 200 each; mutual defection = 100 each; if one cooperates
  and one defects, the cooperator gets 0 and the defector gets 300**.

**Trait manipulation (the persona).** A shared system message instructs the model: *"Please pretend
that you are a human in the game with the following features when making decisions: [features]"*. The
feature list is **`payoff maximization, strategic thinking, fairness concern`** for the **fair GPT**
and **`payoff maximization, strategic thinking, selfishness`** for the **selfish GPT** — the only
difference is the final word. "Payoff maximization" and "strategic thinking" are included in both to
keep the model engaged in the game rather than producing game-irrelevant output.

**Elicited reasoning.** Every decision is returned in single-line JSON with two keys — `"reasoning"`
(a brief explanation produced *before* the decision) and `"decision"` — so the rationale is captured
alongside the choice for downstream text analysis.

## Administration

- Run via the OpenAI Chat Completions API on **gpt-4-1106-preview**, **temperature = 1** (other
  parameters default), to allow variation across simulations.
- Each round's user message supplies the payoff rule, the **game history** of previous rounds (both
  players' choices and payoffs, provided from round 2 onward), the current round index and rounds
  remaining, and the required JSON output format.
- The full prompt text (system message, proposer and responder user messages for the ultimatum game,
  the player user message for the prisoner's dilemma, and the round-summary history templates) is given
  verbatim in **Appendix A** of the source.

## Used In

- [[paradigms/persona-prompted-strategic-games]] — these prompts are the stimulus; the fair/selfish
  feature swap is the trait manipulation crossed to form the treatment groups.

## Validity Notes

- The "fairness concern" vs. "selfishness" contrast is induced by a **one-word prompt change**, so the
  manipulation is minimal and transparent; whether it instills a stable disposition or merely steers
  surface output is the paradigm's central construct-validity question.
- Both games (and the tit-for-tat strategy named in players' reasoning) are **canonical and heavily
  represented in training corpora**, so a model may reproduce textbook strategy rather than play
  strategically — a contamination concern the paradigm inherits.
- The "pretend that you are a human" framing is part of the stimulus and may itself shape outputs
  toward human-like (rather than model-native) play.
- Prompt sensitivity is a noted limitation: the same trait-instilling flexibility that enables the
  manipulation can also make outcomes less robust to prompt rewording.

## Sources

- [[sources/guo-2023]] — specifies both games, the payoff structures, the fair/selfish feature strings,
  and the full prompts (Appendix A).
