# Section 7: A radial-interface parent with two retained flux sources

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-7"></a>

## 7 A radial-interface parent with two retained flux sources

 <a id="p3d:sec:OLD"></a>

Consider $Q\in\mathbb R^3$, relative position $rn$ with $r>r_c>0$, $n\in S^2$, and two canonical flux coordinates $y_b,y_g$. The finite spin fibre retains both electronic and both nuclear spins (a $96$-dimensional fibre is one finite choice), together with passive finite internal references. Let <a id="p3d:eq:OLD"></a>


$$

 H(t)=H_{\rm cen}+T_y+U_b(y_b)+U_g(y_g)+W(t).

$$

Equation (7.1).

 $H_{\rm cen}$ contains the constant-coefficient physical COM/relative kinetics, a true Dirichlet core, and specified bounded central molecular matrix multipliers with finitely many radial value jumps. It is semibounded and invariant under COM translations and simultaneous spatial-and-all-spin rotations. An additional rotational scalar first-order angular term is admissible only on its explicitly specified self-adjoint/form domain, with the local ellipticity and complete-current envelope used below. Its first-order current coefficients must also be locally $W^{1,\infty}$ across the retained interfaces; it is not implicit in a multiplication model with bounded radial steps. In this molecular parent, the dipolar and second-order spin–orbit interaction is a matrix multiplication tensor $v_{\rm ss}(r)T(\widehat R)$, included in $H_{\rm cen}$. Its radial jumps are therefore covered by the multiplication argument. This second-order spin–orbit tensor is not a first-order orbital drift; the latter is a separate optional extension of the model.

The exact source constitutive relation and its energy are <a id="p3d:eq:flux"></a>


$$

 y=LI+aI^3,\quad L>0,\ a\geq0,\qquad
 U(y)=\tfrac12 LI(y)^2+\tfrac34aI(y)^4.

$$

Equation (7.2).

 Fixed affine shifts, scales and finite paired-arm sums are allowed. External controls are finite Hermitian sums <a id="p3d:eq:OLDW"></a>


$$

 W(t)=\sum_\nu I_\nu(y_{s(\nu)})F_\nu(t,Q,rn)+G(t,Q,rn),

$$

Equation (7.3).

 with bounded mixed COM and simultaneous-rotation profile derivatives through total order six; their time derivatives have bounded order-four jets integrable over the finite interval. Spin commutators are part of the rotation derivative. The coupling is scalar/matrix multiplication in the source coordinate; an unbounded source multiplying an uncontrolled highest particle derivative is not included.



**Lemma 7.1 (The source well and finite word bounds).**

<a id="p3d:lem:source"></a> The inverse in [(7.2)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:flux) is smooth and, through every fixed finite order, 

$$

 |I^{(k)}(y)|\leq C_k\langle y\rangle^{1-k},\qquad
 |U^{(k)}(y)|\leq D_k\langle y\rangle^{2-k}.

$$

 For $a>0$, its actual asymptotic growth is $I(y)=O(|y|^{1/3})$ and $U(y)=O(|y|^{4/3})$. The harmonic estimate operator below does not replace this physical well by a quadratic or quartic one. 

 

**Proof.**

The derivative $L+3aI^2$ is everywhere positive. Writing $d=L+3aI^2$, induction gives 

$$

 I^{(k)}(y)=\frac{P_k(I)}{d^{\,2k-1}},\quad
 P_1=1,\quad P_{k+1}=dP_k'-(2k-1)d'P_k,\quad
 \deg P_k\leq k-1.

$$

 For $a>0$ this is $O(|y|^{1/3-k})$; compact intervals are controlled by $d\geq L$. Moreover $U'(y)=I(y)$ by direct differentiation. These sharper bounds imply the displayed loose integer symbol bounds. For $a=0$ the current is affine and the energy quadratic. Fixed affine changes and finite sums preserve the estimates. 

□



Set $p=-i\nabla$ and <a id="p3d:eq:OLDledger"></a>


$$

 \mathcal A=1+p_Q^2+J^2+\sum_{s=b,g}(p_{y_s}^2+y_s^2+1),\qquad
 J=Q\times p_Q+rn\times p_{rn}+S_{\rm all}.

$$

Equation (7.4).

 $S_{\rm all}=S_w+I_w+S_r+I_r$. Omitting a nuclear spin would destroy the commutation of its hyperfine scalar $I_a\cdot S_a$ with total rotations. The components in [(7.4)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:OLDledger) strongly commute. For words $X_1\cdots X_\ell$ in $p_Q,J,p_y,y$, <a id="p3d:eq:words"></a>


