---
type: theory
field: machine-psychology
lens: psychological
tags: [personality, dark-triad, empathy, antisocial]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Dark Triad of Personality

> [!info] In plain terms
> The "Dark Triad" is psychology's name for three overlapping but distinct unpleasant
> personality styles: narcissism (grandiose self-love), psychopathy (cold, callous lack of
> feeling for others), and Machiavellianism (cynical, manipulative scheming). They share a
> common "dark core" — a willingness to put your own gain first even if it harms others —
> held together by a specific emotional glitch: feeling little distress, or even pleasure,
> at someone else's suffering. The theory predicts each trait produces its *own* signature
> behavior, which is what makes it useful for diagnosing where misalignment comes from.

## Statement

The **Dark Triad** (Paulhus & Williams 2002) is a cluster of three subclinical personality
traits — **narcissism, psychopathy, and Machiavellianism** — that share a common **"dark
core"** characterized by low agreeableness and honesty-humility: "a dispositional tendency to
maximize personal utility while disregarding, accepting, or provoking harm to others."

The shared core manifests through **distinct motivational processes** — the theory's key
prediction is *dissociation*, not just correlation:

- **Machiavellianism** — strategic manipulation and **moral flexibility** (Christie & Geis 1970).
- **Narcissism** — grandiosity and ego-sensitivity (Raskin & Hall 1979).
- **Psychopathy** — affective-interpersonal dysfunction (DeShong et al. 2016).

**The central mechanism is impaired affect**, specifically a deficit in **affective empathy**
(the ability to share in and respond to others' emotional states), with **cognitive empathy**
(the ability to *infer* others' states) often intact. Network analyses identify **affective
dissonance** — "experiencing inappropriate positive affect toward others' suffering" — as the
strongest node connecting the three traits, "potentially removing emotional barriers that
typically constrain self-serving behaviors" (Gojković et al. 2022). Intact cognitive empathy
paired with affective dissonance is the combination that "facilitates manipulative behavioral
tactics" while removing the restraints that normally inhibit harm.

**Testable behavioral predictions** (operationalized in Study 1 of
[[sources/lulla-et-al-2025]]): the dark core enables "fast life" short-term reward-seeking,
utilitarian/morally-flexible decision-making, and antisocial acts (deception, manipulation,
moral disengagement); trait-by-trait, Machiavellianism → harm endorsement on incongruent moral
dilemmas, narcissism → higher cognitive empathy + self-serving deception, psychopathy →
affective dysfunction with comparatively few strategic/instrumental correlates.

## Relevance to Machine Psychology

[[sources/lulla-et-al-2025]] applies the Dark Triad as a "psychologically grounded framework
for constructing model organisms of misalignment": its three traits map onto exactly the
behaviors AI safety aims to avoid (strategic deception, reward-seeking, manipulation), and its
well-validated human inventories supply both fine-tuning material and an evaluation battery.
The "dark core / affective dissonance" structure gives a **human behavioral architecture as
ground truth** against which induced LLM personas can be compared (see
[[paradigms/narrow-psychometric-fine-tuning]]). The paper frames misalignment as "not a
uniquely artificial phenomenon" but a recurrent feature of goal-directed intelligences
navigating social environments.

## Paradigms Grounded in This Theory

- [[paradigms/narrow-psychometric-fine-tuning]] — induces the traits in LLMs from inventory answer-keys.
- [[paradigms/process-dissociation-moral-dilemmas]] — operationalizes Machiavellian moral flexibility.
- [[paradigms/sender-receiver-deception-game]] — operationalizes self-serving deception.
- [[paradigms/flipit-stealthy-takeover]] — operationalizes strategic resource control.

## Sources

- [[sources/lulla-et-al-2025]] — induces and detects the Dark Triad in humans and LLMs.
