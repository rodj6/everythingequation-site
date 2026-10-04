# Appendix C: Radial conditional comparison and the old clock current

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

<a id="section-C"></a>

## C Radial conditional comparison and the old clock current

 <a id="old:activation"></a><a id="old:main"></a> This appendix supplies the radial comparison estimates used before the writer is active. Detector coordinates and ages are used until physical clock units are explicitly restored. Put 

$$

 \begin{gathered}
 m=2^{52},\quad h=1/128,\quad L=100,\quad V=mh^2/8=2^{35},\\
 \eta=2^{-17},\quad g=1/300,\quad s_-=355/300,\quad s_+=377/300.
 \end{gathered}

$$

 Write $W_i=\Theta(r-1000)V_i(r)$, $F=\chi_q U_f$, $\chi_q(r)=\Theta((r-2000)/10)$, $U_f=(r^2/L^2-3)/(2mL^2)$, and 

$$

 H_i(s)=-(2m)^{-1}\partial_r^2+\gamma(s)W_i+(1-\gamma(s))F,
 \qquad \gamma(s)=B_9(s/g).

$$

 The decreasing cutoffs have their specified constant continuations. The exact conditional solution starts from $\chi(r)=2r e^{-r^2/(2L^2)}/(\pi^{1/4}L^{3/2})$ on $r>0$. All estimates hold separately in each conserved sector and therefore for their coherent spinor, without sampling a sector. Norms are half-line norms or, equivalently, norms of the normalized odd extension.



<a id="section-C-1"></a>

### C.1 Gaussian folds and transported cell comparisons

<a id="old:lens"></a> Gaussian integration gives 

$$

 d_j^2=\|\chi^{(j)}\|^2=\frac{(2j+1)!!}{2^jL^{2j}},\qquad
 B_j=(d_j^2+2h d_jd_{j+1})^{1/2}.

$$

 Indeed $h\sum_k f(y+kh)\leq\int f+h{\operatorname{TV}}(f)$ for nonnegative integrable $f$ of bounded variation: compare the value in each cell to its cell average and sum the cell variations. Apply this to the square of the $j$th derivative of the odd extension, whose variation is at most $2d_jd_{j+1}$. Multiplication by an $h$-periodic taper of normalized cell norm $A_k$ consequently costs at most $B_jA_kh^{-k}$. For a taper polynomial $P$ rising from zero to one on a unit transition, with two transitions of width $\eta$ and two omitted edge strips of width $\eta$, define 

$$
\begin{aligned}e_0^2&=2\eta+2\eta\int_0^1(1-P)^2, & A_0&=1,\\
 A_k^2&=2\eta^{1-2k}\int_0^1(P^{(k)})^2,&
 C_k&=\sum_{j=0}^k\binom kj B_j A_{k-j}h^{-(k-j)},\\
 D_0&=B_0e_0,& c&=C_2/(2m).
\end{aligned}
$$

 All taper integrals here are polynomial integrals with rational coefficients. Two different analytical tapers will be used for the same exact conditional wave. Their estimates are not interchanged.

The lens $b''+\gamma b=0$, $b(0)=1$, $b'(0)=0$ satisfies, for $0\leq s<\pi/2$, 

$$

 \cos s\leq b\leq1,\quad b'\leq0,\quad |b'|\leq\sin s,
 \quad b'^2+\gamma b^2\leq1.

