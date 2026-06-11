---
type: source
field: machine-psychology
lens: psychological
tags: [methodology, critique, psychometrics, reliability, validity]
date_created: 2026-06-11
date_modified: 2026-06-11
---

# Is Machine Psychology Here? On Requirements for Using Human Psychological Tests on LLMs (Löhn, Kiehne, et al. 2024)

> [!info] In plain terms
> Researchers have started giving personality quizzes, IQ-style tasks, and Theory-of-Mind
> puzzles to chatbots. This paper asks the awkward question: are those tests even valid
> when the "patient" is a machine? Borrowing psychology's century-old rulebook for sound
> testing, the authors lay out seven requirements a test must meet, then grade 25 recent
> "machine psychology" studies — and find that not one meets them all. Its lasting
> contribution is the checklist itself.

```bibtex
@inproceedings{lohn-etal-2024-machine-psychology,
    title = "Is Machine Psychology here? On Requirements for Using Human Psychological Tests on Large Language Models",
    author = {L{\"o}hn, Lea  and
      Kiehne, Niklas  and
      Ljapunov, Alexander  and
      Balke, Wolf-Tilo},
    editor = "Mahamood, Saad  and
      Minh, Nguyen Le  and
      Ippolito, Daphne",
    booktitle = "Proceedings of the 17th International Natural Language Generation Conference",
    month = sep,
    year = "2024",
    address = "Tokyo, Japan",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.inlg-main.19/",
    doi = "10.18653/v1/2024.inlg-main.19",
    pages = "230--242",
    abstract = "In an effort to better understand the behavior of large language models (LLM), researchers recently turned to conducting psychological assessments on them. Several studies diagnose various psychological concepts in LLMs, such as psychopathological symptoms, personality traits, and intellectual functioning, aiming to unravel their black-box characteristics. But can we safely assess LLMs with tests that were originally designed for humans? The psychology domain looks back on decades of developing standards of appropriate testing procedures to ensure reliable and valid measures. We argue that analogous standardization processes are required for LLM assessments, given their differential functioning as compared to humans. In this paper, we propose seven requirements necessary for testing LLMs. Based on these, we critically reflect a sample of 25 recent machine psychology studies. Our analysis reveals (1) the lack of appropriate methods to assess test reliability and construct validity, (2) the unknown strength of construct-irrelevant influences, such as the contamination of pre-training corpora with test material, and (3) the pervasive issue of non-reproducibility of many studies. The results underscore the lack of a general methodology for the implementation of psychological assessments of LLMs and the need to redefine psychological constructs specifically for large language models rather than adopting them from human psychology."
}
```

## Relevance Tier

CORE — the paper is about studying LLM behavior with psychological tests; it analyzes 25
LLM behavioral studies and derives the testing standards that govern whether such
assessments are meaningful. It draws the AI connection itself.

## Relevance to Machine Psychology

This is a methodological foundation for the entire field. Rather than running a new
behavioral experiment, it supplies the **validity infrastructure** — the seven
requirements (R1–R5c) — against which every paradigm's results should be judged. Its
sharpest practical verdicts: human↔LLM score comparisons are "currently inadvisable"
because the underlying constructs may not transfer; and any test item *modified* to fit
an LLM (reworded to dodge contamination, or recast from apparatus to text) is invalid
until re-validated. The seven requirements live on [[theories/psychometric-test-standards]].

## Key Claims

- **The field lacks standardization** and "not a single of the studies provides evidence
  of fulfillment of all requirements" — even under deliberately lenient grading (highest
  grade for *any* evidence of fulfillment). (§5, audit of 25 studies / 12 constructs / 34
  tests.)
- **Reliability and construct-validity methods are largely absent.** Coda-Forno et al.
  (2023) "are the only ones to derive evidence of reliability" (from answer-order
  investigations); Serapio-García et al. (2023) "present the most comprehensive approach"
  to validity.
- **Contamination (R4) is mostly unaddressed.** Proprietary training data is
  inaccessible; 9 of 25 studies modify the original test as a countermeasure, but only
  Coda-Forno et al. supply evidence that the rephrased items remain valid.
- **Pervasive non-reproducibility.** Only 2 of 25 studies fully satisfy transparent test
  use (R5c), largely because proprietary models offer no guarantee the tested version
  persists.
- **Redefine constructs for LLMs.** The paper's central recommendation: "redefine
  psychological constructs specifically for large language models rather than adopting
  them from human psychology." → [[questions/redefine-constructs-for-llms]]
- **The Kosinski (2023) vs. Ullman (2023) Theory-of-Mind contradiction** — trivial item
  changes flip the verdict — is "symptomatic of a general lack of standardization." (§1.)
- **Individual vs. population is unresolved**: LLMs have been equated with both; their
  stochasticity and millions-of-authors training data cast doubt on individuality, while
  Park et al. (2023) find population-like response distributions on some items but
  singular answers on others. → [[questions/llm-individual-or-population]]

## Theories / Paradigms / Instruments Introduced

- Theory (introduced as the wiki's grounding for measurement quality):
  [[theories/psychometric-test-standards]] — reliability / validity / fairness and the
  seven requirements (R1–R5c).
- Paradigms: **none introduced.** The paper's method is a meta-audit; it surveys others'
  designs (Unexpected Contents/Transfer Task, Cognitive Reflection Test, Wason Selection
  Task, Alternative Uses Test, Ultimatum Game, Milgram Shock Experiment, …) without
  running them.
- Instruments: the seven-requirement audit rubric. The 34 surveyed inventories/tests
  (Short Dark Triad/Tetrad, Big Five Inventory, HEXACO, IPIP-NEO, Portrait Values
  Questionnaire, STICSA, …) are catalogued, not used — so no instrument pages are created.

## Relationship to Other Sources

- Adopts Hagendorff's **"machine psychology"** umbrella term over the alternatives
  **"machine behavior"** (Rahwan et al. 2019) and **"AI psychometrics"** (Pellert et al.
  2024), and endorses the field's framing of diagnosis vs. benchmarking.
- Positions itself *against* two prior standardization efforts it deems insufficient
  because they target practical study design rather than the necessary test-theoretic
  prerequisites: **Hagendorff (2023)** prompt-design guidelines (see
  [[sources/hagendorff-et-al-2024]]) and **Frank (2023)**. The two papers are
  complementary: Hagendorff et al. give the methodological program; Löhn et al. give the
  normative validity rubric it should satisfy.

## Limitations

- A critical/normative paper with no new experiments or data; the seven requirements "can
  only scratch the surface" of psychology's test-theoretic landscape and are explicitly
  non-exhaustive.
- The audit grades treatment of each requirement, not the *sufficiency* of the evidence —
  the authors deliberately leave sufficiency to "a broader scientific discourse."
- The literature pool was collected up to October 2023 (25 papers, publication dates June
  2022 – September 2023), so the snapshot predates later, more rigorous work.
