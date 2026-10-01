# Section 1: Question and contributions

<!-- Complete paper-3 web edition. Mathematical macros used below:
\topfraction = .92
\bottomfraction = .85
\textfraction = .08
\floatpagefraction = .78
\E = \mathcal E
\HH = \mathcal H
\BB = \mathcal B
\one = \mathbf 1
\RRC = \textsf{RRC}
\RJC = \textsf{RJC}
\iid = i.i.d.
\SuiteFixtures = 48
\SuiteSlots = 1,152
\UniqueSlots = 1,140
\CalibrationOverlapSlots = 79
\CalibrationOverlapUnique = 74
\SharedCalls = 442,368
\SharedResets = 55,296
\TrainCalls = 7,680
\CalibrationCalls = 1,536
\EvidenceCalls = 9,216
\RPass = 1063
\SPass = 1063
\PPass = 970
\OPass = 869
\BPass = 1053
\RMean = 0.054913
\SMean = 0.054918
\PMean = 0.099072
\OMean = 0.152015
\BMean = 0.064684
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\rad = \operatorname{rad}
\argmin = \operatorname{arg\,min}
-->

<a id="section-1"></a>

## 1 Question and contributions

<a id="sec:intro"></a><a id="p3:c01"></a> Replacing a subsystem by a smaller model is useful only insofar as the replacement preserves behavior that later interactions can expose. A queue can appear empty while retaining a delayed message; a service can return the correct first answer while forgetting that its only resource has been spent; two outputs can have correct marginal distributions and an incorrect joint law. These are reasons to evaluate an interface through complete interaction histories rather than isolated predictions. They do not, however, prescribe an algorithm that will learn such an interface from a finite observation budget.

The distinction between a specification of adequacy and successful identification is familiar in probabilistic verification and system identification. Reactive automata learning already combines observed input–output behavior with formal model analysis <a id="citation-1"></a>[[12](/consciousness/research/paper-3/references#bib-Mao2012MDP), [13](/consciousness/research/paper-3/references#bib-MaoJaeger2012)]. Our contribution is not to claim this distinction as a new general principle. We give a source-preserved sequence of computational tests in which progressively plausible repairs can be compared, and failures can sometimes be localized more sharply than by a single predictive score.

The motivating contract comes from a companion theoretical paper <a id="citation-2"></a>[[16](/consciousness/research/paper-3/references#bib-RodgersPaper2)]. Its robust joint-candidate diagnostics (RJC) distinguish joint information, native execution and resource-relative simulation; its robust relational-composition analysis (RRC) specifies conditions for substituting an effective process in a matching causal context. The broader psychophysical programme is developed in the monograph <a id="citation-3"></a>[[17](/consciousness/research/paper-3/references#bib-RodgersSPC2)]. The present paper imports only the operational adequacy obligations. An adequate predictive model and a certified marked source quotient are different objects; the companion's awareness interpretation is not part of this study.

We examine four opaque-interface identification stages, denoted OII-1 through OII-4, after a known-model implementation-conformance stage, RRI. The stages have different cohorts, acquisition allocations and candidate families. They are not replications of one unchanged design, and their scores must not be read as a controlled longitudinal learning curve. The final OII-4 study is the principal matched endpoint: all eight reported methods use one common fitting/calibration tape per fixture and the same scored laws. Earlier stages supply the failure-driven development and the analytical diagnoses.

Three findings organize the paper. First, the tested standard automata/hidden-state portfolio improves several aggregate metrics over the tree controls on the final suite, but not every mechanism family. Second, adding two group-aware automata candidates is not needed to reproduce the broad improvement: the prespecified secondary portfolio without them has essentially identical outcomes. Third, an elementary post-reveal capacity check rules out literal architectural insufficiency for the final targets, while the original fitting procedure still misses adequate candidates. A new, separately labeled optimization-sensitivity analysis shows that increased fitting effort repairs a material part of that gap. It also exposes continuing selection failures and more specific challenge-response errors. These findings separate architectural existence from finite-budget candidate production and public-data selection.

The unit of evidence is important. A complete-law test slot is not an independent Bernoulli trial. A fresh generator instance is not necessarily tested under an unseen policy specification. Exact oracle scores are withheld from the learner, but some evaluation specifications also occur in public calibration. We report those overlaps, the original primary and secondary method designations, the severe regressions, and the preserved pre-score repairs. These qualifications delimit the result; they are not reasons to hide the study's useful finite conclusions.

All primary performance values derive from the frozen evidence package <a id="citation-4"></a>[[15](/consciousness/research/paper-3/references#bib-RodgersEvidence)]. Manuscript assembly corrected the description of the hidden-state fitting limit: the original code uses at most 60 iterations with early stopping. The subsequent methodological audit independently reconstructed the OII-4 law evaluations from saved sources and parameters and extended the retrospective context audit from literal descriptions to complete finite policy behavior. Those audit stages did not refit learners. The present revision adds 360 separately stored post-hoc fits after a local protocol lock, using the existing public tapes and without changing any original model, primary score or weight. The 11 failures were selected using known original outcomes, so this sensitivity is not a fresh blind experiment. Its own candidate selections were committed before the new core evaluations.

<a id="source-figure-1"></a>

![Figure 1](/publications/consciousness/paper-3/figures/figure-1.svg)

   

Figure 1. The evidence boundary. The actual learners are restricted software programs, not independently reasoning AI investigators. Withheld source laws allow postcommit evaluation; they are not supplied as training targets or as oracle rankings for model selection.

 <a id="fig:pipeline"></a> 



<a id="paragraph-1"></a>

#### Organization.

 [Section 2](/consciousness/research/paper-3/operational-contract-and-measures#sec:contract), [Section 3](/consciousness/research/paper-3/study-design-and-preserved-evidence#sec:design) define the contract and study design. [Section 4](/consciousness/research/paper-3/final-matched-state-learning-comparison#sec:final), [Section 5](/consciousness/research/paper-3/capacity-produced-candidates-and-selection#sec:capacity) present the frozen matched comparison and its capacity/production/selection diagnosis; [Section 6](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#sec:sensitivity) reports the separate post-hoc strengthening. [Section 7](/consciousness/research/paper-3/why-the-earlier-repair-stages-did-not-close-discovery#sec:development) condenses the earlier repair studies. [Section 8](/consciousness/research/paper-3/adversarial-contexts-composition-and-uncertainty#sec:adversarial) addresses witnesses, operational twins and composition. [Section 9](/consciousness/research/paper-3/related-work-reproducibility-and-external-validity#sec:related) positions the methods and specifies reproducibility and external-validity limits. The appendices provide executable method details, separate historical tables, analytical controls and provenance.
