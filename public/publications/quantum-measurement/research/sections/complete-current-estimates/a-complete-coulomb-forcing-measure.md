# Section 9: A complete Coulomb forcing measure

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-9"></a>

## 9 A complete Coulomb forcing measure

 <a id="p4h:sec:spectral"></a>

This application keeps both the electron relative position and a quantum source coordinate. Its first calculation concerns a fixed Coulomb reference, whose exact spectral measure can be evaluated. The second restores the actual source interaction and feedback. These are different estimates: a continuum-only coefficient of the fixed reference cannot remove the poles or replace the coupled resolvent of the actual parent.

Use reduced-mass atomic units and write <a id="p4h:eq:electron"></a>


$$

 h=-\tfrac12\Delta_r-\frac1{|r|},\qquad
 \phi(r)=\pi^{-1/2}e^{-|r|},\qquad f(r)=r_z\phi(r).

$$

Equation (9.1).

 The Coulomb operator is self-adjoint on $H^2(\mathbb R^3)$ with form domain $H^1$, ground energy $-1/2$ and normalized ground $\phi$. Its excited bound energies are $E_n=-1/(2n^2)$, $n\geq2$, with continuum $[0,\infty)$. We use the usual Coulomb spectrum, not a newly inferred set of levels. Only the isolated forcing $f$ has the exact angular selection $l=1,m=0$; the actual coupled parent below retains every angular sector.



**Theorem 9.1 (Full spectral measure of the dipole forcing).**

 <a id="p4h:thm:spectral"></a> The spectral measure of $f$ under $h$ is <a id="p4h:eq:measure"></a>


$$

 \mu_f=\sum_{n=2}^\infty d_n^2\delta_{-1/(2n^2)}
                       +1_{E>0}\rho_C(E)\,dE,

$$

Equation (9.2).

 where <a id="p4h:eq:atoms"></a>
<a id="p4h:eq:continuumdensity"></a>


$$
\begin{aligned}d_n^2&=\frac{256n^7(n-1)^{2n-5}}{3(n+1)^{2n+5}},
 \\
 \rho_C(k^2/2)&=\frac{256}{3}
 \frac{\exp[-4\arctan(k)/k]}
 {(1+k^2)^5(1-e^{-2\pi/k})},\qquad k>0 .
 
\end{aligned}
$$

Equation (9.3, 9.4).

 Its total mass and first $(h+1)$ form moment are both one: <a id="p4h:eq:sumrules"></a>


$$

 \int d\mu_f=1,\qquad \int E\,d\mu_f=0,\qquad
                    \int(E+1)\,d\mu_f=1 .

$$

Equation (9.5).

 On the whole true continuum, <a id="p4h:eq:densityceiling"></a>


$$

 \rho_C(E)\leq\rho_*,\qquad
 (1+E)\rho_C(E)\leq\rho_*,
 \qquad \rho_*=\frac{256}{3e^4}.

$$

Equation (9.6).

 

 

**Proof.**

With $\psi=u(r)Y_{10}(\widehat r)/r$, the radial forcing and Friedrichs operator are 

$$

 u_f=\frac2{\sqrt3}r^2e^{-r},\qquad
 h_1=-\tfrac12\partial_r^2+r^{-2}-r^{-1}.

$$

 Integration of $r^4e^{-2r}$ gives $\|f\|^2=1$. Direct differentiation gives $h_1u_f=(-1/2+1/r)u_f$, whence $\langle f,hf\rangle=0$.

