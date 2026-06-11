---
type: question
field: machine-psychology
lens: psychological
tags: [external-validity, construct-validity, predictive-validity, open-problem]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Do human-validated cognitive tasks measure the same constructs in an LLM?

> [!info] In plain terms
> Psychologists trust tasks like the balloon-pumping risk game because decades of studies show a
> person's score predicts their real-world behavior (the task has "external validity"). When we run
> the very same task on a language model and read off a "risk-taking" number, we have *not* shown
> that number predicts anything about how the model behaves elsewhere. This question asks whether the
> borrowed tasks actually measure what they claim to when the test-taker is an AI.

## Why It Matters

A behavioral benchmark is only useful if its metrics generalize beyond the test. For humans, the
tasks in [[paradigms/cogbench-cognitive-phenotyping]] are externally validated — e.g. BART risk
scores correlate with real-world risk behaviors (Lejuez et al. 2002). For LLMs that link is assumed,
not demonstrated. If an LLM's "model-basedness" or "risk-taking" score does not predict its conduct
on a real agentic task, the phenotype is a description without a consequence — the same
predictive-validity gap that haunts [[questions/traits-predict-downstream-behavior]] for psychometric
inventories. Establishing it would turn CogBench into a forecasting instrument for capable-agent
behavior.

## What Sources Say

- [[sources/coda-forno-et-al-2024]] states the gap explicitly: "while cognitive science studies have
  demonstrated the external validity of the investigated tasks, it is yet to be shown for LLMs"
  (Sec 7), and lists establishing it as primary future work. The paper also shows the *construct* can
  behave differently in models than people — LLMs weight priors over likelihoods (vs. human
  system-neglect of both) and achieve high horizon-task performance "without any human-like
  exploration," hints that matching a human metric need not mean sharing the human mechanism.

## Suggested Investigation (toward a new paradigm)

- **Phenotype → downstream behavior.** Compute the ten CogBench metrics for a model set, then measure
  behavior on an independent agentic battery (resource acquisition, tool selection, risk-taking under
  stakes) and test whether the metrics predict it.
- **Mechanism check.** Where a model matches a human metric, probe whether it uses the same strategy
  (e.g. does high model-basedness reflect genuine planning over the transition structure?) via
  ablations and perturbed task variants.
- Pair with [[questions/longitudinal-behavioral-trends]] to test whether a metric's predictive power
  is stable across model generations.
