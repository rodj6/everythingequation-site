# Section 8: Bare Coulomb with an unchanged Gaussian and prescribed fields

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-8"></a>

## 8 Bare Coulomb with an unchanged Gaussian and prescribed fields

 <a id="p3d:sec:CRG"></a>

Consider two equal masses $M$ and equal charges $e$, positions $q_1,q_2$, COM $Q=(q_1+q_2)/2$, and relative position $R=q_1-q_2$. The physical collision is $R=0$. Retain all electronic and nuclear spins and an arbitrary passive finite internal reference. The prescribed vector, scalar and spin profiles have a common finite support enclosure on the finite time interval. A sufficient mixed spatial/time reserve is <a id="p3d:eq:gaugejets"></a>


$$

 A_{\rm em}:C_x^8,\qquad
 \partial_tA_{\rm em}:C_x^6,\qquad
 \partial_t^2A_{\rm em}:C_x^4,\qquad
 V:C_x^6,\quad \partial_tV:C_x^4.

$$

Equation (8.1).

 The relevant bounds and time derivatives are uniform or integrable as needed above. These are spatial reserves of the time-differentiated profiles, not eight time derivatives.

In frequency units the dimensionless connections and positive kinetic coefficients are 

$$

 a_Q=\frac e\hbar[A_{\rm em}(Q+R/2)+A_{\rm em}(Q-R/2)],\qquad
 a_R=\frac e{2\hbar}[A_{\rm em}(Q+R/2)-A_{\rm em}(Q-R/2)],

$$

 $\lambda_Q=\hbar/(4M)$ and $\lambda_R=\hbar/M$. The parent contains the full kinetic terms $\lambda_Q(p_Q-a_Q)^2+\lambda_R(p_R-a_R)^2$, bare repulsive Coulomb $g/(\hbar|R|)$ with $g>0$, a fixed bounded Hermitian hyperfine operator on the finite internal fibre that commutes with simultaneous rotations, and all specified scalar/spin controls. The hyperfine operator is independent of $Q,R,t$; no additional singular hyperfine coefficient is implicit in this parent. A normal first-order $a_R\cdot p_R$ is not a tangent word. The next exact gauge removes that obstruction while preserving physical positions and currents.



**Lemma 8.1 (Relative radial gauge with global ray bounds).**

 <a id="p3d:lem:gauge"></a> Set 

$$

 \chi(Q,R,t)=\int_0^1R\cdot a_R(Q,sR,t)\,ds,\qquad
 \psi_g=e^{-i\chi}\psi,

$$

 $a_R'=a_R-\nabla_R\chi$, $a_Q'=a_Q-\nabla_Q\chi$. The scalar frequency potential gains $+\partial_t\chi$. Then <a id="p3d:eq:curvature"></a>


$$

 R\cdot a_R'=0,\qquad
 (a_R')_j=\int_0^1sR_k
        [\partial_k(a_R)_j-\partial_j(a_R)_k](Q,sR,t)\,ds.

$$

Equation (8.2).

 The gauge and its needed derivatives are bounded globally. Writing $a_R'=R\times B_{\rm eff}$ with the appropriate curvature sign, both $B_{\rm eff}$ and $|Q|B_{\rm eff}$ have the bounded mixed COM/simultaneous-rotation jets needed by the tangent graph proof. 

 

**Proof.**

Differentiate the radial integral and integrate the derivative of $s\,a_R(Q,sR)$ to obtain [(8.2)](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:eq:curvature). Conjugating the Schrödinger equation gives the stated connections and scalar phase. Covariant currents are invariant under this scalar gauge, as are spin densities and their curls.

Enclose the finite supports in $|x|\leq R_s$. Each ray $x=Q\pm sR/2$ spends $s$-length at most $4R_s/|R|$ in that ball. Thus terms with one explicit $R$ in any differentiated gauge integral are uniformly controlled by the ray length; terms without $R$ are bounded directly on $0\leq s\leq1$. At $R=0$, the difference defining $a_R$ is $O(R)$, so $\chi=O(|R|^2)$ and the gauge is smooth through the collision.

Up to a harmless sign, 

$$

 B_{\rm eff}=\frac e{4\hbar}\int_0^1s
 [B_{\rm em}(Q+sR/2)+B_{\rm em}(Q-sR/2)]\,ds .

$$

 Hence $\|B_{\rm eff}\|_\infty\leq|e|\|B_{\rm em}\|_\infty/(4\hbar)$. On a support intersection, $|Q|\leq R_s+s|R|/2$. For $|R|\leq2R_s$ use $|Q|\leq2R_s$; for larger $|R|$ use $|Q|<|R|$ and the summed ray length at most $8R_s/|R|$. This gives the conservative bound 

$$

 \||Q|B_{\rm eff}\|_\infty
 \leq(2|e|R_s/\hbar)\|B_{\rm em}\|_\infty.
 
$$

 COM derivatives replace profiles by their derivatives. Simultaneous rotation acts on the actual supported field argument $x=Q\pm sR/2$ and its vector index; these weighted derivatives remain supported and bounded. Differentiating the explicit $Q$ gives lower terms already controlled. The same reasoning applies to the stated time-differentiated profiles with their common support enclosure. 

□





**Theorem 8.2 (Uncut Gaussian Coulomb flow).**

<a id="p3d:thm:CRG"></a> For the complete prescribed-field parent just specified, the unchanged normalized Gaussian entrance, with any fixed finite internal input, has a continuous evolved full wave off $R=0$, local full $H^2$ there, finite action and logarithmic costs, and all-times collision avoidance. Its complete reference-compatible flow is deterministic and unique in the class of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic). Every one original law absolutely continuous with respect to its entrance density is transported by that flow without a collision cutoff or a stock change. 

 

