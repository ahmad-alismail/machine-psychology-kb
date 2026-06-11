---
type: question
field: machine-psychology
lens: psychological
tags: [construct-validity, predictive-validity, open-problem]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Do LLM psychometric profiles predict downstream behavior?

> [!info] In plain terms
> Suppose a personality quiz says a model is "agreeable" or "risk-averse." Does that actually
> change what the model *does* on a real task — which tool it picks, which source it trusts,
> how cautiously it acts? If the profile predicts nothing, it's a curiosity; if it predicts
> behavior, it's a safety-relevant signal. This question asks which.

## Why It Matters

The whole case for [[theories/ai-psychometrics]] rests on an unproven arrow: that traits
"sedimented" from training text *influence behavior in downstream tasks*. Until that arrow is
demonstrated, an elicited profile has no established **predictive validity** — it is a
description in search of a consequence. For safety, the payoff is large: if a measurable
trait forecasts, say, querying unreliable sources or risk-seeking action, the profile becomes
an early-warning instrument rather than a personality parlor trick.

## What Sources Say

- [[sources/pellert-et-al-2024]] names this as the key open issue for practical relevance:
  "More empirical research is needed to establish how precisely certain traits of AI models
  influence their behavior in downstream tasks." It sketches candidate tests — e.g. whether
  risk-averse traits predict a model's choice among external tools/search engines (Schick et
  al. 2023), or behavior in LLM-driven robotics planning.

## Suggested Investigation (toward a new paradigm)

- **Trait → task correlation.** Profile a set of models with
  [[paradigms/psychometric-inventory-administration]], then measure behavior on an
  independent task battery (tool/source selection, risk-taking, honesty–helpfulness
  trade-offs) and test whether trait scores predict task behavior.
- **Manipulation check.** Deliberately shift a trait (prompting / fine-tuning) and test
  whether the predicted behavioral change follows — moving from correlation to causation.
- Pair with [[questions/training-data-shapes-traits]] (where the trait comes from) to close
  the corpus → trait → behavior loop.
