# Section 11: Finite pilot resources: exact inventories and retained records

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-11"></a>

## 11 Finite pilot resources: exact inventories and retained records

 <a id="pil:section"></a>



*Status: Retained conditional model; no new experimental proposal.*

 The following results concern the driven, finite-graph pilot constitution P1–P4 of the pilot companion, version 2 <a id="citation-31"></a>[[20](/sealed-or-leaky/references#bib-Pilot)], and the corresponding material in the integrated monograph <a id="citation-32"></a>[[11](/sealed-or-leaky/references#bib-RM)]. They do not follow from the abstract source/readout distinction. We retain zero initial exporter residues, the declared independent spatial gas preparation, scalar carrier response, and a fixed configuration-sector convention. The internal qubit below is a Hilbert-space fibre over a position vertex; it is not an omitted fine carrier coordinate. Block sectors and their inner-product currents are explicitly permitted in the companion's canonical action. Choosing instead a finer configuration graph defines a different model and requires a new calculation.

The main improvement over an ideal terminal position measurement is an explicit coherent writer. Its output is an ordinary retained bit, and its error is bounded directly from the finite contact law. A separate theorem proves the undrained endpoint asymptotic for the monotone single-edge family, but only at the level of instantaneous carrier position.



<a id="section-11-1"></a>

### 11.1 Microscopic input and exchangeability



Orient each edge $e=(r,q)$ and write $b_e=e_q-e_r$, with incidence matrix $B$. The canonical field supplies deterministic weights and currents satisfying <a id="pil:ownership"></a>


$$

 i\dot\Psi=H(t)\Psi,\qquad \dot\Pi_e=J_e,\qquad \dot w=BJ.

$$

Equation (37).

 The exporter starts with $u_e=k_e=0$ and obeys $u_e=N(\Pi_e-\Pi_e(0))-k_e$. A first hit of $+1$ or $-1$ emits a packet of the corresponding sign, changes $k_e$ by that sign, and resets $u_e$ to zero. The packet budget is $B_e=\lceil NL_e\rceil+1$ with $L_e\ge\int |J_e|$. A positive packet moves one carrier along its edge; a negative packet moves one carrier oppositely; opposite packets may recombine. No reaction directly rewrites an ordinary memory.

In the marked Poisson comparison, each potential packet–carrier channel has rate $\kappa_e\mu_N/N$, independently of the field and carrier label. Opposite-slot channels have rate $a_e$. The total candidate rate is <a id="pil:candidate"></a>


$$

 R_N=\sum_e\left(\kappa_e\mu_N B_e+a_e\binom{B_e}{2}\right).

$$

Equation (38).

 The actual finite gas uses independent uniform longitudinal positions over a beam of length $M_Nv/R_N$ and independent transverse positions in channel cells of relative area $r_c/R_N$. For a horizon $T$ with $M_N>R_NT$, its marked contact history differs from the Poisson comparison by at most <a id="pil:gas"></a>


$$

 \delta_{\mathrm g}=(R_NT)^2/M_N.

$$

Equation (39).

 This bound also holds after the common causal reaction device. It is a contact-history comparison; conditioning on the complete initial gas microstate makes the finite model deterministic and does not preserve the Poisson description. The companion proves [(39)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:gas) by conditioning on the binomial or Poisson arrival count and using their identical conditional laws of ordered times and channel marks. Thus it can be used directly for each finite resource-dependent horizon below; no uniformity claim about a fixed-programme Bell-limit theorem is needed.

<a id="source-lemma-12"></a>

**Lemma 11.1 (Exchangeability of carrier histories).**

<a id="pil:exchange"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with the ready preparation.*

 With all carriers initially at the ready vertex, the joint carrier-history law is invariant under every permutation of carrier labels, both for the spatial gas and its Poisson comparison. If $D$ is any carrier-label-invariant event and $A$ a vertex set, then <a id="pil:exchangeformula"></a>


$$

 \mathbb P(Q(T)\in A,D)=\frac1N\mathbb E[n_A(T)\mathbf1_D],\qquad Q=X_1.

$$

Equation (40).

 

 <a id="source-proof-31"></a>

**Proof.**

A carrier permutation takes channel $(e,b,a)$ to $(e,b,\sigma(a))$, which has the same frequency and hence the same mark probability. Recombination marks are unchanged. The joint ordered-time and channel-mark law is invariant under this relabelling. In the spatial realization this can equally be implemented by a measure-preserving permutation of equal-area channel cells; no symmetry of their geometric shapes is needed. The deterministic reaction map commutes with this relabelling, because eligibility and all service rules depend on the current carrier vertex, not its name. Carrier-independent exporter ties retain their order; contact ties and coincidences with deterministic export times have probability zero. The common ready configuration is invariant. Consequently all $N$ summands in $\mathbb E[n_A\mathbf1_D]=\sum_a\mathbb P(X_a\in A,D)$ coincide, proving the formula. This proves the required marginal exchangeability; a stronger invariance assertion about every coordinate of the complete microstate is unnecessary. 

□



<a id="source-lemma-13"></a>

**Lemma 11.2 (Census and monotone exports).**

<a id="pil:census"></a> 

*Status: Proved conditional on the pilot constitution P1–P4.*

 Let $Z_e=P_e^+-P_e^-$. For a ready preparation with empty packet stock, <a id="pil:censusformula"></a>


$$

 n=Nw-BZ-Bu.

$$

Equation (41).

 If $J_e\ge0$ from preparation until $t$, then <a id="pil:floor"></a>


$$

 k_e(t)=\lfloor N(\Pi_e(t)-\Pi_e(0))\rfloor,
 \quad u_e(t)=\{N(\Pi_e(t)-\Pi_e(0))\},

$$

Equation (42).

 where an export at an integer-valued terminal action is processed at that instant. 

 <a id="source-proof-32"></a>

**Proof.**

The quantity $n+BZ+Bu-Nw$ is constant between events and at each export, service and recombination. Its initial value is zero. On a monotone edge the scaled action crosses successive nonnegative integers, triggering exactly one positive export at each crossing. This proves both claims. 

□



<a id="source-lemma-14"></a>

**Lemma 11.3 (Drainage with an explicit hazard).**

<a id="pil:drain"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and its Poisson comparison.*

 Suppose no new packets are emitted during a hold of duration $h$, each queued packet is of one sign, and its origin contains at least $c_NN$ carriers whenever that packet remains queued. If at most $b$ packets enter the hold, their non-drainage probability in the Poisson comparison is at most <a id="pil:drainbound"></a>


$$

 b\exp(-\kappa_-\mu_Nc_N h),\qquad \kappa_-:=\min_e\kappa_e>0.

$$

Equation (43).

 It is enough that $c_N=1/N$; a density bounded away from zero is not required. 

 <a id="source-proof-33"></a>

**Proof.**

For a queued packet the predictable service intensity is $\kappa_e\mu_N n_{\rm origin}/N$. It is bounded below by the exponent's rate until that packet is served. Its survival probability is therefore bounded by the corresponding exponential, by the compensator or thinning construction. A union bound proves [(43)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drainbound). A single addition of [(39)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:gas), applied to the complete experiment, transfers any union of such failure events to the physical gas; it need not be added separately at each stage. 

□



If all incident net queues vanish on a label-invariant event $D$, the census gives the deterministic value $n_r=Nw_r-(Bu)_r$ on $D$. Exchangeability then yields <a id="pil:drainedlaw"></a>


$$

 \left|\mathbb P(Q=r)-\left(w_r-(Bu)_r/N\right)\right|\le\mathbb P(D^c),

$$

Equation (44).

 provided $D$ has positive probability. The coefficient belongs to $[0,1]$ because it equals $n_r/N$ on $D$. This is an exact census identity plus a finite failure bound, not an exact unconditional finite-time law.



<a id="section-11-2"></a>

### 11.2 A coherent writer preserving a drained count



<a id="source-lemma-15"></a>

**Lemma 11.4 (Retained copy of a drained endpoint).**

<a id="pil:writer"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and the stated driven programme.*

 Let a target vertex $v$ receive a monotone integrated current $W\in[0,1]$ on a single productive edge from the ready sector, with no other active incident edge. Suppose its production packets have drained. Then $n_v=\lfloor NW\rfloor$ and $w_v=W$. Include from the outset a blank ordinary bit $m=0$ and a fresh edge $f: (v,0)\longrightarrow(v,1)$ with zero initial action and residue. After production, with the source blocks switched off, apply <a id="pil:writerH"></a>


$$

 H_{\rm copy}=\omega\bigl(|v,1\rangle\langle v,0|+|v,0\rangle\langle v,1|\bigr)\otimes I_{\rm fibre}

$$

Equation (45).

 for $\tau=\pi/(2\omega)$, and then switch this block off for a hold $h_C$. The copy edge exports exactly $\lfloor NW\rfloor$ positive packets. Conditional on production drainage, the probability that not all of these packets have been served at the end is bounded by <a id="pil:writererror"></a>


$$

 B_f\exp(-\kappa_f\mu_N h_C/N)

$$

Equation (46).

 in the Poisson comparison. On successful drainage every carrier originally at $v$ has $m=1$, all others have $m=0$, and the bit remains unchanged throughout any subsequent idle continuation. No direct pilot-coordinate read force is introduced. 

 <a id="source-proof-34"></a>

**Proof.**

During the copy, $w_{v,1}(s)=W\sin^2(\omega s)$, so the copy current is nonnegative and its total action is $W$. Its final residue therefore equals the production residue $u_{\rm prod}=\{NW\}$. At the final field configuration $w_{v,0}=0$ and the census at $(v,0)$ reads 

$$

 n_{v,0}=-u_{\rm prod}+Z_f+u_f=Z_f.

$$

 Thus every queued copy packet always has an eligible origin carrier during the final hold, even though the coherent origin weight has become zero. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) with $c_N=1/N$ proves [(46)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writererror). No source packets remain on the successful production event, and no coherent current emits further packets after the copy. Once $Z_f=0$, no event can alter the copied bit under idle continuation. The writer is an ordinary coherent Hamiltonian on the enlarged graph, exactly the interaction type allowed by P3. 

□





*Status: Scope; autonomous implementation at this precision not established.*

 This proof covers a prescribed driven Hamiltonian programme. The companion's autonomous clock construction is a different enlarged graph. Its coarse Bell-limit error cannot establish preservation of an $N^{-1}$ correction; an autonomous implementation at that precision would require its own estimate. The present result also specifies a finite retained idle record, not a passive record of every native earlier excursion.



<a id="section-11-3"></a>

### 11.3 An operational same-density-matrix witness



Set $\hbar=1$, take $g>0$, and use the position graph $0\to1$ with an internal qubit fibre. Starting with all carriers at $(0,m=0)$, run <a id="pil:productionH"></a>


$$

 H=g\sigma_x^{\rm pos}\otimes\operatorname{diag}(1,2)^{\rm int}
 \quad\hbox{for }0<t\le\pi/(6g).

$$

Equation (47).

 For internal weight $p=|\langle0|\psi\rangle|^2$, define <a id="pil:wJ"></a>


$$
\begin{aligned}
 w_p(s)&=p\sin^2(gs)+(1-p)\sin^2(2gs),\\
 J_p(s)&=g\sin(2gs)[p+4(1-p)\cos(2gs)].
\end{aligned}
$$

Equation (48).

 The current is nonnegative and $w_p\le3/4$ on the stated interval. Hold with the source block off for $h_P$, perform the writer [(45)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writerH) for the $q=1$ sector, and hold for $h_C$. The bit and the entire enlarged ordinary graph are specified before preparation; the writer is the same for every unknown input.

<a id="source-theorem-11"></a>

**Theorem 11.5 (Finite retained-record non-affinity).**

<a id="pil:retained"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with zero initial residues, the driven programme and the finite-gas comparison.*

 Let $T$ include production, both holds, copy, and any required idle retention, and supply the beam and receivers for that horizon. With input-independent budgets $B_e,B_f$, set <a id="pil:epsilon"></a>


$$

 \epsilon_N=B_e e^{-\kappa_e\mu_N h_P/4}
             +B_f e^{-\kappa_f\mu_N h_C/N}
             +(R_NT)^2/M_N.

$$

Equation (49).

 Then the retained ordinary bit satisfies <a id="pil:bitlaw"></a>


$$

 \left|\mathbb P_p(m=1)-\frac{\lfloor Nw_p(t)\rfloor}{N}\right|\le\epsilon_N.

$$

Equation (50).

 For equal mixtures of the internal $Z$ and $X$ basis states, which both prepare $I/2$, write $A=\sin^2(gt)$ and $C=\sin^2(2gt)$. Their bit probabilities obey <a id="pil:properlaw"></a>


$$
\begin{aligned}
 P_Z&=\frac{\lfloor NA\rfloor+\lfloor NC\rfloor}{2N}+e_Z,\\
 P_X&=\frac{\lfloor N(A+C)/2\rfloor}{N}+e_X,
 \qquad |e_Z|,|e_X|\le\epsilon_N.
\end{aligned}
$$

Equation (51).

 For every integer $N\ge2$ there is a nonempty open interval of production times on which <a id="pil:propergap"></a>


$$

 P_Z-P_X\ge\frac1{2N}-2\epsilon_N.

$$

Equation (52).

 Consequently a sufficiently resourced finite driven implementation is operationally leaky relative to the internal density matrix, within this declared sector constitution. 

 <a id="source-proof-35"></a>

**Proof.**

The production census is $n_0=N(1-w_p)+Z_e+u_e\ge N/4$, since no negative packet is emitted. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) bounds production failure by the first term of [(49)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:epsilon). Conditional on its complement, Lemma [11.4](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writer) supplies the second term. The full spatial-gas comparison adds the third term once. On successful production and copy drainage, the bit-one census is deterministically $\lfloor Nw_p(t)\rfloor$. The good event is carrier-label invariant, so Lemma [11.1](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:exchange) proves [(50)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:bitlaw); averaging proves [(51)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:properlaw).

