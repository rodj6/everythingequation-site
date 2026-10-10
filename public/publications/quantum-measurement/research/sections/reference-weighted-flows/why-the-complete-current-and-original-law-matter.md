# Section 12: Why the complete current and original law matter

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-12"></a>

## 12 Why the complete current and original law matter

<a id="p3r:scope"></a> The flow theorem concerns one declared configuration space, wave and current. Its conclusions cannot be transferred by retaining only a marginal density or by changing the kinetic constitution. The following examples make these distinctions quantitative.



<a id="section-12-1"></a>

### 12.1 A hidden current that cancels after contraction

<a id="p3r:hidden"></a> Use normalized Haar measure $dx\,dy/(16\pi^2)$ on the torus of side $4\pi$. For the free Hamiltonian $-\tfrac12(\partial_x^2+\partial_y^2)$ take the two-component wave <a id="p3r:torus-wave"></a>


$$

 \psi_1=\cos(y/2)e^{i(3x/2-5t/4)},\qquad
 \psi_2=\sin(y/2)e^{i(x/2-t/4)}.

$$

Equation (12.1).

 Both components solve the same Schrödinger equation: their energies are respectively $(9/4+1/4)/2=5/4$ and $(1/4+1/4)/2=1/4$. The complete density is $\rho=1$, and the canonical current and velocity are 

$$

 j=b=(1+\tfrac12\cos y,0).

$$

 Thus $y$ stays fixed and $x$ advances at a rate depending on the retained coordinate $y$. The initial actual relative density $f_0=1+\tfrac12\cos(2y)$ has mass one, lies between $1/2$ and $3/2$, and is transported unchanged.

For the moving test $h(t,x,y)=\sin(x-t)$, 

$$

 \partial_t h+b\cdot\nabla h=\tfrac12\cos y\cos(x-t).

$$

 The expected total variation of this test, per unit time, equals <a id="p3r:hidden-exact"></a>


$$

 \int|\rho\partial_t h+j\cdot\nabla h|
   =\frac{2}{\pi^2},\qquad
 \int f_0|\rho\partial_t h+j\cdot\nabla h|
   =\frac{7}{3\pi^2}<\frac{3}{\pi^2}.

$$

Equation (12.2).

 Indeed the averages of $|\cos x|$, $|\cos y|$ and $|\cos y|\cos(2y)$ are $2/\pi$, $2/\pi$ and $2/(3\pi)$. Time integration gives these constants times the interval length. Integrating the signed expression over $y$ *before* taking its absolute value instead gives zero. All waves and flows here are smooth and deterministic. The lost positive term is solely a consequence of discarding a retained current coordinate. This also checks the once-only actual-law multiplier: the actual expectation is bounded by $3/2$ times its reference value, without replacing $f_0$ by one.



<a id="section-12-2"></a>

### 12.2 An absolutely continuous marginal does not admit a singular full law

<a id="p3r:singular"></a> On the unit circle let $H=-b\partial_c^2$, $b>0$, and 

$$

 \psi(c,t)=\frac{1+2i e^{-i4\pi^2bt}\cos(2\pi c)}{\sqrt3},
 \qquad T=\frac{1}{8\pi b}.

$$

 The initial density is $1+\tfrac23\cos(4\pi c)\ge1/3$. For $0\le t<T$ the wave has no zero; at $T$ it is $(1+2\cos(2\pi c))/\sqrt3$ and vanishes at $c=1/3$. Let $F_t(c)=\int_0^c|\psi(u,t)|^2\,du$. The current vanishes at $c=0$, so continuity gives $\partial_tF_t=-j(c,t)$ and hence $F_t(c(t))$ is constant along guidance paths before $T$. Direct integration yields 

$$

 F_0(c)=c+\frac{\sin(4\pi c)}{6\pi},\qquad
 F_T(1/3)=\frac13+\frac{\sqrt3}{4\pi}=:p_*.

$$

 There is a unique $c_0$ with $F_0(c_0)=p_*$, since $F'_0\ge1/3$. The guidance trajectory from $c_0$ converges to $1/3$ at $T$: all $F_t$ converge uniformly to the strictly increasing $F_T$, so their inverse at $p_*$ converges as well. An actual atom at $c_0$ therefore reaches a wave node with probability one. Tensoring independent smooth writer and source densities changes neither statement. This does not contradict almost-sure admission for a full law absolutely continuous with respect to $\rho_0$; the atom violates exactly that premise. A smooth partial marginal alone does not supply the complete entrance hypothesis.



<a id="section-12-3"></a>

### 12.3 A nonlocal current need not vanish at wave nodes

