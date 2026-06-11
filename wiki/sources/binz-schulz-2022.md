---
type: source
field: machine-psychology
lens: psychological
citation_key: 11-binz-schulz-2022
tags: [cognitive-psychology, decision-making, exploration, causal-reasoning, prospect-theory, contamination, robustness, gpt-3]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Using cognitive psychology to understand GPT-3

> [!info] In plain terms
> One of the first papers to put a language model "on the psychologist's couch." The authors
> hand GPT-3 a battery of classic experiments — trick questions about a woman named Linda,
> gambling problems, slot-machine games, and cause-and-effect puzzles — and grade it the way
> a psychologist grades a person. GPT-3 does impressively well on many famous vignettes, but
> the authors show two catches: the model may have *seen those exact puzzles* in its training
> data, and tiny harmless-looking edits to a puzzle can send its answer wildly off. To get
> past that, they switch to freshly generated, trial-by-trial tasks, where GPT-3 gambles and
> plans like a human in some ways yet completely fails at reasoning about cause and effect.

```bibtex
@misc{11-binz-schulz-2022,
      title={Using cognitive psychology to understand GPT-3}, 
      author={Marcel Binz and Eric Schulz},
      year={2022},
      eprint={2206.14576},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2206.14576}, 
}
```

## Relevance Tier

CORE — subjects GPT-3 to a battery of canonical cognitive-psychology experiments
(decision-making, information search, deliberation, causal reasoning) and analyzes its
responses "similar to how cognitive psychologists would analyze human behavior in the same
tasks." The AI framing is the source's own throughout, so no wiki-authored bridge is
required. This is a foundational machine-psychology paper — the direct precursor to
[[sources/coda-forno-et-al-2024]] (CogBench), which reuses its horizon- and two-step-task
prompting protocols.

## Relevance to Machine Psychology

*(Optional CORE note.)* This paper supplies the field's load-bearing **methodological
caution**: vignette-based probes are confounded by two threats it demonstrates directly —
**training-set contamination** ("many of the prompted scenarios were taken from famous
psychological experiments, there is a chance that GPT-3 has encountered these scenarios or
similar ones in its training set") and **surface-form fragility** (adversarial vignettes that
"can be tampered with just by marginally changing the vignettes"). Its proposed remedy —
*programmatically generated, trial-by-trial task-based experiments* — is the design principle
later packaged by [[instruments/cogbench]].

## Key Claims

- **GPT-3 passes most vignettes but not as a human would be trusted to.** Of 12 vignette-based
  problems, GPT-3 "answered six correctly and all 12 in a way that could be described as
  human-like" — yet the authors answer "No" to whether it could pass as a human subject,
  because of contamination and fragility. (Results, "Problems with vignette-based investigations")
