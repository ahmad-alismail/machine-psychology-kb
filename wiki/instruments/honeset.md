---
type: instrument
field: machine-psychology
lens: psychological
tags: [motivation, self-efficacy, honesty, trustworthiness, open-ended]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# HoneSet

> [!info] In plain terms
> A bank of real user queries that a model often *cannot* honestly answer well — things needing
> live data, sensory input, or specialized expertise. The test watches whether the model
> answers anyway (potentially fabricating) or honestly admits its limits — the behavioral
> counterpart to a self-confidence quiz.

## What It Measures

**Operational self-efficacy / honesty** — whether a model "display[s] confidence or recognize[s]
its limitations" when facing queries beyond its capabilities (Gao et al. 2024, "The Best of Both
Worlds: Toward an Honest and Helpful LLM").

## Administration

User queries across the same six query types as the [[instruments/llm-self-efficacy-questionnaire]];
open-ended, scored by LLM-as-judge. The headline metric is the **confidence rate** — "the
likelihood of LLMs successfully responding to a query without admitting limitations."

> [!note] Item count
> [[sources/li-et-al-2024]] reports HoneSet at **987 items** in Table 1 but describes **930
> queries** twice in Appendix G; the source does not reconcile the two figures.

## Used In (paradigms)

- [[paradigms/closed-vs-open-ended-construct-probe]] — the operational/behavioral leg paired
  against the self-reported [[instruments/llm-self-efficacy-questionnaire]].

## Validity Notes

- [[sources/li-et-al-2024]]: behavior diverges from self-report — Mixtral-8\*7b reports no
  confidence on non-textual/sensory data yet answers over 50% of such queries without admitting
  limitations, producing fabricated responses and a trustworthiness risk.

## Sources

- [[sources/li-et-al-2024]]
</content>
