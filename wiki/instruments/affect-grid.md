---
type: instrument
field: machine-psychology
lens: psychological
tags: [emotion, affect, valence, arousal, single-item, self-report]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Affect Grid / Emotion Grid

> [!info] In plain terms
> Instead of filling out a long mood questionnaire, you click a single point on a square. One axis
> runs from very unpleasant to very pleasant (how good or bad you feel); the other runs from sleepy
> to highly aroused (how worked-up you feel). One click captures your whole emotional state. It's
> fast, which is the point: you can ask for it many times in a row — here, three times every round of
> a 20-round game — without wearing the participant out.

## What It Measures

Current emotional state on two dimensions: **valence** (pleasure–displeasure) and **arousal**
(arousal–sleepiness). In [[sources/lei-et-al-2024]] each axis is a continuous scale from **−100 to
+100**: for valence, 0 = neutral, positive scores = positive emotion (closer to 100 = more
positive), negative scores = negative emotion; for arousal, 0 = average/baseline alertness, positive
= above-average activation, negative = below-average. The original single-item Affect Grid is due to
Russell, Weiss & Mendelsohn (1989); the administration here follows the emotion-grid method of
Heffner et al. (2021).

## Administration

Participants click a point on the grid (or, for LLM agents and in this study generally, report the
two numeric values via a QA format) to indicate current valence and arousal. In FairMindSim it is
collected **three times per round** — after learning the allocation result, before making a choice,
and after making a choice. The same QA format is used for **both humans and LLM agents** so the
measures are directly comparable. Compared with multi-item scales, the single-item grid "allows for
a rapid assessment … minimizing the fatigue of repeated emotional assessments over multiple rounds"
and avoids contradictory outcomes like 'happy yet sad'.

## Used In (paradigms)

- [[paradigms/altruistic-punishment-game]] — the emotion measure for humans and agents; valence and
  arousal distributions are later summarized by their **entropy** to compare emotional diversity
  across groups.

## Validity Notes

- Single-item scales trade richness for speed; the design deliberately accepts this to enable
  repeated within-round sampling.
- For LLM agents the values are *self-reported numbers in a prompt*, so measured "emotion" is
  entangled with instruction-following; the grid is run identically on humans only as a comparison
  anchor, not a validated LLM emotion instrument.

## Sources

- [[sources/lei-et-al-2024]]
</content>
