# Section 5: Reading a retained archive into different receivers

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-5"></a>

## 5 Reading a retained archive into different receivers

 <a id="p2r:sec:records"></a>

The objective in this section is a joint path event. At a specified entrance an archive has an actual position. Its first $n$ binary digits are to be written into $n$ different receivers, and every written receiver must remain in its assigned separated region until a common final time. The construction retains the scratch, archive, receivers, reset modes and all earlier records. Its reset restores a quantum factor; it does not assume a new actual population.

We use dimensionless positions in units $\sigma$ and time $\tau=\omega t$, with $\sigma^2=\hbar/(2m\omega)$. Put 

$$

 \varphi(q)=(2\pi)^{-1/4}e^{-q^2/4},\qquad
 \gamma(q)=|\varphi(q)|^2,\qquad
 \Phi(q)=\int_{-\infty}^q\gamma(a)\,da,\qquad P=-2i\partial_q.

$$

 Thus $[q,P]=2i$, the oscillator is $H_{\rm o}=-\partial_q^2+q^2/4$, and its scalar canonical current is $j=2\operatorname{Im}(\Psi^\dagger\partial_q\Psi)$. During a compact baker control the additional current of Theorem [3.1](/quantum-measurement/research/repeated-position-records/the-scalar-hamiltonian-and-complete-current#p2c:thm:compiler) is retained; a real stationary wave does not then imply zero current.

The scratch $x$ and archive $y$ are two coordinates of one planar carrier. Each $z_j$ is the longitudinal coordinate of a different physical receiver, and each $r_j$ is a distinct retained reset mode. The reference entrance contains the factors <a id="p2r:eq:bank"></a>


$$

 \varphi(x)\varphi(y)
       \prod_{j=1}^n\varphi(z_j)\varphi(r_j)

$$

Equation (5.1).

 tensored with the specified remaining wave. All initially unused modes remain oscillator factors until used. Every genuine positional copy or reference belongs to the full configuration; a finite internal fibre is included in the wave norm. The actual entrance law satisfies <a id="p2r:eq:cap"></a>


$$

 d\mu_0\leq C|\Psi_0|^2\,dq

$$

Equation (5.2).

 on that complete state, or conditionally on a retained external parameter with the same uniform $C$. Equivariance propagates this global inequality. It is never asserted after conditioning on a selected recorded bit. Proposition [10.2](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:original) distinguishes this premise from an earlier preparation statement conditional on a bank. For the full-flow assertion, additional positional quantum factors must have propagated regularity sufficient for a $C^1$ normalized, conserved complete spacetime current and for the finite current integrals specified in the proof of Proposition [6.3](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:prop:copy). Propagation of all finite weighted Sobolev orders under their specified decoupled dynamics is one sufficient choice. A passive finite internal reference is unrestricted. The constructed Gaussian bank meets these conditions directly. A retained external conditioning parameter is fixed during the protocol; it is not assigned a wave amplitude merely by being retained.



**Proposition 5.1 (Actual digits, independent of the scratch population).**

 <a id="p2r:prop:digits"></a> Let $u=\Phi(x)$ and $v=\Phi(y)$. Off dyadic boundaries the inverse baker map is <a id="p2r:eq:digit"></a>


$$

 s=\lfloor2v\rfloor,\qquad v^+=2v-s,\qquad u^+=(u+s)/2.

$$

Equation (5.3).

 It is invertible and area preserving, and $\lfloor2u^+\rfloor=s$ for every $0<u<1$. Repeating it exposes the successive digits of the actual entrance archive, even if every subsequent scratch position is correlated with all previous records. For the smooth inverse of Proposition [2.3](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:prop:inverse), the endpoint is exactly [(5.3)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:digit) on <a id="p2r:eq:inversegood"></a>


$$

 u\in[2h,1-2h],\qquad
 v\in[h/2,(1-h)/2]\cup[(1+h)/2,1-h/2].

$$

Equation (5.4).

 Its reference exceptional area is <a id="p2r:eq:beta"></a>


$$

 \beta_h=1-(1-4h)(1-2h)=6h-8h^2 .

$$

Equation (5.5).

 

 

**Proof.**

On each half-strip the determinant is $(1/2)2=1$. Recover $s$ from $\lfloor2u^+\rfloor$, then $u=2u^+-s$, $v=(v^++s)/2$. The archive update contains no $u$. It follows by induction that the exposed bits are the binary digits of $v_0$ regardless of the scratch values. The set [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) is the image of the forward baker's two retained rectangles. Reversing its complete smooth flow proves the endpoint assertion; its area gives [(5.5)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:beta). 

□



For comparison with an earlier warmup event, suppose the forward archive recursion was $v_k=(v_{k-1}+a_k)/2$, with actual declarations $a_k\in\{0,1\}$. Then 

$$

 v_n=2^{-n}\left(v_0+\sum_{k=1}^n2^{k-1}a_k\right).

$$

 The inverse reader emits $a_n,a_{n-1},\ldots,a_1$. Accordingly receiver names must be reversed for a chronological decoder. An already priced event on which a smooth warmup differs from this history relation is added once; the reader itself does not manufacture a missing relation to an earlier writer event.



<a id="section-5-1"></a>

### 5.1 An exact sign-preserving scalar loader



For $d\geq0$ define 

$$

 \rho_d(x)=\tfrac12\{\gamma(x-d)+\gamma(x+d)\},\qquad
 R_d=\sqrt{\rho_d},\qquad
 F_d(x)=\tfrac12\{\Phi(x-d)+\Phi(x+d)\}.

$$

 The square root is taken after adding densities. The sum of the two Gaussian amplitudes is a different wave and will be used only as a controlled comparator below.



**Proposition 5.2 (Loader, domain and stationary final hold).**

 <a id="p2r:prop:loader"></a> Choose <a id="p2r:eq:loadercurve"></a>


$$

 d(\tau)=A\,s(\tau/T_L),\qquad
 s(a)=35a^4-84a^5+70a^6-20a^7,\quad 0\leq a\leq1,

$$

Equation (5.6).

 with static extensions. This center is $C^3$ across its joins; the resulting potential is $C^1$ in time and smooth in position. If $35A/(16T_L)<1/\sqrt2$, the scalar Hamiltonian $H_L=-\partial_x^2+V_L$ below has a common oscillator strong domain and an exact normalized solution <a id="p2r:eq:loaderwave"></a>
<a id="p2r:eq:loaderpotential"></a>


$$
\begin{aligned}\psi_L(x,\tau)&=R_{d(\tau)}(x)e^{iS(x,\tau)},&
 S&=\frac{d'}{2d}\log\cosh(dx),\\
 v_L&=d'\tanh(dx),&
 V_L&=\frac{R_d''}{R_d}-S_\tau-\frac{v_L^2}{4}.
 
\end{aligned}
$$

Equation (5.7, 5.8).

 The expressions at $d=0$ have their continuous limits. Every actual trajectory preserves $F_d(x)$ and its initial sign. At the endpoint the exact wave is the positive $R_A$, and its holding Hamiltonian is <a id="p2r:eq:hold"></a>


$$

 H_A=-\partial_x^2+U_A(x)=Q_A^\dagger Q_A,\qquad
 Q_A=\partial_x-R_A'/R_A,\qquad U_A=R_A''/R_A .

$$

Equation (5.9).

 Its complete scalar current vanishes pointwise. 

 

**Proof.**

Writing $L=\log R_d$ gives 

$$

 L=\text{constant}-(x^2+d^2)/4+\tfrac12\log\cosh(dx),\qquad
 U_d=-\tfrac12+\tfrac{d^2}{2}\operatorname{sech}^2(dx)
                  +\tfrac14(x-d\tanh(dx))^2 .

$$

 The mixture satisfies the exact conservation identity 

$$

 \partial_\tau\rho_d+
 \partial_x\!\left\{\tfrac{d'}2[\gamma(x-d)-\gamma(x+d)]\right\}=0.

$$

 Its positive-density current divided by $\rho_d$ is $v_L$. Since $2S_x=v_L$, substitution in the imaginary and real parts of $i\partial_\tau\psi_L=H_L\psi_L$ gives precisely [(5.8)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:loaderpotential). This verifies both equations, not only a prescribed real potential.

Here are sufficient global domain estimates. Set 

$$

 P_1=\frac{35A}{16T_L},\quad P_2=\frac{8A}{T_L^2},\quad
 P_3=\frac{53A}{T_L^3},\quad
 P_{13}=140^3(5/14)^5(9/14)^9 A^2/T_L^3 .

$$

 They bound $|d'|,|d''|,|d'''|,(d')^3/d$, respectively. Indeed $s'=140a^3(1-a)^3$, its maximum is $35/16$, the acceleration maximum is $84/(5\sqrt5)<8$, and the jerk maximum is $105/2<53$. The polynomial $s(a)/a^4$ decreases from $35$ to $1$; hence $(s')^3/s\leq140^3a^5(1-a)^9$, with maximum at $a=5/14$. The last ratio tends to zero at the initial join.

The inequalities 

$$

 U_d\geq x^2/8-d^2/4-1/2,\qquad
 |S_\tau|\leq P_2|x|/2+P_1^2x^2/4

$$

 give, with $a_0=1/8-P_1^2/4>0$, 

$$

 V_L\geq (a_0/2)x^2-
 \left(A^2/4+1/2+P_1^2/4+P_2^2/(8a_0)\right).

$$

 Conversely 

$$

 |V_L|\leq(1/4+P_1^2/4)x^2+
               (A/2+P_2/2)|x|+1/2+3A^2/4+P_1^2/4.

$$

 The elementary bound $|a\operatorname{sech}^2(a)\tanh(a)|\leq1/2$ gives 

$$

 |V_{L,xx}|\leq(AP_2+2P_1^2)/2+P_1^2A^2
                                      +1/2+3A^2/2+A^4.

$$

 Finally, twice differentiating the integral expression $S=\frac12\int_0^x d'\tanh(dy)\,dy$ shows 

$$

 |S_{\tau\tau}|\leq P_3|x|/2+
                             (3P_1P_2+P_{13})x^2/4.

$$

 Differentiating the remaining terms gives a uniform $|V_{L,\tau}|\leq C(1+x^2)$, continuously through both joins.

Choose a common shift so that $W=V_L+c\geq a x^2+1$. For a compact smooth test, 

$$

 \|(-\partial_x^2+W)f\|^2
 =\|f''\|^2+\|Wf\|^2+
          2\int W|f'|^2-\int W''|f|^2 .

$$

 Together with the preceding upper bound this makes the Hamiltonian graph equivalent to $\|f''\|+\|x^2f\|+\|f\|$. The real resolvent cutoff identity for an $L^2$ distributional solution of $(H_L+\lambda)f=0$ is 

$$

 \int |(\chi_Rf)'|^2+(V_L+\lambda)|\chi_Rf|^2
       =\int|\chi_R'|^2|f|^2\longrightarrow0.

$$

 Local elliptic regularity justifies the test. Positivity excludes a nonzero such solution; the semibounded closure is self-adjoint. Cutoff and mollifier approximation and the graph equivalence give the common domain $H^2(\mathbb R)\cap\{x^2f\in L^2\}$. The time estimate makes $H_L(\tau)$ continuously differentiable on this domain, supplying common-domain unitary evolution by the common-domain theorem in [[5](/quantum-measurement/research/repeated-position-records/bibliography#bib-SchmidGriesemer2014)]. The explicit wave already constructed is its unique solution.

The velocity is globally bounded by $|d'|$, with derivative bounded by $|dd'|$, so its ordinary trajectories are complete and unique. Continuity and the conservation equation give $dF_d(x(\tau))/d\tau=0$. Symmetry fixes $x=0$. At the endpoint $d'=d''=0$, $S=0$, and direct multiplication gives the factorization [(5.9)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:hold). Thus $R_A$ is its normalized zero-energy state and has identically zero canonical velocity. 

□



For an inverse bit $s$, the endpoint obeys $F_A(x_L)=(u+s)/2$. In particular its sign is the actual extracted bit. With $\xi_A=\Phi(-A/2)-\Phi(-3A/2)$, symmetry gives $2F_A(-A/2)=1-\xi_A$ and $2F_A(A/2)=1+\xi_A$. If $\xi_A\leq2h$, every good scratch in [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) is also loaded beyond $|x_L|=A/2$. The receiver theorem below needs only the sign, and prices its own separated endpoint without assigning the scratch a Born population.
