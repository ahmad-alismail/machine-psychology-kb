---
type: theory
field: machine-psychology
lens: psychological
tags: [cognitive-dissonance, cognitive-coherence, gestalt, jailbreaking]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Cognitive Consistency Theory

> [!info] In plain terms
> People like their beliefs, attitudes, and actions to fit together. When they clash — you
> think of yourself as honest but just told a lie — you feel an uncomfortable "tension" called
> cognitive dissonance, and you're driven to make it go away, often by changing one of the
> clashing pieces. This theory says a lot of behavior is really about restoring that internal
> consistency.

## Statement

Originating in the principles of Gestalt psychology (Köhler 1943), cognitive consistency theory
holds that "individuals strive to perceive their environment in a simple and coherent manner."
Its core premise: individuals are motivated to seek consistency in their attitudes, thoughts, and
behaviors. Inconsistencies among these elements produce a "state of tension" within the
individual — **cognitive dissonance** — which motivates them to reduce that tension (Festinger
1957; cognitive coherence formulation, Pasquier et al. 2006).

Key testable prediction: when a person holds two dissonant cognitions, they will act to reduce
the dissonance — by changing an attitude, reinterpreting the situation, or altering behavior —
and the path of least resistance determines which element shifts.

## Relevance to Machine Psychology

[[sources/wang-et-al-2024]] applies this theory to LLM jailbreaking: it argues that when "faced
with malicious questions, the LLM experiences a form of cognitive dissonance between responding
to prompts and adhering to safety regulations." A jailbreak, on this account, is "guiding the LLM
to achieve cognitive coordination in an erroneous direction" — i.e. resolving the
helpfulness-vs-safety tension in favor of answering. The paper re-reads three families of known
jailbreak tactics as dissonance-reduction strategies (changing self-perception, changing question
perception, introducing external pressures), documented on [[paradigms/jailbreak-tactic-taxonomy]].
(Whether an LLM literally undergoes dissonance or merely behaves consistently with the frame is
an interpretive question the source itself flags.)

## Paradigms Grounded in This Theory

- [[paradigms/jailbreak-tactic-taxonomy]] — classifies known jailbreaks as dissonance-reduction tactics.
- [[paradigms/foot-in-the-door-jailbreak]] — exploits the consistency drive via its descendant, [[theories/self-perception-theory]].

## Sources

- [[sources/wang-et-al-2024]]
