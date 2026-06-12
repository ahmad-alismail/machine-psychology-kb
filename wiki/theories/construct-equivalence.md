---
type: theory
field: machine-psychology
lens: psychological
tags: [construct-validity, measurement-invariance, foundations, anthropomorphism, ai-native]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Construct Equivalence (the "Imposed Etic" Problem)

> [!info] In plain terms
> When researchers take a personality test built for, say, Americans and run it in another
> culture without checking whether the words mean the same thing, they risk "imposing" a
> foreign yardstick — the scores look comparable but secretly measure different things.
> Applying a human personality or values test to a language model is the same gamble, one step
> bigger: does "Openness" or "Benevolence" even *mean* the same thing for a machine? This page
> is about that gamble — and the growing evidence that the answer is often "no," which is why
> some researchers now build tests *for* models from scratch.

## Statement

**Construct equivalence** asks whether a psychological construct (personality, values,
intelligence…) "carries the same meaning when applied to LLMs as it does for humans." Per
[[sources/ye-et-al-2025]], this is "a particularly fundamental form" of measurement invariance
and "structurally analogous to the 'imposed etic' issue in cross-cultural psychometrics" (Berry
1969), where "instruments developed in one cultural context are applied to another without first
verifying conceptual equivalence." Transposed: applying human inventories to LLMs *presupposes*
equivalence across the human–LLM divide — "an assumption that requires explicit empirical
testing rather than being taken for granted."

The key, testable prediction: if a construct is equivalent, the **latent factor structure**
recovered from LLM responses should match the human one. The survey reports it repeatedly does
not — **evidence of construct non-equivalence**:

- LLM personality "types do not align with the clear separation of Big Five traits found in
  humans" (Sühr et al. 2023).
- "human-oriented HEXACO tests are inapplicable to LLMs, as key personality factors may be
  absent" (Peereboom et al. 2024).
- LLM self-reports "do not fit Schwartz's model," and LLMs "encode values distinct from humans"
  (Ye et al. 2025b; Hadar-Shoval et al. 2024).
- LLMs display "contextually adaptive traits, unlike the stable characteristics seen in humans"
  (Kovač et al. 2023).

Conclusion: "the same instrument does not measure the same latent property across the human–LLM
divide," so "robust LLM psychometric evaluation requires new operational definitions, distinct
from or only loosely analogous to human traits."

### Toward AI-native psychometrics

The survey's prescribed response is **AI-native psychometrics**: build constructs and tests from
the model's own behavioral covariation rather than importing human ones. Examples it cites —
generative psycho-lexical value systems that "outperform Schwartz's system" (Ye et al. 2025c),
the Core Sentiment Inventory (Ma et al. 2025), and the TRAIT personality test (Lee et al. 2024b)
with "higher validity and reliability than other personality measures." A caution it raises:
these new constructs "may be dependent on the measurement tools, tasks, and specific LLMs used"
(different studies recover different value/ability factor structures), so the fundamental
structure of LLM behavior is still open (§8.2).

## Relevance to Machine Psychology

Construct equivalence is the precondition every behavioral eval in this wiki silently assumes.
If a paradigm names a safety-relevant behavior (deception, power-seeking) using a human
construct, its validity depends on that construct meaning the same thing for the model — or on
an explicit argument that it has been redefined for LLMs. This is the theory-grounded home for
the concern that [[theories/psychometric-test-standards]] lists as its "distinct constructs for
LLMs" meta-problem and that [[questions/redefine-constructs-for-llms]] poses as an open question.
It also sharpens the **anthropomorphic fallacy** warning: human-like outputs do not evidence a
human-like construct, and similar outputs may arise from different internal processes (the
intrinsic-vs-prompted-expression mechanism on [[theories/ai-psychometrics]]).

## Paradigms Grounded in This Theory

- [[paradigms/closed-vs-open-ended-construct-probe]] — its self-report↔behavior discrepancy is a
  direct symptom of non-equivalence: the inventory does not capture the same property the
  behavior reveals.
- [[paradigms/psychometric-inventory-administration]] — the paradigm whose foundational
  assumption (human inventory → meaningful LLM trait) this theory puts under test.

## Sources

- [[sources/ye-et-al-2025]] — §2.2 (construct equivalence defined), §6.2.2 (imposed etic;
  non-equivalence evidence; AI-native instruments), §8.2 (from human constructs to LLM
  constructs).
- [[sources/loehn-et-al-2024]] — independently recommends "standalone construct definitions and
  tests for LLMs"; see [[questions/redefine-constructs-for-llms]].
