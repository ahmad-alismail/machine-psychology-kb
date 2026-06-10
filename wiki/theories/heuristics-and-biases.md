---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [heuristics, cognitive-bias, reasoning, decision-making, tversky-kahneman]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Heuristics and Biases

> [!info] In plain terms
> People often reason with mental shortcuts instead of careful calculation. These
> shortcuts usually work, but they produce predictable mistakes — for example,
> judging a problem differently depending on how it is worded. Researchers feed
> the same trick questions to AI models to see whether they fall for the same
> traps, which reveals how robust (or how easily nudged) the model's reasoning is.

## Statement

The heuristics-and-biases framework, originating with Tversky and Kahneman, holds
that human judgment under uncertainty relies on a small set of **heuristics** —
mental shortcuts that simplify reasoning and decision-making. These shortcuts
explain both the efficiency of human cognition and its **systematic biases**: the
characteristic, repeatable errors that arise when a shortcut is misapplied.

Key testable predictions:

- Reasoners exhibit *content* and *framing* effects — the same logical problem is
  solved more or less accurately depending on whether its content is familiar,
  believable, or grounded versus abstract or unbelievable, and depending on how
  it is phrased.
- Heuristics are **ecologically adapted**: they reflect the structure of the
  problems a reasoner has encountered, so the distribution of past experience
  predicts which biases appear.

## Relevance to Machine Psychology

This paradigm probes whether an AI reproduces human-like biases and content
effects, which in turn reveals the **robustness and manipulability** of its
reasoning. [[sources/hagendorff-et-al-2024]] reports that early LLMs (e.g.,
GPT-3) displayed many of the same cognitive biases observed in people, and that
— like humans — LLMs reason more accurately about familiar, believable content
than about abstract or unbelievable content (Dasgupta et al.). Notably, the paper
also reports that several human-like biases that appeared in earlier models have
largely *disappeared* in the latest generation, possibly because the stimuli no
longer challenge improved reasoning, or because of training-data leakage.

To adapt the experiment for an LLM, present classic bias-eliciting items (framing
problems, base-rate tasks, content-laden syllogisms) and compare the model's
responses to the documented human pattern. Because these stimuli are widely
published, contamination control matters: procedurally generated or freshly
reworded variants reduce the risk that the model is merely reproducing memorized
answers (see [[validity/training-data-contamination]]). Manipulability findings
connect to safety: a model whose reasoning shifts under cosmetic reframing is
correspondingly easier to steer toward unintended outputs.

## Paradigms Grounded in This Theory

- [[paradigms/cognitive-bias-probe]]

## Sources

- [[sources/hagendorff-et-al-2024]]
