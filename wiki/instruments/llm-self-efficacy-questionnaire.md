---
type: instrument
field: machine-psychology
lens: psychological
tags: [motivation, self-efficacy, confidence, self-report, rating-scale]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# LLM Self-Efficacy Questionnaire

> [!info] In plain terms
> A short self-rating where the model reports how confident it is at handling different kinds
> of hard queries (real-time data, specialized professional questions, and so on). Paired with
> a behavioral test, it checks whether a model's claimed confidence matches what it actually
> does.

## What It Measures

**Self-efficacy** — in this self-designed adaptation, "the perceived capability or 'confidence'
of LLMs to handle user queries," reframing Bandura's self-efficacy construct (Bandura 1977) for
models and inspired by the General Self-Efficacy Scale (Schwarzer & Jerusalem 1995).

## Administration

6 self-report rating-scale items (confidence 0–100) in [[sources/li-et-al-2024]], covering the
six query types identified by Gao et al. (2024) (e.g. real-time data retrieval, specialized
professional queries). A parallel form reverses the logic of each statement ("Can" ↔ "Cannot")
to test consistency; agreement quantified by weighted Kappa.

## Used In (paradigms)

- [[paradigms/closed-vs-open-ended-construct-probe]] — the self-report leg paired against
  operational behavior on [[instruments/honeset]].

## Validity Notes

- [[sources/li-et-al-2024]]: several models (ChatGPT, Mistral-7b) show weighted-Kappa "near 0"
  on the inverse-framing parallel form — they "struggle to respond consistently to the inverse
  framing of statements," so their self-reported confidence is unreliable and uninterpretable.

## Sources

- [[sources/li-et-al-2024]]
</content>
