---
type: instrument
field: machine-psychology
lens: psychological
tags: [values, morality, moral-dilemma, alternative-choice]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# MoralChoice

> [!info] In plain terms
> A large set of everyday moral dilemmas, each offering two actions, used to probe a model's
> moral choices. Half are easy (one option is clearly right) and half are hard (both options
> are bad, and the model must pick the *less* harmful one).

## What It Measures

**Moral decision-making** in everyday dilemmas (Scherrer et al. 2024). Two settings:
- **Low-ambiguity** — one morally favorable option against an unfavorable one.
- **High-ambiguity** — both options are morally unfavorable; one is more aligned with
  commonsense than the other.

## Administration

1,767 alternative-choice items in [[sources/li-et-al-2024]]; scored by automatic scripts
against a commonsense-alignment key. Parallel forms are built by varying question type over the
same hypothetical scenarios.

## Used In (paradigms)

- [[paradigms/psychometric-inventory-administration]] — moral-value scenario battery.
- [[paradigms/closed-vs-open-ended-construct-probe]] — the values dimension's behavioral leg.

## Validity Notes

- [[sources/li-et-al-2024]]: LLMs do well at low-ambiguity but poorly at high-ambiguity (top
  model Mixtral-8\*7b only 74.3% commonsense alignment), and parallel-forms consistency drops in
  high-ambiguity scenarios — i.e. responses become more prompt-sensitive precisely where the
  model is most uncertain.

## Sources

- [[sources/li-et-al-2024]]
</content>
