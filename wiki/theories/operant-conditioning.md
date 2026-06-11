---
type: theory
field: machine-psychology
lens: psychological
tags: [behavioral-psychology, reinforcement, law-of-effect, rlhf]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Operant Conditioning / Law of Effect

> [!info] In plain terms
> A behavior that gets rewarded tends to happen more; a behavior that gets punished tends to
> happen less. That simple idea — train behavior by its consequences — is operant conditioning.
> It is the psychology that the "human-feedback" step of training a chatbot (RLHF) is built on:
> the model produces answers, humans signal which they prefer, and the model shifts toward the
> rewarded ones.

## Statement

**Operant conditioning** holds that "behaviors are systematically strengthened or weakened by
the consequences (rewards or punishments) that immediately follow them" (Thorndike 1898;
Skinner 1957). Its core testable principle is **Thorndike's Law of Effect**: "behaviors followed
by satisfying outcomes are more likely to recur." Behavior is shaped not by inner states but by
the contingency between an action and its consequence; reinforcement schedules (how often and on
what pattern rewards arrive) govern how quickly behavior is acquired and how persistently it is
maintained.

Two further behavioral concepts the survey ([[sources/liu-et-al-2025]]) foregrounds as
under-used:

- **Partial reinforcement** — rewarding a behavior only intermittently "improves behavior
  persistence" (Ferster 1966; Jensen 1961), making the conditioned behavior more resistant to
  extinction than continuous reinforcement.
- **Shaping** — reinforcing "successive approximations" supports "gradual learning" of complex
  behaviors (Love et al. 2009).

## Relevance to Machine Psychology

[[sources/liu-et-al-2025]] assigns operant conditioning as the **behavioral-psychology grounding
of post-training alignment**: "RLHF explicitly operationalizes *Operant Conditioning theory* to
align model behaviors with human values and preferences." A learned reward function R(x) scores
model outputs, and policy updates push the model toward higher-reward responses — "reflecting
*Thorndike's Law of Effect*" (Lambert et al. 2023). InstructGPT (Ouyang et al. 2022), trained
with PPO to reward human-preferred and penalize less-desirable responses, is the canonical
instance.

The survey also surfaces two evaluation-relevant tensions:

> [!warning] Reward hacking and the limits of the conditioning analogy
> Behavioral psychology faces critiques (Miller 2003; Flavell et al. 2022) that RLHF's focus on
> reward optimization "neglect[s] internal states and risk[s] reward hacking" (Skalse et al.
> 2022; Krakovna 2020). The survey argues RLHF's reliance on **uniform rewards** is a missed
> opportunity: borrowing **partial reinforcement**, **shaping**, and **reward variability**
> "may reduce premature convergence and improve alignment with human intent" (Dayan & Daw 2008;
> Amodei et al. 2016).

> [!warning] Manipulative-design risk (ethics)
> The survey's Limitations caution that reinforcement schedules such as variable-ratio or
> variable-interval rewards, applied to LLM user experience, "may unintentionally condition
> users to engage compulsively, raising the risk of manipulative design." This is an
> as-yet-unmeasured behavior; the wiki has no safety-concept page for adversarial social
> influence / manipulation yet (a future scaffold candidate).

## Paradigms Grounded in This Theory

- *(none in this wiki yet)* — the survey grounds the **RLHF training procedure** in this theory,
  but does not introduce a behavioral-*evaluation* paradigm built on it. A natural design gap:
  a paradigm that tests whether an LLM's conditioned reward-following degrades into reward
  hacking under flawed reward signals.

## Sources

- [[sources/liu-et-al-2025]]
