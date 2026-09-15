# Chapter 31: Noncommuting tests and rival actual motions

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

<a id="mc:chapter-tests"></a> 

An endpoint Born weight is too weak a test of the complete construction. The following experiment keeps pending excitation, loss products, copied records, a reset receiver and an inaccessible reference through a second, noncommuting operation. The rival processes then show exactly what the constitutive motion law selects beyond one-time equilibrium and reliable macroscopic records. 



<a id="section-31-1"></a>

## 31.1 A full finite measurement and continuation example

 <a id="mc:sec:example"></a> Use $P_a$ as $Z$ projectors and set 

$$

 \theta=\pi/3,\qquad\varphi=\pi/4,\qquad\eta=2/3.

$$

 The receptor weights are exactly <a id="mc:eq:exampleweights"></a>


$$

 (P_r,P_p,P_c,P_l)=(1/4,3/8,1/4,1/8).

$$

Equation (31.1).

 Take one unknown source with an inaccessible two-dimensional reference: <a id="mc:eq:inputexample"></a>


$$

 \psi=\sqrt{2/3}{\lvert0\rangle}{\lvert0\rangle}_R+
                       \sqrt{1/3}{\lvert1\rangle}{\lvert+\rangle}_R,\qquad
 {\lvert+\rangle}_R=({\lvert0\rangle}_R+{\lvert1\rangle}_R)/\sqrt2.

$$

Equation (31.2).

 The reduced source coherence is $\rho_{01}=1/3$. Neither independent copies nor reference control are used. 



<a id="section-31-1-1"></a>

### 31.1.1 Null followed by an incompatible measurement

 The ideal orthogonal-record null map is $\mathcal N(\rho)=\rho/4+\mathcal D_Z(\rho)/2$, with trace $3/4$; its retained coherent null is the vector [(29.4)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:nullvector). A later $X$ probe in this ideal comparator gives <a id="mc:eq:nullnumbers"></a>


$$

 {\mathbb P}(N,X+)=\frac{11}{24},\qquad
 {\mathbb P}(X+\mid N)=\frac{11}{18},\qquad
 \sigma_R^{N,+}=\frac1{48}
               \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (31.3).

 To verify, write ${\langle+_x\rvert}\psi=\sqrt{1/3}{\lvert0\rangle}_R+\sqrt{1/6}{\lvert+\rangle}_R$ and apply [(29.5)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:nullmap) term by term, or expand [(29.4)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:nullvector) and trace only the named $D$ factor. The trace of the displayed matrix is $11/24$; its normalized reference state is the matrix with entries $19,5,5,3$ divided by $22$. For $X-$ the unnormalized reference state is 

$$

 \sigma_R^{N,-}=\frac1{48}\begin{pmatrix}11&1\\1&3\end{pmatrix},
 \quad{\mathbb P}(N,X-)=7/24.

$$

 Their sum is $(3/4)\rho_R$, an explicit reference consistency check. A frozen original input would instead give ${\mathbb P}(X+\mid N)=5/6$; a fully $Z$-dephased daughter would give $1/2$. Both fail this finite experiment. 



<a id="section-31-1-2"></a>

### 31.1.2 Captured copy, reset, spatial feedback and a second record

 Copy the captured label, retain its spatial archive, reset $D$ by [(29.9)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:covariantreset), keeping $D'$, and use 

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

  They sum to capture probability $1/4$. Reference daughters are ${\lvert0\rangle}_R$ and ${\lvert+\rangle}_R$, respectively. Literal spatial feedback uses the smooth $g(y)B$ contact, with $B=(\pi\hbar/(6t_f))\sigma_y$, and the bound [(29.11)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:feedbackbound). The copied archive remains held while the working pointer can recoil. Thus the exact table is the ideal target with explicit finite classifier, feedback and clock errors, not an assertion that finite Gaussian records are orthogonal. 



<a id="section-31-1-3"></a>

### 31.1.3 A complete reversal remains a different experiment

 In the driven bank, if every response, source gate, copy and spatial write is coherently undone with all receiving systems, that full bank wave returns to its input, up to a known common phase. Resetting only $D$ while a copy or $D'$ survives does not achieve that return. A later incompatible probe distinguishes the two retained states. No global projection has been inserted at a declaration. In the finite autonomous realization the controller also remains in the complete state: its recoil and entanglement are bounded by the clock comparison, not claimed to be exactly undone by these apparatus inverse pulses. 

