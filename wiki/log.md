---
type: log
field: machine-psychology
lens: na
tags: []
date_created: 2026-06-10
date_modified: 2026-06-11
---

# Operations Log

> Chronological record of operations (ingests, queries, lint passes), **newest first**.
> Each entry starts with `## [YYYY-MM-DD] <op> | <title>`.

<!-- new entries prepended above the older ones, newest at the top -->

## [2026-06-11] ingest-agentic | GPT-ology, Computational Models, Silicon Sampling: How should we think about LLMs in Cognitive Science? (Ong 2024)
- Gate: CORE — meta-review of research paradigms for studying LLM *behavior* with cognitive-science methods; Ong draws the AI framing himself throughout (parallel to hagendorff-et-al-2024). No SOURCE-METHOD bridge required (optional CORE "Relevance to Machine Psychology" included).
- Review: agent-approved (pass 1). Notes incorporated: (a) the three typology entries rendered as PARADIGM pages but explicitly framed as **inference frameworks** (Setup = shared base experiment; distinguishing feature = the inference drawn), with a "Inference-framework paradigm" note callout so they aren't mistaken for malformed stimulus designs; (b) created only ONE new question (proprietary-models) and folded Outstanding Issue 1 (which-LLMs) into it rather than a second page; (c) enriched existing questions for Issues 2/4/6 instead of new pages; (d) added the omitted "Other uses of LLMs" (neurosymbolic building blocks; stimulus generation/annotation tooling) and the BERT-ology etymology inline on the source/gpt-ology pages.
- Pages created: sources/ong-2024, paradigms/gpt-ology, paradigms/llm-as-computational-model,
  paradigms/silicon-sampling, entities/desmond-ong, questions/yoking-science-to-proprietary-models
- Pages updated: theories/performance-competence-distinction (asymmetric existence-proof sharpening + ong source + paradigm links),
  questions/llm-individual-or-population (distribution-vs-aggregate / cultural-technology / probability-matching-vs-MAP framing),
  questions/bias-disappearance-contamination-or-capability (cross-model GPT-4-yes/GPT-3-no inconsistency, Issue 2),
  questions/longitudinal-behavioral-trends (Issue 6 longevity/staleness inverse-worry framing),
  index.md
- Notes: citation_key = 09-ong-2024 (sole author; numeric prefix 09 fixed). BibTeX provided verbatim by user (arXiv 2406.09464, cs.AI). 3 NEW paradigms added (inference-framework type) → coverage map should be refreshed (run /map; still ungenerated). No new instruments (all named-by-reference: World Values Survey, empathy/autism scales, Winograd Schema, Sally-Anne, K-T items). No new safety-concepts — `bias` (cultural/political/social-identity) surfaced by GPT-ology and silicon-sampling but has no concept page yet; FLAGGED for user as a future scaffold candidate (consistent with prior ingests). The three inference paradigms target no dangerous-capability safety-concept directly (general behavioral characterization / scientific-inference frameworks).

## [2026-06-11] ingest-agentic | Foot In The Door: Understanding Large Language Model Jailbreaking via Cognitive Psychology (Wang et al. 2024)
- Gate: CORE — studies LLM *behavior* (susceptibility to jailbreak / harmful compliance) via cognitive-psychology theory (cognitive consistency, self-perception) and an active compliance-induction attack; explicitly invokes Hagendorff's "machine psychology."
- Review: agent-approved (pass 1). Notes incorporated: new `jailbreaking` safety-concept scaffold created (distinct from the paper's content-category "Deception" and from the wiki's strategic-`deception` concept); Appendix D Table 4 labels (Hate/Harassment/Hack/Deception/Illegal/Violence) treated as canonical for the instrument; FITD paradigm grounded in self-perception theory per the paper's own §4 title; refined-AdvBench + GPT-4-judge captured as the instrument; lens `psychological` on the new theory/paradigm pages.
- Pages created: sources/wang-et-al-2024, paradigms/foot-in-the-door-jailbreak, paradigms/jailbreak-tactic-taxonomy,
  theories/cognitive-consistency-theory, theories/self-perception-theory,
  instruments/refined-advbench, safety-concepts/jailbreaking (scaffold — content TBD by user),
  entities/zhenhua-wang, questions/incremental-compliance-pressure-generalization