For the open interval, let $y=N\sin^2(2gt)$ and $x=N\sin^2(gt)$. The increasing $y$ reaches $1$ strictly before $\pi/(6g)$ because its terminal value is $3N/4>1$. At that crossing $x=1/(4\cos^2(gt))\le1/3$. Just beyond it, $1<y<2$, $x<1$ and $x+y<2$. Hence $\lfloor x\rfloor=0$, $\lfloor y\rfloor=1$, $\lfloor(x+y)/2\rfloor=0$, giving the ideal difference $1/(2N)$. The two errors yield [(52)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:propergap). 

□



One explicit witness window is $1<N\sin^2(2gt)<9/8$; throughout it $x\le y/3$, so all three required floor values are fixed. The interior choice $N\sin^2(2gt)=17/16$ leaves a positive action margin from the discontinuities. Such a margin must be preserved when calibrating a finite implementation.

The word “ideal” in the last proof means the exactly drained count coefficient. The actual finite-time probabilities retain the displayed error bounds. At $t=\pi/(6g)$ the ideal magnitude is $1/(2N)$ precisely for $N\equiv2\pmod4$, and zero otherwise. A fixed arbitrary time therefore cannot support a universal lower bound for every $N$.

<a id="source-corollary-4"></a>

**Corollary 11.6 (Irreducible density-matrix simulation error).**

