# Appendix C: Record witnesses and quantitative limitations

<!-- Fixed Version 2 source. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="app:witness"></a> 

<a id="section-C-1"></a>

## C.1 Finite jet determination without an order bound

<a id="section:witness:finite-jet-determination-without-an-order-bound"></a> Let $W$ be a finite-dimensional real observable carrier and suppose each scalar expectation $s\mapsto\omega_s(A)$ is real analytic on a connected open domain. Let $K_j$ be the subspace of witnesses whose derivatives through order $j$ vanish at $s_0$. Analytic uniqueness gives 

$$

\bigcap_{j\ge0}K_j=\{A:\omega_s(A)=0\text{ on the domain}\}.

$$

 There are finitely many strict dimension drops, so there is a finite order beyond which the subspaces stabilize to that intersection. The order itself is not bounded by $\dim W$: arbitrary stretches of equal successive kernels can precede a later drop.

For a concrete example, take $\rho_s=I/2+s^mZ/4$ near $s=0$ and $A=Z$. Then ${\operatorname{tr}}(\rho_sZ)=s^m/2$. The first nonzero derivative occurs at the arbitrarily chosen order $m$, while the ambient Hermitian carrier has dimension four. This rules out a dimension-only upper bound on the detecting jet order and a stopping criterion based only on one consecutive equality. The valid eventual finite-determination result is retained; the stronger algorithmic claim requires an extra degree or differential-closure hypothesis.

All derivatives in this statement are taken in a specified coordinate chart. Higher ordinary derivatives of a scalar function are not automatically invariant tensors under arbitrary nonlinear coordinate changes. A coordinate-free formulation must use a jet bundle or an explicitly chosen connection. The finite linear solvability problem itself is unaffected by this distinction.



<a id="section-C-2"></a>

## C.2 Positive witnesses and physical implementation

<a id="section:witness:positive-witnesses-and-physical-implementation"></a> With evaluation map $\mathcal E:W\to{\mathbb R}^m$, the set of witnesses for target $y$ is either empty or an affine coset $A_0+\ker\mathcal E$. Requiring positivity intersects this affine set with the positive semidefinite cone. The result is closed and convex; it is not generally a face of that cone.

If one calibration state obeys $\rho_*\ge\lambda_*I$ with $\lambda_*>0$ and every positive witness has expectation $g_*$ in that state, then 

$$

\lambda_*{\operatorname{tr}} A\le{\operatorname{tr}}(\rho_*A)=g_*.

$$

 Thus ${\lVert A\rVert}_\infty\le{\operatorname{tr}} A\le g_*/\lambda_*$, and the positive-witness set is compact in finite dimension. A nonempty compact convex set has extreme points. A witness $A$ is extreme exactly when no nonzero $H\in\ker\mathcal E$ satisfies $A\pm H\ge0$. These statements describe mathematical feasibility; an accessible implementation of a chosen witness requires an admitted instrument.



<a id="section-C-3"></a>

## C.3 Approximate capacity of a finite record

<a id="section:witness:approximate-capacity-of-a-finite-record"></a> Suppose $M$ equiprobable historical labels are encoded into states $\rho_1,\ldots,\rho_M$ on a Hilbert space of dimension $D$, and a POVM $\{E_i\}$ decodes them with average success at least $1-\epsilon$. Since $\rho_i\le I$, 

$$

1-\epsilon\le\frac1M\sum_i{\operatorname{tr}}(E_i\rho_i)
\le\frac1M\sum_i{\operatorname{tr}} E_i=\frac DM.

$$

 Hence 

$$

D\ge(1-\epsilon)M.

$$

 For $M=2^n$ independent binary histories, perfect retention gives $D\ge2^n$ and approximate decoding gives the displayed weakened bound. This is a resource requirement for distinguishing historical alternatives, not a lower bound on consciousness. It also does not forbid repeatedly using one register when old independent histories are not required to remain available.



<a id="section-C-4"></a>

## C.4 An exact probability countermodel and its repair condition

<a id="section:witness:an-exact-probability-countermodel-and-its-repair-condition"></a> The following example delimits a tempting use of closure. Let $D_B\rho$ be diagonalization in a fixed record basis and 

$$

