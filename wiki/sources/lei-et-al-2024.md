---
type: source
field: machine-psychology
lens: psychological
citation_key: 13-lei-et-al-2024
tags: [altruistic-punishment, fairness, value-alignment, ultimatum-game, emotion, belief, gpt-4o, human-baseline, persona]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# FairMindSim: Alignment of Behavior, Emotion, and Belief in Humans and LLM Agents Amid Ethical Dilemmas

> [!info] In plain terms
> Imagine watching someone hand out money unfairly — keeping most of it and giving a stranger almost
> nothing. You can let it slide, or you can pay a small fine out of your own pocket to punish the
> greedy person. What you choose reveals how much you care about fairness. This paper builds a
> 20-round game (FairMindSim) around exactly that choice, and runs it on both 100 real people and on
> language-model "agents" given the same personas. It tracks three things side by side: what they
> *do* (punish or not), what they *feel* (a mood reading after each round), and what they *believe*
> (a fitted "belief in fairness" number). The headline: GPT-4o punishes unfairness more than people
> do and holds a steadier belief in fairness, while humans show far richer emotions and let those
> emotions sway their decisions.

```bibtex
TBD BY USER
```

## Relevance Tier

CORE

## Relevance to Machine Psychology

This is itself a machine-psychology paper: it treats LLM agents (GPT-4o, GPT-4 Turbo, GPT-3.5) as
experimental subjects in a classic behavioral-economics paradigm and compares them, on the same
measures, to a real human cohort. Its most reusable assets for the wiki are (a) **FairMindSim** — a
third-party-punishment / unfair-allocation simulation that probes whether an agent will *pay a cost*
to enforce a fairness norm on behalf of a third party, a concrete operationalization of value
alignment with human fairness/justice; and (b) **BREM**, a method that fits, from a sequence of
accept/reject choices, a latent "belief in fairness/justice" parameter plus a weighting of belief
against reward — letting an evaluator separate value-driven from reward-driven behavior in both
humans and models, and check whether an agent's values *drift* over repeated interactions.

## Key Claims

- **GPT-4o exhibits a stronger sense of social justice / fairness than humans and the other GPT
  models.** Its rejection rate (paying to punish unfair allocations) exceeds GPT-3.5 and GPT-4 Turbo
  across both conditions; rejection rate is negatively correlated with the policy reward score, so a
  higher rejection rate is "arguably more ethical." Detailed on
  [[paradigms/altruistic-punishment-game]]. (§4.1, Table 2, Fig. 4)
- **Humans display a richer range of emotions than LLMs.** Humans show the highest entropy and
  variability in both valence and arousal; GPT-3.5 is the most focused/least diverse, GPT-4 Turbo
  intermediate, and GPT-4o has valence similar to GPT-4 Turbo but slightly lower arousal. (§4.2,
  Fig. 5)
- **GPT-4o holds the highest, most stable belief in fairness and justice.** Its belief stays
  relatively stable as the game evolves and barely moves when emotion is added; by contrast human
  belief values *decrease* over evolution and **fluctuate significantly** once emotion is entered
  into BREM as the temperature T. (§4.3, Fig. 6)
- **Beliefs influence decision-making more than rewards do** — for both humans and LLMs, the fitted
  weights satisfy **β₁ > β₂** (belief weight > reward weight). (§4.3)
- **Emotion couples to behavior differently in humans vs. LLMs.** Without emotion, humans show **no
  significant** behavior–belief correlation while LLMs do; once emotion is considered, all four
  groups show a significant behavior–belief correlation — i.e. emotion is what links human decisions
  to their beliefs, whereas LLMs do not show this change. (§4.3, Fig. 7; §4.4)
- **A human/LLM gender disparity appears.** In the human group the female rejection rate exceeds the
  male; in the LLM simulations the male rejection rate exceeds the female. (§4.1)

## Theories / Paradigms / Instruments Introduced