<a id="pil:simulator"></a> 

*Status: Proved conditional on the premises of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained).*

 On a witness interval of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained), any proposed record law depending only on the internal density matrix has worst-case total-variation error, on the two specified preparations, at least $1/(4N)-\epsilon_N$. 

 <a id="source-proof-36"></a>

**Proof.**

The proposed law is the same for both preparations. The triangle inequality makes one of its two distances at least half the distance between the actual bit laws, which is at least the probability gap in [(52)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:propergap). 

□





<a id="section-11-4"></a>

### 11.4 A retained distant-setting witness in the same model



Alice has pointer values $r,0,1$ and an internal key qubit; Bob has position $q=0,1$, an internal qubit and the blank bit $m=0$. Their keys start in $\Phi^+=(|00\rangle+|11\rangle)/\sqrt2$, while every carrier starts at $(r,0,0)$. For $x=Z$ or $X$ let $(x_0,x_1)$ be the corresponding real qubit basis. Alice applies <a id="pil:AliceH"></a>


$$

 H_A=\Omega\sum_{a=0,1}(|a\rangle\langle r|+|r\rangle\langle a|)
                  \otimes|x_a\rangle\langle x_a|

$$

Equation (53).

 for $t_A=\pi/(2\Omega)$ and then switches it off. After a hold $h_A$, Bob applies [(47)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:productionH) for $t_B\le\pi/(6g)$, holds for $h_B$, and applies a single Bob-local copy Hamiltonian <a id="pil:Bobcopy"></a>


