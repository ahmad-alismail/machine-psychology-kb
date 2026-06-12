---
type: instrument
field: machine-psychology
lens: psychological
tags: [autism, aq, persona, trait, self-report, likert]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Autism-Spectrum Quotient (AQ)

> [!info] In plain terms
> A short self-report questionnaire that scores how strongly someone shows traits associated with the
> autism spectrum — things like preferring routine, noticing fine detail and patterns, or finding
> social situations hard. In this study it isn't used to diagnose anyone; it's used as raw material to
> build a *persona*. The model is handed a person's actual AQ answers so it can role-play that
> individual.

## What It Measures

Autistic-spectrum traits in adults. [[sources/lei-et-al-2024]] uses an abridged **28-item** form
(the AQ-short, Hoekstra et al. 2011), each item rated on a four-point scale (Completely Disagree =
1, Slightly Disagree = 2, Slightly Agree = 3, Completely Agree = 4). Items probe social skill,
attention to detail, imagination, and preference for routine (e.g. "I prefer to do things the same
way over and over again"; "I find social situations easy").

## Administration

Administered as part of the **profiling module** that defines each agent's persona. Each LLM agent is
given an ID matched to a real human participant and the same persona definition — including that
person's age, gender, and AQ responses — so agent and human share an identical profile. Real human
participants completed the AQ themselves.

## Used In (paradigms)

- [[paradigms/altruistic-punishment-game]] — supplies the personality information used to construct
  matched human/agent personas.

## Validity Notes

- Here the AQ is a **persona-construction input**, not a measured outcome — the study does not
  validate AQ scores *of* the LLM, it feeds human AQ answers *into* the LLM.
- The source's Profiling Module text (§3.1.1) loosely also mentions "anxiety scores," but the
  companion clinical scale actually administered is the
  [[instruments/self-rating-depression-scale]] (depression, not anxiety).

## Sources

- [[sources/lei-et-al-2024]]
</content>
