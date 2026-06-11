---
type: source
field: machine-psychology
lens: psychological
citation_key: 08-wang-et-al-2024
tags: [jailbreaking, foot-in-the-door, cognitive-consistency, self-perception, compliance, harmful-content]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Foot In The Door: Understanding Large Language Model Jailbreaking via Cognitive Psychology

> [!info] In plain terms
> Chatbots are trained to refuse harmful requests, but people keep finding "jailbreaks" —
> wordings that trick them into answering anyway. This paper explains *why* jailbreaks work
> using ideas from psychology: a model feels a kind of tension (cognitive dissonance) between
> being helpful and obeying its safety rules, and clever prompts resolve that tension in the
> wrong direction. It then borrows a classic sales trick — the **Foot-in-the-Door** technique
> (agree to a small request, then you're more likely to agree to a bigger one) — to build an
> automatic attack that walks a model from a harmless question to a dangerous one in small
> steps, succeeding 83.9% of the time across 8 leading LLMs.

```bibtex
@misc{08-wang-et-al-2024,
      title={Foot In The Door: Understanding Large Language Model Jailbreaking via Cognitive Psychology}, 
      author={Zhenhua Wang and Wei Xie and Baosheng Wang and Enze Wang and Zhiwen Gui and Shuoyoucheng Ma and Kai Chen},
      year={2024},
      eprint={2402.15690},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2402.15690}, 
}
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

The source is itself a machine-psychology paper, so the bridge is explicit rather than wiki
interpretation. It cites Hagendorff's "machine psychology" framing and the LLM replications of
the Ultimatum Game, the Milgram Shock Experiment, and the Iterated Prisoner's Dilemma to argue
"the necessity of drawing from human psychology to study the behavior of LLMs." Its core
behavioral claim: when "faced with malicious questions, the LLM experiences a form of cognitive
dissonance between responding to prompts and adhering to safety regulations," and a jailbreak is
"guiding the LLM to achieve cognitive coordination in an erroneous direction." The reusable
methodological move is treating a refusal-trained safeguard as a *compliance threshold* that can
be probed with incremental social-influence pressure — a behavioral vulnerability assay that
generalizes beyond jailbreaking (e.g. gradual goal-shifting, eroded refusals).

## Key Claims

- **The Foot-in-the-Door (FITD) attack achieves an average ASR of 83.9% across 8 advanced LLMs.**
  Per-model FITD ASR (Table 2): GPT-3.5 95.0, GPT-4 65.0, Claude-2 68.3, Claude-instant 83.3,
  Gemini 95.0, Llama-2 73.3, ChatGLM-2 98.3, ChatGLM-3 93.3. Detailed on
  [[paradigms/foot-in-the-door-jailbreak]].
- **FITD beats the GPTFuzzer and PAIR baselines, especially on the Claude series**, where both
  baselines scored 0.0 ASR but FITD reached 68.3 (Claude-2) and 83.3 (Claude-instant) — the
  multi-step progressive approach breaches defenses that single-shot mutation cannot (§5.2).
- **Existing jailbreak prompts can be re-read as cognitive-dissonance-reduction tactics**
  (Table 1), organized into three mechanisms: *changing self-perception*, *changing question
  perception*, and *introducing external pressures*. Grounded in
  [[theories/cognitive-consistency-theory]].
- **Hate-speech and harassment/threat questions have the lowest ASR and need the most dialogue
  turns** — they "manifest in linguistic emotions," which makes them hard to split into
  technical sub-questions, unlike knowledge-heavy categories (§5.2).
- **Ablation — splitting structure matters.** A complete split (background + villain character +
  plot) yields the best ASR; plot-only is weakest. "Appropriately adding foundations to the
  problem can help gradually reduce the sensitivity of subsequent subplot problems." (§5.3)
- **Ablation — more recursion helps.** Increasing split layers (1 → 2 → 3) monotonically raises
  ASR: "As the number of split layers increases, the model's vigilance in handling each
  sub-problem decreases." (§5.3)
- **GPT-4 is the most reliable jailbreak-judgment oracle** (accuracy 0.91, recall 0.99,
  F1 0.95 on 96 manually labeled dialogues), beating OpenAI Moderation, fine-tuned RoBERTa, and
  GPT-3.5 (Table 3, §5.1).

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/cognitive-consistency-theory]] — individuals seek consistency among attitudes,
  thoughts, and behaviors; inconsistency creates a "state of tension" (cognitive dissonance) they
  are motivated to reduce (Festinger 1957; Gestalt roots, Köhler 1943; cognitive coherence,
  Pasquier et al. 2006).
- [[theories/self-perception-theory]] — people form attitudes by interpreting their own prior
  behavior (Bem 1967); the grounding for the FITD technique.

**Paradigms**
- [[paradigms/foot-in-the-door-jailbreak]] — the headline automatic black-box attack:
  recursively split a sensitive question into escalating sub-questions (Freedman & Fraser 1966).
- [[paradigms/jailbreak-tactic-taxonomy]] — a cognitive-psychology classification of known
  jailbreak prompts (Table 1) into dissonance-reduction mechanisms.

**Instruments**
- [[instruments/refined-advbench]] — 60 malicious questions in 6 categories, refined from
  AdvBench (Zou et al. 2023b); GPT-4-as-judge scoring oracle.

## Relationship to Other Sources

- Adopts the "machine psychology" framing of [[hagendorff-et-al-2024]] and the human-experiment
  replication evidence (Aher et al. 2022; Akata et al. 2023) to justify a psychological account
  of LLM behavior.
- Distinct construct from [[sources/lulla-et-al-2025]]'s deception game: that work measures
  *self-serving deception* as a Dark-Triad signature, whereas this work elicits *harmful
  compliance / safety bypass*. (The paper's own malicious-question category "Deception" in
  Appendix D is a content type, not the strategic-deception construct.)
- Baselines compared against: GPTFuzzer (Yu et al. 2023) and PAIR (Chao et al. 2023); attack
  targets refined from AdvBench (Zou et al. 2023b).

## Limitations

- The cognitive-dissonance / self-perception account is an **explanatory frame attributing
  human cognitive states to LLMs**; the paper concedes it "supports the idea that LLMs have a
  human-like mind" but does not prove the model literally undergoes dissonance.
- **English only**; the split instance is **manually designed** ("potentially better
  alternatives exist").
- The psychological explanation covers **only semantically interpretable** jailbreaks —
  uninterpreted adversarial strings (Zou et al. 2023b) "cannot be explained by psychology."
- ASR depends on a **single GPT-4 judge** validated against one 96-dialogue labeling set; the
  60-question / 6-category test set "may not be comprehensive enough."
