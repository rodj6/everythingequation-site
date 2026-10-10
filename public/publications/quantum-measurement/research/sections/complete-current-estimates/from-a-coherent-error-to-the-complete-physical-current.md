# Section 2: From a coherent error to the complete physical current

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-2"></a>

## 2 From a coherent error to the complete physical current

 <a id="p4s:sec:current"></a>

We first state the conversion that every response estimate in this paper must supply. All positions, including source positions, belong to $x\in\mathbb R^d$. A finite internal fibre is allowed. A wave can also be a matrix of finitely many input columns; all norms below are the spatial $L^2$ Hilbert–Schmidt norms in that case. This convention gives one envelope before contraction with an unknown input, rather than a sum of incoherent branch currents. Write $\operatorname{Im}_{H} Z=(Z-Z^\dagger)/(2i)$.

In rate units, consider a self-adjoint local parent with <a id="p4s:eq:parent"></a>


$$

 H=-\sum_i D_i\lambda_i D_i+U+V
       -i\sum_i\left(a_iD_i+\tfrac12\nabla_i a_i\right),
 \quad D_i=\partial_i-iC_i,\quad
 \nabla_i X=\partial_iX-i[C_i,X].

$$

Equation (2.1).

 Here $C_i,a_i,V$ are Hermitian matrices, $U$ is real scalar, and $\lambda_i>0$ is independent of position; dependence on time is allowed. Domains and coefficient regularity sufficient for the indicated continuity equation are part of this parent. Its density and current are <a id="p4s:eq:literalcurrent"></a>


$$

 \rho_\Psi=\Psi^\dagger\Psi,\qquad
 J_i[\Psi]=2\lambda_i\operatorname{Im}_{H}(\Psi^\dagger D_i\Psi)
                          +\Psi^\dagger a_i\Psi .

$$

Equation (2.2).

 The complete continuity equation is $\partial_t\rho_\Psi+\sum_i\partial_iJ_i[\Psi]=0$; it also holds entrywise for the matrix of input columns evolved by the same parent. Indeed, on a common local core, $\partial_t(\Psi^\dagger\Psi)=i(H\Psi)^\dagger\Psi-i\Psi^\dagger H\Psi$. The Hermitian multiplication terms cancel. The covariant product rule turns the kinetic contribution into $-\sum_i\partial_i[2\lambda_i\operatorname{Im}_H(\Psi^\dagger D_i\Psi)]$ and the symmetrized first-order contribution into $-\sum_i\partial_i(\Psi^\dagger a_i\Psi)$. Testing and passage in the admitted form domain give the weak identity. Thus the first-order term contributes a literal transport current; omitting it would change the conservation law. Additional microscopic spin-curl or nonlocal current constitutions require their own terms; they are not consequences of [(2.1)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:parent).



**Proposition 2.1 (Complete coherent current conversion).**

 <a id="p4s:prop:current"></a> Let $\Psi=P+E$ use the same derivative and current constitution, and let a positive form $K$ satisfy $K\geq\sum_i\lambda_iD_i^\dagger D_i$. Put 

$$

 e=\|E\|,\qquad Q=\|K^{1/2}E\|,\qquad
 N=\|\Psi\|,\qquad \tau_i=\|\sqrt{\lambda_i}D_iP\|.

$$

 Whenever the displayed moments are finite, <a id="p4s:eq:density"></a>
<a id="p4s:eq:currentbound"></a>


$$
\begin{aligned}\int\|\rho_\Psi-\rho_P\|_{\rm op}
   &\leq e(\|P\|+N),\\
 \int\|J_i[\Psi]-J_i[P]\|_{\rm op}
   &\leq2\sqrt{\lambda_i}(e\tau_i+NQ)
          +e\bigl(\|a_iP\|+\|a_i\Psi\|\bigr).
          
\end{aligned}
$$

Equation (2.3, 2.4).

 If $a_i$ is bounded, the last term is at most $\|a_i\|_\infty e(\|P\|+N)$. Neither normalization nor an independent flow for the comparison $P$ is required. 

 

**Proof.**

Before any spatial integration, the exact identities are 

$$

 \rho_\Psi-\rho_P=E^\dagger P+\Psi^\dagger E

$$

 and 

$$
\begin{aligned}J_i[\Psi]-J_i[P]
  ={}&2\lambda_i\operatorname{Im}_{H}
       \left(E^\dagger D_iP+\Psi^\dagger D_iE\right)\\
    &+E^\dagger a_iP+(a_i\Psi)^\dagger E .
\end{aligned}
$$

 The operator norm of a product is bounded by the product of its Hilbert–Schmidt norms, and $\|\operatorname{Im}_{H}Z\|_{\rm op}\leq\|Z\|_{\rm op}$. Spatial Cauchy–Schwarz and $\sqrt{\lambda_i}\|D_iE\|\leq Q$ give the claims. Hermiticity moves the unbounded $a_i$ in the last term onto $\Psi$, so no unproved bounded-operator coefficient or moment of $a_iE$ has been inserted. 

□



For a charged particle with physical momentum $p_{\rm ph}=-i\hbar\partial$, dividing its Hamiltonian by $\hbar$ gives $\lambda_i=\hbar/(2M_i)$ and $C_i=e_iA_i/\hbar$. A symmetrized mechanical term $\{p_{\rm ph},d\times B\}/(2M\hbar)$ in the rate generator has $a=(d\times B)/M$: there is no additional factor $1/\hbar$ in its velocity. An unbounded dipole or source operator must be handled by the moments in [(2.4)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:currentbound).



