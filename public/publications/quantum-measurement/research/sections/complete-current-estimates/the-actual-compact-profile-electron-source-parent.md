# Section 10: The actual compact-profile electron–source parent

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-10"></a>

## 10 The actual compact-profile electron–source parent

 <a id="p4h:sec:actual"></a>

Choose a real radial cutoff with $\chi_R=1$ for $|r|\leq R$, $\chi_R=0$ for $|r|\geq R+1$, $0\leq\chi_R\leq1$ and $|\chi_R'|\leq8$. Such a smooth flat cutoff is explicit: on $0<t<1$ use 

$$

 \chi_R(R+t)=1-
 \frac{e^{-1/t}}{e^{-1/t}+e^{-1/(1-t)}}.

$$

 For $t\leq1/2$ its derivative is bounded by $e^{2-1/t}(t^{-2}+4)\leq8$; reflection treats the other half. Set <a id="p4h:eq:parent"></a>


$$

 d_R(r)=r_z\chi_R(|r|),\quad d_0=\|d_R\|_\infty\leq R+1,\qquad
 H=h+H_s+gYd_R ,

$$

Equation (10.1).

 with real constant $g$. This is a prescribed compact-profile scalar parent. The finite annular electrostatic density $-\epsilon_0\Delta d_R$ does not by itself construct its quantized source, field energy or laboratory realization.



**Lemma 10.1 (Physical domains and forcing tail).**

 <a id="p4h:lem:parent"></a> The parent [(10.1)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parent) is self-adjoint on $D(h)\cap D(H_s)$ and has form domain $H^1(\mathbb R^3\times\mathbb R)\cap\{Y\psi\in L^2\}$. It satisfies <a id="p4h:eq:parentfloor"></a>


$$

 H+2+\frac{g^2d_0^2}{\Omega}
             \geq I+\tfrac14p_r^2+\tfrac12H_s .

$$

Equation (10.2).

 For $f_R=d_R\phi$ and $R\geq40$, <a id="p4h:eq:tailnorm"></a>
<a id="p4h:eq:tailform"></a>


$$
\begin{aligned}\|f_R-f\|^2&\leq\epsilon_R^2:=
 e^{-2R}\left(\tfrac23R^4+\tfrac43R^3+2R^2+2R+1\right),
 \\
 \|(h+1)^{1/2}(f_R-f)\|
 &\leq\sqrt{41.5+R^{-2}}\,\epsilon_R .
 
\end{aligned}
$$

Equation (10.3, 10.4).

 At $R=40$ these upper bounds are respectively $6\cdot10^{-15}$ in norm and $4\cdot10^{-14}$ in first-form norm. 

 

**Proof.**

Hardy and interpolation make Coulomb infinitesimally Laplacian bounded. The independent electron and oscillator operators commute; after a common positive shift their sum has domain $D(h)\cap D(H_s)$. Since $\|Y\psi\|\leq\sqrt{2/\Omega}\|H_s^{1/2}\psi\|$ and $d_R$ is bounded, $gYd_R$ is infinitesimally operator bounded relative to this sum. This proves the operator assertion and the corresponding common closed form.

The square $\frac14\|\nabla u+2\widehat r\,u\|^2\geq0$ gives $h+1\geq p_r^2/4$. Young's inequality gives $gYd_R\geq-\Omega Y^2/4-g^2d_0^2/\Omega$ and $H_s-\Omega Y^2/4\geq H_s/2$, proving [(10.2)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parentfloor).

The omitted forcing is confined to $r\geq R$ and has magnitude at most that of $u_f$. Integrating $(4/3)r^4e^{-2r}$ gives [(10.3)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:tailnorm). For the radial error $w=(\chi_R-1)u_f$, $|u_f'|\leq u_f$ on this tail and therefore $|w'|\leq9u_f$. The positive upper bound on the remaining radial form potential is $1+r^{-2}$. Thus 

$$

 \langle w,(h_1+1)w\rangle
       \leq\left(\tfrac{81}2+1+R^{-2}\right)
                          \int_R^\infty|u_f|^2\,dr,

$$

 which is [(10.4)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:tailform). Reciprocal positive Taylor sums for $e^{80}$ enclose the stated numerical tails. 

□



The cutoff is essential to the actual source parent. With an uncut $gYr_z$, completing the source square leaves $-g^2r_z^2/(2\Omega)$. Electron packets translated to $r_z=L$ and source packets translated to $Y=-gL/\Omega$ have energy tending to $-\infty$. Thus no stable uncut source Hamiltonian is being approximated here. Equations [(10.3)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:tailnorm)–[(10.4)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:tailform) compare forcing vectors, not complete actual parents.



<a id="section-10-1"></a>

### 10.1 Exact blocks, including source feedback



Let 

$$

 P=|\phi\rangle\langle\phi|\otimes I,\qquad Q=I-P,\qquad
 \Psi=\phi p+q,\quad q=Q\Psi .

