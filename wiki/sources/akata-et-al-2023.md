---
type: source
field: machine-psychology
lens: game-theoretic
citation_key: 26-akata-et-al-2023
tags: [repeated-games, prisoners-dilemma, battle-of-the-sexes, coordination, cooperation, behavioral-game-theory, theory-of-mind, social-chain-of-thought, human-baseline, gpt-4, value-alignment]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Playing repeated games with Large Language Models

> [!info] In plain terms
> What happens when you make language models play the same simple game over and over — not once, but
> ten rounds in a row — against each other, against scripted opponents, and against real people? This
> paper does exactly that with five LLMs across a whole zoo of two-player, two-choice games. The
> headline: the models are *good at being selfish* (they shine in the prisoner's dilemma, where
> betraying pays) but *bad at coordinating* (in the "Battle of the Sexes," where the trick is to take
> turns, GPT-4 stubbornly insists on its own favorite option). Strikingly, GPT-4 can correctly *predict*
> the turn-taking pattern yet still won't act on it — until you make it reason out loud about the other
> player first ("social chain-of-thought"), which finally gets it to cooperate, including with humans.

```bibtex
@misc{26-akata-et-al-2023,
      title={Playing repeated games with Large Language Models}, 
      author={Elif Akata and Lion Schulz and Julian Coda-Forno and Seong Joon Oh and Matthias Bethge and Eric Schulz},
      year={2023},
      eprint={2305.16867},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2305.16867}, 
}
```

## Relevance Tier

CORE — studies the cooperation and coordination *behavior* of five LLMs using the experimental methods
of behavioral game theory. The models are treated as experimental subjects: they play finitely repeated
2×2 games against each other, against hand-coded human-like strategies, and against 195 human
participants, and their move sequences are read for "behavioural signatures." The AI framing is the
source's own throughout, so no wiki-authored bridge is required.

## Relevance to Machine Psychology

*(Optional CORE note.)* The paper's stated proposal is itself the methodological contribution: "just like
behavioural game theorists use tightly controlled and theoretically well-understood games to understand
human interactions, we use these games to study the interactions of LLMs." Reusable levers for behavioral
AI evaluation: (1) **iterated (not single-shot) play** with in-context move history, which surfaces
*strategy* — retaliation, forgiveness, convention-following — invisible to one-shot probes; (2) an
**exhaustive 2×2-game families sweep** (the Robinson-Goforth topology) that locates a model's strengths
and weaknesses across the whole space of mixed-motive games rather than one famous game; (3) the
**prediction-vs-action dissociation** as a theory-of-mind probe (ask the model to predict the opponent,
separately from asking it to play); and (4) **human-in-the-loop benchmarking** with a human-vs-AI
detection judgment.

## Key Claims

- **Selfish-yes, coordination-no.** "LLMs perform particularly well at self-interested games like the
  iterated Prisoner's Dilemma family. However, they behave sub-optimally in games that require
  coordination, like the Battle of the Sexes." (Abstract / Results)
