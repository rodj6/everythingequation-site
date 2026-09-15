# Chapter 12: Material contact geometry and the limits of common response

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="mat:geometry"></a> 

The constructions in this chapter replace or constrain the physical contact that couples a source to a work store. They do not identify ordinary classical work points with coherent material coordinates. That difference changes the state space, the allowed acquisition operations, and the predictions of a copied-return experiment. We first prove a positive construction in a complete material field, then retain a stronger counterexample in a distinct hybrid constitution. The latter shows why a shared origin of force and conversion is not sufficient for complete record compatibility [[M26](/quantum-measurement/monograph/bibliography#bib-M26), [M28](/quantum-measurement/monograph/bibliography#bib-M28)]. 

Throughout, an unknown carried vector may be entangled with an inaccessible reference. Every source-dependent controller, old memory, and future-returning resource is part of the input. New ready packets and memory blanks are independent resources when independence is stated. An ensemble average does not erase active provenance. 



<a id="section-12-1"></a>

## 12.1 A complete material field

 

Let $\mathcal K$ contain the finite source, reference, and internal apparatus indices. A material contact coordinate $y$ carries a section $\psi\in L^2(\mathbb R;\mathcal K)$. The section, including variations of its local orientation, is the primary source variable. A product $\psi(y)=\varphi(y)\Xi$ is an allowed preparation, not an invariant constraint during contact. At a finite regulator the real metric and symplectic form are <a id="mat:metric"></a>


$$
g(u,v)=2\hbar\operatorname{Re}\langle u,v\rangle,
 \qquad \omega(u,v)=2\hbar\operatorname{Im}\langle u,v\rangle.
 

$$

Equation (12.1).

 The material law requires smooth contact flows to preserve both forms, fix the zero field, and respect common phase. These are new constitutive assumptions. Positivity of energy, canonical reciprocity, and source/readout incompleteness do not by themselves imply them. 

A nonempty massive example is the action <a id="mat:action"></a>


$$
\begin{aligned}\mathcal I[\psi]&=\int dt\left\{\frac{i\hbar}{2}
 \int(\psi^\dagger\dot\psi-\dot\psi^\dagger\psi)dy-\mathcal E[\psi]\right\},\\
 \mathcal E[\psi]&=\int\left\{\frac{\hbar^2}{2M}\|\partial_y\psi\|^2
       +\psi^\dagger[H_S+V(y)A]\psi\right\}dy,
 
\end{aligned}
$$

Equation (12.2, 12.3).

 where $M>0$, $H_S,A$ are bounded Hermitian operators and $V$ is a bounded smooth real function. Variation gives 

$$

 i\hbar\dot\psi=[-\hbar^2\partial_y^2/(2M)+H_S+V(y)A]\psi.

$$

 The standard self-adjoint realization on $H^2$ supplies unitary evolution. This is a specified field dynamics; it is not a proof that all work substances have this form. 

Where $\rho=\|\psi\|^2>0$, write $\psi=\sqrt\rho e^{iS/\hbar}z$, $z^\dagger z=1$, and $a=-i\hbar z^\dagger\partial_yz$. Direct differentiation gives <a id="mat:strain"></a>


$$
\begin{aligned}\frac{\hbar^2}{2M}\|\partial_y\psi\|^2
 &=\frac\rho{2M}(S'+a)^2+\frac{\hbar^2}{8M}\frac{(\rho')^2}\rho\\
 &\quad+\frac{\hbar^2\rho}{2M}
   (\|z'\|^2-|z^\dagger z'|^2).
 
\end{aligned}
$$

Equation (12.4, 12.5).

 The last term is the squared norm of the orientation derivative normal to $z$ and is nonnegative. The changes $z\mapsto e^{i\theta(y)}z$, $S\mapsto S-\hbar\theta$ leave the section and every displayed energy term unchanged. Thus local orientation modes cannot generally be deleted without changing the physical variational problem. 



**Theorem 12.1 (Linear transport from the stipulated field geometry).**

 <a id="mat:linear"></a> On a connected finite-dimensional amplitude regulator, a twice differentiable contact vector field preserving [(12.1)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:metric), fixing zero and respecting phase is $X\psi=-iH\psi/\hbar$ for a field-independent Hermitian $H$. On the test-function core $C_c^\infty(\mathbb R;\mathbb C^d)$, if the corresponding complex-linear local differential expression has order at most one, it is <a id="mat:local"></a>


$$
X\psi=-V(y,t)\partial_y\psi-\tfrac12\partial_yV(y,t)\psi
               -iB(y,t)\psi/\hbar,
 \quad V=V^\dagger,\quad B=B^\dagger.
 

$$

Equation (12.6).

 Conversely [(12.6)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:local) preserves the real metric on compactly supported test fields. A global unitary evolution additionally requires a self-adjoint realization of its generator. 

 

**Proof.**

In real coordinates metric preservation is the Killing equation $\partial_bX_c+\partial_cX_b=0$. Differentiate in a third coordinate, add the first two cyclic identities and subtract the third. Equality of mixed derivatives gives $\partial_a\partial_bX_c=0$. Hence $X=B_0\psi+b_0$, with $B_0$ real antisymmetric. Zero fixation removes $b_0$. Symplectic preservation implies that $B_0$ commutes with the complex structure, so it is complex linear and anti-Hermitian. Therefore $B_0=-iH/\hbar$ with $H=H^\dagger$. 

For the local statement write the field-independent expression as $L=-V\partial_y+C$. Integration by parts on the common core gives 

$$

 L^\dagger=V^\dagger\partial_y+\partial_yV^\dagger+C^\dagger.

$$

 Thus $L^\dagger=-L$ is equivalent to $V=V^\dagger$ and $C+C^\dagger=-V'$. The remaining anti-Hermitian part is $-iB/\hbar$. Reversing the integration proves the converse. Constant bounded $V$ and bounded smooth Hermitian $B$, with their declared domains, provide nonempty continuum realizations. No differentiability of an unbounded translation field on all of $L^2$ is asserted. 

□

 

The local continuity equation is <a id="mat:continuity"></a>


$$
\partial_t(\psi^\dagger\psi)+\partial_y(\psi^\dagger V\psi)=0.
 

$$

Equation (12.7).

 For $V=g(t)A$ and $B=0$, the spectral component with $A=a$ translates by $aK(t)$, where $K(t)=\int_0^tg(s)ds$. Translating the entire field at the expectation-dependent displacement $K\langle A\rangle$ violates the field-independent linearity in Theorem [12.1](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:linear). This is the specific mathematical restriction that changes the earlier classical writer. The theorem does not select the physical matrix $V$, prohibit a contact outside this material class, or assign actual coordinates a probability law. 



<a id="section-12-2"></a>

## 12.2 What an expectation writer leaves out

 

Let $z,\varphi$ be normalized source and work vectors and let $A,B$ be self-adjoint, with $\varphi$ in the domain of $B$. Set $a=\langle z,Az\rangle$ and $b=\langle\varphi,B\varphi\rangle$. For $H_{\rm int}=gA\otimes B$, <a id="mat:normaldecomp"></a>


$$
\begin{aligned}Az\otimes B\varphi
 &=abz\otimes\varphi+b(A-a)z\otimes\varphi
   +az\otimes(B-b)\varphi\\
 &\quad +(A-a)z\otimes(B-b)\varphi.
 
\end{aligned}
$$

Equation (12.8, 12.9).

 The last term is orthogonal to all tangent vectors of the product-state manifold. Therefore the exact squared normal speed is <a id="mat:normalspeed"></a>


$$
\|N\|^2=\frac{g^2}{\hbar^2}
          \operatorname{Var}_z(A)\operatorname{Var}_\varphi(B).
 

$$

Equation (12.10).

 All reference correlations can be included in $z$. On open preparation sets where both variances are positive, the product manifold is not invariant. Replacing the full dynamics by reciprocal equations on its tangent space removes a nonzero physical term. 

For a projector $A$, a work momentum $P=-i\hbar\partial_y$ and $p=\|A\Xi\|^2$, the exact acquisition state is <a id="mat:translation"></a>


$$
\psi_t(y)=(I-A)\Xi\varphi(y)+A\Xi\varphi(y-K(t)).
 

$$

Equation (12.11).

 If $\varphi$ has finite position variance $s^2$, its resulting position density and variance are <a id="mat:variance"></a>


$$
(1-p)|\varphi(y)|^2+p|\varphi(y-K)|^2,
 \qquad \operatorname{Var}(Y)=s^2+K^2p(1-p).
 

$$

Equation (12.12).

 The mean shift is $Kp$, but the extra fluctuations and source/work correlation are determined by the same interaction. They have not been independently added to obscure a noiseless mean signal. The squared-norm interpretation of the material position density remains a preparation/configuration commitment, separately supplied in the relevant realization. 



<a id="section-12-3"></a>

## 12.3 A finite acquisition, genuine copy, and return

 

Choose $\varphi\in C_c^\infty(\mathbb R)$ with unit norm and independent memory blanks $|00\rangle_{BC}$. Put $\Xi_0=(I-A)\Xi$, $\Xi_1=A\Xi$. During storage take the specified free work Hamiltonian to be zero; any other free motion belongs in a different complete pulse calculation. First implement [(12.11)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:translation). Next apply a local read rotation 

$$

 H_{\rm read}(t)=\hbar\dot b(t)\beta(y)\sigma_y^B,
 \qquad b:0\longrightarrow1,\quad 0\le\beta\le\pi/2.

$$

 Use finite controlled rotations to copy $B$ to $C$ and reset $B$: 

$$

 |00\rangle\mapsto\cos\beta|00\rangle+\sin\beta|10\rangle
 \mapsto\cos\beta|00\rangle+\sin\beta|11\rangle
 \mapsto|0\rangle_B(\cos\beta|0\rangle+\sin\beta|1\rangle)_C.

$$

 Finally undo the source-controlled translation. With $m(\theta)=\cos\theta|0\rangle+\sin\theta|1\rangle$, the complete final state is <a id="mat:echo"></a>


$$
\psi_f(y)=\varphi(y)|0\rangle_B
       [\Xi_0m(\beta(y))_C+\Xi_1m(\beta(y+K))_C].
 

$$

Equation (12.13).

 All rotations can use finite smooth pulses. The ideal prescribed schedule is a control resource; no autonomous microscopic clock has been derived by writing it down. 



**Proposition 12.2 (Exact complete-state origin of the record/return tradeoff).**

 <a id="mat:echoresult"></a> Under the squared-norm material configuration law, the actual terminal bit in [(12.13)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:echo) has probability <a id="mat:record"></a>


$$
R(p)=(1-p)r_0+pr_1,\qquad
 r_a=\int|\varphi(y)|^2\sin^2\beta(y+aK)dy.
 

$$

Equation (12.14).

 Let 

$$

 D=\int|\varphi(y)|^2\cos[\beta(y+K)-\beta(y)]dy.

$$

 Then the complete source/reference reduced state differs from its initial pure state by <a id="mat:echobound"></a>


$$
\tfrac12\|\rho_{SR,f}-|\Xi\rangle\langle\Xi|\|_1
       =\sqrt{p(1-p)}(1-D),\qquad
 |r_1-r_0|\le\sqrt{1-D^2}.
 

$$

Equation (12.15).

 In particular, exact source/reference return for one $0<p<1$ forces equal bit probabilities on the two source sectors. 

 

**Proof.**

Squaring the $C=1$ component of [(12.13)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:echo) and integrating gives [(12.14)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:record), because $\Xi_0$ and $\Xi_1$ are orthogonal. The normalized work/archive branch vectors are $e_a(y)=\varphi(y)m(\beta(y+aK))$, with $\langle e_0,e_1\rangle=D$. Tracing these vectors multiplies the source off-diagonal block by $D$. In the span of the normalized nonzero $\Xi_0,\Xi_1$, the difference has eigenvalues $\pm\sqrt{p(1-p)}(1-D)$, proving the equality. Further, 

$$

 |r_1-r_0|\le\int|\varphi|^2|\sin(\beta(y+K)-\beta(y))|dy
 \le\sqrt{1-D^2},

$$

 by Cauchy–Schwarz and $\int|\varphi|^2\cos^2\theta\ge D^2$. Since $0\le D\le1$, exact return implies $D=1$ and therefore $r_0=r_1$. 

□

 

The retained archive is essential. For an arbitrary branch-preserving isometry 

$$

 \Xi_a\longmapsto\Xi_a\otimes e_a,
 \qquad c=\langle e_0,e_1\rangle,

$$

 including every returned key and environment in $e_a$, the same two-dimensional calculation gives <a id="mat:allarchives"></a>


$$
\epsilon_p=\sqrt{p(1-p)}|1-c|,
 \quad d_{\rm arc}\le\sqrt{1-|c|^2},
 \quad \epsilon_p\ge\tfrac12\sqrt{p(1-p)}d_{\rm arc}^2.
 

$$

Equation (12.16).

 The last inequality follows from $|1-c|\ge1-|c|\ge(1-|c|^2)/2$. A later common unitary on a returning archive preserves the complete-state comparison. An unread reduced channel alone would not supply this guarantee. 

These elementary overlap inequalities are established Hilbert-space mathematics, recovered here inside an explicit contact. The new constitutive content is the full material field and its admitted transducers, not the algebraic inequality itself. A separately added ordinary classical writer of a nonlinear function of the source ray is excluded only by that material inventory premise. 



<a id="section-12-4"></a>

## 12.4 A distinct hybrid class: force supported by conversion

 

The following construction retains an ordinary classical canonical pair $(R,P)$ and a finite coherent source. It must therefore be kept separate from the complete material field above. Let $H(P)=H(P)^\dagger$ and let conversion maps $L_c(P)$ have material coefficients independent of the unknown vector. Define <a id="mat:KD"></a>


$$
K=\partial_PH,\qquad D=\sum_cL_c^\dagger L_c,
 \qquad F_\psi=\langle K\rangle_\psi,\quad h_\psi=\langle D\rangle_\psi.
 

$$

Equation (12.17).

 The source-blind free coordinate velocity is omitted from $F$. 



**Theorem 12.3 (Force–conversion domination).**

 <a id="mat:domination"></a> For fixed $P$ and $c\ge0$, the following are equivalent: <a id="mat:dominationeq"></a>


$$
\begin{aligned}|F_\psi|&\le c h_\psi\quad\hbox{for every unit ray},\\
 -cD&\le K\le cD,\\
 \ker D&\subseteq\ker K,\qquad
 \|D_{\rm supp}^{-1/2}K_{\rm supp}D_{\rm supp}^{-1/2}\|\le c.
 
\end{aligned}
$$

Equation (12.18, 12.19, 12.20).

 The equivalence holds under arbitrary inaccessible reference extension. If $D\ge\kappa_0E$, $D=EDE$ and $K=EKE$, it holds with $c=\|K\|/\kappa_0$. 

 

**Proof.**

Taking the two signs of the quadratic-form inequality gives the operator inequalities. If $x\in\ker D$, the positive operators $cD\pm K$ have zero quadratic form at $x$ and hence annihilate $x$, so $Kx=0$. On the support, conjugation by $D^{-1/2}$ makes the two inequalities equivalent to spectrum in $[-c,c]$. Reversing this argument proves sufficiency. Tensoring identities preserves order, and the final assertion follows from $|\langle K\rangle|\le\|K\|\langle E\rangle$. 

□

 

Merely setting the dark–dark block of $K$ to zero is insufficient: a dark–reactive cross block has expectation of order $\sqrt{\langle E\rangle}$ near a dark ray. The linear bound excludes that block too. The equivalence is explicit; it is a characterization of a response restriction, not its physical necessity. 



<a id="section-12-5"></a>

## 12.5 A common binding level that still writes a null likelihood

 

Let $A$ be a source projector, let $g,e,b$ label ground, reactive, and spent modes, and put 

$$

 E=A\otimes|e\rangle\langle e|,
 \qquad X=A\otimes(|e\rangle\langle g|+|g\rangle\langle e|).

$$

 The single contact has <a id="mat:hybridH"></a>


$$
H(P)=\hbar[gX+(\Delta+\beta P)E],\qquad
 L=\sqrt\kappa A\otimes|b\rangle\langle e|,
 \quad D=\kappa E.
 

$$

Equation (12.21).

 Its declared hybrid actualization law is <a id="mat:hybridlaw"></a>


$$
\begin{aligned}\dot\psi&=[-iH(P)/\hbar-\tfrac12(D-\langle D\rangle_\psi)]\psi,\\
 \dot R&=P/M+\hbar\beta\langle E\rangle_\psi,\quad\dot P=0,\\
 h_\psi&=\kappa\langle E\rangle_\psi,\qquad
 \psi^+=L\psi/\|L\psi\|.
 
\end{aligned}
$$

Equation (12.22, 12.23, 12.24).

 One capture consumes the channel; the accumulated coordinate remains. The normalized-history canonical force and stochastic extraction are primitive equations here. In particular, they have not been obtained from a unitary bath while silently treating its pointer as classical. 

The same bound level supplies both responses: <a id="mat:commonresponse"></a>


$$
\dot R-P/M=(\hbar\beta/\kappa)h_\psi.
 

$$

Equation (12.25).

 This is a nonempty realization of Theorem [12.3](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:domination), with no direct incoming dark-sector tap. It has a finite exact resolvent self-energy 

$$

 \Sigma(z,P)=\frac{g^2}{z-\Delta-\beta P+i\kappa/2},
 \quad -2\operatorname{Im}\Sigma(E,P)
   =\frac{g^2\kappa}{(E-\Delta-\beta P)^2+\kappa^2/4}.

$$

 Both virtual dispersion and real loss remain present. A time-local elimination of the bound mode would require a further approximation; none is needed below. 

For $p=\|A\Xi\|^2$, define exact bright amplitudes <a id="mat:bright"></a>


$$
\binom{u_P(t)}{e_P(t)}=
 \exp\left[t\begin{pmatrix}0&-ig\\-ig&-\kappa/2-i(\Delta+\beta P)\end{pmatrix}\right]
 \binom10,
 \quad a_P=|u_P|^2+|e_P|^2.
 

$$

Equation (12.26).

 Then $a_P'=-\kappa|e_P|^2$ and the unnormalized null vector and its mass are 

$$

 \zeta_p=(I-A)\Xi\otimes g+A\Xi\otimes(u_Pg+e_Pe),
 \qquad N_p=1-p+pa_P.

$$

 The capture density is $p\kappa|e_P(t)|^2dt$, with daughter $A\Xi/\sqrt p$ in the spent mode. The null daughter is $\zeta_p/\sqrt{N_p}$. Zero-mass daughters are never normalized. 



**Proposition 12.4 (Null-likelihood writer).**

 <a id="mat:nullwriter"></a> Before the first capture, the actual classical pointer in [(12.24)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:hybridlaw) satisfies <a id="mat:logwriter"></a>


$$
R(t)=R(0)+Pt/M-\frac{\hbar\beta}{\kappa}\log N_p(t).
 

$$

Equation (12.27).

 For $0<a_P(T)<1$ this gives a strictly increasing nonlinear response to $p$ on an actual null branch of positive mass. 

 

**Proof.**

The normalized reactive population is $p|e_P|^2/N_p$, so $\partial_t\log N_p=-h_\psi$. Integration of [(12.25)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:commonresponse) gives [(12.27)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:logwriter). The first and second derivatives of $-\log(1-p+pa)$ are $(1-a)/(1-p+pa)$ and $(1-a)^2/(1-p+pa)^2$, both positive when $a<1$. 

□

 

This countermodel is more restrictive than an independent force tap: it requires actual reactive support and a fixed ratio between force and hazard. Its failure cannot be repaired by mentioning reciprocal backaction without changing its equations. 



<a id="section-12-6"></a>

## 12.6 A complete finite counterexperiment

 <a id="mat:counterexperiment"></a> 

Use three fresh binding labels on the same unknown carried vector, addressing $A_0=I$, $A_1=A$, $A_2=I-A$ in sequence. A first capture blocks further contacts. After two nulls read and copy a function of the first two pointers; the third contact is a later return test, not a condition for retaining the copy. At each exposure end switch off both exchange and conversion, retaining any excited residue. Take $\hbar=\beta=\kappa=M=1$, $\Delta=0$ and <a id="mat:parameters"></a>


$$
T=2\log2,\qquad g=\sqrt{1/16+\pi^2/(4\log^22)},
 \quad \omega=\sqrt{g^2-1/16}=\pi/T.
 

$$

Equation (12.28).

 At $P=0$, 

$$

 u(t)=e^{-t/4}[\cos\omega t+\sin\omega t/(4\omega)],\quad
 e(t)=-ie^{-t/4}(g/\omega)\sin\omega t,

$$

 so $(u(T),e(T))=(-1/\sqrt2,0)$ and $a=1/2$. 

Compare the actual preparation laws <a id="mat:ensembles"></a>


$$
\begin{aligned}\mathcal E_B &: |0r_0\rangle\ (2/3),\quad |1r_1\rangle\ (1/3),\\
 \mathcal E_S &: \sqrt{2/3}|0r_0\rangle\pm\sqrt{1/3}|1r_1\rangle
                      \quad(1/2\text{ each}),
 
\end{aligned}
$$

Equation (12.29, 12.30).

 with $r_0,r_1$ orthogonal inaccessible reference states and $A=|0\rangle\langle0|$. These have equal averaged density matrices but different complete ray laws. No active preparation label is supplied to the apparatus; if one is supplied it must stay represented. 

With offsets and free drifts initially zero, the two-null pointer ratio is 

$$

 z(p)=\frac{\log(1-p+p/2)}{\log(1/2)},
 \qquad z(0)=0,\ z(1)=1,\ z(2/3)=\log_2(3/2).

$$

 A smooth finite plate equal to one on $[0.45,0.72]$, and zero near 0 and 1, is enabled only after two actual nulls. It is evaluated away from the denominator cutoff $R_0>1/2$. Its output is copied to an ordinary classical memory by the stipulated downstream mechanical contact. 



**Theorem 12.5 (Persistent finite gap with all stopping branches retained).**

 <a id="mat:finitegap"></a> The copied bit has probabilities $\Pr_B(C=1)=0$ and $\Pr_S(C=1)=1/3$. The four stopping branches for a fixed $p$ have masses <a id="mat:fourbranches"></a>


$$
\tfrac12,\qquad\tfrac p4,\qquad\tfrac{1-p}4,\qquad\tfrac14.
 

$$

Equation (12.31).

 On the triple-null branch the normalized original source/reference vector is exactly restored, while the already acquired copy survives. 

 

**Proof.**

For arbitrary bright survivals $a_0,a_1,a_2$, successive norm loss gives masses 

$$

 1-a_0,\quad a_0p(1-a_1),\quad a_0(1-p)(1-a_2),
 \quad a_0[pa_1+(1-p)a_2].

$$

 They sum to one for every $p$. Setting $a_j=1/2$ proves [(12.31)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:fourbranches). The acquisition branch has mass $a_0(1-p+pa_1)$. Its value for $p=2/3$ is $1/3$, while the classifier is zero for both basis rays. For triple null, with $u=-1/\sqrt2$, the source maps are $uI$, $uA+(I-A)$, and $A+u(I-A)$. Their product is $u^2I=I/2$. Thus the return probability is $1/4$ for every ray, including every inaccessible reference extension. 

□

 

The continuous output is also fixed. Let 

$$

 N_j(t)\Xi=(I-A_j)\Xi\otimes g_j+A_j\Xi\otimes v_{P_j}(t),
 \quad J_j(t)\Xi=\sqrt\kappa e_{P_j}(t)A_j\Xi\otimes b_j.

$$

 The four unnormalized maps are <a id="mat:completekernel"></a>


$$
J_0(t),\quad J_1(t)N_0(T),\quad
 J_2(t)N_1(T)N_0(T),\quad N_2(T)N_1(T)N_0(T).
 

$$

Equation (12.32).

 Their squared norms are respectively time densities or the final null atom. For each history integrate [(12.24)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:hybridlaw) to its actual stopping time and retain the resulting pointers, clocks, flags, energy account, unused supplies, and copies. Although each source map in [(12.32)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:completekernel) is linear at fixed readiness, the full classical output depends nonlinearly on the input ray through [(12.27)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:logwriter). Dropping that output is not a valid complete-instrument comparison. 

The counterexample is stable at strictly positive phase volume. Independently prepare $|P_j|\le10^{-4}$ and $|R_j(0)|\le10^{-3}$. For total apparatus horizon $3T+12$, 

$$

 \|v_P(t)-v_0(t)\|\le|P|t,\quad
 |a_P(T)-1/2|\le d:=2T10^{-4},\quad
 |\delta R_{\rm free}|\le10^{-3}+10^{-4}(3T+12).

$$

 These follow by Duhamel for contraction propagators and direct integration of free velocity. Substitution into the logarithmic expressions bounds the attained ratio intervals by 

$$

 \begin{array}{c|c}
 p& R_1/R_0\\\hline
 0&[-0.003792,0.003792]\\
 1&[0.99089,1.00920]\\
 2/3&[0.57814,0.59185]
 \end{array}

$$

 and $R_0>0.6899$. An additional ratio error $0.02$ leaves all classifications fixed. If $\bar a$ denotes the exact average of $a_P(T)$ over the supplied momentum law, then <a id="mat:positivewidth"></a>


$$
\Pr_S(C=1)=\bar a(1/3+2\bar a/3),\qquad
 \Pr_S(NNN,C=1)=\bar a^2,
 

$$

Equation (12.33).

 while both basis probabilities remain zero. Triple-null unnormalized error is at most $\epsilon=3T10^{-4}$; its normalized complete source/reference/binding trace distance from the returned ray is at most $\epsilon/(1/2-\epsilon)<0.000833$. The finite-width estimates condition uniformly on each supported readiness, so postselection does not invalidate them. 

The physical conclusion is limited and useful: reactive support plus common force/conversion coefficients does not force complete record affinity. A stochastic resource that compensates energy at capture is a supplied law in this hybrid model, not an independently derived bath. A separately admitted finite-stirring carrier realization [[M27](/quantum-measurement/monograph/bibliography#bib-M27)] supplies its native paths; its renewal and chamber-volume premises are not consequences of the null-writer theorem.