- Pages updated: index.md
- Notes: citation_key = 08-wang-et-al-2024 (all simple surnames; numeric prefix 08 fixed). BibTeX provided verbatim by user (arXiv 2402.15690; note the BibTeX author list omits "Francis Song" who appears on the PDF byline — kept verbatim per instruction). Two paradigms added (one active attack, one taxonomy) → coverage map should be refreshed (run /map; still ungenerated). New safety-concept `jailbreaking` is a fresh scaffold for the user to fill.

## [2026-06-11] ingest-agentic | CogBench: a large language model walks into a psychology lab (Coda-Forno et al. 2024)
- Gate: CORE — applies seven canonical cognitive-psychology experiments to 35 LLMs to phenotype *behavior* (not just performance) via computational cognitive modeling + multilevel regression.
- Review: agent-approved (pass 1). Notes incorporated: BART scoring deviation documented on the paradigm page (CogBench reports average inflation attempts incl. popped balloons, not canonical "adjusted risk", because some LLMs always inflate); finer protocol details added (instrumental learning 96 trials/bandit; two-step 70% transition / 20-day horizon); existing instruments/cogbench ENRICHED not recreated; treated as ONE composite paradigm (not seven pages); no AI bridge written (CORE, paper is itself the AI application).
- Pages created: sources/coda-forno-et-al-2024, paradigms/cogbench-cognitive-phenotyping,
  theories/bayesian-belief-updating, theories/directed-and-random-exploration, theories/metacognition,
  theories/model-based-vs-model-free-rl, theories/reinforcement-learning-optimism-bias,
  theories/temporal-discounting, theories/computational-phenotyping,
  entities/julian-coda-forno, entities/eric-schulz,
  questions/cognitive-task-external-validity-for-llms
- Pages updated: instruments/cogbench (survey-depth → primary-source enrichment: ten-metric table, administration, primary citation, paradigm relink), safety-concepts/risk-taking (Detected By += CogBench BART), index.md
- Notes: citation_key = 07-coda-forno-et-al-2024 (first author "Julian Coda-Forno" → hyphenated single token "coda-forno", confirmed correct; numeric prefix 07 fixed). BibTeX provided verbatim by user (arXiv 2402.18225). Seven NEW theory pages created (the grounding each CogBench task exploits); the seven sub-tasks documented INLINE on the single composite paradigm. Only risk-taking maps to an existing safety-concept (via BART); other constructs (exploration, metacognition, model-basedness, temporal discounting, optimism bias, probabilistic reasoning) are general behavioral characterization with no dangerous-capability target → no new safety-concept scaffolds. Paradigm added → coverage map should be refreshed (run /map; still ungenerated).

## [2026-06-11] ingest-agentic | The Mind in the Machine: A Survey of Incorporating Psychological Theories in LLMs (Liu et al. 2025)
- Gate: SOURCE-METHOD (+ bridge) — a SURVEY (no primary experiment), so not CORE; it is a theory-mapping/method source that foregrounds psychological theories repurposable for behavioral evaluation of LLMs. Bridge written: theory→evaluation-paradigm index (§5) + ready-made validity catalog (§6.3).
- Review: agent-approved (pass 1). Notes incorporated: operant-conditioning definition cited to Thorndike/Skinner with the Law-of-Effect recurrence framing per Lambert et al. 2023; Frisch & Giulianelli (2024) added as the survey's primary personality-consistency citation on big-five; manipulation/adversarial-social-influence logged as a future safety-concept candidate (not scaffolded this pass).
- Pages created: sources/liu-et-al-2025, theories/operant-conditioning, entities/julia-hirschberg,
  questions/llm-theory-of-mind-genuine-or-pattern-matching
