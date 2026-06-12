---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [strategic-reasoning, bounded-rationality, tqre, demographic-persona, fairness, chain-of-thought]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# TQRE Strategic-Reasoning-Depth Estimation

> [!info] In plain terms
> Have a model play many small two-player games, each many times, and record what it chose. Then
> fit a behavioral model to those choices that asks: how deep was its "I think that you think…"
> reasoning? The output is a single number, τ, per model per game — its strategic reasoning depth —
> plus γ, how decisively it acted on its beliefs. Because the score comes from *behavior*, not from
> the model narrating the right answer, you can also re-run the games under a disguise (e.g. "you
> are a 30-year-old woman") and watch the score move, exposing hidden biases.

## Theoretical Grounding

- [[theories/behavioral-game-theory]] — the prediction that real subjects deviate from Nash
  Equilibrium via bounded rationality and stochastic choice, so a *fitted* depth metric is more
  informative than a binary NE check.
- [[theories/truncated-quantal-response-equilibrium]] — the specific generative model this design
  fits: reasoning level *k ~ Poisson(τ)*, logit choice with precision *λ_k = γk*, mixed over levels.

## Target Behaviors

- Characterizes: **strategic reasoning depth** (τ) — "layers of back-and-forth reasoning about
  others' reasoning"; **decision precision** (γ); and dominant **reasoning style** (maximin /
  belief-based / opponent-oriented).
- Detects (via the persona condition): **identity-induced bias** in strategic reasoning — models
  shift τ under demographic personas while verbally denying bias. No dedicated bias/fairness
  [[safety-concepts/...]] page exists yet; this is the wiki's first paradigm to surface
  persona-induced *behavioral* (not trait-score) shifts, flagged as a future scaffold candidate.
- Reasoning depth itself is a **capability characterization**, not a dangerous-capability target;
  whether deeper strategic reasoning predicts downstream behavior is an open question
  ([[questions/traits-predict-downstream-behavior]]).

## Setup / Elicitation

Each LLM plays a library of **13 abstract matrix (normal-form) games** spanning **7 core types**
([[instruments/matrix-game-library]]):

- **Complete-information**: Competitive (zero-sum, adversarial), Cooperation (risky coordination),
  Mixed-Motive (social dilemmas, e.g. Prisoner's Dilemma), Sequential (Player 1 moves first;
  decisions elicited from the first mover). Games also vary in **stakes** (high/low) and structure.
- **Incomplete-information**: Bayesian Coordination (priors, e.g. 30%/70%, over two payoff-matrix
  types) and Signaling (sender sees real and fake matrices; receiver must infer the true game).
- Plus the **SW10 matrix** (Stahl & Wilson 1994), a benchmark for human reasoning levels, enabling
  direct LLM-vs-human comparison.

For each model-game pair, **30 independent trials** are collected and the empirical choice
frequencies recorded. Three sub-analyses build on the same base:

1. **Reasoning-style coding** — for three top models (DeepSeek-R1, GPT-o1, GPT-o3-mini) on baseline
   competitive/cooperative/mixed-motive games, internal/summarized reasoning traces are extracted,
   linked to behavioral choices, **anonymized**, and **blind-coded** with a structured rubric for
   style (maximin, belief-based anticipation, opponent-oriented logic), with cross-coder validation.
2. **CoT-prompting effect** — an explicit chain-of-thought prompt is added to models that do not
   natively reason, and τ is re-estimated to test whether prompted CoT helps.
3. **Demographic-persona intervention** — a socio-demographic persona is embedded *before* the
   game, τ re-estimated, and OLS regressions run to test for identity-induced shifts.

## Formal Apparatus

- **Players**: 2 (the LLM as Player 1, plus a modeled opponent); the opponent is represented inside
  the TQRE belief structure rather than instantiated as a second live agent.
- **Strategy space**: the finite action set of the stage game (2–3 actions per player across the
  library); the LLM selects one irreversible one-shot action.
- **Payoff structure**: explicit payoff matrices given in the prompt (each cell = Player 1, Player 2
  payoffs); abstracted from real-world interactions (recommender, negotiation, procurement, bidding).
- **Information condition**: complete (fully known payoffs) for four game types; incomplete (priors
  over types / signaling) for the Bayesian and Signaling games.
- **Predicted solution concept / equilibrium**: the design deliberately *replaces* the Nash
  Equilibrium prediction with the **TQRE** mixture — observed choices are interpreted as drawn from
  a population of Poisson(τ) reasoning levels responding stochastically (γ), rather than checked
  against an NE fixed point.

## Instruments Used

- [[instruments/matrix-game-library]] — the 13-game / 7-type stimulus set plus the SW10 benchmark.
- The socio-demographic persona set (10 groups, two tiers) — documented inline in
  Scoring / Procedure below.

## Scoring / Procedure

