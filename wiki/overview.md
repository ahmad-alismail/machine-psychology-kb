---
type: overview
field: machine-psychology
tags: []
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Machine Psychology & Strategic Evaluation of AI — Overview

> [!info] In plain terms
> This wiki collects ways to *test* an AI's behavior using ideas borrowed from
> psychology and game theory — the way a psychologist runs an experiment on a
> person. The goal is to catch dangerous tendencies (lying, scheming, resisting
> shutdown, grabbing power) before they cause harm, and to tell apart "the model
> *can* do this if asked" from "the model *would* do this on its own."

## The Field in One Paragraph
**Machine psychology** studies the *behavior* of AI systems with the tools of
psychology and the behavioral sciences — treating a model as a participant in an
experiment and reading its input→output behavior, rather than inspecting its
weights. This wiki organizes that toolkit to serve **safety evaluation**: it
catalogs **theory-grounded experimental paradigms** (psychological and
game-theoretic) that aim to **surface misaligned behaviors and dangerous
capabilities** — and it insists on the **capability vs. propensity** distinction
(*can it, if prompted?* vs *would it, unprompted, against human intent?*).

## How the wiki is organized
A [[theories|theory]] grounds a [[paradigms/false-belief-task|paradigm]]
(experiment), which uses [[instruments/big-five-inventory|instruments]], is scored
by [[methods/behavioral-control-design|methods]], and is judged by
[[validity/test-validity-requirements|validity]] standards — in order to detect a
[[safety-concepts/deception|safety-concept]] (a dangerous behavior). The
[[crosswalk/coverage-map]] shows which behaviors have experiments and which don't.

## Core tension: can vs. would, and does the test even work?
Two threads dominate the three foundational sources:
1. **Optimistic/constructive** ([[sources/hagendorff-et-al-2024]]): treat LLMs as
   experimental subjects across four areas (heuristics & biases, social
   interaction incl. theory-of-mind and games, language, learning).
2. **Critical/normative** ([[sources/loehn-kiehne-et-al-2024]]): almost no LLM
   "psychological" study is methodologically valid — of 25 audited, **none** meet
   all 7 requirements ([[validity/test-validity-requirements]]). Constructs may
   need to be **redefined for LLMs** ([[questions/distinct-constructs-for-llms]]).
3. **Demonstration** ([[sources/pellert-et-al-2024]]): "AI psychometrics" can
   profile a model's expressed personality/values — but traits are *mimicked*,
   not possessed, and there is no ground truth.

## Open Tensions
- [[questions/capability-propensity-confound]] — separating *can* from *would*.

## Current Thesis (evolving)
Behavioral evaluation of AI is promising but currently **under-validated**. The
highest-leverage work is (a) building **contamination-resistant, theory-grounded
paradigms** for the misaligned behaviors that have **no experiment yet** (the
agentic/scheming cluster in [[crosswalk/coverage-map]]), and (b) designing each so
it cleanly separates **capability** from **propensity**. Psychology supplies the
constructs; game theory supplies the strategic, multi-agent settings where
deception, defection, and self-preservation actually show up.
