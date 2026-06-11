---
type: paradigm
field: machine-psychology
lens: psychological
tags: [inference-framework, typology, existence-proof, computational-model, evaluation-validity]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# LLM-as-Computational-Model (Inferences about Human Cognition)

> [!info] In plain terms
> Here the model is treated not as the object of study but as a stand-in *theory* of how human
> minds might work. If a model trained only on text reproduces a human reasoning quirk — say, the
> "Linda the bank teller" fallacy — that is evidence about what kinds of learning *could* produce
> that quirk in people. The strongest version is an "existence proof": showing a machine *can*
> learn X demonstrates that the conditions it had were *sufficient* for X. The catch, which Ong
> stresses, is that this logic only runs one way.

> [!note] Inference-framework paradigm
> One of three research paradigms in [[sources/ong-2024]]'s typology. It is the **inference lens**
> — not a stimulus design — applied to the shared base experiment ("an LLM responds to some
> input"). What makes a study this paradigm is the *goal*: inferences "about human cognition, via
> experimental comparisons." Sibling lenses: [[paradigms/gpt-ology]], [[paradigms/silicon-sampling]].

## Theoretical Grounding

- [[theories/performance-competence-distinction]] — Ong's **asymmetric existence-proof logic** is
  the load-bearing grounding: a *presence* of ability licenses a sufficient-conditions claim; an
  *absence* does not license a necessary-conditions claim ("could easily be falsified with a newer
  and more capable model").

## Target Behaviors

- This lens makes inferences about **human cognition**, not about a dangerous AI capability; it
  targets no safety-concept directly. (Recorded for completeness; the lens is a scientific-inference
  framework, not a misalignment detector.)

## Setup / Elicitation

The shared base experiment, but the inference is "about human cognition, via experimental
comparisons" — treating the LLM "as a computational model of human cognition" (Blank 2023; Frank
2023b). Borrowing Marr's levels of analysis, comparisons may be at the computational level (Blank
2023) or even the neural/processing level (Hosseini et al. 2024). Sub-modes Ong distinguishes:

- **Error-pattern comparison** — compare LLM errors and biases to human ones to learn how such
  errors "might be learnt from text data" (Aher et al. 2023). E.g. GPT-3 makes Kahneman & Tversky
  (1972)-esque conjunction-fallacy errors — rating "Linda is a feminist bank teller" more probable
  than "Linda is a bank teller" (Binz & Schulz 2023); moral-acceptability judgments resembling
  humans (Dillion et al. 2023; Jin et al. 2022). See [[paradigms/heuristics-and-biases-battery]].
- **Existence Proofs** — the mere demonstration of a capability serves as proof about *learnability*
  / sufficient conditions: how much of language is learnable vs. innate (Contreras Kallens et al.
  2023; Piantadosi 2023), the language-vs-thought gap (Mahowald et al. 2024), event knowledge from
  word co-occurrence alone (Kauf et al. 2023), symbolic reasoning from nonsymbolic learning (Geiger
  et al. 2023), and grounded language acquisition from a single child's audiovisual stream (Vong et
  al. 2024).
- **Internal representations** — "peer into the inner workings" via probing (Belinkov 2022),
  neuronal/activation comparison with human brain activity (Hosseini et al. 2024; Kumar et al.
  2022), or causal/mechanistic interpretability interventions (Wu et al. 2024; Yamakoshi et al.
  2023).

## Scoring / Procedure

- The comparison is between LLM output and human behavior (error rates, judgment patterns, neural
  alignment); the inference targets human cognition. Same procedural controls as the other lenses
  apply (full prompt/hyperparameter reporting; sampling + statistics; counterbalancing).
- The existence-proof inference is **asymmetric and must be applied as such**: read a *success* as a
  sufficient-conditions claim only; never read a *failure* as a necessary-conditions claim.

## Validity Concerns

- **Asymmetric inference / null results.** "If a model can 'do X', we could make a claim about the
  sufficient (but not necessary) conditions … But if an LLM model 'cannot do X', that cannot be used
  as an argument for the necessary conditions." A failure (e.g. on Winograd Schema tasks) "could
  easily be falsified with a newer and more capable model"; such null results "do not yet lend
  themselves well to lasting scientific inferences, if all it takes is an engineering counterproof."
- **Training-data presence vs. genuine cognition.** How much of an apparent human-like behavior
  (e.g. the conjunction fallacy) is "due to them being present in the training data … or due to
  specific styles of prompting?" Memorization is "a much less interesting scientific explanation."
- **Closed-model opacity.** "Studying internal representations of LLMs may not be possible,
  especially with proprietary models like the GPT-series models, which are only accessible via a
  limited API" — see [[questions/yoking-science-to-proprietary-models]].

## Evidence

- Surveyed illustratively (the paper is meta-level): GPT-3 reproduces the conjunction fallacy (Binz
  & Schulz 2023); a network trained on one infant's audiovisual stream shows "grounded language
  acquisition from statistical learning alone" (Vong et al. 2024) — both via [[sources/ong-2024]].

## Open Questions

- [[questions/yoking-science-to-proprietary-models]]
- [[questions/bias-disappearance-contamination-or-capability]]
