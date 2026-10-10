# Section 6: A first-domain route to full-wave continuity

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-6"></a>

## 6 A first-domain route to full-wave continuity

 <a id="p3d:sec:graph"></a>

The deterministic flow theorem requires a continuous representative of the complete wave. In configuration dimension eight, an ordinary $H^2$ estimate does not give this. Conversely, asking for sufficiently many powers of the Hamiltonian can exclude the intended entrance: a bounded radial step need not preserve $H^3$, and an uncut Gaussian need not lie in the second domain of a Coulomb Hamiltonian. We use one genuine Hamiltonian graph together with higher *tangential* regularity. Throughout these application sections $\hbar=1$ after the stated choice of units; finite internal reference fibres are included in all norms.



<a id="section-6-1"></a>

### 6.1 Common forms and tangent graphs



Here is the propagation statement used below. Its hypotheses concern operators and their common form, not an already selected trajectory. Let $\mathcal H$ be the full spatial/internal Hilbert space, $H_{\rm c}$ a semibounded self-adjoint central operator, and $\mathcal A\geq1$ a positive self-adjoint estimate operator strongly commuting with $H_{\rm c}$. Write $H(t)=H_{\rm c}+B(t)$ on a specified common first domain or as the corresponding common closed form. Assume the following on $[0,T]$.



1. The physical Hermitian forms $h_t$ have a common domain $\mathcal V\subset\mathcal H\subset\mathcal V^*$, uniform finite-horizon coercivity after a scalar shift, and an absolutely continuous $\mathcal V\to\mathcal V^*$ dependence with integrable derivative.

2. A form-dense joint test core for $H_{\rm c}$ and the tangent graphs respects the physical boundary condition. On this core the closed extensions of <a id="p3d:eq:comm"></a>
<a id="p3d:eq:timeder"></a>


$$
\begin{aligned}\|[\mathcal A^m,H(t)]u\|&\leq C_m(t)\|\mathcal A^m u\|,
                 &&m=1,2,3,\\
 \|\mathcal A^2\dot H(t)u\|&\leq D(t)\|\mathcal A^3u\|
                 
\end{aligned}
$$

Equation (6.1, 6.2).

 hold, with $C_m,D\in L^1(0,T)$. Moreover $B(t)\mathcal A^{-1}$ and $\mathcal A^2 B(t)\mathcal A^{-3}$ are bounded uniformly on the finite interval.

3. For $P_N=1_{[1,N]}(\mathcal A)$, restriction of the physical form to $P_N\mathcal H$ is $H_N=H_{\rm c}|_{P_N\mathcal H}+P_NB(t)P_N$. The second term is a bounded absolutely continuous perturbation on that range. For joint-core test vectors, $H_NP_N\chi\to H\chi$ in $\mathcal H$ and $P_N\chi\to\chi$ in $\mathcal V$, locally uniformly in time.

 The core and convergence assertions will be checked for the concrete parents; an interior-compact form core is not automatically an operator graph core at a boundary.



**Theorem 6.1 (One physical graph and finite tangent propagation).**

 <a id="p3d:thm:graph"></a> If <a id="p3d:eq:entrance"></a>


$$

 f\in D(\mathcal A^3)\cap D(H(0)),\qquad
 H(0)f\in D(\mathcal A^2),

$$

Equation (6.3).

 then the common-form evolution with entrance $f$ satisfies <a id="p3d:eq:graphs"></a>


$$

 \psi\in L^\infty(0,T;D(\mathcal A^3)),\qquad
 H(t)\psi\in L^\infty(0,T;D(\mathcal A^2)),\qquad
 \partial_t\psi=-iH(t)\psi.

$$

Equation (6.4).

 The first-graph equation is used in its mild sense; no $f\in D(H(0)^2)$ assumption is made. In addition, <a id="p3d:eq:closedcentral"></a>


$$

 \mathcal A^2\psi\in D(H_{\rm c}),\qquad
 H_{\rm c}\mathcal A^2\psi
 =\mathcal A^2H(t)\psi-\mathcal A^2B(t)\psi

$$

Equation (6.5).

 for almost every time, with finite uniform bounds on a finite horizon. 

 

**Proof.**

On $P_N\mathcal H$, solve the central operator plus bounded time-dependent perturbation with entrance $f_N=P_Nf$. Existence follows, for example, by the interaction-picture integral equation and successive iteration. Difference quotients for the absolutely continuous bounded perturbation give strong evolution on the common central domain. For $g_N=H_N\psi_N$ they give the mild identity <a id="p3d:eq:mildgraph"></a>


$$

 g_N(t)=U_N(t,0)H_N(0)f_N+
              \int_0^tU_N(t,s)\dot H_N(s)\psi_N(s)\,ds.

$$

Equation (6.6).

 One can first verify this identity for stronger central-domain data and smooth time coefficients, and pass by first-domain and $L^1$ forcing approximation. It does not require differentiating $H_Ng_N$ in $\mathcal H$.

The bounded tangent operator on each compressed range permits the ordinary energy calculation. Symmetry of $H_N$ removes its undifferentiated term, and [(6.1)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:comm) gives 

$$

 \|\mathcal A^3\psi_N(t)\|
 \leq e^{\int_0^t C_3}\|\mathcal A^3f_N\|=:X_N(t).

$$

 Obtain the homogeneous $\mathcal A^2$ propagator bound in the same way on strong-domain data and extend by density. Apply it to [(6.6)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:mildgraph), using [(6.2)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:timeder), to obtain <a id="p3d:eq:graphbound"></a>