$$

 The projection $P$ does not reduce $H$. The odd profile has $Pd_RP=0$, so the exact equations are <a id="p4h:eq:qblock"></a>
<a id="p4h:eq:pfeedback"></a>


$$
\begin{aligned}i\dot q&=Aq+Lp,& A&=QHQ,& Lp&=gf_R\otimes Yp,
 \\
 i\dot p&=(H_s-\tfrac12)p+
                        gY\langle\phi,d_Rq\rangle_r .
 
\end{aligned}
$$

Equation (10.5, 10.6).

 The subscript on the last inner product means integration in the electron coordinate only. The actual vector $p(Y,t)$ retains its source phase and every finite internal coefficient. It is not prescribed as a free source waveform.

On $Q$ put <a id="p4h:eq:weights"></a>


$$

 A_0=Q(h+H_s)Q,\qquad K_0=A_0+1,\qquad K=A+1,\qquad
 T_{\rm ph}=I+\tfrac12p_r^2+H_s .

$$

Equation (10.7).

 Here $A_0$ is the self-adjoint restriction of $h+H_s$ to $Q\mathcal H$. The spectral projection $Q$ preserves the common operator and form domains. More precisely, $A$ denotes the self-adjoint operator $A_0+gYQd_RQ$ on $D(A_0)$: the electronic factor $Qd_RQ$ is bounded and commutes with the source coordinate, so the same infinitesimal relative-bound argument used in Lemma [10.1](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:lem:parent) applies. Thus $QHQ$ denotes this proved realization, rather than an assumed self-adjoint compression.

Since the complete excited electronic floor is $-1/8$, <a id="p4h:eq:K0bounds"></a>


$$

 K_0\geq7/8+H_s,\qquad K_0\geq p_r^2/4+H_s,\qquad
                         T_{\rm ph}\leq(22/7)K_0 .

$$

Equation (10.8).

 For the last inequality take $4/11$ of the first lower bound and $7/11$ of the second, then multiply by $22/7$. This gives the exact coefficients $1$ and $1/2$ of the identity and electron kinetic terms; the source coefficient is larger than required.

The unbounded source interaction has the bounded form sandwich <a id="p4h:eq:theta"></a>


$$

 \|K_0^{-1/2}gYQd_RQK_0^{-1/2}\|
 \leq\theta:=|g|d_0\sqrt{\frac{2}{\Omega(7/8)}}.

$$

Equation (10.9).

 Indeed use $\|u\|\leq(7/8)^{-1/2}\|K_0^{1/2}u\|$ on one factor, and $\|Yv\|\leq\sqrt{2/\Omega}\|K_0^{1/2}v\|$ on the other. This bounds the full sesquilinear form and hence its operator. If $\theta<1$, then <a id="p4h:eq:Kcomparison"></a>


$$

 (1-\theta)K_0\leq K\leq(1+\theta)K_0 .

$$

Equation (10.10).

 All these inequalities are physical form inequalities on the complete $Q$ space. They neither truncate the oscillator nor delete $QYd_RQ$.



<a id="section-10-2"></a>

### 10.2 The spectral supremum and its correction

 <a id="p4h:sec:gap"></a>

For $\zeta=E+i\eta$, $\eta>0$, the spectral theorem gives <a id="p4h:eq:Jspectrum"></a>


$$
\begin{aligned}J_{\rm spec}(E,\eta)
 &:=\|K_0^{1/2}(A_0-\zeta)^{-1}K_0^{1/2}\|
   =\sup_{a\in\sigma(A_0)}\frac{a+1}{|a-\zeta|}
 \\
 &\leq\overline J(E,\eta):=
     \sup_{a\geq-1/8+\Omega/2}\frac{a+1}{|a-\zeta|}.
 
\end{aligned}
$$

Equation (10.11).

 The inequality can be strict. The half-line in the last expression contains spectral gaps and cannot generally replace $\sigma(A_0)$ in an equality.



**Example 10.2 (A strict gap in the half-line bound).**

 <a id="p4h:ex:gap"></a> Take $\Omega=.01$, $E=-.117$, $\eta=.0001$. The lowest spectral points of $A_0$ are $-.120$ and $-.110$; the $n\geq3$ electronic ladders begin above $-.051$, and the continuum begins at $.005$. At $a=E$, the half-line expression is $8830$. On the actual spectrum the maximum is 

$$

 J_{\rm spec}=\frac{.88}{\sqrt{.003^2+.0001^2}}<294.

$$

 Indeed the first point gives a value above $280$, while for every other spectral point $a\geq-.110$ the quotient is at most $.89/.007<128$. Thus the half-line equality fails by a large factor even for this concrete parent. 





**Theorem 10.3 (An earned low-window inverse for the actual block).**

 <a id="p4h:thm:lowwindow"></a> If $\overline J\theta<1$, then <a id="p4h:eq:lowgeneral"></a>


