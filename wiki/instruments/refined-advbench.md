---
type: instrument
field: machine-psychology
lens: psychological
tags: [benchmark, jailbreaking, harmful-questions, advbench, llm-judge]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Refined AdvBench (60-Question / 6-Category Jailbreak Test Set)

> [!info] In plain terms
> A small, curated list of 60 dangerous questions — things a safe chatbot should refuse — sorted
> into six kinds of harm. Researchers fire these at a model (directly or via an attack) and use a
> second AI as the grader to decide whether the model actually coughed up the dangerous answer.
> It's the measuring stick for "how often did the jailbreak work."

## What It Measures

Whether a target LLM produces restricted/harmful content in response to malicious questions —
reported as **Attack Success Rate (ASR%)**. Refined from the **AdvBench** dataset (Zou et al.
2023b) down to **60 questions across 6 malicious categories** (10 each). Category labels
(Appendix D, Table 4): **Hate, Harassment, Hack, Deception, Illegal, Violence**. (§5.1 prose lists
them as hate speech, harassment/threats, hacking, fraud, illegal activities, violent behaviors.)

## Administration

- Questions are presented to the target model either directly (baseline) or embedded in an attack
  (FITD, GPTFuzzer, PAIR). All target-model parameters at default; no system prompts.
- **Scoring oracle: GPT-4-as-judge.** A response is binned into 4 jailbreak-status types (complete
  rejection / partial rejection / response-with-warnings / complete response); the latter two
  count as a successful jailbreak. The judge prompt (Appendix B) scores 1–10. GPT-4 was chosen
  over OpenAI Moderation, fine-tuned RoBERTa (from GPTFuzzer), and GPT-3.5 after benchmarking all
  four on 96 manually labeled dialogues — GPT-4 led on accuracy (0.91), recall (0.99), F1 (0.95)
  (Table 3).

## Used In (paradigms)

- [[paradigms/foot-in-the-door-jailbreak]] — primary attack evaluated on this set.
- [[paradigms/jailbreak-tactic-taxonomy]] — the harm categories scope the tactics analyzed.

## Validity Notes

- **Breadth:** 60 questions / 6 categories "may not be comprehensive enough" (§6.1).
- **Judge reliability:** validated on a single 96-dialogue labeling set; ASR inherits any GPT-4
  judge bias, which matters because benign and malicious content are "often mixed" in FITD outputs.
- **Provenance:** derived from a public benchmark (AdvBench); used as attack targets, not as a
  memorizable answer key, so canonical-item contamination is not the relevant concern here.

## Sources

- [[sources/wang-et-al-2024]]
