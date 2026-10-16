# Read the evidence at its actual scope

Jeremy Rodgers · Independent Researcher

Version 1.4 · 16 October 2026

DOI: https://doi.org/10.5281/zenodo.23408737

Web edition: /consciousness/relational-awareness/module-g

## Evidence for the current relational scene {#section-7}

A comparison answer is the beginning of the investigation. The Ebbinghaus case connects a concrete visual arrangement, a continuing human capacity and a response deadline to a current relational scene. This chapter develops the complete empirical argument and tests what its measurements can establish.

The central application concerns an ordinary human comparison of two currently available visual targets. Its evidence has several layers: the experimental arrangement and stored task rule, an appearance-directed response, an interpretation of the current scene and its use, and a separate claim about the act’s constitution. Keeping those layers explicit permits a positive current-appearance conclusion without turning a response code into a phenomenal detector. The other experiments below constrain physical processing, temporal interpretation and candidate generalizations. They do not substitute for the constitutive argument. The empirical analyses and computational checks described below are those reported in the publication; this web edition preserves their outcomes and provenance.

### 7.1 Identifying a measurement model without identifying appearance {#section-7-1}

Multiple indicators can identify a restricted latent measurement model even when their error rates are initially unknown. The binary case supplies an elementary instance of established latent-class identification (Allman et al., 2009); its phenomenal interpretation is a further question.

Let $Z\in\{0,1\}$ have prevalence $p\in(0,1)$ and let three binary indicators $W_1,W_2,W_3$ be mutually independent conditional on $Z$. Set

$$
f_j=\Pr(W_j=1\mid Z=0),\qquad s_j=\Pr(W_j=1\mid Z=1),\qquad d_j=s_j-f_j>0.
$$

The positive orientation removes latent-label permutation, but does not give $Z$ an independent phenomenal meaning. Write $m_j=\mathbb E W_j$, $C_{jk}=\operatorname{Cov}(W_j,W_k)$, and $T=\mathbb E\prod_{j=1}^{3}(W_j-m_j)$.

#### Proposition 7.1: Three-indicator inversion {#proposition-7-1}

Under these premises,

$$
m_j=f_j+d_jp,\qquad C_{jk}=d_jd_kp(1-p),\qquad T=d_1d_2d_3p(1-p)(1-2p).
$$

If all three pair covariances are positive, put

$$
r=\frac{T}{\sqrt{C_{12}C_{13}C_{23}}},\qquad p=\frac12\left(1-\frac{r}{\sqrt{r^2+4}}\right).
$$

Then

$$
\begin{aligned}
d_1&=\sqrt{\frac{C_{12}C_{13}}{C_{23}p(1-p)}},\\
d_2&=\sqrt{\frac{C_{12}C_{23}}{C_{13}p(1-p)}},\\
d_3&=\sqrt{\frac{C_{13}C_{23}}{C_{12}p(1-p)}},
\end{aligned}
$$

and $f_j=m_j-d_jp$, $s_j=f_j+d_j$ uniquely recover the oriented parameters. Recovered endpoints must lie in $[0,1]$ to be feasible probabilities.

**Proof.** Write $W_j-m_j=d_j(Z-p)+\epsilon_j$, where $\mathbb E(\epsilon_j\mid Z)=0$. Conditional independence removes mixed residual terms for distinct indices. The pair and triple centred moments therefore reduce to products of the $d_j$ times $\mathbb E(Z-p)^2=p(1-p)$ and $\mathbb E(Z-p)^3=p(1-p)(1-2p)$. Hence $r=(1-2p)/\sqrt{p(1-p)}$ and $r/\sqrt{r^2+4}=1-2p$, yielding the formulas. The seven nonconstant moments of a binary triple determine its eight-cell joint distribution. Feasible recovered parameters reproduce those moments and thus that distribution.

The inversion includes $p=1/2$, where $T=0$. It is singular at degenerate prevalence or uninformative channels and unstable near those cases. There are seven model parameters and seven observable degrees of freedom. A fit to one triple does not independently validate its conditional-independence or causal interpretation.

