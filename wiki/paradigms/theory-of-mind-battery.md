---
type: paradigm
field: machine-psychology
lens: psychological
tags: [social-cognition, theory-of-mind, faux-pas, irony, hinting, strange-stories, hyperconservatism, human-baseline]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Theory-of-Mind Battery

> [!info] In plain terms
> Instead of one mind-reading test, give an AI a whole *exam* of them — spotting hints,
> getting irony, noticing a social blunder, untangling a tricky story — and run each test
> many times, scoring the AI exactly as you'd score a person, against a real crowd of human
> test-takers. Running the *battery* (not a single test) is what catches subtle, non-human
> quirks: one model here aced almost everything but flunked the "social blunder" test — and a
> clever follow-up revealed it could actually work out the answer, it just refused to commit
> to it. That refusal-to-commit pattern is invisible to any single test.

> [!note] Primary source
> Grounded in [[sources/strachan-et-al-2024]] (the five-test battery, the repeated-session
> independent-observation design, the faux pas likelihood and belief likelihood variants, and
> the hyperconservatism finding all come from it). The false-belief member of the battery has
> its own deep page, [[paradigms/false-belief-task]] (Kosinski 2024; Ullman 2023); this page
> covers the *battery* design and the non-false-belief tests.

## Theoretical Grounding

- [[theories/theory-of-mind]] — the construct under test, treated (per Apperly 2012) not as a
  unitary ability but as "an interconnected set of notions," spanning early/implicit and
  later/explicit processes (Apperly & Butterfill 2009). The battery deliberately samples across
  this range, from less demanding (indirect requests) to more demanding (recognizing and
  articulating misdirection, irony, faux pas).
