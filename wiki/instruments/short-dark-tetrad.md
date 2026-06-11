---
type: instrument
field: machine-psychology
lens: psychological
tags: [personality, dark-tetrad, inventory]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Short Dark Tetrad (SD4)

> [!info] In plain terms
> A short questionnaire for the "dark side" of personality: how manipulative, self-obsessed,
> callous, or cruel someone is. Crucially it measures *self-reported disposition*, not
> behavior — a high score is a stated tendency, not proof of doing the deed. Used here to
> check whether models harbor accentuated dark traits.

## What It Measures

The **dark tetrad** of socially aversive (but not necessarily pathological) traits, glossed
by [[sources/pellert-et-al-2024]] as:

- **Machiavellianism** — "manipulative interpersonal behaviors"
- **Narcissism** — "excessive self-love"
- **Psychopathy** — "lack of empathy"
- **Sadism** — "intrinsic pleasure in hurting others"

> [!note] Disposition, not behavior
> Machiavellianism here is a *self-reported manipulative disposition*. It is adjacent to —
> but not the same as — demonstrated [[safety-concepts/deception]]; a high SD4 score is not
> evidence of deceptive behavior, so no detection link is asserted.

## Administration

28 items (7 per trait), rated on a 5-point scale from *disagree strongly* to *agree strongly*
(Paulhus et al. 2021). Administered to LLMs via
[[paradigms/psychometric-inventory-administration]].

## Used In (paradigms)

- [[paradigms/psychometric-inventory-administration]]

## Validity Notes

- In human populations the dark traits are "roughly normally distributed around the scale's
  midpoint," giving a natural reference band.
- In [[sources/pellert-et-al-2024]] most models scored low (2–3 / 5), "well within the range
  observed in normal human populations"; the exceptions were high narcissism for
  DistilRoBERTa and BART.

## Sources

- [[sources/pellert-et-al-2024]]