$$

 H_C=I_A\otimes |1\rangle\langle1|_{q}
                \otimes\omega\sigma_x^{m}\otimes I_{\rm keys}

$$

Equation (54).

 for $\pi/(2\omega)$, followed by $h_C$. This is the same numerical Bob programme for both settings; it does not read Alice's actual pointer or a configuration-restricted action ledger.

<a id="source-theorem-12"></a>

**Theorem 11.7 (Finite retained setting dependence).**

<a id="pil:signal"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with zero initial residues, the driven programme and the finite-gas comparison.*

 Use a common bound $B_*\ge N+2$ on each productive or copy edge and let $T$ cover the whole experiment and requested idle retention. Define <a id="pil:signalerror"></a>


$$

 \epsilon_N^{AB}=2B_*\left(e^{-\kappa_-\mu_Nh_A/N}
             +e^{-\kappa_-\mu_Nh_B/N}
             +e^{-\kappa_-\mu_Nh_C/N}\right)+(R_NT)^2/M_N.

$$

Equation (55).

 Then Bob's retained bit satisfies <a id="pil:signallaw"></a>


$$

 P_x(m=1)=\frac{\lfloor NW_0^x\rfloor+\lfloor NW_1^x\rfloor}{N}+e_x,
 \qquad |e_x|\le\epsilon_N^{AB},

