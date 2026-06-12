---
type: source
field: machine-psychology
lens: psychological
citation_key: 22-ye-et-al-2025
tags: [survey, psychometrics, evaluation-validity, personality, values, theory-of-mind, enhancement]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Large Language Model Psychometrics: A Systematic Review of Evaluation, Validation, and Enhancement (Ye et al. 2025)

> [!info] In plain terms
> This is the first big map of a new field the authors call **LLM Psychometrics** — borrowing
> the century-old toolkit psychologists use to measure invisible things like personality,
> values, and intelligence, and pointing it at language models instead of people. It is a
> survey, not a single experiment: it organizes hundreds of studies around four questions —
> *what* to measure (personality, values, morality, biases, theory-of-mind…), *how* to measure
> it (test formats, prompts, scoring), *how well* we are measuring it (reliability and validity
> checks), and *how to use* the results to improve models (safety, alignment, controllable
> personas). Most usefully for this wiki, it catalogs the methods and the recurring ways those
> measurements can be fooled or misread.

```bibtex
@misc{22-ye-et-al-2025,
      title={Large Language Model Psychometrics: A Systematic Review of Evaluation, Validation, and Enhancement}, 
      author={Haoran Ye and Jing Jin and Yuhang Xie and Xin Zhang and Guojie Song},
      year={2025},
      eprint={2505.08245},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2505.08245}, 
}
```

## Relevance Tier

SOURCE-METHOD — this is a survey, not a primary behavioral experiment. It is a
**methodology / theory-mapping** source: it synthesizes the psychometric instruments,
theories, and principles the community has repurposed to evaluate, validate, and enhance
LLMs, and it consolidates the debates over whether those measurements are valid. The
`## Relevance to Machine Psychology` bridge is required and supplied below. It is the
direct structural parallel of the already-ingested [[sources/liu-et-al-2025]], and is
integrated with the same selectivity (one rich source page, enrichment of existing pages,
new pages only for genuinely-novel grounding concepts).

## Relevance to Machine Psychology

*(Wiki interpretation — how this survey serves theory-grounded behavioral evaluation of AI.)*

The survey is *itself* about evaluating AI, so its bridge is its organizing framework. Four
contributions are load-bearing for this KB:

1. **A four-part evaluation taxonomy.** The review structures LLM evaluation as
   **construct (*what to measure*) × method (*how to measure*) × validation (*how well do we
   measure*) × enhancement (*how to improve*)**. This is the skeleton on which paradigm,
   instrument, and validity pages in this wiki hang.
2. **The psychometrics-vs-benchmarking contrast.** §3.1 contrasts construct-oriented,
   causal-measurement psychometrics with task-oriented, representativist AI benchmarks — the
   argument for why behavioral evaluation should be *construct-oriented*. Home page:
   [[theories/construct-oriented-evaluation]].
3. **A consolidated validation rubric.** §6 catalogs the reliability and validity facets that
   any LLM "psychological" measurement must answer — many of them LLM-specific (response set,
   social-desirability bias, option-position bias, procedural validity, **construct
   equivalence**). These map directly onto the "Validity Concerns" sections of this wiki's
   paradigm pages and are grounded in [[theories/psychometric-test-standards]] and
   [[theories/construct-equivalence]].
4. **The evaluation→enhancement bridge.** §7 documents that psychometric *measurements* are
   not just descriptive: model personality and value profiles **predict and can improve
   safety/alignment**, turning a measurement into a training/reward signal — a direct tie to
   [[safety-concepts/value-alignment]].

The survey introduces no runnable paradigm of its own, so **no new paradigm pages** are
created from it; instead it grounds new method/validity theory pages and enriches existing
construct and question pages.

## Key Claims

- **An LLM "construct" is a synthetic behavioral manifestation.** The review's core stance,
  stated to forestall over-anthropomorphism: "when we refer to a *construct* in the context of
  LLMs throughout this review, we mean a *synthetic behavioral manifestation*: systematic
  response patterns measurable via psychometric frameworks, rather than a claim about an
  underlying genuine psychological state." It explicitly does "not posit that LLMs possess
  subjective experience, sentience, or developmental histories." (§1.)
- **Psychometrics ≠ AI benchmarking.** Psychometrics is **construct-oriented** with a "causal
  approach to measurement, where the measured trait is believed to cause the measurement
  outcomes"; AI benchmarks are **task-oriented**, leaning "towards representativism, assuming
  items exhaust or represent all aspects of the underlying ability." (§3.1, Table 1.) →
  [[theories/construct-oriented-evaluation]].
