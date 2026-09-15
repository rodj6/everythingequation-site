# Chapter 33: Statistical alternatives and the preparation-to-record chain

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

<a id="prep:alternatives"></a> 

This chapter consolidates the intrinsic clock preparation of [[M19](/quantum-measurement/monograph/bibliography#bib-M19)], the causal quantile selection of [[M20](/quantum-measurement/monograph/bibliography#bib-M20)], and the SWAP preparation calculation of [[C01](/quantum-measurement/monograph/bibliography#bib-C01), [C02](/quantum-measurement/monograph/bibliography#bib-C02)]. They have different premises. One adds new Poisson source physics; one selects a distribution by a causal statistical requirement; one consumes an already definite resource under an admitted Bell law. None is a renamed proof of reversible global equilibration. 



<a id="section-33-1"></a>

## 33.1 A homogeneous switching clock with exact conditional heralding

 

Let a rotor have circumference $\ell$ and known flat wave $\phi_0=\ell^{-1/2}$. Its actual initial position $Q_0$, a drive sign $\sigma_0\in\{-1,+1\}$, and every old memory $M$ may have an arbitrary joint law, including atoms and exact copies. The unknown input is disconnected during preparation. Between events the wave generator is $H_\sigma=c\sigma P_Q$, which leaves the flat wave invariant, and guidance gives $\dot Q=c\sigma$. 

The explicitly new primitive is homogeneous Poisson sign switching, independent of the complete initial source and actual past. A physical count register $C$ is updated at each flip. On functions of actual variables, <a id="prep:rotorgenerator"></a>


$$
\mathcal L F(q,\sigma,C,m)
 =c\sigma\partial_qF
  +\kappa\{F(q,-\sigma,C+1,m)-F(q,\sigma,C,m)\}.
 

$$

Equation (33.1).

 The wave is unchanged at the flip; the complete source is a specified classical-controller/quantum-wave extension. It is not obtained by measuring an auxiliary system with Born probabilities. 

A block clock ends each interval at 

$$

 T=\frac{\ell}{2c},\qquad \kappa T=1.

$$

 The physical counter retains block counts, final sign, block number and success/failure flags. It has no within-block flip-time register. Accept the first completed block containing exactly one flip, with at most $n$ blocks. This is a deterministic decision on a primitive physical count, not a calibrated quantum measurement. 



**Lemma 33.1 (Uniform displacement from a singleton block).**

 <a id="prep:singleton"></a> Conditional on one flip in a complete block, its time $S$ is uniform on $(0,T)$ and independent of all incoming variables. The displacement modulo $\ell$ is uniform, independently of the incoming position and sign. 

 

**Proof.**

The unnormalized density for a flip at $s$ and no other flip in the block is $\kappa e^{-\kappa T}\,ds$. Its normalization is $ds/T$. Integrating the two constant velocities gives 

$$

 Q_T=Q_0+c\sigma_0(2S-T)\pmod\ell.

$$

 As $S$ traverses $(0,T)$, $2cS$ traverses one full circumference. Translation and reflection preserve the uniform measure on the circle. 

□

 



**Theorem 33.2 (Count-heralded conditional equilibrium).**

 <a id="prep:herald"></a> Retain the old bank $M$, the initial and final signs, all completed block counts, the stopping index, and the success/failure flag. For every accepted count history, 

$$

 \mathbb P(Q_{\rm ready}\in dq\mid
         M,\sigma_0,C_1,\ldots,C_K,\sigma_K,K,\mathrm{success})
       =\frac{dq}{\ell}.

$$

 The success probability is <a id="prep:success"></a>


$$
s_n=1-(1-e^{-1})^n.
 

$$

Equation (33.2).

 On failure the flat wave, actual translated position, count history and failure flag remain; no ready configuration is substituted. 

 

**Proof.**

The block counts are independent Poisson$(1)$ variables. Conditional on a complete count string, point times in distinct blocks remain independent. The accepted block convolves its arbitrary incoming conditional position law with a uniform displacement by Lemma [33.1](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:singleton). Its starting sign is determined by the initial sign and previous count parities. Its final sign depends on count parity, not on the new uniform flip time. Conditioning on all listed variables therefore leaves the ready position uniform. Rejection of earlier blocks conditions only on their counts; it does not select a subinterval of the accepted flip time. Each block has singleton probability $e^{-1}$, which gives [(33.2)](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:success). 

□

 

There is also an unheralded theorem. Run all $n$ blocks and retain all counts and signs. If at least one count is one, that block supplies a uniform displacement and later independent translations preserve it. Only count strings with no singleton can be biased. Hence 

$$

 \operatorname{TV}\left(P_{Q,A},\frac{dq}{\ell}P_A\right)
       \le(1-e^{-1})^n.

$$

 This conclusion retains the count archive rather than averaging it away. 

The expected numbers of executed blocks and flips before the capped stopping rule are both $[1-(1-e^{-1})^n]/e^{-1}\le e$. For blocks this is a finite geometric sum. For flips, the indicator that a block is executed depends only on earlier counts, independently of its mean-one count. Thus expected preparation time is at most $e\ell/(2c)$. Maximum time and path length are $n\ell/(2c)$ and $n\ell/2$. 

A finite counter with capacity $R$ stops and rejects on the $(R+1)$st attempted flip. Coupling to an uncapped $n$-block process gives 

$$

 \mathbb P(\mathrm{success})\ge
       1-(1-e^{-1})^n-b_{n,R},\qquad
 b_{n,R}=\mathbb P(\operatorname{Poisson}(n)>R).

$$

 For $R+1>n$, exponential Markov inequality optimized at $e^t=(R+1)/n$ gives 

$$

 b_{n,R}\le
 \exp\!\left[-n+(R+1)\!\left(1+\log\frac n{R+1}\right)\right].

$$

 Accepted histories still have exact conditional equilibrium because the budget conditions only on counts. The exhaustion branch retains its actual position and stopped wave. 



<a id="section-33-2"></a>

## 33.2 Clock access, finite precision, and the exact interface boundary

 

The conditional theorem depends on its declared count-only interface. Take $Q_0=\ell/2$, $\sigma_0=+1$, and a singleton block. Then $Q_T=2cS\pmod\ell$. A new physical bit $B=1_{\{S>T/2\}}$ records exactly the half-circle of $Q_T$. The joint law of $(Q_T,B)$ has distance $1/2$ from uniform rotor times its unchanged bit marginal. With symmetric bit error $\zeta$, the distance is $(1-2\zeta)/2$; including the success branch before conditioning leaves an unconditioned distinguishing gap $(1-2\zeta)/(2e)$. 

The bit is not ruled out by wave linearity or independence of the Poisson increments. It changes the timing-neutral update [(33.1)](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:rotorgenerator). A mechanical version adds an archive rotor with initial exact copy $A_Q=Q_0$ and generator $c\sigma(P_Q+P_{A_Q})$. Both actual positions receive the same drive, so the copy stays exact. An old copy frozen during a final independent preparation block is harmless by Theorem [33.2](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:herald); a newly driven copy is not. The completed repair is to disconnect the wire and perform that final preparation. Continuously recording the new flip phase defeats every such finite refresh. 

Exactness has a quantitative geometric boundary. For a homogeneous singleton block with duration $T$ and speed $c$, put $r=2cT/\ell=m+\theta$, $m\in\mathbb N_0$, $0\le\theta<1$. The wrapped displacement density is $(m+1)/r$ on an arc of relative length $\theta$ and $m/r$ elsewhere. Direct integration yields <a id="prep:wraperror"></a>


$$
\operatorname{TV}(P_{\rm disp},\mathrm{Uniform})
       =\frac{\theta(1-\theta)}r.
 

$$

Equation (33.3).

 Near one wrap, $r=1+\delta$, $|\delta|<1$, this is at most $|\delta|$. Convolution gives the same bound uniformly for singular incoming positions. The singleton success probability is now $\kappa Te^{-\kappa T}$, so altered throughput must be counted separately. 

For a preselected positive rate schedule $\kappa(t)$, define $A(t)=\int_0^t\kappa(s)ds$, end the block at $A(T)=1$, and set $c(t)=\ell\kappa(t)/2$. Conditional on one flip, $A(S)$ is uniform and the displacement is $\sigma_0\ell(A(S)-1/2)$. Thus exact preparation survives shared preselected modulation. It need not survive feedback from new flips: with rate one before the first flip and two afterward in action units, a singleton flip at phase $s$ yields physical duration $(1+s)/2$. A retained duration then reveals the phase. Merely matching speed and rate does not remove that archive. 

The new probability law has not been moved into an equilibrium bath. Its statistical content is instead explicit in the Poisson primitive. Its instantaneous transitions, flat wave, timing-neutral count contact and resource independence remain constitutive inputs. A microscopic finite-band switching derivation is not supplied by this theorem. 



<a id="section-33-3"></a>

## 33.3 Causal selection of an initially unspecified ready law

 

Return to the continuous detector of Theorem [25.3](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:exit), but initially leave its quantile law unspecified. Let $F_0$ be the CDF of its known packet and let $U=F_0(X_0)$ have an atomless law $\nu$ on $(0,1)$. The guidance identity $F_t(X_t)=U$ still holds on the admitted conservative flow. At full separation, the right packet occupies ranks $(1-p,1)$. Therefore <a id="prep:response"></a>


$$
\mathbb P(+)=f(p),\qquad f(p):=\nu((1-p,1)).
 

$$

Equation (33.4).

 It equals $p$ for every $p$ if and only if $\nu$ is uniform. For $\nu(du)=[1+\epsilon(2u-1)]du$, $f(p)=p+\epsilon p(1-p)$. 

The selection principle of [[M20](/quantum-measurement/monograph/bibliography#bib-M20)] is independent of the target formula: an optional local detector activation, with no return, communication or feedback coupling to a distant detector, does not change that distant detector's terminal record law. The actual resource assumption is two independent pointer quantiles with laws $\nu_A,\nu_B$, independent of the known coherent input and complete admitted preparation history. This is a statistical causal premise, not a consequence of commuting wave Hamiltonians. 

Use known coherent preparations 

$$

 \psi_{st}=\sqrt{st}|00\rangle+\sqrt{s(1-t)}|01\rangle
                         +\sqrt{1-s}|11\rangle,\qquad
 \chi_s=\sqrt s|01\rangle+\sqrt{1-s}|10\rangle.

$$

 Alice's optional detector is completed and its actual pointer is frozen with disjoint supports before Bob uses his unchanged local reader. For the first input, Bob alone gives $f_B(st)$. With Alice's interaction, her branch zero has probability $f_A(s)$, and at its occupied frozen coordinate Bob's local population is $t$. Her other branch gives zero. Independence of the pointer configurations leaves Bob's original quantile law unchanged conditional on Alice's event. Thus <a id="prep:causaltests"></a>


$$
\begin{aligned}\mathbb P_{\rm off}(B=0)&=f_B(st),&
 \mathbb P_{\rm on}(B=0)&=f_A(s)f_B(t),\\
 \mathbb P_{\rm off}^{\chi_s}(B=0)&=f_B(1-s),&
 \mathbb P_{\rm on}^{\chi_s}(B=0)&=1-f_A(s).
 
\end{aligned}
$$

Equation (33.5, 33.6).

 The local branch statement follows directly from separated packet supports and the full wave; no Born-weighted steering measurement is assumed. The known coherent amplitude controls are stronger preparation resources than an arbitrary unknown input and are counted here. 



**Theorem 33.3 (Causal quantile selection).**

<a id="prep:causal"></a> Within this source and independent-resource class, neutrality in both families [(33.6)](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:causaltests) for every $s,t\in[0,1]$ holds if and only if both pointer quantile laws are uniform. 

 

**Proof.**

The equalities give $f_B(st)=f_A(s)f_B(t)$ and $f_B(1-s)=1-f_A(s)$. Since $f_B(1)=1$, take $t=1$ to obtain $f_A=f_B=:f$. Then $f(st)=f(s)f(t)$ and $f(s)+f(1-s)=1$. For $x+y\le1$, $x+y>0$, 

$$

 f(x)+f(y)
 =f(x+y)\left[f\!\left(\frac{x}{x+y}\right)
             +f\!\left(\frac{y}{x+y}\right)\right]
 =f(x+y).

$$

 It follows that $f(k/n)=k/n$. Monotonicity of tail probabilities and rational approximation give $f(p)=p$ on the whole interval. Its values determine the uniform law. The converse follows by substitution in the actual event probabilities. 

□

 

This is an equivalence theorem within a supplied physical class. It replaces an explicit distribution by an independently described causal test, but it does not derive causal neutrality, coherent access to the test preparations, or conditional independence from the older source/readout premise. It is not an attracting preparation dynamics. 

For a common response, suppose instead $|f(st)-f(s)f(t)|\le\epsilon$ and $|f(s)+f(1-s)-1|\le\epsilon$, uniformly, $0\le\epsilon<1$. Then <a id="prep:causalerror"></a>


$$
D:=\sup_p|f(p)-p|\le\min\{1,5\epsilon/(1-\epsilon)\}.
 

$$

Equation (33.7).

 Indeed put $a=f(1/2)$, so $|a-1/2|\le\epsilon/2$. For $p\le1/2$, multiplicativity at $(1/2,2p)$ gives $|f(p)-p|\le aD+3\epsilon/2$. Complementation adds at most $\epsilon$ for $p\ge1/2$. Thus $(1-a)D\le5\epsilon/2$ and $1-a\ge(1-\epsilon)/2$. For different readers with both causal errors bounded by $\epsilon$, the same tests first give $\|f_A-f_B\|_\infty\le\epsilon$; applying the preceding estimate with defect $2\epsilon$ to $f_B$ gives $D_B\le\min(1,10\epsilon/(1-2\epsilon))$ when $\epsilon<1/2$. 

This is terminal interval control. It is insufficient for complete timing. For $\nu_N(du)=[1+b\cos(2\pi Nu)]du$, 

$$

 \sup_p|f_N(p)-p|\le\frac{|b|}{2\pi N},\qquad
 \operatorname{TV}(\nu_N,du)=\frac{|b|}{\pi}.

$$

 For a calibrated one-outlet input, exit time is an invertible monotone function of the initial packet rank, so its full time law retains the latter discrepancy. Finite sufficiently fine clock bins approximate it. Neither a finite calibration set nor arbitrarily small uniform terminal error implies complete-history total variation. 



<a id="section-33-4"></a>

## 33.4 SWAP prepares a subsystem by exporting its old state

 

A finite discrete construction clarifies a different preparation resource. Let a source $S$ and ancilla $B$ have equal dimension, let $W$ swap them, and supply a definite ancilla wave and actual configuration $|q\rangle_B$. For 

$$

 H_{\rm sw}=\hbar gW,\qquad
 U_t=\cos(gt)I-i\sin(gt)W,\qquad
 T_{\rm sw}=\frac{\pi}{2g},

$$

 the endpoint unitary is $-iW$. For a full source/reference wave, 

$$

 \sum_n|n\rangle_S R_n\,|q\rangle_B
 \longmapsto-i|q\rangle_S\sum_n|n\rangle_B R_n.

$$

 No reference operation has been performed. 



**Proposition 33.4 (Finite definite-source replacement).**

<a id="prep:swap"></a> Assume the minimal Bell generator on the complete $(S,B)$ configuration during this pulse. For any initial source configuration law supported on the nonzero source wave sectors, the final source configuration is $q$ almost surely. The final ancilla configuration has the original source configuration distribution. Its wave and reference correlations likewise contain the old source state. 

 

**Proof.**

For $n\ne q$, the pair $(n,q),(q,n)$ has wave amplitudes $\cos(gt)R_n$ and $-i\sin(gt)R_n$. Its one-way current divided by its occupied origin weight is $2g\tan(gt)$, independent of $R_n$. Conditional on actual initial $(n,q)$, survival is $\cos^2(gt)$, tending to zero at $T_{\rm sw}$. The unique transfer is $(n,q)\to(q,n)$. The $n=q$ sector stays $(q,q)$. Thus the source is certainly $q$ and the ancilla retains the initial actual label. The wave identity gives the correlated quantum statement. 

□

 The proof does not add an endpoint Born draw and need not assume initial source equilibrium. It assumes Bell timing and a definite fresh ancilla. A second SWAP returns the old wave, reference correlations, and any old nonequilibrium to the source. This is subsystem replacement, not a preparation of the whole closed source in equilibrium. A displayed reset of a used ancilla does not make it fresh. 

If a historical record arrives at time $t_c$, the controller responds after latency $\delta\geq0$, and preparation lasts $T_{\rm prep}$, the replacement statement applies only at $t_p=t_c+\delta+T_{\rm prep}$. Any intervening accessible record must be propagated with the actual controller, unfinished transfer and old memories. Preparing the new source at $t_p$ cannot retrospectively change a record already secured before that time [[C01](/quantum-measurement/monograph/bibliography#bib-C01)]. 



<a id="section-33-5"></a>

## 33.5 Conditional resource banks and complete future experiments

 

The correct integration target retains two kinds of data separately: moving apparatus coordinates $W$, and an exported configuration bank $A$. The latter may have an arbitrary actual distribution. Internal references and returning quantum memories remain within the wave fibers. 



**Theorem 33.5 (Conditional moving-bank closure).**

<a id="prep:bank"></a> Suppose, at each actual archive value $a$, the moving coordinates have the normalized squared-norm law of their complete initial conditional wave. During a declared finite programme assume: 

1. the exported coordinate bank $A$ remains frozen and the complete Hamiltonian is decomposable in $a$;

2. every moving pointer, clock, or new memory belongs to the jointly prepared bank, or is supplied by a preparation guarantee uniform conditional on the complete actual past;

3. the complete linear wave and guidance dynamics have the admitted conservative flows, and all waves and memories that can return are retained.

 Then conditional equilibrium of the moving bank is preserved. Final physical records have the conditional quantum wave probabilities averaged with the actual law of $A$. An initial same-wave joint preparation defect $\delta$ gives complete retained-output distance at most $\delta$ against that comparison. 

 

**Proof.**

At fixed $a$, write the complete wave as a scalar fiber norm times a normalized moving/internal field. Since $A$ is frozen, its fiber norm is conserved. That scalar cancels from all moving-coordinate guidance velocities. The normalized fiber density and its actual conditional distribution satisfy the same conservative transport equation. Uniqueness of the admitted flow preserves their initial equality. The unknown reference is only a vector factor, so no reference access enters this argument. 

A physical adaptive controller is included in the moving bank or acts as a specified position-diagonal control in the frozen bank; the entire programme is one conditional linear evolution. Integrating its final record regions gives the wave probabilities at each $a$. Averaging with the actual $P_A$ gives the asserted comparison. The initial-defect statement is Lemma [32.2](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:push) on the complete wave and actual bank. 

□

 

The class allows an old archive to return as a position-diagonal classical control or to be read by a prepared pointer. It allows coherent returns of moving-bank waves and arbitrary internal quantum memories already accounted for. It excludes motion or coherent recombination of the exported nonequilibrium coordinate itself. The explicit inverse nodal preparation calculates a failure outside that domain. This is a theorem domain, not a universal prohibition on archive motion. 

The nodal resource transfers directly to the binary detector by the affine map $x=2a(u-1/2)$, with packet $(2a)^{-1/2}\phi_\eta((x+a)/(2a))$. The actual law and its TV bound are carried by the same map. Consequently all click, opposite-click, finite null, time, and physical-copy statistics have error at most $M/(4N)+\eta$ under Theorem [33.5](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:bank). The full null wave and every failed-loading mode are those of Theorem [25.3](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:exit), not ideal replacements. 

The heralded flat rotor can be shaped with a finite nonsingular transport. On a circle large enough to contain a nonnegative compact target packet $\phi$, use 

$$

 \rho_\xi(x)=(1-\xi)|\phi(x)|^2+\xi/\ell,\qquad
 g(q)=F_\xi^{-1}(q/\ell),\quad 0<\xi<1.

$$

 Its periodic lift has $g'=1/(\ell\rho_\xi\circ g)\le1/\xi$. The isotopy $g_s=(1-s)\operatorname{id}+sg$ generates the half-density flow [(32.6)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:halfdensity), taking the flat wave to $\sqrt{\rho_\xi}$ and uniform configurations exactly to $\rho_\xi$. For a shaping duration $\tau_s$, its speed is at most $\ell/\tau_s$, and its spatial derivative is bounded by $\max\{\xi^{-1},\ell\|\rho_\xi\|_\infty\}/\tau_s$. Both follow from differentiating $v_s=(g-\operatorname{id})\circ g_s^{-1}/\tau_s$. Moreover 

$$

 \|\sqrt{\rho_\xi}-\phi\|_2
 \le\sqrt{2(1-\sqrt{1-\xi})}\le\sqrt{2\xi},

$$

 because $\int\phi\sqrt{\rho_\xi}\ge\sqrt{1-\xi}$. The actual floor wave, its exits, and its nulls remain present. Comparing it to the compact detector costs this wave norm only for a common complete physical endpoint programme in the conditional equilibrium domain. No bare path-law estimate under different waves follows from this norm alone. 

For normalized conditional equilibrium fields $\alpha(q),\beta(q)$, 

$$

 \bigl\||\alpha\rangle\langle\alpha|
       -|\beta\rangle\langle\beta|\bigr\|_1
 \le(\|\alpha\|+\|\beta\|)\|\alpha-\beta\|.

$$

 Integration and Cauchy–Schwarz show that half the trace norm of their complete position/internal outputs is at most $\|\alpha-\beta\|_2$. Grouping physical records cannot increase this distance. This establishes the needed complete-output comparison directly from the full fields; it is not CP contractivity for an unknown nonlinear event law. 

Suppose the ideal prefixes of a finite programme enter each protected stage in its proved code domain, and a stage of duration $t_j$ has reference-compatible complete-field error $e_j$. With total preparation defect $\delta_{\rm prep}$, loading norm error $d_{\rm load}$, and shaping error $d_{\rm shape}$ when used, <a id="prep:completebudget"></a>


$$
D_{\rm output}\le
 \min\left\{1,\delta_{\rm prep}+d_{\rm load}+d_{\rm shape}
                         +\sum_j e_j\right\}.
 

$$

Equation (33.8).

 First apply Lemma [32.2](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:push) at the same actual wave. For the equilibrium comparator, telescope full unitary products using ideal prefixes and actual unitary suffixes. The next stage estimate is therefore used on an ideal state in its code domain, not on an arbitrary leaked state. Unitary suffixes have norm one; sum the field errors and apply the preceding integrated inequality. The bound covers actual physical endpoint records and their retained internal states on the stated conditional domain. Rare record conditioning requires Lemma [32.3](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:condition)'s denominator. For a classical–quantum output the same bound follows directly: if the event blocks are $p\rho$ and $q\sigma$ with $p\ge q$, then $p\|\rho-\sigma\|_1\le\|p\rho-q\sigma\|_1+p-q$, while the complementary record block contributes at least $p-q$ to the total trace norm. Dividing by two proves the normalized bound. 

If successive supplies each have a guarantee uniform conditional on the complete actual past, their preparation errors add. This follows by coupling each successive supply on its actual matching prefix; probability of any mismatch is at most the sum of the conditional defects. A correct individual marginal at each stage does not support that coupling. 

For a fixed stock and tolerance $\delta$, one may choose $N_i=O((1+M_i)/\delta)$, $\eta_i=O(\delta)$; seed gradient costs are then $O(\delta^{-3})$ at fixed $M_i$. For the stochastic route, choose $n=O(\log(1/\delta))$, $R=Cn$ for a sufficiently large constant $C>1$, and $\xi=O(\delta^2)$. Preparation is completed before attachment to the unknown input. Its controls are switched off and the retained hardware must preserve the uniform interaction bounds required by any aperture estimate. Hardware growth with growing residual coupling is not covered. These simultaneous finite choices keep useful detector response; they do not imply a Gaussian-reader or original Hamiltonian Bell law. 



<a id="section-33-6"></a>

## 33.6 Adversarial resource tests and precise remaining assumptions

 

Correct uniform marginals do not make a two-cell stock independent. The smooth joint law $f(u,v)=1+\epsilon(2u-1)(2v-1)$ has uniform marginals but two balanced terminal readers give 

$$

 \mathbb P(++ )=\frac14+\frac{\epsilon}{16}.

$$

 The joint preparation theorem [(32.12)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:stock) controls this correlation. A shared switching process applied to initially equal rotors preserves their equality; independent increments conditional on the actual past cannot be replaced by correct separate rotor marginals. 

Average preparation error does not justify selective success claims. Let an archive bit $B$ have probability $\beta$, let the ready coordinate be uniform on $B=0$, and uniform only on its upper half on $B=1$. Its joint defect from a uniform coordinate with the same bit law is $\beta/2$. Conditional on $B=1$, a balanced reader has error $1/2$. The average can vanish while the selected error stays fixed. The exact herald theorem avoids this failure by proving equality for each accepted count string; stopping on an informative position or phase does not satisfy that proof. 

A copy before use must be the actual interaction [(25.10)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:snapshot), with its pointer in the jointly prepared bank. Then the changed conditional packet and residual-rank theorem apply. Using an arbitrary old nonequilibrium pointer as a calibrated probe changes the hypotheses. Coherent erasure of every moving-bank copy is covered by the full-wave programme; a surviving copy must remain in the state. Returning the exported nodal archive violates the frozen-bank premise and recovers the calculated original bias. 

The assumptions reduced by this part are therefore precise. The nodal interaction replaces exact ready-subsystem equilibrium by conditional BV regularity, known nodal wave resources, and specified transport, with finite joint error. The homogeneous switching mechanism replaces that regularity by a new independent Poisson law and a timing-neutral final preparation interface. Causal selection replaces an unspecified quantile law by a causal neutrality requirement on a defined preparation class. SWAP transfers a definite ready resource while exporting the old state under an already admitted Bell generator. 

The older source/readout premise selects none of those stronger physical or statistical inputs by itself. These chapters supply conditional preparation and a complete preparation-to-record calculation within their respective domains. The later pilot example can start from one definite ordinary basis configuration and deterministic carrier copies, with only the finite gas ensemble random. This removes an unknown Born draw from that concrete example; it does not prepare an arbitrary closed universe in equilibrium or derive the general unknown-input ensemble postulate.
