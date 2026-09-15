# Chapter 9: Readable histories and reciprocal source writers

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="acc:histories"></a> 

This part consolidates the finite compatibility witness of [[M11](/quantum-measurement/monograph/bibliography#bib-M11)], the reciprocal stored-action writer of [[M21](/quantum-measurement/monograph/bibliography#bib-M21)], the destructive and native-product contacts of [[M22](/quantum-measurement/monograph/bibliography#bib-M22), [M23](/quantum-measurement/monograph/bibliography#bib-M23)], and the accounted-work counterexample of [[M25](/quantum-measurement/monograph/bibliography#bib-M25)]. These are different levels of physical restriction on access, tested on explicit complete experiments. They are not a universal prohibition of Bell trajectories. Their common point is that preserving a native path or accounting for a local disturbance does not establish a common affine law for every additional record. 



<a id="section-9-1"></a>

## 9.1 One reusable detuned experiment

 Let physical sectors be the position factor of $\mathbb C^2_{\rm pos}\otimes\mathbb C^2_{\rm int}\otimes\mathcal H_R$, with $R$ inaccessible. Put $\hbar=1$ in this chapter and take <a id="acc:detunedH"></a>


$$
H_D=g(\sqrt\eta\,\sigma_x+\sqrt{1-\eta}\,\sigma_z)_{\rm pos}
 \otimes\operatorname{diag}(1,2)_{\rm int}\otimes I_R,
 \quad 0<\eta<1,\quad T=\frac\pi{2g}.
 

$$

Equation (9.1).

 Initially position and every native carrier are at $0$, the source action and queues are empty, and the unknown normalized internal/reference vector is $\Xi$. Set $p=\|(\lvert0\rangle\langle0\rvert_{\rm int}\otimes I_R)\Xi\|^2$. The two frequencies give <a id="acc:weight"></a>
<a id="acc:current"></a>


$$
\begin{aligned}w_1(t)&=\eta\{p\sin^2(gt)+(1-p)\sin^2(2gt)\},\\
 J_{10}(t)&=\eta g\sin(2gt)\{p+4(1-p)\cos(2gt)\}.
 
\end{aligned}
$$

Equation (9.2, 9.3).

 The bracket is decreasing on $[0,T]$, so the current reverses at most once, from positive to negative. Write $f_p(t)=p\cos^2(gt)+(1-p)\cos^2(2gt)$, so $w_0=1-\eta+\eta f_p\ge1-\eta$. 



**Proposition 9.1 (First-exit probability).**

<a id="acc:firstexit"></a> The original Bell process initialized at the unique ready sector has first-exit probability by $T$ <a id="acc:firstexitformula"></a>


$$
F(p)=\eta\left[1-\min_{0\le t\le T}f_p(t)\right].
 

$$

Equation (9.4).

 It has $F(0)=F(1)=\eta$ and $F(2/3)=3\eta/4$. 

 

**Proof.**

Before first exit the integrated hazard is $\int[J_{10}]_+/w_0$. On the sole increasing interval of $w_1$, $J_{10}=-\dot w_0$, so survival equals the minimum attained $w_0$. Subsequent negative current adds no outward first-exit hazard. For $p=2/3$, set $x=\cos^2(gt)$; then 

$$

 f_{2/3}=\tfrac23x+\tfrac13(2x-1)^2
 =\tfrac14+\tfrac43(x-\tfrac14)^2.

$$

 Its minimum is $1/4$, at $gt=\pi/3$. The basis-frequency minima are zero. 

□

 



**Theorem 9.2 (Common complete-input affine floor).**

<a id="acc:affine"></a> Suppose one complete represented ready preparation admits both the basis ensemble with probabilities $(2/3,1/3)$ and the equal ensemble 

$$

 \psi_\pm=\sqrt{2/3}\lvert0\rangle
 \pm\sqrt{1/3}\lvert1\rangle,

$$

 without an active preparation tag distinguishing their methods. If their complete represented matrix input is the same, no common affine record law reproduces both original Bell first-exit histories. A common record approximation with TV error at most $\epsilon$ on each preparation obeys <a id="acc:affinefloor"></a>


$$
\epsilon\ge\eta/8.
 

$$

Equation (9.5).

 This conclusion places no restriction on the possible event daughters. 

 

**Proof.**

Both ensembles have matrix $\operatorname{diag}(2/3,1/3)$ and the same ready position. Their Bell first-exit probabilities are respectively $\eta$ and $3\eta/4$. An affine map assigns their common complete input a common event probability. The triangle inequality yields $\eta/4\le2\epsilon$. The proof concerns this one record marginal, so arbitrary subsequent daughter kernels cannot repair it. 

□

 

The theorem's complete-preparation qualification is essential. A canonical source can regard the actual ray decomposition as physically different data and predict different records consistently with its own ontology. The theorem then shows that the proposed matrix quotient is insufficient; it does not license discarding legitimate active provenance. Conversely, if a common affine complete-input law is retained, the unmodified Bell first-exit history cannot be made an arbitrarily accurate public record in this comparison class. Terminal position weights do not show the conflict: both ensembles end with position-one probability $2\eta/3$. 



<a id="section-9-2"></a>

## 9.2 A structural incompatibility of classical and quantum writers

 The difference between a classical canonical field and an affine classical–quantum source is algebraic. Let $\mathcal A=C^\infty(C,M_d)$ be the observable algebra of a classical coordinate and finite quantum bank. A reversible infinitesimal star-derivation $D$ satisfies the Leibniz rule. 



**Proposition 9.3 (Center preservation).**

<a id="acc:center"></a> Every derivation of $\mathcal A$ maps its center to its center. In particular the rule $D(fI)=f'A$ with nonscalar Hermitian $A$ cannot be such a reversible classical–quantum transport law. 

 

**Proof.**

For central $fI$ and arbitrary $B$, differentiate $[fI,B]=0$: $[D(fI),B]+[fI,D(B)]=[D(fI),B]=0$. Thus $D(fI)$ is central. Choosing $f'$ nonzero proves the final statement. 

□

 This result does not invalidate the classical canonical action. It prevents identifying that action's exact expectation writer with a reversible transport of this different algebra without changing physical premises. Dissipative instruments, their noise and their disturbance must be derived or separately specified in the latter constitution. 



<a id="section-9-3"></a>

## 9.3 Reciprocity does not remove a delayed classical read

 Attach a canonical pointer $(Y,P)$ to the current action $\Pi_e$ of Chapter [3](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:production) through <a id="acc:wire"></a>


$$
H_{\rm wire}(t)=k(t)\Pi_eP+\frac{P^2}{2M},\qquad M>0.
 

$$

Equation (9.6).

 Its equations are $\dot Y=k\Pi_e+P/M$, $\dot P=0$, $\dot\chi_e=kP$, $\dot\Pi_e=-\partial_{\chi_e}H$. The pointer can kick the connection; it is not a one-way expectation assignment. 



**Theorem 9.4 (Finite-width delayed action read).**

<a id="acc:delayed"></a> Run the canonical source on $[0,T]$ with $k=0$, $\chi(0)=0$, and $|Y_0|\le\epsilon_Y$, $|P_0|\le\delta$. During $[T,T+\tau]$ set the coherent source Hamiltonian to zero and apply a pulse of area $\beta=\int_T^{T+\tau}k(t)dt$. Then <a id="acc:wireout"></a>


$$
Y_{
\rm out}=Y_0+\frac{T+\tau}{M}P_0+\beta\Pi_e(T),\qquad
 \chi_{e,\rm out}=\beta P_0,\qquad \Pi_{e,\rm out}=\Pi_e(T).
 

$$

Equation (9.7).

 If the reaction generator has the scalar form [(4.1)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:generator), or the unchanged material response of Chapter [5](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:neutrality), the native coherent field and all native reaction paths through read completion are exactly unchanged. This includes unfinished-queue reactions in the zero-current hold. 

 

**Proof.**

During production $k=0$. During reading the source Hamiltonian vanishes, so $\Psi$ and $\Pi_e$ are constant; $P$ is constant throughout. Integration gives [(9.7)](/quantum-measurement/monograph/readable-histories-and-reciprocal-source-writers#acc:wireout). Queues, carriers and material retain their original equations because their declared reaction coefficients have no added $\chi$ dependence during the hold. The same primitive reaction clocks therefore couple all native paths exactly. A later connection kick cannot alter a record already secured in $Y$. 

□

 

In the detuned experiment, $\Pi(0)=0$ gives $\Pi(T)=w_1(T)=\eta p$. If $\beta>0$ and a finite comparator has bounded error $e_{
\rm read}$, <a id="acc:precision"></a>


$$
\epsilon_Y+(T+\tau)\delta/M+e_{
\rm read}<\beta\eta/4
 

$$

Equation (9.8).

 guarantees that the bit $Y_{
\rm out}>3\beta\eta/4$ is one for $p=1$ and zero for $p=0,1/2$. Equal $Z$ and equal $X$ ensembles then give bit probabilities $1/2$ and $0$. No particular distribution inside the nonzero-width ready rectangle is needed. For example, $\eta=1/2$, $\beta=M=1$, $g=1$, $\tau=1$, $\epsilon_Y=e_{
\rm read}=1/64$, $\delta=10^{-3}$ satisfy the strict inequality. A smooth comparator with constant response plateaux on the separated bands can amplify the bit without a derivative force on those bands. 

All pointer and connection variables remain represented. A later prescribed Hamiltonian with $\|H(\chi,t)-H(0,t)\|\le L_H(t)|\chi|$ obeys the wave bound 

$$

 \|(U_\chi-U_0)\Psi_T\|\le|\beta|\delta\int L_H(t)dt.

$$

 This controls the full vector including the reference. It is not a Bell path bound near nodes and does not cover feedback through the new pointer. An internal rotation noncommuting with $\operatorname{diag}(1,2)$ but independent of $\chi$ is unaffected at the time it is applied. 



<a id="section-9-4"></a>

## 9.4 Equivalent encodings and noisy returns

 Deleting access to the symbol $\Pi$ is insufficient if its exact accounting remains readable. For the monitored edge, let $R_e$ be net native reaction count, $Z_e$ residual signed queue and $u_e$ exporter residue. Then <a id="acc:ledger"></a>


$$
N(\Pi_e-\Pi_e(0))=R_e+Z_e+u_e
 

$$

Equation (9.9).

 with pending and captured charges added when those resources are present. The identity follows by adding every export and reaction rewrite. Separate registers may reveal no useful scalar individually while their joint return reconstructs it. A gauge-invariant difference of two such actions is equally available to a canonical coupling $kA P$ if that relational action is a physical observable. 



**Proposition 9.5 (Finite scalar noise and retained keys).**

<a id="acc:noise"></a> Let $N_0$ be any proper additive-noise variable independent of the source value. The laws $P_Z=\tfrac12{\operatorname{Law}}(N_0)+\tfrac12{\operatorname{Law}}(N_0+a)$ and $P_X={\operatorname{Law}}(N_0+a/2)$ cannot agree for $a\ne0$. If $N_0$ has variance $\sigma^2<\infty$, then <a id="acc:noisebound"></a>


$$
{d_{\mathrm{TV}}}(P_Z,P_X)\ge\frac{a^2}{48(\sigma^2+a^2)}.
 

$$

Equation (9.10).

 If the noise key itself is retained and returned jointly with the noisy readout, the two joint laws have TV one. 

 

**Proof.**

Equality of characteristic functions would require $\varphi(t)e^{iat/2}[\cos(at/2)-1]=0$ for every $t$. Continuity and $\varphi(0)=1$ contradict this on a small punctured neighborhood of zero. For the bound, center $N_0$ and test the bounded cosine centered at $a/2$. Its expectation gap is $(1-\cos(at/2))\operatorname{Re}\varphi(t)$ in absolute value. Take $t=(\sigma^2+a^2)^{-1/2}$. Then $\operatorname{Re}\varphi(t)\ge1-\sigma^2t^2/2\ge1/2$ and $1-\cos(at/2)\ge a^2t^2/12$. A bounded test of absolute value at most one has expectation gap at most $2{d_{\mathrm{TV}}}$, giving [(9.10)](/quantum-measurement/monograph/readable-histories-and-reciprocal-source-writers#acc:noisebound). Finally $(Y,N_0)$ determines $Y-N_0$, whose values are in $\{0,a\}$ in one preparation and $\{a/2\}$ in the other. Those supports are disjoint. 

□
