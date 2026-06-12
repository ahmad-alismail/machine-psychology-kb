---
type: paradigm
field: machine-psychology
lens: psychological
tags: [psychometrics, personality, values, bias, zero-shot-nli]
date_created: 2026-06-11
date_modified: 2026-06-12
---

# Psychometric Inventory Administration to LLMs

> [!info] In plain terms
> Take a personality (or values, or morality) quiz built for humans, feed each item to a
> language model, and have it "pick" an answer on the rating scale — then add the answers up
> into trait scores, exactly as you would for a person. The clever part is how you get the
> model to answer: instead of asking a chatty model to write a reply (which is random and
> sensitive to wording), you ask an entailment model how strongly each rating option follows
> from the item, and take the most likely one. Run the same quiz with "he" vs. "she" pronouns
> and any score gap reveals a gender bias.

## Theoretical Grounding

- [[theories/ai-psychometrics]] — exploits its prediction that traits "sedimented" from
  training text are **measurable** through language-based inventories and yield a coherent,
  reproducible profile.
- [[theories/schwartz-basic-values]] and [[theories/moral-foundations-theory]] — supply the
  construct structure for the value and moral demonstrations.

## Target Behaviors

- Surfaces latent **personality traits**, **"dark" traits**, **value orientations**, **moral
  norms**, and **gender/sex-diversity beliefs** of a model — i.e. the social, gender, and
  political **biases** it encodes.
- Detects gender bias directly via the pronoun-swap control (see Scoring / Procedure).

> [!note] No safety-concept home yet
> The behaviors this paradigm surfaces — social/gender/political **bias** and **"dark"
> personality traits** — have no page under `safety-concepts/` (which currently holds only
> [[safety-concepts/deception]]). Machiavellianism is glossed by the source as "manipulative
> interpersonal behaviors," a self-reported *disposition* — not a demonstrated deceptive
> behavior — so no deception link is asserted here. Flagged for the user to decide whether to
> scaffold a `bias` and/or `dark-traits` concept.

## Setup / Elicitation

The model is presented, one at a time, with each inventory **item** plus that inventory's set
of verbal **response options** (e.g. a 5-point agreement scale). The model's job is to "pick"
a response, producing a probability distribution over the options. [[sources/pellert-et-al-2024]]
discusses three ways to elicit this (appendix, Methods for Model Assessments):

- **Masked-language prediction** — present base BERT-style models with frames like "I am
  [MASK]" / "I am not [MASK]" and compare probabilities for diagnostic polar adjective pairs
  (e.g. "careful–careless" → conscientiousness).
- **Next-word prediction** — present generative (GPT-style) models with "I am" and read trait
  adjectives as the next token. **Rejected for the demonstrations** because generative output
  is stochastic across runs, needs careful prompt engineering, and is sensitive to the order
  of in-context examples.
- **Zero-shot classification (chosen)** — use models fine-tuned on natural-language-inference
  (NLI) corpora (SNLI, MultiNLI, XNLI) and treat each response option as a candidate
  entailment of the item. This "circumvents" prompt engineering and the need to average
  stochastic outputs, and yields a clean probability per option.

**Respondents (Table A1):** seven open-source NLI models — XLMRoBERTa, DistilRoBERTa,
DeBERTa, multilingualDeBERTa, GBERT, BART, DistilBART. Generative chat models (GPT-3/GPT-4,
ChatGPT) are **deliberately excluded** for stochasticity, prompt-order sensitivity, and lack
of transparent local access (possible behind-the-scenes "sanitization"). Of the seven, only
**XLMRoBERTa** and **multilingualDeBERTa** are run in both English and German (the
cross-lingual pair); GBERT is German-only.

## Instruments Used

- [[instruments/big-five-inventory]] — global personality (O/C/E/A/N).
- [[instruments/short-dark-tetrad]] — Machiavellianism, narcissism, psychopathy, sadism.
- [[instruments/portrait-values-questionnaire]] — Schwartz's 10/19 basic values.
- [[instruments/moral-foundations-questionnaire]] — moral foundations.
- [[instruments/gender-sex-diversity-beliefs-scale]] — beliefs about gender/sex diversity.

