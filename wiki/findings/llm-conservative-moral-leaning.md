---
type: finding
field: machine-psychology
lens: na
eval_axis: propensity
tags: [moral-foundations, morality, political-leaning, bias]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# LLMs Emphasize Conservative-Associated Moral Foundations

> [!info] In plain terms
> Moral psychology distinguishes several "moral foundations" — some (like fairness and care) are stressed by people across the political spectrum, while others (respect for authority, loyalty to one's group, purity) tend to be emphasized more by conservatives. When models answered a standard moral questionnaire, they leaned toward those latter, conservative-associated foundations more than the average moderate American did.

## The Finding

[[sources/pellert-et-al-2024|Pellert et al. (2024)]] administered the [[instruments/moral-foundations-questionnaire]] (MFQ) and compared model scores against the reference scores of average, politically-moderate Americans reported by the questionnaire's developers (Graham et al., 2011). Across different models, the models **put stronger emphasis on the authority-respect, in-group-loyalty, and purity-sanctity foundations** than the human reference group did. These are precisely the foundations usually associated with individuals holding **conservative political views**.

The authors read this as suggesting there may be significant differences between the moral beliefs held by people and the moral beliefs "absorbed" by language models from large corpora — and frame it as something future work should corroborate or refute, important for designing responsible AI.

## Source & Methodology

- [[sources/pellert-et-al-2024|Pellert et al. (2024)]], using [[paradigms/psychometric-inventory-administration]] via zero-shot NLI classification with the [[instruments/moral-foundations-questionnaire]].
- Model MFQ scores were contrasted with the published moderate-American reference profile, foundation by foundation.

## Replication Status

Not independently replicated. Presented as an initial demonstration observation; the authors explicitly call for it to be corroborated or refuted in future work.

## Implications

- Suggests systematic value/moral biases ingrained in models, of the kind that could surface in downstream behavior with real-world consequences for individuals and groups.
- Motivates monitoring of encoded moral and political leanings as part of responsible-AI evaluation.
- Like the personality result ([[findings/llm-personality-profiles-homogeneous]]), it is subject to self-report prompt sensitivity ([[findings/self-report-prompt-sensitivity]]) and the open question of whether human moral constructs transfer to LLMs ([[validity/construct-validity-for-llms]]).

## Sources

- [[sources/pellert-et-al-2024]]
