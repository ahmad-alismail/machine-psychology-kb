---
type: method
field: machine-psychology
lens: na
eval_axis: na
tags: [nli, zero-shot, entailment, scoring, psychometrics]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Zero-Shot NLI Classification

> [!info] In plain terms
> This is a way to make an LLM "answer" a questionnaire without asking it to write free text. Natural Language Inference (NLI) models judge whether one sentence implies another. So you treat the questionnaire item as the first sentence, treat each possible answer ("disagree strongly," "agree strongly," etc.) as a candidate second sentence, and ask the NLI model how strongly the item entails each option. The answer with the highest entailment probability becomes the model's choice. Doing this for every item and summing up gives a trait score — deterministically and reproducibly.

## Description

Zero-shot NLI classification is the measurement procedure [[sources/pellert-et-al-2024]] uses to elicit psychometric responses from LLMs. It relies on encoder-style models fine-tuned on NLI corpora (SNLI, MultiNLI, XNLI), which classify a premise–hypothesis pair as entailment, contradiction, or neutral. The steps:

1. **Premise** = the inventory item (a statement or question), e.g., "I am someone who is talkative."
2. **Hypotheses** = each labeled response option on the inventory's verbal scale, e.g., the five BFI options from *disagree strongly* to *agree strongly*.
3. For each option, record the model's **entailment probability** given the item wording.
4. Take the **`argmax`** over options as the model's chosen response for that item.
5. **Aggregate** item responses into (sub)scale scores using the inventory's standard scoring rules (sum or mean).

"Zero-shot" contrasts with few-shot: NLI-trained models classify into on-the-fly categories without labeled in-context examples. [[sources/pellert-et-al-2024]] adopts this route in explicit preference over masked-language prediction and generative next-word prediction, because it sidesteps prompt engineering, the need for output-format examples, and the stochasticity and example-order sensitivity of generative models. Because there is no "correct" answer to an inventory item, the procedure characterizes traits rather than measuring performance.

## Used By

- [[paradigms/psychometric-inventory-administration]] — the sole scoring engine for administering the BFI, SD4, PVQ-RR, MFQ, and GSDB in [[sources/pellert-et-al-2024]].

## Strengths

- **Deterministic and replicable:** no sampling stochasticity, so test–retest reliability can be perfect; analyses replicate exactly on the same model.
- **Local / open models:** runs on fully accessible open-source encoder models (RoBERTa, DeBERTa, BART variants), avoiding hidden "sanitization" behind proprietary APIs and supporting open-science replication on "frozen" model versions.
- **No prompt engineering or output parsing:** avoids the format-incompatibility, averaging-over-runs, and example-order problems of generative elicitation.
- **Straightforward, interpretable scoring:** probabilities map cleanly onto labeled scale options and standard inventory scoring.

## Limitations

- **Encoder-only:** designed for NLI-fine-tuned classifier models, not directly applicable to generative chat models (GPT-family) without adaptation; thus characterizes a specific model class, not the most widely deployed generative ones.
- **Partial self-consistency only:** [[sources/pellert-et-al-2024]] can offer only partial evidence that models respect the ranked order of response options — the property appears to emerge implicitly (no obvious bimodality in option distributions) but is not guaranteed, and adversarial robustness of it remains untested.
- **No ground truth / construct-validity gap:** the method scores stated dispositions, not validated LLM constructs; [[sources/loehn-kiehne-et-al-2024]] notes inventory items are public and likely contaminated, and validity-for-all-models is only partially established.
- Sensitive to item wording and translation, like any text-based measurement.

## Sources

- [[sources/pellert-et-al-2024]] — introduces and justifies zero-shot NLI classification as the elicitation/scoring method for AI psychometrics, including the masked-LM / next-word / NLI comparison.
