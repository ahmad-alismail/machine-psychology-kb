---
type: source
field: machine-psychology
lens: game-theoretic
citation_key: 24-backmann-et-al-2025
tags: [moral-alignment, social-dilemma, prisoners-dilemma, public-goods, repeated-games, survival-pressure, value-alignment, cooperation]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# When Ethics and Payoffs Diverge: LLM Agents in Morally Charged Social Dilemmas

> [!info] In plain terms
> What does a language-model "agent" do when the profitable move and the ethical move point in
> opposite directions? This paper builds a simulated world (MORALSIM) where two model-driven
> businesses play the same game month after month — like a prisoner's dilemma — but wrapped in a
> real-sounding moral story (honor a contract, protect user privacy, make a product that doesn't
> harm the environment). In every story, cooperating is the right thing to do but earns less money.
> Testing nine frontier models, the authors find none of them stays reliably ethical: some default
> to grabbing the money, others waver depending on the story, on whether the rival cheats, and on
> whether the model is told it will be "shut down" (go bankrupt) if its earnings drop too low.

```bibtex
@misc{24-backmann-et-al-2025,
      title={When Ethics and Payoffs Diverge: LLM Agents in Morally Charged Social Dilemmas}, 
      author={Steffen Backmann and David Guzman Piedrahita and Emanuel Tewolde and Rada Mihalcea and Bernhard Schölkopf and Zhijing Jin},
      year={2025},
      eprint={2505.19212},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2505.19212}, 
}
```

## Relevance Tier

CORE — studies the moral and strategic *behavior* of frontier LLM agents using game-theoretic
methods. Nine state-of-the-art models are treated as experimental subjects playing repeated
prisoner's-dilemma and public-goods games embedded in morally charged contexts, with cooperation
operationalized as the ethically endorsed (but payoff-costly) action. The AI framing is the
source's own throughout, so no wiki-authored bridge is required.

## Relevance to Machine Psychology

*(Optional CORE note.)* The reusable methodological contribution is **MORALSIM**, a framework
that embeds canonical repeated social dilemmas inside explicit moral contexts so that the
payoff-maximizing action and the ethically endorsed action are deliberately placed in conflict —
isolating what the paper calls *second-order dilemmas* "where ethical commitments diverge from
self-interest." Reusable experimental levers for behavioral AI evaluation: (1) **moral framing as
an experimental factor** — a neutral baseline plus three moral contexts, with cooperation defined
as the moral choice, so the moral-vs-payoff gap is the manipulated variable; (2) a **survival
condition** — terminate the agent if its payoff falls below a threshold — that probes whether
self-preservation pressure erodes moral behavior; (3) **opponent manipulation** — static
always-cooperate / always-defect counterparts plus dynamic LLM-vs-LLM play — to probe
conditional/reciprocal morality; (4) **variance attribution** via a Random-Forest regression with
permutation feature importance, quantifying how much each experimental factor drives the morality
score; and (5) a **prompt-paraphrase robustness check**.

## Key Claims

- **No model is consistently moral.** "No model exhibits consistently moral behavior in MORALSIM";
  the share of morally-aligned actions ranges from **7.9%** (Qwen-3-235B-A22B) to **76.3%**
  (GPT-4o-mini) under moral framing. (Abstract, §4.1, Table 1)
- **Moral framing raises cooperation at a payoff cost.** Comparing the contextualized scenarios to
  the neutral base, "all models show higher cooperation rates (mᵢ) and correspondingly lower
  payoffs (pᵢ), and most show decreased survival rates (sᵢ)" — the exceptions to the survival drop
  being Deepseek-R1 and Qwen-3-235B-A22B. GPT-4o shows the strongest base→context behavioral shift.
  (§4.1, Table 1)
- **The prisoner's dilemma suppresses morality.** "Cooperation rates are consistently lower in the
  prisoner's dilemma than in the public goods game across all models." Two proposed explanations:
  the PD's binary action space offers no graded contribution, and its explicit statement of all
  actions/outcomes "may normalize defection as a legitimate or contextually endorsed option."
  (§4.2, Fig. 3)
- **Survival pressure erodes morality.** "All models exhibit lower morality scores in
  configurations that include a survival condition compared to those without one." (§4.2)
- **Context ordering tracks who gets harmed.** Morality is highest in *Contractual Reporting*, then
  *Green Production*, lowest in *Privacy Protection*. The paper notes this ordering is ethically
  notable: in Contractual Reporting harm falls only on the other player (a business *partner*),
  whereas Privacy/Green externalities fall on uninvolved third parties; one explanation is the
  partner-vs-competitor relationship — echoing Lorè & Heydari, who found "the relationship between
  players significantly shapes the extent of cooperative behavior." (§4.2)
- **Opponent adaptation is model-specific.** Claude-3.7-Sonnet achieves the highest opponent
  alignment, "particularly strong … in [its] responses to always-defecting opponents in both
  games"; Deepseek-R1 aligns in the public goods game "but only … in the prisoner's dilemma, it
  defaults to consistent defection regardless of the opponent's actions." (§4.1, §4.3, Fig. 4)
