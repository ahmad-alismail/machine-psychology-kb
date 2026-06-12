---
type: source
field: machine-psychology
lens: psychological
citation_key: 19-chen-et-al-2025
tags: [survey, social-cognition, theory-of-mind, benchmark]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Theory of Mind in Large Language Models: Assessment and Enhancement

> [!info] In plain terms
> A survey that maps out the fast-growing research on whether AI language models can
> "read minds" — track what a story character believes, wants, or knows. It does two
> things: it catalogs the *tests* (story-based benchmarks) people use to measure this
> ability and how those tests have evolved, and it catalogs the *tricks* (special
> prompting and fine-tuning methods) people use to make models better at it. It is a map
> of the field, not a new experiment.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE — a review/survey of how Large Language Models' Theory-of-Mind (ToM) *behavior* is
**assessed** (story-based evaluation benchmarks) and **enhanced** (prompting / fine-tuning
strategies). It studies AI behavior using psychology-derived methods, paralleling the
already-CORE survey [[sources/liu-et-al-2025]]. By the authors' account this is "the first
study to offer such an in-depth analysis of both the evaluation and enhancement of LLMs'
ToM capabilities."

## Relevance to Machine Psychology

As a CORE survey, the source itself draws the AI connection throughout. Its contribution to
this wiki is (1) a **taxonomic spine** for the ToM-evaluation landscape — the
[[theories/atoms-mental-states]] seven-mental-state framework used to chart what each
benchmark covers — and (2) a consolidation of the **enhancement-strategy** family that
generalizes the wiki's single existing intervention paradigm
([[paradigms/simtom-perspective-taking-prompting]]) into
[[paradigms/perspective-filtering-tom-pipeline]]. It situates the wiki's primary ToM studies
([[sources/kosinski-2024]], [[sources/ullman-2023]], [[sources/strachan-et-al-2024]],
[[sources/wilf-et-al-2024]]) within a wider benchmark ecosystem and reiterates the central
validity hazards (contamination, surface-form robustness, answer-only multiple-choice
grading).

## Key Claims

- "more than ten benchmarks have been recently proposed to assess the ToM capabilities of
  LLMs," the majority "based on well-established psychological tests, including the Sally-Anne
  Test … and the Smarties Task" (§2).
- "recent evaluations indicate that LLMs still lack robust ToM capabilities," which "has
  spurred significant research into strategies for enhancing these abilities" (§1, §4).
- **Beliefs are the most extensively studied mental state in ToM**, and "most strategies
  currently focus on belief-related questions" (§2, §4; Table 1, Table 3).
- The benchmarks have evolved along five axes — **order** (1st → 2nd → up to 4th), **dataset
  generation** (template-based → LLM-generated via template-filling → built-from-scratch to
  fight contamination), **context** (narrative stories → multi-turn conversations),
  **questions** (multiple-choice → open-ended; single individual → group), and **mental
  states** (beliefs only → broader [[theories/atoms-mental-states]] coverage) — plus a shift
  from English to multilingual (§3.1.2).
- Prompt-only perspective-filtering strategies "avoid costly training steps and have shown
  greater robustness to out-of-distribution samples (Sclar et al. 2023)," but "all of these
  methods adopt a pipeline approach … which may lead to error propagation" (§4.1).
- All current story-based benchmarks are "passive benchmarks," with "LLMs acting as passive
  observers rather than active agents"; evaluating LLMs as **active agents** is "a promising
  avenue for future research" (§3.2, §5).
- TOMBENCH "was constructed entirely from scratch, without leveraging any pre-existing
  datasets" to prevent contamination, and is bilingual (Chinese + English) (§3.1.1).
- Symbolic / inverse-planning enhancement methods (ToM-LM, BIP-ALM, LIMP) "have only been
  evaluated on multiple-choice settings"; adapting them to open-ended QA "remains an open
  challenge" (§4.2).
- "Simply assessing the correctness of answers is insufficient, benchmarks should facilitate
  the evaluation of reasoning processes" (§5).

## Theories / Paradigms / Instruments Introduced

- **Theories:** [[theories/atoms-mental-states]] (ATOMS — Abilities in Theory of Mind Space;
  Beaudoin et al. 2020) is the framework the survey adopts as its coverage taxonomy. It also
  invokes (without introducing) [[theories/theory-of-mind]], [[theories/simulation-theory]],
  Belief-Desire-Intention agent modeling (Bratman 1987; grounds NegotiationToM), and common
  ground (Wilkes-Gibbs & Clark 1992; Stalnaker 2002; grounds COMMON-TOM).
- **Paradigms:** story-based ToM benchmarking (the dominant passive paradigm —
  [[paradigms/false-belief-task]] is the wiki's home for it) and the enhancement family
  [[paradigms/perspective-filtering-tom-pipeline]] (SymbolicToM, SimToM, PercepToM, TimeToM).
  It also names **T4D ("Thinking for Doing")** (Zhou et al. 2023a) — a variant that
  repurposes ToMi from inferring mental states to probing an agent's action decisions — and
  interactive/situated benchmarks (MindCraft, SymmToM, G4C, Situated ToM in Grid World) as a
  future direction.
- **Instruments / benchmarks surveyed:** [[instruments/tomi]] and [[instruments/bigtom]]
  (existing wiki pages); plus (documented inline, not given dedicated pages, matching the
  [[sources/liu-et-al-2025]] precedent) HI-TOM, TOMCHALLENGES, FANTOM, OpenToM, NegotiationToM,
  TOMBENCH, COMMON-TOM, SimpleToM, MindGames, MMToM-QA, MuMA-ToM. Underlying developmental
  tests: Sally-Anne (Baron-Cohen et al. 1985), Ice Cream Van Experiment (Perner & Wimmer
  1985), Smarties / Unexpected-Contents (Perner et al. 1987).

## Relationship to Other Sources

- A **second survey** alongside [[sources/liu-et-al-2025]]; the two overlap on the benchmark
  family (ToMBench, OpenToM, HI-TOM, FANToM) but this one is ToM-specific and adds the
  enhancement-strategy taxonomy and the ATOMS coverage spine.
- It cites the wiki's primary ToM studies as the field's reference points: the
  genuine-vs-pattern-matching debate it records (Bubeck 2023; Kosinski 2024; Street 2024 on
  one side; Shapira 2024; Ullman 2023; Ma 2023a on the other) is documented primarily in
  [[sources/kosinski-2024]], [[sources/ullman-2023]], and the open question
  [[questions/llm-theory-of-mind-genuine-or-pattern-matching]].
- SimToM ([[sources/wilf-et-al-2024]]) is one member of the perspective-filtering family this
  survey groups; [[paradigms/perspective-filtering-tom-pipeline]] is the consolidation.

## Limitations

- It is a **survey**: no new empirical data, so its benchmark/strategy claims are reported at
  second hand from the primaries. The wiki treats per-result numbers as belonging to the
  primary sources, not this page.
- Self-stated scope limits (Limitations §): focuses on **story-based** benchmarks only —
  excludes purely spatial scenarios (e.g. BIB) — and relegates interactive benchmarks and
  small-language-model-era methods (e.g. Textual Time Travel) to appendices. So it is not an
  exhaustive map of ToM evaluation.
- The "trends" and coverage claims rely on the authors' own categorization (e.g. treating
  MMToM-QA / MuMA-ToM "goals" as ATOMS "intentions"), which is an interpretive overlay rather
  than a measured property of the benchmarks.
