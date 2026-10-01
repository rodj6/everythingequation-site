<!-- Complete paper-2 web edition. Mathematical macros used below:
\headrulewidth = 0.3pt
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\dist = \operatorname{dist}
\Eff = \operatorname{Eff}_{*}
\supp = \operatorname{supp}
\id = \operatorname{id}
\E = \mathbb E
\Prb = \mathbb P
\Ftwo = \mathbb F_2
\calE = \mathcal E
\calR = \mathcal R
\calN = \mathcal N
\calF = \mathcal F
\calW = \mathcal W
\ploc = P_{\mathrm{loc}}
\qop = q_{\mathrm{op}}
\Lop = \mathscr L_{\mathcal E}
\Rstar = R^{\ast}
\SPC = \textnormal{SPC-2}
\eps = \varepsilon
\ind = \mathbf 1
\normone = \left\lVert#1\right\rVert_1
-->

# Overview and publication identity

Relational Boundaries and Awareness Localization:  
 Robustness, Composition, and Identification Limits

 Jeremy Rodgers  
 Independent Researcher  
 Website: [everythingequation.com](https://www.everythingequation.com)  
 DOI: [10.5281/zenodo.23075822](https://doi.org/10.5281/zenodo.23075822)

 29 September 2026  
 Preprint v1.0



 

**Abstract.**

Discrete rules that individuate relational or joint-dependence boundaries can change discontinuously under arbitrarily small perturbations of an underlying stochastic process. We exhibit this failure exactly in a finite joint-output model, derive a continuous reconstruction-based diagnostic using directed statistical deficiency, and determine when the resulting effective relational descriptions compose under causal and resource constraints. We then apply these results to the SPC-2 localization constitution as a motivating case. In the masking family, an arbitrarily small singleton effect deletes a projected joint-dependence edge while substantial joint information and the contrast of a fixed return schedule survive. The exact deficiency optimum quantifies what is lost by deleting part of the observation and is invariant under common-conditional padding. We separate joint information, executable native return, and resistance to resource-constrained cut simulation; the resulting schedule-indexed candidate families need not be partitions. For finite marked stochastic instruments, strong quotients admit substitution in matching causal contexts and minimization-compatible composition, while transfer of cut radii additionally requires control of the permitted simulator-law families. Finally, an attribute is identifiable from exact complete experiment laws precisely when it factors through their operational quotient. Functional premises leaving a local phenomenal predicate unconstrained do not determine it; SPC-2 supplies an explicit connecting premise. The results identify a robustness vulnerability and constrain successor doctrines without deriving a unique admission law, validating phenomenal presence, or identifying source ontology from records alone. 

 **Keywords:** statistical deficiency; joint dependence; causal interfaces; strong lumpability; operational identifiability; awareness localization.

---

# Section 1: Introduction

<a id="section-1"></a>

## 1 Introduction

<a id="sec:introduction"></a> An explicit theory of awareness localization faces two different obligations. It must specify which physical organizations its law selects, and it must justify interpreting those organizations as experiential perspectives. Mathematical determinacy of the first assignment does not discharge the second obligation. Conversely, treating awareness as fundamental does not determine where a local perspective begins or ends.

*Shadow Theory and Consciousness* introduces the Shadow Psychophysical Constitution, SPC-2, to make these commitments explicit <a id="citation-1"></a>[[23](/consciousness/research/paper-2/references#bib-RodgersSPC2)]. Its source-awareness postulate A0 is an ontological interpretation, while A1 supplies perspective admission, A2 supplies phenomenal relational organization, and A3 supplies episode continuation. The constitution is evaluated only after a physical realization and a selection doctrine have been supplied. It therefore already has a localization bridge; the present paper is not an attempt to supply an omitted first bridge. Its subject is the robustness and evidential status of the functional boundary on which that bridge operates.

The audit begins with a specific vulnerability. The published dependence construction retains a joint target only when no proper subset distinguishes a fixed source contrast. This excludes irrelevant target padding and detects correlation-carried information. Yet exact minimality can be lost when a previously uninformative singleton acquires an arbitrarily small effect. The projected edge then disappears although the joint experiment changes only slightly. The problem is not that joint information is unreal. It is that the combinatorial rule can cease to represent it for a reason unrelated to the magnitude of the surviving information.

We replace this information diagnostic by a reconstruction question: after part of a joint observation is removed, can one source-independent stochastic kernel reproduce the complete family of response laws? The relevant tool is directed statistical deficiency, with established roots in comparison of experiments and approximate sufficiency <a id="citation-2"></a>[[6](/consciousness/research/paper-2/references#bib-Blackwell1953), [16](/consciousness/research/paper-2/references#bib-LeCam1964), [24](/consciousness/research/paper-2/references#bib-vanRooyenWilliamson2014)]. The contribution is not a new information measure. It is an exact application to the boundary obstruction and a disciplined integration with native execution and resource-constrained simulation.

That integration matters because three statements are inequivalent: information is present jointly; a physical schedule returns an intervened distinction; and no permitted disconnected implementation reproduces its recorded behavior. A two-stage encoder–decoder can satisfy the first two statements while having zero cut-simulation cost under a specified shared-randomness and local-memory contract. We consequently retain a family of quantitative, schedule-specific candidates rather than forcing a single subject partition.

The next question is compositional. A lower relational organization can serve as a higher-level component only if its effective interface retains the distinctions that the admitted exterior can subsequently use. For finite joint instruments, a strong marked quotient gives an exact construction. We prove causal substitution and minimization-compatible composition, with explicit restrictions on timing, initial correlations, shared events, and resource ownership. We also show why fidelity of the target process alone does not preserve its distance from a class of cut simulators. The comparison class must be transported too.

Finally, the source/readout issue is expressed at the level of complete experiments. An attribute is determined by their exact laws if and only if it is constant on the corresponding operational-equivalence classes. This criterion neither determines the intended phenomenal meaning of a label nor turns exact-law identification into uniform finite-data certification. A separate conservative-extension argument identifies the premise needed to connect functional structure to a local phenomenal predicate. Its scope is logical: it does not refute a theory that already supplies such a connection.

The resulting position is deliberately asymmetric. The original A1 remains a coherent conditional constitutive rule, but part of its candidate construction is vulnerable to perturbation and finite certification. The replacement analysis is more robust without being a uniquely selected replacement admission law. This distinction lets the paper retain the philosophical direction of SPC-2 while making its mathematical commitments available to readers who do not accept A0.



<a id="paragraph-1"></a>

#### Contributions and provenance.

 The principal results are the masking obstruction and exact reconstruction optimum, the separation of information, execution and cut simulation, and the joint conditions for compositional transfer of the resulting diagnostics. Statistical sufficiency, elementary metric inequalities, partition refinement and operational quotient factorization are established tools or direct constructions; their application here is stated without historical-priority claims. All general results below have analytical proofs under explicit hypotheses. Finite arithmetic checks are supplementary, and independent external proof review remains outstanding.



<a id="paragraph-2"></a>

#### Organization.

 [Section 2](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#sec:setting), [Section 3](/consciousness/research/paper-2/minimal-target-masking#sec:masking) reconstruct the relevant inherited setting and the masking failure. [Section 4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#sec:reconstruction), [Section 5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#sec:execution) develop the replacement diagnostics. [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#sec:composition), [Section 7](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#sec:approximation) establish exact and approximate encapsulation, including the comparison-class obligation. [Section 8](/consciousness/research/paper-2/operational-identification-and-its-ceiling#sec:identification), [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#sec:bridge) separate operational identification from phenomenal interpretation. [Section 10](/consciousness/research/paper-2/consequences-for-the-spc-2-boundary#sec:consequences), [Section 11](/consciousness/research/paper-2/limitations-and-verification-status#sec:limits) state the implications and limitations for SPC-2. The appendices supply calculation, composition and provenance details, including selected relational-state constructions rather than the full history of the research programme.

---

# Section 2: The inherited realization and finite operational setting

<a id="section-2"></a>

## 2 The inherited realization and finite operational setting

<a id="sec:setting"></a> 

<a id="section-2-1"></a>

### 2.1 Realization precedes attribution

 The supplied realization ${R^{\ast}}$ fixes primitive components, native operations and records, admissible interventions, internal and external route typing, native clocks, available resources, boundary conditions, and process provenance. A further selection doctrine specifies which of these structures the constitution treats as native. An investigator's chosen sample, approximation or stopping point is not that doctrine. Reducing the number of tests performed does not alter the already specified constitution.

Only the clauses needed for this audit are restated here. The predecessor's physical constructions are not assumptions of every finite example below, and their independent verification is not asserted by this paper. The published constitution is summarized in [Table 1](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#tab:axioms); its source is Chapters 15–18 of <a id="citation-3"></a>[[23](/consciousness/research/paper-2/references#bib-RodgersSPC2)].

  

Table 1. Inherited constitutional commitments. These are stated premises, not conclusions of the operational theorems.

<a id="tab:axioms"></a> <a id="source-tabularx-1"></a>

| Clause | Relevant commitment |
| --- | --- |
| A0 | Awareness is the knowing aspect of reality prior to the operational source/readout distinction; a vessel does not create that capacity ex nihilo. This adds no independently acting force or numerical universal subject. |
| A1 | A qualifying maximal internal recurrent core is assigned one localized perspective. Distinct admitted cores are assigned distinct perspectives; overlapping subassemblies inside an admitted core receive no additional perspectives by this rule. |
| A2 | The phenomenal relational organization of a qualifying core is assigned as a structural copy of its complete endogenous predictive object, retaining native labels, laws and congruent successor instruments. |
| A3 | A subject episode follows nonbranching process-provenance continuation between qualifying occurrences. Branches, mergers and genuine qualification gaps terminate the preceding episodes under this law. |

 

A0 is not an extra state variable in the proofs. The predecessor's symbol $\mathsf U$ names the pre-operational reality in philosophical prose, not a carrier into which we insert an operator or a numerical localization field. Awareness, a currently localized subject, lived content and personal continuity remain different notions. In particular, neither an unchanged autobiography nor a copied memory is, by itself, a process-provenance certificate under A3.



<a id="section-2-2"></a>

### 2.2 Complete experiments and joint instruments

 We use finite classical models except in the explicitly set-theoretic identification results of [Section 8](/consciousness/research/paper-2/operational-identification-and-its-ceiling#sec:identification). Row probability vectors act on row kernels. Chronological execution of a schedule $w=(E,D)$ is written $PED$, while the corresponding deterministic function is $D\circ E$.

A finite module $\mathcal M$ has a closed state domain $X$, actions $u\in\mathcal U$, joint records $o\in\mathcal O$, and nonnegative matrices <a id="eq:instrument"></a>


$$

 K_{u,o}(x,y),\qquad \sum_{o,y}K_{u,o}(x,y)=1.

$$

Equation (2.1).

 These specify the *joint* law of the next record and successor state. Blocked operations are either totalized by explicit outcomes and updates or excluded through matching operating types. A normalized conditional successor is used only for an outcome of positive probability.

An experiment $e\in{\mathcal E}$ includes its preparation, causal action policy, retained records, stopping convention and access resources. Its law is $P^e_\theta$, with preparation label $\theta$. Shared references, clocks and returning receivers are included when they can influence later outcomes. A complete law is a law of everything the declared experiment retains; it is not a claim to observe every inaccessible physical degree of freedom.

For distributions on a finite alphabet, <a id="eq:tv"></a>


$$

 {\operatorname{TV}}(P,Q)=\tfrac12{\left\lVertP-Q\right\rVert_1}
 =\max_A\{P(A)-Q(A)\}
 =1-\sum_d\min\{P(d),Q(d)\}.

$$

Equation (2.2).

 For one common experiment family, <a id="eq:lawmetric"></a>


$$

 d_{{\mathcal E}}(P,Q)=\sup_{e\in{\mathcal E}}{\operatorname{TV}}(P^e,Q^e).

$$

Equation (2.3).

 If preparations are separately indexed, the supremum includes them. Equalities and bounds always compare the same timed record spaces and permissions. A change in available interventions is not merely a change of coordinates.

  

Table 2. Five different mathematical objects. Every guarantee is relative to the stated experiment and physical contract.

<a id="tab:five-objects"></a> <a id="source-tabularx-2"></a>

| Object | What it describes or preserves | What does not follow from it alone |
| --- | --- | --- |
| Statistical deficiency | Approximate reconstruction of complete experiment laws | A native actuator, the same historical record, or timely decoding |
| Native return witness | A compatible internal route and retained source contrast | Resistance to disconnected simulation |
| Resource-relative cut radius | Distance from one declared family of coherent alternatives | Phenomenal presence or an absolute amount of unity |
| Strong marked quotient | Joint records, successor classes and protected marks | Microscopic identity or a cheaper replacement device |
| Operational quotient | Equality of every admitted complete experiment law | A physically readable class label or a phenomenal interpretation |

 



<a id="section-2-3"></a>

### 2.3 The published dependence and return rules

 <a id="source-definition-1"></a>

**Definition 2.1 (Comparison-wise minimal target).**

<a id="def:minimal-target"></a> In one compatible finite regime, fix an admitted pair of preparations differing only in primitive coordinate $i$. A nonempty output set $J$ is minimally distinguishing if its joint output laws differ while every proper-subset law agrees. Record $i\to J$, project this hyperedge to $i\to j$ for all $j\in J$, and take the union over all admitted comparisons in that regime. The internal graph retains only separately licensed internal routes. 

 Minimality is imposed *before* taking this union, not after maximizing a contrast over preparations. Appending an independent output to an affected target does not automatically add an edge to that output. Correlation-only effects are retained because the tested laws are joint. These are the literal features of the inherited rule that the next section tests.

A candidate is a maximal internally typed strongly connected component (SCC) only after the relevant native representation is closed and its actual predictive classes are congruent. Qualification also requires at least two distinct native predictive classes in the actual operating type and resource context, and a covering return witness from the complete catalogue supplied by ${R^{\ast}}$. A singleton requires a nonempty self-return.

A witness consists of one compatible native schedule, a nominated root source contrast, a nonempty closed internal tour with support exactly the candidate, and a terminal internal root observation with strictly positive TV contrast. Every named coupling must be executable in that schedule. For a joint mechanism the full target is retained in its route certificate. An external export followed by reimport does not count as an internal return unless its irrelevance is established or the path is excluded by the physical instrument.

The catalogue is complete relative to the constitutive operation/resource contract, not relative to an analyst's convenience. For example, a nonrenewable program counter can make it finite. Positivity of a scheduled terminal contrast and execution of the nominated covering route are separate obligations; the return rule does not claim that every surviving bit travels exclusively along every edge of the tour.



<a id="section-2-4"></a>

### 2.4 Four notions of state

 The following distinctions will be used throughout. A strong actual-state quotient preserves the joint record and successor-class law, including prescribed marks. All-word behavioral equivalence preserves output traces but need not yield that quotient. A history-predictive state or belief is conditioned on accessible observations. An operational quotient across model/preparation pairs identifies complete experiment laws and may have no finite physical realization. The exact relation between the first two is illustrated in [Example 6.4](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#ex:trace), and the fourth is treated in [Section 8](/consciousness/research/paper-2/operational-identification-and-its-ceiling#sec:identification).

<a id="source-proposition-1"></a>

**Proposition 2.2 (Inherited physical conservativity).**

<a id="p2-31"></a> Fix the complete physical realization, preparation, and all operation and report kernels. Adding A0–A3 assignments and their phenomenal interpretation without changing those kernels leaves every finite adaptive physical transcript law unchanged. 

 <a id="source-proof-1"></a>

**Proof.**

The initial law is unchanged. At a policy node, the same recorded history induces the same next action distribution, and the same joint instrument supplies the next outcome and successor. Induction over the finite policy tree preserves each leaf probability. The aspect interpretation has not been inserted as a new causal argument of the kernel. 

□

 This is an inherited result, not a new theorem that every consciousness theory must conserve physical predictions. It also does not preclude testing a specific realization or psychophysical identification with independently defended report and calibration premises.

---

# Section 3: Minimal-target masking

<a id="section-3"></a>

## 3 Minimal-target masking

<a id="sec:masking"></a> Consider two prepared bits $(b,c)$, a deterministic decoder <a id="eq:decoder"></a>


$$

 D(b,c)=(b\oplus c,0),

$$

Equation (3.1).

 and an encoder whose first branch carries $b$ only in a correlation: <a id="eq:encoder"></a>


$$

 E_{\varepsilon}(b,c)=
 \begin{cases}
 (\xi,\xi\oplus b),&\text{with probability }1-{\varepsilon},\\
 (b,\zeta),&\text{with probability }{\varepsilon}.
 \end{cases}

$$

Equation (3.2).

 The fresh fair bits $\xi,\zeta$ and the branch choice are independent of the prepared source. In this section $0\le{\varepsilon}\le\tfrac12$. The native operations are $E_{\varepsilon},D$, with a fixed preparation/route contract and the schedule $w=(E_{\varepsilon},D)$.

<a id="source-theorem-1"></a>

**Theorem 3.1 (Masking of the projected edge).**

<a id="p2-02"></a> For the comparison-wise rule of [Definition 2.1](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#def:minimal-target), the edge $1\to2$ generated by $E_{\varepsilon}$ exists at ${\varepsilon}=0$ and is absent at every ${\varepsilon}>0$. The decoder still contributes $2\to1$ and $1\to1$; thus the two-component SCC present at zero is absent for positive ${\varepsilon}$. Nevertheless the encoder rows, in output order $00,01,10,11$, are <a id="eq:mask-row0"></a>
<a id="eq:mask-row1"></a>


$$
\begin{aligned}P_0&=(1/2,{\varepsilon}/2,0,(1-{\varepsilon})/2),\\
 P_1&=(0,(1-{\varepsilon})/2,1/2,{\varepsilon}/2),
\end{aligned}
$$

Equation (3.3, 3.4).

 and obey <a id="eq:mask-kernel"></a>
<a id="eq:mask-contrasts"></a>
<a id="eq:mask-return"></a>


$$
\begin{aligned}\sup_x{\operatorname{TV}}(E_{\varepsilon}(x),E_0(x))&={\varepsilon}/2,\\
 d_1={\varepsilon},\qquad d_2&=0,\qquad d_{12}=1-{\varepsilon},\\
 r_w&=1-{\varepsilon}.
\end{aligned}
$$

Equation (3.5, 3.6, 3.7).

 Here $d_L={\operatorname{TV}}(P_{L,0},P_{L,1})$ and $r_w$ is the contrast of the fixed terminal root observation. 

 <a id="source-proof-2"></a>

**Proof.**

Enumerating the two branches gives [Equation 3.3](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row0), [Equation 3.4](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row1). At zero both singleton laws are fair and identical under the two preparations, but the pair has opposite parity. The pair is therefore a minimal target and projects to both output coordinates. For positive ${\varepsilon}$, the first-bit laws differ by ${\varepsilon}$, while the second remains fair. The pair is no longer minimal; its only minimally distinguishing subset is the first coordinate. Changing $c$ affects neither encoder row. The deterministic decoder depends on both inputs only through its first output, yielding the stated remaining edges.

Subtracting a row at zero from its perturbed version gives absolute mass changes ${\varepsilon}/2$ on each of two atoms, hence [Equation 3.5](/consciousness/research/paper-2/minimal-target-masking#eq:mask-kernel). Marginalization gives $d_1,d_2$, and direct subtraction gives $d_{12}=1-{\varepsilon}$ on the stated interval. Under the first branch of $w$, decoding returns $b$ exactly. Under the second it returns $b\oplus\zeta$, which is fair. Its error relative to $b$ is ${\varepsilon}/2$, so the two terminal root laws differ by $1-{\varepsilon}$. 

□



The conclusion concerns the nominated graph and its candidate SCC, not the qualification or phenomenal status of every resulting proper subcomponent. In particular, [Equation 3.7](/consciousness/research/paper-2/minimal-target-masking#eq:mask-return) does not preserve the old graph-derived route certificate after the edge has been removed. It shows that the same executable operations can retain a large terminal distinction while that exact graph criterion changes.

<a id="source-remark-1"></a>

**Remark 3.2 (No continuous positive-support-exact weight).**

<a id="p2-03"></a> On the family of [Theorem 3.1](/consciousness/research/paper-2/minimal-target-masking#p2-02), no continuous nonnegative function of the nominated joint kernels is positive exactly when the published edge $1\to2$ is present. 

 <a id="source-proof-3"></a>

**Proof.**

Such a function would be zero at every positive ${\varepsilon}$, hence zero at zero by continuity, while exact support would require it to be positive there. 

□



This excludes a particular exact-support repair, not continuous diagnostics in general. It also differs from the familiar addition of weak edges that merges SCCs: here adding a small proper-subset effect deletes an edge supported by a strong joint effect. A tolerance-based rule may be useful, but it changes the original dependence relation rather than continuously reproducing its positive support.

<a id="source-corollary-1"></a>

**Corollary 3.3 (Finite-use certification limit).**

<a id="p2-04"></a> Suppose the nominated complete encoder instrument records only the stipulated two-bit output/successor data. With matched initial laws, other mechanisms, and permissions, any causal experiment using the encoder at most $N$ times has complete-record discrepancy at most <a id="eq:mask-finite"></a>


$$

 1-(1-{\varepsilon}/2)^N\le N{\varepsilon}/2

$$

Equation (3.8).

 between the zero and perturbed models. No fixed finite such experiment uniformly certifies the zero-versus-positive graph assignment against all positive ${\varepsilon}$. 

 <a id="source-proof-4"></a>

**Proof.**

While the two histories agree, couple each encoder call with mismatch probability at most ${\varepsilon}/2$, using [Equation 3.5](/consciousness/research/paper-2/minimal-target-masking#eq:mask-kernel), and couple all other calls identically. At most $N$ opportunities give agreement probability at least $(1-{\varepsilon}/2)^N$. The coupling inequality proves the first bound and the elementary product inequality proves the second. A test's rejection probabilities differ by at most this TV bound, which tends to zero at fixed $N$. 

□



A separately retained branch flag, seed archive, or returning receiver enlarges the complete instrument and requires its own bound. Nor are the two models exactly operationally equivalent: for ${\varepsilon}>0$, even a singleton law differs. The distinction is between exact-law information and the inability to resolve arbitrarily small changes uniformly with fixed resources.

---

# Section 4: Robust reconstruction of joint experiments

<a id="section-4"></a>

## 4 Robust reconstruction of joint experiments

<a id="sec:reconstruction"></a> 

<a id="section-4-1"></a>

### 4.1 The information lost by deleting a view

 The obstruction concerns exact target selection, not the existence of stable measures of joint information. A different question is available: after retaining only part of an observation, can one common reconstruction procedure reproduce the full experiment for every unknown preparation?

Let $\Theta$ be a nonempty finite preparation set. An experiment has laws $P_{J,\theta}$ on a finite joint alphabet $\mathcal Y_J$. A retained view is the deterministic projection $\pi_L:\mathcal Y_J\to\mathcal Y_L$, with image alphabet $\mathcal Y_L$ and marginal laws $P_{L,\theta}$. <a id="source-definition-2"></a>

**Definition 4.1 (Directed reconstruction deficiency).**

<a id="def:deficiency"></a> The loss of reconstructing $J$ from $L$ is <a id="eq:deficiency"></a>


$$

 \delta_P(J\mid L)=\min_{G:\mathcal Y_L\rightsquigarrow\mathcal Y_J}
 \max_{\theta\in\Theta}{\operatorname{TV}}(P_{J,\theta},P_{L,\theta}G).

$$

Equation (4.1).

 The stochastic row kernel $G$ is the same for all unknown $\theta$. It may use a declared public context, but not the unknown source label. 

 This is directed statistical deficiency in a target-first, half-$L^1$ convention, not a new information measure. Statistical comparison has its classical Blackwell/Le Cam lineage <a id="citation-4"></a>[[6](/consciousness/research/paper-2/references#bib-Blackwell1953), [16](/consciousness/research/paper-2/references#bib-LeCam1964)]; deficiency has also been applied directly to feature quality <a id="citation-5"></a>[[24](/consciousness/research/paper-2/references#bib-vanRooyenWilliamson2014)]. Argument order, row versus column kernels, and the factor of two in variational divergence must be translated when comparing formulas.

The decoder reproduces *laws*. In particular it may resample even the retained coordinates. It need not recover the same realized event, preserve a particular archive carrier, respect a deadline, or be available as a native physical operation. Those stronger requirements belong to the execution contract in [Section 5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#sec:execution), [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#sec:composition). They are not consequences of [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency).

<a id="source-proposition-2"></a>

**Proposition 4.2 (Finite comparison bounds).**

<a id="p2-06"></a> The minimum in [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency) exists, lies in $[0,1]$, and is a rational linear-program value for rational finite data. For any $\theta,\theta'$, <a id="eq:def-lower"></a>


$$

 \delta_P(J\mid L)\ge \tfrac12\bigl[
 {\operatorname{TV}}(P_{J,\theta},P_{J,\theta'})-
 {\operatorname{TV}}(P_{L,\theta},P_{L,\theta'})\bigr]_+.

$$

Equation (4.2).

 For experiments $\mathsf E,\mathsf F,\mathsf H$ on the same parameter set, <a id="eq:def-triangle"></a>


$$

 \delta(\mathsf E\mid\mathsf H)
 \le \delta(\mathsf E\mid\mathsf F)+\delta(\mathsf F\mid\mathsf H).

$$

Equation (4.3).

 More informative retained observations cannot increase reconstruction loss, nor can postprocessing the target. If $\max_\theta{\operatorname{TV}}(P_{J,\theta},\widehat P_{J,\theta})\le\epsilon$, with the same projection and preparation labels, then <a id="eq:def-stability"></a>


$$

 \bigl|\delta_P(J\mid L)-\delta_{\widehat P}(J\mid L)\bigr|\le2\epsilon.

$$

Equation (4.4).

 All these statements preserve the nominated experiment and decoder permissions. 

 <a id="source-proof-5"></a>

**Proof.**

Finite stochastic matrices form a compact polytope and the objective is continuous. The absolute-value epigraph gives a finite linear program with rational coefficients; a rational optimum can be chosen. Insert $P_{L,\theta}G$ and $P_{L,\theta'}G$ between the two target laws and use TV contraction under $G$ to obtain [Equation 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-lower). Composing two reconstruction kernels proves [Equation 4.3](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-triangle); the same argument gives the monotonicities. For a fixed $G$, replace both target and input laws by their hatted versions. The first replacement costs at most $\epsilon$, and the second at most $\epsilon$ after contraction. Take infima in both directions to obtain [Equation 4.4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-stability). 

□

 For a decision loss valued in $[0,1]$, any decision procedure based on $J$ can be emulated from $L$, using an optimal $G$ followed by that procedure, with additional risk at most $\delta_P(J\mid L)$ for every preparation and hence every prior. This forward implication follows from the TV bound on bounded expectations. No full statistical-comparison converse is needed below.

One may record the entire table $\delta_P(J\mid L)$. A derived deletion diagnostic is <a id="eq:deletion-u"></a>


$$

 u_P(J)=\min_{j\in J}\delta_P(J\mid J\setminus\{j\}),

$$

Equation (4.5).

 where the empty view is a one-point alphabet. Positive $u_P(J)$ means that each one-coordinate deletion loses experiment information. It is not an additive information decomposition, a physical edge attribution, or an exhaustive notion of integration. In particular, it should not be identified with a partial-information-decomposition atom; unique-information constructions answer their own specified comparison questions <a id="citation-6"></a>[[5](/consciousness/research/paper-2/references#bib-BertschingerEtAl2014)].



<a id="section-4-2"></a>

### 4.2 Genuine informational padding

 <a id="source-proposition-3"></a>

**Proposition 4.3 (Zero loss and common-conditional padding).**

<a id="p2-07"></a> For a deterministic view $Y_L=\pi_L(Y_J)$, $\delta_P(J\mid L)=0$ if and only if there is one conditional kernel $A(dy_J\mid y_L)$, supported on $\pi_L(y_J)=y_L$, such that <a id="eq:sufficiency"></a>


$$

 P_{J,\theta}=P_{L,\theta}A\qquad\text{for every }\theta.

$$

Equation (4.6).

 In particular, if <a id="eq:padding"></a>


$$

 P_\theta(y,z)=P_\theta(y)A(z\mid y)

$$

Equation (4.7).

 with the same conditional kernel in every preparation, then <a id="eq:padding-invariance"></a>


$$

 \delta((Y,Z)\mid Y)=0,
 \qquad
 \delta((Y,Z)\mid L)=\delta(Y\mid L)

$$

Equation (4.8).

 for any common retained experiment $L$. 

 <a id="source-proof-6"></a>

**Proof.**

A conditional reconstruction immediately proves the forward zero-loss claim. Conversely, an optimal zero-loss kernel reproduces the full experiment, though it need not initially preserve the view. Put a strictly positive prior on the finite $\Theta$. The reconstructed Markov chain $\Theta\to Y_L\to Y_J^*$ has the original $(\Theta,Y_J)$ law at its endpoints. Data processing gives $I(\Theta;Y_J)\le I(\Theta;Y_L)$. Since $Y_L$ is originally a deterministic function of $Y_J$, the reverse inequality holds. Thus $I(\Theta;Y_J\mid Y_L)=0$ in the original experiment. Its conditional law supplies $A$, common to every preparation on the nonnull support. Values null for every preparation can be extended arbitrarily within their nonempty projection fibres. For padding invariance, reconstruct $Y$ and append $A$ for one bound, and project away $Z$ for the other. 

□

 Independent noise and a copy of an already retained record satisfy this informational criterion. A coordinate whose marginal merely ignores the source need not satisfy it. Nor does snapshot redundancy imply that the coordinate is causally idle later: an otherwise redundant backup may become indispensable after the original register is overwritten.



<a id="section-4-3"></a>

### 4.3 The exact masked-encoder loss

 The two rows in [Equation 3.3](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row0), [Equation 3.4](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row1) remain valid statistical experiments on the extended interval $0\le{\varepsilon}\le1$. Only the original graph argument was restricted to $0\le{\varepsilon}\le\tfrac12$. <a id="source-theorem-2"></a>

**Theorem 4.4 (Exact reconstruction loss of the masked encoder).**

<a id="p2-08"></a> For the extended experiment, <a id="eq:masked-def1"></a>
<a id="eq:masked-def2"></a>


$$
\begin{aligned}\delta_P(12\mid1)&=\max\left\{\tfrac12-{\varepsilon},\frac{1-{\varepsilon}}{4}\right\},\\
 \delta_P(12\mid2)&=\tfrac12\max\{{\varepsilon},1-{\varepsilon}\}.
\end{aligned}
$$

Equation (4.9, 4.10).

 The first formula changes branch at ${\varepsilon}=\tfrac13$. Both losses are continuous and have explicit optimal reconstruction kernels. 

 <a id="source-proof-7"></a>

**Proof.**

For ${\varepsilon}\le\tfrac12$, the joint contrast is $1-{\varepsilon}$ and the first-coordinate contrast is ${\varepsilon}$, so [Equation 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-lower) gives $\tfrac12-{\varepsilon}$. For a second bound on the whole interval, put $q_+=(1+{\varepsilon})/2$, $q_-=(1-{\varepsilon})/2$. The reconstruction rows obey 

$$

 Q_0=q_+G_0+q_-G_1,\qquad Q_1=q_-G_0+q_+G_1.

$$

 Therefore $Q_1(00)\ge(q_-/q_+)Q_0(00)$. If both reconstruction errors are at most $t$, the target masses give $Q_0(00)\ge\tfrac12-t$ and $Q_1(00)\le t$. Hence $t\ge(1-{\varepsilon})/4$. The two kernels in [Appendix A](/consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations#app:masking) attain the larger lower bound on the respective intervals. For output 2, the retained law is the same fair bit under both sources. Every decoder gives one common target law; the midpoint of the two targets attains half their TV diameter. Direct subtraction gives diameter $\max\{{\varepsilon},1-{\varepsilon}\}$. 

□

 Figure [1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#fig:masking) contrasts this continuous information loss with the inherited support selection. The new diagnostic does not reproduce the old graph while somehow removing its discontinuity: it deliberately asks a different, quantitative question. <a id="source-figure-1"></a>

![Figure 1](/publications/consciousness/paper-2/figures/figure-1.svg)

 



 



Figure 1. Minimal-target masking and quantitative deletion loss. The projected edge $1\to2$ is present only at ${\varepsilon}=0$ in the inherited family, whereas its joint reconstruction loss remains close to $1/2$ near zero. The graph statement uses $[0,1/2]$; the displayed deficiency formulas are valid on $[0,1]$. The curves are exact formulas, not fitted data.

<a id="fig:masking"></a> 



<a id="section-4-4"></a>

### 4.4 Why a single TV increment is insufficient

 <a id="source-proposition-4"></a>

**Proposition 4.5 (Marginal independence and scalar increments).**

<a id="p2-09"></a> No rule can discard every marginally source-independent coordinate while retaining all joint-only information. For a fixed contrast, or a common family of maximized contrasts, 

$$

 \sigma(J)=d(J)-\max_{L\subsetneq J}d(L)\ge0,

$$

 but $\sigma(J)=0$ does not imply that some proper view reconstructs $J$ exactly. 

 <a id="source-proof-8"></a>

**Proof.**

Let $(Y,Z)=(\xi\oplus b,\xi)$ with $\xi$ fair. Both marginals are independent of $b$, while $Y\oplus Z=b$. Thus marginal independence cannot identify irrelevant padding. Nonnegativity of $\sigma$ follows from contraction under projection, including after taking suprema over one common contrast family. At ${\varepsilon}=1/2$, the masked experiment has full and best-singleton contrasts both $1/2$, yet [Equation 4.9](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:masked-def1) gives $\delta_P(12\mid1)=1/8$ and [Equation 4.10](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:masked-def2) gives $\delta_P(12\mid2)=1/4$. 

□

 There is a concrete decision witness. With source prior ${\mathbb P}(b=0)=3/4$, optimal binary classification has Bayes error $1/8$ from the pair and $1/4$ from its first coordinate. The calculation is in [Appendix A](/consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations#app:masking). Equal-prior pairwise discrimination is only one decision problem, so preserving its best score does not preserve the full experiment.

Redundant representations can also overlap. In $(Y_1,Y_2,Y_3)=(\xi,\xi\oplus b,\xi)$, the pairs $12$ and $23$ each have deletion diagnostic $1/2$, while $u_P(13)=u_P(123)=0$. The full triple has not lost the bit: it contains redundant ways to retain it. A disjoint partition of informative representations is not implied by statistical sufficiency.

---

# Section 5: Native execution and resource-relative severability

<a id="section-5"></a>

## 5 Native execution and resource-relative severability

<a id="sec:execution"></a> 

<a id="section-5-1"></a>

### 5.1 Three questions, not one integration score

 A joint code may exist without a physically available decoder. A physical interaction may occur even though a disconnected alternative reproduces its retained records. An informative backup may be statistically redundant but operationally necessary after an erasure. The information diagnostic therefore cannot absorb the execution and comparison contracts.

For each registered support $C$, let ${\mathcal W}_C$ be its fixed finite physically justified catalogue of compatible native schedules. A schedule includes operating type, source preparations, retained records, clock, controller and receiver ownership, and the certificate that its nominated covering route is internal. The catalogue uses supplied installed primitive/port incidences. It is not recomputed from a minimal-target graph whenever a probability changes. If those implementation data are absent, the support is uncertified by this construction; that is not a conclusion about experience.

For a specified root contrast, write $r_w$ for the TV distance between the two terminal internal root laws under $w$. Where a finite family of root contrasts is admitted, a maximum over that fixed family may be used. It is not permissible to change preparations or the retained root record after observing which comparison gives a favourable value.



<a id="section-5-2"></a>

### 5.2 The comparison class is part of the quantity

 Fix a resource contract ${\mathcal R}$, an experiment family ${\mathcal E}$, and a nonempty class ${\mathcal N}_{{\mathcal R}}$ of coherent simulator models. Each simulator supplies laws for *all* admitted experiments with its own resources and update rules fixed. Define <a id="eq:cut-radius"></a>


$$

 \mathfrak I_{{\mathcal R}}(P)
 =\inf_{Q\in{\mathcal N}_{{\mathcal R}}}d_{{\mathcal E}}(P,Q).

$$

Equation (5.1).

 For a cut $C=B\sqcup D$ and one scheduled test family, use the more explicit notation <a id="eq:schedule-cut"></a>


$$

 \mathfrak I_{w,{\mathcal R}}(B\mid D)
 =\inf_{Q\in{\mathcal N}_{w,{\mathcal R}}^{B\mid D}}
 \max_\theta{\operatorname{TV}}(P^{C,w}_\theta,Q^w_\theta).

$$

Equation (5.2).

 Public test identity can be visible where the contract allows it. The alternative may not select a new model after learning an unknown source value, communicate through an uncharged global controller, or restore an erased resource at each nominal step.

<a id="source-proposition-5"></a>

**Proposition 5.1 (Resource and experiment comparison).**

<a id="p2-10"></a> Enlarging an allowed simulator class cannot increase $\mathfrak I$. Enlarging a common tested experiment family cannot decrease it when the simulator family has coherent restrictions. For one fixed null class, <a id="eq:cut-lipschitz"></a>


$$

 |\mathfrak I_{{\mathcal R}}(P)-\mathfrak I_{{\mathcal R}}(P')|
 \le d_{{\mathcal E}}(P,P').

$$

Equation (5.3).

 If two preparations differing only on side $B$ change the *joint* opposite-side record law by $\eta$, every alternative whose $D$-record marginal ignores that prepared $B$-value has worst-case complete-law error at least $\eta/2$. 

 <a id="source-proof-9"></a>

**Proof.**

The first two claims follow directly from the infimum and supremum with their indicated fixed objects. The triangle inequality gives $d(P,Q)\le d(P,P')+d(P',Q)$; taking infima and reversing the targets proves [Equation 5.3](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:cut-lipschitz). For the cut bound, both alternative $D$-laws equal one law $Q_D$. Hence $\eta\le{\operatorname{TV}}(P_D,Q_D)+{\operatorname{TV}}(Q_D,P_D')$. At least one term is $\eta/2$ or larger, and marginalization cannot increase complete-law error. 

□

 The last bound detects a bit encoded only in a block correlation on the far side of the cut. It does not identify that block with a collection of separately signaling singleton edges. It is only a lower bound for the actual simulator class; replacing that class by all nonsignaling laws can change the optimization.

For a finite-horizon strategy catalogue, allowing shared randomization forms the convex hull of the deterministic strategy laws and often gives a finite TV linear program. Private randomized local strategies need not form that same convex class. Treating a shared random seed as free when it is not allowed changes the question. Communication-restricted input-guessing problems provide useful precedents for such resource distinctions <a id="citation-7"></a>[[2](/consciousness/research/paper-2/references#bib-AlmeidaEtAl2010)]; the following full-law calculation is stated for its particular classical contract.

<a id="source-proposition-6"></a>

**Proposition 5.2 (Weak SWAP and resource dependence).**

<a id="p2-11"></a> Let $P_g=(1-g){\operatorname{id}}+g\operatorname{SWAP}$ on two input bits, with $0\le g\le1$. Under one-step simultaneous outputs, arbitrary local functions and shared input-independent randomness, but no communication, <a id="eq:weak-swap"></a>


$$

 \mathfrak I_{\mathrm{shared,no\ communication}}(P_g)=g/2.

$$

Equation (5.4).

 For full SWAP, private independent local randomness gives optimum $3/4$; shared randomness gives $1/2$; one timely communicated bit in one direction still gives $1/2$; one timely bit in each direction gives zero. Messages delivered after the output deadline do not alter the earlier output law. 

 <a id="source-proof-10"></a>

**Proof.**

Changing the opposite input changes each target marginal by $g$, proving the shared no-communication lower bound. For attainment, let both sides output their own bit XOR a common bit $\xi$ with ${\mathbb P}(\xi=1)=g/2$. On equal inputs this changes the pair with probability $g/2$, while the target never changes it. On unequal inputs it swaps the pair with probability $g/2$, rather than $g$. Every row is therefore at distance $g/2$. The private-randomness and communication calculations are given in [Appendix B](/consciousness/research/paper-2/appendix-b-statistical-comparison-and-finite-resource-optima#app:statistical); they preserve the same deadline and input permissions. 

□

 The values are properties of a target together with a comparison contract. They are not intrinsic amounts of phenomenal unity.



<a id="section-5-3"></a>

### 5.3 Perfect encoded return with zero simulation obstruction

 <a id="source-example-1"></a>

**Example 5.3 (The ED separation).**

<a id="p2-12"></a> Consider the full timed trace <a id="eq:ed-trace"></a>


$$

 (b,c)\longmapsto(\xi,\xi\oplus b)\longmapsto(b,0),
 \qquad \xi\text{ fair}.

$$

Equation (5.5).

 The intermediate pair carries the source distinction only jointly, and deleting either singleton loses deficiency $1/2$. The actual scheduled root-return contrast is one. Nevertheless, under an ED-only experiment contract, shared fair $k$ and permission to retain the local initial input admit the disconnected trace generator <a id="eq:ed-simulation"></a>


$$

 \text{side 1: }(k\oplus b,b),\qquad
 \text{side 2: }(k,0).

$$

Equation (5.6).

 For each prepared $(b,c)$, set $\xi=k\oplus b$. This is fair and makes the entire joint trace equal in law to [Equation 5.5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:ed-trace). Thus its shared-no-communication cut radius is zero. 

 This is not a claim that the installed encoder and decoder failed to interact. Nor does the construction simulate every operation in a larger native catalogue: a separately callable decoder under independently prepared inputs adds tests not present in the ED-only contract. The simulator also uses persistent local input information; forbidding that resource changes the comparison.

<a id="source-figure-2"></a>

![Figure 2](/publications/consciousness/paper-2/figures/figure-2.svg)

  



Figure 2. A candidate profile reports three separately specified objects. Joint information is a statistical property; a return witness is an implementation claim; a cut radius is relative to allowed alternative processes. The arrows mean inclusion in a profile, not logical implication between the three properties.

<a id="fig:three-layers"></a> 



<a id="section-5-4"></a>

### 5.4 A family of candidates rather than a compulsory partition

 <a id="source-definition-3"></a>

**Definition 5.4 (Schedule-indexed candidate family).**

<a id="p2-13"></a> For fixed registered supports, cut lists, resource contracts and witness catalogues, define <a id="eq:candidate-family"></a>


$$

 {\mathcal F}_{\tau,\rho}^{{\mathcal R},H}
 =\left\{C:\begin{array}{l}
 \exists w\in{\mathcal W}_C,\ |w|\le H,\quad r_w>\rho,\\
 \mathfrak I_{w,{\mathcal R}}(B\mid D)>\tau
 \text{ for every registered nontrivial cut }C=B\sqcup D
 \end{array}\right\}.

$$

Equation (5.7).

 The same schedule must supply the return and all its cut comparisons. Singletons have no nontrivial spatial cut and are reported separately. The full diagnostic retains the support, witness, reconstruction table, cut profile and implementation data, not just membership at one selected threshold. 

 No particular $\tau,\rho,H$ is selected here as a phenomenal boundary. Changing resource classes can change the family. Even at fixed parameters it need not be laminar.

For example, a ready controller may choose either an $AB$ mode or a $BC$ mode, then lock that choice for two ticks. In either mode, two native swaps return a bit perfectly, and the first-round record gives a no-communication cut lower bound $1/2$. A shared-guess strategy attains it for the two-tick trace when local initial memory is allowed. Both dyads are candidate supports for suitable $\tau<1/2$, $\rho<1$. They overlap, while no compatible schedule covers $ABC$. The family describes alternative executable organizations, not two independently duplicated uses of the same $B$ and not simultaneous overlapping subjects.

<a id="source-proposition-7"></a>

**Proposition 5.5 (Dynamically isolated spectators).**

<a id="p2-14"></a> Suppose an added process $Z$ is independent of $C$ throughout every nominated complete experiment: $P_{C,Z}^{e}=P_C^{e}\otimes P_Z^{e}$. The spectator preparation and law are fixed across the compared unknown $C$-source states at a fixed public context. Its preparation, operations and controller supply no cross-feedback or transferable memory, randomness, fuel or communication resource. Suppose the old-cut null families are closed under projection and the corresponding independent extension by the exact spectator, and the actual independent product process is permitted by the local resource budgets at the outer cut $C\mid Z$. Then adding $Z$ leaves the old cut radii and old candidate data unchanged, while the outer cut $C\mid Z$ has radius zero. 

 <a id="source-proof-11"></a>

**Proof.**

Extend an approximate simulator of $C$ by the independent exact spectator; its error is unchanged because ${\operatorname{TV}}(P\otimes R,Q\otimes R)={\operatorname{TV}}(P,Q)$. This gives one inequality for old cuts. Project any enlarged simulator to $C$; the stipulated closure and TV contraction give the reverse inequality. Across $C\mid Z$, the actual product target is already an admissible separated simulator. A detailed statement of the schedule and resource scope is in [Appendix D](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#app:resources). 

□

 Product local transition rows alone do not imply these hypotheses if an exterior policy drives one process using the other's past outputs. The independence requirement is imposed on the complete experiments actually compared. Informational padding does not imply these physical hypotheses. For instance, a copied source bit has zero snapshot deletion loss but can return after an overwrite; it is not a spectator in that later experiment. Conversely, excluding a padded support from positive all-cut membership says nothing by itself about consciousness. The construction is pre-phenomenal at every step.

---

# Section 6: Relational encapsulation through a causal interface

<a id="section-6"></a>

## 6 Relational encapsulation through a causal interface

<a id="sec:composition"></a> 

<a id="section-6-1"></a>

### 6.1 A strong quotient is a joint-law statement

 A lower organization becomes an effective relatum only relative to the interactions its exterior may perform. Its effective state must remain sufficient after those interactions, including return of previously stored information. This requirement has established relatives in lumpability, probabilistic refinement, causal abstraction and open-process composition <a id="citation-8"></a>[[15](/consciousness/research/paper-2/references#bib-LarsenSkou1991), [8](/consciousness/research/paper-2/references#bib-DorschEtAl2017), [25](/consciousness/research/paper-2/references#bib-RubensteinEtAl2017), [3](/consciousness/research/paper-2/references#bib-BaezCourser2018)]. We use a finite joint-instrument construction whose physical access assumptions remain explicit.

Let $m:X\to\mathcal M_0$ be the protected mark map. It contains required operating-type, timing, ownership and resource distinctions. Marks need not all be publicly observable. Protecting a remaining blank or a queued message does not grant the controller an otherwise forbidden measurement of it.

<a id="source-theorem-3"></a>

**Theorem 6.1 (Strong marked actual-state quotient).**

<a id="p2-16"></a> Fix a surjection $q_X:X\to Z$ on the nominated finite closed domain. There exists a normalized effective instrument and descended mark map preserving the protected marks and the joint record and successor-class law for every admitted actual state if and only if $m$ descends through $q_X$ and <a id="eq:strong-quotient"></a>


$$

 \sum_{y:q_X(y)=z'}K_{u,o}(x,y)
 =\overline K_{u,o}(q_X(x),z')

$$

Equation (6.1).

 is independent of the representative $x$ in each fibre, for all $u,o,z'$. The effective instrument is unique for that map. Starting with the mark partition, finite partition refinement yields the coarsest strong quotient preserving the marks. 

 <a id="source-proof-12"></a>

**Proof.**

Necessity follows by comparing the pointwise effective successor laws at representatives in the same fibre; the semantic marks must also agree. Sufficiency follows by taking the displayed sums as the definition. Nonnegativity and normalization follow from [Equation 2.1](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#eq:instrument), and surjectivity gives uniqueness. For the final claim, repeatedly split blocks according to their current-block label and all vectors of joint probabilities into current blocks for each $u,o$. Each strict split increases the number of blocks. Every stable mark-preserving partition refines every iterate by induction, so the terminating partition is the coarsest one. Full details, including the domain convention, are in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 The pointwise condition is a mathematical requirement for all nominated actual states; it does not assert that the laboratory can prepare each state. It is stronger than matching only the chosen initial distribution. If a reachable subdomain is used, it must be closed under all admitted actions, and the same restriction must be made in every compared construction.

Here “coarsest” means among deterministic strong quotients of this realization with these marks. It does not mean smallest among all stochastic generators or most economical among physical implementations. A stochastic matrix is not itself a construction of a replacement device.

Interface theories also make environmental assumptions and compositional refinement explicit. Doyen and collaborators study the reuse of one component to implement several interfaces, including timing and resource-related aspects <a id="citation-9"></a>[[9](/consciousness/research/paper-2/references#bib-DoyenEtAl2008)]. The present construction has a different target: equality of complete finite stochastic laws through a marked quotient, followed by preservation of a separately declared simulator class. Its treatment of overlapping supports does not turn one physical component into independent copies.



<a id="section-6-2"></a>

### 6.2 Causal substitution, including feedback

 Consider modules $\mathcal M_i$, each equipped with a quotient $q_i$ satisfying [Equation 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:strong-quotient). Their finite-state wiring context retains a state $c$ comprising its controller, clock, delayed messages, shared drivers and owned resources. It accesses only declared ports. Its choice of a called module and action is the same on product-quotient fibres: it cannot inspect discarded coordinates.

Calls are causally ordered, or simultaneous calls are unfolded with their old inputs latched and their declared independent innovations retained. A common simultaneous random event requires its own joint instrument and joint congruence; separately correct marginals do not suffice. The original joint initial distribution is pushed forward jointly, preserving initial correlations rather than replacing them by a product.

<a id="source-theorem-4"></a>

**Theorem 6.2 (Exact substitution in a matching causal context).**

<a id="p2-17"></a> Under those contracts, <a id="eq:global-q"></a>


$$

 Q(x_1,\ldots,x_n,c)=(q_1(x_1),\ldots,q_n(x_n),c)

$$

Equation (6.2).

 is a strong quotient of the composed network. Replacing the modules by their quotient instruments preserves every admitted finite adaptive retained-transcript law, including delayed feedback and finite stopping rules. 

 <a id="source-proof-13"></a>

**Proof.**

For one call of module $i$, sum the global transition over a fibre of $Q$. Other module coordinates remain fixed, the context transition uses the same input and record, and the called module contributes exactly the sum in [Equation 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:strong-quotient). It is independent of the discarded representative. Common randomized choices of the next call preserve that property by summation. The joint prepared law has the same pushforward, so induction over the causal event sequence preserves each finite record law. A finite adaptive experiment can equivalently be unfolded as a policy tree. The detailed global-row calculation is supplied in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 Shared input-independent randomness can be part of the retained context. An omitted shared event that correlates a local innovation with a discarded variable is not covered. Reuse of a module carries its successor state forward; the theorem does not reinitialize its memory or fuel at the next call. Nor does it solve an instantaneous algebraic feedback equation that has not been given a causal implementation.

<a id="source-corollary-2"></a>

**Corollary 6.3 (Minimization-compatible composition).**

<a id="p2-18"></a> Let ${\operatorname{Eff}_{*}}$ denote the coarsest strong quotient preserving fixed marks, and let $W$ be a matching causal wiring. With corresponding global marks descending through the product quotient, and a common closed or consistently reachable domain, <a id="eq:min-composition"></a>


$$

 {\operatorname{Eff}_{*}}\bigl(W[\mathcal M_1,\ldots,\mathcal M_n]\bigr)
 \cong
 {\operatorname{Eff}_{*}}\bigl(W[{\operatorname{Eff}_{*}}\mathcal M_1,\ldots,{\operatorname{Eff}_{*}}\mathcal M_n]\bigr).

$$

Equation (6.3).

 The isomorphism preserves the marked joint instruments and prepared laws. 

 <a id="source-proof-14"></a>

**Proof.**

The product map of [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17) is an intermediate strong quotient. The coarsest strong partition of the fine composite is coarser than its fibres, so it induces a strong partition of that intermediate quotient. Conversely, every strong partition of the intermediate quotient pulls back to a strong partition of the fine system. These two constructions show that their final coarsest quotients agree up to class relabeling. The proof with explicit sums is in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 Figure [3](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#fig:composition) records the substitution claim. It is a conditional operational meaning of “relation becomes relatum.” The internal state dimension need not repeat at the next level. The active parity construction in [Section E](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#app:relational) supplies a proper reduction and a higher recurrent organization, without a fixed-size self-similarity assertion.

<a id="source-figure-3"></a>

![Figure 3](/publications/consciousness/paper-2/figures/figure-3.svg)

  



Figure 3. Exact encapsulation under a fixed causal wiring. Vertical arrows preserve joint records, successor classes and protected marks. The lower network is not allowed additional ports, fresh copies of shared resources or a changed clock. Further minimization gives [Equation 6.3](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:min-composition).

<a id="fig:composition"></a> 



<a id="section-6-3"></a>

### 6.3 Behavioral equality is not actual-class closure

 <a id="source-example-2"></a>

**Example 6.4 (Trace equivalence without strong predictive-class closure).**

<a id="p2-26"></a><a id="ex:trace"></a> Use one action and five states. State $a$ emits 0 and remains at $a$; $b$ emits 1 and remains at $b$. State $c$ emits 0 and enters $a$, or emits 1 and enters $b$, with probabilities $1/2$. State $x$ emits $\#$ and enters $a$ or $b$ with equal probabilities; $y$ emits $\#$ and enters $c$ surely.

States $x,y$ have identical all-finite output laws: $\#$ followed by only zeros or only ones, each with probability $1/2$. The trace classes are $\{a\},\{b\},\{c\},\{x,y\}$. Yet the probability of entering class $\{c\}$ after $\#$ is zero from $x$ and one from $y$. Thus trace equivalence has not supplied a strong actual-class instrument.

A different four-state generator using $a,b,c,z$, with $z$ emitting $\#$ and choosing $a,b$ fairly, reproduces the same boundary traces. It is not the failed actual-state quotient. This is the distinction already present in the predecessor's predictive-fibre discussion, not a new impossibility of smaller stochastic simulation. 

 Exact complete word-law equality can still suffice for behavioral substitution in a port-only causal context. The relevant argument multiplies word probabilities by the context's causal action probabilities; it is given as [Proposition C.1](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#p2-36) in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). It does not reconstruct actual successor classes. Likewise, an observer's posterior belief is a predictive state, not necessarily a realized intrinsic state. Even a finite hidden carrier can generate infinitely many posterior beliefs. Input-output predictive-state formalisms provide a natural setting for that distinction <a id="citation-10"></a>[[4](/consciousness/research/paper-2/references#bib-BarnettCrutchfield2014)].



<a id="section-6-4"></a>

### 6.4 Two obstructions to weaker substitution claims

 <a id="source-proposition-8"></a>

**Proposition 6.5 (Offline reconstruction versus timely substitution).**

<a id="p2-21"></a> Let an early process emit $(\theta,0)$ at two successive deadlines, and a delayed process emit $(0,\theta)$, with unknown $\theta\in\{0,1\}$. Their completed experiments have zero deficiency in both directions. A causal adapter from the delayed process to the early one, with no source-correlated side information, has optimal worst-case timed-trace error $1/2$. 

 <a id="source-proof-15"></a>

**Proof.**

After completion, exchanging the two record positions reconstructs either experiment exactly. At the first deadline the delayed process has provided no information about $\theta$. If the adapter's first guess has probability $p$ of being 1, its two source-conditional errors are $p$ and $1-p$; their maximum is at least $1/2$. A fair guess followed by the correct constant final output attains $1/2$. The reverse temporal direction can store the early bit until the later deadline. 

□

 This does not contradict data processing. The completed-record decoder is not a causal adapter on prefixes. Timing-aware compositional frameworks have made such access distinctions explicit in other settings <a id="citation-11"></a>[[19](/consciousness/research/paper-2/references#bib-PortmannEtAl2017)]; no quantum or relativistic extension of the present finite theorem is inferred from that connection.

<a id="source-proposition-9"></a>

**Proposition 6.6 (Approximate fixed-input agreement need not survive feedback).**

<a id="p2-22"></a> A process first emits $j$, uniform on $\{0,\ldots,n-1\}$. Its second action is $u$. Process $M$ emits ${\mathbf 1}\{u=j\}$, while $N$ emits zero. Each fixed second-action experiment has complete-law TV distance $1/n$, but the adaptive policy $u=j$ has distance one. 

 <a id="source-proof-16"></a>

**Proof.**

For fixed $u$, exactly the challenge $j=u$, of probability $1/n$, produces different final outputs. For $u=j$, the final outputs differ on every branch. The uniform joint-row error needed in the next section is one on the offending rows, so that stronger certificate detects the failure. 

□

 The proposition does not invalidate exact all-word equality. It invalidates transferring an approximate open-loop bound to adaptive use with the same constant and no further premise.

---

# Section 7: Approximation and preservation of comparison meaning

<a id="section-7"></a>

## 7 Approximation and preservation of comparison meaning

<a id="sec:approximation"></a> 

<a id="section-7-1"></a>

### 7.1 Uniform joint rows control finite causal histories

 Exact quotients are useful reference objects, but an implemented effective model may only approximate them. A complete-history guarantee must then specify what error is uniform and which resources remain identical. Approximate-bisimulation research already emphasizes that compositional error control depends on the operators and metric used <a id="citation-12"></a>[[11](/consciousness/research/paper-2/references#bib-GeblerTini2013)]. The following bound is derived directly for the present joint-instrument contract.

<a id="source-theorem-5"></a>

**Theorem 7.1 (Finite-call causal error budget).**

<a id="p2-19"></a> Work in the matching causal context of [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17), with the same retained controller and reference variables and the same conditional independence or joint-event semantics. For each module $i$, let the conditional law of its next joint record and coarse successor, at every admitted fine state, action and retained context, be within $\epsilon_i\in[0,1]$ of the corresponding effective row. Assume the action, timing, ownership and resource semantics are preserved exactly. Let the matching joint initial-law error be at most $\delta_0\in[0,1]$. If every admitted execution calls module $i$ at most $n_i$ times, then its complete retained-history discrepancy is at most <a id="eq:call-budget"></a>


$$

 \beta=1-(1-\delta_0)\prod_i(1-\epsilon_i)^{n_i}
 \le \min\left\{1,\delta_0+\sum_i n_i\epsilon_i\right\}.

$$

Equation (7.1).

 The bound includes adaptive module/action selection and finite stopping within those pathwise call budgets. 

 <a id="source-proof-17"></a>

**Proof.**

Couple the initial coarse joint states with agreement probability at least $1-\delta_0$. While states and retained histories agree, the common causal controller chooses the same next call and action. Couple the called module's joint outcome/coarse-successor row with failure probability at most $\epsilon_i$. Conditional on the coarse outcome, a fine successor can be sampled using the original row, preserving its marginal law. The bound holds for every fine representative and hence after any history-dependent mixture of representatives.

For a remaining count vector $r$, backward induction gives agreement probability at least $\prod_i(1-\epsilon_i)^{r_i}$: a call to $i$ contributes $1-\epsilon_i$ and reduces $r_i$ by one; an earlier stop removes potential failures. This does not assume independent failure events. Multiply by the initial agreement bound and apply the coupling characterization of TV. The final inequality is the elementary union bound. An expanded argument appears in [Appendix D](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#app:resources). 

□

 A bound only on output marginals, only on visited training states, or only on terminal laws is not the hypothesis. Nor may a controller's earlier observations be discarded when applying a terminal-state contraction bound. Postselection on a rare retained event can amplify discrepancy and needs a separate estimate.

<a id="source-proposition-10"></a>

**Proposition 7.2 (Abstraction layers are not extra physical calls).**

<a id="p2-20"></a> If several descriptions of the *same* event are compared through consistent projection maps, their transported discrepancies add by triangle inequality. The bound is generally $\epsilon_{\mathrm{stack}}\le\min\{1,\sum_\ell\epsilon_\ell\}$, not a product-of-successes bound. Bernoulli laws of parameters $0,1/10,1/5$ have adjacent distances $1/10$ but end-to-end distance $1/5>1-(9/10)^2$. 

 <a id="source-proof-18"></a>

**Proof.**

Insert every intermediate law in the final common record space and contract each discrepancy through any later postprocessing. The displayed Bernoulli example attains the triangle sum and excludes the proposed product replacement. 

□

 Clock alignment therefore precedes error propagation. First accumulate errors between descriptions of a common event; then apply [Equation 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:call-budget) to the resulting joint-row bound along actual events.



<a id="section-7-2"></a>

### 7.2 Robust candidate views under fixed physical contracts

 <a id="source-corollary-3"></a>

**Corollary 7.3 (Fixed-contract profile stability).**

<a id="p2-15"></a> Suppose two descriptions have the same initial laws, supports, records, root comparisons, witness catalogues, cut lists and simulator classes. Let each matching full joint instrument row differ by at most $\epsilon$, and let all nominated schedules have length at most $H$. Put <a id="eq:beta-H"></a>


$$

 \beta_H=1-(1-\epsilon)^H.

$$

Equation (7.2).

 Then the corresponding deficiencies and root contrasts differ by at most $2\beta_H$, and corresponding cut radii differ by at most $\beta_H$. Consequently, <a id="eq:fixed-family-inclusion"></a>


$$

 \widehat{{\mathcal F}}_{\tau+\beta_H,\rho+2\beta_H}^{{\mathcal R},H}
 \subseteq{\mathcal F}_{\tau,\rho}^{{\mathcal R},H}
 \subseteq
 \widehat{{\mathcal F}}_{\tau-\beta_H,\rho-2\beta_H}^{{\mathcal R},H}.

$$

Equation (7.3).

 Threshold views are interpreted by their defining inequalities even when a shifted threshold is negative. 

 <a id="source-proof-19"></a>

**Proof.**

[Theorem 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#p2-19) bounds the complete history-law error by $\beta_H$. [Proposition 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-06) bounds deficiency differences by twice that error; triangle inequality gives the same factor for a contrast of two prepared root laws. [Equation 5.3](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:cut-lipschitz) gives the single-factor cut bound. Use the same witness on each side of each inclusion; its simultaneous inequalities survive the stated threshold shifts. 

□

 This is quantitative stability of a weighted or set-valued functional description. It does not assert global continuity of a discrete subject count. A kernel change that also changes the physically valid catalogue, boundary isolation or reachable domain violates the fixed-contract premise and requires a new execution audit.



<a id="section-7-3"></a>

### 7.3 Target fidelity does not determine the alternatives

 An effective description might reproduce the target perfectly while making communication, memory or a shared seed free to a separated simulator. It would then alter the meaning of $\mathfrak I$. Target preservation and preservation of the comparison class are distinct obligations.

For coherent law families on matching experiments, define the Hausdorff discrepancy <a id="eq:hausdorff"></a>


$$

 d_H({\mathcal N},\overline{{\mathcal N}})=
 \max\left\{
 \sup_{Q\in{\mathcal N}}\inf_{\overline Q\in\overline{{\mathcal N}}}d_{{\mathcal E}}(Q,\overline Q),
 \sup_{\overline Q\in\overline{{\mathcal N}}}\inf_{Q\in{\mathcal N}}d_{{\mathcal E}}(Q,\overline Q)
 \right\}.

$$

Equation (7.4).

 The same translated simulator must work over the entire stipulated experiment family; matching it separately for each unknown preparation is not enough.

<a id="source-theorem-6"></a>

**Theorem 7.4 (Comparison-faithful transport).**

<a id="p2-23"></a> Let ${\mathcal N},\overline{{\mathcal N}}$ be nonempty coherent simulator-law families in one common experiment metric. If 

$$

 d_{{\mathcal E}}(P,\overline P)\le\beta,
 \qquad d_H({\mathcal N},\overline{{\mathcal N}})\le\nu,

$$

 then <a id="eq:null-transfer"></a>


$$

 \left|{\operatorname{dist}}(P,{\mathcal N})-{\operatorname{dist}}(\overline P,\overline{{\mathcal N}})\right|
 \le\beta+\nu.

$$

Equation (7.5).

 No attainment of the defining infima is required. If, additionally, supports and cuts correspond and witness schedules can be physically transported in both directions with these uniform budgets, then <a id="eq:transport-family"></a>


$$

 \widehat{{\mathcal F}}_{\tau+\beta+\nu,\rho+2\beta}
 \subseteq{\mathcal F}_{\tau,\rho}
 \subseteq\widehat{{\mathcal F}}_{\tau-\beta-\nu,\rho-2\beta},

$$

Equation (7.6).

 where all suppressed resource and horizon indices are matched. Corresponding reconstruction deficiencies and root contrasts change by at most $2\beta$. 

 <a id="source-proof-20"></a>

**Proof.**

For any $\eta>0$, choose $Q\in{\mathcal N}$ within $\eta$ of ${\operatorname{dist}}(P,{\mathcal N})$, then $\overline Q\in\overline{{\mathcal N}}$ with $d(Q,\overline Q)\le\nu+\eta$. Triangle inequality yields 

$$

 {\operatorname{dist}}(\overline P,\overline{{\mathcal N}})
 \le\beta+{\operatorname{dist}}(P,{\mathcal N})+\nu+2\eta.

$$

 Let $\eta\downarrow0$ and reverse the roles. This proves [Equation 7.5](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:null-transfer). The other bounds follow from the preceding deficiency and contrast arguments, and physically transporting the same qualifying witness proves [Equation 7.6](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:transport-family). 

□

 The metric estimate is elementary. Its demanding application premise is the two-sided match between *allowed processes*, including their side information, delays and resource ownership. A resource-preserving compilation and lifting of simulators in both directions is a sufficient certificate. One-way translation generally gives only one inequality. When both target laws and the closures of the null-law families coincide exactly, the distances coincide exactly.

The SWAP values in [Proposition 5.2](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-11) show why this matters. Identical target laws have cut radius $3/4$, $1/2$ or zero under different permissions. There is no target-only quotient that simultaneously preserves those distinct meanings while silently changing the alternatives. Moreover, exterior law preservation concerns the specified exterior records and corresponding cuts. It neither recovers omitted native observations nor reveals hidden interior cuts.

Together, [Theorem 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-16), [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17), [Theorem 7.4](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#p2-23) give a useful encapsulation contract: joint target closure, implementable causal substitution, and comparison-faithful transport. They do not imply that every candidate support admits a proper reduction, that every physical implementation of the same boundary law has the same internal organization, or that any encapsulated unit is a subject.

---

# Section 8: Operational identification and its ceiling

<a id="section-8"></a>

## 8 Operational identification and its ceiling

<a id="sec:identification"></a> 

<a id="section-8-1"></a>

### 8.1 The compared object is a model together with its preparation

 A failure to reconstruct an entire source does not imply that every source attribute is unknowable. Conversely, a successful effective model does not identify the ontology of its source. To state the distinction precisely, let $\Xi$ be a class of candidate model/preparation pairs. It need not be finite. Fix the admitted family ${\mathcal E}$ of complete experiments, including their preparations, adaptive policies, stopping rules, retained records and access resources.

Write <a id="eq:operational-lawmap"></a>


$$

 {\mathscr L_{\mathcal E}}(\xi)=(P^e_\xi)_{e\in{\mathcal E}},\qquad
 \xi\equiv_{{\mathcal E}}\xi'\ \Longleftrightarrow\ {\mathscr L_{\mathcal E}}(\xi)={\mathscr L_{\mathcal E}}(\xi'),
 \qquad{q_{\mathrm{op}}}:\Xi\to\Xi/{\equiv_{{\mathcal E}}}.

$$

Equation (8.1).

 This quotient can compare rival ontologies without pretending they are states of one already agreed physical model. It is an exact-law equivalence class, not necessarily a present observable, a computable object, a finite-dimensional Markov state, or a physical surrogate.

<a id="source-theorem-7"></a>

**Theorem 8.1 (Exact-law attribute identification).**

<a id="p2-27"></a> For an attribute $\alpha:\Xi\to V$, the following are equivalent: $\alpha$ is determined by ${\mathscr L_{\mathcal E}}$ within $\Xi$; it is constant on every $\equiv_{{\mathcal E}}$-class; and there exists a unique map $\overline\alpha$ on the quotient such that <a id="eq:attribute-factor"></a>


$$

 \alpha=\overline\alpha\circ{q_{\mathrm{op}}}.

$$

Equation (8.2).

 If constancy fails, the identified object at an exact law family $k$ is the set <a id="eq:identified-set"></a>


$$

 \mathcal A(k)=\{\alpha(\xi):{\mathscr L_{\mathcal E}}(\xi)=k\},

$$

Equation (8.3).

 not a uniquely determined label. 

 <a id="source-proof-21"></a>

**Proof.**

Equal complete laws cannot determine different attribute values. Conversely, constancy defines $\overline\alpha([\xi])=\alpha(\xi)$ unambiguously; surjectivity gives uniqueness. The factorization recovers the attribute from the class specified by the law family. When values differ within a class, its fibre image is exactly [Equation 8.3](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:identified-set). 

□

 This is a set-theoretic factorization theorem applied to an operational identification problem. If the spaces and $\alpha$ are measurable and the quotient receives the quotient sigma-algebra, the induced $\overline\alpha$ is measurable: its pulled-back inverse images are those of $\alpha$. This does not guarantee a standard Borel quotient or regular conditional distributions on an arbitrary quotient.

The result neither certifies a label from finitely many observations nor proves its intended phenomenal meaning. An attribute could be fixed across all compatible models even though other parts of those models remain unidentified. The correct obstruction is disagreement about the attribute *inside the same operational class*, not incompleteness in the abstract.



<a id="section-8-2"></a>

### 8.2 Surrogates and statistical testing

 The predecessor source/readout analysis distinguishes a nominated readout from the full permitted experiment family <a id="citation-13"></a>[[22](/consciousness/research/paper-2/references#bib-RodgersSealed2026)]. Copying complete laws onto their operational quotient preserves those laws but does not, by itself, build a finite physical apparatus. The identity readout used to describe that surrogate is not a new admitted experiment returning the entire equivalence class; the stipulated experiment family remains unchanged.

<a id="source-theorem-8"></a>

**Theorem 8.2 (Statistical surrogate and testing ceiling).**

<a id="p2-28"></a> The laws $P^{e,\circ}_{[\xi]}=P^e_\xi$ define a statistical model on $\Xi/{\equiv_{{\mathcal E}}}$. Giving this model identity readout yields an injective-readout surrogate of all stipulated experiments. If the admitted alternative class contains such a surrogate for every source model under consideration, no test based on those experiments distinguishes the model from its surrogate.

More quantitatively, a randomized test $\varphi\in[0,1]$ with level at most $\alpha_{\mathrm{test}}$ against a nonempty alternative-law family $\mathcal Q$ has, under target law $P$, power at most <a id="eq:test-power"></a>


$$

 \min\left\{1,\alpha_{\mathrm{test}}+\inf_{Q\in\mathcal Q}{\operatorname{TV}}(P,Q)\right\}.

$$

Equation (8.4).

 For two binary-labeled candidates with equal prior weights, every classification test has mean error at least <a id="eq:binary-error"></a>


$$

 \tfrac12\bigl[1-{\operatorname{TV}}(P,Q)\bigr].

$$

Equation (8.5).

 For finite record alphabets the latter bound is attained by a likelihood-ratio test. 

 <a id="source-proof-22"></a>

**Proof.**

The surrogate laws are well defined by [Equation 8.1](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:operational-lawmap). Equal laws give equal probabilities to every test outcome. For each alternative $Q$, ${\mathbb E}_P\varphi\le{\mathbb E}_Q\varphi+{\operatorname{TV}}(P,Q)$; taking the infimum proves [Equation 8.4](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:test-power). If $\varphi$ declares the first binary label, the average error is $\tfrac12[1-({\mathbb E}_P\varphi-{\mathbb E}_Q\varphi)]$, proving [Equation 8.5](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:binary-error). Choosing the event where $P$ exceeds $Q$ attains it on a finite alphabet. 

□

 The surrogate is not automatically a local, finite-memory or resource-bounded physical realization. Those restrictions require separate membership proofs. Nor is a statistical representation without a phenomenal symbol automatically unconscious. Deleting an interpretation from notation is not an intervention removing experience from a physical system.

When the original complete laws form a causally consistent experiment system with finite action and record alphabets, a history representation is explicit. At a positive-probability history $h_t$, divide the probability of its extension by the probability of its prefix, with the next action externally selected under the fixed intervention semantics. Causal consistency makes the prefix denominator independent of the later action. The chain rule reconstructs all finite policy laws. At impossible histories one may choose an arbitrary normalized continuation without changing the admitted law. This gives a history-based realization; it need not be Markovian on a present detector reading or have a finite state space.



<a id="section-8-3"></a>

### 8.3 Identification from exact laws is not uniform finite certification

 <a id="source-proposition-11"></a>

**Proposition 8.3 (A boundary attribute without uniform finite certification).**

<a id="p2-29"></a> Consider independent Bernoulli$(p)$ observations with $p\in[0,1/4]$, and the attribute $\alpha(p)={\mathbf 1}\{p>0\}$. Its exact one-trial law identifies the attribute. For every fixed sample size $n$, however, there is no test with uniformly nontrivial power above its level against all $p>0$. 

 <a id="source-proof-23"></a>

**Proof.**

At $p=0$, only the all-zero record occurs. Its probability at $p>0$ is $(1-p)^n$, so <a id="eq:bernoulli-tv"></a>


$$

 {\operatorname{TV}}(P_p^{\otimes n},P_0^{\otimes n})
 =1-(1-p)^n\le np.

$$

Equation (8.6).

 By [Equation 8.4](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:test-power), a level-$\alpha_{\mathrm{test}}$ test has power at most $\alpha_{\mathrm{test}}+np$. Letting $p\downarrow0$ excludes a uniform positive gap. For each fixed positive $p$, the rule “observe at least one success” is nevertheless pointwise consistent as $n\to\infty$. 

□

 The same arithmetic applies to independently reset weak-SWAP trials that register whether a swap occurred. An unbounded repetition supremum distinguishes every positive $g$ from zero with limiting distance one. That does not make a tiny coupling detectable at no cost, and it does not select a phenomenal threshold. Resets, stationarity and independence remain physical permissions rather than consequences of a statistical limit.

The three levels should therefore be kept separate: equality of exact laws, a finite-resource ability to resolve different laws, and the interpretation assigned to those laws. Adding a genuinely new access operation changes ${\mathcal E}$ and reopens the identification question. Nothing here denies a subject's first-person acquaintance; the theorem concerns only the evidence included in its declared experiment family.

---

# Section 9: What a phenomenal bridge adds

<a id="section-9"></a>

## 9 What a phenomenal bridge adds

<a id="sec:bridge"></a> 

<a id="section-9-1"></a>

### 9.1 A logical boundary with a restricted premise

 The preceding mathematics does not assume that fundamental awareness exists, nor that it does not. It concerns functional organizations and experimental access. An awareness-first interpretation can give those organizations a proposed experiential meaning, but that interpretation must be specified rather than inferred from the presence of a recurrence equation.

<a id="source-proposition-12"></a>

**Proposition 9.1 (Unconstrained phenomenal predicates).**

<a id="p2-30"></a> Fix a nonempty functional model and a set of premises concerning its states, operations, records and laws. An optional global awareness postulate A0 may be fixed. Suppose these premises impose no connection to a new local predicate ${P_{\mathrm{loc}}}(C,x)$. Then changing only the interpretation of that predicate leaves every functional premise and record law unchanged. In particular, the premises entail neither its truth nor its negation at an unconstrained eligible pair. 

 <a id="source-proof-24"></a>

**Proof.**

Expand the same functional model with any assignment of the new predicate. None of the stipulated functional formulas or the unconstraining global postulate changes truth value when that assignment changes. Two expansions differing at a nominated pair therefore satisfy the same premises and disagree there. If there are $n$ independently eligible operational classes, even restricting binary labels to be constant on those classes leaves $2^n$ assignments in the absence of further relations. Fixing $k$ independent class labels leaves $2^{n-k}$. Additional symmetry or bridge axioms can reduce this count, but are additional premises. 

□

 This is a conservative-extension observation, not a physical-zombie construction. It does not show that an actual physical system can keep its complete realization while losing experience. It also must not be applied to the *full* SPC-2 constitution as though A1 were absent: A1 already connects qualifying organization to local phenomenal presence. The theorem diagnoses what a functional reduct alone leaves open.



<a id="section-9-2"></a>

### 9.2 Three analytical bridge roles

 The following roles organize the possible commitments. They are neither proved exhaustive nor mutually exclusive.



<a id="paragraph-3"></a>

#### B-S: physically silent constitutive or identity bridge.

 A postulate can identify a qualifying organization with local presence, schematically <a id="eq:silent-bridge"></a>


$$

 \mathrm{A0}\ \land\ L_{\mathrm{fun}}(O,C)
 \ \Longrightarrow_{\text{bridge}}\ {P_{\mathrm{loc}}}(O,C).

$$

Equation (9.1).

 If no physical operation or report kernel changes, this is an interpretive or constitutive extension of the functional law. It can be ontologically substantial without introducing another force. Measuring $L_{\mathrm{fun}}$ then checks the antecedent, not an independent derivation of the implication.



<a id="paragraph-4"></a>

#### B-E: empirically constrained psychophysical identification.

 A proposed identity or realization relation may be compared with independently elicited experience-facing relations under fixed report, calibration and reliability premises. Competing assignments can be constrained without postulating new physical forces. But if a comparison class deliberately includes identical complete record laws with rival phenomenal interpretations, those records alone cannot select the interpretation. Repetition does not remove the need to justify what a report measures. This role can coexist with physical conservativity and hence with B-S.



<a id="paragraph-5"></a>

#### B-C: a bridge entering altered record laws.

 A proposed status variable can enter a causal transition or detector law. As a purely illustrative construction, a registered bit might have probability $1/2+gL_{\mathrm{fun}}$, rather than $1/2$, with $0<g\le1/2$. Repeated admitted trials can test that bias against a fair-bit null. An ordinary physical model with the same bias but a different phenomenal interpretation reproduces the records, however. Awareness is identified only relative to independently justified restrictions on the alternative class and the bridge. This example is not a prediction of Shadow Theory.

Figure [4](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#fig:bridge) summarizes the different inferential inputs. The vertical distinction is substantive: a functional certificate and a psychophysical identifying premise are not two measurements of the same mathematical object. <a id="source-figure-4"></a>

![Figure 4](/publications/consciousness/paper-2/figures/figure-4.svg)

  



Figure 4. Functional evidence and phenomenal attribution have different premises. The first arrow is conditional on the realization and access contract; the final attribution requires a connecting premise. New evidence or identifying assumptions can constrain that premise, but its validity is not supplied by relabeling a functional certificate.

<a id="fig:bridge"></a> 



<a id="section-9-3"></a>

### 9.3 Relation to functional, structural and double-aspect approaches

 The distinction is compatible with taking the philosophical lineage seriously. Levine's explanatory-gap argument distinguishes an epistemological difficulty in explanation from a demonstrated metaphysical falsity of materialism <a id="citation-14"></a>[[17](/consciousness/research/paper-2/references#bib-Levine1983)]. Our conservative-extension proof is narrower still: it concerns what follows when a particular predicate has not been constrained. It does not convert that formal omission into a universal impossibility of a psychophysical explanation.

Lewis provides an important counterpoint <a id="citation-15"></a>[[18](/consciousness/research/paper-2/references#bib-Lewis1972)]. His identification strategy combines a characterization of mental states by their causal roles with a scientific identification of the states occupying those roles. The role-defining and empirical premises can then support an identity. Such a theory is not refuted by [Proposition 9.1](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#p2-30), because the relevant semantic characterization is precisely a connecting premise absent from the proposition's functional reduct. The substantive dispute concerns the adequacy of that characterization, not the elementary possibility of freely interpreting an unmentioned predicate.

Chalmers's structural-coherence, organizational-invariance and double-aspect proposals already articulate a route in which experiential principles accompany physical organization <a id="citation-16"></a>[[7](/consciousness/research/paper-2/references#bib-Chalmers1995)]. SPC-2 continues that broad strategy rather than originating it. Its A2 is a more specific commitment: after primitive presence and the complete nominated endogenous predictive organization are fixed, the constitution posits no additional manifested qualitative remainder. The structural copy supplies a determinate conditional assignment, not evidence that the assignment captures every independently experienced distinction.

The question of which mathematical relations appropriately describe experience is itself a subject of current formal work <a id="citation-17"></a>[[14](/consciousness/research/paper-2/references#bib-KleinerLudwig2023)]. Kleiner's broader model framework treats the non-collatability of aspects of experience and the associated freedom of description <a id="citation-18"></a>[[12](/consciousness/research/paper-2/references#bib-Kleiner2020)]. That issue is related to, but not identical with, the operational quotient here: [Theorem 8.1](/consciousness/research/paper-2/operational-identification-and-its-ceiling#p2-27) compares model/preparation pairs by admitted record laws, rather than assuming that experiential labels are directly interchangeable between subjects. Here the new mathematics concerns the functional side of a proposed comparison. It does not license adjusting an independently nominated phenomenal target, its labels or its calibration merely to force agreement with a physical object.

Integrated information theory 4.0 identifies experience with an irreducible cause–effect structure of a maximally existing substrate and includes explicit integration and exclusion postulates <a id="citation-19"></a>[[1](/consciousness/research/paper-2/references#bib-AlbantakisEtAl2023)]. It is not merely a scalar consciousness score. The present cut radius uses a declared experiment family and permitted simulators; A1 uses a native recurrent-core assignment. Neither the equality of these constructions nor a derivation of IIT's selection postulates is established here. Their shared interest in integrated organization is motivation for comparison, not a mathematical equivalence.

There is also a directly relevant debate about falsification. Kleiner and Hoel distinguish a theory's experiential predictions from the evidence used to infer experience, and analyze substitutions under explicit independence assumptions <a id="citation-20"></a>[[13](/consciousness/research/paper-2/references#bib-KleinerHoel2021)]. Ganesh argues that a broad class of functionalist theories does not admit the substitutions needed for those conclusions <a id="citation-21"></a>[[10](/consciousness/research/paper-2/references#bib-Ganesh2021)]. The present paper does not resolve that disagreement or inherit its universal claims. Its restrictions are narrower: the alternative class and full experiment family are fixed in [Theorem 8.2](/consciousness/research/paper-2/operational-identification-and-its-ceiling#p2-28), and the phenomenal predicate is explicitly unconstrained in [Proposition 9.1](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#p2-30). Whether a particular psychophysical theory satisfies those premises must be checked separately.

The resulting position is therefore neither automatic functional attribution nor automatic rejection of artificial or unfamiliar vessels. Biology, emotion, language and a will to survive are not hypotheses of the finite operational theorems. Their absence does not prove phenomenal absence; their presence does not prove a bridge. A0 supplies one ontological interpretation, A1–A3 make specific constitutive identifications, and the present analysis clarifies what their functional evidence does and does not decide.

---

# Section 10: Consequences for the SPC-2 boundary

<a id="section-10"></a>

## 10 Consequences for the SPC-2 boundary

<a id="sec:consequences"></a> 

<a id="section-10-1"></a>

### 10.1 What the audit changes

 The analysis supports two conclusions together. Published A1 remains an explicit conditional constitutive rule, rather than a mathematically disproved assignment. Nevertheless, the exact candidate construction supporting it has a demonstrated perturbative and finite-certification vulnerability. A constitutive rule can be discontinuous; the masking theorem identifies the cost of using this particular discontinuity to individuate a core.

RJC repairs the information diagnostic by preserving joint experimental distinctions quantitatively. It adds a separate execution and resource analysis and admits controlled composition through a matching interface. These are substantive improvements in the analysis of candidate organizations. They do not reproduce the old support exactly, supply the missing physical data of an arbitrary vessel, or select one new phenomenal partition.

The distinction also prevents two shortcuts. A strong root return does not necessarily owe its strength to cross-core interaction: local persistence can dominate the contrast. And a filter applied to already selected maximal cores cannot recover a proper subcore that the original candidate doctrine never selected.

<a id="source-proposition-13"></a>

**Proposition 10.1 (Nonselection and limits of pointwise strengthening).**

<a id="p2-05"></a> Under the finite native assumptions of this paper: 

1. (i),leftmargin=2em Two distinct native predictive classes require at least two intrinsic live states. A correctly realized binary persistence register with positive self-return attains that minimum; simple-system admission is not by itself an internal contradiction.

2. (ii),leftmargin=2em Let $r_C$ be the maximum contrast over a fixed complete finite valid return catalogue. The rules <a id="eq:threshold-rules"></a>


$$

 F^{(\tau)}({R^{\ast}},C)=F_{A1}({R^{\ast}},C){\mathbf 1}\{r_C>\tau\},
 \qquad\tau\in[0,1)\cap\mathbb Q,

$$

Equation (10.1).

 are distinct contract-covariant, substrate-neutral restrictions. The compared functional premises and A0 do not select one value of $\tau$. Among positive constant thresholds there is no weakest proper strengthening.

3. (iii),leftmargin=2em If $C$ is the only original maximal candidate, a predicate $F_{A1}\land G$ can retain or reject $C$, but cannot thereby admit a proper subcore not in the original candidate set.

4. (iv),leftmargin=2em A strong return threshold alone does not exclude weakly connected wholes. In the nominated noisy-persistence/cross-update family, with $a=4/5$ and $b=1/2$, <a id="eq:return-vs-cut"></a>


$$

 r_g=a^2(1-g)^2+abg^2\longrightarrow16/25,
 \qquad \kappa_g=\min(a,b)g=g/2\longrightarrow0.

$$

Equation (10.2).

 Here $\kappa_g$ is the matched singleton reciprocal influence margin, not a general replacement for a joint cut radius.

 

 <a id="source-proof-25"></a>

**Proof.**

The class-count lower bound is immediate. A binary retention channel with flip probability $(1-r)/2$, $r>0$, has $h$-step row contrast $r^h$; with the supplied native loop, records, resources and provenance it realizes the minimum. Given $\tau_1<\tau_2$, choose a rational $r$ strictly between them. The same register satisfies one restriction and not the other. Both restrictions respect complete-contract relabeling, and A0 adds no constraint selecting a threshold. For any positive $\tau$, $\tau/2$ is a weaker positive restriction. The third assertion follows from the domain of a pointwise filter. The two-step contrast in the fourth assertion is the root diagonal entry of the squared mean-response matrix; its direct calculation is in [Appendix A](/consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations#app:masking). 

□

 This is a nonselection result for specified premises and a specified threshold family, not proof that no physically or phenomenologically motivated selector can ever be justified. An independently chosen decision loss, discrimination resolution, latency requirement or noise model can determine a meaningful operational tolerance. A further argument is needed to interpret that tolerance as a boundary of one perspective.

<a id="source-remark-2"></a>

**Remark 10.2 (Connected-path stability warning).**

 A locally constant discrete assignment on a connected interval is constant: each label has an open preimage with open complement. Thus a nonconstant discrete partition rule cannot be stable at every point of every connected model path. The statement concerns a connected real-kernel extension, not the disconnected rational-input set considered as a topological space in its own right. The explicit rational sequences in the masking example already establish its particular instability without appealing to connectedness. Continuous diagnostic values, set-valued uncertainty and stable margins away from transition points remain possible. 





<a id="section-10-2"></a>

### 10.2 What a successor doctrine would have to supply

 A future localization law could use the robust candidate family, but would need to state how one support or scale is selected, what native observations and resources define it, and why that selection has the proposed experiential meaning. No inference from a positive cut score alone provides those choices. An all-finite experiment family avoids an arbitrary analyst forecast cutoff, but it does not remove native time, boundary or resource assumptions.

A changed support also changes the objects on which A2 and A3 operate. The successor must construct the new candidate's native joint instruments, all-future predictive equivalence, actual-class congruence and grounded report interpretation. It must then recompute the qualifying-core provenance graph for episode continuity. Equality of boundary records cannot substitute for a physical provenance edge, and a set of possible candidate supports is not a simultaneous collection of subjects.

For this reason the sequel's conclusion is not $A1'$. It is a set of formal constraints and counterexamples against which any proposed $A1'$ must be tested. The published rule remains the current conditional law; its claim to identify the correct lower boundary in actual vessels remains a separate validation question.



<a id="section-10-3"></a>

### 10.3 Source/readout lineage without ontological inflation

 The interface-relative nature of the mathematics is consistent with the source/readout motivation: the distinctions retained depend on the aperture of admitted interaction. But this is an operational analogy with precise scope, not an inference that a larger source is a mind. Different exterior contracts can require different effective states of the same process. A larger relation may use those effective states as relata, yet the required state dimension and memory can grow at each level.

The source-awareness interpretation supplies meaning to the constitutive programme. It does not enter the numerical masking calculation, create a new force, or establish that every mathematical composition localizes awareness. Keeping that division explicit preserves the philosophical proposal rather than disguising it as a consequence of a stochastic matrix.

---

# Section 11: Limitations and verification status

<a id="section-11"></a>

## 11 Limitations and verification status

<a id="sec:limits"></a> The main composition mathematics is finite and classical. A general continuum quotient, unbounded hidden-history implementation, arbitrary nondeterministic internal scheduler or instantaneous algebraic feedback law is not supplied. Even in a finite system, a useful proper strong quotient need not exist. A new port can reveal a previously hidden distinction and force the retained state to expand.

The resource-relative construction assumes declared alternative processes and physically meaningful ownership. It does not identify those alternatives from target records alone. The exact decoder of a statistical experiment is not necessarily an available apparatus, a secure erasure mechanism or a lower-cost replacement. A realization that omits a returning environment, a shared seed or a consumed blank can invalidate an application without falsifying the conditional theorem.

No biological consciousness experiment, independent AI-awareness experiment or direct phenomenal measurement is reported. The separate opaque-interface-learning programme belongs to the companion computational study <a id="citation-22"></a>[[21](/consciousness/research/paper-2/references#bib-RodgersLearning2026)], not to this paper's evidence for a consciousness claim. Its results are not used here to validate A0 or supply a universal subject selector. The companion intervention-law study <a id="citation-23"></a>[[20](/consciousness/research/paper-2/references#bib-RodgersIntervention2026)] examines conditional identification of binary realizations, recoding obstructions and a bounded SPC-2/IIT comparison; it likewise does not provide empirical validation of a consciousness claim.

The proofs in this preprint are analytic under their stated assumptions and are accompanied by finite arithmetic and implementation checks. Outside mathematical review and proof-assistant verification have not been completed. Priority and completeness of the literature comparison also remain review obligations, particularly for the programme-specific masking application and the exact combination of composition and resource contracts. The present version has undergone an internal hostile audit with the resulting scope corrections and exact checks recorded in its supplement. These checks are not independent external review and do not replace a proof with a claim of experimental verification.



<a id="paragraph-6"></a>

#### Funding and collaboration.

 This research was conducted independently by Jeremy Rodgers without external research funding. The author welcomes collaboration on independent mathematical review, computational replication, physical implementation and empirical testing, particularly where specialist expertise, equipment or institutional resources are required.



<a id="paragraph-7"></a>

#### AI assistance disclosure.

 This research programme used OpenAI GPT-family models, including Astra configurations used in the research workflow, for mathematical exploration, adversarial review, code generation and checking, literature assistance, and manuscript drafting and editing under the author's direction. Anthropic Claude was used for an additional independent AI review and reconstruction of central finite calculations. Claim selection, source selection, final interpretation, and authorship responsibility remain with the author. AI-based checking is not represented as independent human review or formal proof verification.

[Section F](/consciousness/research/paper-2/appendix-f-proof-status-provenance-and-reproducibility#app:provenance) specifies the proof and artifact status. Standard results are credited as such. The appended finite tests check formula transcription, normalization and illustrative mechanisms; no finite enumeration is substituted for the general arguments.

---

# Section 12: Conclusion

<a id="section-12"></a>

## 12 Conclusion

<a id="sec:conclusion"></a> An exact relational candidate rule can be mathematically determinate and still be fragile under small changes in its underlying instruments. The masked encoder demonstrates that fragility in the published minimal-target projection: a tiny new singleton signal deletes a projected edge while substantial joint information and the contrast of a fixed scheduled return remain. A continuous weight cannot reproduce that exact positive support along the family.

Directed statistical deficiency supplies a different and stable information question. It distinguishes common-conditional padding from genuinely joint coding and gives an exact quantitative repair of the masking diagnostic. Separating that reconstruction question from native execution and resource-relative cut simulation prevents strong information, physical return and simulator obstruction from being treated as synonyms.

A realized relational process can be encapsulated through a strong marked interface when its joint record and successor-class laws close under the admitted interactions. Matching causal contexts then preserve complete finite histories, and controlled approximations incur explicit budgets. Transferring a cut profile demands more than target fidelity: the comparison processes must retain their resource meaning as well.

Finally, exact-law identification reaches only attributes constant on the declared operational-equivalence classes. Functional premises that leave a phenomenal predicate unconstrained do not determine it. SPC-2 already supplies a connecting constitutive premise; the present results audit the functional boundary beneath it rather than pretend that the premise was missing. The outcome is a strengthened and more transparent analysis of localization candidates, not a derived unique psychophysical replacement. It leaves the proposed awareness-first interpretation available for philosophical and empirical assessment while making the mathematical obligations independently inspectable.

---

# Appendix A: Exact masking and boundary calculations

<a id="section-A"></a>

## A Exact masking and boundary calculations

<a id="app:masking"></a> 

<a id="section-A-1"></a>

### A.1 Rows, marginals and decoded return

 Write outcomes in the order $00,01,10,11$. Under source $b=0$, the unperturbed encoder gives $00,11$ equally, while the perturbing branch gives $00,01$ equally. Under $b=1$, the respective pairs are $01,10$ and $10,11$. Their mixture gives <a id="eq:appendix-rows"></a>


$$

 P_0=\left(\frac12,\frac{\varepsilon}2,0,\frac{1-{\varepsilon}}2\right),\qquad
 P_1=\left(0,\frac{1-{\varepsilon}}2,\frac12,\frac{\varepsilon}2\right).

$$

Equation (A.1).

 The first marginals are $((1+{\varepsilon})/2,(1-{\varepsilon})/2)$ and its reversal; the second marginal is fair in both cases. On $[0,1/2]$, the absolute row difference sums to $2(1-{\varepsilon})$, so the joint TV is $1-{\varepsilon}$. On the extended interval it is instead $\max\{{\varepsilon},1-{\varepsilon}\}$.

Relative to ${\varepsilon}=0$, one mass ${\varepsilon}/2$ moves within each prepared row; thus the instrument-row TV perturbation is ${\varepsilon}/2$. The decoder computes parity. Its error is zero on the main encoder branch and $1/2$ on the perturbing branch. Hence its total error is ${\varepsilon}/2$, and the decoded root laws have contrast $1-{\varepsilon}$. No inference about a revised graph-based tour follows from this terminal calculation alone.



<a id="section-A-2"></a>

### A.2 Optimal reconstruction attainers

 For $0\le{\varepsilon}\le1/3$, define <a id="eq:attainer-low0"></a>
<a id="eq:attainer-low1"></a>


$$
\begin{aligned}G_0&=\left(\frac{1-2{\varepsilon}}{1-{\varepsilon}},0,0,\frac{\varepsilon}{1-{\varepsilon}}\right),\\
 G_1&=\left(0,\frac{\varepsilon}{1-{\varepsilon}},\frac{1-2{\varepsilon}}{1-{\varepsilon}},0\right).
\end{aligned}
$$

Equation (A.2, A.3).

 Both rows are nonnegative and sum to one. With $q_\pm=(1\pm{\varepsilon})/2$, $Q_0=q_+G_0+q_-G_1$ and $Q_1=q_-G_0+q_+G_1$. Direct subtraction yields <a id="eq:low-residual"></a>


$$

 Q_0-P_0=\left(
 -\frac{{\varepsilon}^2}{1-{\varepsilon}},\ 0,\
 \frac{1-2{\varepsilon}}{2},\
 -\frac{1-3{\varepsilon}}{2(1-{\varepsilon})}\right).

$$

Equation (A.4).

 The positive mass is exactly $1/2-{\varepsilon}$. The second residual is a permutation with the same positive mass, proving attainment of that error.

For $1/3\le{\varepsilon}\le1$, define <a id="eq:attainer-high0"></a>
<a id="eq:attainer-high1"></a>


$$
\begin{aligned}G_0&=\left(\frac12,\frac{3{\varepsilon}-1}{4{\varepsilon}},0,\frac{1-{\varepsilon}}{4{\varepsilon}}\right),\\
 G_1&=\left(0,\frac{1-{\varepsilon}}{4{\varepsilon}},\frac12,\frac{3{\varepsilon}-1}{4{\varepsilon}}\right).
\end{aligned}
$$

Equation (A.5, A.6).

 These too are stochastic rows on their stated interval. The residuals are <a id="eq:high-residual"></a>


$$

 Q_0-P_0=\left(-\frac{1-{\varepsilon}}{4},0,\frac{1-{\varepsilon}}{4},0\right),
 \qquad Q_1-P_1=-(Q_0-P_0).

$$

Equation (A.7).

 Their TV is $(1-{\varepsilon})/4$. At ${\varepsilon}=1/3$ both attainer families agree. At ${\varepsilon}=0$ the first family is well defined; at ${\varepsilon}=1$ the second gives exact reconstruction. There is no division by zero within the chosen intervals. Together with the lower bounds in [Theorem 4.4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-08), this proves the first formula for every real ${\varepsilon}\in[0,1]$, not merely for a sampled grid.

For the second view, every reconstruction is source-independent. By triangle inequality its maximum error is at least half the target diameter; the midpoint $(P_0+P_1)/2$ attains it. This proves the second formula independently of the first.



<a id="section-A-3"></a>

### A.3 The decision witness at one-half

 At ${\varepsilon}=1/2$, the target rows are $(1/2,1/4,0,1/4)$ and $(0,1/4,1/2,1/4)$. Under prior $(3/4,1/4)$, the binary Bayes error is the sum of the smaller weighted mass at each outcome: 

$$

 \sum_y\min\{(3/4)P_0(y),(1/4)P_1(y)\}=1/16+1/16=1/8.

$$

 The first marginals are $(3/4,1/4)$ and $(1/4,3/4)$, giving 

$$

 \min\{9/16,1/16\}+\min\{3/16,3/16\}=1/4.

$$

 The equal-prior full and singleton TV contrasts nevertheless both equal $1/2$. This is the promised explicit loss not detected by their difference.



<a id="section-A-4"></a>

### A.4 A1 versus a singleton-marginal diagnostic

 <a id="source-proposition-14"></a>

**Proposition A.1 (Separation from marginal recurrence).**

<a id="p2-01"></a> On a common full-product domain with the same one-coordinate preparation contrasts, suppose each compared complete successor row factors across output components conditional on the nominated prepared state and operation. Then every minimally distinguishing output block is a singleton. Hence the inherited joint and singleton dependence graphs agree in that specialization. If the same scheduled root observation belongs to the admitted full-record grammar, positive root return also implies positive full-record contrast at that lag.

Neither direction of comparison holds in general between the full A1 qualification of a nominated whole and the combination of a reciprocal singleton influence graph with positive one-step retained distinction. 

 <a id="source-proof-26"></a>

**Proof.**

If every singleton law agrees and the joint law is the product of those singleton laws under each preparation, the joint law agrees. Thus a nonsingleton cannot be minimally distinguishing. Full-record contrast dominates its root marginal by TV contraction.

For the first countermodel, use the unperturbed encoder and decoder. The encoder has no distinguishing singleton output, while its pair retains the source bit and the decoder returns it. With separately supplied internal mechanism routes and a compatible native schedule, the joint graph closes into a two-register whole. Its native predictive states are distinct: the decoder distinguishes different parities, and the encoder distinguishes different first bits among equal-parity pairs. Thus the full four-state partition is predictive and automatically congruent. The singleton graph omits the forward encoder route and does not close the same whole.

For the reverse countermodel, let the only repeated native update be $T(b,c)=(b\oplus c,b\oplus c)$. Changing either input changes both next outputs completely, and some one-step state contrast is one. But $T^2(b,c)=(0,0)$ for every input. A time-respecting closed tour visiting both registers needs at least two ticks, by which time every distinction has vanished. There is no positive covering return for the nominated whole in this operation catalogue. 

□

 These are statements about specified native realizations. Neither a matrix without route semantics nor a claimed one-step influence by itself supplies the full A1 certificate.



<a id="section-A-5"></a>

### A.5 Strong local retention with vanishing cross influence

 For completeness, encode each binary coordinate by its centered sign. In the noisy-persistence/cross-update example, the conditional mean response is 

$$

 M_g=\begin{pmatrix}a(1-g)&ag\\bg&b(1-g)\end{pmatrix},
 \qquad a=4/5,\quad b=1/2.

$$

 A source contrast varying only the first initial bit propagates after two ticks with coefficient $(M_g^2)_{11}=a^2(1-g)^2+abg^2$. For a binary observation this is its row TV contrast. The one-step cross-influence margins are $ag$ and $bg$, giving minimum $g/2$. The return therefore tends to $16/25$ while the reciprocal cross margin tends to zero. The equation concerns the fixed scheduled contrast and declared one-coordinate influences. It is not a claim that a signal exclusively traversed the cross link.

---

# Appendix B: Statistical comparison and finite resource optima

<a id="section-B"></a>

## B Statistical comparison and finite resource optima

<a id="app:statistical"></a> 

<a id="section-B-1"></a>

### B.1 A linear-program form of deficiency

 Let $p_{\theta y}=P_{J,\theta}(y)$, $v_{\theta l}=P_{L,\theta}(l)$. Introduce stochastic variables $g_{ly}$, nonnegative residual variables $z_{\theta y}$, and $t$. Then [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency) is the optimum of 

$$
\begin{aligned}\text{minimize }&t,\\
 \sum_y g_{ly}&=1,\qquad g_{ly}\ge0,\\
 z_{\theta y}&\ge p_{\theta y}-\sum_l v_{\theta l}g_{ly},\\
 z_{\theta y}&\ge -p_{\theta y}+\sum_l v_{\theta l}g_{ly},\\
 \tfrac12\sum_y z_{\theta y}&\le t \quad(\theta\in\Theta).
\end{aligned}
$$

 A numerical solver can propose a primal/dual certificate, but its stopping flag is not a mathematical proof. For rational rows the constraints have rational coefficients and an optimum has a rational representation. The masked-family formulas in this paper instead have explicit lower bounds and attaining kernels for a continuum of parameters.

The common decoder condition is essential. Permitting $g$ to depend on unknown $\theta$ would allow it to print the required target row without any retained observation, trivializing the information question. A public context can be supplied to the decoder only if the experiment independently makes that context available.



<a id="section-B-2"></a>

### B.2 Null conditioning and record-preserving reconstruction

 In [Proposition 4.3](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-07), the positive prior assigns positive weight to every source. Conditional independence therefore yields one conditional kernel valid for all source rows at every retained value that occurs under at least one source. At a value absent under all sources, the kernel has no effect on the reconstructed laws. Since the retained alphabet was defined as the projection image, a nonempty fibre is available for an arbitrary extension.

The zero-loss theorem proves the existence of a projection-preserving conditional reconstruction even though the original optimization allowed arbitrary resampling. It does not establish the same assertion at positive deficiency. In particular, imposing exact retention of $Y_L$ on approximate decoders is a different constrained optimization and must not be silently substituted for [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency).



<a id="section-B-3"></a>

### B.3 Private randomness for SWAP

 Let $a_b(i)$ be side 1's output law at its own input $b$, and $d_c(j)$ side 2's output law at its own input $c$. Without communication or shared randomness the joint law factors. Its probability of the correct SWAP output on input $(b,c)$ is 

$$

 s_{bc}=a_b(c)d_c(b).

$$

 Multiplying over the four inputs gives 

$$

 \prod_{b,c}s_{bc}
 =\prod_b a_b(0)a_b(1)\prod_c d_c(0)d_c(1)
 \le(1/4)^4=1/256.

$$

 At least one $s_{bc}\le1/4$. Against a deterministic target row, TV error is one minus its correct-output mass, so worst-case error is at least $3/4$. Independent fair outputs attain it.

For one-way timely communication, the nonreceiving side's output law cannot depend on the remote input. Its two required remote outputs are distinct, so one marginal error is at least $1/2$. Send the available input in the permitted direction and guess the unavailable remote bit fairly on the other side; this attains worst-case complete-row error $1/2$. Two timely bits, one in each direction, implement SWAP exactly. Allowing a message after the registered output deadline does not change the law of that earlier output without changing the causal contract.



<a id="section-B-4"></a>

### B.4 A terminal state is not a complete retained history

 A contraction coefficient for a native kernel can bound the diameter of terminal state laws under fixed action words. It does not erase earlier records held by an adaptive controller. For example, a perfectly informative first output followed by a constant physical reset has identical terminal state under both sources, while its complete retained transcript remains distinguishing. Any application of a terminal contraction to a returned history must include that controller or explicitly trace out its record. The finite-history coupling theorem avoids this confusion by coupling each retained event jointly with the successor class.

---

# Appendix C: Strong quotient and composition proofs

<a id="section-C"></a>

## C Strong quotient and composition proofs

<a id="app:composition"></a> 

<a id="section-C-1"></a>

### C.1 The finite refinement construction

 Let $\Pi_0$ be the partition into equal protected marks. Given $\Pi_t$, assign to $x$ the signature consisting of its current block and, for every $u,o$, the vector 

$$

 \left(\sum_{y\in D}K_{u,o}(x,y)\right)_{D\in\Pi_t}.

$$

 Let $\Pi_{t+1}$ be the partition into equal signatures. The partitions only split. There are at most $|X|-|\Pi_0|$ strict refinement rounds because every strict round increases the block count. Once a round does not split, the signatures already have equal joint transition sums within every block; the partition satisfies [Equation 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:strong-quotient) and is stable.

To prove coarseness, let $\Lambda$ be any stable mark-preserving partition. It refines $\Pi_0$. If it refines $\Pi_t$, each $\Pi_t$-block is a union of $\Lambda$-blocks. Stability of $\Lambda$ makes the probabilities into each such union identical for states in one $\Lambda$-block. Their $\Pi_{t+1}$ signatures therefore agree. Induction proves that $\Lambda$ refines the terminating partition.

This construction uses the full joint record-and-class matrix, not only transition probabilities after records have been summed out. A protected mark may already distinguish two otherwise observationally identical states because their physical resource obligations differ. Its inclusion is part of the promised quotient semantics, not a discovery from boundary observations.

The proof also fixes the domain. On a full closed domain it considers every supplied state. On a reachable subdomain it first removes states unreachable under the nominated initial supports and admitted inputs, then requires closure. Mixing full-domain minimization on one side of a composition identity with reachable-only minimization on the other can change the answer.



<a id="section-C-2"></a>

### C.2 The composed row calculation

 Write $x=(x_1,\ldots,x_n)$, $z=(q_1(x_1),\ldots,q_n(x_n))$, and let $v$ be a current exterior action. A typical elementary event selects $(i,u)$ by a context rule $\Gamma_v(i,u\mid z,c)$, updates module $i$ using $K^i_{u,o}(x_i,y_i)$, and updates its retained context and exterior record $r$ by a kernel $\Lambda_v(r,c'\mid c,i,u,o,z,q_i(y_i))$. Dependence on $z$ or $q_i(y_i)$ is permitted only insofar as those variables are supplied by the declared ports. These expressions are an algebraic statement of fibre-constant access, not authorization of a new observation.

For this event the fine probability is a sum of terms 

$$

 \Gamma_v(i,u\mid z,c)\,
 K^i_{u,o}(x_i,y_i)\,
 \Lambda_v(r,c'\mid c,i,u,o,z,q_i(y_i))
 \prod_{j\ne i}{\mathbf 1}\{y_j=x_j\}.

$$

 Sum over the global fibre $Q(y,c')=(z',c')$. In each term the only nontrivial sum is 

$$

 \sum_{y_i:q_i(y_i)=z'_i}K^i_{u,o}(x_i,y_i)
 =\overline K^i_{u,o}(z_i,z'_i).

$$

 Every other factor is constant on the fibre. Thus the summed row is exactly the event generated by the effective module and the same context. The statement is preserved by summing over $i,u,o$ and over common context randomization. This proves strong quotient closure of each elementary event and hence of the sequentially composed joint instrument.

Initial correlations cause no difficulty if the original law on $(x,c)$ is pushed forward by $Q$ as a whole. Replacing it by a product of marginal preparations would be a different model. Similarly, independent simultaneous calls with frozen inputs can be serialized without altering their joint product row. A common noise event is not generally such a product; it requires its own full joint-row certificate. Delayed feedback is represented by queues in $c$, not by an assumed solution to instantaneous feedback equations.

Induction on events proves complete-history equality. Induction on a finite policy tree gives the same result for adaptive experiments, since the next action is selected from the same retained history. A finite stopping rule merely collects probabilities at selected leaves. This establishes [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17) in precisely the causal context class specified.



<a id="section-C-3"></a>

### C.3 Why minimization commutes in this domain

 Let $F$ be the fine composed instrument and $H$ the composed instrument after the local quotients. The product map $Q:F\to H$ is strong by the preceding calculation. Let $\Pi$ be the coarsest strong marked partition of $F$. Since the fibre partition of $Q$ is itself strong and mark-preserving, $\Pi$ is coarser than it. Hence 

$$

 Q(x)\sim_H Q(x')\quad\Longleftrightarrow\quad x\sim_\Pi x'

$$

 is well defined. A block of $\Pi$ is a union of $Q$-fibres, and summing the effective rows over that union proves stability of the induced partition on $H$.

Conversely, the inverse image under $Q$ of any stable marked partition of $H$ is stable in $F$: each transition sum into a pulled-back block is the corresponding effective transition sum. By coarseness it refines $\Pi$. Thus the induced partition is the coarsest strong marked partition of $H$. Mapping corresponding final blocks yields the instrument isomorphism in [Equation 6.3](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:min-composition); the joint initial laws agree by pushforward. The proof does not minimize over unrelated stochastic generators or alternative physical implementations.



<a id="section-C-4"></a>

### C.4 Exact word laws and port-only contexts

 <a id="source-proposition-15"></a>

**Proposition C.1 (Behavioral substitution from complete word equality).**

<a id="p2-36"></a> Fix matched preparations, timing, allowed action words and joint boundary records. Any initially correlated reference accessible to the context is included in the compared joint word/reference laws. If those complete laws agree for the two processes, then every compatible finite causal port-only context gives the same retained law. This does not assert a strong actual-state quotient. 

 <a id="source-proof-27"></a>

**Proof.**

For a fixed realized action/record path, multiply the process's word probability by the context's conditional probabilities of choosing each action from the preceding retained history. Those conditional factors are the same in both descriptions. Equality of word probabilities therefore gives equality of every path weight. Summing over internal policy randomization or stopped leaves preserves equality. If a reference is initially correlated with the process and can affect the context, the matched law is the joint word/reference law; equality of its unconditioned marginal alone is insufficient. 

□

 The proposition explains why the alternative four-state generator in [Example 6.4](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#ex:trace) can be behaviorally adequate without furnishing the failed actual quotient. It also explains why the fixed-input counterexample in [Proposition 6.6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-22) must concern *approximate* agreement: exact equality permits the pathwise multiplication, whereas separately small errors can be selected and amplified by a feedback policy.

---

# Appendix D: Resource, overlap and approximation details

<a id="section-D"></a>

## D Resource, overlap and approximation details

<a id="app:resources"></a> 

<a id="section-D-1"></a>

### D.1 Coupling without independent errors

 The product expression in [Equation 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:call-budget) is a lower bound on agreement, not a claim that approximation failures are independent. To make the adaptive argument explicit, let $r_i$ be a pathwise remaining call allowance and define 

$$

 V(r)=\prod_i(1-\epsilon_i)^{r_i}.

$$

 Conditional on currently equal coarse states and histories, a call to $i$ can be coupled to preserve agreement with probability at least $1-\epsilon_i$. Any agreed successor has remaining guarantee $V(r-e_i)$. Their product is $V(r)$, regardless of which called module the common controller chose. Randomizing that choice keeps the bound, and stopping gives agreement probability one, at least $V(r)$. Backward induction yields the pathwise result. The initial joint coupling adds its factor $1-\delta_0$.

A fine successor compatible with a coupled coarse event can be sampled from the original fine conditional row. At zero-probability coarse events the choice has no effect. This preserves the fine marginal law while maintaining the coupling on the coarse event. It is why the row bound must hold for every fine representative, including those selected by prior histories.

Changed action permissions, hidden seed correlations or an uncharged fresh initialization are not small row errors covered by this calculation. They change the experiment or resource contract. If a later conditioning event is rare, the unconditional bound alone does not provide the same error bound after conditioning.



<a id="section-D-2"></a>

### D.2 Spectators, old cuts and enlarged supports

 The spectator hypotheses in [Proposition 5.5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-14) apply to the complete experiment, not only a state snapshot. For an old cut, any original simulator extends by the independent exact $Z$-process under the supplied null-family closure. The target and simulator then share the same product spectator law, so their full-law distance is unchanged. Conversely, projection of any enlarged simulator supplies an allowed original simulator and cannot increase error. Infima in both directions prove equality, even when no best simulator is attained.

Across the cut between the entire old system and the spectator, the actual product process is admissible in the separated class and gives zero radius. Thus an enlarged support containing a truly isolated spectator cannot pass a strictly positive requirement on every such registered cut. There is no result for a nominal spectator that furnishes shared randomness, acts as a message buffer, influences a controller, or returns an old source record later. A conditional informational duplicate is likewise not automatically a physical spectator.



<a id="section-D-3"></a>

### D.3 Pathwise resource balances

 <a id="source-proposition-16"></a>

**Proposition D.1 (Preservation of a consumable ledger).**

<a id="p2-24"></a> Suppose each positive-probability transition with retained charge $c\ge0$ satisfies the componentwise balance <a id="eq:resource-balance"></a>


$$

 b(y)+c=b(x),

$$

Equation (D.1).

 or the corresponding non-increasing inequality. If the ledger $b$ descends through a strong quotient and the charge is retained in the record, the effective transition has the same balance. Thus its pathwise cumulative spending cannot exceed its initial stock. 

 <a id="source-proof-28"></a>

**Proof.**

Every fine transition contributing positive mass to a fixed effective record-and-successor row satisfies the same equality because $b$ is constant on each fibre and $c$ is fixed by the record. The equality therefore holds for that effective event. Summing along the path telescopes the balances. The proof for a non-increasing inequality is identical. 

□

 For a one-use service, a correct process returns success followed by blocked. A purported quotient that forgets the exhausted state and reuses the ready row returns two successes. The two deterministic trace laws have TV one. A bookkeeping label can therefore be prediction-relevant even if the public boundary looked unchanged before the second request. Counts alone may still be insufficient: a reused shared random seed and two fresh private seeds can have the same individual marginals and different joint continuation laws.



<a id="section-D-4"></a>

### D.4 Shared components are not independent copies

 <a id="source-proposition-17"></a>

**Proposition D.2 (Overlap requires a common carrier and joint law).**

<a id="p2-25"></a> Descriptions on supports $AB$ and $BC$ that share one physical $B$ can be simultaneously consistent only on a subset of the fibre product <a id="eq:fibreproduct"></a>


$$

 X_{AB}\times_{X_B}X_{BC}
 =\{(x_{AB},x_{BC}):\pi_Bx_{AB}=\pi_Bx_{BC}\},

$$

Equation (D.2).

 rather than on pairs assigning different values to the same $B$. The full fibre product is the maximal carrier allowed by overlap consistency alone; the physically admitted carrier can be a proper subset. Compatible overlap marginals alone need not determine a unique global law, and a cyclic family of such marginals need not admit a global law at all. 

 <a id="source-proof-29"></a>

**Proof.**

Agreement of the two descriptions of the same $B$ places every admissible state in [Equation D.2](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#eq:fibreproduct). When each binary pair carrier is unrestricted, the fibre product has eight states instead of the independent product's sixteen. An actual domain restricted to even parity has only four states although each of its pair projections is unrestricted; hence overlap consistency alone is not sufficient to recover the admitted domain. The uniform law on all three-bit strings and the uniform law on even-parity strings have identical pairwise marginals but different triple laws. Their TV distance is $1/2$. For nonexistence, require pairwise $A=B$, $B=C$ and $A\ne C$, each with fair singleton marginals. Any global sample satisfying the first two equalities violates the third. Thus no global law exists. 

□

 A physical joint successor kernel and consistent ownership resolve what the overlap marginals alone leave open. Mutually exclusive controller modes can instead represent alternative uses of the shared component. Neither construction licenses treating a single remaining resource as two independent supplies.



<a id="section-D-5"></a>

### D.5 Candidate-family transport and unattained optima

 The cut-radius estimate in [Equation 7.5](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:null-transfer) needs no compactness: approximate minimizers and approximate Hausdorff partners suffice. An exact matching of null-law *closures* is enough because distance to a set equals distance to its closure. Conversely, the distance function over the common law space determines that closure as its zero set. Thus preservation of target values at one point should not be mistaken for preservation of the comparison family everywhere.

For the threshold inclusions, fix a candidate support and an actual witness. If its hatted return exceeds $\rho+2\beta$ and all hatted cuts exceed $\tau+\beta+\nu$, the transported witness exceeds the unhatted thresholds simultaneously. This gives the left inclusion. Transport an unhatted witness in the reverse direction for the right inclusion. If only one witness-transport direction is available, only the corresponding inclusion follows. The construction compares already matched records, supports and cut lists; it does not infer unobserved interior structure from an exterior quotient.

---

# Appendix E: Auxiliary relational-state and realization results

<a id="section-E"></a>

## E Auxiliary relational-state and realization results

<a id="app:relational"></a> These results clarify the limited sense in which a relation can become a relatum. They are not premises asserting that every scale is conscious or that the same finite internal architecture repeats at all levels.



<a id="section-E-1"></a>

### E.1 Residual memory relative to fixed local summaries

 <a id="source-proposition-18"></a>

**Proposition E.1 (Minimum residual predictive alphabet).**

<a id="p2-32"></a> Let a finite deterministic controlled machine have actual state $s$, a fixed local summary $\ell(s)$, and complete tested observations that include that summary. Let $Q$ be its quotient by equality of all finite future traces. For each local-summary value $l$, put 

$$

 k_l=|\{q\in Q:\ell(q)=l\}|.

$$

 The smallest residual alphabet $J$ permitting exact future prediction and autonomous update from $(l,j)$ has <a id="eq:residual-memory"></a>


$$

 |J|_{\min}=\max_l k_l,
 \qquad b_J=\left\lceil\log_2\max_l k_l\right\rceil

$$

Equation (E.1).

 fixed-length bits. 

 <a id="source-proof-30"></a>

**Proof.**

Two future-distinguishable quotient states in one local fibre cannot receive the same residual label. This gives the lower bound. Label the quotient states distinctly within each fibre, reusing labels between fibres. Then $(l,j)$ identifies $q$. Deterministic all-future equivalence is preserved by each action transition, so decode, update $q$, and re-encode. This attains the bound. 

□

 The result is relative to the local-summary contract. Under unrestricted coordinate enlargement, $(x,y,j)\mapsto((x,j),y)$ absorbs the relation variable bijectively and transports the complete dynamics. No absolute ontological irreducibility of $J$ follows. Physical locality and access restrictions can make that enlargement unavailable, but those restrictions must be stated.



<a id="section-E-2"></a>

### E.2 Two predictive aspects in a deterministic domain

 <a id="source-proposition-19"></a>

**Proposition E.2 (Two-port subdirect representation).**

<a id="p2-33"></a> For a finite behaviorally minimal deterministic two-port machine, let $Q_L$ identify states with equal all-future left-output traces under every joint input word, and define $Q_R$ similarly. Then <a id="eq:subdirect"></a>


$$

 Q\hookrightarrow Q_L\times Q_R,
 \qquad q\longmapsto([q]_L,[q]_R),

$$

Equation (E.2).

 is injective, has both coordinate projections onto, and carries the induced quotient dynamics. It is a full product exactly when every left-view class meets every right-view class. 

 <a id="source-proof-31"></a>

**Proof.**

Agreement of both deterministic output traces is agreement of the joint output trace, hence of the state in a minimal machine. The view maps are onto by definition and their all-future equivalences are preserved by each action update. The product criterion is exactly surjectivity onto every pair of view classes. 

□

 The two aspects may coincide completely: one parity memory bit can be output on both ports, giving a diagonal two-state subdirect product rather than two independent bits. The deterministic restriction is essential. A hidden fixed bit $b$ with outputs $(\xi,\xi\oplus b)$, using fresh fair $\xi$ each tick, gives equal all-future marginal streams for both values of $b$, but different joint laws. Thus marginal stochastic predictive views need not jointly determine the whole process.



<a id="section-E-3"></a>

### E.3 Coordinates can sometimes be selected by supplied resets

 <a id="source-proposition-20"></a>

**Proposition E.3 (Complete reset algebra).**

<a id="p2-34"></a> Let a finite state set $X$ have labeled reset maps $r_i^a:X\to X$, with nonempty finite value alphabets $A_i$. Suppose same-family resets overwrite, $r_i^a\circ r_i^b=r_i^a$; different families commute; every composite of one reset per family is constant on $X$, with value $c(a_1,\ldots,a_n)$; and $c:\prod_iA_i\to X$ is bijective. Then the unique coordinate map respecting all named reset semantics is 

$$

 \phi(c(a_1,\ldots,a_n))=(a_1,\ldots,a_n).

$$

 It transports each $r_i^b$ to overwrite of coordinate $i$ by $b$. 

 <a id="source-proof-32"></a>

**Proof.**

Bijection of $c$ defines $\phi$. Commute $r_i^b$ through the resets in other families and use same-family overwrite to obtain $r_i^b c(a)=c(a_{-i},b)$. This gives the coordinate action. Any map respecting those labeled reset semantics must send their joint constant image to the same tuple, proving uniqueness. 

□

 The theorem uses strong physical access and completeness assumptions. A bare transition matrix does not supply this reset algebra. Even when available, it does not choose internal/external route typing, native time, process provenance or a phenomenal bridge. It is a conditional coordinate selector, not a universal construction of ${R^{\ast}}$.



<a id="section-E-4"></a>

### E.4 An active relational state used at the next level

 <a id="source-proposition-21"></a>

**Proposition E.4 (Parity encapsulation and a growing hierarchy).**

<a id="p2-35"></a> A two-bit module with input $u$ evolves over ${\mathbb F_2}$ by <a id="eq:parity-module"></a>


$$

 p'=q,\qquad q'=p\oplus u,\qquad z=p\oplus q.

$$

Equation (E.3).

 Its parity interface has the exact update $z'=z\oplus u$. With a native contract exposing that parity and preserving the required marks, it is a proper two-state quotient of the four-state carrier.

For $n$ modules, latch the old parity ports and use $u_i=z_i\oplus z_{i-1}$ on a ring. If $A_n$ is the fine linear update, $Q_n$ parity projection and $S_n$ the ring shift, then <a id="eq:parity-ring"></a>


$$

 Q_nA_n=S_nQ_n,\qquad S_n^n=I,\qquad A_n^{2n}=I.

$$

Equation (E.4).

 Under the supplied native ring routes, root returns occur at the indicated horizons. Every nontrivial cut between unions of modules has a first-round opposite-side parity witness of size one, giving error at least $1/2$ for the declared no-communication alternatives. 

 <a id="source-proof-33"></a>

**Proof.**

The parity calculation in [Equation E.3](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#eq:parity-module) gives $p'\oplus q'=q\oplus p\oplus u=z\oplus u$, independent of the hidden representative. At $u=0$, the fine bits swap; the discarded degree is dynamically active, not an independent spectator. Under the latched ring inputs, $z'_i=z_{i-1}$ and $p'_i=p_i\oplus z_i$. The macro shift returns after $n$ rounds. Across those rounds each $p_i$ accumulates the XOR of all original parities; a second circuit cancels that sum. This proves [Equation E.4](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#eq:parity-ring). Any nontrivial ring cut has a crossing parity transfer. Vary its source parity while holding the other prepared values fixed; the opposite-side output differs deterministically. [Proposition 5.1](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-10) supplies the $1/2$ lower bound. 

□

 The installed route and native observation assertions are independent realization data; the matrix identity alone does not certify their physical availability. Internal lower-module return certificates are retained separately from the parity-only boundary interface. The live configuration reductions are $16\to4$, $256\to16$, and $65{,}536\to256$ for $n=2,4,8$, respectively. The effective memory grows with $n$. This is an exact operational example of relational states serving as higher-level relata, not automatic fixed-state self-similarity or nested subjecthood.

---

# Appendix F: Proof status, provenance and reproducibility

<a id="section-F"></a>

## F Proof status, provenance and reproducibility

<a id="app:provenance"></a> **Research archive availability.** The original research archives described below are separate from this web edition and were not supplied with it. This edition reproduces the manuscript's full reported methods and results.



This article is a theoretical sequel to Version 2 of <a id="citation-24"></a>[[23](/consciousness/research/paper-2/references#bib-RodgersSPC2)]. Its canonical statements were fixed in the accompanying Paper 2 theorem-and-claim package before manuscript assembly. The present internal audit makes the protected-mark, conditional-context, reference-law and spectator hypotheses explicit and narrows overlap-carrier equality to inclusion where further physical constraints are possible. The original formulations and all affected canonical identifiers are preserved in the amendment ledger. The source package maps every retained result to one of 36 canonical identifiers, records any amendment, and preserves the predecessor hashes. Those identifiers include standard results, inherited constitutional material, conditional constructions and optional appendices; they do not denote 36 claims of novelty.



<a id="paragraph-8"></a>

#### Analytic and computational status.

 The general masking, deficiency, quotient, composition and identification claims have explicit analytic arguments here. The associated exact checker uses fractions, integers and binary linear algebra to check their finite examples. Its finite enumeration is not a proof of all real-parameter or all-system statements. The pre-audit manuscript and canonical freeze archives are preserved unchanged. The post-audit package additionally supplies fresh exact masking and linear-program certificates, marked-quotient and causal-composition checks, resource and overlap negative controls, and an independently coded checker of the stored optimization certificates. These are separate code paths within the disclosed AI-assisted research process, not independent investigators.

The central external-review obligations remain the exact masking optimum; the strong marked quotient and causal composition proof; and the physical and comparison-family premises behind resource and candidate transport. No outside mathematician has certified these proofs in the present record, and no formal proof assistant has checked them. Standard statistical and quotient arguments still require correct use of their hypotheses; their familiarity does not exempt them from manuscript review.



<a id="paragraph-9"></a>

#### Availability and historical sources.

 The manuscript source ZIP contains the complete LaTeX and figure sources, bibliography, claim mapping, verification code and outputs, the unchanged canonical freeze archive, and the prepared external-review packet. The public monograph citation was checked against the author's Version 2 publication page and DOI listing; byte identity between the supplied predecessor source and a repository download was not independently established. The source/readout predecessor <a id="citation-25"></a>[[22](/consciousness/research/paper-2/references#bib-RodgersSealed2026)] is identified by its supplied version rather than by an invented public identifier. All operational results needed here are stated with their assumptions, so reading that separate manuscript is not required to check the displayed proofs.



<a id="paragraph-10"></a>

#### Research assistance and responsibility.

 The AI systems and roles used in this programme are disclosed in [Section 11](/consciousness/research/paper-2/limitations-and-verification-status#sec:limits). Such assistance is not independent mathematical review. The named author is responsible for the submitted text, its claims, source selection and final interpretation. The disclosure does not imply compliance with any particular venue's AI policy, which must be checked at submission.



<a id="paragraph-11"></a>

#### What the artifact does not establish.

 Checksums establish integrity relative to the saved files, not truth of a theorem or priority of an idea. A repeated deterministic computation establishes reproducibility, not a new independent experiment. The article contains neither a biological/AI phenomenal dataset nor an empirical validation of its awareness interpretation. The distinction between the analytical claim, its finite checks, and external verification is retained throughout the accompanying ledgers.

---

# References

## Bibliography

<a id="bib-AlbantakisEtAl2023"></a>

[1] Larissa Albantakis, Leonardo Barbosa, Graham Findlay, Matteo Grasso, Andrew M. Haun, William Marshall, et al. *Integrated Information Theory (IIT) 4.0: Formulating the properties of phenomenal existence in physical terms*. PLOS Computational Biology. Volume 19. Number 10. Pages e1011465. 2023. [doi:10.1371/journal.pcbi.1011465](https://doi.org/10.1371/journal.pcbi.1011465). [https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011465](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011465).

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-19)

<a id="bib-AlmeidaEtAl2010"></a>

[2] Mafalda L. Almeida, Jean-Daniel Bancal, Nicolas Brunner, Antonio Acín, Nicolas Gisin, Stefano Pironio. *Guess your neighbour's input: A multipartite non-local game with no quantum advantage*. Physical Review Letters. Volume 104. Pages 230404. 2010. [doi:10.1103/PhysRevLett.104.230404](https://doi.org/10.1103/PhysRevLett.104.230404). [https://arxiv.org/abs/1003.3844](https://arxiv.org/abs/1003.3844). 1003.3844.

Cited in: [Section 5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#citation-7)

<a id="bib-BaezCourser2018"></a>

[3] John C. Baez, Kenny Courser. *Coarse-Graining Open Markov Processes*. Theory and Applications of Categories. Volume 33. Number 39. Pages 1223–1268. 2018. [https://arxiv.org/abs/1710.11343](https://arxiv.org/abs/1710.11343). 1710.11343.

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-8)

<a id="bib-BarnettCrutchfield2014"></a>

[4] Nix Barnett, James P. Crutchfield. *Computational Mechanics of Input–Output Processes: Structured Transformations and the $\epsilon$-Transducer*. Journal of Statistical Physics. Volume 161. Number 2. Pages 404–451. 2015. [doi:10.1007/s10955-015-1327-5](https://doi.org/10.1007/s10955-015-1327-5). [https://arxiv.org/abs/1412.2690](https://arxiv.org/abs/1412.2690). 1412.2690.

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-10)

<a id="bib-BertschingerEtAl2014"></a>

[5] Nils Bertschinger, Johannes Rauh, Eckehard Olbrich, Jürgen Jost, Nihat Ay. *Quantifying Unique Information*. Entropy. Volume 16. Number 4. Pages 2161–2183. 2014. [doi:10.3390/e16042161](https://doi.org/10.3390/e16042161). [https://arxiv.org/abs/1311.2852](https://arxiv.org/abs/1311.2852). 1311.2852.

Cited in: [Section 4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#citation-6)

<a id="bib-Blackwell1953"></a>

[6] David Blackwell. *Equivalent Comparisons of Experiments*. The Annals of Mathematical Statistics. Volume 24. Number 2. Pages 265–272. 1953. [doi:10.1214/aoms/1177729032](https://doi.org/10.1214/aoms/1177729032). [https://doi.org/10.1214/aoms/1177729032](https://doi.org/10.1214/aoms/1177729032).

Cited in: [Section 1](/consciousness/research/paper-2/introduction#citation-2) · [Section 4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#citation-4)

<a id="bib-Chalmers1995"></a>

[7] David J. Chalmers. *Facing Up to the Problem of Consciousness*. Journal of Consciousness Studies. Volume 2. Number 3. Pages 200–219. 1995. [https://consc.net/papers/facing.html](https://consc.net/papers/facing.html).

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-16)

<a id="bib-DorschEtAl2017"></a>

[8] Ulrich Dorsch, Stefan Milius, Lutz Schröder, Thorsten Wißmann. *Efficient Coalgebraic Partition Refinement*. 28th International Conference on Concurrency Theory (CONCUR 2017). Series Leibniz International Proceedings in Informatics (LIPIcs). Volume 85. Pages 32:1–32:16. Schloss Dagstuhl – Leibniz-Zentrum für Informatik. 2017. [doi:10.4230/LIPIcs.CONCUR.2017.32](https://doi.org/10.4230/LIPIcs.CONCUR.2017.32). [https://arxiv.org/abs/1705.08362](https://arxiv.org/abs/1705.08362). 1705.08362.

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-8)

<a id="bib-DoyenEtAl2008"></a>

[9] Laurent Doyen, Thomas A. Henzinger, Barbara Jobstmann, Tatjana Petrov. *Interface Theories with Component Reuse*. Proceedings of the 8th ACM International Conference on Embedded Software (EMSOFT). Pages 79–88. ACM. 2008. [doi:10.1145/1450058.1450070](https://doi.org/10.1145/1450058.1450070). [https://lsv.ens-paris-saclay.fr/~doyen/papers/Interface_Theories_with_Component_Reuse.pdf](https://lsv.ens-paris-saclay.fr/~doyen/papers/Interface_Theories_with_Component_Reuse.pdf).

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-9)

<a id="bib-Ganesh2021"></a>

[10] Natesh Ganesh. *No Substitute for Functionalism: A Reply to `Falsification & Consciousness'*. Version 3. 2021. [doi:10.48550/arXiv.2006.13664](https://doi.org/10.48550/arXiv.2006.13664). [https://arxiv.org/abs/2006.13664v3](https://arxiv.org/abs/2006.13664v3). 2006.13664. Preprint; revised 30 April 2021.

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-21)

<a id="bib-GeblerTini2013"></a>

[11] Daniel Gebler, Simone Tini. *Compositionality of Approximate Bisimulation for Probabilistic Systems*. Electronic Proceedings in Theoretical Computer Science. Volume 120. Pages 32–46. 2013. [doi:10.4204/EPTCS.120.4](https://doi.org/10.4204/EPTCS.120.4). [https://arxiv.org/abs/1307.7442](https://arxiv.org/abs/1307.7442). 1307.7442.

Cited in: [Section 7](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#citation-12)

<a id="bib-Kleiner2020"></a>

[12] Johannes Kleiner. *Mathematical Models of Consciousness*. Entropy. Volume 22. Number 6. Pages 609. 2020. [doi:10.3390/e22060609](https://doi.org/10.3390/e22060609). 1907.03223.

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-18)

<a id="bib-KleinerHoel2021"></a>

[13] Johannes Kleiner, Erik Hoel. *Falsification and Consciousness*. Neuroscience of Consciousness. Volume 2021. Number 1. Pages niab001. 2021. [doi:10.1093/nc/niab001](https://doi.org/10.1093/nc/niab001). 2004.03541.

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-20)

<a id="bib-KleinerLudwig2023"></a>

[14] Johannes Kleiner, Tim Ludwig. *What is a Mathematical Structure of Conscious Experience?* Synthese. Volume 203. Pages 89. 2024. [doi:10.1007/s11229-024-04503-4](https://doi.org/10.1007/s11229-024-04503-4). [https://arxiv.org/abs/2301.11812](https://arxiv.org/abs/2301.11812). 2301.11812.

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-17)

<a id="bib-LarsenSkou1991"></a>

[15] Kim G. Larsen, Arne Skou. *Bisimulation through Probabilistic Testing*. Information and Computation. Volume 94. Number 1. Pages 1–28. 1991. [doi:10.1016/0890-5401(91)90030-6](https://doi.org/10.1016/0890-5401(91)90030-6).

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-8)

<a id="bib-LeCam1964"></a>

[16] Lucien Le Cam. *Sufficiency and Approximate Sufficiency*. The Annals of Mathematical Statistics. Volume 35. Number 4. Pages 1419–1455. 1964. [doi:10.1214/aoms/1177700372](https://doi.org/10.1214/aoms/1177700372).

Cited in: [Section 1](/consciousness/research/paper-2/introduction#citation-2) · [Section 4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#citation-4)

<a id="bib-Levine1983"></a>

[17] Joseph Levine. *Materialism and Qualia: The Explanatory Gap*. Pacific Philosophical Quarterly. Volume 64. Number 4. Pages 354–361. 1983. [doi:10.1111/j.1468-0114.1983.tb00207.x](https://doi.org/10.1111/j.1468-0114.1983.tb00207.x). [https://doi.org/10.1111/j.1468-0114.1983.tb00207.x](https://doi.org/10.1111/j.1468-0114.1983.tb00207.x).

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-14)

<a id="bib-Lewis1972"></a>

[18] David Lewis. *Psychophysical and Theoretical Identifications*. Australasian Journal of Philosophy. Volume 50. Number 3. Pages 249–258. 1972. [doi:10.1080/00048407212341301](https://doi.org/10.1080/00048407212341301). [https://doi.org/10.1080/00048407212341301](https://doi.org/10.1080/00048407212341301).

Cited in: [Section 9](/consciousness/research/paper-2/what-a-phenomenal-bridge-adds#citation-15)

<a id="bib-PortmannEtAl2017"></a>

[19] Christopher Portmann, Christian Matt, Ueli Maurer, Renato Renner, Björn Tackmann. *Causal Boxes: Quantum Information-Processing Systems Closed under Composition*. IEEE Transactions on Information Theory. Volume 63. Number 5. Pages 3277–3305. 2017. [doi:10.1109/TIT.2017.2676805](https://doi.org/10.1109/TIT.2017.2676805). [https://arxiv.org/abs/1512.02240](https://arxiv.org/abs/1512.02240). 1512.02240.

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-11)

<a id="bib-RodgersIntervention2026"></a>

[20] Jeremy Rodgers. *Identifying Binary Realizations from Intervention Laws: Certificates, Recoding Obstructions, and a Bounded SPC-2/IIT Comparison*. Zenodo. Version 1.1-RC1. 2026-09-30. [doi:10.5281/zenodo.23075828](https://doi.org/10.5281/zenodo.23075828). Companion preprint, Paper 4.

Cited in: [Section 11](/consciousness/research/paper-2/limitations-and-verification-status#citation-23)

<a id="bib-RodgersLearning2026"></a>

[21] Jeremy Rodgers. *Learning Effective Interfaces from Opaque Stochastic Systems: Capacity, Selection, and Validation Limits*. Zenodo. Version 2. 2026-09-29. [doi:10.5281/zenodo.23075824](https://doi.org/10.5281/zenodo.23075824). Companion preprint, Paper 3.

Cited in: [Section 11](/consciousness/research/paper-2/limitations-and-verification-status#citation-22)

<a id="bib-RodgersSealed2026"></a>

[22] Jeremy Rodgers. *Sealed or Leaky: The Source Tetralemma, Bell-Certified Hidden Information, and Finite-Resource Witnesses*. 2026-09-21. Version 3.1, supplied manuscript. The source file and its hash are preserved in the accompanying canonical freeze archive.

Cited in: [Section 8](/consciousness/research/paper-2/operational-identification-and-its-ceiling#citation-13) · [Appendix F](/consciousness/research/paper-2/appendix-f-proof-status-provenance-and-reproducibility#citation-25)

<a id="bib-RodgersSPC2"></a>

[23] Jeremy Rodgers. *Shadow Theory and Consciousness: Awareness, Perspectival Realization, and the Source-to-Experience Problem*. Zenodo. Version 2. 2026-09-20. [doi:10.5281/zenodo.22853774](https://doi.org/10.5281/zenodo.22853774). [https://www.everythingequation.com/consciousness/monograph](https://www.everythingequation.com/consciousness/monograph). Publication edition. Author publication-page metadata; supplied source version retained in the accompanying freeze archive.

Cited in: [Section 1](/consciousness/research/paper-2/introduction#citation-1) · [Section 2](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#citation-3) · [Appendix F](/consciousness/research/paper-2/appendix-f-proof-status-provenance-and-reproducibility#citation-24)

<a id="bib-vanRooyenWilliamson2014"></a>

[24] Brendan van Rooyen, Robert C. Williamson. *Le Cam meets LeCun: Deficiency and Generic Feature Learning*. 2014. [doi:10.48550/arXiv.1402.4884](https://doi.org/10.48550/arXiv.1402.4884). [https://arxiv.org/html/1402.4884v2](https://arxiv.org/html/1402.4884v2). 1402.4884.

Cited in: [Section 1](/consciousness/research/paper-2/introduction#citation-2) · [Section 4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#citation-5)

<a id="bib-RubensteinEtAl2017"></a>

[25] Paul K. Rubenstein, Sebastian Weichwald, Stephan Bongers, Joris M. Mooij, Dominik Janzing, Moritz Grosse-Wentrup, Bernhard Schölkopf. *Causal Consistency of Structural Equation Models*. Proceedings of the 33rd Conference on Uncertainty in Artificial Intelligence (UAI 2017). 2017. [https://arxiv.org/abs/1707.00819](https://arxiv.org/abs/1707.00819). 1707.00819.

Cited in: [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#citation-8)
