# Chapter 15: The realized domain and its boundaries

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

<a id="ch:realization"></a> 

<a id="section-15-1"></a>

## 15.1 Physical data, constitutive selection, and analysis

<a id="sec:realization-three-layers"></a> A transition matrix alone is not a complete realization. The specification $R^\ast$ separates three roles. Physical data specify states, preparations, mechanism kernels, ports, actual resources and process provenance. A constitutive selection doctrine fixes which primitive component interfaces, native time cells, internal routes, endogenous records and executable native protocols enter this theory of manifestation. An analyst chooses observations and approximations of that already specified object. The first two roles determine the assignment; the third does not.

 

| Role | What it fixes |
| --- | --- |
| Physical realization | The actual kernels, feasible preparations and controls, carriers, incoming interactions, resource updates and provenance. |
| Constitutive doctrine | The primitive interface and time convention; the internal route mask; endogenous record and test selection; native return contract. |
| Analyst representation | Display horizon, measured test subset, numerical approximation and reporting format. |

 

The constitutive doctrine is part of the theory's input, fixed independently of a preferred consciousness verdict. It need not be derivable from the bare kernel to be stated consistently, but its adequacy for an actual vessel requires an argument. Merely moving a discretionary choice into the word physical would not remove it. The finite completion theorem is relative to a supplied, checked $R^\ast$; a universal source-side selector of $R^\ast$ is not claimed.



<a id="section-15-2"></a>

## 15.2 A physical interface doctrine before candidate selection

 <a id="sec:spc2-realization"></a> The successor constitution uses an enriched physical realization $R^\ast$, specified before any experiential attribution. It supplies a finite primitive component family $\mathcal B$, complete state and instrument laws, native physical ticks and operating regimes, preparation laws, admissible physical port operations, route typing, retained controller and resource states, and carrier lineage. The exact construction uses rational data, a finite intrinsic carrier and controller presentation, and a finite complete native return catalogue. The predictive grammar can admit all finite lengths. The candidate projections are generated for every nonempty $C\subseteq\mathcal B$ before cores are selected. Thus the physical domain does not presuppose a subject partition.

The primitive factorization, native tick, and route doctrine are declared physical-constitutive inputs. They are not inferred from a transition matrix alone. An analyst may choose a smaller displayed dataset without changing them; physically changing a port or update law is a different operation. A core that lacks an autonomous local kernel is not thereby unconscious: the autonomous-core specialization does not apply until the missing physical state or boundary memory is retained.



**Proposition 15.1 (Candidate construction precedes individuation).**

 <a id="prop:spc2-candidates-first"></a> Let the complete physical model supply finite preparations, a finite native experiment grammar and resource contract, and rational joint instruments. For every nonempty component subset $C$, its candidate state projection, projected physical history tree, and joint-closure test can be constructed without first deciding whether $C$ is a core. 

 

**Proof.**

For each finite depth, enumerate the physical paths and their admitted native controls from the preparation family. Their union defines the possibly infinite candidate history family; the finite instrument representation specifies it without storing every path. For each of the finitely many subsets $C$, apply its component projection at every node, retaining the specified boundary/control labels and history prefixes. This produces every candidate domain before an SCC or experiential predicate is evaluated. If $p_C$ is the proposed finite carrier and $\chi_C$ its native output map, a local joint instrument exists exactly when 

$$

