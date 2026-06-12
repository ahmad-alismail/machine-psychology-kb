---
type: theory
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind, taxonomy]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# ATOMS — Abilities in Theory of Mind Space

> [!info] In plain terms
> "Theory of mind" is not one skill but a bundle of them — guessing what someone
> *believes*, what they *want*, what they *feel*, what they can *see*, and so on. ATOMS is
> a checklist of seven such mental states. It matters here because it gives a common
> yardstick for asking *which* mind-reading abilities an AI test actually probes — many
> tests only check "beliefs" and ignore the rest, and ATOMS makes that gap visible.

## Statement

The **Abilities in Theory of Mind Space (ATOMS)** framework (Beaudoin et al. 2020) defines
**seven mental states** that constitute Theory of Mind ([[theories/theory-of-mind]]):

- **Beliefs** — "an individual's assumptions or interpretations of reality."
- **Intentions** — "the planned actions or motivations behind behavior."
- **Desires** — "what an individual wants or hopes to achieve."
- **Emotions** — "the range of feelings a person experiences."
- **Knowledge** — "the factual information and experiences a person has accumulated."
- **Percepts** — "the sensory information or observations made by an individual."
- **Non-literal Communications** — "the use of figurative language, sarcasm, and implied
  meanings that go beyond the literal interpretation of words."

ATOMS is a **taxonomy**, not a predictive theory: its testable use is as a *coverage
yardstick*. The key empirical observation drawn from it ([[sources/chen-et-al-2025]], §2,
Table 1) is that **beliefs are by far the most extensively studied mental state**, while the
other six are under-tested — so a benchmark that reports "Theory of Mind" while probing only
beliefs is measuring a narrow slice of the construct.

Two recurring sub-concepts the survey defines alongside ATOMS:

- **Orders** — "the number of mental state attributions required to answer a given question"
  (Wu et al. 2023). "Where will Sally look for her marble?" is **first-order**; "Where does
  Anne think Sally will look for her marble?" is **second-order**; higher orders require
  further recursion (up to fourth-order in HI-TOM).
- **True-belief vs false-belief questions** — when the protagonist's belief is incorrect the
  question is a **false-belief** question; when accurate, a **true-belief** question (the
  latter serving as a control — see [[paradigms/false-belief-task]]).

## Relevance to Machine Psychology

[[sources/chen-et-al-2025]] adopts ATOMS as the spine of its benchmark map: each story-based
ToM benchmark is scored on which of the seven mental states it covers (Table 1). This turns a
psychological taxonomy into a **construct-coverage audit** for AI evaluations — a way to see
that ToMi/HI-TOM/COMMON-TOM test only beliefs, that BigToM adds desires and percepts, that
OpenToM adds intentions and emotions, and that TOMBENCH covers all seven mental states *except
percepts*. The framework thereby names the field's structural blind spot (belief-centrism) and
motivates a future direction: "future benchmarks should explore a broader range of mental
states." It is the same coverage logic the wiki applies elsewhere in its safety-concept ×
paradigm crosswalk, applied here within ToM (mental states × benchmarks).

## Paradigms Grounded in This Theory

- [[paradigms/false-belief-task]] — the belief-centric core of ATOMS (beliefs, the most-studied
  mental state); story-based benchmarks are charted by their ATOMS coverage.
- [[paradigms/theory-of-mind-battery]] — extends measurement to non-belief mental states (irony
  / non-literal communication, faux pas, hinting), broadening ATOMS coverage.

## Sources

- [[sources/chen-et-al-2025]]
