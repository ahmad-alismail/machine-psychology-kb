---
type: question
field: machine-psychology
lens: na
tags: [methodology, reproducibility, open-source, model-choice]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Should behavioral AI science be yoked to proprietary, commercially-controlled models?

> [!info] In plain terms
> Most LLM experiments run on closed products like GPT-4: you can't see inside them, the company
> can change or retire them without warning, and you can't always get an old version back. That
> makes it hard to reproduce a result or to explain *why* a model behaved a certain way. So a
> foundational question for the field is whether to keep building its science on a moving, opaque
> commercial product — or to standardize on open models, even at a capability cost.

## Why It Matters

If the object of study is a commercial product "that is not regulated and that researchers have
little influence over," then core scientific virtues are at risk: **reproducibility** (uncheckpointed
updates can "render the idea of reproducibility meaningless"), **explanation** (closed weights block
introspection of activations and training data), and even **continuity of access** (which can vanish
for "economic, political, or legal" reasons). This folds together two of [[sources/ong-2024]]'s
Outstanding Issues — *which LLMs should we use* (Issue 1) and *proprietary commercial control* (Issue
3) — because both are the same decision seen twice: open vs. closed, one model vs. many, and the
reproducibility cost of each choice.

## What Sources Say

- [[sources/ong-2024]]: "Many of the papers we reviewed used closed-source proprietary models …
  Closed-source means we do not have access to the model and data that can help guide inferences
  (Frank 2023b)." Companies "regularly update their models (and perhaps even learn from previous
  input)," and researchers "might lose access to these models for a variety of sudden, unforeseeable
  reasons." Hence: "Should we really be yoking the success of our science to such commercial
  products?" A further twist Ong raises: undisclosed **guardrails** may "constrain a model's moral
  judgments to conform to a particular view," and RLHF can induce idiosyncrasies (e.g. GPT adding a
  happy ending to a requested negative story), so "it is unclear which of these behaviors are learnt
  from data and which are engineered into the model." The proposed direction — "move to open-source
  models" — still requires standardizing conventions (which model; reproducibility).
- [[sources/loehn-et-al-2024]]: reproducibility and reliability are formal requirements of valid
  psychological testing ([[theories/psychometric-test-standards]]); proprietary, mutable models
  strain R1 (reliability) and the field's lack of standardization.

## Suggested Investigation (toward a new paradigm)

- **Open-model baseline batteries.** Standardize a behavioral battery on dated, checkpointed
  open-weights models so results are reproducible and introspectable, and report the capability gap
  vs. frontier proprietary models as a known cost.
- **Guardrail ablation.** Where possible, compare a base/open model to its safety-tuned counterpart
  on the same battery to separate "learnt from data" from "engineered" behaviors — turning Ong's
  transparency worry into a measurable contrast.
- **Reproducibility hygiene.** Require, as a publication norm, full prompts/procedures/hyperparameters
  including temperature and the access date for proprietary models (Outstanding Issue 5), so closed-
  model results are at least *documented* even when they cannot be re-run.
