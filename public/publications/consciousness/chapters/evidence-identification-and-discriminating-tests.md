# Chapter 23: Evidence, identification, and discriminating tests

<!-- Revised edition, 28 October 2026. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="ch:evidence"></a> 

<a id="section-23-1"></a>

## 23.1 One joint experiment, several kinds of claim

<a id="section:evidence:one-joint-experiment-several-kinds-of-claim"></a> A first-person report and a neural or computational measurement are different access routes to the research question, but they are not automatically independent data. Both may depend on attention, memory, preparation, the task, and prior instructions. The appropriate statistical object is a joint law under a specified intervention, not a direct sum that assumes independence without evidence.

For physical latent state $x$, proposed phenomenal state $\phi$, intervention $i$, physical measurement $n$, and report $r$, one possible schema is <a id="eq:jointdata"></a>


$$

P(n,r\mid i)=\int P(n\mid x,i)Q(r\mid\phi,x,i)
\,\mu({\,\mathrm d}\phi\mid x,i)P({\,\mathrm d} x\mid i).

$$

Equation (23.1).

 The displayed factorization is a model assumption, not a universal law. In a strict SPC-2 realization, $\mu$ is the point assignment induced by the predictive profile, and $Q$ must agree with the supplied physical report channel. A more general rival may use a different latent structure. Comparing them requires fixing which channels and conditional independences are independently constrained.

A datum should therefore carry at least its experimental condition, its physical measurement procedure, its report procedure, and its uncertainty. An interpretation such as “awareness remained while the ego disappeared” adds a claim about the relationship between these variables. It should not replace the original report. Preserving the distinction allows the data to challenge the interpretation rather than merely repeat its vocabulary.



<a id="section-23-2"></a>

## 23.2 Descriptor adequacy before ontological inference

<a id="section:evidence:descriptor-adequacy-before-ontological-inference"></a> The scalar aperture theorem provides a useful first test. Freeze a descriptor $p$, an independently nominated target $r$, and a tolerance. Repeated preparations estimate whether conditions with the same $p$ nevertheless differ in $r$. Under verified error bounds, a sufficiently large within-fibre contrast rejects the asserted bridge. This is more informative than fitting a new decoder to every discrepancy.

With continuous descriptors, exact equality of fibres is usually not directly observable. A practical test must specify neighborhoods and regularity. Suppose the proposed bridge is $L$-Lipschitz and observed descriptor values differ by at most $\eta$, with target errors at most $\epsilon$ and model error at most $\delta$. Then a pair must satisfy 

$$

|\widehat r_i-\widehat r_j|\le L\eta+2\delta+2\epsilon.

$$

 Violation rejects that calibrated Lipschitz bridge, not all conceivable bridges. The constants cannot be selected after observing the violation without changing the test.

For distributional reports, use a declared probability distance and compare complete distributions rather than single outcomes. A missing report may be one of the outcomes. Physical instrument error, finite-sample uncertainty, and the hypothesized approximation error have different sources and should not be merged into an unexplained residual term. A purported consciousness estimator that has not established those distinctions has not yet earned an ontological interpretation.



<a id="section-23-3"></a>

## 23.3 Finite witness calibration

