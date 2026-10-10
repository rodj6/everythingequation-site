# Section 6: Damped temporal response with a noncommuting physical form

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-6"></a>

## 6 Damped temporal response with a noncommuting physical form

 <a id="p4f:sec:damped"></a>

The physical derivative form generally does not commute with the interacting complement. It may therefore be placed outside an actual resolvent, as below, but cannot be inserted into a scalar spectral measure as though it commuted with every spectral projection. This use of a resolvent and a time integral is related to the Kato smoothing framework [[6](/quantum-measurement/research/complete-current-estimates/bibliography#bib-Kato1966), [7](/quantum-measurement/research/complete-current-estimates/bibliography#bib-DAncona2014)]. The statement here is at one earned $\eta>0$; it does not assert the uniform imaginary-part bounds required by a global smoothing theorem.



**Theorem 6.1 (Ordered damped response).**

 <a id="p4f:thm:damped"></a> Let $A$ be fixed self-adjoint, $K=A+c\ge I$, and $\mathcal L=LF^{-1}:\mathcal U\to\mathcal V^*$ bounded. Let $T_{\rm ph}\ge I$ be a positive closed form whose domain contains $\mathcal V$ continuously. For fixed $\eta>0$ suppose the actual ordered sandwich satisfies the measurable bound <a id="p4f:eq:orderedbound"></a>


$$

 \|T_{\rm ph}^{1/2}(A-E-i\eta)^{-1}\mathcal L\|^2
                         \le S_\eta(E).

$$

Equation (6.1).

 For $a\in L^2(0,T;\mathcal U)$, extend the forcing by zero after $T$, and let $q$ be its causal zero-initial form-dual response. Define $a_\eta(s)=e^{-\eta s}a(s)1_{[0,T]}(s)$ and use the unitary Fourier convention $\widehat u(E)=(2\pi)^{-1/2}\int_{\mathbb R}e^{iEt}u(t)\,dt$. If the right side is finite, then <a id="p4f:eq:damped"></a>


$$

 \int_0^\infty e^{-2\eta t}
                      \|T_{\rm ph}^{1/2}q(t)\|^2\,dt
 \le \int_{\mathbb R}S_\eta(E)
                              \|\widehat a_\eta(E)\|^2\,dE .

$$

Equation (6.2).

 In particular a uniform $S_\eta(E)\le S_\eta$ gives the upper bound $S_\eta\|a_\eta\|_2^2$. A bound $S_\eta(E)\le S_0+S_1E^2$ instead gives <a id="p4f:eq:temporalprice"></a>


$$

 S_0\|a_\eta\|_2^2+S_1\|\dot a_\eta\|_2^2,

$$

Equation (6.3).

 provided the actual zero extension $a_\eta$ belongs to $H^1(\mathbb R;\mathcal U)$. 





**Proof.**

The fixed group $e^{-iAt}$ is unitary also on the $K$ form dual. The causal integral 

$$

 q(t)=-i\int_0^{\min(t,T)}
                    e^{-iA(t-s)}\mathcal L a(s)\,ds

$$

 is therefore a continuous $\mathcal V^*$ vector. It is zero for negative times and bounded in that dual norm for all positive times. Its damped extension $q_\eta=e^{-\eta t}q\,1_{[0,\infty)}$ belongs to $L^2(\mathbb R;\mathcal V^*)$. Its value at zero is zero, so differentiation creates no entrance delta distribution. Fourier transformation of the causal equation, or Fubini applied to its damped convolution, gives the exact form-dual identity <a id="p4f:eq:fourierresponse"></a>


$$

 \widehat q_\eta(E)
       =-(A-E-i\eta)^{-1}\mathcal L\widehat a_\eta(E).

$$

Equation (6.4).



For almost every $E$ the right side lies in $\mathcal V$, hence in $\operatorname{Dom}T_{\rm ph}^{1/2}$. The assumed finite integral and [(6.1)](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:eq:orderedbound) place it in the $L^2$ graph of $T_{\rm ph}^{1/2}$. Coercivity $T_{\rm ph}\ge I$ also places it in physical $L^2(\mathcal H)$. Fourier transformation commutes with this closed spatial operator: to see this, replace it by its bounded spectral truncations, use Hilbert-valued Plancherel there, and pass by its closed graph and monotone convergence of the graph norms. Thus inverse Fourier transformation identifies this same dual solution as a physical $L^2(\operatorname{Dom}T_{\rm ph}^{1/2})$ response. Plancherel and [(6.1)](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:eq:orderedbound) prove [(6.2)](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:eq:damped). In this argument the truncations are of $T_{\rm ph}$ for the Fourier graph identity; none is commuted through $A$ or its resolvent.

For a uniform coefficient use Plancherel on $a_\eta$. For the quadratic coefficient use $\|E\widehat a_\eta\|_2=\|\dot a_\eta\|_2$. That equality requires the stated whole-line $H^1$ condition and proves [(6.3)](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:eq:temporalprice). 

□



The theorem gives an integrated first-form response, not an all-times pointwise form bound. If the input is $H^1$ inside $[0,T]$ but has nonzero endpoint values, its zero extension has delta derivatives and is not $H^1(\mathbb R)$. One must keep the endpoint dressings, as in [(4.9)](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:eq:faridentity) or Theorem [3.3](/quantum-measurement/research/complete-current-estimates/temporal-dressing-in-the-physical-form-dual#p4f:thm:lift), or prove a physical pulse collar that removes those jumps. The endpoint problem cannot be repaired by simply omitting the positive frequency-weighted term.

The physical finite-interval graph norm obeys <a id="p4f:eq:undamping"></a>


$$

 \|T_{\rm ph}^{1/2}q\|_{L^2(0,T)}
 \le e^{\eta T}
       \left(\int_{\mathbb R}S_\eta(E)
                          \|\widehat a_\eta(E)\|^2\,dE\right)^{1/2}.

$$

Equation (6.5).

 If $q_0\ne0$, its homogeneous response must be added separately. For example, an earned $T_{\rm ph}\le\kappa K$ and $q_0\in\mathcal V$ give 

$$

 \left(\int_0^\infty e^{-2\eta t}
       \|T_{\rm ph}^{1/2}e^{-iAt}q_0\|^2dt\right)^{1/2}
 \le\sqrt{\frac{\kappa}{2\eta}}\|K^{1/2}q_0\|.
 
$$

 Add this to the square root of the forced bound; the square of the sum, not the sum of squares, is a generally valid full-response bound. For a noncoercive derivative form, replace it by $I+T_{\rm ph}$ or establish a separate Hilbert-norm sandwich. Temporal damping has neither projected out a bound pole nor supplied a missing source graph.
