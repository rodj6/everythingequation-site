# Section 3: A smooth copy–return map on the complete configuration

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-3"></a>

## 3 A smooth copy–return map on the complete configuration

 <a id="p1p:sec:map"></a>

Write $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and $\Phi(x)=\int_{-\infty}^x\phi(y)\,dy$. A writer coordinate $q$ and a distinct archive coordinate $z$ have prescribed oscillator ground-state densities $g_\sigma(q)=\sigma^{-1}\phi(q/\sigma)$ and $h_a(z)=a^{-1}\phi(z/a)$. Their quantum widths satisfy $\sigma^2=\hbar/(2m\omega)$ and $a^2=\hbar/(2M\Omega)$. The internal two-state degree of freedom is a fibre, with no additional sampled configuration coordinate. The balanced entrance wave is <a id="p1p:eq:stock"></a>


$$

 \Psi_{\rm in}(q,z)=\sqrt{g_\sigma(q)h_a(z)}
 (|0\rangle+|1\rangle)/\sqrt2.

$$

Equation (3.1).

 Equation [(3.1)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:eq:stock) specifies the quantum stock. The actual configuration law will be a separate input to the preparation theorem.

The prescribed Hamiltonian admits exact translated packets. If $\varphi$ is the ground envelope of an oscillator and $d(t)$ is a translation, then <a id="p1p:eq:translated"></a>


$$

 \psi_d(q,t)=\varphi(q-d(t))
 \exp\{im\dot d(t)q/\hbar+i\theta_d(t)\},\qquad
 \dot\theta_d=-\omega/2-m(\dot d)^2/(2\hbar),

$$

Equation (3.2).

 solves the Schrödinger equation with potential <a id="p1p:eq:potential"></a>


$$

 V_d(q,t)=\tfrac12m\omega^2(q-d(t))^2-m\ddot d(t)q.

$$

Equation (3.3).

 This follows by differentiating [(3.2)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:eq:translated): the transport term $-i\hbar\dot d\varphi'$ cancels the cross kinetic term, the inertial linear term cancels $-m\ddot d q$, and the remaining scalar terms give the displayed phase. The density and current are exactly $g_\sigma(q-d)$ and $\dot d\,g_\sigma(q-d)$. For an infinitely differentiable control, define <a id="eq:smooth-step"></a>


$$

 s(t)=\frac{\displaystyle\int_0^t e^{-1/[r(1-r)]}\,dr}
 {\displaystyle\int_0^1 e^{-1/[r(1-r)]}\,dr},\qquad 0<t<1,

$$

Equation (3.4).

 and extend it by $0$ for $t\leq0$ and $1$ for $t\geq1$. Every positive-order derivative vanishes at both joins. On a stage of duration $T>0$, take $d(t)=d_0+(d_1-d_0)s(t/T)$ after translating the time origin. The resulting potential is smooth in time and space. The polynomial $35t^4-84t^5+70t^6-20t^7$, joined to constants, is an alternative $C^3$ schedule giving a $C^1$ time-dependent potential. Both schedules give the same endpoint map below. Every finite translation has finite prescribed coefficients; no uniform bound as $T\downarrow0$ is asserted.

The protocol consists of a writer stage, a copy stage, and a return stage. The writer traps move conditionally on $|0\rangle,|1\rangle$ to $-D\sigma,+D\sigma$. With the writer packets stationary, the archive traps move to $-Aa,+Aa$. With the archive packets stationary, the writer traps return to the origin. Orthogonality of the internal columns makes the full positional density the sum of their positive densities. The inactive coordinate has zero current in each stage: during copying every writer envelope is real with only a $q$-independent phase; during return every archive envelope is real with only a $z$-independent phase. The active velocity is a convex combination of the two trap velocities. It is smooth, locally Lipschitz and bounded on each finite time interval, so every finite entrance point has a unique global stage trajectory.

Hereafter the intermediate physical positions are standardized, so $q$ means $q/\sigma$ and $z$ means $z/a$. Let <a id="p1p:eq:cdfs"></a>


$$
\begin{aligned}F_D(q)&=\tfrac12\{\Phi(q+D)+\Phi(q-D)\},&
 w_D(q)&=\frac{1}{1+e^{2Dq}},\\
 H_{w,A}(z)&=w\Phi(z+A)+(1-w)\Phi(z-A),&
 w_A(z)&=\frac{1}{1+e^{2Az}},\\
 M_A(z)&=\tfrac12\{\Phi(z+A)+\Phi(z-A)\}.&&
