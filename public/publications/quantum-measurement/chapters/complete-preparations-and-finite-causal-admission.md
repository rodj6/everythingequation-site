# Chapter 17: Complete preparations and finite causal admission

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

<a id="cpc:chap:admission"></a> 

The results in this part concern an operational question upstream of the finite instrument construction: which aspects of a preparation can affect an actual record together with everything retained after it? Three distinct answers survive the corpus. Complete preparation consistency directly requires descent through a matrix-valued preparation readout. A finite absorbing tag supplies a weaker diagonal identity under a different physical constitution. Calibrated remote experiments, causal separation and uniform stability reconstruct instruments for an initially unknown writer. Their assumptions are stated separately; they are not three successive eliminations of the same premise [[M08](/quantum-measurement/monograph/bibliography#bib-M08), [M09](/quantum-measurement/monograph/bibliography#bib-M09), [M10](/quantum-measurement/monograph/bibliography#bib-M10), [M13](/quantum-measurement/monograph/bibliography#bib-M13), [M14](/quantum-measurement/monograph/bibliography#bib-M14)]. 



<a id="section-17-1"></a>

## 17.1 The complete bank and its proposed readout

 

Fix a finite coherent bank $\mathcal H_S$, of dimension $d$, containing every quantum memory that the declared programme can return. Classical data $c\in C$ contain actual clocks, controller states, provenance, allocations and future-active randomizer keys. An inaccessible reference $R$ is retained mathematically and receives no control. A source preparation is an actual probability measure $\nu(dc,d\psi)$ on classical states and normalized rays of the complete coherent bank. Its proposed readout is the positive matrix-valued measure <a id="cpc:eq:readout"></a>


$$
\pi(\nu)(B)=\int 1_{\{c\in B\}}|\psi\rangle\langle\psi|\,\nu(dc,d\psi).
 

$$

Equation (17.1).

 Ordinary randomization obeys the law of total probability. Equation [(17.1)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:readout) is a definition of a proposed readout, not a proof that it is sufficient. In particular, different ensembles with the same barycenter may still be distinct source preparations. 

An unknown writer produces an actual finite mark $a$ and a normalized retained ray $\xi$, including unsuccessful, null and exhausted branches. At a fixed complete classical input define <a id="cpc:eq:unknownwriter"></a>


$$
A_a(P)=\mathbb E_P[1_{\{a\}}|\xi\rangle\langle\xi|],\qquad
 P=|\psi\rangle\langle\psi|.
 

$$

Equation (17.2).

 These are positive matrices with $\sum_a\operatorname{tr}A_a(P)=1$. Their dependence on $P$ is initially unrestricted. No instrument, ensemble affinity or completely positive extension is implied by writing an algebraic average of actual daughters. 



**Definition 17.1 (Complete preparation consistency).**

 <a id="cpc:def:cpc"></a> For a specified apparatus and preparation domain, CPC requires that every finite declared event and its full unnormalized matrix continuation depend on $\nu$ only through [(17.1)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:readout). Reference-compatible CPC additionally requires local event maps to extend as $\mathcal T_E\otimes\operatorname{id}_R$, positively on every admitted joint input and finite reference. 

 

A preparation key which can later return belongs in $c$ or the coherent bank. Thus comparing a keyed eigenstate lottery with an unkeyed coherent preparation is not an application of CPC. Conversely, a hidden coordinate cannot be omitted merely because it is not displayed at the present cut. 



**Example 17.2 (A marginally invisible returning bit).**

 Let $C$ be a fair classical sign and $H$ a second sign. Preparations $H=C$ and $H=-C$ have the same separate marginals and the same fixed quantum ray. A later admitted writer $Z=CH$ distinguishes them perfectly. Keeping the joint distribution of $(C,H)$ repairs this particular omission; keeping only the two marginals does not. A finite visible bank is complete only relative to a proved interaction or causal-domain restriction. 

 



<a id="section-17-2"></a>

## 17.2 A reversible algebra law and its exact boundary

 

The corpus supplies a nonempty reversible constitution on the trivial algebra bundle $\mathfrak A=C^\infty(C,M_d(\mathbb C))$. The matrix product, classical center and preparation independence of transport are physical assumptions. They permit a useful exact statement [[M10](/quantum-measurement/monograph/bibliography#bib-M10)]. 



**Theorem 17.3 (Complete reversible transport).**

 <a id="cpc:thm:algebra"></a> Every regular preparation-independent $*$-derivation of $\mathfrak A$ has the form <a id="cpc:eq:derivation"></a>


$$
\mathcal D X(c)=v(c)\cdot\nabla X(c)+i[H(c),X(c)],\qquad H(c)=H(c)^\dagger.
 

$$

Equation (17.3).

 Here $v$ is a classical vector field; $H$ can be chosen trace zero. In particular a reversible classical velocity cannot depend independently on the unknown ray. 

 

**Proof.**

For every scalar $f$ and matrix section $X$, $[fI,X]=0$. Applying the derivation rule gives $[\mathcal D(fI),X]=0$, so $\mathcal D$ preserves the center. A regular derivation of smooth scalar functions is a vector field $v$. Subtracting $v\cdot\nabla$ leaves a $C^\infty(C)$-linear derivation on each full matrix fiber. Such derivations are inner. Adjoint preservation makes the inner generator $iH$ with $H$ Hermitian; the scalar ambiguity is removed by choosing trace zero. The trivial bundle and regularity make this choice a regular section. 

□

 

For a concrete realization solve $\dot\chi_t(c)=v(\chi_t(c))$ and $i\dot U_t(c)=H(\chi_t(c))U_t(c)$. Then $\alpha_tX(c)=U_t(c)^\dagger X(\chi_t(c))U_t(c)$ preserves products and adjoints. Moving clocks and classically controlled noncommuting gates are allowed. 

This excludes a precise competing interaction. A reciprocal hybrid Hamiltonian $h(\psi,\theta,p)=g\sin p\langle\psi|A|\psi\rangle$ gives <a id="cpc:eq:hybrid"></a>


$$
i\dot\psi=g\sin p\,A\psi,\qquad
 \dot\theta=g\cos p\langle A\rangle_\psi,\qquad \dot p=0.
 

$$

Equation (17.4).

 At $p=0$ it writes an expectation into a classical clock while leaving the ray unchanged. Its operator lift would require $\mathcal D(\sin\theta I)=gA$ at $\theta=p=0$, contradicting center preservation when $A$ is nonscalar. Using the scalar $\langle A\rangle$ instead makes transport preparation dependent. The rival is well defined in a different hybrid constitution. The theorem excludes it by a specific algebraic law, not by asserting that it would spoil CPC. Nor does the theorem select an irreversible stochastic writer. 



<a id="section-17-3"></a>

## 17.3 Finite remote calibration of an unknown writer

 

We now develop the causal route without assuming that [(17.1)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:readout) is sufficient for the unknown writer. The following admissions include an already selected finite native monitor. This route therefore reconstructs additional writers and their compatibility; it is not an independent derivation of the monitor used for calibration [[M09](/quantum-measurement/monograph/bibliography#bib-M09), [M10](/quantum-measurement/monograph/bibliography#bib-M10)]. 

For a bounded score in $[0,1]$ of the complete local writer and its later diagnostic, write $F_R(\Psi;\zeta)$ for its actual expectation on a joint ray. The exterior data $\zeta$ retain every relevant preparation and apparatus history. On a detached product input write $f(\psi)$ for the local expectation. Impose: 

1. The coherent preparations and remote gates below are physically admitted with the same complete local clock, resources and programme. The finite reference monitor has its stated actual likelihood and continuation.

2. The two remote settings, with their outputs unread locally and no transmitted or returning influence during the test, change the unconditioned local score by at most $\nu$.

3. Uniform stable separation holds: <a id="cpc:eq:stability"></a>


$$
|F_R(\Psi;\zeta)-f(\psi)|\le L\sqrt{1-|\langle\Psi,\psi\otimes r\rangle|^2}
 

$$

Equation (17.5).

 for every relevant product comparison, including the actual conditional exterior histories and resource preparations. A common modulus can replace $Lu$.

4. For the exact limiting conclusion, arbitrarily accurate finite reference monitors are available while the compared local physical age and programme stay fixed. A fixed resource ceiling supports only the finite-error conclusion.

 The stability assumption allows nonlinear source dynamics. For example, synchronous coupling of globally Lipschitz source SDEs gives $\mathbb E\|X_t-X'_t\|^2\le e^{(2L_b+L_\sigma^2)t}\|X_0-X'_0\|^2$; a Lipschitz final score therefore has a uniform continuity bound on a controlled preparation class. Bounds uniform only at each fixed hidden gain are insufficient. 

Let $\rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|=\sum_a\lambda_a|e_a\rangle\langle e_a|$, with $\lambda_a>0$, and prepare $\Omega_\rho=\sum_a\sqrt{\lambda_a}|e_a\rangle|a\rangle$. The columns <a id="cpc:eq:ensembleunitary"></a>


$$
U_{ia}=\frac{\sqrt{p_i}\langle e_a|\psi_i\rangle}{\sqrt{\lambda_a}}
 

$$

Equation (17.6).

 are orthonormal: this follows by evaluating $\rho$ between the eigenvectors. They extend to a unitary on a sufficiently padded reference and give $(I\otimes U)\Omega_\rho=\sum_i\sqrt{p_i}\psi_i\otimes|i\rangle$. This is a vector identity and a physical gate target. The unknown writer has not been assigned Born probabilities by this identity. 

Monitor the reference observable $B=\sum_i(i-1)\Delta|i\rangle\langle i|$ for time $T$ with gain $k$. The admitted native monitor, whose explicit construction appears in Chapter [18](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:chap:selection), supplies densities <a id="cpc:eq:finitecalibration"></a>


$$
g(y)=\sum_i p_i g_i(y),\quad g_i=N(2k(i-1)\Delta T,T),\qquad
 \Psi_y=\sum_i\sqrt{\frac{p_i g_i(y)}{g(y)}}\,\psi_i\otimes|i\rangle.
 

$$

Equation (17.7).

 Let $c(y)$ be the nearest-mean classifier and $\epsilon=2\Phi(-k\Delta\sqrt T)$, where $\Phi$ is the standard normal distribution function. Direct Gaussian integration and orthogonality of the reference labels give <a id="cpc:eq:calibrationerror"></a>


$$
\operatorname{TV}(\mathcal L(c(Y)),p)\le\epsilon,\qquad
 \mathbb E\bigl[1-|\langle\Psi_Y,\psi_{c(Y)}\otimes c(Y)\rangle|^2\bigr]\le\epsilon.
 

$$

Equation (17.8).

 Indeed the second integrand integrates to the actual classification error; each interior Gaussian contributes two tails, each endpoint one. The mixture index used to bound the first inequality is only a coupling variable, not an additional source selector. 



**Theorem 17.4 (Finite causal affinity).**

 <a id="cpc:thm:affinity"></a> Two eligible ensembles of the same matrix, compared through the above common preparation, satisfy <a id="cpc:eq:affinitydefect"></a>


$$
\left|\sum_i p_i f(\psi_i)-\sum_j q_j f(\varphi_j)\right|
 \le \nu+2(L\sqrt\epsilon+\epsilon).
 

$$

Equation (17.9).

 Under exact causality, uniform stable separation and a finite calibration ladder with $\epsilon\to0$, every such bounded score has the form $f(\psi)=\langle\psi|E|\psi\rangle$, $0\le E\le I$. A calibration reference of dimension $2d$ suffices for this exact score statement. 

 

**Proof.**

Insert $f(\psi_{c(Y)})$ between the actual remote-prepared score and the ensemble average. The first error is at most $L\sqrt\epsilon$ by [(17.5)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:stability), [(17.8)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:calibrationerror) and Jensen's inequality. The classifier-distribution error costs at most $\epsilon$ because $0\le f\le1$. Compare the two remote gates on the same purification and use the causal discrepancy $\nu$. This proves [(17.9)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:affinitydefect). 

For the limit, define $F(\rho)$ by any spectral ensemble, with at most $d$ members. The vanishing comparison defect makes the definition independent of the spectral choice. The union of spectral ensembles for two density matrices has at most $2d$ members and is comparable with a spectral ensemble of their mixture in the same padded reference. Thus $F$ is affine. Finite-dimensional duality represents it as $\operatorname{tr}(E\rho)$; its range supplies $0\le E\le I$. 

□

 

For a general separation modulus $\omega$, replace $L\sqrt\epsilon+\epsilon$ by $\epsilon+\inf_{0<u\le1}\{\omega(u)+\epsilon/u^2\}$, using Markov's inequality in [(17.8)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:calibrationerror). The exact limit is a theorem about a family of finite experiments. It does not claim exact sharp preparation at finite gain or grant an unbounded calibration ladder at fixed cost. 



<a id="section-17-4"></a>

## 17.4 Continuation, references and constructive finite repair

 

A finite output probe can recover continuation coordinates without imposing an ideal projection on the unknown daughter. For a projector $Q$ use a native diagnostic with gain $h$ and duration $\tau$. The smooth record score $s_c(y)=\Phi(c(y-h\tau))$, $c>0$, obeys <a id="cpc:eq:deconvolution"></a>


$$
\mathbb E[s_c(Y_\tau)\mid\xi]=e+v\langle\xi|Q|\xi\rangle,\quad
 e=\Phi\!\left(-\frac{ch\tau}{\sqrt{1+c^2\tau}}\right),\quad v=1-2e>0.
 

$$

Equation (17.10).

 This is the Gaussian convolution identity for the two eigenrecord laws. It uses no random postprocessing device. Calibration must hold on the actual histories produced by the unknown writer, not merely on an unrelated calibration ensemble. 

Apply Theorem [17.4](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:thm:affinity) to the mark indicator and mark times probe score. Equation [(17.10)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:deconvolution) then recovers each matrix coordinate of $A_a$. For a Polish raw-record space, use bounded continuous functions of the earlier record; finite regular matrix-valued measures are determined by those functions. Discontinuous bins require boundary control when only approximate continuity is available. 



**Theorem 17.5 (Exact operational reconstruction).**

 <a id="cpc:thm:exactcp"></a> Suppose the exact hypotheses of Theorem [17.4](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:thm:affinity) hold for all required complete writer-plus-probe scores, including retained references. Suppose further that pure product inputs have product continuation locality, $A_a^R(P\otimes Q)=A_a(P)\otimes Q$. Then there is a normalized CP instrument $\mathcal I_a$ with $A_a(P)=\mathcal I_a(P)$ and actual reference extension $A_a^R(P)= (\mathcal I_a\otimes\operatorname{id}_R)(P)$. 

 

**Proof.**

Probe deconvolution makes every coordinate affine. It extends uniquely to a Hermiticity-preserving linear map $\mathcal I_a$, positive by spectral decomposition of a positive input. Actual normalization gives $\sum_a\mathcal I_a^*(I)=I$. Repeating the causal argument on the entire input-plus-reference bank, with a further calibration reference, gives a positive linear map $\mathcal G_{a,R}$ for its actual output. Product locality identifies it with $\mathcal I_a\otimes\operatorname{id}_R$ on product density matrices, which span the Hermitian tensor space. Positivity for a reference of input dimension implies complete positivity. This also identifies the actual extension, rather than merely constructing one possible CP extension. 

□

 

The following finite theorem removes the need to claim exact reconstruction from finite-accuracy comparisons. Let the local output dimension be $n$ and the number of marks $m$. Suppose equal-density ensemble comparisons have trace-norm defect at most $D_0$ for each $A_a$ and $D_1$ for each actual $A_a^R$, where $\dim R=d$. Comparisons involving at most $d^2+1$ and $d^4+1$ pure states respectively suffice. Retain pure-product continuation locality, but impose no linear tensor extension on entangled inputs. Set <a id="cpc:eq:repairconstants"></a>


$$
\begin{aligned}c_j&=1+\sqrt2(j-1),&\eta_0&=c_dD_0,&\eta_1&=c_{d^2}D_1,\\
 K_d&=8d-7,&\zeta&=\eta_1+K_d(\eta_0+\eta_1),&
 \tau_0&=m\eta_0+md\zeta.
 
\end{aligned}
$$

Equation (17.11).

 



**Theorem 17.6 (Finite instrument repair).**

 <a id="cpc:thm:repair"></a> If $\tau_0<1$, a normalized CP instrument $\{\mathcal I_a\}$ satisfies, uniformly on pure inputs, <a id="cpc:eq:repairlocal"></a>
<a id="cpc:eq:repairref"></a>


$$
\begin{aligned}\sum_a\|A_a(P)-\mathcal I_a(P)\|_1
 &\le\delta_0:=\frac{2\tau_0}{1-\tau_0},\\
 \sum_a\|A_a^R(P)-(\mathcal I_a\otimes\operatorname{id})(P)\|_1
 &\le\delta_R:=m\zeta+md\zeta+
 \frac{(1+\tau_0)\tau_0}{1-\tau_0}.
 
\end{aligned}
$$

Equation (17.12, 17.13).

 The same inequalities hold after averaging actual preparation distributions. The theorem asserts operational approximation on the stated complete bank, not microscopic linearity. 

 

**Proof.**

Use the $d^2$ projectors onto $|i\rangle$, $(|i\rangle+|j\rangle)/\sqrt2$ and $(|i\rangle+i|j\rangle)/\sqrt2$ as a real Hermitian basis. A pure projector $P$ has a signed expansion $P=\sum_b t_bB_b$, with $\sum_b t_b=1$. Its off-diagonal coefficients are $2\operatorname{Re}P_{ij}$ and $-2\operatorname{Im}P_{ij}$. Their total absolute sum is at most $\sqrt2(d-1)$ because $\sum_{i<j}|P_{ij}|\le(d-1)/2$. The diagonal corrections add no more than the same amount to the original diagonal sum one. Hence $\sum_b|t_b|\le1+2\sqrt2(d-1)$, and the positive coefficient sum is at most $c_d$. 

Interpolate a Hermiticity-preserving linear $L_a$ by $L_a(B_b)=A_a(B_b)$. Moving the negative coefficients to the other side of the projector identity gives equal-density convex ensembles after division by the common mass, at most $c_d$. Therefore $\|A_a(P)-L_a(P)\|_1\le\eta_0$. In dimension $d^2$ obtain a linear $G_a$ within $\eta_1$ of $A_a^R$. Product locality gives 

$$

 \|[G_a-L_a\otimes\operatorname{id}](P\otimes Q)\|_1\le\eta_0+\eta_1.

$$

 A Schmidt projector has a signed expansion into product pure projectors with coefficient absolute sum at most $K_d$. To verify the stated conservative constant, write its off-diagonal pair as $\sqrt{\lambda_i\lambda_j}(X_{ij}\otimes X_{ij}-Y_{ij}\otimes Y_{ij})/2$. Each Hermitian $X_{ij}$ or $Y_{ij}$ has a pure-projector expansion with absolute coefficient sum at most four. Including diagonal products gives $1+16\sum_{i<j}\sqrt{\lambda_i\lambda_j}\le1+8(d-1)=K_d$. The Schmidt bases on the two factors may differ. Thus $L_a\otimes\operatorname{id}$ is within $\zeta$ of the actual positive output on every pure joint input. 

Let $|\Omega\rangle=d^{-1/2}\sum_i|ii\rangle$ and $J_a=d(L_a\otimes\operatorname{id})(|\Omega\rangle\langle\Omega|)$. Its distance from a positive matrix is at most $d\zeta$, so $\operatorname{tr}J_a^-\le d\zeta$. Replace $J_a$ by its positive part, obtaining a CP map $L_a^+$. The correction is CP and has diamond norm at most $\operatorname{tr}J_a^-\le d\zeta$: the diamond norm of a CP map is $\|\Lambda^*(I)\|$, bounded by its Choi trace. 

Set $T=\sum_a(L_a^+)^*(I)$. Actual normalization and the local interpolation bound give $\|T-I\|\le m\eta_0+md\zeta=\tau_0<1$. Thus 

$$

 \mathcal I_a(X)=L_a^+(T^{-1/2}XT^{-1/2})

$$

 is defined, CP and normalized. For $S=T^{-1/2}$, 

$$

 \|S(\cdot)S-\operatorname{id}\|_\diamond
 \le\|S-I\|(\|S\|+1)\le\frac{\tau_0}{1-\tau_0}.

$$

 The direct-sum map $(L_a^+)_a$ has diamond norm $\|T\|\le1+\tau_0$. Adding interpolation, Choi correction and normalization yields $\tau_0+(1+\tau_0)\tau_0/(1-\tau_0)=2\tau_0/(1-\tau_0)$ locally. On the reference bank the initial interpolation term is $m\zeta$, giving [(17.13)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:repairref). 

□

 

Finite probes make the defect assumptions quantitative. If every relevant causal score has defect $\Delta=\nu+2(L\sqrt\epsilon+\epsilon)$, then [(17.10)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:deconvolution), applied also to the mark probability, bounds each rank-one matrix coordinate by $(1+e)\Delta/v$. The Hermitian operator norm is the supremum over such coordinates, so <a id="cpc:eq:finiteprobeerrors"></a>


$$
D_0\le\frac{n(1+e)}{v}\Delta_0,\qquad
 D_1\le\frac{nd(1+e_R)}{v_R}\Delta_1.
 

$$

Equation (17.14).

 These are uniform constitutive bounds over the admitted projector family. Finitely many observed frequencies do not certify them for an arbitrary unknown nonlinear writer. 



**Corollary 17.7 (Finite adaptive record trees).**

 <a id="cpc:cor:tree"></a> At each cut of a finite $N$-stage programme retain its complete bank and suppose [(17.13)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:repairref) holds uniformly over the actual conditional preparation class, with error $\delta_{R,j}$. Define the comparison CP suffixes on every branch, including branches with zero actual probability. Then the declared finite record trees obey <a id="cpc:eq:treeerror"></a>


$$
\operatorname{TV}(P_{\rm actual},P_{\rm CP})\le\frac12\sum_{j=1}^N\delta_{R,j}.
 

$$

Equation (17.15).

 

 

**Proof.**

Replace the last writer first and continue backwards. At each replacement the prefix remains an actual source experiment; the suffix is a normalized CP programme and hence a contractive effect on the common retained bank. The uniform complete output trace-norm error changes every subsequent event probability by at most $\delta_{R,j}/2$. Summing the replacement errors proves the claim. No contractivity of an unknown nonlinear suffix is used. 

□

 

This is a finite record-tree theorem, not continuous-path total variation from finitely many matrix fits. For a declared event of actual probability $p>0$, conditioning a joint-law error $\delta$ can cost up to $2\delta/p$ when the comparison probability is positive. Rare branches require their own control. 

Two tests protect the assumptions. First, transpose is positive locally but its tensor extension sends a Bell projector to a matrix negative on the antisymmetric ray; product locality and complete-reference affinity cannot be replaced by marginal no-signalling. Second, a rank-sensitive response which agrees with the required law for every nonproduct input but changes discontinuously at products defeats a finite calibration ladder without uniform stable separation. Neither test licenses imposing causality separately at inaccessible hidden values.
