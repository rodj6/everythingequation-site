# Appendix D: Smooth autonomous realization of isolated pilot contacts

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

<a id="p:smooth"></a> <a id="p:mech-section"></a> 

This chapter supplies an explicit Hamiltonian for a finite family of reversible classical contact updates. Its scope is the contact module: packet births, continuous pilot-field evolution and any asynchronous exporter remain separate laws unless their simultaneous coupling is independently supplied. No Bell intensity is used in this Hamiltonian. 



<a id="section-D-1"></a>

## D.1 Register cells and an explicit permutation compiler

 

Let the finite register have values $i\in\{1,\ldots,K\}$ and let each contact mark $c\in\mathcal C$ specify a permutation $\pi_c$ of those values. A register value may encode a finite product of carrier, packet-slot, eligibility, resource and retained-record registers. An irreversible update must first be extended injectively by retaining its overwritten value and a finite ready stock. The permutations of that enlarged register are the input to this construction. 

Use canonical coordinates $q,p\in\mathbb R^2$, put $Q_i=(id,0)$, and prepare <a id="p:mech-cells"></a>


$$

 |q-Q_i|\le r_0,\qquad |p|\le p_*.

$$

Equation (D.1).

 For each $c$, choose smooth tracks $\Gamma_{c,i}:[0,1]\to\mathbb R^2$ with <a id="p:mech-tracks"></a>


$$

 \Gamma_{c,i}(0)=Q_i,\qquad
 \Gamma_{c,i}(1)=Q_{\pi_c(i)},\qquad
 |\Gamma_{c,i}(s)-\Gamma_{c,j}(s)|\ge a>0\quad(i\ne j).

$$

Equation (D.2).

 There is an elementary explicit compiler. In the first third of the programme, lift $(id,0)$ to $(id,ih)$; in the middle third translate it to $(\pi_c(i)d,ih)$; in the last third lower it to $(\pi_c(i)d,0)$. Use a smooth increasing interpolation flat to all orders at the phase endpoints. The horizontal coordinates give separation at least $d$ during the lifts and descents, and the distinct heights give separation at least $h$ during the horizontal transport. Thus $a=\min(d,h)$ works. Extend the tracks constantly outside $[0,1]$. 

Choose 

$$

 0<r_0<r_{\rm core}<r_{\rm supp}<a/2

$$

 and a smooth cutoff $\chi$ equal to one on $|z|\le r_{\rm core}$ and zero on $|z|\ge r_{\rm supp}$. For prepared beam speed $v>0$ and gate duration $0<\delta<T$, define <a id="p:mech-field"></a>


$$

 b_c(x,q)=\frac1{v\delta}\sum_{i=1}^K
 \Gamma'_{c,i}\!\left(\frac{x}{v\delta}\right)
 \chi\!\left(q-\Gamma_{c,i}\!\left(\frac{x}{v\delta}\right)\right).

$$

Equation (D.3).

 This field is smooth and vanishes outside $0<x<v\delta$. At each phase its cutoff supports are disjoint. In the core of track $i$, $b_c=\Gamma'_{c,i}/(v\delta)$ and $\partial_qb_c=0$. 



<a id="section-D-2"></a>

## D.2 Positive kinetic coupling and exact passage time

 

First regard $c_j$ as particle $j$'s fixed channel. Let $x_j,P_j$ be its longitudinal canonical coordinates, $m_b>0$ its finite mass parameter, and $\mu>0$ the register mass parameter. Take <a id="p:mech-H"></a>


$$

 H_{\rm gate}=
 \sum_{j=1}^M\frac{[P_j+b_{c_j}(x_j,q)\cdot p]^2}{2m_b}
 +\frac{|p|^2}{2\mu}+V(q).

$$

Equation (D.4).

 Here $V\ge0$ is smooth and zero on a region containing every track and its support. One may take $V=0$ globally for the finite-horizon theorem. All coefficients are fixed functions of position; there is no external time-dependent drive. 



