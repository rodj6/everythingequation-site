# Appendix C: An alternative characterization from binary-flag heredity

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

<a id="section-C"></a>

## C An alternative characterization from binary-flag heredity

<a id="app:heredity"></a>

This argument is independent of the local-control theorem. It uses a stronger compositional statistical assumption in place of the functional $C^2$ and control-family assumptions.

For each admitted scalar configuration dimension $d$, suppose a projective assignment $\psi\mapsto p_d^\psi$ gives a normalized density, positive and $C^1$ on $\{\psi\ne0\}$, and zero almost everywhere on $\{\psi=0\}$. The state classes contain positive Schwartz reference amplitudes, their smooth compactly supported amplitude and phase modifications, and all flag superpositions used below. Fix two nonzero smooth packets $\chi_0,\chi_1$ in an auxiliary dimension $k$, with disjoint support regions $D_0,D_1$.

For every 

$$

 \Psi(x,y)=\psi(x)\chi_0(y)+\phi(x)\chi_1(y),

$$

 assume both conditional laws use the same standalone assignments: <a id="eq:heredityX"></a>
<a id="eq:heredityY"></a>


$$
\begin{aligned}\Pr_\Psi(X\in dx\mid Y=y)&=p_d^{\Psi(\cdot,y)}(x)\,dx,\\
 \Pr_\Psi(Y\in dy\mid X=x)&=p_k^{\Psi(x,\cdot)}(y)\,dy.
\end{aligned}
$$

Equation (C.1, C.2).

 These are ordinary conditional probabilities for the assigned joint density. Define its unknown flag odds 

$$

 O(z)=\frac{\mu_k^{z\chi_0+\chi_1}(D_0)}
                {\mu_k^{z\chi_0+\chi_1}(D_1)},\qquad z\in{\mathbb C}^*,

$$

 and assume $O$ is continuous. Faithfulness makes it finite and positive. No quadratic distribution for the flag is assumed.



**Theorem C.1 (Binary-flag heredity and current compatibility).**

<a id="thm:heredity"></a> The preceding assumptions imply <a id="eq:powers"></a>


$$

 p_d^\psi(q)=\frac{a_d(q)|\psi(q)|^\alpha}
                   {\int a_d(x)|\psi(x)|^\alpha\,dx}

$$

Equation (C.3).

 on nonzero amplitudes, with a fixed positive $C^1$ weight $a_d$ and a real exponent $\alpha$ common to dimensions using the same auxiliary law. The integrand is taken as zero at nodes. Only choices with finite normalizers on the admitted class qualify.

If these assignments also obey the scalar guidance continuity equation on the admitted Schrödinger histories, including arbitrary compact phase variations of a positive amplitude, with the differentiability used in that equation, then $\alpha=2$, each $a_d$ is constant, and the assignment is Born equilibrium. 





**Proof.**

Let $A,B>0$ be the two flag probabilities in the joint law. Equation [(C.1)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:heredityX) gives the two subdensities $A p_d^\psi$ and $B p_d^\phi$ for $X$. Equation [(C.2)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:heredityY) gives their odds at $x$. Consequently, on the common nonzero region, <a id="eq:odds"></a>


$$

 \frac{p_d^\psi(x)}{p_d^\phi(x)}
       =\frac BA O\!\left(\frac{\psi(x)}{\phi(x)}\right).

$$

Equation (C.4).

 The conditional identities hold initially almost everywhere; positivity and continuity extend [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) throughout that region.

Put $w(z)=O(z)/O(1)$, fix a positive reference $\xi$, and choose smooth nowhere-zero $u,v$ equal to one outside a compact set. Apply [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) to the pairs among $uv\xi,v\xi,\xi$. Multiplication of density ratios, evaluated outside the compact set, fixes their constant factors. Inside, it then gives $w(uv)=w(u)w(v)$. At a chosen point $u,v$ may take any prescribed values in ${\mathbb C}^*$, using exponentials of compactly supported smooth logarithms. Thus $w$ is a continuous positive character of ${\mathbb C}^*$.

Its restriction to the phase circle is trivial: its logarithm would be a continuous homomorphism from a compact group to $({\mathbb R},+)$. On positive real numbers, the continuous additive equation for $\log w(e^t)$ gives $w(z)=|z|^\alpha$. Apply [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) to any admitted $\psi$ and a positive reference $\xi_d$. This yields [(C.3)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powers) with $a_d=p_d^{\xi_d}/|\xi_d|^\alpha$. The reference is independent of $\psi$; normalization fixes the proportionality constant. Faithful support extends the formula by zero on nodes. The same odds function fixes the same exponent for every system using this flag.

For the dynamical step write $r=|\psi|^2$, $\beta=\alpha/2$, and $p=ar^\beta/Z_\psi$. The quantum and assigned continuity equations give <a id="eq:powertransport"></a>


$$

 v\cdot\nabla\log a+(1-\beta){\operatorname{div}} v=\dot Z_\psi/Z_\psi .

$$

Equation (C.5).

 At the initial instant choose $\psi=\sqrt r\,e^{iS}$ with positive amplitude and compact smooth phase $S$. Outside the phase support $v$ and ${\operatorname{div}} v$ vanish, while $p>0$. Hence the spatially constant right side of [(C.5)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powertransport) is zero. If needed its derivative can be defined from the differentiable transported density at such an exterior point.

At an arbitrary point choose $\nabla S=0$ and prescribe the mass-weighted trace of its Hessian. This makes ${\operatorname{div}} v$ arbitrary and gives $\beta=1$. Next prescribe $\nabla S$ arbitrarily. Equation [(C.5)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powertransport) gives $\nabla\log a=0$. Connectedness and normalization complete the proof. 

□



The dynamical step uses one ordinary scalar Hamiltonian on a domain rich in initial phase variations; it does not require control-universal equivariance. Heredity alone permits the weighted powers in [(C.3)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powers) and is insufficient to select the square. Conversely, Born equilibrium obeys the stipulated conditionals by direct integration. The principle says that the conditional wavefunction is statistically sufficient under the two indicated subsystem descriptions. That is an additional premise, stronger than the existence of conditional probabilities. This is a precise version of the heredity proposal in [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 8], related to the equilibrium conditional-wavefunction formula in [[3](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ1992)].
