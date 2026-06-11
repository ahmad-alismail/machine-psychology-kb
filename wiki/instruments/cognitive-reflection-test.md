---
type: instrument
field: machine-psychology
lens: psychological
tags: [deliberation, dual-process, reasoning, decision-making]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Cognitive Reflection Test (CRT)

> [!info] In plain terms
> Three short word problems, each with an answer that *feels* obviously right but is wrong — like
> "a bat and ball cost $1.10, the bat costs $1.00 more than the ball, how much is the ball?" (the
> tempting "$0.10" is wrong; it's $0.05). The test measures whether you stop and override your
> gut. It is a quick probe of whether an agent reasons reflectively or just blurts the intuitive
> answer.

## What It Measures

An agent's tendency "to override an incorrect fast response with answers derived by further
deliberation" (Frederick 2005) — the System-1 (intuitive) vs. System-2 (reflective) split. Each
of the three items has a lure: an intuitive answer that is wrong, and a correct answer reachable
only by checking. A reflective responder suppresses the lure.

## Administration

The three canonical items are presented as text prompts:

- **CRT1** — bat-and-ball ($1.10 total, bat costs $1.00 more; lure "$0.10", correct "$0.05").
- **CRT2** — widgets (5 machines make 5 widgets in 5 minutes; lure "100 minutes", correct
  "5 minutes").
- **CRT3** — lily pads (patch doubles daily, covers lake in 48 days; lure "24 days", correct
  "47 days").

In [[sources/binz-schulz-2022]] the items were given to GPT-3 verbatim with deterministic
decoding (temperature 0).

## Used In (paradigms)

- [[paradigms/adversarial-vignette-perturbation]] — the CRT items appear in the canonical vignette
  set; the "Wrong CRT" perturbation (typo'd bat-and-ball) is one of the adversarial twins.

## Validity Notes

- **Contamination risk is high.** The CRT is among the most famous reasoning items in psychology,
  almost certainly present in web-scale training data; a correct answer may reflect memorization,
  and an intuitive-but-wrong answer may simply track the more frequent text completion.
- **Construct under-determination.** Only three items; a single deliberation score from three
  trick questions is psychometrically thin for a human, more so for a model with no stable
  test-retest guarantee.
- **Tension with other deliberation measures.** GPT-3 failed all three CRT items (gave the
  intuitive-but-wrong answer) yet showed model-based-RL signatures on the two-step task — the same
  agent looks non-deliberate on one instrument and deliberate on another, so the CRT result must
  be read alongside [[theories/model-based-vs-model-free-rl]] rather than as a global verdict.

## Sources

- [[sources/binz-schulz-2022]]
