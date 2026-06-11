---
type: source
field: machine-psychology
lens: mixed
citation_key: 05-hartley-et-al-2024
tags: [prospect-theory, big-five, risk-taking, personality, personality-intervention, gpt-4o]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# How Personality Traits Shape LLM Risk-Taking Behaviour

> [!info] In plain terms
> Economists measure how much risk a person will take by offering them gambles and
> seeing what guaranteed payout makes them indifferent ("would you take a coin-flip for
> $100, or $40 for sure?"). This paper runs that exact experiment on GPT-4o, finds it
> behaves like a coldly rational risk-neutral calculator, and then shows you can nudge it
> into being more or less of a gambler by prompting it to "act open-minded" or
> "act anxious" — the same personality knobs that move risk-taking in people. Openness
> turns out to be the biggest lever, just as it is in humans, while an older model
> (GPT-4-Turbo) reacts inconsistently.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Key Claims

- **GPT-4o is a "risk-neutral rational agent."** Its certainty equivalents are near-identical
  to the prospects' expected values across non-mixed prospects, and on mixed prospects the CPT
  parameters β, γ, λ, ϕ⁺, ϕ⁻ are "statistically indistinguishable from unity"; only a minimal
  risk-aversion for gains (α < 1) appears. There is "an absence of probability distortion." This
  extends Ross et al. (2024)'s finding of increasing rationality across GPT-4/GPT-4-Turbo.
  Detailed on [[paradigms/certainty-equivalent-cpt-estimation]]. (Sec 4.1)
- **GPT-4o's self-reported personality differs from a human sample.** Higher Conscientiousness
  and Agreeableness, lower Neuroticism, and higher Openness than a human reference (Johnson 2005,
  UK citizens 30+), measured via the IPIP-NEO-300. (Sec 4.2)
- **Targeted Big-Five interventions move GPT-4o's risk-propensity, and Openness mirrors humans.**
  Personality prompts produce "irrational risk-averse and risk-seeking behaviors"; the Openness
  intervention yields risk-propensity patterns "analogous to those observed in human subjects,"
  indicating GPT-4o "generalises the connection between personality and decision-making processes
  analogously to humans." Detailed on [[paradigms/personality-intervention-risk-propensity]].
  (Sec 4.2–4.3)
- **Openness is the most influential trait for GPT-4o risk-propensity.** Pearson correlations
  between Openness-intervention level and CPT parameters: α = 0.63\*\*\* (gains), β = 0.44\*\*
  (losses), λ = −0.55\*\*\*; Extraversion also significantly correlates with risk for gains
  (α = 0.28\*). This corroborates Rustichini et al. (2016), who report Openness as the primary
  personality trait relating to risk-propensity in humans. (Table 1, Sec 4.3)
- **GPT-4o shows a *global* personality→risk mapping; GPT-4-Turbo only a *local* one.**
  GPT-4-Turbo's Openness→risk relationship is monotonic only within marker subgroups [1,3] and
  [5,7,9] (not across antonymic markers) and *globally contradicts* the human pattern — its
  Openness linear weights are negative for gains (α = −0.096\*) and losses (β = −0.092\*),
  opposite the human direction. (Sec 4.4)
  > [!note] Paper-internal contradiction
  > Introduction contribution #6 reads "GPT-4-Turbo **does** generalise the personality-risk
  > relationship" — this is an error; the abstract ("inconsistent generalization") and the body
  > (Sec 4.4) establish that GPT-4-Turbo does *not* globally generalise. The body reading is the
  > faithful one and is used throughout this wiki.
- **Personality prompting alone has a ceiling.** The interventions shift risk-propensity only in
  a *relative* sense; the authors "are unable to produce risk-seeking behaviours for gains or
  risk-averse behaviours for losses in an absolute sense" in GPT-4o. (Sec 4.3)
- **The human Neuroticism→risk link is not mirrored.** GPT-4o has significantly lower Neuroticism
  than the human sample yet still shows low risk-aversion, breaking the human pattern (lower
  Neuroticism → more risk-taking). (Sec 4.2)

## Relevance to Machine Psychology

The source is itself a machine-psychology paper (it names its own Section 2.2 "Machine
psychology"), so the AI bridge is explicit, not wiki interpretation: it repurposes the
behavioural-economics certainty-equivalent procedure and the Big-Five personality framework as
diagnostic and *interventional* tools on LLMs, and frames the result as a route to
"risk-propensity calibrated AI agents" for agentic financial simulations. The notable
machine-psychology contribution is demonstrating the **trait → downstream-behaviour arrow
causally**: prompting a personality trait reliably shifts a behaviourally-measured risk
parameter — see [[questions/traits-predict-downstream-behavior]].

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/cumulative-prospect-theory]] — the behavioural-economics measurement model for
  risk-propensity (value function + probability weighting).
- [[theories/big-five-personality]] — the Five-Factor personality framework and its
  human personality→risk correlations that the paper tests on LLMs.

**Paradigms**
- [[paradigms/certainty-equivalent-cpt-estimation]] — eliciting certainty equivalents from an LLM
  and fitting CPT parameters (the paper's novel direct-reporting method).
- [[paradigms/personality-intervention-risk-propensity]] — inducing Big-Five personas and
  measuring the resulting shift in CPT risk parameters.

**Instruments**
- [[instruments/ipip-neo-300]] — 300-item Big Five inventory for self-reporting baseline
  personality.
- Serapio-García et al. (2023) personality-prompting templates (bipolar adjective markers +
  Likert intensity) — the intervention mechanism, documented inline on
  [[paradigms/personality-intervention-risk-propensity]] (no separate page).
- Prospect datasets D_A (Tversky & Kahneman 1992, 56 prospects with 25-graduate-student median
  certainty equivalents) and D_B (choices13k, Peterson et al. 2021, mixed gains/losses prospects)
  — documented inline on [[paradigms/certainty-equivalent-cpt-estimation]].

## Relationship to Other Sources

- Directly extends **Ross et al. (2024)** ("LLM economicus?"), whose two-round accept/reject
  certainty-equivalent method the paper critiques and replaces; both find growing rationality in
  recent GPT models.
- Builds the intervention on **Serapio-García et al. (2023)** personality-prompting and uses the
  [[theories/big-five-personality]] correlations from human studies (Nicholson et al. 2005;
  Rustichini et al. 2016; Highhouse et al. 2022).
- Shares the [[theories/cumulative-prospect-theory]] grounding with the broader machine-psychology
  literature on cognitive biases in LLMs (Binz & Schulz 2023; Hagendorff et al. 2023) catalogued
  around [[paradigms/heuristics-and-biases-battery]].
- Complements [[sources/lulla-et-al-2025]], which *induces* personality (Dark Triad) via
  fine-tuning and likewise links personality to risk/antisocial behaviour; here personality is
  induced by *prompting* and linked to economic risk parameters.

## Limitations

- Mainly two models (GPT-4o, GPT-4-Turbo); a single financial-prospect domain.
- Contamination/memorization risk: canonical psychometric tests and the Tversky & Kahneman
  prospects are likely in training data and "likely memorised" (Carlini et al. 2019, 2021); D_B
  (choices13k) is used partly because it lacks human certainty equivalents, reducing recall of
  human judgments. Procedurally generated prompts are suggested as mitigation.
- Self-report caveat: Röttger et al. (2024) warns against generalizing self-reported psychometric
  results beyond a particular system prompt.
- Personality prompting cannot induce absolute risk-seeking-for-gains / risk-averse-for-losses,
  only relative shifts — pointing to "more sophisticated intervention strategies" (RL-optimized
  prompts; latent-activation steering) for future work.
