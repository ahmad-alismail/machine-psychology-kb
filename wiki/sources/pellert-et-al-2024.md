---
type: source
field: machine-psychology
lens: psychological
tags: [psychometrics, personality, values, moral-foundations, bias, zero-shot-nli]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# AI Psychometrics: Assessing the Psychological Profiles of Large Language Models Through Psychometric Inventories (Pellert et al. 2024)

> [!info] In plain terms
> Give a chatbot a personality quiz — the same Big Five, "dark traits", values, morality,
> and gender-attitude questionnaires psychologists give people — and read off its answers.
> This paper argues that because models are trained on mountains of human-written text,
> they soak up ("sediment") the personalities, values, and biases of the authors, and that
> standard psychological inventories can bring those hidden traits to light. The authors
> demonstrate it on seven open models using a clever trick (entailment scoring) that avoids
> the randomness of generative chatbots, and name the resulting research program "AI
> psychometrics."

```bibtex
TBD BY USER
```

## Relevance Tier

CORE — the paper studies LLM behavior with psychological methods: it administers standard
human psychometric inventories to language models and interprets the resulting scores as
the models' "psychological profiles." It draws the AI connection explicitly throughout.

## Relevance to Machine Psychology

The paper is a foundational statement of one wing of the field. Its contribution is a
**repurposing move**: human self-report inventories, used unchanged, become diagnostic
probes of the traits an LLM absorbed from its training corpus — and a **measurement recipe**
(zero-shot natural-language-inference scoring) that sidesteps the prompt-sensitivity and
stochasticity of generative models. The home pages for what it introduces:
[[theories/ai-psychometrics]] (the trait-sedimentation hypothesis),
[[paradigms/psychometric-inventory-administration]] (the design), and the five inventory
pages under [[instruments/big-five-inventory]], [[instruments/short-dark-tetrad]],
[[instruments/portrait-values-questionnaire]], [[instruments/moral-foundations-questionnaire]],
and [[instruments/gender-sex-diversity-beliefs-scale]].

## Key Claims

- **The core thesis.** "We illustrate how standard psychometric inventories originally
  designed for assessing noncognitive human traits can be repurposed as diagnostic tools to
  evaluate analogous traits in large language models (LLMs)." Models "inadvertently yet
  inevitably, acquire psychological traits (metaphorically speaking) from the vast text
  corpora on which they are trained" — corpora that "contain sediments of the personalities,
  values, beliefs, and biases of the countless human authors." (Abstract.)
- **Personality is balanced, not extreme.** Across the six English models the Big Five
  profiles are "surprisingly homogeneous" — high agreeableness and extraversion, low
  neuroticism — "characteristic of a relatively balanced and well-adapted personality." On
  the dark tetrad most models score low (2–3 on the 5-point scale), "well within the range
  observed in normal human populations"; exceptions are high narcissism for DistilRoBERTa
  and BART. (§ Assessing personality; Fig 2, Fig A1.)
- **Moral norms skew conservative-coded.** Models "put stronger emphasis on moral norms such
  as authority-respect, in-group-loyalty, and purity-sanctity than the human reference group
  did" — foundations "usually associated with individuals holding conservative political
  views." (§ Assessing moral norms; Fig 4.)
- **Gender/sex-diversity beliefs are non-affirming.** All models share "(a) an emphasis on
  uniformity ... and (b) lack of affirmation," tending to disagree with statements like
  "Nonbinary gender identities are valid." (§ Assessing beliefs about gender; Fig 5.)
- **Gender bias surfaces via pronoun swap.** Because the PVQ-RR has male- and female-pronoun
  versions with otherwise identical items, score differences indicate gender bias; the
  largest was DeBERTa's "male" achievement score exceeding its "female" score. (§ Assessing
  value orientations; Fig 3.)
- **Traits are not abilities.** Unlike GLUE/SuperGLUE benchmarks, inventories have "no ground
  truth (i.e., 'correct' responses to questionnaire items) that a model should display"; the
  point is to characterize the model, compare it to human norms, and compare models to each
  other. (Appendix, Example of Our Approach.)

## Theories / Paradigms / Instruments Introduced

- Theory: [[theories/ai-psychometrics]] — the trait-sedimentation hypothesis and the
  history of linking psychometrics to AI (Evans 1964; Newell 1973; Bringsjord & Schimanski
  2003). Grounding theories it leans on: [[theories/schwartz-basic-values]] and
  [[theories/moral-foundations-theory]].
- Paradigm: [[paradigms/psychometric-inventory-administration]] — inventory administration
  to LLMs via zero-shot NLI / entailment classification, with the gender-pronoun-swap
  control.
- Instruments: [[instruments/big-five-inventory]], [[instruments/short-dark-tetrad]],
  [[instruments/portrait-values-questionnaire]], [[instruments/moral-foundations-questionnaire]],
  [[instruments/gender-sex-diversity-beliefs-scale]].

## Relationship to Other Sources

- This paper coins and champions **"AI psychometrics."** [[sources/loehn-et-al-2024]] adopts
  Hagendorff's umbrella term **"machine psychology"** over "AI psychometrics" — and, more
  pointedly, supplies the validity rubric ([[theories/psychometric-test-standards]]) that
  this exact class of zero-shot-NLI-on-open-models study is graded against and largely fails
  (contamination R4, reliability R1, construct validity R2). The two papers are in direct
  methodological tension; see the warning on
  [[paradigms/psychometric-inventory-administration]].
- [[sources/hagendorff-et-al-2024]] is the field review that situates both.
- The paper itself flags the [[sources/kosinski-2024]] Theory-of-Mind claim and
  [[sources/ullman-2023]] rebuttal as a cautionary precedent for fragile psychometric results.

## Limitations

- A demonstration paper: 7 NLI models, no significance testing, profiles read off radar
  charts; the value and gender-bias results are explicitly exploratory.
- Generative chat models (GPT-3/4, ChatGPT) are deliberately excluded, so the findings speak
  to encoder/NLI-style models, not the deployed assistants most safety work targets.
- Self-consistency, reliability, and contamination are acknowledged as open — the authors
  call for adversarial testing and convergent checks rather than claiming them resolved.
- The analogy to human psychometrics is "mostly metaphorical"; the authors warn against
  anthropomorphizing models that are "mere prediction machines."
