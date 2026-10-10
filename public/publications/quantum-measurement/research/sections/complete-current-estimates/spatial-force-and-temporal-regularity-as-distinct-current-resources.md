# Section 8: Spatial force and temporal regularity as distinct current resources

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-8"></a>

## 8 Spatial force and temporal regularity as distinct current resources

 <a id="p4s:sec:forms"></a>

The form-dual estimates above and the following estimates solve different input problems. A residual with a spatial form norm can be propagated using actual forces without paying an irrelevant constant carrier energy. A residual with only a Hilbert norm can instead use temporal regularity and a common strong domain. Neither hypothesis implies the other for singular interactions.



<a id="section-8-1"></a>

### 8.1 A force estimate with covariant drift





**Theorem 8.1 (Forced positive form with complete first-order work).**

 <a id="p4s:thm:force"></a> Use [(2.1)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:parent) and $K=-\sum_i\lambda_iD_i^2+U\geq I$, with scalar $U\geq1$. Assume a common form domain, the true unitary propagator, and a form-stable approximation justifying the commutators below. Suppose $K'\leq a_KK$ as forms and, for form vectors $v$, 

$$
\begin{aligned}\left(\sum_i\|\sqrt{\lambda_i}(\nabla_iV)v\|^2\right)^{1/2}
       &\leq g_0\|v\|+g_1\|K^{1/2}v\|,\\
 \|B\|&\leq L,\qquad
 B_{ji}=\sqrt{\lambda_j/\lambda_i}\,\nabla_j a_i,\\
 \left(\sum_j\|\sqrt{\lambda_j}A_jv\|^2\right)^{1/2}
       &\leq G_0\|v\|+G_1\|K^{1/2}v\|,\\
 \left\|U^{-1/2}\sum_i a_i(\partial_iU)v\right\|
       &\leq u_0\|v\|+u_1\|K^{1/2}v\|,
\end{aligned}
$$

 where $B$ acts on the coordinate direct sum, and 

$$

 [D_j,D_i]=-i\Omega_{ji},\qquad
 A_j=\sum_i\left(-ia_i\Omega_{ji}
                          +\tfrac12\nabla_j\nabla_i a_i\right).

$$

 All scalar coefficients are nonnegative and integrable. If $iE'=HE+r$, $E(0)$ is in the form domain and $r\in L^1([0,T];\operatorname{Dom}K^{1/2})$, then <a id="p4s:eq:force"></a>


$$
\begin{aligned}e(t)&\leq e_0+\int_0^t\|r(s)\|\,ds=:E_*(t),\\
 Q(t)&\leq e^{B_*(t)}
  \left[Q_0+\int_0^t e^{-B_*(s)}
       \left(\beta(s)E_*(s)+\|K(s)^{1/2}r(s)\|\right)ds\right],
       \\
 B_*(t)&=\int_0^t\alpha(s)\,ds,\quad
 \alpha=\tfrac12a_K+g_1+L+G_1+\tfrac12u_1,\quad
 \beta=g_0+G_0+\tfrac12u_0 .
\end{aligned}
$$

Equation (8.1).

 Here $e=\|E\|$ and $Q=\|K^{1/2}E\|$. 

 

**Proof.**

On a common smooth core, the product rule gives 

$$

 i\langle v,[V,K]v\rangle
  =2\operatorname{Im}\sum_j
       \langle\sqrt{\lambda_j}D_jv,
                     \sqrt{\lambda_j}(\nabla_jV)v\rangle .

$$

 Let $F=-i\sum_i(a_iD_i+\nabla_i a_i/2)$. In its written matrix order, 

$$

 [D_j,F]=-i\sum_i
  \left((\nabla_ja_i)D_i+a_i[D_j,D_i]
                              +\tfrac12\nabla_j\nabla_i a_i\right).

$$

 In the derivative of the kinetic form, the self-adjoint $F$ acting on $D_jE$ cancels, leaving 

$$

 -2\operatorname{Re}\sum_{ji}\lambda_j
       \langle D_jE,(\nabla_ja_i)D_iE\rangle
 -2\operatorname{Re}\sum_j\lambda_j\langle D_jE,A_jE\rangle .

$$

 Their absolute values are at most $2LQ^2$ and $2Q(G_0e+G_1Q)$. Also $i[F,U]=\sum_i a_i\partial_iU$, whose quadratic form is bounded by $Q(u_0e+u_1Q)$. Thus, retaining the forcing, 

