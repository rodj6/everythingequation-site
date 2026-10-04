# Section 19: Observable and theorem

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-19"></a>

## 19 Observable and theorem



Let $L$ be the frozen radial detector classifier evaluated at the *actual* radius at $t_a=0.0366\,\mathrm s$, with the inherited cemetery outcome for a failed earlier event. Set 

$$

 R_0=[-10,10],\qquad R_1=[14,34],\qquad
 R(Z)=\begin{cases}0&Z\in R_0,\\1&Z\in R_1,\\
 \dagger&\text{otherwise.}\end{cases}

$$

 The complete holding interval is $I=[0.0384,0.09]\,\mathrm s$ and the observable is 

$$

 Y=\bigl(L,(R(Z_t))_{t\in I}\bigr).

$$

 An incorrect or undefined record at any holding time is a failure. An undefined earlier label is a failure even if a cemetery record could be assigned the same symbol. No time grid replaces the interval.



**Theorem 19.1 (Effective joint-path theorem).**

<a id="rad:thm:main"></a> For Hamiltonian [(7)](/quantum-measurement/research/nonequilibrium-records/model-stock-and-scope#rad:eq:H), the full entrance stock above, every normalized qubit $\alpha_0|0\rangle+\alpha_1|1\rangle$, and every admitted original reference/joint auxiliary law, there is the unchanged compatible reference coupling for which <a id="rad:eq:label"></a>
<a id="rad:eq:copy"></a>


$$
\begin{aligned}{\mathbb P}(L\neq L_{\mathrm{per}})&<0.003331233001,\\
 {\mathbb P}\bigl(L\text{ fails or }\exists t\in I:R(Z_t)\neq L\bigr)
      &<0.000552421956.
\end{aligned}
$$

Equation (9, 10).

 Writing $p=|\alpha_1|^2$ and $B\sim\mathrm{Bernoulli}(p)$ only as an ideal comparison variable, <a id="rad:eq:TV"></a>


$$

 {\operatorname{TV}}\!\left(\mathcal L(Y),
        \mathcal L\bigl(B,(B)_{t\in I}\bigr)\right)
       <0.006086770113<0.01.

$$

Equation (11).

 The microscopic dynamics contains no sampled sector variable $B$. 



Theorem [19.1](/quantum-measurement/research/nonequilibrium-records/observable-and-theorem#rad:thm:main) is about one effective scalar Hamiltonian. It is not a claim that the finite source candidate realizes this Hamiltonian. The difference to $0.01$ is an unachieved sufficient allocation for a future compatible microscopic comparison, not a measured or proved error of added hardware.