$$

Equation (56).

 where, for $A=\sin^2(gt_B)$ and $C=\sin^2(2gt_B)$, 

$$

 (W_0^Z,W_1^Z)=(A/2,C/2),\qquad W_0^X=W_1^X=(A+C)/4.

$$

 For every $N\ge3$ a nonempty open interval of $t_B$ gives <a id="pil:signalgap"></a>


$$

 P_Z(m=1)-P_X(m=1)\ge1/N-2\epsilon_N^{AB}.

$$

Equation (57).

 This is a setting-dependent ordinary record law of the finite nonrelativistic constitution. It is not yet a demonstrated spacelike implementation or an experimental observation. 

 <a id="source-proof-37"></a>

**Proof.**

Alice's field evolves to $-i\sum_a|a\rangle|x_a\rangle_A|x_a\rangle_B/\sqrt2$, with monotone integrated actions $1/2$ on her two productive edges. At the end of her rotation the ready-vertex census is 

$$

 n_r=Z_{A,0}+Z_{A,1}+u_{A,0}+u_{A,1}.

$$

 Whenever an Alice packet remains queued, at least one carrier is eligible. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) bounds Alice failure by $2B_*e^{-\kappa_-\mu_Nh_A/N}$. For odd $N$, a ready carrier remains even after drainage; it is retained, not discarded or renormalized.

In Alice slice $a$, Bob's wave has squared norm $1/2$ and internal input $x_a$. Its productive action is $W_a=\tfrac12 w_{p_a}(t_B)$, yielding the stated values. Conditional on Alice drainage, the census at $(a,0,0)$ during Bob's hold is 

$$

 n_{a,0,0}=Nw_{a,0,0}-u_{A,a}+Z_{B,a}+u_{B,a}.

$$

 Here $w_{a,0,0}\ge1/8$, $0\le u_{A,a}<1$, and $u_{B,a}\ge0$. If $Z_{B,a}\ge1$, the right side is positive, so the integer count is at least one. Bob's production failure is bounded by the second exponential term in [(55)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalerror).

On successful production drainage, $n_{a,1,0}=\lfloor NW_a\rfloor$ and $w_{a,1,0}=W_a$. Hamiltonian [(54)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:Bobcopy) is the direct sum of identical ordinary copy rotations in the Alice slices. Each has copy action $W_a$, and at its final origin the production and copy residues cancel exactly as in Lemma [11.4](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writer). Each queued copy packet has at least one eligible carrier, giving the third exponential term. On complete success the number of carriers with $m=1$ is the deterministic sum of floors in [(56)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signallaw). Label exchangeability and one full-history gas comparison prove the claimed law. The branch $a=r$ has zero field after Alice's rotation and exports no Bob packets; any odd-$N$ stranded carrier remains with $m=0$ and is included in the law.

Put $x=N\sin^2(gt_B)/2$, $y=N\sin^2(2gt_B)/2$. Since $y$ increases to $3N/8>1$ for $N\ge3$, it crosses $1$ before the interval ends; at the crossing $x\le1/3$. Just afterwards $\lfloor x\rfloor=0$, $\lfloor y\rfloor=1$ and $\lfloor(x+y)/2\rfloor=0$. The difference of the ideal numerators is therefore $1$, proving [(57)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalgap). 

□



At the fixed endpoint $t_B=\pi/(6g)$ the ideal numerator is $\lfloor N/8\rfloor+\lfloor3N/8\rfloor-2\lfloor N/4\rfloor$: it is $1$ for $N\equiv3\pmod8$, $-1$ for $N\equiv4,5\pmod8$, and $0$ otherwise. The witness times depend on $N$; unknown resource number, time calibration and control errors therefore belong to an actual test's specification.

