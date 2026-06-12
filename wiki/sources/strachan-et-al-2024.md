---
type: source
field: machine-psychology
lens: psychological
citation_key: 17-strachan-et-al-2024
tags: [theory-of-mind, faux-pas, irony, hinting, strange-stories, false-belief-task, hyperconservatism, human-baseline, gpt-4, llama2, contamination, methodological-notes]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Testing theory of mind in large language models and humans

> [!info] In plain terms
> "Theory of mind" is the everyday skill of figuring out what other people are thinking —
> for example, realizing that "It's a bit hot in here" near a closed window is really a
> polite request to open it. This paper gives three AI chatbots (GPT-4, GPT-3.5 and Meta's
> LLaMA2) a whole *battery* of classic psychology tests for this skill — spotting hints,
> irony, social blunders ("faux pas"), and tricky stories — and compares them against 1,907
> people. GPT-4 matched or beat people on almost everything, but oddly flunked the
> social-blunder test. A clever follow-up showed GPT-4 actually *can* work out the answer —
> it just refuses to commit to it out of an excess of caution (the authors call this
> "hyperconservatism"). The lesson: you only see these subtle, non-human quirks if you test
> AI the way psychologists test people — many tests, many repetitions, a real human
> baseline.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

This is itself a machine-psychology study: it treats three LLMs as experimental subjects and
administers a comprehensive battery of gold-standard human theory-of-mind tests to them,
explicitly answering recent "calls for a 'machine psychology'" (Hagendorff 2023) that "argued
for using tools and paradigms from experimental psychology to systematically investigate the
capacities and limits of LLMs." The paper is also a worked example of the methodological
discipline the wiki advocates — its own stated recipe is "using a diverse set of theory of mind
measures, delivering multiple repetitions of each test, and having clearly defined benchmarks of
human performance against which to compare" (these are the source's own recommendations, not
wiki interpretation):

- **Use a battery, not one test.** A single ToM test or a single run would have hidden the
  faux-pas-specific deviation; the multi-test design "enabled us to reveal the existence of
  specific deviations from human-like behaviour that would have remained hidden using a single
  theory of mind test, or a single run of each test."
- **Treat each chat as an independent naive participant.** GPT "can remember both its own and the
  user's previous messages … but it does not retain this memory across new chats," so "each new
  iteration of a test may be considered a blank slate with a new naive participant" — yielding a
  *distribution* of responses (15 sessions) rather than a single draw.
- **Species-fair comparison** (Firestone 2020): identical written sequential administration and
  identical human scoring protocols for humans and models, with a per-test human baseline.
- **Generate novel items** matching each published test's logic but with different semantic
  content, to control for training-set contamination — while conceding this control is "of
  limited strength" for regularly-structured tests (false belief, faux pas) where "heuristics or
  'Clever Hans' solutions" remain possible.
- **Prefer open-weight models for reproducibility.** Because "GPT models are closed, evolving
  systems," LLaMA2 was added so the comparison is reproducible, and all data-collection dates are
  tabulated (Table 1).

## Key Claims

- **GPT-4 matched or exceeded human levels on every test except faux pas.** GPT-4 performed at, or
  above, humans on false belief, irony, hinting and strange stories, and "struggled with detecting
  faux pas." Per test (Holm-corrected two-way Wilcoxon, *n* = 15 LLM observations vs. ~50 humans):
  irony GPT-4 > humans (*Z* = 0.00, *P* = 0.040, *r* = 0.32); hinting GPT-4 > humans (*P* = 0.040,
  *r* = 0.32); strange stories GPT-4 > humans (*P* = 1.04 × 10⁻⁵, *r* = 0.60); faux pas GPT-4 <
  humans (*P* = 5.42 × 10⁻⁵, *r* = 0.55). False belief: humans and all LLMs at ceiling (no
  inferential stats, "owing to the ceiling performance and lack of variance"). Detailed on
  [[paradigms/theory-of-mind-battery]]. (Abstract; Results; Fig. 1a)
