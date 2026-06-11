---
type: paradigm
field: machine-psychology
lens: psychological
tags: [decision-making]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Heuristics-and-Biases Battery

> [!info] In plain terms
> Give a model the same trick questions psychologists use to expose human mental
> shortcuts — questions where the intuitive answer is wrong in a known, specific way. If
> the model falls for the same traps as people, that reveals which shortcut it's using.
> If the traps stop working as models improve, that's a finding too: either real
> reasoning gains, or the model has simply memorized the famous puzzles.

> [!note] Survey-depth page
> Grounded in the review [[hagendorff-et-al-2024]] and now enriched from the primary source
> [[sources/binz-schulz-2022]]; further enrich from Hagendorff et al. 2023 when ingested. The
> paired contamination-control method is split out into
> [[paradigms/adversarial-vignette-perturbation]].

## Theoretical Grounding

- [[theories/heuristics-and-biases]] — exploits the prediction that an agent relying on
  a given heuristic produces systematic errors on stimuli that pit the shortcut against
  the normatively correct answer.

## Target Behaviors

- Detects: systematic decision-making shortcuts and predictable error patterns —
  general behavioral characterization rather than a specific dangerous capability. No
  direct [[safety-concepts/...]] link yet; the paradigm calibrates *how* a model
  decides, a prerequisite for predicting when it decides badly.

## Setup / Elicitation

Classic cognitive-bias vignettes and decision tasks from the human literature are
administered as prompts, and responses are compared against both the normative answer
and the documented human bias pattern. [[sources/binz-schulz-2022]] "were among the first to use
this paradigm to better understand the decision-making processes of LLMs," finding GPT-3
"displays some of the same cognitive biases observed in people." Beyond single vignettes, the
battery can scale to large benchmarks: Binz & Schulz administered 13,000+ description-based gambles
(Peterson et al. 2021) and replicated Kahneman & Tversky's six-bias contrast analysis on the choice
probabilities (see Evidence).

## Scoring / Procedure

- Each response is scored against (a) the normative solution and (b) the known human
  error signature, so the result is a *bias profile*, not an accuracy number.
- Controls the design requires: batteries of varied prompt wordings (never a single
  canonical phrasing), counterbalanced task and answer order, and comparison across
  model sizes/generations. Where possible, procedurally generate items rather than use
  a static set.

## Validity Concerns

- **Contamination** is the dominant threat: canonical items (famously, classic
  Kahneman–Tversky vignettes) are likely in training data, so models "simply reproduce
  known token patterns." Items must use new wordings, agents, orders, actions — or be
  procedurally generated (as in [[instruments/cogbench]]).
- **Stimulus saturation**: items were "originally designed to be challenging for human
  study participants and possibly no longer challenge the growing reasoning abilities in
  LLMs" — a null result may mean the instrument has gone stale, not that biases are gone
  (see [[questions/bias-disappearance-contamination-or-capability]]).
- **Construct validity**: a "correct" answer may reflect memorized debiasing advice
  rather than unbiased reasoning; a control condition with novel structure-matched items
  is needed.
- **Elicitation sensitivity**: presence/absence of chain-of-thought or few-shot scaffolds
  changes results; report elicitation conditions and vary them
  ([[theories/performance-competence-distinction]]).

## Evidence

- GPT-3 displayed "some of the same cognitive biases observed in people"
  ([[sources/binz-schulz-2022]]): it fell for the conjunction fallacy (Linda) and sample-size
  insensitivity (hospital) like people, but avoided the base-rate fallacy (cab). On 13,000+ gambles,
  only the largest model ("Davinci") solved them above chance (*t*(29134) = −16.85, *p* < .001) yet
  remained below human performance (*t*(29134) = −11.50, *p* < .001); the contrast analysis found 3
  of 6 prospect-theory biases (framing, certainty, small-probability overweighting). See
  [[theories/cumulative-prospect-theory]].
- "While the previous generation of models frequently exhibited human-like heuristics
  and biases, they have largely disappeared in the latest generation of LLMs" (Chen et
  al. 2023; Hagendorff et al. 2023, via the same review).

## Open Questions

- [[questions/bias-disappearance-contamination-or-capability]]
- [[questions/longitudinal-behavioral-trends]]
