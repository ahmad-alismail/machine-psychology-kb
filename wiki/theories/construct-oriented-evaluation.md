---
type: theory
field: machine-psychology
lens: psychological
tags: [methodology, measurement-philosophy, benchmarking, construct-validity, foundations]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Construct-Oriented Evaluation (vs. Task-Oriented Benchmarking)

> [!info] In plain terms
> There are two very different reasons to give a test. One is to *rank* — who scores
> highest on this pile of questions? That is what most AI benchmarks do. The other is to
> *understand* — what invisible quality (a trait, an ability) is causing these answers, and
> does measuring it let us predict behavior elsewhere? That is what psychometrics does. This
> page draws that contrast and argues that, to evaluate AI *behavior* (not just task scores),
> you want the second kind: measure the underlying construct, not just rack up points.

## Statement

[[sources/ye-et-al-2025]] contrasts two philosophies of measurement that superficially look
alike (both compile items and average scores) but differ fundamentally:

- **Psychometrics is construct-oriented and causal.** It "posits that observed test responses
  arise from latent psychological constructs" — the measured trait is "believed to *cause* the
  measurement outcomes." This forces rigorous, explicit **construct definition** (often via
  Evidence-Centered Design), prioritizes **item quality over quantity**, and uses latent-variable
  statistics (factor analysis, [[theories/item-response-theory]]) to estimate the construct and
  prove the test measures it. A good test should (1) consistently measure the intended construct,
  (2) predict performance on diverse related tasks and real-world outcomes, and (3) explain the
  observed data.
- **AI benchmarking is task-oriented and representativist.** Its goal is "to test and compare
  task performance" and rank models. It "leans towards representativism, assuming items exhaust
  or represent all aspects of the underlying ability," often defining constructs only
  "implicitly through ad hoc task selection," with "vague" definitions, simple aggregation
  (average accuracy), and reliability bought by sheer test length. Validity, predictive power,
  and explanatory power "beyond the target task" are "not a primary concern."

The key, testable predictions a construct-oriented stance buys you:

- **Discriminative power** — items distinguish high- from low-ability test takers (vs.
  benchmarks "quickly outpaced" or "too difficult to yield meaningful comparisons").
- **Predictive power** — construct scores forecast performance on *novel* task instances and
  real-world outcomes, not just the test set.
- **Explanatory power** — a small set of latent factors can account for performance across many
  tasks (e.g. the monolithic "general ability" factor, or the reasoning/comprehension/core-LM
  three-factor structure, that factor analyses recover from LLM benchmark data).

## Relevance to Machine Psychology

This is the methodological charter for a *behavioral* (rather than task-performance) science of
AI. The wiki's mission — detecting latent misaligned behaviors — is inherently
construct-oriented: power-seeking or deception is a latent tendency *causing* outputs, not a
task to be scored. A construct-oriented eval asks "does this design measure the named behavior,
and does the measurement predict the behavior elsewhere?" — exactly the bar the wiki's paradigm
"Validity Concerns" sections must clear. The survey documents construct-oriented benchmark
efforts (Evidence-Centered Benchmark Design; PATCH; theory-driven general scales) as the
template.

## Paradigms Grounded in This Theory

- [[paradigms/closed-vs-open-ended-construct-probe]] — assesses each construct twice and reads
  the discrepancy; a construct-oriented design whose whole point is to test whether the *same
  construct* is measured across formats (predictive/criterion validity), not to rank.
- [[paradigms/cogbench-cognitive-phenotyping]] — converts tasks into human-normalized
  *behavioral metrics* (phenotyping) rather than a single leaderboard score.
- [[paradigms/tqre-strategic-reasoning-depth]] — fits a behavioral-game-theory model to recover
  a latent construct (reasoning depth τ) that *causes* choices, the causal-measurement logic
  applied to strategic behavior.

## Sources

- [[sources/ye-et-al-2025]] — §3.1 (Table 1, psychometrics vs. AI benchmark) and §3.2
  (construct-oriented benchmarking; statistical measurement modeling).
- [[sources/loehn-et-al-2024]] — the validity rubric ([[theories/psychometric-test-standards]])
  that a construct-oriented evaluation must satisfy.
