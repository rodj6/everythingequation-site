# Chapter 1: Source, readout and the statistical target

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

<a id="found:chapter"></a> 



<a id="section-1-1"></a>

## 1.1 What the source/readout premise supplies

 Let $\Omega$ be a space of candidate source states and let a declared equivalence remove gauge or descriptive redundancy. Write $S$ for the resulting reduced source space. A readout is a surjection $p:S\to T$. A source relation $a:S\to A$ is relevant to a stated question. This elementary specification is deliberately prior to a Hilbert space, a probability measure or a stochastic process. The applicable foundation results are the descent and target-completion theorems of [[F01](/quantum-measurement/monograph/bibliography#bib-F01), [F02](/quantum-measurement/monograph/bibliography#bib-F02), [F03](/quantum-measurement/monograph/bibliography#bib-F03)], and the dynamical closure theorems of [[F05](/quantum-measurement/monograph/bibliography#bib-F05), [F06](/quantum-measurement/monograph/bibliography#bib-F06)]. Their finite versions suffice here. 



**Theorem 1.1 (Descent and the coarsest target completion).**

<a id="found:descent"></a> There is a map $\bar a:T\to A$ with $a=\bar a\circ p$ if and only if $a$ is constant on every fiber of $p$. It is then unique. For any family $(a_\alpha)_{\alpha\in I}$, put 

$$

 e(s)=(p(s),(a_\alpha(s))_{\alpha\in I}),\qquad E=e(S).

$$

 Every surjective representation $f:S\to F$ from which $p$ and every $a_\alpha$ can be recovered factors uniquely through $e$: there is a unique surjection $h:F\to E$ with $e=h\circ f$. 

 

**Proof.**

If $a=\bar a\circ p$, points with the same readout have the same $a$ value. Conversely define $\bar a(t)=a(s)$ for any $s\in p^{-1}(t)$; fiber constancy makes the definition independent of the choice. Surjectivity gives uniqueness. In the second assertion write the recovery maps as $p=u\circ f$ and $a_\alpha=v_\alpha\circ f$. Then $h(z)=(u(z),(v_\alpha(z))_\alpha)$ lies in $E$ because $f$ is onto, and has the asserted factorization. It is onto because $e$ is onto and unique because $f$ is onto. 

□

 

This minimality orders retained information. It neither minimizes jump counts nor chooses a probability measure on $E$. For example, if $S=\{0,1\}\times\{a,b\}$, $p$ retains only the first coordinate and the nominated relation retains the second, the coarsest completion is all of $S$. Infinitely many transition generators can act on that same completed space. No representative-selection question distinguishes those generators. 



**Proposition 1.2 (Dynamical closure).**

<a id="found:closure"></a> For a deterministic source evolution $\Phi_t:S\to S$, an autonomous readout map $U_t$ satisfying $p\Phi_t=U_tp$ exists exactly when $p\Phi_t$ is constant on fibers of $p$. If this holds for all $t$ and $\Phi$ is a semigroup, then $U$ is a semigroup. 

 

**Proof.**

The existence assertion is Theorem [1.1](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:descent) applied to $a=p\Phi_t$. For the semigroup property, $U_{s+t}p=p\Phi_{s+t}=p\Phi_s\Phi_t=U_sU_tp$; surjectivity of $p$ gives $U_{s+t}=U_sU_t$. 

□

 

For a finite supplied Markov source with generator $L$, the corresponding criterion is equality of the total rates from any two source states in the same fiber to each destination fiber. It is a condition on a generator already given, not a recipe selecting that generator. Part [IV](/quantum-measurement/monograph/statistical-selection-of-event-histories#part:statistics) proves the version needed for event coarse-graining. The geometric realization theory [[F04](/quantum-measurement/monograph/bibliography#bib-F04)] starts from a specified action and a declared reduction; its orbit space need not be a smooth manifold. A discrete readout therefore does not, by itself, exclude a continuous underlying source. The bulk/brane example in [[F07](/quantum-measurement/monograph/bibliography#bib-F07)] similarly pushes forward an already supplied source-history law. These scope facts prevent geometric or informational incompleteness from silently becoming a probability postulate. 



<a id="section-1-2"></a>

## 1.2 Hamiltonian current and actual events

 Fix a finite orthogonal resolution $(P_n)_{n=1}^d$ of a coherent Hilbert space and a self-adjoint Hamiltonian $H(t)$. The sector spaces may be degenerate and may contain an inaccessible reference. For a normalized solution of $i\hbar\dot\Psi=H\Psi$, define <a id="found:current"></a>


$$

 \Psi_n=P_n\Psi,\quad w_n=\|\Psi_n\|^2,\quad
 J_{nm}=\frac{2}{\hbar}\operatorname{Im}\langle\Psi_n,H\Psi_m\rangle.

$$

Equation (1.1).

 Throughout this text $J_{nm}$ is current *into* $n$ from $m$; $H_{nm}=P_nHP_m$. Direct differentiation gives <a id="found:continuity"></a>


$$

 J_{nm}=-J_{mn},\qquad \dot w_n=\sum_{m\ne n}J_{nm},\qquad
 |J_{nm}|\le\frac{2\|H\|}{\hbar}\sqrt{w_nw_m}.

$$

Equation (1.2).

 Indeed $\dot w_n=2\operatorname{Re}\langle\Psi_n,-iP_nH\Psi/\hbar\rangle$, and the $m=n$ term is real before multiplication by $-i$. Self-adjointness proves antisymmetry; Cauchy–Schwarz proves the bound. 

The actual-event target is a law on right-continuous sector histories $X\in D([0,T],\{1,\ldots,d\})$. If $N_{nm}$ counts $m\to n$ events, a predictable intensity $\lambda_{nm}$ means <a id="found:compensator"></a>


$$

 N_{nm}(t)-\int_0^t1_{\{X_{s-}=m\}}\lambda_{nm}(s\mid\mathcal F_{s-})\,ds
 \quad\text{is a local martingale.}

$$

Equation (1.3).

 The filtration $\mathcal F$ is part of the claim. Exposing a microscopic timer can enlarge it and change a conditional intensity even when the same natural-history law remains. 

Bell's minimal generator is <a id="found:bell"></a>


$$

 \lambda^{\rm B}_{nm}(t)=\frac{[J_{nm}(t)]_+}{w_m(t)}\quad(w_m(t)>0).

$$

Equation (1.4).

 This is an established construction [[DGGTZ](/quantum-measurement/monograph/bibliography#bib-BellQFT)]; its physical selection is the present problem. Equation [(1.2)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:continuity) is not Equation [(1.3)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:compensator). In particular a random counting measure is atomic whereas $J_{nm}(t)dt$ is an absolutely continuous signed measure. They are not equal path by path. Expected directed traffic $F_{nm}=\mathbb E[1_{X=m}\lambda_{nm}]$ may satisfy $F_{nm}-F_{mn}=J_{nm}$ under a statistical current-realization law. That law introduces probability-bearing content. Under it the surplus family $F_{nm}=[J_{nm}]_++s_{nm}$, $s_{nm}=s_{mn}\ge0$, remains; history freedom can remain even when $s=0$. 

For time-dependent Markov rates, first-exit survival while the origin stays $m$ is 

$$

 S_m(t_0,t)=\exp\left[-\int_{t_0}^t\sum_{n\ne m}\lambda_{nm}(u)\,du\right].

$$

 A constant hazard gives an exponential waiting time in physical time. In general only the integrated hazard threshold is exponential. No substitution of exposure time for physical time is made when claiming [(1.4)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:bell). 



<a id="section-1-3"></a>

## 1.3 The predictive-current completion

<a id="found:predictive-section"></a> A concrete use of the foundation is possible without choosing a jump law. Let $\mathcal H$ now be finite dimensional and let $H_a$, $a\in\mathcal A$, be a finite list of admitted constant control Hamiltonians. Set 

$$

 C^a_{nm}=\frac{P_nH_aP_m-P_mH_aP_n}{i\hbar},\qquad
 \mathcal L_a^*O=\frac{i}{\hbar}[H_a,O].

$$

 Let $\mathcal W$ be the smallest real subspace of Hermitian operators containing every $P_n,C^a_{nm}$ and invariant under every $\mathcal L_a^*$. It is computed by repeatedly adding the images of a basis under these maps; dimension is at most $(\dim\mathcal H)^2$. For a basis $O_1,\ldots,O_ell$ of $\mathcal W$, define $\xi(\rho)=(\operatorname{tr}\rho O_i)_i$. 



**Theorem 1.3 (Exact predictive-current representation).**

<a id="found:predictive"></a> Two density operators have the same $\xi$ if and only if all future sector weights and currents agree under every finite sequence of the admitted controls. The image of $\xi$ is the coarsest representation sufficient for that target, in the factorization sense of Theorem [1.1](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:descent). It evolves autonomously under the admitted controls. 

 

**Proof.**

Heisenberg evolution under control $a$ is $e^{t\mathcal L_a^*}$. Invariance of the finite-dimensional space $\mathcal W$ implies invariance under this exponential, hence under products of such exponentials. Equality of $\xi$ therefore gives every nominated future expectation. Conversely equality of future expectations for all nonnegative pulse durations implies equality of all one-sided mixed derivatives at zero. These are expectations of the ordered words $\mathcal L_{a_1}^*\cdots\mathcal L_{a_k}^*P_n$ and of the corresponding words applied to $C^a_{nm}$; they span $\mathcal W$. Thus $\xi$ agrees. The factorization follows from the equality of target fibers. In a fixed basis, invariance writes $\mathcal L_a^*O_i=\sum_jA^a_{ij}O_j$, so $\dot\xi=A^a\xi$ during that control. 

□

 

For $H=\hbar g\sigma_x$, the waves $(|0\rangle\pm i|1\rangle)/\sqrt2$ have equal sector weights and admit the same current occupancy $X=0$, but their $J_{10}$ are $\mp g$. The source distinction lost by occupancy readout is active for the next-event question. Retaining the current or its predictive completion restores information needed to evaluate a proposed generator. It does not select the generator. Classical preparation keys that remain active are appended as separate variables, rather than erased by replacing a complete preparation with a density matrix of only one subsystem.
