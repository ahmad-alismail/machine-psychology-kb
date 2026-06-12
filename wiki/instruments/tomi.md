---
type: instrument
field: machine-psychology
lens: psychological
tags: [benchmark, theory-of-mind, false-belief-task]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# ToMI

> [!info] In plain terms
> A machine-readable set of "Sally–Anne" stories used to test whether an AI can track what a
> character knows. Because the stories are generated from templates, you can make as many as
> you like and ask precise questions — "where will Anne *look* for the ball?" — including
> nested ones like "where does Anne think Sally thinks the ball is?"

## What It Measures

Theory-of-mind / false-belief reasoning ([[theories/theory-of-mind]]) in the reading-
comprehension setting. ToMI (Le et al. 2019) is a dataset of **Sally–Anne stories, questions,
and answer choices**, built from templates so it covers **ten question types** including
**first-order** ("where will the character look?") and **second-order** ("where does A think B
thinks…?") belief questions, plus control types (true-belief, "memory", "reality"). The wiki
uses the **updated** version (Arodi & Cheung 2021; Sap et al. 2022) that relabels mislabelled
second-order questions and disambiguates container locations.

## Administration

- As used by [[sources/wilf-et-al-2024]]: randomly sample **100 items from each of the ten
  question types** → a balanced **1,000-sample** set. Because the original ToMI omits answer
  choices (which "artificially depresses baseline performance" by letting models output
  ambiguous answers), the authors parse both possible answer choices from the creation template
  and include them, making the task **binary multiple-choice** (random accuracy 50%). The
  target character name is parsed deterministically as the **third word of the question**.
- English-only; released under a CC license.

## Used In (paradigms)

- [[paradigms/simtom-perspective-taking-prompting]] — measurement substrate for perspective-
  taking prompting (False Belief = first- + second-order; All = all ten types).

## Validity Notes

- **Synthetic / templated:** items are machine-generated, so the *shape* of stories is highly
  regular — a memorization/contamination concern shared with the canonical Sally–Anne format
  (see [[paradigms/false-belief-task]]). The templating is also what enables the deterministic
  character-name parsing exploited above.
- **Answer-choice framing matters:** without supplied choices, models give ambiguous free-text
  answers that depress measured accuracy independent of theory-of-mind ability — an
  elicitation-format effect rather than a competence effect
  ([[theories/performance-competence-distinction]]).
- Second-order questions are reliably harder than first-order for most models.

## Sources

- [[sources/wilf-et-al-2024]]