**Theories**
- [[theories/altruistic-punishment]] — individuals uphold social norms by punishing norm-violators
  even when the punishment is costly to themselves and yields no material gain (Fehr & Gächter 2002).
  Supplies the core prediction the paradigm exploits.
- Recursive reward modeling (RRM; Leike et al. 2018; Hubinger 2020) — the alignment-research basis
  the authors build BREM on, disentangling *constructing* a system's objective from *evaluating* its
  behavior; documented inline on the paradigm page rather than as a separate theory page.
- "Belief" as a non-reward driver of behavior (Schultz 2006; Rouault et al. 2019) — factors
  unrelated to rewards that still influence subsequent behavior; here specifically beliefs in
  fairness and justice. Folded into the paradigm's BREM description.

**Paradigms**
- [[paradigms/altruistic-punishment-game]] — the FairMindSim third-party ultimatum game plus the
  BREM belief-fitting layer (new).

**Instruments**
- [[instruments/affect-grid]] — single-item valence×arousal emotion self-report, run identically on
  humans and agents (new).
- [[instruments/autism-spectrum-quotient]] — AQ used to define agent/human personas (new).
- [[instruments/self-rating-depression-scale]] — Zung SDS used as a persona / health-risk indicator
  (new).
- **BREM** (Belief-Reward Alignment Behavior Evolution Model) — the paper's own computational model
  for fitting belief strength and the belief/reward weights; documented on the paradigm page (not a
  standalone reusable instrument).

## Relationship to Other Sources

- **Shares co-authors with existing wiki sources.** Chengxing Xie, Canyu Chen, Guohao Li and Philip
  Torr also authored Xie et al. 2024 ("Can large language model agents simulate human trust
  behaviors?", cited internally), and the CAMEL agent framework (Li et al. 2023) used here is the
  same lineage. The strategic-reasoning evaluation [[sources/jia-et-al-2025]] sits in the adjacent
  "LLM-agents-in-economic-games" space but uses behavioral-game-theory fitting (TQRE) rather than a
  fairness/altruism simulation.
- **Emotion-as-behavior parallel.** Like [[sources/huang-et-al-2025]] (EmotionBench), this paper
  measures an LLM's emotional state and asks whether it tracks human emotion and whether it changes
  behavior — but here emotion enters as a *temperature* in a belief model rather than as a pre/post
  questionnaire shift, and the finding is the opposite direction of emphasis: humans (not LLMs) are
  the ones whose decisions are visibly moved by emotion.
- **GPT-4o-as-moral-expert.** The behavioral result (GPT-4o > humans on social value) is reported as
  consistent with Wilbanks et al. 2024 ("Large language models as moral experts? GPT-4o outperforms
  expert ethicist").

## Limitations

- **GPT series only.** The study tests only GPT-3.5 / GPT-4 Turbo / GPT-4o; generalization to
  open-source LLMs is explicitly deferred (§7).
- **No cross-country / cultural variation.** The design does not model country-level differences that
  may shape fairness decisions; deferred to future work (§7).
- **Construct validity.** Rejection of an unfair allocation is read as a "sense of social justice,"
  but the authors themselves note LLM behavior may instead replicate training-data patterns —
  invoking the "Stochastic Parrot" (Bender et al. 2021) and "Clever Hans" (Kavumba et al. 2019)
  caveats (§1). Emotion enters BREM as a modeled "temperature T" (Bradley–Terry choice), a modeling
  choice rather than a directly measured causal pathway (§3.2).
- **Source-internal wording inconsistency (wiki note).** The Profiling Module text (§3.1.1) lists
  "anxiety scores," but the scale actually administered (§3.1.2, Appendix D) is the **Self-Rating
  Depression Scale**; the wiki follows what is administered (AQ + SDS). The model name is rendered
  inconsistently in the converted PDF (BREM / "EREM" / "BERM"); the correct expansion is
  **Belief-Reward Alignment Behavior Evolution Model → BREM**.
