---
type: finding
field: machine-psychology
lens: na
eval_axis: propensity
tags: [self-report, prompt-sensitivity, personality, morality, steerability]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# LLM Self-Report Measures Are Highly Prompt-Sensitive

> [!info] In plain terms
> The easiest way to probe a language model seems to be to just ask it — "how anxious are you?", "what are your values?". But the answer changes dramatically depending on how you phrase the question and what context you set up. So a self-report score is really a property of that particular prompt, not a stable fact about the model. Asking the model is a weak way to find out what it is "really" like.

## The Finding

[[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] caution that self-report measures — having a model answer questions about its own personality, morality, or clinical disorders — are of questionable reliability, just as they are in humans. The properties these measures probe (personality, morality, clinical disorders) are **famously sensitive to prompting** (citing Dominguez-Olmedo et al. 2023; Röttger et al. 2024). The sensitivity is so strong that several works deliberately exploit it, simulating groups of humans of different social groups, opinions, and personalities purely by prompting one LLM differently.

The central methodological consequence: **results from self-report measures should be taken contextually** — as a property of a specific system prompt on a specific model — **not as a fundamental or general property of the LLM itself**.

## Source & Methodology

- [[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] — a review/synthesis article on machine psychology. This is a methodological argument drawn from the cited prompt-sensitivity literature, situated within a broader contrast between *self-report* and *experimental* paradigms.

## Replication Status

Synthesized from multiple cited studies (Dominguez-Olmedo et al. 2023; Röttger et al. 2024, among others); the prompt-sensitivity of LLM survey responses is a well-attested, repeatedly-observed phenomenon rather than a single result.

## Implications

- **Read self-report results contextually.** A reported "personality" or "moral profile" is conditional on the exact prompt; it is not a trait of the model. This directly qualifies findings such as [[findings/llm-personality-profiles-homogeneous]] and [[findings/llm-conservative-moral-leaning]].
- **Favor experimental over self-report paradigms.** Hagendorff et al. argue the experimental tradition in psychology — where externally observed behavior is the measured variable and stimuli are designed (with controls) so different behaviors map onto different constructs — is the more reliable foundation for machine psychology than asking the model about itself.
- Self-report still has narrow value: characterizing behavior under a *default* prompt, and measuring how *steerable* a model is along a dimension.
- Reinforces requirement R5c on transparent/reproducible test use ([[validity/reproducibility-in-machine-psychology]]): if scores hinge on wording, the exact prompt must be reported.

## Sources

- [[sources/hagendorff-et-al-2024]]
