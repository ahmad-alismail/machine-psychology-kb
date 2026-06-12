---
type: theory
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Simulation Theory (of Mind)

> [!info] In plain terms
> One leading explanation for how we read other people's minds: instead of consulting a
> mental rulebook about how minds work, we *simulate* the other person — we "step into their
> shoes," imagine seeing what they see and believing what they believe, and then just read
> off what we would think from there. The key idea is that mind-reading happens in two beats:
> first take the other person's perspective, *then* answer the question. This page matters
> because that two-step recipe can be turned into a way of prompting an AI to reason about
> what someone else knows.

## Statement

"Simulation Theory" (ST) (Goldman 2006) explains humans' theory-of-mind ability by a
cognitive mechanism comprising **two processes** run in sequence:

1. **Perspective-Taking** — "putting yourself in their shoes": simulating the *beliefs and
   goals* of the other individual. ST describes this as "imagining believing" what they
   believe (Currie 2002a) or "imagining desiring" what they desire (Currie 2002b); Barlassina
   and Gordon (2017) frame it as "switching roles" to grasp the other person's "relevant
   beliefs and goals". It is the *initial* step.
2. **Question-Answering** — answering a theory-of-mind question by observing and reasoning
   *as if you were in their shoes* (Barlassina & Gordon 2017; Goldman 2008). Some theorists
   describe this as "reuse" of a "cognitive mechanism" shared between humans (Hurley 2008;
   Craver 2007).

The testable consequence the wiki cares about: an agent that performs perspective-taking
*before* answering should track another's (possibly false) belief, whereas an agent that
collapses the two into a single pass tends to answer from the *true world state* — a failure
of perspective-taking.

ST has philosophical support (Gordon 2007; Evans 1982; Gordon 1986) and empirical support
from cognitive science, notably the discovery of **mirror neurons** as a possible physical
substrate (Gallese & Goldman 1998; Gallese et al. 2004; Hurley 2008). Heal (1994) argues the
*implementation* of these mechanisms is irrelevant as long as it yields similar mental
states — which (per [[sources/wilf-et-al-2024]]) is what motivates implementing ST using the
artificial cognitive processes of an LLM.

> [!note] Rival theory (the paper does not adjudicate)
> ST's main alternative in the theory-of-mind literature is **"Theory-Theory" (TT)** (Gopnik
> & Wellman 1994): the idea that humans do theory of mind by *inferring from a large body of
> commonsense rules* — e.g. the "Law of Sight" (if a person has no occlusions and something
> is in front of them, they will see it). The debate between ST and TT has "raged for
> decades." [[sources/wilf-et-al-2024]] explicitly does **not** weigh in (this discussion
> lives in its Appendix A); it simply implements an "explicitly simulation-based ToM approach"
> and reports results.

## Relevance to Machine Psychology

[[sources/wilf-et-al-2024]] is the primary source applying ST to LLMs. It turns
perspective-taking into a concrete prompting intervention ([[paradigms/simtom-perspective-taking-prompting]]):
the model is first asked to filter a story to only the events the target character *knows*,
and only then asked the theory-of-mind question on that filtered story. The hypothesis is
that LLMs struggle with theory of mind because they attempt perspective-taking and
question-answering "in a *single inference pass*"; splitting them into two passes, as ST
prescribes, substantially improves [[theories/theory-of-mind]] performance. This makes ST a
worked example of a psychological *theory* generating a new evaluation/elicitation
*paradigm* — and it dovetails with [[theories/performance-competence-distinction]]: a model
can be far more *competent* at theory of mind than a single-pass probe reveals.

## Paradigms Grounded in This Theory

- [[paradigms/simtom-perspective-taking-prompting]] — the two-stage perspective-taking →
  question-answering prompting framework (SimToM)
- [[paradigms/perspective-filtering-tom-pipeline]] — SimToM as one member of the broader
  perspective-filtering enhancement family ([[sources/chen-et-al-2025]])

## Sources

- [[sources/wilf-et-al-2024]]
- [[sources/chen-et-al-2025]]