**Example 2.2 (Small wave error with unbounded current error).**

 <a id="p4s:ex:norm"></a> On the circle of length $2\pi$, let $\Psi=(2\pi)^{-1/2}$ and 

$$

 P_n(t,x)=
 \frac{1+n^{-1}e^{in^2x-i\lambda n^4t}}
      {\sqrt{2\pi(1+n^{-2})}},\qquad n\geq2 .

$$

 Both are normalized solutions of $i\partial_tu=-\lambda\partial_x^2u$, and $\|P_n-\Psi\|\leq2/n$. Nevertheless 

$$

 J[P_n]=\frac{2\lambda}{2\pi(1+n^{-2})}
              \left(n\cos(n^2x-\lambda n^4t)+1\right),

$$

 so $\|J[P_n]-J[\Psi]\|_{L^1}
\geq2\lambda(2n/\pi-1)/(1+n^{-2})\to\infty$. The missing resource is derivative control, not a sharper wave-norm inequality. This example even uses two legitimate free waves. 





<a id="section-2-1"></a>

### 2.1 Coordinates, moving tests and the original law





**Proposition 2.3 (Current under a moving coordinate chart).**

 <a id="p4s:prop:chart"></a> Let $(t,x)\mapsto\chi_t(x)$ be jointly $C^1$, with each $q=\chi_t(x)$ an orientation-preserving diffeomorphism. Put $G=D_x\chi_t$ and $g=\det G>0$. A locally integrable laboratory density/current pair $(\rho,j)$ satisfying the continuity equation transforms to <a id="p4s:eq:chart"></a>


$$

 \widetilde\rho=g\,\rho\circ\chi_t,\qquad
 \widetilde j=gG^{-1}
       \left(j\circ\chi_t-(\rho\circ\chi_t)\partial_t\chi_t\right).

$$

Equation (2.5).

 These obey the transformed continuity equation. In particular a moving surface $F(t,q)=n(t)\cdot(q-C(t))-s$, $|n|=1$, has relative normal flux <a id="p4s:eq:surface"></a>


$$

 j\cdot n+\rho\,n'\cdot(q-C)-\rho\,n\cdot C'.

$$

Equation (2.6).

 

 

**Proof.**

For a compactly supported smooth test $\varphi(t,x)$, set $\psi(t,q)=\varphi(t,\chi_t^{-1}(q))$. The chain rule gives $\nabla_q\psi=G^{-T}\nabla_x\varphi$ and $\psi_t=\varphi_t-\nabla_x\varphi\cdot G^{-1}\chi_t'$. Insert these in the weak continuity equation and use $dq=g\,dx$. This proves [(2.5)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:chart) without a componentwise guess at the current. The derivative along a laboratory path is $dF/dt=F_t+(j/\rho)\cdot\nabla F$; since $|\nabla F|=1$, its density-weighted normal rate is [(2.6)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:surface). 

□



The chart formula fixes the transport part of a transformed current. A position-dependent internal unitary also transforms the connection; one must conjugate the whole parent and include that derivative. Integrating hidden source positions first is generally insufficient: $|\int j\,dy|\leq\int|j|\,dy$ may discard counterflow or coherent terms needed by a trajectory test.

To state the event interface precisely, suppose the complete current already admits a reference path law with one-time density $\rho$ and velocity $j/\rho$, and the original actual law satisfies $\mu_0\leq C\rho_0$. Reweight that same path law by its entrance density ratio. Admit tests $h$ for which $t\mapsto h(t,X_t)$ is absolutely continuous on almost every reference path, with derivative $h_t+(j/\rho)\cdot\nabla h$, and for which the integral below is finite. For example, $C^1$ tests with this integrability have the required chain rule. Then <a id="p4s:eq:path"></a>


$$

 \mathbb E_{\mu_0}\operatorname{Var}_{[0,T]}h(t,X_t)
 \leq C\int_0^T\!\!\int
          |\rho\,h_t+j\cdot\nabla h|\,dq\,dt .

$$

Equation (2.7).

 Indeed, the chain rule along reference paths, entrance domination and Tonelli's theorem prove this in that order. If $h_t+b_{\rm ref}\cdot\nabla h=0$, the integrand becomes $|\nabla h\cdot(j-b_{\rm ref}\rho)|$. Comparison to $j_{\rm ref}=b_{\rm ref}\rho_{\rm ref}$ therefore costs both $j-j_{\rm ref}$ and $b_{\rm ref}(\rho_{\rm ref}-\rho)$. An event estimate additionally needs the test's guard width, initial bad mass, interval, decoder and own reference crossings. Flow existence and reference-compatible selection are separate premises, studied in the companion flow paper [[3](/quantum-measurement/research/complete-current-estimates/bibliography#bib-RodgersP3)]. Equations [(2.4)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:currentbound) and [(2.7)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:path) do not assign a new actual law at an intermediate time. The domination premise concerns the complete original joint law, including retained source and archive coordinates. Absolute continuity alone supplies no finite value of $C$, and an averaged conditional bound supplies no uniform guarantee after arbitrarily rare postselection.

A sharp surface requires an appropriate trace and crossing area formula; a volume $L^1$ current estimate or an almost-every-level coarea statement does not by itself control flux at a prescribed surface. Smooth guard tests can instead bound a traversal that changes $h$ by a stated positive amount. Tangential contacts and moving guards must satisfy their own chain-rule or crossing premises. All such estimates concern the full time interval in [(2.7)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:path).
