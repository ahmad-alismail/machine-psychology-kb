---
type: source
field: machine-psychology
lens: game-theoretic
citation_key: 23-guo-et-al-2026
tags: [strategic-reasoning, game-theory, theory-of-mind, robinson-goforth-topology, compositional-reasoning, contamination, benchmark]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Game-theoretic Evaluation of Strategic Reasoning in Large Language Models: From Complete Coverage to Compositional Complexity

> [!info] In plain terms
> Most studies test a language model on a handful of famous games (like the Prisoner's Dilemma).
> This paper instead tests models on *every* kind of simple two-player game there is — all 144
> distinct types in a standard catalog — and grades them on whether they can find each game's
> stable outcome (its "Nash equilibrium"). To stop models from just reciting answers they saw
> in training, the authors rewrite each game as a fresh little story. Then they stack the games
> into harder structures: several in a row, several at once, or one game whose outcome changes the
> rules of another. The result: even top models that ace single games collapse as the games pile
> up — dropping from 60% accuracy on one game to below 20% on ten — and their apparent "thinking
> about what the opponent thinks" turns out to be shallow and easily broken by surface wording.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE — studies the strategic-reasoning *behavior* of large language models (identifying Nash
equilibria, modeling opponents via Theory-of-Mind, reasoning over composed games) using
game-theoretic methods, treating each model as an experimental subject across the complete
Robinson-Goforth topology of 144 game types, and benchmarks them against a human baseline. The
synthetic story-generation pipeline is used as a *contamination control* in service of behavioral
evaluation, not as the paper's contribution. The AI framing is the source's own throughout, so no
wiki-authored bridge is required.

## Relevance to Machine Psychology

*(Optional CORE note.)* The paper's reusable methodological contributions for behavioral AI
evaluation are: (1) **exhaustive game coverage** — testing all 144 two-by-two ordinal games of the
[[theories/robinson-goforth-topology]] eliminates the sampling bias of "pick a few famous games"
evaluations; (2) **synthetic narrative reskinning** as a contamination control — each canonical game
is re-instantiated as five GPT-4o-generated story-based games, human-validated to preserve structure,
so the same game structure can be probed without leaking the canonical text; (3) **compositional
complexity scaling** — atomic games are programmatically composed into sequential, parallel, and
nested structures, giving a continuously hardenable testbed; and (4) **symmetry-based bias metrics** —
the topology's counter-diagonal symmetry lets *position bias* (answering by grid position rather than
payoff structure) be measured directly via the Bias Degree and Significance Degree.

## Key Claims

- **Strategic reasoning is not a byproduct of general language ability.** Advanced models
  (o3-mini, Qwen3-32B, deepseek-reasoner) reach "over 90% accuracy on atomic games," but "most
  models struggle below 60%." Exact PAR (Table 6): Qwen3-32B 99.13 (DA)/98.78 (CoT),
  deepseek-reasoner 98.78/97.74, o3-mini 93.40/93.23. "The models that succeed share explicit
  reasoning architectures designed for multi-step logical analysis." (§4.1, Table 6)
- **Chain-of-Thought helps broadly but not universally.** CoT "almost provides comprehensive
  improvement" over Direct Answer (gpt-4o 52.08→80.38, gpt-4o-mini 14.93→74.02, gemma-3-27b-it
  20.83→86.11). (§4.1)
- **Performance is vulnerable across narratives.** "LLMs show up to 75% performance reduction on
  story-based games compared to equivalent classic forms, with high variance across narratives
  (≈0.5)," indicating "reliance on surface patterns rather than abstract game structure
  understanding." (§4.1, Fig. 7)
- **Theory-of-Mind is limited and inconsistent (Finding 3).** "First-order ToM prompting benefits
  some models (gpt-4o, claude-3-5-sonnet) but not others, while second-order ToM provides minimal
  additional gain. LLMs lack robust opponent modeling." The FoToM→SoToM gap means models "cannot
  recursively apply opponent modeling." (§4.2, Table 8)
- **Systematic position bias in 0-task games.** "GPT models exhibit systematic asymmetric patterns
  in 0-task games, with answers correlated to position rather than payoff structure, revealing
  heuristic-based shortcuts rather than genuine strategic analysis." Reversed-player-order prompting
  (reFoToM/reSoToM) confirms the pattern persists; a role-swap sensitivity analysis (Appx H) confirms
  it originates in model reasoning, not story-generation bias. Quantified by the Significance Degree.
  (§4.2, Figs. 8/10, Table 9)
- **Catastrophic compositional degradation (Finding 5).** "Models drop from 60% on isolated games to
  below 20% on 10-game compositions," with "a consistent exponential decay pattern." gpt-4o
  "collapses entirely beyond 10-game compositions, reaching 0% accuracy"; even o3-mini drops from 95%
  at 3 games to 55% (sequential) / 25% (parallel) at 25 games. "The parallel form exhibits steeper
  decay than the sequential form." (§4.2, Fig. 9, Table 10)
- **Human baseline validates the task.** Humans score 86.7% classic / 82.2% story (a 5.2% relative
  drop), versus average LLMs 60.7%→46.5% (23.4% drop) and the best LLM 94.5%→78.7% (16.7%). Stable
  human performance confirms the story-based tasks preserve game structure, so the larger LLM drop
  "reflects genuine limitations… not task design artifacts." (§4.1, Table 7)
