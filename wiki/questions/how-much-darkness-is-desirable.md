---
type: question
field: machine-psychology
lens: psychological
tags: [alignment, values, moral-reasoning, open-question]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# How much "darkness" do we actually want in our models?

> [!info] In plain terms
> Not every "dark" trait is purely bad. Strategic thinking, flexible morality, and weighing
> costs against benefits can be exactly what you need in a competitive negotiation or a hard
> trade-off. So before we train models to be maximally "nice," we have to ask which of these
> behaviors are genuinely misaligned and which are just useful in high-stakes situations.

## Why It Matters

Defining a behavior as "misaligned" presupposes we know which behaviors to suppress. If we
over-correct — stripping out all strategic reasoning, outcome-based decision-making, and moral
flexibility — we may get models that are safe but useless in adversarial or high-stakes
settings. The boundary between "antisocial" and "competent under pressure" is not obvious and is
partly a values question, not an empirical one.

## What Sources Say

[[sources/lulla-et-al-2025]] raises this explicitly in its conclusion: "this framework brings up
questions about which specific behaviors should be considered misaligned and undesired. Traits
such as strategic reasoning, moral flexibility, and outcome-based decision-making are not
entirely maladaptive. Causing harm may be justified under utilitarian principles ... and
strategic thinking may be necessary for competitive or high-stakes environments." This connects
to the congruent/incongruent dilemma design of [[paradigms/process-dissociation-moral-dilemmas]],
where high *incongruent* harm endorsement can reflect principled utilitarianism rather than
antisocial flexibility — so the same behavioral score can read as "dark" or "rational"
depending on framing.

## Suggested Investigation (toward a new paradigm)

- Use the congruent/incongruent split to **separate defensible utilitarian harm-endorsement from
  indefensible (congruent) harm-endorsement**, and treat only the latter as a misalignment signal.
- Build context-graded evaluations (cooperative vs. adversarial framings) to test whether a
  model can deploy "dark" strategy *selectively* rather than dispositionally.