An explicit open window is $1<N\sin^2(2gt_B)/2<9/8$, valid for every $N\ge3$. Its width is of order $1/(g\sqrt N)$ as $N$ grows. Taking the scaled action at its interior value $17/16$ avoids an exact exporter threshold; arbitrarily precise timing at a threshold is not needed.

<a id="source-corollary-5"></a>

**Corollary 11.8 (Irreducible no-signalling simulation error).**

<a id="pil:nosignalsimulator"></a> 

*Status: Proved conditional on the premises of Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal).*

 On a witness interval of Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal), every candidate law whose Bob-bit marginal is independent of Alice's setting has worst-case total-variation error on the two settings at least $1/(2N)-\epsilon_N^{AB}$. 

 <a id="source-proof-38"></a>

**Proof.**

Apply the same triangle-inequality argument as in Corollary [11.6](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:simulator) to Bob's two retained marginal laws. Marginalization contracts total variation, so the lower bound also holds for a proposed complete joint law. 

□





<a id="section-11-5"></a>

### 11.5 Joint finite resources and empirical scope



All queues in these protocols are one-signed; no fast-recombination approximation is used. Recombination channels may still contribute to the candidate rate and gas budget. For any fixed $N$ and desired positive error, choose the holds using [(49)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:epsilon) or [(55)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalerror), then choose $M_N$ using the resulting $R_N,T$. This is a noncircular finite choice, since $R_N$ is independent of $M_N$.

For example, in fixed units let $B_e=O(N)$, $\mu_N=N^{1/2}$, $a_e=N^2$, take each conservative hold as $4N\log N/(\kappa_-\mu_N)$ and choose $M_N=N^{12}$ times a sufficiently large fixed constant. The graph has a fixed finite number of edges, so $R_N=O(N^4)$, $T=O(\sqrt N\log N)$ and 

$$

 (R_NT)^2/M_N=O(N^{-3}\log^2N)=o(N^{-2}).

$$

 The drainage contributions are $O(N^{-3})$ and the total errors are $o(N^{-1})$. Every beam, packet bank and receiver bank is finite at each $N$. This resource-dependent experiment is controlled by the direct contact estimate, not by importing a fixed-horizon convergence theorem into a growing-horizon regime.

If an implementation of the stated setting witness bounds the actual probability difference by $\sigma$, and its physical preparation, timing, copy and drainage errors have separately been bounded by the stated $\epsilon_N^{AB}$ (plus any additional calibrated implementation errors), then 

$$

 1/N\le\sigma+2\epsilon_N^{AB}.

$$

 This is a conditional inference for this protocol. Generic no-signalling observations supply no numerical bound on $N$ without the protocol's resource identification and error calibration. The theory is nonrelativistic; a causal claim about spacelike separation requires an independently specified relativistic embedding. The result is nevertheless operational within the driven constitution: the output is a retained ordinary bit rather than an inaccessible pilot census.



<a id="section-11-6"></a>

### 11.6 Why randomizing only the initial residue does not restore Born endpoints



The following obstruction concerns a proposed modification, not the declared ready-zero constitution. It tests the suggestion that randomizing the initial fractional residue might repair its floor law while leaving the first-hit-and-reset exporter unchanged.

<a id="source-proposition-7"></a>

**Proposition 11.9 (An initial-residue obstruction).**

<a id="pil:residueobstruction"></a> 

*Status: Proved conditional on the stated modified exporter.*

 Fix $N\ge1$. Consider a single edge, initially empty of packets and with all carriers at its origin. Replace its zero initial residue by a random $U\in(-1,1)$, independently drawn from the ready gas with a law fixed independently of the subsequent programme; retain the original exporter thresholds $\pm1$, reset to zero after each hit, and the original carrier reactions. If the ideal drained target probability equals the Born weight for every monotone forward action $x=Nw:0\to a$ with $0<a<1$, then $U$ must be uniform on $[0,1)$. For this unique law, the forward-and-return action $x:0\to a\to0$ has ideal drained target probability $a/N$, although its final Born target weight is zero. Thus no fixed law for the initial residue alone restores Born endpoint probabilities for both families. 

 <a id="source-proof-39"></a>

**Proof.**

The inventory must include the changed initial constant. For a vector of initial residues $U$, it is 

$$

 n=Nw-BZ-Bu+BU.

$$

 In the single-edge target coordinate this reads $n_1=x-Z-u+U$. Writing $k$ for signed cumulative exports, the unchanged exporter obeys $u=U+x-k$, so $n_1=k-Z$. At a drained endpoint $n_1=k$. Exchangeability is unchanged by a carrier-independent initial residue.

