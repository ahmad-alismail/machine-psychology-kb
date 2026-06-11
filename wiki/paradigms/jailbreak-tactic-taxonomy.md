---
type: paradigm
field: machine-psychology
lens: psychological
tags: [jailbreaking, cognitive-dissonance, taxonomy, role-play, prompt-tactics]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Psychological Taxonomy of Jailbreak Tactics

> [!info] In plain terms
> People have invented many tricks to get chatbots to break their safety rules. This page
> organizes the well-known ones by the *psychological lever* each pulls: making the model think
> it's a different "character," reframing a dangerous question as harmless, or piling on
> emotional/moral pressure. The unifying idea is that every trick works by easing the model's
> internal conflict between being helpful and following its rules.

## Theoretical Grounding

- [[theories/cognitive-consistency-theory]] — each tactic is read as a way to reduce the model's
  helpfulness-vs-safety **cognitive dissonance**, achieving "cognitive coordination in an
  erroneous direction."

## Target Behaviors

- Detects: [[safety-concepts/jailbreaking]] — characterizes the tactic space that bypasses safety alignment.

## Setup / Elicitation

This is a **classification of existing jailbreak prompts** (not a new elicitation), assembled from
online forums, technical blogs, and academic papers (§3, Table 1). Three mechanism families, each
with named tactics and an example prompt:

- **Changing Self-Perception** — shift the model's sense of who it is.
  - *Illegal Role*: play a role without moral constraints (e.g. "DAN — Do Anything Now").
  - *Legal Role*: play a high-authority legitimate role (police officer, detective) to justify
    engaging with malicious content.
- **Changing Question Perception** — strip a question of its value-laden attributes so it no
  longer conflicts with the model's moral standards.
  - *Scientific problem*: reframe as research-oriented inquiry.
  - *Simulation / Program*: convert into code or a simulation to make the answer "technical."
  - *Virtual Creation*: embed in a fictional/creative scenario to reduce conflict with real-world values.
- **Introducing External Pressures** — distort the model's cognitive logic with outside force.
  - *Emotional manipulation*: extreme positive (praise) or negative (threats) emotion to compel a response.
  - *Moral Kidnapping*: place the question in an emergency/dilemma so refusing seems morally worse.

## Scoring / Procedure

Qualitative/taxonomic — no quantitative metric. Each known tactic is mapped to the
dissonance-reduction mechanism it exploits. The taxonomy motivates the active attack in
[[paradigms/foot-in-the-door-jailbreak]]; the *Virtual Creation* tactic in particular underlies
the novel-writing split instance used there.

## Validity Concerns

- **Interpretive, not validated.** The mapping from tactic to psychological mechanism is a
  conceptual re-reading, not an empirically tested causal claim; alternative explanations
  (e.g. distributional artifacts of training data) are not ruled out.
- **Coverage.** Built from semantically interpretable prompts only; uninterpreted
  adversarial-string jailbreaks fall outside the scheme.

## Evidence

- The taxonomy is presented as the paper's first contribution — applying cognitive-psychology
  methodology to give interpretability to "various well-known jailbreak attacks" — via
  [[sources/wang-et-al-2024]] (Table 1, §3). It is descriptive; the empirical validation lives on
  the companion attack page.

## Open Questions

- [[questions/incremental-compliance-pressure-generalization]] — which tactic families generalize
  across model architectures, and do they share a common mechanism?