\end{aligned}
$$

Equation (3.5).

 In this section $M_A$ denotes a CDF; its derivative is the archive reference density. The analysis coordinates are $u=\Phi(q_0)$ and $v=\Phi(z_0)$. They are changes of mathematical variables; the control does not evaluate a CDF.



**Theorem 3.1 (Complete Gaussian endpoint map).**

<a id="p1p:thm:map"></a> For $D,A>0$, define <a id="p1p:eq:map"></a>


$$
\begin{aligned}q&=F_D^{-1}(u),& z&=H_{w_D(q),A}^{-1}(v),\\
 r&=w_A(z)\Phi(q+D)+(1-w_A(z))\Phi(q-D),& b&=M_A(z).
\end{aligned}
$$

Equation (3.6).

 The exact guidance endpoint map in entrance and final reference coordinates is $T_{D,A}(u,v)=(r,b)$. It is a smooth bijection of $(0,1)^2$ with determinant one. Its inverse is <a id="p1p:eq:inverse"></a>


$$
\begin{aligned}z&=M_A^{-1}(b),&
 q&=[w_A(z)\Phi(\,\cdot+D)+(1-w_A(z))\Phi(\,\cdot-D)]^{-1}(r),
 \\
 u&=F_D(q),&v&=H_{w_D(q),A}(z).
\end{aligned}
$$

Equation (3.7).

 At the endpoint the writer quantum wave is again a common ground envelope, factorized from the coherent archive–internal state. 

 

**Proof.**

In a one-dimensional continuity equation with vanishing current at $-\infty$, the CDF $F_t$ obeys $\partial_tF_t=-j_t$. Along $\dot q=j_t/\rho_t$, $dF_t(q(t))/dt=0$. Applying this identity first to the writer gives $q=F_D^{-1}(u)$. During copying $q$ is fixed, so the conditional archive weights are the fixed numbers $w_D(q),1-w_D(q)$ and its conditional CDF is conserved. During return $z$ is fixed; the conditional writer weights are $w_A(z),1-w_A(z)$. Its final CDF is the ready CDF, giving $r$. The final archive reference CDF is $M_A$, giving $b$.

Strict positivity gives every inverse in [(3.7)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:eq:inverse) and the implicit-function theorem gives smoothness. Put 

$$

 \rho(q,z)=\tfrac12\{\phi(q+D)\phi(z+A)+\phi(q-D)\phi(z-A)\}.

$$

 The triangular input transformation $(q,z)\mapsto(u,v)$ has Jacobian $F_D'(q)\partial_zH_{w_D(q),A}(z)=\rho(q,z)$. The triangular output transformation $(q,z)\mapsto(r,b)$ has Jacobian 

$$

 M_A'(z)\{w_A(z)\phi(q+D)+(1-w_A(z))\phi(q-D)\}=\rho(q,z).

$$

 Their ratio is one. Finally, with the phases from each stage retained, the wave is 

$$

 \sqrt{g_\sigma(q)}\,
 \frac{e^{i\theta_0}\sqrt{h_a(z+Aa)}|0\rangle+
 e^{i\theta_1}\sqrt{h_a(z-Aa)}|1\rangle}{\sqrt2}.

$$

 This proves factorization as well as the claimed complete map. 

□



To repeat the map, supply fresh internal qubits in $|+\rangle$ and fresh archive oscillators, and retain the old qubits as internal memories. An exact smooth internal swap also rotates the archive holding projectors. If $V(t)$ is a spatially constant interpolation from the identity to SWAP, set <a id="p1p:eq:swap"></a>


$$

 H(t)=V(t)H_{\rm hold}V(t)^\dagger+i\hbar\dot V(t)V(t)^\dagger.

$$

Equation (3.8).

 Direct differentiation shows that the wave is $V(t)$ times the holding wave. Thus all positional densities and currents are preserved during the swap. One choice is $V(t)=\exp[-is(t)\pi(I-\mathrm{SWAP})/2]$. After each swap, all previously written archive currents are zero and future operations fix their coordinates. The complete $j$th cycle is therefore $T_{D,A}$ on the current writer and the $j$th unused archive, with every other configuration coordinate fixed. This exact holding and conjugated-control specification is part of the prescribed parent.