$$

 For the first inequality, $b-\cos s$ is the sine convolution of $(1-\gamma)b$ until a hypothetical first zero; it prevents that zero. Also $(b'^2+b^2)'=2b'b(1-\gamma)\leq0$, and differentiating $b-\cos s$ or integrating the equation yields the derivative bound. In each cell centered at $c_i$ set $x=r-c_i$, $y=x/b$, and 

$$

 \Phi_i(s,r)=b^{-1/2}e^{im b'x^2/(2b)}
             \chi(c_i+y)a(y/h).

$$

 The core residual has norm $\leq cb^{-2}$. Its radial derivative, divided by $mh$, has norm at most $ c|b'|/(2b^2)+C_3/(2m^2hb^3)$, by differentiating its amplitude and quadratic phase. At an origin well the helper is odd; at an origin barrier it vanishes in a collar. Thus the even extension of each potential and the odd extension of the helper justify integration by parts without an origin force or a self-adjoint half-line momentum assertion.

Here and below use the explicit weak-potential bounds 

$$
\begin{aligned}F_0&=\frac{2010^2}{2mL^4}+\frac{3}{2mL^2},\\
 F_1&=F_0/2+2010/(mL^4),\\
 F_2&=1000F_0+2010/(mL^4)+1/(mL^4).
\end{aligned}
$$

 For the outer mismatch the harmonic backflow of $r\geq1000$ is larger than $990$. The recurrence 

$$

 I_k(z)=\tfrac12z^{k-1}e^{-z^2}+\tfrac{k-1}{2}I_{k-2}(z),
 \qquad I_0(z)\leq e^{-z^2}/(2z)

$$

 for Gaussian tails, together with $e^2>7$, gives 

$$

 T_0^2=21/7^{49},\quad T_1^2=2040/(L^2 7^{49}),\quad
 T_2^2=205100/(L^4 7^{49})

$$

 as strict upper bounds for the first three Gaussian tail norms. Put $\epsilon=VT_0+F_0$.

For the quintic taper $P=10z^3-15z^4+6z^5$, direct integration gives 

$$

 e_0^2=2\eta+181\eta/231,\quad A_1^2=20/(7\eta),\quad
 A_2^2=240/(7\eta^3),\quad A_3^2=1440/\eta^5.

$$

 Define $M_1=15/(8\eta h)$, $f=1/2+5h/8+F_1/(mh)$, $q_0=(B_1e_0+B_0A_1/h)/(mh)$, and $J_3=(\sec s\tan s+\log(\sec s+\tan s))/2$. Duhamel's inequality and its differentiated equation give the explicit increasing majorants <a id="old:D"></a>
<a id="old:q"></a>


$$
\begin{aligned}D(s)&=D_0+c\tan s+\epsilon s,\\
 q(s)&=q_0+f\{D_0s+c\log\sec s+\epsilon s^2/2\}
       +c(\sec s-1)/2+C_3J_3/(2m^2h)\\
 &\quad +(1/2+5h/8)T_0s+VT_0(1-\cos s)/2
       +\frac{V(T_1+M_1T_0)}{mh}\log(\sec s+\tan s)\\
 &\quad +\frac{F_1s}{mh}
       +F_0\left\{(1-\cos s)/2+\frac{C_1}{mh}
                                      \log(\sec s+\tan s)\right\}.
 
\end{aligned}
$$

Equation (78, 79).

 They bound $\|u_i-\Phi_i\|$ and $\|\partial_r(u_i-\Phi_i)\|/(mh)$. In detail, the force term in the differentiated error equation is $\leq f\|u_i-\Phi_i\|$; the outer-mismatch derivative contributes $(1/2+5h/8)T_0+V|b'|T_0/2+V(T_1+M_1T_0)/(mhb)$; and the weak-trap derivative contributes $F_1/(mh)+F_0\{|b'|/2+C_1/(mhb)\}$. Integrating these terms and the core residual proves [(78)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:D)–[(79)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:q), rather than assuming an abrupt switch.



<a id="section-C-2"></a>

### C.2 The fixed-age sorting bound and the complete age union

 <a id="old:endpoint"></a> Let $G_1(s)=\int_0^s\gamma(x){\,\mathrm d} x$ and $G_2(s)=\int_0^s(s-x)\gamma(x){\,\mathrm d} x$ during the gate. For $s\leq g$, $b\leq1-\cos(g)G_2(s)$ and $|b'|\leq G_1(s)$. The identities $G_1(g)=g/2$, $G_2(g)=3g^2/22$ imply, for $s\geq g$, 

$$
\begin{aligned}b_U(s)&=(1-3g^2\cos g/22)\cos(s-g)
                          -(g\cos g/2)\sin(s-g),\\
 p_U(s)&=\sin(s-g)+(g/2)\cos(s-g).
\end{aligned}
$$

 Use the preceding bounds as $b_U,p_U$ before $g$ and put $G_-(s)=1/2-(1/2-\eta)b_U(s)$, $G_+'(s)=(1/2-\eta)p_U(s)$. These functions are nonnegative and increasing on the needed interval; $G_-$ is a lower gap and $G_+'$ an upper gap speed, not derivatives of a common artificial lens.

For completeness the moving-gap estimate is obtained with linear CDF cutoffs centered on each positive barrier, with half-width $w(s)$. The helper vanishes in these gaps, so the mass and integrated absolute current there are at most $D(s)^2$ and $hD(s)q(s)$ after disjoint gaps are summed. Differentiating the expectation of a moving linear cutoff costs at most $w'D^2/(2w)+hDq/(2w)$. Initial symmetric smoothing costs $\epsilon_0$ below, and replacing a soft terminal cut by each of the two associated sharp classifier cuts costs their intervening error mass. Summing over both cuts at every positive barrier gives <a id="old:sorting"></a>


$$
S\leq2\epsilon_0+2D(s_-)^2+
     \int_0^{s_-}\frac{G_+'(s)D(s)^2+D(s)q(s)}{G_-(s)}{\,\mathrm d} s.
 

$$

Equation (80).

 There is no collar across zero: its cumulative mass is exactly zero, and the single first-cell classifier is paid by its share of $D^2$. At $s_-$ the helper gap contains the classifiers because $G_-(s_-)>1/4$. The initial Gaussian density $\rho_0=\chi^2$ obeys 

$$

 {\operatorname{TV}}(\rho_0)<12/(7L),\qquad {\operatorname{TV}}(|\rho_0'|)\leq20/L^2.

$$

 The first follows from its single maximum $4/(e\sqrt\pi L)<6/(7L)$; the second from integrating the Gaussian derivative polynomial. Symmetric linear smoothing and linear interpolation in half-cells of length $\ell=h/2$ give 

$$
\begin{aligned}\epsilon_0&=\frac{(h\eta)^2}{6}
       \left\{\frac{12}{7Lh}+\frac{20}{L^2}\right\},\\
 J&=\frac\ell8\frac{12}{7L}+\frac{\ell^2}8\frac{20}{L^2},\qquad
 R=0.000052316289\left(1+\ell\frac{12}{7L}\right).
\end{aligned}
$$

 For the interpolation estimate, the integrated error of a linear interpolant on a cell is at most one eighth of the cell length times the variation of the function there; apply this first to $\rho_0$ and then to its derivative. The reference preimage in each half-cell is shifted from the ideal sector cut by at most $0.000052316289\ell$, as follows from the periodic rotor error $(0.007233)^2$. Summing the corresponding initial masses with the Gaussian fold inequality gives $R$. Thus $R$ refers to the original reference age $1.22$, not $s_-$.

Here is also an explicit finite-range bound used in this comparison. For the periodic conditional solution $z_i$ starting flat on a circle of length two, energy differentiation gives $\|z_i'\|\leq mh/2$, since $\frac d{ds}\langle T+\gamma V_i\rangle=\gamma'\langle V_i\rangle
\leq\gamma'V$. Each periodic cell has mass $h/2$. The auxiliary wave $\sqrt2\chi z_i$ has residual norm at most <a id="old:outerbeta"></a>


$$
\beta=B_2/(2m)+(h/2)B_1+VT_G+F_0B_0,
 \qquad T_G=(22/7^{49})^{1/2}.
 

$$

Equation (81).

 The two kinetic products use the Gaussian folds; the last two terms pay the finite outer and weak cutoffs. Its outer norm is at most $T_G$, because $h\sum_{k\geq0}\rho_0(1000+kh)\leq
\int_{1000}^\infty\rho_0+h\rho_0(1000)<22/7^{49}$. Consequently the fixed-age mismatch with the original periodic label is <a id="old:endpointexpression"></a>


$$
0.000002144+C\{S+J+R+(s_-\beta+T_G)^2+201/(10\,7^{50})\},
 \qquad C=270000/67499.
 

$$

Equation (82).

 This is less than $0.002588532236512050$. The quiet-prefix allowance is included once.

For the whole age interval use the fixed transition bands between relative distances $h/5$ and $3h/10$ from neighboring wells. The quintic helper and its derivative vanish on these bands because $b(s)\leq\cos(s-g)$ and $\cos(s_--g)<0.4$. A Lipschitz soft binary label with slope at most $10/h$ must vary by at least $1/2$ along any trajectory that starts outside the bands and subsequently changes its label. Hence, directly under the reference wave law, <a id="old:ageunion"></a>


$$
q_{\rm age}=D(s_-)^2+20\int_{s_-}^{s_+}D(s)q(s){\,\mathrm d} s,
 \qquad Cq_{\rm age}<0.000263432327209778.
 

$$

Equation (83).

 This is a pathwise union estimate and permits the final age to depend on all other coordinates. One does not replace an age union by its largest single-age probability.

For an outer threshold the situation is different: reference ranks that escape at age $s$ form the upper ray $[F_s(1000),1]$. Their union is one ray. Therefore, on $[-1/8,13/10]$, its mass is at most $q_{\rm out}=((13/10)\beta+T_G)^2$, and <a id="old:outer"></a>


$$
Cq_{\rm out}<1.547666958047712\times10^{-8}.

$$

Equation (84).

 The negative-age extension is the exact finite-trap evolution treated below and has a still smaller tail. If the actual rank differs from the original Gaussian rank by at most $\delta$, expanding this ray by $\delta$ also covers the actual terminal escape. Adding it to the binary moving cuts uses $N=256001$ cuts in the conservative $2N\delta$ allowance. With known drift $\beta_*$ and remaining wave-law mean absolute drift $I$, Markov's inequality and optimization in $\delta-\beta_*$ give <a id="old:rankbridge"></a>


$$
C(q_{\rm age}+q_{\rm out})+2CN\beta_*+2C\sqrt{2NI}
       +{\mathbb P}(\hbox{clock-age failure}).

$$

Equation (85).

 Only domination of the original law is used. The same expanded outer ray pays whole-history escape if clock confinement and the absolute rank integral hold throughout the whole interval.



<a id="section-C-3"></a>

### C.3 Energy graphs and the reference clock functional

 <a id="old:graphs"></a> The following coefficients also supply the energy inputs for holding. Put $A=W-F$, $A_0=V+1$, and use 

$$

 A_1=2^{46},\quad A_2=2^{80},\quad A_3=2^{112},\quad A_4=2^{160}

$$

 for derivative ceilings of $A$, with $\|U'\|\leq A_1$. They are deliberately loose bounds, not additional hypotheses. For the cap its first derivative is $-S_5(z)(1-2\eta z)$; the sum of absolute coefficients is at most $32$, and the next three derivatives are bounded by $32\,6^{k-1}\eta^{-(k-1)}$ with the cell powers of $h$ restored. Leibniz's rule gives the displayed bounds after the outer cutoff. The smooth logistic cutoff has derivatives through order four bounded by $10^{10}$: on its central half the logit derivatives are bounded by $32,256,3072,49152$; at an edge put $x=1/t\geq4$, use sigmoid derivatives $\leq75e^{-A}$, $e^{-A}\leq4e^{-x}$, and the Bell-polynomial bound $50x^8$. Its maximum is at most $15000\,8^8/7^4<10^{10}$. The weak cutoff rescales these derivatives by $10^{-k}$. The capped potential is $C^3$ with bounded weak fourth derivative, which suffices for these third energy graphs; no fourth radial Hamiltonian graph is invoked.

Define, entirely algebraically, 

$$
\begin{aligned}N_1&=A_0, & P&=\{2m(N_1+1)\}^{1/2},\\
 B_*&=A_2/(2m)+A_1P/m,& N_2&=(1001/1000)A_0^2,\\
 P_H&=\{2m(N_1N_2+N_1^2)\}^{1/2},&
 U_{rr}&=2m(N_1+A_0),\qquad N_3=(1001/1000)A_0^3.
\end{aligned}
$$

 Then $\|H^j u\|\leq N_j$, $j=1,2,3$, throughout the gate and static plateau. To check this directly, $\|H_0^2\chi\|,\|H_0^3\chi\|<1$ by the Gaussian products and the finite weak cutoff. The first graph obeys $\|H u\|\leq\|H_0\chi\|+V+F_0<V+1=N_1$ by graph Duhamel and $\int\gamma'=1$. The identities 

$$

 [H,A]=-(A''+2A'\partial_r)/(2m),\quad
 [H,[H,A]]=\frac{A''''+4A'''\partial_r+4A''\partial_r^2}{4m^2}
                                      +A'U'/m

$$

 and $\int\gamma'=1$ give 

$$
\begin{aligned}\|H^2u\|&\leq1+2A_0+A_0^2+B_*<N_2,\\
 \|H^3u\|&\leq1+3A_0(1+A_0+A_0^2/3+B_*/2)\\
 &\quad+3\{A_2N_1/(2m)+A_1P_H/m\}
       +(A_4+4A_3P+4A_2U_{rr})/(4m^2)+A_1^2/m<N_3.
\end{aligned}
$$

 For the second line retain the intermediate bound $\|H^2u\|\leq(1+A_0\gamma)^2+B_*\gamma$ and integrate $(H^3)'=\gamma'(3AH^2+3[H,A]H+[H,[H,A]])$. Smooth approximation on the common graph domain justifies the identities.

To evaluate the smaller reference-current bound use the transported cell construction with $P=B_9$ and $C_k$ through order four. Fix a horizon $a<\pi/2$ (here $a=s_+$; the holding calculation uses $4/3$). With $M_1=(315/128)/(\eta h)$, $M_2=(2520/64)/(\eta^2h^2)$ put 

$$
\begin{aligned}T_{A1}&=T_1+M_1T_0,\\
 T_{A2}&=T_2+2M_1T_1+M_2T_0,\\
 P_t&=mhT_0/2+\sec(a)T_{A1},\\
 P_{t2}&=m^2h^2T_0/4+m\tan(a)T_0
                 +mh\sec(a)T_{A1}+\sec(a)^2T_{A2},\\
 W_1&=mh/2+5V,\\
 W_2&=m(1+15/(16\eta))+5mh+10^5V,\\
 B_c&=(W_2T_0+2W_1P_t+VP_{t2})/(2m)+(V+F_0)VT_0,\\
 P_\Phi&=mh/2+\sec(a)C_1,\\
 H_\Phi&=V+\tan(a)/2+\tan(a)hC_1/2+c\sec(a)^2+VT_0+F_0,\\
 B_f&=F_0H_\Phi+F_2/(2m)+F_1P_\Phi/m,\\
 B_m&=\{VT_{A2}/(2m)+F_0c\}\sec(a)^2.
\end{aligned}
$$

 Acting with the harmonic core on its residual gives 

$$

 \|H R_{\rm core}\|\leq Vcb^{-2}
   +(-b'/b)(hC_3+C_2)b^{-2}/(4m)+C_4b^{-4}/(4m^2).

$$

 The preceding $B_c,B_f,B_m$ bound respectively the differentiated outer mismatch, weak mismatch, and their action on the core residual. Thus <a id="old:DQ9"></a>


$$
\begin{aligned}D_9(s)&=D_0+c\tan s+\epsilon s,\\
 Q_9(s)&=c+F_0D_0+(V+F_0)D_9(g)+Vc\tan s
       +\frac{hC_3+C_2}{8m}(\sec^2s-1)\\
 &\quad+\frac{C_4}{4m^2}(\tan s+\tan^3s/3)
                         +(B_c+B_f+B_m)s.
\end{aligned}
$$

Equation (86).

 These bound $\|u-\Phi\|$ and $\|H(u-\Phi)\|$. The gate derivative source is at most $(V+F_0)D_9(g)$; it is not omitted. Set $P_E=\{2mD_9(Q_9+F_0D_9)\}^{1/2}$, $P_{E2}=2m\{Q_9+(V+F_0)D_9\}$ at $s=a$. The form inequality and half-line Sobolev give $\|E\|_\infty\leq(2D_9P_E)^{1/2}$, $\|E'\|_\infty\leq(2P_EP_{E2})^{1/2}$. With $\rho_*=6/(7L)$ use 

$$
\begin{aligned}P_\infty&=(\rho_*\sec a)^{1/2},\\
 P_\infty'&=mhP_\infty/2+
   \sec(a)^{3/2}\{(2d_1d_2)^{1/2}+M_1\sqrt{\rho_*}\},\\
 j_*&=(h/2)\tan(a)\rho_*+
 \{P_\infty\sqrt{2P_EP_{E2}}+
   P_\infty'\sqrt{2D_9P_E}+
   \sqrt{2D_9P_E}\sqrt{2P_EP_{E2}}\}/m.
\end{aligned}
$$

 This follows by expanding all three error terms in the bilinear current, including $E^*E'$. For $a=s_+$, $D_9<0.006877$, $Q_9<2.364\times10^8$, and $j_*<9.194\times10^6$.

Restore $M=10$, $v=1$, $T_0=0.03$, $\sigma=0.001$ in SI units and $\hbar=6.62607015\times10^{-34}/(2\pi)$. For the next two current identities, use physical radius $r_{\rm phys}=10^{-4}r$ and its normalized conditional wave, of density $\rho=\sum_i|u_i|^2$; sector sums are implicit in products and $r$ in their integrals denotes $r_{\rm phys}$. The radial physical mass is $m_{\rm phys}=2^{52}\hbar T_0/(10^{-4})^2$. For $G=\phi(S-vt-S_c)u(S,r_{\rm phys})$ the radial energy density and clock correction are $e=\Re(u^*H_{\rm phys}u)$ and $k=-e/(Mv)$. If $K$ is the conditional CDF, write $B_k=\int_0^r k$, $b_k=\int k$. Substituting into the exact rank numerator gives 

$$

 \mathcal F(G)=-\phi^2kj/v-
 \rho\{2\phi\phi'(B_k-Kb_k)+\phi^2(\partial_SB_k-K\partial_Sb_k)\}.

$$

 Energy continuity gives 

$$

 \partial_SB_k-K\partial_Sb_k=\frac{j_E}{Mv^2}
 -\frac{\dot\gamma}{Mv^2}
       \left\{\int_0^r(W_{\rm phys}-F_{\rm phys})\rho
                        -K\langle W_{\rm phys}-F_{\rm phys}\rangle\right\},

$$

 where $j_E=(\hbar/(2m_{\rm phys}))\Im(u^*\partial_{r_{\rm phys}}(H_{\rm phys}u)
 +(H_{\rm phys}u)^*\partial_{r_{\rm phys}}u)$. The intrinsic term is bounded by $\hbar a j_*N_1/(Mv^2T_0)$. Returning to detector units, for the energy term use the $H^2$ current $J_2=m^{-1}\Im(u^*(Hu)'+(Hu)^*u')$, $\|J_2\|_1\leq(P_H+N_1P)/m$. For the conservative duration $T_s=0.0377$ let $\varepsilon=\hbar T_s/(2Mv^2T_0^2)$ and bound its density by 

$$

 \rho_e=\left[P_\infty+
 \sqrt{2\widetilde D\sqrt{2m\widetilde D
                 (\widetilde Q+5\times10^{-18}\widetilde D)}}\right]^2,
 \quad \widetilde D=D_9+\varepsilon N_2,\quad
 \widetilde Q=Q_9+\varepsilon N_3.

$$

 This enlarged density also bounds the unchanged reference. The energy contribution is at most $\varepsilon\rho_e(P_H+N_1P)/m$. Finally $|B_k-Kb_k|\leq2\|H_{\rm phys}u\|/(Mv)$, $\int2|\phi\phi'|\leq2p_1$, and $\int\dot\gamma{\,\mathrm d} t=1$ for each clock offset. With $T=0.04$, the reference functional is bounded by <a id="old:referencecurrent"></a>


$$
I_G\leq\frac{\hbar a j_*N_1}{Mv^2T_0}
 +\frac{\varepsilon\rho_e(P_H+N_1P)}m
 +\frac{4p_1T\hbar N_1}{MvT_0}
 +\frac{2\hbar A_0}{Mv^2T_0}+I_q
 <2.382267143194879\times10^{-16}.
 

$$

Equation (87).

 The quiet correction $I_q$ is explicitly controlled below. This is a functional of the comparison wave, not an assertion that $G$ solves the autonomous Schrödinger equation.



<a id="section-C-4"></a>

### C.4 The finite-trap quiet boundary

<a id="old:quiet"></a> The Gaussian is not stationary for the finite trap. Put $\alpha=(2m)^{-1}$, $w=(\chi_q-1)U_f$, $u=w\chi$. Then 

$$
\begin{aligned}H_F\chi&=u,&H_F^2\chi&=-\alpha u''+Fu,\\
 H_F^3\chi&=\alpha^2u''''-\alpha F''u-2\alpha F'u'
                               -2\alpha Fu''+F^2u.
\end{aligned}
$$

 All terms are supported at $r\geq2000$. Here is an explicit polynomial recipe for their norms. Set $y=r/L$, $q_f=1/(2mL^2)$, $U_0(y)=y^2+3$, $U_1(y)=2y/L$, $U_2(y)=2/L^2$, and $(c_0,c_1,c_2,c_3,c_4)=(1,1/2,32/25,1000,20000)$. These bounds follow by rescaling the cutoff derivatives $5,128,10^6,2\times10^8$ by its width ten. Define 

$$
\begin{aligned}W_j(y)&=\sum_{k=0}^{\min(2,j)}\binom jk c_{j-k}U_k(y),\\
 (R_0,R_1,R_2,R_3,R_4)&=\left(1,\frac{1+y}L,
 \frac{3+y^2}{L^2},\frac{3+6y+y^3}{L^3},
 \frac{15+10y^2+y^4}{L^4}\right),\\
 Z_j(y)&=\sum_{k=0}^j\binom jk W_{j-k}(y)R_k(y),\qquad
 U_j^*=q_f Z_j(1)10^{12}/7^{100}.
\end{aligned}
$$

 Each $Z_j$ has nonnegative coefficients and degree at most six. The Gaussian recurrence gives $\|{\mathbf1}_{y\geq20}y^k\chi\|\leq10^{12}/7^{100}$ for $k\leq6$, so $\|u^{(j)}\|\leq U_j^*$. Use 

$$
\begin{aligned}Q_1&=2600/(2mL^2 7^{100}),\\
 Q_2&=\alpha U_2^*+F_0U_0^*,\\
 Q_3&=\alpha^2U_4^*+\alpha F_2U_0^*
                +2\alpha F_1U_1^*+2\alpha F_0U_2^*+F_0^2U_0^*.
\end{aligned}
$$

 The sharper first bound is the direct recurrence for $(y^2+3)\chi$ on $y\geq20$. For $u(s)=e^{-isH_F}\chi$, $-1/8\leq s\leq0$, the boundary errors after multiplication by the real clock packet are <a id="old:quietjets"></a>


$$
\Delta_k=p_kQ_1/8+
 \sum_{j=1}^k\binom kj p_{k-j}Q_j/(vT_0)^j,
 \qquad 0\leq k\leq3.

$$

Equation (88).

 In particular $(\Delta_0,\Delta_1,\Delta_2,\Delta_3)<
(1.116\times10^{-102},2.947\times10^{-99},
1.195\times10^{-95},6.072\times10^{-92})$ in the corresponding clock derivative units. The constants $p_k$ are given next. Substituting these in the rank functional pays the negligible $I_q$; $10^{-40}$ is a convenient outward ceiling for that term in [(87)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:referencecurrent).



<a id="section-C-5"></a>

### C.5 Clock coefficients and the five-error decomposition

 <a id="old:clockcoeff"></a> The smoothed cosine-fourth packet has the following derivative ceilings, with $q_s=1.000001$ and $p_0=1$: 

$$

 (p_1,p_2,p_3,p_4)=q_s\left(
 \sqrt{16/7}\frac\pi{2\sigma},\quad
 \sqrt{512/35}\left(\frac\pi{2\sigma}\right)^2,\quad
 \sqrt{1024/7}\left(\frac\pi{2\sigma}\right)^3,\quad
 \sqrt{69632/35}\left(\frac\pi{2\sigma}\right)^4\right).

$$

 They follow by expanding the powers of sine and cosine and integrating on the packet support. Convolution with the nonnegative mollifier contracts every derivative norm; normalization costs at most $q_s$. Let $d=0.0001$ seconds and 

$$

 b_1=(5/2)/d,\quad b_2=(2520/64)/d^2,\quad
 b_3=(7560/16+5040/64)/d^3,\quad b_4=1360800/d^4.

$$

 These are bounds for the first four physical-time derivatives of $B_9$; the fourth bound is the absolute coefficient sum. Define 

$$
\begin{aligned}c_1&=N_1/(vT_0),\\
 c_2&=N_2/(v^2T_0^2)+b_1A_0/(v^2T_0),\\
 c_3&=N_3/(v^3T_0^3)+b_1(3A_0N_1+B_*)/(v^3T_0^2)
                                      +b_2A_0/(v^3T_0),\\
 G_1&=(p_1^2+c_1^2)^{1/2},\qquad
 G_2=p_2+2p_1c_1+c_2,\\
 G_3&=p_3+3p_2c_1+3p_1c_2+c_3,\qquad
 Q_G=q_s(4\pi^2/\sigma^2)\sqrt{3/35}+c_1^2.
\end{aligned}
$$

 Differentiating the conditional equation gives these bounds for $\|G_S\|,\|G_{SS}\|,\|G_{SSS}\|$ and its logarithmic-envelope coefficient. In the third derivative use $2H_SH+HH_S=3H_SH+[H,H_S]$; the commutator costs $B_*$. The first derivative improves to a sum of squares because the real packet derivative and the unitary conditional derivative have zero real cross term.

The denominator-free rank stability estimate of Section [24](/quantum-measurement/research/nonequilibrium-records/conditional-rank-stability-with-zero-fibres-included#sec:rankproof), for an error with norms $D,e_1,e_2$, is <a id="old:Rfunctional"></a>


$$
\mathcal R[D,e_1,e_2]=\frac\hbar M\int
 (4G_1e_1+2e_1^2+14DQ_G+9DG_2+e_2){\,\mathrm d} t.
 

$$

Equation (89).

 The derivatives here are clock derivatives. Decompose the exact error from the same prepared stock as follows. If $E_h$ is the prepared error, $U_a$ the actual propagator, $\psi_c$ the evolution of the product handoff under the clipped gate, and $\psi_p$ agrees with $\psi_c$ until $T_g=0.0033$ and evolves statically thereafter, put 

$$

 E_p=U_aE_h,\quad E_c=U_a(\phi\chi)-\psi_c,\quad
 E_l=\psi_c-\psi_p.

$$

 Before $T_g$ put $E_r=\psi_c-G$, $E_s=0$; afterward put 

$$

 E_r=U_W(t-T_g)(\psi_c(T_g)-G(T_g)),\quad
 E_s=U_W(t-T_g)G(T_g)-G(t).

$$

 Then $\Psi-G=E_p+E_c+E_l+E_r+E_s$ identically. The carried ramp error is counted once, the new static error starts from zero, and the quiet boundary difference is included in $E_r$. The free clock and its Galilean transport belong to every propagator.



<a id="section-C-6"></a>

### C.6 Propagation of the prepared error under the common operator

 <a id="old:homogeneous"></a> Define the old-wave preparation inputs by 

$$

 \begin{aligned}
 D_{\rm old}&:=D_o,& P_{10}&:=P_{S,o},& P_{20}&:=H_{SS}^{o},\\
 n_{10}&:=n_{1T},& n_{20}&:=n_{2T}.
 \end{aligned}

$$

 Use the defining expressions in [(31)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:anisotropic), [(32)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:old-handoff), and [(37)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:second-collar), not the rounded enclosures in Section [B.7](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:handoff-table). In particular, $H_{SS}^{o}$ is the ordinary, phase-restored Hessian bound, not the gauged bound $H_{SS}$. The old-wave norm $D_{\rm old}$ is distinct from the enlarged-wave norm $D_h$ in Appendix [B](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:main). The remote force coefficients are explicitly 

$$
\begin{aligned}F_c&=\mu a_2F_*/2+\mu a_0a_1f_*^2
                     +\mu^2a_1a_2F_*^2/(4M)+10^{-20},\\
 F_{c2}&=\mu a_3F_*/2+\mu(a_1^2+a_0a_2)f_*^2
             +\mu^2(a_2^2+a_1a_3)F_*^2/(4M)+10^{-18},
\end{aligned}
$$

 where $(a_0,a_1,a_2,a_3)=(140,43600,70141750,1387431060000)$, $F_*=0.080802$, $f_*=0.201$, and $\mu=2^{52}\hbar T_0/(10^{-4})^2$. These are the product-rule bounds for the retained preparation phase and its scalar selfpotential; $F_c<5\times10^{-6}$ and $F_{c2}<0.09$. Set $A_{\rm phys}=\hbar A_0/T_0$, $F_a=b_1A_{\rm phys}$, $F_{a2}=b_2A_{\rm phys}$ and collar widths $g_1=0.0005$, $g_2=0.00025$. Initialize 

$$

 L_{10}=\sqrt{n_{10}P_{20}}+2\hbar D_{\rm old}/g_1,\qquad
 L_{20}=\sqrt{n_{20}P_{20}}+2\hbar n_{10}/g_2.

$$

 The six nonnegative variables $(P_1,P_2,n_1,L_1,n_2,L_2)$ are bounded by the solution, starting at these values, of 

$$
\begin{aligned}\dot P_1&=F_aD_{\rm old}+F_cn_2,&
 \dot P_2&=2F_aP_1+\hbar F_{a2}D_{\rm old}+2F_cL_2+\hbar F_{c2}n_2,\\
 \dot n_1&=P_1/(Mg_1),&
 \dot L_1&=P_2/(Mg_1)+(F_c+F_a)n_1,\\
 \dot n_2&=L_1/(Mg_2),&
 \dot L_2&=P_2/(Mg_2)+(F_c+F_a)n_2.
\end{aligned}
$$

 Here the collars move at speed $v$, cancelling Galilean transport; the inner transition lies where the outer collar equals one. Clock commutators give the first two equations. Weighted continuity for the error and for its first clock momentum gives the other four. The radial kinetic term commutes with every collar. The two initial local-momentum inequalities follow by integration by parts and Cauchy–Schwarz. Thus this is a closed positive comparison system, including the remote preparation force. With $e_j=P_j/\hbar^j$, use its exact time integrals in [(89)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:Rfunctional); bound $\int P_1^2\leq P_1(T)\int P_1$. For $T=0.04$ the resulting contribution is $<1.954625\times10^{-17}$.



<a id="section-C-7"></a>

### C.7 Short ramp and static correction

 <a id="old:rampstatic"></a> Put $a_j=b_jA_0/(v^jT_0)$, $R_0=\hbar G_2/(2M)$ and $R_1=\hbar G_3/(2M)$. On $0\leq t\leq T_g$, commutation with the bounded clock derivatives of the gate gives 

$$
\begin{aligned}D_r(t)&=\Delta_0+R_0t,\\
 e_{1r}(t)&=\Delta_1+R_1t+a_1\Delta_0t+a_1R_0t^2/2,\\
 e_{3r}(t)&=G_3+p_3+3a_1p_2t+3a_1^2p_1t^2+a_1^3t^3
                           +3a_2p_1t+3a_1a_2t^2+a_3t,\\
 e_{2r}(t)&=\sqrt{e_{1r}(t)e_{3r}(t)}.
\end{aligned}
$$

 The last line is Fourier interpolation $\|E_{SS}\|^2\leq\|E_S\|\|E_{SSS}\|$. These are clock derivatives and require only the third radial energy graph. After $T_g$ the ramp error's clock norms are conserved by the static propagator. Endpoint ceilings for duration $T=0.04$ in [(89)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:Rfunctional) give $<4.073932\times10^{-16}$. The time $T_g$ is counted from handoff: the trailing support point $0.1009999999+T_g$ exceeds the gate end $0.1041$.

For the static component the energy gauge $U(S)=\exp[-iH_{\rm phys}(S-S_0)/(\hbar v)]$ transforms the generator to $vp+(p-H_{\rm phys}/v)^2/(2M)$. Its three commuting corrections are generated by $p^2/(2M)$, $-pH_{\rm phys}/(Mv)$ and $H_{\rm phys}^2/(2Mv^2)$. The first two ordinary clock derivatives become powers of $(p-H_{\rm phys}/v)/\hbar$, which commute with all three corrections. For $T_s=0.0377$, $\varepsilon=\hbar T_s/(2Mv^2T_0^2)$, the triples $(D,e_1,e_2)$ for these three factors are respectively 

$$
\begin{aligned}D_f&=\hbar T_sp_2/(2M),\\
 e_{1f}&=\frac{\hbar T_s}{2M}(p_3+p_2N_1/(vT_0)),\\
 e_{2f}&=\frac{\hbar T_s}{2M}
          (p_4+2p_3N_1/(vT_0)+p_2N_2/(v^2T_0^2)),\\[2pt]
 D_x&=\hbar T_sp_1N_1/(MvT_0),\\
 e_{1x}&=\frac{\hbar T_s}{Mv}
                    (p_2N_1/T_0+p_1N_2/(vT_0^2)),\\
 e_{2x}&=\frac{\hbar T_s}{Mv}
       (p_3N_1/T_0+2p_2N_2/(vT_0^2)+p_1N_3/(v^2T_0^3)),\\[2pt]
 D_E&=\varepsilon N_2,\qquad
 e_{1E}=p_1\varepsilon N_2+\varepsilon N_3/(vT_0),\\
 e_{2E}&=p_2\varepsilon N_2+2p_1\varepsilon N_3/(vT_0)
                                   +\sqrt{2\varepsilon}N_3/(v^2T_0^2).
\end{aligned}
$$

 The last term follows from $|e^{-i\varepsilon\lambda^2}-1|\leq\sqrt{2\varepsilon}|\lambda|$. Thus $\|H^2(e^{-i\varepsilon H^2}-1)u\|
\leq\sqrt{2\varepsilon}\|H^3u\|$; no fourth radial graph is required. Sum the triples, and use the static versions of $G_2$ (with its gate term removed) and $G_1,Q_G$ in [(89)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:Rfunctional). The static contribution is $<3.770360\times10^{-19}$.



<a id="section-C-8"></a>

### C.8 Both remote clock comparisons

 <a id="old:tails"></a> For the clipped evolution let $\mathcal A_j=A_{\rm phys}b_j/v^j$, $j=1,\ldots,4$, and $\mathcal A_0=A_{\rm phys}$. The global physical clock moments obey 

$$

 \dot P_k\leq\sum_{j=1}^k\binom kj\hbar^{j-1}\mathcal A_jP_{k-j},
 \qquad P_k(0)=\hbar^kp_k,\quad P_0=1.

$$

 Define their polynomial majorants recursively by equality. This is an explicit finite triangular recursion to degree $k$, using no radial derivative. Four static left collars of width $g_c=0.0002$ are supported below $0.10081$, below the initial clock support and before activation. Their transitions are nested; where they act all clipped clock forces vanish. Weighted continuity therefore yields the local polynomials 

$$

 l_k(t)=(Mg_c)^{-(4-k)}\mathcal I^{4-k}P_4(t),
 \qquad k=0,1,2,\qquad \mathcal I f(t)=\int_0^t f(s){\,\mathrm d} s.

$$

 They bound $\|\chi_0p^k\psi_c\|$. Set 

$$

 V_c=\mu a_1F_*/2+\mu a_0^2f_*^2/2
                +\mu^2a_1^2F_*^2/(8M)+10^{-20},
 \quad C_1=F_c+\mathcal A_1,\quad C_2=F_{c2}+\mathcal A_2.

$$

 The common-minus-clipped source is supported in this collar. Its norm and momentum rates are 

$$

 f_0=V_cl_0/\hbar,\quad f_1=V_cl_1/\hbar+F_cl_0,
 \quad f_2=V_cl_2/\hbar+2F_cl_1+\hbar F_{c2}l_0.

$$

 Starting from zero, its bounds are the explicit polynomials 

$$

 D_c=\mathcal I f_0,\quad P_{1c}=\mathcal I(f_1+C_1D_c),\quad
 P_{2c}=\mathcal I(f_2+2C_1P_{1c}+\hbar C_2D_c).

$$

 This retains the common propagator's force; differentiating a Duhamel integral as though the propagator commuted with $p$ would not suffice. Their exact polynomial time integrals in [(89)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:Rfunctional), with $\int P_{1c}^2\leq P_{1c}(T)\int P_{1c}$, give $<2.240929\times10^{-21}$.

For the clipped-to-static comparison use the moving weight $\chi(t,S)=\min(1,\exp[-10^6(S-0.1009-vt)])$. Its derivative satisfies $\chi_t+v\chi_S=0$ and $|\chi_S|\leq10^6\chi$. Let $L_k=\|\chi p^k\psi_c\|$, $0\leq k\leq3$, and bound them with the positive system 

$$

 \dot L_k=(10^6/M)L_{k+1}
   +\sum_{j=1}^k\binom kj\hbar^{j-1}\mathcal A_jL_{k-j},
 \quad L_4=P_4,\quad L_k(0)=(2/7^{50})\hbar^kp_k.

$$

 The initial bound follows from $e^{-99.9999}<2/7^{50}$. For $t\geq T_g$, the weight equals one on the entire remaining gate, so the late error obeys 

$$
\begin{aligned}D_l&\leq(\mathcal A_0/\hbar)\int_0^T L_0,\\
 P_{1l}&\leq(\mathcal A_0/\hbar)\int_0^T L_1
                                  +\mathcal A_1\int_0^T L_0,\\
 P_{2l}&\leq(\mathcal A_0/\hbar)\int_0^T L_2
                    +2\mathcal A_1\int_0^T L_1
                    +\hbar\mathcal A_2\int_0^T L_0.
\end{aligned}
$$

 Extending these nonnegative integrals back from $T_g$ to zero is conservative. The static propagator commutes with $p$. Using the endpoint triples over the duration $T$ in [(89)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:Rfunctional) gives $<2.817683\times10^{-29}$. Thus neither remote exact clock tail has been set to zero.



<a id="section-C-9"></a>

### C.9 Final old current, terminal CDF, and reproducible arithmetic

 <a id="old:current"></a> Each of the five component expressions includes its own quadratic $2e_1^2$ term. For their sum use $(\sum_{j=1}^5e_{1j})^2
\leq5\sum_{j=1}^5e_{1j}^2$. Add four further copies of the five quadratic terms to their sum. This extra allowance is $<2.117822196256773\times10^{-27}$. Together with [(87)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:referencecurrent) this gives <a id="old:Ifinal"></a>


$$
I_{\rm old}<6.655453611235769\times10^{-16}.
 

$$

Equation (90).

 All absolute values precede the live joint-coordinate integral. The components are wave-law integrals; the original-law cap is inserted only in the event conversion.

The scalar terminal comparison, on $T=0.04$, is independently bounded by <a id="old:terminalD"></a>


$$
D_{\rm end}=D_{\rm old}+\frac{\hbar Tp_2}{2M}
 +\frac{Tp_1\hbar N_1}{MvT_0}
 +\frac{\hbar A_0}{2Mv^2T_0}\,
       \frac52\left(1+\frac{2(\sigma+10^{-10})}{vd}\right)
 +\frac{T\hbar N_2}{2Mv^2T_0^2}+\Delta_0.
 

$$

Equation (91).

 The gate coefficient is a supremum over the whole clock packet, not the single-offset integral. It is below $55$ and gives $D_{\rm end}<3.034377484488931\times10^{-11}$. For each radial cut the exact conditional CDF $K_\Psi$ and helper CDF $K_u$ obey 

$$

 \int w(S)|K_\Psi(S,b)-K_u(S,b)|{\,\mathrm d} S
 \leq\|\,|\Psi|^2-|G|^2\,\|_1\leq2D_{\rm end}.

$$

 Indeed subtract the two densities against the centered indicator ${\mathbf1}_{r<b}-K_u(S,b)$, of modulus at most one. Under the exact terminal wave law $K_\Psi$ is uniform conditional on $S$; equivariance transports the original cap, giving $2CN D_{\rm end}$ for all $N=256001$ cuts. This is terminal domination by the exact wave, never a newly imposed cap relative to the helper.

All displayed decimal bounds can be checked by the following finite rational procedure; the formulae above, rather than abbreviated decimals, are the inputs. For $0\leq t\leq4/3$ use the 24-term alternating Taylor sums for sine and cosine with the next-term one-sided remainder. Bound square roots by rational bisection, and logarithms by 

$$

 \log x=2\sum_{k=0}^{n-1}\frac{z^{2k+1}}{2k+1}+R_n,
 \quad z=(x-1)/(x+1),\quad
 |R_n|\leq\frac{2|z|^{2n+1}}{(2n+1)(1-z^2)},

$$

 after taking reciprocal arguments where useful. Machin's identity $\pi=16\arctan(1/5)-4\arctan(1/239)$ with alternating remainders bounds $\pi$. Rational arithmetic permits arbitrary refinement. For [(80)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:sorting) use the breakpoints $0,s_-/2^{20},g$ and 64 equally spaced subintervals in every $[s_-/2^j,s_-/2^{j-1}]$, $j=20,\ldots,1$. Take every nonnegative numerator factor at the right endpoint and the increasing lower gap at the left. No monotonicity of their ratio is assumed. For [(83)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:ageunion) use 128 equal subintervals and right endpoint rectangles for the increasing product $Dq$. These give 

$$
\begin{aligned}\int_0^{s_-}\frac{G_+'D^2+Dq}{G_-}
       &<0.000517506143180416981,\\
 \int_{s_-}^{s_+}Dq&<0.000001583255601884495.
\end{aligned}
$$



For a positive system $y'=Ay$, rescale by a positive diagonal matrix $S$, put $B=S^{-1}AS$, $z_0=S^{-1}y_0$, and sum $z_k=(TB)^kz_0/k!$. If $\alpha=T\|B\|_\infty<K+2$, the omitted norm after degree $K$ is at most 

$$

 \|z_K\|_\infty\frac{\alpha}{K+1}
                     \frac1{1-\alpha/(K+2)}.

$$

 For the time integral sum $Tz_k/(k+1)$ and multiply this tail by $T/(K+2)$. For the homogeneous system append the constant state one, use scales $(10^{-29},10^{-47},10^{-28},10^{-35},10^{-33},10^{-40},1)$ and $K=80$. For the combined global/local tail system, ordered $(P_0,\ldots,P_4,L_0,\ldots,L_3)$, use $(1,10^{-19},10^{-38},10^{-57},10^{-76},10^{-42},10^{-60},10^{-68},10^{-72})$ and $K=100$. In both cases $\alpha<10$ for $T=0.04$. This states every matrix entry, initial value, quadrature partition and remainder rule needed to evaluate the bound without a separate coefficient ledger or numerical propagation of the Schrödinger equation.