$$

 \|X_1\cdots X_\ell u\|\leq C_\ell\|\mathcal A^{\ell/2}u\|.

$$

Equation (7.5).

 To prove this, reorder COM momenta past rotations using $[J_i,p_{Q_j}]=i\epsilon_{ijk}p_{Q_k}$; only lower-degree words are created. Momentum words are controlled by $p_Q^2$, rotation words on each irreducible angular representation by powers of $J^2$, and source words by oscillator raising/lowering operators. The commuting positive components then control their products by the corresponding power of $\mathcal A$. Polynomially growing source coefficients are placed to the left and bounded by adding source-position letters, not commuted through without a charge.

The central physical form is invariant under these groups and source operations; functional calculus therefore gives strong commutation of $H_{\rm cen}$ with $\mathcal A$. For the noncentral part use 

$$

 [p_y^2,c]=-c''-2c'\partial_y,\qquad
 [y^2,\partial_y^k]=-2ky\partial_y^{k-1}
                              -k(k-1)\partial_y^{k-2}.

$$

 A repeated source commutator of the well has word degree at most $\max(2,\ell)$, and one of the current has degree at most $\max(1,\ell)$. A tangent commutator raises word degree by at most one and uses at most two more profile derivatives. Consequently $\operatorname{ad}_{\mathcal A}^{\ell}H$ has degree at most $2\ell$ for $\ell=1,2,3$. The ordered identity 

$$

 [\mathcal A^m,H]=
 \sum_{\ell=1}^m \binom{m}{\ell}
       (\operatorname{ad}_{\mathcal A}^{\ell}H)\mathcal A^{m-\ell}

$$

 proves [(6.1)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:comm). Applying the same word count to $\mathcal A^2\dot H$ proves [(6.2)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:timeder) with six total tangent/source orders available and four differentiated profile jets. The estimates for $B\mathcal A^{-1}$ and $\mathcal A^2B\mathcal A^{-3}$ follow from the same count.

The physical common form is Dirichlet $H^1$ with the actual source-well weight. The linear-current couplings are infinitesimally form bounded: $U(y)\geq LI(y)^2/2$ bounds each $I(y)$ by the positive well using Young's inequality. Complete squares for every retained shifted arm and add a finite scalar shift to obtain coercivity. Bounded radial matrix steps do not change the form domain. Source/spatial cutoffs and mollification give a form-dense joint core. Smooth vectors up to the Dirichlet boundary with zero value and arbitrary normal derivative are needed for its first graph; closing interior compact functions in an $H^2$ graph would impose an extra zero normal trace. On smooth joint-core vectors the spectral projections of $\mathcal A$ converge in all needed tangent graphs and in the central first graph. The displayed word estimates then give the test convergence required in Theorem [6.1](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:thm:graph). Compressed physical energies, not the artificial oscillator norm, provide its uniform form bound.



**Corollary 7.2 (Continuous full wave across radial value jumps).**

 <a id="p3d:cor:OLD"></a> For [(7.1)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:OLD)–[(7.3)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:OLDW) with the specified core, forms, profiles and full spins, an entrance satisfying [(6.3)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:entrance) has the graph propagation [(6.4)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:graphs) and the product bound $H^2_{\rm rad}H^4_{\rm tan}$ on compact charts, including radial value interfaces and up to the smooth Dirichlet core. The full wave is jointly continuous in spacetime and locally full $H^2$ in the interior. No second physical Hamiltonian power is required. 

 

**Proof.**

The preceding word and form arguments verify Theorem [6.1](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:thm:graph). There are seven tangent coordinates: COM three, relative angles two and source positions two. On a compact chart the tangent principal symbol is 

$$

 |\xi_Q|^2+|Q\times\xi_Q+\ell_n(\xi_n)|^2+|\xi_y|^2.

$$

 Since $|\ell_n|^2\leq2|Q\times\xi_Q+\ell_n|^2+2|Q|^2|\xi_Q|^2$, it dominates the ordinary tangent symbol with a finite constant, for instance $[2(1+Q_{\max}^2)]^{-1}$. Finite spin matrices are lower order. The closed central graph therefore gives [(6.8)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:product). At a bounded radial jump its weak second-order equation has an $L^2$ right side; the wave and first conormal derivative match and only the second derivative may jump. At the Dirichlet core the boundary elliptic estimate uses the true zero value trace. Finally $m=7$ in [(6.9)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:theta) permits every $7/8<\theta<1$, proving joint continuity. 

