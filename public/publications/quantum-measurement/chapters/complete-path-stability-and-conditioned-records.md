# Chapter 27: Complete-path stability and conditioned records

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

<a id="int:stability-chapter"></a> 

The finite path-stability argument in the record checkpoints [[C02](/quantum-measurement/monograph/bibliography#bib-C02), [C03](/quantum-measurement/monograph/bibliography#bib-C03)] concerns an already admitted minimal Bell generator. A small wave error alone is not a bound on pointwise jump rates near a node. The correct comparison weights a rate discrepancy by the probability that the two processes still share its origin state. The following proof supplies that step and a quantitative version on a fixed finite sector space. No lower bound on a populated sector weight is required in the estimate. 



<a id="section-27-1"></a>

## 27.1 A coupling estimate that retains the occupation weights

 

**Lemma 27.1 (Overlap-weighted path coupling).**

<a id="int:coupling"></a> Let $P,Q$ be nonexplosive time-inhomogeneous Markov jump laws on the same finite sector set, with rates $k_{nm},\ell_{nm}$ and marginal probabilities $p_m(t),q_m(t)$. Suppose their ordinary common-jump coupling is defined by localization on intervals of finite rates. Then <a id="int:overlap-bound"></a>


$$

 d_{\rm TV}(P,Q)\le d_{\rm TV}(p(0),q(0))+
 \int_0^T\sum_{m\ne n}\min\{p_m(t),q_m(t)\}|k_{nm}(t)-\ell_{nm}(t)|\,dt.

$$

Equation (27.1).

 The comparison is on complete paths, including their jump times and null intervals. 

 

**Proof.**

Couple the initial states maximally. While both histories remain identical at $m$, give them simultaneous $m\to n$ jumps at rate $\min(k_{nm},\ell_{nm})$, a jump only in the first coordinate at rate $(k_{nm}-\ell_{nm})_+$, and a jump only in the second at the reverse positive difference. After the first discrepancy continue with the prescribed marginal laws. Before discrepancy the total separating rate at $m$ is $\sum_{n\ne m}|k_{nm}-\ell_{nm}|$. Write $c_m(t)$ for the probability that histories have never separated and currently agree at $m$. Each marginal dominates this event, so $c_m\le\min(p_m,q_m)$. The stopped separating-count compensator gives the integral in [(27.1)](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:overlap-bound). Probability of any discrepancy bounds total variation of the path laws. Apply the construction first on compact intervals of bounded rates and then localize. The nonnegative compensator bound survives the limit. In the Bell domain below, the only possible finite endpoints are nodes or switches; zero population at a node and finite expected jump count give continuation without loss of probability, as in the node construction of Part [IV](/quantum-measurement/monograph/statistical-selection-of-event-histories#part:statistics). 

□

 



**Lemma 27.2 (Cancellation at a sector node).**

<a id="int:node-cancellation"></a> Let $\Psi,\Phi$ be normalized waves for the same orthogonal sectors, with $a_m=\|P_m\Psi\|$, $b_m=\|P_m\Phi\|$. Let $J,J'$ be their Hamiltonian currents for $H,G$, respectively. Put $h_* = \max(\|H\|,\|G\|)$ and set rates to zero at zero-weight origins. For every ordered pair $m\ne n$, <a id="int:node-ineq"></a>


$$
\begin{aligned}
 \min(a_m^2,b_m^2)
 \left|\frac{[J_{nm}]_+}{a_m^2}-\frac{[J'_{nm}]_+}{b_m^2}\right|
 \le |J_{nm}-J'_{nm}|+
 \frac{4h_*}{\hbar}(a_n+b_n)|a_m-b_m|.
\end{aligned}
$$

Equation (27.2).

 Consequently, with $\delta=\|\Psi-\Phi\|$ and $d$ sectors, <a id="int:sumineq"></a>


$$

 \sum_{m\ne n}\min(a_m^2,b_m^2)|k^{\rm B}_{nm}-\ell^{\rm B}_{nm}|
 \le\frac{12d h_*\delta+2d\|H-G\|}{\hbar}.

$$

Equation (27.3).

 

 

**Proof.**

If one origin norm is zero the left side is zero. If $0<a_m\le b_m$, multiply by $a_m^2$ and add and subtract $[J'_{nm}]_+$: 

$$

 a_m^2\left|\frac{[J_{nm}]_+}{a_m^2}-\frac{[J'_{nm}]_+}{b_m^2}\right|
 \le |J_{nm}-J'_{nm}|+
 \left(1-\frac{a_m^2}{b_m^2}\right)|J'_{nm}|.

$$

 The current bound $|J'_{nm}|\le2\|G\|b_nb_m/\hbar$ and $(b_m^2-a_m^2)/b_m\le2|b_m-a_m|$ prove the result with $b_n$ in the second term. Interchanging the two processes proves the other case with $a_n$, and $a_n+b_n$ is a common bound. 

Write $u_m=\|P_m(\Psi-\Phi)\|$. Orthogonality gives $\sum u_m^2=\delta^2$, $\sum a_m^2=\sum b_m^2=1$, and $|a_m-b_m|\le u_m$. Expanding the bilinear current difference gives 

$$

 \sum_{m\ne n}|J_{nm}-J'_{nm}|
 \le \frac{2}{\hbar}\sum_{m,n}
 \left[\|H\|(u_na_m+b_nu_m)+\|H-G\|b_nb_m\right]
 \le\frac{4d\|H\|\delta+2d\|H-G\|}{\hbar}.

$$

 Also $\sum_{m,n}(a_n+b_n)|a_m-b_m|\le2d\delta$. Summing [(27.2)](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:node-ineq) proves [(27.3)](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:sumineq). Including diagonal pairs in these upper bounds only enlarges them. 

□

 



**Theorem 27.3 (Finite Bell path stability through nodes).**

<a id="int:path-stability"></a> Fix a finite orthogonal sector resolution and a physical horizon $T$. Let $H(t),G(t)$ be bounded self-adjoint Hamiltonians, each constant on finitely many time segments, on a finite-dimensional complete coherent bank. Let their normalized waves be $\Psi_t,\Phi_t$, and initialize their minimal Bell processes with respective populations $\|P_m\Psi_0\|^2,\|P_m\Phi_0\|^2$. Write 

$$

 \begin{aligned}\delta_0&=\|\Psi_0-\Phi_0\|,\quad
 e(t)=\frac{\|H(t)-G(t)\|}{\hbar},\\
 D(t)&=\delta_0+\int_0^t e(s)\,ds,\quad
 h(t)=\frac{\max(\|H(t)\|,\|G(t)\|)}{\hbar}.\end{aligned}

$$

 Their complete physical-time path laws satisfy <a id="int:path-error"></a>


$$

 \boxed{\quad d_{\rm TV}(P_H,P_G)
 \le\min\left\{1,\delta_0+12d\int_0^T h(t)D(t)\,dt
                      +2d\int_0^T e(t)\,dt\right\}.\quad}

$$

Equation (27.4).

 The estimate is uniform over the initial normalized waves and has no inverse-weight constant. An inaccessible reference can be included in the sector fibers. The constant depends on the number of compared sectors, the integrated Hamiltonian norms and the horizon, not on a minimum sector population. 

 

**Proof.**

The finite-node construction in Part [IV](/quantum-measurement/monograph/statistical-selection-of-event-histories#part:statistics) supplies equivariant, nonexplosive minimal laws. Alternatively, apply that construction directly to $J$ and $J'$; bounded constant-Hamiltonian segments have analytic weights, finitely many isolated nodes unless a sector is identically empty, and integrable total current. Indeed 

$$

\mathbb E N_{\rm all}(T)=\int_0^T\sum_{m\ne n}[J_{nm}(t)]_+dt
 \le\frac{2d}{\hbar}\int_0^T\|H(t)\|dt<\infty,

$$

 and similarly for $G$. These facts justify the localization in Lemma [27.1](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:coupling). At a node the law has zero probability in the vanishing sector; assigning a rate there has no effect on the trajectory law. 

Duhamel's identity and unitarity give $\|\Psi_t-\Phi_t\|\le D(t)$. The initial population distance is at most the pure-state trace distance and hence at most $\delta_0$. Apply Lemma [27.1](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:coupling), substitute the equivariant marginals $a_m^2,b_m^2$, and then apply Lemma [27.2](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:node-cancellation) at almost every time. Integration proves [(27.4)](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:path-error). The block-norm estimates used only orthogonality of the sectors, so they are uniform over a finite inaccessible reference inside each fiber. More general time dependence is covered by the same estimate whenever equivariant nonexplosive laws and the localized coupling are separately established; it is not needed for the finite pulse theorem. 

□

 

For identical initial waves, $\int e\le\varepsilon$ and $\int h\le B$, this gives <a id="int:simple-error"></a>


$$

 d_{\rm TV}(P_H,P_G)\le\min\{1,2d\varepsilon(1+6B)\}.

$$

Equation (27.5).

 Thus the finite checkpoint stability result does not require a node-cutoff error term. The use of the smaller occupation probability is essential; replacing it by a uniform rate norm would lose the cancellation. This is a completion of a conditional path-stability argument, not a derivation of the statistical generator. The finite sector resolution remains fixed in the limit; growing memory banks require control of $d$ as well as $B$. 



<a id="section-27-2"></a>

## 27.2 What a complete record comparison inherits

 

**Corollary 27.4 (Path observables, stopping and rare records).**

<a id="int:path-records"></a> For the hypotheses of Theorem [27.3](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:path-stability), every common measurable function of the full path has output total variation bounded by [(27.4)](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:path-error). This includes jump counts, first-entry times with an additional “no entry” value, and stopped paths. Conditioning on an event of ideal probability $p>0$ costs the factor $2/p$ in Lemma [2.1](/quantum-measurement/monograph/complete-experiments-and-comparison-conventions#found:errors). A retained physical memory is covered only when it is included in the complete state and both compared record maps have the same physical meaning. 

 

**Proof.**

Total variation contracts under the common measurable map. The stopped output is such a map, with its stopping time and failure/null symbols included. Conditional control follows from Lemma [2.1](/quantum-measurement/monograph/complete-experiments-and-comparison-conventions#found:errors). Merely naming a passive path functional does not construct a memory interaction; that additional physical claim is exactly why the last hypothesis is stated. 

□

 

If a finite-background variational source is used for one experiment, the triangle inequality adds its Part [IV](/quantum-measurement/monograph/statistical-selection-of-event-histories#part:statistics) path error $\varepsilon_{\rm bg}a_{\max}(d-1)T$. If a finite writer has error $\delta_{\rm write}$ and actual archive-crossing probability at most $\delta_{\rm corrupt}$, those are the additional errors in transferring recorded data to actual past labels. Final archive distributions alone do not provide the latter transfer. 



**Counterexample 27.5 (The minimal-generator hypothesis is load-bearing).**

<a id="int:nonminimal-boundary"></a> Take a two-sector stationary eigenwave with $w_0=w_1=1/2$ and zero current. For every nonzero $\epsilon$ let the Hamiltonian be $H_\epsilon=\hbar\epsilon\sigma_x$ and permit symmetric traffic $K_{10}=K_{01}=k/2$, $k>0$. The wave $(|0\rangle+|1\rangle)/\sqrt2$ is an eigenwave. The admitted nonminimal process jumps at rate $k$ in either direction; its probability of at least one jump by $T$ is $1-e^{-kT}$ even as $\epsilon\to0$. At exactly zero coupling an additional support rule can set $K=0$. This family obeys support at exact decoupling and all one-time weight equations, but violates uniform weak-coupling path stability. Theorem [27.3](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:path-stability) concerns the minimal Bell generator and does not exclude this different constitutive law.