- **Small perturbations send GPT-3 "vastly astray."** Adversarial edits flip its answers:
  asked the probability a cab was *black* it answered "0.2"; reversing the card order in
  Wason's task ("4, 7, A, K") made it pick "A and K"; a typo'd CRT ("bat costs $1.00 more than
  the bat") still produced "$0.10"; the "Immature Blicket" rephrasing made it contradict
  itself. — documented on [[paradigms/adversarial-vignette-perturbation]].
- **Decisions from descriptions: only the largest model clears chance, still sub-human.** On
  13,000+ gambles from Peterson et al. (2021), only "Davinci" beat chance
  (*t*(29134) = −16.85, *p* < .001); the three smaller models did not (all *p* > 0.05); and
  Davinci stayed below human performance (*t*(29134) = −11.50, *p* < .001).
- **GPT-3 reproduces 3 of 6 prospect-theory biases.** Replicating Kahneman & Tversky's contrast
  analysis, GPT-3 showed a **framing effect**, a **certainty effect**, and an **overweighting**
  of small-probability differences; the other three biases were absent. — see
  [[theories/cumulative-prospect-theory]].
- **Horizon task: super-human regret, but no directed exploration.** GPT-3 achieved
  significantly lower overall regret than humans (*M* = 2.72 vs. 3.24; *t*(38878) = −5.03,
  *p* < .001). It showed a rudimentary **random exploration** signature (reward-difference
  effect β = 0.18 ± 0.01, *z* = 14.48, *p* < .001) but no *strategic* random exploration
  (reward × horizon interaction *p* = .14) and no **directed exploration** (horizon effect in
  the unequal-information condition β = −0.15 ± 0.27, *p* = .58); it also showed a strong
  **perseveration / repeat bias**. — see [[theories/directed-and-random-exploration]].
- **Two-step task: signatures of model-based RL.** Stay probability *decreased* after receiving
  treasures via a *rare* transition (*t*(1982) = −6.16, *p* < .001), the hallmark of
  model-based control. This sits "at odds" with the CRT failures, so "whether GPT-3 engages in
  deliberate reasoning might be more nuanced than initially thought." — see
  [[theories/model-based-vs-model-free-rl]].
- **CRT: all three items wrong, intuitively.** GPT-3 gave "the intuitive but incorrect answer"
  on all three Cognitive Reflection Test items.
- **Causal reasoning: GPT-3 fails the seeing-vs-doing test.** Given the common-cause structure,
  GPT-3's interventional inference matched the normative prescription; but in the causal-chain
  condition (where intervening and observing should coincide) it "made identical predictions
  compared to the common-cause condition," indicating it "was not able to incorporate the
  additional information about the underlying causal structure" — making the common-cause
  success "likely purely accidental." — detailed on
  [[paradigms/interventional-causal-inference-task]].

## Theories / Paradigms / Instruments Introduced

**Theories** (grounding each design exploits; most pre-exist)
- [[theories/heuristics-and-biases]] — conjunction fallacy (Linda), base-rate fallacy (cab),
  sample-size insensitivity (hospital), congruence bias (Test).
- [[theories/cumulative-prospect-theory]] — the framing/certainty/overweighting biases
  replicated on GPT-3's gamble choices (Kahneman & Tversky 1979).
- [[theories/directed-and-random-exploration]] — the horizon-task dissociation (Wilson et al. 2014).
- [[theories/model-based-vs-model-free-rl]] — the two-step-task dissociation (Daw et al. 2011).
- [[theories/performance-competence-distinction]] — the interpretive caveat that responses
  "crucially depend on how a prompt is presented."
- [[theories/interventionist-causal-inference]] — **new**: seeing ≠ doing; Pearl's *do*-operator
  (Waldmann & Hagmayer 2005).

**Paradigms**
- [[paradigms/adversarial-vignette-perturbation]] — **new**: canonical vignettes + minimally
  perturbed "adversarial" twins as a paired contamination / surface-form-robustness probe.
- [[paradigms/interventional-causal-inference-task]] — **new**: common-cause vs. causal-chain
  intervene-vs-observe inference (wine-cask cover story).
- Cross-links: the **decisions-from-descriptions**, **horizon**, and **two-step** task adaptations
  here are the *primary sources* for the corresponding [[paradigms/cogbench-cognitive-phenotyping]]
  sub-tasks; documented on the respective theory pages rather than duplicated.

**Instruments**
- [[instruments/cognitive-reflection-test]] — **new**: the 3-item CRT, used as a deliberation probe.
- Peterson et al. (2021) decisions-from-descriptions benchmark (13,000+ gambles); Wilson horizon
  task; Daw two-step task — documented inline on their theory/paradigm homes.

## Relationship to Other Sources

- **Direct precursor to [[sources/coda-forno-et-al-2024]] (CogBench)**, which reuses the
  horizon- and two-step-task prompting protocols established here and turns this paper's
  single-task probes into a standardized 35-model battery. Schulz is senior author of both.
- Catalogued in [[hagendorff-et-al-2024]] as "among the first to use this paradigm to better
  understand the decision-making processes of LLMs" — the [[paradigms/heuristics-and-biases-battery]]
  page is enriched from this primary source.
- Supplies the mechanism ("trivial alterations … can break LLM performance") that
  [[sources/ong-2024]] later invokes for the contamination reading in
  [[questions/bias-disappearance-contamination-or-capability]].
- Human baselines borrowed: horizon-task human data from Zaller et al. (2021); decisions-from-
  descriptions human data from Ruggeri et al. (2020); two-step human data from Daw et al. (2011).

## Limitations

- **Contamination unquantified.** The authors note canonical vignettes "might have been part of
  its training set" but cannot measure the leakage directly.
- **Surface-form sensitivity may extend to task-based tests too.** They concede GPT-3's
  task-based behavior "could change if the generating program of the tasks was modified."
- **Tasks may be too easy.** Canonical psychology tasks "might be too easy to solve," risking
  "portraying GPT-3 as more intelligent than it actually is" — they call for more complex
  paradigms.
- **Narrow coverage.** Only "a rather small subset of cognitive tasks"; categories like category
  learning, problem-solving, and economic games are untested.
- **Single model, deterministic decoding.** Focused on GPT-3 "Davinci" with temperature 0 (1 for
  the bias-contrast analysis); no cross-family generalization.
