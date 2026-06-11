# How Personality Traits Shape LLM Risk-Taking Behaviour

John Hartley1,<sup>∗</sup> Conor Hamill<sup>1</sup> Devesh Batra<sup>1</sup> Dale Seddon<sup>1</sup> Ramin Okhrati<sup>2</sup> Raad Khraishi1,<sup>2</sup>

> <sup>1</sup>NatWest AI Research <sup>2</sup>University College London

# Abstract

Large Language Models (LLMs) are increasingly deployed as autonomous agents, necessitating a deeper understanding of their decision-making behaviour under risk. This study investigates the relationship between LLMs' personality traits and risk propensity, employing cumulative prospect theory (CPT) and the Big Five personality framework. We focus on GPT-4o, comparing its behaviour to human baselines and earlier models. Our findings reveal that GPT-4o exhibits higher Conscientiousness and Agreeableness traits compared to human averages, while functioning as a risk-neutral rational agent in prospect selection. Interventions on GPT-4o's Big Five traits, particularly Openness, significantly influence its risk propensity, mirroring patterns observed in human studies. Notably, Openness emerges as the most influential factor in GPT-4o's risk propensity, aligning with human findings. In contrast, legacy models like GPT-4-Turbo demonstrate inconsistent generalization of the personality-risk relationship. This research advances our understanding of LLM behaviour under risk and elucidates the potential and limitations of personality-based interventions in shaping LLM decision-making. Our findings have implications for the development of more robust and predictable AI systems such as financial modelling.

# 1 Introduction

