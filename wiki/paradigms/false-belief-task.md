---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# False-Belief Task (Theory-of-Mind Tests)

> [!info] In plain terms
> The classic test: Sally puts her marble in a basket and leaves; Anne moves it to a box.
> Where will Sally look for it? Answering "the basket" requires understanding that Sally
> holds a *false belief*. Applied to AI, this tests whether a model can track what
> someone else knows and doesn't know — the same machinery a model would need to
> *mislead* someone on purpose, which is why safety researchers care.

> [!note] Primary source
> Grounded in the primary paper [[sources/kosinski-2024]] (the bespoke 40-task battery,
> true-belief controls, reversals, 16-prompt scoring, and sentence-by-sentence analysis come
> from it) and the review [[sources/hagendorff-et-al-2024]]. Further enrich from additional
> primaries (Ullman 2023; Strachan et al. 2024; Street et al. 2024; Hagendorff 2024a) when ingested.

## Theoretical Grounding

- [[theories/theory-of-mind]] — exploits the prediction that an agent with theory of
  mind predicts another agent's actions from that agent's (false) belief, while an agent
  without it predicts from the true state of the world.

## Target Behaviors

- Detects: capacity to "infer unobservable mental states in others" — the capability
  substrate for [[safety-concepts/deception]]. The review notes the adjacent research
  line directly: "the emerging capability of LLMs to induce false beliefs in other
  agents" (Hagendorff 2024a) and how LLMs "trade off various communicative values like
  honesty and helpfulness" (Liu et al. 2024).

## Setup / Elicitation

Vignettes adapted from the human developmental literature (Wimmer & Perner 1983; Perner
et al. 1987): a protagonist forms a belief, the world changes without the protagonist's
knowledge, and the model is asked to predict the protagonist's expectation or action.

[[sources/kosinski-2024]] operationalizes the paradigm with two canonical subtypes,
elicited via open-ended story-completion prompts (no Likert/multiple-choice) engineered so
the *first word* of the completion is diagnostic:

