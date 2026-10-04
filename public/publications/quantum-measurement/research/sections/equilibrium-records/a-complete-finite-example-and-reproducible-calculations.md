# Section 9: A complete finite example and reproducible calculations

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\E = \mathbb E
\Prb = \mathbb P
\TV = d_{\rm TV}
\id = \operatorname{id}
\dd = \,\mathrm d
\cH = \mathcal H
\cS = \mathcal S
\norm = \left\|#1\right\|
\pos = [#1]_+
\Ncdf = \mathsf F
\Ntail = \overline{\mathsf F}
-->

<a id="section-9"></a>

## 9 A complete finite example and reproducible calculations

 <a id="sec:example"></a> Use $P_a$ as $Z$ projectors and set 

$$

 \theta=\pi/3,\qquad\varphi=\pi/4,\qquad\eta=2/3.

$$

 The receptor weights are exactly <a id="eq:exampleweights"></a>


$$

 (P_r,P_p,P_c,P_l)=(1/4,3/8,1/4,1/8).

$$

Equation (41).

 Take one unknown source with an inaccessible two-dimensional reference: <a id="eq:inputexample"></a>


$$

 \psi=\sqrt{2/3}{|{0}\rangle}{|{0}\rangle}_R+
                       \sqrt{1/3}{|{1}\rangle}{|{+}\rangle}_R,\qquad
 {|{+}\rangle}_R=({|{0}\rangle}_R+{|{1}\rangle}_R)/\sqrt2.

$$

Equation (42).

 The reduced source coherence is $\rho_{01}=1/3$. Neither independent copies nor reference control are used.



<a id="section-9-1"></a>

### 9.1 Null followed by an incompatible measurement

 The ideal orthogonal-record null map is $\mathcal N(\rho)=\rho/4+\mathcal D_Z(\rho)/2$, with trace $3/4$; its retained coherent null is the vector [(18)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullvector). A later $X$ probe in this ideal comparator gives <a id="eq:nullnumbers"></a>


$$

 {\mathbb P}(N,X+)=\frac{11}{24},\qquad
 {\mathbb P}(X+\mid N)=\frac{11}{18},\qquad
 \sigma_R^{N,+}=\frac1{48}
               \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (43).

 To verify, write ${\langle{+_x}|}\psi=\sqrt{1/3}{|{0}\rangle}_R+\sqrt{1/6}{|{+}\rangle}_R$ and apply [(19)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullmap) term by term, or expand [(18)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullvector) and trace only the named $D$ factor. The trace of the displayed matrix is $11/24$; its normalized reference state is the matrix with entries $19,5,5,3$ divided by $22$. For $X-$ the unnormalized reference state is 

$$

 \sigma_R^{N,-}=\frac1{48}\begin{pmatrix}11&1\\1&3\end{pmatrix},
 \quad{\mathbb P}(N,X-)=7/24.

$$

 Their sum is $(3/4)\rho_R$, an explicit reference consistency check. A frozen original input would instead give ${\mathbb P}(X+\mid N)=5/6$; a fully $Z$-dephased daughter would give $1/2$. Both fail this finite experiment.



<a id="section-9-2"></a>

### 9.2 Captured copy, reset, spatial feedback and a second record

 Copy the captured label, retain its spatial archive, reset $D$ by [(23)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:covariantreset), keeping $D'$, and use 

$$

 V_0=I,\qquad V_1=e^{-i\pi\sigma_y/6}.

$$

 Apply an $X$ write to a fresh pointer. The ideal branch coefficients, with all resource factors attached, are 

$$

 \tfrac12(R_bV_aP_a\otimes I_R)\psi.

$$

 Their probabilities are 

| Retained first record | Second $+$ | Second $-$ |
| --- | --- | --- |
| $a=0$ | $1/12$ | $1/12$ |
| $a=1$ | $(2-\sqrt3)/48$ | $(2+\sqrt3)/48$ |

  They sum to capture probability $1/4$. Reference daughters are ${|{0}\rangle}_R$ and ${|{+}\rangle}_R$, respectively. Literal spatial feedback uses the smooth $g(y)B$ contact, with $B=(\pi\hbar/(6t_f))\sigma_y$, and the bound [(25)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:feedbackbound). The copied archive remains held while the working pointer can recoil. Thus the exact table is the ideal target with explicit finite classifier, feedback and clock errors, not an assertion that finite Gaussian records are orthogonal.



<a id="section-9-3"></a>

### 9.3 A complete reversal remains a different experiment

 In the driven bank, if every response, source gate, copy and spatial write is coherently undone with all receiving systems, that full bank wave returns to its input, up to a known common phase. Resetting only $D$ while a copy or $D'$ survives does not achieve that return. A later incompatible probe distinguishes the two retained states. No global projection has been inserted at a declaration. In the finite autonomous realization the controller also remains in the complete state: its recoil and entanglement are bounded by the clock comparison, not claimed to be exactly undone by these apparatus inverse pulses.

An inverse need not negate a massive kinetic energy. For the piecewise constant half-period alternative to [(8)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:quintic), a trap centred at $aL/2$ sends a ground packet centred at zero to one centred at $aL$ in time $\pi/\omega$. Each conditional oscillator has common equally spaced spectrum, so evolution for $2\pi/\omega$ is $-I$. Evolving for a complementary positive duration realizes the inverse, up to a common phase. Finite internal gate inverses reverse a bounded matrix term. Smooth forced displacements can likewise be undone on the specified coherent packets by a reversed centre trajectory and known phase correction. A claim of inversion on an arbitrary oscillator state would require its full propagator rather than this restricted packet identity.



<a id="section-9-4"></a>

### 9.4 Finite numerical values

 The finite example is determined by the displayed resource rotations, reference matrices and classifier integrals. The twelve one-site Pauli detection identities follow from anticommutation with the stabilizers; the moving-Gaussian residual and transported-trap identity were proved above. No supplementary computation is needed for these proof steps.

For the quintic writer with $\hbar=\sigma=T_w=1$, $\omega=\pi$, $M=1/(2\pi)$, $L=8$ and $p_1=0.65$, the probabilities are 

| Event | Probability |
| --- | --- |
| Initially beyond threshold | $0.0000316712418$ |
| First crossing at positive time | $0.649958827386$ |
| No crossing by the write endpoint | $0.350009501373$ |

  The exact normalization is $\delta+p_1(1-2\delta)+p_0(1-\delta)+p_1\delta=1$. The table gives rounded evaluations of these exact formulas. Figure [1](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#fig:mechanism) evaluates the same equations; its plotting data are embedded in the LaTeX source. No numerical claim about continuum trajectory stability is inferred from it.
