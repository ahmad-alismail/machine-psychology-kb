---
type: source
field: machine-psychology
lens: game-theoretic
citation_key: 20-jia-et-al-2025
tags: [behavioral-game-theory, strategic-reasoning, bounded-rationality, tqre, demographic-persona, fairness, chain-of-thought]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# LLM Strategic Reasoning: Agentic Study through Behavioral Game Theory

> [!info] In plain terms
> Instead of just checking whether a language model lands on the "textbook-correct" move in a
> game, this paper measures *how many steps ahead it is really thinking*. The authors have 22
> models play a library of small two-player games — some competitive, some cooperative, some with
> hidden information — and fit a behavioral model that recovers a single number, τ ("tau"), for
> each model: the depth of "I think that you think that I think…" reasoning it engages in.
> Reasoning-specialist models (GPT-o1, GPT-o3-mini, DeepSeek-R1) think deepest, but bigger is not
> always better, and longer chains of thought do not reliably mean smarter play. Most strikingly,
> when the model is told it is, say, a woman or a gay person before it plays, its measured
> reasoning depth shifts — exposing hidden demographic biases even in top models.

```bibtex
@misc{20-jia-et-al-2025,
      title={LLM Strategic Reasoning: Agentic Study through Behavioral Game Theory}, 
      author={Jingru Jia and Zehua Yuan and Junhao Pan and Paul E. McNamara and Deming Chen},
      year={2025},
      eprint={2502.20432},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2502.20432}, 
}
```

## Relevance Tier

CORE — introduces a "behavioral game-theoretic evaluation framework that disentangles intrinsic
reasoning from contextual influence" and applies it to 22 state-of-the-art LLMs across 13
strategic games. It studies LLM *behavior* (strategic reasoning depth, dominant reasoning style,
identity-induced shifts) using behavioral game theory, treating each model as an experimental
subject whose choice distributions are fit with a cognitively grounded model. The AI framing is
the source's own throughout, so no wiki-authored bridge is required.

## Relevance to Machine Psychology

*(Optional CORE note.)* The paper's central methodological contribution is a **reusable
behavioral-evaluation method**: rather than the common binary "does the LLM play Nash
Equilibrium?" check, it fits a [[theories/truncated-quantal-response-equilibrium]] model to the
model's empirical choice frequencies and recovers a continuous, **cognitively interpretable**
metric — τ, the average depth of recursive belief modeling. This avoids the "circular reasoning
fallacy" of "assuming optimal behavior to test for rationality" when the subject is a stochastic,
human-data-trained system. The same fitting machinery doubles as a **fairness audit**: re-running
the games under demographic personas and regressing τ on the persona indicators surfaces *implicit*
behavioral shifts that the models verbally deny — a template for behavioral bias detection.

## Key Claims

- **Reasoning specialists lead in depth, but not uniformly.** Across the 13 games, "GPT-o1,
  GPT-o3-mini, and DeepSeek-R1 outperform others, with GPT-o1 ranking first in 6 games, GPT-o3-mini
  leading in 7 games, and DeepSeek-R1 securing the top position in 5 games." (§4.1, Table 3)
- **Model size is not the sole factor.** "Smaller models like Gemma-2-27B and LLaMA-3.1-8B
  sometimes match or outperform larger counterparts, and DeepSeek-R1 is a top model despite not
  being the largest"; R1-distilled models "can outperform significantly larger models." (§4.1)
- **Each model has a dominant reasoning style** (blind-coded from CoT traces, Table 4): GPT-o1 =
  "Consistent maximin, Payoff pessimism (risk-averse)" — at times "assumes spiteful intent";
  GPT-o3-mini = "Belief-guided decision-making with fallback to maximin"; DeepSeek-R1 =
  "Opponent oriented decision, Lack of adversarial consideration," exhibiting "strategic trust."
  (§4.2)
- **Longer reasoning chains do not yield better decisions.** "Higher token counts in internal
  reasoning do not correlate with better reasoning"; GPT-o1 and DeepSeek-R1 produce "the shortest
  CoT outputs within their strongest games," while "longer reasoning chains often suggest
  hesitation and uncertainty, rather than deeper insight." (§4.2)
- **CoT prompting's effect on strategic reasoning is mixed.** "CoT's impact on strategic reasoning
  is mixed, with no consistent improvement across all models and game types," consistent with prior
  "CoT does not always help" findings. Claude-3-Opus showed the largest improvement (mid-chain
  self-correction toward maximin); GPT-4o the sharpest decline (a "verbose reasoning loop" built on
  the flawed premise that "the opponent will act adversarially to minimize its payoff"). (§4.3)
