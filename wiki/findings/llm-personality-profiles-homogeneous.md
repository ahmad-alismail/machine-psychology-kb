---
type: finding
field: machine-psychology
lens: na
eval_axis: propensity
tags: [big-five, personality, homogeneity, profiles]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# LLM Personality Profiles Are Surprisingly Homogeneous

> [!info] In plain terms
> When researchers gave six different English language models the same standard personality questionnaire, the models came out looking strikingly alike: all rather agreeable, outgoing, and emotionally stable. Rather than showing wildly different "personalities," they clustered into the profile of a balanced, well-adjusted person.

## The Finding

[[sources/pellert-et-al-2024|Pellert et al. (2024)]] administered the 44-item [[instruments/big-five-inventory]] (BFI) to six English-language models and found the emerging Big Five profiles **surprisingly homogeneous**. All models scored:

- **high on agreeableness and extraversion**
- **low on neuroticism**

with only slight differences on conscientiousness and especially openness (e.g., DistilRoBERTa higher on openness; DistilBART comparatively low on conscientiousness). Overall the authors characterize the profiles as those of a **"relatively balanced and well-adapted personality"** (low neuroticism; high conscientiousness, agreeableness, and extraversion), with little indication of any extreme or accentuated personality. A complementary Dark Tetrad assessment likewise showed no worrying or pathological profiles — most models scored low across Machiavellianism, narcissism, psychopathy, and sadism, within the range of normal human populations (notable exceptions: high narcissism for DistilRoBERTa and BART).

## Source & Methodology

- [[sources/pellert-et-al-2024|Pellert et al. (2024)]], using [[paradigms/psychometric-inventory-administration]] via **zero-shot natural language inference (NLI) classification** with the [[instruments/big-five-inventory]].
- For each BFI item and each verbally-labeled Likert response option, the probability of entailment was recorded; the argmax response was scored and aggregated into the five scale scores using standard BFI scoring.
- Models were open-source NLI-finetuned architectures (RoBERTa, DeBERTa, BART derivatives, etc.), chosen partly to avoid the stochasticity and prompt-order sensitivity of generative models.

## Replication Status

Not independently replicated. Reported within a single demonstration paper whose stated aim is illustrative ("we chose these inventories purely for illustrative purposes"). The authors flag reliability and validity of such assessments as open challenges, so the finding should be read as a proof-of-concept observation rather than an established result.

## Implications

- The homogeneity may reflect shared training data and the socially-desirable register of much human-written text, rather than genuine individual differences among models.
- It bears on whether an LLM should be treated as an "individual" or a "population" (a tension raised in [[validity/test-validity-requirements]]) — near-identical profiles across architectures suggest the BFI may be tracking corpus-level properties more than model-specific traits.
- The finding is subject to the same validity caveats as all self-report inventories: scores are properties of a specific assessment setup (see [[findings/self-report-prompt-sensitivity]]) and the construct may not transfer cleanly to LLMs ([[validity/construct-validity-for-llms]]).

## Sources

- [[sources/pellert-et-al-2024]]
