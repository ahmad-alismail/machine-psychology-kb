---
type: question
field: machine-psychology
lens: psychological
tags: [theory-of-mind, construct-validity, robustness, open-problem]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# Is an LLM's apparent Theory of Mind genuine reasoning or pattern-matching?

> [!info] In plain terms
> Big models can now answer the classic "where will Sally look for her marble?" tests about as
> well as a six-year-old. But does that mean the model actually reasons about what someone else
> believes — or has it just memorized the shape of these stories? If a tiny, meaning-preserving
> change to the wording makes it fail, the "mind-reading" was probably a surface trick. This
> question asks how to tell the two apart.

## Why It Matters

Theory of Mind ([[theories/theory-of-mind]]) is the capability substrate for tracking what
another agent knows — and therefore for *misleading* them ([[safety-concepts/deception]]). If a
model only pattern-matches canonical templates, an evaluation that reports "ToM" overstates a
safety-relevant capability; if it genuinely represents others' beliefs, the capability (and its
deception edge) is real. Either way, a headline benchmark score is uninterpretable until the
construct-validity question is settled. This is the ToM instance of the wiki-wide validity
problem catalogued in [[theories/psychometric-test-standards]].

## What Sources Say

- [[sources/kosinski-2024]] is the primary "emergent ToM-like reasoning" pole: it reports
  ChatGPT-4 solving 75% of false-belief tasks (≈ a 6-year-old), argues against random
  responding (1-in-65,536 by chance), and uses true-belief controls, reversed scenarios, and
  a sentence-by-sentence analysis (the model dynamically updates the ascribed belief as the
  story unfolds) as evidence *against* pure templating. Yet it also concedes "successes of
  LLMs do not automatically demonstrate their ability to track protagonists' beliefs" and
  ends "We leave it to the reader" — so the paper stages, rather than settles, the question.
- [[sources/liu-et-al-2025]] (§6.3) frames the debate directly: "GPT-4 solves around 75% of
  false-belief tasks, matching a 6-year-old's performance (Kosinski 2024; Strachan et al. 2024);
  some see emergent *ToM*-like reasoning (Kosinski 2024), but others argue it may be pattern
  matching (Strachan et al. 2024), noting that minor prompt changes can derail results (Shapira
  et al. 2024)." It calls for "more theory-grounded evaluation and clearer definitions."
- [[sources/ullman-2023]] is the primary "pattern-matching" pole: it takes Kosinski's *exact*
  vignettes on GPT-3.5 and shows that eight trivial, principle-preserving perturbations
  (transparent containers, an unreadable label, trusted testimony, a self-written label, "in"→"on",
  querying the mover) each flip the belief attribution to the wrong answer — evidence that the
  "mind-reading" was surface-level. It argues the "zero-hypothesis … should be skeptical," that
  "outlying failure cases should outweigh average success rates," and that one can "jump over the
  horns" of Kosinski's dilemma — holding ToM tests valid for humans while doubting an LLM that
  passes, since mental-state inference weighs the *algorithm* generating a behavior, not only its
  input–output. It also names the **benchmark paradox**: publishing a systematic
  variation-generator lets an LLM train against it and pass without acquiring ToM.
- [[sources/hagendorff-et-al-2024]] and [[paradigms/false-belief-task]] document the same Kosinski-vs-
  Ullman contradiction as the motivating case that ToM results are fragile to "distracting
  alterations" in the items.

## Suggested Investigation (toward a new paradigm)

- **Perturbation battery as the primary measure.** Score a model not on canonical Sally–Anne
  items but on the *gap* between unperturbed and minimally-perturbed variants (transparent
  containers, irrelevant alterations, novel agents/objects); a genuine mentalizer should be
  robust, a pattern-matcher should collapse. This makes robustness the construct, not an
  afterthought.
- **Detection vs. production dissociation.** Test whether passing belief-*tracking* tasks
  predicts the capacity to *induce* false beliefs, separating ToM comprehension from its
  weaponized form.
- **Contamination control.** Use procedurally generated, never-published vignettes so a pass
  cannot be explained by memorization of canonical items.
