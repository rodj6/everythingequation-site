# Chapter 21: Conserved converters and finite measurement programmes

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

<a id="det:chapter-instruments"></a> 

The construction in this chapter uses the actual diffusive law of [[M12](/quantum-measurement/monograph/bibliography#bib-M12)], rather than the sharp intrinsic primitive of the previous chapter. The event law of that native reader remains a statistical input. Once it is supplied, one coherent converter determines both transferred packet amplitudes and continuing daughter amplitudes. The results concern one unknown input with an arbitrary inaccessible reference, all future-active archives and a finite physical programme. 



<a id="section-21-1"></a>

## 21.1 Native law and the exact instrument it generates

 

Let $H_t,L_t$ be bounded Hermitian operators, preparation independent at fixed classical inputs and actual record history. Coefficients and feedback are sufficiently regular for finite-horizon strong solutions; piecewise held controls suffice. The primitive equations are <a id="det:native"></a>


$$
\begin{aligned}dY_t&=2\ell_tdt+dW_t,\quad
        \ell_t=\langle\psi_t,L_t\psi_t\rangle,\\
 d\psi_t&=\left[-iH_t-\tfrac12(L_t-\ell_t)^2\right]\psi_tdt
                  +(L_t-\ell_t)\psi_tdW_t.       
\end{aligned}
$$

Equation (21.1).

 $W$ is Wiener in the declared complete physical filtration. The admitted record is $Y$; a separately readable innovation is not included by this constitution. Actualization and this output signature are not deduced from the calculations below. Independent ports have the joint noise law specified by their wiring. 



**Lemma 21.1 (Complete likelihood and continuation).**

<a id="det:likelihood"></a> Under a reference Wiener measure for the coordinate $Y$, let 

$$

 dM_t=(-iH_t-\tfrac12L_t^2)M_tdt+L_tM_tdY_t,
 \qquad M_0=I.

$$

 Then <a id="det:likelihood-eq"></a>


$$
\mathbb E_0 M_T^\dagger M_T=I,
 \quad \mathbb P_\psi(dY)=\|M_T(Y)\psi\|^2\mathbb P_0(dY),
 \quad \psi_T=\frac{M_T(Y)\psi}{\|M_T(Y)\psi\|}.             

$$

Equation (21.2).

 The same formulas with $M\otimes I_R$ describe inaccessible references and yield normalized CP instruments on the complete coherent bank. 

 

**Proof.**

Itô multiplication gives $d(M^\dagger M)=2M^\dagger LM\,dY$. Bounded coefficients on a finite horizon give the required mean-one norm martingales. The stochastic logarithm of $\|M_t\psi\|^2$ has coefficient $2\ell_t$; changing measure therefore makes $W=Y-\int2\ell_tdt$ Wiener. Applying Itô's quotient rule to $M\psi/\|M\psi\|$ gives exactly [(21.1)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:native). Pathwise uniqueness identifies this with the proposed actual process. For an event $E$, integration of $M_Y\rho M_Y^\dagger$ over its reference paths gives its unnormalized output. Normalization follows from the first equality, and reference positivity follows from the operator formula. State-independent actual classical control kernels can be appended to the same complete-path integral. 

□

 

This is the standard filtering likelihood calculation [[BvHJ](/quantum-measurement/monograph/bibliography#bib-Filtering)]. Its reference measure is a mathematical coordinate, not an equilibrium bath that has been physically prepared. It does not independently select the stochastic law [(21.1)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:native). 



<a id="section-21-2"></a>

## 21.2 A single charge-preserving transfer

 

Let $C$ be a $d$-dimensional carrier, $F$ have ready state $|r\rangle$ and terminal labels $1,\ldots,m$, and $E$ have packet vacuum $|0\rangle$ and the same terminal labels. The apparatus supplies matrices $D_i:C\to C$ with $\sum_iD_i^\dagger D_i=I$. Rectangular maps can be placed in a declared direct-sum carrier. Define <a id="det:converter"></a>


$$
G=\sum_i\left(D_i\otimes|i,i\rangle\langle r,0|
              +D_i^\dagger\otimes|r,0\rangle\langle i,i|\right).
                                                        

$$

Equation (21.3).

 



**Theorem 21.2 (Conserved converter and finite synthesis).**

 <a id="det:converter-theorem"></a> The operator $G$ is Hermitian, has norm one and obeys <a id="det:transfer"></a>


$$
e^{-i\theta G}\psi|r,0\rangle
  =\cos\theta\,\psi|r,0\rangle
      -i\sin\theta\sum_iD_i\psi|i,i\rangle.      

$$

Equation (21.4).

 It conserves $Q_F+N_E$, where $Q_F=|r\rangle\langle r|$ and $N_E=\sum_i|i\rangle\langle i|$. A connected finite library of equal-charge two-level exchanges, phases and a fixed anchor exchange synthesizes $G$ on its whole local bank. No input copies or reference controls are needed. 

 

**Proof.**

The map $V\psi=\sum_iD_i\psi|i,i\rangle$ is an isometry from the ready subspace to the paired destination subspace. On their direct sum, $G$ exchanges $\psi|r,0\rangle$ with $V\psi$ and has square the identity. It vanishes on the orthogonal complement. Its exponential therefore gives [(21.4)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:transfer). Both exchanged spaces have charge one, giving the commutator zero. 

Complete the isometry $\psi|1,1\rangle\mapsto V\psi$ to a unitary $W$ on the $dm$-dimensional paired destination space; extend it by the identity elsewhere, including the ready subspace. For 

$$

 E_*=I_C\otimes(|1,1\rangle\langle r,0|+
                         |r,0\rangle\langle1,1|)

$$

 one has $G=WE_*W^\dagger$ on every subspace, hence $e^{-i\theta G}=We^{-i\theta E_*}W^\dagger$. Complex Givens elimination factors $W$ into at most $dm(dm-1)/2$ two-level rotations and $dm$ phases. Swaps along the connected admitted graph implement each required pair. For a path graph this yields a crude $O((dm)^3)$ gate count. All coefficients come from the known apparatus matrices. Additional conserved charges require connectivity inside their joint allowed blocks, and are not implied by the readiness-charge calculation. 

□

 

If the synthesis of $W$ uses $L$ gates with operator error at most $\epsilon_g$ each, and the anchor angle error is $\epsilon_\theta$, unitary telescoping gives <a id="det:gate-error"></a>


$$
\|\widetilde U-U\|\le2L\epsilon_g+\epsilon_\theta.            

$$

Equation (21.5).

 The corresponding half-diamond channel error is no larger. Packing fixed-angle compiler gates into duration $\delta$ can require controls of size $O(\delta^{-1})$, even when a directly available weak $G$ pulse would cost only $O(\delta^{-1/2})$. The synthesis premise, control bandwidth and stocked pure resources remain explicit physical inputs. 



<a id="section-21-3"></a>

## 21.3 Full-output comparison for a finite reader

 

Monitor a retired packet for time $\tau$ with $L=\kappa B$, $B=\sum_j b_jP_j$, and $H=0$, where different $b_j$ are separated by at least one. Put $\mathcal R=\kappa^2\tau$. The exact multiplier and its reference measure are <a id="det:read-multiplier"></a>


$$
M_y=\sum_jm_j(y)P_j,
 \quad m_j(y)=e^{\kappa b_jy-\kappa^2b_j^2\tau},
 \quad \mathbb P_0(dy)=\mathcal N(0,\tau)(dy).               

$$

Equation (21.6).

 On eigenlabel $j$, the actual $y$ is normal with mean $2\kappa b_j\tau$ and variance $\tau$. A nearest-mean decoder stores $z(y)$ in a classical register. The complete actual state following a converter is $M_yU\psi/\|M_yU\psi\|$, including reference, flag and all packet components; a wrong declaration does not substitute a desired sharp daughter. 



**Theorem 21.3 (Reference-uniform complete reader error).**

 <a id="det:reader-theorem"></a> Let $e$ be the largest eigenlabel classification error. Then <a id="det:reader-error"></a>


$$
e\le2\Phi(-\sqrt{\mathcal R})\le e^{-\mathcal R/2},
 \qquad \tfrac12\|\mathcal R_{\mathrm{native}}
                   -\mathcal R_{\mathrm{sharp}}\|_\diamond
                  \le\sqrt{2e}.                            

$$

Equation (21.7).

 Here the sharp comparison retains the same coordinate $y$, the whole packet bank and a displayed eigenlabel; conditional on that eigenlabel it draws $y$ with density $m_j^2$ relative to $\mathbb P_0$. The bound survives every common admitted finite continuation, including a return of the packet to the carrier. 

 

**Proof.**

Half the separation of neighboring normal means is at least $\kappa\tau$. Gaussian tails give the first inequality, including the two-sided interior labels; the usual bound $2\Phi(-x)\le e^{-x^2/2}$ gives the second. 

Before dephasing the classical coordinates, use the common direct-integral output space with isometries 

$$

 V\psi=\int^{\oplus}\!|z(y)\rangle\otimes M_y\psi\,
                      \mathbb P_0(dy)^{1/2},\qquad
 W\psi=\int^{\oplus}\!\sum_j|j\rangle\otimes m_j(y)P_j\psi\,
                      \mathbb P_0(dy)^{1/2}.

$$

 The direct-integral coordinate denotes the same retained $y$ on both sides. Orthogonality of the $P_j$ implies 

$$

 V^\dagger W=\sum_jP_j\int_{z(y)=j}m_j(y)^2\mathbb P_0(dy)
                 \ge(1-e)I.

$$

 This operator is real positive, so $(V-W)^\dagger(V-W)\le2eI$. For any purified input, the trace distance of the two output pure states is at most their vector distance, hence at most $\sqrt{2e}$. Taking all references proves the half-diamond bound. Common dephasing of actual classical records and any common subsequent channel contract the distance. No packet component has been silently discarded in this comparison. 

□

 



**Theorem 21.4 (One-pulse finite instrument realization).**

 <a id="det:one-pulse"></a> For an admitted normalized finite instrument $\mathcal E_a(\rho)=\sum_jD_{aj}\rho D_{aj}^\dagger$, use terminal labels $(a,j)$, angle $\theta=\pi/2$ and a degenerate packet reader $B=\sum_{a,j}b_a|a,j\rangle\langle a,j|$. Then its exact finite actual output differs from the specified complete sharp extension by half-diamond distance at most <a id="det:one-pulse-bound"></a>


$$
\sqrt2\,e^{-\mathcal R/4}.                    

$$

Equation (21.8).

 The reference is arbitrary and inaccessible. The multiplicity $j$ remains coherently retained rather than being measured. 

 

**Proof.**

Full transfer gives $-i\sum_aW_a\psi$, where $W_a\psi=\sum_jD_{aj}\psi|a,j\rangle_F|a,j\rangle_E$. The native output is proportional to $\sum_am_a(y)W_a\psi$. The sharp comparison has probability $\|W_a\psi\|^2$ and, on branches of positive probability, complete conditional vector $W_a\psi/\|W_a\psi\|$. Tracing multiplicity, when it is truly unavailable for return, yields $\mathcal E_a$ on the carrier. Apply Theorem [21.3](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:reader-theorem) to the eigenspaces indexed by $a$. The ready amplitude is exactly zero after the ideal pulse. Define the decoder also on all off-subspace/error inputs so that gate errors, bad readiness and every false declaration still have an actual continuation. No collision or population limit is used. 

□

 

Thus exposure $\mathcal R\ge4\log(\sqrt2/\epsilon)$ suffices for reader error $\epsilon$ before preparation and gate errors. This is a scheduled finite measurement, not an assertion of an exponential physical detection time or an exact finite sharp effect. 



<a id="section-21-4"></a>

## 21.4 Exact absorbing grid calibration

 

For a timed module, a new vacuum packet is supplied to each collision. If the flag is already terminal, the converter annihilates its tensor product with a new vacuum packet. This establishes absorption for the directed circuit, without declaring every old packet incapable of return. Write $c=\cos\theta,s=\sin\theta$. With $N$ cells and no early stopping, its pre-read wave is <a id="det:absorbing-wave"></a>


$$
c^N\psi|r,\mathrm{vac}\rangle
 -is\sum_{k=1}^Nc^{k-1}\sum_iD_i\psi|i,e_{ki}\rangle,        

$$

Equation (21.9).

 where $e_{ki}$ is a single packet in cell $k$. Its exact native record density is <a id="det:absorbing-density"></a>


$$
c^{2N}\prod_\ell\varphi_0(y_\ell)
 +s^2\sum_{k,i}c^{2k-2}q_i\varphi_i(y_k)
                       \prod_{\ell\ne k}\varphi_0(y_\ell),   

$$

Equation (21.10).

 where $q_i=\|(D_i\otimes I_R)\psi\|^2$ and $\varphi_i$ is the corresponding normal density. The actual conditional wave is obtained by multiplying each component of [(21.9)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:absorbing-wave) by its native multipliers and normalizing. The mixture notation in [(21.10)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:absorbing-density) does not create an actual hidden finite label $(k,i)$; multiple alternatives can remain coherent. 



**Theorem 21.5 (Exact reduced semigroup and rounded times).**

 <a id="det:grid"></a> For a bin of length $\delta$, choose $\cos\theta_\delta=e^{-\nu\delta/2}$. Let $P=I_C\otimes|r\rangle\langle r|$, $S=I-P$ and $T_i=D_i\otimes|i\rangle\langle r|$. After discarding this reader output and packet for this reduced comparison only, a collision is exactly $e^{\delta\mathcal L}$, where 

$$

 \mathcal L(\rho)=\nu\sum_iT_i\rho T_i^\dagger
                         -\tfrac\nu2\{P,\rho\}.

$$

 The sharp stopped instrument from a ready flag has <a id="det:geometric"></a>


$$
\mathbb P(K=k,I=i)=e^{-\nu(k-1)\delta}
           (1-e^{-\nu\delta})q_i,
 \qquad \mathbb P(\varnothing)=e^{-\nu N\delta}.             

$$

Equation (21.11).

 

 

**Proof.**

Tracing the fresh packet gives Kraus operators $K_0=S+cP$, $K_i=-isT_i$. The native packet reader does not change this reduced channel when both its outcome and packet are traced. Since $\sum_iT_i^\dagger T_i=P$ and $T_iT_j=0$, the master equation has block solution 

$$

 \rho_{PP}(t)=e^{-\nu t}\rho_{PP}(0),\quad
 \rho_{PS}(t)=e^{-\nu t/2}\rho_{PS}(0),\quad
 \rho_{SS}(t)=\rho_{SS}(0)+(1-e^{-\nu t})
                    \sum_iT_i\rho_{PP}(0)T_i^\dagger.

$$

 These are exactly the Kraus blocks at $t=\delta$, including ready/sink coherence and any reference. Multiplying the quiet factors gives [(21.11)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:geometric). A rate-$\nu$ exponential variable rounded by $T_\delta=\delta\lceil T/\delta\rceil$ has these same probabilities. This is a coupling of calculated comparison laws, not a physical pre-event threshold inserted into the source. 

□

 

Grid and continuous unrounded timestamps have total-variation distance one. Any continuous-time comparison must state the rounding map or a weaker metric. The exact reduced semigroup also leaves the raw native records and growing coherent archives unspecified; it cannot be used alone to predict their returns. Its current is the constructed dissipative flux, not the original Hamiltonian current in the Bell target. 



<a id="section-21-5"></a>

## 21.5 Complete finite networks, readiness and stopping

 

For normalized states put $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$. For actual classical records plus retained quantum output, the same notation means the trace distance on their CQ direct integral. The record total variation is bounded by this distance. 



**Theorem 21.6 (Finite adaptive complete-output bound).**

 <a id="det:network"></a> Consider a finite programme of the admitted converters, native readers, state-independent coherent controls and classical feedback. Include all future-active memories, clocks and inaccessible references. Give every timeout, false declaration, blocked request and failed preparation an actual continuation. On every reachable complete input assume uniform gate errors $u_k$, reader errors $e_j$, initial trace error $\epsilon_{\mathrm{prep}}$, and any justified bank-truncation error $\epsilon_{\mathrm{cut}}$. Compared with the same-clock sharp extensions specified above, the final complete output error is at most <a id="det:network-error"></a>


$$
\min\left\{1,\epsilon_{\mathrm{prep}}+
        \sum_k u_k+\sum_j\sqrt{2e_j}+
        \epsilon_{\mathrm{cut}}+p_{\mathrm{ex}}\right\}.     

$$

Equation (21.12).

 $p_{\mathrm{ex}}$ is needed only when an uncapped comparator can exceed the physical stock and the protocols agree until exhaustion. If both have the same cap and blocked continuation it is zero. 

 

**Proof.**

Pad a stopped control tree by identity channels with deterministic dummy outputs up to its uniform maximum slot count. This does not advance physical clocks; both outputs are evaluated at the declared common cut, with the same specified storage dynamics. Replace one gate or reader at a time. Its local complete error is bounded uniformly even on entangled inputs containing earlier archives. The common suffix is a normalized CQ channel and therefore contracts trace distance. The triangle inequality gives the two sums, and contracts the initial error. A proved complete bank approximation contributes its stated error. Couple capped and uncapped implementations until the first exhaustion; only that event's probability can differ. The same reasoning works with continuous-valued records provided depth, coefficients and local errors are uniform over the admitted controls. No contraction of an unknown nonlinear continuation is used: these channels were calculated from the stated native law. 

□

 



**Lemma 21.7 (Conditioning and supplied readiness).**

<a id="det:ready-rare"></a> For complete outputs at distance at most $\epsilon$, a common event has probabilities $p,q$ with $|p-q|\le\epsilon$. If $p,q>0$, its conditional outputs obey <a id="det:rare"></a>


$$
D(\rho_E/p,\sigma_E/q)
      \le\min\{1,\epsilon/\max(p,q)\}.          

$$

Equation (21.13).

 For commuting rank-one ready projectors $P_j$ on dedicated resource cells, set $s=\sum_j[1-\operatorname{tr}(\omega P_j)]$. Then for arbitrary incoming correlations <a id="det:readiness"></a>


$$
D(\omega_{XB},\omega_X\otimes P_{\mathrm{ready}})
                \le\min\{1,2\sqrt s\}.         

$$

Equation (21.14).

 

 

**Proof.**

For the first claim, event/complement block decomposition gives $\|\rho_E-\sigma_E\|_1+|p-q|\le2\epsilon$. If $p\ge q$, normalizing both differences with $p$ yields the bound $\epsilon/p$; reverse the roles for $q\ge p$. For readiness, the commuting-projector union bound makes the total ready probability at least $1-s$. Project a purification onto the joint ready subspace and normalize. Its trace distance from the original purification is at most $\sqrt s$. The projected state factorizes the rank-one ready bank. Its $X$ marginal differs from the original marginal by at most $\sqrt s$ by contraction. A triangle inequality proves [(21.14)](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:readiness). 

□

 

A physical reset is a swap with a supplied same-dimensional ready flag. For $H_{\mathrm{sw}}=(\pi/(2\tau))\operatorname{SWAP}_{FF'}$, the unitary is $-i\operatorname{SWAP}$ and preserves $Q_F+Q_{F'}$. It sends $\rho_{CFAR}\otimes|r\rangle\langle r|_{F'}$ to $|r\rangle\langle r|_F\otimes\rho_{CF'AR}$. The old correlations are archived, not erased. This works also after false positives and timeouts. Each reset consumes a disclosed fresh resource and does not generate an independently distributed innovation. 

A concrete return test shows why complete outputs matter. For one $D=I$ half-transfer, the conditional two-component state is $(|r,0\rangle-im|1,1\rangle)/\sqrt{1+m^2}$, where $m=e^{\kappa y-\kappa^2\tau}$. Returning the same cell through the inverse converter gives ready probability 

$$

 q_{\mathrm{return}}(m)=\frac{(1+m)^2}{2(1+m^2)}.

$$

 The two positive coarse declarations with $m=2$ and $m=10$ give $0.9$ and $0.5990099\ldots$. Small intervals around those values have positive actual probability. A coarse display alone is not sufficient to predict the return; the full native multiplier is. 



<a id="section-21-6"></a>

## 21.6 Finite diffusion cannot produce an exact sharp effect

 



**Theorem 21.8 (Finite diffusive sharpness obstruction).**

 <a id="det:nonsharp"></a> Fix the same complete classical preparation and a bounded finite programme of the native diffusion, state-independent unitary gates, pure ready embeddings and bounded stopping times. Retain every quantum discard in a mathematical dilation. Every record event of positive physical probability has a positive-definite effect on the finite input space. In particular a nontrivial exact projective effect is impossible in this primitive class at finite bounded resources. 

 

**Proof.**

For several independent native coordinates, the linear fundamental matrix satisfies 

$$

 dM=(-iH-\tfrac12\sum_jL_j^2)Mdt+\sum_jL_jM\,dY_j.

$$

 Its determinant is the nonzero stochastic exponential 

$$

 \det M_t=\exp\left\{\int_0^t
     \operatorname{tr}(-iH-\sum_jL_j^2)ds
       +\sum_j\int_0^t\operatorname{tr}L_j\,dY_j\right\}.

$$

 This follows from the matrix Itô rule, or from solving the inverse linear SDE. Bounded stopping does not create a zero determinant. Unitaries and pure resource embeddings preserve injectivity; fixed mixed resources can be purified. Thus, for almost every complete reference history $h$, the map $K_h$ from the input to the enlarged output is injective. Input-independent classical kernels can be included in its common reference measure. 

For every nonzero input $v$ and event $E$ of positive reference measure, $\langle v,F_Ev\rangle=\int_E\|K_hv\|^2\mathbb P_0(dh)>0$. A positive-probability physical event has positive reference measure. In finite input dimension this makes $F_E$ positive definite. A nontrivial projector instead has a nonzero kernel. Tracing an output resource does not alter the event probability, so cannot evade the effect conclusion. 

□

 

The theorem permits exact identification of different actual classical tags, because it fixes their complete preparation. It excludes neither new sharp/jump primitives nor limits of diverging exposure. A useful quantitative constraint is obtained from 

$$

 \mathcal E=\sup_h\int_0^T\sum_j
 [\lambda_{\max}(L_j)-\lambda_{\min}(L_j)]^2dt.

$$

 The drifts for two inputs at the same coordinate history differ by at most twice these spectral diameters. Girsanov's formula gives $D_{\mathrm{KL}}(P_\psi\|P_\phi)\le2\mathcal E$. If a classical event discriminates the two inputs with both errors at most $\epsilon<1/2$, binary data processing and the monotonicity of binary relative entropy give <a id="det:exposure-lower"></a>


$$
\mathcal E\ge\frac{1-2\epsilon}{2}
                       \log\frac{1-\epsilon}{\epsilon}.      

$$

Equation (21.15).

 This is an exposure requirement, not a laboratory energy theorem. It explains the divergence required by ideal sharpness within this specific diffusive source constitution.
