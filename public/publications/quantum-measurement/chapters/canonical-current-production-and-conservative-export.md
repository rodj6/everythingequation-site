# Chapter 3: Canonical current production and conservative export

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

<a id="kin:production"></a> 

This chapter consolidates the source action and conservative exporter of [[M01](/quantum-measurement/monograph/bibliography#bib-M01)], retaining the distinction drawn in [[M02](/quantum-measurement/monograph/bibliography#bib-M02)] between coherent current, weighted candidate flux and actual event intensity. The source is an explicit classical canonical field coupled to physical carrier and packet variables. The action derives signed production calibration within its declared class. The following chapter supplies an intrinsic reaction law as a comparison model and proves its Bell limit. Chapter [6](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:chapter-medium) retains that action and comparison theorem while replacing elementary Markov clocks and instantaneous opposite-packet cancellation by a finite gas and finite recombination. Its ordinary material interface is an additional constitutive rule, not an identification of every earlier classical port with an affine quantum instrument. 



<a id="section-3-1"></a>

## 3.1 Complete state, currents and physical time

 Let a finite graph have vertex set $V$, oriented edge set $E$ and incidence matrix $B$, with $B_{re}=-1$, $B_{qe}=1$ for $e=(r,q)$. A fixed orthogonal sector decomposition $\{P_r\}$ acts on a finite-dimensional carried space. An inaccessible reference is included in the sector fibres: all admitted blocks below act as $H_{qr}\otimes I_R$ when that is the physical experiment. Fix a normalized coherent vector and a bounded piecewise $C^1$ Hamiltonian programme on a physical horizon $[0,T]$. Write <a id="kin:current"></a>


$$
i\hbar\dot\Psi=H(t)\Psi,\qquad
 w_r=\|P_r\Psi\|^2,\qquad
 J_{qr}=\frac2\hbar\operatorname{Im}\langle\Psi_q,H_{qr}\Psi_r\rangle.
 

$$

Equation (3.1).

 Thus $\dot w=BJ$, $J_{qr}=-J_{rq}$, and <a id="kin:nodal"></a>


$$
|J_{qr}|\le\frac2\hbar\|H_{qr}\|\sqrt{w_qw_r}.
 

$$

Equation (3.2).

 The same time variable is used by wave evolution, reaction generators and record clocks. No exposure-time change is made in the Bell limit. 

For a candidate jump process with actual one-time law $\rho$, actual mean flux is $\rho_r\lambda(q\mid r)$. The expression $w_r\lambda(q\mid r)$ is only a coherent-weighted candidate flux until initialization and equivariance are established. Relative to a complete history filtration, $X_{t-}$ is already definite; an intensity specifies the compensator 

$$

 N_{qr}(t)-\int_0^t1_{\{X_{s-}=r\}}\lambda_s(q\mid r)\,ds.

$$

 It is not the conditional probability of the current occupied sector. 

The complete finite-source state contains $\Psi$, connection–action pairs $(\chi_e,\Pi_e)$, exporter residues, queues, $N$ carrier positions, controllers, resource counters and all actual export, cancellation and reaction records. Further coordinates are added explicitly when they become active. The distinguished carrier supplies one projected incidence history. The other carriers are physical source constituents, not supplied copies of the unknown quantum input. 



<a id="section-3-2"></a>

## 3.2 A common canonical action

 The source field is a classical canonical complex amplitude. Introduce <a id="kin:action"></a>
<a id="kin:energy"></a>


$$
\begin{aligned}\mathcal S&=\int\left[\frac{i\hbar}{2}
 (\Psi^\dagger\dot\Psi-\dot\Psi^\dagger\Psi)
 +\hbar\sum_e\Pi_e\dot\chi_e-h(\Psi,\chi,t)\right]dt,
 \\
 h&=\sum_r\langle\Psi_r,H_{rr}\Psi_r\rangle+
 \sum_{e=(r,q)}\left(e^{i\chi_e}
 \langle\Psi_q,H_{qr}\Psi_r\rangle+\mathrm{c.c.}\right).
 
\end{aligned}
$$

Equation (3.3, 3.4).

 The absence of $\Pi$ from $h$ is exact passive charge ownership within this source action. It is a physical postulate, not a consequence of incomplete readout. Hamilton's equations give <a id="kin:torque"></a>


$$
i\hbar\dot\Psi=H(\chi,t)\Psi,\qquad \dot\chi_e=0,\qquad
 \dot\Pi_e=-\hbar^{-1}\partial_{\chi_e}h
 =\frac2\hbar\operatorname{Im}
 \left(e^{i\chi_e}\langle\Psi_q,H_{qr}\Psi_r\rangle\right).
 

$$

Equation (3.5).

 At the prepared connection $\chi=0$, this is $\dot\Pi=J$ for the same Hamiltonian that moves the coherent field. In particular $w-B\Pi$ is conserved. Bounded finite-dimensional $H$ gives a global solution on every finite horizon. For a time-independent programme $h$ is conserved; an external programme supplies work $\int\partial_t h\,dt$. 



**Theorem 3.1 (Primitive connection ownership).**

<a id="kin:ownership"></a> Suppose the source has the symplectic form in [(3.3)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:action), common canonical action unit $\hbar$, a real quadratic energy additive over individual vertices and primitive binary bonds, and no independent multi-bond interaction. Require physical endpoint covariance 

$$

 \Psi_r\mapsto e^{i\alpha_r}\Psi_r,\qquad
 \chi_{(r,q)}\mapsto\chi_{(r,q)}+\alpha_q-\alpha_r,

$$

 with bare $H_{qr}$ neutral and $h$ independent of $\Pi$. Fixing the coherent block $H_{qr}$ at $\chi_e=0$ fixes the bond torque there to $J_{qr}$, up to energy terms with zero bond torque. This class is nonempty. 

 

**Proof.**

A general binary cross term is $\langle\Psi_q,T_e(\chi_e)\Psi_r\rangle+\mathrm{c.c.}$. Covariance for every endpoint phase difference $\delta$ requires $T_e(\chi+\delta)=e^{i\delta}T_e(\chi)$, hence $T_e(\chi)=e^{i\chi}H_{qr}$. Endpoint-diagonal terms are connection independent. Differentiation in the canonical equation yields [(3.5)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:torque). Every finite Hermitian block matrix realizes these premises. No probability or carrier selector entered the calculation. 

□

 



**Counterexample 3.2 (A gauge-invariant force bypass).**

<a id="kin:loop"></a> On an oriented triangle let $\Theta=\chi_{12}+\chi_{23}+\chi_{31}$ and add $h_{\rm loop}=-\hbar k\|\Psi\|^2\sin\Theta$. This is gauge invariant. At $\chi=0$ it changes no coherent Hamiltonian, but adds $k$ to each clockwise action current. Its divergence is zero. Thus gauge invariance and vertex conservation alone do not identify the original Hamiltonian edge current. The primitive binary-additivity premise of Theorem [3.1](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:ownership) is the equation-level exclusion. 

 

The normalization has physical content as well. Replacing the symplectic term by $\hbar c_e\Pi_e\dot\chi_e$ gives $\dot\Pi_e=J_e/c_e$. The true conjugate action is $P_e=c_e\Pi_e$ and obeys $\dot P_e=J_e$. Counting fixed $P_e$ quanta retains calibration; counting raw $\Pi_e$ quanta changes the packet charge. 

Genuine coherent circulation must not be removed with this bypass. For 

$$

 \Psi=3^{-1/2}(1,1,1)^{\mathsf T},\qquad
 H=\frac{3\hbar j}{2}
 \begin{pmatrix}0&-i&i\\i&0&-i\\-i&i&0\end{pmatrix},\quad j>0,

$$

 one has $H\Psi=0$, constant $w_r=1/3$, and $J_{21}=J_{32}=J_{13}=j$. The meters advance on every bond. Minimizing activity subject only to stationary vertex weights would incorrectly replace this specified current by zero. 



<a id="section-3-3"></a>

## 3.3 Export without a production probability law

 Give each packet charge $1/N$. On each edge set $k_e(0)=u_e(0)=0$ and 

$$

 u_e=N(\Pi_e-\Pi_e(0))-k_e.

$$

 Between exports $\dot u_e=NJ_e$. At the first hit of $s\in\{-1,1\}$, perform the hybrid rewrite <a id="kin:exportrewrite"></a>


$$
(u_e,k_e,Z_e)\longmapsto(0,k_e+s,Z_e+s).
 

$$

Equation (3.6).

 $Z_e$ is a signed queue: an opposite arriving packet cancels an unexposed packet on that edge. Every lineage and cancellation is retained. The canonical $\Pi_e$ does not jump. The rewrite changes the decomposition of stored action into emitted charge and residue. 



**Proposition 3.3 (Conservative export estimate).**

<a id="kin:export"></a> Let $A_e^N=k_e/N$ and $L_e=\int_0^T|J_e|dt$. Then <a id="kin:exportbound"></a>


$$
\sup_{t\le T}\left|A_e^N(t)-\int_0^tJ_e(s)ds\right|\le N^{-1},
 \qquad \#\{\text{exports on }e\}\le NL_e.
 

$$

Equation (3.7).

 For an arbitrary initial $u_e(0)\in[-1,1]$, the discrepancy is at most $2/N$ and the activity bound gains at most one export. Such a residue may be correlated with an admitted initial history. 

 

**Proof.**

Conservation gives $A_e^N-\int J_e=-u_e/N$, or $(u_e(0)-u_e(t))/N$ with a nonzero initial residue. Each completed reset-to-reset excursion consumes at least $1/N$ of the total variation of $\Pi_e$. The first excursion from a nonzero residue costs at most one exception to this count. This also prevents export accumulation in finite time. 

□

 More generally, an exact conservation law $k_e/N+v_e=v_e(0)+\int J_e$ with $|v_e|\le C/N$ gives discrepancy $2C/N$. Under a uniform $O(N)$ elementary-activity budget, the kinetic proof below applies to this larger exporter class. Fixed packet charge, bounded storage and the hybrid rewrite are constitutive inputs; neither a particular packet-birth distribution nor a statistical self-averaging law is needed for signed production. 

A growing compound packet batch cannot obey this same accounting. If $\Pi$ is continuous and a compound export contains $K_N$ elementary charges, the residual jump has magnitude $K_N/N$. Bounded storage forces $K_N\le2C$. Thus the countermodels with $K_N=N/\mu_N\to\infty$ require a larger cell or an additional impulsive production force. Mere matching of conditional production means would not exclude them.
