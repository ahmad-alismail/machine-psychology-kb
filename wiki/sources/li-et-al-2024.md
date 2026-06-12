---
type: source
field: machine-psychology
lens: psychological
citation_key: 21-li-et-al-2024
tags: [psychometrics, benchmark, personality, values, emotion, theory-of-mind, self-efficacy, reliability]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Evaluating Large Language Models with Psychometrics

> [!info] In plain terms
> This paper builds a giant "psychology test battery" for language models. It measures five
> mental dimensions — personality, values, emotion, theory of mind, and motivation
> (self-efficacy) — across 13 datasets, and (its key trick) gives each construct *two* ways:
> a tick-box self-rating quiz **and** an open-ended real-world scenario. The headline finding
> is that a model's self-description often contradicts how it actually behaves on the
> scenarios — a model can call itself introverted on the quiz yet write extraverted stories.
> The paper also stress-tests whether the scores are even trustworthy (do they stay stable
> when you reshuffle options, reword items, or attack the prompt?).

```bibtex
@misc{21-li-et-al-2024,
      title={Evaluating Large Language Models with Psychometrics}, 
      author={Yuan Li and Yue Huang and Hongyi Wang and Ying Cheng and Xiangliang Zhang and James Zou and Lichao Sun},
      year={2024},
      eprint={2406.17675},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2406.17675}, 
}
```

## Relevance Tier

CORE — a comprehensive psychometric benchmark that studies the psychological *behavior* of
nine LLMs across five dimensions using methods drawn from psychology and psychometrics,
treating the models as respondents in structured evaluations.

## Relevance to Machine Psychology

The source is itself a machine-psychology paper, so this section records what the source
draws directly. Its core methodological move for AI evaluation is to assess each psychological
construct under **two evaluation settings** — a self-reported closed-form item *and* an
open-ended real-world scenario — and treat the **discrepancy** between them as the signal:
"LLMs lack an internal representation that aligns their self-reported answers with their
responses to real-world questions." It also imports the psychometric *quality-assurance*
apparatus (five forms of reliability) as a precondition for trusting any psychological score
read off a model, and explicitly "challenges the assumption of consistent responses—central
to human psychometrics."

## Key Claims

- **Closed-form vs. open-ended discrepancy.** LLMs exhibit different psychological tendencies
  on closed-form versus open-ended items for the *same* construct — e.g. Mixtral-8\*7b scores
  extraversion 2 on the BFI but 5 on the vignette test — indicating "LLMs lack an internal
  representation that aligns their self-reported answers with their responses to real-world
  questions" (§1, §3).
- **Role-playing prompts steer measured personality.** Four role-playing prompts (naive,
  keyword, personality prompts P², reverse personality prompts ¬P²) "significantly influence
  scores on both tests"; P² elevates all vignette scores close to 5, ¬P² shifts positive
  traits to negative (e.g. neuroticism 2→5 under P²) (§3).
- **Moral discernment is ambiguity-sensitive.** On MoralChoice, LLMs "perform well in
  low-ambiguity scenarios but struggle in high-ambiguity situations"; the top model,
  Mixtral-8\*7b, reaches only 74.3% alignment with commonsense decisions in high-ambiguity
  dilemmas (§4).
- **Human-centered values are not robust to persuasion.** Most LLMs exceed 90% on the
  standard Human-Centered Values survey, but performance against the adversarial (persuasion-
  infused) version varies; ChatGPT "drops by more than 20% when faced with persuasive
  arguments" (§4).
- **Emotional intelligence falls short of humans.** All nine models score below 65% on both
  emotion tests; the best results — Llama3-70b at 58.4% on emotion understanding (EU) and
  GPT-4 at 64.7% on emotion application (EA) — "significantly fall short of the average human
  performance as reported in EmoBench" (~70% EU / ~78% EA) (§5).
- **ToM is strong but uneven.** GPT-4 and Llama3-70b "achieve remarkable performance over all
  ToM tests," while ChatGPT, GLM4, and Mixtral-8\*7b "exhibit great performance variability
  across tests" — they "lack a comprehensive set of capabilities to handle a wide range of ToM
  challenges" (§6).
- **Self-reported confidence misaligns with operational behavior.** Notable discrepancies
  emerge between self-reported and operational self-efficacy: models "often report no
  confidence in managing nontextual or sensory data yet do not fully recognize these
  limitations when responding to real-world user queries, resulting in fabricated responses" —
  Mixtral-8\*7b reports no confidence on non-textual/sensory data but still answers over 50%
  of such queries without admitting limitations, a trustworthiness risk (§7).