c(\rho)={\lVert \rho-D_B\rho\rVert}_{HS}^2,
\qquad
\widetilde\rho=(1-c)D_B\rho+cI/d.

$$

 For density matrices $0\le c\le1$. The assignment $p(E\mid\rho)={\operatorname{tr}}(E\widetilde\rho)$ is positive, normalized, additive on orthogonal effects, continuous, and equivariant under record-basis-preserving unitaries. It agrees with ordinary diagonal calibration and converges under the constant closure channel $T\rho=I/d$. Yet for 

$$

\rho=\begin{pmatrix}3/4&1/4\\1/4&1/4\end{pmatrix}

$$

 it gives $p_0=23/32$, not $3/4$. Those stability and fixed-basis conditions alone therefore do not force Born weighting.

An additional affinity premise can remove this freedom for the fixed record measurement. Suppose $p_i(\rho)$ is affine on all density operators, lies in $[0,1]$, and obeys $p_i({\lvert j\rangle}{\langle j\rvert})=\delta_{ij}$. Finite-dimensional duality gives an effect $F_i$ with $p_i(\rho)={\operatorname{tr}}(F_i\rho)$. Its diagonal is fixed by calibration. Positivity implies $|(F_i)_{jk}|^2\le(F_i)_{jj}(F_i)_{kk}$, so every off-diagonal entry vanishes. Hence $F_i={\lvert i\rangle}{\langle i\rvert}$ and $p_i(\rho)=\rho_{ii}$.

This is an exact conditional derivation from affinity and full state-domain positivity, not a derivation of those premises from contraction. The physical measurement completions retain their own probability-bearing preparation assumptions. The example is included to state the correct theorem boundary, not to deny the existence of well-defined quantum decision or measurement models.



<a id="section-C-5"></a>

## C.5 Physical archive corruption and wave error

<a id="section:witness:physical-archive-corruption-and-wave-error"></a> For a flat archive boundary $\Sigma$ in full configuration space, the normal probability current of the internal-vector wave is $(\hbar/m)\operatorname{Im}\langle\Psi,\partial_n\Psi\rangle$. Suppose the nominal held wave has zero normal current pointwise on that surface, and the actual wave is $\Psi=\Psi_0+\xi$. Surface norms integrate all remaining spatial variables, including the clock. The cross terms and Cauchy–Schwarz yield 

$$

\int_\Sigma |j_n(\Psi)|\le\frac{\hbar}{m}
\left({\lVert \Psi_0\rVert}_{L^2(\Sigma)}{\lVert \partial_n\xi\rVert}_{L^2(\Sigma)}
+{\lVert \xi\rVert}_{L^2(\Sigma)}{\lVert \partial_n\Psi_0\rVert}_{L^2(\Sigma)}
+{\lVert \xi\rVert}_{L^2(\Sigma)}{\lVert \partial_n\xi\rVert}_{L^2(\Sigma)}\right).

$$

 Here the Sobolev norm differentiates the system/archive coordinates, with clock and other spectator coordinates treated as $L^2$ parameters. The trace inequality is correspondingly Hilbert-valued and integrated over those parameters; it does not differentiate the rapidly oscillating clock phase. Under a specified $H^2$ trace bound $C_\Sigma$, ${\lVert \Psi_0\rVert}_{H^2}\le B$, and ${\lVert \xi\rVert}_{H^2}\le\epsilon_2$, integration over an interval $I$ gives 

$$

\int_I\!\int_\Sigma |j_n|\le
\frac{\hbar}{m}|I|C_\Sigma^2\epsilon_2(2B+\epsilon_2).

$$

 For the deterministic configuration-guidance flow $v=j/\rho$, the regular-surface crossing formula gives 

$$

 \mathbb E N_\Sigma(I)=\int_I\!\int_\Sigma |j_n|,
 \qquad
 P(N_\Sigma(I)\ge1)\le\mathbb E N_\Sigma(I),

$$

 under the stated flow regularity and the usual regular crossing hypotheses for the chosen surface. The estimate therefore bounds historical corruption that requires such a crossing. Equivariance alone would not suffice: a stationary equivariant diffusion can cross a boundary while the Schrödinger current is zero. Ordinary $L^2$ endpoint closeness likewise supplies no derivative or surface bound. The archive conclusion uses the specified guidance paths and the stronger physical norm together.
