---
type: source
field: machine-psychology
lens: psychological
citation_key: 15-kosinski-2024
tags: [theory-of-mind, false-belief-task, emergence, deception, gpt-4, human-baseline, contamination, methodological-notes]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Evaluating large language models in theory of mind tasks

> [!info] In plain terms
> There is a classic test for whether someone can imagine what is going on in another
> person's head: show a child a Smarties tube that secretly holds pencils, then ask what a
> friend who has not looked inside will *think* is in it. A child who says "Smarties" (the
> wrong answer the friend would actually give) has grasped that other people can hold
> *false beliefs*. This paper runs 40 such bespoke stories — each padded with control
> versions and reversals so a model cannot pass by guessing — on 11 successive language
> models. Old models scored zero; ChatGPT-4 solved 75%, about as well as a six-year-old.
> The author argues this mind-reading-like ability may have emerged *by accident*, as a
> by-product of learning language, and either way signals "more powerful and socially
> skilled AI."

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

This is itself a machine-psychology study: it treats 11 LLMs as experimental subjects and
administers a gold-standard developmental-psychology paradigm to them. Beyond the result,
the paper devotes an explicit **"Methodological Notes"** section to the methods themselves,
which the wiki captures as reusable practice (these are the source's own recommendations,
not wiki interpretation):

- **Reset the model after every completion** to erase memory of the task — sidestepping the
  order effects, consistency bias, and fatigue that constrain human studies, and letting one
  collect a *distribution* of responses (e.g. 1,000 completions) instead of a single draw.
- **"Put words in the models' mouths"** — supply a prompt prefix that constrains the
  completion's variance and forces the diagnostic word to surface (e.g. preamble a model
  self-reporting autism and observe the effect).
- **Avoid human-survey formats** (Likert scales, multiple-choice) — they may trigger
  memorized responses or make the model "act like it was participating in a study"
  (e.g. deliberately role-play a ToM-deficient person). Open-ended formats that imitate
  ordinary user–model interaction yield more robust, unbiased responses.
- **Use novel tasks + minimally-altered controls**, because once a task is administered via
  public API or published online it "may be incorporated into future models' training data
  and should be considered compromised."
- **Failures do not equal lack of ability** — they can stem from scoring-key limits, the
  model "testing the boundaries of tasks," confabulation drawn from fiction in training data,
  or administrator-imposed constraints (safety training).

## Key Claims

- **LLM theory-of-mind performance climbs with model generation.** Older models (GPT-1,
  GPT-2XL, early GPT-3) solved **0** tasks; GPT-3-davinci-002 (Jan 2022) solved 5%
  (CI₉₅ [0%, 10%]); GPT-3-davinci-003 (Nov 2022) and ChatGPT-3.5-turbo (Mar 2023) each
  solved 20% (CI₉₅ [11%, 29%], below 3-y-old children); **ChatGPT-4 (Jun 2023) solved 75%**
  (CI₉₅ [66%, 84%]), **on par with 6-y-old children**. Detailed on
  [[paradigms/false-belief-task]]. (Abstract; Study 3; Fig. 3)
- **Unexpected Contents tasks are easier than Unexpected Transfer tasks.** ChatGPT-4 solved
  90% of the former vs. 60% of the latter (Δ = 30%; χ² = 8.07, P = 0.01). (Study 3)
- **A single latent ability drives both task types.** Performance on the two task types
  correlated R = 0.98 (CI₉₅ [0.92, 0.99]), suggesting one factor (e.g. an ability to detect
  false-belief) rather than two task-specific abilities, and high measurement reliability.
  (Discussion)
- **The conservative scoring is robust to chance.** A model must answer 16 prompts across
  eight scenarios to score one task; random responding (choosing between the two diagnostic
  words at random) would succeed only once in **65,536** tasks on average. (Discussion)
- **True-belief controls and item updates substantially lowered scores** vs. the Feb-2023
  preprint, confirming the controls bite. GPT-3-davinci-003 dropped from 90% → 60% after
  updating items (Δ = 30%; χ² = 17.63, P < 0.001) → 20% after adding true-belief controls
  (Δ = 40%; χ² = 25, P < 0.001). ChatGPT-4 remained high: 95% → 75% (Δ = 20%; χ² = 11,
  P < 0.001). (Study 3)
- **Failures remain common even in the best model.** ChatGPT-4 failed ≥1 prompt in 25% of
  tasks; GPT-3-davinci-003 and ChatGPT-3.5-turbo failed in 80%. (Discussion)
