---
type: source
field: machine-psychology
lens: psychological
citation_key: 16-ullman-2023
tags: [theory-of-mind, false-belief-task, robustness, perturbation, surface-form, contamination, gpt-3.5, methodological-notes]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks

> [!info] In plain terms
> A recent paper claimed a chatbot can "read minds" as well as a young child, because it
> answered classic psychology puzzles about what other people believe. This paper takes those
> exact puzzles and makes tiny, common-sense tweaks that *shouldn't* change the answer — say,
> the bag is see-through, or the character can't read the label, or the character filled the bag
> herself. With each tweak the model gives the *wrong* answer, insisting the character believes
> something she has every reason not to. The author argues that a single such failure should
> count for more than a long string of successes, and that we should *start* by assuming a
> machine has not really developed mind-reading until proven otherwise.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

This is itself a machine-psychology study: GPT-3.5 is the experimental subject, classic
developmental-psychology Theory-of-Mind vignettes are the stimuli, and *directed perturbations*
that preserve the principles of Theory-of-Mind are the manipulation. Beyond the empirical
result, the paper contributes two reusable **evaluation principles** the wiki captures as
practice (these are the source's own recommendations, not wiki interpretation):

- **A skeptical zero-hypothesis.** "The zero-hypothesis for model evaluation in intuitive
  psychology should be skeptical" — when an entity displays behavior that looks purposeful, do
  not place "has the construct" and "does not have the construct" on equal footing; presume
  strongly it does not, because human intuitive psychology is biased to over-ascribe mental
  states ("faces in clouds"; Guthrie 1995; Saxe et al. 2005).
- **Outliers outweigh averages.** "Outlying failure cases should outweigh average success
  rates." The multiplication analogy: a machine that answers "5\*5=25" and "3\*7=21" correctly
  a hundred times but fails "213\*261" has not "learned to multiply" — a general algorithm is
  robust to simple input alterations, so the single instructive failure is not averaged away.

The paper also flags a **benchmark paradox** for AI evaluation: as soon as a systematic
generator of variations or a test-suite is published, an LLM "can gobble up a large amount of
data to pass" it — a model "learning something closer to a smooth tiling of the space of
possible examples rather than [Theory-of-Mind] reasoning" would then do better on the benchmark
without answering what it actually learned (the author notes this paper is "likely shooting
future researchers in the foot in that sense").

## Key Claims

- **Every trivial, principle-preserving perturbation flips GPT-3.5's belief attribution to the
  wrong answer.** Across four variations each of the Unexpected-Contents and Unexpected-Transfer
  tasks — variations that "do not violate the basic principles of Theory-of-Mind" yet "lead to
  machine failures" — GPT-3.5 keeps ascribing the canonical false belief (the bag holds
  *chocolate*; the cat is in the *basket*) even after the perturbation removes any basis for it.
  Detailed per-variation on [[paradigms/false-belief-task]]. (§2; Figs. 1–2)
- **Theory of Mind has probably not spontaneously emerged.** "While LLMs such as GPT-3.5 now
  regurgitate reasonable responses to basic ToM vignettes, simple perturbations that keep the
  principle of ToM intact flip the answers on their head"; "the simplest answer is that these
  models haven't learned yet anything like Theory-of-Mind." (§3)
- **Jumping over the horns of Kosinski's dilemma.** Kosinski frames a dilemma: if LLMs pass ToM
  tests, then either LLMs have ToM *or* ToM tests do not test ToM. Ullman argues the dilemma's
  premise is unfounded (current LLMs *do not* pass) — but adds that *even if* future models pass
  all variations, one can still hold that ToM tests are valid for people while doubting a machine
  that passes them, "because inferences about the likely mental processes of other persons are
  not done in a vacuum" — they take into account the *algorithms* others likely implement, not
  only input–output behavior (the Turing-Test critique; Block 1981). (§1; §3)
- **The failure may reflect ToM *or* adjacent reasoning.** A perturbation failure "may reflect a
  failure of ToM, scene understanding, relational reasoning, or other reasoning. The failures are
  not mutually exclusive" — e.g. the 'in'→'on' variation also implicates relational reasoning
  (shown failing in image-generation models; Conwell & Ullman 2022). (§2.2.2)
- **Not a mystic about machine ToM.** "Any human mental ability can in principle be replicated in
  silicon, including Theory-of-Mind"; computational ToM models already exist (action understanding
  as inverse planning, naïve utility calculus, ToM as inverse reinforcement learning). The
  recommended direction is to *integrate* such models with language models "rather than expect
  Theory-of-Mind to emerge spontaneously from additional linguistic data." (§3)

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/theory-of-mind]] — the construct under test; the paper's robustness perturbations
  exploit ToM's core prediction (an entity that genuinely tracks another's belief stays correct
  when the surface form changes but the belief-forming logic is preserved).
