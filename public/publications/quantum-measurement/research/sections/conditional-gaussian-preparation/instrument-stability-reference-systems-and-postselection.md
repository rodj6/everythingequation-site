# Section 8: Instrument stability, reference systems, and postselection

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-8"></a>

## 8 Instrument stability, reference systems, and postselection

 <a id="p1i:sec:stability"></a>

The exact-parent theorem also identifies what a perturbative implementation must supply. Two complementary transfer statements are useful: a full-ready operator-isometry criterion and a cap-free conditional-state criterion. Neither converts an endpoint wave norm alone into a displacement bound or a whole-history record theorem.



<a id="section-8-1"></a>

### 8.1 An abstract full-ready criterion





**Proposition 8.1 (Finite-reference instrument transfer).**

 <a id="p1i:prop:abstract"></a> Let an input-independent ready positional law $\mu_0$ obey $\operatorname{TV}(\mu_0,\rho_0)\leq\delta$. Suppose the exact physical ready wave is an isometric product embedding of an internal input, with the same positional reference $\rho_0$ for every input. For every input assume a specified conservative complete flow and a pointwise physical wave representative on the actual-law support. Let $A$ be its endpoint wave isometry and let 

$$

 A_0\chi=\sum_s\phi_s\otimes V_s\chi,
 \qquad \|\phi_s\|=1,
 \qquad V_s^\dagger V_t=0\ (s\ne t),
 \qquad\sum_s V_s^\dagger V_s=I.

$$

 The $V_s$ have orthogonal internal ranges; any retained branch-dependent purifier belongs to $\phi_s$ and to its full positional integral. Suppose $\|A-A_0\|_{\rm op}\leq\varepsilon$ and the disjoint record regions $R_s$ partition configuration space with $\int_{R_s^c}\|\phi_s(q)\|^2dq\leq t$, $0\leq t\leq1$. Then the actual labelled conditional-state instrument satisfies <a id="p1i:eq:abstract"></a>


$$

 D\!\left(\Omega_\mu(\chi),
       \sum_s|s\rangle\langle s|\otimes
            V_s|\chi\rangle\langle\chi|V_s^\dagger\right)
 \leq\min\{1,\delta+\varepsilon+\sqrt{2t-t^2}\}.

$$

Equation (8.1).

 The estimate extends to every finite internal reference with no dimension multiplier. If the flow is only admitted on a reference-full set, any actual mass outside its domain must instead be explicitly charged as unresolved, rather than treated as a predicted trajectory. 





**Proof.**

For each fixed input, equivariance and TV contraction transport $\delta$ to the endpoint. Equation [(7.17)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:kernelcontract) therefore reduces the proof to its wave-populated endpoint. Under that law the normalization denominator in the conditional projector cancels with the positional density, so the actual cq integral equals the usual labelled wave extraction.

Define the isometry $B\psi=\sum_s|s\rangle 1_{R_s}\psi$ and the comparison vector $C_0\chi=\sum_s|s\rangle\phi_s V_s\chi$. Put $w_s=\|V_s\chi\|^2$ and $L=\sum_s w_s\int_{R_s^c}\|\phi_s\|^2\leq t$. Orthogonality of the branch ranges gives exactly 

$$

 \langle BA_0\chi,C_0\chi\rangle=1-L,
 \qquad \|BA_0\chi-C_0\chi\|^2=2L.

