# Section 5: Translated profiles and an interacting example

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

<a id="section-5"></a>

## 5 Translated profiles and an interacting example

<a id="sec:profiles"></a>

The control hypothesis can be stated using a single spatial shape on each particle. Amplitudes and centers remain freely variable.



**Theorem 5.1 (Translated-profile controls).**

<a id="thm:profiles"></a> In [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main), replace arbitrary compact one-body controls on particle $i$ by 

$$

 v_i(q_i)=\lambda g_i(q_i-a),\qquad
 \lambda\in{\mathbb R},\quad a\in{\mathbb R}^3,

$$

 where $g_i\in{\mathcal S}({\mathbb R}^3;{\mathbb R})$ and $\int g_i\ne0$. It suffices to assume consistency for these controls and zero control, independently on each particle. The same uniqueness conclusion holds. 





**Proof.**

We show that translates of $g=g_i$ generate every compact one-body annihilator. We work in one block and use [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) against full Schwartz states. Since $\widehat g(0)\ne0$, there is a ball $B$ around zero on which $\widehat g$ is nonzero. For a real $f$ whose Fourier transform is smooth and compactly supported in $B$, division gives a Schwartz function $h$ with $f=g*h$. Real-valuedness follows from Hermitian symmetry of the Fourier transforms. Truncation of this convolution and Riemann summation converge in Schwartz space. Thus $f\in{\mathcal A}$.

Choose a real band-limited Schwartz function $\chi$ with $\chi(0)=1$. For each sufficiently small frequency $k$, the functions $\chi(x/R)\cos(k\cdot x)$ and $\chi(x/R)\sin(k\cdot x)$ have Fourier support in $B$ for large $R$. They are annihilators. Their multiplication on every fixed Schwartz state converges in Schwartz space to multiplication by $\cos(k\cdot x)$ and $\sin(k\cdot x)$, respectively. Indeed, derivatives are uniformly bounded, and the Schwartz decay of the state controls the expanding exterior region.

For bookkeeping, complexify the real vector space of identities and the bilinear operation $\Gamma$. This is a formal combination of real sine and cosine identities; it does not assume that the real derivative $D{\mathcal P}$ is complex-linear or that a complex potential is an admitted control. Formula [(3.5)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:gamma) reads 

$$

 \Gamma(e^{ik\cdot x},e^{i\ell\cdot x})
       =-(k\cdot\ell)e^{i(k+\ell)\cdot x}.

$$

 Every frequency $k\ne0$ is a positive integer multiple of a sufficiently small one. Repeated collinear additions have nonzero dot products, and therefore generate $e^{ik\cdot x}$. Real and imaginary parts give real identities; the constant is already an annihilator by projectivity.

Finally, for $f\in{C_c^\infty}({\mathbb R}^3)$, truncate its Fourier integral. On each compact frequency set the map $k\mapsto e^{ik\cdot x}\Psi$ is continuous into Schwartz space for every fixed $\Psi$. Its Riemann sums therefore converge in that topology; taking Hermitian-symmetric sums preserves reality of the multipliers. Derivatives of the omitted Fourier tail are bounded by tails of $\int(1+|k|)^j|\widehat f(k)|\,dk$, which tend to zero for every $j$. These bounds imply convergence after multiplication by each fixed Schwartz state. Equation [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) supplies every compact multiplier. The proof of [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main) now applies. 

□



This theorem concerns exact identities satisfied by one assignment for all centers and amplitudes. It is not a finite-resource synthesis theorem for arbitrary target potentials. In particular, its Fourier and multiplier limits impose no experimental approximation principle on an individual preparation. They are justified by the stated continuity of the statistical functional.



**Example 5.2 (Two harmonically interacting particles).**

<a id="ex:harmonic"></a> For equal unit masses let 

$$

 H_0=-\tfrac12(\Delta_x+\Delta_y)
       +\tfrac{\omega^2}{2}(|x|^2+|y|^2)
       +\tfrac{k}{2}|x-y|^2,\qquad \omega,k>0.

$$

 The mixed interaction derivative is $-kI_3$, so the edge condition holds everywhere. The positive quadratic form supplies the common oscillator domain. Taking $g(x)=e^{-|x|^2/\sigma^2}$, $\sigma>0$, gives $\int g=\pi^{3/2}\sigma^3>0$. Thus consistency for independent real amplitudes and translates of this one-body profile already characterizes the Born assignment.

The holding ground state is an explicit entangled preparation. With $u=(x+y)/\sqrt2$, $v=(x-y)/\sqrt2$, and $\Omega=\sqrt{\omega^2+2k}$, it is 

$$

 \Psi_0(x,y)=\frac{(\omega\Omega)^{3/4}}{\pi^{3/2}}
       \exp\!\left[-\frac{\omega}{2}|u|^2-\frac{\Omega}{2}|v|^2\right].

$$

 In the particle coordinates its exponent contains $(\Omega-\omega)x\cdot y/2$; it does not factor between particles. The theorem applies to the full state assignment, not just to this Gaussian or to Gaussian dynamics. The interaction strength $k$ is fixed throughout the allowed controls.
