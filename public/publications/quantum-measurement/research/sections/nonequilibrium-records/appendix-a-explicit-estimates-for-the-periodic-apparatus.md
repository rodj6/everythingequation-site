# Appendix A: Explicit estimates for the periodic apparatus

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

<a id="section-A"></a>

## A Explicit estimates for the periodic apparatus

<a id="app:periodic"></a> This appendix supplies the polynomial and Gaussian calculations used in Part I. All parameter bounds refer to that part's finite rectangle. They do not enlarge the law class of Part II.



<a id="section-A-1"></a>

### A.1 Polynomial derivatives and clock normalization

 Writing $z=1-2a$, direct differentiation gives 

$$

 B_9'(a)=630a^4(1-a)^4,\quad
 B_9''(a)=\frac{315}{8}z(1-z^2)^3,\quad
 B_9'''(a)=-\frac{315}{4}(1-z^2)^2(1-7z^2).

$$

 The first maximum is $315/128$; the second occurs at $|z|=1/\sqrt7$ and is below $10$. For the third, the only interior stationary squared arguments are $0$ and $3/7$, giving a bound $315/4$. Consequently the writer displacement has derivative bounds 

$$

 \|b'\|_\infty<1478,\qquad \|b''\|_\infty<150200,
 \qquad \|b'''\|_\infty<2.958\times10^7.

$$

 For the four envelope derivatives the exact integrals $J_k=\int_0^1(B_9^{(k)}(a))^2{\,\mathrm d} a$ are 

$$

 (J_1,J_2,J_3,J_4)
 =\left(\frac{4410}{2431},\frac{5040}{143},
              \frac{272160}{143},\frac{1814400}{11}\right).

$$

 Also $\int A_c^2=176818/230945=Z_c$. The change of variable on both transition intervals gives $\|\varphi^{(k)}\|^2=2\,5^{2k-1}J_k/Z_c$. Squaring the four claimed upper bounds $6,112,4000,190000$ verifies all four inequalities using rational arithmetic alone.



<a id="section-A-2"></a>

### A.2 Driven Gaussian jets

 Let $d=v\lambda$, $r=y-q$, and let $u$ denote the normalized coherent Gaussian in $G=\varphi(\xi)e^{-it/(2\mu)}u$. The start of every characteristic in the envelope support precedes the drive. Thus the characteristic solution depends on $t+\xi/d$, and differentiation in $\xi$ is time differentiation divided by $d$ on $q,q',\vartheta$. The forcing $\mathcal F=\Omega^2b+b''$ and the error $e=q-b$ obey 

$$

 |e|\le\frac{|1-\lambda^2|\,2\|b'\|_\infty}{\lambda\Omega}<.001,
 \qquad
 |e'|\le\frac{|1-\lambda^2|\,2\|b'\|_\infty}{\lambda}<.07.

