# Chapter 24: Finite controls, retained keys, and operational protection bounds

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

<a id="prot:integrationchapter"></a> 



<a id="section-24-1"></a>

## 24.1 Bounded-strength averaging on the complete bank

 

A complementary mechanism handles time-dependent but slowly varying nuisance interactions. Let $L=\mathbb C^d$, $E$ be the complete apparatus/memory bank, and $R$ an inaccessible reference. At each actual control history use <a id="prot:controlsource"></a>


$$
i\dot\Psi=[I_L\otimes B(t)+H_c(t)\otimes I_E+V(t)]\Psi.
 

$$

Equation (24.1).

 In the interaction picture of $B$, assume $\|V_I(t)\|\le J$ and $\|V_I(t)-V_I(s)\|\le\ell|t-s|$. These bounds are uniform in retained keys. Old correlated memories remain in $E$. 

Let $X,Z$ be the $d$-dimensional Weyl operators and let $\mathcal G=\{X^aZ^b\}_{a,b=0}^{d-1}$ modulo phases. Their twirl is 

$$

 \Pi(A)=I_L\otimes\operatorname{Tr}_L(A)/d.

$$

 Take an Eulerian cycle in the directed Cayley graph with generators $X,Z$. It uses $2d^2$ edges. Implement an edge $\alpha$ from vertex $g$ by $u_\alpha(s)g$, $0\le s\le\tau_p$, where $u_\alpha(0)=I$, $u_\alpha(\tau_p)=\alpha$. A Hermitian logarithm implements each finite pulse at strength at most $\pi/\tau_p$. The full duration is $\tau=2d^2\tau_p$ and the control frame $g_c$ returns to the identity modulo phase. For fixed $A$, <a id="prot:eulertwirl"></a>


$$
\begin{aligned}\int_0^\tau g_c(s)^\dagger A g_c(s)ds
 &=\sum_{\alpha=X,Z}\int_0^{\tau_p}
       \sum_{g\in\mathcal G}g^\dagger u_\alpha(s)^\dagger A u_\alpha(s)g\,ds\\
 &=\tau\Pi(A).
 
\end{aligned}
$$

Equation (24.2, 24.3).

 Thus cancellation includes finite pulse time; it is not an instantaneous-pulse approximation. 



**Theorem 24.1 (Finite-control complete propagator estimate).**

 <a id="prot:controlbound"></a> Let $U$ solve [(24.1)](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:controlsource), and let $U_{\rm sc}$ use the same $B$ with $V_I$ replaced by $\Pi(V_I)$. At $T=N\tau$, <a id="prot:cyclebound"></a>


$$
\|U(T)-(g_c(T)\otimes I_E)U_{\rm sc}(T)\|
          \le T\tau(J^2+\ell).
 

$$

Equation (24.4).

 At an arbitrary cut $t$, the corresponding bound is $t\tau(J^2+\ell)+2J\tau$. Both hold for arbitrary inaccessible references and all retained output registers. 

 

**Proof.**

In the toggling and $B$ frames the generators are $A(t)=g_c(t)^\dagger V_I(t)g_c(t)$ and $D(t)=\Pi(V_I(t))$. Freeze $V_I$ at the start of one cycle. Equation [(24.3)](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:eulertwirl) cancels the frozen integrals. The variation bounds on both remaining terms give $\|\int(A-D)dt\|\le\ell\tau^2$. For a self-adjoint generator $K$ with norm at most $J$, substitute its Volterra equation once: 

$$

 \|U_K(\tau)-I+i\int_0^\tau K(s)ds\|\le J^2\tau^2/2.

$$

 Unitarity bounds the remaining double integral. Applying this to $A,D$ makes the one-cycle error at most $(J^2+\ell)\tau^2$. Telescoping unitary products proves [(24.4)](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:cyclebound); Duhamel adds at most $2J\tau$ for the unfinished fragment. 

□

 

