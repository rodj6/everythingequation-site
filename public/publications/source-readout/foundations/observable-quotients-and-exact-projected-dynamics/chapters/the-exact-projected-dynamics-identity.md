# The exact projected-dynamics identity

<div id="sec:projection">

</div>

<div class="assumption">

**Assumption 6.1**.

<div id="ass:proj">

</div>

For the remainder of Sections [6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion): $\mathcal{H}$ is a Hilbert space; $P\in\mathcal{B}(\mathcal{H})$ is an orthogonal projection onto a closed *resolved* subspace $\mathcal{H}_{P}:=P\mathcal{H}$; $Q:=I-P$ is the orthogonal projection onto the *unresolved* subspace $\mathcal{H}_{Q}:=Q\mathcal{H}$; and $L\in\mathcal{B}(\mathcal{H})$ generates the source evolution $$
\dot\Psi(t)=L\Psi(t),
\qquad
\Psi(0)=\Psi_{0}\in\mathcal{H},\tag{6.1}$$ whose unique solution is $\Psi(t)=e^{tL}\Psi_{0}$.

</div>

This is the case $K=P$ of the previous section: the readout literally *is* the resolved component, $\mathcal{H}_{\mathrm{obs}}=\mathcal{H}_{P}$, $\operatorname{Ran}P=\mathcal{H}_{P}$ is closed, and $\ker P=\mathcal{H}_{Q}$. It is the setting in which the cost of failed descent can be computed in closed form. Write $$
x(t):=P\Psi(t)\in\mathcal{H}_{P},
\qquad
z(t):=Q\Psi(t)\in\mathcal{H}_{Q},\tag{6.2}$$ so that $\Psi(t)=x(t)+z(t)$ and $x(0)=P\Psi_{0}$, $z(0)=:z_{0}=Q\Psi_{0}$. Applying $P$ and $Q$ to [(6.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:sourceeq) and inserting $I=P+Q$ gives the exact block system $$\begin{aligned}
\dot x(t)&=PLP\,x(t)+PLQ\,z(t),\qquad\text{(6.3)}\\
\dot z(t)&=QLP\,x(t)+QLQ\,z(t).\qquad\text{(6.4)}
\end{aligned}$$ Note that $PLQ:\mathcal{H}_{Q}\to\mathcal{H}_{P}$ measures precisely how the unresolved sector drives the resolved one, and $QLP:\mathcal{H}_{P}\to\mathcal{H}_{Q}$ how the resolved sector feeds back into the unresolved one.

<div class="theorem">

**Theorem 6.2** (Exact projected-dynamics equation).

<div id="thm:projected">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj), for every source initial state $\Psi_{0}=x(0)+z_{0}$ the resolved component $x(t)=Pe^{tL}\Psi_{0}$ satisfies, for all $t\ge0$, $$
\boxed{\ \
\dot x(t)
=PLP\,x(t)
\;+\;PLQ\,e^{tQLQ}z_{0}
\;+\;\int_{0}^{t}PLQ\,e^{(t-s)QLQ}\,QLP\,x(s)\,ds .
\ \ }\tag{6.5}$$ Defining the *unresolved-initial-state term* $$
\eta_{z_{0}}(t):=PLQ\,e^{tQLQ}z_{0}\ \in\mathcal{H}_{P}\tag{6.6}$$ and the *memory kernel* $$
\mathcal{K}(\tau):=PLQ\,e^{\tau QLQ}\,QLP\ \in\mathcal{B}(\mathcal{H}_{P}),\tag{6.7}$$ equation [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) reads $$
\dot x(t)=PLP\,x(t)+\eta_{z_{0}}(t)+\int_{0}^{t}\mathcal{K}(t-s)\,x(s)\,ds .\tag{6.8}$$ Both $\eta_{z_{0}}$ and $\mathcal{K}$ are continuous in $t$, with the bounds $\lVert\eta_{z_{0}}(t)\rVert\le\lVert PLQ\rVert\,e^{t\lVert QLQ\rVert}\lVert z_{0}\rVert$ and $\lVert\mathcal{K}(\tau)\rVert_{\mathrm{op}}\le\lVert PLQ\rVert\,\lVert QLP\rVert\,e^{\tau\lVert QLQ\rVert}$.*

</div>

<div class="proof">

