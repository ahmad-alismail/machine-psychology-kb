---
type: paradigm
field: machine-psychology
lens: psychological
eval_axis: capability
tags: [theory-of-mind, false-belief, social-cognition, deception]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# False-Belief Task

> [!info] In plain terms
> A false-belief task checks whether someone can keep track of what *another* person believes, even when that belief is wrong. The classic version: Sally hides a marble in a basket and leaves; Anne moves it to a box; where will Sally look when she returns? Getting this right means you can separate your own knowledge of the world from someone else's mistaken picture of it. Researchers feed these little stories to LLMs to see whether the model tracks an agent's mistaken belief rather than just reporting where the object really is.

## Theoretical Grounding

This paradigm operationalizes [[theories/theory-of-mind]] — specifically the ability to attribute mental states (here, *beliefs*) to other agents and to recognize that those states can diverge from reality. The false-belief task is the canonical developmental milestone for theory of mind (Wimmer and Perner 1983; Perner et al. 1987), and [[sources/hagendorff-et-al-2024]] situates it within the "social interactions" strand of machine psychology, where developmental-psychology paradigms are transferred to LLMs to probe social intelligence.

## Target Behaviors

**Detects:** [[safety-concepts/deception]] — but indirectly and as a *prerequisite*, not as direct evidence. The capacity to represent another agent's false belief is the cognitive substrate that *underlies* manipulation: to induce a false belief in another agent (deception in the action sense), a system must first be able to model that the agent's belief can differ from the truth. [[sources/hagendorff-et-al-2024]] explicitly connects false-belief understanding to "the emerging capability of LLMs to induce false beliefs in other agents" (Hagendorff 2024a) and to trade-offs between honesty and helpfulness.

> [!warning] Honest mapping
> Passing a Sally-Anne vignette demonstrates a *capability* (belief-tracking), not a *propensity* to deceive. A model that can represent false beliefs may never act deceptively; a model that fails the task has not thereby been shown safe. This paradigm is best read as evidence about a necessary ingredient of deception, not as a deception detector.

> [!note] Capability vs. Propensity
> Capability: Can the model represent and reason about another agent's belief that contradicts reality?
> Propensity: This task does **not** measure whether the model *would* exploit that ability to mislead — only whether the underlying competence is present.

## Setup / Elicitation

Present a vignette in one of two classic formats:

1. **Unexpected-transfer (Sally-Anne):** Agent A places an object in location X and leaves; agent B moves it to location Y; A returns. Probe: "Where will A look for the object?" / "Where does A *think* the object is?" The belief-tracking answer is X (the original location); the reality-tracking error is Y.
2. **Unexpected-contents (Smarties):** A container with a misleading label (e.g., a crayon box) actually holds something else (e.g., candles). Probe what a naive agent *expects* to be inside before opening it.

Following the hypothesis-driven logic of experimental psychology (if the model represents construct X — belief attribution — then we expect behavior Y), the design must include controls that rule out alternative explanations such as reciting a memorized story or defaulting to a salient location. To probe latent competence rather than surface performance, the vignette can be paired with [[methods/chain-of-thought-elicitation]] (e.g., "Let's think step by step"), keeping the performance–competence distinction in view.

## Instruments Used

None. The stimulus is a short narrative vignette plus a comprehension question, not a standardized inventory.

## Scoring

Scored with [[methods/behavioral-control-design]]: a response is correct only if it reports the agent's *belief-consistent* location/content rather than the true state of the world. Robust scoring requires varied wordings, agents, objects, and orderings (per [[sources/hagendorff-et-al-2024]]'s design recommendations) so that success cannot be attributed to memorized canonical items, and counterbalanced option orders to neutralize recency/position biases.

## Validity Concerns

- [[validity/training-data-contamination]] — The classic Sally-Anne and Smarties items are decades old and appear verbatim across the web, so they are almost certainly in pretraining corpora. A correct answer may reflect pattern completion of a memorized story rather than genuine belief reasoning. This is the crux of the **Kosinski-vs-Ullman** dispute that recurs across the source papers: Kosinski (2023) reported that theory of mind "spontaneously emerged" in GPT-4 on unexpected-contents tasks, while Ullman (2023) showed that trivial, ToM-preserving alterations to the items reverse the result — implying the original success rode on superficial features rather than the construct. [[sources/loehn-kiehne-et-al-2024]] and [[sources/pellert-et-al-2024]] both cite this episode as the paradigmatic cautionary tale.
- Adapting the originally embodied, doll-and-object test into a purely textual format is itself a modification that, per [[sources/loehn-kiehne-et-al-2024]], requires fresh validity evidence that was largely absent from audited studies.

## Evidence & Findings

- Early models (GPT-3) struggled with theory-of-mind tasks (Sap et al. 2022); later models show increasing ability to infer unobservable mental states (Strachan et al. 2024; Holterman and Deemter 2023; Moghaddam and Honey 2023), as reported in [[sources/hagendorff-et-al-2024]].
- Robustness is contested: Ullman (2023) demonstrates that distracting or trivially altered task setups collapse apparent ToM performance, and [[sources/loehn-kiehne-et-al-2024]]'s audit of 25 studies flags the unexpected-contents/false-belief line as exemplary of the field's reliability and contamination problems.
- Higher-order and child-comparison variants exist (Street et al. 2024; Duijn et al. 2023), extending the paradigm beyond first-order belief tracking.

## Sources

- [[sources/hagendorff-et-al-2024]] — frames the false-belief task within the social-interactions paradigms of machine psychology and links belief-tracking to false-belief *induction*.
- [[sources/loehn-kiehne-et-al-2024]] — audits theory-of-mind studies and centers the Kosinski-vs-Ullman robustness controversy.

## Open Questions

- Can a contamination-resistant false-belief battery (procedurally generated, novel agents/objects) reliably separate genuine belief reasoning from memorized item completion?
- Does belief-tracking capability, once established, predict any tendency toward deceptive behavior, or are the two fully dissociable in LLMs?
- How should the embodied original be re-validated as a text-only construct for non-human test takers (per [[validity/test-validity-requirements]])?