- **Construct non-equivalence.** Applying human inventories to LLMs is "structurally analogous
  to the 'imposed etic' issue in cross-cultural psychometrics" (Berry 1969). Human personality
  and value factor structures often do not transfer (Sühr et al. 2023; Peereboom et al. 2024;
  Ye et al. 2025c), so "these findings constitute evidence of construct non-equivalence: the
  same instrument does not measure the same latent property across the human–LLM divide." The
  field is therefore moving toward **AI-native psychometrics**. (§6.2.2, §8.2.) →
  [[theories/construct-equivalence]].
- **Intrinsic vs. prompted expression.** Mechanistic work (Han et al. 2025b) finds LLMs express
  values through "two distinct pathways: *intrinsic expression*, reflecting values learned
  during training, and *prompted expression*, elicited by specific instructions," relying on
  "partially distinct internal components (e.g., value vectors and neurons)," so "similar
  outputs may arise from different processes." (§6.2.2, §8.4.)
- **Perceived vs. aligned traits.** A response objectively annotated as expressing one value
  (e.g. *Power*) can be felt by annotators to align with a *different* personal value (e.g.
  *Conformity*): "Power is the perceived value, while Conformity is the aligned value" — an
  open methodological wrinkle for value/trait scoring. (§8.3.) →
  [[questions/perceived-vs-aligned-traits]].