For fresh independent $E$ and scalar comparator evolution, the full output is close to $\Psi_{LR}\otimes a_T$. For an old correlated $E$ it is close to its specified comparator, which need not be independent. As an unprotected comparison, $V=JZ_L\otimes Z_E$ with $E$ in a $Z_E$ eigenstate rotates $|+\rangle$ to distance $|\sin JT|$. At $T=\pi/(2J)$ that distance is one, whereas the static protected bound is $\pi J\tau/2$. 

The construction uses control strength at most $2\pi d^2/\tau$ and $2d^2T/\tau$ pulses. Complete pulse errors $\delta_k$ add at most $\sum_k\delta_k$. The classical schedule is a supplied resource; any physical clock backaction must enter the complete generator estimates. A disturbance $V_I(t)=g_c(t)V_0g_c(t)^\dagger$ becomes $V_0$ in the toggling frame and defeats averaging. Its variation grows with the control speed, so it is excluded by the uniform $\ell$ premise, not by its small norm alone. 



<a id="section-24-2"></a>

## 24.2 Actual event times and retained control phases

 

At an event time $u$ in the middle of a cycle, stopping the controller leaves $g_c(u)\Psi$ even if $V=0$. Recording the control phase does not undo that rotation. A finite repair continues to control the routed carried bank until the next cycle boundary, adding latency at most $\tau$. When the aperture's outlet action commutes with those controls and the pre/post-event nuisance bounds remain valid, the two split fragments together last at most $\tau$. Hence a conservative complete handoff amplitude error is <a id="prot:handoff"></a>


$$
e_{\rm hand}\le T\tau(J^2+\ell)+2J\tau+\sum_k\delta_k.
 

$$

Equation (24.5).

 The ideal comparator has the same latency. If destructive capture makes the carried bank inaccessible, this repair is unavailable. Nulls, phase records, pending transport, and exhausted pulse stocks remain actual branches. 

Irreducible averaging also removes a desired nonscalar sector-controlled loader. Such a loader must be performed separately, included in a protected code-preserving $H_0$, or handled by sector-wise controls with their surviving sector-dependent phases explicitly retained. Averaging cannot silently remove a nuisance while preserving an algebraically identical desired coupling. 

The passive gap estimate avoids this rotating-frame problem because it is uniform at every time. Its use at an actual event still requires an outlet-adoption rule: the event must retain the actual transported row and its banks. A separately appended logical unitary at the event is an additional reaction outside the bounded pre-event Hamiltonian comparison. 



<a id="section-24-3"></a>

## 24.3 Coherent reversal using a physically retained history

 

A different active construction is possible when an orthogonal history register is available. Let $K$ have states $|\alpha\rangle$ and retain every old correlation in $\Psi_{LKR}$. Suppose 

$$

 H_{\rm err}(t)=\sum_{\alpha=1}^r|\alpha\rangle\langle\alpha|\otimes H_\alpha(t),
 \qquad U_{\rm err}=\sum_\alpha|\alpha\rangle\langle\alpha|\otimes U_\alpha.

$$

 A controller with access to $K$ can apply, over duration $T_c$, 

$$

 H_c(s)=-\frac T{T_c}\sum_\alpha|\alpha\rangle\langle\alpha|
             \otimes H_\alpha(T-Ts/T_c).

$$

 Changing variables in the time-ordered exponential gives $U_c=U_{\rm err}^\dagger$, so the complete old state returns exactly. No syndrome is measured and no Born reset enters. The inverse uses the same integrated action, with larger strength if shortened. For an implementation error $\Delta H(t)$, Duhamel bounds the full operator error by $\int\|\Delta H(t)\|dt$, uniformly for the inaccessible reference and all old correlations. 



**Proposition 24.2 (Distinct reversible errors require distinguishable programs).**

 <a id="prot:programs"></a> If a unitary corrector using programs $|k_\alpha\rangle$ restores every unknown carried vector after errors $U_\alpha$, then programs for errors distinct up to scalar phase must be orthogonal. 

 

