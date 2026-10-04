# Section 3: From phases to transport and uniqueness

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

<a id="section-3"></a>

## 3 From phases to transport and uniqueness

<a id="sec:mechanism"></a>

The unitary change of variables $x_i=\sqrt{m_i}q_i$, including its constant half-density factor, makes the kinetic energy $-\Delta_x/2$. It preserves particle blocks, compact support, the Schwartz topology, and condition [(2.2)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:interaction). We use these mass-scaled coordinates in the proofs.



<a id="section-3-1"></a>

### 3.1 Statistical annihilators



Call a real smooth Schwartz multiplier $f$ a scalar annihilator if <a id="eq:ann"></a>


$$

 D{\mathcal P}_\Psi[-if\Psi]=0\quad\hbox{for every }\Psi.

$$

Equation (3.1).

 A Schwartz multiplier is a smooth function whose multiplication operator preserves ${\mathcal S}$ continuously; all bounded smooth functions with bounded derivatives, and the polynomial functions used below, qualify. The identities are always local off nodes. Denote their real vector space by ${\mathcal A}$.

Subtracting [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) for two controls shows that every admitted control difference belongs to ${\mathcal A}$, because a scalar potential does not change the current at a fixed state. This is the initial source of annihilators. There is also a useful closure rule: <a id="eq:closure"></a>


$$

 f_n\in{\mathcal A},\quad f_n\Psi\longrightarrow f\Psi\ \hbox{in }{\mathcal S}
 \ \hbox{for each fixed }\Psi
 \quad\Longrightarrow\quad f\in{\mathcal A}.

$$

Equation (3.2).

 It follows from continuity of the first derivative in [A2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:smooth). All limits below have exactly this meaning; no uniform operator-norm closure is assumed.

For a smooth vector field $u$, put <a id="eq:transportoperators"></a>


$$

 T_u\Psi=-u\cdot\nabla\Psi-\tfrac12({\operatorname{div}} u)\Psi,
 \qquad A_u p=-{\operatorname{div}}(up).

$$

Equation (3.3).

 The first is the infinitesimal action on half-densities, and the second is the action on densities.



**Lemma 3.1 (Phase and gradient identities).**

<a id="lem:phase"></a> If $f\in{\mathcal A}$ and its phase multipliers preserve ${\mathcal S}$, then <a id="eq:grad"></a>


$$

 D{\mathcal P}_\Psi[T_{\nabla f}\Psi]=A_{\nabla f}p^\Psi,
 \qquad |\nabla f|^2\in{\mathcal A}.

$$

Equation (3.4).

 Consequently $f,g\in{\mathcal A}$ imply <a id="eq:gamma"></a>


$$

 \Gamma(f,g):=\nabla f\cdot\nabla g\in{\mathcal A}

$$

Equation (3.5).

 whenever the displayed multipliers are admissible on ${\mathcal S}$. 





**Proof.**

Integrating [(3.1)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:ann) along $e^{itf}\Psi$ gives $p^{e^{itf}\Psi}=p^\Psi$, since the nonzero set does not change. Differentiating this identity in the state also intertwines the corresponding first derivatives. For the scalar Hamiltonian $H$, 

$$

 -i(e^{-itf}He^{itf}-H)\Psi
 =tT_{\nabla f}\Psi-\frac{it^2}{2}|\nabla f|^2\Psi.

$$

 The velocity of $e^{itf}\Psi$ is $v^\Psi+t\nabla f$. Comparing [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) at these two states therefore gives a polynomial identity in $t$. Its linear and quadratic coefficients give [(3.4)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:grad). Polarizing the second identity proves [(3.5)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:gamma). 

□





**Lemma 3.2 (Transport generation).**

<a id="lem:transport"></a> If every compactly supported smooth scalar function on ${\mathbb R}^d$ is in ${\mathcal A}$, then <a id="eq:cov-inf"></a>


$$

 D{\mathcal P}_\Psi[T_u\Psi]=A_up^\Psi

$$

Equation (3.6).

 for every $u\in{C_c^\infty}({\mathbb R}^d;{\mathbb R}^d)$. It follows that <a id="eq:cov-fin"></a>


$$

 {\mathcal P}(U_F\Psi)=F_*{\mathcal P}(\Psi),\qquad
 (U_F\Psi)(q)=|\det DF^{-1}(q)|^{1/2}\Psi(F^{-1}(q)),

$$

Equation (3.7).

 on corresponding nonzero patches, for every finite product $F$ of flows of such vector fields. The same assertion holds within one particle block if only that block's compact multipliers are known. 





**Proof.**

If [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf) holds for $u,v$, differentiating the two identities in the directions $T_v\Psi,T_u\Psi$ and subtracting cancels the symmetric second derivative. To make the regularity requirement explicit, choose a real smooth test function $\zeta$ supported in a compact nonzero patch. Differentiation of the $u$-identity and use of the $v$-identity gives 

$$

 \left\langle D^2{\mathcal P}_\Psi[T_v\Psi,T_u\Psi]+D{\mathcal P}_\Psi[T_uT_v\Psi],\zeta\right\rangle
 =\left\langle p^\Psi,v\cdot\nabla(u\cdot\nabla\zeta)\right\rangle.