- **LLaMA2-70B beat humans on faux pas — but the superiority is "illusory."** LLaMA2-70B was the
  otherwise poorest model yet hit "100% accuracy in all but one run" on faux pas (*P* = 0.002,
  *r* = 0.44). The belief likelihood control showed it did **not** differentiate the
  knowledge-implied variant from neutral (*χ*²(1) = 1.80, *P* = 0.180, BF₁₀ 0.56), revealing "a
  bias towards attributing ignorance" rather than genuine mental-state discrimination. (Results;
  Discussion)
- **GPT's faux-pas failure is HYPERCONSERVATISM, not failed inference.** On the default phrasing
  ("Did [the speaker] know …?"), "Only two responses out of 349 reported that, yes, the character
  did know"; the overwhelming majority answered there was "not enough information." But when the
  same question was reworded to ask which was *more likely* (the **faux pas likelihood test**),
  "GPT-4 demonstrated perfect performance" and GPT-3.5 improved markedly. GPT-4 also integrated
  story information like humans on the **belief likelihood test** (discriminating faux pas vs.
  neutral, *χ*²(2) = 109, *P* = 1.54 × 10⁻²³, and knowledge-implied vs. neutral, *χ*²(2) = 18.10,
  *P* = 3.57 × 10⁻⁴) and reported uncertainty in the neutral condition (42 of 90 responses). So
  the failure "does not reflect a failure of inference, nor indecision … but an overly conservative
  approach that prevented commitment to the most likely explanation." (Results; Discussion)
- **Novel-item performance argues against simple contamination.** Where models did better on novel
  than original items (e.g. LLaMA2-70B on hinting; humans on hinting and faux pas), this is "the
  opposite of what a prior familiarity explanation would predict"; GPT-3.5 was actually *worse* on
  novel faux-pas items than the (already poor) originals. (Results; Methods)
- **Humans also fail the false-belief perturbations.** In a control replicating the Ullman-style
  perturbation variants (transparent containers, etc.), the authors "replicated the poor performance
  of GPT models found in previous studies" but found that "human participants (*N* = 757) also
  failed on half of these perturbations," complicating any reading of the perturbation failures as
  a clean LLM-specific absence of theory of mind. (Results; SI4)
- **Interpretation: a dissociation between competence and performance.** "GPT models may be
  competent, that is, have the technical sophistication to compute mentalistic-like inferences but
  perform differently from humans under uncertain circumstances as they do not compute these
  inferences spontaneously to reduce uncertainty." The authors tie the caution to GPT's "mitigation
  measures to improve factuality" / reduce hallucination (OpenAI 2023), and tie the false-belief
  ease + faux-pas difficulty to GPT's *disembodied* cognition (Chemero 2023). (Discussion)

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/theory-of-mind]] — the construct under test; the paper treats it, per Apperly (2012),
  as "far from being a unitary construct … an interconnected set of notions," spanning early/implicit
  vs. later/explicit ToM (Apperly & Butterfill 2009). This source is now a **primary** for the
  GPT-4-at-or-above-human-ToM result the wiki previously cited only via reviews.
- [[theories/performance-competence-distinction]] — the paper's headline interpretation is a
  "dissociation between competence and performance" (Firestone 2020): GPT is competent but
  under-performs under social uncertainty.
