# Section 2: Probability and complete record observables

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-2"></a>

## 2 Probability and complete record observables

 For a spinor $\Psi$, put $\rho=\Psi^\dagger\Psi$ and $j_k=(\hbar/m_k)\Im(\Psi^\dagger\partial_k\Psi)$ in physical coordinates. Internal projectors label wave components; they are not independently sampled configuration bits. The wave measure and the actual initial law $\nu_0$ are distinct. A bound $\nu_0\le C\rho_0{\,\mathrm d} q$ transports under the same conservative equivariant flow, and implies ${\mathbb E}_{\nu_0}F\le C{\mathbb E}_{\rho_0}F$ for every nonnegative path functional $F$. It does not establish equilibrium or domination by an analytical comparison wave.

We use ${\operatorname{TV}}(P,Q)=\sup_A|P(A)-Q(A)|$. Fix an earlier label $L\in\{0,1,\dagger\}$, a compact holding interval $I$, and disjoint closed pointer regions $R_0,R_1$. For a continuous pointer trajectory define $K_i=\{t\in I:Z_t\in R_i\}$, allowing the empty compact set, and 

$$

 Y=(L,K_0,K_1),\qquad
 \iota(0)=(0,I,\varnothing),\quad
 \iota(1)=(1,\varnothing,I).

$$

 The random compact sets give a measurable representation of the entire symbolic record; no unwarranted càdlàg assumption on a thresholded path is needed. For example, avoidance of a compact time set $J$ is the condition $\min_{t\in J}\operatorname{dist}(Z_t,R_i)>0$, a measurable condition on continuous paths. Countable rational interval approximations generate the corresponding compact-set sigma-field. A visit outside both record regions, however brief, counts as failure. Undefined $L$ also counts as failure.



**Lemma 2.1 (Direct ideal-record composition).**

<a id="lem:joint"></a> Let $L_*$ be a binary reference on the same coupling. Suppose $E,A,B$ are events such that outside $E\cup A$, $L=L_*$, and outside $E\cup B$ the entire actual record is the constant record of the defined label $L$. If ${\operatorname{TV}}(\mathcal L(L_*),\operatorname{Bernoulli}(p))\le e$, then 

$$

 {\operatorname{TV}}(\mathcal L(Y),(\iota)_*\operatorname{Bernoulli}(p))
 \le {\mathbb P}(E)+{\mathbb P}(A)+{\mathbb P}(B)+e.

$$

 

 

**Proof.**

On the complement of the three events, $Y=\iota(L_*)$. The coupling inequality bounds the distance to $\mathcal L(\iota(L_*))$ by the union probability; pushforward contracts the remaining distance. This proves the claim, including undefined outcomes. Shared events are paid once because their identity is established, not by subtracting unrelated upper bounds. 

□



A comparison to an imperfect reference's entire path is a different statement: its own history failure generally must be paid as well. Likewise, conditioning on a rare successful event may amplify error. If ${\operatorname{TV}}(P,Q)\le\epsilon$ and $P(E)>\epsilon$, then the elementary normalization bound is ${\operatorname{TV}}(P(\cdot\mid E),Q(\cdot\mid E))
\le\min(1,2\epsilon/P(E))$. No conditional conclusion is asserted for zero-probability branches.



<a id="section-2-1"></a>

### 2.1 Why absolute current is indispensable

 For real even normalized functions $g,h$, the wave $\Psi(x,y)=g(x)h(y)e^{ikxy}$ has $j_x(0,y)=(\hbar k/m)y g(0)^2h(y)^2$. Its signed hidden-coordinate integral vanishes, whereas $\int |j_x(0,y)|{\,\mathrm d} y>0$ when $k\ne0$. Thus averaging before taking the modulus can erase the quantity that bounds crossings. The record estimates below take the full-configuration absolute value first. This example diagnoses an invalid inference, not a no-go theorem for either apparatus.