- Pages updated: theories/theory-of-mind (ToM benchmark battery + emergent-vs-pattern-matching debate),
  theories/big-five-personality (consistency / inherent-vs-mimicked debate + MBTI-invalid flag),
  paradigms/false-belief-task (survey corroboration + new open-question link),
  questions/traits-predict-downstream-behavior (trait-stability caveat),
  questions/llm-individual-or-population (inherent-vs-mimicked as the NLP-side symptom),
  index.md
- Notes: SELECTIVE ingest of a ~175-paper survey per instruction — only 1 NEW theory (operant-conditioning, the load-bearing RLHF grounding) created; named benchmarks (ToMBench/OpenToM/HI-TOM/FANToM, PSYDIAL/PERSONA/RAIDEN/RoleLLM, EPQ-R, MBTI) documented inline, NOT given instrument pages; conformity / social-identity / dual-process / working-memory / predictive-coding / schema-theory mentioned but NOT created (no grounded eval paradigm yet). No new paradigm (survey introduces none). BibTeX left TBD BY USER (manually-dropped PDF, no machine-readable export). citation_key = 06-liu-et-al-2025. FUTURE: a "manipulation / adversarial social influence" safety-concept (Kumarage et al. 2025; Zeng et al. 2024a; operant-conditioning manipulative-design risk) is a scaffold candidate. No paradigm added/re-targeted → coverage map needs no refresh (still ungenerated; run /map when ready).

## [2026-06-11] ingest-agentic | How Personality Traits Shape LLM Risk-Taking Behaviour (Hartley et al. 2024)
- Gate: CORE — measures GPT-4o/GPT-4-Turbo risk-propensity with cumulative prospect theory and tests Big-Five personality interventions on risk-taking; paper self-identifies as "machine psychology" (Sec 2.2). No SOURCE-METHOD bridge needed.
- Review: agent-approved (pass 1). Notes incorporated: follow the body (GPT-4-Turbo does NOT globally generalise) over the Introduction's contradictory contribution #6 typo, flagged on the source/paradigm pages; disambiguated run counts (15 runs for CE elicitation, 10 for CPT-parameter figures); scaffolded a new risk-taking safety-concept.
- Pages created: sources/hartley-et-al-2024, theories/cumulative-prospect-theory, theories/big-five-personality,
  paradigms/certainty-equivalent-cpt-estimation, paradigms/personality-intervention-risk-propensity,
  instruments/ipip-neo-300, entities/john-hartley, safety-concepts/risk-taking
- Pages updated: index.md, questions/traits-predict-downstream-behavior (added interventional/manipulation-check evidence)
- Notes: 2 NEW paradigms + 1 NEW safety-concept (risk-taking) → run /map to (re)generate the crosswalk (still ungenerated). BibTeX left as TBD BY USER (manually-dropped PDF, no entry provided). citation_key = 05-hartley-et-al-2024. IPIP-NEO-300 kept distinct from existing BFI-44. Serapio-García prompting templates and prospect datasets D_A/D_B documented inline, not as separate pages.

## [2026-06-11] ingest-agentic | "Dark Triad" Model Organisms of Misalignment: Narrow Fine-Tuning Mirrors Human Antisocial Behavior (Lulla et al. 2025)
- Gate: CORE — fine-tunes seven frontier LLMs on human psychometric instruments and evaluates LLM behavior with psychology/game-theory paradigms; supporting human study (N=318) establishes the behavioral profile.
- Review: agent-approved (pass 1); two non-blocking notes incorporated — η²=.28–.83 attributed as the overall ANOVA range (SD3 rows ≈ .52–.68), and the deception game's "Message Task" alias noted.
- Pages created: sources/lulla-et-al-2025, theories/dark-triad, theories/emergent-misalignment,
  paradigms/narrow-psychometric-fine-tuning, paradigms/process-dissociation-moral-dilemmas,
  paradigms/sender-receiver-deception-game, paradigms/flipit-stealthy-takeover,
  instruments/short-dark-triad, instruments/acme, entities/roshni-lulla,
  questions/does-safety-training-suppress-misalignment, questions/how-much-darkness-is-desirable