**Proof.**

Include every fresh auxiliary state in the program and every retained output in $|a_\alpha\rangle$. Exact preservation of every carried pure vector and linearity on superpositions imply $C(U_\alpha|\psi\rangle|k_\alpha\rangle)=|\psi\rangle|a_\alpha\rangle$ with input-independent remainder. Preservation of inner products for arbitrary $\psi,\phi$ gives 

$$

 \langle k_\alpha|k_\beta\rangle U_\alpha^\dagger U_\beta
                 =\langle a_\alpha|a_\beta\rangle I.

$$

 Nonzero program overlap makes the relative error scalar. For $U_0=I$, $U_1=Z$, choose $|+\rangle,|-\rangle$: the two correction inputs have overlap $c=|\langle k_0|k_1\rangle|$ and their faithful outputs have orthogonal carried factors. If both complete vector errors are at most $\epsilon$, the inner-product triangle inequality gives $c\le2\epsilon$. 

□

 

A hidden orthogonal key in a returning memory can enable correction later while an accessible nonorthogonal proxy cannot enable it now. The physical cut and accessible couplings must therefore remain explicit. An event-safe implementation withholds readiness until $T+T_c$; an early-event intensity bounded by $\ell(t)$ costs at most $1-\exp[-\int_0^{T+T_c}\ell(t)dt]$. This is a latency/resource tradeoff. It is not protection of a payload that has already become inaccessible after destructive capture. 



<a id="section-24-4"></a>

## 24.4 A source-law modulus before probability selection

 

Complete coherent closeness cannot automatically be propagated through an arbitrary nonlinear actualization law. The following finite theorem provides a sufficient modulus within a specified response class, without assuming density-matrix sufficiency or complete positivity. 

At a source cut write $x=(c,[\psi])$, including every classical record in $c$ and every coherent reference/memory in $\psi$. Let $d(x,y)=1$ if classical data differ and otherwise $D([\psi],[\phi])=\sqrt{1-|\langle\psi,\phi\rangle|^2}$. Use the Wasserstein distance $W_1$ induced by this bounded metric on actual source laws. Complete classical–quantum trace distance is bounded by $W_1$, but a small difference of ensemble-averaged density matrices need not make $W_1$ small. 

Let $E_j$ be orthogonal outlet rows, $\sum_jE_j^\dagger E_j=I$. A stopped reader uses intensities $h(p_j)$, $p_j=\|E_j\psi\|^2$, normalized transported daughters, and common source-independent scalar marks. Assume $h(0)=0$, $0\le h$, and $\operatorname{Lip}(h)\le L$ on $[0,1]$. Held states may undergo the same prescribed coherent drive, preserving their ray distance. This is a declared family of unselected readers. 



**Lemma 24.3 (Weighted normalization of outlets).**

 <a id="prot:weighted"></a> For $a_j=E_j\psi$, $b_j=E_j\phi$, $p_j=\|a_j\|^2$, $q_j=\|b_j\|^2$, <a id="prot:weightedineq"></a>


$$
\sum_j\min(p_j,q_j)D([a_j],[b_j])\le D([\psi],[\phi]).
 

$$

Equation (24.6).

 Terms with zero branch mass vanish. 

 

**Proof.**

Set $c_j=|\langle a_j,b_j\rangle|$ and $z_j=\sqrt{p_jq_j-c_j^2}$. Each summand is at most $z_j$. The Euclidean triangle inequality and Cauchy–Schwarz give 

$$

 \sqrt{(\sum_jz_j)^2+(\sum_jc_j)^2}
 \le\sum_j\sqrt{p_jq_j}\le1.

$$

 Since $\sum_jc_j\ge|\langle\psi,\phi\rangle|$, the result follows. This is vector geometry; no outcome probability law has entered the lemma. 

□

 



**Theorem 24.4 (Complete finite response modulus).**

 <a id="prot:modulus"></a> For the stopped $n$-outlet reader of duration $s$ just defined, <a id="prot:modulusbound"></a>


