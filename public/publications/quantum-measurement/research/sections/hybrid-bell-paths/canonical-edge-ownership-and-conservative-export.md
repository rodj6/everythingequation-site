# Section 3: Canonical edge ownership and conservative export

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-3"></a>

## 3 Canonical edge ownership and conservative export

<a id="sec:source"></a> Use the common action <a id="eq:action"></a>


$$
\begin{aligned}S&=\int\left[\frac{i\hbar}{2}(\Psi^\dagger\dot\Psi-\dot\Psi^\dagger\Psi)
       +\hbar\sum_e\Pi_e\dot\chi_e-h(\Psi,\chi,t)\right]{\,\mathrm d} t,\\
 h&=\sum_r\Psi_r^*H_{rr}\Psi_r+
    \sum_{e=(r,q)}\left(e^{i\chi_e}\Psi_q^*H_{qr}\Psi_r+\mathrm{c.c.}\right).
 
\end{aligned}
$$

Equation (3, 4).

 Block sectors can replace scalars throughout with their inner products. Passive connection ownership means that $h$ has no $\Pi$ dependence. At $\chi(0)=0$, Hamilton's equations give <a id="eq:ownership"></a>


$$
i\hbar\dot\Psi=H\Psi,\qquad \dot\chi=0,\qquad
 \dot\Pi_e=-\hbar^{-1}\partial_{\chi_e}h=J_e,\qquad \dot w=BJ.
 

$$

Equation (5).





**Proposition 3.1 (Primitive bond ownership).**

 Within real quadratic energies additive over single vertices and primitive binary bonds, with the displayed canonical action unit and endpoint covariance 

$$

 \Psi_r\mapsto e^{i\alpha_r}\Psi_r,\qquad
 \chi_e\mapsto\chi_e+\alpha_q-\alpha_r,

$$

 fixing $H_{qr}$ at $\chi=0$ fixes its bond torque to $J_e$. 

 

**Proof.**

A binary cross term is $\Psi_q^*T_e(\chi_e)\Psi_r+\mathrm{c.c.}$. Covariance gives $T_e(\chi+\delta)=e^{i\delta}T_e(\chi)$, so $T_e(\chi)=e^{i\chi}H_{qr}$. Differentiate the action. Vertex-diagonal terms have zero bond torque. Every finite Hermitian $H$ supplies a realization. 

□

 The assumptions matter. A triangle term $-\hbar k\|\Psi\|^2\sin(\chi_{12}+\chi_{23}+\chi_{31})$ is gauge invariant and gives an additional divergence-free action current $k$ at $\chi=0$ while changing no coherent Hamiltonian there. Primitive bond additivity excludes this concrete rival. Gauge invariance alone does not. The conserved source moment map has sign $B\Pi-w$.

Take $k_e(0)=u_e(0)=0$ and $u_e=N(\Pi_e-\Pi_e(0))-k_e$. At a first hit $u_e=s\in\{-1,1\}$, put a packet of species $s$ in the next unused slot, mark its dedicated exporter blank/fuel cell spent with the retained sign and slot identifier, advance $k_e$ by $s$, and set $u_e$ to zero. Both species may remain simultaneously present. No cancellation is part of export. Tie events use a fixed ordering; gas ties with deterministic export times have probability zero. If $L_e\ge\int_0^T|J_e|{\,\mathrm d} t$, then <a id="eq:export"></a>


$$
\left\|\frac{k_e}{N}-\int_0^\cdot J_e{\,\mathrm d} t\right\|_\infty\le\frac1N,
 \qquad \#\mathrm{exports}_e\le NL_e.
 

$$

Equation (6).

 Indeed the first error is $-u_e/N$ and each full excursion consumes at least $1/N$ of action variation. For an admissible nonzero initial residue $|u_e(0)|<1$, use $u_e(t)=u_e(0)+N(\Pi_e(t)-\Pi_e(0))-k_e(t)$. The export discrepancy is then at most $2/N$, with at most one extra birth. Choose $B_e=\lceil NL_e\rceil+1$ slots before the experiment. A bound from $H,T$ alone can be used, so the apparatus need not know an unknown input vector. The exporter uses finite increments of a canonical coordinate; it does not evaluate the Bell escape rate or supply a stochastic production clock.