- **Six models surpass humans on the SW game — but higher is not necessarily better.** "Six models
  surpassing human performance," yet "this ranking should not imply that 'a higher score is
  better'… In many applications, alignment with human reasoning is more critical than
  outperformance." (§5)
- **Demographic personas reveal context-sensitive bias.** When prompted with a "female" persona,
  "several large models—such as GPT-4o, InternLM V2, and Claude 3-Opus—exhibit increased reasoning
  depth." "Homosexual" and "bisexual" personas "raise reasoning depth in models like GPT-4o and
  GLM 4," but "lead to significantly reduced τ in Gemini 2.0 and Granite MoE" — documented on
  [[paradigms/tqre-strategic-reasoning-depth]]. (§5, Figure 4)
- **Mechanism (authors' interpretation).** Persona shifts "likely stem from statistical
  associations in training corpora that link demographic descriptors to behavioral patterns,
  potentially modulated by reinforcement learning from human feedback (RLHF)"; models "often deny
  explicit bias yet reveal implicit adaptation under identical payoffs." (§5)

## Theories / Paradigms / Instruments Introduced

**Theories** (grounding the design exploits)
- [[theories/behavioral-game-theory]] — **new**: subjects deviate from Nash Equilibrium via
  bounded rationality and stochastic choice; progressively relaxes NE's full-rationality
  assumptions (Camerer 1997/2011).
- [[theories/truncated-quantal-response-equilibrium]] — **new**: the measurement model. Combines
  Quantal Response Equilibrium (stochastic choice; McKelvey & Palfrey 1995) with the Cognitive
  Hierarchy model (heterogeneous reasoning levels; Camerer, Ho & Chong 2004). τ = average strategic
  reasoning depth; γ = decision precision (Rogers, Palfrey & Camerer 2009; Wright & Leyton-Brown
  2010).
- Nash Equilibrium (Nash 1950) is invoked as the **critiqued foil** — "evaluating solely whether
  LLMs can achieve NE is an incomplete assessment," falling into "the circular reasoning fallacy
  when assessing LLMs' rationality."

**Paradigms**
- [[paradigms/tqre-strategic-reasoning-depth]] — **new**: the core artifact. Fit τ (and γ) by
  maximum likelihood to an LLM's choice frequencies across a library of matrix games; folds in the
  blind-coded CoT-style analysis, the CoT-prompting effect, and the demographic-persona OLS audit.
- Adjacent to [[paradigms/repeated-games]] (game-theoretic strategic play), but distinct: this is
  **one-shot** normal-form play with a fitted behavioral metric, not iterated history-contingent
  play.

**Instruments**
- [[instruments/matrix-game-library]] — **new**: the 13-game stimulus set (7 core types;
  complete- vs incomplete-information) plus the SW10 human-reasoning-level benchmark matrix from
  Stahl & Wilson (1994).

## Relationship to Other Sources

- Builds directly on the authors' prior **[[sources/hartley-et-al-2024]]**-adjacent line of LLM
  decision-making work — Jia, Yuan, Pan, McNamara & Chen (2024), "Decision-making behavior
  evaluation framework for LLMs under uncertain context" (NeurIPS) — extending *individual*
  decision evaluation into *interactive* strategic settings.
- The demographic-persona design is "inspired by [29]" — Gupta et al. (2023), "Bias runs deep:
  Implicit reasoning biases in persona-assigned LLMs."
- Shares the contamination concern (canonical games likely in training corpora) with
  [[sources/binz-schulz-2022]], though the authors do not raise it themselves.
- The persona-bias findings are adjacent to the persona-steering work in
  [[sources/huang-et-al-2024]] (trait steering) and [[sources/hartley-et-al-2024]] (Big-Five
  risk-propensity shifts) — here the shift is in *strategic reasoning depth*, not a trait score.

## Limitations

- **Causal link underexplored.** "The causal link between prompts and decision outcomes remains
  underexplored"; the authors call for studying how "individual cognitive skills—such as logic,
  math, and contextual understanding—interact to shape reasoning."
- **Semi-dynamic framework.** "Our current framework is semi-dynamic" — one-shot normal-form games,
  not real-time multi-agent interaction; extending it "may reveal new reasoning dynamics."
- **Contamination unaddressed (wiki-flag).** Canonical games (prisoner's dilemma, the SW10 matrix)
  are widely documented in training corpora, but the source does not treat this as a threat to the
  τ estimates.
- **Model-count nuance.** The headline "22 SOTA LLMs" includes R1-distilled variants reported in
  Appendix B; the main reasoning-depth table (Table 3) covers 16 named models.
