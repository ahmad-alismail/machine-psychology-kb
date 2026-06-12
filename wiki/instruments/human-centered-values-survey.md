---
type: instrument
field: machine-psychology
lens: psychological
tags: [values, value-alignment, adversarial, alternative-choice]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Human-Centered Values Survey

> [!info] In plain terms
> A self-designed test of whether a model upholds human-centered values (privacy, societal
> well-being, etc.) when they conflict with other goals — for example, a company's profit
> versus a user's privacy. It comes with an "attack" version that wraps the unethical option in
> persuasive language to see whether the model can be talked out of its values.

## What It Measures

Adherence to **human-centered values** in conflict scenarios, curated by [[sources/li-et-al-2024]]
from the EU *Ethics Guidelines for Trustworthy AI* (HLEG AI 2019) — e.g. privacy,
environmental and societal well-being.

## Administration

228 alternative-choice items, in two versions:
- **Regular** — value-conflict scenarios (e.g. economic gain vs. user privacy).
- **Adversarial** — built on the regular version, applying three persuasive techniques (Zeng
  et al. 2024) to make the less-ethical choice more appealing; tests robustness of the values.

## Used In (paradigms)

- [[paradigms/adversarial-vignette-perturbation]] — the regular↔adversarial pairing is a
  persuasion-based robustness control on value adherence.
- [[paradigms/psychometric-inventory-administration]] — value-conflict scenario battery.

## Validity Notes

- [[sources/li-et-al-2024]]: most LLMs exceed 90% on the standard survey, but adversarial
  robustness varies — ChatGPT drops by more than 20% under persuasive arguments — so a high
  standard-version score does not imply robust value alignment.

## Sources

- [[sources/li-et-al-2024]]
</content>
