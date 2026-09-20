# Chapter 16: Endogenous predictive structure across horizons

<!-- Fixed Version 2 source. Mathematical macros used below:
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

<a id="ch:predictive"></a> Predictive and causal-state representations are established antecedents <a id="citation-26"></a>[[48](/consciousness/monograph/bibliography#bib-Shalizi2001), [26](/consciousness/monograph/bibliography#bib-Littman2002)]. The present intrinsic-state quotient adds an explicit transition-congruence requirement; its phenomenal identification is a separate law. 

<a id="section-16-1"></a>

## 16.1 An intrinsic carrier and a native operational contract

 <a id="sec:spc2-native-contract"></a> The predictive construction starts with a physical state, not an observer's posterior. For a nominated core $C$, let $X_C$ be its finite intrinsic carrier. A point $x\in X_C$ is the actual realized core state, including any internally retained memory needed by its update. The native operational contract specifies which internal operations and records belong to the vessel's organization. It is fixed before the phenomenal assignment and is not the set of measurements an analyst happens to perform.



**Definition 16.1 (Closed native instrument representation).**

 <a id="def:spc2-native-instrument"></a> A closed native representation consists of a finite carrier $X_C$, finite native action and record alphabets $A_C,O_C$, a physically specified continuation grammar, and nonnegative instrument matrices $K_{a,o}(x,y)$ such that 

$$

 \sum_{o\in O_C}\sum_{y\in X_C}K_{a,o}(x,y)=1

$$

 for every admitted action $a$ and state in its common protocol type. The entry is the joint probability of native record $o$ and actual next core state $y$. The representation is required to be exact for the nominated operating regime and boundary-policy contract. 



A finite controller can describe the grammar. An endogenous controller whose retained state affects later native operation belongs to the physical carrier. An externally maintained condition belongs to the boundary contract; its future influence must be specified rather than silently discarded. A returning external memory can invalidate the claimed closure on $X_C$. The remedy is a justified complete model or a narrower operating contract, not an assertion that the return route is irrelevant because it is typed external.

Admissible adaptive policies select only operations of this native grammar, using the native records and controllers allowed by the contract. Defining a counterfactual policy does not supply a missing actuator, permit arbitrary clamping of a boundary value, or introduce an ideal non-disturbing observation of the entire core state. An executable operation that can fail has its physical failure record; a physically inadmissible operation is not added as a test. Policy randomization is common to compared states conditional on the permitted retained record. A controller's further dependence on its actual internal state is represented in the physical instruments, not supplied as state-dependent knowledge to the testing policy.

Protocol type must be fixed by the initial native type and retained action/record history, or supplied by an actual native type record. An adaptive controller receives no hidden-state oracle telling it which operation is available. The statements below compare states of the same protocol type. Distinct types are retained as distinct components of the structured domain. The grammar has stopping and admitted continuation, and can be compiled into finitely many controller types. These conditions make the native test family fixed by the supplied physical contract. They do not derive a unique native contract for every organism.

A native contract states whether it represents continued operation in a physically maintainable regime or follows a scheduled physical change. In the former case it describes counterfactual dispositions under that regime, not an unconditional forecast through a later intervention that changes it. In the latter case the finite controller and its regime changes are included. Physical exhaustion or exit from the carrier's nominated operating domain has an explicit terminal record and absorbing continuation. A later core occurrence is assigned from its own supplied contract and linked, where appropriate, by A3. Changing the contract is a physical or constitutive change; displaying a shorter part of it is not.



<a id="section-16-2"></a>

## 16.2 All finite futures, with no privileged truncation

 <a id="sec:spc2-projective-profile"></a> For an admissible native policy $\pi$ of finite depth, let $P_x^\pi$ be its future native transcript law from the actual state $x$. Present-state copying by an external device is not automatically one of these native tests. For each integer $r\geq0$, put 

$$

 x\sim_r x'\quad\Longleftrightarrow\quad
 P_x^\pi=P_{x'}^\pi\ \hbox{for every native test of depth at most }r,
 \qquad Z_r=X_C/\!\sim_r.

$$

 Protocol typing is included also at grade zero. Because every shorter test is a permitted truncation of the same physical grammar, there are canonical surjections 

$$

 p_{r+1,r}:Z_{r+1}\longrightarrow Z_r,
 \qquad p_{r+1,r}([x]_{r+1})=[x]_r.

$$

 The constitutive state identification uses the whole compatible family: 

$$

 x\sim_\infty x'\quad\Longleftrightarrow\quad
 x\sim_r x'\ \hbox{for every finite }r,
 \qquad Z_\infty=X_C/\!\sim_\infty.

$$

 Thus an analyst's choice to inspect only a horizon $H$ can merge distinctions in an approximation, but does not change the constitutive identification. The actual point is $q_\infty(x)$, not a conditional belief selected by an outside observer.



**Proposition 16.2 (Finite-carrier projective realization).**

 <a id="prop:spc2-projective"></a> For finite $X_C$, the map 

$$

 Z_\infty\longrightarrow\varprojlim_r Z_r,
 \qquad [x]_\infty\longmapsto([x]_r)_{r\geq0}

$$

 is a bijection. No unrealized states are added by this inverse limit. 

 

**Proof.**

Equality at every grade is exactly $\sim_\infty$, proving injectivity. A compatible family of classes gives nonempty nested subsets of the finite carrier $X_C$. Their intersection is nonempty; any member realizes the family. All members of the intersection are $\sim_\infty$-equivalent, proving surjectivity and uniqueness. 

□



This finite-carrier result must not be transferred without hypotheses to an unlimited record-history domain. A finite hidden transducer can generate infinitely many posterior predictive states. In that different construction, projective completion can introduce points not realized by any nominated history. The present law uses the finite intrinsic carrier and does not replace its actual states by filtered beliefs.



**Theorem 16.3 (Coarsest native predictive representation).**

<a id="thm:pred-min"></a> The map $q_\infty:X_C\to Z_\infty$ is sufficient for all admitted finite native transcript laws. Within each protocol type, every other descriptor sufficient for all those laws factors uniquely through to $q_\infty$ on its realized image. 

 

**Proof.**

Each test law is constant on a predictive class by definition. If two intrinsic states have the same sufficient descriptor, all their test laws agree, so their predictive classes agree. Sending a realized descriptor value to that common class is well defined and unique. 

□





<a id="section-16-3"></a>

## 16.3 The transition closure that prediction alone does not prove

 <a id="sec:spc2-fibre-congruence"></a> Equality of all future record laws need not make the actual-state quotient a Markov instrument. We therefore require and check the following additional closure condition.



**Assumption 16.4 (Native predictive-fibre congruence).**

 <a id="ass:spc2-congruence"></a> For $x\sim_\infty x'$, every commonly admitted native action $a$, record $o$, and class $D\in Z_\infty$ satisfy 

$$

 \sum_{y\in D}K_{a,o}(x,y)
 =\sum_{y\in D}K_{a,o}(x',y).

$$

 



This assumption concerns actual successor classes, not merely output probabilities. It is a finite property of the supplied native representation. Failure means that this proposed predictive quotient does not close as the claimed phenomenal transition structure; it is not a finding that the physical system is unconscious. Automatically refining the quotient until the property holds would be a different constitutive law, since it can retain distinctions invisible to all native transcript tests.



**Theorem 16.5 (Intrinsic quotient instruments).**

 <a id="thm:spc2-quotient-instrument"></a> Under native predictive-fibre congruence, 

$$

 \overline K_{a,o}(z,D)=\sum_{y\in D}K_{a,o}(x,y),
 \qquad q_\infty(x)=z,

$$

 is independent of the representative. These matrices form a normalized native instrument on $Z_\infty$ and reproduce every finite adaptive native transcript law. For a positive-probability record $o$, its conditional actual-successor law is 

$$

 \Pr\{Z_{t+1}=D\mid Z_t=z,a,o\}
 =\frac{\overline K_{a,o}(z,D)}
 {\sum_E\overline K_{a,o}(z,E)}.

$$

 The next realized phenomenal point is $q_\infty(X_{t+1})$. 

 

**Proof.**

The assumption gives representative independence. Nonnegativity and normalization follow by summing the physical instrument over the partition. For a first action and record, the quotient records exactly the probabilities of every next class. Induction on a finite policy tree proves equality of all transcript probabilities. Dividing the joint class-and-record law by its positive record probability proves the conditional formula. No normalized conditional successor is assigned to a zero-probability record. 

□



The conditional distribution describes uncertainty about the actual next point. It is not itself that point. There is generally no deterministic update $z\mapsto z'$ from the record alone. A theorem about Bayesian filtering on histories cannot replace the congruence assumption for intrinsic actual states.

For clarity, a five-state example shows why the assumption is needed. With one action, let $a$ emit $0$ and remain at $a$; let $b$ emit $1$ and remain at $b$; let $c$ emit $0$ and enter $a$ with probability $1/2$, or emit $1$ and enter $b$ with probability $1/2$. Let $x$ emit $\#$ and enter $a$ or $b$ with equal probabilities, whereas $y$ emits $\#$ and enters $c$ surely. States $x,y$ have identical laws for every finite transcript: $\#$ followed by all zeros or all ones, with probabilities $1/2$. The predictive classes are $\{a\},\{b\},\{c\},\{x,y\}$. Nevertheless the probability of entering $\{c\}$ after $\#$ is zero from $x$ and one from $y$. Output equivalence has therefore not supplied actual-class closure.



<a id="section-16-4"></a>

## 16.4 An evaluable all-future object

 <a id="sec:spc2-finite-evaluation"></a> For a common unrestricted native action alphabet, define 

$$

 V_0=\operatorname{span}\{\mathbf1\},\qquad
 V_{n+1}=\operatorname{span}\bigl(V_n\cup
       \{K_{a,o}v:a\in A_C,o\in O_C,v\in V_n\}\bigr).

$$

 The sequence stabilizes in a subspace of $\mathbb R^{X_C}$. Its limit is precisely the span of all finite native word-likelihood vectors $K_{a_1,o_1}\cdots K_{a_m,o_m}\mathbf1$.



**Proposition 16.6 (Exact finite test of all-future equivalence).**

 <a id="prop:spc2-span-test"></a> For rational native instruments, $x\sim_\infty x'$ if and only if $(e_x-e_{x'})v=0$ on a rational basis of the stabilized space. The partition $Z_\infty$, its fibre-congruence check, and, when that check succeeds, its quotient instruments are exactly computable. The same conclusion holds for a finite-controller typed grammar, using one observable subspace per controller type. 

 

**Proof.**

The closure contains exactly the span of finite word-likelihood vectors by induction. A proper enlargement increases dimension, so finite-dimensional stabilization gives a rational basis in finitely many exact linear-algebra steps. Equality on all words is equivalent to equality of every fixed finite action transcript. Every leaf of an adaptive policy has one such action-record word; equality of the word probabilities therefore gives equality for adaptive policies as well. Conversely, in an unrestricted alphabet fixed action words are native tests. In a typed grammar, each admitted action/record word extends to a valid policy that stops on other branches, so its cylinder probability is a probability of a native test. For a finite typed controller, start with a terminal vector for each type and propagate only through its admitted action-record successors. The sum of the subspace dimensions is finite. Finally evaluate the congruence equalities and quotient sums directly. 

□



The complete endogenous object is 

$$

 \mathfrak P_C=
 \bigl(Z_\infty,\{P_z^\pi\}_{\pi\text{ finite native}},
       \{\overline K_{a,o}\}_{a,o},\text{native types and labels}\bigr),

$$

 pointed at $q_\infty(x)$. The finite quotient instruments generate all its finite transcript laws. The projective family records the consistent finite-horizon views of the same object. Actual transition structure is retained explicitly rather than inferred from a scalar contrast metric.

One may define 

$$

 d_\infty(z,z')=\sup_{r\geq1}\sup_{\pi:\,\operatorname{depth}\pi\leq r}
     \operatorname{TV}(P_z^\pi,P_{z'}^\pi).

$$

 Within each common protocol type this is a metric on its $Z_\infty$ fibre and the monotone supremum of the finite-horizon pseudometrics. The finite span algorithm decides zero distance; it is not a general algorithm for the exact value of the unbounded-horizon supremum. The completion claim requires the finite instrument presentation, not an unevaluated promise of exact metric optimization.



<a id="section-16-5"></a>

## 16.5 External reports and exact descent

 <a id="sec:spc2-grounded-reports"></a> An external report protocol $k$ has a physical law $Q_k(r\mid x,b)$ on a supplied product domain $X_C\times B_k$, where $b$ includes its preparation, channel state, boundary conditions, and other external nuisance variables needed to specify that law. The report is grounded in this core precisely when, at fixed $b$, 

$$

 q_\infty(x)=q_\infty(x')\quad\Longrightarrow\quad
 Q_k(\cdot\mid x,b)=Q_k(\cdot\mid x',b).

$$

 For finite carriers this is necessary and sufficient for a unique kernel on the realized quotient, 

$$

 Q_k(r\mid x,b)=\widehat Q_k(r\mid q_\infty(x),b),\qquad
 \widetilde Q_k(r\mid\phi,b)
 =\widehat Q_k(r\mid\Psi_C^{-1}(\phi),b).

$$

 Sufficiency follows by choosing a representative of each class; necessity follows immediately from factorization. This criterion is checkable when the physical report law is supplied. If only a subset $X_b$ of intrinsic states is physically possible at a context $b$, existence and uniqueness are asserted only on $q_\infty(X_b)$; no report probability is assigned by descent to an impossible pair.

A report that fails the criterion remains a physical observation, but it is not a function of this nominated phenomenal state and the declared external channel context. Conversely, different phenomenal classes need not be distinguishable by the available report hardware. For example, a constant-output channel distinguishes none of them. For grounded channels at a fixed context, a difference in report laws therefore implies different phenomenal classes. The converse fails unless a separately stated report-completeness assumption makes the report family separate all classes. Arbitrary ungrounded physical observations have no such guaranteed ordering. Grounding also does not imply truthfulness, completeness, absence of confabulation, or an empirical test of primitive presence.



**Proposition 16.7 (External-apparatus invariance).**

<a id="prop:apparatus-invariance"></a> Adding, removing, or redescribing an external report device preserves the native phenomenal object and its actual point whenever it leaves the intrinsic carrier, actual core state, native instruments, physical boundary contract, and native grammar unchanged up to the specified structure-preserving equivalence. Grounded report laws may change. 

 

**Proof.**

The invariant data determine every native transcript law, hence every finite quotient and the all-future partition. They also determine the descended native instruments and the actual point. External report kernels are absent from this construction. 

□



This is an invariance under preservation of the physical organization, not a claim that arbitrary measuring devices are harmless. Feedback, backaction, resource depletion, altered boundary inputs, or a change to a native controller can change the object because they change its physical premises.



<a id="section-16-6"></a>

## 16.6 The exact one-step specialization

 <a id="sec:spc2-full-state-specialization"></a> If a genuinely closed native model records its entire next state without additional disturbance at every step, and the compared states have a common native action type, then the all-future profile is already determined by the native first-step laws. After the action and first realized state are retained, later transcripts are common Markov processing of that pair. Consequently the optimal finite- or all-future contrast equals the maximum TV distance between the admitted first-step laws. Equal first-step rows also guarantee predictive-fibre congruence.

The specialization justifies the all-future interpretation of the worked two-bit matrix when its exact next-state records are part of the nominated native contract. It is not a theorem that every vessel has ideal access to all of its own microstate. With partial native records, distinctions can first appear after an arbitrarily long delay, and the complete projective construction is needed.



<a id="section-16-7"></a>

## 16.7 Why successor-state geometry is a specialization

<a id="sec:successor-choice"></a> A one-step rule can collapse physically different present states. For example, let $T(0,\cdot)=T(1,\cdot)=\delta_2$ and $T(2,\cdot)=\delta_0$. Exact future-state observation identifies $0$ with $1$, whereas an exact present-state copy separates them with distance one. The collapse is consistent with a future-dispositional phenomenal law, but it is a substantive identification, not a proof that the present distinction never exists physically.

The general A2 law therefore does not require ideal observation of every successor microstate or arbitrary boundary clamping. It retains the actual native instrument grammar. In a partially observed finite process a distinction can first become visible after several updates. A shift register whose hidden end feeds a recorded port only after $m$ ticks gives a simple delay of any chosen finite length as its carrier grows. An analyst stopping at $m-1$ sees one class where the all-future object has two. The compatible family retains that distinction without introducing an observer-chosen prediction horizon.

A controller selecting actions from past observations need not induce an uncontrolled Markov process on the current quotient class. The quotient instruments are Markov conditional on the chosen action and retained native controller type. If a policy has additional memory affecting its action, that memory must be included in the controlled process or kept explicitly in the conditioning. The quotient theorem never deletes it.



<a id="section-16-8"></a>

## 16.8 Stability of finite predictive contrasts

<a id="sec:predictive-stability"></a> Exact predictive classes and graph boundaries can change under a small perturbation. Quantitative finite-horizon contrasts nevertheless admit a useful uniform bound. 

**Proposition 16.8 (Finite-horizon perturbation bound).**

<a id="prop:predictive-stability"></a> Consider two finite instrument models on the same physical state space and common typed grammar. For every state and admitted action, suppose the joint law of recorded outcome and successor state differs by at most $\epsilon\in[0,1]$ in total variation. From the same fixed preparation $b$, every adaptive protocol of depth at most $r$ satisfies 

$$

{d_{\mathrm{TV}}}(P_b^\pi,\widehat P_b^\pi)\le 1-(1-\epsilon)^r\le r\epsilon.

$$

 For two fixed preparations $b,b'$, their contrast pseudometrics satisfy 

$$

|d_r(b,b')-\widehat d_r(b,b')|
\le 2[1-(1-\epsilon)^r]\le 2r\epsilon.

$$

 

 

**Proof.**

Couple the initial states identically. While states and transcripts agree, the common controller chooses the same action; couple the two joint output/successor laws maximally. Each such step preserves agreement with conditional probability at least $1-\epsilon$. The probability of a discrepancy by depth $r$ is at most $1-(1-\epsilon)^r$, which bounds transcript total variation. Apply the triangle inequality to the laws from $b$ and $b'$ for each common protocol, and then take the supremum, to obtain the contrast bound. 

□

 If starting preparations differ by $\delta$ in total variation, add $\delta$ to the transcript bound. This statement compares fixed physical preparations. Filtering the two models after the same rare observed history can amplify discrepancies and requires a separate lower bound on its probability. Small contrast errors also do not preserve exact equality classes or the nonzero-edge criterion in A1.
