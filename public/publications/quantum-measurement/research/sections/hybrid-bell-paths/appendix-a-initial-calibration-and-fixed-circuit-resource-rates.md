# Appendix A: Initial calibration and fixed-circuit resource rates

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-A"></a>

## A Initial calibration and fixed-circuit resource rates

<a id="app:rates"></a>

<a id="section-A-1"></a>

### A.1 Initial independent equilibrium and uniformity

 If the initial carrier positions are iid with law $w(0)$, the distinguished carrier has exactly that law, and 

$$

 {\mathbb E}\|x^N(0)-w(0)\|_1
 \le \sum_r\sqrt{w_r(0)(1-w_r(0))/N}\le\sqrt{D/N}.

$$

 The preceding tracking proof applies conditionally on the initial carrier configuration and declared field, with the independent Poisson comparison clocks left random, and then averages. Its low-mass estimate already includes $\mathbb E\eta_N$; Jensen's inequality gives the corresponding square-root estimate. The martingale population bound gives 

$$

 \epsilon_{x,N}\le {\mathbb E}\|x^N(0)-w(0)\|_1
       +C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}.

$$

 No independence between the later tag and census is needed: the coupling preserves the entire microscopic marginal and uses its adapted full-state intensities.

For the autonomous circuit, write $s_{nx}=|(V_n\psi)_x|^2$. Then 

$$

 w_{nx}(t)=s_{nx}\binom{\ell}{n}
  \cos^{2(\ell-n)}(\Omega t)\sin^{2n}(\Omega t).

$$

 On the first pass $[0,T]$ each time envelope is unimodal, since with $u=\sin^2(\Omega t)$ it is proportional to $u^n(1-u)^{\ell-n}$. Each weight has at most two entries or boundary contacts with a level, even if a maximum equals that level. Count sublevel entries directly; no common regular value across unknown inputs is needed. Hence the node bound can be taken as 

$$

 b(\varepsilon)\le 3D\varepsilon+C_0T\sqrt\varepsilon

$$

 uniformly over normalized inputs on this fixed graph. Currents and their variations are uniformly bounded as well: each fine current is a fixed bounded bilinear coefficient of $\psi$ times an explicit smooth clock envelope. Alternatively bounded $\|H_F\|$ and $\|\dot\Psi\|\le\|H_F\|/\hbar$ give uniform bounds on $J,\dot J$. Initial calibration, all birth budgets, $R_{\delta,N}$ and the resulting path error are consequently uniform over these inputs. For a fixed finite reference included as a configuration coordinate this statement uses that full graph. For a declared spectator fibre, the norm estimates do not depend on the fibre dimension; this does not assert equality to a different finer-sector Bell law.

On $[0,2T]$ the spin clock reverses and returns, so at most four level entries per weight give $b(\varepsilon)\le5D\varepsilon+2C_0T\sqrt\varepsilon$. The path theorem still applies across the node at $T$ and all reversed currents. The unitary echo also unwrites the circuit's records; it is a reversal test of the event law, not an archive-protection theorem beyond the first pass. Exact zero-current intervals in the general programme are included in the same estimates. Finite pilot queues can produce delayed events there, but their total path discrepancy is already in [(31)](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#eq:mainerror); they are not declared absent at finite resources.



<a id="section-A-2"></a>

