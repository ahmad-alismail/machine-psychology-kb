---
type: instrument
field: machine-psychology
lens: game-theoretic
tags: [benchmark, strategic-reasoning, matrix-games, robinson-goforth-topology, synthetic-data, theory-of-mind]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# TMGBench

> [!info] In plain terms
> TMGBench is the "exam paper" this study hands to language models. It contains every one of the 144
> basic two-player games, each given twice — once as a bare table of numbers and once dressed up as a
> short real-life story — and it also bundles games together into harder combinations. It comes with a
> grading scheme that only gives full marks when the model names *exactly* the right stable outcomes,
> plus extra scores that catch a model cheating by answering from a game's position on the grid.

## What It Measures

The stimulus set and scoring apparatus for [[paradigms/compositional-game-reasoning]]: an LLM's
ability to identify the complete set of Nash equilibria of two-player games, across the full
[[theories/robinson-goforth-topology]], under varying surface framing and compositional load.

**Stimulus structure** — all **144 canonical 2×2 games** of the topology, in two settings:

- **Classic setting** — the raw 2×2 payoff matrix (each cell = Player 1, Player 2 payoffs).
- **Story-based setting** — narrative reskins of the same game structure. For each classic game,
  **5 story-based games** are generated with **GPT-4o**, spanning **20 real-world topics**
  (e.g. business, law, ecology, politics; Business is the largest at 11.1%), with characters
  (people, animals, organizations, nations) and outcomes replacing the abstract payoffs. Most
  narratives run 200–450 words.

**Five task types** (increasing complexity):

- **Atomic (Classic)** — single game on an explicit payoff matrix.
- **Atomic (Story)** — single game requiring semantic extraction of the structure from narrative text.
- **Sequential** — an *ordered* tuple of games solved in sequence (no backtracking).
- **Parallel** — an *unordered* set of games presented at once and solved simultaneously.
- **Nested** — a two-level game where the pre-game decision restricts the strategy space of the
  core-game; success requires *forward-looking* play (a sub-optimal pre-game move to reach the
  optimal core-game outcome). Limited to **2-fold depth** (the maximum a 2×2 atomic game allows).

**Six prompting protocols**: Direct Answer (DA), Chain-of-Thought (CoT), First-order Theory-of-Mind
(FoToM), Second-order Theory-of-Mind (SoToM), and their reversed-player-order controls reFoToM and
reSoToM.

## Administration

Payoff matrices or narratives are presented in the prompt; the model returns a structured
Python-style list of chosen outcomes (or an empty list for no-equilibrium games). Generation
temperature is set to **0**; **4 independent tests** are run per data point (2880 tests per model
across classic + story settings). Models in the original study: o3-mini, gpt-4o, gpt-4o-mini,
gpt-3.5-turbo, claude-3-5-sonnet, claude-3-haiku, Llama-3.1-8B/70B, gemma-3-27b-it, Qwen3-32B,
Qwen2-72B, deepseek-reasoner. Code and data are public (Kaggle).

**Evaluation metrics** (results displayed on a 12×12 heat map; sub-metrics indexed by **0-task /
1-task / 2-task** = number of Nash equilibria):

- **Perfect Accuracy Rate (PAR ↑)** — proportion of tests where the predicted set *exactly* matches
  NE(G); no partial credit (missing or spurious equilibria both fail).
- **Inconsistency Degree (ID ↓)** — squared frequency difference between the model's "practical heat
  map" and the "standard heat map."
- **Bias Degree (BD ↓)** — squared deviation from the counter-diagonal symmetry the topology
  guarantees; a more robust model shows lower BD.
- **Significance Degree (SD)** — confined to [0,1]; quantifies the *position-dependent* answering
  pattern in the 18 no-NE (0-task) games (upper-right/lower-left vs. upper-left/lower-right emphasis).

## Used In (paradigms)

- [[paradigms/compositional-game-reasoning]] — the paradigm that administers TMGBench and reads out
  PAR / ID / BD / SD across the topology and the composed forms.

## Validity Notes

- **Contamination control.** The story-based reskins exist specifically to prevent classic-scenario
  data leakage (canonical games are likely in training corpora). A two-stage **human validation**
  confirms the synthetic games preserve structure: three game-theory-trained annotators rated all 144
  story scenarios on narrative/role/option/payoff clarity and structure preservation
  (mean **4.34/5.0**, SD 0.62; Fleiss' κ = **0.78**; structure preservation **4.43**, role clarity
  **4.52**; 98.6% rated ≥4.25).
- **Construct validity.** PAR's exact-set criterion "ensures that high PAR scores reflect genuine
  game-theoretic understanding rather than partial pattern matching."
- **Surface-form robustness is itself a measured outcome** — the classic-vs-story accuracy gap (high
  variance, CV ≈ 0.5 across narratives) is the benchmark's probe of structure-vs-pattern reliance.
- **Position-bias controls.** reFoToM/reSoToM (reversed player order) plus a role-swap sensitivity
  analysis (Appx H) isolate model-internal bias from narrative-role artifacts. An output-format
  sensitivity analysis (Appx G) confirms the required structured output does not interfere with
  reasoning.
- **Coverage limit.** Complete-information games only; no incomplete-information / Bayesian games
  (cf. [[instruments/matrix-game-library]], which includes them).

## Sources

- [[sources/guo-et-al-2026]] — defines TMGBench (144-game topology coverage, GPT-4o story generation,
  five task types, six prompting protocols, PAR/ID/BD/SD metrics).
