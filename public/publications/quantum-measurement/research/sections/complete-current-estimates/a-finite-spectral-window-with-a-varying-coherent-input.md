# Section 4: A finite spectral window with a varying coherent input

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-4"></a>

## 4 A finite spectral window with a varying coherent input

 <a id="p4f:sec:window"></a>

We next fix the complete self-adjoint complement $A$. Its Hilbert space may contain continua and all quantum source coordinates. Let $\mathcal U$ be the input Hilbert space, $B:\mathcal U\to\mathcal H$ bounded, and $a\in L^2(0,T;\mathcal U)$. The zero-initial response is <a id="p4f:eq:boundedresponse"></a>


$$

 q_B(t)=-i\int_0^t e^{-iA(t-s)}B a(s)\,ds .

$$

Equation (4.1).

 A spectral sector can be included by replacing $B$ with $CB$ for a spectral projection $C$ of $A$. The input may change direction arbitrarily in $\mathcal U$.



**Lemma 4.1 (An operator spectral measure on one interval).**

 <a id="p4f:lem:interval"></a> Let $I=[\alpha,\alpha+l)$, $l>0$, and suppose $B^*E_A(I)B\le mI_{\mathcal U}$. For $v\in H^1(I;\mathcal U)$, the spectral integral $\mathcal T_Iv=\int_I E_A(d\lambda)Bv(\lambda)$ satisfies <a id="p4f:eq:interval"></a>