Transport across conditions provides additional restrictions only if the conditional channels remain fixed. Define product distributions

$$
A(w)=\prod_j f_j^{w_j}(1-f_j)^{1-w_j},\qquad B(w)=\prod_j s_j^{w_j}(1-s_j)^{1-w_j}.
$$

Then $Q_p=(1-p)A+pB$. Once a nondegenerate condition identifies $A,B$, new condition laws must lie on this one segment; a candidate prevalence predicts the whole joint law without new emission parameters. Direct subtraction gives

$$
\operatorname{TV}(Q_p,Q_q)=|p-q|\operatorname{TV}(A,B).\tag{33}
$$

If each actual conditional emission differs from its frozen version by at most $\epsilon$ in total variation, convexity bounds the actual mixture’s deviation by $\epsilon$. Two candidate predictions with respective full-channel uncertainty $\epsilon_1,\epsilon_2$ have disjoint permitted neighborhoods whenever

$$
|p-q|\operatorname{TV}(A,B)>\epsilon_1+\epsilon_2.
$$

Sampling uncertainty is additional. Dependence or omitted-source effects cannot be folded into a small drift bound without independent support. Failure of a transported segment restriction challenges the latent-and-measurement package, not just its proposed manifestation premise.

#### The common access gate {#common-access-gate}

Consider one fixed physical source with early relational representation $E$, access/retention gate $G$, and later available representation $C=EG$, all binary. Generate each $W_j$ independently conditional on $C$, with the same $f_j,s_j$. An early manifestation assignment associates appearance with $E=1$; a later one associates it with $C=1$. Neither assignment changes the source distribution, readout kernel or noise parameters. Their complete observable laws, and any equally specified physical intervention laws, are identical. Adding further indicators downstream of $C$ does not change that equivalence.

For independent $E,G$ of prevalences $e,g$, the moment method identifies $p_C=eg$, even under the early assignment whose appearance prevalence is $e$. Conditioning on early appearance leaves the shared gate:

$$
\Pr(W_j=1\mid E=1)=f_j+d_jg,\qquad\operatorname{Cov}(W_i,W_j\mid E=1)=d_id_jg(1-g).
$$

Conditioning on $C$ instead removes that gate and gives the declared conditional independence. Independent hardware noise therefore does not imply independence conditional on actual experience. Imposing the latter as an unearned appearance-facing premise can silently select the later assignment. Exact latent identification supplies a response/access class; independent target-sensitive warrant is still required to interpret it as occurrence. This construction is synthetic, not a fitted claim about any participant or a denial of early experience.

### 7.2 The archived Ebbinghaus experiment {#section-7-2}

Whitwell et al. (2023) compared size judgments, manual estimates and grasps using two centre discs surrounded by annuli of different sizes. The initial semi-formal staircase established each participant’s physical size difference $\delta$ at which the differently surrounded discs looked equal. In the public archived sample, $\delta$ ranges from 1 to 4 mm. Subsequent displays were of two kinds: physically unequal discs arranged to look equal (the experiment’s S configuration), and physically equal discs arranged to look different (D). These are experimental configuration labels, not independently measured appearance labels for each trial.

The response contingency assigned “same” to one side for each participant; “different” selected the other side. Board orientation varied. A trial illuminated the pair for five seconds, during which the participant sampled the discs and responded. Eye position was sampled at 250 Hz and hand position at 100 Hz. The manual-estimation and grasp blocks measured an aperture for the disc selected by the preceding comparative judgment. The keypress block supplied the comparative judgment without that subsequent aperture. The five-second procedure is the procedure relevant here; an earlier open-loop grasp experiment discussed in the article is a different protocol.

The reanalysis uses the primary article, supplementary methods and public archive. The archived `Project_Files.zip` was recovered from the authors’ OSF view-only link, with SHA256 verified against the retrieved repository metadata. The source link is the authors’ publicly linked OSF archive. The recovered ZIP is 11,463,667 bytes, with SHA256

`ceef912e09e79a6e3bccf291faf4a9c54f743e2a715e82fa878b2864283c73cd`.

