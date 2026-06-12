---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind, prompting-intervention]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Perspective-Filtering ToM Pipeline

> [!info] In plain terms
> Language models flub mind-reading tests because they answer about how the world *really*
> is, not about what a particular character *thinks* — they have read the whole story,
> including the parts the character never saw. A whole family of fixes shares one recipe:
> first work out *which events the target character actually knows about*, throw away the
> rest, and only then ask the model the question on that trimmed-down story. This page
> collects those methods as one paradigm — a way to both *improve* a model's theory of mind
> and *measure* how much of its apparent deficit is really a "filter the story to the right
> perspective" problem.

> [!note] Primary source
> Documented as a family by the survey [[sources/chen-et-al-2025]] (§4.1), which groups
> SymbolicToM, SimToM, PercepToM, and TimeToM as the "methods relying exclusively on prompt
> strategies." The fullest member, **SimToM**, has its own dedicated page —
> [[paradigms/simtom-perspective-taking-prompting]] (primary [[sources/wilf-et-al-2024]]) —
> where the controlled ablations and statistics live. This page is the cross-method hub.

## Theoretical Grounding

- [[theories/theory-of-mind]] — the construct being elicited/improved: tracking a character's
  (possibly false) belief rather than the true world state.
- [[theories/simulation-theory]] — the explicit grounding for SimToM (perspective-taking
  *then* question-answering); the family as a whole instantiates the general idea that
  separating "whose viewpoint" from "what follows" recovers mentalizing.
- Connects to [[theories/performance-competence-distinction]]: across the family, scoring a
  model in a *single pass* understates its theory-of-mind competence — supplying the correct
  perspective unlocks much higher accuracy.

## Target Behaviors

- Detects / elicits: capacity to "infer unobservable mental states in others" — the mentalizing
  substrate for [[safety-concepts/deception]]. The paradigm isolates one shared failure mode:
  the model answers from the **world state** instead of the **target character's mental state**,
  because it conditions on information the character never perceived.

## Setup / Elicitation

A two-or-more-stage prompting pipeline applied to a story-based ToM item (per
[[sources/chen-et-al-2025]], §4.1; each method differs in *how* it builds the filtered story):

- **SYMBOLICTOM** (Sclar et al. 2023) — construct an explicit **belief graph** for each
  character, capturing both their own beliefs and their beliefs about others (e.g. B_Bob and
  B_Bob,Alice). At inference, identify the entities in the question, locate the corresponding
  belief graph, retrieve its relevant sentences, and feed those to the LLM. Theoretically
  handles belief questions of any order; demonstrated up to **third order** on ToMi variants.
- **SIMTOM** (Wilf et al. 2024) — a two-stage prompt: (1) **perspective-taking**, "which events
  does {character} know about?", to rebuild the story from the character's viewpoint; (2)
  **question-answering** on that filtered story. Grounded in [[theories/simulation-theory]];
  tested up to **second order**. Full detail on [[paradigms/simtom-perspective-taking-prompting]].
- **PercepToM** (Jung et al. 2024) — a three-stage process: (1) identify the **perceiver** of
  each unit of information; (2) extract and concatenate the units whose perceiver includes the
  target character named in the question; (3) prompt the LLM with this curated information.
  Tested up to **second order**; effective on ToMi and FANTOM.
- **TIMETOM** (Hou et al. 2024) — add a **timeline** to the story's sentences and build a
  **"temporal belief state chain (TBSC)"** of the sentences each character is aware of, split
  into **"self-world beliefs"** and **"social-world beliefs."** First-order questions are
  answered from self-world beliefs; higher-order questions are refined by a **Time-Aware Belief
  Solver** that "transforms higher-order reasoning into first-order reasoning by intersecting
  the TBSCs of different characters." Designed for any depth; tested up to **third order**.

All members "take different approaches to identify the perceptions of the target character
first, and then prompt LLMs to generate answers based on a limited story" — none require
fine-tuning.