\sum_{o:\,\chi_C(o)=y}\ \sum_{s':\,p_C(s')=x'}
       M_{a,o}(s,s')

$$

 is constant on every nominated fibre of $p_C$ at a fixed boundary contract and context, for each common admissible action $a$, output $y$, and successor $x'$. Finite enumeration checks this condition; fibre constancy defines the local instrument and point-mass complete-state preparations establish necessity for closure on every state in the nominated domain. Equality under only one limited preparation ensemble would be a weaker condition. The physical port contract must also descend. A candidate that fails the check requires an enlarged physical carrier or a stated history treatment. No subject assignment is used in this construction. 

□



Projected history trees supply physical evidence and possible continuations. They do not turn an observer's posterior distribution into the vessel's actual intrinsic state. In the intrinsic-state specialization the actual point is $p_C(s)$; conditioning incomplete records describes uncertainty about that point. For indefinitely operating finite-state systems, the same finite carrier is supplied with the predictive construction's family of all finite native tests.



<a id="section-15-3"></a>

## 15.3 Joint causal dependence

 <a id="sec:spc2-joint-dependence"></a> Fix one nominated physical regime. Write $S=\prod_{i\in I}S_i$ and let $T_e(s,\cdot)$ be the complete next-state law under a specified native operation and boundary condition, jointly indexed by $e$. For $J\subseteq I$, write $T_{e,J}$ for its joint output marginal. Comparisons in the following definition use the same boundary condition and states differing in one primitive coordinate. Their physical scope is part of $R^\ast$.



**Definition 15.2 (Minimal target dependence).**

 For a fixed comparison $(e,s,s')$ differing only in coordinate $i$, a nonempty output set $J$ is minimally distinguishing when 

$$

T_{e,J}(s,\cdot)\ne T_{e,J}(s',\cdot),\qquad
T_{e,L}(s,\cdot)=T_{e,L}(s',\cdot)
\quad\text{for every }L\subsetneq J.

$$

 Record the directed hyperedge $i\longrightarrow J$ and the associated arrows $i\to j$ for $j\in J$. Take the union over every admitted native mechanism/action comparison in the one compatible regime, using the same kernels as the return catalogue. This gives the full dependence graph $G^{\mathrm{all}}$. The internal graph $G^{\mathrm{int}}$ retains the arrows licensed by the separately supplied internal-route doctrine. 



Write $i\to j$ only for these direct projected dependence arrows, and $i\rightsquigarrow j$ for a nonempty directed path. Strong connectivity requires mutual reachability; graph recurrence requires a nonempty return path. Neither notation by itself asserts that a physical return schedule has been executed.

Minimality is imposed for each fixed comparison. Including an irrelevant coordinate in a larger affected output set does not by itself create an arrow to that coordinate. Joint distributions remain essential: a source variable can control the correlation of two outputs while leaving both individual marginal distributions unchanged.



**Proposition 15.3 (Joint-parent factorization).**

 <a id="prop:spc2-parent-factorization"></a> Suppose the regime domain is the full Cartesian product and every one-coordinate comparison is included. For $C\subseteq I$, put 

$$

P(C)=\{i\notin C:\text{some }j\in C\text{ has }i\to j
          \text{ in }G^{\mathrm{all}}\}.

$$

 Then, for each $e$, the law $T_{e,C}(s,\cdot)$ depends on $s$ only through $(s_C,s_{P(C)})$. 

 

**Proof.**

If changing only $i\notin C\cup P(C)$ changed the $C$-marginal, finiteness would provide an inclusion-minimal distinguishing set $J\subseteq C$. This would produce an arrow $i\to j$ for each $j\in J$, contradicting $i\notin P(C)$. Change the remaining outside coordinates one at a time. Cartesianity keeps every intermediate state in the comparison domain, and the $C$-law is unchanged at every step. This proves fibre constancy. 

□



When physical constraints leave holes in the comparison domain, the argument requires the corresponding one-coordinate moves to connect each relevant fibre. Without that condition, joint-parent factorization is checked directly on the nominated states; absence of observed arrows does not establish it. All causal parents are included in this check, including those whose routes are typed external. Conditioning on parent values gives a controlled mechanism, not an autonomous law for an unmodelled external feedback loop.



<a id="section-15-3-1"></a>

### 15.3.1 The later masking audit and its quantitative repair

 <a id="sec:update-masking"></a> The later relational-boundary analysis identifies a second instability of exact target minimality, distinct from the appearance of weak edges discussed in Chapter [20](/consciousness/monograph/splitting-merging-and-the-stability-of-subject-boundaries#ch:split) <a id="citation-revised-46"></a>[[50](/consciousness/monograph/bibliography#bib-RodgersBoundaries2026)]. A small proper-subset effect can delete an edge previously supported by a strong joint effect. Retaining the exact definition above makes that consequence inspectable rather than concealing a change of admission law.

Let a prepared bit $b$ be encoded into two registers by 

$$

E_\varepsilon(b,c)=
\begin{cases}
(\xi,\xi\oplus b),&\text{with probability }1-\varepsilon,\\
(b,\zeta),&\text{with probability }\varepsilon,
\end{cases}
\qquad D(b,c)=(b\oplus c,0),

$$

 where the fresh fair bits and branch choice are independent of the source. In output order $00,01,10,11$, the encoder rows are 

$$

P_0=(1/2,\varepsilon/2,0,(1-\varepsilon)/2),\qquad
P_1=(0,(1-\varepsilon)/2,1/2,\varepsilon/2).

$$

 At $\varepsilon=0$, both singleton laws agree while the pair distinguishes $b$, so the joint target projects an edge $1\to2$. For every $0<\varepsilon\le1/2$, the first singleton acquires contrast $\varepsilon$. The pair ceases to be minimal and that projected edge disappears. Nevertheless, 

$$

\sup_x\operatorname{TV}(E_\varepsilon(x),E_0(x))=\varepsilon/2,
\qquad d_{12}=1-\varepsilon,
\qquad r_{(E_\varepsilon,D)}=1-\varepsilon.

$$

 The same encoder and decoder therefore retain a strong joint distinction and a strong scheduled terminal return while the exact graph-derived candidate changes. This terminal calculation does not preserve the old route certificate after its graph edge has disappeared. Nor does it classify every proper subcomponent phenomenally.

The continuous repair asks a different question: how much of a complete experiment is lost after a view is deleted? For finite preparation labels $\theta$, joint laws $P_{J,\theta}$, and retained marginals $P_{L,\theta}$, define directed statistical deficiency by 

$$

\delta_P(J\mid L)=\min_G\max_\theta
\operatorname{TV}(P_{J,\theta},P_{L,\theta}G),

$$

 where one stochastic reconstruction kernel $G$ must work for every unknown preparation. The kernel reproduces distributions and may resample retained coordinates. It need not preserve the original archive or recover the actual past event. For the displayed encoder, on $0\le\varepsilon\le1$, 

$$

\delta_P(12\mid1)=\max\{1/2-\varepsilon,(1-\varepsilon)/4\},
\qquad
\delta_P(12\mid2)=\tfrac12\max\{\varepsilon,1-\varepsilon\}.

$$

 The companion paper supplies the matching reconstruction kernels and lower bounds. Common-conditional padding adds no deficiency, whereas a coordinate with a source-independent marginal can still participate in indispensable joint information. Under a uniform row-law perturbation $\eta$ of the same experiment and projection, the deficiency changes by at most $2\eta$.

These results strengthen the analysis of joint information without silently replacing A1. A reconstruction diagnostic, a physically executable native return and resistance to an allowed disconnected simulator answer different questions. The successor analysis retains schedule-indexed supports with separate information, return and cut profiles. No particular threshold or overlapping candidate family is thereby selected as the collection of subjects. A revised admission doctrine would have to justify that selection, reconstruct the resulting native predictive objects for A2, and recompute their provenance continuations for A3.



<a id="section-15-4"></a>

## 15.4 Native recurrence and admission

 <a id="sec:spc2-recurrence"></a> The internal graph provides maximal strongly connected candidates. Graph recurrence is a structural disposition and must not be confused with a presently executed feedback cycle. A finite physical return catalogue is therefore supplied by $R^\ast$ independently of the experiential verdict. It is generated for every candidate subset from the complete physical experiment model.

More precisely, $R^\ast$ fixes an executable finite generative rule for the *complete* catalogue allowed by its native operation and resource contract. For example, a nonrenewable physical program counter can bound all admitted recurrence schedules. The rule enumerates every template in that finite contract, including failed tests; the analyst cannot omit a successful template or replace the catalogue by a sample. Its bound is not the reader's analysis horizon. If an indefinitely operating system is instead assigned a finite constitutive template family, that family is an explicit theory-selection premise, not a theorem that it exhausts every physically possible experiment.



**Definition 15.4 (Executable internal return witness).**

 A covering return witness for $C$ specifies a component $i\in C$, two admissible preparations differing only by the nominated source intervention at $i$, a common executable native controller schedule with its resources, and a terminal internal observation at $i$ after $\ell\ge1$ native ticks. The schedule carries a physical route certificate for a nonempty closed internal tour beginning and ending at $i$, whose support is exactly $C$. For a joint-output mechanism the certificate retains its whole target set rather than substituting an unsupported single-coordinate marginal channel. Every named coupling must be executable in the one supplied schedule with its actual controller and resources. A list of separately possible edges, or a syntactic graph walk without this schedule, is not a covering certificate. The incoming boundary preparation is common and independent of that intervention. External routes that could carry the difference out of $C$ and return it are cut or held fixed by the supplied physical instrument, or their irrelevance is separately proved. The two terminal laws must have strictly positive total-variation distance. 



Every item in a finite return catalogue is evaluated by products of the supplied instruments. Controller compatibility and boundary isolation are physical hypotheses of those products. A sequence synthesized from incompatible control modes is not a witness. The catalogue and its native time convention are fixed before subject assignment; changing a reader's display horizon does not add or remove its physical experiments.

The route certificate is finite data, not a new unnamed predicate. It lists the time-indexed native mechanism applications, their internal route or hyperedge labels, controller states, and resource updates. The verifier checks each application against the supplied primitive mechanism table, checks controller/resource admissibility, checks the closed-tour incidences and support exactly $C$, and then evaluates the two terminal laws by the corresponding rational instruments. For a branching physical schedule these checks cover every positive-probability branch. This verifies execution of the declared covering couplings; positive return is a separate numerical condition.

The following law applies only after the candidate's finite intrinsic representation and its native boundary-policy contract have passed the joint-closure and predictive-congruence requirements. A failure of those requirements leaves this representation outside the specialization; it does not assign unconsciousness to the physical system.



**Definition 15.5 (Qualifying core).**

<a id="def:core"></a> At a given occurrence, a maximal SCC candidate is qualifying precisely when its certified native representation admits an executable covering return witness starting in the occurrence's actual native operating and protocol type, with its current resource context fixed, and two admissible preparations in that same type have unequal laws for a native finite test. The witness must belong to the complete constitutive return catalogue for that context. A singleton requires a nonempty physical self-return route. The predicate concerns physical organization before any experiential assignment. 



This successor law makes structural recurrence, whole-candidate schedule compatibility, and retained influence separate checks. It does not infer the latter two from an SCC calculation. The certificate shows that the covering couplings execute and that a distinction returns; a stronger claim that the returned distinction travels exclusively along every named edge would require route-isolation interventions and is not made. A physical identity or noisy-persistence register can pass a one-tick return test; an unchanged analyst annotation is not a physical register. No minimum intelligence, autobiographical self, or biological material is imposed by this clause.



<a id="section-15-5"></a>

## 15.5 Limits of canonical selection

 <a id="sec:spc2-canonicality"></a> 

**Theorem 15.6 (No equivariant binary-factorization selector).**

 <a id="thm:spc2-no-factor-selector"></a> Let an otherwise unstructured four-state system have identity dynamics and uniform preparation. Consider factorizations into two binary factors, modulo permutations of the two factors and relabelling the values within each factor. No deterministic selector of one such factorization from these data alone is equivariant under every automorphism of the data. 

 

**Proof.**

Write the states as $1,2,3,4$. The three unordered balanced binary partitions are 

$$

p_1=12\mid34,\qquad p_2=13\mid24,\qquad p_3=14\mid23.

$$

 Any two distinct partitions intersect in four singletons and hence define a binary-by-binary factorization. Conversely each such factorization gives an unordered pair of these partitions. There are therefore exactly three factorizations after the stated factor and value gauges are removed. The full permutation group $S_4$ preserves the identity kernel and uniform preparation and acts transitively on these three factorizations. No one factorization is fixed by every permutation. An equivariant selector at data fixed by all of $S_4$ would have to return such a fixed factorization, which is impossible. 

□



Each candidate has two prime-sized factors, independent uniform preparation, independent identity updates, and a jointly sufficient four-state description. These requirements do not break the symmetry. Returning the entire set of candidates is covariant, but does not select one primitive decomposition. Extra physical ports, geometry, or carrier structure can break the symmetry; their selection is additional data.

Causal-emergence analysis offers one principled way to compare descriptions using specified coarse-grainings and intervention distributions <a id="citation-revised-47"></a>[[21](/consciousness/monograph/bibliography#bib-Hoel2013)]. Such comparisons can reveal advantages of a macro description without deriving a unique primitive factorization from an unstructured kernel. The following consequence concerns precisely that latter, more demanding selection task.

The same obstruction applies to any numerical selection score invariant under the automorphisms of these bare data: the score is constant on the three-element orbit, so optimization cannot pick one member uniquely. Each factorization already has independent subsystem histories under uniform preparation and identity evolution; a conditional-independence requirement that these histories have an empty separating boundary does not distinguish them. Likewise each is exactly sufficient and dynamically stable. Minimality, independence, stability and symmetry therefore reduce no further freedom in this example. This does not refute enriched causal factorizations or multiscale models. It identifies the additional physical structure or selection premise they must supply before a unique choice can be claimed.



**Proposition 15.7 (Obstruction to bare-kernel individuation).**

 <a id="prop:spc2-canonicality-obstruction"></a> A subject-count rule agreeing with primitive-component SCC individuation in the following finite examples cannot simultaneously be determined by the unstructured transition kernel alone, invariant under arbitrary component regrouping, invariant under all integer time resampling, and independent of internal/external route typing. 

 

**Proof.**

The identity law on four states has two recurrent cores when realized as two binary persistence registers and one when realized as a single four-valued persistence register. The bare stochastic matrix is the same up to a state bijection, but the component doctrine differs. Equip each presentation with its corresponding native state records and executable one-tick self-return contract; both then meet the admission conditions.

For two binary components the one-tick SWAP law $(A,B)\mapsto(B,A)$ has one SCC, whereas its two-tick kernel is the identity and has two self-loop SCCs. Thus integer resampling changes the partition when the sampled update is incorrectly substituted for the native mechanism. The one-tick presentation has a two-tick covering return, and the sampled presentation has one-tick self-returns; both can be supplied with qualifying native records.

Finally, the fixed kernel $T=(I+\mathrm{SWAP})/2$ has self-dependence and cross-dependence. Typing the cross-routes as internal gives one SCC; typing them as external retains two internal self-loop candidates. The complete transition kernel is unchanged. These differences cannot be removed by an invariance assertion while preserving all three stipulated SCC assignments. 

□



The proposition does not rule out a deeper physical selection law. It shows why the source/readout premise and a bare kernel are insufficient to supply one. The successor states its interface doctrine rather than calling that missing selection canonical.



<a id="paragraph-4"></a>

### Additional response evidence can identify a chart

 The obstruction concerns selection from bare data. Enriching those data with independently characterized interventions can resolve a restricted part of the realization question. On a completely distinguished finite state set $S$ of size $N=2^n$, suppose a strictly positive response family factors in an unknown bijective binary chart $c:S\to\{0,1\}^n$: 

$$

Q_\alpha(s)=\prod_{i=1}^n q_i(\alpha)^{c_i(s)}
                    [1-q_i(\alpha)]^{1-c_i(s)},\qquad0<q_i(\alpha)<1.

$$

 Let $L_{\alpha s}=\log Q_\alpha(s)-N^{-1}\sum_t\log Q_\alpha(t)$, using uniform output centering. If $\operatorname{rank}L=n$, the chart is unique up to coordinate permutation and independent complementation <a id="citation-revised-48"></a>[[46](/consciousness/monograph/bibliography#bib-RodgersInterventional2026)]. Its row-space projector satisfies 

$$

P_{st}=\frac{n-2d_H(c(s),c(t))}{N},

$$

 so it reconstructs the cube adjacency. The proof writes the centered log rows in the span of binary sign coordinates. Any other binary coordinate in that span must be a signed singleton: its maximum absolute value is the coefficient $\ell^1$ norm and its mean square is the squared $\ell^2$ norm, both equal to one. Independence then forces a signed permutation. This is identification within an enriched response class, consistent with the impossibility of selecting from the symmetric bare kernel alone.

The same paper gives a sufficient stability certificate. For a nonempty class of exact product-response models obeying $\|\widehat L-L\|_2\le e$, the inequality $\widehat\sigma_n>Ne$ makes their charts agree up to that ambiguity; the estimated leading row-space projector recovers adjacency by threshold $(n-3)/N$. Nonemptiness and the error bound are part of the certificate. Rank deficiency alone does not establish ambiguity, and an observed rank by itself does not justify the physical product model.

In the supplied five-register construction, unlabeled response laws recover the original, nonlocally recoded and signed-control charts. Combined with the unchanged service and remaining realization contracts, they recover the inherited two-, one- and two-core assignments. These are synthetic response-to-chart calculations. Complete state discrimination, binary cardinality, response stationarity and product factorization must be established independently for a device. The result identifies a candidate microchart; it does not select a macrograin, exclude hidden refinements or multivalued carriers, or supply native timing, endogenous records, resources and A3 provenance.



**Proposition 15.8 (Covariance of finite individuation).**

 <a id="prop:spc2-individuation-covariance"></a> A bijection of primitive components and coordinatewise state labels that transports the complete kernels, admitted comparisons, route typing, regimes, preparation laws, native controller grammar, return catalogue, and lineage transports the minimal target hyperedges, parent-closure conditions, return witnesses, and admitted SCC partition. 

 

**Proof.**

Corresponding joint output marginals have equal transported probabilities. Equality, inequality, and inclusion-minimality of output subsets are preserved, so hyperedges and their typed directed graphs correspond. Fibre constancy and the SCC partition are invariant under these bijections. Corresponding finite experiments have the same transcript probabilities and total-variation distances, preserving the return predicate and the admission law. 

□



This covariance does not cover arbitrary invertible recodings of a joint state, regrouping primitive components, altering physical ports, resampling the native dynamics, or changing a causal threshold. Those operations need their own physical equivalence theorem.
