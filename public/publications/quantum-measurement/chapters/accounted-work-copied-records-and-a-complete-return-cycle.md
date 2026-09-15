# Chapter 11: Accounted work, copied records and a complete return cycle

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

<a id="acc:work"></a> 

Canonical reciprocity excludes a frozen source-dependent recoil on an open product phase space, but permits reciprocal replacements. This chapter retains the strongest complete work-accounting counterexample from [[M25](/quantum-measurement/monograph/bibliography#bib-M25)]. Its actual memories use the common chamber medium of [[M24](/quantum-measurement/monograph/bibliography#bib-M24)], while its work degree is classical canonical material. This is a different hybrid constitution from the preceding canonical packet source. The calculation is an architecture boundary, not a transfer of its Bell theorem without proof. 



<a id="section-11-1"></a>

## 11.1 Canonical recoil is constrained but not neutral

 On a finite amplitude cone and a classical work pair $(Y,P)$ use 

$$

\vartheta=\frac{i\hbar}{2}(z^\dagger dz-dz^\dagger z)+P\,dY,
 \qquad E_i(z,Y)=z^\dagger H_i z+Y.

$$

 Here $Y$ has energy units and $P$ has time units. A frozen-source map $(z,Y,P)\mapsto(z,Y+f(z),P)$ changes $d\vartheta$ by $dP\wedge df$. It is canonical on an open product domain only if $df=0$. This proves a real reciprocity constraint, but does not require equal source energies on different contacts. 



**Theorem 11.1 (Energy-matching reciprocal recoil).**

<a id="acc:recoil"></a> For finite Hermitian $H_i,H_j$, define <a id="acc:recoilmap"></a>


$$
\begin{aligned}U_{ji}(P)&=e^{iPH_j/\hbar}e^{-iPH_i/\hbar},\\
 K_{ji}(P)&=H_i-U_{ji}(P)^\dagger H_jU_{ji}(P),\\
 S_{ji}(z,Y,P)&=(U_{ji}(P)z,Y+z^\dagger K_{ji}(P)z,P).
 
\end{aligned}
$$

Equation (11.1).

 This map is canonical, $E_j\circ S_{ji}=E_i$, and $S_{kj}S_{ji}=S_{ki}$. Within maps of this form with $U(0)=I$ and the stated phase/translation normalization, the two requirements determine $U$ uniquely. Moreover <a id="acc:recoilbound"></a>


$$
\begin{aligned}\|U_{ji}(P)-I\|&\le |P|\|H_j-H_i\|/\hbar,\\
 \|K_{ji}(P)-(H_i-H_j)\|
 &\le |P|\|[H_i,H_j]\|/\hbar.
 
\end{aligned}
$$

Equation (11.2).

 

 

**Proof.**

For any differentiable unitary $U(P)$ put $K=i\hbar U^\dagger U'$ and $a=z^\dagger Kz$. Direct substitution gives $S_U^*\vartheta-\vartheta=a,dP+P,da=d(Pa)$, proving canonicity. Conversely its mixed source/work terms give the same $K$, up to the fixed scalar translation. Energy matching requires $K=H_i-U^\dagger H_jU$, hence $i\hbar U'=UH_i-H_jU$. The displayed product is its unique solution. The charts $C_i(z,Y,P)=(e^{-iPH_i/\hbar}z,Y+z^\dagger H_i z,P)$ satisfy $S_{ji}=C_j^{-1}C_i$, proving composition. The first bound follows by Duhamel comparison of the two unitary groups; the second follows by differentiating $e^{iPH_i/\hbar}H_je^{-iPH_i/\hbar}$ and integrating its commutator norm. Tensoring an inaccessible reference leaves the bounds unchanged. 

□

 

A pulse of $c_1(t)Pz^\dagger H_i z$ followed by a pulse of $-c_2(t)Pz^\dagger H_jz$, each with coefficient integral one, implements this map. This factorization alone does not account for switching work at a native collision. Also an actual-event-dependent recoil changes the source wave and invalidates direct use of the fixed-wave kinetic proof. We next use an autonomous work cycle whose entire read, copy and return can be calculated. 



<a id="section-11-2"></a>

## 11.2 The work rotor and physical memory medium

 Let the carried space include position, internal input, two memory bits $B,C$, and an inaccessible reference $R$. Supply a canonical cylinder $(\phi,Y)$, with time-valued angle of circumference $L$ and $\{\phi,Y\}=1$. Its free energy is $Y$ on an active bounded energy band. A smooth extension can be bounded below outside that band; the stated experiment stays strictly inside it. This linear-dispersion work rotor is a disclosed resource, not an ordinary quadratic kinetic pointer or a finite-dimensional consequence of finite energy. 

Put $A=I_{\rm pos}\otimes\lvert0\rangle\langle0\rvert_{\rm int}$ and 

$$

 G_1=\sigma_y^B\otimes I_C,\qquad
 G_2=\lvert1\rangle\langle1\rvert_B\otimes\sigma_y^C,\qquad
 G_3=-\sigma_y^B\otimes\lvert1\rangle\langle1\rvert_C.

$$

 Choose real fixed profiles $f,\ell_1,\ell_2,\ell_3$ and a fixed selector $0\le\chi(Y)\le1$. The autonomous energy is <a id="acc:rotorenergy"></a>


$$
\mathcal E=Y+f(\phi)\langle A\rangle+
 \hbar\ell_1(\phi)\chi(Y)\langle G_1\rangle+
 \hbar\ell_2(\phi)\langle G_2\rangle+
 \hbar\ell_3(\phi)\langle G_3\rangle.
 

$$

Equation (11.3).

 The action has kinetic one-form $i\hbar(\Psi^\dagger d\Psi-d\Psi^\dagger\Psi)/2+Y,d\phi$. Its equations are <a id="acc:rotorwave"></a>
<a id="acc:rotorforce"></a>


$$
\begin{aligned}i\hbar\dot\Psi&=[fA+\hbar\ell_1\chi(Y)G_1+
 \hbar\ell_2G_2+\hbar\ell_3G_3]\Psi,\\
 \dot\phi&=1+\hbar\ell_1\chi'(Y)\langle G_1\rangle,\\
 \dot Y&=-f'\langle A\rangle-\hbar\ell_1'\chi(Y)\langle G_1\rangle
 -\hbar\ell_2'\langle G_2\rangle-\hbar\ell_3'\langle G_3\rangle.
 
\end{aligned}
$$

Equation (11.4, 11.5).

 Thus the source-dependent work displacement is a reciprocal Hamiltonian force, rather than a prescribed numerical impulse. Actual memory outcomes are supplied by the following separately specified physical medium. 

For every finite joint sector $q=(i,b,c)$, let $\mathcal C_q=[0,w_q]\times[0,1]$, $w_q=\|P_q\Psi\|^2$. An actual tracer has sector $q$, depth $d$ and transverse coordinate $\zeta$. Set $f_{rq}=[J_{rq}]_+$, $F_q=\sum_rf_{rq}$, $I_q=\sum_rf_{qr}$. Between stirrings $\dot d=-F_q$ and $\zeta$ is fixed. The outgoing face is divided into destination strips of relative width $f_{rq}/F_q$; the incoming face of $r$ into strips of relative width $f_{rq}/I_r$. At $d=0$ the tracer enters $r$ at $d'=w_r$ and its transverse coordinate is rescaled affinely so that $F_q,d\zeta=I_r,d\zeta'$. Zero-width strips are absent. A fundamental rate-$\kappa$ stirring resets $(d,\zeta)$ in the current sector to $(w_qU,V)$ for independent fresh uniforms $U,V$. 

This geometry specifies squared-norm chamber volumes, rectified normalized faces, perfect transmission and a Poisson uniform-refresh law. They are not derived here. The initial unique ready chamber has unit density in $(d,\zeta)$, with source-independent readiness. There is one unknown carried input, not additional input specimens. Work readiness and future stirring are independent of it. 



**Lemma 11.2 (Density preservation in the finite memory medium).**

<a id="acc:chamberdensity"></a> For a deterministic bounded piecewise-smooth coherent programme, the chamber density identically one is preserved by the drift, portals and stirring. Consequently actual sector probabilities are $w_q(t)$. The process loses no probability at a finite-time explosion. 

 

**Proof.**

Interior drift has zero divergence in the chamber coordinates. The top boundary moves at $\dot w_q=I_q-F_q$ while depth drift is $-F_q$, so its relative incoming flux is $I_q$. The bottom outgoing flux is $F_q$. The prescribed face rescaling equates each edge's boundary flux, and the incoming and outgoing strip partitions are exhaustive. Hence the constant density solves the transport equation with its moving-boundary conditions. Stirring replaces a sector's density by its uniform conditional density; it therefore also preserves density one. A killed construction has mass bounded by this transport solution. Its expected portal count is bounded by $\int\sum_qF_qdt<\infty$, and its expected stirring count by $\kappa T$. Thus no finite-time explosion loses mass, and equality with the normalized transport solution follows. Vanishing-volume chambers have zero occupied probability. This is a preservation theorem under the supplied ready law, not its preparation or statistical selection. 

□

 



<a id="section-11-3"></a>

## 11.3 An exact read, genuine copy and complete work return

 Prepare $B,C$ in $\lvert00\rangle$ and a source vector $\Psi_S$ independent of these memories. Choose $f=0$ at readiness, $f=-K$ during three disjoint ordered pulses, and <a id="acc:rotorprofiles"></a>


$$
\int_0^Lf(\phi)d\phi=0,\qquad
 \int\ell_j(\phi(t))dt=\pi/2\quad(j=1,2,3).
 

$$

Equation (11.6).

 



**Theorem 11.3 (Accounted-work acquisition with a retained copy).**

<a id="acc:rotor"></a> For every fixed carried input and work-ready point, the solution is <a id="acc:rotorsolution"></a>


$$
\phi_t=\phi_0+t\pmod L,\qquad
 Y_t=Y_0-f(\phi_t)p,\qquad
 \Psi_t=e^{-(i/\hbar)A\int_0^tf(\phi_u)du}\Psi_S\otimes m_t,
 

$$

Equation (11.7).

 where $p=\langle A\rangle_{\Psi_S}$ is constant. Its total energy is exactly $Y_0$. After a full rotor cycle, <a id="acc:rotorreturn"></a>


$$
(\Psi_S,\phi_0,Y_0,\lvert00\rangle)\longmapsto
 (\Psi_S,\phi_0,Y_0,
 \lvert0\rangle_B[\cos\beta\lvert0\rangle_C+
 \sin\beta\lvert1\rangle_C]),
 \quad \beta=\frac\pi2\chi(Y_0+Kp).
 

$$

Equation (11.8).

 The source including inaccessible reference correlations, both work coordinates and the display return exactly. The actual retained archive has $\mathbb P(C=1)=\sin^2\beta$ at every finite $\kappa$. 

 

**Proof.**

For fixed complete initial data the Hamiltonian separates into source and memory operators, so the wave remains a product across that partition. Since $-iG_j$ are real and the initial memory amplitudes are real, $m_t$ stays real. Therefore every expectation $\langle G_j\rangle$ vanishes at every time, not only at endpoints. The work equations reduce to $\dot\phi=1$, $\dot Y=-f'p$. Also $A$ commutes with the entire contact, so $p$ is constant. This proves [(11.7)](/quantum-measurement/monograph/accounted-work-copied-records-and-a-complete-return-cycle#acc:rotorsolution) and $\mathcal E=Y+fp=Y_0$. 

On the plateau, $Y=Y_0+Kp$. The three exact memory gates give 

$$

 |00\rangle\longmapsto
 \cos\beta|00\rangle+\sin\beta|10\rangle
 \longmapsto\cos\beta|00\rangle+\sin\beta|11\rangle
 \longmapsto|0\rangle_B(\cos\beta|0\rangle_C+\sin\beta|1\rangle_C).

$$

 Thus $C$ is a physical copy of the display and is used to reset it. The zero integral of $f$ restores the source unitary, periodicity restores $\phi$, and $f=0$ restores $Y$. Lemma [11.2](/quantum-measurement/monograph/accounted-work-copied-records-and-a-complete-return-cycle#acc:chamberdensity) makes the final volume of $C=1$ its actual probability. No auxiliary Born draw or ideal collapse was appended. 

□

 

The initial memory occupies a proper ready submanifold. On its reached real-amplitude curve the Berry one-form vanishes while the metric line element need not. There is no contradiction with a theorem about information export by a source-fixed map on an open full product domain. Hamiltonian reciprocity of the complete hybrid dynamics also does not give one preparation-independent linear propagator after eliminating its classical work trajectory. 



<a id="section-11-4"></a>

## 11.4 Finite positive-area resources and the separating experiment

 A concrete resource programme sets $K=\hbar g$, $L=16/g$ and $u=g\phi\pmod{16}$. Let $s(x)=3x^2-2x^3$ on $[0,1]$. Define 

$$

 \frac{f(u/g)}K=
 \begin{cases}
 -s(u-1),&1\le u\le2,\\
 -1,&2\le u\le7,\\
 -[1-s(u-7)],&7\le u\le8,\\
 0,&0\le u\le1\text{ or }15\le u\le16,
 \end{cases}

$$

 and on $[8,15]$ use the negative of the preceding profile translated by seven. Its two areas cancel. For $a_1=2.5,a_2=4,a_3=5.5$, set 

$$

 \ell_j(\phi)=\pi g\sin^2(\pi(u-a_j))1_{[a_j,a_j+1]}(u).

$$

 These profiles are $C^1$ and piecewise smooth, have the required pulse areas, and use a finite four-dimensional memory. Prepare independently of the source <a id="acc:workready"></a>


$$
u_0\in[0,0.1],\qquad
 Y_0\in[10K-K/24,10K+K/24]
 

$$

Equation (11.9).

 with the uniform rectangle law, of nonzero canonical area $\hbar/120$. Its particular uniform density is not needed for the separated-band bit below; support on this rectangle suffices. Choose a fixed $C^1$ selector equal to one for $|Y-(10+2/3)K|\le K/12$ and zero for $|Y-(10+2/3)K|\ge K/6$. Then throughout the allowed ready bands, 

$$

 \chi(Y_0+Kp)=1\quad(p=2/3),\qquad
 \chi(Y_0+Kp)=0\quad(p=0,1).

$$

 All unknown inputs $p\in[0,1]$ obey $|Y_t-Y_0|\le K$, $Y_t\in[8.95833K,11.04167K]$ and $\|H_{
\rm field}\|\le(1+\pi)K$. The active band $[8K,12K]$ therefore has strict headroom; no promised branch exhausts the work resource. All couplings have finite duration and bounded strength on this domain. Contacts engage and disengage where their profiles vanish, with zero contact-energy switching cost. The actual read/copy/return is autonomous. 

For a finite timing calculation let $\Theta(v)=\pi v/2-\sin(2\pi v)/4$ on $[0,1]$, and put $v_j=[gt+u_0-a_j]_0^1$, $x=\chi(Y_0+Kp)$. The display and copied-archive capture CDFs during their respective pulses are <a id="acc:rotortimes"></a>


$$
\mathbb P(L_B\le t)=\sin^2(x\Theta(v_1)),\qquad
 \mathbb P(L_C\le t)=\sin^2\beta\sin^2\Theta(v_2).
 

$$

Equation (11.10).

 The terminal null masses are $1-\sin^2\beta$. Indeed the relevant currents are unidirectional, so crossing into the daughter chambers is equivalent to having captured by that time; Lemma [11.2](/quantum-measurement/monograph/accounted-work-copied-records-and-a-complete-return-cycle#acc:chamberdensity) gives the CDFs. Differentiation gives the ordinary time densities; for example the first is $x\pi g\sin^2(\pi v_1)\sin(2x\Theta(v_1))$ on the pulse. The reset has CDF $\sin^2\beta\sin^2\Theta(v_3)$ and leaves $C$ unchanged. Integrating these formulas over [(11.9)](/quantum-measurement/monograph/accounted-work-copied-records-and-a-complete-return-cycle#acc:workready) gives the full finite-read law. No conditioning on a successful branch is needed. 

Run the detuned production [(9.1)](/quantum-measurement/monograph/readable-histories-and-reciprocal-source-writers#acc:detunedH) with $\hbar$ restored, then a zero-current hold of duration $1/(2g)$, then the rotor programme. Compare, using fixed orthogonal inaccessible reference vectors $r_0,r_1$, 

$$
\begin{aligned}\mathcal E_{
\rm basis}:&\quad |0r_0\rangle\text{ with probability }2/3,
 \quad |1r_1\rangle\text{ with probability }1/3,\\
 \mathcal E_{
\rm sup}:&\quad
 \sqrt{2/3}|0r_0\rangle\pm\sqrt{1/3}|1r_1\rangle,
 \quad\text{each with probability }1/2.
\end{aligned}
$$

 All declared apparatus readiness and active provenance agree; no ensemble label is supplied to a controller. The averaged source/reference matrices coincide. The actual raywise $p$ laws differ, and the exact returned archive satisfies <a id="acc:rotorgap"></a>


$$
\mathbb P_{
\rm sup}(C=1)=1,\qquad
 \mathbb P_{
\rm basis}(C=1)=0.
 

$$

Equation (11.11).

 These are different complete source laws on rays; the result proves that their common matrix quotient is insufficient under the hybrid coupling. An actual retained preparation label would change the comparison and must not be erased in applying this conclusion. 



<a id="section-11-5"></a>

## 11.5 A noncommuting continuation and native-path return

 After the rotor retain $C$ and apply $H_P=\hbar h\sigma_y^{\rm pos}$ for $T_P=\pi/(4h)$. This does not commute with the detuned position Hamiltonian. At production end the source fibres are 

$$

 \psi_0=-i\sqrt{1-\eta},P_0\Xi-P_1\Xi,\qquad
 \psi_1=-i\sqrt\eta,P_0\Xi.

$$

 Their inner product is $p\sqrt{\eta(1-\eta)}$, so the final position-one probability, in both read and clean experiments, is $1/2+p\sqrt{\eta(1-\eta)}$. This equality alone is only a marginal statement. The following stronger comparison controls the complete native position path in the declared finite-stirring experiment. 



**Theorem 11.4 (A retained record after arbitrarily small native-path change).**

 <a id="acc:quietreturn"></a> For the three tested input classes $p=0,1,2/3$ with the preparation above, compare the read experiment to the same production, hold, total port duration and later probe, but with source/work and memory contacts off. Both keep the same native stirring. If their final common quiet interval has length $s$, then <a id="acc:quietbound"></a>


$$
{d_{\mathrm{TV}}}(\text{read native position path},
 \text{clean native position path})\le e^{-\kappa s},
 \qquad \text{retained archive gap}=1.
 

$$

Equation (11.12).

 The explicit profiles provide $s=1/g$ on the total physical horizon $\pi/(2g)+1/(2g)+16/g+\pi/(4h)$. 

 

**Proof.**

Couple initial tracer data and all stirring clocks. Production is identical. There is no native position current during the hold or rotor, so native position paths agree throughout that period. Memory transfers may change the depth and transverse coordinates, which are not asserted returned. By time $15/g$ the field, rotor and display have returned, all contacts are off, and $C$ is certain for each tested class. If a stirring occurs in the common final quiet interval, use the same uniform pair in the occupied read and clean chambers, identified by their fixed memory label. Their native weights agree, so depth and transverse coordinates then coincide. They remain identical through the subsequent probe and all its native crossings under the common coupling. Failure of this coupling is confined to no stirring in an interval of length $s$, of probability $e^{-\kappa s}$. The archive value is already certain and unchanged by that stirring. This proves both statements, retaining exact native event times and null intervals. 

□

 

The special deterministic-memory input classes are sufficient for the separation. No uniform finite-$\kappa$ path estimate for every intermediate $p$, arbitrary memory feedback or perturbation of this programme is inferred from it. Increasing $\kappa$ is a supplied stirring-rate resource; its Poisson count has no fixed finite upper bound. The ready uniform coordinate and repeated uniform refresh remain statistical postulates. This construction supplies a complete work and memory account, but no new universal admission principle. 



<a id="section-11-6"></a>

## 11.6 Scope of the access conclusions

 The original packet source permits delayed reads of a classical action. Destructive packet capture preserves a predesignated native path in a controlled resource limit. A marked native product preserves the entire native projection exactly. Local damage does not prevent that fixed-tag limit, and a common gate can be reset while retaining its copied record. The accounted-work model adds the stronger fact that reciprocal source forces, autonomous bounded work excursions, genuine copying and exact source/work/display return can coexist with a unit record gap in a specific hybrid constitution. 

Each result identifies an admitted coupling rather than asserting that all source coordinates must be measurable. The constitutive class changes where stated: the rotor is not silently the old packet source, and a Bell law postulated or derived for one graph does not make all classical resource extensions into a common affine instrument. These countermodels show that conservation, reciprocity, consumption and finite local work accounting alone do not select a compatible complete reaction and record interface. The pilot theory supplies a different, explicit ordinary material coupling inventory; its exclusion of the displayed classical readers is new constitutive content. None of the countermodels proves that every possible source completion fails, and the new inventory does not invalidate a countermodel on its original permissive access domain.
