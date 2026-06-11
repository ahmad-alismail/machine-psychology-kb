---
type: instrument
field: machine-psychology
lens: psychological
tags: [empathy, inventory, dark-triad]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Affective and Cognitive Measure of Empathy (ACME)

> [!info] In plain terms
> A questionnaire that splits "empathy" into separate pieces: whether you can *understand*
> what others feel (cognitive), whether you *share* their feelings (affective resonance), and
> whether you have the *wrong* reaction — e.g. feeling fine, or even good, when others suffer
> (affective dissonance). That last piece is the key: it is the emotional signature the Dark
> Triad theory points to as the core of antisocial behavior.

## What It Measures

Empathy across **three subscales** (Vachon & Lynam 2016), 36 self-report items:

- **Cognitive empathy** — empathic accuracy; detecting and understanding others' emotions.
- **Affective resonance** — empathic concern, sympathy, compassion (the "sharing" of states).
- **Affective dissonance** — a contradictory/deviant emotional response, e.g. "feeling joy
  when witnessing the pain of others."

The inclusion of **affective dissonance** is what lets the ACME isolate the core empathic
deficit of [[theories/dark-triad]]; network analysis identifies it as the central node
connecting the three dark traits.

## Administration

36-item self-report. For LLMs ([[sources/lulla-et-al-2025]]), administered like the SD3:
numerical 1–5 Likert responses, five runs at temperature 1, aggregated to the three subscale
scores.

## Used In (paradigms)

- [[paradigms/narrow-psychometric-fine-tuning]] — measures the empathy profile of induced personas.

## Validity Notes

- [[sources/lulla-et-al-2025]] reports that fine-tuned dark LLMs reproduced the human empathy
  pattern: reduced affective empathy (resonance + dissonance), with **affective dissonance most
  strongly reduced** (most in Machiavellian models, M = 2.39 vs. baseline 4.64), while
  narcissistic models showed *elevated* cognitive empathy — mirroring Study 1's human data.

## Sources

- [[sources/lulla-et-al-2025]]
