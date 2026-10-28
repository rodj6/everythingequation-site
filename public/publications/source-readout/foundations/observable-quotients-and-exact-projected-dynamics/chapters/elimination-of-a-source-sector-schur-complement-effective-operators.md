# Elimination of a source sector: Schur-complement effective operators

<div id="sec:schur">

</div>

We now turn from state-space projection to *field-theoretic elimination*: the source variables split into a visible field $\varphi$ and a completion field $\chi$, and $\chi$ is removed by solving its own stationarity condition and substituting back. In the quadratic case this can be done exactly, and the result is a Schur complement.

<div class="assumption">

**Assumption 9.1**.

<div id="ass:schur">

</div>

$\mathcal{H}_{\varphi}$ and $\mathcal{H}_{\chi}$ are (real or complex) Hilbert spaces; $A\in\mathcal{B}(\mathcal{H}_{\varphi})$ and $C\in\mathcal{B}(\mathcal{H}_{\chi})$ are self-adjoint; $B\in\mathcal{B}(\mathcal{H}_{\chi},\mathcal{H}_{\varphi})$, with adjoint $B^{*}\in\mathcal{B}(\mathcal{H}_{\varphi},\mathcal{H}_{\chi})$; and $C$ is boundedly invertible, i.e. $C^{-1}\in\mathcal{B}(\mathcal{H}_{\chi})$ exists.

</div>

Define the quadratic action functional $$
S[\varphi,\chi]
:=\tfrac12\langle \varphi , A\varphi \rangle
+\operatorname{Re}\langle \varphi , B\chi \rangle
+\tfrac12\langle \chi , C\chi \rangle,
\qquad
(\varphi,\chi)\in\mathcal{H}_{\varphi}\times\mathcal{H}_{\chi}.\tag{9.1}$$ (In the real case $\operatorname{Re}$ is vacuous and we simply write $\langle \varphi , B\chi \rangle$; we keep it so that $S$ is real-valued in the complex case, which is what a physical action must be. Self-adjointness of $A$ and $C$ makes the first and third terms real automatically.)

<div class="theorem">

**Theorem 9.2** (Schur-complement effective action).

<div id="thm:schur">

</div>

