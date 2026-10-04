# Section 5: Engineering the holding network

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

<a id="section-5"></a>

## 5 Engineering the holding network

<a id="sec:engineering"></a>

We now arrange the endpoint hypotheses and the configuration curvatures while reserving the nonlinear plane. Choose particle 1 and write $a_0=q_1^1$, $s=(q_1^2,q_1^3)$. The remaining $d-2$ coordinates are called active. Select a spanning tree of the prescribed particle graph. Its interparticle edges connect first coordinates by weak springs. Within every particle other than 1, choose two one-body quadratic links connecting its first coordinate to its other coordinates. This gives a tree on the active coordinates. Its nonzero off-diagonal entries have order $\delta$. Add the other prescribed particle edges as nonzero springs of order $\delta^{d+1}$. The plane has no holding link to any other coordinate.

Choose distinct positive integer frequencies, including $1,2$ for the plane, satisfying [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion)(i). They can be chosen inductively: each new integer must avoid only finitely many equalities with previous sums, differences, and doubles. At zero coupling take the diagonal entries to be their squares. The differential of the ordered eigenvalue map with respect to these diagonal entries is the identity. The analytic implicit-function theorem therefore retunes the active diagonals by $O(\delta^2)$ so that the exact eigenvalues remain $\omega_i^2$. For small positive $\delta$ the total stiffness is positive. Spring diagonal terms are included in the total diagonal and compensated by the one-body traps. Only the engineered constants are chosen at this step; they remain fixed during every protocol.



**Lemma 5.1 (Modal overlap and curvature generation).**

<a id="lem:engineer"></a> For all sufficiently small positive $\delta$, the engineered holding matrix satisfies [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion), and the corrected Gaussian return curvatures generate $\mathfrak{so}(d)$. 





**Proof.**

On the active tree the leading component of each eigenvector at $a_0$ is a product of nonzero edge entries divided by distinct spectral gaps along its unique tree path. It is nonzero. The additional edges of order $\delta^{d+1}$ cannot cancel that leading term, because an active tree path has length at most $d-3$. Thus the local diagonal control at $a_0$ couples every pair of active modes. The one-body controls $s_1a_0$ and $s_2a_0$ couple each reserved mode to every active mode, and $s_1s_2$ couples the two reserved modes. The vectors of diagonal modal entries of physical diagonal controls form the squared-overlap matrix $(O_{ki}^2)$, which is near the identity and invertible. This proves the endpoint hypotheses.

For an active coordinate edge $\{i,j\}$ let its leading off-diagonal entry be $\delta C_{ij}$ and take $M=E_{ii},N=E_{jj}$. First-order eigenvector perturbation and the definition of $\mathcal R_\nu$ give <a id="eq:edgecurvature"></a>


$$

 [\mathcal R_\nu(O^TE_{ii}O),\mathcal R_\nu(O^TE_{jj}O)]_{ij}
 =
 \frac{-4\delta C_{ij}}
 {((\omega_i+\omega_j)^2-\nu^2)
  (4\omega_i^2-\nu^2)(4\omega_j^2-\nu^2)}
 +O(\delta^2).

$$

Equation (5.1).

 To verify the coefficient, use the first-order rotation $O_{ij}=\delta C_{ij}/(\omega_j^2-\omega_i^2)$. The two off-diagonal terms of the commutator give the difference of $(4\omega_i^2-\nu^2)^{-1}$ and $(4\omega_j^2-\nu^2)^{-1}$, divided by the spectral gap; their difference is $-4$ times that gap divided by the two denominators. All other entries are $O(\delta^2)$. Thus the edge curvature, divided by $\delta$, tends to a nonzero elementary rotation in the $i,j$ plane.

For each reserved coordinate $s_\ell$, use $M=E_{s_\ell s_\ell}$ and $N=E_{s_\ell a_0}+E_{a_0s_\ell}$. At $\delta=0$ its commutator in [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew) is a nonzero elementary rotation joining $s_\ell$ and $a_0$. The active tree together with these two links is connected. Elementary rotations along a connected graph generate $\mathfrak{so}(d)$, since $[J_{ij},J_{jk}]=J_{ik}$ up to the orientation convention. A finite bracket-basis determinant is nonzero in the limiting generators and remains nonzero for small $\delta$. The nonzero factors in [(4.8)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:whitencurve) preserve this conclusion. 

