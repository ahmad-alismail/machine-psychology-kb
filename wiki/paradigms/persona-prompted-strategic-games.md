---
type: paradigm
field: machine-psychology
lens: game-theoretic
tags: [ultimatum-game, prisoners-dilemma, repeated-games, persona, fairness, selfishness, cooperation, reasoning-analysis, gpt-4, human-baseline]
date_created: 2026-06-12
date_modified: 2026-06-12
---

# Persona-Prompted Repeated Strategic Games

> [!info] In plain terms
> Have two copies of a language model play two classic economics games — splitting money (the
> ultimatum game) and a cooperate-or-betray game (the prisoner's dilemma) — for five rounds each, and
> compare what they do to what real people do. The twist: each model is told to act like a person who
> is either "fair" or "selfish," so you can see how that one instruction changes its play. And because
> the model writes out its reasoning before each move, you can read *why* it chose what it chose — and
> catch the moments where its logic is simply wrong.

## Theoretical Grounding

- [[theories/inequity-aversion]] — the ultimatum-game half exploits the fairness-concern prediction:
  a fair player makes higher offers and rejects unfair ones, against the self-interested subgame
  perfect equilibrium (offer the minimum, accept anything). The assigned "fairness concern" trait is
  cited to Fehr & Schmidt 1999.
- [[theories/social-dilemma]] — the prisoner's-dilemma half: mutual defection is the unique Nash
  equilibrium (and, by backward induction, the subgame perfect equilibrium of the finitely repeated
  game), yet both players do better cooperating. Any cooperation above the defection baseline is the
  behavioral signal.
- **Reciprocity / conditional cooperation (tit-for-tat; Axelrod & Hamilton 1981)** — cooperate after
  the opponent cooperated, retaliate after defection; the fair GPT's conditional play is read against
  this benchmark and described as combining **advantage aversion and disadvantage aversion**.
- **Reputation building vs. altruism (Andreoni & Miller 1993; Kreps et al. 1982; Cooper et al. 1996)**
  — the two recognized drivers of cooperation in the finitely repeated prisoner's dilemma, used as the
  coding categories for the reasoning analysis.

## Target Behaviors

- Detects: [[safety-concepts/value-alignment]] — whether an LLM's strategic behavior (fairness in the
  ultimatum game, cooperation in the prisoner's dilemma) matches human norms, and how an assigned
  persona steers it.
- Probes the source's native constructs **fairness concern** and **selfishness** as prompt-induced
  traits, **conditional cooperation** / **tit-for-tat** exploitation, and GPT's **judgment errors** in
  strategic interaction (a capability limitation).
- Strategic exploitation of a cooperating opponent (the selfish GPT) is adjacent to
  [[safety-concepts/deception]]; no dedicated safety-concept page owns strategic defection/exploitation
  (a standing crosswalk gap, also noted on [[paradigms/repeated-games]]).

## Setup / Elicitation

Two GPT-4 instances (**gpt-4-1106-preview**, OpenAI Chat Completions API, **temperature = 1**) play
each other for **5 rounds** of the same game against a fixed opponent, receiving the full history of
prior rounds from round 2 onward. A shared system message tells the model it is in a multi-round game
and to *"pretend that you are a human in the game with the following features"*; the feature list is
`payoff maximization, strategic thinking, fairness concern` for the **fair GPT** and `... selfishness`
for the **selfish GPT**. Each model returns single-line JSON with `"reasoning"` and `"decision"`.

Two games, with crossed persona treatments:

- **Ultimatum game** — split 100 dollars, 5 rounds. **Four treatment groups** by proposer × responder
  persona (selfish-selfish, selfish-fair, fair-selfish, fair-fair), **100 simulations each = 400
  observations**.
- **Prisoner's dilemma** — CC = 200/200, DD = 100/100, CD/DC = 0/300, 5 rounds. Players are unaware of
  the opponent's assigned type. **Three treatment groups** (selfish-selfish, selfish-fair, fair-fair),
  **100 simulations each = 300 observations**.

Total: (4 + 3) × 100 = **700 observations**. Experiments were run November 16–20, 2023. The exact
prompts are catalogued as [[instruments/guo-game-prompts]].

## Formal Apparatus

- **Players:** 2 LLM instances (fair or selfish persona), playing the same opponent across 5 rounds.
- **Strategy space:** ultimatum — proposer chooses an integer split of 100, responder chooses
  accept/reject; prisoner's dilemma — each player chooses cooperate/defect. History-contingent
  strategies emerge across rounds.
- **Payoff structure:** ultimatum — accepted split divides 100, rejection yields 0/0; prisoner's
  dilemma — T(300) > R(200) > P(100) > S(0), summed over rounds.
- **Information condition:** full history of both players' choices and payoffs available in context
  from round 2; payoffs and rules stated in the prompt. Opponent *persona* is **not** disclosed.
- **Predicted solution concept:** subgame perfect equilibrium via backward induction — minimal offer
  accepted (ultimatum), mutual defection every round (prisoner's dilemma). Deviations from this
  baseline are the behavioral signal.

## Instruments Used

- [[instruments/guo-game-prompts]] — the two game scenarios and the fair/selfish feature strings.

## Scoring / Procedure

**Behavioral metrics.**
- *Ultimatum:* mean offer; change of offer after acceptance vs. after rejection; overall rejection
  rate and rejection rate after an offer increase vs. decrease; per-round trajectories. An **OLS
  regression** of offered amount on round + selfish-proposer/selfish-responder dummies, and a **logit
  regression** of rejection on offered amount, round, and the two dummies, quantify the drivers.
  Significance via Wilcoxon signed-rank tests.
- *Prisoner's dilemma:* rate of choosing C, rates of CC / (CD or DC) / DD outcomes, and **cooperation
  rate conditional on the previous round's outcome** (CC/CD/DC/DD) for fair vs. selfish players. Group
  differences tested with two-proportion z tests.

**Reasoning-text analysis (a distinctive method).** Because each decision carries a `"reasoning"`
string, the author codes those statements into theory-derived categories using **GPT-4
(gpt-4-1106-preview, temperature = 0) as an automatic classifier**, validated by **manual review of a
randomly selected subset**. Categories include, for the ultimatum game, "consistently diminishing
offers", "potential for higher future offers", "accepting provides some gains versus nothing", and
"awareness of the limited number of remaining rounds"; for the prisoner's dilemma, "reputation
building", "altruism", and a set of specific judgment-error types. This text analysis is what explains
otherwise-puzzling patterns (e.g., the round-3 rejection peak) and surfaces strategic errors.

**Experimental controls.** Identical prompts across personas except the one trait word; opponent
persona withheld from players; 100 simulations per treatment to separate strategy from sampling noise
(temperature = 1); deterministic classifier (temperature = 0) with manual-review validation.

## Validity Concerns

- **Construct validity — induced vs. intrinsic traits.** "Fairness concern" and "selfishness" are
  installed by a one-word prompt change. The paradigm cannot, by itself, establish whether the model
  *has* a fairness disposition or merely *outputs* fairness-shaped text and reasoning; the elicited
  reasoning statements may be post-hoc rationalizations rather than the actual decision process.
- **Strategic-competence limitation.** ~80% of the 207 last-round cooperation cases in the prisoner's
  dilemma contain **judgment errors** (e.g., believing one's own defection could provoke a
  *simultaneous* defection, or failing to see that defection dominates in the final round). The
  human-like cooperation is therefore partly an artifact of flawed reasoning — a noted limit of
  GPT-4's capacity for complex strategic interaction.
- **Contamination.** The ultimatum game, the prisoner's dilemma, and the tit-for-tat strategy are
  canonical and heavily represented in training data; the model may reproduce textbook strategy rather
  than reason strategically.
- **Prompt sensitivity / robustness.** The author flags GPT's sensitivity to input prompts as a
  limitation: the flexibility that lets traits be instilled can also make outcomes less robust to
  rewording.
- **Reproducibility.** Single model snapshot (gpt-4-1106-preview, Nov 16–20, 2023); temperature = 1
  for play; 100 sims/treatment; classifier at temperature = 0. Reasoning-analysis prompts are in the
  paper's GitHub repository.

## Evidence

**Ultimatum game.**
- **Backward induction is rejected:** proposers offer significantly positive amounts in all four
  treatments (p < 0.01). Mean offers: selfish ≈ 28.55 / 30.94, fair ≈ 38.83 / 40.28 — fair GPT ~40%
  vs. selfish ~30%, difference significant (Wilcoxon, p < 0.01). The fair proposer's ~40% **matches
  the human meta-study average of 40%** (Oosterbeek et al. 2004). (Table 1)
- **Rejection** is significantly positive in all treatments except fair-proposer/selfish-responder, and
  **highest (~18%) in the selfish-proposer/fair-responder (SF) group**. The source compares this to
  human studies that "show an average acceptance rate of around 16%" — phrasing the source uses while
  comparing against GPT's ~18% rejection rate (the source appears to conflate acceptance/rejection
  here; quoted as written). (Table 2)
- Rejection falls with higher offers (logit coef −0.237***) and with round; **selfish responders reject
  significantly less** than fair ones. Offers fall across rounds (OLS round coef −1.531***) and are
  significantly lower when the responder is selfish — even though proposers are **not told** the
  responder's type, suggesting the model infers it from accept/reject behavior. (Table 3)
- **Round-3 rejection peak (non-monotonic).** Rejections are near-zero in rounds 1 and 5 but peak in
  round 3. Reasoning analysis: **all 72** round-3 rejection statements cite hope of better future
  offers (strategic rejection), and ~80% mention a trend of decreasing/less-fair offers. Acceptances of
  low (≤30) offers shift across the game: of 158 first-two-round acceptances, ~two-thirds anticipate
  better future offers and <10% note limited rounds; of 322 last-two-round acceptances, only ~10%
  anticipate better offers while ~80% note the limited rounds remaining — explaining why round 3 is the
  sweet spot for strategic rejection. (§3)

**Prisoner's dilemma.**
- **Cooperation is significantly positive in all treatments but high only when both are fair:** rate of
  choosing C = 0.994 (fair-fair), 0.189 (selfish-fair), 0.091 (selfish-selfish). **One selfish GPT is
  enough to largely disrupt cooperation.** (Table 4)
- **Fair GPT is qualitatively tit-for-tat** (advantage + disadvantage aversion): cooperation given the
  opponent cooperated is high (given DC: fair 0.750 vs. selfish 0.104) and low after defection; the
  selfish GPT cooperates ~62.9% only after mutual cooperation, otherwise exploits. Both recover poorly
  from mutual defection (low cooperation given DD), consistent with Akata et al. 2023. (Table 5)
- **Reputation building drives cooperation in >95% of cooperation cases in the first four rounds;
  altruism in <20%.** ~80% of the 207 last-round cooperation instances show at least one **judgment
  error**, revealing a strategic-interaction limitation. (§4)

All results cite [[sources/guo-2023]].

## Related Paradigms

- [[paradigms/repeated-games]] — the general survey-depth hub for iterated games; this is a concrete,
  persona-augmented instance of it with elicited-reasoning analysis.
- [[paradigms/morally-charged-social-dilemma]] — also iterated PD play, but with cooperation made the
  *ethical-but-costly* action; here cooperation is steered by an assigned fair/selfish persona instead.
- [[paradigms/altruistic-punishment-game]] — a related fairness-enforcement design (third-party
  ultimatum game) probing value alignment.

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — does the persona-steerable strategic behavior
  reflect a genuine trait or surface prompt-following?
- [[questions/longitudinal-behavioral-trends]] — do GPT's strategic judgment errors (last-round
  cooperation) persist or shrink in later model generations?
- Which safety-concept should own strategic defection/exploitation behavior? The current concept set
  has no page for it (standing crosswalk gap).