□





<a id="section-7-1"></a>

### 7.1 Finite source profiles really provide the required jets

 <a id="p3d:sec:profiles"></a>



**Proposition 7.3 (Finite-volume Biot–Savart profile bounds).**

 <a id="p3d:prop:profiles"></a> Let a prescribed current density $J\in C_c^6(\mathbb R^3;\mathbb R^3)$ have support in $|z|\leq R_s$ and define 

$$

 B(x)=\frac{\mu_0}{4\pi}\int J(z)\times
                     \frac{x-z}{|x-z|^3}\,dz .

$$

 All mixed translation/rotation words of total order at most six applied to $B$ are globally bounded. For $|\alpha|=k\leq6$ and any split length $a>0$, <a id="p3d:eq:Biotinside"></a>


$$

 \|\partial^\alpha B\|_\infty\leq
 \frac{\mu_0}{4\pi}
 \{4\pi a\|\partial^\alpha J\|_\infty
                         +a^{-2}\|\partial^\alpha J\|_1\}.

$$

Equation (7.6).

 For $|x|\geq2R_s$ and $0\leq j\leq k$, <a id="p3d:eq:Biotoutside"></a>


$$

 |x|^j|\partial^\alpha B(x)|
 \leq\frac{\mu_0}{4\pi}\sqrt3\,4^kk!\,2^{2+k}
                  |x|^{j-2-k}\|J\|_1 .

$$

Equation (7.7).

 

 

**Proof.**

Distributional integration by parts moves the derivatives to $J$, leaving the locally integrable kernel of magnitude $|x-z|^{-2}$. The zero-extended $C_c^6$ profile supplies no boundary term. Integrating that kernel over a ball of radius $a$ gives $4\pi a$, while outside the ball it is at most $a^{-2}$, proving [(7.6)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:Biotinside). Thus no nonintegrable derivative of the kernel is used inside a source.

Outside the support one may differentiate the kernel itself. After $k$ derivatives a component is a sum of $c_\beta x^\beta|x|^{-q}$ with $|\beta|-q=-2-k$. Its degree is at most $k+1$, so one more derivative multiplies the absolute coefficient sum by at most $3k+4\leq4(k+1)$. Induction gives $|\partial^\alpha(x/|x|^3)|\leq\sqrt3\,4^kk!|x|^{-2-k}$. Using $|x-z|\geq|x|/2$ proves [(7.7)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:Biotoutside). A rotation word is a finite sum of $c_{\alpha\beta}x^\beta\partial^\alpha$ with $|\beta|\leq|\alpha|$ and derivative order bounded by the word length. Combine the exterior estimate with the interior estimate multiplied by $(2R_s)^j$. This bounds every stated word. 

□



For particle positions $x_a=Q+c_a rn$, simultaneous rotation of $Q,rn$ acts on a profile as $x_a\times\nabla_{x_a}$, with the finite spin commutator added. Relative-only rotation would produce $c_a rn\times\nabla B(x_a)$; keeping $x_a$ near a coil while sending $Q$ to infinity shows why that coefficient need not be bounded. The proposition therefore supplies the actual jets in Corollary [7.2](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:cor:OLD) for finite smooth shell currents, including their returns. For example, on a shell of positive inner radius, the normalized radial bump $c\,u^{31}(1-u)^{31}$, $0<u<1$, extended by zero at both ends and affinely rescaled to the shell, has more than the six vanishing boundary derivatives required here. Smooth bounded angular factors preserve this regularity. Multiplication by finite $C^1$ time envelopes gives the required four spatial derivatives of the time derivative; a translated profile also needs one additional spatial derivative times its integrable centre velocity. An ideal filament or untapered source boundary has not met these hypotheses.



<a id="section-7-2"></a>

### 7.2 Full continuity, the true core, and radial regularization





**Corollary 7.4 (Reference-compatible flow for the radial-interface parent).**

 <a id="p3d:cor:OLDflow"></a> Use the complete canonical current of [(7.1)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:OLD), with every source coordinate retained. A separately specified spin-curl or symmetric first-order contribution is allowed if it supplies its full continuity equation and the following coefficient regularity across the interfaces. First-order drift matrices are locally $W^{1,\infty}$. For a magnetization current $\nabla\times(\psi^\dagger M\psi)$, the Hermitian coefficient matrices $M$ are locally $W^{2,\infty}$; constant Pauli coefficients are included. These local bounds are uniform on compact spacetime charts, or have the time integrability required for the positive-tube Sobolev estimate. In addition the complete current must satisfy, with bounded constants, <a id="p3d:eq:envelope"></a>


