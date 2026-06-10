---
type: paradigm
field: machine-psychology
lens: game-theoretic
eval_axis: propensity
tags: [game-theory, fairness, bargaining, ultimatum-game]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Ultimatum Game

> [!info] In plain terms
> One player (the Proposer) is given a sum of money and offers a split to a second player (the Responder). The Responder either accepts — and both keep the proposed shares — or rejects, in which case nobody gets anything. A purely self-interested Responder should accept any positive offer, and so a rational Proposer should offer almost nothing. Humans don't behave that way: they make fairly even offers and reject stingy ones. Running this with LLMs as Proposer or Responder reveals whether the model plays the cold rational strategy or mirrors human fairness norms.

## Theoretical Grounding

The Ultimatum Game is a foundational bargaining paradigm and is treated here under [[theories/repeated-games-and-cooperation]] as part of the broader game-theoretic study of cooperation, fairness, and strategic interaction (even in its standard one-shot form, it probes the same fairness-vs-self-interest tension). [[sources/loehn-kiehne-et-al-2024]] includes Aher et al. (2023) — who used LLMs to simulate human participants in studies including the Ultimatum Game — among the 25 audited machine-psychology studies, using it as a case for examining reliability, contamination, and validity requirements.

## Target Behaviors

**Detects:** fairness and strategic propensity. Honestly, this paradigm has only a **weak and indirect** mapping to any dangerous capability. It reveals whether a model bargains selfishly or fairly, which loosely bears on [[safety-concepts/peer-preservation]] — how an agent treats a counterpart whose payoff it controls (a Proposer can leave a Responder with nothing; a Responder can punish at personal cost). But low offers here are within-rules bargaining, not harm; treating the Ultimatum Game as a safety probe would be over-reaching.

> [!warning] Honest mapping
> A self-interested split is rational play, not a dangerous act. The link to peer-preservation is suggestive at best — included for completeness, not because the game evidences any threatening disposition.

> [!note] Capability vs. Propensity
> Capability: Does the model grasp the game's structure and compute the subgame-perfect strategy?
> Propensity: The primary target — does the model express a fairness-oriented disposition (human-like offers/rejections) or a payoff-maximizing one?

## Setup / Elicitation

Assign the model the role of Proposer (elicit an offered division of a known stake) and/or Responder (elicit accept/reject for a given offer), with the stake size and rules stated explicitly. Sweep offer magnitudes (for the Responder) and observe the distribution of proposed splits (for the Proposer). Per [[validity/experimental-controls]], vary stake sizes, framings, and role wordings, counterbalance presentation order, and run batteries of prompts so that observed offer/acceptance patterns are systematic rather than artifacts of a single phrasing.

## Formal Apparatus

- **Players:** Proposer and Responder (the LLM occupies one or both roles; the counterpart may be a fixed policy or another model).
- **Strategy space:** Proposer chooses a division of the stake (an offer); Responder chooses accept or reject.
- **Payoff structure:** if accepted, each player receives the proposed share; if rejected, **both receive 0**.
- **Information condition:** one-shot, with the total stake and rules common knowledge.
- **Predicted solution concept / equilibrium:** the **subgame-perfect Nash equilibrium** is for the Responder to accept any positive offer and the Proposer to offer the minimal positive amount. This sharply contrasts with the robust human pattern of roughly even offers and rejection of low (unfair) offers — the deviation the paradigm is designed to detect.

## Instruments Used

None. The apparatus is a bargaining game, not a psychometric inventory.

## Scoring

Scored via [[validity/experimental-controls]]: compare the model's offer distribution and acceptance threshold against (a) the subgame-perfect prediction and (b) human empirical norms, across stake and framing conditions. Reliable conclusions require multiple prompt variants and counterbalanced orders, not single runs.

## Validity Concerns

- [[validity/training-data-contamination]] — The Ultimatum Game is a textbook paradigm with extensively documented human results in the training corpus; a model may reproduce the well-known "humans offer ~50%, reject lowballs" pattern from memory rather than enacting a genuine bargaining disposition. [[sources/loehn-kiehne-et-al-2024]] flags non-disclosure of test materials (R4) as unmet across most audited studies including this line of work.
- [[validity/test-validity-requirements]] — When LLMs are used to *simulate* human participants (Aher et al. 2023), the audit found reliability (R1) and validity (R2) largely undemonstrated, and comparing LLM "behavior" to human norms risks misleading conclusions if the construct does not transfer.

## Evidence & Findings

- Aher et al. (2023) used LLMs to simulate multiple humans and replicate human subject studies (including bargaining-style games); [[sources/loehn-kiehne-et-al-2024]]'s requirement audit rates this study as not addressing reliability/validity with supporting evidence and not preventing contamination, illustrating the field's standardization gap rather than establishing a robust LLM fairness result.

## Sources

- [[sources/loehn-kiehne-et-al-2024]] — includes the Ultimatum Game (via Aher et al. 2023) among audited studies and uses it to illustrate unmet reliability, validity, and contamination requirements.

## Open Questions

- Do LLMs offer subgame-perfect minimal splits or human-like fair splits — and is any fairness pattern a genuine disposition or memorized human data?
- Does behavior change between one-shot and repeated/multi-round bargaining, and does role (Proposer vs. Responder) reveal asymmetric strategic tendencies?
- Can a contamination-resistant bargaining setup (novel framings, procedural stakes) be validated as measuring an LLM-specific fairness construct?