- **Hyperconservatism hypothesis** (this paper's coinage) — GPT models "are able both to compute
  inferences … and recognise a false belief or lack of knowledge as the likeliest explanation …
  but refrain from committing to a single explanation out of an excess of caution." Introduced
  against two rejected alternatives: the **failure of inference hypothesis** (models cannot
  generate the inference, because faux pas needs non-embedded knowledge of social norms) and the
  **Buridan's ass hypothesis** (Rescher 1960 — models infer mental states but "cannot choose
  between them"). Folded inline onto [[paradigms/theory-of-mind-battery]] and the
  [[theories/performance-competence-distinction]] page rather than a standalone theory page.

**Paradigms**
- [[paradigms/theory-of-mind-battery]] — NEW. The five-test, repeated-session, human-baselined ToM
  battery (false belief, irony, faux pas, hinting, strange stories) plus the two faux-pas variant
  studies (faux pas likelihood test; belief likelihood test). This source is its primary grounding.
- [[paradigms/false-belief-task]] — enriched: this source is the **primary** for the
  false-belief-perturbation control in which *humans also failed half the perturbations* (N = 757),
  a nuance on the Ullman-2023 fragility result already on that page.
- [[paradigms/adversarial-vignette-perturbation]] — the false-belief-perturbation control is a
  third instance, notable for adding a human baseline to the perturbation logic.

**Instruments**
- The **five-test ToM battery** (original published items + novel matched items): false belief
  (Wimmer & Perner 1983; Bernstein et al. 2011 sandbox), irony (adapted from Au-Yeung et al. 2015),
  faux pas (Baron-Cohen et al. 1999), hinting (Corcoran 2003; Gil et al. 2012 coding), strange
  stories (Happé 1994; White et al. 2009). Kept on the paradigm page (single-study bespoke battery,
  no standalone instrument page). OSF <https://osf.io/fwj6v>.
- Subjects: GPT-4, GPT-3.5 (ChatGPT web interface), LLaMA2-70B-Chat (also 13B/7B in SI; temperature
  0.7, top-p 0.9, repetition penalty 1.1, max 512 new tokens, system prompt "You are a helpful AI
  assistant", Langchain conversation-chain memory). 15 sessions per test per model.
- Human baseline: *N* = 1,907 total across all stages (Prolific/SoSci; native English speakers
  18–70, no dyslexia or psychiatric history). The core ToM battery was compared against **250**
  human participants (~50/test); the belief likelihood test against **900**; the false-belief
  perturbations against **757**.

## Relationship to Other Sources

- **Primary source for an already-cited result.** [[paradigms/false-belief-task]] and
  [[theories/theory-of-mind]] already cited "Strachan et al. 2024" (via reviews
  [[sources/hagendorff-et-al-2024]] and [[sources/liu-et-al-2025]]) as evidence that later models
  "reliably infer unobservable mental states." This ingest grounds those forward references in the
  primary paper and extends the battery beyond false belief.
- **Complements the Kosinski–Ullman debate.** It corroborates [[sources/kosinski-2024]]'s
  GPT-4-passes-false-belief result and replicates [[sources/ullman-2023]]'s perturbation failures —
  but adds the decisive human control showing *humans fail those same perturbations too* (N = 757),
  reframing the fragility from "LLMs lack ToM" toward a shared script-stickiness / physical-principle
  question. Connects to [[questions/llm-theory-of-mind-genuine-or-pattern-matching]].
- **Shares the open-models argument** with [[sources/kosinski-2024]] and the survey
  [[sources/liu-et-al-2025]]: testing closed, evolving GPT models is a reproducibility hazard
  (see [[questions/yoking-science-to-proprietary-models]]); LLaMA2 is included expressly so the
  comparison can be reproduced.

## Limitations

- **Novel-item control is weak for regularly-structured tests.** The authors concede that for false
  belief and faux pas — tests "that use a regular internal structure that make heuristics or
  'Clever Hans' solutions possible" — the novel-item contamination control is "of limited strength,"
  even though it is convincing for open-ended tasks like hinting and strange stories.
- **Faux-pas test's built-in confound.** The original faux pas test "includes only items where a
  faux pas occurs," so "any model biased towards attributing ignorance would demonstrate perfect
  performance without having to integrate the information" — exactly the confound that made
  LLaMA2-70B's ceiling score illusory; the belief likelihood test was constructed to break it.
- **Coding deviation from the validated protocol.** Scoring was restricted to the final (belief)
  question rather than requiring all four faux-pas questions correct, justified by humans failing
  Q1 "owing to an apparent unwillingness to attribute blame"; an alternative coding following the
  original criteria is reported in SI5.
- **Even GPT's "successes" may be non-human-like.** A preliminary qualitative breakdown (SI7) warns
  that GPT's correct answers on the faux pas likelihood test "may not necessarily reflect perfect or
  human-like reasoning" — "machine failures and successes are the result of non-human-like processes."
- **Closed, mutable subject models.** Two of three models are commercial GPT systems tested through a
  web interface under a message-rate limit; results are indexed to spring/autumn-2023 model versions
  (Table 1).
