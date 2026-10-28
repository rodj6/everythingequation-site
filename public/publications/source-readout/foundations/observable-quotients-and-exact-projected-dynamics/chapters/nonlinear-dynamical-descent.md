# Nonlinear dynamical descent

<div id="sec:nonlinear">

</div>

The criterion $PLQ=0$ has an exact nonlinear counterpart, obtained by replacing the linear quotient map by a surjective submersion and the linear generator by a smooth vector field.

<div class="assumption">

**Assumption 8.1**.

<div id="ass:submersion">

</div>

$S$ and $T$ are smooth manifolds, $p:S\to T$ is a smooth *surjective submersion* (so $Dp_{s}:T_{s}S\to T_{p(s)}T$ is surjective for every $s\in S$, and $p$ is onto), and $X$ is a smooth vector field on $S$.

</div>

The hypothesis that $p$ be a surjective submersion is not cosmetic. It guarantees (i) that $T$ is a genuine smooth manifold and $p^{-1}(t)$ an embedded submanifold for each $t$, and (ii) the existence of smooth local sections, which is what makes the smoothness argument in Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable) work. We make no claim about arbitrary set-theoretic quotients: a quotient of a manifold by an arbitrary equivalence relation need not be a smooth manifold at all, and nothing below should be read as asserting otherwise.

<div class="theorem">

**Theorem 8.2** (Nonlinear projectability criterion).

<div id="thm:projectable">

</div>

*Under Assumption [8.1](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#ass:submersion), there exists a smooth vector field $Y$ on $T$ with $$
Dp\circ X=Y\circ p ,
\qquad\text{i.e.}\qquad
Dp_{s}X_{s}=Y_{p(s)}\ \ \text{for every }s\in S,\tag{8.1}$$ if and only if $Dp$ applied to $X$ is constant along every fiber: $$
p(s)=p(s')\ \Longrightarrow\ Dp_{s}X_{s}=Dp_{s'}X_{s'}
\qquad\text{in }T_{p(s)}T .\tag{8.2}$$ When it exists, $Y$ is unique.*

</div>

<div class="proof">

*Proof.* *Necessity.* Suppose $Y$ exists and $p(s)=p(s')=:t$. Then by [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel), $Dp_{s}X_{s}=Y_{t}=Dp_{s'}X_{s'}$, and both sides lie in the same tangent space $T_{t}T$, so [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) holds.

*Sufficiency.* Assume [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst). For $t\in T$, use surjectivity of $p$ to pick $s\in p^{-1}(t)$ and define $$
Y_{t}:=Dp_{s}X_{s}\ \in T_{t}T .\tag{8.3}$$ By [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) this is independent of the chosen $s\in p^{-1}(t)$, so $Y:T\to TT$ is a well-defined section of $TT$: $Y_{t}\in T_{t}T$ by construction. Equation [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel) holds by definition.

*Smoothness.* Fix $t_{0}\in T$ and $s_{0}\in p^{-1}(t_{0})$. Because $p$ is a submersion, the local normal form for submersions \[[8](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Lee), Thm. 4.12\] provides an open neighbourhood $W\ni t_{0}$ in $T$ and a smooth local section $\sigma:W\to S$ with $p\circ\sigma=\mathrm{id}_{W}$ and $\sigma(t_{0})=s_{0}$. On $W$ we then have, from [(8.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:Ydef) applied with $s=\sigma(t)\in p^{-1}(t)$, $$
Y|_{W}=Dp\circ X\circ\sigma ,\tag{8.4}$$ which is a composition of smooth maps ($\sigma$ smooth, $X$ smooth as a section of $TS$, $Dp:TS\to TT$ smooth as the tangent map of a smooth map), hence smooth on $W$. Different choices of section give the same $Y$ on the overlap by fiber constancy [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst), so these local formulas patch to a globally well-defined smooth field. Since $t_{0}$ was arbitrary, $Y$ is smooth on $T$.

*Uniqueness.* If $Y$ and $Y'$ both satisfy [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel), then for any $t\in T$ pick $s\in p^{-1}(t)$ (possible by surjectivity); then $Y_{t}=Dp_{s}X_{s}=Y'_{t}$. ◻

</div>

<div class="remark">

*Remark 38* (The nonlinear analogue of $PLQ\neq0$).

<div id="rem:nonlinear">

</div>

Failure of [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) says: there are two source states $s,s'$ with the *same* readout $p(s)=p(s')$ whose projected velocities $Dp_{s}X_{s}\neq Dp_{s'}X_{s'}$ differ. This is verbatim the phenomenon of Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure), where $p$ is the linear map $P$, the fibers are the affine subspaces $x_{0}+\mathcal{H}_{Q}$, and the projected velocity at $x_{0}+z_{0}$ is $PL(x_{0}+z_{0})=PLP\,x_{0}+PLQ\,z_{0}$, which is fiber-constant precisely when $PLQ=0$. Thus the linear closure criterion is the linearization, and $\href{#eq:fiberconst}{(8.2)}$ its exact generalization: *the flow descends to the observable manifold exactly when equal present readouts force equal projected velocities.* Nothing in Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable) produces a memory kernel; in the nonlinear setting the exact reduction identity of Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected) has no elementary counterpart, and the theorem should be read as supplying only the sharp criterion for descent, not a reduction formula.

</div>