### A.2 An explicit fixed-circuit resource rate

 <a id="kin:uniformity-rate"></a> The qualitative limit in Theorem [8.1](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#thm:main) uses the preceding kinetic proof. For the fixed clock circuit, its constants can also be controlled uniformly over unknown inputs. The following refinement, retained from the earlier manuscript and monograph [[4](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-PilotPrior), [5](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Monograph)], records the cutoff dependence explicitly and supplies its complete proof. It is not a new stochastic law or a rate for growing circuits. The clock-weight shape was proved in Proposition [9.2](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:levels).



**Proposition A.1 (Uniform fixed-circuit kinetic rate).**

<a id="kin:rate"></a> Fix the complete finite graph, the clock Hamiltonian $H_F$, its first-pass horizon $T$, and $0<\kappa_-\le\kappa_e\le\kappa_+$. Suppose the initial census has expected $\ell^1$ error $O(N^{-1/2})$ and the tag starts from $\nu\le Cw(0)$ with fixed $C$. The iid equilibrium and the known basis-ready preparations satisfy this condition. With 

$$

 \mu_N=N^{1/2},\qquad \delta=N^{-1/7},\qquad
 \varepsilon=N^{-1/35},

$$

 the signed-queue path error obeys <a id="kin:explicit-rate"></a>


$$

 \epsilon_{\rm kin}(N,T)=O(N^{-1/70}).

$$

Equation (56).

 For equilibrium use, the constants are uniform over all normalized inputs on this fixed material space. A reference included in the configuration basis is part of the fixed graph; a declared spectator fibre does not enlarge the operator-norm constants. With the gas and recombination scales of Theorem [8.1](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#thm:main), the full pilot path error is also $O(N^{-1/70})$. 

 

**Proof.**

Write $D=|V|$, $m=|E|$, $H_* =\|H_F\|$, and let ${\operatorname{Var}}$ denote total variation in physical time. Each edge current is a bounded quadratic form in the normalized input. Safe input-independent bounds are 

$$

 J_*\le 2H_*/\hbar,\qquad
 L\le 2mH_*T/\hbar,\qquad
 \sum_e{\operatorname{Var}}(J_e)\le 4mH_*^2T/\hbar^2.

$$

 The last inequality follows by differentiating each current expectation and using $\|\dot\Psi\|\le H_*/\hbar$. All source variation, birth and census-jump budgets in Theorem [7.1](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:tracking) are therefore uniform.

For $0<\delta\le1$ put $\alpha=\mu_N/N\le1$ and $a_0=\kappa_-\delta$, $a_1=\kappa_+$. In the proof of Theorem [7.1](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:tracking), the instantaneous companion root has ${\operatorname{Var}}(f)=O(\delta^{-2})$ and $|f(0)|=O(\delta^{-1})$. Its deterministic integrated tracking cost is consequently $O((\mu_N\delta^3)^{-1})$. The square-jump estimate there gives 

$$

 V'\le-2\mu_Na_0V+
 \mu_N\alpha a_1(J_*/a_0+2c_0\alpha+\sqrt V).

$$

 Using $\alpha a_1\sqrt V\le a_0V+\alpha^2a_1^2/(4a_0)$ and $V(0)=0$ yields 

$$

 \sup_{t\le T}V(t)\le
 \frac{\alpha a_1J_*}{a_0^2}
 +\frac{2c_0a_1\alpha^2}{a_0}
 +\frac{\alpha^2a_1^2}{4a_0^2}
 \le C\frac{\alpha+\alpha^2}{\delta^2}.

$$

 The deterministic export discrepancy is $O(\alpha)$, so [(23)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:R) and [(25)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:smallflux) have the explicit forms <a id="kin:cutoff-rates"></a>


$$
\begin{aligned}
 R_{\delta,N}&\le C\left[
 \frac{1}{\mu_N\delta^3}
 +\frac{\sqrt{\mu_N/N}+\mu_N/N}{\delta}\right],\\
 D_{\delta,N}&\le C\sqrt{\delta+(\mu_N\delta)^{-1}
                    +{\mathbb E}\eta_N}.
\end{aligned}
$$

Equation (57).

 Here and below constants depend on the fixed graph, programme and response bounds, not on the input or the two cutoffs.

For iid equilibrium, direct multinomial variance gives ${\mathbb E}\|x^N(0)-w(0)\|_1\le\sqrt{D/N}$. For a separately initialized dominated tag and $N-1$ independent equilibrium carriers, add at most $2/N$. The deterministic basis-ready census has zero initial error. The tracking proof applies conditionally on the initial census and then averages; Jensen's inequality handles the square root in the low-mass estimate. Its population martingale obeys 

$$

 \epsilon_{x,N}\le{\mathbb E}\|x^N(0)-w(0)\|_1
   +C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}.

$$

 With $\mu_N=N^{1/2}$ and $\delta=N^{-1/7}$, the leading deterministic term of [(57)](/quantum-measurement/research/hybrid-bell-paths/appendix-a-initial-calibration-and-fixed-circuit-resource-rates#kin:cutoff-rates) is $N^{-1/14}$, its square-root noise term is $N^{-3/28}$, and $D_{\delta,N}=O(N^{-1/14})$. Equation [(26)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:fluxbridge) therefore gives 

$$

 \epsilon_{F,N}+\epsilon_{x,N}=O(N^{-1/14}).

$$



For the clock family [(37)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:weights), each fine weight is a nonnegative input-dependent coefficient times a unimodal binomial envelope. Count entries into a sublevel set directly: each weight has at most two boundary entries on $[0,T]$, including tangencies. A coefficient may put its maximum exactly at $\varepsilon$, so a common regular value is not assumed. Initial small-weight mass, jump influx and these entries give the uniform node budget 

$$

 b_C(\varepsilon)\le C\bigl(3D\varepsilon+C_0T\sqrt\varepsilon\bigr).

$$

 Use this budget in [(29)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:pathbound). At $\varepsilon=N^{-1/35}$ the node term and the $\epsilon_{x,N}/\varepsilon^2$ term are $O(N^{-1/70})$; the $ (\epsilon_{x,N}+\epsilon_{F,N})/\varepsilon$ term is $O(N^{-3/70})$. This proves [(56)](/quantum-measurement/research/hybrid-bell-paths/appendix-a-initial-calibration-and-fixed-circuit-resource-rates#kin:explicit-rate). The gas and recombination contributions are respectively $O(N^{-2})$ and $O(N^{-1/2})$, so they do not worsen this conservative rate. 

□



On $[0,2T]$ at most four level entries per weight replace the node bound by $C(5D\varepsilon+2C_0T\sqrt\varepsilon)$; the same rate applies to the reversed full path. That second pass unwrites the records and is not an extension of the first-pass archive theorem. Merely assuming $\mathbb E\|x^N(0)-w(0)\|_1\to0$ without a rate does not imply [(56)](/quantum-measurement/research/hybrid-bell-paths/appendix-a-initial-calibration-and-fixed-circuit-resource-rates#kin:explicit-rate). Nor does this estimate apply uniformly to a growing graph, increasing fine reference, changing Hamiltonian or unbounded storage time.