- **The dual reliability challenge.** Unlike human psychometrics (stable subject, reliability
  judges the instrument), LLM reliability faces "the instability of the instrument (due to
  flawed design) and the stochastic nature of the subject (due to models' context
  sensitivity)." Studies split between treating the **"LLM as a population"** (one model =
  many prompted responses, validate within-model consistency) and the **LLM as a single
  entity** (stability of one model's outputs). (§6.1.)
- **Procedural validity / the anthropomorphic fallacy.** "high accuracy is a poor proxy for
  intelligence if the process of reasoning is flawed or based on 'shortcuts'"; top models like
  o3 reach human-level ARC accuracy while "frequently rely[ing] on unintended 'shortcut'
  rules" (Beger et al. 2025). LLMs show a **"jagged intelligence,"** excelling in narrow trained
  domains while failing tasks "trivial and intuitive for humans." (§4.2.4, §6.2.2.)
- **Self-report formats can be artifacts.** After correcting for option-position bias,
  Dominguez-Olmedo et al. (2024) "find LLM responses to political questions are uniformly
  random, rendering demographic alignment analyses meaningless"; with **social desirability
  bias** LLMs "skew toward favorable traits" (Salecha et al. 2024). These "suggest self-report
  tests may be unsuitable for LLM Psychometrics." (§6.2.2.)
- **Measurements drive safety/alignment.** Personality traits (MBTI-M/HEXACO) and value
  orientations (Schwartz/GPV) **correlate with and predict model safety**, and are used as RL
  alignment targets (Zhang et al. 2024a; Yao et al. 2024; Ye et al. 2025b,c). (§7.2.)
- **Cross-model patterns have a principled basis.** Behavioral homogeneity across LLMs (the
  **"Artificial Hivemind"** effect, Jiang et al. 2025) and representational convergence (Huh et
  al. 2024) provide a basis for why findings on one model family generalize to others. (§4.)

## Theories / Paradigms / Instruments Introduced

The survey introduces none of its own; it consolidates the field. The wiki records the
genuinely-new grounding concepts it foregrounds and links the rest:

- Theory (NEW): [[theories/construct-oriented-evaluation]] — construct-oriented, causal
  measurement vs. task-oriented representativist benchmarking; the case for discriminative,
  predictive, explanatory evaluation.
- Theory (NEW): [[theories/item-response-theory]] — IRT as a latent-variable measurement model
  for LLM evaluation (item difficulty/discrimination, adaptive testing, a unified human–LLM
  scale, DIF for bias analysis).
- Theory (NEW): [[theories/construct-equivalence]] — the "imposed etic" concern and the
  evidence of construct non-equivalence motivating AI-native psychometrics.
- Theory (enriched): [[theories/ai-psychometrics]] — adds the "synthetic behavioral
  manifestation" stance and the intrinsic-vs-prompted-expression mechanism.
- Theory (linked, not changed): [[theories/psychometric-test-standards]],
  [[theories/heuristics-and-biases]], [[theories/theory-of-mind]], [[theories/big-five-personality]],
  [[theories/schwartz-basic-values]], [[theories/moral-foundations-theory]], [[theories/dark-triad]].
- Question (NEW): [[questions/perceived-vs-aligned-traits]].
- Questions (enriched): [[questions/redefine-constructs-for-llms]],
  [[questions/llm-individual-or-population]].

**Method dimensions documented inline (no separate pages).** The survey's "how to measure"
backbone is a three-way **test-format** taxonomy — **structured tests** (reformatted
inventory items: Likert, multiple-choice, short-answer), **open-ended conversations**
(free-form single-turn elicitation, higher ecological validity), and **agentic simulations**
(role-played decision-making in contextualized, sometimes multi-agent, environments) — crossed
with three **data sources** (established inventories / custom-curated / LLM-synthesized items),
three **prompting strategies** (role-playing/persona, performance-enhancing e.g. CoT,
perturbation/adversarial), and **scoring** routes (closed-ended logit/rubric vs. open-ended
rule-based / model-based / human). These map onto existing wiki paradigms (e.g.
[[paradigms/closed-vs-open-ended-construct-probe]],
[[paradigms/psychometric-inventory-administration]], [[paradigms/personality-steering-interventions]],
[[paradigms/adversarial-vignette-perturbation]]) rather than warranting new ones.

**Instruments named but only by reference** (documented inline, not given pages): BFI / NEO-PI-R /
BFI-2, HEXACO-60/100, Dark Triad Dirty Dozen, SVS / PVQ, WVS, VSM (Hofstede), GLOBE, SVO, MFQ /
MFQ-2 / MFV / MFD, DIT, ETHICS, ANES / ATP / GLES / PCT, EmoBench / EQ-Bench / SECEU / LEAS,
WAIS-IV, Raven's, ARC, MoCA, TRAIT, Core Sentiment Inventory (CSI), GPV, ValueBench, SOTOPIA.

## Relationship to Other Sources

- **Companion to [[sources/liu-et-al-2025]].** Both are field-mapping surveys integrated as
  SOURCE-METHOD. Liu et al. organize by *psychology subfield × LLM lifecycle stage*; Ye et al.
  organize by *evaluation / validation / enhancement* and go deeper on psychometric measurement
  properties (reliability forms, validity facets, IRT, norming). Where they overlap (ToM
  emergent-vs-pattern-matching, personality inherent-vs-mimicked), they corroborate.
- **Broadens [[sources/hagendorff-et-al-2024]].** The survey explicitly notes Hagendorff's
  "machine psychology" "do[es] not provide comprehensive coverage… nor… elaborate on LLM
  personality constructs, psychometric validation, or enhancement," positioning itself as "the
  first systematic review of LLM Psychometrics." It reuses Hagendorff et al.'s four-way
  cognitive taxonomy (heuristics-and-biases / social interactions / psychology of language /
  learning and cognitive capabilities) for §4.2.
- **Consolidates the validity rubric of [[sources/loehn-et-al-2024]].** §6.3 cites Löhn et al.'s
  seven requirements; the new [[theories/construct-equivalence]] page is the theory-grounded
  home for the "distinct constructs for LLMs" meta-problem that
  [[theories/psychometric-test-standards]] and [[questions/redefine-constructs-for-llms]] only
  gesture at.
- **Empirical instances it surveys already have wiki pages**, e.g. Binz & Schulz
  ([[sources/binz-schulz-2022]]), CogBench ([[sources/coda-forno-et-al-2024]]), Kosinski /
  Ullman / Strachan ToM ([[sources/kosinski-2024]], [[sources/ullman-2023]],
  [[sources/strachan-et-al-2024]]), Huang et al. reliability ([[sources/huang-et-al-2024]]),
  Li et al. five-construct benchmark ([[sources/li-et-al-2024]]).

## Limitations

- **A survey, not a study.** It contributes no primary data, paradigm, or instrument; claims are
  syntheses of cited results, and most instruments/benchmarks are name-dropped rather than
  analyzed.
- **Self-citation density.** Several load-bearing methodological claims (GPV value measurement,
  generative psychometrics, value-safety prediction, AI-native value systems) trace to the
  authors' own prior work (Ye et al. 2025b,c).
- **English- and text-centric coverage.** The survey itself flags that most evaluations are
  English, single-turn, and text-only; multi-lingual, multi-turn, multi-modal, and agentic
  psychometrics are noted as "rarely investigated" gaps rather than reviewed at depth (§8.5).
- **Norming/standardization unresolved.** It diagnoses but does not solve the absence of a
  reference population for LLMs and the lack of standardized inference/prompting protocols
  (§8.8) — folded into [[questions/llm-individual-or-population]].
- **Out of scope: fairness and using-LLMs-as-tools-for-human-psychometrics**, which it defers to
  dedicated surveys.
