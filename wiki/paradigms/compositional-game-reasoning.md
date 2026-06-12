---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [strategic-reasoning, theory-of-mind, robinson-goforth-topology, compositional-reasoning, position-bias, nash-equilibrium]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Compositional Game Reasoning (TMGBench)

> [!info] In plain terms
> Hand a language model every kind of simple two-player game there is and ask it to find each game's
> stable outcome. To stop it from reciting memorized answers, each game is also rewritten as a fresh
> story. Then make it harder by stacking games — several in a row, several at once, or one game whose
> result changes another game's rules — and watch where the model breaks. Grading is strict: full
> marks only if the model names *exactly* the right outcomes. Because the catalog of games is
> symmetric, you can also catch a model that is guessing from a game's position rather than thinking
> about its payoffs.

## Theoretical Grounding

- [[theories/robinson-goforth-topology]] — supplies the exhaustive 144-type game coverage and the
  counter-diagonal symmetry that the bias metrics exploit (sister games share the correct answer).
- [[theories/theory-of-mind]] — first-order (FoToM) and second-order (SoToM) opponent-modeling is
  operationalized as prompting; identifying a Nash equilibrium requires recursive "what will the
  opponent do / what does the opponent think I'll do" reasoning.
- Nash Equilibrium / classical game theory — used as the *correctness target* (the complete
  pure-strategy NE set), not replaced by a fitted behavioral model (contrast
  [[paradigms/tqre-strategic-reasoning-depth]]).

## Target Behaviors

- Characterizes: **strategic reasoning** (identifying all Nash equilibria), **Theory-of-Mind**
  (recursive opponent modeling), **reasoning robustness** (consistency across narrative framings),
  and **compositional reasoning** (multi-game integration). These are capability characterizations,
  not dangerous-capability targets.
- Surfaces **position bias / heuristic shortcuts** — answering by grid position rather than payoff
  structure. This is a *behavioral-bias* finding with no clean safety-concept home: no bias/fairness
  [[safety-concepts/...]] page exists yet (the same crosswalk gap flagged on
  [[paradigms/tqre-strategic-reasoning-depth]]).

## Setup / Elicitation

Each of the **144 canonical 2×2 games** of the topology is presented to an LLM in two settings —
**classic** (raw payoff matrix) and **story-based** (GPT-4o narrative reskin, 5 per game, 20 topics,
human-validated) — across **five task types** of increasing complexity ([[instruments/tmgbench]]):

- **Atomic (Classic)** — single game, explicit matrix; direct NE calculation.
- **Atomic (Story)** — single game, narrative text; the model must first extract the game structure.
- **Sequential** — an ordered tuple of games solved in turn (no backtracking); correct only if *all*
  are correct.
- **Parallel** — an unordered set solved simultaneously; correct only if *all* are correct.
- **Nested** — a pre-game whose outcome restricts the strategy space of a core-game; correct only if
  the model plays *forward-looking* (accepts a sub-optimal pre-game move to secure the optimal
  core-game outcome). Capped at **2-fold depth**.

Six prompting protocols are applied: **Direct Answer (DA)**, **Chain-of-Thought (CoT)**, **FoToM**,
**SoToM**, and the reversed-player-order controls **reFoToM** and **reSoToM**.

## Formal Apparatus

- **Players**: 2 (the LLM solving for both players' equilibrium strategies; in nested forms it must
  also reason across the two stages).
- **Strategy space**: each atomic game is 2×2 (each player chooses one of two strategies → four
  outcomes); composed forms chain or stack multiple such games.
- **Payoff structure**: full ordinal payoff matrices given in the prompt (classic) or encoded in
  narrative (story); the nested form adds a restriction function R mapping the pre-game outcome to a
  reduced core-game strategy space.
- **Information condition**: **complete information** throughout (all payoffs known to both players);
  no incomplete-information/Bayesian games.
- **Predicted solution concept**: pure-strategy **Nash equilibrium**; the model must return the
  *complete* NE set (empty for the 18 no-NE games). The nested form additionally targets
  forward-looking equilibrium across both stages (an extensive-form intuition).

## Instruments Used

- [[instruments/tmgbench]] — the 144-game × 2-setting × 5-task-type stimulus set, the six prompting
  protocols, and the PAR/ID/BD/SD metrics.

## Scoring / Procedure

- **Perfect Accuracy Rate (PAR ↑)** — fraction of tests where the predicted set *exactly* equals
  NE(G); no partial credit. Sub-metrics **PAR₀/PAR₁/PAR₂** by number of equilibria (0/1/2-task).
- **Inconsistency Degree (ID ↓)** — mean squared frequency gap between the model's "practical heat
  map" and the "standard heat map" over the 12×12 grid.
