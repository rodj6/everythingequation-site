# Section 3: Temporal dressing in the physical form dual

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-3"></a>

## 3 Temporal dressing in the physical form dual

 <a id="p4f:sec:lift"></a>

Response estimates must keep the input that actually drives the complement. For an admitted fixed block decomposition $\mathcal H_P\oplus\mathcal H_Q$, the equation 

$$

 i\dot q=Aq+Lp

$$

 uses the actual $p=P\Psi$, including its feedback through $q$, source phases and clock dynamics. An incident population or a frozen electronic amplitude is not a substitute for this vector. Throughout this section energies are in the units of $i\dot q=Aq+f$; a physical Hamiltonian must be divided by $\hbar$ if time is measured in seconds.

Let $\mathcal V\subset\mathcal H\subset\mathcal V^*$ be a dense separable Hilbert form triple, with the usual pivot identification. A positive form $K\ge I$ identifies $\mathcal V$ with $\operatorname{Dom}K^{1/2}$ and gives the dual norm $\|f\|_{\mathcal V^*,K}=\|K^{-1/2}f\|_{\mathcal H}$. Here the square root on a dual vector is its continuous extension, rather than an assertion that $f\in\mathcal H$. We use the same letter for a self-adjoint operator and its continuous form map $\mathcal V\to\mathcal V^*$ when the domain makes the meaning unambiguous.



**Assumption 3.1 (Common physical form and relative work).**

 <a id="p4f:ass:forms"></a> On $[0,T]$, $A(t)$ is associated with a closed Hermitian form $a_t$ on the same $\mathcal V$. There is a real bounded absolutely continuous scalar $c(t)$ such that 

$$

 k_t=a_t+c(t)\langle\cdot,\cdot\rangle,\qquad K(t)=A(t)+c(t)\ge I.

$$

 The $k_t$ norms are uniformly equivalent to one fixed form norm. For fixed $u,v\in\mathcal V$, $k_t(u,v)$ is absolutely continuous, with a strongly measurable form derivative and its integral identity, satisfying <a id="p4f:eq:relativework"></a>


$$

 |\dot k_t(u,v)|
 \le \nu(t)\|K(t)^{1/2}u\|\|K(t)^{1/2}v\|,
 \qquad \nu\ge0,\quad \nu\in L^1(0,T).

$$

Equation (3.1).

 Strong measurability here includes that the derivative applied to any fixed form vector is measurable in $\mathcal V^*$. 