<a id="section-3-1"></a>

### 3.1 Finite separation and retained fine information



The comparison map is the invertible, area-preserving baker map <a id="p1p:eq:baker"></a>


$$

 B(u,v)=(2u-s,(v+s)/2),\qquad s=\lfloor2u\rfloor,

$$

Equation (3.9).

 defined off its null branch cut. It is a comparison of complete maps, not an instruction to translate actual points rigidly according to a branch sign at finite overlap.



**Proposition 3.2 (A finite fine-archive obstruction).**

<a id="p1p:prop:channel"></a> Let the initial writer quantile be uniform and the initial archive quantile be a fixed $v_0\in(0,1)$. At every finite $D,A>0$, 

$$

 {\operatorname{TV}}\bigl({\operatorname{Law}}(r,b),{\mathsf U}\otimes{\operatorname{Law}}(b)\bigr)=1.

$$

 The same conclusion holds conditionally if a regular initial archive quantile is copied exactly into separately retained memory. 

 

**Proof.**

The copy equation is $v_0=w_D(q)\Phi(z+A)+(1-w_D(q))\Phi(z-A)$. Its implicit derivative is 

$$

 \frac{dz}{dq}=-\frac{w_D'(q)[\Phi(z+A)-\Phi(z-A)]}
 {\partial_zH_{w_D(q),A}(z)}>0.

$$

 Indeed $w_D'<0$ and both remaining factors are positive. From $(v_0,z)$ one recovers 

$$

 w=\frac{v_0-\Phi(z-A)}{\Phi(z+A)-\Phi(z-A)},\qquad
 q=\frac{1}{2D}\log\frac{1-w}{w}.

$$

 Thus $b$ determines $z,q,r$. The actual joint measure is carried by a measurable graph, whereas its own $b$ marginal times a nonatomic uniform $r$ law gives that graph measure zero. This gives total variation one. Conditioning on an exactly retained initial $v$ gives the same proof. 

□





**Lemma 3.3 (Uniform sectional map comparison).**

<a id="p1p:lem:separation"></a> Choose $c>0$, $D>c$, $0<\eta<1/2$, and $k>0$ such that 

$$

 \gamma=e^{-2Dc}\leq\eta/2,\qquad \Phi(-k)\leq\eta/2,
 \qquad A>k.

$$

 Put $a_D=\Phi(-(D+c))$, $t_A=\Phi(-(2A-k))$ and $\rho_A=e^{-2A(A-k)}$, and assume $\gamma+t_A<\eta$. Then $K=B^{-1}T_{D,A}$ has coordinatewise displacement at most <a id="p1p:eq:delta-beta"></a>


$$

 \delta=\max\{(a_D+\rho_A)/2,\gamma+t_A\}

$$

Equation (3.10).

 outside a set of area at most <a id="p1p:eq:beta"></a>


$$

 \beta=2\eta+\Phi(-(D-c)).

$$

Equation (3.11).

 On this good set the archive sign agrees with the writer sign just before copying. The bounds hold on every fixed spectator fibre. 

 

**Proof.**

Use the good set $|F_D^{-1}(u)|\geq c$ and $v\in[\eta,1-\eta]$. For $q\leq-c$, $1-w_D(q)\leq\gamma$. The copy equation gives 

$$

 \Phi(z+A)\leq\frac{1-\eta}{1-\gamma}\leq1-\eta/2,
 \qquad z\leq-A+k.

$$

 Consequently $1-w_A(z)\leq\rho_A$ and $\Phi(z-A)\leq t_A$. Since $2u=\Phi(q+D)+\Phi(q-D)$, 

$$

 |r-2u|\leq a_D+\rho_A,
 \qquad 0\leq b-v/2\leq(\gamma+t_A)/2.

$$

 The latter inequality and $v\leq1-\eta$ imply $b<1/2$; also $z<0$. The left inverse-baker formula $(r,b)\mapsto(r/2,2b)$ therefore gives [(3.10)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:eq:delta-beta). Reflection proves the right case. The excluded writer-band length is exactly $\Phi(-(D-c))-\Phi(-(D+c))$, bounded as in [(3.11)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:eq:beta). The two archive ends have total length $2\eta$. 

□
