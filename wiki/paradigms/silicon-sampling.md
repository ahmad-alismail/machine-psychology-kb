---
type: paradigm
field: machine-psychology
lens: psychological
tags: [inference-framework, typology, simulation, fidelity, weird, individual-vs-population]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Silicon Sampling (LLMs Simulating Humans)

> [!info] In plain terms
> "Silicon sampling" uses a language model as a synthetic survey panel: give it a backstory ("you
> are a 45-year-old rural voter…") and read its answer as a stand-in for how that *kind of person*
> would respond. If it works, you could simulate hard-to-reach groups cheaply. The bet rests on
> two strong assumptions — that the model faithfully "encodes" human knowledge, and that a persona
> prompt reliably summons the right slice of it — and Ong's worry is that those assumptions are
> rarely tested, and that the model may be reciting a stereotype, not a person.

> [!note] Inference-framework paradigm
> One of three research paradigms in [[sources/ong-2024]]'s typology. It is the **inference lens** —
> not a stimulus design — applied to the shared base experiment ("an LLM responds to some input").
> What makes a study "silicon sampling" is the *goal*: inferences "about human cognition, via
> simulating humans." Sibling lenses: [[paradigms/gpt-ology]],
> [[paradigms/llm-as-computational-model]].

## Theoretical Grounding

- Grounded in the wager that LLMs "accurately 'encode' or 'compress' human knowledge" and that
  conditioning on a subpopulation backstory "yields behavior of sufficient fidelity" (Park et al.
  2023) — "two very strong assumptions" (Ong's phrasing). The unresolved
  individual-vs-population question (below) is the theoretical crux.

## Target Behaviors

- The lens simulates human survey/behavioral responses; it targets no dangerous-capability
  safety-concept directly. Its outputs can surface **bias / stereotype** content (no `bias`
  safety-concept exists yet — flagged for the user).

## Setup / Elicitation

The shared base experiment, but the inference is "about human cognition, via simulating humans" —
"How would people respond?". The LLM is conditioned with **backstories of different
subpopulations** and its responses are read as samples of how those groups would behave. Surveyed
applications: simulating economic experiments (Aher et al. 2023; Horton 2023 "homo silicus"),
consumer preferences (Sarstedt et al. 2024), and voting behavior from demographic backstories
(Argyle et al. 2023, "Out of one, many"; Grossmann et al. 2023; Park et al. 2023).

## Scoring / Procedure

- Simulated responses are compared to (or used in place of) real human survey/behavioral data; the
  inference is about the human subpopulation being simulated.
- The procedure's validity hinges on a **fidelity check**: "whether LLM responses can accurately
  reflect human responses" must be "properly tested" (Argyle et al. 2023; Grossmann et al. 2023) —
  Ong stresses this is "currently not common practice." Sampling + statistics over many draws (not a
  single response) is required, since the object of inference is a *distribution*.

## Validity Concerns

- **Untested fidelity.** The approach "rests on several assumptions of fidelity … These have to be
  properly tested, and are also related to issues with LLM reliability."
- **Underrepresentation → stereotypes.** A selling point is simulating hard-to-recruit minorities,
  but "these minority groups are also underrepresented in the training data," and simulated behavior
  "might reflect (biased) stereotypes about how certain groups of people behave, rather than actual
  behavior." Reinforced by the **WEIRD** skew of training data (Henrich et al. 2010, 2023) and the
  further skew toward "mostly young, internet-savvy users."
- **Individual vs. population.** The approach "assumes that LLMs can simulate individual humans," but
  an LLM's output may instead be "a population average, or 'aggregate' summary of human knowledge
  (e.g., a cultural technology like a library; Yiu et al. 2023)." "These two conceptualizations are
  distinct and will affect experimental design and inferences" — the Bayesian analogy is
  probability-matching (sampling the posterior) vs. the MAP estimate. Treating a population average
  as an individual "might lead to biases in the inferences drawn." See
  [[questions/llm-individual-or-population]].

## Evidence

- Surveyed illustratively (the paper is meta-level): persona-conditioned LLMs can predict behaviors
  like voting (Argyle et al. 2023), via [[sources/ong-2024]].

## Open Questions

- [[questions/llm-individual-or-population]]
- [[questions/yoking-science-to-proprietary-models]]
