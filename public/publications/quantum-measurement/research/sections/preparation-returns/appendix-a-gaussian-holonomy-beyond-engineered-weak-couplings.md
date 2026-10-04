# Appendix A: Gaussian holonomy beyond engineered weak couplings

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-A"></a>

## A Gaussian holonomy beyond engineered weak couplings

<a id="app:general"></a>

This appendix proves the broader Gaussian statement used to place the principal theorem's restriction correctly. It also makes explicit why recurrence or a Lie-algebra calculation alone is insufficient for the exact claim.



**Theorem A.1 (Connected fixed quadratic networks).**

<a id="thm:general"></a> Let a positive harmonic holding matrix have nonzero off-block quadratic couplings on a connected graph of distinguishable particles. Assume full finite block-local quadratic controls, with no uniform amplitude ceiling. For any specified centered real positive Gaussian preparation with precision $A>0$, the physically implemented Gaussian ray returns, with the original holding Hamiltonian restored, have configuration group $SO(A)$. In whitened coordinates this is $SO(d)$. The original coupling strengths and frequencies need not be weak or commensurate. 





<a id="section-A-1"></a>

### A.1 An exact recurrent auxiliary seed



Retain all prescribed interparticle entries. Choose fixed within-particle off-diagonal trap entries so that the graph of nonzero scalar-coordinate entries is connected, and call the resulting off-diagonal matrix $C$. Diagonal local traps remain free. We need integer frequencies with suitable modal overlaps for ${\operatorname{diag}}(\lambda)+\delta C$.



**Lemma A.2 (Nonvanishing path coefficients).**

<a id="lem:paths"></a> For a connected scalar-coordinate graph and a fixed root $r$, positive integers $n_1,\ldots,n_d$ can be chosen so that the root frequencies of [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion)(i) are distinct and each eigenvector of ${\operatorname{diag}}(n_i^2)+\delta C$ has a nonzero component at $r$ for all sufficiently small nonzero $\delta$. 





**Proof.**

For distinct diagonal values $\lambda_i$, perturb the eigenvector of $\lambda_j$ with its $j$ component fixed to one. Iteration of the other component equations shows that the first possibly nonzero coefficient at $r$ has order $\delta^{\operatorname{dist}(r,j)}$ and equals <a id="eq:pathsum"></a>


$$

 \sum_{\substack{\pi:r\leadsto j\\\text{shortest paths}}}
 \frac{\prod_{\{a,b\}\in\pi}C_{ab}}
      {\prod_{v\in\pi,\ v\ne j}(\lambda_j-\lambda_v)} .

$$

Equation (A.1).

 It is a nonzero rational function of the diagonal values. To verify nonvanishing without assuming signs of the edges, fix one shortest path and its distinct vertex diagonals, and send all off-path diagonal values to infinity. A shortest path has no chord. Thus the only path term involving exclusively its vertices is the selected path; its nonzero product survives, whereas every other term vanishes in this limit.