$$
W_1(\mathsf K_s(x),\mathsf K_s(y))
       \le\min\{1,[1+(n+1)Ls]d(x,y)\}.
 

$$

Equation (24.7).

 Every event time, null, mark, retained daughter and reference belongs to the compared output. 

 

**Proof.**

For matching classical data, couple channel clocks with common rates $\min\{h(p_j),h(q_j)\}$ and their excesses. Since $|p_j-q_j|\le d(x,y)$, the probability of an unmatched event is at most $nLs\,d(x,y)$. Common no-event evolution preserves the distance. At a common event the rate is at most $L\min(p_j,q_j)$ because $h(0)=0$. Lemma [24.3](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:weighted) bounds the integrated daughter contribution by $Ls\,d(x,y)$. A common null contributes at most $d(x,y)$. Common conditional scalar marks can be coupled identically; an unmatched event costs at most one. Adding the contributions proves the theorem. Differing classical inputs use the trivial bound one. 

□

 

Suppose physical and comparator no-event rays differ by at most $a(t)$ uniformly, and the physical event row differs from its transported normalized row by at most $b_*$ on every nonzero common branch. Let $\zeta_s$ bound separately the full classical mark/resource mismatch. The same coupling proves <a id="prot:slot"></a>


$$
\epsilon_s\le\min\left\{1,
 a(s)+(n+1)L\int_0^sa(t)dt+b_*+\zeta_s\right\}.
 

$$

Equation (24.8).

 The gap theorem supplies $a(t)\le(2v+tv^2)/\delta$; a gate error $u_{\rm enc}$ adds to this amplitude bound. No small reduced-state error is substituted for the required complete-source comparison. 

Before selection, a finite sequence with slot errors $\epsilon_k$ and proved suffix moduli $C_\ell$ has error at most $\sum_k\epsilon_k\prod_{\ell>k}C_\ell$. This follows by replacing one slot at a time and applying each subsequent modulus. An arbitrary nonlinear future law can violate every uniform modulus; protection alone then gives no operational conclusion. 

The finite rate-selection and tag arguments can use [(24.8)](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:slot) only with their own nonzero response factors, interchange premises, and time regularity. Dividing a tag error by its success probability cannot be omitted. A finite event discrepancy does not bound infinitesimal Gaussian coefficients without uniform time estimates. Thus this chapter propagates physical errors into those arguments but does not derive their statistical premises. 



<a id="section-24-5"></a>

## 24.5 Complete stopped output after the rate has been selected

 

Now retain the selected interface $\lambda_j=\gamma\|E_j\Phi\|^2$, with faithful outlet adoption. Let every live mode be registered, $\sum_jE_j^\dagger E_j=P_{\rm live}$, and let the full coherent dynamics preserve live charge. A first event terminates exposure to the nuisance; later storage and decoding are common unitaries or separately charged. This is a stronger downstream hypothesis than Theorem [24.4](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:modulus). 



**Proposition 24.5 (Stopped complete-output bound).**

 <a id="prot:stopped"></a> For a live code input and arbitrary inaccessible reference, the complete event/time/null/continuation output at deadline $T$ differs from the selected ideal by at most <a id="prot:stoppedbound"></a>


$$
\epsilon_{\rm stop}(T)\le
 \min\left\{1,\frac{2v+(v^2/\gamma)(1-e^{-\gamma T})}{\delta}\right\}.
 

$$

Equation (24.9).

 Total click and null probabilities are exactly $1-e^{-\gamma T}$ and $e^{-\gamma T}$. Individual outlets and their conditional states may differ. 

 

**Proof.**

The declared law yields subnormalized event and null vectors 

$$

 K_j(u)\psi=\sqrt\gamma e^{-\gamma u/2}E_jU_\Delta(u)\psi,
 \qquad K_\varnothing\psi=e^{-\gamma T/2}U_\Delta(T)\psi.

