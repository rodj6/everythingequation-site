# Section 4: Exact Gaussian returns with fixed interactions

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

<a id="section-4"></a>

## 4 Exact Gaussian returns with fixed interactions

<a id="sec:gaussian"></a>

This section separates two endpoint problems. The classical symplectic propagator determines exact quantum return for a quadratic Hamiltonian. The configuration propagator is computed from its evolving Gaussian phase. They are different matrices.



<a id="section-4-1"></a>

### 4.1 Symplectic endpoint correction



Let $K_0=O\Omega^2O^T>0$, with $\Omega={\operatorname{diag}}(\omega_1,\ldots,\omega_d)$. First suppose the frequencies are positive integers. At $T=2\pi$ the uncontrolled symplectic propagator is the identity. Define <a id="eq:symplectic"></a>


$$

 \dot{\mathsf S}=\mathsf A(K_0+D(t))\mathsf S,\qquad
 \mathsf A(K)=\begin{pmatrix}0&I\\-K&0\end{pmatrix},\qquad
 \mathsf S(0)=I .

$$

Equation (4.1).

 Here $\mathsf S$ acts on classical position and momentum, used to represent the quadratic quantum evolution. It is not a guidance flow. The metaplectic representation, or equivalently the exact Heisenberg equations for Weyl operators, shows that $\mathsf S(T)=I$ implies $U(T)=e^{i\theta}I$ on the full quantum Hilbert space [[5](/quantum-measurement/research/preparation-returns/bibliography#bib-Folland1989), Chapter 4]. Irreducibility of the Weyl representation gives the same conclusion directly. There is no spectral truncation in this implication.

For a physical matrix $M\in{\mathcal D}$ write $\widetilde M=O^TMO$. The following finite-dimensional criterion will be arranged by engineering the holding traps.



**Lemma 4.1 (Endpoint submersion).**

<a id="lem:submersion"></a> Assume that 

1. (i) the positive numbers $2\omega_i$, $\omega_i+\omega_j$ and $|\omega_i-\omega_j|$ ($i<j$) are pairwise distinct;

2. (ii) for each $i<j$ some $M\in{\mathcal D}$ has $\widetilde M_{ij}\ne0$;

3. (iii) the vectors $(\widetilde M_{11},\ldots,\widetilde M_{dd})$, $M\in{\mathcal D}$, span ${\mathbb R}^d$.

 Then the endpoint map from smooth, interior-supported physical quadratic controls to ${\operatorname{Sp}}(2d,{\mathbb R})$ is a submersion at zero control and time $2\pi$. A finite-dimensional family of such controls already has this property. 





**Proof.**

At the return time the differential is <a id="eq:endpointdiff"></a>


$$

 D\mathcal E(0)[D]=\int_0^{2\pi}
 \mathsf S_0(t)^{-1}
 \begin{pmatrix}0&0\\-D(t)&0\end{pmatrix}
 \mathsf S_0(t)\,dt .

$$

Equation (4.2).

 In oscillator coordinates put $q_i(t)=(a_i e^{-i\omega_i t}+\bar a_i e^{i\omega_i t})/
\sqrt{2\omega_i}$. A real quadratic $q^TMq/2$ then has the two real quadratures of $a_ia_j$ at $\omega_i+\omega_j$, those of $a_i\bar a_j$ at $\omega_i-\omega_j$, and the diagonal number terms at frequency zero. For $i=j$ the nonzero frequency is $2\omega_i$.

If a real covector on $\mathfrak{sp}(2d,{\mathbb R})$ annihilates [(4.2)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:endpointdiff) for every interior-supported time waveform and every $M$, its pairing with this quadratic expression vanishes identically in $t$. Independence of the distinct trigonometric frequencies, (ii), and (iii) force its coefficients on every root quadrature and on every diagonal number term to vanish. These form a real basis of $\mathfrak{sp}(2d,{\mathbb R})$, so the differential is onto. Select $d(2d+1)$ smooth controls whose images are a basis. Their coefficients give the asserted finite-dimensional submersion. 

□



Choose two distinct positive integers $\nu,\zeta$ larger than every frequency occurring in (i). For $M,N\in{\mathcal D}$ the trial control <a id="eq:trial"></a>


$$

 D_{\mathrm{tr}}(t,\epsilon)=
 \epsilon\bigl[(\cos\nu t-\cos\zeta t)M+\sin\nu t\,N\bigr]

$$

Equation (4.3).

 vanishes at both endpoints. Fourier orthogonality makes its first endpoint derivative zero. Add a linear combination of the finite controls from [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion), <a id="eq:corrected"></a>


$$

 D(t,\epsilon)=D_{\mathrm{tr}}(t,\epsilon)
                    +\sum_{\ell=1}^{d(2d+1)}c_\ell(\epsilon)D_\ell(t).

$$

Equation (4.4).

 The ordinary analytic implicit-function theorem, in a chart at $I\in{\operatorname{Sp}}(2d,{\mathbb R})$, gives $c_\ell(\epsilon)=O(\epsilon^2)$ and $\mathsf S(2\pi)=I$ exactly. For sufficiently small $\epsilon$, $K_0+D(t,\epsilon)>0$. Thus these are finite-duration exact quantum returns with local controls and fixed off-block entries. Only a finite-dimensional endpoint equation has been inverted.



<a id="section-4-2"></a>

### 4.2 The actual Gaussian configuration curvature



Starting in $\psi_0$, a quadratic history remains Gaussian: 

$$

 \psi_t(q)=c_t\exp[-q^TA(t)q/2+iq^TB(t)q/2],
 \qquad A(t)>0,\quad B(t)=B(t)^T .

$$

 Substitution in the Schrödinger equation gives <a id="eq:riccati"></a>


$$

 \dot A=-AB-BA,\qquad \dot B=A^2-B^2-K,\qquad
 \dot L=BL,\quad L(0)=I .

$$

Equation (4.5).

 The last equation is the actual guided map $q(t)=L(t)q(0)$. To see that these formulas are global for finite time, write 

$$

 X=\mathsf S_{qq}+i\mathsf S_{qp}A_0,\qquad
 Y=\mathsf S_{pq}+i\mathsf S_{pp}A_0 .

$$

 Symplecticity gives $X^*Y-Y^*X=2iA_0$. Hence $X$ is invertible, $A-iB=-iYX^{-1}$ is symmetric, and $A=X^{-*}A_0X^{-1}>0$. The Gaussian has no nodes, $B$ is bounded on every finite time interval, and $L$ is a global linear diffeomorphism. Also <a id="eq:covariance"></a>


$$

 L(t)^TA(t)L(t)=A_0,\qquad
 \det L(t)=\exp\left(\int_0^t{\operatorname{tr}} B(s)\,ds\right)>0 .

$$

Equation (4.6).

 Every Gaussian ray return therefore gives $A_0^{1/2}L(T)A_0^{-1/2}\in SO(d)$.



**Proposition 4.2 (Curvature surviving exact repair).**

<a id="prop:curvature"></a> For the corrected loops [(4.4)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:corrected), in modal coordinates, $L(T)=I+\epsilon^2L_2+O(\epsilon^3)$ and <a id="eq:skew"></a>
<a id="eq:whitencurve"></a>


$$
\begin{aligned}{\operatorname{skew}} L_2
   &=-\pi\nu[\mathcal R_\nu\widetilde M,
                        \mathcal R_\nu\widetilde N],
       &(\mathcal R_\nu Q)_{ij}
          &=\frac{Q_{ij}}{(\omega_i+\omega_j)^2-\nu^2},\\
 G_{ij}
   &=\frac{2\sqrt{\omega_i\omega_j}}{\omega_i+\omega_j}
                      ({\operatorname{skew}} L_2)_{ij},
       &\Omega^{1/2}L(T)\Omega^{-1/2}
          &=I+\epsilon^2G+O(\epsilon^3).
\end{aligned}
$$

Equation (4.7, 4.8).

 Matrix commutators in [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew) have the convention $[P,Q]=PQ-QP$. 





**Proof.**

Let $A=\Omega+\epsilon a+\cdots$ and $B=\epsilon b+\cdots$. For $\sigma_{ij}=\omega_i+\omega_j$ the linearized equations are $\dot a_{ij}=-\sigma_{ij}b_{ij}$ and $\dot b_{ij}=\sigma_{ij}a_{ij}-D_{ij}$. A forcing $\widetilde M_{ij}\cos\nu t$ contributes 

$$

 b_{ij}(t)=\widetilde M_{ij}
       \frac{\nu\sin\nu t-\sigma_{ij}\sin\sigma_{ij}t}
            {\sigma_{ij}^2-\nu^2};

$$

 a forcing $\widetilde N_{ij}\sin\nu t$ contributes 

$$

 b_{ij}(t)=\widetilde N_{ij}
       \frac{\nu(\cos\sigma_{ij}t-\cos\nu t)}
            {\sigma_{ij}^2-\nu^2}.

$$

 There is an analogous cosine expression at $\zeta$. All these functions integrate to zero over $T=2\pi$. Expansion of $\dot L=BL$ yields <a id="eq:area"></a>


$$

 {\operatorname{skew}} L_2=\frac12\int_0^{2\pi}
       \left[b(t),\int_0^t b(s)\,ds\right]dt .

$$

Equation (4.9).

 The direct integral of the second-order $B$ is symmetric, including the contribution of the endpoint repair.

Orthogonality removes unequal frequencies from [(4.9)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:area). At a natural frequency $\sigma_{ij}$ all matrices are multiples of the same symmetric matrix unit, and their commutator is zero. The only nonzero paired sine and cosine matrices are at $\nu$: they are $\nu\mathcal R_\nu\widetilde M$ and $-\nu\mathcal R_\nu\widetilde N$. Their elementary integral is $-\pi\nu[\mathcal R_\nu\widetilde M,
\mathcal R_\nu\widetilde N]$, proving [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew).

Exact return and [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance) imply $\Omega L_2+L_2^T\Omega=0$. Solving this entrywise in terms of ${\operatorname{skew}} L_2$ gives [(4.8)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:whitencurve). This is why a symmetric contribution before whitening cannot be simply ignored after whitening: the covariance identity supplies the necessary relation. 

□





<a id="section-4-3"></a>

### 4.3 From return curves to the exact group





**Lemma 4.3 (Exact group generation).**

<a id="lem:exactgroup"></a> Suppose a subgroup $\mathscr G\subset SO(d)$ contains analytic curves $R_j(\epsilon)=I+\epsilon^2G_j+O(\epsilon^3)$ and their inverses. If the $G_j$ generate $\mathfrak{so}(d)$ as a Lie algebra, then $\mathscr G=SO(d)$. 





**Proof.**

For a sufficiently small fixed nonzero $a$, the curves $C_j(t)=R_j(a+t)R_j(a)^{-1}$ pass through the identity and have velocities $X_j=2aG_j+O(a^2)$. A finite list of Lie words in the $G_j$ is a basis, so the corresponding determinant remains nonzero for $X_j/(2a)$. Let $V$ be the span of $\operatorname{Ad}_hX_j$ for all $h$ in the subgroup generated by the $C_j$. It is invariant under these adjoint actions. Differentiating $\operatorname{Ad}_{C_j(t)}V=V$ gives $[X_j,V]\subset V$. Thus $V=\mathfrak{so}(d)$. Select finitely many adjoint velocities forming a basis. The product of their conjugated curves has surjective differential at the origin, so its image contains an identity neighborhood, by the finite-dimensional inverse-function theorem. Consequently $\mathscr G$ is open. Since $SO(d)$ is connected, $\mathscr G=SO(d)$. Every element obtained this way is a finite product of actual curves and their inverses, rather than only a limit of such products. 

□