An inverse need not negate a massive kinetic energy. For the piecewise constant half-period alternative to [(28.8)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:quintic), a trap centred at $aL/2$ sends a ground packet centred at zero to one centred at $aL$ in time $\pi/\omega$. Each conditional oscillator has common equally spaced spectrum, so evolution for $2\pi/\omega$ is $-I$. Evolving for a complementary positive duration realizes the inverse, up to a common phase. Finite internal gate inverses reverse a bounded matrix term. Smooth forced displacements can likewise be undone on the specified coherent packets by a reversed centre trajectory and known phase correction. A claim of inversion on an arbitrary oscillator state would require its full propagator rather than this restricted packet identity. 



<a id="section-31-1-4"></a>

### 31.1.4 Independent verification

 Exact symbolic calculations checked the full $S\otimes R\otimes D$ vector, resource unitarity, all four status weights, both null reference matrices, the four feedback probabilities, the complete SWAP export and the noncommuting transported-trap identity. All 32 exact checks passed. These finite calculations are checks of the displayed proofs, not substitutes for them. 

For the exact quintic writer with $\hbar=\sigma=T_w=1$, $\omega T_w=\pi$, $M=1/(2\pi)$, $L=8$, and $p_1=0.65$, direct quadrature and inverse-CDF calculations give 

| Quantity | Value |
| --- | --- |
| Initial right-tail atom | $0.0000316712418$ |
| Later threshold crossing | $0.649958827386$ |
| Final no-crossing null | $0.350009501373$ |
| Sum | $1.000000000000$ |

  The symbolic Schrödinger residual is exactly zero. An independent finite-difference evaluation had relative residual below $2.0\times10^{-7}$; the quantile ODE residual was below $1.8\times10^{-9}$ and the first-passage quadrature discrepancy below $3.4\times10^{-16}$. Figure [28.1](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:fig:mechanism) uses these parameters. No simulation evidence is used to assert a universal event-law selection. 



<a id="section-31-2"></a>

## 31.2 Rival actual motions and the selection obligations

 <a id="mc:sec:rivals"></a> The strongest candidate must survive a rival that preserves more than endpoint Born weights. We give such a rival and state precisely what it defeats. 



<a id="section-31-2-1"></a>

### 31.2.1 Same local net current, mutually singular paths

 For a smooth positive density of the same complete wave, define an equivariant diffusion by <a id="mc:eq:diffusion"></a>


$$

 dQ_t=\left(\frac j\rho+D\nabla\log\rho\right)(Q_t,t)dt
                                   +\sqrt{2D}\,dW_t,
 \qquad D>0.

$$

Equation (31.4).

 Its Brownian innovations are an explicit additional stochastic premise. The Fokker–Planck current is $\rho b-D\nabla\rho=j$, so it matches even the local current, not just its divergence. We only assert its global existence where checked below; this is an equivariant diffusion rival, not a claim that every axiom of Nelson's stochastic mechanics has been derived. 

For a stationary harmonic ground-state pointer centred at zero, the adopted theory has $\dot Q=0$. The rival is the globally well-posed Ornstein–Uhlenbeck process 

$$

 dQ=-D Q\,dt/\sigma^2+\sqrt{2D}\,dW.

$$

 It has the identical invariant Gaussian density but moves at positive times. More strongly, on any $T>0$ its path law and the adopted guidance path law have TV distance one: Brownian diffusion paths have quadratic variation $2DT$, whereas the absolutely continuous guidance paths have zero. These are disjoint measurable path events. The comparison does not require an experimentally admitted passive quadratic-variation meter. 



**Proposition 31.1 (Reliable macroscopic records do not remove the rival).**

<a id="mc:prop:rivalarchive"></a> Use the same semibounded Hamiltonian 

$$

 H=\frac{p^2}{2M}+\frac{M\omega^2}{2}(x-a\sigma_z)^2

$$

 and the equal superposition of its two spin-labelled ground packets. Its stationary density is 

$$

 \rho(x)=\tfrac12g_\sigma(x-a)+\tfrac12g_\sigma(x+a),\qquad j=0.

