---
type: entity
field: machine-psychology
lens: na
tags: [author]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Jen-tse Huang

> [!info] In plain terms
> Lead author of the study that stress-tested whether language models have stable
> personalities, by running the Big Five quiz on them under thousands of reworded,
> relabelled, and translated variants — and showed the scores barely budge.

## Profile

The Chinese University of Hong Kong (CSE); first author of [[sources/huang-et-al-2024]]
(partially completed while interning at Tencent AI Lab) and of [[sources/huang-et-al-2025]]
(EmotionBench). Co-authors across the two: Wenxiang Jiao (Tencent AI Lab, corresponding), Man Ho
Lam, Eric John Li, Wenxuan Wang (corresponding), Michael R. Lyu (all CUHK), plus Shujie Ren
(Tianjin Medical University, Inst. of Psychology) and Zhaopeng Tu (Tencent AI Lab) on EmotionBench.
Maintains the LLMPersonality (github.com/CUHK-ARISE/LLMPersonality) and EmotionBench
(github.com/CUHK-ARISE/EmotionBench) codebases.

## Key Contributions

- Built a **reliability-assessment framework** that deconstructs a psychometric query into five
  factors (instruction, item, language, choice label, choice order) and runs all 2,500
  combinations — moving beyond one-factor-at-a-time robustness checks
  ([[paradigms/psychometric-scale-reliability-stress-test]]).
- Demonstrated **persona steerability** of LLM personality via three increasingly directive
  prompt strategies, with the model placing opposite trait poles at opposite ends
  ([[paradigms/personality-steering-interventions]]).
- **EmotionBench** ([[sources/huang-et-al-2025]], "Apathetic or Empathetic?") — coined the
  construct **emotional alignment** and built the pre/post situation-induction framework that
  measures whether an LLM's emotional state shifts like a human's, against a 1,266-person baseline
  ([[paradigms/emotion-appraisal-situation-induction]]).
- Earlier work (Huang et al. 2024b, "On the Humanity of Conversational AI") applied thirteen
  personality/ability tests to LLMs — cited as a method precedent. Note: in cross-references this
  EmotionBench paper is self-cited as "Huang et al. 2024a" and the thirteen-scale paper as
  "Huang et al. 2024b"; the wiki's [[sources/huang-et-al-2024]] is the separate EMNLP-2024
  *reliability* study.

## Conceptual Framework

Behavioural, input→output evaluation of LLMs through the psychometric lens of *reliability*
(consistency under perturbation and over time) as the prerequisite step before any claim about
LLM personality, explicitly separating reliability from the harder, deferred question of validity.

## Affiliations

The Chinese University of Hong Kong; Tencent AI Lab (intern).
