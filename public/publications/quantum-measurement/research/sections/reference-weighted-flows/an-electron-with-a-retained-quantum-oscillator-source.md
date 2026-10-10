# Section 9: An electron with a retained quantum oscillator source

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-9"></a>

## 9 An electron with a retained quantum oscillator source

 <a id="p3d:sec:HQA"></a>

In reduced-mass atomic units let <a id="p3d:eq:HQA"></a>


$$

 h=-\tfrac12\Delta_r-|r|^{-1},\qquad
 H_s=\Omega(N_Y+\tfrac12)=\tfrac\Omega2(-\partial_Y^2+Y^2),\qquad
 H(t)=h+H_s+g(t)Yd_R(r),\quad \Omega>0.

$$

Equation (9.1).

 Here $d_R(r)=z\chi_R(|r|)$ is real, compactly supported $C^6$, equal to $z$ on a prescribed inner ball, with its complete smooth collar retained. The real $g$ is bounded and absolutely continuous on the finite horizon, with $g'\in L^1$. The source amplitude is the configuration coordinate $Y$, not its expectation. Use the complete currents <a id="p3d:eq:HQAcurrents"></a>


$$

 j_r=\operatorname{Im}\psi^\dagger\nabla_r\psi,\qquad
 j_Y=\Omega\operatorname{Im}\psi^\dagger\partial_Y\psi.

$$

Equation (9.2).

 The entrance is $f(r,Y)=\pi^{-1/2}e^{-|r|}\psi_1(Y)\otimes\zeta$, where $\psi_1$ is the normalized first excited oscillator wave and $\zeta$ is any normalized vector in the passive finite internal reference. Both the Coulomb cusp and the source node at $Y=0$ remain.



**Theorem 9.1 (Full Coulomb–source flow).**