$$

 Indeed the total variation of the single positive hump $b'$ is $2\|b'\|_\infty$; integrate the sine and cosine representations of $e,e'$ against $b''(\lambda t+\xi/v)$. It follows that $|q|<25$, $|q'|<1630$, $|q''|<170000$, and $|q'''|<36000000$, using $q''=b''-\Omega^2e$ and $q'''=\lambda b'''-\Omega^2e'$. Moreover $|\mathcal F|<421000$ and $|\dot{\mathcal F}|<5.24\times10^7$.

Define the complex coefficient $a_1$ and real coefficient $\beta$ by 

$$

 a_1=\frac{q'+i\mu q''}{d},\qquad
 \beta=\frac{\mu}{2d}(qq''-q'^2+\mathcal F e).

$$

 Direct differentiation, including the scalar compensation phase, gives 

$$
\begin{aligned}u_\xi&=(a_1r+i\beta)u,\\
 u_{\xi\xi}&=\left[a_1^2r^2+
 ((a_1)_\xi+2i\beta a_1)r+
 i\beta_\xi-a_1q_\xi-\beta^2\right]u,\\
 (a_1)_\xi&=(q''+i\mu q''')/d^2,\\
 \beta_\xi&=\frac{\mu}{2d^2}
 (qq'''-q'q''+\dot{\mathcal F}e+\mathcal F e').
\end{aligned}
$$

 Since $d\ge126.99873$, substitution of the preceding bounds yields 

$$

 |a_1|<19,\quad |(a_1)_\xi|<25,\quad |\beta|<273,
 \quad |\beta_\xi|<367,\quad |q_\xi|<13,
 \quad \mu|q'|<17.

$$

 For example the numerator bounding $\beta$ is $\mu_+(25\cdot170000+1630^2+421000\cdot.001)$; for $\beta_\xi$ it is $\mu_+(25\cdot36000000+1630\cdot170000
+5.24\,10^7\cdot.001+421000\cdot.07)$. The denominators are respectively $2d_-$ and $2d_-^2$.

For the Gaussian measure $|u|^2{\,\mathrm d} r$, $\|r^k u\|^2=(2k-1)!!/2^k$. The quadratic polynomial in $u_{\xi\xi}$ therefore has coefficient moduli bounded by $361,10399,75143$. Applying the triangle inequality to these three monomials and to their derivatives proves 

$$

 \begin{array}{c|rr}
 &u_\xi&u_{\xi\xi}\\\hline
 \|\cdot\|&287&83000\\
 \|r\,\cdot\|&211&63000\\
 \|p_y\,\cdot\|&5110&1485000
 \end{array}

$$

 as strict upper bounds. Here $p_y(P(r)u)=[-iP'(r)+(ir+\mu q')P(r)]u$, which explains the last row without omitting the phase momentum. Leibniz' rule now gives 

$$
\begin{aligned}\|G_{\xi\xi}\|&<112+12(287)+83000=86556<110000,\\
 \|p_yG_{\xi\xi}\|&<112(18)+12(5110)+1485000<1.55\,10^6,\\
 \|yG_{\xi\xi}\|&<25(86556)+112/\sqrt2+12(211)+63000
                         <2.23\,10^6.
\end{aligned}
$$

 These explicit calculations prove both weighted bounds used in Lemma [8.1](/quantum-measurement/research/nonequilibrium-records/finite-interacting-clock-not-an-infinite-mass-limit#pa:lem:aux).



<a id="section-A-3"></a>

### A.3 Rotor enclosures and the quiet-prefix current

 For completeness, an outward square-root operation on a nonnegative rational $x$ can be defined using integers alone. Set $n=10^{32}$, $k=\lfloor\sqrt{\lfloor n^2x\rfloor}\rfloor$, and return $k/n$ if $k^2\ge n^2x$, otherwise $(k+1)/n$. This is an upper enclosure whose error is at most $10^{-32}$. Applying it to the four rational squares in Lemma [12.1](/quantum-measurement/research/nonequilibrium-records/rotor-wave-and-velocity-weighted-error#ph:lem:rotor) gives 

$$

\begin{aligned}
 d_0&<.006517177225775,&\quad \epsilon_R&<.000715486047289,\\
 d&<.007232663273064,&q&<.003982026605165.
\end{aligned}

$$

 The strict comparisons with $D=.007233$ and $Q=.003983$ follow. The trigonometric estimates used there also have elementary rational checks: alternating Taylor sums through degrees $14,16$ bound $\cos(1.3)$, and degrees $15,17$ bound $\sin(1.3)$. They give $\cos(1.3)>1/4$, $\tan(1.3)<4$, and $\sec(1.3)+\tan(1.3)<8$. Since the positive exponential Taylor sum through degree $14$ at $2.1$ exceeds $8$, 

$$

 \int_0^{1.3}\sec^3 t{\,\mathrm d} t
 =\tfrac12[\sec(1.3)\tan(1.3)+
                 \log(\sec(1.3)+\tan(1.3))]<8.

$$

 The same cosine upper sum at $.998(1.22)$ gives $\cos(.998(1.22))/2+.01<1/5$, placing both compact waves strictly inside their respective soft-classifier plateaux.

The Sobolev constants in the quiet-prefix estimate require no private auxiliary result. For a normalized sector rotor $r_i$ with $0\le V_i\le g_iK/8$, energy and graph-norm conservation from the initial flat wave give 

$$

 \|r_i'\|^2\le mg_iK/4,\qquad
 \|r_i''\|\le mg_iK/2.

$$

 Thus $\|r_i'\|\le K/h$ and $\|r_i''\|\le K^2/h^2$. On a circle of length two, $\|f\|_\infty^2\le\|f\|^2/2+2\|f\|\|f'\|$. Apply this first to $r_i$ and then to $r_i'$ to obtain $\|\rho_r\|_\infty\le3K/h$ and $\|j_r\|_\infty\le8K$. The factorized pretrigger wave errors then give 

$$

 \|\delta j_X\|_1\le4h\epsilon_{\rm pre},\qquad
 \|\delta\rho\|_1\le3\epsilon_{\rm pre},

$$

 and hence the lifted-rank integrand is at most $36K\epsilon_{\rm pre}$. Integrating up to $1.22$ is bounded by $120K\epsilon_{\rm pre}<6\,10^{-18}$ as used in the main text.



<a id="section-A-4"></a>

### A.4 Gaussian tails and the whole holding interval

 After capture, every comparison centre is within $.012$ of its intended centre, including the offset $z_0$. For $a>0$, integration by parts gives 

$$

 \|{\mathbf1}_{|r|\ge a}\gamma\|^2\le
 \frac{e^{-a^2}}{a\sqrt\pi},\qquad
 \|{\mathbf1}_{|r|\ge a}r\gamma\|^2\le
 \frac{e^{-a^2}}{\sqrt\pi}\left(a+\frac1{2a}\right).

$$

 Take $a=7.98$. The positive Taylor sum of $e^{a^2}$ through degree $200$ exceeds $4\,10^{27}$. With $\mu|q'|<.000701$, these inequalities give comparison tail norms below $10^{-14}$ and momentum norms below $10^{-13}$ on all four holding bands. They also imply the weaker wrong-inner-region amplitude bound $10^{-12}$ at capture.

For each inner/outer pair choose a smooth cutoff changing from zero to one across the intervening band of width two, with $|\chi'|\le15/16$. Any path that starts in the inner region and leaves its outer region has cutoff variation at least one. Equivariance therefore bounds its wave probability by $\int_{t_b}^3\int |\chi'(Z)j_Z|{\,\mathrm d} q{\,\mathrm d} t$. This is a band integral of absolute current; no pointwise boundary trace estimate is needed. Expanding the exact auxiliary wave as $G+E$ bounds its integrand by the comparison current plus $(e_A10^{-13}+10^{-14}p_A+e_Ap_A)/\mu_-$. Summing the four cutoffs, multiplying by the actual-law cap $16$, and using $3-1.28=43/25$ proves the displayed holding bound in Part I.