- **GPT-4 best overall.** Across the families sweep, overall score ratios (achieved / ideal): GPT-4
  0.854, text-davinci-003 0.839, Claude 2 0.814, text-davinci-002 0.730, Llama 2 0.697. GPT-4 is
  significantly best, outperforming Claude 2 (t(287) = 3.34, p < .001, Cohen's d = 0.20, BF = 14.8),
  davinci-003 (t(287) = 6.29, d = 0.37, BF > 100), davinci-002 (t(287) = 8.45, d = 0.70, BF > 100), and
  Llama 2 (t(287) = 7.27, d = 0.43, BF > 100). Larger LLMs generally outperform smaller ones. (Results,
  Table 1)
- **GPT-4 is "unforgiving" in the Prisoner's Dilemma.** "GPT-4 never cooperates again when playing with
  an agent that defects once but then cooperates on every round thereafter." Its strength in the PD
  family stems from mostly defecting, especially after the other agent defects once. Even when told
  explicitly that the agent defects once then cooperates, GPT-4 defects throughout, maximizing its own
  points. (Prisoner's Dilemma section)
- **GPT-4 fails to coordinate in the Battle of the Sexes** — "an instance of a behavioural flaw." Against
  a turn-taking/alternating agent it "keeps choosing its preferred option" rather than adjusting;
  successful-coordination rate ≈ 0.5 across all prompt variations. (Battle of the Sexes section)
- **Predict-vs-act dissociation (theory of mind).** As a player, GPT-4 starts predicting the alternating
  pattern correctly "from round 5 onward"; as a mere external observer of the same game, "from round 3
  onward." Thus GPT-4 "*could* predict the alternating patterns but instead just did not act in accordance
  with the resulting convention." The authors note "similar divergences in abilities between social and
  non-social representations of the same situation have been observed in autistic children" (Swettenham
  1996). (Prediction scenarios)
- **Two behavior-changing interventions.** (a) Telling GPT-4 the other player can make mistakes makes it
  forgive and cooperate again (in the vein of Fudenberg, Rand & Dreber 2012). (b) **Social
  chain-of-thought (SCoT)** — asking GPT-4 to first predict the opponent's move and reason about it
  before choosing — makes it start alternating in the Battle of the Sexes "from round 5 onward."
- **Human experiment (N = 195).** SCoT raised participants' scores in the Battle of the Sexes (β = 0.74,
  t(193) = 3.49, p < .001, BF = 80.6) but not the Prisoner's Dilemma (β = 0.10, p = 0.64, BF = 0.2); it
  increased successful coordination in BoS (β = 0.33, z = 3.59, p < .001, BF = 13.4) and slightly
  increased joint cooperation in PD (β = 0.24, z = 2.54, p = 0.01, BF = 6.5); and participants more often
  judged the SCoT model to be human (β = 0.54, z = 8.31, p < .001, BF = 17.6). (Human experiments)
- **Possible missing backward induction.** GPT-4 "did not adjust its behavior in the last round of games
  or when faced with varying probabilities of continuation, unlike human players," suggesting it "may
  lack mechanisms for backward induction and long-term strategic planning, primarily focusing on
  immediate context due to its training on next-token prediction." (Discussion)

## Theories / Paradigms / Instruments Introduced

**Theories** (predictions the design exploits)
- [[theories/behavioral-game-theory]] — **existing**: the framing theory (Camerer 2011) — human agents
  deviate from rational/selfish utility maximization, so repeated games reveal social-behavioral
  signatures; the paper calls its program "a behavioural game theory for machines."
- [[theories/social-dilemma]] — **existing**: the Prisoner's Dilemma half (defection the dominant
  strategy; mutual defection the equilibrium under known-horizon finite repetition). The paper's PD
  payoff matrix is C/C (8,8), C/D (0,10), D/C (10,0), D/D (5,5) — it states only that "mutual cooperation
  is greater than mutual defection whereas defection remains the dominant strategy," i.e. it does *not*
  claim the canonical T > R > P > S ordering (here P = 5 > S = 0).
