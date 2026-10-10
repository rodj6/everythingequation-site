# Section 7: Exact reset with its correlations retained

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-7"></a>

## 7 Exact reset with its correlations retained

 <a id="p2r:sec:reset"></a>

The smooth copy gate does not return an exact factor scratch. The next inverse baker nevertheless needs that quantum factor. A new reset mode, already present in [(5.1)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:bank), closes this compatibility requirement. Its actual population need not be fresh or conditionally independent.



**Proposition 7.1 (A positive arbitrary-input wave reset with $C^5$ joins).**

 <a id="p2r:prop:reset"></a> For $0\leq\tau\leq2\pi$ put <a id="p2r:eq:resetprofile"></a>


$$

 b(\tau)=1-\alpha\sin^8(\tau/2),\qquad
 \nu^2=b^{-4}-b''/b ,

$$

Equation (7.1).

 where $\alpha\in(0,1/2)$ is the unique solution <a id="p2r:eq:root"></a>


$$

 \frac1{2\pi}\int_0^{2\pi}
              [1-\alpha\sin^8(\tau/2)]^{-2}\,d\tau=\frac32 .

$$

Equation (7.2).

 The scalar two-coordinate Hamiltonian <a id="p2r:eq:resetH"></a>


$$

 H_R=-\partial_x^2-\partial_r^2+
                    (x^2+r^2)/4+\frac{\nu^2-1}{8}(x-r)^2

$$

Equation (7.3).

 has a nonnegative coupling, zero endpoint coupling, and a $C^5$ joining profile. Its coefficient satisfies $1\leq\nu^2\leq18$. Its complete propagator is <a id="p2r:eq:resetoperator"></a>


$$

 U_R(2\pi)=-i\,\mathrm{SWAP}_{xr}.

$$

Equation (7.4).

 In particular, for every normalized, possibly entangled Hilbert-valued scratch wave, 

$$

 \Psi(x,\mathrm{rest})\varphi(r)
       \longmapsto -i\varphi(x)\Psi(r,\mathrm{rest}).

$$

 Every old scratch correlation is retained in $r$. 

 

**Proof.**

Expanding the positive integrand in [(7.2)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:root) gives <a id="p2r:eq:rootseries"></a>


$$

 R(\alpha)=\sum_{k=0}^\infty
 (k+1)\alpha^k\frac{\binom{8k}{4k}}{2^{8k}}.

$$

Equation (7.5).

 It is continuous and strictly increasing on $[0,1/2]$. At zero it is $1$. At $1/2$ its first four terms alone exceed $3/2$ by $11015/8388608$. This proves existence and uniqueness. Since every sine moment is at most one, the remainder after $k=N$ is bounded by <a id="p2r:eq:roottail"></a>


$$

 \frac{\alpha^{N+1}[(N+2)-(N+1)\alpha]}{(1-\alpha)^2}.

$$

Equation (7.6).

 Positive rational sums and bisection therefore locate the exact coefficient to any required finite accuracy. The theorem uses the exact root; measured calibration errors are a separate comparison.

For positivity write $u=\sin^2(\tau/2)$, so $(\sin^8(\tau/2))''=2u^3(7-8u)$. If $b''\leq0$, then $\nu^2\geq1$ immediately. Otherwise $u>7/8$, $b''\leq2\alpha$, and 

$$

 b^{-3}-b=\frac{1-b^4}{b^3}
 \geq4(1-b)=4\alpha u^4
 >\frac{2401}{1024}\alpha>2\alpha\geq b''.

$$

 This again gives $\nu^2\geq1$. Also $b\geq1/2$ and $|b''|\leq1$, so $\nu^2\leq16+2=18$. The function $1-b$ vanishes to order eight at both endpoints, so $\nu^2-1$ vanishes to order six. Static zero extensions give the asserted $C^5$ interaction.

In normal coordinates $q_\pm=(x\pm r)/\sqrt2$, the plus mode has frequency $1$, while the minus mode has frequency $\nu$. The exact Ermakov relation is $b''+\nu^2b=b^{-3}$. Let $\theta'=b^{-2}$ and $\theta(0)=0$. For an oscillator eigenfunction $f_k$, the minus-mode solution is 

$$

 b^{-1/2}\exp\!\left(i\frac{b'}{4b}q_-^2\right)
 f_k(q_-/b)\exp[-i(k+1/2)\theta].

$$

 Direct substitution verifies this formula. At the endpoint $b=1$, $b'=0$ and $\theta=3\pi$, so the minus operator is $i$ times parity. The plus-mode duration $2\pi$ operator is $-I$. Relative parity exchanges $x$ and $r$, proving [(7.4)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:resetoperator) on the oscillator basis and hence on all $L^2$ by unitarity. Tensoring with any passive Hilbert space proves the entangled-input assertion. 

□



This operator assertion is the exact quantum stock requirement. It is not an exchange of actual configurations. Proposition [10.1](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:swap) supplies an explicit capped, finite-Fisher population for which the same wave reset has the identity actual endpoint map and preserves conditional bias. The inverse digit arithmetic in Proposition [5.1](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:prop:digits) is deliberately independent of such a freshness claim.
