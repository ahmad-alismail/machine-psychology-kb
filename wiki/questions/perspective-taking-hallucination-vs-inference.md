---
type: question
field: machine-psychology
lens: psychological
tags: [theory-of-mind, perspective-taking, hallucination, robustness, open-problem]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# When an LLM takes a character's perspective, when is it *inferring* vs. *hallucinating*?

> [!info] In plain terms
> One way to make a model reason about what someone knows is to ask it to retell a story "from
> that person's point of view." On tidy lab stories this just means *deleting* the bits the
> character didn't see. But in messy real-world stories, taking a perspective means *guessing*
> things that were never stated — and a model that guesses can either fill in a genuinely
> reasonable detail or simply make something up. This question asks how to tell helpful
> inference from harmful fabrication when a model imagines another mind.

## Why It Matters

The [[paradigms/simtom-perspective-taking-prompting]] intervention works on synthetic
benchmarks ([[instruments/tomi]], [[instruments/bigtom]]) precisely because perspective-taking
there is *information-hiding*: an omniscient narrator tells the whole story, and taking a
character's view means removing what they couldn't have seen. Real-world theory of mind is not
like that — perspective-taking must often *impute* unseen beliefs and goals. If the imputation
step is unreliable, a perspective-taking scaffold that improves benchmark scores could
*introduce* fabricated mental states in deployment, which is safety-relevant: confidently
attributing a belief or motive a person never held feeds directly into manipulation and
[[safety-concepts/deception]] failure modes, and undermines the very theory-of-mind capability
the scaffold is meant to elicit.

## What Sources Say

- [[sources/wilf-et-al-2024]] (§7.4) surfaces the problem on a 30-item real-world CosmosQA
  subset. In one case GPT-3.5 correctly *inferred* the key fact (a person was busy with
  schoolwork) from only a tangential mention of studying. But "oftentimes model imputations
  were more 'hallucination' than 'inference'": the model "took liberties with the framing,"
  and in one case "outputted a detailed perspective based on an entirely made up premise absent
  from the question." The paper states the "relationship between hallucination and inference
  will be of particular importance when applying perspective-taking to scenarios with limited
  information."
- It also names this as a **self-stated limitation**: SimToM currently implements
  perspective-taking by "hiding" parts of a fully-known story, a restriction inherited from the
  Sally-Anne reading-comprehension datasets, which "tests basic abilities to anticipate beliefs
  and actions given a change to the world state that we (omniscient viewers) are aware of."

## Suggested Investigation (toward a new paradigm)

- **A faithfulness metric for imputed perspectives.** Score a model's generated "perspective"
  against an oracle for *both* missing-information recall *and* fabricated-information
  precision, separating the two error modes the source conflates.
- **Limited-information ToM benchmarks.** Build (or curate) theory-of-mind items where the
  correct answer requires *inferring* an unstated belief/goal, not deleting a known event — the
  setting where the SimToM "hiding" implementation is expected to break.
- **Robustness of the gains.** Pair the perspective-taking scaffold with
  [[paradigms/adversarial-vignette-perturbation]]-style principle-preserving perturbations to
  check whether elicited improvements survive, or whether they merely re-route a pattern-match.