We specify the continuum normalization because an energy cross-section convention could otherwise introduce a wrong Jacobian. The regular Coulomb function is normalized by its unit-amplitude large-radius oscillation. In the standard convention [[10](/quantum-measurement/research/complete-current-estimates/bibliography#bib-DLMFCoulomb)], 

$$
\begin{aligned}u_k(r)&=\sqrt{2/\pi}\,F_1(-1/k,kr),\\
 F_1(-1/k,kr)&=C_1(kr)^2e^{-ikr}\,
                    {}_1F_1(2+i/k;4;2ikr),\\
 C_1^2&=\frac{2\pi(1+k^2)}
                  {9k^3(1-e^{-2\pi/k})}.
\end{aligned}
$$

 For $H_1^+=G_1+iF_1$, the Wronskian in $r$ is $W_r(F_1,H_1^+)=-k$. The upper-boundary radial resolvent kernel is <a id="p4h:eq:Green"></a>


$$

 (h_1-E-i0)^{-1}(r,r')
   =\frac2k F_1(-1/k,kr_<)H_1^+(-1/k,kr_>).

$$

Equation (9.7).

 Its derivative jump is $-2$, as required by the coefficient $-1/2$ in $h_1$. Its imaginary part is $(2/k)F_1(r)F_1(r')$. Stone's formula therefore gives the measure $u_ku_k\,dk$, or $u_ku_k/k$ per unit energy $E=k^2/2$. The Coulomb asymptotics used to choose $H_1^+$ are asymptotic statements at large radius, not exact finite-radius equalities.

Here is the overlap calculation. Put $a=2+i/k$, $s=1+ik$, $z=2ik/(1+ik)$. Laplace integration of the confluent hypergeometric series, first in its absolute-convergence region and then by analytic continuation, gives 

$$

 \int_0^\infty r^4e^{-sr}{}_1F_1(a;4;2ikr)\,dr
       =24s^{-5}{}_2F_1(a,5;4;z).

$$

 The coefficient identity $(5)_j/(4)_j=1+j/4$ implies 

$$

 {}_2F_1(a,5;4;z)
 =(1-z)^{-a}\left(1+\frac{az}{4(1-z)}\right).

$$

 The last bracket is $1/[2(1-ik)]$. Consequently the integral is 

$$

 \frac{12}{(1+ik)^5(1-ik)}
       \left(\frac{1-ik}{1+ik}\right)^{-2-i/k}.

$$

 The continuous logarithm of the ratio is $-2i\arctan k$. Its contribution to the squared modulus is $e^{-4\arctan(k)/k}$. Multiplication by the normalized radial prefactors gives $|\langle u_k,u_f\rangle|^2=k\rho_C(k^2/2)$. The factor $1/k$ from Stone's energy measure proves [(9.4)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:continuumdensity).

The normalized negative-energy eigenfunction in this channel is 

$$

 u_{n1}(r)=\frac{4r^2}{n^3}
 \sqrt{\frac{(n-2)!}{(n+1)!}}\,
        e^{-r/n}L_{n-2}^3(2r/n).

$$

 Insert $L_j^3=(4)_j\,{}_1F_1(-j;4;\cdot)/j!$ into the same Laplace identity. The bracket is now $n/[2(n-1)]$ and gives [(9.3)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:atoms); in particular $d_2^2=32768/59049$.

For completeness, the radial regular/decaying solutions have only the simple negative poles $-1/(2n^2)$, $n\geq2$. Their residues give precisely these normalized eigenprojections. On every compact positive-energy interval, [(9.7)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:Green) has continuous boundary values against the exponentially decaying forcing, so its forcing measure there is absolutely continuous. A remaining singular measure could only be supported at zero. The regular zero-energy solution is proportional to $\sqrt r\,J_3(\sqrt{8r})$; its large-radius oscillatory magnitude is of order $r^{1/4}$ and it is not $L^2$. Thus zero is not an eigenvalue and supplies no atom. A singular continuous measure cannot be supported on a single point. This proves completeness of [(9.2)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:measure). The already evaluated norm and first energy expectation now give [(9.5)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:sumrules); numerical quadrature is not used to establish them.

To prove the whole-continuum ceiling, let $A(k)=\arctan k-k/(1+k^2)$. Since 

$$

 \frac{d}{dk}\left\{\frac{2k^3}{3(1+k^2)}-A(k)\right\}
             =\frac{2k^4}{3(1+k^2)^2}\geq0,

$$

 we have $A(k)\leq2k^3/[3(1+k^2)]$. The logarithmic derivative of $(1+k^2/2)\rho_C(k^2/2)$ is consequently at most 

$$

 -\frac{16k}{3(1+k^2)}
       +\frac{2\pi}{k^2(e^{2\pi/k}-1)}.

$$

 For $k\leq1$, use $e^x-1\geq x^3/6$ to bound the positive term by $3k/(2\pi^2)$; this leaves a strictly negative margin. For $k\geq1$, use $e^x-1>x$ to bound it by $1/k$, whereas the negative magnitude is at least $8/(3k)$. The threshold limit is $\rho_*$. This proves the weighted ceiling and hence the unweighted one. 

□



The bound lines are substantial. The formula gives $n^3d_n^2\longrightarrow\rho_*$ and $E_{n+1}-E_n\sim n^{-3}$, matching the threshold density. For $n\geq100$ one also has 

$$

 d_n^2\leq\frac7{4n^3},\qquad
              \sum_{n>N}d_n^2\leq\frac7{8N^2}.

$$

 For example the logarithm of the factor multiplying $256/(3n^3)$ is at most $-4+10/n\leq-3.9$, and $256e^{-3.9}/3<7/4$ by a positive exponential Taylor sum. These tails can check a truncated calculation; they do not turn the discrete spectrum into a continuum.



<a id="section-9-1"></a>

### 9.1 A continuum-only coherent response



Let <a id="p4h:eq:source"></a>


$$

 H_s=\frac{\Omega}{2}(-\partial_Y^2+Y^2),\qquad
 U_s(t)=e^{-itH_s},\qquad\Omega>0 .

$$

Equation (9.8).

 The source input is a vector in its physical-coordinate Hilbert space, possibly tensored with an inert finite internal reference.



**Proposition 9.2 (Fixed-reference continuum response).**

 <a id="p4h:prop:continuum"></a> For the fixed parent $h+H_s$ and forcing $f\otimes a(t)$, let $q_C(0)=0$ denote the electronic continuum response. Then <a id="p4h:eq:continuumresponse"></a>
<a id="p4h:eq:continuumsource"></a>


$$
\begin{aligned}\|q_C(t)\|^2,\quad\|(h+1)^{1/2}q_C(t)\|^2
 &\leq2\pi\rho_*\int_0^t\|a(s)\|^2\,ds,
 \\
 \|H_s^{1/2}q_C(t)\|^2
 &\leq2\pi\rho_*\int_0^t\|H_s^{1/2}a(s)\|^2\,ds
 
\end{aligned}
$$

Equation (9.9, 9.10).

 whenever the displayed inputs are finite. 

 

**Proof.**

In the cyclic spectral representation generated by $f$, the continuum wave equals 

$$

 q_C(E,t)=-iF(E)e^{-iEt}U_s(t)
       \int_0^t e^{iEs}U_s(-s)a(s)\,ds,\qquad
                         |F(E)|^2=\rho_C(E).

$$

 Extend the time input by zero outside $[0,t]$. Hilbert-valued Plancherel, integrated first on the whole frequency line, gives the factor $2\pi$ for this unnormalized Fourier integral. Restricting to $E>0$ and using [(9.6)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:densityceiling) gives both estimates in [(9.9)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:continuumresponse). The source form commutes its own propagation, so the same argument applied to $H_s^{1/2}a$ gives [(9.10)](/quantum-measurement/research/complete-current-estimates/a-complete-coulomb-forcing-measure#p4h:eq:continuumsource). 

□



For $a=gYp$, the last input is $gH_s^{1/2}Yp$, in that order. It is not $gYH_s^{1/2}p$. The source interaction picture here is used only for the norm proof; it has not changed the physical source coordinate or its current. The bound poles are excluded from this proposition and must be retained separately: a Poisson-smoothed atom contributes $d_n^2/(\pi\eta)$ at its center. There is no uniform $\eta$-independent full-spectrum density ceiling.
