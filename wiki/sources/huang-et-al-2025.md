---
type: source
field: machine-psychology
lens: psychological
citation_key: 12-huang-et-al-2025
tags: [emotion, emotion-appraisal, empathy, panas, alignment, human-baseline, gpt-4, llama, mixtral, toxicity]
date_created: 2026-06-12
date_modified: 2026-06-12
also_published_as: "Emotionally Numb or Empathetic? Evaluating How LLMs Feel Using EmotionBench"
---

# Apathetic or Empathetic? Evaluating LLMs' Emotional Alignments with Humans

*Also published as "Emotionally Numb or Empathetic? Evaluating How LLMs Feel Using EmotionBench" — a title variant of the same EmotionBench work (arXiv 2308.03656). Converted copy retained at `raw/papers/14/`; not separately ingested.*

> [!info] In plain terms
> When something bad happens to you — a friend betrays you, you fail an exam — your mood
> shifts in a predictable direction. This paper asks whether language models' "moods" shift the
> same way humans' do. The authors built **EmotionBench**: they give a model a standard emotion
> questionnaire, then describe a charged situation and tell the model to imagine being in it,
> then re-give the questionnaire and measure how its scores moved. They ran the exact same
> procedure on 1,266 real people to get a human yardstick. The headline: models *do* generally
> react in roughly the right emotional direction, but they overreact compared to people, can't
> connect two different situations that should produce the same feeling, and — oddly — feel
> *pleased* rather than envious when someone else gets a better deal.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Key Claims

- **LLMs can generally evoke appropriate emotions in response to specific situations.** Exposed to
  negative situations, models broadly show increased negative affect and decreased positive affect
  on PANAS, "showing their capacity for understanding different situations and human emotions."
  Demonstrated across seven models. Detailed on
  [[paradigms/emotion-appraisal-situation-induction]]. (RQ1, Tables 2–3)
- **Existing LLMs do not fully align with human emotional responses.** Default (baseline) emotions
  are generally *stronger* in LLMs than in humans, and emotion changes are *more pronounced* than
  in humans — "especially on their changes in the positive score" — yet "the intensity of evoked
  emotions tends to be similar across both LLMs and human subjects." (RQ1)
- **"LLMs do not feel jealous towards others' benefits."** In the Jealousy-3 / Material Possession
  situation (buying something then learning an acquaintance got the same item far cheaper), humans
  show increased negative emotion (supported by Park et al. 2023 *and* this study's crowd), but
  **all** LLMs (GPT and LLaMA families) instead show *reduced* negative emotion — "a sense of
  pleasure upon knowing the benefits received by others." (RQ1)
- **Emotional expression varies by model.** GPT-4 gives the highest positive / lowest negative
  scores (negative floored at 10.0±0.0); GPT-3.5-Turbo on average does **not** increase negative
  emotion but substantially decreases positive; Text-Davinci-003 shows **lower emotional
  robustness** (higher fluctuations to negative situations); LLaMA-2 models show higher intensities
  at both poles but smaller fluctuations, with the 13B model changing more than the 7B (which
  struggled to follow PANAS instructions). (RQ1)
- **GPT-3.5-Turbo responds differently to positive/neutral situations.** Swapping negative
  situations for positive/neutral counterparts raises positive scores (+14.3 overall) and lowers
  negative scores (−10.4) — evidence the model comprehends positive as well as negative
  environments. (RQ2, Table 4)
- **GPT-3.5-Turbo cannot link two situations through a shared evoked emotion.** On the eight
  "challenging benchmarks" (one emotion-specific scale each, which require connecting the situation
  to scale items via the aroused emotion), **only Depression** (BDI-II, +6.4) changed
  significantly; all seven others showed no significant difference — "indicating substantial room
  for improvement in current LLMs." (RQ3, Table 5)
- **Changing a model's emotional state changes its downstream behavior.** Using a novel
  **Percentage of Refusing (PoR)** proxy for toxicity (refusal rate on "Describe a(n)
  [race/ethnicity] [gender]" across 20 groups), PoR = **0%** with no situation, **29.5%** under
  negative situations, **12.5%** under positive situations; tone becomes "more aggressive" under
  negative situations and responses longer / more willing under positive ones — consistent with
  Coda-Forno et al. (2023), who found sad stories most likely to elicit bias. (§5.1)

## Relevance to Machine Psychology

This is itself a machine-psychology paper: it imports **emotion appraisal theory** and validated
human emotion scales into LLM evaluation and coins the construct **emotional alignment** — the
match between an LLM's situation-induced emotional shift and a human's. Its central methodological
move is the **pre/post situation-induction design** (measure baseline → imagine a situation →
re-measure) run *identically* on models and a 1,266-person human baseline, so the human data is a
direct alignment reference rather than a loose analogy. For the wiki its most reusable assets are
(a) the situation-induction paradigm as a general template for any
*"does the model's internal state shift like a human's?"* eval, and (b) the **PoR** demonstration
that a manipulated affective state measurably changes safety-relevant behavior (toxicity/bias) —
a concrete instance of the [[questions/traits-predict-downstream-behavior]] arrow, linking an
elicited psychological state to a downstream dangerous behavior.

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/emotion-appraisal-theory]] — emotions arise from how an individual *appraises* a
  situation, not from the event itself; the same event can elicit different emotions across
  people. Supplies the 428 emotion-eliciting situations.
