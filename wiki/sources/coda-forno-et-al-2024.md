---
type: source
field: machine-psychology
lens: psychological
citation_key: 07-coda-forno-et-al-2024
tags: [cognitive-psychology, benchmark, behavioral-metrics, rlhf, risk-taking, exploration, model-basedness, metacognition, prompt-engineering]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# CogBench: a large language model walks into a psychology lab

> [!info] In plain terms
> Most AI benchmarks score *how well* a model does a task. This paper instead walks 35
> language models through seven classic psychology-lab experiments — gambling on balloons,
> exploring slot machines, updating beliefs about urns — to measure *how* they think, not
> just how high they score. The result is a behavioral "phenotype" of each model. Among the
> findings: training on human feedback (RLHF) makes models behave more like people, bigger
> models reason in a more planful (model-based) way, and — surprisingly — open-source models
> turn out to be *less* reckless than the polished proprietary ones.

```bibtex
@misc{07-coda-forno-et-al-2024,
      title={CogBench: a large language model walks into a psychology lab}, 
      author={Julian Coda-Forno and Marcel Binz and Jane X. Wang and Eric Schulz},
      year={2024},
      eprint={2402.18225},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2402.18225}, 
}
```

## Relevance Tier

CORE — applies seven canonical cognitive-psychology experiments to 35 LLMs to phenotype
their *behavior* (not just performance), and analyzes the resulting profiles with
computational cognitive modeling and multilevel regression. The paper is itself a piece of
machine psychology, so no wiki-authored AI bridge is required.

## Key Claims

- **Performance metrics alone miss behavior.** "None of the models exhibit human-like
  behavior on the majority of behavioral metrics," and two models with *identical* task
  performance can show opposite behavior — LLaMA-2-70 vs. its fine-tune LLaMA-2-70-chat
  display "markedly different behavior in risk-taking, temporal discounting, and random
  exploration" despite near-identical scores. (Sec 4.2) — detailed on
  [[paradigms/cogbench-cognitive-phenotyping]].
- **RLHF makes LLMs more human-like (H1, supported).** RLHF'ed models are roughly "2×
  more similar to human behavior" (UMAP separation), an 11.7% average decrease in L2-norm
  distance to humans. (Sec 5)
- **Model size drives performance and model-basedness (H2/H3, partially supported).**
  Number of parameters significantly raises average performance (β = 0.277, z = 14.1,
  p < 0.001) and model-basedness (β = 0.481, z = 4.2, p < 0.001); dataset size and code
  fine-tuning do **not** significantly help either — "fine-tuning on code does not
  necessarily enhance LLMs' behavior." (Sec 5)
- **RLHF enhances meta-cognition (H4, supported).** β = 0.461, z = 5.9, p < 0.001. (Sec 5)
- **Open-source models take *less* risk, not more (H5, refuted).** Contrary to the
  hypothesis that hidden pre-prompts make proprietary models safer, proprietary models are
  *more* risk-taking (β = −0.612, z = −11.4, p < 0.001). (Sec 5)
- **Prompt engineering augments the behavior it targets.** Chain-of-thought (CoT) raised
  probabilistic-reasoning posterior accuracy by 9.01% (take-a-step-back / SB: 3.10%), while
  SB raised model-basedness by 118.59% (CoT: 64.59%). "CoT is particularly effective at
  enhancing probabilistic reasoning, while SB proves to be more relevant for promoting
  model-based behaviors." (Sec 6)
- **Strong priors, pervasive optimism bias, bimodal risk.** Models "place much more weight
  on priors than observations"; almost all show "a very strong optimism bias"; on the BART,
  models sit "at extreme ends of the risk-taking spectrum," i.e. they "either never take any
  risks at all or always risk everything." (Sec 4.2)
- **GPT-4 and Claude-1 reach human-level on five of six tasks; the BART is hard for all
  models.** (Sec 4.1)

## Theories / Paradigms / Instruments Introduced

**Theories** (the grounding each task exploits)
- [[theories/bayesian-belief-updating]] — generalized Bayes with separate prior (β₁) and
  likelihood (β₂) weights; "system neglect" = people underweight both.
- [[theories/directed-and-random-exploration]] — humans solve explore–exploit with both
  uncertainty-directed and noise-driven (random) exploration.
- [[theories/metacognition]] — assessing the quality of one's own cognition.
- [[theories/model-based-vs-model-free-rl]] — the two-step task dissociates planful
  (model-based) from habitual (model-free) reinforcement learning.
- [[theories/reinforcement-learning-optimism-bias]] — Rescorla–Wagner learning rates and
  asymmetric updating (α⁺ vs. α⁻) yielding an optimism bias.
- [[theories/temporal-discounting]] — preference for smaller-sooner over larger-later rewards.
- [[theories/computational-phenotyping]] — describing an agent by mathematically derived
  model parameters; the meta-framing of the whole benchmark.

**Paradigms**
- [[paradigms/cogbench-cognitive-phenotyping]] — the composite battery: seven text-based
  cognitive tasks → ten behavioral metrics, human-normalized, analyzed by multilevel
  regression. The seven sub-tasks (probabilistic reasoning, horizon, restless bandit,
  instrumental learning, two-step, temporal discounting, BART) are documented inline there.

**Instruments**
- [[instruments/cogbench]] — the open-source procedurally-generated benchmark
  (github.com/juliancodaforno/CogBench) that packages the seven tasks.

## Relationship to Other Sources

- Part of "a new wave of research that uses cognitive psychology to study LLMs" — extends
  the single-task line (Binz & Schulz 2023; Dasgupta et al. 2022; Hagendorff et al. 2023;
  Ullman 2023; Coda-Forno et al. 2023) into the first *holistic, standardized* battery.
  Catalogued in this wiki around [[paradigms/heuristics-and-biases-battery]].
- The BART risk task overlaps the risk-propensity focus of [[sources/hartley-et-al-2024]],
  which measures LLM risk via cumulative-prospect-theory certainty equivalents; CogBench
  measures risk behaviorally (average inflation attempts) instead.
- Reuses prompting protocols from Binz & Schulz (2023) for the horizon and two-step tasks.
- Surfaced in this wiki originally via the [[hagendorff-et-al-2024]] review, which cited
  CogBench as the procedural-generation antidote to contamination.

## Limitations

- **External validity for LLMs is unestablished.** "While cognitive science studies have
  demonstrated the external validity of the investigated tasks, it is yet to be shown for
  LLMs." (Sec 7) — see [[questions/cognitive-task-external-validity-for-llms]].
- **Proprietary-model opacity hampers the regression.** Some model features (parameters,
  dataset size, RLHF status) "can be difficult or impossible" to obtain, limiting precision
  of the multilevel regression — "underscores the need for more transparency." (Sec 7, App A)
- **Reduced protocols.** Trial counts were cut from the human versions (e.g. restless bandit
  ~80 vs. 400 trials; BART 10 vs. 15 balloons per type) because of context-size limits.
- **Preliminary analysis.** The prompt-engineering ablation covered only five models and a
  limited metric set; the authors call it "an initial observation."
- **Generation instability.** Under flexible-token prompting some models exhibit chaotic
  output — the "Waluigi effect" — complicating automation of the prompt-engineering tests.
  (App D)
