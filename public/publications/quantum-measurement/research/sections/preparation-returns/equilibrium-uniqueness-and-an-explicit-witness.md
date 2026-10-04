# Section 6: Equilibrium uniqueness and an explicit witness

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-6"></a>

## 6 Equilibrium uniqueness and an explicit witness

<a id="sec:uniqueness"></a>



**Proof of [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main).**

 The engineered construction and [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian) supply the Gaussian part of the library. At holding the wavefunction is $\Phi_a(a)\psi_s(s)$, where $\Phi_a$ is the active ground state. During a nonlinear rectangle the Hamiltonian is the sum of its fixed active Hamiltonian and the plane Hamiltonian [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential). Its exact solution is $e^{-iE_at}\Phi_a(a)\psi_s(s,t)$. Thus its configuration map is 

$$

 (a,s)\longmapsto(a,F_s(s)),

$$

 with $F_s$ the complete nonlinear plane map. This factorization is a property of the controlled quantum history, not a hypothesis on $\mu$.

If $\mu$ is invariant under the library, its plane marginal is invariant under all these maps. By [theorem 3.4](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#thm:plane) it is the Gaussian holding marginal. Whiten with $z=\sqrt2 A_0^{1/2}q$ and denote the transformed law by $\widehat\mu$. The plane is a separate block of this linear transformation, so its marginal is $\gamma_2=N(0,I_2)$. By [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian), $\widehat\mu$ is invariant under $SO(d)$. For its characteristic function and any plane unit vector $e$, 

$$

 \widehat\chi(k)
 =\int e^{ik\cdot z}\,d\widehat\mu(z)
 =\widehat\chi(|k|e)=e^{-|k|^2/2}.

$$

 Rotations are transitive on spheres, including the needed choice of direction when $k\ne0$; the equality at zero is normalization. Uniqueness of characteristic functions of Borel probabilities gives $\widehat\mu=\gamma_d$, hence $\mu=\nu_0$.

Conversely, every constituent map preserves $\nu_0$ by [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac), and so do its inverse and every finite composition. All maps are globally defined: nonlinear stages have bounded smooth velocities, and Gaussian stages have linear velocities with bounded coefficients on their finite time intervals. The conclusion holds for every Borel probability, including singular measures. 

□



Gaussian loops alone would not suffice. Their invariant probabilities are exactly the rotationally invariant laws in whitened coordinates: arbitrary mixtures of uniform sphere measures, including an atom at zero. This follows either by averaging over the compact group $SO(d)$ or by disintegration with respect to radius. A Gaussian with covariance $cI_d$, $c\ne1$, is a particularly simple example. The nonlinear plane theorem removes this freedom before the characteristic-function argument is applied.



<a id="section-6-1"></a>

### 6.1 A finite smooth loop detecting a non-Born radial law



It is useful to exhibit a quantitative memory effect for one of these Gaussian-invariant laws. In the physical plane put $x=s_1$, $y=s_2$, and $r(x,y)=(\sqrt2/\pi)e^{-(2x^2+4y^2)/2}$. Let the full whitened law be $N(0,\tfrac32 I_d)$. Its plane marginal $\mu_c$ has covariance ${\operatorname{diag}}(c/2,c/4)$, with $c=3/2$.

For $R=16$ set <a id="eq:witnessfg"></a>


$$

 f_R=\frac{x^2}{2}e^{-(2x^2+4y^2)/(2R^2)},\qquad
 g_R=\frac{x^2y}{2}e^{-(2x^2+4y^2)/(2R^2)} .

$$

Equation (6.1).

 These Schwartz functions, although not compactly supported, have $-L_rf_R,-L_rg_R\in{C_b^\infty}$ and bounded positive-order derivatives. Consequently the physical rectangle construction and its uniform flow expansion apply to them verbatim. We include this pair, along with the compactly supported pairs, in the return library.

Write $b_R=[\nabla f_R,\nabla g_R]$. For comparison only, the undamped polynomial pair has $b_\infty=(0,x^2)$ and <a id="eq:polynomialprojection"></a>


$$

 \Pi_r b_\infty=(-xy,x^2/2-1/4).

$$

Equation (6.2).

 Indeed subtract the gradient of $x^2y/2+y/4$ and check the weighted divergence. This polynomial is used to estimate the actual damped loop, not as an unbounded physical pulse. Its expected vertical component under $\mu_c$ is $1/8$.

The orthogonal projection is a contraction in $L^2(r)$ and $\|d\mu_c/dr\|_{L^2(r)}^2=1/[c(2-c)]=4/3$. The exact Gaussian moment calculation in section [B](/quantum-measurement/research/preparation-returns/appendix-b-exact-moment-bound-for-the-nonlinear-witness#app:witness) gives 

$$

 E:=\|b_{16}-b_\infty\|_{L^2(r)}^2
   =\frac{16185053971604529263}{15566448011730239812500},
 \qquad \sqrt{\frac{4E}{3}}<\frac1{24}.

$$

 It follows that <a id="eq:witnessbound"></a>


$$

 C_{16}:=\int(\Pi_r b_{16})_y\,d\mu_c
       \geq\frac18-\sqrt{\frac{4E}{3}}>\frac1{12}.

$$

Equation (6.3).

 For the actual finite rectangle, <a id="eq:witness"></a>


$$

 \mathbb E[y_{\mathrm{after}}]-\mathbb E[y_{\mathrm{before}}]
     =\epsilon^2C_{16}+O(\epsilon^3).

$$

Equation (6.4).

 The remainder integrates legitimately because it is uniformly bounded in space. Thus every sufficiently small nonzero amplitude has a nonzero mean shift for this non-Born radial law, while returning the complete wavefunction exactly. This is a concrete witness; the all-Borel theorem, rather than this single statistic, establishes uniqueness.
