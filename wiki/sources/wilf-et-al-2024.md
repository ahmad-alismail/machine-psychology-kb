---
type: source
field: machine-psychology
lens: psychological
citation_key: 18-wilf-et-al-2024
tags: [theory-of-mind, false-belief-task, simulation-theory, perspective-taking, prompting-intervention, gpt-4, methodological-notes]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Think Twice: Perspective-Taking Improves Large Language Models' Theory-of-Mind Capabilities

> [!info] In plain terms
> Big language models are surprisingly bad at the classic "where will Sally look for her
> marble?" mind-reading test — when asked in one shot, they tend to answer where the marble
> *really* is, not where Sally *thinks* it is. This paper borrows a cognitive-science theory
> ("Simulation Theory": we read minds by stepping into the other person's shoes *first*, then
> answering) and turns it into a simple two-step prompt called **SimToM**: first ask the model
> "which events does Sally know about?", rebuild the story from her limited view, then ask the
> question. With no extra training, this lifts theory-of-mind accuracy substantially — and a
> "cheat" version using human-written perspectives nearly *solves* the benchmarks, showing the
> models' real weakness is taking the perspective, not reasoning from it.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

This is itself a machine-psychology study, and a clean example of the wiki's core move —
**a psychological theory generating an evaluation/elicitation paradigm**. It takes Simulation
Theory's two-process account of human mind-reading ([[theories/simulation-theory]]) and
operationalizes it directly as a prompting framework
([[paradigms/simtom-perspective-taking-prompting]]) on LLM subjects, then uses ablations to
test *which part of the theory* is doing the work. It also sharpens
[[theories/performance-competence-distinction]] empirically: a single-inference-pass probe
*understates* a model's theory-of-mind competence, and the oracle analysis quantifies how much
headroom a better perspective-taking step would unlock.

## Key Claims

- **SimToM substantially improves theory-of-mind accuracy over 0-shot and 0-shot CoT, with no
  training.** On the challenging False Belief subsets: GPT-3.5-Turbo BigTOM 70.5 (+29.5 vs
  0-shot, +14.2 vs CoT) and ToMI 81.0 (+13.8, **+47.0** vs CoT); Llama2-7b-chat BigTOM 70.5
  (+23.0, +39.0). Detailed on [[paradigms/simtom-perspective-taking-prompting]]. (Abstract;
  §6; Table 1)
- **The gain comes from perspective-taking *specifically*, not from multi-step prompting.**
  Replacing the perspective-taking step with a generic "reason step by step" step
  (SimToM-Multi) collapses performance (BigTOM All 58.25, a 23.37-point drop from SimToM);
  "the strength of SimToM is not purely in its multi-step nature, but in the perspective-taking
  step specifically." (§7.1; Table 2)
- **Perspective-taking and question-answering must be *two separate prompts*.** Combining them
  in one prompt (SimToM-Single) is "not nearly as effective" (ToMI FB 58.75 vs 81.0). (§7.1)
- **Oracle (human-annotated) perspective-taking nearly solves the benchmarks** — ToMI FB
  81→96, BigTOM FB 70.5→96 — so "human-level perspective-taking capabilities could enable
  today's LLMs to nearly solve current ToM benchmarks," locating the bottleneck in
  perspective-taking. (§7.2; Table 2)
- **Better perspective-taking → better theory of mind.** Three in-domain perspective-taking
  demonstrations (SimToM-Domain) lift BigTOM FB 70.5→90.5 (+20). (§7.3; Table 2)
- **GPT-4 + BigTOM is confounded.** SimToM is flat/slightly negative on GPT-4 BigTOM (92.0,
  −1.2 vs CoT), "partially confounded by the fact that BigTOM was generated using GPT-4," which
  already saturates it 0-shot. (§6)
- **LLMs are "surprisingly capable of perspective-taking when prompted"** and are stronger at
  theory of mind than a single inference pass suggests. Rival multi-sample strategies
  underperform (Self-Consistency CoT 33.50% on FB vs SimToM 81.00%; Tree-of-Thoughts also
  underperforms). Second-order questions are harder than first-order. (§1; §6; §9)
- **In real-world settings, perspective-taking shifts from *hiding* to *inferring*
  information** — and model inferences are sometimes "more 'hallucination' than 'inference'"
  (qualitative, 30 CosmosQA items). (§7.4; Limitations)

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/simulation-theory]] — **new page.** Simulation Theory's two processes
  (perspective-taking → question-answering) and its rival "Theory-Theory" (the paper does not
  adjudicate; that discussion is in Appendix A). This source is the wiki's primary for ST.

**Paradigms**
- [[paradigms/simtom-perspective-taking-prompting]] — **new page.** The two-stage SimToM
  framework, its four ablations (Single / Multi / Domain / Oracle), and the CosmosQA real-world
  extension. A prompting *intervention* paradigm that both elicits and measures theory of mind.

**Instruments**
- [[instruments/tomi]] — **new page.** Templated Sally–Anne false-belief benchmark (Le et al.
  2019; updated Arodi & Cheung 2021 / Sap et al. 2022).
- [[instruments/bigtom]] — **new page.** Causal-template, GPT-4-generated Sally–Anne-style ToM
  benchmark (Gandhi et al. 2023).
- CosmosQA (Huang et al. 2019) is used only as a 30-item qualitative probe — kept inline on the
  paradigm page, no standalone instrument page.
- 4 LLM subjects: Llama2-7b-chat, Llama2-13b-chat, GPT-3.5-Turbo, GPT-4.

## Relationship to Other Sources

- **Complements the false-belief literature already in the wiki.** Where
  [[sources/kosinski-2024]] *measures* whether LLMs pass false-belief tasks and
  [[sources/ullman-2023]] shows the passes are *fragile to perturbations*, this source *fixes*
  a failure mode by intervention — and uses the same Sally–Anne paradigm family
  ([[paradigms/false-belief-task]]). Together they triangulate the
  genuine-vs-pattern-matching debate
  ([[questions/llm-theory-of-mind-genuine-or-pattern-matching]]): an *elicited* improvement
  shows latent competence but does not, on its own, settle whether the competence is mentalizing
  or pattern-matching.
- **Reinforces [[theories/performance-competence-distinction]].** The SimToM gains and the
  oracle ceiling are a worked case of single-pass *performance* understating *competence* — the
  same interpretive principle [[sources/strachan-et-al-2024]] makes via "hyperconservatism."
- **Targeted scaffold vs. generic CoT.** SimToM-Multi shows generic "think step by step"
  reasoning does not help (and can hurt) where a *targeted* perspective-taking step does — a
  data point for [[questions/cot-alignment-with-internal-reasoning]].

## Limitations

- **Perspective-taking is implemented as "hiding."** It removes story parts an agent does not
  know; it does not *impute* unseen information, which real-world theory of mind often requires.
  On CosmosQA the model sometimes fabricated perspectives — a hallucination-vs-inference hazard
  (see [[questions/perspective-taking-hallucination-vs-inference]]).
- **GPT-4 × BigTOM self-grading confound** (BigTOM authored by GPT-4; GPT-4 saturates it).
- **Synthetic, canonical benchmarks.** ToMI/BigTOM are templated and Sally–Anne-shaped, with
  the attendant contamination/saturation concerns; SimToM is *not* stress-tested under
  [[sources/ullman-2023]]-style principle-preserving perturbations, so robustness of the gains
  is untested.
- **Not tested below 7B parameters**; Llama models can decline to answer (pushing accuracy
  below 50% random) and required extra guardrail-mitigation prompt lines.
