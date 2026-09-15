# Chapter 26: Faithful archives and complete-history error

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

<a id="cfg:archives"></a> 

Final record probabilities, correctness about the actual past, and microscopic path laws are three distinct observables. This chapter expands the archive arguments of [[C02](/quantum-measurement/monograph/bibliography#bib-C02), [C03](/quantum-measurement/monograph/bibliography#bib-C03)] into a finite theorem. It establishes conditions sufficient for reliable sampled histories without imposing minimality on every microscopic edge. 



<a id="section-26-1"></a>

## 26.1 An endpoint archive can be wrong about its own past

 

Let $L_t$ be an actual sampled label and $A_T$ the label retained at the final cut. Even exact equality $A_t=L_t$ at every current time does not imply $A_T=L_0$. 



**Counterexample 26.1 (Correlated label and archive turnover).**

 <a id="cfg:turnover"></a> Take $\Phi=(|00\rangle+|11\rangle)/\sqrt2$, $H=0$, and symmetric surplus $K_{00,11}=k>0$. Both conditional rates in [(25.2)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:Kfamily) are $2k$. The complete endpoint distribution remains one half on each of $00,11$, and present label and archive agree always. Nevertheless, <a id="cfg:turnovererror"></a>


$$
\mathbb P(A_T\ne L_0)=\frac{1-e^{-4kT}}2.
 

$$

Equation (26.1).

 

 

**Proof.**

The number of switches is Poisson with mean $2kT$. Its odd-parity probability is $\frac12(1-\mathbb E(-1)^N)=\frac12(1-e^{-4kT})$. Odd parity is exactly disagreement with the initial label. Stationarity follows because the two rates and initial weights are equal. 

□

 This rival is excluded by an additional no-transition-without-coupling support law, not by equivariance. Multiple simultaneously changing copies can be mutually consistent and historically unreliable. 



<a id="section-26-2"></a>

## 26.2 A finite write of a held actual label

 

Let $\{P_\ell^L\}$ be orthogonal physical configuration projectors for a label register. Supply a blank archive cell $|B\rangle$ orthogonal to its outputs $|A_\ell\rangle$. The pulse is <a id="cfg:heldwriteH"></a>


$$
H_{\rm w}=\hbar\chi\sum_\ell P_\ell^L\otimes
      (|A_\ell\rangle\langle B|+|B\rangle\langle A_\ell|),
 \qquad \Delta=\frac{\pi}{2\chi}.
 

$$

Equation (26.2).

 An unknown carried vector and reference may be arbitrarily correlated with $L$. The initial joint configuration law is equivariant. During the pulse both the Hamiltonian and actual generator preserve $L$, and already completed archive entries are preserved. Nonminimal traffic within fixed-label blocks is allowed. 



**Theorem 26.2 (Exact finite copying of a sampled actual label).**

 <a id="cfg:heldcopy"></a> Under the preceding assumptions, the completed entry equals the actual label at pulse start almost surely: 

$$

 \mathbb P(A_{t+\Delta}\ne L_t)=0.

$$

 The pulse uses $1+\#\{\ell\}$ archive states, duration $\Delta$, and operator norm $\hbar\chi$. No additional copy of the unknown input is used. 

 

**Proof.**

Decompose the full vector as $\sum_\ell\psi_\ell|B\rangle$, $P_\ell^L\psi_\ell=\psi_\ell$. The mutually orthogonal pulse blocks give 

$$

 e^{-iH_{\rm w}\Delta/\hbar}\sum_\ell\psi_\ell|B\rangle
       =-i\sum_\ell\psi_\ell|A_\ell\rangle.

$$

 The endpoint wave has zero support on every mismatch $L=\ell,A\ne A_\ell$. Equivariance therefore makes endpoint mismatch probability zero. Actual preservation of $L$ throughout the finite pulse then identifies its endpoint value with $L_t$, proving the claim. The reference and all internal correlations stay in the vectors $\psi_\ell$. 

□

 

The label-holding premise is physical. Freezing a native source label can change its original event process. Copying an already stable acquired record need not freeze the source. A shuttered write records occupancy at its start, not all earlier first entries or every unmonitored jump. 

For an imperfect pulse, let $N_{L,m}$ count changes of the sampled label during write $m$, and let $\epsilon_m$ bound the norm difference of complete physical and ideal endpoint waves on the actual input/reference class. If the physical actual process is equivariant, the ideal mismatch projector annihilates the ideal wave, giving <a id="cfg:writeerror"></a>


$$
\delta_{{\rm w},m}
 :=\mathbb P(A_{m,\rm end}\ne L_{t_m})
 \le \mathbb E N_{L,m}+\epsilon_m^2.
 

$$

Equation (26.3).

 Indeed the first disagreement requires a label change or an endpoint mismatch. The first probability is bounded by its expected count; the second is $\|\Pi_{\rm mis}\Phi_{\rm phys}\|^2
\le\|\Phi_{\rm phys}-\Phi_{\rm id}\|^2$. The square is special to an ideal zero-probability event, not a general quadratic continuity bound for all output probabilities. 



<a id="section-26-3"></a>

## 26.3 The archive theorem and its conditional version

 

Consider a finite physical programme with $m$ writes, at prescribed or physically controlled start times $t_i$, each with a completion cut. Let $H_{\rm past}=(L_{t_1},\ldots,L_{t_m})$ and let $A_T$ contain the final completed entries. On unused, rejected or exhausted branches, put a declared symbol in the same finite output alphabet and retain the actual source state. Let $N_{\rm corrupt}$ count transitions after completion that alter any completed entry. A transition may alter several entries; counting it once is enough for the following event inclusion. 



**Theorem 26.3 (Faithful finite archive).**

<a id="cfg:faithful"></a> For every well-defined process on this complete experiment, <a id="cfg:faithbound"></a>


$$
\delta_{\rm faith}:=\mathbb P(A_T\ne H_{\rm past})
 \le\min\left\{1,\sum_{i=1}^m\delta_{{\rm w},i}
                         +\mathbb E N_{\rm corrupt}\right\}.
 

$$

Equation (26.4).

 This conclusion allows adaptive controls, retained keys, returning memories, and nonminimal internal traffic. Each write error and corruption count must refer to those actual complete histories. 

 

**Proof.**

If every entry was correct when completed and no completed entry was subsequently changed, the final bank equals the sampled history. Therefore $\{A_T\ne H_{\rm past}\}$ is contained in the union of all write failure events and $\{N_{\rm corrupt}\ge1\}$. The union bound and $1_{\{N\ge1\}}\le N$ prove [(26.4)](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:faithbound). This event argument is valid pathwise even if corruption later repairs an error; such repairs only make the bound conservative. Conditioning on an adaptive control history gives the same inclusion, and averaging preserves the bound. 

□

 

This is stronger than endpoint correlation, but weaker than recording the entire unmonitored trajectory. Neither correct copies nor small corruption budgets select a unique native Bell event generator. 

For a common final record event $E$ with probability $p>0$, 

$$

 \mathbb P(A_T\ne H_{\rm past}\mid E)
       \le\min(1,\delta_{\rm faith}/p).

$$

 A rare successful branch can thus be unreliable even when the average error is small. Uniform conditional promises require either lower event probabilities or a proof made separately on every admitted conditional preparation. 



<a id="section-26-4"></a>

## 26.4 Physical support and quantitative crossing budgets

 

Let $\mathcal C_a$ be the configurations with completed archive content $a$. For the equilibrium family [(25.2)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:Kfamily), sum over unordered pairs $\{x,y\}$ with different completed contents. The compensator of their directed transition counts gives <a id="cfg:traffic"></a>


$$
\mathbb E N_{\rm corrupt}
 =\int_0^T\sum_{\{x,y\}\ {\rm cross}}
             (|J_{yx}(t)|+2K_{xy}(t))\,dt.
 

$$

Equation (26.5).

 Here the crossing predicate must be a function of represented complete configuration and physical time, so its occupation-weighted average is computed under the stated equivariant law. A deterministic schedule of completed banks meets this condition. An adaptive completion status may also be encoded in the complete configuration, with its own physical currents and equilibrium law. If instead completion depends on additional unrepresented history, the deterministic-current expression above is not asserted: use the following predictable expectation directly. For full-history intensities $\lambda_{y\leftarrow x}(t\mid\mathcal F_{t-})$ the exact formula is the expectation of their predictable sum: 

$$

 \mathbb E N_{\rm corrupt}
 =\mathbb E\int_0^T\sum_{y:\,{\rm cross}(X_{t-},y,t)}
            \lambda_{y\leftarrow X_{t-}}(t\mid\mathcal F_{t-})\,dt.

$$

 For deterministic Markov rates and nonequilibrium occupation law $\nu_x$, the integrand for an unordered pair is $\nu_xq_{y\leftarrow x}+\nu_yq_{x\leftarrow y}$. The wave-weight expression [(26.5)](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:traffic) cannot then be used. 



**Proof (Proof of [(26.5)](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:traffic)).**

 For each directed count, expected compensator equals expected count, first with bounded stopping and then by monotone convergence. In equilibrium the occupation-weighted directional incidences are $[J_{yx}]_++K_{xy}$ and $[-J_{yx}]_++K_{xy}$. Their sum is $|J_{yx}|+2K_{xy}$. Summing crossing pairs and integrating proves the identity. No conclusion is drawn by dividing a small flux by a possibly small sector weight. 

□

 

A complete support law <a id="cfg:support"></a>


$$
H_{yx}=0\quad\Longrightarrow\quad
 q_{y\leftarrow x}=q_{x\leftarrow y}=0
 

$$

Equation (26.6).

 in the absence of separately declared stochastic channels gives exact protection if the complete Hamiltonian is block diagonal by archive content. It is weaker than minimality: $K_{xy}=\eta|J_{yx}|$ satisfies support and is generally nonminimal. Every controller, bath, return wire, and reset channel belongs in the complete physical graph. 



**Counterexample 26.4 (Support has no uniform weak-coupling modulus).**

 <a id="cfg:discontinuity"></a> For $\Phi=(|0\rangle+|1\rangle)/\sqrt2$ and $H_\varepsilon=\hbar\varepsilon\sigma_x$, the weights are constant and $J=0$. Put $K_{01}=\gamma/2$ for $\varepsilon\ne0$ and zero for $\varepsilon=0$. This obeys [(26.6)](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:support), but for every nonzero $\varepsilon$ its two rates are $\gamma$ and 

$$

 \mathbb P(Q_T\ne Q_0)=\frac{1-e^{-2\gamma T}}2,
 \qquad \hbar^{-1}\int_0^T\|H_\varepsilon\|dt
       =|\varepsilon|T\longrightarrow0.

$$

 

 The formula follows from odd parity of a rate-$\gamma$ Poisson count. Thus ordinary small-Hamiltonian continuity of the wave does not control historical corruption for an unconstrained actual generator. 

One sufficient quantitative replacement is <a id="cfg:envelope"></a>


$$
K_{xy}\le C\,\frac{\|H_{yx}\|}{\hbar}\sqrt{w_xw_y}.
 

$$

Equation (26.7).

 Cauchy–Schwarz gives $|J_{yx}|\le2\|H_{yx}\|\sqrt{w_xw_y}/\hbar$. Define the *ordered* coupling budget 

$$

 \Lambda_A=\int_0^T\sum_{x,y:\,{\rm cross}}
       \frac{\|H_{yx}\|}{\hbar}\sqrt{w_xw_y}\,dt.

$$

 Each unordered pair occurs twice, so <a id="cfg:envelopebound"></a>


$$
\mathbb E N_{\rm corrupt}\le(1+C)\Lambda_A.
 

$$

Equation (26.8).

 The coefficient would be $2+2C$ for an unordered coupling budget. Uniform graph bounds are needed if the number of archive configurations grows. 

The linear envelope is sufficient, not necessary. In the preceding two-state example, $K_{01}=\frac12\sqrt{\gamma|\varepsilon|}$ gives rates $\sqrt{\gamma|\varepsilon|}$ and final mismatch $(1-e^{-2T\sqrt{\gamma|\varepsilon|}})/2\to0$, without a uniform linear bound in $|\varepsilon|$. The relevant sufficient limit is the vanishing integrated actual crossing traffic on the stated horizon. 



<a id="section-26-5"></a>

## 26.5 Combining wave, path, and archive comparisons

 

Let two complete finite programmes use the same initial wave, fixed configuration resolution, and physical final archive map, with Hamiltonians $H,\widetilde H$. If 

$$

 \epsilon_H=\frac1\hbar\int_0^T\|H_t-\widetilde H_t\|\,dt,

$$

 Duhamel's identity and unitarity give $\|\Phi_T-\widetilde\Phi_T\|\le\epsilon_H$. For normalized vectors, the pure-state trace distance is at most their vector norm difference. Measurement of the common endpoint partition therefore gives archive-law total variation at most $\epsilon_H$. This argument assumes equilibrium/equivariance in each compared model. 

For a common projected event of ideal probability $p>0$, normalized branch vectors satisfy 

$$

 \left\|\frac{P\Phi}{\|P\Phi\|}
          -\frac{P\widetilde\Phi}{\|P\widetilde\Phi\|}\right\|
 \le \frac{2\epsilon_H}{\sqrt p}

$$

 whenever the second denominator is nonzero. To prove it, add and subtract $P\widetilde\Phi/\|P\Phi\|$ and use reverse triangle inequality for the two norms. This is a same-projector vector estimate; it is not the conditioning bound for arbitrary contaminated historical events. 

If both models also have faithful-archive errors $\delta_{\rm faith}$ and $\widetilde\delta_{\rm faith}$, then <a id="cfg:historycompare"></a>


$$
\operatorname{TV}(\mathcal L(H_{\rm past}),
                  \mathcal L(\widetilde H_{\rm past}))
 \le \min(1,\delta_{\rm faith}+\epsilon_H
                    +\widetilde\delta_{\rm faith}).
 

$$

Equation (26.9).

 Within each model, actual history and its archive are already coupled; their disagreement probability bounds their law distance. Apply that coupling inequality on both sides and insert the endpoint bound between the two archive laws. 

The fixed finite minimal Bell path-stability theorem (Theorem [27.3](/quantum-measurement/monograph/complete-path-stability-and-conditioned-records#int:path-stability)) is a stronger comparison when its node and Hamiltonian hypotheses hold. It is not needed for Theorem [25.5](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:endpoint), and it does not extend to Counterexample [26.4](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:discontinuity)'s arbitrary surplus laws. 

For the finite positive-background law of the statistical selection chapter, the complete wave is identical to its zero-background Bell limit. Final physical archive distributions are consequently identical by Corollary [25.6](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:equivalence); a path total-variation estimate is valid but loose for those endpoint-only outputs. Positive background on Hamiltonian-disconnected archive pairs can nevertheless corrupt actual past labels. Exact historical protection requires the Bell limit, an explicit small crossing budget, or a separately analyzed supported reference graph. A change to the reference graph cannot be silently inserted into the variational proof. 



<a id="section-26-6"></a>

## 26.6 Scope of the consolidated record result

 

The established chain is 

$$

 \begin{gathered}
 \text{linear complete wave dynamics and admitted equivariant configurations}\\
 +\ \text{joint ready resource law and physical finite writes}\\
 +\ \text{held sampled labels and bounded archive-changing traffic}\\
 \Longrightarrow\quad
 \text{quantum endpoint records and faithful sampled actual histories}.
 \end{gathered}

$$

 References, nulls, failures, retained keys, and permitted coherent returns are included when present in the modeled bank. At most a finite declared stock is used; exhausted branches do not receive fictitious fresh cells. This chapter reduces historical record reliability to explicit writes, held labels and actual crossing budgets; it does not itself derive Bell minimality or timing. The pilot theory supplies its effective event law and proves exact monomial-copy faithfulness in the Bell comparator on the first pass of an autonomous finite clock. Its finite-resource path error then controls failures of that historical claim. Neither result licenses an unchanged-source reader of every unmonitored microscopic event.
