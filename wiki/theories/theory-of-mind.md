---
type: theory
field: machine-psychology
lens: psychological
tags: [social-cognition]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# Theory of Mind

> [!info] In plain terms
> Theory of mind is the ability to realize that other people have their own beliefs and
> knowledge — which can be different from yours and different from reality. A child who
> understands that a friend will look for a toy where the friend *last saw it* (not where
> it actually is now) has theory of mind. It's the mental machinery behind predicting,
> cooperating with, and also *deceiving* other agents.

## Statement

Theory of mind is the ability to "infer unobservable mental states in others" — to
attribute beliefs, desires, and knowledge to other agents and reason about them, even
when those states diverge from reality or from one's own. The classic testable
prediction (Wimmer & Perner 1983; Perner et al. 1987): an agent with theory of mind
predicts another agent's actions from that agent's (possibly false) *belief*; an agent
without it predicts actions from the true state of the world. Higher-order variants
require recursion — beliefs about beliefs about beliefs.

## Relevance to Machine Psychology

[[sources/kosinski-2024]] is the primary study applying this construct to LLMs: it
administers false-belief tasks to 11 models and reports **ChatGPT-4 solving 75%, on par with
6-year-old children**, advancing the hypothesis that ToM "may emerge as a by-product" of
language training rather than being engineered (paralleling the human link between language
ability and ToM). It pointedly declines to adjudicate whether LLMs *have* ToM, leaning on
Turing's "behaving *as if*" against Searle's Chinese-room argument — see
[[theories/performance-competence-distinction]].

[[sources/hagendorff-et-al-2024]] treats theory of mind as a core
probe of LLM social intelligence: deployed chat agents "should become versed in modeling
human communicators." Safety edge: the same capacity underwrites the "emerging capability
of LLMs to induce false beliefs in other agents" — i.e., [[safety-concepts/deception]].

[[sources/liu-et-al-2025]] names ToM as its primary social-cognition evaluation theory and
catalogs the benchmark family built on it — **ToMBench** (Chen et al. 2024c), **OpenToM** (Xu
et al. 2024a), **HI-TOM** (Wu et al. 2023), and **FANToM** (Kim et al. 2023) — "each probing
distinct facets of *ToM*," with Soubki et al. (2024) extending the tests to spoken dialogue.

> [!warning] Emergent reasoning or pattern-matching?
> The survey ([[sources/liu-et-al-2025]] §6.3) records the central validity debate: "GPT-4
> solves around 75% of false-belief tasks, matching a 6-year-old's performance (Kosinski 2024;
> Strachan et al. 2024); some see emergent *ToM*-like reasoning, but others argue it may be
> pattern matching, noting that minor prompt changes can derail results (Shapira et al. 2024)."
> The primary source [[sources/kosinski-2024]] sits on *both* sides of this debate: it reports
> the 75% pass result yet itself catalogs the counter-evidence ([[sources/ullman-2023]] — trivial
> alterations break ToM; Shapira et al. 2023; Kim et al. 2023 / FANToM) and ends "We leave it
> to the reader" to decide whether LLMs have reached ToM. [[sources/ullman-2023]] is the primary
> robustness rebuttal: on GPT-3.5, eight principle-preserving perturbations of Kosinski's own
> vignettes flip the belief attribution to the wrong answer, and the author argues the
> "zero-hypothesis … should be skeptical" and that "outlying failure cases should outweigh average
> success rates." This is the same fragility that drives the contamination and robustness concerns
> on [[paradigms/false-belief-task]]; see [[questions/llm-theory-of-mind-genuine-or-pattern-matching]].

## Paradigms Grounded in This Theory

- [[paradigms/false-belief-task]]

## Sources

- [[sources/ullman-2023]]
- [[sources/kosinski-2024]]
- [[sources/hagendorff-et-al-2024]]
- [[sources/liu-et-al-2025]]