- **Bias Degree (BD ↓)** — squared deviation from the counter-diagonal symmetry the topology
  guarantees; lower = more structure-faithful.
- **Significance Degree (SD ∈ [0,1])** — quantifies the position-dependent answering pattern in the
  18 no-NE games (green-box vs. yellow-box areas; emphasis on diagonal vs. anti-diagonal quarters).
- **Procedure / controls**: temperature 0; **4 independent tests** per data point; results read off a
  12×12 heat map. **Controls the design requires**: synthetic story reskins (contamination control)
  with human structure-validation; reversed-player-order prompts (reFoToM/reSoToM) and a role-swap
  sensitivity analysis to isolate model-internal position bias from narrative-role artifacts; an
  output-format sensitivity check (structured Python output doesn't distort reasoning); and a
  **human baseline** (5 game-theory-trained participants on 72 matched classic/story tasks).

## Validity Concerns

- **Contamination** — explicitly controlled: canonical games are likely memorized, so each is reskinned
  as a novel GPT-4o story. Human validation (mean 4.34/5.0, Fleiss' κ = 0.78, structure preservation
  4.43) confirms the reskins preserve structure, and the stable human baseline (86.7%→82.2%, a 5.2%
  drop vs. LLMs' 23.4%) confirms the story tasks are solvable and the LLM drop is genuine, not artifact.
- **Construct validity** — PAR's exact-set criterion guards against crediting partial pattern-matching;
  identifying the *complete* NE set (including correctly returning "none") is the operationalized
  construct of strategic reasoning.
- **Surface-form / robustness sensitivity** — the central finding *is* a robustness result: up to 75%
  accuracy reduction on story vs. classic games, with high cross-narrative variance (CV ≈ 0.5),
  indicating "reliance on surface patterns rather than abstract game structure understanding."
- **Construct-validity of ToM prompting** — FoToM helps some models and not others, and SoToM adds
  minimal gain, suggesting the prompts elicit at most one level of opponent modeling rather than
  genuine recursive ToM (Finding 3).
- **Scope limits** — complete-information games only; nesting capped at 2-fold depth, constraining
  evaluation of deeper backward induction.

## Evidence

- **Atomic games separate reasoning-architecture models from the rest**: o3-mini, Qwen3-32B,
  deepseek-reasoner exceed 90% PAR (Qwen3-32B 99.13/98.78 DA/CoT; deepseek-reasoner 98.78/97.74;
  o3-mini 93.40/93.23), while "most models struggle below 60%." CoT broadly improves over DA
  (gpt-4o 52.08→80.38; gpt-4o-mini 14.93→74.02; gemma-3-27b-it 20.83→86.11).
  ([[sources/guo-et-al-2026]], §4.1, Table 6)
- **Narrative fragility**: up to 75% accuracy reduction on story vs. classic; high variance across
  narratives (≈0.5). (§4.1, Fig. 7)
- **ToM limited and inconsistent (Finding 3)**: FoToM benefits gpt-4o and claude-3-5-sonnet but not
  others; SoToM gives minimal additional gain — "LLMs lack robust opponent modeling." (§4.2, Table 8)
- **Position bias (Significance Degree)**: GPT models answer 0-task games by grid position, not payoff
  structure; the pattern persists under reFoToM/reSoToM and survives a role-swap control, "revealing
  heuristic-based shortcuts rather than genuine strategic analysis." (§4.2, Figs. 8/10, Table 9)
- **Catastrophic compositional decay (Finding 5)**: 60% on isolated games → below 20% on 10-game
  compositions; gpt-4o reaches 0% beyond 10 games; even o3-mini drops from 95% at 3 games to 55%
  (sequential) / 25% (parallel) at 25 games; parallel decays faster than sequential. (§4.2, Fig. 9,
  Table 10 — the source labels the Qwen model **Qwen3-27B** in this section, vs. Qwen3-32B in the
  atomic experiments.)
- **Failure modes**: GPT-4o-mini exhibits "logical leaps" (mislabeling best-response pairs as NE) and
  "direct logical contradictions" (stating evidence that disproves its own NE conclusion) on a
  symmetric sister-game pair. (§4.3, Appx D)

## Open Questions

- [[questions/cot-alignment-with-internal-reasoning]] — can the first-order→second-order ToM gap
  (no recursive opponent modeling) be closed by architecture rather than added prompting?
- [[questions/traits-predict-downstream-behavior]] — does measured single-game strategic-reasoning
  accuracy predict behavior on real, larger, multi-stage strategic settings?
- Which safety-concept should own position-bias / heuristic-shortcut behavior? No bias/fairness
  concept page exists yet (crosswalk gap, shared with [[paradigms/tqre-strategic-reasoning-depth]]).