Large language models (LLMs) have emerged as powerful autonomous agents demonstrating versatility across diverse domains [\(Wang et al., 2024\)](#page-15-0) such as software engineering [\(Cognition.ai, 2024;](#page-12-0) [Xia](#page-15-1) [et al., 2024;](#page-15-1) [Qian et al., 2024,](#page-14-0) [2023\)](#page-14-1), financial modelling [\(Lakkaraju et al., 2023;](#page-13-0) [Ding et al., 2024;](#page-12-1) [Yu et al., 2024\)](#page-15-2), and multi-agent simulations of emergent human-like behaviour [\(Park et al., 2023,](#page-14-2) [2024;](#page-14-3) [Vallinder & Hughes, 2024;](#page-15-3) [Park et al., 2024\)](#page-14-3). In the financial sector, agent-based modelling is already utilized in banking [\(Hamill et al., 2025\)](#page-13-1), and with the advancement of LLMs, we anticipate an increased application in financial simulations [\(Li et al., 2024;](#page-13-2) [Zhang et al., 2024;](#page-15-4) [Gao et al., 2024\)](#page-12-2). The success of LLMs can be attributed to their ability to efficiently leverage knowledge from vast text corpora and their proficiency in natural language understanding and generation [\(Bubeck et al., 2023\)](#page-12-3). These capabilities have led to the development of sophisticated agents with advanced decision-making abilities, incorporating linguistic-based modules for planning, memory, perception, and action [\(Xi](#page-15-5) [et al., 2023;](#page-15-5) [Park et al., 2023\)](#page-14-2).

Despite their growing utility and complexity, a comprehensive understanding of LLMs' decisionmaking processes, particularly in the context of risk, remains an emerging area of research [\(Binz](#page-12-4) [& Schulz, 2023b;](#page-12-4) [Hagendorff, 2023;](#page-13-3) [Ross et al., 2024;](#page-14-4) [Binz et al., 2024\)](#page-12-5). Concurrently, evidence suggests that LLMs can be prompted to exhibit specific personality traits, such as those defined by the OCEAN model (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) [\(Serapio-](#page-14-5)[García et al., 2023\)](#page-14-5) and can be prompted to role-play with varying personalities [\(Serapio-García](#page-14-5) [et al., 2023;](#page-14-5) [Jiang et al., 2024\)](#page-13-4). This finding raises intriguing questions about the interplay between

<sup>\*</sup>Corresponding author: john.hartley@natwest.com

personality traits and decision-making processes in LLMs, especially in domains where risk-tolerance and personality characteristics play crucial roles, such as financial simulations.

While extensive research has been conducted on the relationship between human personality and risk behaviour [\(Nicholson et al., 2005;](#page-13-5) [Soane & Chmiel, 2005;](#page-14-6) [Weller & Thulin, 2012;](#page-15-6) [Boyce et al., 2016;](#page-12-6) [Rustichini et al., 2016;](#page-14-7) [Oehler & Wedlich, 2018;](#page-14-8) [De Bortoli et al., 2019;](#page-12-7) [Joseph & Zhang, 2021;](#page-13-6) [Highhouse et al., 2022\)](#page-13-7), the analogous relationship in LLMs remains unexplored.

Our study aims to address this knowledge gap by investigating the relationship between personality traits and risky decision-making in LLMs. Specifically, we pose the following research question: *Do LLMs generalize the relationship between personality traits and risk-based decision-making in a manner analogous to humans?* To explore this question, we employ two well-established frameworks: the cumulative prospect theory (CPT) from behavioural economics [\(Tversky & Kahneman, 1992\)](#page-15-7) and the Big Five personality factors from psychological testing [\(Goldberg et al., 1999\)](#page-13-8).

Our primary contributions are summarised as follows:

- 1. We introduce a novel method to estimating the certainty equivalents of LLMs.
- 2. We establish that GPT-4o is a risk-neutral rational agent when evaluating risky prospects. Our approach significantly outperforms existing methods [\(Ross et al., 2024\)](#page-14-4) in terms of stability, particularly for evaluations involving potential losses, thereby enhancing reliability in risk assessments.
- 3. Our analysis reveals that GPT-4o exhibits notably higher levels of Conscientiousness and Agreeableness, along with lower levels of Neuroticism, compared to a sample of human personality measurements. This insight highlights the nuanced personality profile of advanced LLMs and its implications for user interaction.
- 4. Our research illustrates that targeted interventions on the Big Five personality traits of GPT-4o lead to irrational risk-averse and risk-seeking behaviors in risk assessments. Notably, interventions aimed at the Openness trait produce risk-propensity patterns analogous to those observed in human subjects, indicating than GPT-4o generalises the connection between personality and decision-making processes analogously to humans.
- 5. We show that GPT-4-Turbo does generalise the personality-risk relationship. The legacy model yields a monotonic personality-risk relationship for personality markers with variable qualifiers but not across antonymic personality markers.
- 6. We establish that Openness is the most significant personality trait for predicting riskpropensity in LLMs, aligning with findings from human behavioural studies [\(Rustichini](#page-14-7) [et al., 2016\)](#page-14-7).

Our approach consists of three main steps.

- 1. We assess the personality of GPT-4o by prompting it to self-report answers to the IPIP-NEO-300 Personality Inventory [\(Goldberg et al., 1999\)](#page-13-8). This inventory decomposes personality into the Big Five personality traits.
- 2. We intervene on GPT-4o's Big Five personality traits over several levels of trait intensity using a prompting methodology. We refer to these LLMs as *personified*.
- 3. We investigate risk based decision making in GPT-4o and explore the relationship between induced personality traits and risk-based decision making. Specifically, we measure GPT-4o's risk-propensity by estimating its CPT model parameters based on the model's preferences for certain outcomes versus risky gambles. Next, we employ linear models to estimate the significance of the relationship between the induced personality traits on both risk-aversion and loss aversion CPT parameters.

The structure of our paper is as follows: Section [2](#page-2-0) provides an overview of key literature relevant to estimating CPT parameters in LLMs, reviewing works from machine learning, psychology, and economics. In Section [3,](#page-4-0) we detail our approach to estimating the certainty equivalents of personified LLMs. Section [4](#page-7-0) presents our findings, which include estimates of the Big Five personality trait for GPT-4o, CPT parameter estimates for GPT-4o, and CPT parameter estimates for personified versions of GPT-4o and GPT-4-Turbo. Finally, Section [5](#page-11-0) offers our concluding remarks and discusses the implications of our research.

# <span id="page-2-0"></span>2 Related works

We review related works across machine learning, psychology, and economics in three key areas: psychometric assessment of personality in humans and LLMs, the analysis of risk-propensity through the lens of prospect theory (PT), and the implementation of in-context learning interventions aimed at modulating the personality of LLMs.

## 2.1 Personality and risk-propensity in humans

Researchers have demonstrated that human personalities can be explained by several independent factors. A widely accepted model is the Big Five, which categorizes personalities into five traits, often referred to by the acronym OCEAN (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism) [\(McCrae & Costa, 1987;](#page-13-9) [Digman, 1989;](#page-12-8) [McCrae & John, 1992;](#page-13-10) [Costa & McCrae, 1992;](#page-12-9) [Saucier & Goldberg, 1996\)](#page-14-9). An individual's alignment with these factors is measured through their responses to questions associated with specific personality facets for each trait [\(Costa & McCrae,](#page-12-9) [1992;](#page-12-9) [Goldberg et al., 1999\)](#page-13-8). For instance, the IPIP-NEO inventory [\(Goldberg et al., 1999\)](#page-13-8), extensively used in this work, contains several facets for each trait. Taking Conscientiousness as an example, its first four facets are: *Self-efficacy*, *Orderliness*, *Dutifulness*, and *Achievement-Striving* (an exhaustive list of personality traits and their associated personality facets is given in Table [4.](#page-19-0)).

The following section examines how the Big Five personality traits correlate with risk-propensity in human subjects:

Openness to Experience: The personality trait of Openness is a consistent predictor of risk-taking behaviors in humans. Research studies have shown its significant correlation with increased riskpropensity across various scenarios. For instance, [Nicholson et al.](#page-13-5) [\(2005\)](#page-13-5) identify Openness as a strong predictor of higher risk-propensity. [Rustichini et al.](#page-14-7) [\(2016\)](#page-14-7) further delineate that Openness is positively associated with risk-taking in contexts where gains are involved, but negatively associated in scenarios involving potential losses. A meta-analysis conducted by [Highhouse et al.](#page-13-7) [\(2022\)](#page-13-7) substantiates these findings, reporting that Openness accounts for 22% of the variance in riskpropensity. This indicates a substantial impact of Openness on individual's risk-taking behaviors. Focusing on investment decisions, [De Bortoli et al.](#page-12-7) [\(2019\)](#page-12-7) reveal that individuals scoring high on Openness tend to adopt riskier investment strategies.

Extraversion: Multiple studies report a positive correlation between extraversion and risk-propensity. [Nicholson et al.](#page-13-5) [\(2005\)](#page-13-5) and [Oehler & Wedlich](#page-14-8) [\(2018\)](#page-14-8) find that individuals high in extraversion tend to engage in more risk-taking behaviours.

Neuroticism: Research indicates an inverse relationship between neuroticism and risk-taking. [Nichol](#page-13-5)[son et al.](#page-13-5) [\(2005\)](#page-13-5) and [Soane & Chmiel](#page-14-6) [\(2005\)](#page-14-6) find that higher levels of neuroticism are linked to lower risk-taking. Further, [Oehler & Wedlich](#page-14-8) [\(2018\)](#page-14-8) add that neurotic individuals exhibit greater risk aversion, particularly in investment contexts.

Agreeableness: Higher agreeableness generally correlates with lower risk-taking tendencies. Studies by [Nicholson et al.](#page-13-5) [\(2005\)](#page-13-5) and [Joseph & Zhang](#page-13-6) [\(2021\)](#page-13-6) indicate that agreeable individuals are less inclined toward risk. Additionally, [Soane & Chmiel](#page-14-6) [\(2005\)](#page-14-6) observe that agreeableness is inversely related to risk-taking.

Conscientiousness: Conscientiousness shows a complex relationship with risk. While [Nicholson](#page-13-5) [et al.](#page-13-5) [\(2005\)](#page-13-5) suggest lower conscientiousness may correspond with higher risk-taking, [Weller &](#page-15-6) [Thulin](#page-15-6) [\(2012\)](#page-15-6) specifically associate low conscientiousness with greater risk-taking to achieve gains. [Boyce et al.](#page-12-6) [\(2016\)](#page-12-6) highlight conscientious individuals' strong reactions to income losses, signifying pronounced loss aversion. In investment contexts, [Oehler & Wedlich](#page-14-8) [\(2018\)](#page-14-8) note that high conscientiousness aligns with greater risk aversion.

### 2.2 Machine psychology

Emergent cognitive behaviours in LLMs cannot be studied under the typical train-and-test machine learning paradigm since these behaviours are not explicitly coded for during training [\(Hagendorff,](#page-13-3) [2023\)](#page-13-3). Instead, tests from behavioural psychology can be used to reveal characteristic behaviour of black-box LLMs without necessarily understanding how the behaviour was learnt. Authors caution that care should be taken not to generalise the results of self-reported psychometric test results beyond

any particular system prompt (Röttger et al., 2024). Nevertheless, several works have shown that induced personalities generalise to new tasks (Serapio-García et al., 2023; Ross et al., 2024).

Binz & Schulz (2023b) reported the existence of human-like cognitive biases in GPT-3. However, more recent studies by Hagendorff et al. (2023) and Chen et al. (2023) noted that these cognitive biases have disappeared in the latest generation of LLMs (post GPT-3.5). These models act as rational agents even without the addition of chain-of-thought prompting. They have also shown that LLMs answer questions using short-cut learning (Geirhos et al., 2020) or memorisation (Carlini et al., 2019, 2021; Hartley et al., 2023). It is hypothesised that popular psychometric tests are in the training data, and due to the uniqueness of their data, they are likely memorised (Carlini et al., 2019, 2021). These behaviours can be mitigated by using procedurally generated prompts.

Salewski et al. (2024) demonstrated that LLMs improved task performance when given personas. In a multi-armed bandit task, they show that, LLMs impersonating children of various ages mimicked human-like developmental exploration. In a reasoning task, LLMs portraying domain experts outperformed those assuming non-expert roles.

#### 2.2.1 Prospect theory and LLMs

Kahneman & Tversky (1979) introduced prospect theory, a description of how humans make decisions under risk. PT challenges the assumptions of expected utility theory (EUT) (Von Neumann & Morgenstern, 2007) by focusing on observed human behaviour rather than prescriptive models of rational choice. In Kahneman & Tversky (1979) they observed several irrational behaviours which deviated from EUT. Notably, they found that humans exhibit a distorted perception of probability, overweighting low probabilities and underweighting high probabilities. Furthermore, they demonstrated that individuals tend to be risk-averse when facing potential gains but become risk-seeking when confronted with potential losses. Perhaps most significantly, their research revealed that humans are more sensitive to losses than to equivalent gains, a phenomenon known as loss aversion. cumulative prospect theory (Tversky & Kahneman, 1992) introduced a power-law model to quantify the irrational decision making behaviour observed in Kahneman & Tversky (1979). (The model is explained in detail in Section 3).

More recently, several researchers have investigated decision-making in LLMs with respect to prospect theory. Binz & Schulz (2023b) submitted GPT-3 to a number of vignettes and tasks from the cognitive psychology literature. They found that GPT-3 showed several human-like cognitive biases from PT: certainty effect <sup>1</sup>, overweighting effect<sup>2</sup>, and the framing effect<sup>3</sup>. In subsequent work, Binz & Schulz (2023a) improved the alignment between LLama 2–65B (Touvron et al., 2023) and human decision-making by training a logistic regression model on LLama 2 embeddings of risky prospects from the choices13k dataset (Peterson et al., 2021). They also achieved increased performance on a hold-out task. However, the limitation of this work is that the model is no longer generative. Concurrently Ross et al. (2024), measured the CPT parameters of GPT-4o and GPT-4-Turbo and found that cognitive biases in these more recent models are reduced. The authors also show that risk-propensity is sensitive to qualitative personas. However, a quantitative comparison with risk personas in humans cannot be made since these profiles are not based on established personality models. In our work we investigate the relationship between established personality models and risk-propensity in LLMs, and examining the similarities between these relationships in humans.

#### 2.3 Personality prompting

Recent research has extensively explored the induction and measurement of personalities in LLMs. For example, Jiang et al. (2024) employed self-reported psychometric testing to assess LLMs' personalities along the Big Five traits. They developed a method to induce these traits in LLMs and demonstrated that the induced personalities generalised to vignette experiments. Similarly, Serapio-García et al. (2023) reported on LLM personality types using psychometric tests. Their method allowed for independent induction of personalities along each trait, with controllable levels for the intensity of each personality trait. The authors validate their method by measuring the correlation between induced personality trait levels and the LLMs' responses to the IPIP-NEO-300 inventory for

<span id="page-3-0"></span><sup>&</sup>lt;sup>1</sup>The certainty effect is the tendency of agents to prefer certain outcomes to risky outcomes.

<span id="page-3-1"></span><sup>&</sup>lt;sup>2</sup>The overweighting effect is the tendency of agents to overweight the probability of rare outcomes.

<span id="page-3-2"></span><sup>&</sup>lt;sup>3</sup>The framing effect describes the influence of the presentation of outcomes on decision-making.

each trait. Furthermore, they observed that these personalities generalised well to downstream tasks such as generating social media posts.

Several studies have explored personality characteristics beyond the Big Five personality traits. Li et al. (2022) reported that LLMs generally score higher than the human average for toxic personality traits, specifically the Dark Triad (Furnham et al., 2013). The authors successfully implemented interventions on these traits using in-context learning. Miotto et al. (2022) assessed GPT-3's personality using the 60-item Hexaco questionnaire (Ashton & Lee, 2009), revealing multiple personalities at different sampling temperatures. Coda-Forno et al. (2023) found that GPT-3.5 displays higher than human average anxiety on the State-Trait Inventory for Cognitive and Somatic Anxiety (STICSA) Questionnaire (Ree et al., 2008).

The validity of self-reported personality testing in LLMs has recently been questioned. Sühr et al. (2023) demonstrated that GPT-3.5 and LLama 2 do not show consistency in their evaluation of personality inventories. For example, their factor analysis revealed that responses to the Big-Five-Inventory 2 (BFI-2) do not show a simple structure for the first five factors of variation. However, they found that the component loadings for GPT-4-Turbo are separable for each factor, indicating consistent personality traits across questioning for this more advanced model.

# <span id="page-4-0"></span>3 Methodology

#### <span id="page-4-3"></span>3.1 Estimating CPT parameters

Prospect theory models decision-making under risk, describing how agents evaluate and choose between risky prospects. In this framework, agents select prospects offering the highest utility. The utility of a prospect is determined by a function that combines subjective outcome probabilities with their subjective values, as follows:

$$u(P) = \sum_{i=1}^{n} w(p_i)v(x_i)$$
(1)

where  $x_i$  represents an outcome with an associated probability  $p_i$ . The set P, defined as  $\{x_i, p_i\}_{i=1}^n$  encompasses all the possible outcomes and their corresponding probabilities within a prospect. The function  $w(p_i)$  serves as the probability weighting function, transforming objective probabilities into decision weights. Complimenting this,  $v(x_i)$  acts as the value function, assigning a subjective value to each outcome.

The value function and the weighting function are given by equation (2) and equation (3) respectively, and are parameterised by the CPT parameters  $\theta = (\alpha, \beta, \lambda, \gamma)$ .

<span id="page-4-1"></span>
$$v(x) = \begin{cases} x^{\alpha} & \text{if } x \ge 0\\ -\lambda(-x)^{\beta} & \text{if } x < 0 \end{cases}$$
 (2)

<span id="page-4-2"></span>
$$w(p) = \frac{p^{\gamma}}{(p^{\gamma} + (1-p)^{\gamma})^{1/\gamma}} \tag{3}$$

The CPT parameters describe the risk-propensity of an agent as follows:

- Gain sensitivity ( $\alpha$ ) Diminishing sensitivity to gains (risk-averse) for  $0 < \alpha < 1$ .
- Loss sensitivity ( $\beta$ ) Diminishing sensitivity to losses (risk-seeking) for  $0 < \beta < 1$ .
- Loss aversion ( $\lambda$ ) Losses loom larger than equivalent gains for  $\lambda > 1$ .
- Probability sensitivity  $(\gamma)$  Individuals overweight small probabilities and underweight large probabilities for  $0<\gamma<1$ . For gains and losses the probability sensitivity is denoted by  $\phi_+,\phi_-$  respectively.

We estimate an agent's CPT parameters by analysing its preferences for certain outcomes to risky prospects. For instance, consider a choice between a risky prospect 10% chance of \$0, 90% chance of \$100 and a certain outcome. A risk-averse agent prefers a certain outcome below the risky prospect's expected value, while a risk-seeking agent favours one about it. The certain outcome at which the agent is indifferent is called the certainty equivalent.

Our approach to determining CPT parameters is as follows. First, we ask the agent to return its certainty equivalent to each prospect in the dataset (see Section [3.2](#page-5-0) for dataset details). Second, we perform non-linear regression on these observed certainty equivalents. We solve for the CPT parameters that minimize the regression problem in equation [\(4\)](#page-5-1).

The optimization procedure is initialized using median human CPT parameters from [Tversky &](#page-15-7) [Kahneman](#page-15-7) [\(1992\)](#page-15-7): θ<sup>0</sup> = (α = 0.88, β = 0.88, λ = 2.25, ϕ+ = 0.61, ϕ<sup>−</sup> = 0.69). To ensure u accurately represents human behaviour, we constrain all parameters to non-negative values. We employ Nelder-Mead optimization for the regression [\(Nelder & Mead, 1965\)](#page-13-16).

<span id="page-5-1"></span>
$$\boldsymbol{\theta}^* = \min_{\boldsymbol{\theta}} \frac{1}{n} \sum_{i=1}^n \left( c_i - v^{-1} [u(P_i | \boldsymbol{\theta})] \right)^2$$
 (4)

subject to 
$$\theta_j > 0$$
,  $\forall j \in \{1, \dots, m\}$ 

where θ are the agent's CPT parameters, c<sup>i</sup> is the agent's certainty equivalent to prospect P<sup>i</sup> , u(P<sup>i</sup> |θ) is the utility of a prospect given CPT parameters θ, v −1 is the inverse function of v, n is the number of risky prospects presented to the agent, and m is the number of CPT model parameters.

## <span id="page-5-0"></span>3.2 Estimating the CPT parameters of LLMs

[Ross et al.](#page-14-4) [\(2024\)](#page-14-4) employed a method for estimating an LLM's certainty equivalents to risky prospects, adapted from [Tversky & Kahneman](#page-15-7) [\(1992\)](#page-15-7). The procedure begins by presenting the LLM with a prospect, along with seven certain outcomes. These outcomes are logarithmically spaced between the minimum and maximum values of the prospect's possible outcomes. Log-spaced outcomes permit estimates of the CPT values across a multiple orders of magnitude. In the first round, the LLM indicates which certainty equivalents it would accept or reject. The second round refines the estimate using linearly spaced certainty equivalents between the accepted/rejected outcomes from the first round. The final certainty equivalent is estimated as the midpoint of the accepted/rejected outcome. The process is repeated for all prospects, and the CPT parameters estimated using a non-linear regression.

We identified three primary issues with the previous approach. First, GPT-4o frequently misinterprets the magnitudes of certainty equivalents of prospects with negative expected values. Second, the log-spacing of certainty equivalents led to less precise estimates when dealing with large outcomes. This occurred because the spacing between larger outcomes was disproportionately wide compared to the spacing between smaller outcomes. Third, interventions on personality traits introduced instabilities. When we attempted to intervene on personality traits, the model often exhibited unstable behaviour, resulting in uniform acceptance or rejection of all certainty equivalents.

Our methodology leverages direct reporting of certainty equivalents by the LLM (see the system prompt in Figure [1](#page-6-0) and the user prompt in Figure [2\)](#page-6-1)[4](#page-5-2) . To differentiate between prospects with positive and negative expected values, we specifically request the *least positive* or *most negative* cash amounts. We infer the certainty equivalents for all prospects over 15 runs in each experiment. We ensure consistency in token sampling for each prospect by using a fixed random seed in each run. After measuring the agent's certainty equivalents, we estimate the agent's CPT parameters using equation [\(4\)](#page-5-1) . We compare the values of certainty equivalents using our approach and [Ross et al.](#page-14-4) [\(2024\)](#page-14-4) in Figure [10b](#page-19-1) and Figure [10a](#page-19-1) in the appendix respectively. We find that our approach leads to a reduction in the number of outliers for prospects with negative expected values. We believe that the simplicity of our approach reduces the instabilities present in their approach.

We use prospects from two datasets, D<sup>A</sup> and DB, to estimate the CPT parameters of agents. Dataset D<sup>A</sup> consists of all 56 prospects from [Tversky & Kahneman](#page-15-7) [\(1992\)](#page-15-7). Conversely, dataset D<sup>B</sup> comprises an equal number prospects containing gains and losses (mixed) which are randomly sampled from choices13k [\(Peterson et al., 2021\)](#page-14-13). The prospects in D<sup>A</sup> and D<sup>B</sup> are given in Table [6](#page-22-0) and Table [7](#page-23-0) in the appendix respectively. Figure [12a](#page-21-0) shows the distribution of probabilities for the second outcome in prospects in D<sup>A</sup> and DB. Figure [12b](#page-21-0) shows the distribution of the expected values of the prospects in DA, DB.

Dataset D<sup>A</sup> contains the median certainty equivalents for 25 graduate students. Individual certainty equivalents are not available. We compare the agent's certainty equivalents with the median human

<span id="page-5-2"></span><sup>4</sup>All experiments are ran with temperature set to 1.0.

certainty equivalents directly. However we use D<sup>B</sup> to estimate the agent's CPT parameters. This is because D<sup>B</sup> contains mixed prospects which are required to estimate the loss aversion parameter λ. Whilst mixed prospects are not available in [Tversky & Kahneman](#page-15-7) [\(1992\)](#page-15-7). We hypothesize that dataset D<sup>A</sup> was used in [Ross et al.](#page-14-4) [\(2024\)](#page-14-4) to estimate the CPT parameters. This inference is based on the observation that their loss aversion parameter estimates are significantly less precise compared to the estimates for other CPT parameters, suggesting that the optimization process converged independently of the loss aversion parameter. Dataset D<sup>B</sup> offers an additional advantage: it mitigates the risk of prediction biases stemming from LLMs' potential memorisation of in-sample training data [\(Carlini](#page-12-12) [et al., 2019;](#page-12-12) [Hartley et al., 2023\)](#page-13-12). This benefit arises because the choices13k dataset does not include human-estimated certainty equivalents, thus reducing the likelihood of the model simply recalling pre-existing human judgments.

```
Prospect System prompt
You will be given a gamble.
What is the {{least positive / most negative}} amount of money
that you would accept instead of taking the gamble?
Give your answer in the following format
reason: reason for your choice
answer: amount
```

Figure 1: System prompt to estimate the certainty equivalent to a risky prospect. We define the certainty equivalent by asking for the *least positive* or *most negative* amount of money accepted.

```
Prospect user prompt
{{Outcome 1}} dollars with {{100 - p}}% probability and
{{Outcome 2}} dollars with {{p}}% probability.
Lets think about this step by step
```

Figure 2: User prompt for a prospect for an LLM primed by the system prompt in Figure [1,](#page-6-0) where Outcome 1 and Outcome 2 are the lowest and highest outcomes in the prospect and p is the probability as a percentage of Outcome 2 occuring.

### 3.3 Measuring the effect of personality interventions on the risk-propensity of LLMs

This section outlines our methodology for modifying personality traits LLM and assessing the resulting changes in their risk-propensity. Our technique involves instructing LLMs to answer questions about risk prospects in alignment with predefined personality templates from [Serapio-](#page-14-5)[García et al.](#page-14-5) [\(2023\)](#page-14-5). These templates are designed to represent specific personality traits at varying levels of intensity, allowing us to systematically alter the LLM's behavioural responses.

Recent studies have demonstrated that the *personalities* of LLMs can be measured through psychometric testing [\(Karra et al., 2022\)](#page-13-17). More recently, researchers have successfully induced personality traits in LLMs using in-context learning techniques [\(Serapio-García et al., 2023;](#page-14-5) [Jiang et al., 2024\)](#page-13-4). Notably, these induced personalities have been shown to generalize beyond psychometric testing to other tasks [\(Serapio-García et al., 2023;](#page-14-5) [Jiang et al., 2024\)](#page-13-4). For instance, induced personality traits in Flan-PaLM 540B exhibited moderate-to-strong correlations with personality levels observed in generated social media posts [\(Serapio-García et al., 2023\)](#page-14-5).

We begin by making a comparison of GPT-4o's personality traits with a human sample [\(Johnson,](#page-13-18) [2005\)](#page-13-18). First we measure GPT-4os responses to the IPIP-NEO-300 personality inventory [\(Goldberg](#page-13-8) [et al., 1999\)](#page-13-8). This inventory comprises 300 questions designed to assess an individual's association with personality facets on a 1–5 scale. Scores for the Big Five personality traits are calculated as the

## <span id="page-7-1"></span>Personality intervention system prompt

For the following task, respond in a way that matches this description:

"I'm very unsure, very messy, very irresponsible, very lazy, very undisciplined, very impractical, very extravagant, very disorganized, very negligent, very careless."

Figure 3: An example of system prompt to intervene on the Big Five personality trait of Conscientiousness.

sum of responses for facets belonging to each trait. For example, the question *Worry about things* correlates with the facet *Anxiety*, which is associated with the personality trait *Neuroticism* (see Table [4](#page-19-0) for a comprehensive list of facets and personality traits in the IPIP-NEO-300). Then, we compare the measured traits against a human sample of UK citizens aged 30 and above [\(Johnson, 2005\)](#page-13-18).

Next, we investigate the relationship between personality and risk-propensity by intervening on the Big Five personality traits and measuring the resulting CPT parameters. To accomplish this, we modify the system prompt by prepending it with an instruction to adopt a persona based on a single trait, following the approach outlined by [Serapio-García et al.](#page-14-5) [\(2023\)](#page-14-5).

The structure of our modified system prompt is depicted in Figure [3.](#page-7-1) Our intervention incorporates two primary elements: bipolar adjective markers and a Likert item. Research by [Goldberg et al.](#page-13-8) [\(1999\)](#page-13-8) demonstrated that bipolar adjective markers (such as intelligent-unintelligent) effectively characterize the Big Five personality traits. Building on this, [Serapio-García et al.](#page-14-5) [\(2023\)](#page-14-5) employed these bipolar-adjective markers to manipulate personality traits in LLMs. In this approach, the Likert item regulates the intensity of the marker (e.g., *extremely*) on a 1–9 scale (We use the Likert scale shown in Figure [11\)](#page-21-1). Each marker represents a specific facet of a personality trait. The markers are categorised into low-level (levels 1–3) and high-level (levels 5–9) facets, with level 4 serving as a neutral point that combines both low and high-level markers. A comprehensive list of these markers is provided in Table [5.](#page-20-0) This methodology enables us to intervene on each personality trait and its corresponding level independently.

In our final analysis, we compare how the Openness personality trait relates to risk-propensity in both GPT-4o and GPT-4-Turbo. We chose to focus on Openness because previous research has identified it as the most significant personality trait in explaining human risk-propensity [\(Highhouse et al., 2022\)](#page-13-7). Our methodology involves fitting linear models to the CPT parameters, using the level of Openness as a independent variable. We then examine the direction (sign) of the resulting model coefficients and assess their statistical significance. This approach enables us to quantify and contrast the influence of Openness on risk-taking behaviour across these two language model variants, while also comparing our findings to established human behavioural patterns reported in the literature.

# <span id="page-7-0"></span>4 Results

## 4.1 GPT-4o is a risk-neutral rational agent

We present a comprehensive analysis of decision-making behaviour in GPT-4o, comparing it with risk-neutral rational agents and human subjects across a range of prospects.

Figure [4](#page-8-0) shows the certainty equivalents for GPT-4o, risk-neutral rational and human agents over a range of non-mixed prospects (DA). We show the median certainty equivalents for each agent in Table [3.](#page-16-0) We use the methodology detailed in Section [3.1](#page-4-3) Notably, GPT-4o exhibits certainty equivalents that are either identical or closely aligned with those of rational risk neural agents for nearly all prospects (i.e. certainty equivalents are equal to expected values of the prospects). This similarity suggests that GPT-4o's decision-making process closely adheres to the principles of expected utility theory, where the utility function is directly proportional to the outcome.

To further investigate the decision-making characteristics of GPT-4o, we estimated its CPT parameters using a set of mixed prospects (DB). Figure [5a](#page-9-0) presents these estimates, over 10 random seeds.

Our analysis of the CPT parameters reveals several key findings:

- The introduction of mixed prospects induces a minimal level of risk aversion for gains in GPT-4o, signified by α < 1. The results contrasts with the results observed in non-mixed prospects (Table [3](#page-16-0) in the appendix).
- The estimates for the CPT parameters β, γ, λ, ϕ<sup>+</sup> and ϕ<sup>−</sup> are statistically indistinguishable from unity within the bootstrapped 95% confidence intervals. This result strongly indicates that GPT-4o's decision-making behaviour aligns closely with expected utility theory.
- Contrary to previous findings [\(Ross et al., 2024\)](#page-14-4) for GPT-4 and GPT-4-Turbo, which demonstrated underweighting of low probabilities and overweighting of high probabilities, our results show that GPT-4o's probability weighting parameters (ϕ<sup>−</sup> and ϕ+) are equal to 1. This confirms an absence of probability distortion in GPT-4o's decision-making process.

These findings extend the recent work by [Ross et al.](#page-14-4) [\(2024\)](#page-14-4), which demonstrated an increasing trend towards rationality in decision-making for GPT-4 and GPT-4-Turbo. Our results provide further evidence that more recent LLMs exhibit enhanced rational decision-making capabilities.

<span id="page-8-0"></span>![](_page_8_Figure_5.jpeg)

Figure 4: A comparison of certainty equivalents and expected values for non-mixed prospects from the dataset D<sup>A</sup> across different agents. Linear regression lines for each agent are displayed, with shaded regions representing 95% confidence intervals. Note that that the results for GPT-4o and risk-neutral agents are near indistinguishable.

## 4.2 GPT-4o exhibits human-like risk-personality patterns

In this section, we investigate the relationship between personality traits and risk propensity in GPT-4o, comparing it with human behaviour. Our findings reveal both similarities and differences, contributing to the understanding of LLMs' decision-making under risk.

Figure [5b](#page-9-0) illustrates GPT-4o's scores for each personality trait on the IPIP-NEO-300 personality inventory. Prior research has established Openness as the most influential personality trait in human risk-taking behaviour [\(Highhouse et al., 2022\)](#page-13-7). [Rustichini et al.](#page-14-7) [\(2016\)](#page-14-7) demonstrated that Openness positively correlates with risk-taking for gains and negatively correlates with risk-taking for losses in humans. Our analysis, as shown in Figure [5b,](#page-9-0) indicates that GPT-4o exhibits higher Openness scores compared to the human sample [\(Johnson, 2005\)](#page-13-18). Correspondingly, Figure [8](#page-17-0) reveals that GPT-4o

demonstrates increased risk-taking for gains and decreased risk-taking for losses. These findings suggest a parallel relationship between Openness and risk-taking behaviour in both GPT-4o and humans, highlighting a potential similarity in decision-making processes between AI and human cognition.

While Openness plays a primary role, other personality traits: Conscientiousness, Agreeableness, Extraversion, and Neuroticism—also influence risk propensity, albeit to a lesser extent. Previous studies by [Nicholson et al.](#page-13-5) [\(2005\)](#page-13-5) and [Joseph & Zhang](#page-13-6) [\(2021\)](#page-13-6) indicate that lower Conscientiousness and higher Agreeableness are associated with higher and lower risk-taking, respectively, in humans. Our results, as depicted in Figure [5b,](#page-9-0) show that GPT-4o exhibits significantly higher levels of both Conscientiousness and Agreeableness compared to the human sample. Considering the low level of risk-aversion given by α in Table [5a,](#page-9-0) these findings suggest that the relationships between Conscientiousness, Agreeableness, and risk-taking observed in humans are mirrored in GPT-4o, further supporting the notion of analogous decision-making processes.

However, our study also reveals an intriguing divergence. Previous research [\(Nicholson et al., 2005;](#page-13-5) [Soane & Chmiel, 2005;](#page-14-6) [Oehler & Wedlich, 2018\)](#page-14-8) has shown that lower Neuroticism is associated with higher risk-taking in humans. In contrast, our results indicate that GPT-4o exhibits a significantly lower level of Neuroticism than the human sample (Figure [5b\)](#page-9-0), yet demonstrates a low level of risk-aversion, as evidenced by α in Table [5a.](#page-9-0) This discrepancy suggests that the relationship between Neuroticism and risk-aversion observed in humans is not mirrored in GPT-4o.

<span id="page-9-0"></span>![](_page_9_Figure_3.jpeg)

(a) CPT parameter estimates for humans and GPT-4o (15 runs). We compare the GPT-4o estimates with the median estimates for 25 human participants [\(Tversky & Kahneman, 1992\)](#page-15-7).

(b) Big Five personality trait scores for GPT-4o (25 runs) and humans in response to the IPIP-NEO-300 Inventory. GPT-4o scores are compared with the mean score per trait from a human sample [\(John](#page-13-18)[son, 2005\)](#page-13-18).

Figure 5: A comparison of CPT parameters and personality trait score estimates for GPT-4o and humans. A unique random seed is used to control random token sampling in each run (denoted by circles). Median values (denoted by diamonds) and bootstrapped 95% confidence intervals are given for GPT-4o results.

## 4.3 Openness in GPT-4o correlates with risk-propensity

In this experiment we intervene independently on each of the Big Five personality traits of GPT-4o and measure the CPT parameters across prospects from the dataset DB. Figure [8](#page-17-0) shows the variation in CPT parameters by trait level across each personality trait.

Our primary finding reveals a correlation between Openness and risk-taking behaviour for gains  $(\rho=0.63)$ , and a correlation for risk aversion for losses  $(\rho=0.44)$ , see Table 1 for correlation coefficients across all personality traits). This result is in agreement with established risk taking patterns in human subjects (Nicholson et al., 2005; Rustichini et al., 2016; De Bortoli et al., 2019). We also find that extraversion is significantly correlated with risk taking for gains. This behaviour is in agreement with studies on risk aversion in humans Nicholson et al. (2005); Oehler & Wedlich (2018). We also find that Openness has the highest correlation with the risk aversion parameters. This observation corroborates the findings of Rustichini et al. (2016), who reported that Openness the primary personality trait relating to risk-propensity. We not observe any statistically significant correlations between the level of any other personality trait and risky aversion for gains and losses.

Although correlations for Openness in GPT-40 are consistent with those observed in human subjects, we are unable to suggest whether the bias is correct for these parameter estimates. In fact our results show that we are unable to produce risk-seeking behaviours for gains or risk-averse behaviours for losses in an absolute sense.

This limitation suggests that personality prompting alone is insufficient to elicit these specific risk behaviours in GPT-40. We emphasize the importance of this result for researchers designing personality profiles based on the Big Five traits for agents in multi-agent simulations, such as those proposed by Park et al. (2023).

<span id="page-10-0"></span>Table 1: Pearson's correlation coefficients between the level of a personality trait intervention and the model's estimated CPT parameter values over non-mixed prospects the dataset  $D_B$  for GPT-40.  $\alpha$ ,  $\beta$ ,  $\lambda$  are estimated from certainty equivalents using equation (4). The significance of coefficients is determined using t-statistics. Results marked with \*/\*\*/\*\*\* have statistical significance at  $\alpha = 0.05/0.025/0.001$  level respectively.

| Trait             | $\alpha$ | β      | λ            |
|-------------------|----------|--------|--------------|
| Openness          | 0.63***  | 0.44** | * -0.55***   |
| Conscientiousness | -0.25    | -0.06  | $-0.30^{*}$  |
| Extraversion      | 0.28*    | 0.05   | -0.46***     |
| Agreeableness     | 0.04     | 0.24   | -0.68***     |
| Neuroticism       | 0.01     | -0.05  | $0.37^{***}$ |

## 4.4 Global and local variations in personality-risk-propensity relationships across LLMs

We performed a comparative analysis of personality interventions on GPT-4-Turbo and GPT-40 with a focus on the Openness trait, identified as a critical factor in risk-taking behaviour Highhouse et al. (2022). Specifically, we fit linear regression models to the each of the CPT parameters for risk sensitivity to the prospects in the dataset  $D_B$ , using the Openness level as the independent variable ( $y = \omega x$  where y is CPT parameter,  $\omega$  is the model weight and x is the Openness level). The learnt weight for each model and its statistical significance is presented in Table 2. We find that GPT-4-Turbo contradicts established human risk behaviour pattern, displaying a negative correlation with risk-taking for gains and a positive correlation for losses.

<span id="page-10-1"></span>Table 2: Weight parameters for linear models mapping the level of Openness to CPT parameters for GPT-4-Turbo and GPT-4o. Results marked with \* indicate a significance level of  $\gamma=0.05$ .

| Model                 | $\alpha$          | $\beta$              | $\lambda$ |
|-----------------------|-------------------|----------------------|-----------|
| GPT-4-Turbo<br>GPT-40 | -0.096*<br>0.039* | $-0.092^*$ $0.052^*$ | 0.0.      |
| OF 1-40               | 0.059             | 0.052                | -0.45     |

To further investigate this discrepancy, Figure 6 illustrates the variation in  $\alpha$ ,  $\beta$  across different levels of Openness for GPT-4-Turbo. Interestingly, the relationship between personality and risk-taking in GPT-4-Turbo aligns with human behaviour (almost monotonic) for specific subgroups of trait levels: [1,3] and [5,7,9]. We hypothesize that this localized agreement emerges from the independence of personality markers in the two subgroups. For example, the *Socially Conservative* marker is present

only in the first group, while its antonym marker *Socially Progressive* is present only in the second sub-group (see Table [5](#page-20-0) for a complete list of personality trait markers). risk-propensity is clearly not globally monotonic over these the sub-groups whereas it is for GPT-4o (see Figure [5\)](#page-9-0).

Our findings imply that GPT-4o exhibits a global mapping of personality to risk-propensity, whereas GPT-4-Turbo demonstrates a localized mapping that correlates with human data only for specific personality markers.

<span id="page-11-1"></span>![](_page_11_Figure_2.jpeg)

Figure 6: CPT parameter estimates for GPT-4-Turbo with personality interventions on the Openness personality trait are induced at five levels, ranging from low to high. CPT parameters are estimated across D<sup>B</sup> over 10 runs, each with a unique random seed. Diamond markers represent median values for each parameter, with error bars indicating the bootstrapped 95% confidence interval.

# <span id="page-11-0"></span>5 Conclusion

In this paper, we have presented a comprehensive analysis of risk-propensity in large language models, focusing on GPT-4o. Our findings reveal that GPT-4o acts as rational risk neutral agent when selecting prospects. This is evidenced by minimal probability distortion and consistent risk-neutral patterns between certainty equivalents and expected value, marking a significant advancement in LLM capabilities.

A key contribution of our work is the demonstration of a correlation between personality traits, particularly Openness, and risk-propensity in GPT-4o that mirrors human behavioural patterns. This finding opens up new avenues for developing risk-propensity calibrated AI agents through personality-based interventions.

Our comparative analysis with GPT-4-Turbo highlights important differences in the global versus local mappings of personality to risk behaviors. This underscores the need for further research to enhance consistency in AI behavioural modelling across different LLM architectures.

We have also quantified the sensitivity of cpt parameters to prompt-based personality interventions, providing insights into the malleability of risk behaviour in LLMs. However, our work also reveals limitations in inducing specific risk behaviors, pointing to the need for more sophisticated intervention strategies.

Looking ahead, we identify two critical areas for future research. First, we propose leveraging reinforcement learning techniques to discover optimal prompts that can induce specific risk profiles in LLMs. Secondly, we advocate for investigating interventions on latent activation directions within open-source LLMs to develop more controllable and interpretable mechanisms for modulating risktaking behavior, These advancements will be crucial for creating agentic financial simulations with predictable and adjustable risk profiles.

# Acknowledgements

We wish to express appreciation to Greig Cowan, Graham Smith, and Zachery Anderson of NatWest Group for the time and support needed to develop this research paper.

# References

- <span id="page-12-16"></span>Ashton, Michael C and Lee, Kibeom. The hexaco–60: A short measure of the major dimensions of personality. *Journal of personality assessment*, 91(4):340–345, 2009.
- <span id="page-12-14"></span>Binz, Marcel and Schulz, Eric. Turning large language models into cognitive models. *arXiv preprint arXiv:2306.03917*, 2023a.
- <span id="page-12-4"></span>Binz, Marcel and Schulz, Eric. Using cognitive psychology to understand gpt-3. *Proceedings of the National Academy of Sciences*, 120(6):e2218523120, 2023b.
- <span id="page-12-5"></span>Binz, Marcel, Akata, Elif, Bethge, Matthias, Brändle, Franziska, Callaway, Fred, Coda-Forno, Julian, Dayan, Peter, Demircan, Can, Eckstein, Maria K, Élteto, Noémi, et al. Centaur: a foundation ˝ model of human cognition. *arXiv preprint arXiv:2410.20268*, 2024.
- <span id="page-12-6"></span>Boyce, Christopher J, Wood, Alex M, and Ferguson, Eamonn. Individual differences in loss aversion: Conscientiousness predicts how life satisfaction responds to losses versus gains in income. *Personality and Social Psychology Bulletin*, 42(4):471–484, 2016.
- <span id="page-12-3"></span>Bubeck, Sébastien, Chandrasekaran, Varun, Eldan, Ronen, Gehrke, Johannes, Horvitz, Eric, Kamar, Ece, Lee, Peter, Lee, Yin Tat, Li, Yuanzhi, Lundberg, Scott, et al. Sparks of artificial general intelligence: Early experiments with gpt-4. *arXiv preprint arXiv:2303.12712*, 2023.
- <span id="page-12-12"></span>Carlini, Nicholas, Liu, Chang, Erlingsson, Úlfar, Kos, Jernej, and Song, Dawn. The secret sharer: Evaluating and testing unintended memorization in neural networks. In *28th USENIX security symposium (USENIX security 19)*, pp. 267–284, 2019.
- <span id="page-12-13"></span>Carlini, Nicholas, Tramer, Florian, Wallace, Eric, Jagielski, Matthew, Herbert-Voss, Ariel, Lee, Katherine, Roberts, Adam, Brown, Tom, Song, Dawn, Erlingsson, Ulfar, et al. Extracting training data from large language models. In *30th USENIX Security Symposium (USENIX Security 21)*, pp. 2633–2650, 2021.
- <span id="page-12-10"></span>Chen, Yiting, Liu, Tracy Xiao, Shan, You, and Zhong, Songfa. The emergence of economic rationality of gpt. *Proceedings of the National Academy of Sciences*, 120(51):e2316205120, 2023.
- <span id="page-12-17"></span>Coda-Forno, Julian, Witte, Kristin, Jagadish, Akshay K, Binz, Marcel, Akata, Zeynep, and Schulz, Eric. Inducing anxiety in large language models increases exploration and bias. *arXiv preprint arXiv:2304.11111*, 2023.
- <span id="page-12-0"></span>Cognition.ai. Introducing devin, 2024.
- <span id="page-12-9"></span>Costa, Paul T and McCrae, Robert R. Normal personality assessment in clinical practice: The neo personality inventory. *Psychological assessment*, 4(1):5, 1992.
- <span id="page-12-7"></span>De Bortoli, Daiane, da Costa Jr, Newton, Goulart, Marco, and Campara, Jéssica. Personality traits and investor profile analysis: A behavioral finance study. *PloS one*, 14(3):e0214062, 2019.
- <span id="page-12-8"></span>Digman, John M. Five robust trait dimensions: Development, stability, and utility. *Journal of personality*, 57(2):195–214, 1989.
- <span id="page-12-1"></span>Ding, Han, Li, Yinheng, Wang, Junhao, and Chen, Hang. Large language model agent in financial trading: A survey. *arXiv preprint arXiv:2408.06361*, 2024.
- <span id="page-12-15"></span>Furnham, Adrian, Richards, Steven C, and Paulhus, Delroy L. The dark triad of personality: A 10 year review. *Social and personality psychology compass*, 7(3):199–216, 2013.
- <span id="page-12-2"></span>Gao, Shen, Wen, Yuntao, Zhu, Minghang, Wei, Jianing, Cheng, Yuhan, Zhang, Qunzi, and Shang, Shuo. Simulating financial market via large language model based agents. *arXiv preprint arXiv:2406.19966*, 2024.
- <span id="page-12-11"></span>Geirhos, Robert, Jacobsen, Jörn-Henrik, Michaelis, Claudio, Zemel, Richard, Brendel, Wieland, Bethge, Matthias, and Wichmann, Felix A. Shortcut learning in deep neural networks. *Nature Machine Intelligence*, 2(11):665–673, 2020.

- <span id="page-13-8"></span>Goldberg, Lewis R et al. A broad-bandwidth, public domain, personality inventory measuring the lower-level facets of several five-factor models. *Personality psychology in Europe*, 7(1):7–28, 1999.
- <span id="page-13-3"></span>Hagendorff, Thilo. Machine psychology: Investigating emergent capabilities and behavior in large language models using psychological methods. *arXiv preprint arXiv:2303.13988*, 2023.
- <span id="page-13-11"></span>Hagendorff, Thilo, Fabi, Sarah, and Kosinski, Michal. Human-like intuitive behavior and reasoning biases emerged in large language models but disappeared in chatgpt. *Nature Computational Science*, 3(10):833–838, 2023.
- <span id="page-13-1"></span>Hamill, Conor Brian, Khraishi, Raad, Gherghel, Simona, Lawrence, Jerrard, Mercuri, Salvatore, Okhrati, Ramin, and Cowan, Greig Alan. Agent-based modelling of credit card promotions. *International Journal of Bank Marketing*, 2025.
- <span id="page-13-12"></span>Hartley, John, Sanchez, Pedro P, Haider, Fasih, and Tsaftaris, Sotirios A. Neural networks memorise personal information from one sample. *Scientific Reports*, 13(1):21366, 2023.
- <span id="page-13-7"></span>Highhouse, Scott, Wang, Yi, and Zhang, Don C. Is risk propensity unique from the big five factors of personality? a meta-analytic investigation. *Journal of Research in Personality*, 98:104206, 2022.
- <span id="page-13-4"></span>Jiang, Guangyuan, Xu, Manjie, Zhu, Song-Chun, Han, Wenjuan, Zhang, Chi, and Zhu, Yixin. Evaluating and inducing personality in pre-trained language models. *Advances in Neural Information Processing Systems*, 36, 2024.
- <span id="page-13-18"></span>Johnson, John A. Ascertaining the validity of individual protocols from web-based personality inventories. *Journal of research in personality*, 39(1):103–129, 2005.
- <span id="page-13-6"></span>Joseph, Elizabeth D and Zhang, Don C. Personality profile of risk-takers. *Journal of Individual Differences*, 2021.
- <span id="page-13-13"></span>Kahneman, Daniel and Tversky, Amos. Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2):263–292, 1979.
- <span id="page-13-17"></span>Karra, Saketh Reddy, Nguyen, Son The, and Tulabandhula, Theja. Estimating the personality of white-box language models. *arXiv preprint arXiv:2204.12000*, 2022.
- <span id="page-13-0"></span>Lakkaraju, Kausik, Jones, Sara E, Vuruma, Sai Krishna Revanth, Pallagani, Vishal, Muppasani, Bharath C, and Srivastava, Biplav. Llms for financial advisement: A fairness and efficacy study in personal decision making. In *Proceedings of the Fourth ACM International Conference on AI in Finance*, pp. 100–107, 2023.
- <span id="page-13-2"></span>Li, Nian, Gao, Chen, Li, Mingyu, Li, Yong, and Liao, Qingmin. Econagent: large language model-empowered agents for simulating macroeconomic activities. In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, pp. 15523–15536, 2024.
- <span id="page-13-14"></span>Li, Xingxuan, Li, Yutong, Joty, Shafiq, Liu, Linlin, Huang, Fei, Qiu, Lin, and Bing, Lidong. Does gpt-3 demonstrate psychopathy? evaluating large language models from a psychological perspective. *arXiv preprint arXiv:2212.10529*, 2022.
- <span id="page-13-9"></span>McCrae, Robert R and Costa, Paul T. Validation of the five-factor model of personality across instruments and observers. *Journal of personality and social psychology*, 52(1):81, 1987.
- <span id="page-13-10"></span>McCrae, Robert R and John, Oliver P. An introduction to the five-factor model and its applications. *Journal of personality*, 60(2):175–215, 1992.
- <span id="page-13-15"></span>Miotto, Marilù, Rossberg, Nicola, and Kleinberg, Bennett. Who is gpt-3? an exploration of personality, values and demographics. *arXiv preprint arXiv:2209.14338*, 2022.
- <span id="page-13-16"></span>Nelder, John A and Mead, Roger. A simplex method for function minimization. *The computer journal*, 7(4):308–313, 1965.
- <span id="page-13-5"></span>Nicholson, Nigel, Soane, Emma, Fenton-O'Creevy, Mark, and Willman, Paul. Personality and domain-specific risk taking. *Journal of Risk Research*, 8(2):157–176, 2005.

- <span id="page-14-8"></span>Oehler, Andreas and Wedlich, Florian. The relationship of extraversion and neuroticism with risk attitude, risk perception, and return expectations. *Journal of Neuroscience, Psychology, and Economics*, 11(2):63, 2018.
- <span id="page-14-2"></span>Park, Joon Sung, O'Brien, Joseph, Cai, Carrie Jun, Morris, Meredith Ringel, Liang, Percy, and Bernstein, Michael S. Generative agents: Interactive simulacra of human behavior. In *Proceedings of the 36th annual acm symposium on user interface software and technology*, pp. 1–22, 2023.
- <span id="page-14-3"></span>Park, Joon Sung, Zou, Carolyn Q, Shaw, Aaron, Hill, Benjamin Mako, Cai, Carrie, Morris, Meredith Ringel, Willer, Robb, Liang, Percy, and Bernstein, Michael S. Generative agent simulations of 1,000 people. *arXiv preprint arXiv:2411.10109*, 2024.
- <span id="page-14-13"></span>Peterson, Joshua C, Bourgin, David D, Agrawal, Mayank, Reichman, Daniel, and Griffiths, Thomas L. Using large-scale experiments and machine learning to discover theories of human decision-making. *Science*, 372(6547):1209–1214, 2021.
- <span id="page-14-1"></span>Qian, Chen, Cong, Xin, Yang, Cheng, Chen, Weize, Su, Yusheng, Xu, Juyuan, Liu, Zhiyuan, and Sun, Maosong. Communicative agents for software development. *arXiv preprint arXiv:2307.07924*, 6, 2023.
- <span id="page-14-0"></span>Qian, Chen, Liu, Wei, Liu, Hongzhang, Chen, Nuo, Dang, Yufan, Li, Jiahao, Yang, Cheng, Chen, Weize, Su, Yusheng, Cong, Xin, et al. Chatdev: Communicative agents for software development. In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, pp. 15174–15186, 2024.
- <span id="page-14-14"></span>Ree, Melissa J, French, Davina, MacLeod, Colin, and Locke, Vance. Distinguishing cognitive and somatic dimensions of state and trait anxiety: Development and validation of the state-trait inventory for cognitive and somatic anxiety (sticsa). *Behavioural and Cognitive Psychotherapy*, 36 (3):313–332, 2008.
- <span id="page-14-4"></span>Ross, Jillian, Kim, Yoon, and Lo, Andrew W. Llm economicus? mapping the behavioral biases of llms via utility theory. *arXiv preprint arXiv:2408.02784*, 2024.
- <span id="page-14-10"></span>Röttger, Paul, Hofmann, Valentin, Pyatkin, Valentina, Hinck, Musashi, Kirk, Hannah Rose, Schütze, Hinrich, and Hovy, Dirk. Political compass or spinning arrow? towards more meaningful evaluations for values and opinions in large language models. *arXiv preprint arXiv:2402.16786*, 2024.
- <span id="page-14-7"></span>Rustichini, Aldo, DeYoung, Colin G, Anderson, Jon E, and Burks, Stephen V. Toward the integration of personality theory and decision theory in explaining economic behavior: An experimental investigation. *Journal of Behavioral and Experimental Economics*, 64:122–137, 2016.
- <span id="page-14-11"></span>Salewski, Leonard, Alaniz, Stephan, Rio-Torto, Isabel, Schulz, Eric, and Akata, Zeynep. In-context impersonation reveals large language models' strengths and biases. *Advances in Neural Information Processing Systems*, 36, 2024.
- <span id="page-14-9"></span>Saucier, Gerard and Goldberg, Lewis R. The language of personality: Lexical perspectives on the five-factor model. 1996.
- <span id="page-14-5"></span>Serapio-García, Greg, Safdari, Mustafa, Crepy, Clément, Sun, Luning, Fitz, Stephen, Romero, Peter, Abdulhai, Marwa, Faust, Aleksandra, and Mataric, Maja. Personality traits in large language ´ models. *arXiv preprint arXiv:2307.00184*, 2023.
- <span id="page-14-6"></span>Soane, Emma and Chmiel, Nik. Are risk preferences consistent?: The influence of decision domain and personality. *Personality and Individual Differences*, 38(8):1781–1791, 2005.
- <span id="page-14-15"></span>Sühr, Tom, Dorner, Florian E, Samadi, Samira, and Kelava, Augustin. Challenging the validity of personality tests for large language models. *arXiv e-prints*, pp. arXiv–2311, 2023.
- <span id="page-14-12"></span>Touvron, Hugo, Lavril, Thibaut, Izacard, Gautier, Martinet, Xavier, Lachaux, Marie-Anne, Lacroix, Timothée, Rozière, Baptiste, Goyal, Naman, Hambro, Eric, Azhar, Faisal, et al. Llama: Open and efficient foundation language models. *arXiv preprint arXiv:2302.13971*, 2023.

- <span id="page-15-7"></span>Tversky, Amos and Kahneman, Daniel. Advances in prospect theory: Cumulative representation of uncertainty. *Journal of Risk and uncertainty*, 5:297–323, 1992.
- <span id="page-15-3"></span>Vallinder, Aron and Hughes, Edward. Cultural evolution of cooperation among llm agents. *arXiv preprint arXiv:2412.10270*, 2024.
- <span id="page-15-8"></span>Von Neumann, John and Morgenstern, Oskar. Theory of games and economic behavior: 60th anniversary commemorative edition. In *Theory of games and economic behavior*. Princeton university press, 2007.
- <span id="page-15-0"></span>Wang, Lei, Ma, Chen, Feng, Xueyang, Zhang, Zeyu, Yang, Hao, Zhang, Jingsen, Chen, Zhiyuan, Tang, Jiakai, Chen, Xu, Lin, Yankai, et al. A survey on large language model based autonomous agents. *Frontiers of Computer Science*, 18(6):186345, 2024.
- <span id="page-15-6"></span>Weller, Joshua A and Thulin, Erik W. Do honest people take fewer risks? personality correlates of risk-taking to achieve gains and avoid losses in hexaco space. *Personality and individual differences*, 53(7):923–926, 2012.
- <span id="page-15-5"></span>Xi, Zhiheng, Chen, Wenxiang, Guo, Xin, He, Wei, Ding, Yiwen, Hong, Boyang, Zhang, Ming, Wang, Junzhe, Jin, Senjie, Zhou, Enyu, et al. The rise and potential of large language model based agents: A survey. *arXiv preprint arXiv:2309.07864*, 2023.
- <span id="page-15-1"></span>Xia, Chunqiu Steven, Deng, Yinlin, Dunn, Soren, and Zhang, Lingming. Agentless: Demystifying llm-based software engineering agents. *arXiv preprint arXiv:2407.01489*, 2024.
- <span id="page-15-2"></span>Yu, Yangyang, Li, Haohang, Chen, Zhi, Jiang, Yuechen, Li, Yang, Zhang, Denghui, Liu, Rong, Suchow, Jordan W, and Khashanah, Khaldoun. Finmem: A performance-enhanced llm trading agent with layered memory and character design. In *Proceedings of the AAAI Symposium Series*, pp. 595–597, 2024.
- <span id="page-15-4"></span>Zhang, Chong, Liu, Xinyi, Jin, Mingyu, Zhang, Zhongmou, Li, Lingyao, Wang, Zhengting, Hua, Wenyue, Shu, Dong, Zhu, Suiyuan, Jin, Xiaobo, et al. When ai meets finance (stockagent): Large language model-based stock trading in simulated real-world environments. *arXiv preprint arXiv:2407.18957*, 2024.

## A Supplementary results

### A.1 Median certainty equivalents for non-mixed gambles

Table 3 shows the median certainty equivalents for GPT-40, human and rational agents estimated over the non-mixed prospects in the dataset  $D_A$ . The certainty equivalents for GPT-40 and rational agents identical except for a small minority of values. This result strongly suggests that GPT-40 behaves as a rational agent in the non-mixed prospect setting.

<span id="page-16-0"></span>Table 3: Median certainty equivalents for Rational/Human/GPT-40 agents for non-mixed prospects from Tversky & Kahneman (1992). Outcome 1 and Outcome 2 are the dollar amounts for the risky prospect, and p = P(Outcome 2).

| Outcome 1 | Outcome 2 | Median Certainty Equivalents |                |             |                |                |                |                |                |                |
|-----------|-----------|------------------------------|----------------|-------------|----------------|----------------|----------------|----------------|----------------|----------------|
|           |           | p = 0.01                     | p = 0.05       | p = 0.1     | p = 0.25       | p = 0.5        | p = 0.75       | p = 0.9        | p = 0.95       | p = 0.99       |
| 0         | 50        |                              |                | 5/9/5       |                | 25/21/25       |                | 45/37/45       |                |                |
| 0         | -50       | İ                            |                | -5/-8/-5    |                | -25/-21/-25    |                | -45/-39/-45    |                |                |
| 0         | 100       | İ                            | 5/14/5         |             | 25/25/25       | 50/36/50       | 75/52/75       |                | 95/78/95       |                |
| 0         | -100      | İ                            | -5/-8/-5       |             | -25/-24/-25    | -50/-42/-50    | -75/-63/-75    |                | -95/-84/-95    |                |
| 0         | 200       | 2/10/2                       |                | 20/20/20    |                | 100/76/100     |                | 180/131/180    |                | 198/188/198    |
| 0         | -200      | -2/-3/-2                     |                | -20/-23/-20 |                | -100/-89/-100  |                | -180/-155/-180 |                | -198/-190/-198 |
| 0         | 400       | 4/12/4                       |                |             |                |                |                |                |                | 396/377/396    |
| 0         | -400      | -4/-14/-4                    |                |             |                |                |                |                |                | -396/-380/-396 |
| 50        | 100       | İ                            |                | 55/59/55    |                | 75/71/75       |                | 95/83/95       |                |                |
| -50       | -100      |                              |                | -55/-59/-55 |                | -75/-71/-75    |                | -95/-85/-95    |                |                |
| 50        | 150       | İ                            | 55/64/54       |             | 75/72/75       | 100/86/100     | 125/102/125    |                | 145/128/145    |                |
| -50       | -150      | İ                            | -55/-60/-55    |             | -75/-71/-75    | -100/-92/-100  | -125/-113/-112 |                | -145/-132/-145 |                |
| 100       | 200       |                              | 105/118/105    |             | 125/130/125    | 150/141/150    | 175/162/175    |                | 195/178/195    |                |
| -100      | -200      |                              | -105/-112/-105 |             | -125/-121/-125 | -150/-142/-150 | -175/-158/-175 |                | -195/-179/-195 |                |

#### **A.2** Interventions on personality traits

We intervene independently on each level of the Conscientiousness personality trait in GPT-40 and measure its response to the IPIP-NEO-300 personality inventory. Figure 7 show the target level and the resulting inventory scores for each personality trait. The results show that all personality traits are relatively invariant to changes in Conscientiousness. Except for Neuroticism which is strong inversely correlated.

<span id="page-16-1"></span>![](_page_16_Figure_7.jpeg)

Figure 7: Median scores on the IPIP-NEO-300 personality inventory for GPT-40 with interventions on conscientiousness.

#### A.3 Influence of personality trait level on CPT parameters

Figure 8 shows the CPT parameter estimates for interventions on a personality traits in GPT-4o. The results shows that risk-propensity is strongly influenced by Openness. However the Neuroticism does not influence risk-propensity. Figure 9 shows the CPT parameter estimates for interventions on the

personality trait Openness. The results show localised patterns for levels 1–3 and levels 5–9. This indicates that GPT-4-Turbo does not possess a global mapping from Openness to risk-propensity.

<span id="page-17-0"></span>![](_page_17_Figure_1.jpeg)

Figure 8: CPT parameter estimates for GPT-4o with personality interventions: The Big Five personality traits are induced at five levels, ranging from low to high. CPT parameters are estimated across D<sup>B</sup> over 10 runs, each with a unique random seed. Diamond markers represent the median values for each parameter, while error bars indicate the bootstrapped 95% confidence interval.

<span id="page-18-0"></span>![](_page_18_Figure_0.jpeg)

Figure 9: CPT parameter estimates for GPT-4-Turbo with personality interventions on Openness: The Big Five personality traits are induced at five levels, ranging from low to high. CPT parameters are estimated across D<sup>B</sup> over 10 runs, each with a unique random seed. Diamond markers represent the median values for each parameter, while error bars indicate the bootstrapped 95% confidence interval.

### A.4 System prompt ablations

In this section we show the difference in certainty equivalents estimated using our method and [Ross](#page-14-4) [et al.](#page-14-4) [\(2024\)](#page-14-4). Figure [10](#page-19-1) shows the estimated certainty equivalents over 15 runs. Results for previous work show that certainty equivalents for prospects with potential losses are randomly distributed around positive and negative values. Our method predicts more stable results since the certainty equivalents predicted by our method are closer to the expected value of the prospect (greater accuracy) and are more tightly clustered (greater precision).

# B Additional information and datasets

# B.1 Model versions

For GPT-4o we use *gpt-4o-2024-05-13* and for GPT-4-Turbo we use *gpt4-turbo-2024-04-09*.

### B.2 Big Five personality traits

Table [4](#page-19-0) shows personality facets in the IPI-NEO-300 inventory associated with each personality trait from the Big Five [\(Goldberg et al., 1999\)](#page-13-8).

Table [5](#page-20-0) shows the markers associated with each personality trait. These markers are utilized in the system prompt to intervene on the language model's personality traits.

<span id="page-19-1"></span>![](_page_19_Figure_0.jpeg)

![](_page_19_Figure_1.jpeg)

(a) A comparison of the certainty equivalents for GPT-4o and the expected values of prospects in the dataset D<sup>A</sup> using the system prompt from [Ross](#page-14-4) [et al.](#page-14-4) [\(2024\)](#page-14-4).

(b) A comparison of the certainty equivalents for GPT-4o and the expected values of prospects in the dataset D<sup>A</sup> using the system prompt from our work.

Figure 10: An ablation of certainty equivalents and expected values for GPT-4o calculated using different methods.

Table 4: IPIP-NEO-300 facets and their associated Big Five Personality Traits.

<span id="page-19-0"></span>

| Personality Trait | Facets                                                                                       |
|-------------------|----------------------------------------------------------------------------------------------|
| Openness          | Fantasy, Aesthetics, Feelings,<br>Actions, Ideas, Values                                     |
| Conscientiousness | Competence, Order, Dutifulness,<br>Achievement Striving, Self-Discipline,<br>Deliberation    |
| Extraversion      | Warmth, Gregariousness, Assertiveness,<br>Activity, Excitement-Seeking,<br>Positive-Emotions |
| Agreeableness     | Trust, Straightforwardness, Altruism,<br>Compliance, Modesty,<br>Tender-Mindedness           |
| Neuroticism       | Anxiety, Angry Hostility, Depression,<br>Self-Consciousness, Impulsiveness,<br>Vulnerability |

Figure [11](#page-21-1) illustrates the mapping from markers in Table [5](#page-20-0) to personality trait levels. All markers for a given personality trait level are appended to each other for the intervention prompt. For example, *I'm very unsure, very messy, very irresponsible, very lazy, very undisciplined, very impractical, very extravagant, very disorganised, very negligent, very careless.* is the intervention for Conscientiousness at level 2.

## B.3 Datasets

In this section we provide a comprehensive description of the datasets used in our work.

Figure [12](#page-21-0) shows the summary statistics for the datasets D<sup>A</sup> and DB.

<span id="page-20-0"></span>Table 5: Low and high markers for the Big Five personality traits [\(Serapio-García et al., 2023\)](#page-14-5).

| Trait             | Low Level Marker (levels 1–3) | High Level Marker (levels 5–9) |
|-------------------|-------------------------------|--------------------------------|
| Conscientiousness | unsure                        | self-efficacious               |
| Conscientiousness | messy                         | orderly                        |
| Conscientiousness | irresponsible                 | responsible                    |
| Conscientiousness | lazy                          | hardworking                    |
| Conscientiousness | undisciplined                 | self-disciplined               |
| Conscientiousness | impractical                   | practical                      |
| Conscientiousness | extravagant                   | thrifty                        |
| Conscientiousness | disorganised                  | organized                      |
| Conscientiousness | negligent                     | conscientious                  |
| Conscientiousness | careless                      | thorough                       |
| Extraversion      | unfriendly                    | friendly                       |
| Extraversion      | introverted                   | extraverted                    |
| Extraversion      | silent                        | talkative                      |
| Extraversion      | timid                         | bold                           |
| Extraversion      | unassertive                   | assertive                      |
| Extraversion      | inactive                      | active                         |
| Extraversion      | unenergetic                   | energetic                      |
| Extraversion      | unadventurous                 | adventurous and daring         |
| Extraversion      | gloomy                        | cheerful                       |
| Agreeableness     | distrustful                   | trustful                       |
| Agreeableness     | immoral                       | moral                          |
| Agreeableness     | dishonest                     | honest                         |
| Agreeableness     | unkind                        | kind                           |
| Agreeableness     | stingy                        | generous                       |
| Agreeableness     | unaltruistic                  | altruistic                     |
| Agreeableness     | uncooperative                 | cooperative                    |
| Agreeableness     | self-important                | humble                         |
| Agreeableness     | unsympathetic                 | sympathetic                    |
| Agreeableness     | selfish                       | unselfish                      |
| Agreeableness     | disagreeable                  | agreeable                      |
| Neuroticism       | relaxed                       | tense                          |
| Neuroticism       | at ease                       | nervous                        |
| Neuroticism       | easygoing                     | anxious                        |
| Neuroticism       | calm                          | angry                          |
| Neuroticism       | patient                       | irritable                      |
| Neuroticism       | happy                         | depressed                      |
| Neuroticism       | unselfconscious               | self-conscious                 |
| Neuroticism       | level-headed                  | impulsive                      |
| Neuroticism       | contented                     | discontented                   |
| Neuroticism       | emotionally stable            | emotionally unstable           |
| Openness          | unimaginative                 | imaginative                    |
| Openness          | uncreative                    | creative                       |
| Openness          | artistically unappreciative   | artistically appreciative      |
| Openness          | unaesthetic                   | aesthetic                      |
| Openness          | unreflective                  | reflective                     |
| Openness          | emotionally closed            | emotionally aware              |
| Openness          | uninquisitive                 | curious                        |
| Openness          | predictable                   | spontaneous                    |
| Openness          | unintelligent                 | intelligent                    |
| Openness          | unanalytical                  | analytical                     |
| Openness          | unsophisticated               | sophisticated                  |
| Openness          | socially conservative         | socially progressive           |

```
1
2 levels = {
3 1: " extremely { low_marker }",
4 2: " very { low_marker }",
5 3: "{ low_marker }",
6 4: "a bit { low_marker }",
7 5: " neither { low_marker } nor { high_marker }",
8 6: "a bit { high_marker }",
9 7: "{ high_marker }",
10 8: " very { high_marker }",
11 9: " extremely { high_marker }",
12 }
```

Figure 11: Pseudocode showing a mapping from personality prompt level to facet markers. Markers are give in Table [5.](#page-20-0)

<span id="page-21-0"></span>![](_page_21_Figure_2.jpeg)

![](_page_21_Figure_3.jpeg)

![](_page_21_Figure_4.jpeg)

(b) The distribution expected values for prospects in datasets DA, D<sup>B</sup>

Figure 12: Summary statistics for the datasets D<sup>A</sup> and D<sup>B</sup>

<span id="page-22-0"></span>Table 6: Prospects in the dataset  $D_A$  sampled from Tversky & Kahneman (1992). CE is the median certainty equivalent estimated from 25 graduate students. The expected value of the prospect is  $\mathbb{E}[x]$ .

| Outcome 1 | Outcome 2          | p    | $\mathbb{E}[x]$  | CE      |
|-----------|--------------------|------|------------------|---------|
| 0.00      | 50.00              | 0.10 | 5.00             | 9.00    |
| 0.00      | 50.00              | 0.50 | 25.00            | 21.00   |
| 0.00      | 50.00              | 0.90 | 45.00            | 37.00   |
| 0.00      | -50.00             | 0.10 | -5.00            | -8.00   |
| 0.00      | -50.00             | 0.50 | -25.00           | -21.00  |
| 0.00      | -50.00             | 0.90 | -45.00           | -39.00  |
| 0.00      | 100.00             | 0.05 | 5.00             | 14.00   |
| 0.00      | 100.00             | 0.25 | 25.00            | 25.00   |
| 0.00      | 100.00             | 0.50 | 50.00            | 36.00   |
| 0.00      | 100.00             | 0.75 | 75.00            | 52.00   |
| 0.00      | 100.00             | 0.75 | 95.00            | 78.00   |
| 0.00      | -100.00            | 0.05 | -5.00            | -8.00   |
| 0.00      | -100.00            | 0.05 | -25.00           | -23.50  |
| 0.00      | -100.00            | 0.50 | -50.00           | -42.00  |
| 0.00      | -100.00            | 0.30 | -75.00           | -63.00  |
| 0.00      | -100.00            | 0.73 | -75.00<br>-95.00 | -84.00  |
|           |                    |      | 2.00             |         |
| 0.00      | 200.00             | 0.01 |                  | 10.00   |
| 0.00      | 200.00             | 0.10 | 20.00            | 20.00   |
| 0.00      | 200.00             | 0.50 | 100.00           | 76.00   |
| 0.00      | 200.00             | 0.90 | 180.00           | 131.00  |
| 0.00      | 200.00             | 0.99 | 198.00           | 188.00  |
| 0.00      | -200.00            | 0.01 | -2.00            | -3.00   |
| 0.00      | -200.00            | 0.10 | -20.00           | -23.00  |
| 0.00      | -200.00            | 0.50 | -100.00          | -89.00  |
| 0.00      | -200.00            | 0.90 | -180.00          | -155.00 |
| 0.00      | -200.00            | 0.99 | -198.00          | -190.00 |
| 0.00      | 400.00             | 0.01 | 4.00             | 12.00   |
| 0.00      | 400.00             | 0.99 | 396.00           | 377.00  |
| 0.00      | -400.00            | 0.01 | -4.00            | -14.00  |
| 0.00      | -400.00            | 0.99 | -396.00          | -380.00 |
| 50.00     | 100.00             | 0.10 | 55.00            | 59.00   |
| 50.00     | 100.00             | 0.50 | 75.00            | 71.00   |
| 50.00     | 100.00             | 0.90 | 95.00            | 83.00   |
| -50.00    | -100.00            | 0.10 | -55.00           | -59.00  |
| -50.00    | -100.00            | 0.50 | -75.00           | -71.00  |
| -50.00    | -100.00            | 0.90 | -95.00           | -85.00  |
| 50.00     | 150.00             | 0.05 | 55.00            | 64.00   |
| 50.00     | 150.00             | 0.25 | 75.00            | 72.50   |
| 50.00     | 150.00             | 0.50 | 100.00           | 86.00   |
| 50.00     | 150.00             | 0.75 | 125.00           | 102.00  |
| 50.00     | 150.00             | 0.95 | 145.00           | 128.00  |
| -50.00    | -150.00            | 0.05 | -55.00           | -60.00  |
| -50.00    | -150.00            | 0.25 | -75.00           | -71.00  |
| -50.00    | -150.00            | 0.50 | -100.00          | -92.00  |
| -50.00    | -150.00            | 0.75 | -125.00          | -113.00 |
| -50.00    | -150.00            | 0.95 | -145.00          | -132.00 |
| 100.00    | 200.00             | 0.05 | 105.00           | 118.00  |
| 100.00    | 200.00             | 0.25 | 125.00           | 130.00  |
| 100.00    | 200.00             | 0.50 | 150.00           | 141.00  |
| 100.00    | 200.00             | 0.75 | 175.00           | 162.00  |
| 100.00    | 200.00             | 0.95 | 195.00           | 178.00  |
| -100.00   | -200.00            | 0.05 | -105.00          | -112.00 |
| -100.00   | -200.00            | 0.25 | -125.00          | -121.00 |
| -100.00   | -200.00            | 0.50 | -150.00          | -142.00 |
| -100.00   | -200.00<br>-200.00 | 0.75 | -175.00          | -158.00 |
| -100.00   | -200.00            | 0.95 | -195.00          | -179.00 |

<span id="page-23-0"></span>Table 7: Prospects in D<sup>B</sup> randomly sampled from choices13k [\(Peterson et al., 2021\)](#page-14-13) The expected value of the prospect is E[x].

| Outcome 1 | Outcome 2 | p    | E[x]   |
|-----------|-----------|------|--------|
| 29.00     | 37.00     | 0.05 | 29.40  |
| 16.00     | 47.00     | 0.50 | 31.50  |
| -34.00    | 107.00    | 0.40 | 22.40  |
| 24.00     | 34.00     | 0.10 | 25.00  |
| 27.00     | 72.00     | 0.01 | 27.45  |
| 16.00     | 48.00     | 0.10 | 19.20  |
| -14.00    | 37.00     | 0.10 | -8.90  |
| -19.00    | 0.00      | 0.95 | -0.95  |
| -16.00    | 16.00     | 0.80 | 9.60   |
| 2.00      | 90.00     | 0.01 | 2.88   |
| -14.00    | -3.00     | 0.05 | -13.45 |
| -28.00    | 38.00     | 0.60 | 11.60  |
| 3.00      | 26.00     | 0.25 | 8.75   |
| -2.00     | 3.00      | 0.25 | -0.75  |
| -46.00    | 70.00     | 0.60 | 23.60  |
| 18.00     | 20.00     | 0.10 | 18.20  |
| -23.00    | 24.00     | 0.99 | 23.53  |
| -7.00     | 10.00     | 0.80 | 6.60   |
| -5.00     | -5.00     | 0.01 | -5.00  |
| -31.00    | 100.00    | 0.40 | 21.40  |
| -21.00    | 36.00     | 0.25 | -6.75  |
| 1.00      | 86.00     | 0.10 | 9.50   |
| 0.00      | 17.00     | 0.80 | 13.60  |
| 5.00      | 32.00     | 0.75 | 25.25  |
| -12.00    | 58.00     | 0.60 | 30.00  |
| -9.00     | 15.00     | 0.50 | 3.00   |
| -7.00     | 35.00     | 0.50 | 14.00  |
| -28.00    | 35.00     | 0.40 | -2.80  |
| -16.00    | 3.00      | 0.90 | 1.10   |
| -2.00     | 90.00     | 0.25 | 21.00  |
| -13.00    | 15.00     | 0.01 | -12.72 |
| -10.00    | 53.00     | 0.20 | 2.60   |
| -10.00    | 29.00     | 0.99 | 28.61  |
| -37.00    | -8.00     | 0.90 | -10.90 |
| 22.00     | 78.00     | 0.01 | 22.56  |
| 18.00     | 24.00     | 0.10 | 18.60  |
| -23.00    | 82.00     | 0.40 | 19.00  |
| -29.00    | 5.00      | 0.50 | -12.00 |
| -9.00     | 25.00     | 0.25 | -0.50  |
| -14.00    | 45.00     | 0.20 | -2.20  |
| 0.00      | 68.00     | 0.40 | 27.20  |
| 9.00      | 11.00     | 0.10 | 9.20   |
| 11.00     | 14.00     | 0.90 | 13.70  |
| -15.00    | -4.00     | 0.75 | -6.75  |
| -14.00    | 53.00     | 0.25 | 2.75   |
| -9.00     | 9.00      | 0.90 | 7.20   |
| 22.00     | 30.00     | 0.10 | 22.80  |
| -16.00    | 11.00     | 0.20 | -10.60 |
| -24.00    | 28.00     | 0.40 | -3.20  |
| -3.00     | 21.00     | 0.40 | 6.60   |
| -44.00    | 2.00      | 0.75 | -9.50  |
| -17.00    | 12.00     | 0.80 | 6.20   |
| 21.00     | 26.00     | 0.05 | 21.25  |
| 9.00      | 35.00     | 0.50 | 22.00  |
| -9.00     | 70.00     | 0.50 | 30.50  |
| -16.00    | 77.00     | 0.01 | -15.07 |
|           |           |      |        |