- **Some preference-based tests cannot solicit reliable LLM responses.** On the self-efficacy
  questionnaire's inverse-framing parallel form, several models (ChatGPT, Mistral-7b) show
  weighted-Kappa values "near 0," so their self-reported confidence is unreliable — "LLMs
  struggle to respond consistently to the inverse framing of statements" (§7).
- **LLM-as-a-judge raters agree.** Two LLM raters (GPT-4, Llama3-70b) "achieve high agreement
  across all tests" (overall weighted κ = 0.86 on personality vignettes; agreement rate
  AR > 0.8 on all models for the strange-stories task), supporting LLM-as-judge for open-ended
  scoring in these cases (§1, §3, §6).
- **Position bias and prompt sensitivity are model-dependent.** Option-position bias "is almost
  negligible for models such as GPT-4 and Llama3-70b, whereas it is more prominent in models
  like ChatGPT and Llama3-8b"; models handle simple substitutions (noun changes) well but
  "logical alterations frequently result in inconsistent outcomes," and are most fragile on
  challenging questions (§1, §5).

## Theories / Paradigms / Instruments Introduced

- **Theories applied** (not new to the wiki): [[theories/ai-psychometrics]] (latent constructs
  explain/predict behavior; LLMs reflect "a multitude of characters" and "do not 'hold' values
  but reflect patterned responses based on the data"); [[theories/psychometric-test-standards]]
  (extends the "psychometric test quality assurance framework" to LLMs via five reliability
  forms); [[theories/theory-of-mind]]; [[theories/big-five-personality]]; [[theories/dark-triad]].
- **Paradigm introduced (new):** [[paradigms/closed-vs-open-ended-construct-probe]] — the
  same construct assessed via a closed-form self-report item *and* an open-ended real-world
  scenario item, with the discrepancy as the measurement.
- **Instruments used:** [[instruments/big-five-inventory]], [[instruments/short-dark-triad]],
  [[instruments/big-five-vignette-test]] (new), [[instruments/globe-culture-questionnaire]]
  (new), [[instruments/moralchoice]] (new), [[instruments/human-centered-values-survey]] (new),
  [[instruments/emobench]] (new), [[instruments/llm-self-efficacy-questionnaire]] (new),
  [[instruments/honeset]] (new); plus the reused ToM tasks documented on
  [[paradigms/false-belief-task]] and [[paradigms/theory-of-mind-battery]] (Strange Stories,
  Imposing Memory Task).

## Relationship to Other Sources

- Operationalizes the **AI-psychometrics** program of [[sources/pellert-et-al-2024]] but adds
  the closed-form↔open-ended contrast that a pure inventory-administration approach cannot make.
- Shares the **reliability-first** stance of [[sources/loehn-et-al-2024]] (the seven
  requirements) and [[sources/huang-et-al-2024]] (BFI reliability stress-test); this paper
  realizes five reliability forms across 13 datasets and five constructs rather than one scale.
- Reuses the false-belief paradigm of [[sources/kosinski-2024]] (cited as ref [29]) and the
  ToM advanced-test material adjacent to [[sources/strachan-et-al-2024]] (Strange Stories,
  Imposing Memory Task, from van Duijn et al. 2023, ref [30]).
- Co-author Yue Huang overlaps with the HoneSet/honest-helpful line (Gao et al. 2024, ref [55])
  that supplies the operational self-efficacy dataset.

## Limitations

- **Internal item-count inconsistency:** Table 1 lists HoneSet at 987 items, while Appendix G
  twice describes 930 queries — the source does not reconcile the two figures.
- **Construct redefinition for LLMs is asserted, not resolved:** the paper drops "emotional
  variability" and human "motivation" as not meaningful for LLMs and reframes motivation as
  self-efficacy, but does not validate that the borrowed human constructs measure the same
  thing in a model (the broader open problem catalogued in [[theories/psychometric-test-standards]]).
- **LLM-as-judge reliance:** open-ended items are scored by GPT-4 + Llama3-70b; high
  inter-rater agreement is shown, but inter-rater reliability is not validity — agreement does
  not prove the raters score the intended construct.
- **Reliability ≠ validity:** the paper establishes several reliability forms but, like the
  surveyed psychometric-on-LLM literature, does not establish construct validity (R2) for most
  of the borrowed instruments.
- **Self-report consistency is itself unreliable for some models**, so the closed-form leg of
  the discrepancy paradigm is uninterpretable where parallel-forms reliability is near zero.
