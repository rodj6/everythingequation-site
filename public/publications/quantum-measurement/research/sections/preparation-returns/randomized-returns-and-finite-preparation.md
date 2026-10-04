# Section 8: Randomized returns and finite preparation

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

<a id="section-8"></a>

## 8 Randomized returns and finite preparation

<a id="sec:random"></a>

Invariant-law uniqueness does not imply that repeated returns physically prepare that law. We now examine one fully specified randomized controller, consolidating [[18](/quantum-measurement/research/preparation-returns/bibliography#bib-RandomizedReport)]. The network is the two-particle device of [example 5.3](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#ex:two), fixed at any sufficiently small calibrated $\delta>0$ satisfying its endpoint and curvature conditions. Use whitened coordinates $z=\sqrt2 A_0^{1/2}q$ and write $\gamma=\gamma_6=N(0,I_6)$. The wavefunction is the same known $\psi_0$ for all candidate configuration laws. Nonequilibrium is permitted in that law; there is no initial Born-law assumption.



<a id="section-8-1"></a>

### 8.1 A countable determining library and controller

 Choose the five Gaussian curvature families supplied by the active coordinate tree and the two reserved-plane links in [lemma 5.1](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#lem:engineer). Use the trial frequencies $\nu=101$, $\zeta=103$, which exceed all root frequencies for $(1,2,7,14,24,43)$. Sample each analytic corrected family at rational parameters densely in a sufficiently small admissible interval. Each command has duration $2\pi$.

For the nonlinear commands choose a countable set of real compact plane profiles dense, with common compact supports, in $C_c^\infty({\mathbb R}^2)$. For definiteness put $b(t)=e^{-1/t}$ for $t>0$ and $b(t)=0$ otherwise, and 

$$

 \chi(t)=\frac{b(4-t^2)}{b(4-t^2)+b(t^2-1)}.

$$

 Use $\chi(s_1/R)\chi(s_2/R)$ times finite real trigonometric polynomials of frequencies $\pi m/(3R)$, $m\in\mathbb Z^2$, with rational coefficients, for positive integers $R$. Smooth periodic Fourier approximation on the larger square, followed by the fixed cutoff, gives the stated density. For every pair $f,g$ set 

$$

 M_{fg}=1+\sum_{h=-L_rf,-L_rg}
    \bigl(\|h\|_\infty+\|\nabla h\|_\infty+\|\nabla^2h\|_\infty\bigr).

$$

 Here the Hessian norm is the operator norm. Let $r_{fg}$ be the least nonnegative integer such that $2^{-r_{fg}}\le(16M_{fg}^2)^{-1}$. Include the physical rectangles of [section 3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#sec:plane) at amplitudes $\epsilon_{fg,k}=2^{-r_{fg}-k}$, $k\ge1$. On these rectangles the density multiplier differs from one by at most $1/16$, and its logarithm has Hessian norm at most $1/15+1/225<1$. Thus its density is positive and its negative logarithm has Hessian at least $I$. The global construction applies. Pad each four-unit-time nonlinear history by a holding interval of duration $2\pi-4$; holding has identity configuration map at this real preparation.

Enumerate all of these commands as $F_1,F_2,\ldots$, retaining their physical histories. Their physical inverses and an idle command also have duration $\tau=2\pi$. The enumeration may repeat a map without changing the argument. It has no uniform description-complexity or amplitude bound. Each selected command and each completed finite word nevertheless uses finite resources in the specified externally controlled model.



**Lemma 8.1 (Determining countable family).**

<a id="lem:countablelibrary"></a> The maps $F_j$ have $\gamma$ as their unique common invariant Borel probability. 

 

**Proof.**

Invariance under dense Gaussian parameter samples passes to each complete analytic curve by bounded continuous tests. The exact-group argument of [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup) then gives rotational invariance. For each sampled plane pair, take the sequence of squared-amplitude difference quotients in [lemma 3.2](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:rectangle). Uniform displacement bounds give 

$$

 \int\nabla\varphi\cdot\Pi_r[\nabla f,\nabla g]\,d\mu_s=0,
 \qquad \varphi\in C_c^\infty({\mathbb R}^2).

$$

 These identities extend to all compact profiles. In fact, for a compact vector field $b$, write 

$$

 \Pi_r b=b-\nabla\lambda_b,\quad
 L_r\lambda_b=h_b:={\operatorname{div}} b-(2s_1,4s_2)\cdot b,
 \quad \lambda_b=-\int_0^\infty P_t h_b\,dt .

$$

 The Gaussian Ornstein–Uhlenbeck semigroup satisfies $\|D^k\lambda_b\|_\infty\le\|D^kh_b\|_\infty/(2k)$ for $k\ge1$, by differentiating its explicit contracting flow. Common-support $C^\infty$ approximation therefore gives global convergence of the projected fields. The distributional argument of [theorem 3.4](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#thm:plane) determines the plane marginal. Rotations and its Gaussian marginal determine the full law by the characteristic-function argument in [section 6](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#sec:uniqueness). Limits occur in a test for invariance, not in the implementation of an individual command. 

□



At each cycle boundary draw a command independently of the initial configuration and the complete past: <a id="eq:commandlaw"></a>


$$

 \Pr(C=0)=\frac34,\qquad
 \Pr(C=+j)=\Pr(C=-j)=\frac{2^{-j}}8,\quad j\ge1.

$$

Equation (8.1).

 Command $+j$ performs $F_j$, command $-j$ performs $F_j^{-1}$, and command $0$ holds. The controller retains the consumed command word $W_n=(C_1,\ldots,C_n)$. Equivalently, supply an independent identically distributed tape with law [(8.1)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:commandlaw) and retain its consumed prefix. Between boundaries, the network obeys the Schrödinger and guidance equations already specified. Its conditional Hamiltonian uses only the fixed pair spring, local traps, and the nonlinear plane controls.

This is a hybrid externally controlled architecture, not an autonomous microscopic construction of the command register or clock. Freshness, fairness, and independence of the classical tape are statistical resources. There is no Born-distributed quantum coin, new equilibrium pointer, thermal bath, postselection, or configuration-dependent stopping in this specification. Completion means $n<\infty$ cycles, elapsed time $2\pi n$, and restored ray and holding Hamiltonian. The memory is retained, even if unread.



<a id="section-8-2"></a>

### 8.2 Actual kernel and asymptotic behavior

 On finite signed measures the one-cycle kernel is <a id="eq:randomkernel"></a>


$$

 \mathsf P\mu=\frac34\mu+\frac18\sum_{j\ge1}2^{-j}
      \bigl((F_j)_*\mu+(F_j^{-1})_*\mu\bigr).

$$

Equation (8.2).

 The series converges in variation norm. On relative densities in $L^2(\gamma)$ put 

$$

 U_jf=f\circ F_j^{-1},\qquad
 Q=\frac12\sum_{j\ge1}2^{-j}(U_j+U_j^*),\qquad
 P=\frac34I+\frac14Q.

$$

 Every $U_j$ is unitary by measure preservation, with adjoint composition by $F_j$. Hence $Q$ is a self-adjoint Markov contraction, and <a id="eq:randomspectral"></a>


$$

 \frac12I\le P\le I,\qquad
 \langle h,(I-P)h\rangle
   =\frac18\sum_{j\ge1}2^{-j}\|h-U_jh\|_2^2.

$$

Equation (8.3).

 The actual law after $n$ rounds is $(P^nf_0)\gamma$ when $\mu_0=f_0\gamma$. We use the convention 

$$

 \operatorname{TV}(\mu,\nu)=\sup_B|\mu(B)-\nu(B)|=\tfrac12\|\mu-\nu\|_{\rm var},

$$

 where the supremum is over Borel sets.



**Proposition 8.2 (Conditional mixing and its singular boundary).**

<a id="prop:mixing"></a> If $\mu_0\ll\gamma$, then $\operatorname{TV}(\mu_n,\gamma)\to0$. More generally, if the singular mass of $\mu_0$ relative to $\gamma$ is $s$, then 

$$

 \lim_{n\to\infty}\operatorname{TV}(\mu_n,\gamma)=s.

$$

 No uniform rate or spectral gap is asserted. 

 

**Proof.**

The fixed functions of $P$ are constants. Indeed, [(8.3)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomspectral) makes a real fixed function invariant under every $U_j$. If it were nonconstant, a bounded strictly positive nonconstant function of it, normalized to integral one, would give a second common invariant probability, contrary to [lemma 8.1](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#lem:countablelibrary). The same argument applies to real and imaginary parts.

The spectral theorem on $[1/2,1]$ gives $P^nf\to\int f\,d\gamma$ in $L^2(\gamma)$ [[20](/quantum-measurement/research/preparation-returns/bibliography#bib-Teschl2009)]: integrate $|\lambda^n-1_{\{1\}}(\lambda)|^2$ against the spectral measure and use dominated convergence. For a density $f\in L^1(\gamma)$, put $f_B=\min(f,B)$. Markov contraction gives 

$$

 \|P^nf-1\|_1\le2\|f-f_B\|_1+
 \left\|P^nf_B-\int f_B\,d\gamma\right\|_1.

$$

 Take $n\to\infty$ and then $B\to\infty$ to obtain total-variation convergence.

For a singular initial component, saturate a Borel null support under the countable group of finite words in all $F_j$ and their inverses. This remains a $\gamma$-null invariant Borel set, and contains that component at every finite round. It supplies the lower bound $s$. Convergence of the normalized absolutely continuous component and convexity supply the matching upper limit. This does not classify singular stationary laws of the averaged kernel merely from common-map invariant-law uniqueness. 

□





<a id="section-8-3"></a>

### 8.3 Finite rounds and independent random completion

 

**Theorem 8.3 (Finite-round reverse bound).**

<a id="thm:finiteobstruction"></a> For every initial Borel probability and every finite $n$, <a id="eq:reverseTV"></a>


$$

 \operatorname{TV}(\mu_n,\gamma)
 \ge2^{-n}\operatorname{TV}(\mu_0,\gamma).

$$

Equation (8.4).

 Thus a finite-round output is invariant under every return in the library if and only if the input was already $\gamma$. 

 

**Proof.**

Write $\mathsf P=\tfrac34I+\tfrac14\mathsf Q$. The Markov kernel $\mathsf Q$ contracts variation, so every finite signed measure satisfies 

$$

 \|\mathsf P\sigma\|_{\rm var}
 \ge\tfrac34\|\sigma\|_{\rm var}-\tfrac14\|\mathsf Q\sigma\|_{\rm var}
 \ge\tfrac12\|\sigma\|_{\rm var}.

$$

 Apply this iteratively to $\sigma=\mu-\gamma$, since $\mathsf P\gamma=\gamma$. The characterization of invariant outputs is [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main). This bound applies after averaging the command labels, not just to an individual invertible history. 

□



A smooth explicit countermodel makes the remaining discrepancy observable. Put 

$$

 c=e^{-1/2},\qquad h(z)=\cos z_1-c,\qquad
 f_0=1+\tfrac14h,\qquad \mu_0=f_0\gamma.

$$

 The probability $\mu_0$ has a normalized, strictly positive Schwartz density with respect to Lebesgue measure in physical coordinates. Its relative density $f_0$ is bounded above and below by positive constants. Gaussian integration gives 

$$

 V:=\|h\|_2^2=\frac{(1-e^{-1})^2}{2}>0.

$$

 By [(8.3)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomspectral), <a id="eq:cosbias"></a>


$$

 \mathbb E_{\mu_n}\cos Z_1-c
 =\tfrac14\langle h,P^nh\rangle
 \ge\tfrac14\,2^{-n}V>0,

$$

Equation (8.5).

 where $Z_1$ denotes the first coordinate at the indicated completion. Its law is readable by the implemented linear-coordinate transport of [proposition 7.2](/quantum-measurement/research/preparation-returns/preparation-transport-and-operational-consequences#prop:readout) followed by the stated ideal position detector. No microscopic detector law is inferred.

The spectral measure $\rho_h$ has no atom at $1$. Consequently one additional randomized exact-return cycle changes that bounded statistic strictly: 

$$

 \mathbb E_{\mu_n}\cos Z_1-\mathbb E_{\mu_{n+1}}\cos Z_1
 =\frac14\int_{[1/2,1)}\lambda^n(1-\lambda)\,d\rho_h(\lambda)>0.

$$

 At least one constituent return therefore changes the statistic despite the unchanged quantum endpoint.

Let $N<\infty$ almost surely be independent of the configuration and the entire command tape. The completed operator is $T_N=\sum_m\Pr(N=m)P^m=g(P)$, with $g(\lambda)=\mathbb E\lambda^N$. It obeys 

$$

 T_N\ge\mathbb E[2^{-N}]I,\qquad \mathbb E[2^{-N}]>0.

$$

 Thus the same smooth countermodel satisfies <a id="eq:randomstopbias"></a>


$$

 \mathbb E_{\mu_N}\cos Z_1-c
 \ge\tfrac14V\mathbb E[2^{-N}]>0.

$$

Equation (8.6).

 This holds even when $\mathbb EN=\infty$. For finite mean, Jensen gives the further lower bound $V2^{-\mathbb EN}/4$. Configuration- or command-dependent stopping is not represented by this operator and is not covered by [(8.6)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomstopbias).



**Lemma 8.4 (Countable-command universal-reset obstruction).**

<a id="lem:countablereset"></a> An almost-surely finite procedure whose output, for each initial point, is one of countably many finite-word images cannot send every smooth strictly positive bounded relative density to the same nonatomic law, with a common transition kernel for all those inputs. 

 

**Proof.**

Let $K(z,\cdot)$ be that kernel. It is countably supported for each $z$ at which the procedure terminates almost surely. Suppose every $1+\eta h$, for bounded smooth centered $h$ and sufficiently small $\eta$, is sent to a fixed nonatomic law $\nu$. This includes density one. Subtract its equation from that for the perturbed density. For each bounded continuous $\varphi$, 

$$

 \int h(K\varphi-\nu\varphi)\,d\gamma=0.

$$

 Take $h=\chi-\int\chi\,d\gamma$, $\chi\in C_c^\infty$, and use the equation for density one. Distributional uniqueness gives $K\varphi=\nu\varphi$ almost everywhere. Take the countable sine and cosine tests at rational frequencies. On a common full-measure set the corresponding characteristic functions agree; continuity extends equality to all frequencies. Hence $K(z,\cdot)=\nu$ on that set, contradicting its countable support. 

□

 The lemma permits adaptive command choices if completed outputs still have the stated finite-word form and the kernel is common to the input class. It excludes universal reset of that regular basin, not an accidental reset of one input or every possible preparation architecture. The specific factor $2^{-n}$ requires the $3/4$ holding probability; it is not asserted for all lazy kernels.



<a id="section-8-4"></a>

### 8.4 Retained memory and a reversible echo

 Let $\pi_n$ be the law of $W_n$, and let $F_w$ denote its finite word. For $\mu_0=f_0\gamma$ the conditional and marginal densities are 

$$

 f_w(z)=f_0(F_w^{-1}z),\qquad
 f_n(z)=\sum_w\pi_n(w)f_w(z).

$$

 All logarithms are natural. We write $D(\mu\Vert\nu)$ for relative entropy and $I(Z;W)$ for the relative entropy of the joint law with respect to the product of its marginals. Measure preservation gives an exact information identity. 

**Proposition 8.5 (Controller correlation identity).**

<a id="prop:memory"></a> If $D(\mu_0\Vert\gamma)<\infty$, then <a id="eq:memory"></a>


$$

 D(\mu_0\Vert\gamma)
 =D(\mu_n\Vert\gamma)+I(Z_n;W_n).

$$

Equation (8.7).

 The joint relative entropy with respect to $\gamma\otimes\pi_n$ is the initial relative entropy. The recorded word permits a physical inverse echo restoring the initial configuration pointwise. 

 

**Proof.**

The joint density relative to $\gamma\otimes\pi_n$ is $f_w(z)$. For every word, change of variables gives $\int f_w\log f_w\,d\gamma=\int f_0\log f_0\,d\gamma$. Insert $\log f_w=\log f_n+\log(f_w/f_n)$ and sum over the countable words. The two terms are the marginal relative entropy and mutual information. The convention $0\log0=0$ handles zero densities; the finite-entropy case follows by the relative-entropy chain rule, or by truncating the logarithms in this nonnegative divergence identity. This proves [(8.7)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:memory).

After $n$ cycles perform the recorded inverse commands in reverse order. All have physical time-reversed realizations from [section 2](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#sec:model), and their total duration is $2\pi n$. Their composed configuration map is $F_w^{-1}$. It restores $Z_0$ at every point and restores the quantum ray and holding Hamiltonian. The command record, rather than knowledge of $Z_0$ or $f_0$, determines the echo. 

□



For bounded $f_0$, total-variation convergence and uniform continuity of $x\log x$ on its bounded range imply $D(\mu_n\Vert\gamma)\to0$. Equation [(8.7)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:memory) then puts the lost marginal relative entropy into controller correlation. With $h_{\rm bin}(p)=-p\log p-(1-p)\log(1-p)$, each command has entropy $H(C)=h_{\rm bin}(1/4)+(3/4)\log2$, so $I(Z_n;W_n)\le nH(C)$. These are information statements, not thermodynamic heat estimates.

For the explicit countermodel, the echo gives the fixed event discrepancy 

$$
\begin{aligned}&\Pr_{\rm echo}(|Z_1|\le\tfrac12)-\Pr_\gamma(|Z_1|\le\tfrac12)\\
 &\quad=\frac14\int_{-1/2}^{1/2}
       (\cos y-e^{-1/2})\frac{e^{-y^2/2}}{\sqrt{2\pi}}\,dy\\
 &\quad\ge\frac14\bigl(\cos(1/2)-e^{-1/2}\bigr)
                  \bigl(2\Phi(1/2)-1\bigr)>0.
\end{aligned}
$$

 Here $\Phi$ is the standard normal cumulative distribution function. The bound is independent of the preceding cycle count. Hiding the command tape may remove this feedback option but does not change the finite-round kernel or its obstruction. Erasing it is a new physical operation requiring its own model.

For any fixed subsequent measurable readout or independently specified Markov response, data processing gives record-law distance at most $\operatorname{TV}(\mu_n,\gamma)$. Thus the controller permits arbitrarily accurate approximation for each absolutely continuous source, with no general uniform finite waiting time. It does not supply a history-independent cross-state assignment, arbitrary apparatus equilibrium, or independent trials. Stationarity of an absolutely continuous boundary law under this actual kernel would force $\gamma$ by [proposition 8.2](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#prop:mixing), but that stationarity is another statistical premise, not a finite preparation consequence.
