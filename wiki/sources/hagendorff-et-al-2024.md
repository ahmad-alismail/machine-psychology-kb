---
type: source
field: machine-psychology
lens: na
eval_axis: na
tags: [machine-psychology, review, behavioral-experiments, heuristics-and-biases, theory-of-mind]
date_created: 2026-06-10
date_modified: 2026-06-10
---

# Machine Psychology

> [!info] In plain terms
> This paper argues that we can understand large language models (LLMs) the way psychologists understand people: by running carefully designed behavioral experiments and watching what the model does, rather than dissecting its inner wiring. It surveys four areas of psychology that translate well to LLMs and lays out best practices and pitfalls for doing it rigorously.

```bibtex
TBD BY USER
```

## Relevance Tier
CORE — this is the foundational review that names and frames the "machine psychology" research program.

## Key Claims
- A fruitful way to understand LLMs is to engage them in behavioral experiments inspired by psychology, going "beyond performance benchmarks" toward computational insight into emergent abilities and behavioral patterns (Abstract; Introduction).
- This behavioral approach is distinct from mechanistic interpretability and neuroscience-style internal inspection; it analyzes input–output relations rather than weights and activations, which scales gracefully with model size and applies even to closed-source models (Introduction).
- Machine psychology is *not* primarily interested in measuring or increasing performance, but in understanding behavioral patterns and the underlying constructs and algorithms they indirectly reflect (Introduction; Theory).
- The empirical, hypothesis-driven tradition of psychology (if construct X, then behavior Y, else Z) is more amenable to transfer than self-report measures, whose reliability is questionable in humans and LLMs alike and which are famously sensitive to prompting (Theory).
- Four research areas anchor the program: **heuristics and biases**, **social interactions** (including theory of mind and games), the **psychology of language**, and **learning** (Paradigms).
- Human-like heuristics and biases observed in earlier models have largely disappeared in the latest generation — possibly because the stimuli no longer challenge improved reasoning, or because of training-set leakage (Heuristics and biases).
- Sound methodology requires controlling training-data contamination, avoiding small/convenience samples, using batteries of prompt variants, and neutralizing technical biases (recency, common-token, majority-label) (Design and analysis).
- "Thick descriptions" using psychological terms add genuine explanatory power for black-box LLMs even without direct neural correlates, but anthropomorphism must be handled with caution (Discussion).

## Theories / Paradigms / Instruments Introduced
- Theories: [[theories/theory-of-mind]], [[theories/heuristics-and-biases]]
- Paradigms: [[paradigms/false-belief-task]], [[paradigms/cognitive-bias-probe]], [[paradigms/repeated-game-play]]
- Methods: [[methods/chain-of-thought-elicitation]], [[methods/behavioral-control-design]]

## Concepts Referenced
- [[concepts/emergent-abilities]]
- [[concepts/in-context-learning]]
- [[concepts/performance-competence-distinction]]

## Relationship to Other Sources
- [[sources/loehn-kiehne-et-al-2024]] — **Productive disagreement on scope.** Löhn, Kiehne et al. cite Hagendorff's guidelines as among the few standardization efforts but argue they cover only *study/prompt design*, not the *validity criteria* (reliability, construct validity, contamination control, fairness, reproducibility) that they hold are strictly necessary. See [[debates/test-validity-sufficiency]].
- [[sources/pellert-et-al-2024]] — **Partial overlap, different emphasis.** Both treat LLM "behavior"/traits as worth diagnosing rather than scored for performance. Hagendorff favors process-oriented, hypothesis-driven experiments; Pellert favors trait/inventory measurement and avoids the term "machine psychology" (aligning instead with "machine behavior"). See [[debates/machine-psychology-terminology]]. Hagendorff shares Pellert's caution that self-report/inventory results are prompt-sensitive and should be read contextually.

## Limitations
- A review/position piece: it synthesizes best practices and charts directions but contributes no new empirical study.
- It cautions against, but does not fully resolve, the anthropomorphism risk inherent in transferring psychological terms to machines.
- Its methodological recommendations (e.g., contamination control, prompt batteries) are guidance rather than enforced criteria; it does not propose formal validity standards — the gap that [[sources/loehn-kiehne-et-al-2024]] targets.