$$

 |j|\leq c_0|\psi|^2+c_1|\psi|\,|\nabla\psi|.

$$

Equation (7.8).

 Then the wave in Corollary [7.2](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:cor:OLD) supplies the continuity, local Sobolev, action and logarithmic hypotheses of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic). The reference paths avoid the Dirichlet core at every time. Consequently the complete flow is deterministic and unique in the reference-compatible class, and one original entrance law $\mu_0\ll|\psi(0)|^2dq$ is transported by reweighting that reference law once. 

 

**Proof.**

The full distributional continuity equation follows from the physical form, not from a local $H^2$ assertion. For a real compactly supported test multiplier $\varphi$, $\varphi\psi$ lies in the same Dirichlet form domain. Test $i\dot\psi=H(t)\psi$ against it and its conjugate. All Hermitian multiplication terms cancel; each constant-mass kinetic form gives its complete canonical current paired with $\nabla\varphi$. The identity remains valid for tests crossing the core after zero extension, because multiplication preserves the zero trace. There is no boundary source. A specified symmetric first-order term contributes its literal current; a complete spin-magnetization curl is divergence free distributionally, including after the same zero extension.

The physical kinetic floor and [(6.4)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:graphs) give bounded full $\|\nabla\psi\|$ and $\|\dot\psi\|$ on the finite horizon. Equation [(7.8)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:envelope) and $|\nabla\rho|\leq2|\psi||\nabla\psi|$ imply finite current length, action and spatial logarithmic cost: 

$$

 \int\frac{|j|^2}{\rho}
 \leq2c_0^2\|\psi\|^2+2c_1^2\|\nabla\psi\|^2,\qquad
 \int\frac{|j\cdot\nabla\rho|}{\rho}
 \leq2c_0\|\psi\|\|\nabla\psi\|+2c_1\|\nabla\psi\|^2.

$$

 Also $\|\partial_t\rho\|_1\leq2\|\psi\|\|\dot\psi\|$. These are complete configuration-space estimates before integrating out a source. On compact positive-density tubes, joint continuity and local full $H^2$ give the local $W^{1,p}$ velocity estimate of Proposition [3.4](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:prop:canonical); in dimension eight one may take $p=4/3>1$.

For distance $d=r-r_c$ in a core collar, the Dirichlet Hardy inequality gives 

$$

 \|\psi/d\|_{\rm collar}
 \leq C(\|\nabla\psi\|+\|\psi\|).

$$

 It follows by applying the one-dimensional zero-trace Hardy inequality on each normal line; the smooth collar Jacobian and a cutoff contribute only the displayed lower-order term. Therefore <a id="p3d:eq:corecost"></a>


$$

 \int_0^T\!\int_{\rm collar}\frac{|j\cdot\nabla d|}{d}
 \leq\int_0^T
 \left[c_0\|\psi/d\|\|\psi\|
       +c_1\|\psi/d\|\|\nabla\psi\|\right]dt<\infty.

$$

Equation (7.9).

 Away from the collar the corresponding bounded-weight term follows from current length. The reference superposition has its marginals in the closed exterior, so continuity and countably many rational times exclude entry into the open core. Proposition [2.3](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:prop:guards), using the truncated logarithmic distance and [(7.9)](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:eq:corecost), also excludes touching the boundary at any time. The node argument is separately provided by the continuous-wave chain rule in Lemma [3.2](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:lem:chain). All hypotheses of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic) are now supplied. Absolute continuity of $\mu_0$ transfers its reference-null path exceptions; a finite cap is additionally needed for corresponding uniform quantitative charges. 

□



The extra coefficient condition matters for a first-order current. A radial step multiplying a tangential drift can retain a bounded current and a conservative continuity equation while its normal weak derivative contains a surface measure. Such a velocity need not be in $W^{1,p}$ across the interface. The bounded multiplication jumps in Corollary [7.4](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:cor:OLDflow) do not create this problem for the canonical kinetic current. A discontinuous first-order drift would need a separate interface-flow argument. The extra derivative required for a variable magnetization coefficient is also essential to this proof: $\nabla j$ contains $(D^2M)\psi^\dagger\psi$ as well as the wave product terms. For example, take $M_z(x)=|x_1|$ near the origin, smoothly cut off at large distances, with the other components zero. A smooth wave positive near $x_1=0$ gives $j_2=-\partial_1(|x_1|\rho)$, which jumps at that plane. This divergence-free curl has bounded coefficients and the displayed current envelope, but its derivative has a surface measure. Local $W^{1,\infty}$ regularity of $M$ alone therefore does not supply the positive-tube $W^{1,p}$ estimate. The stated $W^{2,\infty}$ condition does, without affecting the constant-coefficient Pauli case. Thus the radial multiplication-tensor application is covered, whereas the optional first-order extension is conditional on the stated coefficient regularity. A self-adjoint/form realization alone does not discharge that extra flow obligation.