□





**Theorem 5.2 (Engineered exact Gaussian holonomy).**

<a id="thm:gaussian"></a> For the holding network just constructed, the configuration maps of physically implemented Gaussian ray returns are exactly 

$$

 SO(A_0):=\{L:L^TA_0L=A_0,\ \det L>0\}.

$$

 In whitened coordinates $z=\sqrt2 A_0^{1/2}q$, this is $SO(d)$. The subgroup generated by [(4.4)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:corrected) and their physical time reversals already realizes it. 





**Proof.**

The inclusion in $SO(A_0)$ follows from [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). The opposite inclusion follows from [proposition 4.2](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#prop:curvature), [lemma 5.1](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#lem:engineer), [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup). Each curve has exact symplectic endpoint $I$ and hence exact quantum return; each inverse is physically implemented as in [section 2](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#sec:model). Positivity and common-domain evolution hold on every constituent stage. Finite products retain these properties. 

□



The construction also gives exact reachability of every symplectic matrix with the holding Hamiltonian restored at the endpoints. Indeed [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion) gives an open reachable neighborhood of $I$; shrink it to an inverse-symmetric neighborhood and take finite products. The real symplectic group is connected, as is seen from its polar decomposition into a positive symplectic factor and the connected compact subgroup $U(d)$. Such products exhaust it. This observation will be used only for explicitly stated readouts and preparation transports.



**Example 5.3 (Two particles).**

<a id="ex:two"></a> In the physical order $(a_0,s_1,s_2,b_1,b_2,b_3)$, take <a id="eq:examplematrix"></a>


$$

 K_0(\delta)=
 \begin{pmatrix}
 d_0&0&0&-\delta&0&0\\
 0&1&0&0&0&0\\
 0&0&4&0&0&0\\
 -\delta&0&0&d_1&\delta&0\\
 0&0&0&\delta&d_2&\delta\\
 0&0&0&0&\delta&d_3
 \end{pmatrix}.

$$

Equation (5.2).

 The numbers $d_j=d_j(\delta)$ are the unique analytic diagonal entries near $(49,196,576,1849)$ for which the active characteristic polynomial is $(\lambda-49)(\lambda-196)(\lambda-576)(\lambda-1849)$. This equation and the local uniqueness specify them exactly. If $\lambda_j$ denotes these four values, then 

$$

 d_j(\delta)=\lambda_j-
       \delta^2\sum_{k\sim j}\frac1{\lambda_j-\lambda_k}
       +O(\delta^3).
 
$$

 The six frequencies $(1,2,7,14,24,43)$ have pairwise distinct doubles, sums and positive differences. The physical pair potential is $\delta(a_0-b_1)^2/2$. The one-body traps contain diagonal coefficients $d_0-\delta,d_1-\delta,d_2,d_3$ and the terms $\delta b_1b_2+\delta b_2b_3$, together with the reserved plane's $s_1^2/2+2s_2^2$. For small $\delta>0$ they give [(5.2)](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#eq:examplematrix). The interparticle block has rank one and is nonzero. If the ground Gaussian factored between the two particles, its precision $A_0$ would be block diagonal and so would $K_0=A_0^2$, a contradiction. Its separate plane factor is nevertheless $(\sqrt2/\pi)^{1/2}e^{-(s_1^2+2s_2^2)/2}$. 



The theorem is stable under sufficiently small *known* changes in the holding entries that preserve the reserved-plane structure. In fact the endpoint map with $K$ as an additional finite-dimensional parameter remains a submersion. Its correction now has coefficients $c(K,\epsilon)$; the shifted return curves $R_K(a+t)R_K(a)^{-1}$ still have a nonzero bracket-basis determinant. Positivity persists, and the plane proof applies at its new fixed positive frequencies. This is recalibration in a relative open class, not immunity to unknown control errors.

A more general result for the Gaussian part alone is proved in section [A](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#app:general): connected nonzero fixed quadratic interactions and full block-local trap controls suffice for $SO(d)$ holonomy without a small-coupling or recurrent-spectrum assumption on the original device. That extension does not supply a reserved nonlinear plane.