$$

 \|\mathcal T_Iv\|^2
 \le2m\left\{l^{-1}\|v\|_{L^2(I)}^2+
                         l\|v'\|_{L^2(I)}^2\right\}.

$$

Equation (4.2).

 





**Proof.**

Let $\bar v=l^{-1}\int_Iv$ be the Bochner mean. The fundamental theorem for Hilbert-valued $H^1$ functions gives 

$$

 v(\lambda)=\bar v+\int_I k(\lambda,\xi)v'(\xi)\,d\xi,
 \qquad
 k(\lambda,\xi)=1_{\xi<\lambda}
                    -\frac{\alpha+l-\xi}{l},\qquad |k|\le1.

$$

 For every scalar $b$ supported in $I$ with $|b|\le1$, 

$$

 \|b(A)E_A(I)B\|^2
 =\|B^*E_A(I)|b(A)|^2B\|\le m.

$$

 Consequently the spectral integral has the precise order 

$$

 \mathcal T_Iv=E_A(I)B\bar v+
     \int_I k(A,\xi)E_A(I)Bv'(\xi)\,d\xi.

$$

 For smooth $v$ this follows by its displayed integral representation and bounded spectral calculus. The same formula defines a continuous extension to $H^1$. It gives 

$$

 \|\mathcal T_Iv\|
 \le\sqrt m\left\{l^{-1/2}\|v\|_{L^2(I)}
                         +l^{1/2}\|v'\|_{L^2(I)}\right\}.

$$

 Squaring and using $(x+y)^2\le2x^2+2y^2$ proves [(4.2)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:interval). No common eigenvector of the input-valued function or simultaneous diagonalization of the operator measure was assumed. 

□





**Theorem 4.2 (Finite-imaginary-part response window).**

 <a id="p4f:thm:window"></a> For $\eta>0$ define the positive operator <a id="p4f:eq:poisson"></a>


$$

 M_\eta(E)=\frac1\pi B^*
             \frac{\eta}{(A-E)^2+\eta^2}B .

$$

Equation (4.3).

 Suppose $M_\eta(E)\le s_\eta I$ for all real $E$, or at the centers of a partition into intervals of length $2\eta$ covering the relevant spectrum. Then, for $0\le t\le T$, <a id="p4f:eq:window"></a>


$$

 \|q_B(t)\|^2\le
 4\pi^2s_\eta(1+\eta^2t^2)
                   \int_0^t\|a(s)\|^2\,ds .

$$

Equation (4.4).

 Atoms, singular spectral measures and thresholds are allowed. The coefficient is an operator ceiling for the complete input space, not a scalar response for one incident column. 





**Proof.**

On $I_j=[E_j-\eta,E_j+\eta)$ the Poisson kernel in [(4.3)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:poisson) is at least $1/(2\pi\eta)$. Hence $B^*E_A(I_j)B\le2\pi\eta s_\eta I$. Set 

$$

 v_t(\lambda)=\int_0^t
                  e^{i\lambda(s-t/2)}a(s)\,ds .

$$

 This Bochner Fourier transform is in $H^1(\mathbb R;\mathcal U)$, even though no derivative of $a$ was required. Hilbert-valued Plancherel gives 

$$
\begin{aligned}\|v_t\|_{L^2(\mathbb R)}^2
     &=2\pi\int_0^t\|a(s)\|^2\,ds,\\
 \|v_t'\|_{L^2(\mathbb R)}^2
     &=2\pi\int_0^t(s-t/2)^2\|a(s)\|^2\,ds
       \le\frac{t^2}{4}\|v_t\|_{L^2(\mathbb R)}^2.
\end{aligned}
$$

 The full spectral integral of $v_t$ differs from $q_B(t)$ only by $-i e^{-iAt/2}$. This identity follows directly by Fubini from [(4.1)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:boundedresponse). The outputs $\mathcal T_{I_j}v_t$ lie in mutually orthogonal spectral subspaces. Apply Lemma [4.1](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:lem:interval) with $l=2\eta$, $m=2\pi\eta s_\eta$ and sum: 

$$

 \|q_B(t)\|^2
 \le 2\pi s_\eta\|v_t\|_2^2+
                    8\pi\eta^2s_\eta\|v_t'\|_2^2 .

$$

 The Plancherel identities give [(4.4)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:window). Orthogonality and monotone summation justify infinitely many intervals without a dimension or number-of-channels factor. 

□



The interval derivative term is substantive. A ceiling on $B^*E_A(I)B$ by itself cannot bound a spectral integral of a changing vector by a dimension-free multiple of $\sup_\lambda\|v(\lambda)\|^2$. The time-centered Fourier representation is what supplies the derivative in this theorem. It is a derivative in spectral energy, not a time-regularity premise on the actual input.

For intervals of half-width $\delta$ instead of $\eta$, the same proof gives <a id="p4f:eq:otherwindow"></a>


$$

 \|q_B(t)\|^2\le
 2\pi^2s_\eta\frac{\eta^2+\delta^2}{\eta}
           (\delta^{-1}+\delta t^2)
                      \int_0^t\|a(s)\|^2\,ds.

$$

Equation (4.5).

 Indeed the interval measure costs $m=\pi(\eta^2+\delta^2)s_\eta/\eta$ and its length is $2\delta$. Thus the observation window can be chosen to match an earned response table.

If $B=LF^{-1}$, use $a=Fp$ with the actual input. For $F=I$ and a normalized full block evolution, $\int_0^t\|p(s)\|^2ds\le t$; choosing $\eta=1/T$ gives the uniform ceiling $8\pi^2s_{1/T}T$. If $F$ is dimensionless and $L,A$ have inverse-time units, $s_\eta$ has inverse-time units, so this norm bound is dimensionless. An atom of response weight $w$ at $\lambda_0$ has $M_\eta(\lambda_0)=w/(\pi\eta)$, whereas a resonant constant input can give response $wt^2$. The theorem retains that pole through $s_\eta$; it does not convert it into a decay rate or a gap.



<a id="section-4-1"></a>

### 4.1 Unbounded form coupling: near response and far dressing





**Theorem 4.3 (Coherent near/far response in the physical form).**

 <a id="p4f:thm:hybrid"></a> Let $A$ be fixed self-adjoint, $K=A+c\ge I$, and $F\ge I$ a fixed positive input graph. Assume 

$$

 B=K^{-1/2}LF^{-1}:\mathcal U\longrightarrow\mathcal H
 \quad\hbox{is bounded}.

$$

 Thus $LF^{-1}=K^{1/2}B$ is a bounded map into $\mathcal V^*$, possibly not into $\mathcal H$. Assume $Fp\in L^2(0,T;\mathcal U)$ for the near-response statement. For $J_0=[E_0-\Lambda,E_0+\Lambda]$, $\Lambda>0$, let $C=1_{J_0}(A)$. For $j=0,1$ set 

$$

 B_j=K^{(j+1)/2}CB,\qquad
 M_{j,\eta}(E)=\frac1\pi B^*C K^{j+1}
                    \frac{\eta}{(A-E)^2+\eta^2}CB .

$$

 These $B_j$ are bounded and $M_{j,\eta}$ are positive operator spectral responses. If $M_{j,\eta}(E)\le s_{j,\eta}I$ at the required centers, the zero-initial near response satisfies <a id="p4f:eq:near"></a>


$$

 \|K^{j/2}q_{\rm near}(t)\|^2
 \le4\pi^2s_{j,\eta}(1+\eta^2t^2)
                          \int_0^t\|Fp(s)\|^2\,ds .

$$

Equation (4.6).

 Let 

$$

 R_j=K^{(j+1)/2}(A-E_0)^{-1}(1-C)B .

$$

 If $a_0(s)=e^{iE_0s}Fp(s)\in W^{1,1}(0,t;\mathcal U)$, the far response satisfies <a id="p4f:eq:far"></a>
<a id="p4f:eq:farcoeff"></a>


$$
\begin{aligned}\|K^{j/2}q_{\rm far}(t)\|
 &\le\|R_j\|
   \left\{\|a_0(t)\|+\|a_0(0)\|
                       +\int_0^t\|\dot a_0(s)\|\,ds\right\},
                       \\
 \|R_0\|&\le
       \frac{\sqrt{\Lambda+|E_0+c|}}{\Lambda}\|B\|,
 &\|R_1\|&\le
       \left(1+\frac{|E_0+c|}{\Lambda}\right)\|B\|.
                       
\end{aligned}
$$

Equation (4.7, 4.8).

 An original $q_0\in\mathcal V$ contributes the separate homogeneous term $e^{-iAt}q_0$, with its original form norm. It is not part of [(4.6)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:near). 





**Proof.**

The causal integral is first defined in $\mathcal V^*$, where $e^{-iAt}$ is a unitary group in the $K$ dual norm. On the bounded spectral interval, multiplication by $K^{j/2}C$ turns its forcing into $B_jFp$. Apply Theorem [4.2](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:thm:window) to this bounded coupling to obtain [(4.6)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:near).

On the far sector put $D=A-E_0$. Commuting only functions of this same self-adjoint $A$, integration by parts gives the exact identity <a id="p4f:eq:faridentity"></a>


$$
\begin{aligned}K^{j/2}q_{\rm far}(t)
 =e^{-iE_0t}\bigg\{
 &e^{-iDt}R_j a_0(0)-R_j a_0(t)\\
 &+\int_0^t e^{-iD(t-s)}R_j\dot a_0(s)\,ds\bigg\}.
 
\end{aligned}
$$

Equation (4.9).

 For an unbounded coupling, prove it first on bounded spectral cutoffs. The bounds below pass it to the form-dual causal solution and also show that its right side is a physical $K^{j/2}$ vector. Taking norms proves [(4.7)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:far). The two displayed endpoints are the virtual dressings; neither can be dropped.

For $x=|\lambda-E_0|\ge\Lambda$ and $\lambda\in\sigma(A)$, positivity and the triangle inequality give $0<\lambda+c\le x+|E_0+c|$. Therefore 

$$

 \frac{\sqrt{\lambda+c}}{|\lambda-E_0|}
 \le\frac{\sqrt{\Lambda+|E_0+c|}}{\Lambda},
 \qquad
 \frac{\lambda+c}{|\lambda-E_0|}
 \le1+\frac{|E_0+c|}{\Lambda}.
 
$$

 The spectral theorem proves [(4.8)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:farcoeff) and the limiting integration-by-parts assertion. The homogeneous term follows by linearity; it has unchanged $K$ norm because $K=A+c$ commutes with $A$. 

□



One may use $M_{1,\eta}\le k_{J_0}M_{0,\eta}$, where $k_{J_0}=\sup_{\lambda\in J_0\cap\sigma(A)}(\lambda+c)$, if that additional factor is charged. A smaller first-form response coefficient is a separate spectral calculation. For several coherent couplings $L(t)=\sum_\alpha l_\alpha(t)L_\alpha$, apply the theorem to the stacked bounded map with input $(l_1Fp,\ldots,l_mFp)$. Its full operator measure retains all off-diagonal responses. Summing independent scalar channel rates would be a different statement.

The near estimate requires an $L^2$ input but no input time derivative. The far estimate requires the displayed derivative and endpoint dressings. Neither frozen spectral statement applies automatically to a changing $A(t)$. One must instead use Theorem [3.3](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:thm:lift), or prove a comparison with a fixed parent and charge its actual forcing and form-dual derivative.