During $0\le x\le a<1$, no negative threshold can be reached and at most one positive export occurs. Including a hit at the endpoint, 

$$

 k=\mathbf1_{\{U\ge1-a\}},\qquad
 \mathbb P(Q=1)_{\rm drained}=\frac{\mathbb P(U\ge1-a)}{N}.

$$

 Equality to $a/N$ for every $a\in(0,1)$ forces $\mathbb P(U\ge b)=1-b$ for every $b\in(0,1)$. Letting $b\downarrow0$ gives $\mathbb P(U>0)=1$, and these tail probabilities uniquely specify the uniform law on $[0,1)$.

Now reverse the action after reaching $a$. On the exported branch $U\ge1-a>0$, the residue decreases from $U+a-1$ to $U-1>-1$, so it never reaches the negative threshold. On the other branch it decreases from $U+a<1$ to $U\ge0$, again without an export. Hence the final count remains $k=\mathbf1_{\{U\ge1-a\}}$. At most one positive packet needs to drain; whenever it remains alive, all $N$ carriers are still at the origin. Its non-drain probability after an idle hold $h$ is at most $e^{-\kappa\mu_Nh}$ in the Poisson comparison. The finite-gas comparison adds $\delta_{\rm g}$. The returned finite-hold endpoint therefore approaches $a/N$ with controlled error, whereas $w_1=0$. A two-level forward Rabi pulse followed by its reverse realizes the stated weight path; no change to the carrier or contact law is used. 

□



This obstruction rules out a specific proposed repair of endpoint equivariance. It does not exclude a changed exporter, programme-dependent preparation laws, or other sealing mechanisms. Nor does it prove an accessible retained-record discrepancy at the returned zero-weight endpoint: the coherent writer above has no pilot weight there to drive its copy. That physical access question remains distinct from the endpoint census.



<a id="section-11-7"></a>

### 11.7 A proved undrained asymptotic and its access boundary



The following result strengthens the finite calculation at the level of instantaneous positions. It does not assert that a subsequent material reader preserves an undrained endpoint at the same accuracy.

<a id="source-theorem-13"></a>

**Theorem 11.10 (Single-edge undrained asymptotic).**

<a id="pil:undrained"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and the stated asymptotic regime.*

 Let $w\in C^2([0,T])$ satisfy $w(0)=0$, $J=\dot w\ge0$, and $1-w\ge c>0$. Consider the single-edge ready pilot model with zero residues, scalar response $\kappa>0$, deterministic export count $k(t)=\lfloor Nw(t)\rfloor$, and no hold or reader. Let $\mu_N\to\infty$, $\mu_N/N\to0$, and suppose the spatial-gas comparison error on $[0,T]$ satisfies $\mu_N\delta_{\mathrm g}\to0$. Then, for every fixed $t>0$, <a id="pil:undrainedlimit"></a>


$$

 \mu_N\left(w(t)-\mathbb P(Q(t)=1)\right)
       \longrightarrow\frac{J(t)}{\kappa(1-w(t))}.

$$

Equation (58).

 For [(48)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:wJ) at $t=\pi/(6g)$, the equal $Z$ and $X$ preparations consequently satisfy <a id="pil:undrainedgap"></a>


$$

 \mu_N(P_X(Q(t)=1)-P_Z(Q(t)=1))
       \longrightarrow\frac{5\sqrt3\,g}{6\kappa}>0.

$$

Equation (59).

 

 <a id="source-proof-40"></a>

**Proof.**

Work first in the Poisson comparison and write $n=n_1$, $Z=k-n$, $r=w-k/N\in[0,1/N)$ and $Y=w-n/N=(Z/N)+r\ge0$. Between deterministic exports the carrier count has the exact birth generator <a id="pil:generator"></a>


$$

 \mathcal L_t f(n)=\frac{\kappa\mu_N}{N}(k(t)-n)(N-n)[f(n+1)-f(n)].

$$

Equation (60).

 The exporter does not itself change $n$. Every queued packet has service hazard $\kappa\mu_N n_0/N\ge\kappa\mu_N c$, because $n_0/N=1-w+Y\ge c$.

We give the required second-moment estimate explicitly. For each packet, construct an independent baseline clock of rate $a=\kappa\mu_Nc$, with a supplementary state-dependent clock of rate $\kappa\mu_N(n_0/N-c)$. On either service, choose uniformly among the current origin carriers. Every eligible packet–carrier pair then has total rate $\kappa\mu_N/N$, so this construction has precisely the original carrier/packet generator. A packet alive at $t$ must have survived its first baseline ring after its deterministic export time $\tau_i$. Therefore $Z(t)$ is dominated by 

