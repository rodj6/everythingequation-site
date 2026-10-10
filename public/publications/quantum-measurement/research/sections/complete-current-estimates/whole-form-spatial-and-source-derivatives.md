# Section 7: Whole-form spatial and source derivatives

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-7"></a>

## 7 Whole-form spatial and source derivatives

 <a id="p4f:sec:derivatives"></a>

Temporal smoothing and spatial differentiation make different demands. The preceding theorems do not require a spatial derivative of the forcing when their temporal or resolvent assumptions are earned. A physical source derivative, however, must act on the complete coupled form and the actual input; replacing that coordinate by a classical label changes the problem.



**Proposition 7.1 (Ordered whole-form derivative).**

 <a id="p4f:prop:derivatives"></a> Let $A$ and $\mathcal L=LF^{-1}$ be as in Theorem [6.1](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:thm:damped). Let $\delta_i$ be either a parameter derivative on the common form domain, or a closed physical derivation $\delta_iM=D_i^QM-MD_i^P$. For a parameter family, require strong difference-quotient convergence of $A$ in $\mathcal L(\mathcal V,\mathcal V^*)$ and of $\mathcal L$ in $\mathcal L(\mathcal U,\mathcal V^*)$, with locally uniform bounds on these quotients and uniformly equivalent nearby form norms. For a physical derivation, require domain-preserving translations or local gauges for which the conjugated families satisfy these same conditions and realize the displayed derivatives on a common core. Suppose the actual whole-form sandwiches are bounded: <a id="p4f:eq:derivativecontracts"></a>


$$

 \|K^{-1/2}(\delta_iA)K^{-1/2}\|\le\alpha_i,\qquad
 \|K^{-1/2}\delta_i\mathcal L\|\le\beta_i .

$$

Equation (7.1).

 For $\zeta=E+i\eta$, $\eta>0$, write $R_\zeta=(A-\zeta)^{-1}$ and $U_\zeta=K^{1/2}R_\zeta\mathcal L$. Then <a id="p4f:eq:derivativeidentity"></a>
<a id="p4f:eq:derivativebound"></a>


$$
\begin{aligned}\delta_i(R_\zeta\mathcal L)
   &=R_\zeta\{\delta_i\mathcal L
                    -(\delta_iA)R_\zeta\mathcal L\},
                    \\
 \|K^{1/2}\delta_i(R_\zeta\mathcal L)\|
   &\le J_\zeta
          \{\beta_i+\alpha_i\|U_\zeta\|\},\qquad
 J_\zeta=\sup_{\lambda\in\sigma(A)}
                      \frac{\lambda+c}{|\lambda-\zeta|}.
                    
\end{aligned}
$$

Equation (7.2, 7.3).

 If $\zeta$ itself varies, add $(\delta_i\zeta)R_\zeta^2\mathcal L$ to [(7.2)](/quantum-measurement/research/complete-current-estimates/whole-form-spatial-and-source-derivatives#p4f:eq:derivativeidentity). 





**Proof.**

For a parameter family, the form resolvent difference identity is 

$$

 R_{\zeta,\epsilon}-R_\zeta
   =-R_{\zeta,\epsilon}(A_\epsilon-A)R_\zeta.

$$

 It is a bounded identity from $\mathcal V^*$ to $\mathcal V$. Strong differentiation on fixed vectors, uniform local form bounds and the given difference-quotient hypothesis yield $\delta_iR_\zeta=-R_\zeta(\delta_iA)R_\zeta$. Leibniz gives [(7.2)](/quantum-measurement/research/complete-current-estimates/whole-form-spatial-and-source-derivatives#p4f:eq:derivativeidentity). For a physical derivation, conjugate by the domain-preserving translations/gauges first and apply the same argument; differentiation on the common core is the commutator formula. Strong form convergence and closedness of the physical derivative pass it to its admitted domain.

Insert a form Riesz map without changing order: 

$$

 K^{1/2}R_\zeta(\delta_iA)R_\zeta\mathcal L
 =\big[K^{1/2}R_\zeta K^{1/2}\big]
  \big[K^{-1/2}(\delta_iA)K^{-1/2}\big]U_\zeta .

$$

 The first factor has norm $J_\zeta$ by the spectral theorem. The analogous factorization of the $\delta_i\mathcal L$ term proves [(7.3)](/quantum-measurement/research/complete-current-estimates/whole-form-spatial-and-source-derivatives#p4f:eq:derivativebound). Differentiating $A-\zeta$ when $\zeta$ varies gives the stated extra term with its positive sign. 

□



For a literal input vector $a$, the corresponding physical derivative remains <a id="p4f:eq:inputspatial"></a>


$$

 D_i^Q(R_\zeta\mathcal L a)
   =[\delta_i(R_\zeta\mathcal L)]a
                        +R_\zeta\mathcal L D_i^Pa .

$$

Equation (7.4).

 Its second term cannot be erased by a response norm estimate. The graph and derivative domain of $a$ must be included. When $F$ is covariantly constant, $\delta_i\mathcal L=(\delta_iL)F^{-1}$; otherwise 

$$

 \delta_i\mathcal L
    =(\delta_iL)F^{-1}
                -LF^{-1}(\delta_iF)F^{-1}

$$

 on the admitted graph, with an additional bound for that second term. Gauge curvature, moving frames, source kinetic terms and mobility commutators all belong to the whole forms in [(7.1)](/quantum-measurement/research/complete-current-estimates/whole-form-spatial-and-source-derivatives#p4f:eq:derivativecontracts). Differentiating a singular factor $W$ is unnecessary and may be invalid even when the derivative of the whole form $W^*JW$ is bounded.

For example, in three relative dimensions the Hardy inequality gives the legitimate whole Coulomb force form 

$$

 |\langle u,\partial_{R_i}(g/|r-R|)v\rangle|
 \le |g|\|u/|r-R|\|\|v/|r-R|\|
 \le4|g|\|\nabla_r u\|\|\nabla_r v\|.

$$

 With an earned $K\ge\lambda_{\rm rel}(-\Delta_r)$, its relative coefficient is at most $4|g|/\lambda_{\rm rel}$. The coefficient is the true relative-mass kinetic coefficient; source-dependent center maps add their actual derivatives. This is a form estimate, not an $L^2$ operator bound on the force. Strong vector continuity or the stated difference-quotient contract suffices; operator-norm continuity under translations is not assumed.

All statements above keep a fixed physical block chart. For a varying projector one must include its domain-preserving transport and the moving frame term $-iU^*\dot U$. A nonlocal Hilbert-space band unitary is not automatically an isometry of pointwise physical currents. Likewise a moving hard-core boundary requires a proved domain transport before it enters a fixed-domain force identity.