$$

 (Q^2)'\leq2\alpha Q^2+2\beta eQ
                         +2Q\|K^{1/2}r\|.

$$

 Regularize $Q$ at zero and use Duhamel's norm bound for $e$. The integrating factor proves [(8.1)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:force).

For form data, set $R_\epsilon=(I+\epsilon K)^{-1}$ and $K_\epsilon=K(I+\epsilon K)^{-1}$. The ordered identities 

$$

 K_\epsilon'=R_\epsilon K'R_\epsilon,\qquad
 [V+F,K_\epsilon]=R_\epsilon[V+F,K]R_\epsilon

$$

 give the same inequality with $Q_\epsilon=\|K_\epsilon^{1/2}E\|$. Indeed $\|R_\epsilon E\|\leq e$, $\|K^{1/2}R_\epsilon E\|\leq Q_\epsilon$, and the forcing is bounded by $Q_\epsilon\|K^{1/2}r\|$. Integrate before taking the monotone spectral limit $\epsilon\downarrow0$. The assumed conforming approximation supplies the propagator and commutator passage for unbounded coefficients. Resolvent algebra alone does not prove those domain premises. 

□



When $a_i=0$, this reduces to the spatial-force estimate with $\alpha=a_K/2+g_1$ and $\beta=g_0$. A covariantly constant carrier $M(t)$ has $\nabla_iM=0$ and contributes no spatial force. Its phase is still in the true evolution. A laboratory-constant matrix can instead have $[C_i,M]\ne0$ and must then be priced. For a scalar dilation $a=cx$ in one flat coordinate, the kinetic contribution is $-2c\|\partial_xE\|^2$, confirming the commutator sign. Spatially varying mobility or a discontinuous coefficient needs additional terms or a different theorem.



<a id="section-8-2"></a>

### 8.2 A positive invariant when a quadratic trap is inverted





**Proposition 8.2 (Transported quadratic form and physical coflow).**

 <a id="p4s:prop:invariant"></a> Let $H_0(t)$ be a real scalar Weyl-ordered quadratic rate Hamiltonian in $z=(q,p)$, $p=-i\partial_q$, including its affine terms. Let $S(t)$ be its classical symplectic propagator and $m(t)$ its affine classical solution. For any positive matrix $W_0$, set 

$$

 W(t)=S(t)W_0S(t)^T,\qquad
 K(t)=1+\tfrac14(z-m)^TW(t)^{-1}(z-m).

$$

 Then $K\geq1$ and, as forms on the transported Schwartz core, <a id="p4s:eq:invariant"></a>


$$

 K_t+i[H_0,K]=0 .

$$

Equation (8.2).

 For a pure Gaussian with phase gradient $m_p+R(q-m_q)$, $R=R^T$, and positive imaginary phase matrix $I$, its covariance has blocks 

$$

 W=\begin{pmatrix}C&CR\\RC&RCR+I/2\end{pmatrix},\qquad C=(2I)^{-1}.

$$

 The invariant is therefore 

$$

 K=1+\tfrac12\left[
 (p-m_p-R(q-m_q))^TI^{-1}(p-m_p-R(q-m_q))
                     +(q-m_q)^TI(q-m_q)\right].

$$

 Writing $D_0=\partial-i(m_p+R(q-m_q))$ and $\Lambda=\tfrac12I^{-1}$, one has $K\geq D_0^\dagger\Lambda D_0$. The Gaussian ground value of $K$ is $1+d/2$. 

 

**Proof.**

If the classical quadratic generator is $A=JG_0$, then $W'=AW+WA^T$ and $(W^{-1})'=-A^TW^{-1}-W^{-1}A$. The affine equation for $m$ cancels the linear terms. Commutators of Weyl quadratics equal their Poisson expressions, since higher Moyal derivatives vanish; these identities prove [(8.2)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:invariant). A positive quadratic matrix is a sum of squares of real linear canonical observables, proving positivity. Factoring the displayed covariance as 

$$

 \begin{pmatrix}1&0\\R&1\end{pmatrix}
 \begin{pmatrix}C&0\\0&I/2\end{pmatrix}
 \begin{pmatrix}1&R\\0&1\end{pmatrix}

$$

 and inverting proves the form formula. Each centered Gaussian coordinate contributes $1/2$ to its quadratic ground value. 

