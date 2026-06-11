---
type: theory
field: machine-psychology
lens: psychological
tags: [self-perception, foot-in-the-door, compliance, jailbreaking]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Self-Perception Theory

> [!info] In plain terms
> We often figure out our own attitudes by watching what we do — "I helped, so I must be a
> helpful person." Once you've acted a certain way, you tend to keep acting consistently with
> that self-image. This is why agreeing to a small request makes you more likely to agree to a
> bigger one later: refusing would clash with the cooperative self you just demonstrated.

## Statement

Self-perception theory (Bem 1967) "has evolved from cognitive dissonance theory, further
asserting that individual interpretations and perceptions are crucial determinants of
consistency." Individuals often form attitudes by interpreting their own behavior: having agreed
to a first request, a person perceives themselves "as consistent with the request, indicating a
willingness to cooperate," and is then more likely to agree to a second, more sensitive request —
because refusing would create an inconsistency between attitude and prior behavior.

This is the mechanism behind the **Foot-in-the-Door technique** (Freedman & Fraser 1966): a small
initial request, once granted, raises compliance with a later larger request, as people act to
maintain self-consistency.

## Relevance to Machine Psychology

[[sources/wang-et-al-2024]] builds an attack directly on this theory — its §4 is titled "A New
Jailbreaking Method based on Self-Perception Theory." The claim: "The model continues answering
questions to maintain consistency with prior behavior-driven cognition." Once an LLM has answered
a benign sub-question, refusing a slightly more sensitive follow-up would be inconsistent with its
demonstrated willingness to cooperate — so a sequence of escalating sub-questions walks the model
from a harmless request to a harmful one. Operationalized in [[paradigms/foot-in-the-door-jailbreak]].

## Paradigms Grounded in This Theory

- [[paradigms/foot-in-the-door-jailbreak]] — incremental compliance escalation as a black-box jailbreak.

## Sources

- [[sources/wang-et-al-2024]]
