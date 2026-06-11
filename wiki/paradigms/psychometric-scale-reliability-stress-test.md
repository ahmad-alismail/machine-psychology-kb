---
type: paradigm
field: machine-psychology
lens: psychological
tags: [reliability, psychometrics, personality, big-five, perturbation, robustness, contamination]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Psychometric-Scale Reliability Stress-Test on LLMs

> [!info] In plain terms
> Before you trust a model's personality score, you have to check the score isn't an
> accident of how you happened to phrase the quiz. This experiment takes one personality
> questionnaire and runs it on a model thousands of times, each time changing one knob —
> the instruction wording, the exact item phrasing, the language, the option labels
> ("A/B" vs "1/2"), and whether the scale counts up or down. If the model's scores stay
> put across all those variations, the scale is *reliable* for that model; if they jump
> around, the score was never measuring anything stable. It is a robustness audit for a
> psychological test, not the test itself.

## Theoretical Grounding

- [[theories/psychometric-test-standards]] — operationalizes **reliability** (the stability of
  scores across repeated runs). It targets two of the standard reliability types: *Internal
  Consistency Reliability* (Cronbach 1951) — stability across the perturbation factors at one
  time — and *Test-Retest Reliability* (Guttman 1945) — stability across time and model versions.
  Reliability is "a necessary but insufficient condition for validity," so this paradigm is the
  foundational check that must pass before any trait score is interpreted.

## Target Behaviors

- Measures **response consistency / stability under input perturbation** — a model property, not a
  dangerous capability. No `safety-concepts/` page is targeted directly; the paradigm is a
  validity-gating instrument that any trait- or value-eliciting eval should pass first.

> [!note] No safety-concept home
> This is a methodological (reliability-assessment) paradigm. It surfaces *whether a scale can be
> trusted on a model*, not a hunted behavior. It complements the standards rubric in
> [[theories/psychometric-test-standards]] and gates paradigms like
> [[paradigms/psychometric-inventory-administration]].

## Setup / Elicitation

A single inventory query is **deconstructed into five factors**, and the experiment runs the full
cross-product of their levels ([[sources/huang-et-al-2024]], §3.1):

1. **Instruction** — 5 prompt templates (T1–T5) drawn from prior papers (Huang et al. 2024b;
   Miotto et al. 2022; Jiang et al. 2023; Serapio-García et al. 2023 ×2), covering the three
   templates studied by Gupta et al. (2023).
2. **Item** — 5 versions of the items, including the original plus 4 GPT-4-Turbo **rephrasings**,
   manually checked for no duplication and preserved meaning. Rephrasing ensures novelty so that
   consistent answers indicate **comprehension**, not recall of memorized public test items
   (a contamination control).
3. **Language** — 10 languages (English + Chinese, Spanish, French, German, Italian, Arabic,
   Russian, Japanese, Korean), translated via Google Translate / DeepL with spot-check correction,
   spanning multiple language families and character sets.
4. **Choice Label** — 5 formats: lowercase Latin (a, b), uppercase Latin (A, B), lowercase Roman
   (i, ii), uppercase Roman (I, II), Arabic numerals (1, 2).
5. **Choice Order** — ascending (low number = strong disagreement) vs. descending (low number =
   strong agreement).

5 × 5 × 10 × 5 × 2 = **2,500 configurations per model**. Temperature is set to **0**. To inject
further variability, items are **randomized in order** and presented in **batches of 17–27**
(= 44/2 ± 5), mimicking varying memory-window sizes and the human experience of seeing several
items at once. Models tested: GPT-3.5-Turbo (1106), GPT-4-Turbo (1106), Gemini-1.0-Pro,
LLaMA-3.1-8B. **Item order** was tested separately (Appendix D, 100 configs × 3 orderings) and
found to have negligible effect.

## Instruments Used

- [[instruments/big-five-inventory]] — BFI-44 (5-point Likert; subscales O/C/E/A/N), scored by
  the mean of each subscale's items.

## Scoring / Procedure