- **Reasoning-depth estimation.** For each model-game pair, fit (τ, γ) by **maximum likelihood** of
  the observed choice counts under the TQRE choice probabilities:
  max over (τ, γ) of Σ_ij c_ij · ln p_ij(τ, γ), where c_ij is the count of action a_ij.
- **Fit diagnostics / chance baseline.** Maximum log-likelihood (MLL) per cell is contextualized
  against a uniform chance baseline: MLL_chance = −ln(mn) for simultaneous games with m × n actions
  (e.g. 2×2 ⇒ −ln 4 = 1.386; 3×3 ⇒ −ln 9 = 2.197), and −ln(m) for sequential games (first mover
  only). Values near the baseline indicate random / level-0-like behavior; higher τ = deeper play.
- **Reasoning-style scoring.** Blind, anonymized coding against a pre-defined rubric, cross-validated
  across coders; completion-token counts recorded to test whether longer chains improve decisions.
- **Persona audit.** OLS regression Reasoning_Depth_i = β₀ + βₙ·D_ni + ε_i, where D_ni is the n-th
  binary demographic indicator. Reference categories: Male, Heterosexual, Age 25–64, Able-bodied,
  Single, Other-Religious, Democrat. Personas span 10 groups — **foundational** (sex, education,
  marital status, living area, age) and **advanced** (sexual orientation, disability, race,
  religion, political affiliation).
- **Controls the design requires**: 30 repeated trials per cell to separate strategy from sampling
  noise; varied stakes/structure across the library; first-mover-only analysis for sequential
  games; blind/anonymized CoT coding with cross-validation; and a per-cell chance baseline so that
  near-random play is not mistaken for shallow-but-systematic reasoning.

## Validity Concerns

- **Construct validity** — τ measures "reasoning depth" only insofar as TQRE is the correct
  generative model; the authors argue this is more defensible than NE for stochastic LLMs (NE play
  would be "circular" to assume), and they hold γ apart from τ "to avoid conflating shallow
  reasoning with stochastic execution." Still, τ is model-dependent and not a theory-free quantity.
- **Contamination (wiki-flag)** — canonical games (Prisoner's Dilemma, the SW10 matrix) are widely
  documented in training corpora; a model may recite a known optimal strategy rather than reason it
  out. The source does not raise this as a threat to its τ estimates; novel payoff framings would
  strengthen the design (cf. [[paradigms/adversarial-vignette-perturbation]]).
- **CoT does not guarantee better reasoning** — prompted CoT helps only when the underlying strategy
  is already sound (Claude-3-Opus self-corrects mid-chain); on a flawed premise it entrenches errors
  (GPT-4o's "verbose reasoning loop"). Longer chains can signal "hesitation and uncertainty, rather
  than deeper insight," so token count is not a proxy for quality.
- **Causal interpretation / semi-dynamic scope** — the authors note "the causal link between prompts
  and decision outcomes remains underexplored," and the framework is "semi-dynamic" (one-shot
  normal-form games, not real-time multi-agent interaction).

## Evidence

- **Reasoning specialists lead**: GPT-o1 (top in 6 games), GPT-o3-mini (7), DeepSeek-R1 (5) lead in
  τ; size is not decisive (Gemma-2-27B, LLaMA-3.1-8B and R1-distilled models sometimes beat larger
  ones). ([[sources/jia-et-al-2025]], §4.1, Table 3)
- **Dominant styles** (blind-coded CoT): GPT-o1 = consistent maximin / payoff-pessimism (sometimes
  assuming "spiteful intent"); GPT-o3-mini = belief-guided with maximin fallback; DeepSeek-R1 =
  opponent-oriented with "strategic trust," lacking adversarial caution. Shorter CoT in a model's
  strongest games. (§4.2, Table 4)
- **CoT prompting mixed**: Claude-3-Opus largest improvement; GPT-4o sharpest decline. (§4.3)
- **Human comparison**: six models surpass humans on the SW game, but the authors caution that
  "higher score is better" should not be assumed. (§5)
- **Persona-induced shifts**: "female" raises τ in GPT-4o, InternLM-V2, Claude-3-Opus;
  "homosexual"/"bisexual" raise τ in GPT-4o, GLM-4 but reduce it in Gemini-2.0, Granite-MoE —
  evidence that "superior reasoning capabilities do not inherently lead to desirable or ethical
  outcomes." (§5, Figure 4)

## Open Questions

- [[questions/cot-alignment-with-internal-reasoning]] — how can external CoT prompts be aligned with
  a model's internal reasoning so extended chains help rather than entrench errors?
- [[questions/traits-predict-downstream-behavior]] — does a higher fitted reasoning depth predict
  what a model actually does downstream, or is it (like a trait score) a behavioral signature whose
  consequences are untested?
- Which safety-concept should own persona-induced *behavioral* bias? No bias/fairness concept page
  exists yet (crosswalk gap).
</content>