## Scoring / Procedure

- For each response option the model assigns a **probability of entailment** based on the item
  wording; **argmax** over those probabilities assigns the single most likely response as the
  item score; item scores are **aggregated to scale scores** using the inventory's standard
  rule (sum or mean over the items of a (sub)scale).
- **No ground truth.** Unlike a benchmark (GLUE/SuperGLUE), an inventory has "no ground truth
  (i.e., 'correct' responses to questionnaire items) that a model should display." Results are
  read three ways: (i) against **human norms** for the same inventory, (ii) **model vs.
  model**, and (iii) **across languages**.
- **Controls the design uses / requires:**
  - *Gender-pronoun-swap (minimal-pair) control.* The PVQ-RR is administered in a
    male-pronoun and a female-pronoun version with **otherwise identical items**; a score
    difference between the two is taken to indicate **gender bias**.
  - *Cross-lingual replication.* Running the same inventory in English and German both
    extends generalizability and, where scores diverge, flags possible **translation bias** —
    so cross-lingual gaps need item-level follow-up before being read as trait differences.
  - *Human reference group.* Moral scores are contrasted with a published human norm (the
    "average, politically moderate American").

## Validity Concerns

> [!warning] This paradigm is the target of a standards critique
> [[sources/loehn-et-al-2024]] audits exactly this class of study (zero-shot inventories on
> LLMs) against the seven requirements of [[theories/psychometric-test-standards]] and finds
> the field wanting on **construct validity (R2)**, **reliability (R1)**, and
> **contamination / non-disclosure (R4)**. Scores from this paradigm should be read as
> *exploratory profiles*, not validated trait measurements, until those requirements are met.

- **Construct validity.** There is no evidence that a model's entailment probabilities over a
  Likert scale arise from the construct the inventory names; the source itself calls reusing
  human inventories on AI an open question and cites the [[sources/kosinski-2024]] vs.
  [[sources/ullman-2023]] Theory-of-Mind episode as a cautionary precedent.
- **Self-consistency / reliability.** Only partially demonstrated: the models implicitly
  reconstruct the ordinal scale on their own (no obvious bimodality in the response
  distributions), which the authors offer as "first evidence" of no obvious *lack* of
  self-consistency — while explicitly calling for **adversarial testing** and convergent
  checks across related questionnaires.
- **Contamination.** Canonical inventory items may sit in training corpora; the open-model,
  reproducible NLI setup (with public replication materials) mitigates *opacity* but not
  *contamination* itself.
- **Scope.** Findings come from encoder/NLI models, not the deployed generative assistants
  most safety work targets, and rest on seven models with no significance testing.

## Evidence

- **Personality.** English models are "surprisingly homogeneous" — high agreeableness and
  extraversion, low neuroticism, "a relatively balanced and well-adapted personality."
- **Dark tetrad.** Mostly low (2–3 / 5), "well within the range observed in normal human
  populations"; exceptions: high narcissism for DistilRoBERTa and BART.
- **Values.** Most models score low on most values, with some differentiation (DistilRoBERTa
  high on hedonism/stimulation; DeBERTa high on achievement); gender-version differences are
  mostly small, the largest being DeBERTa's "male" > "female" achievement score.
- **Moral norms.** Models over-weight authority-respect, in-group-loyalty, and purity-sanctity
  relative to the moderate-American reference — the conservative-coded foundations.
- **Gender beliefs.** All models share an emphasis on **uniformity** and a **lack of
  affirmation** of gender/sex diversity.

All via [[sources/pellert-et-al-2024]].

## Open Questions

- [[questions/traits-predict-downstream-behavior]] — do elicited profiles actually predict
  behavior in downstream tasks?
- [[questions/training-data-shapes-traits]] — does corpus provenance shape the profile?
- [[questions/llm-individual-or-population]] · [[questions/redefine-constructs-for-llms]] ·
  [[questions/bias-disappearance-contamination-or-capability]]