<a id="p3r:nonlocal"></a> For the free positive square-root dispersion $E(p)=\sqrt{1+p^2}$, choose the continuity-current kernel 

$$

 \mathcal J(p,q)=\frac{p+q}{E(p)+E(q)}.

$$

 This is the free kinetic current discussed by Kowalski–Rembieliński [[14](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-KowalskiRembielinski2011), Section III]; its specification, including any divergence-free freedom in higher dimensions, is part of the parent model. On a circle of length $2\pi/\sqrt3$ set $k=\sqrt3$ and $\Psi(x,t)=e^{-it}-e^{i(kx-2t)}$. An overall normalization multiplies density and current by the same positive constant and is immaterial below. With $\alpha=kx-t$, <a id="p3r:nonlocal-formula"></a>


$$

 \rho=2-2\cos\alpha,\qquad
 j=\frac{k}{2}-\frac{2k}{3}\cos\alpha.

$$

Equation (12.3).

 The diagonal terms are $\mathcal J(0,0)=0$ and $\mathcal J(k,k)=k/2$; the two cross terms sum to $-2k\cos\alpha/3$. Also $\partial_t\rho=-2\sin\alpha$ and $\partial_xj=2\sin\alpha$, verifying continuity directly. At every moving node, $j=-\sqrt3/6\ne0$. Near a node $\rho\sim\alpha^2$ whereas $j$ has a nonzero limit, so the spatial action $\int j^2/\rho$ is infinite at every time.

The nodal set has zero spacetime volume, so pointwise nonzero current there alone does not violate the theorem's almost-everywhere zero-set condition. The decisive failures are the divergent action and logarithmic cost: near a node $|j\partial_x\rho|/\rho$ is proportional to $1/|\alpha|$. Thus the canonical finite-action and logarithmic proof cannot be imported from a formal continuity equation alone. The example does not rule out other flow constructions for this nonlocal model; in one dimension a suitable cumulative-density construction gives a different route. It identifies the failed hypotheses of the present theorem precisely.



<a id="section-12-4"></a>

### 12.4 What a later record theorem must supply

<a id="p3r:interface"></a> The deterministic flow and stability results establish a path-level foundation. To use them in a measurement model, one must still identify the physical configuration, the complete current, the original joint entrance law, a common decoder, the relevant time interval and every exceptional guard. In particular, a current length has units of configuration distance after time integration. Dividing by a proved traversal width can yield a probability estimate; merely renaming the length as a probability cannot.

Proposition [2.3](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:prop:guards), specifically [(2.4)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:smoothhistory), supplies the complete-current variation bound for a differentiable test $h(t,q)$ under an original cap. A traversal that changes $h$ by at least $a>0$ costs at least $a$ variation, so its probability is bounded by that expectation divided by $a$, with any original entrance exception added. A fixed sharp surface requires an appropriate area formula; an almost-every-level coarea statement does not by itself establish the bound at a prescribed level. Neither a small endpoint wave error nor a weak-path existence theorem supplies these extra ingredients.



<a id="section-12-5"></a>

### 12.5 Interfaces with preparation, records and coherent sources

 The companion preparation manuscript [[11](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-RodgersP1)] proves explicit positive Gaussian flows and a one-use conditional preparation/instrument result. Its revised argument does not depend on the singular-flow applications here. The repeated-record manuscript [[12](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-RodgersP2)] provides its own current and flow admission for a finite effective scalar schedule; additional positional spectators must satisfy its stated regularity conditions. The present flow theorem supplies neither that manuscript's full-bank entrance bound nor its numerical whole-record estimate. Conversely, preparation of an actual law or reset of a wave factor does not establish the analytic hypotheses of Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic) for a different parent.

The compact-profile electron–oscillator parent in the coherent-source manuscript [[13](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-RodgersP4)] is the constant-$g$ specialization of [(9.1)](/quantum-measurement/research/reference-weighted-flows/an-electron-with-a-retained-quantum-oscillator-source#p3d:eq:HQA) when the profile, entrance, units, complete canonical currents and horizon agree. Its coherent comparison wave need not be normalized or conservative. It therefore does not automatically define a second equivariant flow for Section [5](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:sec:stability). Use of Appendix [A](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:signed-source) instead requires its own normalized reference, classical local regularity and finite source costs. Neither a current-error bound nor weak wave convergence supplies those premises by itself.

These three companion manuscripts belong to the new portfolio. They are distinct from the current October website research editions and the preserved September editions. No completed integration is asserted, and no assumption is transferred between the pilot-medium and massive-configuration constitutions without a separate argument.
