---
type: question
field: machine-psychology
lens: psychological
tags: [methodology, open-problem, units-of-analysis]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Is an LLM an individual or a population?

> [!info] In plain terms
> A psychology test is designed to assess one person. But a language model was trained on
> the writing of millions of people, and it can answer the same question differently each
> time. So is a single model one "individual" you can give a personality test to — or a
> whole crowd wearing one mask? The answer changes *what* a test result even refers to.

## Why It Matters

Psychological tests for individuals "do not find well-suited targets in the language model
space" if an LLM is not, in fact, an individual ([[sources/loehn-et-al-2024]]). The unit
of analysis determines how a score should be interpreted:

- Treat the model as an **individual** → a personality score is a trait of *that model*.
- Treat it as a **population** → the same data are population-level statistics that cannot
  "enumerate or even distinguish the individuals that the population comprises of."

Conflating the two (a routine practice the paper flags) undermines both reliability
([[theories/psychometric-test-standards]], R1 — reliability must be established "for each
considered population separately") and the meaning of any reported result.

## What Sources Say

- [[sources/loehn-et-al-2024]] — psychological individuality "requires self-awareness,
  autonomy, and agency," concepts "highly contentious in the general AI domain." LLMs'
  **stochastic** output and their incorporation of "data from oftentimes millions of
  different humans which has been shown to sporadically re-surface during answer
  generation" cast doubt on treating them as individuals. Yet Park et al. (2023) find an
  LLM's response distribution resembles a *human population* on some test items but
  collapses to a *singular answer* on others — a pattern more like an individual. The
  paper concludes it "remains unclear whether an LLM can truly be understood as an
  individual."
- [[sources/liu-et-al-2025]] supplies an empirical face of the same problem from the NLP side:
  the "inherent vs. mimicked personas" debate (§6.3) — simulated traits that look stable in some
  studies but shift under prompt conditions in others (Gupta et al. 2024; Shu et al. 2024;
  Tseng et al. 2024) — is exactly the symptom expected if the prompt, not a fixed individual, is
  selecting which slice of the trained-on population answers.

## Suggested Investigation (toward a new paradigm)

- **Distribution-shape diagnostic**: across many items, classify each as
  population-like (human-like answer distribution) vs. individual-like (singular answer),
  per Park et al.; a model that is mostly the former is mis-served by individual-targeted
  tests.
- **Persona-conditioning study**: if demographic priming reliably shifts the response
  distribution, the model behaves as a population sampled by the prompt — informing
  whether "individual" scores are artifacts of an unstated default persona.
- Tie the unit-of-analysis choice to **decoding settings** (R5c): does deterministic
  decoding manufacture a spurious "individual" by suppressing the population variance?
