# Chapter 25: Configuration records and coherent continuation

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

<a id="cfg:chapter"></a> 

This chapter consolidates the configuration constitution of [[M18](/quantum-measurement/monograph/bibliography#bib-M18)], the finite record interactions of [[M30](/quantum-measurement/monograph/bibliography#bib-M30)], and the corrected coherent continuation results of [[C02](/quantum-measurement/monograph/bibliography#bib-C02)]. Its principal result is a complete finite-record construction with one actual configuration and an uncollapsed wave, as an alternative to intrinsic absorbing extraction. Here the equivariant process and joint ready law remain explicit inputs. The later pilot theory derives an effective Bell process from its finite microscopic model and gives an autonomous material implementation. No argument identifies an actual configuration jump with a global projection of the wave. 



<a id="section-25-1"></a>

## 25.1 Complete source and the two meanings of continuation

 

Let $\mathcal H_S$ carry one unknown system, let $\mathcal H_R$ be an inaccessible reference, and include all returning quantum memories in the carried space $\mathcal B$. There is no control on $R$. The complete source is $(c,\Phi,Q)$: declared classical provenance and controls $c$, a normalized wave $\Phi$, and one actual apparatus configuration $Q$. A newly acquired record has a physical carrier in $Q$ or in a jointly modeled configuration register. A mathematical past trajectory is not an additional accessible archive. 

Two realizations will be used. In the continuous realization, $\Phi\in L^2(\mathcal Q;\mathcal B)$ and the specified linear wave dynamics have a conserved density and current, <a id="cfg:guidance"></a>


$$
\rho_t(q)=\|\Phi_t(q)\|^2,\qquad
 \partial_t\rho_t+\operatorname{div}J_t=0,\qquad
 \dot Q_t=J_t(Q_t)/\rho_t(Q_t).
 

$$

Equation (25.1).

 An admitted programme must have a unitary wave propagator and an almost-sure conservative guidance flow. These analytic properties are checked explicitly for the modules below; they are not asserted for arbitrary singular coefficients. A sufficient differential expression is 

$$

 H_t=-i\hbar\sum_k\left(A_k(q,t)\partial_{q_k}
             +\tfrac12\partial_{q_k}A_k(q,t)\right)+V(q,t),
 \qquad A_k=A_k^\dagger,\quad V=V^\dagger,

$$

 on a domain supplying those properties, with $J_k=\Phi^\dagger A_k\Phi$. 

In the discrete realization, $\{P_x:x\in\mathcal Q\}$ is a finite orthogonal configuration resolution, $w_x=\|P_x\Phi\|^2$, and 

$$

 J_{yx}=\frac2\hbar\operatorname{Im}
          \langle P_y\Phi,H P_x\Phi\rangle.

$$

 The actual process is supplied by an admitted conservative equivariant law. The minimal Bell law is one such choice, conditional on the statistical selection developed elsewhere in this monograph. For comparison we also use the nonexplosive Markov family <a id="cfg:Kfamily"></a>


$$
q_{y\leftarrow x}(t)=\frac{[J_{yx}(t)]_++K_{xy}(t)}{w_x(t)},
 \qquad K_{xy}=K_{yx}\ge0,
 

$$

Equation (25.2).

 where occupied-state rates are used and node behavior satisfies the well-posedness assumptions. Finite expected integrated traffic is a sufficient nonexplosion condition in equilibrium. The pairwise family [(25.2)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:Kfamily) does not exhaust every equivariant process: divergence-free reassignments of net edge currents are additional possibilities. The present comparison requires the displayed pairwise matching. 



**Definition 25.1 (Relative branch and complete continuation).**

 For a physical record region $\Gamma_h$, the relative branch is the normalized restriction $P_h\Phi/\|P_h\Phi\|$, when its norm is nonzero. The complete continuation is the actual global wave, actual configuration or its conditional law, and all retained controls and memories. A relative branch is a sufficient replacement only on a proved future domain in which omitted branches cannot affect the predictions being claimed. 

 

For continuous local guidance, disjoint supports preserved by future propagation supply such a domain. For discrete processes, preservation of a record label does not by itself ensure that rates evaluated on the global wave equal rates evaluated on its normalized projection: an added $K$ may depend on amplitudes in other blocks. Endpoint quantum predictions proved below do not need that additional generator identity. Claims about an autonomous daughter process do. 



<a id="section-25-2"></a>

## 25.2 A finite binary detector with exact time and null laws

 

Let $Q_++Q_-=I$ be orthogonal system projectors, extended by the identity on $\mathcal H_R$ and all carried memories. Degenerate outcomes are permitted. Take a normalized even $H^1$ packet $\phi$, supported on $[-a,a]$, and a fresh pointer $x\in\mathbb R$. The wave and actual ready law are 

$$

 \Phi_0(x)=\phi(x)\psi,\qquad
 \mathbb P(X_0\in dx)=|\phi(x)|^2dx,

$$

 conditionally on the complete actual past and independently of the unknown $\psi$. For $u>0$, define <a id="cfg:translationH"></a>


$$
H=u(Q_+-Q_-)P_x,\qquad P_x=-i\hbar\partial_x.
 

$$

Equation (25.3).

 The exact field, density, and current are <a id="cfg:split"></a>


$$
\begin{aligned}\Phi_t(x)&=\phi(x-ut)Q_+\psi+\phi(x+ut)Q_-\psi,\\
 \rho_t(x)&=p_+ f(x-ut)+p_- f(x+ut),\\
 J_t(x)&=u[p_+f(x-ut)-p_-f(x+ut)],
 \qquad p_j=\|Q_j\psi\|^2,\quad f=|\phi|^2.
 
\end{aligned}
$$

Equation (25.4, 25.5, 25.6).

 All operators act trivially on the inaccessible reference. 



**Lemma 25.2 (Quantile flow).**

<a id="cfg:quantile"></a> Put $F_t(x)=\int_{-\infty}^x\rho_t(z)\,dz$. Almost every trajectory has $F_t(X_t)=U$, where $U=F_0(X_0)$ is uniform on $(0,1)$. The generalized inverse $X_t=F_t^{-1}(U)$ realizes the guidance flow and has density $\rho_t$. 

 

**Proof.**

The continuity equation gives $\partial_tF_t=-J_t$. At positive-density points, differentiating the fixed-quantile identity gives $\dot X_t=J_t/\rho_t$. The inverse distribution transform gives its marginal law. Plateau values correspond to a null set of uniform ranks; the smooth interior packets used here give continuous trajectories away from those exceptional ranks. Thus the definition supplies a nonempty almost-sure flow without adding a second random tape. 

□

 

Place exit surfaces at $\pm L$, with $L>a$, and let $\tau$ be the first exit from $(-L,L)$. The outward current at either surface has only one nonzero packet. Define 

$$

 r(t)=\int_0^t u f(L-us)\,ds.

$$

 It vanishes before $(L-a)/u$ and equals one after $(L+a)/u$. 



**Theorem 25.3 (Finite exit and retained local field).**

<a id="cfg:exit"></a> The detector [(25.3)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:translationH) obeys <a id="cfg:exitlaw"></a>


$$
\mathbb P(j,\tau\in dt)=p_j u f(L-ut)\,dt,\qquad
 \mathbb P(j,\tau\le t)=p_jr(t),\qquad
 \mathbb P(\tau>t)=1-r(t).
 

$$

Equation (25.7).

 At a nonzero-probability exit, the normalized local carried field is $Q_j\psi/\sqrt{p_j}$ up to a global phase. At a null deadline with $1-r(t)>0$, the actual conditional position law is <a id="cfg:liveposition"></a>


$$
\frac{1_{\{|x|<L\}}\rho_t(x)\,dx}{1-r(t)};
 

$$

Equation (25.8).

 the global field remains [(25.6)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:split). 

 

**Proof.**

At $+L$, the negative packet is absent and the outward current is $up_+f(L-ut)$. At $-L$ the outward current is $up_-f(-L+ut)=up_-f(L-ut)$ by evenness. Neither surface can be crossed inward while this translation interaction remains active. Equivariance from Lemma [25.2](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:quantile) therefore identifies first-exit probability with the integrated outward current. Their sum gives the null probability and restriction of the equilibrium density gives [(25.8)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:liveposition). Only the indicated sector component of $\Phi$ is present at an exit, so normalization yields the stated relative carried vector. 

□

 

This common interaction joins time, outlet, and local continuation. Its observed hazard is $p_jr'(t)/(1-r(t))$, conditional on the ready preparation and no observed exit. Given the complete actual initial configuration, the exit is deterministic. This is not the original Hamiltonian Bell conditional jump intensity, nor an exponential clock in another notation. 

A persistent position can encode the exit time. At a later cut, 

$$

 R_t(x)=
 \begin{cases}
 \mathrm{null},&|x|<L,\\
 (\operatorname{sign}x,\ t-(|x|-L)/u),&|x|\ge L.
 \end{cases}

$$

 Finite position bins give finite timestamp bins. If the pointer is reversed, a lasting timestamp requires an actual copy interaction. The formula does not provide an immutable external history. 

The live relative sector populations remain $p_j$, but the coherent null is generally different from $\psi$. Integrating over live positions gives the unnormalized internal matrix with $(j,k)$ block 

$$

 Q_j|\psi\rangle\langle\psi|Q_k
 \int_{-L}^L\phi(x-s_jut)\phi^*(x-s_kut)\,dx,
 \qquad s_\pm=\pm1.

$$

 At $t>a/u$ the off-diagonal blocks vanish. A frozen-null ray from an intrinsic extraction model therefore cannot replace this source in a return experiment. 

For an explicit finite-gradient packet, 

$$

 \phi(x)=a^{-1/2}\cos(\pi x/(2a))1_{\{|x|\le a\}},

$$

 direct integration gives <a id="cfg:timecost"></a>


$$
\mathbb E\tau=\frac Lu,\qquad
 \operatorname{Var}(\tau)=\frac{a^2}{u^2}
          \left(\frac13-\frac2{\pi^2}\right),\qquad
 \|\phi'\|_2^2=\frac{\pi^2}{4a^2}.
 

$$

Equation (25.9).

 Thus $u^2\operatorname{Var}(\tau)\|\phi'\|_2^2=\pi^2/12-1/2$ in this family. This is a concrete time/gradient tradeoff, not a new universal uncertainty relation. The transport generator is selfadjoint but unbounded and not lower bounded; its use is an effective source sector, not a microscopic stability theorem. 

Loading errors have real branches. If a gated load prepares 

$$

 \phi(x)\left[\cos\theta\,\psi|r\rangle
       -i\sin\theta\sum_jQ_j\psi|j\rangle\right]

$$

 and mode $r$ is stationary while modes $j$ propagate at $s_ju$, then $\mathbb P(j,\tau\le t)=\sin^2\theta\,p_jr(t)$. After the traveling packets have exited, the surviving null is the stationary ready component, with probability $\cos^2\theta$. This calculation assumes the propagation gate is closed during loading. It does not cover simultaneous loading and propagation by replacing their actual dynamics with these products. 



<a id="section-25-3"></a>

## 25.3 Acquisition changes the packet that controls the exit

 

A physical snapshot is a defined wire, not a claim that every hidden coordinate is freely readable. Add a pointer with known packet $\chi(y)$, jointly equilibrated with $X$, and use 

$$

 H_{\rm copy}(t)=\dot\kappa(t)X P_y,\qquad
 \kappa(0)=0,\quad\kappa(\tau_c)=\kappa.

$$

 Characteristics give <a id="cfg:snapshot"></a>


$$
\Phi_{\tau_c}(x,y)=\psi\phi(x)\chi(y-\kappa x),\qquad
 X_{\tau_c}=X_0,\quad Y_{\tau_c}=Y_0+\kappa X_0.
 

$$

Equation (25.10).

 The current in $x$ is zero during this pulse, while the current in $y$ is $\dot\kappa x|\Phi|^2$. 



**Proposition 25.4 (Conditional rank after a snapshot).**

<a id="cfg:rank"></a> Let 

$$

 n(y)=\int|\phi(x)|^2|\chi(y-\kappa x)|^2dx,\qquad
 \phi_y(x)=\frac{\phi(x)\chi(y-\kappa x)}{\sqrt{n(y)}}.

$$

 For almost every $y$ with $n(y)>0$, the conditional actual density of $X$ is $|\phi_y|^2$. Its own cumulative rank $F_y(X)$ is uniform conditionally on $Y=y$. Consequently an estimate based on $Y$ and independent processing keys obeys 

$$

 \mathbb P(|F_Y(X)-a(Y)|\le\eta)\le2\eta,\qquad 0\le\eta\le\tfrac12.

$$

 

 

**Proof.**

Push the initial product density through [(25.10)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:snapshot). It becomes $|\phi(x)|^2|\chi(y-\kappa x)|^2dx\,dy$. Bayes' formula supplies the normalized conditional density. Its probability integral transform is uniform, and an interval of length at most $2\eta$ has at most that conditional probability. Independent keys can be conditioned on and then integrated out. 

□

 

The original rank and the narrowed conditional rank are different variables. This theorem calculates the change; it does not impose numerical threshold retirement. For real Gaussian packets of variances $\sigma_x^2,\sigma_y^2$, set $r=\kappa^2\sigma_x^2/\sigma_y^2$. Gaussian integration and $U^\dagger P_xU=P_x-\kappa P_y$ give 

$$

 \operatorname{Var}(X\mid Y)=\frac{\sigma_x^2}{1+r},\qquad
 D_{\rm pure}(\Phi_{\tau_c},\psi\phi\chi)=\sqrt{\frac r{4+r}},
 \qquad
 \Delta\operatorname{Var}(P_x)=\frac{\hbar^2r}{4\sigma_x^2}.

$$

 Indeed the wave overlap is $(1+r/4)^{-1/2}$, and the final momentum variance adds $\kappa^2\hbar^2/(4\sigma_y^2)$. The pure-state distance compares complete fields; the information has not been discarded in a reduced channel. 

Keeping $y$ frozen after copying and using the binary detector with $L>2a$ gives the complete finite acquisition law <a id="cfg:snapshot-time"></a>


$$
\mathbb P(j,dt,dy)=p_j u f(s_j(L-ut))
          |\chi(y-\kappa s_j(L-ut))|^2\,dt\,dy.
 

$$

Equation (25.11).

 To prove it, condition on $y$ and apply the quantile proof to $\phi_y$. For a right exit the originating packet coordinate is $\xi=L-ut$; for a left exit it is $\xi=ut-L$. Multiplication by $n(y)$ yields [(25.11)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:snapshot-time). Integrating in time gives $\mathbb P(j,dy)=p_j n(y)\,dy$, but the time profiles conditional on $y$ need not be equal for the two outlets. In particular, $\phi_y$ may be asymmetric. Correct terminal weights therefore do not imply a common conditional clock at every snapshot value. 



<a id="section-25-4"></a>

## 25.4 Finite wave writes, physical copies, and echo experiments

 

There is a discrete finite analogue that will also be used for archives. Let a blank register $A$ have orthogonal states $|b\rangle,|j\rangle$. For projectors $Q_j$ on the unknown system, define <a id="cfg:writeH"></a>


$$
H_M=i\hbar g\sum_jQ_j\otimes
       (|j\rangle\langle b|-|b\rangle\langle j|).
 

$$

Equation (25.12).

 Its norm is $\hbar g$, and from $\psi|b\rangle$ the exact wave is <a id="cfg:writewave"></a>


$$
\Phi_t=\sum_jQ_j\psi\otimes
             (\cos gt\,|b\rangle+\sin gt\,|j\rangle).
 

$$

Equation (25.13).

 It preserves all within-sector amplitudes and inaccessible reference correlations by its explicitly scalar action. 

Put $e_j=\|Q_j\psi\|^2$. For the pointer-only configuration resolution, the minimal Bell currents are $J_{jb}=2ge_j\sin gt\cos gt$. Before $\pi/(2g)$, 

$$

 q_{j\leftarrow b}=2ge_j\tan gt,\qquad
 \mathbb P(\tau>t)=\cos^2gt,\qquad
 \mathbb P(j,\tau\in dt)=e_jg\sin(2gt)\,dt.

$$

 Integration of the total hazard proves survival; multiplication by the conditional mark rate gives the density. Its divergent endpoint hazard expels all residual blank probability without an explosion, since there can be only one jump during this pulse. 

If the fixed fundamental resolution resolves system sectors as well, use $Q_j=P_j^S$ for this exact one-event example. Each transition $(j,b)\to(j,j)$ has rate $2g\tan gt$ and initial equilibrium mass $e_j$. The same mixture density results. For arbitrary projectors on a finer fixed resolution, endpoint weights still follow from equivariance but the pointer-only first-event formula must not be imported. Coarse flux and path transfer require the separate conditions of Theorem [16.5](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:coarse). 

A second blank register $C$ can be written by 

$$

 H_C=i\hbar g_C\sum_j|j\rangle\langle j|_A\otimes
           (|j\rangle\langle b|-|b\rangle\langle j|)_C

$$

 for area $\pi/2$. At a completed first write, 

$$

 \sum_jQ_j\psi|j\rangle_A|b\rangle_C
 \longmapsto\sum_jQ_j\psi|j\rangle_A|j\rangle_C.

$$

 Reversing the first write alone produces $\sum_jQ_j\psi|b\rangle_A|j\rangle_C$. Reversing both copies, in the appropriate reverse order, restores the full original product wave. These are unitary identities, not assertions that an occupied branch has changed the global source wave. 

The partial-write experiment gives a useful finite backaction calculation. Write $c=\cos\theta,s=\sin\theta$, copy after the partial first pulse, and reverse that pulse by $\theta$. The final wave is <a id="cfg:partialecho"></a>


$$
\sum_jQ_j\psi\left[
 c^2|b,b\rangle-cs|j,b\rangle
 +s^2|b,j\rangle+sc|j,j\rangle\right]_{A,C}.
 

$$

Equation (25.14).

 Therefore, under any admitted equivariant complete configuration law, 

$$

 \mathbb P(A=b)=c^4+s^4,\qquad
 \mathbb P(A=j)=2c^2s^2e_j,\qquad
 \mathbb P(C=j)=s^2e_j.

$$

 At $\theta=\pi/4$ copying reduces the return probability from one to one half. The acquired register is retained throughout this comparison. 

A later noncommuting measurement makes the continuation distinction explicit. After a completed first write and copy, reverse $A$, apply a known unitary $V_j$ controlled by $C=j$, and write projectors $B_k$ into a fresh register. The final orthogonal components are $(B_kV_jQ_j\otimes I_R)\psi\,|b,j,k\rangle$. Hence <a id="cfg:sequential"></a>


$$
\mathbb P(C=j,D=k)=\|(B_kV_jQ_j\otimes I_R)\psi\|^2.
 

$$

Equation (25.15).

 This is a coherent controlled Hamiltonian on a complete finite bank. No external rule first samples $j$ and then supplies a daughter. For $\psi=|+x\rangle$, a $Z$ write followed by complete erasure and an $X$ probe gives $+$ with probability one. If one copy remains, the same $X$ probe gives probability one half. A daughter-only mixture cannot reproduce the complete-erasure experiment. 



<a id="section-25-5"></a>

## 25.5 What final-record equivariance actually proves

 



**Theorem 25.5 (Complete physical endpoint law).**

<a id="cfg:endpoint"></a> Fix a linear isometric apparatus preparation map $T$ independent of the unknown input, a complete linear wave programme $U$, and an initially equivariant actual configuration law. Suppose the actual dynamics preserve the norm density of the complete wave. For a physically stored final record with configuration projector $P_h$, <a id="cfg:endpointlaw"></a>


$$
\mathbb P_\psi(h)=\|P_hUT\psi\|^2.
 

$$

Equation (25.16).

 All null, opposite, failure, and exhaustion regions are included in the resolution. The formula retains arbitrary inaccessible references and returning quantum memories in $UT\psi$. 

 

**Proof.**

Equivariance identifies the actual final configuration law with the squared norm of $UT\psi$. Summing or integrating that law over the physical record region gives [(25.16)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:endpointlaw). Every step acts by the identity on the reference. Linearity of $T$ and $U$ then gives the matrix event map $\rho\mapsto P_hUT\rho T^\dagger U^\dagger P_h$. This map is a consequence of the specified wave and probability laws, not an assumption used to select those laws. Classical provenance is retained by conditioning on its actual value and then averaging with its actual law. 

□

 



**Corollary 25.6 (Operational endpoint equivalence).**

<a id="cfg:equivalence"></a> Two conservative equivariant configuration processes with the same initial complete wave, norm-distributed configuration, global Hamiltonian programme, and final physical record map have identical final-record distributions. This applies to minimal Bell dynamics and any well-defined member of [(25.2)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:Kfamily). It also applies to a final bank storing an entire finite operational record string. 

 

**Proof.**

Both distributions equal [(25.16)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:endpointlaw). The record string must be physically present in the final bank, so it is a final configuration function; the argument does not apply to an unrecorded path functional. 

□

 

For a finite sequence with retained record labels, expand the complete unitary programme into its orthogonal final branches. If their carried coefficients are $K_{h_n}^{(n)}\cdots K_{h_1}^{(1)}\psi$, then 

$$

 \mathbb P(h_1,\ldots,h_n)
 =\|K_{h_n}^{(n)}\cdots K_{h_1}^{(1)}\psi\|^2.

$$

 This follows by the expansion and Theorem [25.5](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:endpoint), without independently sampling branch weights at each stage. The $K$ operators must be the actual branch coefficients, including coherent nulls, surviving excitations, and controlled phases. 

An instructive null occurs when an active state $|e\rangle$ has a clean-return recorder $|e,M_0\rangle\mapsto A|e,M_0\rangle+D|e,M_1\rangle$, $|A|^2+|D|^2=1$, while a spectator $|u,M_0\rangle$ is unchanged. For input $\alpha|e\rangle+\beta|u\rangle$, the unnormalized null vector is $\alpha A|e\rangle+\beta|u\rangle$. A real rotation $|e\rangle\mapsto c|e\rangle+s|u\rangle$, $|u\rangle\mapsto-s|e\rangle+c|u\rangle$, followed by a second active recorder of response $R_2$, gives 

$$

 \mathbb P(\mathrm{null}_1,\mathrm{record}_2)
       =|\alpha Ac-\beta s|^2 R_2.

$$

 For reference vectors $R_e,R_u$, replace the square by 

$$

 |\alpha Ac|^2+|\beta s|^2
 -2\operatorname{Re}\{\alpha Ac\,\beta^*s
                   \langle R_u|R_e\rangle\}.

$$

 Orthogonal references remove interference but not the spectator-to-active term. A scalar posterior for active origin is therefore insufficient. 

At a separated cut and on a branch with $\|P_h\Phi\|^2>0$, conditioning on $h$ gives configuration probabilities $\|P_xP_h\Phi\|^2/\|P_h\Phi\|^2$. For a claim that the normalized relative wave alone generates the same microscopic future path, additionally require <a id="cfg:branchlocal"></a>


$$
q_{y\leftarrow x}[\Phi,c]
   =q_{y\leftarrow x}[P_h\Phi/\|P_h\Phi\|,c],
 \qquad x,y\in\Gamma_h,
 

$$

Equation (25.17).

 and zero transitions out of $\Gamma_h$ on the claimed horizon. Minimal Bell rates with a block-diagonal Hamiltonian satisfy this by cancellation of the normalization factor. An arbitrary nonlinear $K[\Phi]$ need not. The full-wave endpoint theorem remains valid without [(25.17)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:branchlocal); autonomous daughter law and endpoint operational equivalence are different conclusions. 



<a id="section-25-6"></a>

## 25.6 Autonomous recording: an obstruction and a completed repair

 

The shuttered write does not establish an independent memory oscillator that restarts at each actual product entry. A configuration jump leaves the full wave intact, so such a restart is another physical intervention. The following exact autonomous examples from [[C02](/quantum-measurement/monograph/bibliography#bib-C02)] keep all amplitudes. 

For $e=|1,M_0\rangle$, $p=|R,M_0\rangle$, and $m=|R,M_1\rangle$, take 

$$

 H_3/\hbar=g(|p\rangle\langle e|+|e\rangle\langle p|)
          +\chi(|m\rangle\langle p|+|p\rangle\langle m|).

$$

 Writing $\Omega_3=\sqrt{g^2+\chi^2}$, the initial state $e$ evolves with 

$$

 a=\frac{\chi^2+g^2\cos\Omega_3t}{\Omega_3^2},\quad
 b=-i\frac g{\Omega_3}\sin\Omega_3t,\quad
 c=\frac{g\chi}{\Omega_3^2}(\cos\Omega_3t-1).

$$

 Substitution into $i\dot a=gb$, $i\dot b=ga+\chi c$, $i\dot c=\chi b$ verifies the solution and initial data. Consequently <a id="cfg:threebound"></a>


$$
\sup_t\mathbb P(m,t)\le
       \frac{4g^2\chi^2}{(g^2+\chi^2)^2}\longrightarrow0
       \quad\hbox{as }\chi/g\longrightarrow\infty.
 

$$

Equation (25.18).

 Strong memory coupling suppresses transfer; it is not automatically arbitrarily fast faithful acquisition. The added terminal-protection channel and its controlled weak-protection asymptotic are calculated in Section [C.3](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:protection). Product-reservoir recurrences are retained explicitly in Section [C.2](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:reservoir). 

A scoped trapped-source obstruction is also exact. In native $e\leftrightarrow p$ minimal dynamics, product entry occurs by $\pi/(2g)$ almost surely and the source returns to $e$ by $T=\pi/g$. Suppose a monitored architecture traps every successfully recorded path on the product side through $T$. Let $d$ be source-path total variation from the native model, $E$ be monitored product entry by $T$, and $\varepsilon=\mathbb P(E\hbox{ and no protected record})$. Then $\mathbb P(E)\ge1-d$, the recorded probability is at least $1-d-\varepsilon$, and its trapped product endpoint differs from the native endpoint. Thus <a id="cfg:trap"></a>


$$
2d+\varepsilon\ge1.
 

$$

Equation (25.19).

 The inequality uses only these events and the definition of total variation. It is not a universal recorder impossibility theorem. 

A four-state reaction supplies the relevant repair. In the basis $e0,p0,p1,e1$, take 

$$

 H_4/\hbar=
 \begin{pmatrix}
 0&g&0&0\\g&0&\chi&0\\0&\chi&0&g\\0&0&g&0
 \end{pmatrix}.

$$

 Put $\Omega=\sqrt{\chi^2+4g^2}$, $C=\cos(\Omega t/2)$, $S=\sin(\Omega t/2)$, $v=\chi t/2$, $k=2g/\Omega$, $r=\chi/\Omega$. From $e0$, 

$$

 a=C\cos v+rS\sin v,\quad b=-ikS\cos v,\quad
 c=-kS\sin v,\quad d=i(-C\sin v+rS\cos v).

$$

 Reflection-symmetric and antisymmetric combinations reduce $H_4$ to two $2\times2$ matrices $\left(\begin{smallmatrix}0&g\\g&\pm\chi\end{smallmatrix}\right)$. Their elementary exponentials give these amplitudes, proving the formula. 

The source product probability and coherence are 

$$

 \rho_{pp}=\frac{4g^2}{\Omega^2}\sin^2(\Omega t/2),\qquad
 \rho_{ep}=i\frac g\Omega\sin(\Omega t).

$$

 Choose $\chi=2\sqrt3g$, so $\Omega=4g$. At $t=\pi/(2g)$ the monitored source is certainly $e$, while the native source is certainly $p$: endpoint and path total variation are one. At $T=\pi/g$ the monitored wave is 

$$

 |e\rangle\{\cos(\sqrt3\pi)|M_0\rangle
            -i\sin(\sqrt3\pi)|M_1\rangle\},

$$

 and the source endpoint agrees exactly with the native one. The written branch permits source return, so the trapping premise of [(25.19)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:trap) has genuinely changed. Endpoint agreement has not removed the earlier disturbance. 

At a clean factorized return $|e\rangle(a|M_0\rangle+d|M_1\rangle)$, a subsequent source-only operation cannot reveal that isolated memory. A real conditional contact $\hbar\kappa(|p,M_1\rangle\langle e,M_1|+\mathrm{h.c.})$ for time $\tau$ gives instead $\mathbb P(p)=|d|^2\sin^2(\kappa\tau)$. Retained information matters through its correlations and later couplings, not merely through the name archive.