$$

 \widetilde Z(t)=\sum_{i\le k(t)}\mathbf1_{\{E_i>t-\tau_i\}},
 \qquad E_i\ {\text{independent}},\quad E_i\sim\operatorname{Exp}(a).

$$

 Writing $K=\|J\|_\infty$, Stieltjes integration and $|\lfloor Nw\rfloor-Nw|\le1$ give 

$$

 m(t):=\mathbb E\widetilde Z(t)
 =\int_{[0,t]} e^{-a(t-s)}\,d\lfloor Nw(s)\rfloor
 \le NK/a+1.

$$

 Since the indicators are independent, $\mathbb E\widetilde Z^2\le m^2+m$. Consequently, uniformly in $t$, <a id="pil:secondmoment"></a>


$$

 \mathbb E Y^2\le\frac{m^2+3m+1}{N^2},\qquad
 m\le\frac{NK}{\kappa\mu_Nc}+1.

$$

Equation (61).

 No independence of actual packet lifetimes has been assumed; only their comparison clocks are independent.

Let $d(t)=\mathbb E Y(t)$. The exact generator and $1-n/N=1-w+Y$ imply, almost everywhere, <a id="pil:deficitODE"></a>


$$
\begin{aligned}
 d'&=J-\kappa\mu_N(1-w)d+q_N,\\
 q_N&=-\kappa\mu_N\mathbb E Y^2
       +\kappa\mu_N r(1-w+d).
\end{aligned}
$$

Equation (62).

 Since $0\le d\le1$, [(61)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:secondmoment) yields 

$$

 \|q_N\|_\infty\le Q_N:=\kappa\mu_N\left[
 \frac{m_*^2+3m_*+1}{N^2}+\frac2N\right]
 =O(\mu_N^{-1}+\mu_N/N)=o(1).

$$

 Here $m_*:=NK/(\kappa\mu_Nc)+1$. The bounded jumps in $k$ and $r$ cancel in $Y$; $d$ is absolutely continuous and the almost-everywhere equation suffices. Variation of constants from $d(0)=0$ gives 

$$

 \mu_Nd(t)=\mu_N\int_0^t
 e^{-\kappa\mu_N\int_s^t(1-w(v))\,dv}[J(s)+q_N(s)]\,ds.

$$

 Set $F=J/[\kappa(1-w)]$. Integration by parts of the $J$ term, using the derivative of the exponential with respect to $s$, proves the explicit bound <a id="pil:undrainederror"></a>


$$

 |\mu_Nd(t)-F(t)|\le
 |F(0)|e^{-\kappa\mu_Nct}
 +\frac{\|F'\|_\infty}{\kappa\mu_Nc}
 +\frac{Q_N}{\kappa c}.

$$

Equation (63).

 All terms vanish. Exchangeability identifies $\mathbb E n/N=\mathbb P(Q=1)$. The gas comparison adds at most $\mu_N\delta_{\mathrm g}$ to [(63)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainederror), proving [(58)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainedlimit).

At $t=\pi/(6g)$, for $p=1,0,1/2$ respectively, the limits are 

$$

 F_1=\frac{2\sqrt3g}{3\kappa},\qquad
 F_0=\frac{4\sqrt3g}{\kappa},\qquad
 F_{1/2}=\frac{3\sqrt3g}{2\kappa}.

$$

 The Born terms cancel between the equal-density-matrix ensembles. Thus $\mu_N(P_X-P_Z)\to(F_1+F_0)/2-F_{1/2}=5\sqrt3g/(6\kappa)$. 

□





*Status: Scope; retained-reader extension not established.*

 This establishes the endpoint coefficient for the concrete monotone ready-state family. It does not establish the conjecture for an arbitrary late one-signed window following mixed queues, where additional initial-stock and recombination estimates would be required. More importantly, a final configuration is not automatically a stored historical record. During a later copy the old undrained production packets may still move carriers; a fully drained copy can erase the lag and recover a floor law. Therefore [(59)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainedgap) is an instantaneous-position distinction. Converting its larger $\mu_N^{-1}$ size into a retained record with error $o(\mu_N^{-1})$ remains a separate physical task. The retained $N^{-1}$ results above do not have that gap.
