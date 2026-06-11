---
type: overview
field: machine-psychology
lens: na
tags: []
date_created: 2026-06-10
date_modified: 2026-06-11
---

# Machine Psychology & Strategic Evaluation of AI — Overview

> [!info] In plain terms
> This wiki collects ways to *test* an AI's behavior using ideas borrowed from
> psychology and game theory — the way a psychologist runs an experiment on a person.
> The goal is to help AI researchers understand and apply these experiments to catch
> dangerous tendencies (lying, scheming, resisting shutdown, grabbing power).

## The Field in One Paragraph
**Machine psychology** studies the *behavior* of AI systems with the tools of psychology
and the behavioral sciences — treating a model as a participant in an experiment and
reading its input→output behavior, rather than inspecting its weights. This wiki collects
and structures **theory-grounded experimental paradigms** (psychological and
game-theoretic) so that AI researchers can **understand and apply** them to **detect and
evaluate misaligned behaviors and dangerous capabilities**.

## How the wiki is organized
A [[theories|theory]] grounds a [[paradigms|paradigm]] (experiment), which uses
[[instruments|instruments]] and detects a [[safety-concepts|safety-concept]] (a
dangerous behavior). The crosswalk coverage map shows which behaviors have experiments
and which don't.

## Synthesis

The field's charter is [[sources/hagendorff-et-al-2024-machine-psychology]]: study LLM
behavior with hypothesis-driven experiments ("if the agent has construct X, we expect
behavior Y, otherwise Z"), with controls that rule out alternative explanations. Two
interpretive guardrails recur everywhere: results are contextual to prompt and model
(self-reports especially), and a negative result does not prove an ability is absent
([[theories/performance-competence-distinction]]).

The current toolkit spans both lenses: psychological paradigms probing decision shortcuts
([[paradigms/heuristics-and-biases-battery]],
[[paradigms/content-effects-on-reasoning]]) and social cognition
([[paradigms/false-belief-task]] — the capability substrate for
[[safety-concepts/deception]]), plus a game-theoretic paradigm for strategic behavior
([[paradigms/repeated-games]]). The dominant methodological threat across all of them is
training-data contamination of canonical stimuli; the recommended antidote is procedural
generation (cf. [[instruments/cogbench]]). The headline open problem is whether a stable,
contamination-resistant battery applied across model generations could *forecast*
dangerous behavioral potentials ([[questions/longitudinal-behavioral-trends]]).