**Proof.**

Use $J=Q\times p_Q+R\times p_R+S_1+I_1+S_2+I_2$ and $\mathcal A=1+p_Q^2+J^2$. The radial gauge gives the exact identity 

$$

 (R\times B_{\rm eff})\cdot p_R
 =-B_{\rm eff}\cdot J+B_{\rm eff}\cdot(Q\times p_Q)
                                      +B_{\rm eff}\cdot S_{\rm all}.

$$

 All coefficients are bounded by Lemma [8.1](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:lem:gauge). Symmetrize these first-order terms, retaining their scalar divergence. The COM contraction already uses $p_Q$; the remaining squares, divergences and scalar/spin controls are bounded multiplication. Thus the gauged parent is its translation/rotation-invariant central Coulomb operator plus bounded-coefficient tangent words of degree at most one. The central operator strongly commutes with $\mathcal A$. The finite-word proof of [(6.1)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:comm) applies: $\ell$ commutators have degree at most $\ell+1\leq2\ell$. The expanded gauge divergence uses two original spatial derivatives, and three tangent-operator commutators can use six more. Its differentiated version uses six spatial derivatives of $A_{{\rm em},t}$, while the differentiated scalar $\chi_t$ requires four spatial derivatives of $A_{{\rm em},tt}$. This explains the reserve [(8.1)](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:eq:gaugejets).

Three-dimensional relative Hardy and interpolation give $\||R|^{-1}u\|\leq2\|\nabla_Ru\|$ and infinitesimal relative Laplacian boundedness of Coulomb. Bounded smooth connections are first-order infinitesimally Laplacian bounded. The common first domain is consequently $H^2(\mathbb R^6)$ and the form is $H^1(\mathbb R^6)$, with a positive physical kinetic floor after a bounded shift. The operator core crosses the collision. Functions vanishing near a relative codimension-three collision are form dense (cut off a smooth vector at radius $\epsilon$, whose added gradient norm is $O(\epsilon^{1/2})$), but need not be an $H^2$ graph core. In fact the relative trace at zero is continuous in relative $H^2$, so deleting that trace would exclude the Gaussian.

The gauged Gaussian lies in $D(\mathcal A^3)\cap D(H_g(0))$ and $H_g(0)f_g\in D(\mathcal A^2)$. Tangent words leave $|R|^{-1}$ undifferentiated and its product with a smooth Gaussian word is locally $L^2$ in three relative dimensions. The gauge jets are bounded. No $D(H_g^2)$ claim follows: a second radial action on $|R|^{-1}f_g$ generally has a collision-supported distribution. Theorem [6.1](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:thm:graph) therefore applies on the true common form. On compact collision-free charts there are five tangent coordinates, and [(6.8)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:product)–[(6.9)](/quantum-measurement/research/reference-weighted-flows/a-first-domain-route-to-full-wave-continuity#p3d:eq:theta), with $\theta>5/8$, give joint spacetime continuity and local full $H^2$.

The full distributional continuity equation is on all Cartesian $\mathbb R^6$; no zero-density wall is placed at the collision. Physical coercivity and the first-graph bound supply the canonical length/action/log estimates of Proposition [3.4](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:prop:canonical). For collision avoidance, the gauged normal connection is exactly zero, and Hardy gives <a id="p3d:eq:Coulombguard"></a>


$$

 \int_0^T\!\int\frac{|j_R\cdot\widehat R|}{|R|}
 \leq2\lambda_R\int_0^T
          \|\psi_g/|R|\|\|\nabla_R\psi_g\|\,dt<\infty.

$$

Equation (8.3).

 If a complete bounded spin-curl contribution is specified, retain its additional bound 

$$

 C\|\psi_g/|R|\|(\|\nabla_R\psi_g\|+\|\nabla_Q\psi_g\|).

$$

 Use the smooth Cartesian tests $h_\epsilon(R)=\frac12\log(|R|^2+\epsilon^2)$, whose gradient magnitude is at most $1/|R|$. The expected variation is uniformly bounded by [(8.3)](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:eq:Coulombguard); a path starting off the collision and reaching it would have divergent limiting variation. Fatou excludes such paths at every time. A fixed-time collision null set would not prove this. The central deterministic-flow theorem now applies, and the gauge preserves its physical positions and currents. 

□