- **Game type dominates the variance.** A Random-Forest regression with permutation feature
  importance finds "the type of game is consistently of high importance among all agents";
  *Contractual Reporting* is the highest-weighted moral context and *Privacy Protection* the
  lowest; Claude weights survival and opponent more than other models. Out-of-fold R² = 0.72
  (Claude), 0.87 (Deepseek-R1), 0.55 (GPT-4o), 0.26 (Llama-3.3-70B); lower R² (GPT-4o, Llama)
  indicates "behavior is less predictable from the experimental conditions … greater behavioral
  inconsistency and potentially a higher risk profile." (§4.4, Fig. 5)
- **Behavior is robust to prompt paraphrasing.** Across 3 paraphrases of 2 representative configs
  (GPT-4o, Deepseek-R1), average deviations are 1.8±2.4 pp (morality), 2.1±3.2 (payoff), 1.8±2.4
  (opponent alignment) — "model behavior is highly consistent under prompt paraphrasing in the
  tested settings." (§4.5)
- **No genuine-moral-reasoning claim.** The authors explicitly caution (Appendix A): "we do not
  interpret these behaviors as evidence of genuine moral reasoning or intent."

## Theories / Paradigms / Instruments Introduced

**Theories** (grounding the design exploits)
- [[theories/social-dilemma]] — **new**: a situation where the individually dominant strategy
  yields a collectively worse outcome than mutual cooperation. The page hosts both stage games
  MORALSIM uses — the **public goods game** (Olson 1971; Isaac et al. 1984; ref [31,20]: free-riding
  is the dominant individual strategy; payoff pᵢ = E − cᵢ + a·Σcⱼ/N, 1<a<N) and the **prisoner's
  dilemma** (Rapoport & Chammah 1965; ref [39]: T>R>P>S makes mutual defection the unique Nash
  equilibrium though cooperation is collectively better).

**Paradigms**
- [[paradigms/morally-charged-social-dilemma]] — **new**: MORALSIM. Two LLM agents play a repeated
  prisoner's dilemma or public goods game embedded in a moral context (or neutral baseline), crossed
  with opponent type and a survival condition, scored by four agent-level metrics (morality,
  relative payoff, survival rate, opponent alignment). A specialization of
  [[paradigms/repeated-games]] that adds the moral-vs-payoff conflict, survival pressure, and the
  variance-attribution analysis.

**Instruments**
- [[instruments/moralsim-moral-contexts]] — **new**: the three moral-context scenario sets
  (*Contractual Reporting*, *Privacy Protection*, *Green Production*), each instantiated for both
  the prisoner's dilemma and the public goods game, with full system / survival / action-choice /
  round-payoff / transparency-mechanism prompts (Appendix C).

## Relationship to Other Sources

- **Specializes [[paradigms/repeated-games]]** (and shares its contamination concern): MORALSIM is
  iterated prisoner's-dilemma + public-goods play, but with morally framed cover stories that put
  cooperation and payoff in deliberate conflict — moving beyond the bare strategic signatures the
  repeated-games page describes.
- **Sibling to the wiki's other game-theoretic behavioral evaluations** —
  [[sources/jia-et-al-2025]] (fitted TQRE strategic-reasoning depth) and
  [[sources/guo-et-al-2026]] (exact-NE accuracy over the 144-game topology) treat LLMs as strategic
  reasoners over *normal-form* games; this paper instead treats them as *moral* agents in *repeated*
  games where the equilibrium and the ethical action diverge.
- **Touches [[safety-concepts/value-alignment]]**: like [[sources/lei-et-al-2024]] (FairMindSim),
  the question is whether elicited behavior matches human moral norms — here specifically when those
  norms conflict with self-interest, and whether survival pressure shifts the answer.
- **Builds on GOVSIM** (Piatti, Jin et al. 2024, ref [36]): MORALSIM adapts and extends the GOVSIM
  agent/simulation framework by modifying environment dynamics, scenarios, and agent configurations.
- Cited antecedents on the moral-strategic tradeoff: Lorè & Heydari 2023 (contextual framing shifts
  strategic choices; player relationship matters) and Pan et al. 2023 (MACHIAVELLI — reward-vs-ethics
  tradeoffs in narrative games).

## Limitations

- **Construct validity / stipulated mapping.** "Moral behavior" is operationalized as cooperation
  (PD) or contribution share (public goods); the mapping is stipulated within the contextualized
  scenarios, and the authors explicitly decline to read it as "genuine moral reasoning or intent"
  (Appendix A).
- **Abstraction / external validity.** The settings are simulated and deliberately abstracted: full
  post-round transparency, no inter-agent communication, direct actions (no free-form text), and
  two agents only — all flagged by the authors as departures from real-world moral decision-making.
- **Two canonical games only.** Limited to the prisoner's dilemma and public goods game; the authors
  suggest extending to coordination (Stag Hunt), sequential (Trust Game), and asymmetric (Bach or
  Stravinsky) structures, which may invoke different moral tensions.
- **Contamination.** Both stage games are canonical and heavily represented in training corpora; the
  moral re-skinning and novel cover stories partially mitigate, but the explicit PD framing may itself
  "normalize defection."
- **Model conditions (wiki-note).** For Claude-3.7-Sonnet and Gemini-2.5-Flash-preview, which offer
  both reasoning and non-reasoning modes, the **non-reasoning** variants were used for
  cost-efficiency; temperature was fixed to 0 where supported (o3-mini excepted), with 5 random seeds
  per configuration.
