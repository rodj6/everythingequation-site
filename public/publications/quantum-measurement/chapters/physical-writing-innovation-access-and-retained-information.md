# Chapter 19: Physical writing, innovation access and retained information

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

<a id="cpc:chap:access"></a> 

There are two complementary access theorems. The first uses the complete CP instrument already derived or independently admitted and its efficient record. The second uses an explicit linear Gaussian coupling class to calculate the disturbance of a source-blind correlated auxiliary output. Neither theorem establishes universal source admission from source/readout incompleteness [[M08](/quantum-measurement/monograph/bibliography#bib-M08), [M09](/quantum-measurement/monograph/bibliography#bib-M09), [M13](/quantum-measurement/monograph/bibliography#bib-M13)]. 



<a id="section-19-1"></a>

## 19.1 Passive refinement of a complete efficient record

 

Let $\mathcal I(dy)(\rho)=M_y\rho M_y^\dagger\mathbb Q(dy)$ retain the complete efficient record and every future-active quantum resource. An additional CP port $\mathcal J(dy,dz)$ is passive only if $\int\mathcal J(dy,dz)=\mathcal I(dy)$ on every input and inaccessible reference. This is equality of the full record-and-continuation instrument, not merely equality of its unread channel. 



**Theorem 19.1 (Efficient passive refinement).**

 <a id="cpc:thm:refinement"></a> On standard Borel output spaces there is a state-independent classical Markov kernel $k(dz\mid y)$ such that <a id="cpc:eq:passivekernel"></a>


$$
\mathcal J(dy,dz)(\rho)=k(dz\mid y)M_y\rho M_y^\dagger\mathbb Q(dy).
 

$$

Equation (19.1).

 

 

**Proof.**

The positive Choi measure of $\mathcal J$ has marginal $|M_y\rangle\!\rangle\langle\!\langle M_y|\mathbb Q(dy)$, using matrix vectorization. Disintegrate its finite scalar trace measure over $y$. The conditional positive matrices average to a rank-one matrix. Every quadratic form orthogonal to its range is nonnegative with integral zero, hence vanishes almost everywhere. Each conditional Choi matrix is therefore a nonnegative scalar multiple of that rank-one matrix. Normalization supplies the kernel. Null $y$ sets can be assigned arbitrarily. Invertibility of $M_y$ is unnecessary. 

□

 

A classical copy, coarse-graining or independent randomized processing of $Y$ realizes the kernel. The theorem fails if one first forgets part of the efficient record or traces a returning archive: the resulting instrument can have higher Kraus rank. It also does not apply to a previously written extra memory unless its writing was included in the same instrument. 



**Corollary 19.2 (No information from preserving a whole pure preparation class).**

 <a id="cpc:pure-class"></a> Let $\mathcal I_a$ be a fixed finite-dimensional CP outcome map on a subspace $\mathcal K$, retaining that same subspace. If for every unit $\psi\in\mathcal K$ its output is a nonnegative multiple of $|\psi\rangle\langle\psi|$, then 

$$

 \mathcal I_a(\rho)=p_a\rho\quad\hbox{on }\mathcal K

$$

 for an input-independent constant $p_a\geq0$. The same formula holds after tensoring with an inaccessible reference. 

 

**Proof.**

For any Kraus decomposition, positivity and the one-dimensional output support imply $A_{a\ell}\psi\in\mathbb C\psi$ for every $\psi$. Apply this to a basis and to each sum of two basis vectors: every $A_{a\ell}$ has the same eigenvalue on all basis vectors, hence equals $c_{a\ell}I$ on $\mathcal K$. Summing gives $p_a=\sum_\ell|c_{a\ell}|^2$ and proves the reference extension. 

□

 This is the identity-channel case of efficient passive refinement and preserves the checkpoint's whole-class qualification [[C01](/quantum-measurement/monograph/bibliography#bib-C01)]. It assumes CP outcome maps; it does not derive their admission or rule out fitting a single isolated probability table. 

For a held qubit reader $L=\lambda_0P_0+\lambda_1P_1$, put $\delta=|\lambda_1-\lambda_0|>0$. On eigeninput $j$, $Y_T\sim N(2\lambda_jT,T)$ and the native innovation endpoint is $W_T=Y_T-2\lambda_jT$. The two full path laws are mutually absolutely continuous. 



**Proposition 19.3 (Passive innovation precision).**

 <a id="cpc:prop:precision"></a> With equal prior probabilities of the two unlabelled eigeninputs, every passive estimator $\widehat W_T$ and tolerance $0\le r<\delta T$ satisfy <a id="cpc:eq:precision"></a>


$$
\Pr(|\widehat W_T-W_T|>r)\ge\Phi(-\delta\sqrt T).
 

$$

Equation (19.2).

 The bound is attained by postprocessing $Y_T$. 

 

**Proof.**

For each observed path endpoint $y$, the two possible innovation centers differ by $2\delta T$. Success within radius $r$ implies correct nearest-center classification of the input. The equal-prior Bayes error of the two Gaussians is $\Phi(-\delta\sqrt T)$; the endpoint is sufficient for the constant-drift Brownian path. A midpoint classifier followed by $\widehat W_T=y-2\lambda_{\widehat j}T$ attains the bound: correct decisions have zero error and wrong decisions error $2\delta T$. 

□

 

An active supplied eigenlabel changes the complete input and invalidates this comparison. Conversely, a claimed exact innovation output identifies the eigeninput from $(Y_T-W_T)/(2T)$ and must change the full native instrument. 



**Theorem 19.4 (Sharp complete disturbance for exact extra discrimination).**

 <a id="cpc:thm:disturbance"></a> Suppose a CP enlarged instrument has a classical decoder which perfectly identifies the two eigeninputs. After forgetting the extra output but retaining the original $Y$ and original continuing bank, denote it by $\overline{\mathcal J}$. Then <a id="cpc:eq:disturbance"></a>


$$
\frac12\|\overline{\mathcal J}-\mathcal I\|_\diamond
 \ge\frac12e^{-\delta^2T/2}.
 

$$

Equation (19.3).

 This constant is attained in the wider class of CP instruments. 

 

**Proof.**

Perfect eigeninput decoding makes its two effects exactly $P_0,P_1$. Every Kraus operator associated with label $j$ therefore annihilates the opposite eigenvector. Thus $\overline{\mathcal J}$ kills $|0\rangle\langle1|$ and gives identical outputs on $|+\rangle$ and $|-\rangle$. Write $m_j(y)=e^{\lambda_jy-\lambda_j^2T}$. Their native output difference is $m_0m_1\sigma_x\mathbb Q(dy)$ and has trace distance $\int m_0m_1d\mathbb Q=e^{-\delta^2T/2}=:v_T$. The triangle inequality forces one error to be at least $v_T/2$. 

For attainment use $\mathcal J(dy,j)(\rho)=M_yP_j\rho P_jM_y^\dagger\mathbb Q(dy)$. This is native reading after complete dephasing. On an arbitrary reference input its difference from native reading has trace norm $2v_T\|\rho_{01}\|_1$. Positivity implies $\|\rho_{01}\|_1\le\sqrt{\operatorname{tr}\rho_{00}\operatorname{tr}\rho_{11}}\le1/2$. Hence the half-diamond distance is at most $v_T/2$, with equality on $|+\rangle$. 

□

 

The attaining sharp instrument is a benchmark outside bounded finite diffusion. A finite invasive alternative adds an independent commuting native read of exposure $S=\mu^2\tau$. The optimal equal-prior error becomes $\Phi(-\sqrt{\delta^2T+S})$. On $|+\rangle$, its later unread coherence changes a noncommuting plus probability by <a id="cpc:eq:finiteinvasive"></a>


$$
\Delta p_X=\frac{e^{-\delta^2T/2}}2(1-e^{-S/2}).
 

$$

Equation (19.4).

 Both formulas follow by adding Gaussian log-likelihood information and multiplying coherence factors. A finite final $X$ reader multiplies the probability gap by its visibility $1-2e_X$. This provides a complete finite separating experiment, not an exact auxiliary projective measurement. 



<a id="section-19-2"></a>

## 19.2 Common amplitude writing selects multivariate response

 

A more specific physical writing law links attenuation to the response of several correlated currents. Let commuting Hermitian loads $L_1,\ldots,L_m$ act on the complete finite bank, with joint eigenvalue vectors affinely spanning $\mathbb R^m$. Assume the common Stratonovich amplitude equation <a id="cpc:eq:multiwriting"></a>


$$
d\phi=\sum_i L_i\phi\circ dX_i-F\phi\,dt,\qquad F=F^\dagger,
 \quad dX=b([\psi])\,dt+dW,\quad d[W_i,W_j]=C_{ij}\,dt,
 

$$

Equation (19.5).

 where $\psi=\phi/\|\phi\|$, $C\ge0$ is fixed, $F$ is preparation independent and $b$ is finite and continuous on all rays. Impose conditional balance of every held load mean: $\mathbb E[d\langle L_i\rangle\mid\mathcal F_t]=0$. This last condition is statistical constitutive physics, stronger than conservation of an unread ensemble mean. It is not asserted to follow from reversibility or source incompleteness. 



**Theorem 19.5 (Multivariate response and attenuation selection).**

 <a id="cpc:thm:multivariate"></a> For the stated class there are fixed $c\in\mathbb R^m,d_0\in\mathbb R$ such that <a id="cpc:eq:multiselected"></a>


$$
F=L^{\mathsf T}CL+c\cdot L+d_0I,\qquad
 b(\psi)=2C\langle L\rangle_\psi+c.
 

$$

Equation (19.6).

 Conversely these coefficients define a regular norm-preserving finite-dimensional interaction after normalization, including singular $C$ and degenerate joint eigenspaces. 

 

**Proof.**

Set $a_i=\langle L_i\rangle$, $V_{ij}=\langle L_iL_j\rangle-a_ia_j$ and $G=F-L^{\mathsf T}CL$. Applying Itô's quotient rule to $\langle\phi,L_i\phi\rangle/\|\phi\|^2$ yields <a id="cpc:eq:balanceidentity"></a>


$$
da=2V\,dW+2\{V(b-2Ca)-\operatorname{Cov}(L,G)\}\,dt,
 

$$

Equation (19.7).

 where $\operatorname{Cov}(K,G)=\tfrac12\langle KG+GK\rangle-\langle K\rangle\langle G\rangle$. Thus with $\beta=b-2Ca$, balance says $V\beta=\operatorname{Cov}(L,G)$. 

Choose unit vectors $u_\lambda,v_\mu$ from different joint eigenspaces, put $\delta=\mu-\lambda$ and $\psi_p=\sqrt{1-p}u_\lambda+e^{i\theta}\sqrt p\,v_\mu$. Let $g_{\lambda\mu}=\langle u_\lambda,Gv_\mu\rangle$. The balance equation becomes 

$$

 \delta\cdot\beta(\psi_p)=g_{\mu\mu}-g_{\lambda\lambda}
 +\frac{1-2p}{\sqrt{p(1-p)}}\operatorname{Re}(e^{i\theta}g_{\lambda\mu}).

$$

 Bounded continuity as $p\downarrow0$, for every phase, forces $g_{\lambda\mu}=0$. Holding $u_\lambda$ fixed and varying $v_\mu$ in its degenerate eigenspace shows that $G$ has a constant quadratic form on that block, hence is scalar there; reversing the roles covers every block. Write the scalar values $g_\lambda$. At a fixed eigenray $u_0$ let $c=\beta(u_0)$; the same limit gives $g_\mu=c\cdot\mu+d_0$ on every joint eigenvalue. Therefore $G=c\cdot L+d_0I$. 

Equation [(19.7)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:balanceidentity) now reads $V(\beta-c)=0$. Rays whose occupied spectral points affinely span $\mathbb R^m$ are dense and have positive-definite covariance $V$, so $\beta=c$ there and everywhere by continuity. Removing the fixed drift offset and scalar amplitude gauge gives 

$$

 d\psi=\sum_i(L_i-a_i)\psi\,dW_i
 -\frac12\sum_{ij}C_{ij}(L_i-a_i)(L_j-a_j)\psi\,dt.

$$

 Its smooth sphere coefficients preserve norm; a square root of $C$ gives a strong global realization. Substitution verifies balance and the converse. 

□

 

The affine-span assumption identifies a precise access freedom. For $L=(kA,0)$ the second drift is unconstrained by charge balance; taking correlated covariance $C_{12}=r$ and setting $b_2=0$ is a surviving source-blind tap. The following additional physical loading family removes that freedom: $L_1=kA\otimes I$, $L_2=\epsilon I\otimes B$ with $A,B$ nonscalar, common covariance, calibrated offsets, and response and attenuation continuous as $\epsilon\to0$. For every $\epsilon\ne0$ the joint spectrum spans a rectangle, so the theorem gives <a id="cpc:eq:loadedresponse"></a>


$$
\begin{aligned}F_\epsilon&=k^2A^2\otimes I+2rk\epsilon A\otimes B+
 \epsilon^2I\otimes B^2,\\
 b_1^\epsilon&=2k\langle A\rangle+2r\epsilon\langle B\rangle,
 &b_2^\epsilon&=2rk\langle A\rangle+2\epsilon\langle B\rangle.
 
\end{aligned}
$$

Equation (19.8).

 The zero-load limit therefore has $b_2^0=2rk\langle A\rangle$, giving a signal copy rather than a source-blind innovation copy. This is a theorem about a common continuously loadable amplitude port. Merely attaching an arbitrary mechanical displacement sensor does not establish that it belongs to this family. 



**Proposition 19.6 (Finite-load repair and its record error).**

 <a id="cpc:prop:weakload"></a> In the same two-load amplitude class put $G_\epsilon=F_\epsilon-L^{\mathsf T}CL$. On a product calibrator with charge extrema $\pm h$ in equal superposition assume uniformly 

$$

 |\mathcal D_\epsilon(B)|\le\eta_B(\epsilon),\quad
 \inf_g\|G_\epsilon-gI\|\le\delta_F(\epsilon),\quad
 |b_{2,\epsilon}-b_{2,0}|\le\omega_{\rm load}(\epsilon).

$$

 Here $\mathcal D_\epsilon(B)$ is the conditional drift of $\langle B\rangle$ and the zero-load auxiliary is an unchanged spectator. Then <a id="cpc:eq:weakload"></a>


$$
|b_{2,0}-2rk\langle A\rangle|
 \le\inf_{0<\epsilon\le\epsilon_{\max}}
 \left\{\omega_{\rm load}(\epsilon)+\frac{\eta_B(\epsilon)}{2\epsilon h^2}
 +\frac{\delta_F(\epsilon)}{\epsilon h}\right\}.
 

$$

Equation (19.9).

 If the right side is $D$, the primary source and $Y$ continuation remain exactly unchanged, and $|r|<1$, comparison with the reciprocal copy over time $T$ gives <a id="cpc:eq:weakloadpath"></a>


$$
D_{\rm KL}(P\|P_*)\le\frac{D^2T}{2(1-r^2)},\qquad
 \operatorname{TV}(P,P_*)\le\frac{D\sqrt T}{2\sqrt{1-r^2}}.
 

$$

Equation (19.10).

 

 

**Proof.**

On a product input, [(19.7)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:balanceidentity) gives 

$$

 \mathcal D_\epsilon(B)=2\epsilon\operatorname{Var}(B)
 [b_{2,\epsilon}-2rk\langle A\rangle-2\epsilon\langle B\rangle]
 -2\operatorname{Cov}(B,G_\epsilon).

$$

 The centered calibrator has $\langle B\rangle=0$, variance $h^2$ and covariance magnitude at most $h\inf_g\|G_\epsilon-gI\|$. Solve for the bracket and compare the loaded and unloaded drifts. This proves [(19.9)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:weakload). For the path estimate, the common primary continuation leaves only an auxiliary drift difference of covariance norm squared at most $D^2/(1-r^2)$. Bounded-drift Girsanov gives its relative-entropy cost one half of the time integral; Pinsker gives the displayed total-variation bound. 

□

 

Exact response follows if the load modulus vanishes and $\eta_B,\delta_F=o(\epsilon)$. If the measured drift is that of $\epsilon B$, the needed error is $o(\epsilon^2)$. At finite error, arbitrarily small load can be worse: for $\omega=L\epsilon^\alpha$ and constant $A_0=\eta_B/(2h^2)+\delta_F/h$, the optimizing load is $(A_0/(\alpha L))^{1/(1+\alpha)}$ when admissible. A smooth counterfamily $b_{2,\epsilon}=q[1-e^{-(\epsilon/\ell)^2}]+2\epsilon\langle B\rangle$, $q=2rk\langle A\rangle$, keeps an order-one zero-load suppression while its balance error is uniformly $O(\ell)$. Its load derivative diverges as $\ell^{-1}$, violating the required common modulus. Thus small unscaled calibration errors cannot replace the stated uniform hypotheses. 



<a id="section-19-3"></a>

## 19.3 Explicit linear Gaussian contacts and the source-blind cost

 

Consider commuting source charge $A$ and independent selected Gaussian writing channels with real couplings $\lambda_\alpha A$. Their observed displacement vector is $X=HR$, where $R$ has unit independent noise. Put <a id="cpc:eq:gaussianclass"></a>


$$
C=HH^{\mathsf T},\qquad v=2H\lambda.
 

$$

Equation (19.11).

 On charge eigenvalue $a$, $X_T$ has mean $vaT$ and covariance $TC$. The selected source law gives unread coherence-decay rate $\Gamma_{ab}=\tfrac12(a-b)^2\|\lambda\|^2$; further unread channels or stochastic phase kicks can only add their nonnegative dephasing contribution. The class assumes the common linear Gaussian amplitude-writing law and its stochastic signature. It does not derive these premises from the following optimization. 



**Theorem 19.7 (Gaussian access–disturbance bound).**

 <a id="cpc:thm:gaussianbound"></a> For the class [(19.11)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:gaussianclass), with $C^+$ the Moore–Penrose inverse, <a id="cpc:eq:gaussianbound"></a>


$$
\Gamma_{ab}\ge\frac{(a-b)^2}{8}v^{\mathsf T}C^+v.
 

$$

Equation (19.12).

 The complete held-record Fisher information for parameter $a$ is $T v^{\mathsf T}C^+v$. If $v\in\operatorname{Ran}C$, equality is attained with $\lambda=H^{\mathsf T}C^+v/2$ and no extra unread coupling. 

 

**Proof.**

$H^{\mathsf T}(HH^{\mathsf T})^+H$ is the orthogonal projection onto $\operatorname{Ran}H^{\mathsf T}$. Therefore $\|\lambda\|^2\ge\lambda^{\mathsf T}H^{\mathsf T}C^+H\lambda=v^{\mathsf T}C^+v/4$, which gives the bound and equality condition. On the support of the Gaussian covariance the endpoint log-likelihood derivative is $v^{\mathsf T}C^+(X_T-vaT)$; its variance is $Tv^{\mathsf T}C^+v$. The endpoint is sufficient for the held Brownian location family, so this is also the full-path information. Here Fisher information refers to this specified Gaussian location family; it does not posit a passive meter of an arbitrary unknown quantum expectation. 

□

 

In particular demand the output pair <a id="cpc:eq:sourceblind"></a>


$$
dY=2k\langle A\rangle\,dt+dW,\qquad
 dZ=r\,dW+\sqrt{1-r^2}\,dV,
 \quad |r|<1,
 

$$

Equation (19.13).

 where $V$ is independent and $Z$ is source-blind: it has no signal drift. Then $C=\left(\begin{smallmatrix}1&r\\r&1\end{smallmatrix}\right)$ and $v=(2k,0)^{\mathsf T}$, so <a id="cpc:eq:blindcost"></a>


$$
\Gamma_{ab}^{\min}=\frac{k^2(a-b)^2}{2(1-r^2)}
 =\frac{\Gamma_{ab}^{0}}{1-r^2}.
 

$$

Equation (19.14).

 At $|r|=1$ the required $v$ lies outside $\operatorname{Ran}C$, so no finite coupling in this class realizes it. This penalty does *not* apply to an ordinary signal copy $Z=rY+\sqrt{1-r^2}V$. That copy has $v=2k(1,r)^{\mathsf T}$ and $v^{\mathsf T}C^{-1}v=4k^2$, hence no necessary extra dephasing. 

There is an explicit amplitude realization of the bound, which also locates its quantum preparation assumptions. For one finite exposure $\delta$, prepare a two-coordinate pure Gaussian meter 

$$

 f_C(x)=(\det(2\pi C))^{-1/4}\exp(-x^{\mathsf T}C^{-1}x/4),\qquad C>0.

$$

 On charge eigenvalue $a$, apply the controlled translation $x\mapsto x-\sqrt\delta\,va$ generated by the self-adjoint coupling $\sqrt\delta A\otimes v^{\mathsf T}P$. The retained meter state is $f_C(x-\sqrt\delta va)$. Its density has the required Gaussian displacement and two eigenmeter states have overlap <a id="cpc:eq:gaussianoverlap"></a>


$$
\langle f_{C,b},f_{C,a}\rangle
 =\exp[-\delta(a-b)^2v^{\mathsf T}C^{-1}v/8].
 

$$

Equation (19.15).

 Completing the square proves both statements. The interaction is unitary on source plus meter, preserves inaccessible references, and fixes the exported coherence loss. To obtain an actual classical record one must additionally supply the admitted native coordinate diagnostic or a declared configuration-record law; the unitary translation alone does not actualize a value. The Gaussian ready amplitude and fresh supply are also resources, not a derived equilibrium reservoir. Used meter states are retained; reset by SWAP exports their correlations to an archive and consumes a ready state. 

The ordering of a copy matters physically. A canonical copying gate $e^{-ibQ P_R}$ sends $R\mapsto R+bQ$ and $P_Q\mapsto P_Q-bP_R$. Copying the source-written position afterward exports its signal and noise together. Copying an independent precursor position before the source interaction retains correlated noise but imparts a conjugate momentum kick which participates in the later source coupling. The complete Gaussian amplitude calculation [(19.15)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:gaussianoverlap) quantifies that difference. A late erasure of the displayed copy does not undo a conjugate kick or an earlier exported memory. 



<a id="section-19-4"></a>

## 19.4 Delayed innovation writers and preparation provenance

 

The abstract and Gaussian results must withstand a directly printed innovation. Suppose the selected reader is left unchanged but an extra physical writer prints $W_t$. Continue the same reader for another duration $s$, recording $Z=Y_{t+s}-Y_t$. Compare a phase-randomized coherent preparation with fixed interior populations against its eigenstate lottery; their preparation keys must be absent from all future-active resources. Since $\overline\beta$ is a bounded martingale and $d\overline\beta=VdW$, <a id="cpc:eq:innovationwitness"></a>


$$
\mathbb E[Z\mid\mathcal F_t]=s\overline\beta_t,\qquad
 \mathbb E[W_tZ]=s\,\mathbb E\int_0^t V_u\,du>0
 

$$

Equation (19.16).

 on the interior coherent preparation, whereas the eigenstate lottery gives zero. The equality follows by Itô covariance; finite-time positivity makes it strict when distinct calibrations are occupied. The product is integrable, so a sufficiently large finite clipping yields a nonzero bounded-record distinction. Thus the extra output would make the source ensemble observable beyond [(17.1)](/quantum-measurement/monograph/complete-preparations-and-finite-causal-admission#cpc:eq:readout). Printing it is a consistent stochastic extension if CPC is abandoned; the theorem identifies its consequence rather than declaring it meaningless. 

The same issue can be delayed through a coherent qubit memory. A per-path memory unitary controlled by the mathematical innovation is an expectation-dependent source interaction when rewritten in physical $Y$ coordinates. Replacing its compensating scalar $\langle A\rangle I$ torque by the actual operator $A$ is a lawful common-linear-writing repair, but changes source/memory continuation. One cannot infer admission of the initial writer from the fact that its final diagnostic is an admitted native reader. Every earlier interaction that imprinted the returning memory must satisfy the claimed constitution. 

Uniformity at weak load is equally important. A drift defect divided by auxiliary load $\epsilon$ may remain finite even if the unscaled balance defect vanishes. At the elementary level, $\min(\ell h,1)\to0$ for each fixed susceptibility $h$, but the family $h=1/\ell$ retains response one. A resource bound $\mathbb E h\le M$ instead gives the uniform error at most $\ell M$. The corresponding Gaussian auxiliary-load selection needs uniform balance and attenuation errors of order $o(\epsilon)$ in the unscaled convention; pointwise continuity at each preparation does not supply that premise [[M08](/quantum-measurement/monograph/bibliography#bib-M08), [M09](/quantum-measurement/monograph/bibliography#bib-M09)]. 



<a id="section-19-5"></a>

## 19.5 Literal source erasure and the cost of returning keys

 

A possible alternative to restricting access is to scramble preparation ensembles physically. The following exact obstruction and attaining construction specify what that proposal costs [[M14](/quantum-measurement/monograph/bibliography#bib-M14)]. 



**Theorem 19.8 (Source-ensemble erasure tradeoff).**

 <a id="cpc:thm:erasure"></a> Let $K(\psi,d\varphi)$ be a preparation-independent Markov operation on pure rays. If its output barycenter is $|\psi\rangle\langle\psi|$ for every pure input, then it fixes every ray almost surely. For qubit inputs define 

$$

 \begin{gathered}
 \mu_z=(K_0+K_1)/2,\quad\mu_x=(K_++K_-)/2,\quad
 d_*=\operatorname{TV}(\mu_z,\mu_x),\\
 F=\frac14\sum_{v\in\{0,1,+,-\}}\int|\langle v,\varphi\rangle|^2K_v(d\varphi).
\end{gathered}

$$

 With $\epsilon_*=(2-\sqrt2)/4$, <a id="cpc:eq:erasure"></a>


$$
F\le1-\epsilon_*+\epsilon_*d_*.
 

$$

Equation (19.17).

 Every point on this boundary is attained by a finite random-unitary interaction whose rotation key is inactive. 

 

**Proof.**

For the first statement, the expectation of the squared overlap with every vector orthogonal to $\psi$ is zero. Nonnegativity forces every output onto the ray of $\psi$. 

Let $r(\varphi)$ be the output unit Bloch vector. Positivity of the four source measures implies 

$$

 F\le\frac12+\frac14\left(\int|r_z|\,d\mu_z+\int|r_x|\,d\mu_x\right).

$$

 The common submeasure of $\mu_z,\mu_x$ has mass $1-d_*$. On it $|r_x|+|r_z|\le\sqrt2$; each remaining measure has mass $d_*$ and its coordinate is at most one. Therefore $F\le1/2+[\sqrt2(1-d_*)+2d_*]/4$, giving [(19.17)](/quantum-measurement/monograph/physical-writing-innovation-access-and-retained-information#cpc:eq:erasure). 

With probability $u$ apply equiprobably $U_\pm=e^{\mp i\pi\sigma_y/8}$ and otherwise apply identity. On the rotation branch both input lotteries become the same four bisector rays; on the identity branch their supports are disjoint. Hence $d_*=1-u$ and $F=1-u\epsilon_*$. The averaged channel is $(1-u\epsilon_*)\operatorname{id}+u\epsilon_*\operatorname{Ad}_{\sigma_y}$; its half-diamond distance from identity is $u\epsilon_*$, attained on an $x$ or $z$ eigeninput and bounded above by convexity. 

□

 

The independent classical randomizer is a stated resource. If its key returns, an inverse conditional rotation restores the original source distinctions; the reduced erasure conclusion no longer concerns the complete output. This theorem obstructs literal pure-ray scrambling at zero disturbance. It does not obstruct operational CPC for a source that retains inaccessible distinctions but constrains their future interactions. 



<a id="section-19-6"></a>

## 19.6 The shared dependency boundary

 

The exact assumption-to-consequence chain in this part is the following. Either CPC plus calibrated shared-current dynamics, or the independently specified finite tag plus tagging invariance and disjoint-record interchange, yields the diagonal identity. That identity fixes $b,A,g$. Positive lifting then supplies the particular native reader and its complete finite likelihood. Products of the admitted factors yield a reference-compatible library; finite instrument implementation is developed separately. Once a complete efficient instrument has been derived or independently admitted, passive refinements reduce to record postprocessing and invasive access has calculable costs. 

The causal reconstruction chain is different: already calibrated finite native probes, physical preparation access, causal separation, stable response and product continuation locality constrain an unknown writer, including its daughters and reference extension. Its finite repair theorem gives a nearby instrument with explicit complete-bank error. It cannot be used to justify the monitor that supplied its own calibration. 

None of these statements selects the original Hamiltonian Bell incidence law, primitive Gaussian noise, universal source contact admission or apparatus equilibrium. The mathematical role of Shadow source/readout structure is to identify the lost preparation information and require its fate to be checked through complete records, actual histories and returning banks. The stronger algebra, stochastic, calibration and admission laws remain explicit constitutive commitments.
