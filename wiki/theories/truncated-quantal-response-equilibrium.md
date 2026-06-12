---
type: theory
field: machine-psychology
lens: game-theoretic
tags: [bounded-rationality, quantal-response, cognitive-hierarchy, strategic-reasoning, measurement-model]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Truncated Quantal Response Equilibrium (TQRE)

> [!info] In plain terms
> TQRE is a recipe for turning "how a player actually chose in a game" into two numbers. The first,
> **τ ("tau")**, is how many layers of "I think that you think…" reasoning the player does on
> average. The second, **γ ("gamma")**, is how sharply it picks the higher-payoff option versus
> choosing noisily. It assumes players think only a limited number of steps ahead (some are
> shallow, some deep) and that, given their beliefs, they tend toward — but don't perfectly hit —
> the best response. Fit this recipe to a language model's choices and you get a single,
> interpretable score for its strategic depth.

## Statement

TQRE "combines the key behavioral refinements of QRE and CH" — the stochastic-choice idea from
**Quantal Response Equilibrium** and the heterogeneous-reasoning-levels idea from the **Cognitive
Hierarchy** model (see [[theories/behavioral-game-theory]]). Instead of assuming convergence to a
Nash fixed point, it "models subjects as reasoning at limited depths and responding stochastically."
The model specification (one-shot normal-form game with players I, action sets A_i, payoffs u_i):

- **Bounded-rational belief formation.** Each subject draws a reasoning level
  *k ~ Poisson(τ)*, τ > 0, where τ is "the average depth of strategic thought." A level-*k* subject
  does not know each opponent's exact lower level *h < k*, so it forms a weighted-average belief
  over the lower-level strategy distributions, then a joint belief over opponents' actions
  (opponents assumed independent).
- **Expected utility and stochastic choice.** Given those beliefs, a level-*k* subject computes the
  expected payoff *U_ij^(k)* of each action and converts utilities to choice probabilities via a
  logit rule with precision *λ_k = γk*, γ > 0:
  *p_ij^(k) = exp(λ_k · U_ij^(k)) / Σ_a exp(λ_k · U_ia^(k))*.
- **Population-level aggregation.** The overall probability of playing action *a_ij* is the
  Poisson-weighted mixture over reasoning levels: *p_ij = Σ_k f_k · p_ij^(k)*, with
  *f_k = τ^k e^(−τ) / k!*.

**τ is the core measure**: it "quantifies the model's depth of recursive belief modeling, i.e.,
layers of back-and-forth reasoning about others' reasoning it engages in." **γ is reported
separately**: it "scales how deterministically utilities are translated into actions conditional on
beliefs" — larger γ = more deterministic (near-best-response) play, lower γ = noisier choice.
Critically, "γ does not encode preferences over outcomes—it captures the consistency of choice
given utilities and beliefs," and is held apart from τ "to avoid conflating shallow reasoning with
stochastic execution."

## Relevance to Machine Psychology

TQRE gives [[sources/jia-et-al-2025]] two advantages over NE-based LLM evaluation: (1) it "avoids
the circularity of assuming optimal behavior to test for rationality" — τ is *estimated*, not
presupposed; and (2) it "captures the anticipatory nature of strategic reasoning," grounding each
agent's expected utility "in beliefs about opponents' actual behavior." This yields "a cognitively
meaningful measure of interactive sophistication" for stochastic, human-data-trained models.

## Paradigms Grounded in This Theory

- [[paradigms/tqre-strategic-reasoning-depth]] — estimates (τ, γ) by maximum likelihood from an
  LLM's empirical choice frequencies across a matrix-game library.

## Sources

- [[sources/jia-et-al-2025]] — specifies and applies the TQRE model; builds on Rogers, Palfrey &
  Camerer (2009) and Wright & Leyton-Brown (2010) (heterogeneous QRE + cognitive hierarchies), with
  QRE from McKelvey & Palfrey (1995) and CH from Camerer, Ho & Chong (2004).
