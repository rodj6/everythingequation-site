# Section 7: Conservation of complete information and operational sealing

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-7"></a>

## 7 Conservation of complete information and operational sealing

 <a id="op:conservation"></a>

For a class $\mathcal F$ of measurable tests $f:X\to[0,1]$, define 

$$

 d_{\mathcal F}(P,Q)
 =\sup_{f\in\mathcal F}\left|\int f\,d(P-Q)\right|.

$$

 Complete measurable access gives total variation. If the observer only reads $\pi:X\to Y$, the class of tests $g\circ\pi$, with all measurable $0\le g\le1$, gives ${\mathrm{TV}}(\pi_*P,\pi_*Q)$. For more restricted apparatus $\mathcal F$ may be smaller still.

<a id="source-theorem-6"></a>

**Theorem 7.1 (Transport of accessible distinguishability).**

 <a id="op:transport"></a> 

*Status: Proved.*

 For a measurable evolution $\Phi:X_0\to X_1$ and an accessible test class $\mathcal F_1$, 

$$

 d_{\mathcal F_1}(\Phi_*P,\Phi_*Q)
 =d_{\Phi^*\mathcal F_1}(P,Q),\qquad
 \Phi^*\mathcal F_1=\{f\circ\Phi:f\in\mathcal F_1\}.

$$

 Consequently $\Phi^*\mathcal F_1=\mathcal F_0$ ensures conservation of accessible distinguishability; inclusion in $\mathcal F_0$ ensures contraction, and reverse inclusion ensures nondecrease. For a bimeasurable bijection with complete measurable access, 

$$

 {\mathrm{TV}}(\Phi_*P,\Phi_*Q)={\mathrm{TV}}(P,Q).

$$

 No corresponding conservation follows for a restricted observation class from invertibility alone. 



<a id="source-proof-22"></a>

**Proof.**

For each test, change of variables gives $\int f\,d(\Phi_*P-\Phi_*Q)=\int(f\circ\Phi)\,d(P-Q)$. Taking the relevant suprema proves the identity and inclusions. A bimeasurable bijection permutes the class of all measurable bounded tests, proving the total-variation identity. 

□





<a id="paragraph-15"></a>

#### A finite reversible counterexample.

 Let $X=\{0,1\}^2$, observe $\pi(x,y)=x$, and let $\Phi(x,y)=(y,x)$. Let $U$ be the fair-bit law and put $P_b=\delta_b\otimes U$, $b=0,1$. Initially the accessible laws are $\delta_0$ and $\delta_1$, at total variation one. After the swap, $\Phi_*P_b=U\otimes\delta_b$, and the accessible laws coincide exactly, although the complete laws remain at total variation one. Thus reversible dynamics can create exact *snapshot* sealing of a preparation family. Applying the swap again restores the distinction.



<a id="paragraph-16"></a>

#### Persistent forward sealing under reversible dynamics.

 The distinction is not confined to a one-time coincidence. Take $X=\{0,1\}^{\mathbb Z}$ with its product sigma-algebra, fair product equilibrium $E$, and the invertible shift $(\Phi x)_j=x_{j-1}$. The observer reads coordinate zero and may choose future observation times but cannot reverse the shift or read other coordinates. For $|a|\le1$, let 

$$

 \frac{dP_a}{dE}(x)=1+a(2x_0-1).

$$

 Initially the observed bit differs from equilibrium by $|a|/2$ in total variation. For every integer $n\ge1$, the entire future output sequence is $(x_{-n},x_{-n-1},\ldots)$, whose law under $P_a$ is the same fair product law as under $E$. Every allowed future adaptive observation therefore has the same law. Nevertheless ${\mathrm{TV}}(\Phi_*^nP_a,E)=|a|/2$ at every time. The omitted distinction has moved into an inaccessible coordinate, and exact forward operational sealing coexists with reversible equilibrium-preserving source dynamics.



<a id="paragraph-17"></a>

#### What retained records prevent.

 If an observer retains the earlier record, the cumulative record at a later time has that record as a measurable marginal. Data processing then gives 

$$

 {\mathrm{TV}}(P_{\text{earlier record}},Q_{\text{earlier record}})
 \le {\mathrm{TV}}(P_{\text{complete retained record}},Q_{\text{complete retained record}}).

$$

 The examples concern future access after the original distinction has been discarded or never archived. They do not erase an actually retained record. Likewise, if implementing $\Phi^{-1}$ is an admissible operation, the original tests can be recovered and complete operational sealing of their distinction is impossible. Mathematical existence of an inverse is not physical access to that inverse.

For a Bohmian flow that is bimeasurably invertible on an equilibrium full-measure invariant domain, and a nonequilibrium initial law $P_0\ll E_0$, equivariance gives ${\mathrm{TV}}(P_t,E_t)={\mathrm{TV}}(P_0,E_0)$. This conserves fine-grained nonequilibrium; it neither forbids observable relaxation nor proves any record is able to reveal the surviving difference. Existence and equivariance alone must be supplemented by the flow's uniqueness and measurable inverse on the relevant domain to invoke the equality. The distinction between fine-grained conservation and coarse-grained relaxation is standard in pilot-wave relaxation analyses. In particular, invertible dynamics can create operational sealing; Theorem [7.1](/sealed-or-leaky/conservation-of-complete-information-and-operational-sealing#op:transport) states the exact access condition.
