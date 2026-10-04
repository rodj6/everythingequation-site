# Section 5: A finite spatial ensemble and its Poisson comparison

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-5"></a>

## 5 A finite spatial ensemble and its Poisson comparison

<a id="sec:gas"></a> 

<a id="paragraph-2"></a>

#### Which contact marks are compared.

 The primary input is the ordered contact history with channel marks identifying the contacted edge, packet slot(s) and carrier. The initialized reaction device is independent of the gas conditional on the declared coherent preparation. Its output follows one common measurable causal map with the stated tie and virtual-overflow conventions. Neither all initial gas positions nor conditioning on them belongs to this comparison. The device's initial state may itself be random: the same conditional law is used in both comparisons, independently of the gas, and is averaged after applying the deterministic map.

If the physical identity of each incoming particle is also retained in the output, decorate both count-conditioned laws identically. Conditional on $k\le M_N$ arrivals, their particle identities are a uniformly ordered $k$-subset of the $M_N$ labels, independent of the ordered times and channel marks. For the Poisson comparison, draw one independent uniform permutation of those labels, use its initial segment, and assign new virtual receiver identities if $k>M_N$. This is a common conditional kernel; it does not make particle identities iid marks. Channel marks remain independent with the stated probabilities, and chemistry is independent of the beam identity, so the reaction rates below are unchanged.

For comparison only, extend the reaction-map domain to a countably padded bank of virtual blank contact receivers. The first $M_N$ cells are the physical bank; the further cells have no counterpart in the physical finite beam, which cannot reach them. A Poisson contact sequence can use those mathematical extra cells, preserving its uncompromised reaction generator. Both contact histories are fed through this one total causal map. This convention avoids assuming that a Poisson count has a finite deterministic bound. It neither adds physical particles nor drops physical receivers. Accepted service and recombination events still have the finite stock bound below.



**Theorem 5.1 (Finite-gas marked-history bound).**

<a id="thm:gas"></a> Under the independent initialization and common output conventions just specified, on $[0,T]$ the complete marked contact process differs in total variation from a marked Poisson process of channel frequencies $r_c$ by at most <a id="eq:gaserror"></a>


$$
\Delta_{\rm gas}=\frac{(R_NT)^2}{M_N}.
 

$$

Equation (10).

 The same bound holds after any common measurable causal deterministic contact device with the specified independent initialization, including its retained reaction state and exact event times. The compared output includes the local contact receivers, indexed in contact order, and may additionally carry particle identities under the common decoration above. It does not include the incoming gas's unobserved continuous coordinates. Those remain in the physical microstate. The nontrivial case assumes $M_N>R_NT$; if $R_N=0$, both contact histories are empty and the bound is zero. 

 

**Proof.**

For $R_N>0$, the number of beam crossings is $\operatorname{Bin}(M_N,p)$, $p=R_NT/M_N$. Conditional on that number, the ordered times are ordered independent uniforms on $[0,T]$ and channel marks are independent with probabilities $r_c/R_N$. The Poisson process has exactly the same conditional distribution given its count, so contact-history total variation equals count total variation. A Bernoulli$(p)$ variable and a Poisson$(p)$ variable have distance $p(1-e^{-p})\le p^2$: their only excess Bernoulli mass is at one. Coupling $M_N$ independent such pairs and summing gives distance at most $M_Np^2$, the elementary Poisson-approximation estimate [[6](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-LeCam1960)]. Optional particle-identity decoration is the same count-conditioned kernel in both laws and preserves the bound. Couple the independent initial device states identically. On equal decorated contact histories and initial device states, the deterministic device evolves identically, including eligibility and all null records. Averaging the initial device state and taking any common output therefore contract this bound. The $R_N=0$ case is immediate. 

□

 The finite gas has neither memoryless waits nor an inserted event tape. For $R_N>0$, given the observed contact filtration and $K_t$ arrivals, its total conditional hazard is 

$$

 \frac{M_N-K_{t-}}{M_N/R_N-t},
 \qquad
 {\mathbb P}(\text{no arrival in }(t,t+h]\mid\mathcal F_t)
  =\left(1-\frac{h}{M_N/R_N-t}\right)^{M_N-K_t}.

$$

 The survival formula has $0\le h\le M_N/R_N-t$; the left limit in the hazard makes it predictable. These formulas follow by conditioning the remaining independent positions. In the Poisson comparison, independence of channel increments and predictable eligibility give, for a bounded state function $f$, <a id="eq:generator"></a>


$$
\mathcal Gf(s)=\sum_c r_c\,[f(F_c(s))-f(s)]
 

$$

Equation (11).

 as the jump part of the predictable compensator, almost everywhere in time. The full evolution also contains the specified deterministic flow and export rewrites. This is the derivation of both chemical clocks. It is stronger than a mean collision-frequency calculation. The spatial independence assumption is indispensable: equally spaced particles with a uniform global translation have the same uniform one-particle marginals but different complete waiting-time laws (Section [11](/quantum-measurement/research/hybrid-bell-paths/countermodels-and-limits-of-inference#sec:rivals)).