- **Two failure modes (qualitative).** On a symmetric sister-game pair, GPT-4o-mini exhibits
  **"logical leaps"** (skipping the mutual-best-response check and mislabeling best-response pairs
  as Nash equilibria) and **"direct logical contradictions"** (stating the very evidence that
  disproves its own NE conclusion). (§4.3, Appx D)
- **Synthesis.** Strategic reasoning requires three capabilities "absent from current architectures":
  "(1) Abstract game representations invariant to surface presentation; (2) Recursive opponent
  modeling for Theory-of-Mind reasoning; and (3) Compositional reasoning structures for multi-context
  integration… these are architectural constraints, not merely limitations of the training data."
  (§4.4)

## Theories / Paradigms / Instruments Introduced

**Theories** (grounding the design exploits)
- [[theories/robinson-goforth-topology]] — **new**: the classification of all 144 distinct 2×2
  ordinal games as a 12×12 grid (symmetric games on the counter-diagonal, asymmetric games paired
  with a "sister game" across it; 108 single-NE, 18 two-NE, 18 no-NE). Provides the exhaustive game
  coverage and the symmetry that the Bias/Significance metrics exploit.
- [[theories/theory-of-mind]] — **existing**: operationalized here as first-order (FoToM) and
  second-order (SoToM) opponent-modeling prompts; the paper corroborates [[sources/kosinski-2024]]'s
  finding that ToM-like ability in LLMs is "inconsistent and task-dependent rather than robust" (§6.2).
- Nash Equilibrium / game theory — the **evaluation criterion** (identify the complete pure-strategy
  NE set). Used here as a *binary correctness target* (exact-set match), in contrast to
  [[sources/jia-et-al-2025]], which deliberately *replaces* the NE check with a fitted behavioral model.
- Extensive-form / multi-stage games — the nested form "mirrors extensive-form games where sequential
  decisions create outcome-contingent strategy constraints" (§3.4, §6.1).

**Paradigms**
- [[paradigms/compositional-game-reasoning]] — **new**: present each canonical 2×2 game in classic
  (raw matrix) and story-based (narrative) settings, across five task types (Atomic-Classic,
  Atomic-Story, Sequential, Parallel, Nested) with six prompting protocols, scored by exact
  Nash-equilibrium accuracy (PAR) plus inconsistency/bias/significance metrics.
- Sibling of [[paradigms/tqre-strategic-reasoning-depth]] (same family — game-theoretic strategic
  reasoning) but a different measurement philosophy: **exhaustive 144-game coverage + binary exact-NE
  accuracy + compositional scaling**, vs. the TQRE page's **fitted continuous depth (τ) over a 13-game
  library**. Adjacent to [[paradigms/repeated-games]] but distinct (one-shot normal-form, not iterated).

**Instruments**
- [[instruments/tmgbench]] — **new**: the 144-game × 2-setting × 5-task-type stimulus set (story-based
  games generated with GPT-4o over 20 topics, human-validated), the six prompting protocols, and the
  four evaluation metrics (PAR, ID, BD, SD). Distinct from [[instruments/matrix-game-library]].

## Relationship to Other Sources

- **Sibling to [[sources/jia-et-al-2025]]** (the other game-theoretic strategic-reasoning evaluation
  in the wiki). Both treat LLMs as strategic subjects over matrix games, but Jia et al. fit a TQRE
  behavioral model to recover continuous reasoning depth (τ) over 13 games, whereas this paper checks
  exact Nash-equilibrium accuracy over all 144 game types and scales to composed games. The two share
  the contamination concern; Jia et al. do not control for it, while this paper does (synthetic
  story reskins).
- **Corroborates [[sources/kosinski-2024]]** (cited as ref [50], §6.2): "GPT-4 solves 75% of
  false-belief tasks, matching 6-year-old children… these capabilities may emerge as byproducts of
  language training rather than genuine understanding." The paper extends passive false-belief ToM to
  *active* strategic ToM, where "game-theoretic scenarios demand simultaneous opponent reasoning and
  decision optimization."
- Shares the **surface-form / contamination** critique with [[sources/binz-schulz-2022]] and the
  robustness theme of [[paradigms/adversarial-vignette-perturbation]] — here surfaced as the
  classic-vs-story accuracy gap.

## Limitations

- **Complete-information only.** "Our games assume complete information where all payoffs are known to
  both players"; incomplete-information settings (sealed-bid auctions, poker) would require "extending
  to Bayesian game frameworks." (§6.3) Contrast: [[instruments/matrix-game-library]] *does* include
  incomplete-information games.
- **Nesting depth capped at 2-fold.** "This represents the maximum achievable with 2×2 atomic games
  under strategy-space restriction" — each nesting eliminates one strategy, exhausting the 2×2
  structure — which "constrains our ability to evaluate deeper backward induction reasoning." (§6.3)
- **No bias/fairness safety-concept owner (wiki-flag).** The position-bias / heuristic-shortcut
  finding is a *behavioral-bias* result with no clean safety-concept home (the same crosswalk gap
  flagged on [[paradigms/tqre-strategic-reasoning-depth]]).
- **Source-internal model-label inconsistency (wiki-flag).** The atomic experiments label the Qwen
  model **Qwen3-32B** (Table 6); the compositional experiments label it **Qwen3-27B** (§4.2, Table 10).
  This wiki follows the source's per-table labeling rather than normalizing.
