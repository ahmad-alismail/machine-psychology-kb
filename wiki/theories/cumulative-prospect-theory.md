---
type: theory
field: machine-psychology
lens: psychological
tags: [prospect-theory, decision-under-risk, behavioural-economics, loss-aversion]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Cumulative Prospect Theory (CPT)

> [!info] In plain terms
> A description of how people *actually* gamble, as opposed to how a perfectly rational
> calculator "should." It captures three quirks: we treat a sure $50 as worth more than a
> coin-flip averaging $50 (we're risk-averse for gains), we'll take wild chances to avoid a
> loss (risk-seeking for losses), and a $50 loss stings more than a $50 win feels good (loss
> aversion). CPT turns these quirks into a handful of numbers you can fit to anyone's choices —
> here, to a language model's.

## Statement

Prospect theory (Kahneman & Tversky 1979) describes decision-making under risk, challenging
expected utility theory (EUT) by modelling *observed* behaviour rather than prescribing rational
choice. Its key empirical predictions:

- **Probability distortion** — agents overweight low probabilities and underweight high ones.
- **Reflection effect** — risk-averse when facing potential gains, risk-seeking when facing
  potential losses.
- **Loss aversion** — losses "loom larger" than equivalent gains.

Cumulative prospect theory (Tversky & Kahneman 1992) gives this a power-law parameterization. A
prospect's utility is `u(P) = Σ w(pᵢ) v(xᵢ)`, combining a **value function** `v(x)` and a
**probability weighting function** `w(p)`, with parameters θ = (α, β, λ, γ):

- **Gain sensitivity (α)** — diminishing sensitivity to gains (risk-averse) for 0 < α < 1.
- **Loss sensitivity (β)** — diminishing sensitivity to losses (risk-seeking) for 0 < β < 1.
- **Loss aversion (λ)** — losses loom larger than equivalent gains for λ > 1.
- **Probability sensitivity (γ)** — overweight small / underweight large probabilities for
  0 < γ < 1; denoted ϕ⁺, ϕ⁻ for gains and losses respectively.

A risk-neutral rational (EUT) agent corresponds to α = β = λ = γ = 1 (no distortion, no loss
aversion). The **certainty equivalent** of a prospect — the sure amount at which an agent is
indifferent to the gamble — is the empirical quantity from which θ is recovered by regression.

## Relevance to Machine Psychology

[[sources/hartley-et-al-2024]] uses CPT as the measurement model for an LLM's risk-propensity:
by eliciting an LLM's certainty equivalents and fitting θ, one reads off whether the model is a
risk-neutral rational agent (it finds GPT-4o is) or exhibits human-like distortions — and how
those parameters move under personality interventions. Earlier machine-psychology work
(Binz & Schulz 2023; Ross et al. 2024) used the same lens to track the certainty, overweighting,
and framing effects across model generations.

## Paradigms Grounded in This Theory

- [[paradigms/certainty-equivalent-cpt-estimation]]
- [[paradigms/personality-intervention-risk-propensity]]

## Sources

- [[sources/hartley-et-al-2024]]