$$

 The adopted configuration is fixed. The diffusion [(31.4)](/quantum-measurement/monograph/noncommuting-tests-and-rival-actual-motions#mc:eq:diffusion) has smooth globally Lipschitz drift 

$$

 b_D(x)=\frac D{\sigma^2}\left[-x+a\tanh\left(\frac{ax}{\sigma^2}\right)\right]

$$

 and invariant law $\rho$. For $a\ge2\sigma$, the probability it changes the sign record during $[0,T]$ is no greater than <a id="mc:eq:rivalbound"></a>


$$

 \min\left\{1,\frac{a+4DT/a}{\sqrt{2\pi}\sigma}
                         e^{-a^2/(8\sigma^2)}\right\}.

$$

Equation (31.5).

 

 

**Proof.**

Set $b=a/2$ and $f(x)=(1-|x|/b)_+$. On $(0,b)$, $\rho'\ge0$: the sign is that of $a\tanh(ax/\sigma^2)-x$, a concave function vanishing at zero and positive at $b$ for $a\ge2\sigma$. Thus $f'b_D\le0$ on both sides of the central interval. Stop at the first hit $\tau$ of zero. The Itô–Tanaka formula gives only nonpositive interior drift and a nonpositive local-time contribution at zero; its positive contributions are $(L_{T\wedge\tau}^{-b}+L_{T\wedge\tau}^{b})/(2b)$. Since $f(Q_{T\wedge\tau})\ge1_{\{\tau\le T\}}$ and stationarity gives ${\mathbb E} L_T^x=2DT\rho(x)$, 

$$

 {\mathbb P}(\tau\le T)\le{\mathbb E} f(Q_0)+\frac{DT}{b}[\rho(-b)+\rho(b)]
 \le(2b+2DT/b)\rho(b).

$$

 Finally $\rho(b)\le e^{-a^2/(8\sigma^2)}/(\sqrt{2\pi}\sigma)$. Sign change requires a hit of zero, so the same bound applies. Existence and invariance follow directly from the displayed Lipschitz drift and the stationary Fokker–Planck equation. 

□

 Thus arbitrarily reliable finite-horizon records can coexist with mutually singular microscopic paths. The velocity postulate selects the adopted law *within the new theory*; record success does not independently force that postulate. Deterministic divergence-free changes provide further rivals: in an isotropic real two-dimensional Gaussian, $v_\Omega=\Omega(-y,x)$ preserves the same density while changing a sign record with probability $\Omega T/\pi$ for $0\le\Omega T\le\pi$. This particular rotor is a counterexample to inference from continuity, not a proposed fully symmetry-constrained replacement. More general quantum-equivalent deterministic alternatives are established in primary work [[DG98](/quantum-measurement/monograph/bibliography#bib-mc:Deotto)]. 



<a id="section-31-2-2"></a>

### 31.2.2 A finite discrete rival with a sharp complete-path discriminator

 On the book's finite graph, let <a id="mc:eq:etarates"></a>


$$

 \lambda^{(\eta)}_{Y\leftarrow X}=
 \frac{{[J_{YX}]_+}+\eta|J_{YX}|}{w_X},\qquad\eta\ge0.

$$

Equation (31.6).

 It preserves individual net currents, support and equilibrium and remains Markov. On a binary monotone write with $u=\sin^2(gt)$, the rates per $du$ are $(1+\eta)/(1-u)$ forward and $\eta/u$ backward. The wave weights are $1-u,u$, its final state is 1, and expected total jump count is $1+2\eta$; integrability of this count and vanishing nodal holding survival give a nonexplosive path law. 

A path with exactly one jump at $u$ has density 

$$

 (1-u)^{1+\eta}\frac{1+\eta}{1-u}
       \exp\left[-\int_u^1\frac\eta s ds\right]
 =(1+\eta)[u(1-u)]^\eta.

$$

 The Bell law has exactly one jump, uniform in $u$. Since $(1+\eta)4^{-\eta}\le1$, the common mass of the two path measures is precisely the integral of this rival one-jump density. Therefore <a id="mc:eq:exactTV"></a>


$$

 {d_{\mathrm{TV}}}(P_\eta,P_{\rm B})=1-(1+\eta)\mathrm B(1+\eta,1+\eta),
 \qquad{d_{\mathrm{TV}}}(P_1,P_{\rm B})=\frac23.

$$

Equation (31.7).

 This is a concrete surviving balanced-traffic countermodel with exact Born endpoints. It is not an independently selected new event mechanism. It confirms why endpoint agreement, even with correct individual net currents, would be insufficient to claim Bell closure. 



<a id="section-31-2-3"></a>

### 31.2.3 Obligation-by-obligation verdict in the adopted continuum

 

1. **Individual current realization.** The kinetic-momentum postulate specifies the pointwise material current $j$. Equivariance and the flow derive expected net flux through each physical interface. There is no freely reassigned cycle current within that postulate. This does *not* identify those interfaces with arbitrary finite internal Hamiltonian matrix edges in [(1.4)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:bell).

2. **Surplus traffic.** At a regular point of an interface the velocity has one sign and actual crossings realize its local direction. If an entire interface is integrated or microscopic coordinates are omitted, opposite directions on different patches give 

$$

 F_+=\int_\Sigma{[j\cdot n]_+},\quad F_-=\int_\Sigma{[-j\cdot n]_+},\quad
 F_+-F_-=\int_\Sigma j\cdot n.

$$

 In general $F_+\ne[\int_\Sigma j\cdot n]_+$. Coarse countertraffic and recrossing can survive. Neither their absence nor graph Bell minimality is falsely claimed. No extra Brownian traffic is allowed by the stated mechanical law.

3. **Conditional timing.** Equations [(28.3)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:guidance) and [(28.6)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:pathlaw) give the whole path and every conditional history, including current reversals and nulls. The explicit physical-time first-passage example has a derived nonexponential law. Other waiting laws are different constitutions, not unresolved free choices inside this one. Coarse histories generally fail Markov closure and are not assigned Bell rates by projection.

 The alternative therefore closes the operational programme with a selected physical motion law and its material contacts. It gives up the original finite-sector microscopic claim rather than pretending to derive it. 



<a id="section-31-3"></a>

## 31.3 Dependencies and the surviving distinction

 <a id="mc:dependencies"></a> 

The shared source/readout representation and finite coherent gate algebra remain useful across constitutions. They become predictions only after a complete motion law and an admitted initial ensemble are specified. Within this part the dependency chain is 

$$

\begin{gathered}
 \text{massive Schr\"odinger inventory, kinetic-momentum motion}\\
 +\ \text{complete initial equilibrium and finite ready resources}\\
 \Longrightarrow\ \text{conservative complete paths and physical writes}\\
 \Longrightarrow\ \text{retained output and faithful sampled histories}
 \quad\text{with the bounds of Theorem~\text{30.5}.}
\end{gathered}

$$

 The exact driven storage theorem and the autonomous surface-current estimate replace an unsupported inference from final equilibrium to archive truth. The copy-cut transfer term is needed whenever an old declaration is moved to a receiver before its original pointer is reset. 



| Ingredient | Status in the massive constitution |
| --- | --- |
| Wave-current identities and coherent finite gates | Retained, with every source, material register and reference in the specified wave. Internal edge currents are not actual spin-jump currents. |
| Continuous configuration records | The guidance, quantile and endpoint logic of Chapter [25](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:chapter) is retained; positive kinetic energy, confining storage and a retained autonomous controller supply this part's stronger material realization. |
| Preparation | Complete initial equilibrium and a finite independent ready stock are supplied. A conditional subsystem preparation does not imply universal equilibrium or freshness after an exposed microscopic history. |
| Protection | The retained-bank gap estimate applies to bounded internal perturbations and commuting spatial spectators; arbitrary unbounded disturbances remain outside its hypotheses. |
| Copies, nulls, loss and reset | All coherent branches, original correlations and receiving systems are retained. A local ready appearance is not global erasure. |
| Final outputs and actual history | Complete retained-state trace bounds and held/transfer surface budgets are different estimates. Neither is promoted to arbitrary raw-path TV. |
| Finite Bell or pilot constitution | A different actual ontology and event mechanism. Shared gate matrices do not make its microscopic path the path derived in this part. |

  

Bohmian motion, equilibrium-conditioned measurement and the general existence mechanism have established provenance. The construction here uses them in a common finite semibounded resource model, with the exact forced writer, transported-trap reset and the controller graph-norm-to-archive-current estimate proved above. It establishes internal closure under the stated physical axioms and controlled finite-horizon implementation of ideal instruments. It does not establish the universal necessity of those axioms, preparation from arbitrary initial data, a relativistic completion, unlimited memory, or a perfect autonomous clock for all time. 

The diffusion rival demonstrates that even very reliable macroscopic archives do not single out this microscopic motion among all equivariant alternatives. It does not introduce an unspecified freedom inside the adopted motion law: once the initial configuration is fixed, every event and continuation in this constitution is fixed. This is the distinction between a demonstrated constitutive completion and a derivation of that constitution from the older interface alone.