<a id="p3d:thm:HQA"></a> The parent [(9.1)](/quantum-measurement/research/reference-weighted-flows/an-electron-with-a-retained-quantum-oscillator-source#p3d:eq:HQA) with this entrance has a common physical form and first domain, finite-horizon graph bounds, and a jointly continuous evolved full wave on $r\neq0$. Its complete current [(9.2)](/quantum-measurement/research/reference-weighted-flows/an-electron-with-a-retained-quantum-oscillator-source#p3d:eq:HQAcurrents) supplies the hypotheses of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic), with all-times collision and node avoidance for the reference law. It therefore defines a unique deterministic reference-compatible electron/source flow and transports one arbitrary entrance law $\mu_0\ll|f|^2\,dr\,dY$ by once-only reweighting. No source occupation or source position is drawn from a postulated equilibrium distribution. 

 

**Proof.**

For a smooth test in the electron coordinate, 

$$

 0\leq\tfrac14\|\nabla u+2\widehat r\,u\|^2
 =\tfrac14\|\nabla u\|^2+\|u\|^2-\int |u|^2/|r|.

$$

 The integration by parts uses $\operatorname{div}\widehat r=2/|r|$ and extends by Hardy to $H^1$. Thus $h+1\geq p_r^2/4$. Young's inequality gives $gYd_R\geq-\Omega Y^2/4-g^2\|d_R\|_\infty^2/\Omega$, and $H_s-\Omega Y^2/4\geq H_s/2$. In particular <a id="p3d:eq:HQAcoercivity"></a>


$$

 H(t)+2+\frac{g(t)^2\|d_R\|_\infty^2}{\Omega}
 \geq1+\tfrac14p_r^2+\tfrac12H_s .

$$

Equation (9.3).

 The true common form domain is $\mathcal V=H^1(\mathbb R^3_r\times\mathbb R_Y)
\cap\{Yu\in L^2\}$. Coulomb is infinitesimally Laplacian bounded by Hardy and interpolation. The independent source oscillator satisfies $\|Yu\|\leq\sqrt{2/\Omega}\|H_s^{1/2}u\|$; hence the bounded-profile coupling is infinitesimally operator bounded against $H_{\rm c}=h+H_s$. After a shift the two central operators are positive and strongly commute, so $D(H_{\rm c})=D(h)\cap D(H_s)$. This is the common first domain of every $H(t)$.

Use the tangent/source estimate operator $\mathcal A=1+J_e^2+N_Y$, $J_e=r\times(-i\nabla_r)$. It strongly commutes with $H_{\rm c}$. Angular commutation with multiplication by $d_R$ produces a bounded angular derivative and at most one angular generator; source commutation gives $[N_Y,Y]=-\partial_Y$ and $[N_Y,\partial_Y]=-Y$. Thus each $\operatorname{ad}_{\mathcal A}^{\ell}(Yd_R)$, $\ell\leq3$, has tangent/source degree at most $\ell+1\leq2\ell$ and uses at most six profile jets. Angular representation and oscillator ladder bounds give [(6.1)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:comm), while four differentiated jets and integrable $g'$ give [(6.2)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:timeder). The source $Y$ is unbounded but its degree has been paid explicitly.

The entrance lies in every $\mathcal A$ graph and in the true first $H$ domain. Its central part is an eigenvector, and $Yd_R f$ has only electron angular degree one and source occupations zero and two. These have square-integrable radial factors, so $H(0)f\in D(\mathcal A^2)$. The test core crosses $r=0$ in the operator domain; a collision-deleted core is used only for form density. The spectral projections of $\mathcal A$ commute with the shifted central form and converge on its joint core. All hypotheses of Theorem [6.1](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:thm:graph) are thereby verified. In particular the weakly closed identity is 

$$

 (h+H_s)\mathcal A^2\psi
       =\mathcal A^2[H(t)\psi-g(t)Yd_R\psi]\in L^2 .

$$

 On compact electron annuli and bounded source charts, subtract the angular/source terms, controlled by $\mathcal A^3\psi$, to obtain the genuine radial second-order equation for $\mathcal A^2\psi$. There are three tangent coordinates, the two electron angles and $Y$. Equations [(6.8)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:product)–[(6.9)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:theta) with $\theta>3/8$ give joint spacetime continuity and local full $H^2$ away from the collision. The argument has not required a high power of the full Coulomb Hamiltonian.

Testing the physical form against real multipliers yields the full Cartesian conservation law $\partial_t\rho+\operatorname{div}_rj_r+\partial_Yj_Y=0$ on all four coordinates, with no deleted-collision boundary source. The coercive floor and first graph give finite current length/action and logarithmic costs by Proposition [3.4](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:prop:canonical). Hardy in the electron coordinate gives 

$$

 \int_0^T\!\int\frac{|j_r\cdot\widehat r|}{|r|}
 \leq\int_0^T\|\psi/|r|\|\|\nabla_r\psi\|\,dt
 \leq2\int_0^T\|\nabla_r\psi\|^2dt<\infty.

$$

 The smooth logarithmic collision test used in [(8.3)](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:eq:Coulombguard) excludes every-time collision encounters for the reference paths. The initial source node is a different issue; Lemma [3.2](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:lem:chain) applies to the proved continuous full wave and finite log/action costs, without deleting that node. The deterministic theorem now gives the conclusion. Since the entrance density is positive almost everywhere except the measure-zero source nodal plane, any original joint Lebesgue-AC law is also AC relative to it. Singular entrance mass on that plane is outside this assertion. 

□





**Proposition 9.2 (Reciprocal current at the true source entrance).**

 <a id="p3d:prop:backreaction"></a> If $g$ is constant near the entrance, the complete first-time currents for the entrance above, whose spatial factor is real, satisfy in $L^1$, <a id="p3d:eq:backreaction"></a>


$$

 \left.\partial_tj_r\right|_0=-gY\rho_0\nabla_rd_R,\qquad
 \left.\partial_tj_Y\right|_0=-\Omega g\,d_R\rho_0.

$$

Equation (9.4).

 The spatially integrated first source current is zero, although for nonzero $g$ and a nonzero dipole profile the full conditional source-current derivative is not. 

 

**Proof.**

$Hf=(E_0+gYd_R)f$, where $f$ is a real spatial factor times a fixed internal vector. Both $f$ and $Hf$ belong to the physical form domain: the cusp is $H^1$, the profile is smooth, and all oscillator polynomial factors have finite first form. Spectral calculus for the constant parent therefore gives differentiability at zero in the form norm with $\dot\psi(0)=-iHf$. Differentiating the current bilinear, whose form-to-$L^1$ continuity follows by Cauchy, cancels the two terms containing $(E_0+gYd_R)f\nabla f$. The remaining term is $-\rho_0\nabla(gYd_R)$, with the appropriate kinetic coefficient, which gives [(9.4)](/quantum-measurement/research/reference-weighted-flows/an-electron-with-a-retained-quantum-oscillator-source#p3d:eq:backreaction). The profile $d_R$ is odd under $z\mapsto-z$ and the entrance electron density is even, so its electron integral vanishes. At a generic configuration $d_R\rho_0\neq0$. Replacing $Y$ by its mean would erase this complete-coordinate response. The result is a first derivative for constant entrance coupling, not an asserted $O(t^2)$ remainder for an arbitrary merely AC control. 

□