*Under Assumption [9.1](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#ass:schur), for each fixed $\varphi\in\mathcal{H}_{\varphi}$ the stationarity condition $$
\frac{\partial S}{\partial\chi}=0
\qquad\Longleftrightarrow\qquad
C\chi+B^{*}\varphi=0\tag{9.2}$$ has the unique solution $$
\chi_{*}=\chi_{*}[\varphi]=-\,C^{-1}B^{*}\varphi ,\tag{9.3}$$ and substitution yields the exact reduced action $$
\boxed{\ \
S_{\mathrm{eff}}[\varphi]:=S[\varphi,\chi_{*}[\varphi]]
=\tfrac12\bigl\langle\varphi,\ \bigl(A-BC^{-1}B^{*}\bigr)\varphi\bigr\rangle .
\ \ }\tag{9.4}$$ The operator $A-BC^{-1}B^{*}\in\mathcal{B}(\mathcal{H}_{\varphi})$ is self-adjoint; it is the Schur complement of $C$ in the block operator matrix $\left(\begin{smallmatrix}A&B\\ B^{*}&C\end{smallmatrix}\right)$.*

</div>

<div class="proof">

*Proof.* *The $\chi$-equation.* Fix $\varphi$ and let $\delta\in\mathcal{H}_{\chi}$. Using $C=C^{*}$, $$\frac{d}{d\varepsilon}\bigg|_{\varepsilon=0}S[\varphi,\chi+\varepsilon\delta]
=\operatorname{Re}\langle \varphi , B\delta \rangle+\operatorname{Re}\langle \chi , C\delta \rangle
=\operatorname{Re}\langle B^{*}\varphi+C\chi , \delta \rangle .$$ (For the middle term: $\tfrac12\langle \chi+\varepsilon\delta , C(\chi+\varepsilon\delta) \rangle$ has $\varepsilon$-derivative at $0$ equal to $\tfrac12(\langle \delta , C\chi \rangle+\langle \chi , C\delta \rangle)=\operatorname{Re}\langle \chi , C\delta \rangle$ by self-adjointness.) This vanishes for all $\delta$ (taking also $i\delta$ in the complex case) iff $C\chi+B^{*}\varphi=0$, which is [(9.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chieq). As $C$ is boundedly invertible, the unique solution is [(9.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chistar), and $\chi_{*}$ depends boundedly and linearly on $\varphi$.

*Substitution.* Insert [(9.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chistar) into [(9.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:action). Term by term: $$\operatorname{Re}\langle \varphi , B\chi_{*} \rangle
=\operatorname{Re}\langle \varphi , -BC^{-1}B^{*}\varphi \rangle
=-\langle \varphi , BC^{-1}B^{*}\varphi \rangle,$$ the last step because $BC^{-1}B^{*}$ is self-adjoint: indeed $$(BC^{-1}B^{*})^{*}=B(C^{-1})^{*}B^{*}=B(C^{*})^{-1}B^{*}=BC^{-1}B^{*},$$ using $C^{*}=C$ and $(C^{-1})^{*}=(C^{*})^{-1}$, so that $\langle \varphi , BC^{-1}B^{*}\varphi \rangle$ is real. Next, $$\tfrac12\langle \chi_{*} , C\chi_{*} \rangle
=\tfrac12\langle -C^{-1}B^{*}\varphi , \,C\,(-C^{-1}B^{*}\varphi) \rangle
=\tfrac12\langle C^{-1}B^{*}\varphi , B^{*}\varphi \rangle
=\tfrac12\langle \varphi , BC^{-1}B^{*}\varphi \rangle,$$ where the last equality moves $B^{*}$ across as $B$ and uses self-adjointness of $C^{-1}$, which makes the quantity $\langle C^{-1}B^{*}\varphi , B^{*}\varphi \rangle$ real and equal to $\langle \varphi , BC^{-1}B^{*}\varphi \rangle$. Summing, $$S_{\mathrm{eff}}[\varphi]
=\tfrac12\langle \varphi , A\varphi \rangle
-\langle \varphi , BC^{-1}B^{*}\varphi \rangle
+\tfrac12\langle \varphi , BC^{-1}B^{*}\varphi \rangle
=\tfrac12\langle \varphi , \bigl(A-BC^{-1}B^{*}\bigr)\varphi \rangle,$$ which is [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff). Self-adjointness of $A-BC^{-1}B^{*}$ was verified above. ◻

</div>

<div class="remark">

*Remark 41* (Nonlocality of the effective operator).

<div id="rem:nonlocal">

</div>

The correction to the visible operator is $$
\Delta:=-\,BC^{-1}B^{*} ,\tag{9.5}$$ and it is derived, not postulated. What the theorem establishes is exactly the *form* of $\Delta$; whether $\Delta$ is nonlocal is a further question about the composed operator, and must not be read off from $C^{-1}$ alone. In field theory, when $\mathcal{H}_{\chi}$ is a space of functions on a spacetime region and $C$ is (the bounded realization of) a differential operator, $C^{-1}$ is an integral operator with a Green kernel $G(y,y')$, and $$(\Delta\varphi)(x)=-\int\!\!\int\!\!\int B(x,y)\,G(y,y')\,B^{*}(y',x')\,\varphi(x')\,dy\,dy'\,dx' .$$ This composition *can* be *nonlocal*: the effective equation for $\varphi$ at a point then involves $\varphi$ elsewhere, weighted by the Green function of the eliminated sector, even though the coupled source equations for $(\varphi,\chi)$ were strictly local.

The qualification is not pedantic, because nonlocality of $C^{-1}$ is *not* sufficient. The correction depends on the coupling as well: if $B=0$ there is no correction at all, and more generally $B$ may fail to couple to the nonlocal directions of $G$, or the two compositions $B$ and $B^{*}$ may conspire so that $BC^{-1}B^{*}$ collapses to a local (e.g. multiplication or differential) operator. A concrete instance: if $B$ is a rank-one coupling $B=\lvert f\rangle\langle h\rvert$, then $BC^{-1}B^{*}=\langle h , C^{-1}h \rangle\,\lvert f\rangle\langle f\rvert$, whose kernel is the product $\overline{f(x')}f(x)$ times a single scalar, the whole Green function $G$ has entered only through the number $\langle h , C^{-1}h \rangle$. We stress what this example does and does not show. The rank-one operator $\lvert f\rangle\langle f\rvert$ is itself generally *nonlocal* (its kernel $\overline{f(x')}f(x)$ does not concentrate on the diagonal), so the example does not exhibit a local effective operator; what it exhibits is that the detailed structure of $G$, the very thing one might expect to be imprinted on the correction, can collapse to a single number, leaving a correction whose nonlocal structure is dictated entirely by $B$ and not by the eliminated sector’s propagator. Nonlocality of the effective operator is therefore a property of $BC^{-1}B^{*}$, requiring that $B$ couple to the relevant Green-operator directions without cancellation; it is an additional verification, not a corollary of Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur).

Subject to that verification, elimination of a sector converts locality-with-extra-fields into nonlocality-with-fewer-fields, and there is an exact structural analogy with the memory kernel of Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected): there, eliminating $\mathcal{H}_{Q}$ converted a first-order ODE into an equation nonlocal *in time*, and there too the kernel $\mathcal{K}=PLQ\,e^{\tau QLQ}\,QLP$ can degenerate, it vanishes identically when $PLQ=0$ or $QLP=0$, so that nonlocality in time likewise depends on the couplings and not on the eliminated sector’s propagator alone. In both settings nonlocality is a possible price of the reduction, not an automatic one, and never a feature of the source.

</div>

<div class="remark">

*Remark 42* (Unbounded operators, and what would have to be supplied).

<div id="rem:unbddschur">

</div>

Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) is stated for *bounded* $A$, $B$, $C$ with $C$ boundedly invertible, and the proof uses boundedness at every step (in the differentiation, in the existence of $C^{-1}$ as a bounded operator, in the adjoint manipulations). It does *not* automatically cover the case where $A$ and $C$ are unbounded differential operators, which is the case of primary interest in field theory. To extend it one must supply, and verify: a common dense domain, or a formulation in terms of closed, densely defined, semibounded quadratic forms with form domains \[[7](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Kato), Ch. VI\]; boundary conditions making $C$ self-adjoint and rendering the integration by parts in the variation legitimate; invertibility of $C$ (equivalently, that $0\notin\sigma(C)$, which fails whenever the eliminated sector has zero modes, e.g. a massless field on a compact region with the wrong boundary conditions); and the boundedness of $C^{-1}$ from the form dual back to the form domain, so that $BC^{-1}B^{*}$ is defined on the form domain of $A$. None of this follows from the bounded proof, and we do not assert it here. Where the physics literature performs such eliminations with unbounded operators, the Green operator $C^{-1}=G$ is being used, and the validity of the manipulation is exactly the validity of the associated elliptic/hyperbolic solvability theory, which must be supplied case by case.

</div>

<div class="remark">

*Remark 43* (Tree level, not the quantum effective action).

<div id="rem:treelevel">

</div>

Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) is a statement of *classical stationary elimination*: $\chi$ is replaced by the solution of its classical field equation [(9.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chieq). Equivalently, in a functional-integral language, [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff) is the tree-level (saddle-point) contribution. It is *not* the quantum effective action for $\varphi$. Integrating $\chi$ out of a Gaussian functional integral with weight $e^{iS[\varphi,\chi]}$ produces, in addition to [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff), a $\varphi$-independent determinant factor $(\det C)^{-1/2}$; if $C$ depends on $\varphi$ (a nonquadratic coupling, absent from Assumption [9.1](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#ass:schur)) the determinant becomes $\varphi$-dependent and contributes a genuine one-loop term $\tfrac{i}{2}\operatorname{Tr}\log C[\varphi]$; and beyond one loop there are further corrections \[[12](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Peskin), [17](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Weinberg2)\]. Nothing in Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) computes or bounds these. The theorem is exactly what it says: substitution of a stationary point into a quadratic functional.

</div>