- [[theories/performance-competence-distinction]] — the multiplication analogy *is* this
  distinction sharpened into a rule for AI evals: averaged canonical successes are *performance*;
  the outlying failure on a novel input is the diagnostic of missing *competence* (a general
  algorithm). The Turing/Block 1981 "judge the algorithm, not just the I/O" argument folds here.

**Paradigms**
- [[paradigms/false-belief-task]] — this source contributes the **perturbation layer**: a battery
  of eight directed alterations (four per task family) of Kosinski's exact vignettes, scored by
  completion probability of the diagnostic word. It is the canonical "trivial alterations break
  ToM" result the wiki previously cited only at second hand.
- [[paradigms/adversarial-vignette-perturbation]] — the same paired canonical-vs-minimally-edited
  logic, applied to ToM rather than to heuristics-and-biases vignettes; this source is a second
  primary instance of that paradigm.

**Instruments**
- A bespoke set of **eight perturbed vignettes** built on Kosinski's publicly available materials
  (4 Unexpected-Contents variations: Transparent Access, Uninformative Label, Trustworthy
  Testimony, Late Labels; 4 Unexpected-Transfer variations: Transparent Access, Relationship
  Change, Trusted Communication, Querying the Additional Person). No standardized inventory. Kept
  on the paradigm page rather than a standalone instrument page (single-study bespoke set).
- **Subject:** GPT-3.5 — "the most recently available iteration of GPT-3.5 which was used in
  [Kosinski]," chosen because it "achieved the best results, and serves as a threshold" ("If this
  model fails, we expect the less powerful models to fail as well").

## Relationship to Other Sources

- **Direct rebuttal of [[sources/kosinski-2024]].** Ullman uses "the exact same set-up" — posing
  vignettes and examining completion probabilities — on Kosinski's own vignettes and prompts, and
  shows the reported successes are "susceptible to small perturbations that shouldn't matter to an
  entity that has ToM." Kosinski's paper itself catalogs this rebuttal (as "Ullman 2023"), so the
  two papers stage the central validity debate together. Notably, Ullman frames the exchange
  generously: "we treat the previous work as a good serve in an ongoing scientific tennis game."
- **Grounds previously second-hand citations.** [[paradigms/false-belief-task]],
  [[theories/theory-of-mind]], [[questions/llm-theory-of-mind-genuine-or-pattern-matching]], and
  [[sources/kosinski-2024]] all cite "Ullman 2023" as the fragility counter-pole — but only via
  reviews ([[sources/hagendorff-et-al-2024]], [[sources/liu-et-al-2025]]). This ingest grounds them
  in the primary paper.
- **Shares the perturbation logic with [[paradigms/adversarial-vignette-perturbation]]** (grounded
  in [[sources/binz-schulz-2022]]): both pair a canonical item with a minimally-edited twin and read
  a flipped answer as evidence of memorized form over reasoning. Ullman is the Theory-of-Mind
  instance of that control.

## Limitations

- **One model, one moment.** The study targets a single GPT-3.5 iteration; Ullman likens this to
  the punishment of the Danaides — "A system is claimed to exhibit behavior X, and by the time an
  assessment shows it does not exhibit behavior X, a new system comes along and it is claimed it
  shows behavior X." The author expects future models may pass these variations.
- **Construct ambiguity of a failure.** A flipped answer "may reflect a failure of ToM, scene
  understanding, relational reasoning, or other reasoning" — the design isolates *robustness*, not
  the specific faculty that broke.
- **Reproducibility / whitespace sensitivity.** A correction in the paper reports that a prior
  version mistakenly found a flip on the 1A second belief prompt; the cause was a **double space
  instead of a single space** before "Sam finds the bag," which by itself shifted the completion
  (P_chocolate = 53% vs. P_popcorn = 39%). A whitespace typo materially changing the result is a
  concrete reproducibility hazard. *(The source's line for this correction contains its own
  transcription typo, printing "Pchocolate" for both tokens; the intended reading is P_chocolate =
  53% vs. P_popcorn = 39%.)*
- **No systematic generator provided — deliberately.** The author declines to supply a benchmark or
  variation-generator, arguing that doing so would let an LLM train against it and pass without
  acquiring ToM (the benchmark paradox above) — which limits the paper's reusability as a
  ready-made test-suite.
