---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [psychometrics, reliability, validity, classical-test-theory, standards, construct]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Psychometric Test Theory

> [!info] In plain terms
> Over a century, psychologists worked out rules for what makes a test trustworthy:
> it should give stable results if you run it again (reliability) and actually
> measure the thing it claims to measure (validity). These rules are written down
> in formal standards. The point here is that if you want to "test" an AI model
> the same way you test a person, the test has to clear those same bars — otherwise
> the scores mean nothing.

## Statement

Psychometric test theory is the body of methodology — anchored in **classical
test theory** and codified in the *Standards for Educational and Psychological
Testing* (AERA/APA/NCME) and the *International Guidelines for Test Use* — that
governs how psychological tests are developed, administered, scored, and
interpreted. A **construct** is a group of psychological characteristics (traits,
abilities, behavioral patterns), defined conceptually (its meaning and relations
to other constructs) and operationally (the variables used to measure it).

The theory's central requirements:

- **Reliability** — stability of test scores across repeated administration.
  Assessed via test–retest, alternate-forms (rephrased items), and internal
  consistency methods.
- **Validity** — the requirement that a test actually measures the construct it
  claims to. The Standards recognize four sources of validity evidence:
  - based on **test content** (do themes, format, and wording represent the
    construct?),
  - based on **response processes** (do the cognitive strategies test-takers use
    match the intended construct?),
  - based on **internal structure** (do inter-item relationships match the
    proposed dimensionality, e.g., via factor analysis?), and
  - based on **relations to other variables** (convergent and discriminant
    evidence against other tests).

Key prediction / commitment: a test validated for one population does not
automatically transfer to a different population; validity and reliability must
be re-established for each population considered.

## Relevance to Machine Psychology

This theory is the **yardstick** for whether an LLM "test" measures anything at
all. [[sources/loehn-kiehne-et-al-2024]] derives seven requirements for testing
LLMs directly from the Standards and argues that, because LLMs differ
fundamentally from humans (no body, no stable selfhood, sensitivity to wording),
a test validated for humans is not automatically valid for a model — validity and
reliability must be re-demonstrated for the LLM as its own population. Their audit
of 25 studies finds the field largely fails to assess reliability and construct
validity, motivating the call to **redefine constructs specifically for LLMs**
rather than borrowing them wholesale from human psychology.

To adapt the framework for an LLM: treat each model (and configuration) as a
distinct population requiring its own reliability evidence (lowering temperature
raises test–retest reliability but covers only a fragment of behavior; rephrased
alternate forms probe wording sensitivity), and supply validity evidence across
the four sources above before interpreting any score. This theory underpins all
of the wiki's validity requirements — see [[validity/test-validity-requirements]],
[[validity/construct-validity-for-llms]], and [[validity/reproducibility-in-machine-psychology]].

## Paradigms Grounded in This Theory

- [[paradigms/psychometric-inventory-administration]]

## Sources

- [[sources/loehn-kiehne-et-al-2024]]