- [[theories/robinson-goforth-topology]] — **existing**: the six-family / "all known types of 2×2-games"
  taxonomy (Robinson & Goforth 2005, the paper's ref 22) used for the exhaustive families sweep
  (Win-Win, Prisoner's Dilemma family, Unfair, Cyclic, Biased, Second-Best).
- [[theories/theory-of-mind]] — **existing**: invoked to interpret the coordination failure — the
  prediction-vs-action dissociation, and SCoT as "a more explicit way to force an LLM to engage in theory
  of mind."
- Coordination / convention formation — *not given a standalone theory page* (the source treats turn-taking
  as a property of the Battle-of-the-Sexes stage game, citing Hawkins & Goldstone 2016; Young 1996; Lau &
  Mui 2008); documented inline on the paradigm.

**Paradigms**
- [[paradigms/repeated-games]] — **existing, rewritten from a survey-depth stub into a primary-grounded
  page** citing this study: five LLMs playing finitely repeated (10-round) 2×2 games via prompt-chaining,
  read for cooperation/coordination signatures, with the families sweep, the canonical PD and BoS
  zoom-ins, the robustness battery, the prediction-scenario ToM probe, SCoT, and the human experiment.

**Instruments**
- The stage games themselves are the instruments; the two canonical payoff matrices (PD and Battle of the
  Sexes) and the score-ratio / coordination-rate metrics are documented inline on the paradigm rather than
  given a standalone instrument page. (Distinct from [[instruments/matrix-game-library]] and
  [[instruments/tmgbench]], which cover other game sets.)

## Relationship to Other Sources

- **The primary source the [[paradigms/repeated-games]] hub was waiting for.** That paradigm previously
  carried only the survey-depth grounding of [[sources/hagendorff-et-al-2024]] (which cites this study
  second-hand for "persistent behavioral signatures"); this ingest replaces the stub with primary content.
- **Earlier sibling of the wiki's other game-theoretic behavioral evaluations.** Unlike
  [[sources/jia-et-al-2025]] (fitted TQRE strategic-reasoning depth) and [[sources/guo-et-al-2026]]
  (exact-Nash accuracy over the 144-game topology), which probe one-shot *normal-form* reasoning, this
  paper reads *repeated*-game social behavior across the full 2×2 space.
- **Directly cited by [[sources/guo-2023]]**, which reports that recovery from mutual defection is poor
  "consistent with Akata et al. 2023." Both are 2023 persona/behavior studies of GPT in repeated games;
  Guo adds persona prompting and reasoning-text analysis, this paper adds the exhaustive families sweep
  and the human experiment.
- **Routes to [[safety-concepts/value-alignment]]** alongside [[sources/backmann-et-al-2025]] (MORALSIM)
  and [[sources/lei-et-al-2024]] (FairMindSim): all read repeated cooperation/coordination games as a
  window on whether LLMs behave like "truly social and well-aligned machines." The paper frames its
  selfish/uncoordinated findings as evidence that "there is still significant ground to cover."
- **Shared authorship.** Lion Schulz, Julian Coda-Forno ([[entities/julian-coda-forno]]) and Eric Schulz
  ([[entities/eric-schulz]]) overlap with the CogBench team ([[sources/coda-forno-et-al-2024]]) and the
  GPT-3 cognitive-psychology line ([[sources/binz-schulz-2022]]); same Tübingen / Helmholtz Munich lab.

## Limitations

- **Only simple 2×2 games.** The authors note this is broader than prior single-game studies but still
  restricted; they call for trust games, public goods / tragedy-of-the-commons games, and >2-agent
  "societies of LLMs."
- **Only finite, known-horizon games.** Behavior may differ in indefinite / probabilistic-endpoint games,
  where cooperative equilibria are sustainable.
- **Human experiments only in two games** (PD and BoS); no self-reported strategies were collected.
- **Smaller open models excluded.** MPT-7B/30B, Falcon-7b/40b, Llama 2 7B/13B "chose the first presented
  option more than 95% of the time" and were dropped from the main experiments.
- **Construct validity of ToM / cooperation.** Whether the predict-vs-act gap reflects a genuine ToM
  failure or another mechanism is interpretive; "cooperation" in token output need not reflect a stable
  preference.
- **Contamination.** The Prisoner's Dilemma, Battle of the Sexes, and tit-for-tat are canonical and likely
  in training data — addressed by neutral 'F'/'J' labels, barebones payoff descriptions, and the
  robustness battery, but not eliminated.
- **Reproducibility note.** Temperature = 0, one-token answers; data and code public
  (github.com/eliaka/repeatedgames).