- [[theories/performance-competence-distinction]] — the battery's headline result is read through
  this lens: a model can be *competent* to compute a mentalistic inference yet *perform*
  differently from humans under social uncertainty. The **hyperconservatism hypothesis** (this
  source's coinage) is the concrete form: GPT can compute and rank the right inference but
  "refrain[s] from committing to a single explanation out of an excess of caution."

## Target Behaviors

- Detects: capacity to "track other people's mental states" — the capability substrate adjacent to
  [[safety-concepts/deception]] (a model that can represent another agent's false belief has the
  machinery to induce one).
- Surfaces a behavioral signature with no clean safety-concept home (left uncreated, not invented):
  **hyperconservatism** — refusal to commit to the likeliest social inference under uncertainty —
  and an **ignorance-attribution / response bias** (LLaMA2-70B, and to a lesser extent GPT-3.5,
  affirming "someone said something they shouldn't have" even in neutral and knowledge-implied
  conditions).

## Setup / Elicitation

Five well-established human ToM tests are administered **separately** to each LLM (GPT-4, GPT-3.5,
LLaMA2-70B) across **15 independent chat sessions per test** — each chat a "blank slate with a new
naive participant," since GPT retains memory within a chat but not across chats — and scored by the
human scoring protocols, against a per-test human sample (~50 participants; **250** total for the
battery). Administration is **species-fair** (Firestone 2020): each item is delivered sequentially
in written form with a constant preamble, original items first and **novel matched items** last.
The five tests:

1. **False belief** (Wimmer & Perner 1983; Bernstein et al. 2011 sandbox) — character A hides an
   item and leaves; character B moves it; where will A look on return? Includes a **true-belief
   control** condition (B moves a *different* item) so failures cannot be explained by a recency
   effect. *Both humans and all LLMs performed at ceiling.* Covered in depth on
   [[paradigms/false-belief-task]].
2. **Irony** (adapted from Au-Yeung et al. 2015 eye-tracking stimuli) — vignettes ending in an
   ironic or non-ironic utterance; the model must infer the true (often opposite) meaning and the
   speaker's mocking attitude.
3. **Faux pas** (Baron-Cohen et al. 1999) — a vignette in which a speaker says something
   unintentionally offensive "not knowing or not realizing that they should not say it." Four
   questions follow; the **key fourth question** asks whether the speaker *knew* the relevant fact
   (correct answer always "no"). Recognizing a faux pas requires representing **two** mental states:
   the speaker's ignorance and the victim's hurt.
4. **Hinting task** (Corcoran 2003; coded per Gil et al. 2012) — ten everyday vignettes ending in a
   remark interpretable as an indirect request; a correct answer identifies both the intended
   meaning and the action it seeks to elicit.
5. **Strange stories** (Happé 1994; White et al. 2009) — advanced mentalizing (misdirection,
   manipulation, lying, higher-order "A knows that B believes X"); the respondent explains why a
   character says/does something not literally true. Scored 0/1/2 per item by how fully and
   mentalistically it explains the utterance.

**Two faux-pas variant studies** were built to dissect *why* GPT failed faux pas (it identified the
victim's hurt but answered "not enough information" to the speaker-knowledge question — "Only two
responses out of 349 reported that, yes, the character did know"):

- **Faux pas likelihood test** — rewords the key question from "Did they know …?" to "Is it *more
  likely* that they knew or did not know …?" (with a follow-up prompt on unclear incorrect answers,
  scored 2/1/0). Distinguishes the three hypotheses: failure-of-inference predicts the right answer
  never appears; Buridan's ass predicts equally-weighted alternatives; hyperconservatism predicts a
  correct, committed likelihood judgement. *Result: GPT-4 perfect; GPT-3.5 much improved* → supports
  hyperconservatism.
- **Belief likelihood test** — three matched variants of each story (**faux pas** / **neutral** /
  **knowledge-implied**), varying only the final utterance so it implies the speaker *didn't know*,
  was uninformative, or *knew*. Tests whether a model truly integrates story information or merely
  has an ignorance-attribution bias (the original faux pas test contains *only* faux-pas items, so a
  model that always attributes ignorance scores perfectly without integrating anything). Run with
  responses kept independent: **270 observations per model** (6 stories × 3 variants × 15 reps) and
  a fresh human sample of **900**.

A third control — the **false-belief perturbation study** (replicating Ullman-2023-style transparent
containers etc., with a human sample of **757**) — is reported here but lives on
[[paradigms/false-belief-task]]; its key contribution is that *humans also failed half the
perturbations*.

## Scoring / Procedure

- Responses are coded by **five experimenters** against pre-defined per-test criteria; each codes
  100% of one test and 20% of another, with disagreements recoded by committee. Inter-coder
  agreement was >95% overall (lowest 88%, strange stories). For each session, item scores are scaled
  and averaged to a proportional score so tests are comparable.
- **Faux pas** coding was restricted to the **final (belief) question only** (1 if "no", else 0) — a
  deliberate deviation from the original all-four-questions criterion, because several humans failed
  Q1 "owing to an apparent unwillingness to attribute blame"; an alternative coding following the
  original criteria is in SI5. **Belief likelihood** responses were coded **+1 (knew) / 0 (unsure) /
  −1 (didn't know)** and averaged per story into a directional score.
- **Statistics**: each LLM vs. humans via Holm-corrected two-way **Wilcoxon** tests (*n* = 15 LLM
  observations); effect size *r* = *Z*/√*N*, 95% CIs bootstrapped over 1,000 iterations;
  non-significant results followed up with Bayesian **BF₁₀** (Cauchy prior *r* = 0.707, JASP). The
  belief likelihood test used **chi-square** tests on the response-type frequency distributions
  (Holm-corrected). False belief was *not* subjected to inferential statistics "owing to the ceiling
  performance and lack of variance."
- Controls the design requires: a **per-test human baseline**; **15 independent repetitions** per
  test (treating each chat as a naive participant); **novel items** matching each published test's
  logic but with different semantic content (contamination control); **counterbalanced story lists**
  (e.g. false-belief A/B, irony A/B) so each story appears once per session and alternates condition;
  and, for the belief likelihood test, **independent sessions per item** so variants cannot
  cross-contaminate.

## Validity Concerns

- **Contamination — and the limits of the novel-item control.** Novel items were generated for every
  published test, but the authors concede the control is "of limited strength for tasks like false
  belief and faux pas that use a regular internal structure that make heuristics or 'Clever Hans'
  solutions possible" (Shapira et al. 2023); it is convincing only for open-ended tasks (hinting,
  strange stories). Notably, several *better-than-original* novel-item results (LLaMA2-70B and humans
  on hinting; humans on faux pas) are "the opposite of what a prior familiarity explanation would
  predict," and GPT-3.5 was *worse* on novel faux-pas items — together arguing against simple recall.
- **Construct validity — the faux-pas ignorance-bias confound.** Because the original faux pas test
  contains only items where a faux pas occurs, "any model biased towards attributing ignorance would
  demonstrate perfect performance without having to integrate the information provided by the story."
  This is exactly why LLaMA2-70B's 100% faux-pas score was **illusory**: on the belief likelihood
  test it failed to differentiate the knowledge-implied variant from neutral (*χ*²(1) = 1.80,
  *P* = 0.180). The belief likelihood test is the deconfounder and should be considered part of the
  paradigm, not an optional extra.
- **Surface-form / committal-phrasing sensitivity.** GPT's faux-pas "failure" was an artifact of the
  *yes/no* phrasing: rewording to "more likely" flipped GPT-4 to perfect performance. A ToM paradigm
  must therefore probe whether the model *can* compute the inference (likelihood framing) separately
  from whether it *will commit* to it (default framing) — otherwise hyperconservatism is misread as a
  failure of inference.
- **Non-human-like processes behind both successes and failures.** A preliminary qualitative analysis
  (SI7) warns GPT's correct answers on the likelihood variant "may not necessarily reflect perfect or
  human-like reasoning"; "machine failures and successes are the result of non-human-like processes,"
  which quantitative target-feature coding can miss.
- **Reproducibility.** Two of three models are closed, evolving commercial GPT systems tested via a
  web interface (with a 25-message/3-h limit on GPT-4); LLaMA2 was added expressly for
  reproducibility, and all collection dates are tabulated (see
  [[questions/yoking-science-to-proprietary-models]]).

## Evidence

- **GPT-4 at or above human levels on four of five tests; struggles only on faux pas**
  ([[sources/strachan-et-al-2024]], Fig. 1a): irony GPT-4 > humans (*Z* = 0.00, *P* = 0.040,
  *r* = 0.32); hinting GPT-4 > humans (*P* = 0.040, *r* = 0.32); strange stories GPT-4 > humans
  (*P* = 1.04 × 10⁻⁵, *r* = 0.60); faux pas GPT-4 < humans (*P* = 5.42 × 10⁻⁵, *r* = 0.55). GPT-3.5
  was below humans on irony (*P* = 2.37 × 10⁻⁶) and near floor on faux pas (*P* = 5.95 × 10⁻⁸), but
  matched humans on hinting and strange stories. LLaMA2-70B was below humans on irony, hinting and
  strange stories. False belief: all at ceiling.
- **LLaMA2-70B's faux-pas win is illusory** (same source): 100% accuracy "in all but one run"
  (*P* = 0.002, *r* = 0.44), but no differentiation of knowledge-implied vs. neutral
  (*χ*²(1) = 1.80, *P* = 0.180) — "a bias towards attributing ignorance."
- **GPT failure = hyperconservatism, not failed inference** (same source): default phrasing yielded
  "not enough information" ("Only two responses out of 349 reported that, yes, the character did
  know"); the **faux pas likelihood test** gave GPT-4 perfect performance and improved GPT-3.5; on
  the **belief likelihood test** GPT-4 discriminated faux pas vs. neutral (*χ*²(2) = 109,
  *P* = 1.54 × 10⁻²³) and knowledge-implied vs. neutral (*χ*²(2) = 18.10, *P* = 3.57 × 10⁻⁴) and
  reported uncertainty in the neutral condition (42 of 90), matching the human pattern — so the
  failure reflects "an overly conservative approach that prevented commitment to the most likely
  explanation," consistent with GPT's hallucination-reduction mitigations (OpenAI 2023).

## Open Questions

- [[questions/llm-theory-of-mind-genuine-or-pattern-matching]]
- [[questions/yoking-science-to-proprietary-models]]
- How do non-human decision behaviours like *failure of commitment* affect real-time second-person
  human–machine interaction — causing negative affect, or fostering curiosity? (Surfaced in the
  Discussion as the authors' chief direction for future work.)