$$

 \|\mathcal A^2g_N(t)\|
 \leq e^{\int_0^t C_2}
 \left(\|\mathcal A^2H_N(0)f_N\|
 +\int_0^t e^{-\int_0^s C_2}D(s)X_N(s)\,ds\right).

$$

Equation (6.7).

 These constants are independent of $N$. The initial graph converges: the central term commutes with $P_N$, and $\mathcal A^2B\mathcal A^{-3}$ is bounded, so $\mathcal A^2H_N(0)P_Nf\to\mathcal A^2H(0)f$.

Physical coercivity and $h_t(\psi_N,\psi_N)=\langle\psi_N,g_N\rangle$ give a uniform $\mathcal V$ bound. Weak compactness, the uniform $g_N$ bound, and the integrated equation against joint-core tests therefore give a limit solving the true $\mathcal V/\mathcal V^*$ equation. The test-core convergence in the hypotheses identifies its operator with the original physical form, rather than an artificial tangent energy.

Uniqueness of that variational equation precedes any use of norm conservation in taking the limit. Indeed for the difference $u$ of two solutions, the Gelfand-triple norm identity gives 

$$

 \frac{d}{dt}\|u\|^2
 =2\operatorname{Re}\langle-iH(t)u,u\rangle_{\mathcal V^*,\mathcal V}=0.

$$

 This identity follows by Steklov averaging in time for $u\in L^2_t\mathcal V$, $\dot u\in L^2_t\mathcal V^*$; no $H^2$ operator domain is used. Equal entrance data imply $u=0$. The same identity conserves the norm of the identified limit. Consequently weak convergence and $\|\psi_N(t)\|=\|P_Nf\|\to\|f\|=\|\psi(t)\|$ give strong $\mathcal H$ convergence. The uniform derivative bound $\|\dot\psi_N\|=\|g_N\|$ and a finite time grid make it uniform in time.

Testing the weak limit of $g_N$ against the form-dense core identifies it with the form action $H(t)\psi$. Since this action is in $\mathcal H$, the definition of the operator associated with the closed form puts $\psi$ in the genuine first domain. Lower semicontinuity transfers the tangent estimates and proves [(6.4)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:graphs). Finally set $u_N=\mathcal A^2\psi_N$. Strong commutation gives 

$$

 H_{\rm c}u_N=\mathcal A^2g_N-P_N\mathcal A^2B\psi_N.

$$

 Both sides have uniform $\mathcal H$ bounds. A self-adjoint operator has a weakly closed graph: testing a weak limit against every $\chi\in D(H_{\rm c})$ identifies its central image. The bounded map $\mathcal A^2B\mathcal A^{-3}$ identifies the last term and proves [(6.5)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:closedcentral). 

□





<a id="section-6-2"></a>

### 6.2 The product regularity, and what it does not say



Suppose that on a compact radial chart the central operator is genuinely second-order elliptic in one normal coordinate $r$, while $\mathcal A$ is independent of $r$ and elliptic in $m$ tangent coordinates. The other central terms are of tangent order at most two, with bounded coefficients on the enlarged chart. Bounded radial multiplication jumps are allowed. Then [(6.5)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:closedcentral), applied to $\mathcal A^2\psi$, gives <a id="p3d:eq:product"></a>


$$

 \|\psi(t)\|_{H^2_rH^4_{\rm tan}(K)}
 \leq C_K\{\|\mathcal A^2H(t)\psi(t)\|
                         +\|\mathcal A^3\psi(t)\|\}.

$$

Equation (6.8).

 Here and below the notation means a *product* norm with Fourier weight $(1+\xi_r^2)^2(1+|\xi_{\rm tan}|^2)^4$, not the intersection of two separately controlled spaces.

To justify the product, first use local tangent ellipticity to obtain four tangent derivatives from $\mathcal A^2$. The radial equation for $\mathcal A^2\psi$ then has an $L^2$ right side: the additional two tangent derivatives are paid by $\mathcal A^3\psi$, and $\mathcal A^2B\psi$ is already bounded. Radial first derivatives and cutoff commutators are absorbed in the one-dimensional elliptic estimate. Lower tangent powers have the same central graph because $\mathcal A\geq1$ strongly commutes with $H_{\rm c}$; they control the lower-order chart cutoff terms. Radial cutoffs commute with $\mathcal A$. Thus the two radial derivatives act on the tangent-order four quantity. In physical three-dimensional polar measure one can equivalently use $r\psi$ on an annulus, absorbing the $2r^{-1}\partial_r$ term. No radial derivative of a potential jump or of $1/r$ is taken.

Local $L^2$ time continuity and the uniform product bound imply joint spacetime continuity by interpolation whenever <a id="p3d:eq:theta"></a>


$$

 2\theta>\tfrac12,\qquad 4\theta>m/2,\qquad \theta<1.

$$

Equation (6.9).

 Indeed Fourier Hölder gives convergence in $H^{2\theta}_rH^{4\theta}_{\rm tan}$, and the evaluation integral is absolutely convergent under [(6.9)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:theta). These bounds also imply local full $H^2$. The resulting continuous representative and local $H^2$ regularity are distinct outputs; high-dimensional $H^2$ alone was not used to assert continuity.

For example, a scalar step at zero admits the exact local stationary solution at energy $4$ 

$$

 u_L=e^{2ix}+\tfrac13e^{-2ix},\quad V_L=0;\qquad
 u_R=\tfrac43e^{ix},\quad V_R=3.

$$

 The value and first derivative match. The right-minus-left jump of $u''$ is $4$, so the wave is locally $H^2$ but not $H^3$ across the interface. Multiplying by smooth tangent factors retains exactly the structure allowed in [(6.8)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:product).