The shift is an estimate of positivity, not a spectral gap at an incident energy. Nor does this assumption require an operator-norm derivative of a point-Coulomb force. Classical common-form evolution under smoother form hypotheses goes back to Kisyński [[8](/quantum-measurement/research/complete-current-estimates/bibliography#bib-Kisynski1964)]. We give the conforming argument for the precise absolutely continuous relative-work assumptions used here.



**Lemma 3.2 (Homogeneous common-form propagation).**

 <a id="p4f:lem:propagation"></a> Under Assumption [3.1](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:ass:forms) there is a unique unitary propagator $U(t,s)$ on $\mathcal H$. It preserves $\mathcal V$ and, for $s\le t$, <a id="p4f:eq:propagation"></a>


$$

 \|K(t)^{1/2}U(t,s)v\|
 \le \exp\!\left(\frac12\int_s^t\nu(r)\,dr\right)
                 \|K(s)^{1/2}v\|,\qquad v\in\mathcal V.

$$

Equation (3.2).

 For $v\in\mathcal V$ its trajectory is continuous in $\mathcal H$, bounded in $\mathcal V$, and solves $i\partial_t U(t,s)v=A(t)U(t,s)v$ in $\mathcal V^*$. 





**Proof.**

Fix a reference form $K_*$ and let $P_n=1_{[1,n]}(K_*)$. These need not have finite rank. They are contractions in its form and dual norms, converge strongly there, and their ranges lie in $\mathcal V$. On $\mathcal H_n=P_n\mathcal H$, the restricted forms $K_n(t)$ and $A_n(t)=K_n(t)-c(t)I$ are bounded self-adjoint operators. Uniform equivalence gives their local uniform operator bounds. The integral form identity and [(3.1)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:relativework) give absolute continuity in operator norm on each such subspace. The integral equation for the bounded-operator ODE is solved by successive approximations on short intervals and concatenation; its Hermitian generator gives a unitary evolution.

Let $u_n(s)=P_nv$. Differentiation of its form energy yields 

$$

 \frac d{dt}\langle u_n,K_nu_n\rangle
       =\dot k_t(u_n,u_n).

$$

 The two evolution terms cancel because $A_n=K_n-cI$. Applying [(3.1)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:relativework) and Gronwall gives [(3.2)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:propagation) for $u_n$, with $P_nv$ at the entrance. In particular $u_n$ is uniformly bounded in $\mathcal V$. Its derivative, viewed in the full dual by testing against $P_nw$, is uniformly bounded in $\mathcal V^*$.

Weak compactness, followed by a diagonal argument on a countable dense set of form test vectors, gives a limit $u$ weakly continuous in $\mathcal H$ and weakly bounded in $\mathcal V$, with $u(s)=v$. In the integrated equation each test $P_nw$ converges strongly in $\mathcal V$; uniform boundedness of the forms therefore gives $i\dot u=A(t)u$ in $\mathcal V^*$. At every fixed time weak lower semicontinuity of $k_t$ gives the asserted energy bound. This passage uses conforming compressions of the same forms.

We recall explicitly the norm fact that makes this weak construction unique. If $w\in L^2(\mathcal V)$ and $\dot w\in L^2(\mathcal V^*)$, then <a id="p4f:eq:chain"></a>


$$

 \|w(t)\|^2-\|w(s)\|^2
     =2\operatorname{Re}\int_s^t\langle\dot w(r),w(r)\rangle\,dr,

$$

Equation (3.3).

 and $w$ has a continuous $\mathcal H$ representative. One obtains this by time smoothing: for smooth $\mathcal V$-valued functions it is the product rule; Cauchy–Schwarz in the dual pairing passes the integral under convergence in $L^2(\mathcal V)$ and $W^{1,2}(\mathcal V^*)$. The same product rule, integrated from a time whose norm is bounded by its time average, bounds the supremum of the $\mathcal H$ norm by these two space norms. It consequently supplies continuous traces and justifies the endpoint passage as well.

Apply [(3.3)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:chain) to the limit and to differences of solutions. Hermiticity gives $\operatorname{Re}\langle-iA(t)w,w\rangle=0$, proving norm conservation and uniqueness before any strong-convergence claim. Construction backwards from any terminal form vector gives an inverse evolution. Density extends the isometries to mutually inverse unitaries on $\mathcal H$. Uniqueness gives their composition rule and strong continuity. The displayed energy bound proves invariance of $\mathcal V$. It also gives weak measurability there; separability gives the strong measurability needed for the form-valued integrals below. 

□





**Theorem 3.3 (Ordered inverse dressing for dual forcing).**

 <a id="p4f:thm:lift"></a> Under Assumption [3.1](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:ass:forms), let $q_0\in\mathcal V$ and $f\in W^{1,1}(0,T;\mathcal V^*)$. Define 

$$

 \ell(t)=K(t)^{-1/2}f(t),\qquad
 h(t)=K(t)^{-1/2}\dot f(t),\qquad
 N(t)=\int_0^t\nu(s)\,ds .

$$

 Then $i\dot q=A(t)q+f$, $q(0)=q_0$, has a unique solution in $C([0,T];\mathcal H)\cap L^\infty(0,T;\mathcal V)$. The inverse lift $g=K^{-1}f$ belongs to $W^{1,1}(0,T;\mathcal V)$ and obeys the ordered identity <a id="p4f:eq:inversederivative"></a>


$$

 \dot g=K^{-1}\dot f-K^{-1}\dot K K^{-1}f,\qquad
 K^{1/2}\dot g=h-C_t\ell,\qquad
 C_t=K^{-1/2}\dot K K^{-1/2}.

$$

Equation (3.4).

 For $z=q+g$ and $\mathcal E_z(t)=\|K(t)^{1/2}z(t)\|$, <a id="p4f:eq:liftbound"></a>
<a id="p4f:eq:qbound"></a>


$$
\begin{aligned}\mathcal E_z(t)
 &\le e^{N(t)/2}\left[
       \mathcal E_z(0)+
       \int_0^t e^{-N(s)/2}
          \{(|c|+\nu)\|\ell\|+\|h\|\}(s)\,ds\right],
       \\
 \|K(t)^{1/2}q(t)\|&\le\mathcal E_z(t)+\|\ell(t)\|.
       
\end{aligned}
$$

Equation (3.5, 3.6).

 The actual entrance term is $\mathcal E_z(0)=\|K(0)^{1/2}(q_0+K(0)^{-1}f(0))\|$. 





**Proof.**

Uniform equivalence and coercivity make each $K(t)$ a bounded isomorphism $\mathcal V\to\mathcal V^*$. The exact inverse difference identity is 

$$

 K(t)^{-1}-K(s)^{-1}
   =-K(t)^{-1}[K(t)-K(s)]K(s)^{-1}.

$$

 The relative-work bound makes its norm difference bounded by a constant times $\int_s^t\nu$. For a fixed dual vector, the resulting inverse path is absolutely continuous into the Hilbert space $\mathcal V$. Strong differentiation of the form identity on fixed vectors, the inverse difference identity, and uniform boundedness therefore give $(K^{-1})'f=-K^{-1}\dot K K^{-1}f$ on fixed vectors. For completeness, one can choose a common full-measure set first on a countable dense set of form vectors, then use the integrable relative bound and Lebesgue differentiation to extend the difference quotient to each vector. Approximating the absolutely continuous path $f$ by simple derivatives proves the product rule for $K^{-1}f$. This establishes [(3.4)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:inversederivative) in $\mathcal V$. Its second equality is a form-Riesz identification; no derivative of $K^{-1/2}$ has been taken.

Since $A=K-cI$, direct substitution gives <a id="p4f:eq:dressed"></a>


$$

 i\dot z=A(t)z+r,\qquad r=cg+i\dot g\in L^1(0,T;\mathcal V).

$$

Equation (3.7).

 Indeed 

$$

 \|K^{1/2}r\|\le (|c|+\nu)\|\ell\|+\|h\|.

$$

 These terms are integrable: $f$ is bounded in the fixed dual norm, $\dot f$ is integrable, and the form norms are uniformly equivalent.

Use Lemma [3.2](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:lem:propagation) to define the form-valued Duhamel integral 

$$

 z(t)=U(t,0)(q_0+g(0))
          -i\int_0^tU(t,s)r(s)\,ds.

$$

 Its form norm is bounded by the right side of [(3.5)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:liftbound). Fubini in the form-dual weak equation verifies [(3.7)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:dressed); the usual Hilbert-space Duhamel integral is the same vector, so $z$ is continuous in $\mathcal H$. Subtracting $g$ gives the asserted solution $q$. The difference of any two such solutions has derivative $-iA(t)w$ in $L^\infty(\mathcal V^*)$; the norm chain rule makes it zero when its entrance is zero. This proves uniqueness and both inequalities. 

□



The estimate trades temporal regularity in the form dual for spatial first-form control. It does not require $f\in\mathcal V$ or $Af\in\mathcal H$. For an actual coupling $f=L(t)p(t)$, sufficient explicit input contracts are <a id="p4f:eq:inputcontract"></a>


$$
\begin{aligned}\|K^{-1/2}LF^{-1}\|&\le b(t),&
 \|K^{-1/2}\dot L F^{-1}\|&\le b_1(t),\\
 \|\ell\|&\le b\|Fp\|,&
 \|h\|&\le b_1\|Fp\|+b\|F\dot p\|.
 
\end{aligned}
$$

Equation (3.8).

 Here $F\ge I$ is a fixed input graph and the products and derivatives must hold on their stated domains. The last quantity is a property of the coupled input, not of a frozen occupation. A changing $F$ adds its own derivative or commutator.



**Corollary 3.4 (Retained internal right clock).**

 <a id="p4f:cor:clock"></a> For a Hilbert–Schmidt factor satisfying $i\dot q=Aq-qD+f$, with fixed bounded Hermitian right clock $D$, the same argument applies with 

$$

 r=K^{-1}\{i\dot f+cf+fD-i\dot K K^{-1}f\}.

$$

 In [(3.5)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:liftbound) its inhomogeneous norm can be bounded by $\|K^{-1/2}(i\dot f+cf+fD)\|_{\rm HS}
 +\nu\|\ell\|_{\rm HS}$. 

 

**Proof.**

With $z=q+g$, substitution gives $i\dot z=Az-zD+cg+gD+i\dot g$. Right multiplication by the clock unitary removes $-zD$ and preserves Hilbert–Schmidt norms, including the physical left form norm. Apply the preceding Duhamel estimate and substitute [(3.4)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:inversederivative). 

□



Only a bounded physical-coordinate-independent internal clock is covered by this corollary. An unbounded right source clock needs its own graph contract. A positional purifier cannot be changed into an internal index just because the Hilbert-space expressions have the same size. The scalar $c$ is not free: it appears in the full combination $i\dot f+cf+fD$, while $\dot c$ already belongs to $\dot K$. Phases may cancel a term only through that complete physical combination.



<a id="section-3-1"></a>

### 3.1 Two sharp boundaries of the temporal argument





**Example 3.5 (Continuous dual forcing need not give a wave).**

 <a id="p4f:ex:roughforcing"></a> On $\ell^2(n\ge2)$ let $A_n=n^2$, $K_n=n^2+1$, and $\ell_n(t)=n^{-1}e^{-in^2t}$. Dominated convergence makes $\ell(t)$ continuous in $\ell^2$; hence $f=K^{1/2}\ell$ is continuous in $\mathcal V^*$. Its zero-initial causal solution has components 

$$

 q_n(t)=-it\,\frac{\sqrt{n^2+1}}n e^{-in^2t}.

$$

 For every $t>0$ these are not square summable. Thus a bounded form-dual coupling and continuous input alone do not give a physical Hilbert-space response. The time-derivative hypothesis in Theorem [3.3](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:thm:lift) fails. 

 

**Proof.**

The dual group is diagonal, so substitution in the causal integral gives the displayed formula. Its component magnitude tends to $t$. On the other hand the derivative of $\ell_n$ has magnitude $n$, so it cannot supply the required integrable dual derivative of $f$. 

□





**Proposition 3.6 (Why an inverse square root is not the lift).**

 <a id="p4f:prop:sqrtwarning"></a> The relative form-speed condition does not give a dimension-independent bound on $K^{1/2}(K^{-1/2})'$. It does give an ordered bounded inverse derivative as in [(3.4)](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:eq:inversederivative). 

 

**Proof.**

In a finite eigenbasis, write $\dot K=K^{1/2}CK^{1/2}$ and $K_{ii}=\lambda_i>0$. Differentiate $(K^{1/2})^2=K$ and then its inverse; the Sylvester equation gives 

$$
\begin{aligned}(K^{-1/2})'_{ij}
   &=-\frac{C_{ij}}{\sqrt{\lambda_i}+\sqrt{\lambda_j}},\\
 [K^{1/2}(K^{-1/2})']_{ij}
   &=-\frac{\sqrt{\lambda_i}C_{ij}}
                     {\sqrt{\lambda_i}+\sqrt{\lambda_j}}.
\end{aligned}
$$

 The first kernel equals $-\int_0^\infty e^{-sK^{1/2}}C e^{-sK^{1/2}}\,ds$, so its norm is at most $\|C\|/(2\sqrt{\lambda_{\min}})$. The warning concerns the second, weighted derivative.

Take $\lambda_j=4^j$ and the Hermitian matrix $C_{ij}=i/[\pi(i-j)]$ for $i\ne j$, $C_{ii}=0$, on indices $1,\ldots,N$. Its norm is at most one: it is a compression of the convolution operator on $\ell^2(\mathbb Z)$ whose Fourier multiplier is, up to its sign, $(\theta-\pi)/\pi$ on $(0,2\pi)$. This follows by integrating the Fourier series of the sawtooth, or by Abel summing $\sum_{d\ne0}e^{id\theta}/d=i(\pi-\theta)$. For the unit vector $v=N^{-1/2}(1,\ldots,1)$, pairing the two off-diagonal entries at separation $d$ gives 

$$

 \left|\left\langle v,
       K^{1/2}(K^{-1/2})'v\right\rangle\right|
 =\frac1{\pi N}\sum_{d=1}^{N-1}
       \frac{(N-d)\tanh(d\log2/2)}d .

$$

 For $2\le d\le N/2$, the hyperbolic tangent is at least $3/5$ and $(N-d)/N\ge1/2$. The harmonic sum diverges, proving the assertion. These are actual positive paths $K(s)=K(0)^{1/2}(I+sC)K(0)^{1/2}$, $|s|\leq1/2$. Since $K(0)\geq4I$, these obey $K(s)\geq2I$; their relative speed is bounded by $(1-|s|)^{-1}\leq2$. The ordered full inverse in the theorem avoids this weighted-square-root obstruction. 

□
