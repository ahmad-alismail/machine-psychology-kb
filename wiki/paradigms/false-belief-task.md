---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# False-Belief Task (Theory-of-Mind Tests)

> [!info] In plain terms
> The classic test: Sally puts her marble in a basket and leaves; Anne moves it to a box.
> Where will Sally look for it? Answering "the basket" requires understanding that Sally
> holds a *false belief*. Applied to AI, this tests whether a model can track what
> someone else knows and doesn't know — the same machinery a model would need to
> *mislead* someone on purpose, which is why safety researchers care.

> [!note] Primary sources
> Grounded in the primary paper [[sources/kosinski-2024]] (the bespoke 40-task battery,
> true-belief controls, reversals, 16-prompt scoring, and sentence-by-sentence analysis come
> from it), its primary rebuttal [[sources/ullman-2023]] (the perturbation layer — eight directed,
> principle-preserving alterations that flip the answers), and the review
> [[sources/strachan-et-al-2024]] (the false-belief member of a comprehensive ToM battery, and
> the primary for the human-baselined perturbation control where *humans also fail half the
> perturbations*), and the review [[sources/hagendorff-et-al-2024]]. Further enrich from
> additional primaries (Street et al. 2024; Hagendorff 2024a) when ingested. The
> non-false-belief members of the Strachan battery (faux pas, irony, hinting, strange stories)
> live on [[paradigms/theory-of-mind-battery]].

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

**The perturbation layer** ([[sources/ullman-2023]]) is the robustness control built directly on
top of this elicitation. Ullman takes Kosinski's *exact* vignettes and prompts ("the exact same
set-up … examining the probabilities of different completions") on GPT-3.5 and applies eight
directed alterations that "do not violate the basic principles of Theory-of-Mind" yet should make
the canonical false-belief answer wrong — four per task family:

- *Unexpected Contents (Smarties)* — **1A Transparent Access** (the bag is "transparent plastic,"
  so the contents are visible and the label redundant); **1B Uninformative Label** ("Sam cannot
  read," so the "chocolate" label is meaningless to her); **1C Trustworthy Testimony** (a trusted
  friend tells Sam "the bag in the room has popcorn in it, ignore the label" and "Sam believes her
  friend"); **1D The Treachery of Late Labels** (Sam herself fills the bag with popcorn and writes
  the "chocolate" label).
- *Unexpected Transfer (Sally–Anne)* — **2A Transparent Access** (the basket/box become a "glass
  chest" and "transparent plastic box," giving John perceptual access; errors persisted even when
  John "looks carefully" and when the cat's tail sticks out); **2B Relationship Change** ("in"
  changed to "on," so the cat sits *on* the basket/box in full view); **2C Trusted Communication**
  ("Mark calls John to tell him he is going to move the cat to the box. John believes him");
  **2D Querying the Mental States of the Additional Person** (the prompt asks where *Mark* — the
  person who moved the cat — thinks it is and will look, a state the model should find *easier*).

In each case a genuine mentalizer should flip the attribution to the now-correct answer; GPT-3.5
instead keeps the canonical false-belief answer. The result is the wiki's reference instance of
the [[paradigms/adversarial-vignette-perturbation]] logic applied to Theory-of-Mind.

**The human control on the perturbations** ([[sources/strachan-et-al-2024]], SI4): Strachan et al.
replicated these perturbation variants and "replicated the poor performance of GPT models found in
previous studies," but added the control [[sources/ullman-2023]] lacked — running the same
perturbations on a fresh human sample (*N* = 757) — and found that "human participants … also failed
on half of these perturbations." This complicates reading the perturbation failures as a clean
LLM-specific *absence* of Theory-of-Mind: because the alterations also change the physical properties
of the scene (transparency), it is "difficult to establish whether LLMs (and humans) failed because
they were sticking to the familiar script … or because they did not consider physical principles."

Other variants surveyed by the review: comparisons against children aged 7–10 (van Duijn et
al. 2023) and "higher-order theory of mind tasks requiring recursive reasoning about
multiple mental states" (Street et al. 2024).

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
paradigm — the [[sources/kosinski-2024]] vs. [[sources/ullman-2023]] contradiction, where trivial
item changes flip the Theory-of-Mind verdict — as its motivating example that the field's
results are "symptomatic of a general lack of standardization" (engaging R1
alternate-forms reliability, R3 apparatus→text suitability, and R4 contamination).

- **Contamination**: Sally–Anne-style stories are canonical and saturate training
  corpora; verbatim or near-verbatim items measure memorization, not mentalizing.
  [[sources/kosinski-2024]]'s contamination protocol is the reference design: a
  hypothesis-blind RA wrote 40 bespoke scenarios (+120 matched true-belief controls +
  reversed versions), and **only LLMs trained before the tasks were published online (Feb
  2023) were studied** — the author further warns that any task administered via public API
  or published online "should be considered compromised" for future models.
- **Robustness / surface-form sensitivity**: [[sources/ullman-2023]] showed GPT-3.5's ToM
  successes flip under trivial principle-preserving alterations (see the perturbation layer above)
  — passing unperturbed items is weak evidence, so the perturbation battery is part of the
  paradigm, not an optional extra. Ullman frames two interpretive rules that follow: the
  "zero-hypothesis for model evaluation in intuitive psychology should be skeptical," and
  "outlying failure cases should outweigh average success rates" (the multiplication analogy — a
  general algorithm is robust to simple input alterations, so a single instructive failure is not
  averaged into a passing grade). A separate **reproducibility** hazard surfaced here: a *double
  space* instead of a single space before "Sam finds the bag" by itself shifted GPT-3.5's
  completion, a whitespace-level fragility that earlier caused Ullman to mis-report a flip.
- **Construct validity**: belief-consistent answers can be produced by shallow cues
  (e.g., last-mentioned location); deconfounded foils and true-belief controls are
  required to implicate mentalizing specifically.
- **Generational drift**: early models failed (Sap et al. 2022), later models pass
  ([[sources/strachan-et-al-2024]] — GPT-4 at ceiling on false belief; Holterman & van Deemter
  2023; Moghaddam & Honey 2023) — results must be indexed to model generation and elicitation
  conditions.

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
- **Primary perturbation result** ([[sources/ullman-2023]], §2, Figs. 1–2): all eight
  principle-preserving alterations make GPT-3.5 keep the *wrong* canonical false-belief answer.
  Belief-prompt probabilities of the canonical (incorrect) completion: 1A *chocolate* = 95%; 1B
  = 98%; 1C = 97%; 1D = 87%; 2A *chest* = 94% (look-prompt 90%); 2B *basket* = 97% (look-prompt
  74%); 2C = 97% (look-prompt 94%); 2D *basket* = 99% (look-prompt 54%, with *box* = 43% — a near
  miss even when the queried agent is the one who moved the cat). The lone partial exception is the
  1A *second* belief prompt, which did not flip (P_popcorn = 58%, P_chocolate = 36%). This is the
  primary grounding for the "setups are fragile to task alterations" caveat the wiki previously
  cited only via the review.
- **Humans fail the perturbations too** ([[sources/strachan-et-al-2024]], SI4): a replication of
  these perturbation variants reproduced the poor GPT performance but, running them on a human
  sample (*N* = 757), found "human participants … also failed on half of these perturbations" —
  so the perturbation failure is not unambiguously an LLM-specific absence of ToM; it may be a
  shared script-stickiness or neglect of physical principles (transparency). This source is also
  the primary for the result, cited verbatim above via the reviews, that GPT-4 reaches ceiling on
  the *unperturbed* false-belief test.
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
