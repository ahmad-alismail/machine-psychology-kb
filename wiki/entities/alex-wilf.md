---
type: entity
field: machine-psychology
lens: na
tags: [author]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Alex Wilf

> [!info] In plain terms
> A Carnegie Mellon researcher who showed that a simple change in *how* you prompt a language
> model — asking it to take a character's perspective first, then answer — sharply improves its
> mind-reading, by borrowing a cognitive-science theory of how humans read minds.

## Profile

Lead author of [[sources/wilf-et-al-2024]] ("Think Twice: Perspective-Taking Improves Large
Language Models' Theory-of-Mind Capabilities", ACL Findings 2024), with Sihyun Shawn Lee, Paul
Pu Liang, and senior author Louis-Philippe Morency, at Carnegie Mellon University.

## Key Contributions

- Introduced **SimToM** ([[paradigms/simtom-perspective-taking-prompting]]), a two-stage
  prompting framework that operationalizes Simulation Theory's *perspective-taking* step and
  substantially improves LLM theory-of-mind performance with no training.
- Brought **Simulation Theory** ([[theories/simulation-theory]]) into LLM evaluation as the
  grounding for the intervention, and used ablations (Single / Multi / Domain / Oracle) to show
  the gain is from *perspective-taking specifically*, not generic multi-step prompting — and
  that oracle perspective-taking nearly *solves* current ToM benchmarks.

## Conceptual Framework

Treats a prominent cognitive-science theory of human mind-reading as a *recipe* for prompting
LLMs, and uses ablation/oracle analyses to localize where an LLM's theory-of-mind gap actually
lies (in taking the perspective, not in reasoning from it).

## Affiliations

Carnegie Mellon University (Language Technologies Institute / MultiComp Lab, with L.-P.
Morency).
