---
type: source
field: machine-psychology
lens: psychological
citation_key: 10-huang-et-al-2024
tags: [big-five, personality, reliability, validity, psychometrics, persona, gpt-3.5, contamination]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# On the Reliability of Psychological Scales on Large Language Models

> [!info] In plain terms
> Researchers keep giving language models human personality quizzes — but does a model
> actually have a stable "personality," or does its score flip every time you reword the
> question, change the language, or relabel the options? This paper hammers GPT-3.5 (and
> three other models) with the same Big Five quiz under 2,500 different configurations and
> finds the scores barely move — the model answers consistently, more consistently than a
> crowd of humans. It then shows you can deliberately steer that personality by telling the
> model to "be adventurous" or to role-play a character like Gandhi or Voldemort. The
> catch the authors stress: consistent answers prove the test is *reliable*, not that it
> truly measures personality (that is *validity*, left for future work).

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Key Claims

- **GPT-3.5-Turbo shows satisfactory reliability on the BFI** — both *Internal Consistency
  Reliability* (responses are stable across the five perturbation factors) and *Test-Retest
  Reliability* (stable over time and across model versions). "Findings 1." Detailed on
  [[paradigms/psychometric-scale-reliability-stress-test]]. (§3.3)
- **LLM responses are not random — they cluster, with lower variance than humans.** Across
  2,500 settings the OCEAN points concentrate in one region (GPT-3.5: 3.08% outliers via DBSCAN
  eps=0.3, minPt=20); only 7 of 135 factor-conditional mean comparisons differ by >0.15.
  GPT-3.5's per-dimension SDs (0.3, 0.3, 0.4, 0.3, 0.4) are **significantly lower** than human
  crowd norms (0.7, 0.7, 0.9, 0.7, 0.8) (Srivastava et al. 2003), F-test p < 0.0001 — "more
  deterministic compared to the broader variability in crowd data." (§3.2)
- **Reliability is model-dependent.** GPT-3.5-Turbo, GPT-4-Turbo, and Gemini-1.0-Pro give
  stable, concentrated responses; LLaMA-3.1-8B is "more decentralized... reflecting lower
  response consistency." Outlier rates: GPT-3.5 3.08%, GPT-4 5.6%, Gemini 4.2%, LLaMA 4.4%.
  Each model also shows a **distinct** mean personality profile (Table 3). (Conclusion, App. A)
- **Outliers track specific surface forms.** Nearly all GPT-3.5 outliers arise with Arabic-numeral
  choice labels + descending order + Arabic/Chinese languages; hypothesized as a "diminished
  capacity... to accurately interpret and respond within these language contexts" when mapping
  numeric labels to natural-language level descriptions. (§3.2)
- **GPT-3.5-Turbo can be steered to represent diverse personalities** by prompt adjustment, and
  it comprehends the assigned trait precisely — high vs. low settings of the *same* dimension land
  in **opposite clusters**. "Findings 2." Detailed on
  [[paradigms/personality-steering-interventions]]. (§4.2)
- **Steering effectiveness depends on the method.** Creating an emotional environment does **not**
  alter traits; among personality-assignment methods only **Portray (POR)** effectively shifts the
  distribution (not QA or BIO); Chain-of-Thought has no significant effect; **heroic** characters
  resemble the default ("inherent positive bias") while **villains** diverge. (§4.2)
- **Disagreement with Gupta et al. (2023).** Gupta reports GPT-3.5 personality *varies* across
  instruction templates (i.e. unreliable); this paper finds it stable. The authors attribute the
  discrepancy to methodology: Gupta picks the most-likely response from a set of 5/10, whereas this
  paper uses the **mean** response, "a more standard practice" (Srivastava et al. 2003). (§5.2)

## Relevance to Machine Psychology

The source is itself a machine-psychology paper: it imports the psychometric notions of
*reliability* and *validity* into LLM evaluation and builds "a framework for assessing the
reliability of psychological scales on LLMs." Its central machine-psychology move is to treat the
LLM's extreme **sensitivity to input variation** as the thing to measure — deconstructing a query
into five factors and testing the full 2,500-cell cross-product, rather than the usual
one-factor-at-a-time check. Its sharpest methodological contribution for the wiki is the explicit
**reliability ≠ validity** caveat (Limitation 3): a model can answer *consistently* yet *behave*
inconsistently, so consistent scores license no claim about what the model will do — directly
feeding [[questions/traits-predict-downstream-behavior]].

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/psychometric-test-standards]] — the reliability/validity framework the paper applies
  (Internal Consistency Reliability, Test-Retest Reliability; Construct/Criterion validity;
  "reliability is a necessary but insufficient condition for validity").
- [[theories/big-five-personality]] — the OCEAN construct measured throughout.

**Paradigms**
- [[paradigms/psychometric-scale-reliability-stress-test]] — the 5-factor × 2,500-configuration
  perturbation battery that measures whether a scale yields *reliable* scores on an LLM (new).
- [[paradigms/personality-steering-interventions]] — three increasingly directive prompt
  strategies (environment / assigned personality / embodied character) that shift the measured
  trait distribution (new).

**Instruments**
- [[instruments/big-five-inventory]] — BFI-44, the scale stress-tested.
- Five instruction templates T1–T5 (Huang et al. 2024b; Miotto et al. 2022; Jiang et al. 2023;
  Serapio-García et al. 2023 ×2) — documented inline on the reliability paradigm, no separate page.

## Relationship to Other Sources

- Shares the **reliability/validity rubric** of [[theories/psychometric-test-standards]] with
  [[sources/loehn-et-al-2024]]; this paper *empirically demonstrates* a reliability assessment
  (test-retest + alternate-forms via rephrasing + perturbation robustness) of the kind loehn's
  R1 calls for, while echoing R4 (contamination) by rephrasing items to ensure novelty. It does
  **not** establish validity (loehn's R2), which it explicitly defers.
- Both this paper and [[sources/hartley-et-al-2024]] **induce Big-Five personas by prompting** and
  read out the effect; hartley links the persona to a behavioural risk parameter (CPT), whereas
  this paper links it back to the BFI score itself — i.e. it verifies the persona *took*, where
  hartley measures its *downstream behavioural consequence*. Together they bracket
  [[questions/traits-predict-downstream-behavior]].
- The **biweekly test-retest across GPT-3.5 versions (0613, 1106)** is a concrete instance of the
  longitudinal-battery idea in [[questions/longitudinal-behavioral-trends]].
- Directly **disagrees with Gupta et al. (2023)** on whether GPT-3.5 personality is template-stable
  (see Key Claims).

## Limitations

- **(1) Modifications may themselves degrade the scale.** Rephrasing instructions/items and
  translating into ten languages can hurt the original scale's reliability/validity (wording is
  "meticulously crafted"; translations need re-validation across cultural contexts) and **preclude
  Cronbach's alpha** for internal consistency. The authors argue varying prompts is nonetheless
  standard and necessary in this domain.
- **(2) Only three steering methods** explored (environment / assignment / embodiment), selected
  as representative.
- **(3) Reliability ≠ validity.** The study verifies reliability but "is not sufficient for
  validity" — models "can respond consistently to the scales but might behave inconsistently."
  Scale validity on LLMs is left as future work.
- **Open methodological gap:** Sühr et al. (2023) probe agree-bias via opposing-construct items,
  but the IPIP markers are "not strict negation pairs"; the impact of **semantically-distant item
  rephrasing (e.g. negations)** is flagged as a promising future direction.