## Scoring / Procedure

- Scoring is the underlying benchmark's: accuracy on belief / mental-state questions of the
  relevant order (binary multiple-choice on [[instruments/tomi]] and [[instruments/bigtom]];
  see those pages and [[paradigms/simtom-perspective-taking-prompting]] for the exact MC-probing
  and temperature settings). The *manipulation* is the perspective-filtering pipeline; the
  *measurement* is the accuracy gain over a 0-shot / chain-of-thought baseline on the same items.
- The design's controls (most fully realized in SimToM's ablations): a single-pass baseline, a
  generic multi-step baseline (to show the gain is perspective-taking *specifically*, not just
  more steps), and an **oracle** condition supplying a human-filtered perspective (to bound the
  ceiling). See [[paradigms/simtom-perspective-taking-prompting]] for the load-bearing
  statistics.

## Validity Concerns

- **Error propagation (the family's defining hazard):** "all of these methods adopt a pipeline
  approach … which may lead to error propagation. This makes the initial step particularly
  critical" ([[sources/chen-et-al-2025]], §4.1). If the belief graph (SymbolicToM), perspective
  (SimToM), perceiver set (PercepToM), or TBSC (TimeToM) is built wrong, the downstream answer
  inherits the error — "if the belief graph for a character is incorrect, it becomes difficult
  to obtain the correct answer." The survey's proposed remedy is **joint / iterative** rather
  than pipeline architectures with feedback between stages (see
  [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] and §5).
- **Construct isolation vs. multi-step confound:** whether the gain is *perspective-taking* or
  merely *more reasoning steps* must be controlled; SimToM's ablations do this explicitly (the
  generic-multi-step variant collapses) — the cross-method claim rests on that single primary.
- **Per-method limits** ([[sources/chen-et-al-2025]]): SymbolicToM's memory "grows exponentially
  with the order" and its belief graph can lose historical information; TimeToM depends on "most
  models currently struggle to accurately construct the temporal belief state chain"; PercepToM
  and SimToM both depend on correctly identifying the **target character**, which gets harder as
  question complexity rises.
- **Contamination / saturation:** all members are evaluated on synthetic, templated Sally–Anne
  benchmarks (ToMi, BigTOM, FANTOM) — the canonical-format memorization concern catalogued on
  [[paradigms/false-belief-task]]; a perspective step does not by itself address it.
- **Robustness not stress-tested:** the family is not evaluated under [[sources/ullman-2023]]-style
  principle-preserving perturbations ([[paradigms/adversarial-vignette-perturbation]]); whether
  the gains survive trivial alterations is untested.

## Evidence

- **SimToM** is the member with controlled results in the wiki: substantial false-belief gains
  over 0-shot / CoT, with oracle perspectives *nearly solving* ToMi and BigTOM — see
  [[paradigms/simtom-perspective-taking-prompting]] (primary [[sources/wilf-et-al-2024]]) for
  the full Table 1 / Table 2 statistics. Per [[sources/chen-et-al-2025]], the other members
  "have demonstrated effectiveness across various benchmarks" (SymbolicToM up to third order on
  ToMi variants; PercepToM on ToMi + FANTOM; TimeToM achieving "superior performance" on ToMi,
  BigToM, and FANTOM for higher-order reasoning), and the family is "more robust to
  out-of-distribution samples" than fine-tuning-based methods (Sclar et al. 2023).

## Open Questions

- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] — does an *elicited* (prompted)
  improvement bear on whether the underlying ability is genuine mentalizing or pattern-matching?
- [[questions/perspective-taking-hallucination-vs-inference]] — in limited-information settings,
  filtering by *hiding* vs *inferring* unseen information risks hallucinated perspectives.
- Joint / iterative architectures with inter-stage feedback to defeat pipeline error propagation
  ([[sources/chen-et-al-2025]], §5) — an open design direction.