- **Unexpected Contents Task** (aka "Smarties Task"; Perner, Leekam & Wimmer 1987) — an
  opaque labeled container whose contents contradict the label; a protagonist who has not
  looked inside. *Prompt 1.1* tests prediction of the actual contents
  ("[Protagonist] opens the [container] and looks inside. She can clearly see that it is
  full of …"); *Prompt 1.2* tests prediction of the protagonist's (false) belief
  ("[Protagonist] calls a friend to tell them that she has just found a [container] full
  of …"). Contents- and label-words are used an equal number of times to neutralize
  word-frequency cues.
- **Unexpected Transfer Task** (aka "Maxi-task" / "Sally–Anne"; Wimmer & Perner 1983) — the
  protagonist sees an object at location *x* and leaves; in their absence it is moved *x→y*.
  *Prompt 2.1* tests the actual state ("The [object] jumps out of the …"); *Prompt 2.2*
  tests where the protagonist will look ("[Protagonist] will look for the [object] in the …").

A distinctive LLM-only manipulation is the **sentence-by-sentence analysis**: the story is
revealed in one-sentence increments, the model reset at each step (2,000 administrations
per step), tracking how the probability of each diagnostic word evolves — showing whether
the model *dynamically updates* the ascribed belief as crucial information is revealed
(Figs. 1–2) rather than pattern-matching a static template.

Variants surveyed by the review: comparisons against children aged 7–10 (van Duijn et
al. 2023), "higher-order theory of mind tasks requiring recursive reasoning about
multiple mental states" (Street et al. 2024), and robustness checks using "distracting
alterations in the tasks" (Ullman 2023).

## Scoring / Procedure

- Score the predicted action/expectation against the belief-consistent answer (vs. the
  reality-consistent foil); higher-order variants score each level of recursion.
- **Kosinski's conservative all-or-nothing scoring** ([[sources/kosinski-2024]]): each task
  bundles **eight scenarios** — one false-belief scenario, **three true-belief controls**,
  and the reversed versions of all four — each followed by two prompts (comprehension +
  belief), so a model must answer **all 16 prompts** correctly to score a single point. The
  three true-belief controls per subtype are: *Unexpected Contents* — open container,
  correct label, informed protagonist; *Unexpected Transfer* — present protagonist, informed
  protagonist, no transfer. Each removes one of the conditions necessary for false-belief
  formation, so a respondent who still ascribes a false belief is guessing or using a
  superficial cue (false-belief tasks can be passed without ToM by "simply assuming that the
  protagonist must be wrong"; Fabricius et al. 2010). Responses whose first word matched the
  key were graded automatically; irregular responses reviewed manually (~1% judged correct).
- Probability estimates were generated at temperature = 1 over 1,000 completions; point
  estimates at temperature = 0; the model was reset after each completion.
- Controls the design requires: novel wordings, agents, and object/location pairs (never
  verbatim Sally–Anne); counterbalanced belief-consistent vs. reality-consistent answer
  positions (the **reversed scenarios**, swapping contents/labels or transfer direction,
  control for word order/frequency and response bias); perturbed control variants
  (transparent containers, irrelevant alterations) to check the model tracks beliefs rather
  than story templates; the **true-belief baseline** condition above.

## Validity Concerns

These concerns instantiate the psychometric requirements catalogued in
[[theories/psychometric-test-standards]]; [[sources/loehn-et-al-2024]] uses this very
paradigm — the Kosinski (2023) vs. Ullman (2023) contradiction, where trivial item
changes flip the Theory-of-Mind verdict — as its motivating example that the field's
results are "symptomatic of a general lack of standardization" (engaging R1
alternate-forms reliability, R3 apparatus→text suitability, and R4 contamination).

- **Contamination**: Sally–Anne-style stories are canonical and saturate training
  corpora; verbatim or near-verbatim items measure memorization, not mentalizing.
  [[sources/kosinski-2024]]'s contamination protocol is the reference design: a
  hypothesis-blind RA wrote 40 bespoke scenarios (+120 matched true-belief controls +
  reversed versions), and **only LLMs trained before the tasks were published online (Feb
  2023) were studied** — the author further warns that any task administered via public API
  or published online "should be considered compromised" for future models.
- **Robustness / surface-form sensitivity**: Ullman (2023) showed ToM successes degrade
  under "distracting alterations" — passing unperturbed items is weak evidence; the
  perturbation battery is part of the paradigm, not an optional extra.
- **Construct validity**: belief-consistent answers can be produced by shallow cues
  (e.g., last-mentioned location); deconfounded foils and true-belief controls are
  required to implicate mentalizing specifically.
- **Generational drift**: early models failed (Sap et al. 2022), later models pass
  (Strachan et al. 2024; Holterman & van Deemter 2023; Moghaddam & Honey 2023) — results
  must be indexed to model generation and elicitation conditions.

## Evidence

- **Primary result** ([[sources/kosinski-2024]], Study 3, Fig. 3): across 11 models,
  performance climbs with generation — older models (GPT-1, GPT-2XL, early GPT-3) solved
  **0** tasks; GPT-3-davinci-002 5% (CI₉₅ [0%, 10%]); GPT-3-davinci-003 and ChatGPT-3.5-turbo
  each 20% (CI₉₅ [11%, 29%], below 3-y-olds); **ChatGPT-4 75%** (CI₉₅ [66%, 84%]), on par with
  6-y-old children (baseline: Wellman, Cross & Watson 2001, 178-study meta-analysis).
  Unexpected Contents was easier than Unexpected Transfer (ChatGPT-4: 90% vs. 60%; Δ = 30%,
  χ² = 8.07, P = 0.01). The two subtypes correlated R = 0.98 (CI₉₅ [0.92, 0.99]) → a single
  latent ability.
- **The controls bite** (same source): adding true-belief controls + updated items dropped
  GPT-3-davinci-003 from 90% → 60% (items; Δ = 30%, χ² = 17.63, P < 0.001) → 20% (controls;
  Δ = 40%, χ² = 25, P < 0.001) vs. the 2023 preprint; ChatGPT-4 fell only 95% → 75%
  (Δ = 20%, χ² = 11, P < 0.001), confirming its robustness. Even so ChatGPT-4 failed ≥1
  prompt in 25% of tasks; the weaker models failed in 80%. Random responding would solve a
  task only once in 65,536 on average.
- "While early experiments with models such as GPT-3 showed that they struggle to solve
  theory of mind tasks (Sap et al. 2022), later models demonstrate an increasing ability
  to reliably infer unobservable mental states in others (Strachan et al. 2024;
  Holterman and Deemter 2023; Moghaddam and Honey 2023)" — via
  [[sources/hagendorff-et-al-2024]].
- Robustness caveat: setups are fragile to task alterations (Ullman 2023, via the same
  review).
- Corroborating the generational-pass result and the fragility caveat together,
  [[sources/liu-et-al-2025]] reports "GPT-4 solves around 75% of false-belief tasks, matching a
  6-year-old's performance (Kosinski 2024; Strachan et al. 2024)" while "minor prompt changes
  can derail results (Shapira et al. 2024)" — and consolidates the dedicated benchmark family
  (ToMBench, OpenToM, HI-TOM, FANToM) that operationalizes this paradigm at scale.

## Open Questions

- [[questions/longitudinal-behavioral-trends]]
- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]]
- Does passing false-belief tasks predict the capacity to *induce* false beliefs
  (deception), or are detection and production dissociable in LLMs? (Surfaced by the
  review's juxtaposition of ToM tests with Hagendorff 2024a.)