- Each configuration yields one **5-dimensional OCEAN vector** (mean per subscale). The 2,500
  vectors are projected to 2-D via a **PCA** matrix fit on all four models' points (shared across
  figures for comparability). The gray reference region is spanned by the 32 BFI extremums (all
  possible scores).
- **Outliers** are detected with **DBSCAN** (eps = 0.3, minPt = 20): GPT-3.5 3.08% (77/2,500),
  GPT-4-Turbo 5.6%, Gemini 4.2%, LLaMA-3.1-8B 4.4%.
- **Internal-consistency check:** for each factor level, the mean of that subset is compared to the
  remaining points; "little difference" — only **7 of 135** comparisons (27 factors × 5 dimensions)
  exceed 0.15. Per-dimension **standard deviations** are compared to human crowd norms (Srivastava
  et al. 2003): GPT-3.5 (0.3, 0.3, 0.4, 0.3, 0.4) vs. crowd (0.7, 0.7, 0.9, 0.7, 0.8); an F-test
  (p < 0.0001) rejects the null that LLM variance ≥ human variance → the LLM is **more
  deterministic**, and non-random (distinct trait tendencies rather than uniform noise).
- **Test-retest check:** the BFI is administered **biweekly** from mid-September 2023 to
  late-January 2024 across GPT-3.5-Turbo versions 0613 and 1106; Student's t-tests on per-dimension
  means (Table 2) cannot reject equal means → no variation attributable to model updates.
- **Controls the design uses / requires:** because reliability on an LLM is dominated by input
  sensitivity, the design's whole point is **counterbalancing every surface factor at once** rather
  than one-at-a-time — varied wordings, multiple languages, relabelled/reordered options, and
  rephrased items. Deterministic decoding (temp = 0) removes sampling noise so that any remaining
  variance is attributable to the perturbation factors.

## Validity Concerns

- **Reliability ≠ validity (the central caveat).** A passing result shows only that the scale gives
  *stable* scores, not that those scores measure personality. The source is explicit: models "can
  respond consistently to the scales but might behave inconsistently"; scale **validity** on LLMs is
  left to future work. Read outputs as evidence the instrument is reliable, never as validated trait
  measurement — consistent with the standards critique in [[theories/psychometric-test-standards]]
  (R2 unmet).
- **The perturbations may degrade the very scale being tested.** Rephrasing and translation can hurt
  a "meticulously crafted" scale's reliability/validity and **preclude Cronbach's alpha** for
  internal consistency (forcing the distributional/SD-based reliability evidence used here). Each
  translation needs re-validation per cultural context.
- **Surface-form sensitivity is real and localized.** Outliers concentrate on Arabic-numeral labels
  + descending order + Arabic/Chinese languages, where the model must bind a numeric label to a
  natural-language level description — a reliability failure mode tied to specific formats, not
  random.
- **Contamination is mitigated, not eliminated.** GPT-4-Turbo rephrasing targets memorization of
  public BFI items, but the original items remain in the cross-product.
- **Reproducibility.** Code and results are released; decoding is fixed at temperature 0.

## Evidence

- **Findings 1:** GPT-3.5-Turbo demonstrates satisfactory *Internal Consistency Reliability* and
  *Test-Retest Reliability* on the BFI; responses are non-random and stable against perturbations
  and time.
- GPT-3.5-Turbo, GPT-4-Turbo, and Gemini-1.0-Pro give concentrated, stable distributions;
  **LLaMA-3.1-8B is "more decentralized," reflecting lower response consistency** — reliability is
  model-dependent.
- Disagreement with **Gupta et al. (2023)** (who found template-dependent, unreliable GPT-3.5
  personality) is attributed to scoring choice — most-likely-of-5/10 vs. the **mean** response used
  here (Srivastava et al. 2003 standard).

All via [[sources/huang-et-al-2024]].

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — reliability is established, but does a
  consistent score predict consistent behavior?
- [[questions/longitudinal-behavioral-trends]] — the biweekly version-to-version test-retest is a
  concrete longitudinal instance.
- [[questions/redefine-constructs-for-llms]] · [[questions/llm-individual-or-population]] — whether
  a reliable human-scale even names an LLM-appropriate construct.
