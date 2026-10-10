# Section 4: Conforming approximation and the original history law

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-4"></a>

## 4 Conforming approximation and the original history law

 <a id="p3f:sec:approximation"></a>

The following limit result needs neither pointwise convergence of velocities near nodes nor a uniform high derivative bound on the approximating waves. It does need their complete local currents and their unchanged entrance.



**Theorem 4.1 (Strong-density/current path limit).**

 <a id="p3f:thm:approximation"></a> Let $\Pi_n$ be reference-compatible path laws for conservative pairs $(\rho_n,j_n)$ on the common ambient configuration space. They may, in particular, be the deterministic flows of smooth conforming regularizations. Suppose <a id="p3f:eq:approxinputs"></a>


$$
\begin{aligned}\rho_n(0)&=\rho_0,\\
 \sup_{t\in[0,T]}\|\rho_n(t)-\rho(t)\|_1&\longrightarrow0,\qquad
 \|j_n-j\|_{L^1(dt\,dx)}\longrightarrow0,\\
 \sup_n\int_0^T\!\int\frac{|j_n|^2}{\rho_n}\,dx\,dt
 &\leq A_*<\infty.
\end{aligned}
$$

Equation (4.1).

 Assume $\rho,j$ have the conservative continuity, node-zero and normalization properties above. Then $\{\Pi_n\}$ is tight in $\mathcal C$ and every weak limit is a reference-compatible path law for $b=j/\rho$, concentrated on finite-action curves.

For any single original $f_0\in L^1(\rho_0\,dx)$ as in [(2.3)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:once), the measures $f_0(e_0)\Pi_n$ converge along the same subsequence to $f_0(e_0)\Pi$. If the limiting parent satisfies Assumption [3.1](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:ass:central) and the boundary avoidance conditions, then the whole sequence converges to the unique deterministic reference law of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic); the same holds for its original-law reweighting. Different approximation sequences satisfying these hypotheses select the same limiting path law. 





**Proof.**

For a continuous path define 

$$

 I(\gamma)=\sup_{\mathcal P}
       \sum_{k=1}^{m}
       \frac{|\gamma(t_k)-\gamma(t_{k-1})|^2}{t_k-t_{k-1}},

$$

 where the supremum runs over finite partitions of $[0,T]$. It is lower semicontinuous in the uniform topology, being a supremum of continuous functions. It equals $\int|\dot\gamma|^2$ for absolutely continuous paths with square-integrable derivative and is infinite otherwise. To see the nontrivial implication, a finite bound on the displayed sums bounds the functional formed by pairing increments with arbitrary step functions in the $L^2$ norm. Riesz representation gives an $L^2$ vector field $v$ with $\gamma(t)-\gamma(s)=\int_s^t v$; approximation by step functions then identifies the supremum with $\int|v|^2$.

By [(4.1)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:approxinputs), $\mathbb E_{\Pi_n}I\leq A_*$. Given a small probability tolerance, choose a compact entrance set and a large action threshold. Outside their exceptional sets the paths obey 

$$

 |\gamma(t)-\gamma(s)|\leq
                 |t-s|^{1/2}I(\gamma)^{1/2},
 \qquad
 \sup_t|\gamma(t)|\leq|\gamma(0)|+\sqrt{TI(\gamma)} .

$$

 Arzelà–Ascoli makes the resulting closed family compact. The entrance is fixed and hence tight; Markov controls the action exception. This proves tightness. If $\Pi_{n_k}\Rightarrow\Pi$, continuity of each evaluation map and the uniform density convergence give $(e_t)_\#\Pi=\rho_t\,dx$ at every time. Lower semicontinuity gives $\mathbb E_\Pi I\leq A_*$.

It remains to identify the true integral equation. For a bounded continuous spacetime vector field $g$, the exact identity and triangle inequality give <a id="p3f:eq:weightedvelocity"></a>


$$
\begin{aligned}\int|b_n-g|\rho_n
 &=\int|j_n-g\rho_n|\\
 &\leq\|j_n-j\|_1+\|g\|_\infty\|\rho_n-\rho\|_1
                       +\int|b-g|\rho .
 
\end{aligned}
$$

Equation (4.2).

 All these integrals are over spacetime. For any fixed rational time $t$, the bounded functional 

$$

 F^g_t(\gamma)=
 1\wedge\left|\gamma(t)-\gamma(0)
                   -\int_0^t g(s,\gamma(s))\,ds\right|

$$

 is continuous in uniform path topology. Uniformly convergent paths have images in one compact set, where $g$ is uniformly continuous. The integral equation under $\Pi_n$ bounds $\mathbb E_{\Pi_n}F^g_t$ by the left side of [(4.2)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:weightedvelocity). Passing to the weak limit yields $\mathbb E_\Pi F^g_t\leq\int|b-g|\rho$. The finite measure $\rho_t\,dx\,dt$ admits bounded continuous approximation of its integrable field $b$ in $L^1$. By the limiting marginals, replacing $g$ by $b$ in the path functional changes its expectation by at most $\int|b-g|\rho$. Therefore $\mathbb E_\Pi F^b_t=0$. Fubini also gives $\int_0^T|b(t,\gamma(t))|dt<\infty$ for almost every path. A countable intersection over rational times, path continuity and continuity of its indefinite integral establish the true integral equation at every endpoint.