It contains 19 participant folders. The article reports 24 recruits and the supplement describes four dismissals in the initial staircase; these records do not supply an independently verified explanation of the remaining difference. No missing participant or trial was invented. The archive is an external reproduction input, not a new experiment or a redistributed private research record.

#### Table 2: The variables used, and what they measure {#table-2}

| Archive component | Variables and interpretation |
| --- | --- |
| Condition table | Participant-specific task and trial indices; physical left/right disc and annulus classes; S/D configuration; target and chosen-side metadata; correctness and rejection flags. Trial numbering is local to task. |
| Response-contingency table | Preassigned same-left/right rule and initial verbal point of subjective equality, in millimetres. |
| Keypress table | Task, trial, left/right choice and response time from illumination, in milliseconds. |
| Processed hand records | Final manual aperture or peak grasp aperture, indexed by task and trial. These are selected-target motor measurements. |
| Eye records | Fixation counts, durations and switches during preparation and execution. They do not directly label covert attention or phenomenal tokens. |

### 7.3 A physical-only nomination and its retrospective status {#section-7-3}

The nominated application is participant 2nU4ew, keypress task 3, trial 3. Both centre discs have physical diameter 30 mm. The left disc is surrounded by the large annulus and the right by the small annulus. The preassigned rule is same-left. The continuing source acquisition and comparison arrangement, task, trial, physical source columns and pretrial rule qualified the case under the native-human visual predicate $V$. Current choice, correctness, the S/D label and any current experience predicate were excluded from the selection decision.

A record predicting current relational appearance by comparison uptake was saved before the separately recorded outcome reinspection. Its saved SHA256 is

`33535f709fc5000c52471cd3c57c3e3e4ef81ea596e096ea1baab7766715ae59`.

This records a commitment in the analysis sequence. It is not evidence of blinding: the archive had already been audited, and the parser read the entire condition table, including output columns, before projecting the source-only columns. The selection did not use those columns, but unused is not unread. The application is consequently retrospective, not an untouched holdout, prospective prediction or numerical validation of $V$.

The application reads three named members under `Project_Files/`, with the following SHA256 values:

| Archive member | SHA256 |
| --- | --- |
| `Condition_Files/2nU4ew_conditions.txt` | `142df942ef5010db29669e8eea1a8ae14d826a621e0f18537944ef12f3730053` |
| `Response_Contingencies_Verbal_2AFC/response_contingencies_and_verbal_2AFC_results.txt` | `39c6a43f612e7ed4e1a47e4031962ca5edfb6b35319a83f15268329bf6c91d1f` |
| `Keypress_RTs_and_Choices/2nU4ew.txt` | `6c214d0e5f7d55fcc3a5e13d2093589e0ec132f5ba9f0d8c840c28331b7a9eab` |

Reinspection returned a right choice at 2645 ms after illumination. The choice agrees between the condition and keypress records. Under the preassigned rule, its instructed meaning is that the centre-disc sizes look different. Physical diameters are equal. The observed answer is therefore relevant to comparative appearance, rather than evidence that the participant accurately estimated unequal physical diameters. An incorrect physical-size judgment is compatible with actual appearance; correctness was not an eligibility condition.

The occurrence projection has an independently specified antecedent: a materially continuing human visual acquisition/comparison organization, the optical and apparatus configuration, persistent paired-source availability, preloaded task contingency, and source-dependent sampling and comparison history. The documented sensory-task calibration comprises the initial verbal staircase, varied physical diameters and annuli, and appearance-directed instructions. It supports the sensory comparison interpretation; it is not an independent jointness or basing probe. Earlier trial 2 identifies the retrospective nomination sequence, not a separately measured joint-appearance anchor. Neither “currently seeing” nor “genuine current acquaintance” is used to select this new token. This is a narrow induction to the same native capacity exercise, not a rule for arbitrary machines, every integrated circuit, every physiological state, or every instantaneous phase of a trial.

### 7.4 From an answer to a current relational appearance {#section-7-4}