□



This is established invariant mathematics [[12](/quantum-measurement/research/complete-current-estimates/bibliography#bib-Lewis1967), [13](/quantum-measurement/research/complete-current-estimates/bibliography#bib-LewisRiesenfeld1969)]; its role here is a positive error metric through an inverted interval. It is dimensionless and does not replace the physical mass in the current. For the same laboratory vector potential $A_0$, define $b_{0,i}=(\hbar m_{p,i}+\hbar(R(q-m_q))_i-e_iA_{0,i})/M_i$. For any true wave in that constitution, 

$$

 j_i[\Psi]-\rho_\Psi b_{0,i}
       =\frac{\hbar}{M_i}\operatorname{Im}(\Psi^\dagger D_{0,i}\Psi).

$$

 Consequently its difference from the analogous expression for $P$ is at most <a id="p4s:eq:invariantcurrent"></a>


$$

 \frac{\hbar}{M_i}
 \left(e\|D_{0,i}P\|
             +N\sqrt{(\Lambda^{-1})_{ii}}\,Q\right)

$$

Equation (8.3).

 in integrated absolute value. The weighted coordinate Cauchy inequality proves the last factor. A changed potential $\Delta A$ adds $-e_i\Psi^\dagger\Delta A_i\Psi/M_i$ to the relative current.

For $H=H_0+V$ with Hermitian multiplication $V$ and form forcing $r$, the exact cancellation [(8.2)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:invariant) gives $Q'\leq g_1Q+g_0e+\|K^{1/2}r\|$ if $\|\Lambda^{1/2}\nabla V\,v\|\leq g_0\|v\|+g_1\|K^{1/2}v\|$. The proof is the preceding commutator calculation, with no separate $K_t$ loss. Resolvent regularization preserves $K_{\epsilon,t}+i[H_0,K_\epsilon]=0$. A canonical drift rewritten in $D_0$ also creates the multiplication term $a\cdot(m_p+R(q-m_q))$; its force and literal current remain. An internal-branch-dependent covariance would produce further commutators and is outside this scalar invariant statement.



<a id="section-8-3"></a>

### 8.3 Temporal transfer with a retained internal clock





**Theorem 8.3 (First-domain causal estimate with a form-controlled time derivative).**

 <a id="p4s:thm:temporal"></a> Let $H(t)$ be self-adjoint on a fixed domain $\mathcal D$, with $t\mapsto H(t)\in\mathcal L(\mathcal D,\mathcal H)$ continuously differentiable for an equivalent fixed graph norm. Assume its unitary common-domain propagator is locally bounded in that graph norm. Let $D_s$ be a fixed finite Hermitian right-clock matrix, and write $\mathcal L(t)X=H(t)X-XD_s$. For an absolutely continuous Hilbert–Schmidt residual $r$, with $r'\in L^1$, consider 

$$

 i\delta'=\mathcal L\delta-r,\qquad \delta(0)=0.

$$

 Suppose $K=H+b(t)\geq I$ and, on $\mathcal D$, 

$$

 \|(H'-\omega')v\|\leq c_1(t)\|K^{1/2}v\|+c_0(t)\|v\|

$$

 for a declared real differentiable scalar $\omega$ and integrable nonnegative $c_0,c_1$. For each $T$ define 

$$
\begin{aligned}E_T&=\int_0^T\|r\|,\quad E_{D,T}=\int_0^T\|rD_s\|,
       \quad B_T=\sup_{[0,T]}|b+\omega|,\\
 C_T&=B_TE_T^2+E_TE_{D,T},\qquad G_T=\int_0^Tc_1,\\
 A_T&=\sup_{0\leq t\leq T}
 \left[\|r(t)\|+\|r(0)\|+\int_0^t
       \left(\|r'+i\omega r\|+c_0(s)\int_0^s\|r(u)\|\,du\right)ds\right].
\end{aligned}
$$

 When these quantities are finite, the causal solution belongs to the common strong domain and satisfies <a id="p4s:eq:temporal"></a>


$$

 \sup_{[0,T]}\|K^{1/2}\delta\|
       \leq\sqrt{E_TA_T+C_T}+\tfrac12E_TG_T .

$$

Equation (8.4).

 No spatial form norm of $r$ and no application of $H$ twice to $\delta$ is assumed. 

 

**Proof.**

We first justify the domain, rather than use a formal $H^2$ calculation. Set $B(t)=(\mathcal L(t)-i)^{-1}$. It maps the Hilbert–Schmidt space boundedly into its common graph domain and $B'=-B\mathcal L'B$. If $U(t,s)$ is the two-sided propagator, integration by parts in the graph norm gives <a id="p4s:eq:graphconstruction"></a>


$$
\begin{aligned}\delta(t)={}&B(t)r(t)-U(t,0)B(0)r(0)\\
 &+\int_0^tU(t,s)
       \left(Br+B\mathcal L'Br-Br'\right)(s)\,ds .
       
\end{aligned}
$$

Equation (8.5).

 Indeed $\partial_sU(t,s)=iU(t,s)\mathcal L(s)$ and $i\mathcal L B=i-B$, so differentiating $UBr$ recovers $iU r$ minus the displayed integrand. This is precisely the Duhamel error. The terms are graph-integrable; absolutely continuous approximation in time proves the identity for the stated data.

Put $\eta=(\mathcal L-\omega)\delta-r$. Testing against common-domain adjoint solutions, or using [(8.5)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:graphconstruction), yields the mild identity 

$$

 i\eta'=\mathcal L\eta-i(r'+i\omega r)
                           +i(H'-\omega')\delta,\qquad\eta(0)=-r(0).

$$

 It does not assert $\eta\in\mathcal D$. Let $\ell=\|(\mathcal L-\omega)\delta\|$, $e=\|\delta\|$ and $Q=\|K^{1/2}\delta\|$. Unitarity and the commuting right multiplication give $e(t)\leq E(t)=\int_0^t\|r\|$ and $\|\delta D_s\|\leq E_D(t)=\int_0^t\|rD_s\|$. The auxiliary equation and $K\delta=(\mathcal L-\omega)\delta+(b+\omega)\delta+\delta D_s$ therefore imply 

$$

 \ell(t)\leq A_T+\int_0^tc_1Q,\qquad
 Q(t)^2\leq E_T\ell(t)+C_T .

$$

 For $E_T>0$, set $M(t)=A_T+\int_0^tc_1Q$. Then $M'\leq c_1\sqrt{E_TM+C_T}$, and differentiation of the square root, with a positive regularizer if necessary, gives $\sqrt{E_TM+C_T}\leq\sqrt{E_TA_T+C_T}+E_T\int_0^tc_1/2$. This proves [(8.4)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:temporal). If $E_T=0$, the causal error is identically zero. 

□



The common-domain evolution premise is a standard nonautonomous evolution requirement; the regularity equivalence in [[9](/quantum-measurement/research/complete-current-estimates/bibliography#bib-SchmidGriesemer2014)] is relevant to checking it. The estimate retains the actual right-clock defect $E_{D,T}$ and the covariant temporal combination $r'+i\omega r$. A large internal operator is not a removable scalar phase.

For example, with $\Pi_j=p_j-e_j(A_{0,j}+a_j(t))$ in physical units and rate generator $H_{\rm kin}=\sum_j\Pi_j^2/(2M_j\hbar)$, 

$$

 H_{\rm kin}'=
 -\sum_j\frac{e_j}{M_j\hbar}a_{j,t}\cdot\Pi_j
 +i\sum_j\frac{e_j}{2M_j}\operatorname{div}a_{j,t}.

$$

 If $K$ dominates the complete kinetic form, bounded vector additions give the admissible coefficients 

$$

 c_1^2=\sum_j\frac{2e_j^2\|a_{j,t}\|_\infty^2}{M_j\hbar},
 \quad
 c_0=\sum_j\frac{|e_j|\|\operatorname{div}a_{j,t}\|_\infty}{2M_j}
       +\|(V_{\rm add}/\hbar)'-\omega'I\|_\infty .

$$

 A linear force $F_j(t)x_j$ is also allowed when fixed positive traps provide a position form: Young's inequality supplies a shift $b\geq1+\|V_{\rm add}^-\|/\hbar+
\sum_jF_j^2/(M_j\Omega_j^2\hbar)$ and domination of $M_j\Omega_j^2x_j^2/(4\hbar)$. Its additional contribution to $c_1^2$ is $\sum_j4|F_j'|^2/(M_j\Omega_j^2\hbar)$. A changing quadratic trap or an unbounded source-coordinate field needs its actual stronger graph bound.



<a id="section-8-4"></a>

### 8.4 Singular residuals and a safe common-domain alternative





**Proposition 8.4 (Coulomb residual and temporal coordinates).**

 <a id="p4s:prop:coulomb"></a> In three relative spatial dimensions, let $\phi$ be a smooth Gaussian nonzero at a collision. Then $|x|^{-1}\phi\in L^2_{\rm loc}$ but $|x|^{-1}\phi\notin H^1_{\rm loc}$. Nevertheless, if $V(x)=g/|x|$ is fixed in laboratory coordinates, $P_2(t,x)$ is a differentiable quadratic comparison potential and $\phi_t$ is a polynomial times a smooth finite Gaussian family, then 

$$

 f=(V-P_2)\phi,\qquad
 f_t=-P_{2,t}\phi+(V-P_2)\phi_t

$$

 are locally in $L^2$ and globally in $L^2$ for the indicated Gaussian polynomial families. On a finite parameter path with nondegenerate covariance they are continuous in $L^2$. Under a homogeneous point change $x=L(t)X$, with invertible $L$, 

$$

 |\partial_t(g/|L(t)X|)|
       \leq\|L'L^{-1}\|\,|g|/|L(t)X|.

$$

 

 

**Proof.**

The radial square integrals near zero have orders $\int_0^1dr$ for $1/r$ and $\int_0^1r^{-2}dr$ for its leading gradient. The nonzero Gaussian value prevents cancellation of the latter leading term. Polynomial factors and Gaussian tails give the global $L^2$ statements; local domination by an integrable $r^{-2}$ square envelope and uniform Gaussian tail bounds prove continuity. Finally differentiation gives $-g\,x\cdot(L'L^{-1}x)/|x|^3$, proving the last inequality. 

□



An exponentially small nonzero Gaussian value does not remove the divergent spatial derivative. A translation that moves the collision point instead produces a $1/r^2$ temporal multiplier. The homogeneous repair retains the physical centroid, linear force, boost and scalar action; recentering them away may restore that moving singularity. These observations select a valid response method, without claiming a small apparatus error.

For completeness a strong-graph variant applies when a changing trap has a graph-relative rather than form-relative time derivative. 

**Proposition 8.5 (One graph by an ordered inverse lift).**

 <a id="p4s:prop:graph"></a> Let $H(t)$ satisfy the common-domain assumptions above, and let $A=H+c\geq aI$ for constants $a>0,c\geq0$. Assume $\gamma(t)=\|H'(t)A(t)^{-1}\|\in L^1$. For $iE'=HE+f$, $E(0)\in\mathcal D$ and $f\in W^{1,1}([0,T];\mathcal H)$, set $R(t)=\int_0^t\gamma$. Then <a id="p4s:eq:graphlift"></a>


$$
\begin{aligned}\|A(t)E(t)\|\leq{}&\|f(t)\|+
 e^{R(t)}\biggl[\|A(0)E(0)\|+\|f(0)\|\\
 &\hspace{9mm}+\int_0^t e^{-R(s)}
       \bigl((c+\gamma(s))\|f(s)\|+\|f'(s)\|\bigr)\,ds\biggr].
       
\end{aligned}
$$

Equation (8.6).

 

 

**Proof.**

The auxiliary $Y=AE+f$ obeys $iY'=HY+cf+iH'E+if'$; the terms containing $Hf$ cancel. Solve its Volterra equation using $E=A^{-1}(Y-f)$ and the bounded perturbation $H'A^{-1}$. The norm inequality for $Y$ and Gronwall give [(8.6)](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:eq:graphlift). This is also a rigorous construction: $(A^{-1})'=-A^{-1}H'A^{-1}$ verifies the original equation weakly for the constructed $E$, and uniqueness of the Hilbert mild solution identifies it. No separate expression $Hf$ is needed. 

□



For a fixed laboratory Coulomb singularity and moving oscillator centres, the time derivative of the Coulomb kernel is zero. The derivative of the trap is quadratic and linear in the laboratory coordinates, so it can be graph-relative under the earned oscillator domain. Proposition [8.5](/quantum-measurement/research/complete-current-estimates/spatial-force-and-temporal-regularity-as-distinct-current-resources#p4s:prop:graph), rather than an unjustified spatial derivative of $f$, is then the relevant interface. A detector moving with those centres still pays every term in [(2.6)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:surface).
