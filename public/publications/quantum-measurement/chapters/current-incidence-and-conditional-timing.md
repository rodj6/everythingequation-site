# Chapter 14: Current, incidence, and conditional timing

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

<a id="stat:current-chapter"></a> 

The Hamiltonian continuity equation does not by itself specify a stochastic history. This part consolidates a variational current-to-history selection argument and the countermodels that delimit it. The principal result is a finite-horizon theorem over a class that initially permits history-dependent reaction rates. A proposed relative-entropy law selects an explicit finite-background process, and its zero-background limit is the Hamiltonian Bell process, with a total-variation estimate on complete paths. The probability-bearing premises remain visible. This result selects timing within its stated class, but does not deduce a stochastic law from source/readout incompleteness alone [[M30](/quantum-measurement/monograph/bibliography#bib-M30), [C03](/quantum-measurement/monograph/bibliography#bib-C03), [DGGTZ](/quantum-measurement/monograph/bibliography#bib-BellQFT)]. The later pilot construction uses microscopic gas and reaction dynamics instead of this path-entropy premise. 



<a id="section-14-1"></a>

## 14.1 The wave programme and the actual history

 

Let $\mathcal H$ be finite dimensional and let $P_1,\ldots,P_d$ be a fixed orthogonal resolution of its identity. A normalized source wave satisfies <a id="stat:schrodinger"></a>


$$

 i\hbar\dot\Psi_t=H(t)\Psi_t,
 \qquad w_m(t)=\|P_m\Psi_t\|^2,
 \qquad
 J_{nm}(t)=\frac{2}{\hbar}\operatorname{Im}
       \langle\Psi_t,P_nH(t)P_m\Psi_t\rangle.

$$

Equation (14.1).

 The time parameter is physical time. It is not replaced by accumulated exposure. Throughout the main theorem $H$ has finitely many constant, self-adjoint segments on a fixed interval $[0,T]$. This gives an analytic extension of the wave across each closed segment considered separately. No finite-node assertion is inferred merely from analyticity on an open interval with a possibly singular endpoint. 

The source state includes $\Psi_t$, an actual sector $X_t$, and all future-active apparatus and memory factors. For a fixed complete preparation and an open-loop joint Hamiltonian, $\Psi_t$ is deterministic. An event changes $X_t$; it does not collapse or reset the full wave. A null interval advances the same wave while leaving the actual sector unchanged. A record is a specified function of the joint configuration or of a physically acquired archive. A freely readable copy of the unperturbed history is not supplied by this definition. 

Let $N_{nm}(t)$ count transitions $m\to n$ up to time $t$. A candidate law $P$ is carried by the finite-jump paths in $D([0,T],\{1,\ldots,d\})$. Its natural filtration is denoted $\mathcal F_t$. Predictable intensities are written $\lambda_{nm}(t\mid\mathcal F_{t-})$ on the event $X_{t-}=m$; they may initially depend on the entire observed native history. The compensator convention is <a id="stat:compensator"></a>


$$

 A_{nm}(t)=\int_0^t 1_{\{X_{s-}=m\}}
       \lambda_{nm}(s\mid\mathcal F_{s-})\,ds,
 \qquad N_{nm}-A_{nm}\text{ is a martingale}.

$$

Equation (14.2).

 All candidates used below have finite expected total jump count. Define their directed expected flows by <a id="stat:mean-flow"></a>


$$

 F_{nm}(t)=\mathbb E_P\!\left[
   1_{\{X_{t-}=m\}}\lambda_{nm}(t\mid\mathcal F_{t-})\right].

$$

Equation (14.3).

 Thus $\mathbb E_P N_{nm}(B)=\int_B F_{nm}(t)\,dt$ for every measurable time set $B$. 



**Assumption 14.1 (Statistical current realization).**

<a id="stat:matching"></a> For each complete unordered sector pair, the actual expected signed event flow equals the specified Hamiltonian current: <a id="stat:pair-current"></a>


$$

 F_{nm}(t)-F_{mn}(t)=J_{nm}(t)
 \quad\text{for almost every }t.

$$

Equation (14.4).

 

 

This is an identification of a source current with an expectation of actual counts. Assigning a conserved nonprobabilistic charge the density $w$ and flux $J$ does not already prove it. Likewise, the random atomic measure $dN_{nm}$ cannot be set equal pathwise to the usually absolutely continuous measure $[J_{nm}]_+dt$. Even the signed difference of the two pathwise count measures is atomic. Equation [(14.4)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:pair-current) concerns mean measures, and [(14.2)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:compensator) concerns conditional expectations. 

A permanently inaccessible reference may be included inside the sector fibers. For a finite carried system with an arbitrary reference and local controls $H_{SA}\otimes I_R$, the initial Schmidt support in $R$ is finite and is preserved by all such controls. The finite-dimensional theorems therefore apply on that invariant support. This does not grant control of the reference or extra copies of the unknown input. 



<a id="section-14-2"></a>

## 14.2 Three different restrictions on an event law

 



**Proposition 14.2 (Continuity, pair matching, and remaining traffic).**

 <a id="stat:traffic-family"></a> The wave data in [(14.1)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:schrodinger) satisfy <a id="stat:continuity"></a>


$$

 J_{nm}=-J_{mn},\qquad \dot w_n=\sum_{m\ne n}J_{nm}.

$$

Equation (14.5).

 Under Assumption [14.1](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:matching), every candidate satisfies <a id="stat:offset"></a>


$$

 \pi_n(t)=w_n(t)+c_n,
 \qquad \pi_n(t)=P(X_t=n),\quad c_n=\pi_n(0)-w_n(0).

$$

Equation (14.6).

 At any time the nonnegative flows realizing a fixed pair current have exactly the form <a id="stat:surplus"></a>


$$

 F_{nm}=[J_{nm}]_++K_{nm},\qquad
 K_{nm}=K_{mn}\geq0.

$$

Equation (14.7).

 Matching only the divergences $\sum_m(F_{nm}-F_{mn})=\dot w_n$ is weaker: it permits antisymmetric current reassignments with zero divergence in addition to the symmetric surplus in [(14.7)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:surplus). 

 

**Proof.**

Differentiate $\langle\Psi,P_n\Psi\rangle$ using Schrödinger evolution and self-adjointness. Inserting the sector resolution gives [(14.5)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:continuity). On every finite-jump path, 

$$

 1_{\{X_t=n\}}-1_{\{X_0=n\}}
   =\sum_{m\ne n}\bigl(N_{nm}(t)-N_{mn}(t)\bigr).

$$

 Take expectations, substitute [(14.4)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:pair-current), and integrate [(14.5)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:continuity). This proves [(14.6)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:offset). For a pair with $J_{nm}\geq0$, set $K_{nm}=F_{mn}$. Then $F_{nm}=J_{nm}+K_{nm}$. Reversing the orientation covers the other sign and proves uniqueness of the surplus. Finally, for a current array $\widetilde J$ with the same divergence as $J$, $C=\widetilde J-J$ is antisymmetric and has zero row sums. Conversely, any such $C$ preserves the divergence. Taking $F_{nm}=[J_{nm}+C_{nm}]_++K_{nm}$ realizes that divergence with nonnegative flows. On graphs with cycles nonzero choices of $C$ exist. 

□

 

Consequently equivariance, pairwise Hamiltonian-current matching, minimal directed traffic, and full conditional timing are different mathematical claims. Initial equality $\pi(0)=w(0)$ plus pair matching implies equivariance; it does not remove $K$, and it does not make conditional rates constant across histories with the same present sector. 



**Example 14.3 (A stationary Hamiltonian circulation).**

<a id="stat:ring"></a> On three sectors let $S|m\rangle=|m+1\bmod3\rangle$ and <a id="stat:ring-hamiltonian"></a>


$$

 H=\frac{i\hbar a}{2}(S-S^\dagger),\qquad
 \Psi=\frac{|0\rangle+|1\rangle+|2\rangle}{\sqrt3},\qquad a>0.

$$

Equation (14.8).

 Here $H\Psi=0$, each weight is $1/3$, and the clockwise current on each edge is $a/3$. Thus zero actual traffic preserves the weights but fails pair matching. Within the matching class, the Markov rates <a id="stat:ring-surplus"></a>


$$

 k_{m+1,m}=(1+c)a,\qquad k_{m,m+1}=ca,\qquad c\geq0,

$$

Equation (14.9).

 all preserve the weights and currents. They use the same declared source coordinates $(\Psi,X)$; an additional quotient-fiber representative is not needed. Their first-event survival is $e^{-(1+2c)at}$, so the surplus changes finite event timing. 

 

This example separates informational completion from a physical preference for fewer events. It also shows why minimizing total activity subject only to population continuity would erase a stationary Hamiltonian circulation: zero activity is then admissible. An event-law variational principle must state whether it constrains each Hamiltonian edge or only its divergence. 



**Corollary 14.4 (Reduced reservoir rates do not bound actual turnover).**

 <a id="stat:reservoir-turnover"></a> Suppose a reduced population calculation supplies 

$$

 \dot p_1=k_{10}(t)p_0-k_{01}(t)p_1,\qquad p_0+p_1=1,

$$

 with bounded nonnegative rates on a finite interval. For every bounded nonnegative function $b(t)$, the time-inhomogeneous Markov rates 

$$

 \widehat\lambda_{10}=k_{10}+b p_1,\qquad
 \widehat\lambda_{01}=k_{01}+b p_0

$$

 give the same population solution from the same initial law. Their extra expected traffic is $2\int b p_0p_1\,dt$. 

 

**Proof.**

The extra directed flows both equal $B=b p_0p_1$, so they cancel in the forward equation. Uniqueness of the finite-state forward equation gives the asserted marginals, and summing the two extra flows gives the count. The rates remain bounded even at a node: this realization of the formal addition $B/p_i$ needs no singular division there. 

□

 For example, take $p_0=p_1=1/2$, $k_{10}=k_{01}=\kappa$ and constant $b>0$. The first-event survival changes from $e^{-\kappa T}$ to $e^{-(\kappa+b/2)T}$, while every population is unchanged. Even when a weak-coupling calculation gives $\kappa=O(|g|^2)\to0$, the additional turnover need not vanish. This is a counterexample to inference from a reduced population equation, not an assertion that these rates arise from the same fully specified microscopic Hamiltonian. A microscopic record-reliability argument must identify its actual generator or bound surplus traffic separately [[C03](/quantum-measurement/monograph/bibliography#bib-C03)]; compare Equation [(26.5)](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:traffic) and the product-field calculation in Appendix [C](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:chapter). 



<a id="section-14-3"></a>

## 14.3 Minimal mean incidence does not determine a history

 



**Proposition 14.5 (Non-Markov rivals with exactly minimal mean flow).**

 <a id="stat:renewal"></a> For the fixed wave programme of Example [14.3](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:ring), there are stationary clockwise processes having weights $1/3$, mean edge flow $a/3$, and no counterclockwise events, whose complete path laws differ from the clockwise rate-$a$ Bell process. One such competitor has bounded natural-filtration intensities and finite relative entropy to every strictly positive constant-rate Markov reference on a finite horizon. 

 

**Proof.**

First let $\Theta$ be uniform on $[0,3)$ and set 

$$

 X_t=\lfloor\Theta+at\rfloor\bmod3.

$$

 The translating phase is uniform modulo $3$ at each time, so sector weights are $1/3$. Each edge is crossed with stationary intensity $a/3$ in the mean. The first waiting time is uniform on $[0,1/a]$ and all subsequent interevent times equal $1/a$. Hence the no-event probability is $(1-at)_+$, differing from $e^{-at}$ by $e^{-1}$ at $t=1/a$. This competitor has a singular clock and is not used in the finite-entropy minimization below. 

For a regular competitor take a stationary renewal process whose interevent law is Erlang with shape $2$ and rate $2a$: 

$$

 f_L(u)=4a^2u e^{-2au},\qquad
 S_L(u)=e^{-2au}(1+2au),\qquad \mathbb E L=1/a.

$$

 Such a process on the line can be constructed by taking the interval containing zero from the size-biased law $a\ell f_L(\ell)d\ell$, placing zero uniformly in that interval, and using independent copies of $L$ to either side. Give the sector at zero an independent uniform label and advance it clockwise at each renewal. Stationary event intensity is $a$, and uniform translation of the independent sector label gives mean flow $a/3$ on every edge. There are no reverse events. 

The residual first-wait survival is <a id="stat:erlang-survival"></a>


$$

 S_{\rm res}(t)=a\int_t^\infty S_L(u)\,du
              =e^{-2at}(1+at).

$$

Equation (14.10).

 Its hazard before the first observed event is $a(1+2at)/(1+at)$, bounded by $2a$. After an observed event, the hazard at age $u$ is <a id="stat:erlang-hazard"></a>


$$

 h_L(u)=\frac{4a^2u}{1+2au},

$$

Equation (14.11).

 also bounded by $2a$ and not constant. Thus the natural history changes the conditional law while the current and mean directed incidence remain unchanged. The process has finitely many expected jumps, and its bounded intensities give finite path relative entropy against any reference whose finite set of rates is strictly positive. The entropy identity proved in Lemma [15.3](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:entropy-identity) makes this last assertion explicit: its integrand is bounded on $0\leq\lambda\leq2a$, including $\lambda=0$. 

□

 

No assumption of complete current information rules out this example by itself. One can encode its age in a hidden source coordinate or leave it in a history-dependent kernel. Requiring $(\Psi,X)$ to be statistically sufficient for the future rules it out, but that requirement supplies a stochastic closure law. In a time-inhomogeneous Markov theory the first-wait survival from $m$ at $s$ is <a id="stat:survival"></a>


$$

 S_m(s,t)=\exp\left(-\int_s^t\sum_{n\ne m} k_{nm}(u)\,du\right).

$$

Equation (14.12).

 It is an ordinary exponential in elapsed time only when the total rate is constant. The usual unit exponential variable is a threshold in integrated hazard, not a claim that every physical waiting time has constant rate. 



<a id="section-14-4"></a>

## 14.4 Calibration from a control-stable statistical premise

 



**Theorem 14.6 (Coherent-evacuation calibration).**

<a id="stat:calibration"></a> Suppose a single finite wave programme admits an actual finite-mean-count history satisfying Assumption [14.1](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:matching). Suppose that for each sector $n$ there is a time $t_n\in[0,T]$ at which $w_n(t_n)=0$. Then $\pi(t)=w(t)$ throughout that programme, without separately stipulating the initial occupancy distribution. 

 

**Proof.**

By [(14.6)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:offset), $\pi_n=w_n+c_n$. At $t_n$, positivity implies $c_n=\pi_n(t_n)\geq0$. Both distributions have total mass one, so $\sum_n c_n=0$. Therefore every $c_n$ vanishes. 

□

 

A fixed ancillary flip supplies a nonempty programme with the required zeros. Let an unknown source $S$ be entangled with an inaccessible reference $R$, let $\{Q_k\}$ be a chosen resolution on $S$, and prepare the *wave* of a two-level ancilla $A$ as $|0\rangle$. Declare the joint sectors $Q_k\otimes I_R\otimes|b\rangle\langle b|$ and use <a id="stat:ancilla-flip"></a>


$$

 H_A=\hbar g I_{SR}\otimes\sigma_x,\qquad
 0\leq t\leq\pi/(2g).

$$

Equation (14.13).

 With $v_k=\|(Q_k\otimes I_R)\Psi\|^2$, direct evolution gives <a id="stat:flip-current"></a>


$$

 w_{k0}=v_k\cos^2(gt),\qquad w_{k1}=v_k\sin^2(gt),
 \qquad J_{k1,k0}=gv_k\sin(2gt).

$$

Equation (14.14).

 Every $(k,1)$ sector is empty initially, and every $(k,0)$ sector is empty finally. No actual ancillary distribution was used in this calculation. The theorem forces the complete occupancy weights if current realization holds in every $k$ block. Merely matching the summed ancillary current does not calibrate the source-sector weights. The flip leaves the unknown $SR$ wave and its reference correlations untouched. 

This is a consistency theorem for an admitted class of preparations and controls, not a relaxation procedure for arbitrary nonequilibrium. An initial $\pi\ne w$ simply cannot satisfy the same statistical-current premise throughout that programme. To infer the law for an experiment that chooses another later control, the allowed preparations must obey causal stability: the already prepared distribution cannot depend on which later allowed programme is selected. Preparation of the ancillary wave and validity of blockwise current realization under its control remain physical premises. A reversed flip does not make its retained history a fresh independent resource. 



**Corollary 14.7 (Finite calibration defect).**

<a id="stat:calibration-defect"></a> Suppose instead that $\pi_n(t)=w_n(t)+c_n+e_n(t)$, where $e_n(0)=0$ and $|e_n(t)|\leq\delta_n$. If every sector has a time with $w_n(t_n)\leq\zeta_n$, then, with total variation normalized as one half of $\ell^1$ distance, <a id="stat:calibration-bound"></a>


$$

 d_{\rm TV}(\pi(0),w(0))\leq\sum_n(\zeta_n+\delta_n).

$$

Equation (14.15).

 

 

**Proof.**

Positivity at $t_n$ gives $c_n\geq-\zeta_n-\delta_n$. Since $\sum_n c_n=0$, $d_{\rm TV}=\sum_{c_n<0}|c_n|$, proving the bound. For a current defect $r_{nm}=F_{nm}-F_{mn}-J_{nm}$, the counting identity supplies $e_n(t)=\int_0^t\sum_m r_{nm}(s)ds$, so the hypothesis can be checked from an integrated statistical-current error rather than presumed pointwise. 

□
