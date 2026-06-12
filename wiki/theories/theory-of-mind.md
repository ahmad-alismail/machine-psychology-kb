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

[[sources/strachan-et-al-2024]] is the primary study extending this construct beyond false belief
to a **battery** of human ToM tests (irony, faux pas, hinting, strange stories) on GPT-4, GPT-3.5
and LLaMA2-70B against a 1,907-person baseline. It both grounds the wiki's previously second-hand
"Strachan 2024" references (GPT-4 at or above human ToM levels) and refines the construct: ToM is
treated, per Apperly (2012), as "an interconnected set of notions," and the paper's central finding
is a **dissociation between competence and performance** — GPT can compute and rank a mentalistic
inference yet refrains from committing to it ("hyperconservatism"), so a single yes/no probe can
mistake epistemic caution for a failure of mentalizing. See [[paradigms/theory-of-mind-battery]].

[[sources/liu-et-al-2025]] names ToM as its primary social-cognition evaluation theory and
catalogs the benchmark family built on it — **ToMBench** (Chen et al. 2024c), **OpenToM** (Xu
et al. 2024a), **HI-TOM** (Wu et al. 2023), and **FANToM** (Kim et al. 2023) — "each probing
distinct facets of *ToM*," with Soubki et al. (2024) extending the tests to spoken dialogue.

[[sources/chen-et-al-2025]] is the dedicated ToM **survey** that maps this construct's full
evaluation-and-enhancement landscape. Two structural contributions: (1) it organizes ToM into
the seven mental states of the [[theories/atoms-mental-states]] framework (Beaudoin et al. 2020)
and uses them to audit benchmark coverage — finding that **beliefs are the most extensively
studied mental state** while the other six (intentions, desires, emotions, knowledge, percepts,
non-literal communications) are under-tested; and (2) it consolidates the prompt-based
*enhancement* methods (SymbolicToM, SimToM, PercepToM, TimeToM) into one family
([[paradigms/perspective-filtering-tom-pipeline]]) that all "identify the perceptions of the
target character first, and then prompt LLMs … based on a limited story." It defines the
recurring vocabulary — **orders** (how many mental-state attributions a question needs:
first-order "Where will Sally look?", second-order "Where does Anne think Sally will look?") and
**true-belief vs false-belief** questions — and stresses that benchmarks have "grown
increasingly complex," shifting from narrative to conversation, multiple-choice to open-ended,
and template-generated to built-from-scratch (to fight contamination). It also flags that all
story-based benchmarks are **passive** (the LLM is an observer, not an agent), making
active/situated ToM evaluation an open direction.

[[sources/wilf-et-al-2024]] is the primary study that *intervenes* on this construct rather than
only measuring it: it grounds ToM in a specific cognitive-science theory of mind-reading —
[[theories/simulation-theory]] — and shows that prompting an LLM to **take the character's
perspective first, then answer** ([[paradigms/simtom-perspective-taking-prompting]]) substantially
improves false-belief accuracy with no training. The key finding for the construct: LLMs are
"surprisingly capable of perspective-taking when prompted," and *oracle* (human-annotated)
perspective-taking nearly *solves* the ToMI/BigTOM benchmarks — so a large part of an LLM's
apparent ToM deficit is a perspective-taking deficit, surfaced only when the two ST processes are
prompted separately. This reinforces [[theories/performance-competence-distinction]]: a single
inference pass *understates* ToM competence.

[[sources/guo-et-al-2026]] applies this construct in an *active, strategic* form rather than the
passive false-belief setting: identifying a game's Nash equilibrium requires recursive opponent
modeling, operationalized as **first-order ToM (FoToM)** prompting ("model what the opponent will do
from their payoffs") and **second-order ToM (SoToM)** ("model what the opponent believes you will
do"). The central finding refines the construct for LLMs: FoToM helps some models (gpt-4o,
claude-3-5-sonnet) but not others, and SoToM "provides minimal additional gain," implying models can
simulate at most one level of opponent reasoning rather than apply it recursively. The paper cites
and corroborates [[sources/kosinski-2024]] (GPT-4's ~75% false-belief pass), reading its own results
as evidence that ToM-like ability is "inconsistent and task-dependent rather than robust," and frames
game-theoretic ToM as more demanding than passive false-belief tasks because it "demand[s]
simultaneous opponent reasoning and decision optimization." See
[[paradigms/compositional-game-reasoning]].

[[sources/akata-et-al-2023]] uses ToM as the *interpretive lens* for an LLM coordination failure rather
than as the object of measurement. In a repeated Battle of the Sexes, GPT-4 fails to coordinate with a
turn-taking partner, yet when asked to *predict* the partner's next move it does so correctly (from round
5 as a player, round 3 as a detached observer) — a **prediction-vs-action dissociation** the authors
explicitly liken to the social/non-social divergence seen in autistic children (Swettenham 1996). Their
**social chain-of-thought (SCoT)** repair — prompting the model to predict and reason about the opponent
before acting — is framed as "a more explicit way to force an LLM to engage in theory of mind," and
recovers coordination (round 5). See [[paradigms/repeated-games]].

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
- [[paradigms/theory-of-mind-battery]] — the multi-test battery (irony, faux pas, hinting, strange
  stories) extending the construct beyond false belief
- [[paradigms/simtom-perspective-taking-prompting]] — a prompting *intervention* (grounded in
  [[theories/simulation-theory]]) that elicits and improves ToM via separate perspective-taking
- [[paradigms/perspective-filtering-tom-pipeline]] — the cross-method family (SymbolicToM,
  SimToM, PercepToM, TimeToM) that filters a story to the target character's knowledge before
  answering
- [[paradigms/compositional-game-reasoning]] — *active* strategic ToM via FoToM/SoToM opponent-modeling
  prompts on game-theoretic tasks (vs. passive false-belief inference)
- [[paradigms/repeated-games]] — the predict-vs-act dissociation in iterated coordination games, and
  social chain-of-thought as a ToM-engaging prompt repair

## Related Taxonomy

- [[theories/atoms-mental-states]] — the seven-mental-state ATOMS framework used as the
  coverage yardstick for ToM benchmarks

## Sources

- [[sources/ullman-2023]]
- [[sources/kosinski-2024]]
- [[sources/strachan-et-al-2024]]
- [[sources/wilf-et-al-2024]]
- [[sources/chen-et-al-2025]]
- [[sources/hagendorff-et-al-2024]]
- [[sources/liu-et-al-2025]]
- [[sources/guo-et-al-2026]] — operationalizes ToM as FoToM/SoToM strategic prompting; finds it limited and non-recursive
- [[sources/akata-et-al-2023]] — uses ToM to interpret a coordination failure (predict-vs-act dissociation) and SCoT as a ToM-engaging repair
