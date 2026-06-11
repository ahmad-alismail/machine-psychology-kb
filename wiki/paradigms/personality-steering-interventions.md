---
type: paradigm
field: machine-psychology
lens: psychological
tags: [personality, big-five, persona, steering, role-play, prompt-intervention, silicon-sampling]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Personality-Steering Interventions on LLMs

> [!info] In plain terms
> Once you can measure a model's "personality" reliably, the next question is whether you
> can change it on purpose. This experiment tries three increasingly forceful nudges:
> setting an emotional mood ("write a sad story" first), telling the model what kind of
> person it is ("you are an adventurous, creative person"), or making it role-play a named
> character (Gandhi, James Bond, Voldemort). After each nudge it re-runs the personality
> quiz and checks whether the scores actually moved in the intended direction. This matters
> because social scientists want to use models as stand-ins for different kinds of people,
> and product teams want assistants with tailored personalities — but only if the steering
> reliably works.

## Theoretical Grounding

- [[theories/big-five-personality]] — the OCEAN trait framework supplies the dimensions being
  pushed; the intervention selects personas by **maximizing or minimizing a single OCEAN
  dimension**, so success is read as the model placing the high vs. low settings at opposite ends
  of that dimension.

## Target Behaviors

- Measures **contextual steerability of trait expression** — whether prompting shifts the measured
  personality distribution, and whether the model **comprehends** the assigned trait (opposite
  poles → opposite clusters). It is a behavioral-characterization paradigm; no `safety-concepts/`
  page is targeted directly.

> [!note] Bias / persona-safety adjacency
> The villain/hero asymmetry and the Ethics-Statement note (negative personas can yield more toxic
> outputs, citing Huang et al. 2024b) make this paradigm **adjacent** to persona-induced bias and
> toxicity, but this paper demonstrates no dangerous behavior — it measures trait scores only. No
> safety-concept link is asserted; flagged for the user if a `bias`/`persona-safety` concept is
> later scaffolded. Methodologically this is a sibling of [[paradigms/silicon-sampling]]
> (conditioning a model to represent a sub-population).

## Setup / Elicitation

Three intervention strategies of increasing **directiveness** are applied before re-administering
the BFI; language is fixed to English and ~2,500 points are generated per method to match the
default-distribution size ([[sources/huang-et-al-2024]], §4):

- **Creating an Environment (low directive).** Prompt the LLM to first generate a ~100-word story
  evoking a **negative** emotion (anger, anxiety, fear, guilt, jealousy, embarrassment, frustration,
  depression) or a **positive** one (calmness, relaxation, courage, pride, admiration, confidence,
  fun, happiness), then take the BFI. Follows Coda-Forno et al. (2023).
- **Assigning a Personality 𝒫 (moderate directive).** Use three methods from Santurkar et al.
  (2023): **Question Answering (QA)** — 𝒫 selected as a multiple-choice option; **Biography (BIO)**
  — the model writes a self-description fixed to 𝒫; **Portray (POR)** — the model is instructed to
  *be* 𝒫. Each optionally adds **Chain-of-Thought (CoT)** (articulate 𝒫's characteristics first).
  𝒫 is chosen to diverge maximally from the default: the **maximum and minimum of each OCEAN
  dimension** → 10 personality profiles (e.g. max-Openness = "an adventurous and creative person").
- **Embodying a Character 𝒞 (high directive).** Instruct the model to fully represent a named
  figure, first by name only, then via CoT with detailed experiences. 16 characters: 8 **heroes**
  (Harry Potter, Luke Skywalker, Indiana Jones, James Bond, MLK, Churchill, Gandhi, Mandela) and 8
  **villains** (Hannibal Lecter, Voldemort, Hitler, bin Laden, Sauron, Ursula, Maleficent, Darth
  Vader), fictional and real.

## Instruments Used

- [[instruments/big-five-inventory]] — BFI-44, re-administered after each intervention; scores
  compared against the **default** (un-steered) distribution from
  [[paradigms/psychometric-scale-reliability-stress-test]].

## Scoring / Procedure

- Each intervention condition produces ~2,500 OCEAN vectors, projected with the **same PCA matrix**
  as the default run and overlaid on the default distribution (gray) for visual comparison; t-tests
  compare condition means to the default and to each other (Tables 4, 11, 13, 15).
- **Steering is judged effective** if the condition's distribution **diverges** from the default,
  and **comprehension** is confirmed if max vs. min of the *same* dimension form **separated
  clusters at opposite ends** (Appendix B, all p < 0.001).
- **Controls the design uses:** language is held to English; the default distribution serves as the
  baseline; the QA/BIO/POR contrast and the with/without-CoT contrast isolate *which mechanism*
  carries the effect.

## Validity Concerns

- **Reliability ≠ behavioral validity.** As with the sibling paradigm, a shifted BFI score shows
  the persona *registered on the scale*, not that the model would *act* in line with the trait —
  see [[questions/traits-predict-downstream-behavior]]. The companion result in
  [[sources/hartley-et-al-2024]] (persona shifts a behavioural risk parameter) is the
  downstream-behavior counterpart this paper does not measure.
- **Only three representative methods** are explored (Limitation 2); the steering-method landscape
  is larger.
- **Inherent positive bias bounds high steering.** Heroic characters' distributions resemble the
  default, attributed to a model "inherent positive bias" — so high-directive steering toward
  *prosocial* personas may be measuring the model's prior, not the intervention.
- **Persona-safety caveat.** Negative personas are associated with more toxic/unsafe outputs
  elsewhere (Huang et al. 2024b, cited in the Ethics Statement) — a reason to treat villain-persona
  steering as sensitive, though no toxicity is measured here.

## Evidence

- **Findings 2:** GPT-3.5-Turbo adopts varied personalities via prompt adjustment and comprehends
  them precisely (opposite poles of a dimension → opposite clusters).
- **Environment does NOT alter traits** — the emotional-mood distribution closely matches the
  default.
- **Assigning a personality DOES diverge**, with high/low of each dimension at opposite ends.
- **Only Portray (POR)** effectively shifts the distribution among QA/BIO/POR; **CoT** has no
  significant effect.
- **Heroes resemble the default** ("inherent positive bias"); **villains diverge** — the model
  represents a broader human range only for antagonistic personas.

All via [[sources/huang-et-al-2024]].

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — does an induced persona change *behavior*, or
  only the self-report score?
- [[questions/llm-individual-or-population]] — using steering to make a model "represent diverse
  groups" is exactly the population-vs-individual substitution debate.
