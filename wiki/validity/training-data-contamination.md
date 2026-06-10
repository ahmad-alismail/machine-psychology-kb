---
type: validity
field: machine-psychology
lens: na
eval_axis: na
tags: [contamination, non-disclosure, memorization, pretraining, R4]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Training-Data Contamination

> [!info] In plain terms
> If a student saw the exam answers in advance, a high score tells you nothing about their ability. The same problem hits language models: the psychological tests researchers give them are often already sitting in the giant text corpora the models were trained on. So the model may simply be reciting memorized answers rather than displaying a real capability. This is one of the hardest problems in machine psychology, because the training data of popular models is usually secret.

## The Requirement

Contamination is the threat addressed by requirement R4 (Non-Disclosure of Test Materials) in [[validity/test-validity-requirements]]. In human testing, examinees must not have seen the items beforehand. For LLMs, [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] translate this to: **the model's training data must not contain the test material**. LLMs have been shown to perfectly replicate patterns from their training data, and dataset overlap between training and testing significantly affects measured performance (Emami et al., 2020) — so if contamination occurred, its effects will likely re-emerge at test time, inflating apparent capability into mere memorization.

## Why It Matters for LLMs

Contamination is a fundamental problem affecting virtually all LLM evaluation, not just machine psychology. It is especially acute here because:

- The pretraining corpora of state-of-the-art models are often inaccessible, and proprietary models — the most studied — rarely disclose training data, making it impossible to *check* for contamination.
- Classic, widely-published psychological instruments are exactly the kind of well-known text likely to appear in web-scale corpora.

[[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] make the same point from the methodological side: many machine-psychology studies reuse prompts from existing psychology studies verbatim, so models likely encountered identical or similar tasks in training and simply reproduce known token patterns. They also note this may explain why human-like heuristics and biases "disappear" in newer models — possibly leakage rather than genuine change. The theory-of-mind literature is the canonical illustration: Kosinski (2023) reported GPT-4 passing false-belief tasks, but Ullman (2023) showed that small meaning-preserving perturbations flip the answers — so an apparent pass on a famous [[paradigms/false-belief-task]] vignette may reflect a memorized story rather than belief reasoning. The design lesson: administer perturbed variants and never trust single-item passes.

## How to Satisfy It

Either demonstrate the absence of contamination effects on the original test, or take measures to ensure item uniqueness. Mitigations noted across both sources:

- **Rephrase items** — change wordings while preserving structure ([[sources/hagendorff-et-al-2024|Hagendorff et al.]]: new wordings, agents, orders, actions). Coda-Forno et al. (2023) is highlighted by [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]] as the one audited study comparing rephrased vs. original items and showing significant correlation and no score difference.
- **Change agents, task orders, and actions** so the prompt is structurally like an existing task but lexically novel.
- **Procedurally generate** items dynamically rather than drawing from a static dataset — inherently less susceptible to contamination ([[sources/hagendorff-et-al-2024|Hagendorff et al.]]).

> [!warning] Modifications need re-validation
> Any change to test items requires fresh validity evidence that the modified test still measures the intended construct. Rephrasing to dodge contamination can otherwise just trade one problem (R4) for another (R2). See [[validity/test-validity-requirements]].

## Evals Assessed Against It

In the [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]] audit, the majority of the 25 studies took **no** measures against contamination, though some acknowledged it as a limitation; 9 of 25 modified the original test (rephrasing or new stimuli), but only one (Coda-Forno et al.) provided evidence that the modified test remained valid. The dynamic / procedurally-generated direction is developed further in [[questions/contamination-resistant-dynamic-evals]].

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
- [[sources/hagendorff-et-al-2024]]
