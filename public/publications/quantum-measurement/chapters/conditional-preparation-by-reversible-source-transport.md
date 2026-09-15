# Chapter 32: Conditional preparation by reversible source transport

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

<a id="prep:deterministic"></a> 

The required apparatus law is a conditional resource statement. A pointer with a correct marginal distribution can remain correlated with a controller that predicts its future detector output. This chapter proves the finite nodal extraction result of [[M19](/quantum-measurement/monograph/bibliography#bib-M19)], retaining its physical archive, and separates it from global equilibration. The next chapter gives two different statistical alternatives and the complete detector integration. 



<a id="section-32-1"></a>

## 32.1 The resource to be prepared

 

At handoff, let $U$ be the ready configuration and let $A$ contain every old preparation record, controller coordinate, exported cell label, and future-active memory. Internal quantum memories and an inaccessible reference remain in the wave. For a known normalized ready packet $\phi$, the target is <a id="prep:target"></a>


$$
Q_{U,A}(du,da)=|\phi(u)|^2du\,P_A(da).
 

$$

Equation (32.1).

 The archive has its *actual* marginal $P_A$, which may be very far from the wave norm distribution. Equation [(32.1)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:target) is therefore a conditional ready-subsystem target, not a global equilibrium measure. 

All comparisons use $\operatorname{TV}(P,Q)=\sup_E|P(E)-Q(E)|=\frac12\|P-Q\|_1$. For standard Borel conditional laws with the same archive marginal, <a id="prep:averageconditional"></a>


$$
\operatorname{TV}(P_{U,A},Q_{U,A})
 =\int\operatorname{TV}(P_{U|a},|\phi|^2du)\,P_A(da).
 

$$

Equation (32.2).

 This equality is an average conditional guarantee. It supplies no uniform statement on arbitrary rare archive values. 



**Proposition 32.1 (Reversible fine-grained obstruction).**

 <a id="prep:reversible"></a> Let $S_t$ be a common invertible measurable guidance flow with measurable inverse, and let its wave reference law be equivariant: $Q_t=(S_t)_*Q_0$. For any actual law $P_t=(S_t)_*P_0$, 

$$

 \operatorname{TV}(P_t,Q_t)=\operatorname{TV}(P_0,Q_0).

$$

 If $P_0=fQ_0$, then 

$$

 \frac{dP_t}{dQ_t}=f\circ S_t^{-1},\qquad
 \int\alpha\!\left(\frac{dP_t}{dQ_t}\right)dQ_t
      =\int\alpha(f)dQ_0

$$

 for every defined integral on either side. Singular components are preserved. 

 

**Proof.**

For every measurable event $E$, $P_t(E)=P_0(S_t^{-1}E)$ and likewise for $Q$. The measurable bijection carries the full collection of events onto itself, so taking suprema proves the total-variation identity without any absolute-continuity assumption. In the density case, change variables in $\int_{S_t^{-1}E}f\,dQ_0$ to obtain the displayed Radon–Nikodym derivative. A further change of variables proves the integral identity. Null sets and their inverse images preserve singularity. 

□

 

Coarse-grained relaxation, including established pilot-wave relaxation studies such as [[VW](/quantum-measurement/monograph/bibliography#bib-ValentiniWestman)], does not contradict this statement. Fine-grained information may move to unresolved scales or exported coordinates while a restricted class of observables becomes insensitive. 



**Lemma 32.2 (Same-wave complete future comparison).**

<a id="prep:push"></a> Two preparations with the same complete wave and control programme, and configuration-law distance at most $\delta$, have final complete-output distance at most $\delta$ under any common measurable source evolution and record map. The same holds for a common stochastic kernel. Returning waves, copies, nulls, physical timestamps, and adaptive records may be included. 

 

**Proof.**

A deterministic output event is a preimage under the common map. For a kernel, its probability for an output event is a measurable function in $[0,1]$; integrating that function against $P-Q$ has absolute value at most $\operatorname{TV}(P,Q)$. The complete actual path itself can be the output whenever the evolution assigns a measurable path. 

□

 

This lemma compares to the same-wave hybrid law [(32.1)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:target). It does not establish that this hybrid law predicts Born records after arbitrary activation of a nonequilibrium archive. 



**Lemma 32.3 (Normalization cost).**

<a id="prep:condition"></a> If $\operatorname{TV}(P,Q)\le\delta$, $p=P(E)$, $q=Q(E)$ and $p,q>0$, then 

$$

 \operatorname{TV}(P(\cdot|E),Q(\cdot|E))
       \le\min\{1,\delta/\max(p,q)\}.

$$

 

 

**Proof.**

Assume $p\ge q$. The measures have common mass at least $1-\delta$. Their common mass outside $E$ is at most $1-p$, so the common mass inside $E$ is at least $p-\delta$. Dividing both measures by their own probabilities leaves common conditional mass at least $(p-\delta)/p$, since $q\le p$. Subtraction from one proves the bound. Interchange $P$ and $Q$ for the other ordering. 

□

 



<a id="section-32-2"></a>

## 32.2 Explicit nodal resource and admitted initial laws

 

Fix $N\ge2$ and $0<\eta<1/2$. Define on $(0,1)$ 

$$

 a_\eta(u)=
 \begin{cases}
 \sin(\pi u/(2\eta)),&0<u<\eta,\\
 1,&\eta\le u\le1-\eta,\\
 \sin(\pi(1-u)/(2\eta)),&1-\eta<u<1,
 \end{cases}
 \qquad \phi_\eta(u)=\frac{a_\eta(u)}{\sqrt{1-\eta}},

$$

 extended by zero. It is normalized, symmetric about $1/2$, and belongs to $H^1(\mathbb R)$. Direct integration gives <a id="prep:packet"></a>


$$
\|\phi_\eta'\|_2^2=\frac{\pi^2}{4\eta(1-\eta)},\qquad
 d_\eta:=\operatorname{TV}(|\phi_\eta|^2du,du)\le\eta.
 

$$

Equation (32.3).

 For the second inequality, $\min(|\phi_\eta|^2,1)\ge a_\eta^2$, whose integral is $1-\eta$. 

The known seed wave is an array of $N$ identical cells: <a id="prep:seed"></a>


$$
\varphi_{N,\eta}(x)=\phi_\eta(Nx-k),\qquad
 x\in I_k=(k/N,(k+1)/N).
 

$$

Equation (32.4).

 It has norm one, exact nodes at cell boundaries, and $\|\varphi_{N,\eta}'\|_2^2=N^2\|\phi_\eta'\|_2^2$. Supplying this coherent wave is a preparation resource. The construction does not claim to shape an arbitrary unknown wave into it without cost. 

Add an internal tag with ready state $|r\rangle$ and $N$ labels $|k\rangle$. Add an archive coordinate $y$ with known $H^1$ wave $\chi$, supported on $[0,1]$ and positive in its interior. Its actual configuration distribution need not be equilibrium. Let $z$ collect its actual initial value, every old coordinate and classical history, with a standard Borel reference measure $\mu$. The complete initial wave is $\varphi_{N,\eta}(x)\chi(y)|r\rangle\Xi(z_{\rm old})$, with the unknown input and inaccessible reference inside $\Xi$. Assume the actual law has density <a id="prep:BV"></a>


$$
P_0(dx,dz)=f(x,z)\,dx\,\mu(dz),\quad f\ge0,\quad \int f=1,
 \qquad
 M:=\int\operatorname{Var}_x f(\cdot,z)\,\mu(dz)<\infty.
 

$$

Equation (32.5).

 All actual values lie on the nonzero-wave supports needed for the stated flow. No target wave density appears in [(32.5)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:BV). Multimodal distributions, steps, and correlations are allowed. An exact old copy $Z=X$ is excluded because its conditional law is singular. Regularity of the unconditional $X$ marginal would not suffice. 



<a id="section-32-3"></a>

## 32.3 The source interaction and exact actual routing

 

First tag the occupied cell coherently, for time $\tau_1$: 

$$

 H_{\rm tag}(x)=\frac{\pi\hbar}{2\tau_1}
       \sum_k1_{I_k}(x)(|k\rangle\langle r|+|r\rangle\langle k|).

$$

 It is a bounded multiplication operator, generates no configuration current, and sends $|r\rangle$ to $-i|k\rangle$ on cell $k$. The sharp coefficients are applied at exact nodes, so the wave remains $H^1$. Next use 

$$

 H_y=\dot b(t)\sum_k dk\,|k\rangle\langle k|\otimes P_y,
 \qquad d>1,\quad b:0\longrightarrow1.

$$

 Only the tag $k$ is present at actual $x\in I_k$, and the actual archive position becomes $Y'=Y+dk$. The archive supports are now disjoint. 

For time $\tau_3$, apply the conditional dilation 

$$

 H_D=\frac12\sum_k|k\rangle\langle k|\{v_k(x),P_x\},
 \qquad v_k(x)=a(x-k/N),\qquad a=\frac{\log N}{\tau_3}.

$$

 The scalar transport law <a id="prep:halfdensity"></a>


$$
H_v=-i\hbar(v\partial_x+v'/2),\quad J=v|\Phi|^2,\quad
 \Phi_t(x)=\sqrt{(S_t^{-1})'(x)}\,\Phi_0(S_t^{-1}x)
 

$$

Equation (32.6).

 follows by differentiating along characteristics. It multiplies $x-k/N$ by $N$. A final conditional translation by $-k/N$ aligns the dilated cells. Thus the exact actual configuration map is <a id="prep:map"></a>


$$
K=\lfloor NX\rfloor,\qquad U=NX-K,\qquad Y'=Y+dK.
 

$$

Equation (32.7).

 Although the ready coordinate packets overlap after alignment, the disjoint $Y'$ supports identify the local tag component and hence its actual velocity. There is no discontinuous cutting of a connected nonzero-wave flow. 

The complete final field is, up to a common phase, <a id="prep:finalwave"></a>


$$
\Phi_f(u,y,z_{\rm old})
   =\phi_\eta(u)\left[
        \frac1{\sqrt N}\sum_k\chi(y-dk)|k\rangle\right]
         \Xi(z_{\rm old}).
 

$$

Equation (32.8).

 The factor $N^{-1/2}$ is the dilation Jacobian. All unoccupied archive packets survive. On its support the retained archive $A=(Y',z_{\rm old})$ determines $K$ and the old $Y$; this is why correlations with $K$ cannot be discarded. 



**Theorem 32.4 (Conditional nodal extraction).**

<a id="prep:extractor"></a> The finite interaction above, applied to the initial class [(32.5)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:BV), succeeds with probability one and obeys <a id="prep:extractbound"></a>


$$
\begin{aligned}\operatorname{TV}(P_{U,A},du\,P_A)&\le\frac{M}{4N},\\
 \operatorname{TV}(P_{U,A},|\phi_\eta(u)|^2du\,P_A)
          &\le\frac{M}{4N}+d_\eta
           \le\frac{M}{4N}+\eta.
 
\end{aligned}
$$

Equation (32.9, 32.10).

 The comparison retains the actual archive marginal and holds uniformly for unknown carried inputs and inaccessible references on which the controls act as identity. 

 

**Proof.**

The interaction calculation proves [(32.7)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:map) and [(32.8)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:finalwave). Retaining $A$ is equivalent to retaining $(K,z)$. Their joint density after routing is 

$$

 g(u,k,z)=N^{-1}f((k+u)/N,z),\qquad
 m(k,z)=\int_0^1g(u,k,z)\,du.

$$

 For a bounded-variation function $h$ on $(0,1)$ with mean $\bar h$, Jensen's inequality and its variation measure give 

$$
\begin{aligned}\int_0^1|h(u)-\bar h|\,du
 &\le\int_0^1\int_0^1|h(u)-h(v)|\,du\,dv\\
 &\le\int_{(0,1)}2t(1-t)\,|Dh|(dt)
 \le\tfrac12\operatorname{Var}(h).
\end{aligned}
$$

 The middle inequality follows by integrating the variation along intervals between $u$ and $v$; for fixed $t$ the ordered pairs whose interval crosses $t$ have measure $2t(1-t)$. Apply it to $h(u)=f((k+u)/N,z)$, integrate over $z$, and sum over open cells. Their interior variation sums to at most the total variation. The Jacobian $1/N$ and the factor one half in total variation yield $M/(4N)$. Replacing uniform density by $|\phi_\eta|^2$ costs $d_\eta$ with unchanged $P_A$, proving the second inequality. 

□

 



<a id="section-32-4"></a>

## 32.4 Resources, reproducibility, and sharp failure tests

 

The resource costs are $N+1$ tag states, archive extent $O(dN)$, cell resolution $1/N$, edge resolution $\eta/N$, and integrated dilation strain $\log N$. The exact seed gradient cost is <a id="prep:seedcost"></a>


$$
\|\partial_x\varphi_{N,\eta}\|_2^2
       =\frac{N^2\pi^2}{4\eta(1-\eta)}.
 

$$

Equation (32.11).

 Translations and dilations are unbounded selfadjoint transport generators on their admitted domains. These statements give finite resources on the specified support and finite-gradient fields, not a bounded operator norm or a lower-bounded microscopic energy model. Exact nodes and the sharp tag coefficient are ideal spatial controls. A finite-bandwidth smooth replacement needs its own configuration-law estimate; a small wave norm error alone does not establish that estimate for nonequilibrium inputs. 

A deterministic clock can drive these pulses without an equilibrium seed. Take a coordinate $S$ with generator $P_S$ and a known compact wave entirely upstream of ordered pulse regions. Let $H=P_S+\sum_rw_r(S)G_r$, with disjoint regions and fixed operators $G_r$. Then $\dot S=1$, and each admitted initial clock position crosses the same complete pulse integrals by a common finite deadline. The ordered unitary is independent of that initial position. The final clock factors and belongs to $A$. An incomplete clock traversal is a genuine failure branch, not the ready output. 

For $m$ seed coordinates with product known waves, define integrated coordinate variations $M_i$ of their joint actual density, conditioning on all other coordinates and old archives. Apply the preceding interaction separately to each coordinate. Then <a id="prep:stock"></a>


$$
\operatorname{TV}\left(P_{\mathbf U,A},
       \prod_{i=1}^m|\phi_{\eta_i}(u_i)|^2d\mathbf u\,P_A\right)
 \le\sum_{i=1}^m\left(\frac{M_i}{4N_i}+\eta_i\right).
 

$$

Equation (32.12).

 To prove this, successively average the density over each rescaled $U_i$. Each averaging is an $L^1$ contraction and does not increase the integrated variation in another coordinate. Telescope the one-coordinate inequality, then change each uniform factor to its ready density. The result concerns a joint finite stock, not separate correct marginals. 

For the required deformation $f(x)=1+\epsilon(2x-1)$, $|\epsilon|\le1$, the exact routed marginal and complete archive comparison are <a id="prep:linear"></a>


$$
f_U(u)=1+\frac{\epsilon}{N}(2u-1),\qquad
 \operatorname{TV}(P_{U,K},du\,P_K)=\frac{|\epsilon|}{4N}.
 

$$

Equation (32.13).

 Indeed $g(u,k)=N^{-1}[1+\epsilon(2(k+u)/N-1)]$, and subtracting its $u$ average leaves $\epsilon(2u-1)/N^2$ in each cell. Integration proves the TV identity. For a detector prepared in $\phi_\eta$, let $G_\eta(u)=\int_0^u|\phi_\eta|^2$ and $u_p=G_\eta^{-1}(1-p)$. Its terminal plus probability is 

$$

 1-u_p+\frac{\epsilon}{N}u_p(1-u_p).

$$

 At $p=1/2$, symmetry gives exactly $1/2+\epsilon/(4N)$; in general its Born error is at most $d_\eta+|\epsilon|/(4N)$. 

The admissible oscillatory rival $f_N(x)=1+\epsilon\sin(2\pi Nx)$ has $M=4|\epsilon|N$. Its extracted marginal is $1+\epsilon\sin(2\pi u)$, so the balanced terminal error remains $-\epsilon/\pi$ for every $N$. This respects [(32.10)](/quantum-measurement/monograph/conditional-preparation-by-reversible-source-transport#prep:extractbound) and disproves a uniform statement over arbitrary absolutely continuous initial laws. Wave smoothness alone does not constrain the independent actual density variation. 

For even $N$, the retained archive also satisfies 

$$

 \mathbb P(K\ge N/2)=\frac12+\frac{\epsilon}{4}.

$$

 Reversing all the preparation interactions restores the original wave and actual law exactly. A balanced reader on the returned seed therefore recovers the unsuppressed deviation $\epsilon/4$. The resource was prepared by exporting nonequilibrium, not by destroying it. This return is an explicitly allowed inverse, and it identifies the precise limit of any global equilibrium interpretation.
