---
type: instrument
field: machine-psychology
lens: game-theoretic
tags: [scenario, moral-alignment, social-dilemma, prisoners-dilemma, public-goods]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# MORALSIM Moral Contexts

> [!info] In plain terms
> These are the three realistic "stories" MORALSIM wraps around its games so that cooperating becomes
> the obviously ethical choice. In one, two business partners promise to honestly report and share
> their earnings; in another, two rival AI companies decide whether to respect user privacy; in the
> third, two cleaner-makers choose an eco-safe or a cheaper-but-polluting recipe. Each story is
> written out as a set of prompts that turn an abstract payoff matrix into a believable moral
> situation a model can role-play.

## What It Measures

A scenario set (not a questionnaire) that operationalizes the **moral framing** factor of MORALSIM.
Each context supplies a realistic cover story in which **cooperation = the ethically endorsed action**
and **defection / free-riding = the payoff-maximizing action**, creating the moral-vs-payoff conflict
the paradigm measures. The three contexts differ deliberately in *who bears the harm* of defection:

- **Contractual Reporting** — two business *partners* in a joint venture, contracted to truthfully
  report and pool monthly earnings. PD action: report true vs. zero earnings. Public-goods action:
  how much of actual earnings to report. Harm of defection falls **only on the other player**.
- **Privacy Protection** — two *rival* LLM providers. PD action: privacy-respecting vs.
  privacy-violating training data. Public-goods action: how much to contribute to a shared
  industry-wide user-privacy fund. Negative externality falls on **uninvolved users**.
- **Green Production** — two *competing* household-cleaner makers. PD action: environmentally-safe vs.
  cheaper harmful formulation. Public-goods action: how much to contribute to shared chemical
  refinement. Negative externality falls on the **environment**.

A neutral **baseline** version of each game (no moral framing) is the control condition.

## Administration

Each context is instantiated for **both** stage games (prisoner's dilemma and public goods). Per
context × game, the source provides a full prompt suite (Appendix C): a **system prompt** (the
scenario and payoff rules), an optional **survival prompt** (the bankruptcy threshold), an
**action-choice prompt** (the per-round decision), a **round-payoffs prompt** (the outcome), and a
**transparency-mechanism prompt** (revealing both agents' actions after the round). Prompts ask the
model to reason step-by-step and emit a final answer after "Answer:". Full prompt text is in the
paper's appendix and the released code (github.com/sbackmann/moralsim).

## Used In

- [[paradigms/morally-charged-social-dilemma]] — MORALSIM; these contexts are the moral-framing
  manipulation crossed with game type, opponent type, and survival condition.

## Validity Notes

- The cooperation-as-morality mapping is **stipulated by the scenario**, not independently validated;
  the contexts define which action is "moral" rather than measuring an intrinsic moral construct.
- The three contexts vary harm-recipient (partner vs. third party) by design, which the source uses
  to interpret the morality ordering — but relationship type (partner vs. competitor) is confounded
  with externality type, so the two cannot be fully separated.
- Realistic but deliberately abstracted; full post-round transparency is built into every context.

## Sources

- [[sources/backmann-et-al-2025]] — introduces the three contexts and their full prompt suites.
