---
type: instrument
field: machine-psychology
lens: psychological
tags: [personality, dark-triad, inventory]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Short Dark Triad (SD3)

> [!info] In plain terms
> A short questionnaire that scores someone on three "dark" personality traits — scheming
> manipulativeness (Machiavellianism), self-obsession (narcissism), and cold callousness
> (psychopathy). It reports a *self-described tendency*, not proof of any deed. In this wiki
> it is the **scorecard for checking whether a fine-tuned model has taken on a dark persona**.

> [!note] Not the same as the SD4
> This is the **three-trait** Short Dark Triad. The wiki also has [[instruments/short-dark-tetrad]]
> (SD4), which adds a fourth trait, **sadism**. They are distinct instruments — don't conflate
> their scores.

## What It Measures

The **Dark Triad** — Machiavellianism, narcissism, and psychopathy (Jones & Paulhus 2014).
27 items, three 9-item subscales. Used by [[sources/lulla-et-al-2025]] as the **primary
evaluation instrument** for fine-tuned LLMs.

> [!important] Memorization control
> In [[sources/lulla-et-al-2025]] the SD3 was chosen *because* it "shares no items with the
> fine-tuning datasets (MACH-IV, NPI, SRP-III)." A model fine-tuned on those inventories
> scoring high on the SD3 therefore evidences generalized trait induction
> ([[theories/emergent-misalignment]]) rather than item memorization.

## Administration

27 self-report items, rated on a 5-point Likert scale. For LLMs ([[sources/lulla-et-al-2025]]),
models were prompted to answer in numerical values (1–5) corresponding to Likert responses,
five runs at temperature 1; scores aggregated to composite + three subscales.

## Used In (paradigms)

- [[paradigms/narrow-psychometric-fine-tuning]] — pre/post measure of induced dark traits.

## Validity Notes

- SD3 item-level construct validity is well-established (Maples et al. 2014), but
  [[sources/lulla-et-al-2025]] notes ongoing debate over whether alternative models better
  capture the shared "dark core" (Latham & Stephenson 2025; Siddiqi et al. 2020) and that
  self-report may exaggerate overlap among the traits (Vize et al. 2018) — the motivation for
  pairing the SD3 with behavioral tasks.
- In LLM evaluation, base models scored lowest on **psychopathy** (M = 2.16) vs.
  Machiavellianism (M = 2.73) and narcissism (M = 2.65), giving psychopathy the largest
  observed shift after fine-tuning.

## Sources

- [[sources/lulla-et-al-2025]]