**Proposition D.1 (Autonomous nonnegative contact Hamiltonian).**

 <a id="p:mech-hamiltonian"></a> For every finite parameter choice, [(D.4)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-H) is smooth, autonomous, nonnegative, and has a global classical Hamiltonian flow when $V=0$. It retains the register and all incoming and outgoing beam particles. Its interaction is an explicitly declared positive position-dependent kinetic metric, rather than an ordinary scalar-potential impact. 

 

**Proof.**

Write $k_j=P_j+b_{c_j}\cdot p$. At each configuration the triangular map $(P_1,\ldots,P_M,p)\mapsto(k_1,\ldots,k_M,p)$ is invertible. The fields and their derivatives are globally bounded at fixed parameters, so this positive quadratic kinetic form is uniformly positive definite for that parameter choice. Its ellipticity constant may depend on $\delta,M$ and the programme. 

Conserved energy bounds $p$, every $k_j$, and hence every $P_j$. Hamilton's velocities and forces are then bounded at that energy because the field derivatives are bounded. Local smooth flow therefore cannot escape to infinity in finite time. Nonnegativity follows directly from the squares. No particle coordinate has been removed. 

□

 



**Lemma D.2 (Exact separated gate on a robust core).**

 <a id="p:mech-exactgate"></a> Suppose particle $j$ enters at time $t_{\rm in}$ with $x_j=0$, $P_j=m_bv$, mark $c$, and the register in the core of track $i$. Suppose no other particle is in an interaction region. While the core condition holds, its exit time and register evolution are <a id="p:mech-time"></a>
<a id="p:mech-transport"></a>


$$
\begin{aligned}x_j(t)&=v(t-t_{\rm in}),\qquad
 t_{\rm out}=t_{\rm in}+\delta,\\
 p(t)&=p_{\rm in},\\
 q(t)&=\Gamma_{c,i}\!\left(\frac{t-t_{\rm in}}{\delta}\right)
       +(q_{\rm in}-Q_i)
       +\frac{p_{\rm in}}{\mu}(t-t_{\rm in}).
\end{aligned}
$$

Equation (D.5, D.6).

 At exit $P_j=m_bv$ and the register is in the output cell $Q_{\pi_c(i)}$ up to the displayed offset and free drift. 

 

**Proof.**

On the core, $\partial_qb_c=0$ and $\nabla V=0$, so $\dot p=0$. For the active particle, Hamilton's equations give 

$$

 \dot x_j=k_j/m_b,\qquad
 \dot P_j=-(k_j/m_b)(\partial_xb_c)\cdot p,\qquad
 \dot q=p/\mu+(k_j/m_b)b_c.

$$

 Since $\dot p=0$ and $\partial_qb_c=0$, 

$$

 \frac{d}{dt}(b_c\cdot p)
       =(k_j/m_b)(\partial_xb_c)\cdot p.

$$

 Hence $\dot k_j=0$. At entry $b_c=0$, so $k_j=m_bv$ throughout. This proves [(D.5)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-time); inserting [(D.3)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-field) into the register equation gives [(D.6)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-transport). At exit the field vanishes again, so $P_j=k_j=m_bv$. 

□

 



**Corollary D.3 (Uniform composition through separated contacts).**

 <a id="p:mech-robust"></a> Assume [(D.1)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-cells) and <a id="p:mech-margin"></a>


$$

 r_0+\frac{p_*(T+\delta)}{\mu}<r_{\rm core}.

$$

Equation (D.7).

 Every sequence of nonoverlapping contacts implements the specified register permutations correctly through time $T$, including every intermediate track stage. This conclusion is uniform over the compact preparation domain and does not require a large incident mass. 

 

**Proof.**

Each successful gate preserves $p$ and translates the cell offset without rotating or amplifying it. Idle motion contributes the same free drift. Thus the offset at time $t$ from the prescribed idle cell or active track is at most $r_0+p_*t/\mu$. Inequality [(D.7)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-margin) prevents a first exit from a track core and closes the bootstrap used in Lemma [D.2](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-exactgate). 

□

 

The energy before and after every separated gate is <a id="p:mech-energy"></a>


$$

 E=\frac{Mm_bv^2}{2}+\frac{|p_{\rm in}|^2}{2\mu}<\infty.

