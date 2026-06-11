---
type: source
field: machine-psychology
lens: psychological
citation_key: 06-liu-et-al-2025
tags: [survey, psychology-nlp, theory-of-mind, operant-conditioning, personality, evaluation-validity]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# The Mind in the Machine: A Survey of Incorporating Psychological Theories in LLMs (Liu et al. 2025)

> [!info] In plain terms
> This is a survey — a map, not an experiment — of how ideas from psychology have been wired
> into large language models at every stage of their life: choosing training data, pre-training,
> fine-tuning, and finally evaluating them. It groups the borrowed ideas into six branches of
> psychology (cognitive, developmental, behavioral, social, personality, and psycholinguistics)
> and, most usefully for this wiki, catalogs how psychological theories are used to *test* what
> a model can do (e.g. theory-of-mind tests, personality questionnaires) — and flags the
> arguments about whether those tests really measure what they claim.

```bibtex
TBD BY USER
```

## Relevance Tier

SOURCE-METHOD — this is a survey, not a primary behavioral experiment, so it does not itself
study an AI's behavior. It is a **methodological / theory-mapping** source: it foregrounds the
psychological theories the NLP community has repurposed to evaluate LLMs and consolidates the
debates over whether those evaluations are valid. The `## Relevance to Machine Psychology`
bridge is required and supplied below.

## Relevance to Machine Psychology

*(Wiki interpretation — how this survey serves theory-grounded behavioral evaluation of AI.)*

The survey's load-bearing contribution for this KB is its **Evaluation and Application** stage
(§5) and its **Evaluation and Validity Debates** (§6.3). It does two useful things:

1. **A theory → evaluation-paradigm index.** It catalogs which psychological theories ground
   which LLM behavioral probes — *Theory of Mind* grounding the ToM benchmark family
   (ToMBench, OpenToM, HI-TOM, FANTOM); *Big Five* grounding personality-consistency and
   trait-expression studies; *Conformity* (Asch) and *Social Identity* (Tajfel) grounding
   social-influence and ingroup-bias tests. Each foregrounded theory is a candidate grounding
   for an evaluation paradigm in this wiki.