$$

 Summing $E_j^\dagger E_j$ proves normalization and constant total hazard. Append orthogonal record labels before removing their mutual coherences. That removal is an average of unitary phase conjugations and cannot increase trace norm. The event-output distance is bounded by $\gamma e^{-\gamma u}e_\Delta(u)du$, and the null distance by $e^{-\gamma T}e_\Delta(T)$. Subsequent common unitaries preserve the complete distances. Integrate the affine gap bound and use 

$$

 \int_0^T\gamma e^{-\gamma u}u\,du+Te^{-\gamma T}
            =(1-e^{-\gamma T})/\gamma.

$$

 This gives [(24.9)](/quantum-measurement/monograph/finite-controls-retained-keys-and-operational-protection-bounds#prot:stoppedbound) without discarding any environment in the proof. 

□

 

Stopping is physical routing out of the nuisance region, not a consequence of merely observing a click. If the event occurs during loading, readiness and incomplete-load modes also need records. For a code-preserving loader 

$$

 H_{\rm load}=\kappa\sum_jQ_j\otimes(|j\rangle\langle r|+|r\rangle\langle j|),
 \qquad\tau=\pi/(2\kappa),

$$

 target-$j$ density before $\tau$ is $\gamma e^{-\gamma u}\sin^2(\kappa u)\|Q_j\Psi\|^2du$ and ready-mode failure density is $\gamma e^{-\gamma u}\cos^2(\kappa u)du$. Integrating the latter gives <a id="prot:loadingfailure"></a>


$$
f_\tau=\frac{1-e^{-\gamma\tau}}2+
       \frac{\gamma^2(1+e^{-\gamma\tau})}{2(\gamma^2+4\kappa^2)}.
 

$$

Equation (24.10).

 Holding to $s\ge\tau$ gives useful target success $r_s=1-f_\tau-e^{-\gamma s}>0$. The failed branch keeps its actual source, and a null keeps the full loaded superposition until an actual inverse is applied. 

For piecewise-stationary segments of lengths $d_\ell$ starting at $t_{\ell-1}$, unitary telescoping and the same stopping integration give <a id="prot:segments"></a>


$$
\epsilon_{\rm stop}\le\min\left\{1,
 \sum_\ell e^{-\gamma t_{\ell-1}}
 \left[\frac{2v_\ell}{\delta_\ell}
 +\frac{v_\ell^2}{\gamma\delta_\ell}(1-e^{-\gamma d_\ell})\right]\right\}.
 

$$

Equation (24.11).

 The ideal prefix preserves the code; actual suffixes preserve norm. One must not assume that an actual imperfect prefix remains in the code. 



<a id="section-24-6"></a>

## 24.6 Reuse, references, and finite network accounting

 

After an imperfect block, decode unitarily into logical $L$ and syndrome $\Sigma$, retaining all of $\Sigma$. Append fresh independently prepared ancillas $F$ and re-encode $L,F$. The new block lies exactly in the code even when $L$ is entangled with $\Sigma$ and every old bank. This restores the domain, not the correct logical state. It neither measures a syndrome nor resets the old memory. Four-qubit blocks consume two fresh ready qubits and retain two old syndrome qubits per renewal; five-qubit blocks have the corresponding four-qubit costs. 

If the physical encoder differs from its ideal unitary by $u_{\rm enc}$ in operator norm, compare the output with the exact encoding of the same actual logical/syndrome input. The comparison error is at most $u_{\rm enc}$. The gap theorem applies to the exact encoded comparison input and the actual no-event unitary preserves the initial comparison error. A decoder error similarly adds its norm defect. This closes the actual-input domain needed for a finite replacement argument without assigning fictitious bad-preparation probabilities to coherent leakage. 

After an ideal instrument has actually been established, a common ideal suffix contracts classical–quantum trace distance. An actual-prefix/ideal-suffix replacement then gives the complete finite-network bound <a id="prot:network"></a>


$$
\epsilon_{\rm net}\le\min\left\{1,
 \epsilon_{\rm prep}+p_{\rm exhausted}+\epsilon_{\rm cut}
 +\sum_k(\epsilon_{\rm aperture,k}+\epsilon_{\rm gates,k}
                 +\epsilon_{\rm rate,k}+\zeta_k)
 +\epsilon_{\rm instrument}\right\}.
 

$$

Equation (24.12).

 Every local bound is uniform on the actual complete input and history. Use either the preselection bound with its proved moduli or the sharper selected bound, not both for the same defect. The term $\epsilon_{\rm instrument}$ contains only the independently established loading/readout approximation. Timeout is an error only against a completed sharp measurement; a null-inclusive finite instrument already contains its timeout branch exactly. 

For a growing bank, use its total $b_N,v_N$ and require $\Delta_N>2b_N+v_N$. A fixed single-memory bound cannot be reused after arbitrarily many retained resources accumulate. All error sums must tend to zero in a simultaneous limit. Readiness stock must be conditionally independent of the complete actual past or carry a quantified preparation defect; correct individual marginals are insufficient. 

For an event of actual and ideal probabilities $p,q>0$, complete error $\epsilon$ implies conditional trace distance at most <a id="prot:rare"></a>


$$
\min\{1,\epsilon/\max(p,q)\}.
 

$$

Equation (24.13).

 To see this, decompose the complete output into event/complement blocks. For $p\ge q$, write the event blocks as $p\rho,q\sigma$. Then $p\|\rho-\sigma\|_1\le\|p\rho-q\sigma\|_1+p-q$, while the complement norm is at least $p-q$. Dividing the total trace norm by two proves the claim; exchange $p,q$ for the other case. There is no uniform perfect daughter on an event whose probability vanishes with resources. 



<a id="section-24-7"></a>

## 24.7 What the protection mechanism leaves fundamental

 

A perfectly protected quantum carrier can coexist with the scalar intrinsic clock <a id="prot:purityclock"></a>


$$
\lambda=\gamma[1+\alpha(2\operatorname{tr}\rho_L^2-1)],
 \qquad0<\alpha\le1,
 

$$

Equation (24.14).

 with outlet marks proportional to their populations. On the equal Bell-state ensemble and equal computational-product ensemble of two qubits, both averaged density matrices are $I_4/4$, while each reduced purity is respectively $1/2$ and $1$. Their finite click gap is <a id="prot:clockgap"></a>


$$
G(s)=e^{-\gamma s}-e^{-\gamma(1+\alpha)s},
 \qquad\max_sG(s)=\alpha(1+\alpha)^{-1-1/\alpha}.
 

$$

Equation (24.15).

 Differentiation gives the maximizing time $\log(1+\alpha)/(\gamma\alpha)$. A local coherent encoding preserves nonzero reduced eigenvalues, so it does not change this gain. A printed scalar mark $z=\operatorname{tr}\rho_L^2$ similarly leaks source-ensemble information with zero coherent transport defect. 

These are explicitly different stochastic laws, not Hamiltonian meters implemented by [(23.8)](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:model). They violate the population-only response or scalar-mark premises of the selected interface. If preparation labels are actively retained, they must remain in the complete input and the ensembles need not be operationally equivalent. The counterexample shows exactly why carrier protection alone cannot establish that equivalence. 

The established reduction is physical suppression of nonscalar coherent nuisance interactions on a declared locality, bandwidth, horizon and resource domain. Exact carrier neutrality is replaced by a code, finite gap or finite control schedule, and a complete error estimate. Protection alone does not select outlet adoption, event statistics, fresh-resource preparation or a universal access rule. An event-only rewrite or input-sensitive scalar clock is not ruled out by an intact protected propagator. The later complete theories supply their own actual dynamics and admitted material interactions; these protection bounds apply to them only when their bounded-operator, encoding and time-domain hypotheses are verified. In particular, an unbounded massive kinetic Hamiltonian is not covered merely because its ready states have finite energy.