For the last assertion choose bounded continuous $f_m$ with $\|f_0-f_m\|_{L^1(\rho_0)}\to0$, using truncation first if necessary. For every bounded continuous path observable $F$, 

$$

 \left|\int F(f_0-f_m)(e_0)\,d\Pi_n\right|
 \leq\|F\|_\infty\|f_0-f_m\|_{L^1(\rho_0)} ,

$$

 uniformly in $n$, and the same estimate holds for $\Pi$. For fixed $m$, $Ff_m(e_0)$ is bounded continuous and passes to the limit. Letting $m\to\infty$ proves convergence of the original reweightings. If the limiting reference law is unique, tightness and uniqueness of every subsequential limit give convergence of the entire sequence. Applying the same approximation argument to that sequence gives the original-law conclusion. 

□



The equality of entrance densities is load-bearing for measurable $f_0$. If a regularization changes that entrance, an additional initial-law transfer estimate is required. Likewise a particle Galerkin approximation with a nonlocal projected generator cannot declare its projected wave to have the unprojected local current. It must first earn a conservative complete-current approximation of the form [(4.1)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:approxinputs).



**Lemma 4.2 (From a common physical form to density/current convergence).**

 <a id="p3f:lem:formcurrent"></a> Consider the same canonical coefficients and covariant derivatives for normalized waves $\Psi,\widetilde\Psi$, and put $u=\Psi-\widetilde\Psi$, $e=\|u\|_2$, $K_\Psi=\sum_i\int\lambda_i\|D_i\Psi\|^2$ and $K_u=\sum_i\int\lambda_i\|D_i u\|^2$. If $0<\lambda_i\leq\Lambda$, then <a id="p3f:eq:currentdifference"></a>


$$

 \|\rho-\widetilde\rho\|_1\leq2e,\qquad
 \|j-\widetilde j\|_1
 \leq2\sqrt\Lambda\{e\sqrt{K_\Psi}+\sqrt{K_u}\}.

$$

Equation (4.3).

 Hence strong convergence in the common physical kinetic form, with a time-integrable uniform form bound, supplies the current convergence and action bound in Theorem [4.1](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:thm:approximation). 





**Proof.**

Subtract the density as a bilinear expression and use the two unit $L^2$ norms. For the current write, componentwise, 

$$

 j_i-\widetilde j_i
 =2\lambda_i\operatorname{Im}
       \{\langle u,D_i\Psi\rangle
          +\langle\widetilde\Psi,D_i u\rangle\}.

$$

 Cauchy in the complete vector of coordinates, the inequality $\lambda_i^2\leq\Lambda\lambda_i$, and then spatial Cauchy give [(4.3)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:currentdifference). Integrate this estimate in time. The canonical action estimate follows from Proposition [3.4](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:prop:canonical), or directly from $|j|^2/\rho\leq4\Lambda\sum_i\lambda_i|D_i\Psi|^2$. 

□



A common-form approximation theorem for an actual Hamiltonian must establish the strong form convergence in this lemma; Hilbert norm convergence of waves alone does not establish it. Bounded multiplication regularizations of value jumps can be handled by their same-entrance Duhamel and work identities, provided their physical common form and uniform kinetic floor are proved. High graph regularity, when used to produce a classical flow for each approximation, is a separate fixed-approximation domain obligation; it need not be uniform in the limit.



**Example 4.3 (Small wave and density errors with a nonvanishing current error).**

 <a id="p3f:ex:highfrequency"></a> On the one-dimensional torus with normalized Haar measure, take the free Hamiltonian $-\frac12\partial_x^2$ and exact waves 

$$

 \Psi_n(t,x)=\frac{1+n^{-1}e^{i(nx-n^2t/2)}}{\sqrt{1+n^{-2}}},
 \qquad\Psi(t,x)=1,\qquad n\geq4 .

$$

 They satisfy $\|\Psi_n-\Psi\|_2^2=2-2/\sqrt{1+n^{-2}}\leq n^{-2}$ and $\|\rho_n-1\|_\infty\leq2/n$, uniformly in time. Their currents are 

$$

 j_n(t,x)=\frac{\cos(nx-n^2t/2)+n^{-1}}{1+n^{-2}},
 \qquad j=0.

$$

 The action density estimate $j_n^2/\rho_n\leq|\partial_x\Psi_n|^2$ yields total action at most $T$. Nevertheless 

$$

 \|j_n(t)\|_1
 \geq\frac{2/\pi-1/n}{1+n^{-2}}
 \geq\frac{4}{11}>\frac13 ,

$$

 using $\pi<22/7$ and $n\geq4$. Thus even uniform wave and density convergence together with a uniform action bound does not imply strong complete-current convergence. These waves have different entrance waves, and the example is not a counterexample to Theorem [4.1](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:thm:approximation); it isolates the independent current hypothesis in that theorem.