There are three distinct interpretive steps. First, the protocol asks how the discs look, and records an answer to that question while the sources remain available. The earlier contextual staircase and source-sensitive task history support the ordinary interpretation of a sensory comparison, rather than an arbitrary motor tag or a calculation of physical diameter.

Second, the minimum relational target is two qualitative apparent-size counterparts presented in a spatial or comparative arrangement. It does not require an additional irreducible “different” sensation, perceptual fusion of the discs, or veridicality. The ordinary current-scene interpretation of a simple paired visual encounter supports this togetherness defeasibly: the subject compares these apparent targets within their supplied spatial layout. The keypress code alone does not entail that interpretation. The experiment did not separately ask whether both counterparts were simultaneously presented.

A concrete serial-only alternative preserves the records: acquire one target’s appearance, retain a bounded magnitude/spatial descriptor, acquire the other, and compare the descriptors while never presenting a qualitative pair together. Ordinary comparisons of separately viewed objects can proceed this way. Its coherent possibility does not establish that it occurred in this simple current-pair setting. Documented serial-only strategy, source bypass with a credible denial of a current pair-scene, or other evidence of inference-only performance would weaken the current-scene interpretation. Serial eye sampling alone would not: later inspection may present a new pair. If it does, that new current field meets the target, even if earlier acquisition was wholly nonphenomenal.

Third, interpreting the comparison as using the presented pair is stronger than accepting occurrence. Source-directed instructions, calibration and ordinary task performance support the interpretation of an active visual comparison. They are not a separate intervention demonstrating that the qualitative relation caused the keypress. Passive appearance accompanying an automated answer remains a different challenge from serial-only appearance. The main argument defends the act interpretation and its mode placement separately; this archive provides no direct basing probe or anatomical bearer measurement.

### 7.5 The deadline is by uptake, not at stimulus onset {#section-7-5}

Let $t_0$ be illumination, $j$ the current comparison uptake supporting the answer, and $r$ its recorded response time. Under the ordinary current-acquaintance interpretation, a suitable relational appearance occurs by $j$, with $j\le r$. For the nominated trial, $r-t_0=2.645\,\mathrm{s}$, within the five-second illumination. The measured quantity is the response time. The additional appearance deadline depends on the interpretation of what the subject is doing then.

It follows neither that appearance began at $t_0$, nor that it was continuous across eye movements, nor that an earlier neural integration event was its first bearer. A bounded descriptor may be retained and first reconstructed as a qualitative pair at current inspection $J$. Such delayed construction satisfies the current-third target. A response latency is not an independent clock for phenomenal onset, and the formal finalization bounds elsewhere in the supplement do not change that.

### 7.6 Exploratory transfer of local reader maps {#section-7-6}

The archive also permits a restricted comparison between independently nominated observable reader maps. This analysis concerns the relation between selected-disc apertures and later pair judgments, not direct measurement of a phenomenal metric. The original article excludes illusion-inconsistent judgments from its main kinematic/gaze analyses. The transfer analysis retains errors in its test outcomes.

Three schema checks are consequential. Forty-eight incorrect-choice D rows have a stored chosen-size value incompatible with the physical disc on the recorded chosen side: 21 grasp, 12 manual-estimation and 15 keypress rows. Physical classes were reconstructed from side and display columns. The contingency table disagrees with the planned target-side rule for six participants. The primary subset uses the 13 concordant-rule participants, 308 keypress trials; a condition-rule analysis of all 19 is only a sensitivity analysis. One participant’s keypress file is malformed and another has a single cross-file left/right disagreement. The stricter cross-file subset contains 283 trials from 12 participants. Errors are retained there too. One participant has 20 rather than 24 keypress records; absent trials are not imputed. The reproduction outputs identify every included case and conflict.

Two simple fixed predictors are informative. Physical equality uses real diameter. The contextual predictor subtracts the earlier staircase $\delta$ from the diameter of the large-annulus-surrounded disc, and uses a half-$\delta$ equality tolerance. No test keypress response fits this map. In the concordant subset, the contextual map agrees with 282/308 judgments (91.56%), versus 26/308 (8.44%) for physical equality. In the stricter subset it agrees with 259/283 (91.52%). This restricts a context-free diameter-to-equality reader for these appearance-directed answers. It is neither a new discovery of the illusion nor a rejection of physical diameter as a motor-control variable.