- **Interpretation (hedged): ToM may be an emergent by-product of language training, not an
  engineered feature.** The author proposes ToM "may emerge as a by-product of AI's training
  to achieve other goals," paralleling the human finding that ToM may emerge from language
  ability; the Transformer **attention mechanism** is floated as a likely substrate. The
  paper explicitly declines to settle whether LLMs should be "credited with" ToM, invoking
  Turing's "behaving *as if*" and the Searle Chinese-room / brain-replacement debate.
  (Introduction; Discussion)

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/theory-of-mind]] — the gold-standard construct the false-belief task probes;
  this paper is the **primary source** for the "GPT-4 ≈ 6-year-old, 75%" result the wiki
  previously cited only via reviews.
- Emergence (two senses, defined in a footnote): "*emergent abilities*" (manifest in newer,
  larger models, absent in older ones) vs. "*emergent properties*" (characterize a system as
  a whole but are absent in its components). Used to frame the central hypothesis that ToM
  *emerges* rather than being engineered. Folded inline on the theory page (not a standalone
  theory page).
- Performance-vs-competence / "behaving *as if*" — the Turing ("polite convention that
  everyone thinks") vs. Searle (Chinese room) debate, extended via the *brain-replacement
  scenario*. Grounds the paper's refusal to adjudicate "genuine" ToM; connects to
  [[theories/performance-competence-distinction]].

**Paradigms**
- [[paradigms/false-belief-task]] — enriched from a survey-depth stub to its primary
  grounding. Two subtypes (Unexpected Contents / Smarties; Unexpected Transfer /
  Sally–Anne–Maxi), the true-belief-control + reversal + 16-prompt scoring scheme, and the
  sentence-by-sentence analysis are this source's contribution.

**Instruments**
- The **40 bespoke false-belief scenarios** (20 Unexpected Contents + 20 Unexpected
  Transfer) + 120 closely-matched true-belief controls + reversed versions (OSF
  <https://osf.io/csdhb/>) are the instrument; no standardized inventory is used. Kept on the
  paradigm page rather than a standalone instrument page (it is a single-study bespoke set).
- 11 LLMs as subjects: GPT-1, GPT-2, six GPT-3-family models, ChatGPT-3.5-turbo, ChatGPT-4,
  and Bloom (176B, GPT-3's open-access alternative).
- Children's false-belief meta-analytic baseline (Wellman, Cross & Watson 2001; 178 studies)
  for the human comparison curve.

## Relationship to Other Sources

- **Primary source for an already-cited result.** [[sources/hagendorff-et-al-2024]],
  [[sources/liu-et-al-2025]], and the existing [[paradigms/false-belief-task]] /
  [[theories/theory-of-mind]] pages all cite "Kosinski 2024" — but only at second hand through
  reviews. This ingest grounds those pages in the primary paper.
- **Both sides of the validity debate are in the paper.** Kosinski reports the
  generational-pass result *and* catalogs the counter-evidence that LLM ToM is "inconsistent
  and brittle": [[sources/ullman-2023]] (trivial alterations break ToM), Shapira et al. 2023, Kim
  et al. 2023 (FANToM), with Pi et al. 2024 (SCALPEL) arguing some failures reflect missing
  commonsense (transparency) rather than missing ToM. This is the Kosinski-vs-Ullman
  contradiction that [[questions/llm-theory-of-mind-genuine-or-pattern-matching]] is built on; the
  Ullman rebuttal is now grounded in its primary paper.
- **Shared author lineage.** Kosinski co-authored Hagendorff, Fabi & Kosinski 2023
  ("Human-like intuitive behavior and reasoning biases emerged in LLMs but disappeared in
  ChatGPT"), the same emergent-then-vanishing-bias theme that grounds
  [[paradigms/heuristics-and-biases-battery]] via [[entities/thilo-hagendorff]].

## Limitations

- **GPT-family-dominated subject pool.** Ten of eleven models are GPT-1/2/3/3.5/4; Bloom is
  the only non-OpenAI model, so the "emergence" curve largely tracks one model family's
  scaling.
- **Construct validity is contested by design.** The author concedes "successes of LLMs do
  not automatically demonstrate their ability to track protagonists' beliefs" (guessing,
  memorization, response patterns remain live alternatives) and "failures do not prove
  inability" (white-swan / black-swan). True-belief controls + reversals + the
  sentence-by-sentence analysis are the deconfounders, but the genuine-ToM-vs-pattern-matching
  question is left explicitly open ("We leave it to the reader").
- **Scoring may understate performance.** Nondiagnostic-but-not-wrong completions (e.g.
  "valuable evidence" for Unexpected Contents #9, "colorful leaflets" for "leaflets") were
  scored incorrect.
- **Yoking to commercial, mutable models.** Tasks ran on nondeterministic commercial APIs;
  models may be deprecated, and administrator safety-training can cause failures unrelated to
  capability — a reproducibility hazard (see [[questions/yoking-science-to-proprietary-models]]).
</content>
