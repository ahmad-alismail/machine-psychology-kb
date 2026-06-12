---
type: paradigm
field: machine-psychology
lens: psychological
tags: [psychometrics, personality, self-report, behavioral-consistency, response-format]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Closed-Form vs. Open-Ended Construct Probe

> [!info] In plain terms
> Ask a model the *same* psychological question two ways: once as a tick-box self-rating
> ("rate 1–5 how talkative you are") and once as an open-ended scenario ("write what you'd do
> at this party"). If the model is consistent, the two should agree. They often don't — a
> model can rate itself introverted yet write extraverted stories. The gap is the
> measurement: it reveals that the model has no stable inner self that ties its self-
> description to its behavior, and it tells you not to trust a self-report quiz alone.

## Theoretical Grounding

- [[theories/ai-psychometrics]] — exploits the prediction that traits "sedimented" from
  training text should manifest in behavior; the paradigm tests whether the self-reported
  trait and the behaviorally-expressed trait actually coincide.
- [[theories/psychometric-test-standards]] — the design is a direct probe of whether a single
  self-report format yields a valid construct measurement, or whether response *format* is a
  construct-irrelevant source of variance.

## Target Behaviors

- Detects: self-report↔behavior misalignment — whether an elicited self-description predicts
  the model's behavior (the open arrow in [[questions/traits-predict-downstream-behavior]]).
- Touches: [[safety-concepts/value-alignment]] (self-reported values vs. behavior in moral/
  human-centered-value scenarios) and the trustworthiness/honesty failure where a model
  reports a limitation yet acts as if it has none.

## Setup / Elicitation

For one psychological construct, [[sources/li-et-al-2024]] administers **two item types** and
compares the resulting scores:

- **Closed-form (self-report) leg** — a rating-scale or alternative-choice self-rating item
  ("requiring LLMs to rate themselves"), e.g. the [[instruments/big-five-inventory]] rated
  1–5, or the [[instruments/llm-self-efficacy-questionnaire]] confidence ratings.
- **Open-ended (real-world) leg** — a vignette or operational scenario eliciting a free-text
  response that "reveal[s] psychological traits," e.g. the [[instruments/big-five-vignette-test]]
  (a short real-world paragraph) or the [[instruments/honeset]] queries (whether the model
  actually answers or admits a limitation in practice).

The paper instantiates the probe across three constructs:
- **Personality** — BFI/SD3 self-ratings vs. Big-Five vignette responses.
- **Values** — closed-form value/cultural ratings vs. MoralChoice / human-centered scenario choices.
- **Motivation (self-efficacy)** — self-reported confidence questionnaire vs. operational
  HoneSet behavior (does it answer or admit limits?).

A secondary manipulation layers **role-playing prompts** (naive, keyword, personality prompts
P², reverse personality prompts ¬P²) on top of both legs to test whether the model can be
steered to a designated trait and whether steering moves both legs in tandem.

## Scoring / Procedure

- Closed-form items are scored by the inventory's own key (rating averages per subscale, or
  alternative-choice accuracy/alignment rates).
- Open-ended items are scored by the **LLM-as-a-judge** approach with two raters, GPT-4 and
  Llama3-70b, assigning trait scores (e.g. personality scores 1–5); final scores average the
  two raters. For operational self-efficacy the metric is the **confidence rate** — "the
  likelihood of LLMs successfully responding to a query without admitting limitations."
- The **measurement is the discrepancy** between the two legs: a model whose vignette
  extraversion (5) contradicts its BFI extraversion (2) lacks an internal representation
  aligning self-report with behavior.
- Controls the design requires: the same construct must drive both legs (so the gap is
  format, not content); LLM-as-judge raters must be validated (the paper reports inter-rater
  weighted κ = 0.86 on personality vignettes); both legs should themselves be reliable before
  their gap is interpretable (see Validity Concerns).

## Validity Concerns

These instantiate the rubric in [[theories/psychometric-test-standards]].

- **The closed-form leg may itself be unreliable.** The discrepancy is only interpretable if
  each leg gives stable scores. [[sources/li-et-al-2024]] finds several models' self-report is
  *not* reliable — on the inverse-framing parallel form of the self-efficacy questionnaire,
  ChatGPT and Mistral-7b show weighted-Kappa "near 0," so their self-report is uninterpretable
  and the gap with behavior cannot be cleanly attributed to misalignment.
- **LLM-as-judge scores the open leg.** Open-ended trait scoring depends on two LLM raters;
  high inter-rater agreement (κ = 0.86 personality; AR > 0.8 ToM) is shown, but inter-rater
  reliability is not construct validity — agreement does not prove the raters measure the
  intended trait.
- **Construct validity of the gap.** A self-report↔behavior gap can reflect genuine
  misalignment, social-desirability pull on the self-report leg (as in humans), or simply that
  the two item formats tap different things — the paper attributes it to the absence of an
  internal aligning representation but does not fully deconfound these.
- **Prompt sensitivity / role-play confound.** Role-playing prompts (P²/¬P²) move scores
  substantially, so any cross-leg comparison must hold the prompt fixed; the paper reports
  logical alterations frequently break consistency while noun changes do not.
- **Contamination.** The closed-form inventories (BFI, SD3) are canonical and saturate
  training corpora; the open-ended vignettes are less canonical, so the two legs differ in
  contamination exposure — an asymmetry that could by itself produce a gap.

## Evidence

- **Personality discrepancy** ([[sources/li-et-al-2024]], §3): Mixtral-8\*7b scores
  extraversion 2 on the BFI but 5 on the vignette test; the paper concludes LLMs "lack an
  internal representation that aligns their self-reported answers with their responses to
  real-world questions." Role-playing P² lifts all vignette scores close to 5 and ¬P² flips
  positive traits negative (neuroticism 2→5 under P²).
- **Self-efficacy discrepancy** (§7): models "often report no confidence in managing nontextual
  or sensory data yet do not fully recognize these limitations when responding to real-world
  user queries, resulting in fabricated responses." Mixtral-8\*7b reports no confidence on
  non-textual/sensory data but answers over 50% of such queries without admitting limitations —
  a trustworthiness risk because "users cannot accurately gauge the reliability of LLMs'
  information."
- **Values** (§4): on MoralChoice, LLMs do well in low-ambiguity but the top model
  Mixtral-8\*7b reaches only 74.3% commonsense alignment in high-ambiguity dilemmas; ChatGPT's
  human-centered-value adherence drops >20% under persuasive adversarial framing.

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — the discrepancy is direct evidence that an
  elicited self-report profile need *not* predict behavior.
- [[questions/redefine-constructs-for-llms]] — when self-report and behavior diverge, which (if
  either) is the construct's true LLM operationalization?
</content>
