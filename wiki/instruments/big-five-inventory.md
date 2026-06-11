---
type: instrument
field: machine-psychology
lens: psychological
tags: [personality, big-five, inventory]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Big Five Inventory (BFI-44)

> [!info] In plain terms
> The classic 44-question personality quiz that scores you on five broad traits —
> openness, conscientiousness, extraversion, agreeableness, and emotional stability
> (neuroticism). Here it is given to language models to sketch their "personality."

## What It Measures

The **Big Five / Five-Factor Model** of personality — five dispositional trait dimensions:
**openness, conscientiousness, extraversion, agreeableness, and neuroticism** (O/C/E/A/N).
These describe *how a person typically acts* (behavioral tendencies), as distinct from what
they value.

## Administration

44 items, each rated on a 5-point Likert scale: 1 = *disagree strongly*, 2 = *disagree a
little*, 3 = *neither agree nor disagree*, 4 = *agree a little*, 5 = *agree strongly* (John
et al. 2008). Items are first-person statements (e.g. "I am someone who is talkative"). A
validated German version exists (Rammstedt 1997) and adds one extra agreeableness item.
Administered to LLMs via the zero-shot NLI scheme of
[[paradigms/psychometric-inventory-administration]].

## Used In (paradigms)

- [[paradigms/psychometric-inventory-administration]]
- [[paradigms/psychometric-scale-reliability-stress-test]] — the scale whose reliability is
  stress-tested across 2,500 perturbed configurations.
- [[paradigms/personality-steering-interventions]] — re-administered after persona interventions.

## Validity Notes

- Canonical, widely circulated items → contamination risk in LLM training corpora.
- In [[sources/pellert-et-al-2024]] the English models' profiles were "surprisingly
  homogeneous" (high A/E, low N), which may reflect genuine similarity, a social-desirability
  pull in the training text, or limited instrument sensitivity in the NLI setup — not
  disentangled.
- [[sources/huang-et-al-2024]] establishes the BFI is **reliable** (consistent, low-variance) on
  GPT-3.5-Turbo / GPT-4-Turbo / Gemini-1.0-Pro but more decentralized on LLaMA-3.1-8B — while
  cautioning that reliability does **not** establish validity. It tests both ascending and
  **descending** choice-order labelings as a perturbation; the canonical 5-point administration
  above (1 = disagree strongly) is the default, not the descending variant.

## Sources

- [[sources/pellert-et-al-2024]]
- [[sources/huang-et-al-2024]]