$$

 \|K_0^{1/2}(A-\zeta)^{-1}LH_s^{-1/2}\|
 \leq\frac{|g|}{1-\overline J\theta}
 \left\{\frac2\Omega\sup_{s\geq\Omega/2}
 \int\frac{e+s+1}{|e+s-\zeta|^2}\,\mu_{f_R}(de)\right\}^{1/2}.

$$

Equation (10.12).

 For the static row <a id="p4h:eq:parameters"></a>


$$

 \Omega=1/100,\quad |g|\leq10^{-6},\quad R=40,\quad d_0\leq41,
 \qquad E\leq-.47,\quad\eta>0,

$$

Equation (10.13).

 the complete physical sandwich satisfies <a id="p4h:eq:lowrow"></a>


$$

 \|T_{\rm ph}^{1/2}(A-E-i\eta)^{-1}LH_s^{-1/2}\|^2
                  <4.035635\cdot10^{-9}<4.05\cdot10^{-9}.

$$

Equation (10.14).

 

 

**Proof.**

Let $V_0=K_0^{-1/2}gYQd_RQK_0^{-1/2}$ and $B_0=K_0^{1/2}(A_0-\zeta)^{-1}K_0^{1/2}$. The bounded form pencil of $A-\zeta$ has inverse 

$$

 K_0^{1/2}(A-\zeta)^{-1}K_0^{1/2}
           =(I+B_0V_0)^{-1}B_0.

$$

 The order is fixed: the pencil is $B_0^{-1}+V_0=B_0^{-1}(I+B_0V_0)$. The Neumann bound is $\|(I+B_0V_0)^{-1}\|\leq(1-\overline J\theta)^{-1}$. This is the concrete form-inverse construction of Theorem [5.1](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:thm:ordered); no Hilbert-norm boundedness of $YQd_RQ$ has been assumed.

In the baseline squared norm, integrate out only the electron spectral measure. The remaining positive source operator is 

$$

 H_s^{-1/2}YF(H_s)YH_s^{-1/2},\qquad
 F(s)=\int\frac{e+s+1}{|e+s-\zeta|^2}\,\mu_{f_R}(de).

$$

 Bound $F$ by its supremum, then use $\|YH_s^{-1/2}\|\leq\sqrt{2/\Omega}$. This proves [(10.12)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:lowgeneral). Moving $Y$ through $F(H_s)$ or through the resolvent would not prove that estimate.

For [(10.13)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parameters), $\theta<.00062$ and $\overline J\leq88/35$. To see the latter, first lower every denominator to $a+.47$ and use $a\geq-.12$; the resulting $(a+1)/(a+.47)$ decreases and has value $88/35$ at the floor. Thus the correction in [(10.11)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:Jspectrum) leaves the low-window bound unchanged.

The source supremum also needs its own argument. First dominate the integral kernel at the fixed endpoint $E=-.47,\eta=0$, since $e+s\geq-.12$. At this endpoint the derivative of $(e+s+1)/(e+s+.47)^2$ with respect to $s$ has sign $-(e+s+1.53)<0$. It is consequently enough to use $s=1/200$. This monotonicity was not asserted for every negative $E$ before making the endpoint domination.

For the uncut forcing, isolate the exact $2p$ mass $w_2=32768/59049$. All remaining spectral mass lies at $e\geq-1/18$, and the same endpoint kernel is decreasing in $e$. Its complete bound-plus-continuum integral is therefore <a id="p4h:eq:Fceiling"></a>


$$

 F_f(1/200)\leq
 w_2\frac{352}{49}+(1-w_2)\frac{123048}{22801}<6.4 .

$$

Equation (10.15).

 This analytic ceiling requires neither a continuum quadrature nor a truncation of the Rydberg series.

The compact forcing changes the baseline weighted inverse norm, before multiplication by $|g|$, by at most 

$$

 \overline J\,\epsilon_R\sqrt{\frac2{\Omega(7/8)}}.

$$

 This follows by inserting $K_0^{-1/2}$ and applying its lower form floor to $f_R-f$ and the ordered source factor. Use [(10.8)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:K0bounds), $\epsilon_R<6\cdot10^{-15}$, $\sqrt{1280}<35.778$ and $\sqrt{1600/7}<16$. The resulting entirely rational upper bound is 

$$

 \frac{22}{7}\,10^{-12}
 \frac{\big[35.778+(88/35)(6\cdot10^{-15})16\big]^2}
      {[1-(88/35)(.00062)]^2}
       <4.035635\cdot10^{-9}.

$$

 This proves [(10.14)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:lowrow), retaining the actual excited-block feedback in the inverse. 

□



The result is a uniform frequency-window statement with source weight $H_s^{1/2}$. It does not say that the actual time-dependent input $p$ has Fourier support in this window. Such a use requires the temporal band and complementary-frequency terms of the window theorem. We next give a different all-frequency bound with the stronger, explicitly earned source weight $H_s$.
