# Appendix B: Chamber transport, killing, and complete path limits

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

<a id="chamber:chapter"></a> 

The geometric chamber model [[M24](/quantum-measurement/monograph/bibliography#bib-M24)] and its continuous and absorbing extensions [[M26](/quantum-measurement/monograph/bibliography#bib-M26), [M27](/quantum-measurement/monograph/bibliography#bib-M27)] use a different complete source from canonical packet exchange. There is one material tracer, squared-norm chamber volume, deterministic rectified boundary transfer, and intrinsic uniform stirring. The Bell ratio is absent from the elementary stirring generator; it emerges in the natural path limit. Its squared-norm volume, normalized face allocation, absence of extra traffic, and fresh stirring statistics are nevertheless explicit constitutive inputs. This chapter records the common proof once and states precisely which absorbing and adaptive extensions it supports. 



<a id="section-B-1"></a>

## B.1 Interaction selection within the finite inventory

 

Fix a finite coherent space containing source, apparatus, controller, every returning memory, and resource/failure modes. An inaccessible reference remains inside each fibre and every controlled operator acts trivially on it. Let $P_i$ be complete configuration projectors and $w_i=\|P_i z\|^2$. The actual state is $(z,Q,d,\zeta)$, with $(d,\zeta)\in[0,w_Q]\times[0,1]$. Zero-volume exceptions are assigned a fixed failure flag. 

The contact-selection result is conditional on the following independent material assumptions. At fixed configuration $i$ and normalized microscopic coordinate $\xi=(d/w_i,\zeta)$, candidate energy $h_i(z,\xi;c)$ is degree two in amplitudes, continuous in $\xi$ and controls $c$, and generates a metric- and symplectic-preserving field fixing zero. Elementary stirring and native configuration transfers keep $z$ instantaneously fixed and conserve the same energy, without an additional coordinate chosen to compensate a ray-dependent energy change. Full-support stirring is admitted. Arbitrarily weak simultaneous probes connect a spanning graph of the full active inventory on nonempty open sets of rays, and energies vary continuously when these probes tend to zero. 



**Proposition B.1 (A common contact matrix within the specified inventory).**

 <a id="chamber:contact"></a> Under these assumptions, on each connected applicable inventory, 

$$

 h_i(z,\xi;c)=z^\dagger H(c)z,\qquad H(c)=H(c)^\dagger,

$$

 independently of the actual configuration and microscopic coordinate. 

 

**Proof.**

Isoenergetic stirring gives $h_i(z,\xi';c)=h_i(z,\xi;c)$ for almost every product-uniform target $\xi'$. Full support and continuity extend equality to the whole chamber, removing microscopic dependence. The finite-cone Killing-field argument of Theorem [12.1](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:linear), together with degree-two energy normalization, gives $h_i(z;c)=z^\dagger H_i(c)z$. On an active transfer $i\to j$, no-work conservation gives $z^\dagger(H_j-H_i)z=0$ on an open ray set. A Hermitian quadratic form vanishing on an open sphere patch vanishes everywhere by real analyticity; polarization then gives $H_j=H_i$. Connectivity propagates equality, and continuity in simultaneous probe strength gives it at the zero-probe limit as well. 

□

 

The simultaneous-contact assumption covers a source-off read: testing only edges active at that exact zero-current instant would not connect the labels. The absence of a compensating coordinate is equally substantive. Adding a real work coordinate $y$ with energy $z^\dagger H_i z+y$ and transfer 

$$

 (i,y)\mapsto(j,y+z^\dagger(H_i-H_j)z)

$$

 preserves energy for arbitrary different $H_i,H_j$. Such a recoil changes the declared complete inventory; ordinary energy conservation alone does not exclude it. The preceding proposition is therefore a reduction within a finite material class, not universal physical admission. 



<a id="section-B-2"></a>

## B.2 Volumes, portals, and the primitive stochastic law

 

Let a bounded piecewise regular Hermitian $H(t)$ drive $i\hbar\dot z=H(t)z$. Define 

$$

 J_{ji}=\frac2\hbar\operatorname{Im}\langle z_j,H_{ji}z_i\rangle,
 \quad f_{ji}=[J_{ji}]_+,\quad 
 F_i=\sum_jf_{ji},\quad A_i=\sum_jf_{ij}.

$$

 Then $\dot w_i=A_i-F_i$. The total chamber volume is one. Initially use density one on the union; alternatively a ready source supported in one volume-one chamber needs only two independent uniform microscopic coordinates, not an initial draw among sectors. 

Between stirring and crossings, <a id="chamber:drift"></a>


$$
\dot d=-F_Q(t),\qquad\dot\zeta=0.
 

$$

Equation (B.1).

 On the lower face $d=0$, allocate an interval of transverse width $f_{ji}/F_i$ to destination $j$. Allocate its matching upper incoming interval in $j$ width $f_{ji}/A_j$. If their lower endpoints are $a_{ji},c_{ji}$, set <a id="chamber:portal"></a>


$$
Q'=j,\quad d'=w_j(t),\quad
 \zeta'=c_{ji}+(F_i/A_j)(\zeta-a_{ji}).
 

$$

Equation (B.2).

 The map satisfies $F_i\,d\zeta=A_j\,d\zeta'$. Zero-current faces are absent. This normalized flux allocation is a geometric postulate, not a consequence of conservation alone. No extra circulation or independent side jumps are allowed in this model. 

The only elementary random generator is state-independent Poisson stirring at rate $\kappa>0$: <a id="chamber:stirring"></a>


$$
\mathcal S_\kappa f(i,d,\zeta)=\kappa\left[
 \int_0^1\!\int_0^1f(i,w_i u,v)du\,dv-f(i,d,\zeta)\right].
 

$$

Equation (B.3).

 Each target uses fresh product uniforms conditional on the complete past; there is no readable future seed or free stirring archive. The Poisson count on a finite horizon is finite almost surely, with mean $\kappa T$ and unbounded support. A finite consumable stirring bath has not been constructed. 



**Lemma B.2 (Exact volume and mean flux at finite stirring).**

 <a id="chamber:volume"></a> Density one is preserved. Consequently $\Pr(Q_t=i)=w_i(t)$ and $\mathbb E N_{ji}([s,t])=\int_s^tf_{ji}(u)du$. The characteristic construction is nonexplosive on finite horizons with integrable total flux and has no positive-probability node loss for bounded piecewise regular finite Hamiltonians. 

 

**Proof.**

Interior drift has zero divergence. Relative upper-boundary speed is $\dot w_i+F_i=A_i$, exactly the incoming flux supplied by [(B.2)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:portal); lower-face outflow is $F_i$. Resetting a mass $w_i$ uniformly in volume $w_i$ preserves density one. Localize initially to positive volumes and bounded event counts. Characteristics, flux-preserving portals and reset averaging bound the substochastic density by one. Expected counts are therefore bounded by the integrated total current, ruling out explosion as the count cutoff is removed. 

After arrival at $s$, before the next event, 

$$

 w_i(t)-d(t)=\int_s^tA_i(u)du.

$$

 Arrival times have an absolutely continuous density bounded by $A_i(s)ds$. At almost every such arrival the right accumulated incoming flux is positive on a sufficiently short subsequent interval, by Lebesgue differentiation. The trajectory must reach its lower exit before a positive gap can coexist with $w_i=0$. Initial and refreshed depths are strictly below the upper boundary almost surely. Thus exceptional collapsing upper-boundary trajectories have zero mass. Removing the volume cutoff loses no probability. The density-one solution is normalized and its directed boundary flux is $f_{ji}$, proving both formulas. 

□

 

These statements do not yet determine conditional waiting times. For example under $H=\hbar g\sigma_x$, starting in sector 0, the first exit has density $g\sin(2gs)$ on $(0,\pi/(2g))$. If no stirring occurs for the next $\pi/(2g)$, the return time is exactly $s+\pi/(2g)$. This singular line in the two-event law has mass at least $e^{-\kappa\pi/(2g)}$, whereas the limiting Bell two-time law has a density. The finite chamber process is therefore genuinely different from the Bell process. 



<a id="section-B-3"></a>

## B.3 The global finite-horizon path theorem

 

The absorbing extension includes the unabsorbed case by setting all killing rates to zero. During one no-capture epoch let <a id="chamber:killedwave"></a>


$$
\dot z=-iH(t)z/\hbar-\tfrac12\Gamma(t)z,
 \qquad\Gamma=\sum_i\gamma_iP_i,
 \qquad0\le\gamma_i=\sum_c\gamma_{ci}\le\bar\gamma,
 

$$

Equation (B.4).

 with $\|z(0)\|=1$. Coefficients are deterministic after conditioning on the complete chemical history at the epoch start. The volumes are now unnormalized, $w_i=\|z_i\|^2$, and <a id="chamber:killeddrift"></a>


$$
\dot w_i=A_i-F_i-\gamma_iw_i,
 \qquad\dot d=-F_i-\gamma_i d.
 

$$

Equation (B.5).

 The actual chemical hazard at occupied site $i$ is $\gamma_{ci}$, independently of depth. The same portals and stirring act until capture. 

The killed density equation is 

$$

 \partial_t\rho_i+\partial_d[(-F_i-\gamma_i d)\rho_i]=-\gamma_i\rho_i.

$$

 Thus surviving density one solves the interior equation, while relative upper-boundary speed remains $A_i$. The gap satisfies $(w_i-d)'=A_i-\gamma_i(w_i-d)$; its positive integrating-factor form gives the preceding node argument. The reaction density is $\gamma_{ci}w_i\,dt$. Classical killing does not determine a coherent daughter; the reaction continuation below is a separate law. 

Fix $n$ labels and horizon $T$. Set <a id="chamber:nodebudget"></a>


$$
\begin{aligned}M&=\sup_{i,t}F_i(t),\qquad L=\sup_{i,t}|\dot w_i(t)|,\\
 b(a)&=2na+\int_0^T\sum_{w_i\le2a}A_i\,dt
        +2\int_0^T\sum_{a\le w_i\le2a}[-\dot w_i]_+dt,
 \quad0<a<1/2.
 
\end{aligned}
$$

Equation (B.6, B.7).

 The limiting comparator has native rates $f_{ji}/w_i$ on occupied chambers and chemical rates $\gamma_{ci}$. Its output contains the complete native path, capture time/channel, and null or terminal failure symbols. 



**Theorem B.3 (Killed whole-path comparison, including nodes).**

 <a id="chamber:path"></a> For $M>0$ the total-variation distance between the finite-stirring killed path law and its comparator is at most the following expression, capped at one: <a id="chamber:pathbound"></a>


$$
\epsilon_\kappa(a)=2e^{\bar\gamma T}b(a)
 +\frac{M(L+2M+e\bar\gamma)T}{\kappa a^2}
 +(\kappa T+1)\exp\left[-\frac{\kappa a}{4(M+\bar\gamma)}\right].
 

$$

Equation (B.8).

 If $M=0$, the native path is constant and the two chemical laws agree exactly. With $\bar\gamma=0$ the unabsorbed proof sharpens the final exponential denominator from $4M$ to $2M$ and removes the $e\bar\gamma$ term. 

 

**Proof.**

First suppress killing while retaining the compressed drift [(B.5)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:killeddrift). This auxiliary skeleton is only a proof device. Its density is at most $e^{\bar\gamma t}$: compression has rate at most $\bar\gamma$, portals preserve flux, and a uniform reset preserves the bound. For the comparator without killing, occupations $p_i$ obey $p_i\le e^{\bar\gamma t}w_i$. Indeed $v_i=e^{\bar\gamma t}w_i$ solves its positive forward equation with nonnegative added source $(\bar\gamma-\gamma_i)v_i$. A stopped finite-state comparison followed by removal of cutoffs proves this domination even near nodes. Both skeletons' incoming fluxes are therefore bounded by $e^{\bar\gamma T}f_{ji}$. 

An occupied visit to $w_i\le a$ either starts below $2a$, arrives while $w_i\le2a$, or stays in $i$ during a downward excursion from $2a$ to $a$. Initial low-volume mass is at most $2a$ per label. The incoming visits cost their flux integral. Each completed downward excursion consumes at least $a$ of negative variation in the band; occupation at its deterministic start is at most $2ae^{\bar\gamma T}$. The union bound gives $e^{\bar\gamma T}b(a)$ for each skeleton. Stop both on such visits. 

Condition on a common independent Poisson stirring-time partition. Each interval starts at $s$ with uniform depth and transverse coordinate in its current chamber. Put $G_i(s,t)=\int_s^t\gamma_i(u)du$. Until its first native exit the exact depth is 

$$

 d(t)=e^{-G_i(s,t)}\left[d(s)-\int_s^te^{G_i(s,u)}F_i(u)du\right].

$$

 The first-exit subdensities into $j$, before the occupied-volume stop, are 

$$

 g_j(t)=e^{G_i(s,t)}f_{ji}(t)/w_i(s),
 \qquad
 g_j^*(t)=e^{-\int_s^tF_i/w_i}\,f_{ji}(t)/w_i(t).

$$

 For interval length $h\le a/[4(M+\bar\gamma)]$, use 

$$

 |e^{G_i}-1|\le e\bar\gamma h,\quad 
 |w_i(s)^{-1}-w_i(t)^{-1}|\le Lh/a^2,\quad 
 1-e^{-\int F_i/w_i}\le Mh/a.

$$

 After summing destinations and integrating, the first-exit density difference is at most $M(L+M+e\bar\gamma a)h^2/(2a^2)$. Adding the no-exit atom costs no more than this quantity in total variation, since its discrepancy is the integral of the density difference. 

After a microscopic arrival its depth is at least $ae^{-\bar\gamma h}-Mh>0$, so there cannot be a second microscopic exit within this short interval before the volume stop. The comparator's two-or-more probability is bounded by $M^2h^2/(2a^2)$, using a dominating rate-$M/a$ Poisson clock. Hence the complete interval-kernel discrepancy is at most $M(L+2M+e\bar\gamma)h^2/(2a^2)$. 

For the Poisson partition, $\mathbb E\sum h^2\le2T/\kappa$. One proof integrates $e^{-\kappa|u-v|}$, the probability that $u,v$ lie in the same interval. A union bound over the initial gap and all Poisson starts bounds a gap longer than $h_0$ by $(\kappa T+1)e^{-\kappa h_0}$. Sequential conditional coupling, with the two node budgets, yields [(B.8)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:pathbound) for the auxiliary skeletons. 

Finally append the same independent unit exponential $E$ and stop each path when $\int_0^t\gamma_{Q_s}(s)ds$ reaches $E$. Select $c$ using the common probabilities $\gamma_{cQ}/\gamma_Q$. This common marking/stopping kernel contracts total variation and produces the actual killed laws. For $M=0$ native labels never change and the same construction couples the whole law exactly. When $\bar\gamma=0$, a fresh depth at least $a$ cannot be swept twice if $h<a/(2M)$; the sharper unabsorbed estimate follows by the same proof. 

□

 

If $\sup_t\|H(t)\|\le\hbar\Omega$, let $C=2n\Omega$. Then $|J_{ji}|\le2\Omega\sqrt{w_iw_j}$ and $\sum_iw_i\le1$ imply <a id="chamber:explicitnodes"></a>


$$
M\le C,\quad L\le C+\bar\gamma,\quad
 b(a)\le2na+3nCT\sqrt{2a}+4n\bar\gamma aT.
 

$$

Equation (B.9).

 The incoming and outgoing flux at a label are bounded by $C\sqrt{w_i}$; insert that bound into [(B.7)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:nodebudget), using $[-\dot w_i]_+\le F_i+\gamma_iw_i$. These finite integrals justify cutoff removal. At fixed graph, horizon and reaction bounds, $a=\kappa^{-2/5}$ in fixed units gives a coarse $O(\kappa^{-1/5})$ path error. Growing resources require the actual right-hand side, including $e^{\bar\gamma T}$, to vanish in the same limit. 



<a id="section-B-4"></a>

## B.4 Conditional capture and finite adaptive epochs

 

For a product mark $c$ that does not reveal the native site, define 

$$

 D_c=\sum_i\gamma_{ci}P_i,
 \qquad r_c=\|\sqrt{D_c}z\|^2.

$$

 The declared coherent reaction is $z\mapsto\sqrt{D_c}z/\sqrt{r_c}$, followed by its specified fibre-preserving outgoing isometry. This assumption fixes more than the scalar hazard. Density-one capture makes the old-site posterior $\gamma_{ci}w_i/r_c$ and leaves depth uniform in each site. The map <a id="chamber:capturereset"></a>


$$
i'=f_c(i),\qquad d'=\gamma_{ci}d/r_c,\qquad\zeta'=\zeta
 

$$

Equation (B.10).

 therefore produces density one in the normalized daughter chambers, when $f_c$ is the declared injective site embedding. If channels merge sites, the outgoing multiplicity must remain in the retained configuration or the construction requires an explicitly specified measure-preserving merge. Zero-rate branches are absent. 

This readiness is conditional on the complete chemical history, not necessarily on the earlier native path. To concatenate at most $m$ adaptive epochs, require either an explicitly fresh carrier conditional on the complete past or a quiet interval $s_\ell>0$ before the next active epoch, with $H=0$, all killing off, and stirring retained. Conditional on at least one stir in that interval, the final normalized depth and transverse coordinate are independent fresh uniforms given the earlier macroscopic path and its final site. Failure costs $e^{-\kappa s_\ell}$. 



**Corollary B.4 (Complete finite adaptive path budget).**

 <a id="chamber:adaptive"></a> Suppose the coherent daughter and resource maps are as just specified, the coefficients of each epoch are deterministic conditional on its complete chemical history, all adaptive controls use retained physical records, and the epoch bounds are uniform on the admitted complete histories. Then <a id="chamber:adaptivebound"></a>


$$
\operatorname{TV}(P_\kappa,P_*)\le
 \min\left\{1,\sum_{\ell=1}^m
       \sup_{\text{chemical histories}}\epsilon_{\kappa,\ell}(a_\ell)
       +\sum_{\text{required refreshes}}e^{-\kappa s_\ell}\right\}.
 

$$

Equation (B.11).

 The common output includes all native paths, event times, product marks, nulls, failures, exhaustion, copied memories and permitted resource returns represented by the specified subsequent maps. 

 

**Proof.**

On matching chemical events, exact event times and prior retained outputs, the normalized source and next bounded programme coincide. Successful quiet refresh supplies identical independent microscopic readiness in the matched occupied site. The interval comparison in Theorem [B.3](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:path) is uniform conditional on that site. Node costs need not be uniform conditional on the whole prior native path: average them under each model's actual epoch law conditional on chemical history, where density one gives the stated site distribution, and bound the failure events by these marginal probabilities. Sequential maximal couplings of the short-interval kernels, the union bound for the two node events in each epoch, and the refresh-failure union bound prove [(B.11)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:adaptivebound). A common subsequent record map contracts the bound. 

□

 

An arbitrary event-dependent change of wave generator does not satisfy these hypotheses. Start in sector 0 under $H=\hbar g\sigma_x$ and freeze $H$ at the first actual native exit $S$. Its one-way density is $g\sin(2gS)$ on $(0,\pi/(2g))$. After freezing, $Q=1$ certainly, but the wave stays at $w_1=\sin^2(gS)$ and 

$$

 \mathbb E w_1=\int_0^{\pi/(2g)}\sin^2(gs)g\sin(2gs)ds=1/2.

$$

 Thus $\Pr(Q=1)=1\ne\mathbb Ew_1$. The reaction continuation and conditional readiness assumptions cannot be omitted merely because the policy is causal. 



<a id="section-B-5"></a>

## B.5 Continuous coordinates and the finite split extension

 

Let $y$ be a material work coordinate, with local weights $w_i(y,t)$ and currents obeying 

$$

 \partial_tw_i+\partial_y(w_iv_i)=A_i-F_i-\gamma_iw_i.

$$

 The density-one microscopic region is $0<d<w_i(y,t)$, $0<\zeta<1$, with dynamics <a id="chamber:continuum"></a>


$$
\dot y=v_i,\qquad
 \dot d=-F_i-d\partial_yv_i-\gamma_i d,
 \qquad\dot\zeta=0.
 

$$

Equation (B.12).

 Interior divergence is $-\gamma_i$, exactly balanced by killing. The moving upper boundary has relative incoming speed $A_i$. Thus the same portals preserve the correct flux, wherever the stated flow is defined. A global completion is available for the following finite split class; it is not inferred for arbitrary simultaneous singular transport and reactions. 

During a no-event translation block, $f=\gamma=0$ and sector mass $m_i=\int w_i(y,t)dy$ is fixed. Set 

$$

 F_{i,t}(y)=m_i^{-1}\int_{-\infty}^yw_i(x,t)dx,
 \quad y(t)=F_{i,t}^{-1}(F_{i,s}(y(s))).

$$

 Use generalized inverses and retain $d/w_i,\zeta$ between stirs. The change of $w_i(y,t)dy$ cancels the depth scaling, preserving complete volume. If $|v_i|\le V(t)$, integrating the continuity equation against monotone cutoffs gives $|y(t)-y(s)|\le\int_s^tV(u)du$ for almost every rank. Vacuum gaps do not require division by zero. 

During a gate block take $v_i=0$ and first omit killing. Then $\rho(y)=\sum_iw_i(y,t)$ is fixed. Conditional on $y$ with $\rho(y)>0$, define $\widehat w_i=w_i/\rho$, $\widehat f_{ji}=f_{ji}/\rho$ and normalized depth $d/\rho$. The unabsorbed theorem applies on this fibre. Its error is <a id="chamber:fibrebound"></a>


$$
2\int\rho(y)b_y(a)dy+
 \frac{M(L+2M)T}{\kappa a^2}
 +(\kappa T+1)e^{-\kappa a/(2M)},
 

$$

Equation (B.13).

 where $M,L$ are essential uniform bounds for the normalized fibre rates and weight derivatives, and $b_y$ is [(B.7)](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:nodebudget) on that fibre. Bounded local gate matrices make these estimates uniform; zero-$\rho$ fibres have no probability. A chemical fixed-$y$ block instead uses Theorem [B.3](/quantum-measurement/monograph/appendix-b-chamber-transport-killing-and-complete-path-limits#chamber:path) conditioned on its complete initial fibre law and the corresponding uniform bounds. 

Alternating finitely many exact translations with such gates or chemical blocks, and supplying quiet refreshes wherever conditional depth is not fresh, yields the sum of the local bounds and $e^{-\kappa s_\ell}$ failures. The proof couples matching labels and exact event times at each gate; intervening identical quantile maps append identical continuous work paths. The common path space is 

$$

 D([0,T_h],\mathcal I\cup\{\dagger\})\times C([0,T_h],\mathbb R)

$$

 with finite retained record labels incorporated in $\mathcal I$. Resource parameters and the unknown complete input are fixed for each law; mixing admitted preparations averages their error bounds. A physically recorded derivative of $y$ requires another admitted contact and is not supplied by placing the mathematical path in this comparison space. 



<a id="section-B-6"></a>

## B.6 Filtration, resources, and target status

 

The limiting intensities are conditional on the complete input parameters, the natural native/chemical path history, and $y$ when that coordinate is included. Omitting unresolved preparation parameters or an unrecorded $y$ requires posterior averaging of those rates. In the microscopic filtration revealing $d,\zeta$ and all stirring draws, the next boundary crossing is predictable between stirs. The Bell compensator is a natural-filtration limit, not a formula valid after arbitrary microscopic archive exposure. 

On isolated $\Gamma=0$ epochs the limit uses the specified Hamiltonian current in physical time. During a non-Hermitian no-capture epoch or a changed acquisition Hamiltonian, the wave and its current differ from the isolated experiment. The theorem does not equate those paths. Common measurable stopping and output maps contract path total variation. Conditioning on an event of probability at least $q>\epsilon$ costs at most $2\epsilon/q$; no uniform rare-event claim follows if $q$ vanishes. 

The technical result derives the complete path law from finite geometric residence and intrinsic stirring; it is stronger than mean-flux matching. Norm volumes, normalized rectified faces, no extra traffic, intrinsic Poisson stirring and fresh conditional microscopic readiness remain premises of this chamber model. Capture continuation and adaptive renewal require their additional assumptions. The contact-selection theorem restricts its specified material inventory; it does not prove that every substance belongs to that inventory. The later finite-gas pilot construction is a different microscopic realization: it neither derives this chamber geometry nor converts the chamber's primitive stirring into a theorem retrospectively. Both must be distinguished from a universal derivation using only the older source principles.