$$

Equation (D.8).

 During a gate the canonical momentum changes by $-b_c\cdot p$ while its kinetic momentum remains $m_bv$. This is the backreaction in the specified inertial interaction. The outgoing particles continue freely and are retained; on the good domain a finite receiver region of length greater than $vT$ suffices for the horizon. The incoming spatial stock is not reset. The metric, its growing derivatives as $\delta\to0$, the finite geometry and the register mass are declared resources. In particular, this is not a fixed-resource limit or a derivation of these interactions from a diagonal-mass scalar-potential collision model. 



<a id="section-D-3"></a>

## D.3 Present-state logical decoding and path topology

 

During a finite gate, a quantizer of the bare coordinate $q$ may report a transit value or several intermediate values. Those paths need not approach a direct discrete jump in the $J_1$ Skorokhod topology. A nonzero-duration excursion through a third discrete value cannot be erased by a continuous time change. 

The output used below is the *committed register value*, defined as a fixed function of the present enlarged physical state. When idle, decode the unique nearby $Q_i$. When one particle of mark $c$ is inside, its position gives $s=x/(v\delta)$; decode the unique nearby track $\Gamma_{c,i}(s)$ and report input value $i$ until exit. At $x=v\delta$, decode the output idle cell and report $\pi_c(i)$. The separation and margin conditions make this definition unambiguous. It uses the current busy-particle coordinate, not an external clock or an unretained past. A separate persistent logical record, if required, must be included in the finite register and permutation library. It is not supplied merely by naming the decoder. 

For path comparison, at the first overlap or transition-strip encounter stop this decoder and set its value to an absorbing cemetery symbol; stop the completed-contact log there as well, retaining a failure flag. Before that time there are only finitely many successful contacts, so the extended logical path is càdlàg. This is a convention for the compared output on exceptional trajectories, not a change to the Hamiltonian flow, which continues. An arbitrary Borel decoder on bad phase-space states would not by itself ensure a càdlàg path. 

On separated contacts the resulting path is exactly the specified register circuit with each contact delayed by $\delta$. If incident times are $t_j$, there is no contact in $(T-\delta,T]$, and the order is unchanged, a piecewise linear time change aligning $t_j$ to $t_j+\delta$ gives <a id="p:mech-J1"></a>


$$

 d_{J_1}(S^{\rm committed},S^{\rm instantaneous})\le\delta.

$$

Equation (D.9).

 One may align null contacts as well. No analogous claim is made for the unprocessed continuous-coordinate path. 



<a id="section-D-4"></a>

## D.4 Smooth channel plates and the projected history bound

 

Prepare independent uniform incoming positions on $[-L,0]$, where 

$$

 L=Mv/R,\qquad M/R>T,

$$

 with longitudinal momenta $m_bv$. Independently prepare uniform transverse coordinates in a finite aperture, with zero transverse momentum. Partition the aperture into mark areas of fractions $\pi_c$. Choose smooth nonnegative channel functions $\zeta_c(y)$ equal to one on the respective interior plateaus, zero on other plateaus, and satisfying $\sum_c\zeta_c\le1$. Let the total transition-strip area fraction be at most $\eta$. Replace $b_{c_j}$ by 

$$

 b(x_j,y_j,q)=\sum_c\zeta_c(y_j)b_c(x_j,q)

$$

 and add free transverse kinetic energies. On a plateau the transverse derivatives vanish, so the mark stays fixed; globally the Hamiltonian is still smooth and nonnegative. A strip encounter is assigned to the failure event rather than asserted to perform an ideal gate. 

Before entry the field is zero, so incident times are exactly $T_j=-x_j(0)/v$, independent uniform variables on $[0,M/R]$. Their independent marks come from the transverse geometry. Initial register state and offset are independent of the beam ensemble. No draw occurs at a contact. 