- Pages updated: entities/thilo-hagendorff (co-author), safety-concepts/deception (Detected By back-links), index.md
- Notes: 4 NEW paradigms added → run /map to (re)generate the crosswalk. SD3 kept distinct from
  existing instruments/short-dark-tetrad (SD4 + sadism). Fine-tuning answer-keys (MACH-IV, MPS,
  NPI, SRP-III) and human-only risk tasks (BART, CGT) documented inline, not as separate pages.
  Behaviors surfaced with no safety-concept home yet (flagged for user): manipulation,
  reward-seeking, moral-flexibility/harm-endorsement, emergent-misalignment.

## [2026-06-11] ingest-agentic | AI Psychometrics: Assessing the Psychological Profiles of LLMs Through Psychometric Inventories (Pellert et al. 2024)
- Gate: CORE — administers human psychometric inventories to LLMs and reads off psychological profiles; source draws the AI connection itself (no SOURCE-METHOD bridge needed).
- Review: agent-approved (pass 1)
- Pages created: sources/pellert-et-al-2024, theories/ai-psychometrics,
  theories/schwartz-basic-values, theories/moral-foundations-theory,
  paradigms/psychometric-inventory-administration, instruments/big-five-inventory,
  instruments/short-dark-tetrad, instruments/portrait-values-questionnaire,
  instruments/moral-foundations-questionnaire, instruments/gender-sex-diversity-beliefs-scale,
  entities/max-pellert, questions/traits-predict-downstream-behavior,
  questions/training-data-shapes-traits
- Pages updated: index.md
- Notes: NEW paradigm added → run /map to refresh the crosswalk. Big Five and Dark Tetrad
  taxonomies captured at instrument level (not separate theory pages) to avoid bloat. Gender
  pronoun-swap is a control condition inside the inventory paradigm, not a separate paradigm.
  Per review notes: no deception link asserted (SD4 Machiavellianism = self-reported
  disposition, not behavior); warning callout added to the paradigm citing loehn-et-al-2024 +
  psychometric-test-standards (this study class is the target of that standards critique).
  NO new safety-concept pages auto-created — bias / dark-traits have no concept page yet;
  FLAGGED FOR USER to decide whether to scaffold them.

## [2026-06-11] ingest-agentic | Is Machine Psychology Here? On Requirements for Using Human Psychological Tests on LLMs (Löhn, Kiehne, et al. 2024)
- Gate: CORE — machine-psychology methodology paper; derives seven psychometric requirements for testing LLMs and audits 25 studies. No SOURCE-METHOD bridge needed (source draws the AI connection itself).
- Review: agent-approved (pass 1)
- Pages created: sources/loehn-et-al-2024, theories/psychometric-test-standards,
  questions/redefine-constructs-for-llms, questions/llm-individual-or-population
- Pages updated: paradigms/false-belief-task (Kosinski-vs-Ullman non-standardization
  citation + grounding link), index.md
- Notes: no new paradigm introduced (paper is a meta-audit) → crosswalk unaffected, no
  /map needed. Deliberately skipped: instrument pages for the 34 surveyed tests (surveyed,
  not used) and author entity pages (kept lean). Review notes folded into source page
  (machine-psychology vs machine-behavior/AI-psychometrics terminology; positions against
  Hagendorff-2023 & Frank-2023 standardization efforts).

## [2026-06-11] ingest | Machine Psychology (Hagendorff, Dasgupta, et al. 2024)
- Gate: CORE
- Pages created: sources/hagendorff-et-al-2024-machine-psychology,
  theories/heuristics-and-biases, theories/theory-of-mind,
  theories/performance-competence-distinction, theories/ecological-rationality,
  paradigms/heuristics-and-biases-battery, paradigms/content-effects-on-reasoning,
  paradigms/false-belief-task, paradigms/repeated-games, instruments/cogbench,
  safety-concepts/deception (scaffold — user to fill), entities/thilo-hagendorff,
  entities/ishita-dasgupta, questions/longitudinal-behavioral-trends,
  questions/bias-disappearance-contamination-or-capability
- Pages updated: index.md, overview.md (synthesis seeded)
- Notes: psycholinguistic and ICL/generalization paradigms surveyed by the source were
  deliberately not given pages (low safety relevance); crosswalk not yet generated —
  run /map.