Clear denominators in the finitely many expressions [(A.1)](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#eq:pathsum). Their nonzero numerator polynomials, the distinct-diagonal factors, and the finitely many forbidden frequency equalities have a nonzero product after the substitution $\lambda_i=n_i^2$. A nonzero polynomial cannot vanish on the entire positive integer lattice: induction on the number of variables reduces this to the finiteness of the roots of a nonzero univariate polynomial. Hence some integer tuple avoids every zero. The leading nonzero coefficients then prove the assertion for small $\delta$. 

□



Choose these integers. The diagonal retuning argument used in [section 5](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#sec:engineering) gives analytic functions $d_i(\delta)=n_i^2+O(\delta^2)$ for which ${\operatorname{diag}}(d_i(\delta))+\delta C$ has exactly the eigenvalues $n_i^2$. The $O(\delta^2)$ diagonal changes leave every leading $\delta^{\operatorname{dist}(r,j)}$ path coefficient unchanged, so the nonzero modal overlaps persist after retuning. For a sufficiently large finite positive integer $L$ set <a id="eq:stiffseed"></a>


$$

 K_* = L^2{\operatorname{diag}}(d_i(L^{-2}))+C .

$$

Equation (A.2).

 Its interparticle entries are the original fixed entries of $C$, its frequencies are exactly $Ln_i$, and it is positive. All required changes from the original holding matrix are one-body trap changes.

In the auxiliary variables $\tau=Lt$ and $x=\sqrt L\,q$, the Schrödinger equation for this seed has kinetic term $-\Delta_x/2$ and stiffness ${\operatorname{diag}}(d_i(\delta))+\delta C$ with $\delta=L^{-2}$. A dimensionless local control $\widehat D(\tau)$ is the actual physical control $D(t)=L^2\widehat D(Lt)$. This is a coordinate calculation specifying finite physical controls, not a change of the kinetic term or an operation on the pair interaction.

By [lemma A.2](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#lem:paths), the diagonal control at $r$ couples every modal pair. The squared-overlap matrix remains near the identity. Thus [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion) gives an identity neighborhood of exact symplectic endpoints at time $2\pi/L$. For each edge of a spanning tree of $C$, formula [(5.1)](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#eq:edgecurvature) gives a nonzero leading elementary rotation in these scaled coordinates. Its bracket-basis determinant remains nonzero for large finite $L$. The correction and exact group arguments of [proposition 4.2](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#prop:curvature), [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup) therefore prove $SO(d)$ configuration holonomy at the real ground Gaussian of $K_*$.



<a id="section-A-2"></a>

### A.2 Transport back to the original preparation





**Proof of [theorem A.1](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#thm:general).**

 Join the original positive holding matrix to $K_*$ by a smooth positive interpolation of its local blocks; convexity of the positive cone permits this. Let $\mathsf S_P$ be the known symplectic propagator of this history. At $K_*$ every symplectic matrix is exactly reachable with endpoint holding restored, by the identity-neighborhood argument after [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian). Choose a compensating endpoint $\mathsf S_{\mathrm{tar}}\mathsf S_P^{-1}$, where $\mathsf S_{\mathrm{tar}}={\operatorname{diag}}(Q,Q^{-T})$ and $Q=A_*^{-1/2}A^{1/2}$, with $A_*=K_*^{1/2}$. The combined history takes the original real Gaussian to the real ground Gaussian of $K_*$ modulo phase.

Its actual guided map is some global linear $L_P$ satisfying $L_P^TA_*L_P=A$, by [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). The real-endpoint time reversal gives a physical inverse map $L_P^{-1}$, restoring the original holding Hamiltonian. Conjugating the seed return group therefore gives $SO(A)$. Conversely every Gaussian ray return belongs to $SO(A)$ by [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). These transported loops return the designated ray; no claim that their full propagator is a phase times the identity is needed. 

□



For clarity, a useful general endpoint criterion is 

$$

 \operatorname{span}\{
   \operatorname{ad}_{\mathsf A(K)}^j\mathsf B(D):
     D\in{\mathcal D},\ 0\leq j<d(2d+1)\}
       =\mathfrak{sp}(2d,{\mathbb R}),
 \qquad
 \mathsf B(D)=\begin{pmatrix}0&0\\-D&0\end{pmatrix}.

$$

 It makes the endpoint differential onto on any nonempty time interval: an annihilating covector kills the analytic orbit $e^{-t\operatorname{ad}_{\mathsf A}}\mathsf B(D)$, hence all its Taylor coefficients; Cayley–Hamilton bounds the needed powers. This is a criterion for the derivative along the chosen reference, stronger than a bare dynamical Lie-algebra assertion.

If that reference is merely recurrent, submersion at time $T_0$ gives an endpoint neighborhood $\mathsf S_0(T_0)\exp B_\eta$. Append a holding wait to time $\tau>T_0$ for which $\mathsf S_0(\tau)$ is sufficiently close to $I$. The reachable set then contains $\mathsf S_0(\tau)\exp B_\eta$, which contains an exact neighborhood of $I$. This is how recurrence plus an open endpoint image can give exact reachability. Recurrence by itself supplies only approximations. In [(A.2)](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#eq:stiffseed) the recurrence is already exact, so no limiting protocol is used.