*Proof.* Equation [(6.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockz) is an inhomogeneous linear ODE in the Banach space $\mathcal{H}_{Q}$ with bounded generator $QLQ\in\mathcal{B}(\mathcal{H}_{Q})$ and continuous inhomogeneity $t\mapsto QLP\,x(t)$ (continuous because $t\mapsto e^{tL}\Psi_{0}$ is norm-continuous and $QLP$ is bounded). Variation of constants gives the unique solution $$
z(t)=e^{tQLQ}z_{0}+\int_{0}^{t}e^{(t-s)QLQ}\,QLP\,x(s)\,ds ,\tag{6.9}$$ the integral being a Riemann (equivalently Bochner) integral of a continuous $\mathcal{H}_{Q}$-valued integrand. Indeed, put $w(t):=e^{-tQLQ}z(t)$; then $w$ is differentiable with $\dot w(t)=e^{-tQLQ}\bigl(\dot z(t)-QLQ\,z(t)\bigr)=e^{-tQLQ}QLP\,x(t)$ by [(6.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockz), and integrating from $0$ to $t$ and multiplying by $e^{tQLQ}$ yields [(6.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:duhamel). Uniqueness holds because the difference of two solutions solves the homogeneous equation with zero data.

Substituting [(6.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:duhamel) into [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) and applying the bounded operator $PLQ$ under the integral sign gives $$\dot x(t)
=PLP\,x(t)
+PLQ\,e^{tQLQ}z_{0}
+\int_{0}^{t}PLQ\,e^{(t-s)QLQ}\,QLP\,x(s)\,ds ,$$ which is [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ); [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is a rewriting using [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta) and [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem), noting $\mathcal{K}(t-s)$ has argument $t-s\ge0$ throughout the integration range. The stated bounds follow from $\lVert e^{\tau QLQ}\rVert_{\mathrm{op}}\le e^{\tau\lVert QLQ\rVert}$ and submultiplicativity; continuity in $t$ follows from norm-continuity of $\tau\mapsto e^{\tau QLQ}$. ◻

</div>

<div class="remark">

*Remark 24* (What [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) is, and what it is not).

<div id="rem:MZ">

</div>

Equation [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) is an *identity*, valid for every source solution, obtained by nothing more than variation of constants. It is the projection-operator identity of Mori and Zwanzig \[[20](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig1960), [10](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mori1965), [21](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig2001)\] in the special case of a bounded generator and an orthogonal projection. In that literature the second term is often called the “fluctuating force” or “noise”, and $\mathcal{K}$ the “friction kernel”. We use neither word without qualification, and we record explicitly what has *not* been done here:

1.  *$\eta_{z_{0}}$ is not stochastic.* It is a deterministic, linear, continuous function of the single vector $z_{0}\in\mathcal{H}_{Q}$, given by the closed formula [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta). It becomes a random process only if one additionally posits a probability measure on the unresolved initial data, an equilibrium ensemble, say, and that is an extra modelling hypothesis with its own physical content. We impose no such measure.

2.  *$\mathcal{K}$ is not a friction coefficient.* It is the exact kernel [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem). No fluctuation–dissipation relation has been derived, because no ensemble has been introduced with respect to which one could be stated.

3.  *No Markov approximation has been made.* The convolution in [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is over the entire history $[0,t]$. Replacing $\mathcal{K}$ by $\delta$-correlated kernel, or taking a timescale-separation limit, would produce a different (approximate) equation; we take no such limit.

4.  *No ensemble average or coarse-graining functional appears.* $P$ is an orthogonal projection on a Hilbert space, chosen by the modeller, and nothing else.

The physical content of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is therefore modest and exact: if the resolved sector does not close, then the resolved trajectory is determined by resolved initial data *plus* an inhomogeneity carrying unresolved initial data *plus* a convolution over its own past. These are three structurally distinct dependences, and [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) says they are the only ones.

</div>

<div class="theorem">

**Theorem 6.4** (Autonomous-closure criterion).

<div id="thm:closure">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj), the following are equivalent.*

1.  *There exists a single operator $Y\in\mathcal{B}(\mathcal{H}_{P})$ such that, *for every* source initial state $\Psi_{0}\in\mathcal{H}$, that is, for every $x(0)\in\mathcal{H}_{P}$ and every $z_{0}\in\mathcal{H}_{Q}$, the resolved component $x(t)=Pe^{tL}\Psi_{0}$ satisfies the autonomous first-order equation $$
    \dot x(t)=Y\,x(t),\qquad t\ge0 .\tag{6.10}$$*

2.  *$PLQ=0$.*

3.  *$L(\ker P)\subseteq\ker P$, i.e. $L\,\mathcal{H}_{Q}\subseteq\mathcal{H}_{Q}$.*

*When they hold, $Y=PLP|_{\mathcal{H}_{P}}$ is unique, and both $\eta_{z_{0}}\equiv0$ (for every $z_{0}$) and $\mathcal{K}\equiv0$.*

</div>

<div class="proof">

*Proof.* *(2)$\Rightarrow$(1) and the value of $Y$.* If $PLQ=0$ then [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) reduces immediately to $\dot x(t)=PLP\,x(t)$ for every source solution, which is [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) with $Y=PLP|_{\mathcal{H}_{P}}$. Moreover $\eta_{z_{0}}(t)=PLQ\,e^{tQLQ}z_{0}=0$ for all $t$ and all $z_{0}$, and $\mathcal{K}(\tau)=PLQ\,e^{\tau QLQ}QLP=0$, so the last two terms of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) vanish identically, consistently.

*(1)$\Rightarrow$(2).* This is where the quantifier “for every source initial state” does the work. Fix any $x_{0}\in\mathcal{H}_{P}$ and any two unresolved data $z_{0},z_{0}'\in\mathcal{H}_{Q}$. The two source initial states $\Psi_{0}=x_{0}+z_{0}$ and $\Psi_{0}'=x_{0}+z_{0}'$ have the same resolved component $x(0)=x'(0)=x_{0}$. By hypothesis both resolved trajectories obey [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) with the *same* $Y$, so evaluating at $t=0$, $$\dot x(0)=Y x_{0}=\dot x'(0).$$ On the other hand [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) at $t=0$ gives the true initial velocities $$\dot x(0)=PLP\,x_{0}+PLQ\,z_{0},
\qquad
\dot x'(0)=PLP\,x_{0}+PLQ\,z_{0}' .$$ Equating and cancelling $PLP\,x_{0}$ yields $PLQ\,(z_{0}-z_{0}')=0$. Since $z_{0},z_{0}'$ range over all of $\mathcal{H}_{Q}$, the difference $z_{0}-z_{0}'$ ranges over all of $\mathcal{H}_{Q}$, whence $PLQ=0$ as an operator $\mathcal{H}_{Q}\to\mathcal{H}_{P}$. Taking $z_{0}=0$ in [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) and [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) then forces $Yx_{0}=PLP\,x_{0}$ for all $x_{0}\in\mathcal{H}_{P}$, i.e. $Y=PLP|_{\mathcal{H}_{P}}$, which also gives uniqueness of $Y$.

*(2)$\Leftrightarrow$(3).* $\ker P=\mathcal{H}_{Q}=\operatorname{Ran}Q$. Now $L\mathcal{H}_{Q}\subseteq\mathcal{H}_{Q}$ means $PL\zeta=0$ for every $\zeta\in\mathcal{H}_{Q}$, i.e. $PLQ\Psi=0$ for every $\Psi\in\mathcal{H}$, i.e. $PLQ=0$. Conversely $PLQ=0$ gives $PL\zeta=PLQ\zeta=0$ for $\zeta\in\mathcal{H}_{Q}$, so $L\zeta=(P+Q)L\zeta=QL\zeta\in\mathcal{H}_{Q}$. ◻

</div>

<div class="remark">

*Remark 26* (The quantifier is not decorative).

<div id="rem:quantifier">

</div>

Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) is a statement about *all* source states. Three distinct weaker phenomena must not be mistaken for autonomous closure:

1.  *Closure on a prepared state.* If $z_{0}\in N_{Q}$, see [(7.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQ), then $\eta_{z_{0}}\equiv0$ and the *initial-state* term drops out *for that state*. The memory kernel $\mathcal{K}$ is unaffected: by [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem) it is determined by $L$ and $P$ alone and does not depend on $z_{0}$ at all, so no preparation of the unresolved initial data can remove it. The resolved motion of such a state is therefore still history-dependent, and other initial states fail even the weaker condition. Vanishing of the initial-state term in one specially prepared state is not closure.

2.  *Static quotient.* That $\mathcal{H}_{P}\cong\mathcal{H}/\mathcal{H}_{Q}$ is a perfectly good Hilbert space says nothing whatever about $PLQ$. This is (D1)/(D4) again.

3.  *Small singular values.* That $PLQ$ has small norm makes the coupling weak and may justify a perturbative approximation, with a controllable error. It does not make the projected equation autonomous, and no truncation of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is exact unless $PLQ=0$ identically. This is (D3)/(D4).

Finally, observe that Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)(3) is precisely the invariance condition [(5.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:LNN) of Proposition [5.5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#prop:bddgen) for the observation operator $K=P$, whose kernel is $\mathcal{H}_{Q}$. Theorems [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) and [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) therefore agree, as they must: the semigroup descends exactly when the projected equation closes.

</div>

<div class="example">

**Example 6.6** (A completely calculated block).

<div id="ex:block">

</div>

Take $\mathcal{H}=\mathbb{C}^{3}$ with the standard basis $e_{1},e_{2},e_{3}$, let $P$ project onto $\mathcal{H}_{P}=\mathop{\mathrm{span}}\{e_{1}\}$ and $Q$ onto $\mathcal{H}_{Q}=\mathop{\mathrm{span}}\{e_{2},e_{3}\}$, and let $$L=\begin{pmatrix} a & b_{1} & b_{2}\\ c_{1} & d & 0\\ c_{2} & 0 & \mu\end{pmatrix},$$ so that $$PLP=(a),\quad
PLQ=\begin{pmatrix}b_{1}&b_{2}\end{pmatrix},\quad
QLP=\begin{pmatrix}c_{1}\\ c_{2}\end{pmatrix},\quad
QLQ=\begin{pmatrix}d&0\\0&\mu\end{pmatrix},$$ with $d\neq\mu$. Write $x(t)\in\mathbb{C}$ for the resolved component and $z_{0}=(z_{0}^{(2)},z_{0}^{(3)})^{\mathsf T}$.

*(i) Same readout, different projected velocity.* Suppose $b_{1}\neq0$. The two source states $\Psi_{0}=x_{0}e_{1}$ and $\Psi_{0}'=x_{0}e_{1}+e_{2}$ have identical resolved component $x_{0}$, hence identical readout at $t=0$. By [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx), $$\dot x(0)=a x_{0},
\qquad
\dot x'(0)=a x_{0}+b_{1}\neq\dot x(0).$$ No autonomous law $\dot x=Yx$ can produce both, confirming Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure): here $PLQ=(b_{1}\ b_{2})\neq0$.

*(ii) The initial-state term and memory kernel.* Since $QLQ$ is diagonal, $e^{\tau QLQ}=\operatorname{diag}(e^{\tau d},e^{\tau\mu})$, and [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta), [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem) give in closed form $$\eta_{z_{0}}(t)=b_{1}e^{td}\,z_{0}^{(2)}+b_{2}e^{t\mu}\,z_{0}^{(3)},
\qquad
\mathcal{K}(\tau)=b_{1}c_{1}e^{\tau d}+b_{2}c_{2}e^{\tau\mu},$$ so the exact projected equation [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is the scalar Volterra equation $$\dot x(t)=a\,x(t)
+b_{1}e^{td}z_{0}^{(2)}+b_{2}e^{t\mu}z_{0}^{(3)}
+\int_{0}^{t}\Bigl(b_{1}c_{1}e^{(t-s)d}+b_{2}c_{2}e^{(t-s)\mu}\Bigr)x(s)\,ds .$$ Everything here is deterministic: $\eta_{z_{0}}$ is a sum of two exponentials with coefficients read off from $z_{0}$; there is no noise in sight.

*(iii) $N_{Q}$ and $E_{\mathrm{dyn}}$.* Here $m=\dim\mathcal{H}_{Q}=2$, so Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability) gives $N_{Q}=\ker(PLQ)\cap\ker(PLQ\cdot QLQ)$, i.e. the solutions of $$\begin{pmatrix} b_{1} & b_{2}\\ b_{1}d & b_{2}\mu\end{pmatrix}
\begin{pmatrix}z^{(2)}\\ z^{(3)}\end{pmatrix}=0 .$$ The observability matrix has determinant $b_{1}b_{2}(\mu-d)$. *Case A:* $b_{1},b_{2}\neq0$ and $d\neq\mu$. Then the determinant is nonzero, so $N_{Q}=\{0\}$ and $E_{\mathrm{dyn}}=\mathcal{H}_{Q}\cong\mathbb{C}^{2}$: both unresolved directions are dynamically distinguishable and must be retained. *Case B:* $b_{2}=0$, $b_{1}\neq0$. Then both rows are multiples of $(1\ 0)$, so $N_{Q}=\mathop{\mathrm{span}}\{e_{3}\}$ and $E_{\mathrm{dyn}}\cong\mathbb{C}$: the direction $e_{3}$ never influences the resolved trajectory through the initial-state term, and the minimal completion retains only $z^{(2)}$ (indeed $\mathcal{K}(\tau)=b_{1}c_{1}e^{\tau d}$ also loses its $e_3$ contribution). Note that $e_{3}$ is not dynamically trivial, it evolves as $e^{t\mu}$, it is merely *unobservable in the resolved response*, which is exactly the relativization Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal) makes precise.

</div>