**Theorem D.4 (Full projected logical-history comparison for the contact module).**

 <a id="p:mech-history"></a> Assume the finite permutation library, independent incoming beam ensemble, smooth plateau construction, and margin condition [(D.7)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-margin). Assume that no other interaction changes the register during this module. Let $\widehat S^\delta$ be the committed register path and $\widehat\Xi^\delta$ its completed-contact history, using the absorbing cemetery and stopped-log convention after a first overlap or strip encounter. Let $(S^{\rm P},\Xi)$ be the same permutation circuit driven instantaneously by a marked Poisson process of intensity $R{\,\mathrm d} t\,\pi_c$ on $[0,T]$. Then <a id="p:mech-TV"></a>


$$

 {d_{\mathrm{TV}}}\!\left(
 {\operatorname{Law}}(\widehat S^\delta,\widehat\Xi^\delta),
 {\operatorname{Law}}(S^{\rm P},\Xi)\right)
 \le
 \frac{(RT)^2}{M}+R^2T\delta+R\delta+RT\eta.

$$

Equation (D.10).

 The compared space consists of projected logical/contact histories, including any finite logical archives contained in the permutation library. It does not contain all microscopic beam coordinates or continuous phase-space paths. 

 

**Proof.**

For an unordered pair of independent incident times on $[0,M/R]$, the area in which both lie in $[0,T]$ and differ by at most $\delta$ is at most $2T\delta$. A union bound therefore gives 

$$

 \mathbb P(\text{overlap})\le
 {M\choose2}\frac{2T\delta}{(M/R)^2}\le R^2T\delta.

$$

 The expected number of strip encounters is $RT\eta$, so their probability is at most that quantity. A first-failure argument is sufficient: until the first such event, all previous gates are exact and the still-incoming particles are free. 

Define the fictitious completed process 

$$

 \Xi_M^\delta=\sum_{j:T_j+\delta\le T}
                 \delta_{(T_j+\delta,C_j)}.

$$

 Its count is $\operatorname{Bin}(M,R(T-\delta)/M)$. Conditional on the count, the times are independent uniform on $[\delta,T]$ and the marks have law $\pi$. This is the same conditional kernel as the Poisson process restricted to $[\delta,T]$. The elementary Bernoulli–Poisson coupling gives distance at most $[R(T-\delta)]^2/M$. Adding the independent Poisson points in $[0,\delta)$ costs at most $1-e^{-R\delta}\le R\delta$. 

On the good event, Lemma [D.2](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-exactgate) and Corollary [D.3](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-robust) identify the actual committed circuit with the same causal permutation circuit applied to $\Xi_M^\delta$. A common measurable circuit cannot increase total variation. Add the two failure probabilities and bound $T-\delta\le T$ to obtain [(D.10)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-TV). 

□

 

For fixed programme and horizon, the bound tends to zero if 

$$

 (RT)^2/M\to0,\qquad
 R^2T\delta\to0,\qquad R\delta\to0,\qquad RT\eta\to0.

$$

 These conditions also state the required scales if an outer construction uses a varying attempt rate $R=R_N$. Every finite member has a finite particle stock, finite energy and a smooth nonnegative Hamiltonian. Conditioning on all initial particle positions instead makes the history deterministic; the theorem does not assert a Poisson intensity under that enlarged microscopic filtration. 



**Remark D.5 (Exporters and other asynchronous changes remain separate).**

 <a id="p:mech-scope"></a> Theorem [D.4](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-history) is a supplementary smooth realization of the finite contact module. A packet exporter that creates, cancels or changes a queue while a cell is being transported is not covered by its hypotheses. An arbitrary finite transition can be permutation-lifted with a retained receiver, but that algebraic fact does not establish that independently scheduled or state-dependent transitions can interleave inside this gate without changing its motion. If an overall theory retains such exports as deterministic hybrid laws, they must be stated as such and given their own composition analysis. No additional full-TV bound for interleaved exporter events is claimed here. 

The static field [(D.3)](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:mech-field) encodes the supplied reaction permutations. It does not select directional packet exposure, exclude other physical reaction channels, or derive their rates from a coherent Hamiltonian edge current. Nor does the classical gate proof establish quantum source/readout admission through an inaccessible reference. Those obligations are logically distinct from the mechanical theorem proved in this section.
