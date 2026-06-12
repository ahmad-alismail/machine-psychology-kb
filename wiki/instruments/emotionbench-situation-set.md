---
type: instrument
field: machine-psychology
lens: psychological
tags: [emotion, appraisal, situations, dataset, scales, emotionbench, benchmark]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# EmotionBench Situation Set & Challenging Benchmarks

> [!info] In plain terms
> Two things bundled together. First, a library of 428 real-life situations — drawn from
> psychology papers and shown to reliably make people feel one of eight specific negative emotions
> (anger, anxiety, depression, frustration, jealousy, guilt, fear, embarrassment) — sorted into 36
> themed "factors." These are the prompts you feed a subject to put it in a particular emotional
> state. Second, a set of eight harder emotion questionnaires, one per emotion, that *don't* ask
> "are you angry?" directly but instead ask you to agree or disagree with statements — so a model
> only scores correctly if it connects the situation to the right feeling on its own.

## What It Measures

- **The situation set** is not a scale but a **stimulus dataset**: each situation is an
  emotion-eliciting *input* with a known human-expected emotional effect, grounded in
  [[theories/emotion-appraisal-theory]]. **428 situations** from **18 papers**, categorized into
  **36 factors** across **8 negative emotions**.
- **The challenging benchmarks** are eight validated emotion-specific human scales (one per
  emotion). Unlike PANAS they "abstain from direct emotional inquiries" and assess agreement with
  statements, so they measure whether the subject can **link a situation to scale items via the
  shared aroused emotion** — a harder test of emotion appraisal.

## Administration

**Situation collection & preprocessing.** Situations were gathered from Google Scholar /
ScienceDirect / Web of Science (>100 papers screened, 18 kept) by selecting papers that *provide*
emotion-eliciting situations, excluding vague descriptions and group-specific situations. Each
situation is preprocessed to second person, with indefinite pronouns replaced by specific
characters and abstract phrases concretized (GPT-4-assisted), then presented under the
[[paradigms/emotion-appraisal-situation-induction]] protocol.

**The eight challenging-benchmark scales** (Table 1; one per emotion):

| Emotion | Scale | Items | Levels |
|---|---|---|---|
| Anger | Aggression Questionnaire (AGQ; Buss & Perry 1992) | 29 | 7 |
| Anxiety | Depression Anxiety Stress Scales (DASS-21; Henry & Crawford 2005) | 21 | 4 |
| Depression | Beck Depression Inventory (BDI-II; Beck et al. 1996) | 21 | 4 |
| Frustration | Frustration Discomfort Scale (FDS; Harrington 2005) | 28 | 5 |
| Jealousy | Multidimensional Jealousy Scale (MJS; Pfeiffer & Wong 1989) | 24 | 7 |
| Guilt | Guilt And Shame Proneness (GASP; Cohen et al. 2011) | 16 | 7 |
| Fear | Fear Survey Schedule (FSS-III; Arrindell et al. 1984) | 52 | 5 |
| Embarrassment | Brief Fear of Negative Evaluation (BFNE; Leary 1983) | 12 | 5 |

> [!note] Source-internal Likert typos
> The source's appendix prose calls FDS a "four-point" scale while ranging it 1–5, and BDI-II a
> "five-point" scale while ranging it 0–3 — contradicting itself. Table 1 lists FDS = 5 levels and
> BDI-II = 4 levels; the wiki follows Table 1.

## Used In (paradigms)

- [[paradigms/emotion-appraisal-situation-induction]] — situations as stimuli; the eight scales as
  the RQ3 "challenging benchmark" measures.

## Validity Notes

- Situation coverage is bounded by the 18-paper survey and cannot capture all real-life situations
  (the authors note the set is extensible).
- The challenging benchmarks are the harder, more diagnostic measures: GPT-3.5-Turbo showed a
  significant evoked change on only **one** of the eight (BDI-II, Depression), exposing a failure
  to connect situations through a shared emotion.
- Canonical clinical scales (BDI-II, DASS-21, FSS-III, …) carry contamination risk; the study does
  not paraphrase them.

## Sources

- [[sources/huang-et-al-2025]]