For a separate scalar transfer, define four selected-target cell means $\widehat\mu_{s,k}$ per participant and task, where $s$ indexes real size and $k$ annulus class. Only D aperture trials with available aperture and zero stored rejection flag enter calibration; incorrect judgments are included. Eleven manual and twenty grasp incorrect D source trials remain usable. No S aperture trial, test keypress output or outcome-correctness filter trains these means. Each test display receives the distance

$$
d=\left|\widehat\mu_{s_L,k_L}-\widehat\mu_{s_R,k_R}\right|,
$$

and smaller $d$ predicts a same judgment. AUC evaluates the ranking without fitting a test threshold, giving ties half credit. The specified mean-reader hypothesis also predicts an ordering: S distance should be below both D distances. Positive affine recoding preserves this ordering.

The mean paired AUC difference is 0.39255. The checks use pseudorandom seed 20261011, 10,000 participant resamples and then 5,000 nested resamples. Within a nested resample, each selected local cell is resampled with replacement at its original cell count before its mean and test distance are recomputed. Resampling participants conditional on fixed local means gives a descriptive 95% percentile interval [0.17985, 0.61691]. Resampling both participants and their local selected-cell observations instead gives mean bootstrap difference 0.22751 and interval [−0.03984, 0.48245], which includes zero. These intervals are conditional on observed keypress outcomes and judgment-selected calibration cells. Neither repairs selection bias or provides prospective validation.

#### Table 3: Exploratory transfer to independently recorded pair judgments {#table-3}

Local calibration cells contain only two to four selected observations.

| Diagnostic, 13 concordant participants | Manual | Grasp |
| --- | ---: | ---: |
| S distance below both D distances | 12 | 5 |
| S distance above both D distances | 1 | 6 |
| Mixed or tied ordering | 0 | 2 |
| Mean participant AUC | 0.842 | 0.449 |
| Median-calibrated reader AUC | 0.771 | 0.513 |
| Stricter cross-file test subset AUC | 0.830 | 0.482 |

The selection dependency prevents a stronger interpretation. The global judgment determines which disc supplies the aperture; judgment or a shared retained descriptor can influence the later manual estimate. Source and test blocks are different episodes with different control demands. A physically specified contextual descriptor can drive judgment, target selection and manual aperture, while grasp uses diameter plus a motor margin. A constructor can first present the pair during current inspection. This architecture needs neither a retained movie nor independent local phenomenal calibration. The observed AUC difference thus supports a restricted readout-map transfer, not latent-field identification, same-token passive restriction, or a proof that grasp lacks consciousness.

### 7.7 A public feature-binding control and a restricted mixture test {#section-7-7}

Crayen et al. (2024) varied foveal and peripheral motion in a continuous-report paradigm. Participants reported the direction associated with a cued peripheral colour. Coherent central motion produces binding and misbinding conditions; ambiguous central motion provides another control. Connected, disconnected and yellow–blue layouts vary the configuration. Their geometrical comparison also changes eccentricity; it is not an isolated manipulation of continuity.