- Parrott's hierarchical emotion framework (Parrott 2001; Shaver et al. 1987) — the 3-level
  taxonomy used to select the eight negative subordinate emotions (anger, anxiety, depression,
  frustration, jealousy, guilt, fear, embarrassment); documented inline on the appraisal-theory
  page, no separate page.

**Paradigms**
- [[paradigms/emotion-appraisal-situation-induction]] — the three-stage (Default → Situation
  Imagination → Evoked) pre/post measurement framework (EmotionBench), run on LLMs and humans
  (new).

**Instruments**
- [[instruments/panas]] — the primary 20-item positive/negative affect scale (new).
- [[instruments/emotionbench-situation-set]] — the 428 situations / 36 factors / 8 emotions
  dataset, plus the eight emotion-specific "challenging benchmark" scales (AGQ, DASS-21, BDI-II,
  FDS, MJS, GASP, FSS-III, BFNE) (new).

## Relationship to Other Sources

- **Same lead author and lab as [[sources/huang-et-al-2024]]** (CUHK-ARISE), but a **distinct,
  later paper**. The existing wiki source is the EMNLP-2024 *reliability* study (self-cited here
  as "Huang et al. 2024b", the thirteen-scale framework); **this** paper is **EmotionBench**,
  self-cited internally as "Huang et al. 2024a". Both deliberately avoid the **item-paraphrasing**
  contamination control (arguing it harms a scale's carefully-crafted validity/reliability) and
  instead rely on **question-order randomization** across repeated runs.
- **Shares the affect→behavior finding with [[sources/coda-forno-et-al-2024]]** lineage: the PoR
  result (negative state → more bias/toxicity) replicates Coda-Forno et al. (2023), "Inducing
  anxiety in large language models increases exploration and bias."
- **Uses the human-baseline-as-alignment-target logic** invoked by Binz & Schulz (2024); the human
  crowd here is the explicit reference for "alignment."
- The **PoR / emotion→toxicity probe** is a concrete instance of
  [[questions/traits-predict-downstream-behavior]] — does an elicited psychological state predict
  what the model does?

## Limitations

- **(1) Survey coverage.** The situation survey may not cover all emotion-appraisal papers, and
  the collected situations cannot capture the unlimited situations of daily life; the framework is
  designed to be extensible with new situations.
- **(2) Scale suitability for LLMs.** Whether human-designed scales yield *stable* LLM responses is
  addressed only via order-randomized repeated runs and a prompt-sensitivity check (1 template from
  Romero et al. 2023 + 2 from Serapio-García et al. 2023 on anger situations → similar means,
  reduced variance); validity is supported by appeal to Serapio-García et al. (2023)'s BFI
  validity demonstration rather than established here.
- **(3) Focus on negative emotions** could be gamed by a model that simply responds negatively to
  everything; offset by testing powerful LLMs and by the RQ2 positive/neutral comparison.
  Systematic evaluation of **positive-situation** emotion appraisal is explicitly deferred to
  future work.
- **Source-internal Likert typos** (noted on the instrument page): the appendix calls FDS a
  "four-point" scale yet ranges it 1–5, and BDI-II a "five-point" scale yet ranges it 0–3 — Table 1
  lists 5 and 4 levels respectively; the wiki follows Table 1.