2. **A ready-made validity catalog.** §6.3 enumerates the cross-disciplinary failure modes any
   LLM "psychological" evaluation must answer: **terminology mismatch / over-anthropomorphism**
   ("attention" and "memory" mean different things in psychology vs. transformers), **outdated
   or disputed constructs** (predictive coding; MBTI's "criticized validity and reliability"),
   and **evaluation-validity debates** (ToM as emergent reasoning vs. pattern-matching;
   personality as inherent vs. mimicked; prompt-fragility). These map directly onto the
   "Validity Concerns" sections of this wiki's paradigm pages.

The survey also records the clean **behavioral-psychology grounding of alignment**: it states
that RLHF "explicitly operationalizes *Operant Conditioning theory*" — the home page for which
is [[theories/operant-conditioning]]. It does **not** introduce a new paradigm of its own, so
no new paradigm pages are created from it; instead it corroborates and supplies validity
context to existing pages ([[theories/theory-of-mind]], [[paradigms/false-belief-task]],
[[theories/big-five-personality]]).

## Key Claims

- **RLHF operationalizes operant conditioning.** "The principles of reinforcement learning align
  closely with this psychological framework, particularly in the post-training phase of LLM
  development, where RLHF explicitly operationalizes *Operant Conditioning theory* to align
  model behaviors with human values and preferences" — reflecting "*Thorndike's Law of Effect*,
  which asserts that *behaviors followed by satisfying outcomes are more likely to recur*."
  InstructGPT (Ouyang et al. 2022) is given as the canonical instance. (§4.)
- **Theory of Mind: emergent reasoning vs. pattern-matching.** "GPT-4 solves around 75% of
  false-belief tasks, matching a 6-year-old's performance (Kosinski 2024; Strachan et al. 2024);
  some see emergent *ToM*-like reasoning, but others argue it may be pattern matching, noting
  that minor prompt changes can derail results (Shapira et al. 2024)." (§6.3.)
- **Personality: inherent vs. mimicked.** "Some studies find stable simulated traits
  (Sorokovikova et al. 2024; Huang et al. 2024), while others reveal variability under different
  prompt conditions (Gupta et al. 2024; Shu et al. 2024), raising questions about inherent vs.
  mimicked personas (Tseng et al. 2024)." Frisch & Giulianelli (2024) show LLMs vary in Big Five
  traits across contexts; Amidei et al. (2025) find language switching alters GPT-4o's traits on
  the EPQ-R. (§5.1.4, §6.3.)
- **Uneven theory uptake across the lifecycle.** Developmental psychology dominates
  preprocessing/pre-training; **behavioral psychology** dominates RLHF; **social, personality,
  and psycholinguistic** theories dominate evaluation/application; **cognitive psychology**
  appears across all stages. (§6.1.)
- **Under-tapped behavioral theory for alignment.** RLHF "relies on uniform rewards," but
  behavioral theory's *partial reinforcement* and *shaping* are "overlooked"; adding **reward
  variability** "may reduce premature convergence and improve alignment," whereas flawed uniform
  rewards risk **reward hacking** (Skalse et al. 2022; Krakovna 2020). (§6.2, §6.3.)
- **Terminology mismatch / anthropomorphism risk.** "attention" in psychology means *selective
  mental focus*, but in transformers it is "a token weighting mechanism without cognitive
  awareness," "leading to misleading attributions of intentionality"; the survey calls for "a
  precise cross-disciplinary lexicon." (§6.3.)

## Theories / Paradigms / Instruments Introduced

The survey introduces none of its own; it consolidates existing ones. The wiki records the two
it foregrounds as grounding behavioral evaluation/alignment, and links the rest:

- Theory (NEW from this source): [[theories/operant-conditioning]] — Thorndike's Law of Effect /
  Skinner; the behavioral-psychology grounding the survey assigns to RLHF.
- Theory (enriched): [[theories/theory-of-mind]] — the survey's primary social-cognition
  evaluation theory; adds the ToM benchmark battery and the emergent-vs-pattern-matching debate.
- Theory (enriched): [[theories/big-five-personality]] — the survey's personality-evaluation
  backbone; adds the consistency / inherent-vs-mimicked debate.
- Paradigm (enriched, not created): [[paradigms/false-belief-task]] — corroborated by the
  survey's ToM-benchmark catalog and the 75%/6-year-old result.
- Benchmarks/instruments named but only by reference (documented inline, not given pages):
  ToMBench, OpenToM, HI-TOM, FANToM (ToM); PSYDIAL, PERSONA, RAIDEN, RoleLLM, Character100
  (persona/role-play); EPQ-R; MBTI (flagged by the survey as pseudo-scientific).

## Relationship to Other Sources

- Shares the field-mapping ambition of [[sources/hagendorff-et-al-2024]]'s "Machine Psychology"
  review but is broader (whole LLM lifecycle, six psychology areas) and shallower per topic
  (a name-dropping survey, not a deep methodological treatment).
- Its §6.3 validity debates restate, from the NLP side, the concerns [[sources/loehn-et-al-2024]]
  formalizes as the seven requirements for valid LLM psychological testing
  ([[theories/psychometric-test-standards]]) — the survey even cites Löhn et al. (2024) on
  whether human psychology maps onto LLMs "without distortion."
- The ToM emergent-vs-pattern-matching debate it summarizes is the same Kosinski-vs-Strachan/
  Ullman/Shapira controversy that motivates [[paradigms/false-belief-task]]'s contamination and
  robustness concerns.

## Limitations

- **A survey, not a study.** It introduces no primary data, paradigm, or instrument; most claims
  are syntheses of cited results, and benchmarks are name-dropped rather than analyzed.
- **NLP-scoped.** The authors note it focuses on NLP-venue literature and "do not extensively
  cover research from psychology and cognitive sciences," so theoretical grounding is thin in
  places.
- **Personality-centric.** The Limitations foreground personality modeling; other behaviors
  (deception, risk-taking, power-seeking) are not the survey's focus.
- **Ethics caution surfaced, not resolved.** The authors flag that operant-conditioning
  reinforcement schedules (variable-ratio/interval) applied to LLM UX could "condition users to
  engage compulsively" — manipulative design — and call for transparent disclosure, but offer no
  evaluation method for it.