<a id="section:evidence:finite-witness-calibration"></a> A nominated report feature can sometimes be represented by a finite observable witness. The evaluation matrix in [Theorem 10.2](/consciousness/monograph/internal-representation-and-self-referential-records#thm:robust-witness) makes the issue concrete: full column rank provides uniqueness, while its smallest singular value controls sensitivity. A nearly singular design can fit observations while leaving the inferred witness extremely unstable.

Consequently calibration should choose preparations that distinguish the candidate observable directions and should report conditioning, not only fit error. Positivity and actual physical recordability remain separate constraints. A Hermitian solution of the linear equations is not automatically an accessible measurement in the realized apparatus. A centralizer solution is not automatically a stable memory under actual dynamics.

The measurement constructions provide a principled way to carry apparatus error into such an identification exercise. A bound on the complete retained quantum state can control errors in nominated expectations; a historical archive bound controls whether an earlier declaration is still faithfully displayed. These estimates are not interchangeable. The end-to-end link is useful precisely because it keeps the physical cost of evidence visible.



<a id="section-23-4-revised"></a>

## 23.4 Sequential certification and justified separation

<a id="sec:sequential-certification-update"></a> The exact boundary problem is sensitive to the distinction between arbitrarily small influence and zero influence. Allowing an assay to continue adaptively does not in general remove that difficulty. Suppose every finite complete-transcript law converges in total variation to the zero-parameter law as a positive coupling tends to zero. If a sequential rule has probability at most $\alpha$ of ever issuing a finite “exactly zero” certificate in every positive-parameter world, its probability of issuing that certificate at zero is also at most $\alpha$ <a id="citation-revised-81"></a>[[13](/consciousness/monograph/bibliography#bib-RodgersIntegration2026)]. For the event $A_m$ of issuance by call $m$, finite-prefix continuity gives $P_0(A_m)\le\alpha$; increasing $m$ gives the claim for issuance at any finite time. No bound on expected stopping time is needed.

A justified positive separation changes the problem. In the masked encoder of <a id="citation-revised-82"></a>[[50](/consciousness/monograph/bibliography#bib-RodgersBoundaries2026)], prepare $b=0$ independently on each reset and retain its complete two-bit output. A nominated outcome has probability $\varepsilon/2$ and is impossible at zero. For $0<\alpha<1$ and $0<\varepsilon_{\min}\le1$, under the promise $\varepsilon=0$ or $\varepsilon\ge\varepsilon_{\min}$, stop positively at its first occurrence and otherwise declare zero after 

$$

n=\left\lceil\frac{\log\alpha}{\log(1-\varepsilon_{\min}/2)}\right\rceil

$$

 trials. The false-positive probability at zero is zero and the miss probability on the promised positive family is at most $\alpha$. The preparation, reset independence, complete output access and gap are substantive premises. A physically justified resolution can support a constructive assay; it does not silently replace A1's exact rule with another psychophysical law. Conversely, a certification limit is an evidential limitation, not a verdict that a subject is absent or that a discontinuous constitution is false.



<a id="section-23-4-1"></a>

### 23.4.1 Certified margins and unresolved boundaries

 <a id="sec:boundary-evidence-intervals"></a> The robustness results also support positive, bounded reports of what the evidence establishes <a id="citation-revised-83"></a>[[50](/consciousness/monograph/bibliography#bib-RodgersBoundaries2026), Section 7]. Fix registered supports, native schedule catalogues, root comparisons, cut lists, clocks and resource-constrained simulator classes. For this nominated operational diagnostic, let $\mathcal F_{\tau,\rho}(P)$ contain supports with one common schedule giving return contrast greater than $\rho$ and every registered cut radius greater than $\tau$. These are diagnostic thresholds, not new phenomenal boundaries.

Suppose each schedule has at most $H$ calls, the initial laws agree, and every matching complete joint instrument row has error at most $\epsilon\in[0,1]$. The bound must hold jointly for all nominated preparations, schedules and cut comparisons, with the simulator families kept fixed. Set $\beta_H=1-(1-\epsilon)^H$. The existing causal-history bound gives return-error at most $2\beta_H$ and cut-radius error at most $\beta_H$. Hence 

$$

\widehat{\mathcal F}_{\tau+\beta_H,\rho+2\beta_H}
\subseteq\mathcal F_{\tau,\rho}(P)
\subseteq
\widehat{\mathcal F}_{\tau-\beta_H,\rho-2\beta_H}.

$$

 The left family certainly meets the nominated diagnostic; supports outside the right family are excluded under its contract; intermediate cases remain unresolved. More generally, a nonempty justified model class $\mathcal U$ yields the inner family $\bigcap_{P\in\mathcal U}\mathcal F(P)$ and outer family $\bigcup_{P\in\mathcal U}\mathcal F(P)$. A statistical confidence statement transfers only if the actual model lies in that class on its stated confidence event.

This gives the evidence a definite output even when a sharp assignment cannot be certified. Overlapping candidates still require a subject-selection law, and uncertainty about the model is not ontic indeterminacy of subjects. Failure to establish qualification is also not evidence of an actual A3 qualification gap. An improved analysis or a shorter observation window cannot retroactively end an episode.



<a id="section-23-4"></a>

## 23.5 What A2 would have to match

<a id="section:evidence:what-a2-would-have-to-match"></a> To assess the relational content law, an experience-facing structure must be specified without simply defining it as the computed predictive profile. One might nominate pairwise discrimination relations, reported similarity, temporal succession judgments, or a carefully selected family of contrasts. Those observations have their own report channels and need not exhaust phenomenology.

The test is then whether one fixed structural identification accounts for the nominated relations under held-out interventions. A2 cannot be validated merely by constructing a copy of the physical profile and naming it phenomenal. The mathematical copy proves conditional realizability. Agreement with independently measured structure is the additional empirical claim.

The full-profile version of A2 has both an advantage and a cost. It preserves information that a single distance loses, including labeled transitions and distinctions between protocols. But its richness can make it difficult to falsify unless the physical realization and comparison map are tightly specified. Enlarging the profile after each failure can turn a theory into a succession of post hoc descriptions. A meaningful test freezes the relevant structure and identifies in advance which mismatch would count against it.



<a id="section-23-6-revised"></a>

## 23.6 Current relational appearance and its bearer

<a id="sec:current-relational-appearance"></a> The later relational-awareness work supplies a positive, scoped argument for current human appearance rather than another conditional structural assignment <a id="citation-revised-84"></a>[[45](/consciousness/monograph/bibliography#bib-RodgersRelationalAwareness2026)]. Its target is a presentation in which qualitative counterparts and their relation appear together. This need not fuse earlier subjects or preserve their original phenomenal tokens. A new current construction can present counterparts together, and a sufficiently resolved spatial form can have relational aspects without two separately named objects.

Five questions are kept distinct: whether the target occurs, whether its counterparts are jointly presented, whether the appearance is the sensory way of the nominated activity, when it occurs, and which concrete performance bears it. In a materially continuing native-human visual comparison, sensory calibration, source-sensitive task history and ordinary appearance-directed evidence support a defeasible projection of current relational presentation. A response code alone is no direct jointness or sensory-basing measurement. First construction at current uptake is consistent with the target; the claim does not require first appearance during an earlier integration stage.

A further corrected concrete-performance principle supports placing the literal qualitative mode in the independently tracked performance, at its specified phase and with actual executing contributors included. Its motivation is continuity of the concrete act across its material, skilled and experiential descriptions: a new property vocabulary does not itself establish another instantiator. The rule distinguishes performers from suppliers, copied products, indicators and enclosing regions. A remote executor may need inclusion; a concurrent appearance need not be the sensory basis of an automated answer. Thus the attribution can require revision even when input and output agree.

If $A=P$ reidentifies the experience-inclusive act with the independently nominated physical performance and $\operatorname{Mode}(Q,A,\tau)$ attributes its qualitative way, identity substitution gives $\operatorname{Mode}(Q,P,\tau)$. Causes, containment or contribution alone do not license that substitution. The substantive philosophical work lies in the reidentification premise. A genuinely exclusive experiential bearer can accept the same appearance, activity and physical likelihoods while denying it. The argument therefore supplies a defended constitutive preference, not an ontology-neutral consequence of the mathematics.

The paper's retrospective contextual-size illustration makes the warrants inspectable but is not prospective validation. Jointness and sensory basing lack dedicated probes in that archive. Its current-appearance inference neither establishes first onset nor independently validates A2, fixes the smallest tissue bearer, or transfers to machines by matched outputs. Its contribution is nevertheless affirmative: credible appearance-facing evidence and corrected performance reasoning can support an actual current bearer attribution while exposing the particular premises on which it depends.

The supplement also separates descriptive compatibility from a common occurrence witness. Pairwise jointly presented contributions do not establish that every contribution belongs to one field: different pairs can have different witnesses. Within a finite same-token representation, requiring unions of intersecting jointly admitted sets is equivalent to requiring disjoint maximal ownership domains. That *Fusion* condition is an explicit ownership commitment. Neither interaction, overlapping contents nor compatible local descriptions establishes it. Similarly, a current grounded appearance can be the sensory basis of an activity without a physical reason vehicle being its literal bearer; faithful transmission can generate a new current field. These distinctions reinforce the separate realization, incorporation and individuation obligations of the monograph.



<a id="section-23-7"></a>

## 23.7 Prospective tests of uptake and reflective authority

 <a id="sec:prospective-enactment-tests"></a> The programme has positive claims to investigate: currently available information can become an interpreted contribution to an ongoing activity, and an acquired understanding can change which content governs action. Their evidential development requires selective comparisons. The following designs extend the companion papers' research programmes; they are proposed studies, not completed experiments or additional admission conditions <a id="citation-revised-85"></a>[[62](/consciousness/monograph/bibliography#bib-RodgersWholeField2026), [45](/consciousness/monograph/bibliography#bib-RodgersRelationalAwareness2026), [49](/consciousness/monograph/bibliography#bib-RodgersReflectiveAlignment), [42](/consciousness/monograph/bibliography#bib-RodgersConstitutedAgency)].



<a id="section-23-7-1"></a>

### 23.7.1 Current uptake against availability and replay

 Start with a materially continuing adult comparison in which the participant's sensory activity and the relevant source relation are independently specified. Keep the source features, retained records and response alternatives matched while varying the route by which those records enter the current comparison. Compare live contextual use, an addressable but unread archive, serial inference, an independently automated answer and delayed reconstruction. A replay can match the recorded response sequence while failing to enact the represented comparison's dependence on currently varied inputs. This tests the represented organization, not whether its executing apparatus contains any qualifying perspective.

Predeclare separate outcomes for source accuracy, joint relational appearance, sensory basing, functional transfer and later recall. Ask whether counterparts appeared together, and separately whether that presentation informed the comparison. An accurate key response does not answer either question. Nor should a misleading contextual appearance count as no appearance merely because it misrepresents source magnitude. Counterbalance the motor mapping and independently alter later retrieval; these controls separate an earlier presentation from its expression and recollection. Include sparse-report and nonverbal conditions to assess effects of monitoring, without treating the absence of a report as an independent observation of experience or its absence.

The causal comparison should interrupt a nominated incorporation route while preserving reception and the retained record, then restore that route. Source-binding perturbations test whether the activity uses the contribution as a live estimate, predecessor or recollection, rather than merely responding to matching values. Fresh source changes, correction and transfer test the declared interpretation. Sham and off-target interventions measure nonspecific impairment. Effects on gain, motor output or report alone should be assigned to those routes. A successful selective disruption and rescue would support the claimed incorporation mechanism; its experiential significance still depends on the independently warranted appearance evidence and constitutive argument <a id="citation-revised-86"></a>[[62](/consciousness/monograph/bibliography#bib-RodgersWholeField2026), Sections 3–4]<a id="citation-revised-87"></a>[[45](/consciousness/monograph/bibliography#bib-RodgersRelationalAwareness2026), Sections 5–7].



<a id="section-23-7-2"></a>

### 23.7.2 Reflective authority against suppression and impairment

 Begin with finite controllers whose generative, authority and corrective pathways are independently known. Match cue-driven salience, information, preparation, permissions and resources; randomize the occasions on which the corrective pathway is interrupted and restored. The scalar comparison in Section [22.5](/consciousness/monograph/artificial-systems-embodiment-and-recursive-cognition#sec:ai:reflective-alignment) predicts a route-specific difference under its stated preparation. An aggregate zero mean is insufficient: opposing conditional biases can cancel. Estimate signed bias within predeclared cue strata, alongside variance, absolute error, salience and response latency. Fit mechanisms on preparation data and assess predictions on untouched cases <a id="citation-revised-88"></a>[[49](/consciousness/monograph/bibliography#bib-RodgersReflectiveAlignment), Section 13.5].

For a model implementation, nominate candidate representations and pathways on separate data before testing them. Establish that useful self-related information remains retrievable and usable, that evidence-sensitive decisions and protective distinctions remain intact, and that the proposed authority change transfers to unfamiliar cases. Include warranted retention under misleading social pressure as well as warranted revision. A controller that always agrees, refuses or stops does not satisfy those joint objectives. Neither a fluent explanation nor a neutral output write establishes that acquired understanding mediated the result. Actual model-read and installation interventions, followed by fresh-case probes and specific restoration, distinguish these routes <a id="citation-revised-89"></a>[[42](/consciousness/monograph/bibliography#bib-RodgersConstitutedAgency), Sections 9–11].

Preservation and rescue have complementary roles. Preserved factual discrimination and task competence argue against generalized impairment; restoring a selectively interrupted channel tests the proposed cause of the observed difference. Both require specificity checks. If one intervention also removes legitimate evaluation, its result cannot identify reduced automatic authority. Compare strong ordinary reflective training, matched neutral activity and equal-artifact reasoning with the same evidence and budgets. Equal causal organization and dynamics merit equal functional credit regardless of acquisition method.

Predeclare accuracy, warranted disagreement, inappropriate refusal, permission-sensitive conduct, transfer, uncertainty and resource costs. Retain failures, missing outcomes and intervention side effects; inherited memory and common training lineage do not create independent replications. These comparisons can strengthen or defeat particular claims about enacted uptake and reflective self-governance. They can also support a revised attribution within a nominated realization. They do not distinguish rivals stipulated to have identical complete experimental laws, and they do not make reflective competence necessary for the minimal perspectives admitted by A1.



<a id="section-23-5"></a>

## 23.8 Conservativity and the limits of a report test

<a id="section:evidence:conservativity-and-the-limits-of-a-report-test"></a> The conservativity theorem prevents an exaggerated empirical promise. If every physical transition and report channel is already fixed, adding the aspect interpretation changes none of their probabilities. Therefore a purely physical transcript cannot discriminate the resulting model from its physical reduct solely by the added assertion of awareness.

This does not make all research within the framework empty. The choice of $R^\ast$, the adequacy of a reduced descriptor, the declared internal boundaries, and the mapping to independently elicited phenomenal relations can make substantive, vulnerable claims. Their tests may reject a particular application or motivate a revised law. What they cannot do is manufacture a difference between two models whose entire admitted transcript laws have been assumed identical.

A stronger empirical theory could add a specific independently measurable psychophysical constraint or identify a physical mechanism omitted by the current reduct. It would then have to state how that addition changes predictions or restricts admissible realizations. Such a proposal is not supplied merely by saying that consciousness must have a purpose or that a real property must appear as extra energy. An intrinsic aspect and an independent dynamical component are different theoretical possibilities.



<a id="section-23-9"></a>

## 23.9 Learning a model and identifying its realization

 <a id="sec:update-interface-learning"></a> The later opaque-interface study makes the implementation obligation experimentally concrete in finite software models <a id="citation-revised-90"></a>[[47](/consciousness/monograph/bibliography#bib-RodgersLearning2026)]. Representational capacity, candidate production, public-data selection and validation coverage are different achievements. In its original 48-system comparison, every target has an exact parameterization in the nominated general 16-state instrument family. The executed fitting bank nevertheless contains an individually passing candidate for 39 systems, and calibration selection retains one for 37. Passing here means meeting the fixed complete-law test panel at total-variation tolerance $0.15$, not satisfying every native continuation or a consciousness criterion.

A separately reported post-hoc expansion of fitting effort repairs five of the 11 originally selected failures and produces a passing individual candidate on seven. These subset results preserve the original study rather than replacing it. They show that a finite search failure can be budget-sensitive even when the representation already has sufficient capacity. More computation is not uniformly beneficial after selection, and a witness excluding an old finite bank does not exclude newly produced models in the same architecture.

These are the companion paper's reported computational findings. The underlying empirical archives for that study are not part of this edition's verification supplement. Their role here is methodological: a successful fitted service model does not by itself establish the source's physical component algebra, strong actual-state quotient, native resource ownership, or A1–A3 application. Conversely, a failed chosen predictor need not show that the target organization cannot be represented. Identification should state which of these obligations has actually been met.



<a id="section-23-6"></a>

## 23.10 A concrete research sequence

<a id="section:evidence:a-concrete-research-sequence"></a> For a first non-toy domain, the most defensible sequence is to fix a limited experimental repertoire and an independently grounded report feature family, identify a candidate physical model, and use held-out conditions to test descriptor sufficiency. Only then should the chosen core decomposition and A2 correspondence be evaluated. The order prevents psychophysical assumptions from being smuggled into the construction of the data.

The computational side can be checked more exhaustively. A finite candidate should be tested under all declared relabellings, protocol continuations, split and merge regimes, and boundary perturbations. The two-bit example supplies a baseline for these checks but does not substitute for the non-toy realization. A theory of an actual organism or AI must confront timing, hidden state, imperfect intervention, and inaccessible variables that the example deliberately controls.

Replication should retain failures and uncertainty. The present monograph reports no new neural-data analysis and uses no historical illustrative table as validation of the constitution. In particular, an operational signal proxy must not be called a spectral gap or pointer-sharpness merely because it is given that name. The physical measurement model must establish the identification. The standard applies equally to neuroscience, computational logs, and first-person questionnaires.

A promising first non-toy realization study would use an open whole-brain *Drosophila* connectome together with an explicitly justified dynamical model. The adult-brain connectome and a connectome-based computational model provide concrete starting points <a id="citation-revised-91"></a>[[15](/consciousness/monograph/bibliography#bib-Dorkenwald2024), [70](/consciousness/monograph/bibliography#bib-Shiu2024)]. The aim would be to test $R^\ast$ selection: compare natural decompositions, examine causal cores, assess multiscale stability, distinguish internal from external routes, and approximate native predictive structure. It would not be a programme to declare a fly conscious from its wiring diagram. A connectome does not by itself determine native dynamics, admissible interventions, or the psychophysical identification, and no such realization test or validation is reported here.
