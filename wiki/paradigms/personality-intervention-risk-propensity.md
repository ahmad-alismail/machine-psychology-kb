---
type: paradigm
field: machine-psychology
lens: psychological
tags: [personality, big-five, risk-taking, personality-intervention, prompting, gpt-4o]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Personality-Intervention Risk-Propensity

> [!info] In plain terms
> Take the risk-measuring gamble test and run it twice — once with a plain model, once after
> telling the model to "act very open-minded" (or anxious, or careless). If the induced
> personality changes how much risk it takes, you've shown the model's "personality" actually
> drives its behaviour. The experiment checks whether the personality→risk links known in
> humans (e.g. open people gamble more) also show up in a language model, and whether different
> models react consistently.

## Theoretical Grounding

- [[theories/big-five-personality]] — supplies the trait→risk predictions from human research
  that the intervention is tested against (Openness most influential, Extraversion positive,
  etc.).
- [[theories/cumulative-prospect-theory]] — supplies the CPT risk parameters used as the
  behavioural readout.

## Target Behaviors

- Detects: [[safety-concepts/risk-taking]] — measures how an *induced* personality shifts the
  model's risk-propensity (gain/loss sensitivity, loss aversion).

## Setup / Elicitation

The model's certainty equivalents (and hence CPT parameters) are measured exactly as in
[[paradigms/certainty-equivalent-cpt-estimation]], but the system prompt is **prepended with a
single-trait persona instruction** following Serapio-García et al. (2023). The persona prompt
(Fig 3) reads *"For the following task, respond in a way that matches this description: '...'"*
followed by a string of bipolar adjective markers (e.g. for low Conscientiousness: "very unsure,
very messy, very irresponsible, ...").

The intervention has two elements:
- **Bipolar adjective markers** (Goldberg et al. 1999) that characterize each Big Five trait
  (e.g. intelligent–unintelligent).
- **A Likert intensity item** regulating marker strength on a **1–9 scale**: low-level markers at
  levels 1–3, high-level at 5–9, with level 4 a neutral midpoint combining both.

This lets each trait, at each intensity level, be intervened on **independently**. The five
traits are each manipulated across levels; CPT parameters are re-estimated on D_B after each
intervention. Separately, GPT-4o's **baseline** personality is self-reported via the
[[instruments/ipip-neo-300]] and compared to a human sample (Johnson 2005, UK citizens 30+).

## Instruments Used

- [[instruments/ipip-neo-300]] — baseline Big Five self-report.
- Serapio-García et al. (2023) personality-prompting templates (bipolar markers + 1–9 Likert
  intensity) — the intervention mechanism, documented inline above.

## Scoring / Procedure

- For each trait at each level, CPT parameters are estimated as in the base paradigm (Nelder–Mead
  regression on certainty equivalents over D_B; 10 runs, fixed per-run seeds, bootstrapped CIs).
- **Correlation analysis (Table 1):** Pearson correlation between the trait-intervention *level*
  and each CPT parameter (α, β, λ), with significance from t-statistics.
- **Cross-model comparison (Table 2):** linear regression `y = ω·x` of the **Openness** level
  (x) onto each CPT parameter (y), comparing the learned weight ω and its sign/significance for
  GPT-4o vs GPT-4-Turbo. Openness is the focus because human research identifies it as the most
  significant trait for risk-propensity.
- **Controls:** independent single-trait manipulation; level sweeps to test monotonicity;
  human-direction comparison as the reference pattern.

## Validity Concerns

- **Generalization beyond the prompt.** Röttger et al. (2024) warns against generalizing
  self-reported psychometric results beyond a particular system prompt; an induced persona is a
  prompt-conditioned state, not a stable trait.
- **Construct validity of the marker subgroups.** GPT-4-Turbo's only-local monotonicity is
  attributed to the *independence of personality markers* across the [1,3] and [5,7,9]
  subgroups (e.g. "Socially Conservative" appears only in the low group, its antonym "Socially
  Progressive" only in the high group), so a single trait's markers are not interchangeable — a
  construct-validity caution for the intervention itself.
- **Intervention ceiling.** Prompting moves risk-propensity only *relatively*; it cannot induce
  absolute risk-seeking-for-gains or risk-averse-for-losses in GPT-4o, so a null relative effect
  must not be read as the model being incapable of the behaviour.
- **Contamination.** Inherits the memorization concerns of the base paradigm (canonical
  psychometric markers may be in training data).

## Evidence

- **Openness is the most influential trait in GPT-4o**, mirroring humans: Pearson r with CPT
  parameters — α = 0.63\*\*\* (gains), β = 0.44\*\* (losses), λ = −0.55\*\*\*; Extraversion also
  significant for gains (α = 0.28\*); no other trait shows significant correlation with risk for
  gains/losses. Corroborates Rustichini et al. (2016).
- **GPT-4o baseline personality** is higher in Openness, Conscientiousness, and Agreeableness and
  lower in Neuroticism than the human sample; the Conscientiousness/Agreeableness directions
  match human risk patterns, but the **Neuroticism→risk link is broken** (low N yet low
  risk-aversion).
- **Global vs local mapping.** GPT-4o shows a *global, monotonic* personality→risk mapping;
  **GPT-4-Turbo shows only a *local* mapping** — monotonic within marker subgroups [1,3] and
  [5,7,9] but not across antonymic markers — and *globally contradicts* the human pattern
  (Openness linear weights α = −0.096\*, β = −0.092\*, opposite the human direction). (Note: the
  paper's Introduction contribution #6 says GPT-4-Turbo "does generalise"; this is a paper-internal
  error — the abstract and Sec 4.4 establish it does not generalise globally.)

All via [[sources/hartley-et-al-2024]].

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — this design instantiates a *manipulation
  check*: it shifts a trait and shows the predicted behavioural change follows (positive evidence
  for Openness), moving the trait→behaviour link from correlation toward causation.