The public GRO.data release, DOI [10.25625/2RIA04](https://doi.org/10.25625/2RIA04), version 2.0, supplies 162 participant-condition summaries: 18 participants, three layouts and three motion conditions. The recovered `PERFORMANCE.txt` matches its repository checksum and is CC0. It contains mean performance, not trial direction marginals, trial counts, response latencies or histories. Consequently the following is a retrospective participant-level diagnostic, not a trial-level binomial fit or a measured phenomenal-error rate.

Consider a restricted selection model. With probability w, a coherent central direction governs the answer, giving accuracy 1 in binding and 0 in misbinding. Otherwise a common residual route succeeds with probability u. In the ambiguous condition the central route selects the correct direction with probability exactly 1/2, while w and u remain fixed across the three conditions. Its predictions are

$$
b=w+(1-w)u,\qquad m=(1-w)u,\qquad a=\tfrac12w+(1-w)u=\tfrac12(b+m).
$$

The midpoint restriction is therefore testable without treating w as a probability of consciousness. For participant $i$, set $e_i=a_i-(b_i+m_i)/2$. Paired t diagnostics use 17 degrees of freedom and Holm adjustment over the three midpoint tests. The estimates are:

#### Table 4: A diagnostic of the exact equal-probability midpoint restriction {#table-4}

| Layout | Mean $e$ (percentage points) | $t(17)$ | Raw $p$ | Holm $p$ |
| --- | ---: | ---: | ---: | ---: |
| Connected | −0.9724 | −0.6144 | 0.5471 | 0.5471 |
| Disconnected | −1.6014 | −1.6944 | 0.1084 | 0.2169 |
| Yellow–blue | −2.8551 | −2.7280 | 0.0143 | 0.0429 |

The yellow–blue mean has a 95% t interval of [−5.0633, −0.6470] percentage points. It conflicts with this restricted midpoint account under the participant-summary assumptions. Estimated $w=b-m$ is negative for two individuals in each of the connected and disconnected layouts and four in yellow–blue, another warning against reading each unconstrained estimate as a literal mixture probability. Allowing condition-dependent residual performance, unequal ambiguous selection, carryover or different histories relaxes the midpoint restriction. The result rejects neither every selection account nor bounded reconstruction, and does not locate joint appearance in the measured dynamics.

A second paired diagnostic compares the binding advantage across the two geometrical layouts. For participant i, form

$$
k_i=(b_{i,\mathrm{connected}}-m_{i,\mathrm{connected}})-(b_{i,\mathrm{disconnected}}-m_{i,\mathrm{disconnected}}).
$$

Its mean is 9.31673 percentage points, with 95% t interval [5.55207, 13.08139], t(17) = 5.22135 and two-sided p = 0.00006914. This is a configuration-sensitive performance contrast in the same 18 participant summaries. Since layout and eccentricity covary, it does not isolate continuity or identify a change in phenomenal togetherness.

### 7.8 Perturbation and sensory construction {#section-7-8}

#### Vernier integration and TMS {#vernier-integration}

Scharnowski et al. (2009) presented opposite-offset verniers for 30 ms each at one location. Participants judged the lower bar’s offset relative to the upper bar. Initial sign was randomized and pulse timing blocked and counterbalanced. Early occipital pulses favoured the second offset; later pulses favoured the first, through approximately 370 ms after onset. Single-vernier threshold controls, frontal stimulation and a focal-coil variant restricted particular artifacts and sites. The original experiment involved five participants; the frontal control involved four new participants. Small samples, common phosphenes, threshold sensitivity and connected-tissue effects limit anatomical interpretation. The full primary report and appendices were read; no trial-level TMS data were reanalysed.

The intervention establishes temporal susceptibility of retained relational processing. It does not measure first appearance at the pulse. A compact information restriction makes the distinction precise. Let balanced initial sign $S\in\{-1,+1\}$ influence retained physical state $Z$; let exogenous pulse $A$ act through a common downstream response kernel $K_A(Y\mid Z)$. If the two conditional $Z$ laws coincide, every pulse yields $\Pr(Y=S\mid\operatorname{do}(A))=1/2$. More generally data processing gives

$$
\operatorname{TV}\!\left(\operatorname{Law}(Z\mid S=+1),\operatorname{Law}(Z\mid S=-1)\right)\ge\left|2\Pr(Y=S\mid\operatorname{do}(A))-1\right|.
$$

This rules out complete sign erasure under the stated sufficiency and balance premises. It does not require two stored images: retain $Z=S$, one bit, and report $Y=S$ with pulse-dependent probability $p(A)$. Opposite second sign is then already determined. This fixed mechanism can reproduce any sign-dominance profile in this limited response family. No numerical human total-variation bound or fit is claimed.

#### Sequential neural decoding {#sequential-decoding}

Menétrey et al. (2026) released EEG and task material for sequential metacontrast. The repository inventory and selected source code were inspected; small behavioural MAT files were recovered and their table schemas examined, but opaque MATLAB table values were not decoded. Raw EEG, the full multi-gigabyte archive and participant decoding arrays were not downloaded or fitted. The inspected preprocessing includes condition, physical direction, response, correctness, time and reaction-time variables. Published late decoding uses correctness. For signed target $S$ and response $Y$, correctness $SY$ is not the direction content $S$ or $Y$; a classifier may carry agreement, certainty or decision quality. Fixed response mapping also aliases reported direction with motor choice. These are limits on interpretation, not a failed replication. A new direction/error-controlled analysis could test information mechanisms, but cannot distinguish appearance assignments sharing the entire physical law.

#### Cortical construction {#cortical-construction}

Beauchamp et al. (2020) used sequential electrical stimulation to produce reported forms in sighted and blind participants. Retinotopic receptive-field geometry in sighted participants provided one prediction route; measured phosphene locations provided another. These routes should not be conflated: phosphene calibration already uses experience reports. Spontaneous drawings before letter-label training support a sensory-form interpretation beyond mere learned naming. Dynamic/static comparisons concern the tested stimulation patterns and tasks, not every possible pair of currents or a universal capacity for static fusion.

Bosking et al. (2022) investigated multielectrode percepts and their spatial organization. Patterns containing separate reported phosphenes are relevant to minimum qualitative copresentation even without fusion into a recognizable shape. Their primary report and relevant pattern methods were inspected, together with the 2020 construction report. A stimulation schedule, retinotopic predictions and reported spatial patterns support causal content production by native visual organization. They do not identify the exact microphysical transition matrix, measure every instant of the reported field, or alone establish that the stimulated supplier is the whole experience-inclusive act. Complete microphysics is not a condition of the main macro-level inference; content supply is nonetheless distinct from constitution.

Parvizi et al. (2012) provides a further specific perturbation: electrical stimulation of human fusiform face-selective regions distorted face perception. Its value here is selective causal involvement in experienced content, not a general detector of relational appearance or proof that the stimulated population exclusively bears it.

### 7.9 Reports during REM sleep {#section-7-9}

Konkoly et al. (2021) demonstrated real-time communication with dreamers during physiologically staged REM sleep using prearranged signals and new questions. Arithmetic success establishes contingent communication; it is not by itself the specified sensory relational target. LaBerge et al. (2018) measured smooth tracking of dreamt visual targets, comparing lucid dreaming with waking perception and imagination. A moving single target and pursuit physiology do not by themselves establish two qualitative counterparts co-present in a field. The further inference from an actually presented, spatially resolved target is assessed in [Section 10.1](/consciousness/relational-awareness/module-j#section-10-1); it uses additional appearance testimony rather than pursuit geometry.

Konkoly et al. (2026) used separate sniffing codes for dream visual presence/absence and dream-eye status. Eleven participants produced 150 REM-time signals; an additional signal rater was blind to initial ratings, dream reports and cues. The larger recruited sample was 13. Later narratives include relational scenes, but the online vocabulary encoded visual availability and eye status rather than the particular relations. Relevant methods, signal scoring and limitations were inspected from the author PDF; supplementary materials were not recovered and raw participant data were not analysed. Healthy-participant data and scripts are request-only; the narcolepsy data cannot be shared.

If a recorded signal completes at $b$ before awakening $w$, and its initiating judgment $j$ genuinely reports current vision, then some visual appearance occurs by $j\le b<w$. Presleep meaning, pre-awakening recording and blind signal scoring improve that current-report warrant. They do not separately place the narrative’s fingers/wall or person/cart relation at the binary signal. Nor do they exclude first presentation during dream-time inspection rather than earlier uninspected dream activity. This is a useful deadline for current visual appearance before awakening, not an estimate of first dream-scene onset or a calibrated bearer test.

### 7.10 Grouping, report-independent accumulation and motor correction {#section-7-10}

Vogelsang et al. (2024) investigated subjective grouping in sequential metacontrast alongside offset integration. Colour/grouping descriptions were collected around the experiment, with alternating-colour descriptions repeated at its beginning and end; they were not online onset stamps. Subjective segregation can coexist with measured feature integration. Numerical integration, phenomenal grouping and minimum joint presentation are therefore different targets. Two distinct objects may still appear together.

Stockart et al. (2025) compared immediate detection, delayed detection/confidence and passive viewing with intracranial high-gamma measures. Faces embedded for 600 ms produced accumulation-related activity during passive viewing too. Delayed reports occurred at least 1300 ms after face onset. The main methods and relevant results/discussion were inspected; the reported preregistration deviations and alternatives involving sensory encoding, covert decisions and task carryover remain relevant. Such activity cannot be identified exclusively with execution of an immediate keypress. Persistence without that keypress does not establish independence from every decision process or phenomenal onset at a decoder crossing.

The public OSF repository was inventoried before any proposed fitting. Seven small behavioural CSVs from one selected participant/session were recovered and matched repository hashes. Two passive blocks each contained 48 trials, a passive control 12, three delayed blocks 59 each, and an immediate/staircase block 40. Passive fields labelled physical high/low intensity; detection, response and response-time fields were missing and confidence was coded −1. Delayed blocks contained detection outcomes, confidence and response times. Thus passive “seen/unseen” or hit-like labels are not independent trial-level experience observations. The restored preregistration also records previously collected data and an accidentally deleted earlier file; its restored upload timestamp is not an independently verified original preregistration date. No raw neural arrays or full analysis code were replicated. These checked schemas restrict a proposed analysis, not the authors’ published neural results.

A shared physical accumulator can retain threshold status, a template index and confidence-relevant summary. A constructor can first present content at immediate or delayed inspection. The model needs neither a retained movie nor postponed early computation. If two interpretations share the full measured law, a better accumulator fit cannot choose their phenomenal assignment. Face detection also does not separately measure a specified joint relation between qualitative parts.

Merritt et al. (2017) compared online reach corrections in Parkinson’s disease and controls, with small and large target jumps and a separate displacement-judgment task. Corrections occurred under both access conditions. The judgment task was not a simultaneous trial-specific report of each reach’s scene. This result prevents generic successful online correction from identifying a current experience-inclusive act. An appearance-directed repair would require independent calibration of the operative comparative error and its role in correction. No such new intervention was performed here.

### 7.11 Affective counterparts and the limits of modality extension {#section-7-11}

Quevedo and Coghill (2009) studied synchronized five-second thermal stimulation in 13 participants, with hidden viewed sites, psychophysical calibration, intensity/unpleasantness scales and one/two-disconnected/two-connected pain classifications. The primary methods and relevant filling-in, radiation and connectivity results were inspected. Reported two-site or connected pain patterns support ordinary qualitative spatial testimony; they are not direct measurements of a nominated constitutive neural population. Classification followed overall rating, so it does not establish earliest presentation. Relative site-specific aversive pull, a relation’s intrinsic motive and actual relief priority were not measured. The philosophical distinction between unpleasantness, evaluative significance and actual desire matters here (Bain, 2019; $M$ørch, 2019). Neither a reported pain geometry nor an invented priority controller demonstrates that qualitative relations possess the controller’s causal powers.

These affective and dream cases broaden the evidence for native sensory capacities and sharpen temporal questions. They do not extend the physically delimited visual predicate $V$ to all modalities, sleeping states or artificial implementations. Each extension requires its own independently specified regime and appearance warrant.

### 7.12 What the combined evidence licenses {#section-7-12}

The archived case supports, at an ordinary defeasible phenomenological and testimonial level, a currently presented qualitative pair and relation by comparison uptake. Native-kind induction is physically specified and the current-scene interpretation is explicit. The transfer analysis restricts selected observable maps; the binding control rejects an exact restricted midpoint model; interventions and no-report results constrain particular physical processing accounts. None is a direct observation of literal mode placement. That further conclusion rests on the independently defended concrete-performance/mode principle and its actual application in the main paper. Earlier absence followed by a new current $J$ field is compatible with this scoped result. Serial-only presentation, passive accompaniment and exclusive bearer must be assessed at their distinct inferential steps rather than combined into one unspecified alternative.
