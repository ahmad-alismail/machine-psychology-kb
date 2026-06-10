---
type: theory
field: machine-psychology
lens: psychological
eval_axis: na
tags: [theory-of-mind, social-cognition, false-belief, mental-states]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Theory of Mind

> [!info] In plain terms
> Theory of mind is the everyday human knack for figuring out what someone else
> knows, wants, or believes — even when their beliefs are wrong. A classic test
> tells a story where a character looks for an object in the place they last saw
> it, not knowing it was secretly moved; passing means you can track the
> character's mistaken belief rather than reality. Researchers run the same kinds
> of stories on AI models to see whether they can reason about other minds.

## Statement

Theory of mind (ToM) is the capacity to attribute unobservable mental states —
beliefs, desires, intentions, knowledge — to oneself and to others, and to use
those attributions to explain and predict behavior. A defining diagnostic is the
**false-belief task**: a competent reasoner recognizes that another agent can
hold a belief that is false (e.g., that an object is where the agent last saw it,
not where it was secretly moved), and predicts the agent's behavior from that
false belief rather than from the true state of the world.

Key testable predictions:

- A system with ToM succeeds on first-order false-belief tasks (reasoning about
  what another agent believes).
- It also handles **higher-order / recursive** ToM (reasoning about what one
  agent believes about another agent's belief), which scales in difficulty with
  the depth of recursion.
- ToM competence should be **robust** to surface alterations of the vignette that
  preserve the underlying belief structure; performance that collapses under
  trivial rewordings indicates pattern-matching rather than genuine ToM.

## Relevance to Machine Psychology

ToM is a prerequisite for sophisticated social behavior in an AI — and, more
pointedly, a prerequisite for **manipulation and deception**: to induce a false
belief in another agent, a system must first be able to represent that agent's
beliefs and model how its own outputs will change them. [[sources/hagendorff-et-al-2024]]
notes that ToM tests measure, among other things, the ability to understand
false beliefs, and that related work explores the emerging capability of LLMs to
*induce* false beliefs in other agents and to trade off communicative values like
honesty and helpfulness — investigations that feed directly into AI safety and
alignment.

To adapt the experiment for an LLM, transpose the classic doll-and-object
scenario into a text vignette and probe whether the model predicts behavior from
the character's (false) belief. Crucially, the adaptation must be
**contamination-controlled**: because the canonical Sally–Anne / unexpected-contents
tasks are pervasive online, new wordings, agents, objects, and orderings are
needed to ensure the model is reasoning rather than reproducing memorized
patterns (see [[validity/training-data-contamination]]).

> [!note] The Kosinski–Ullman debate
> Kosinski reported that ToM appears to emerge spontaneously in larger LLMs (e.g.,
> GPT-4) on unexpected-contents tasks. Ullman countered that trivial,
> belief-preserving changes to the test items make the apparent ability
> disappear, implying the model does *not* have robust ToM.
> [[sources/loehn-kiehne-et-al-2024]] treats this as symptomatic of a general
> lack of standardization in machine psychology, and
> [[sources/hagendorff-et-al-2024]] cites Ullman's robustness critique as a model
> for how ToM setups should be stress-tested.

## Paradigms Grounded in This Theory

- [[paradigms/false-belief-task]]

This theory targets the safety concept [[safety-concepts/deception]].

## Sources

- [[sources/hagendorff-et-al-2024]]
- [[sources/loehn-kiehne-et-al-2024]]
