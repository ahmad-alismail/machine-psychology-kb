---
type: theory
field: machine-psychology
lens: psychological
tags: [emotion, appraisal, affect]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Emotion Appraisal Theory

> [!info] In plain terms
> Why do two people react completely differently to the same event — one terrified of a public
> speech, the other excited by it? Appraisal theory says it's not the event that creates the
> emotion, it's how you *interpret* it. Your emotional reaction is the output of a quick mental
> "size-up" of what the situation means for you. That makes emotions predictable: if you know how
> someone appraises a situation, you can predict what they'll feel — which is exactly what lets
> researchers assemble situations that reliably trigger a target emotion.

## Statement

**Emotion Appraisal Theory (EAT)**, also called the Appraisal Theory of Emotion, is a cognitive
approach holding that "our appraisals of stimuli determine our emotions, *i.e.*, how we interpret
or evaluate events, situations, or experiences will directly influence how we emotionally respond
to them" (Roseman & Smith 2001). It was developed from the 1960s onward — Arnold (1960) proposed
an early form; Lazarus (1991) and Scherer (1999) expanded and refined it.

Key, testable predictions:

- **The situation alone does not fix the emotion; the appraisal does.** "It is not merely the
  event or situation that elicits an emotional response but individual interpretations and
  evaluations of the event."
- **The same event can elicit different emotions across individuals**, depending on how each
  person appraises it (Moors et al. 2013) — e.g. a public speech appraised as threatening yields
  anxiety, appraised as an opportunity yields eagerness.
- **Specific situation types reliably arouse specific emotions** for most people. This is the
  prediction that makes EAT operationally useful: decades of appraisal research have catalogued
  situations empirically shown to elicit particular emotions, which can then serve as
  contextual stimuli.

A complementary structure used alongside EAT is **Parrott's hierarchical emotion framework**
(Parrott 2001; Shaver et al. 1987), which organizes emotions into three levels (primary →
secondary → tertiary); its six basic primary emotions split evenly into three positive and three
negative, from which negative subordinate emotions can be selected.

## Relevance to Machine Psychology

[[sources/huang-et-al-2025]] applies EAT directly to LLMs: it uses the theory's "situations
reliably arouse emotions" prediction to source 428 emotion-eliciting situations as *contextual
inputs* for models, then tests whether a model's measured emotional state shifts in the
human-appropriate direction when it imagines being in the situation — operationalizing the
question of whether an LLM "appraises" situations as humans do.

## Paradigms Grounded in This Theory

- [[paradigms/emotion-appraisal-situation-induction]]

## Sources

- [[sources/huang-et-al-2025]]