$$

 The reversed identity has $u,v$ interchanged. Thus every spatial differentiation can be placed on the test function. With $[u,v]=u\cdot\nabla v-v\cdot\nabla u$, one has $[T_u,T_v]=-T_{[u,v]}$ and $[A_u,A_v]=-A_{[u,v]}$. Hence the identity also holds for $[u,v]$. The density commutators are interpreted distributionally: this calculation needs functional $C^2$, but not spatial $C^2$, regularity of $p^\Psi$.

For smooth real $\phi,\gamma$, the Euclidean gradient-bracket identity is <a id="eq:AG"></a>


$$
\begin{aligned}\phi|\nabla\gamma|^2\nabla\gamma
 ={}&-\tfrac14[\nabla(\phi\gamma^2),\nabla\gamma]
     -\tfrac1{12}[\nabla\phi,\nabla(\gamma^3)] \\
 &-\tfrac14[\nabla(\gamma^2),\nabla(\phi\gamma)].
 
\end{aligned}
$$

Equation (3.8).

 This is the specialization of [[1](/quantum-measurement/research/control-consistency/bibliography#bib-AG2026), Proposition 1, equation (10)]; expansion by the product rule also verifies it directly. For each component $u_j$ of a compact vector field, choose $\gamma_j\in{C_c^\infty}$ equal to $q_j$ on a neighborhood of its support and take $\phi=u_j$. The left side is $u_j e_j$. Every function on the right is compactly supported. [lemma 3.1](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:phase), bracket closure, and summation prove [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf).

For completeness, writing $a=\nabla\phi$, $b=\nabla\gamma$, $P=D^2\phi$, and $G=D^2\gamma$, the three brackets on the right of [(3.8)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:AG), in their displayed order, are 

$$
\begin{aligned}&\gamma^2(Ga-Pb)-2\gamma(a\cdot b)b-2\gamma|b|^2a-2\phi|b|^2b,\\
 &3\gamma^2(Ga-Pb)+6\gamma(a\cdot b)b,\\
 &-2\gamma^2(Ga-Pb)+2\gamma|b|^2a-2\phi|b|^2b.
\end{aligned}
$$

 Multiplication by $-1/4,-1/12,-1/4$ cancels every term except $\phi|b|^2b$. This verifies the precise local identity used here independently of a transport-group theorem.

Along the half-density flow, [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf) is the linear transport equation for the assigned density. Its unique local distributional solution is the pushforward: testing against the inverse-transported test function makes its derivative zero. Compact support gives a complete smooth coordinate flow. This proves [(3.7)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-fin); the one-block proof is identical with other coordinates as parameters. 

□



These transports are auxiliary actions on states and probability assignments. We have not claimed that $U_F$ is a Schrödinger propagator produced by the physical controls.



**Proposition 3.3 (Full scalar-control criterion).**

<a id="prop:saturation"></a> For scalar states on ${\mathbb R}^d$, $d\ge2$, assumptions [A1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:prob)–[A3](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:cc) and ${C_c^\infty}({\mathbb R}^d;{\mathbb R})\subset{\mathcal A}$ imply [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born) on every nowhere-zero state. 





**Proof.**

Fix such a state, put $r=|\Psi|^2$, and let $u$ be compactly supported with ${\operatorname{div}}(ru)=0$. Then $2\operatorname{Re}(\overline\Psi T_u\Psi)=-{\operatorname{div}}(ru)=0$. Since the state is scalar and nonzero, $T_u\Psi=-if\Psi$ for a real compactly supported smooth $f$. The annihilator identity and [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport) give 

$$

 0={\operatorname{div}}(p^\Psi u)=r\,u\cdot\nabla(p^\Psi/r).

$$

 Such weighted divergence-free fields span every tangent space. Indeed, in a ball around $q_0$, choose $j\ne k$, a compact $\chi$ equal to $r(q_0)(q_k-q_{0k})$ near $q_0$, and set 

$$

 u=r^{-1}\big((\partial_k\chi)e_j-(\partial_j\chi)e_k\big).

$$

 This field has ${\operatorname{div}}(ru)=0$ and $u(q_0)=e_j$. Therefore $\nabla(p^\Psi/r)=0$. Connectedness of ${\mathbb R}^d$ and normalization prove the assertion. 

□





**Remark 3.4 (The line exception).**

<a id="rem:line"></a> For one scalar coordinate let $r=|\Psi|^2/{\left\|{\Psi}\right\|}_2^2$ and $F^\Psi(x)=\int_{-\infty}^x r(s)\,ds$. For any positive smooth $g$ on $[0,1]$ with integral one, 

$$

 p^\Psi(x)=r(x)g(F^\Psi(x))

$$

 is normalized, projective, and has the stated functional regularity. The continuity equation with vanishing flux at infinity gives $(\partial_t+v\partial_x)F^\Psi=0$, proving equivariance for every scalar potential and positive mass. The assignment also has the approximation continuity above. A nonconstant $g$, for example $1+\alpha\cos(2\pi s)$ with $0<|\alpha|<1$, gives a non-Born law. This is the exception discussed in [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 8]. Local circulation in dimension at least two is essential to [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation).
