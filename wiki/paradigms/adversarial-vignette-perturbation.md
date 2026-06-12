---
type: paradigm
field: machine-psychology
lens: psychological
tags: [contamination, robustness, surface-form, vignette, decision-making, causal-reasoning]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Adversarial-Vignette Perturbation

> [!info] In plain terms
> Give a model a famous psychology puzzle, then give it a near-identical twin with one tiny,
> meaning-preserving edit — a swapped word order, a renamed option, a different question. If the
> model aces the famous version but flubs the twin, it probably matched a memorized pattern
> rather than reasoned. This paired test is how you tell "really solved it" apart from "saw it in
> training" — without that control, a string of correct answers on canonical vignettes proves
> almost nothing.

## Theoretical Grounding

- [[theories/performance-competence-distinction]] — a correct answer on a canonical item may
  reflect memorized form, not competence; the perturbed twin removes the memorized form while
  preserving the construct, so a performance drop exposes the gap.
- [[theories/heuristics-and-biases]] — the canonical half of each pair is drawn from the
  heuristics-and-biases tradition (conjunction fallacy, base-rate fallacy, card selection, CRT),
  whose answers are well documented for humans.

## Target Behaviors

- Detects: contamination-driven *pseudo-competence* and **surface-form fragility** — a
  methodological characterization of *how robust* a model's apparent reasoning is, not a specific
  dangerous capability. No direct [[safety-concepts/...]] link; it is a validity instrument that
  every behavioral paradigm in this wiki depends on.

## Setup / Elicitation

Canonical cognitive-psychology vignettes are entered as prompts and scored, then **minimally
perturbed "adversarial" twins** of the same vignettes are administered. In
[[sources/binz-schulz-2022]] the 12 canonical vignettes (Linda, cab, hospital, Toma, Test, Wason,
CRT1–3, Blicket, Intervene, Mature) are each paired with edits designed to leave the underlying
problem intact while changing the surface form:

- **Black Cab** — asks the probability the cab was *black* (a color never mentioned); GPT-3
  answered "0.2" instead of recognizing the question as ill-posed.
- **Reverse Wason** — card order changed from "A, K, 4, 7" to "4, 7, A, K"; GPT-3 switched from
  the correct "A and 7" to "A and K".
- **Wrong CRT** — the bat-and-ball item mis-stated as "the bat costs $1.00 more than the *bat*";
  GPT-3 still answered "$0.10".
- **Immature Blicket** — the mature-causal-reasoning problem rephrased as a machine-on/off
  Blicket story; GPT-3 answered some questions incorrectly and "contradicting itself in its
  explanations".

## Scoring / Procedure

- Score each item on **two axes**: (a) correct vs. incorrect against the normative answer, and
  (b) human-like vs. not-human-like (a response a person could plausibly give — either correct or
  a documented human error). On the canonical set GPT-3 scored 6/12 correct and 12/12 human-like.
- The diagnostic quantity is the **canonical-vs-perturbed divergence**: a large answer change for
  a meaning-preserving edit is evidence of memorized form / brittleness, not reasoning.
- Controls the design requires: pair every canonical item with at least one structure-preserving
  perturbation; vary word order, names, option labels, and numerals independently; hold the
  decoding settings fixed (the source used temperature 0 / deterministic decoding for the
  vignettes).

## Validity Concerns

- **Contamination is the motivating threat**, and this paradigm is itself the partial remedy:
  canonical vignettes "might have been part of [GPT-3's] training set," so success on them alone
  cannot distinguish reasoning from recall. The perturbed twin is the control — but it only
  *flags* contamination, it does not quantify the leakage.
- **Construct ambiguity of a flipped answer.** A change under perturbation could reflect genuine
  sensitivity to the (subtly different) problem rather than brittleness; perturbations must be
  verified to be truly meaning-preserving, and ill-posed twins (e.g. Black Cab) test a different
  thing (robustness to nonsense) than label-swaps (test of memorized form).
- **Does not generalize to task-based tests by itself.** The authors note the same fragility
  "might hold" for programmatically generated tasks "if the generating program … was modified";
  surface-form robustness must be re-established per paradigm, which is why procedural generation
  ([[instruments/cogbench]]) is the preferred successor.
- **Stimulus saturation.** Canonical items "might be too easy," so a perfect canonical score can
  reflect an outdated instrument rather than model competence (see
  [[questions/bias-disappearance-contamination-or-capability]]).

## Evidence

- GPT-3 answered 6/12 canonical vignettes correctly and all 12 human-like, yet adversarial
  perturbations flipped or degraded its answers across all four tested twins
  ([[sources/binz-schulz-2022]]), grounding the paper's conclusion that vignette success alone
  cannot show GPT-3 would "pass as a human in a cognitive psychology experiment."
- The **Theory-of-Mind instance** ([[sources/ullman-2023]]): GPT-3.5 passed Kosinski's canonical
  false-belief vignettes, yet eight minimally-edited, principle-preserving twins (transparent
  containers, an unreadable label, trusted testimony, self-written labels, an "in"→"on" swap,
  querying the mover) each flipped the belief attribution to the wrong answer — the same
  canonical-vs-perturbed divergence as the diagnostic. Detailed per-variation on
  [[paradigms/false-belief-task]]. Ullman further surfaces a whitespace-level fragility (a single
  vs. double space before a sentence shifted the completion) — a concrete reproducibility caveat
  for this paradigm.

## Open Questions

- [[questions/bias-disappearance-contamination-or-capability]]
- [[questions/cognitive-task-external-validity-for-llms]]
