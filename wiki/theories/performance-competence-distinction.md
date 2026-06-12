---
type: theory
field: machine-psychology
lens: psychological
tags: [methodology, interpretation]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# Performance–Competence Distinction

> [!info] In plain terms
> Someone fumbling a mental-math problem doesn't mean they can't do math — they might be
> tired, rushed, or confused by the wording. What an agent *does* in one situation
> (performance) can understate what it *can do* (competence). For AI evaluation this is a
> warning label: a model failing your test doesn't prove the ability is absent, and that
> cuts both ways when deciding how much to trust an experiment's negative result.

## Statement

"The way humans *perform* in a particular situation may not fully capture their
underlying *competence*" (Chomsky 1965). Humans make mistakes on easy calculations and
produce ungrammatical speech without lacking the abstract capability for math or
language. The testable consequence: a negative behavioral result licenses inferring the
absence of a construct only after performance-degrading factors (task wording, format,
elicitation conditions) have been ruled out.

## Relevance to Machine Psychology

[[sources/hagendorff-et-al-2024]] flags this as one of two key
interpretive principles for LLM experiments (citing Firestone 2020; Lampinen 2022):
"does the absence of behavior Y indicate the absence of the construct X?" In practice,
omitting elicitation scaffolds such as chain-of-thought or few-shot examples "can lead
to underestimations of the model's capabilities" — every negative finding inherits this
caveat. See [[questions/longitudinal-behavioral-trends]] for the related interpretive
gap.

[[sources/ong-2024]] sharpens this into an **asymmetric existence-proof logic**. A model
that *can* "do X" licenses a claim about the **sufficient** (not necessary) conditions
for a capability to emerge; but a model that *cannot* "do X" cannot ground a
**necessary**-conditions claim, because the failure "could easily be falsified with a
newer and more capable model." Concretely, an LLM failing the Winograd Schema does not
show that world/commonsense knowledge is necessary, nor that "statistical learning from
language co-occurences by itself is insufficient." Hence such null results "do not yet
lend themselves well to lasting scientific inferences, if all it takes is an engineering
counterproof" — and "Arguing from a lack of ability is less scientifically sound than an
argument from the presence of one." This is the load-bearing grounding of
[[paradigms/llm-as-computational-model]].

## Paradigms Grounded in This Theory

- [[paradigms/llm-as-computational-model]] — its existence-proof inference *is* the
  asymmetric version of this distinction; [[paradigms/gpt-ology]] inherits the same
  caveat on negative capability results.
- [[paradigms/adversarial-vignette-perturbation]] — operationalizes the principle: a perturbed
  twin that preserves the construct but changes the surface form separates memorized *performance*
  from underlying *competence*.
- Cross-cutting: it constrains interpretation of *all* paradigms rather than generating
  designs of its own; each paradigm page records the resulting elicitation controls in
  its Validity Concerns section.

## Sources

- [[sources/hagendorff-et-al-2024]]
- [[sources/ong-2024]] — the asymmetric existence-proof sharpening
- [[sources/binz-schulz-2022]] — demonstrates the principle empirically: GPT-3's vignette
  *performance* "crucially depend[s] on how a prompt is presented."
- [[sources/kosinski-2024]] — applies the distinction to theory of mind: invokes Turing's
  "behaving *as if*" against Searle's Chinese-room argument and explicitly declines to settle
  whether LLMs *have* ToM, while cautioning that model failures "do not necessarily indicate a
  lack of ability" (scoring-key limits, confabulation, administrator constraints).
- [[sources/ullman-2023]] — the inverse application: argues *averaged successes* are mere
  *performance* while an *outlying failure* on a novel input exposes missing *competence* (the
  multiplication analogy — "5\*5=25" a hundred times but failing "213\*261" shows no general
  multiplication algorithm). Sharpens the Turing-Test critique via Block (1981): intelligence
  attribution should weigh the *algorithm* generating a behavior, not only its input–output —
  grounding the "skeptical zero-hypothesis" for machine intuitive psychology.
