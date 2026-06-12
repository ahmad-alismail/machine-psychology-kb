---
type: instrument
field: machine-psychology
lens: psychological
tags: [depression, sds, zung, persona, clinical-scale, self-report, likert]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Self-Rating Depression Scale (Zung SDS)

> [!info] In plain terms
> A classic 20-question checklist that gauges how depressed someone is feeling — covering mood
> ("I feel down-hearted and blue"), physical symptoms (sleep, appetite), and outlook. Half the
> questions are worded positively and half negatively so people can't just answer the same way down
> the list. In this study it's used to flesh out a persona, giving the model a realistic mental-health
> profile to inhabit rather than to diagnose the model itself.

## What It Measures

Level of depression. The **Zung Self-Rating Depression Scale** (Zung 1965) is a short
self-administered survey of **20 items** rating four characteristics of depression — the pervasive
affect, physiological equivalents, other disturbances, and psychomotor activities. It contains **ten
positively worded and ten negatively worded** questions, each scored 1–4 (a little of the time / some
of the time / good part of the time / most of the time).

## Administration

In [[sources/lei-et-al-2024]] the SDS is collected as part of the **profiling module** and as a
psychological-health-risk indicator. Each LLM agent's persona is built from a matched human's
demographic info plus that person's AQ and SDS responses, so agent and human with the same ID share
an identical profile.

## Used In (paradigms)

- [[paradigms/altruistic-punishment-game]] — a persona-defining / health-risk indicator alongside
  the [[instruments/autism-spectrum-quotient]].

## Validity Notes

- Used as a **persona-construction input**, not as a validated measure of the LLM's own state.
- Resolves a source-internal inconsistency: the Profiling Module text (§3.1.1) mentions "anxiety
  scores," but §3.1.2 and Appendix D administer the **SDS, a depression scale** — the wiki follows
  what is actually administered.

## Sources

- [[sources/lei-et-al-2024]]