**Proposition 7.5 (Bounded radial-jump smoothing in the same evaluating form).**

 <a id="p3d:prop:smoothing"></a> In the preceding parent, replace only its bounded central radial molecular multiplier $M$ by smooth Hermitian central multipliers $M_\epsilon$, uniformly bounded and strongly convergent to $M$ on $\mathcal H$. Retain the same physical core, source wells, full time-dependent $W(t)$, current convention and exact entrance $f$. Assume the source/profile bounds above uniformly, and that $M_\epsilon$ preserves the central simultaneous-rotation symmetry. Then the resulting waves converge uniformly in time in the original physical form norm. Their complete canonical densities and currents converge in the strong norms required by Theorem [4.1](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:thm:approximation), with uniform action. This is one specified regularization, not a statement about arbitrary Hamiltonian or current replacements. 

 

**Proof.**

Let $\Delta M_\epsilon=M_\epsilon-M$. Bounded perturbation Duhamel gives 

$$

 \sup_{t\leq T}\|\psi_\epsilon(t)-\psi(t)\|
 \leq\int_0^T\|\Delta M_\epsilon\psi(s)\|\,ds\longrightarrow0.

$$

 Strong bounded convergence is uniform on the compact true $L^2$ orbit. The tangent commutators of $M_\epsilon$ vanish by central symmetry; no radial derivative of $M_\epsilon$ occurs. The proof of Theorem [6.1](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:thm:graph) consequently gives uniform $\mathcal A^3\psi_\epsilon$ and first-graph bounds. The initial graph condition is uniform because $M_\epsilon$ is bounded and commutes with $\mathcal A$. Spectral interpolation now implies 

$$

 \sup_{t\leq T}
 \|\mathcal A^s(\psi_\epsilon(t)-\psi(t))\|\to0
 \qquad(0\leq s<3).

$$

 In particular the source-position weights needed for $I(y)F_t$ converge strongly. This step is important: the retained source coupling need not be a bounded operator.

Choose a common coercive shift $b$ and use the true work identities 

$$

 h_{\epsilon,t}(\psi_\epsilon,\psi_\epsilon)+b\|f\|^2
 =h_{\epsilon,0}(f,f)+b\|f\|^2+
   \int_0^t\dot h_s(\psi_\epsilon(s),\psi_\epsilon(s))\,ds .

$$

 Here $\dot h_s$ is the same physical derivative for every $\epsilon$, because only the static bounded multiplier was replaced. The identity follows from form/first-domain time approximation, or first for the compressed common-domain solutions and then by their uniform graph bounds. The derivative is a finite source-word multiplier of degree at most one with integrable coefficients. The strong weighted convergence just proved and dominated convergence therefore pass its expectation and the integral, uniformly in $t$. Initial energies converge. Subtracting $\langle\psi_\epsilon,\Delta M_\epsilon\psi_\epsilon\rangle$ then proves convergence of energies evaluated in the *original* $h_t+b$, uniformly in time.

Uniform coercivity supplies weak compactness in the fixed common form space. At each time the weak form limit is the already identified $L^2$ limit. Convergence of its original form norm gives strong form convergence. It is uniform in time: otherwise choose $\epsilon_k\to0$, $t_k\to t_*$ violating it. Absolute continuity of the common forms gives norm-continuity of $h_t:\mathcal V\to\mathcal V^*$, and the same work identity and weak-plus-norm argument give a form-continuous true orbit. Apply the argument at $t_*$ to that subsequence to obtain a contradiction. Complete current convergence follows from the bilinear common-kinetic-form inequality in Lemma [4.2](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:lem:formcurrent); the physical kinetic floor gives uniform action. Each smoothed parent meets the same domain and continuity theorem, so its reference-compatible flow is supplied by Corollary [7.4](/quantum-measurement/research/reference-weighted-flows/a-radial-interface-parent-with-two-retained-flux-sources#p3d:cor:OLDflow). No high radial-graph preservation or classical flow of an arbitrary numerical projection has been assumed. 

□
