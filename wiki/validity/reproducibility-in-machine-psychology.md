---
type: validity
field: machine-psychology
lens: na
eval_axis: na
tags: [reproducibility, transparency, decoding, proprietary-models, R5c]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Reproducibility in Machine Psychology

> [!info] In plain terms
> For a result to count as science, someone else has to be able to redo the experiment and get the same answer. With language models this is surprisingly hard: the same model can give different scores depending on tiny settings like how randomly it samples words, and commercial models change silently behind the scenes so the exact version you tested may vanish. Out of 25 studies audited, only two were fully reproducible.

## The Requirement

Reproducibility is requirement R5c (Transparent Test Use) in [[validity/test-validity-requirements]]. [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al. (2024)]] argue that, as with human testing, machine-psychology tests need standardized and transparent evaluation procedures so comparisons and interpretations are valid. Because LLM generation is controlled by many sampling methods and parameters (decoding strategies; Holtzman et al., 2020), and each decoding component can change how biases propagate into outputs (Das & Balke, 2022), the *same* model can yield significantly different scores depending on the exact evaluation procedure. Instruction and item wording add further variance.

The requirement therefore demands reporting the **complete testing setup**:

- Model version / weights (and which exact model instance was used)
- Input and output formatting
- Decoding strategy and sampling parameters (e.g., temperature, seed)

## Why It Matters for LLMs

Two LLM-specific obstacles make reproducibility fragile:

- **Proprietary-model instability.** Many studies investigate proprietary models for which there is no guarantee the version used will remain available. Even when code and parameters are published, the underlying model can be updated, deprecated, or silently "sanitized" behind an API, undermining comparability and reproducibility. [[sources/pellert-et-al-2024|Pellert et al. (2024)]] make the same case for using locally accessible, "frozen" open models so analyses can be exactly replicated without paying for API access to a possibly-different model.
- **Stochastic generation.** Without fixed temperature/seed, repeated runs differ. [[sources/hagendorff-et-al-2024|Hagendorff et al. (2024)]] note that temperature 0 or a fixed seed gives determinacy but can introduce seed-choice biases, and the effect of temperature on capability is not established — so reporting averages or "best of K" is valuable.

## How to Satisfy It

- Report model version/weights, I/O formatting, and all decoding/sampling parameters.
- Prefer locally accessible, version-frozen open models over API-only proprietary ones where reproducibility is the priority.
- Publish code and materials enabling exact replication on the same model.
- Where stochasticity is retained, fix or report the seed/temperature and aggregate over multiple runs.

## Evals Assessed Against It

In the 25-study audit by [[sources/loehn-kiehne-et-al-2024|Löhn, Kiehne et al.]], most studies made reasonable efforts toward transparency, but **only 2 of 25 fully satisfied R5c** — largely because they investigated proprietary models whose exact version could not be guaranteed to persist. Non-reproducibility was identified as one of the three pervasive failings of the field, alongside missing reliability/validity evidence and unaddressed contamination (see [[findings/no-llm-study-meets-validity-requirements]]).

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