$$

 Hence their pure-state trace distance is $\sqrt{1-(1-L)^2}\leq\sqrt{2t-t^2}$. Apply the same extraction channel to both vectors: trace all positional and discarded purifier degrees and *dephase the classical label*. For $BA\chi$ the disjoint regions already make the extracted label diagonal. For $C_0\chi$, dephasing is essential when the $\phi_s$ overlap; after it the result is precisely the ideal instrument in [(8.1)](/quantum-measurement/research/conditional-gaussian-preparation/instrument-stability-reference-systems-and-postselection#p1i:eq:abstract). Trace distance contracts under this channel. The remaining wave error is at most $\varepsilon$, since the distance of normalized pure states is bounded by their vector-norm difference and $B$ is an isometry.

For a finite reference $\mathcal R$, decompose an arbitrary vector in an orthonormal reference basis. Summing squared output norms proves $\|(A-A_0)\otimes I_{\mathcal R}\|\leq\|A-A_0\|$; product vectors give the reverse inequality. All other steps retain the reference and are unchanged. Convexity and purification give the mixed-input statement. 

□



An operator bound in this proposition is stronger than the maximum of the errors on a chosen input basis. If the basis-column errors are $e_j$, the justified bound is $\varepsilon\leq(\sum_j e_j^2)^{1/2}$, by Cauchy–Schwarz, unless a sharper operator estimate is supplied. Likewise a position-dependent output-frame rotation must be included in $A_0$ or charged in $\varepsilon$. The theorem compares complete conditional states, so an agreement of position densities alone is insufficient.



<a id="section-8-2"></a>

### 8.2 Cap-free transfer of conditional quantum states





**Proposition 8.2 (State stability under physical-score concentration).**

 <a id="p1i:prop:capfreestate"></a> Let $d\geq2$ and let $X$ be retained external context with its actual law. Conditional on $X$, suppose the initial boxed actual density $f_{B,X}$ relative to the normalized physical entrance reference obeys 

$$

 \|f_{B,X}\|_{d/(d-1)}\leq B_X,
 \qquad\|B_X\|_{L^2(\mathrm{actual}\ X)}\leq B_2.

$$

 For example, the physical-score BV bound gives $B_X=m_X+V_{{\rm total},X}/d$ and 

$$

 B_2\leq1+\frac{D_R}{\sqrt d}
                  \{\sqrt J+\sqrt{J+2d}\}.

$$

 Let $\Psi_X$ and $\Psi_{0,X}$ be normalized complete endpoint waves on the same physical configuration space, retaining the input, internal reference and purifiers. The physical flow transports the entrance reference to $\rho_X=\|\Psi_X\|^2$ and the boxed actual law to its actual endpoint. Set 

$$

 e_X=\|\Psi_X-\Psi_{0,X}\|_2,
 \qquad e_{\rm rms}^2=\mathbb E_{\mathrm{actual}\ X} e_X^2.

$$

 Replacing the physical conditional-state field by the ideal one in the boxed actual cq output costs at most <a id="p1i:eq:capfreestate"></a>


$$

 s_B=B_2 e_{\rm rms}^{2/d}.

$$

Equation (8.2).

 If a complete boxed endpoint-law comparison separately costs $\ell_B$ and the ideal boxed instrument differs from $m\Lambda$ by at most $\eta_{0,B}$, then the full instrument satisfies <a id="p1i:eq:physicalcomposition"></a>


$$

 D(\Omega_{\rm physical},\Lambda)
                   \leq\tau+\eta_{0,B}+\ell_B+s_B.

$$

Equation (8.3).

 The wave and law hypotheses must hold uniformly over the allowed internal inputs and references for this to be a uniform instrument statement. 





**Proof.**

At a physical nonnode let $a=\Psi_X(q)$ and, at a nonzero ideal vector $b=\Psi_{0,X}(q)$, let $P_b$ be its rank-one orthogonal projector. If $D_q$ is the trace distance between their normalized pure states, then 

$$

 \rho_X(q)D_q^2=\|(I-P_b)a\|^2
                         \leq\|a-b\|^2.

$$

 At an ideal node choose any unit comparison vector; $D_q\leq1$ gives the same inequality. Thus $\int D_q^2\rho_X\,dq\leq e_X^2$.

The relative density of the boxed actual endpoint with respect to $\rho_X$ is the conditional expectation of $f_{B,X}$ on the physical endpoint map. Jensen therefore contracts its $L^{d/(d-1)}$ norm; if the flow is invertible the norm is preserved. Hölder's inequality and $0\leq D_q\leq1$ give 

$$

 \int D_q\,d\mu_{B,X,T}
 \leq B_X\left(\int D_q^d\rho_X\,dq\right)^{1/d}
 \leq B_X e_X^{2/d}.

$$

 Cauchy in the actual $X$ law, followed by concavity of $x^{2/d}$, yields 

$$

 \mathbb E B_Xe_X^{2/d}
 \leq B_2(\mathbb E e_X^{4/d})^{1/2}
 \leq B_2(\mathbb E e_X^2)^{1/d}.

$$

 Copying a common endpoint label and tracing unwanted internal degrees can only decrease this fee. Applying [(7.17)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:kernelcontract) to the separately certified boxed law comparison adds $\ell_B$; comparing the ideal boxed output to $m\Lambda$ adds $\eta_{0,B}$. The outside-box output and $\tau\Lambda$ have the same trace and cost at most $\tau$. This proves [(8.3)](/quantum-measurement/research/conditional-gaussian-preparation/instrument-stability-reference-systems-and-postselection#p1i:eq:physicalcomposition). 

□



The norm $e_{\rm rms}$ is weighted by the *actual* retained context. A small wave norm averaged against an unrelated quantum distribution of $X$ does not supply this hypothesis. A context of arbitrarily small quantum weight can carry all the actual mass and an order-one state error. Also the physical versus ideal endpoint-law comparison in [(8.3)](/quantum-measurement/research/conditional-gaussian-preparation/instrument-stability-reference-systems-and-postselection#p1i:eq:physicalcomposition) must include every drifting position; one cannot retain it merely as an unpriced “spectator.”

For the $d=102$ row, $B_2<4\times10^{22}$ and $\eta_{0,B}<5.2\times10^{-8}$. Thus separately established bounds $\ell_B\leq2.8\times10^{-8}$ and $e_{\rm rms}\leq10^{-3200}$ would give $s_B<4\times10^{-40}$ and a full instrument error below $1.0081\times10^{-5}$. These are sufficient finite interface requirements. They are not measured calibration tolerances or a claim that a material device achieves them. In particular they do not follow from the exact prescribed oscillator solution.

A perturbed whole-hold claim needs a path estimate of its own. If the complete physical current proves that the possibly failing entrance set has conditional reference volume $b_X$, the same Hölder–Cauchy argument, now applied to its indicator, gives <a id="p1i:eq:pathfee"></a>


$$

 \Pr_{\rm actual}(\text{path failure})
 \leq\tau+B_2(\mathbb E_{\mathrm{actual}\ X}b_X)^{1/d}.

$$

Equation (8.4).

 This is additional information, not a consequence of [(8.3)](/quantum-measurement/research/conditional-gaussian-preparation/instrument-stability-reference-systems-and-postselection#p1i:eq:physicalcomposition).



<a id="section-8-3"></a>

### 8.3 What the cq estimate says after selecting an outcome





**Proposition 8.3 (Postselection bound).**

<a id="p1i:prop:postselection"></a> Let two normalized cq states have blocks $a_s\sigma_s$ and $p_s\tau_s$ and satisfy $D(\Omega,\Lambda)\leq\epsilon$. Then <a id="p1i:eq:postselection"></a>


$$

 \sum_s a_sD(\sigma_s,\tau_s)\leq2\epsilon,
 \qquad
 D(\sigma_s,\tau_s)\leq\min\{1,\epsilon/a_s\}\quad(a_s>0).

$$

Equation (8.5).

 There is no uniform normalized-state conclusion for arbitrarily rare actual outcomes. 





**Proof.**

Write $\Delta_s=a_s\sigma_s-p_s\tau_s$ and assign arbitrary comparison states when $p_s=0$. The triangle inequality gives 

$$

 a_s\|\sigma_s-\tau_s\|_1
             \leq\|\Delta_s\|_1+|a_s-p_s|.

$$

 Summing and using contraction to the classical label proves the first inequality. For an individual outcome, the complementary blocks have total trace $-(a_s-p_s)$, so their summed trace norms are at least $|a_s-p_s|$. Hence $\|\Delta_s\|_1+|a_s-p_s|\leq2\epsilon$, proving the second inequality. For sharpness, take one actual outcome with probability $0.02$ and conditional state $|0\rangle$, its ideal probability $0.01$ and state $|1\rangle$, and identical conditional states in the complementary outcome. The unconditional cq distance is $0.02$, but the selected conditional states have distance one. 

□



All these bounds are uniform entangled-input comparisons within the stated internal stock. They do not identify an exactly linear completely positive actual map for a non-Born law, and hence are not assertions of a diamond norm for such a map. The exact-parent theorem establishes one unknown use after preparation. A repeated-use theorem would additionally have to retain the relevant contexts, establish fresh stocks at each stage, and specify which retained information may control subsequent ideal operations.



<a id="section-8-4"></a>

### 8.4 Physical scope of the one-use result



The positive result is an explicit finite canonical-current parent with a complete-law preparation bound and a uniform internal-reference instrument. Its physical premises are specific: Gaussian quantum stocks, spin-dependent translated traps including the inertial term in [(7.9)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:driven), spatially constant internal rotations, correctly conjugated holding projectors, and the stated full actual-law score and moment bounds. The result does not derive those actual-law conditions from ordinary wave energy or from the factorized quantum stock.

A microscopic implementation must separately establish the full Hamiltonian/current reduction, coordinate conventions, finite source and clock controls, their retained positional states, uniform-input wave and map errors, and the required held-history bound. These are coefficient and modeling obligations on a proposed implementation, not unstated hypotheses absorbed by the small error in [(7.25)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:headline). Controlled breathing-Gaussian alternatives can provide model-specific perturbation examples, but their frequency, width, receiver and actual-law calibration assumptions must be proved compatible before their constants can be combined with this 102-coordinate physical-score row.
