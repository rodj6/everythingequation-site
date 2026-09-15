# Chapter 34: A limiting discrete measurement chain

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="int:chain-chapter"></a> 



<a id="section-34-1"></a>

## 34.1 A constitution that can actually be combined

 The preceding parts contain several explicit physical theories. For a reusable limiting-model calculation, this chapter fixes the finite full-wave configuration constitution. A finite complete sector resolution is part of the model. The source has a surviving normalized wave and one actual configuration. All physical apparatus memories are coherent factors with configuration labels. An inaccessible reference remains in the carried sector fibers. Prescribed finite coherent controls act on the source and apparatus; no wave-dependent classical expectation meter is added. 

For the conditional comparator in this chapter, the wave follows a specified piecewise-constant Hamiltonian in physical time. Its actual native history is either the minimal Bell process admitted directly, or the zero-background law selected by the relative-entropy principle of Part [IV](/quantum-measurement/monograph/statistical-selection-of-event-histories#part:statistics). The second presentation retains expected edge-current realization, the neutral reference process and its limiting prescription. The pilot construction supplies a further microscopic route to this finite-graph Bell comparator, with explicit finite-resource error and its own complete material coupling inventory. Initial joint configurations have wave weights as a stated ensemble law or within the stronger control-stable evacuation domain proved earlier. The preparation results do not automatically prepare equilibrium of an arbitrary entire source and all returning memories. 

These premises suffice for the finite construction below. They do not include CPC as an independent premise, and they do not invoke a Born-calibrated measurement of an auxiliary system. Squared amplitudes enter through the declared initial joint law and its derived equivariance. Statistical content has a named location. 



<a id="section-34-2"></a>

## 34.2 A finite binary write with every branch retained

 Let $Q_0+Q_1=I_S$ be any orthogonal binary resolution, with arbitrary degeneracy. Write $V\in\mathcal H_S\otimes\mathcal H_R$, $\|V\|=1$, and $V_j=(Q_j\otimes I_R)V$, $p_j=\|V_j\|^2$. A blank apparatus qubit $A$ has wave $|0\rangle_A$. During $0\le t\le t_*:=\pi/(2g)$ set <a id="int:writeH"></a>


$$

 H_{\rm wr}=\hbar g\,Q_1\otimes I_R\otimes\sigma_y^A,
 \qquad g>0.

$$

Equation (34.1).

 The sector resolution includes the source block $j$ and apparatus position $a$. Its exact wave is <a id="int:writewave"></a>


$$

 \Psi_t=V_0\otimes|0\rangle_A+
 V_1\otimes(\cos(gt)|0\rangle_A+\sin(gt)|1\rangle_A).

$$

Equation (34.2).

 The only nonzero inter-sector current is 

$$

 J_{(1,1),(1,0)}=g p_1\sin(2gt).

$$

 For $0<t<t_*$ it is positive and the Bell hazard from $(1,0)$ is $2g\tan(gt)$. Its conditional survival from the beginning of the pulse is $\cos^2(gt)$. Thus the rate diverges near the end on a vanishing population, but there is exactly one event almost surely in the $j=1$ branch. The $j=0$ branch is inert. No event at the deterministic endpoint is required. 



**Theorem 34.1 (Complete finite write and conditional continuation).**

<a id="int:binary"></a> Under the constitution just specified, observing the actual apparatus sector at any fixed $s\le t_*$ gives <a id="int:branches"></a>


$$
\begin{aligned}
 \Pr(A_s=1)&=p_1\sin^2(gs),&
 \sigma_1(s)&=\sin^2(gs)|V_1\rangle\langle V_1|,\\
 \Pr(A_s=0)&=p_0+p_1\cos^2(gs),&
 \sigma_0(s)&=|V_0+\cos(gs)V_1\rangle\langle V_0+\cos(gs)V_1|.
\end{aligned}
$$

Equation (34.3, 34.4).

 Here $\sigma_a$ is the unnormalized carried conditional state for future operations that preserve the recorded apparatus block. At $s=t_*$ these are the projective instrument $V\mapsto V_j$ with weights $p_j$. At an earlier $s$, the no-click daughter is the actual state in [(34.3)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:branches), rather than either the initial state or an ideal negative daughter. 

The wave [(34.2)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:writewave) itself is retained globally. If later operations reconnect the $A$ sectors, continuation must use that full wave and both branches. During block-preserving future evolution, normalized linear extraction of the conditional branch follows from factorization of the Hamiltonian and cancellation of its common branch weight in the Bell ratios. 

 

**Proof.**

Equation [(34.2)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:writewave) follows by exponentiating $\sigma_y$, whose rotation sends $|0\rangle$ to $\cos(gt)|0\rangle+\sin(gt)|1\rangle$. The current calculation uses $\langle1|\sigma_y|0\rangle=i$. Equivariance gives the squared norms of its two apparatus components. Orthogonality of $V_0,V_1$ gives the displayed probabilities. Restricting the full vector to $A=a$ gives the unnormalized vectors in [(34.3)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:branches), establishing both the probability and carried-state expression within this constitution. 

For a later $A$-block-preserving Hamiltonian, write the normalized branch wave as $\psi_a$ and its constant total weight as $r_a$. Every current and origin weight wholly inside that block are respectively $r_a J^{(a)}$ and $r_a w^{(a)}$. The common factor cancels in [(1.4)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:bell); the conditional sector law inside that block is therefore its own Bell process. All source and reference amplitudes in the block are kept. If the Hamiltonian reconnects blocks, this cancellation no longer describes the complete source; the continuing Schrödinger wave does. 

□

 

This construction includes an actual configuration event and a physical apparatus coordinate. The intermediate occupancy $A=0$ is a null, and only at the completed pulse is it a sharp negative record. Record stability requires the future Hamiltonian and actual event generator to respect the completed archive, or the quantitative crossing bound in Part [VIII](/quantum-measurement/monograph/configuration-records-continuation-and-faithful-archives#part:records). A display label does not create that stability by itself. 

A readiness variable $d\in\{0,1\}$ may be retained as active classical data. Suppose its prepared law has $\Pr(d=1)=r$, independent of the unknown input conditionally on the declared actual past. In branch $d=1$ run [(34.1)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:writeH); in branch $d=0$ apply the identity and print a failure flag. Then the complete endpoint probabilities are $rp_0,rp_1,1-r$, and the failure daughter is $V$ together with the actual failed resource state. The displayed probability $r$ is a resource premise or a previously proved preparation result, not silently declared to be one. A finite supply of $M$ blank cells supports at most $M$ fresh attempts; exhaustion is a separately recorded identity branch. Reuse requires an actual reset theorem for both the wave and its configuration law. 



<a id="section-34-3"></a>

## 34.3 Sequential noncommuting measurements and retained records

 After a completed write retain $A$, apply a record-controlled unitary $U_a$ to $S$, and write another resolution $(R_b)$ into a fresh cell $B$ by the same construction. In the complete coherent bank these are block-diagonal Hamiltonian pulses controlled by $A$; they do not require a second measurement postulate. The complete configuration resolution remains fixed during these controls; the later measurement changes the interaction Hamiltonian, not the declared microscopic sectors. The endpoint argument uses equivariance for that full Hamiltonian. It does not assign the first pulse's special one-jump hazard to a later noncommuting write. The final wave is <a id="int:seqwave"></a>


$$

 \sum_{a,b}(R_bU_aQ_a\otimes I_R)V\otimes|a\rangle_A|b\rangle_B.

$$

Equation (34.5).

 Consequently <a id="int:seqBorn"></a>


$$

 \Pr(A=a,B=b)=\|(R_bU_aQ_a\otimes I_R)V\|^2,

$$

Equation (34.6).

 and each nonzero branch continues with its displayed vector divided by its norm while the archives remain isolated. The proof is multiplication of the two finite writing unitaries and equivariance on their joint sectors, followed by the branch argument of Theorem [34.1](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:binary). Induction proves the corresponding finite adaptive product formula. Classical records with active preparation provenance are kept rather than averaged away. 

For an explicit noncommuting example, take a qubit, first $Q_a$ the $Z$ projectors and then $R_b$ the $X$ projectors, with $U_a=I$. Equation [(34.6)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:seqBorn) gives $\Pr(a,b)=p_a/2$. The conditional source is the $X$ daughter, while the inaccessible reference retains the state proportional to the original $Z$-component reference vector. If the first pulse is stopped early, $Q_0V$ in the null branch is replaced by $V_0+\cos(gs)V_1$, so subsequent $X$ probabilities contain the surviving coherence. An ideal daughter after an imperfect declaration would give a different experiment. 

A later copy or coherent erase is another unitary on $S,A,B$ and any return memory. The full-wave representation supplies its actual amplitudes. The reduced branch alone is sufficient only when the required block isolation persists. This is the structural distinction between effective conditional continuation and the irreversible-extraction constitution of Part [VI](/quantum-measurement/monograph/finite-detectors-and-measurement-instruments#part:detectors). 



<a id="section-34-4"></a>

## 34.4 A simultaneous finite error budget

<a id="int:budget"></a> For a fixed finite complete graph, the following errors can be combined because their state and output spaces have been specified: 

- $\epsilon_{\rm prep}$ bounds total variation of the actual initial configuration law from the equilibrium reference law for the complete admitted preparation, including active classical keys. Applying the same subsequent transition law contracts this error.

- $\epsilon_H=\hbar^{-1}\int_0^T\|H-G\|dt$ bounds a perturbation of the complete finite pulse programme, and $B=\hbar^{-1}\int_0^T\max(\|H\|,\|G\|)dt$. The fixed-graph Bell path bound is $2d\epsilon_H(1+6B)$ for identical initial waves.

- A variational background of size $\epsilon_{\rm bg}$ contributes at most $\epsilon_{\rm bg}a_{\max}(d-1)T$ to the complete path comparison.

- A physical archive used to represent earlier source labels adds the finite write error and the expected corrupting-crossing bound of Part [VIII](/quantum-measurement/monograph/configuration-records-continuation-and-faithful-archives#part:records). These are needed for past-history meaning, even when final archive weights already agree.

 Thus a common recorded path functional has the sufficient bound <a id="int:budget-eq"></a>


$$

 \epsilon_{\rm path}\le\epsilon_{\rm prep}
   +2d\epsilon_H(1+6B)
   +\epsilon_{\rm bg}a_{\max}(d-1)T.

$$

Equation (34.7).

 For a complete output retaining the common global wave as well as the recorded path, add its trace-distance bound $\|\Psi_T-\Phi_T\|\le\epsilon_H$. For faithful sampled history add both writing and subsequent corruption errors. Conditioning on a rare record requires the probability denominator in Lemma [2.1](/quantum-measurement/monograph/complete-experiments-and-comparison-conventions#found:errors). 

One common useful regime fixes the graph, a finite number of pulses, $T$ and $B$, and takes the initial preparation error, integrated control error, variational background, finite writing error and protected crossing budget to zero. The responsiveness $g$ in [(34.1)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:writeH) stays positive and the measurement time stays $\pi/(2g)$. This limit does not suppress all useful events. If resources enlarge the graph, $d$ and the relevant operator norms must be tracked explicitly. The spectral-gap protection theorem supplies a different, complete-wave estimate under its own bounded block assumptions; a small reduced-wave error alone is not substituted for $\epsilon_H$ in [(34.7)](/quantum-measurement/monograph/a-limiting-discrete-measurement-chain#int:budget-eq). 

The extraction/filtering instrument architecture has its own full-output sum of half-diamond errors in Part [VI](/quantum-measurement/monograph/finite-detectors-and-measurement-instruments#part:detectors). That is a second valid finite chain, but its Gaussian/native admission and irreversible branches are not replaced by the present configuration law without a further embedding theorem. 



<a id="section-34-5"></a>

## 34.5 Dependencies of the limiting-model calculation

  

| Physical or mathematical input | Consequence proved in this monograph | What it does not supply |
| --- | --- | --- |
| Source/readout descent and target completion | Exact test for lost, target-active information; predictive-current quotient | A probability measure, least-traffic law or physical access rule |
| Canonical bond action and conservative exporter | Hamiltonian current and finite signed-charge export | Actual stochastic chemistry or complete response neutrality |
| Scalar pair chemistry and calibrated carrier population | Whole tagged-path Bell limit; physical residence denominator | Universal contact admission or harmless readable microscopic histories |
| Expected edge-current realization and path-entropy principle | Selected complete finite-background history and physical-time Bell limit | Derivation of the principle or neutrality of every statistical reference |
| CPC or the explicit finite-tag/interchange premises | Shared-Wiener population and signal matching | Gaussian noise origin, positive phase lift or universal CPC |
| Responsive zero-channel tests and reference/archive conditions | Faithful intrinsic daughter within the declared class | Universal physical necessity of those tests and conditions |
| Native reader, coherent converter and finite control library | Finite instruments, actual nulls and composed error bounds | Original Hamiltonian Bell trajectories |
| Bounded block interaction and prepared code sector | Quantitative transport protection and finite horizon | Protection against unrestricted logical couplings or scalar clocks |
| Full-wave source, admitted equivariant generator and joint initial law | Actual configuration records, conditional branch predictions and coherent returns | Selection of minimal actual traffic from endpoint Born records |
| Finite correct writes and small archive-changing traffic | Reliable sampled histories | Faithfulness of every first-entry record or every microscopic event |
| Explicit regular preparation class and protocol | Conditional operational preparation within the proved future-use domain | Arbitrary global equilibrium or arbitrary nonequilibrium-memory returns |

  

The monograph therefore establishes conditional realizations and controlled operational constructions. It retains the strongest incompatibility tests as results. In particular, exact readable histories of the unmodified original Bell process and a common affine complete-input law cannot be freely combined in the comparison class of Part [III](/quantum-measurement/monograph/physical-access-material-contacts-and-compatibility-obstructions#part:access). Physical recording changes the complete experiment; a complete joint configuration model does not license a passive classical current writer by definition. 

The statistical and interaction inputs of this limiting-model calculation remain explicit. Part [II](/quantum-measurement/monograph/deterministic-pilot-medium-and-autonomous-material-records#part:pilot) now supplies a deterministic microscopic approximation with controlled full-path error within P1–P4; Part [IX](/quantum-measurement/monograph/a-separate-massive-configuration-completion#part:massive) supplies a separately postulated continuous-configuration alternative. Chapter [35](/quantum-measurement/monograph/internal-resolution-and-the-remaining-foundational-obligations#syn:chapter) gives the final resolution statement and its remaining foundational obligations.
