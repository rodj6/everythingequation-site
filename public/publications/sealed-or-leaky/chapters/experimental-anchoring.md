# Section 3: Experimental anchoring

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-3"></a>

## 3 Experimental anchoring

<a id="exp:section"></a>



<a id="section-3-1"></a>

### 3.1 A finite-sample likelihood statement, not a central-value entropy claim

 

*Status: Statistical model.*

 Let $C_i=(A_i,B_i)$ and $W_i=(X_i,Y_i)$, with history $\mathcal H_i=(C_1,W_1,\ldots,C_{i-1},W_{i-1})$. For a fixed classical initial $T$, assume 

$$

 {\mathbb P}(W_i=xy\mid T,\mathcal H_i)=q_{xy}>0

$$

 and that the box of $C_i$ conditional on $T,\mathcal H_i$ is no-signalling. These are sequential premises, not consequences of the one-round assumptions. Their chain factorization is <a id="exp:causalfactor"></a>


$$

 P(c^n,w^n\mid t)=\prod_{i=1}^n q_{w_i}
 P_i(c_i\mid w_i,\mathcal H_i,t).

$$

Equation (5).

 Summation over the outcomes gives $P(w^n\mid t)=\prod_iq_{w_i}$. Thus conditioning on the whole setting word does not introduce a future-input factor into the outcome likelihood. This causal factorization is indispensable for the following likelihood calculation.

Put $q=\min_{xy}q_{xy}$, $\sigma_{xy}=(-1)^{xy}$, 

$$

 D_i=\frac{\sigma_{X_iY_i}A_iB_i}{q_{X_iY_i}},\qquad
 \widehat S=\frac1n\sum_iD_i,\qquad
 S_i={\mathbb E}[D_i\mid T,\mathcal H_i].

$$

 This defines the estimator; it is not automatically the same as a published setting-frequency-normalized central value.

<a id="source-lemma-4"></a>

**Lemma 3.1 (Conditional-range CHSH concentration).**

<a id="exp:range"></a> 

*Status: Proved conditional on the sequential setting law above.*

 For $0<\alpha<1$, define 

$$

 r_n=\frac1q\sqrt{\frac{2\ln(1/\alpha)}n}.

$$

 For almost every $t$, ${\mathbb P}_t\{n^{-1}\sum_i S_i<\widehat S-r_n\}\le\alpha$. The constant uses the conditional range width $2/q$, not the larger bound $2(1/q+4)$ on centered increments. 

 <a id="source-proof-8"></a>

**Proof.**

Conditionally on the history and $t$, $D_i\in[-1/q,1/q]$. The log moment-generating function of $D_i-S_i$ has value and first derivative zero at the origin; its second derivative is the variance under an exponentially tilted law, at most $(2/q)^2/4=1/q^2$. Integrating twice gives the bounded-range inequality 

$$

 {\mathbb E}_t[e^{\theta(D_i-S_i)}\mid\mathcal H_i]
 \le e^{\theta^2/(2q^2)}.

$$

 Iteration and Markov's inequality give ${\mathbb P}_t(\sum_i(D_i-S_i)\ge nr)\le
\inf_{\theta>0}e^{-\theta nr+n\theta^2/(2q^2)}
=e^{-nq^2r^2/2}$. Substitution proves the assertion. Independence of device outputs between rounds was not assumed. 

□



<a id="source-proposition-3"></a>

**Proposition 3.2 (Finite-sample outcome-likelihood certificate).**

<a id="exp:finite"></a> 

*Status: Proved conditional on [(5)](/sealed-or-leaky/experimental-anchoring#exp:causalfactor) and conditional no-signalling; quantum alternative conditional on per-history (QT).*

 Define $F_{\rm NS}(s)=0$ for $s\le2$, $F_{\rm NS}(s)={f_{\mathrm{NS}}}(s)$ for $2<s<4$, and $F_{\rm NS}(s)=1$ for $s\ge4$. Then for almost every $t$, <a id="exp:finitecorrect"></a>


$$

 {\mathbb P}_t\!\left\{-\log_2 P_t(C^n\mid W^n)
       <nF_{\rm NS}(\widehat S-r_n)\right\}\le\alpha.

$$

Equation (6).

 Under per-history (QT), replace $F_{\rm NS}$ by $F_Q$, obtained by the analogous zero extension below $2$ and constant extension above $2\sqrt2$ of ${f_{\mathrm{Q}}}$. The same $r_n$ suffices. For a threshold $s_*$ fixed before the analyzed data, put $\delta_*=2^{-nF_{\rm NS}(s_*-r_n)}$ and $J_* ={\mathbf1}_{\{\widehat S\ge s_*\}}$. Then <a id="exp:finitetail"></a>


$$

 {\mathbb P}_t\{P_t(C^n\mid W^n)>\delta_*,\ J_*=1\}\le\alpha.

$$

Equation (7).

 Neither display alone is a bound on unsmoothed min-entropy of a postselected distribution. 

 <a id="source-proof-9"></a>

**Proof.**

Each joint outcome probability is no larger than an Alice marginal, so Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) bounds it by $2^{-F_{\rm NS}(S_i)}$. By [(5)](/sealed-or-leaky/experimental-anchoring#exp:causalfactor), 

$$

 -\log_2P_t(c^n\mid w^n)
 \ge\sum_iF_{\rm NS}(S_i)
 \ge nF_{\rm NS}\!\left(n^{-1}\sum_i S_i\right).

$$

 The function is convex and nondecreasing on the physical domain $[-4,4]$; its extension above that domain is not used in Jensen's inequality. Outside an event of probability $\alpha$, Lemma [3.1](/sealed-or-leaky/experimental-anchoring#exp:range) makes the last expression at least the right side of [(6)](/sealed-or-leaky/experimental-anchoring#exp:finitecorrect). If the empirical lower endpoint exceeds $4$, that event is necessarily in the exceptional set. The quantum proof uses the imported one-round bound of <a id="citation-12"></a>[[22](/sealed-or-leaky/references#bib-Pironio10)], convexity of $F_Q$ on $[-2\sqrt2,2\sqrt2]$, and the same concentration inequality. The fixed-threshold consequence follows by monotonicity. Postselection changes both the conditional law and the exceptional probability; Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer) supplies that conversion explicitly. 

□





<a id="section-3-2"></a>

### 3.2 Published CHSH values: illustrations only

 

*Status: Imported central values; derived illustrative evaluations.*

 The reported values are $2.42\pm0.20$ in Hensen et al. <a id="citation-13"></a>[[23](/sealed-or-leaky/references#bib-Hensen15)], $2.221\pm0.033$ in Rosenfeld et al. <a id="citation-14"></a>[[26](/sealed-or-leaky/references#bib-Rosenfeld17)], and $2.0747\pm0.0033$ in Storz et al. <a id="citation-15"></a>[[27](/sealed-or-leaky/references#bib-Storz23)]. The corresponding reported trial counts and local-realist significance bounds are $245$, $P\le0.039$; $10^4$ in the cited run, $P<2.57\times10^{-9}$; and more than $10^6$, $P<10^{-108}$, respectively. These significance bounds test the authors' stated nulls; they are not source-entropy estimates.

 <a id="source-tabular-1"></a>

| Experiment | Central $S$ | ${f_{\mathrm{NS}}}(S)$ | ${f_{\mathrm{Q}}}(S)$ | $g_{\rm NS}(S)$ |
| --- | --- | --- | --- | --- |
| Hensen et al. | 2.42 | 0.1600 | 0.2075 | 0.2100 |
| Rosenfeld et al. | 2.221 | 0.0820 | 0.0926 | 0.1105 |
| Storz et al. | 2.0747 | 0.0272 | 0.0283 | 0.03735 |

 

Table 1. Evaluations of ideal-box bounds, in bits per round, not finite-sample certifications. ${f_{\mathrm{NS}}}$ and ${f_{\mathrm{Q}}}$ bound the appropriate conditional min-entropy and also Shannon entropy; $g_{\rm NS}$ is the sharper no-signalling Shannon bound.

<a id="exp:table"></a>  The ${f_{\mathrm{NS}}}$ evaluations at one reported error bar below and above the central values are, respectively, $[0.0816,0.2430]$, $[0.0695,0.0946]$, and $[0.0260,0.0284]$; for ${f_{\mathrm{Q}}}$ they are $[0.0921,0.3838]$, $[0.0769,0.1091]$, and $[0.0270,0.0296]$. These transformed error bars are not confidence-certified entropy intervals. An ideal identical-round interpretation is needed to read the central entries as constant per-round rates.



*Status: Not established from the supplied summaries.*

 No finite-sample source-entropy number for these three data sets is certified here. Applying Proposition [3.2](/sealed-or-leaky/experimental-anchoring#exp:finite) needs the exact score or equivalent sufficient statistics, the actual setting law, applicable sequential assumptions and a specified confidence rule; a central estimate and its standard error do not supply those items. Trial lists have not been reconstructed. The photonic analyses in <a id="citation-16"></a>[[24](/sealed-or-leaky/references#bib-Giustina15), [25](/sealed-or-leaky/references#bib-Shalm15)] use different Bell statistics; the CHSH expressions are not substituted for those statistics.



<a id="section-3-3"></a>

### 3.3 Bierhorst-admissible information and the actual protocol word

 <a id="source-definition-1"></a>

**Definition 3.3 (Bierhorst-admissible Tier-1 information).**

<a id="exp:admissible"></a> 

*Status: Imported model class; notation translated from [[28](/sealed-or-leaky/references#bib-Bierhorst18), Eqs. (2)–(3)].*

 A classical random variable $T$, fixed before the protocol, with no access to data produced during it, is *B-admissible* when, for each trial and almost every supported history and $t$, <a id="exp:Bsettings"></a>
<a id="exp:BNSa"></a>
<a id="exp:BNSb"></a>


$$
\begin{aligned}{\mathbb P}(X_i=x,Y_i=y\mid T=t,\mathcal H_i)&=\tfrac14,\\
 {\mathbb P}(A_i=a\mid X_iY_i,T=t,\mathcal H_i)
 &={\mathbb P}(A_i=a\mid X_i,T=t,\mathcal H_i),\\
 {\mathbb P}(B_i=b\mid X_iY_i,T=t,\mathcal H_i)
 &={\mathbb P}(B_i=b\mid Y_i,T=t,\mathcal H_i).
\end{aligned}
$$

Equation (8, 9, 10).

 Here $\mathcal H_i$ includes the settings and outcomes of earlier trials. All public training choices and the fixed Bell function are part of the conditioning context. This is a classical pre-existing isolated-adversary condition; it is not a theorem for quantum side information, later-acquired protocol data, or the internal state of a predictable settings generator. The published bounded-bias variants require their own revised parameters and are not silently invoked in the numerical application below. 



<a id="source-lemma-5"></a>

**Lemma 3.4 (Finite-seed obstruction to exact sequential setting independence).**

<a id="exp:seednecessity"></a> 

*Status: Proved.*

 Suppose the full setting word $W$ is a deterministic function of a finite-valued generator resource $G_{\rm set}$, including any genuinely fresh randomness used during the protocol. The exact setting condition [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings) implies 

$$

 H(W\mid T)=2n\le H(G_{\rm set}\mid T)\le\log_2|\mathcal G_{\rm set}|.

$$

 In particular, a generator resource with less than $2n$ conditional entropy cannot satisfy that condition, even when $T$ does not reveal the generator state. 

 <a id="source-proof-10"></a>

**Proof.**

Average [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings) over the earlier outcomes, keeping $T$ and earlier settings fixed. Each next setting pair is still conditionally uniform. The entropy chain rule gives $H(W\mid T)=\sum_i H(W_i\mid T,W_{<i})=2n$. Deterministic data processing through $G_{\rm set}$ gives the remaining inequalities. 

□





*Status: Scope.*

 The preceding obstruction concerns the stronger sequential condition [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings), not the original one-round (MI). Correlation between settings at different times need not itself imply correlation between a setting and the measured source.



<a id="paragraph-5"></a>

#### Alphabet and symbol translation.

 

*Status: Definitions.*

 Bierhorst et al. label detection by $+$ and nondetection by $0$. The bijection $+\mapsto+1$, $0\mapsto-1$ puts both into this article's alphabet; it changes no probability or entropy and discards no nondetections. Their Bell function is denoted here by $\mathcal B$, not $T$; their extractor seed by $R$, not CHSH $S$; and their extracted string by $K$. Write $W=X^nY^n$, let $C$ be the protocol's processed outcome word, and let $J$ be its pass indicator.



<a id="paragraph-6"></a>

#### Causal padding is part of the record map.

 

*Status: Imported implementation detail; not reconstructed data.*

 For Data Set 5, SI S.6 of <a id="citation-17"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)] reports first crossing the fixed threshold at trial $41{,}243{,}976$, followed by relabelling every later outcome to nondetection. Thus $C$ is the raw word through that crossing, followed by deterministic $(-1,-1)$ pairs. Its remaining Bell factors equal one. This history-dependent change is covered by the paper's adaptive theorem: it is selected from the completed past, not from a current distant outcome. The reported raw final product $2.018\times10^{41}$ is *not* the product of this padded word. We use the reported threshold crossing, not that raw product as a replacement threshold or as a recomputation of $C$.



<a id="paragraph-7"></a>

#### Source and numerical quantities.

 

*Status: Imported published quantities.*

 Data Set 5 of <a id="citation-18"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)] ([arXiv:1803.06219v1](https://arxiv.org/abs/1803.06219v1) and SI) uses $n=55{,}110{,}210$ trials after $5\times10^6$ training trials; the reported Bell-function parameter is $m=0.0100425$. The fixed threshold, errors, seed length and output length are <a id="exp:parameters"></a>


$$

 \begin{gathered}
 v=1.5\times10^{32},\quad p=9.025\times10^{-25},\quad
 \kappa=9.5\times10^{-13},\quad p=\kappa^2,\\
 \epsilon_{\rm ext}=5\times10^{-14},\quad
 d=315{,}844,\quad \ell=1024,\quad \epsilon=10^{-12}.
 \end{gathered}

$$

Equation (11).

 The probability $\pi={\mathbb P}(J=1)$ is a property of the repeated-protocol law, not of the particular observed word. The hypothesis $\pi\ge\kappa$ remains explicit; observing $J=1$ does not prove it. The training-based i.i.d. success estimate in the paper is not substituted for an adversarial lower bound on $\pi$.

<a id="source-lemma-6"></a>

**Lemma 3.5 (Rounding-controlled entropy-production parameter).**

<a id="exp:rounding"></a> 

*Status: Proved from the printed Bell table and its stated downward-rounding rule in [[28](/sealed-or-leaky/references#bib-Bierhorst18)].*

 The printed coefficients $b_{xy}^{ab}$, in the original $\{+,0\}$ column order, are 

$$

\begin{array}{c|rrrr}
 xy & ++ & +0 & 0+ & 00\\\hline
00&1.0243556353&0.9704647804&0.9735507658&1\\
01&1.0256127409&0.9491951243&0.9960775334&1\\
10&1.0227274988&0.9962782754&0.9461091383&1\\
11&0.9273040563&1.0037217225&1.0039224645&1
\end{array}

$$

 Under uniform settings, their maximum local expectation is $1$ and maximum no-signalling expectation is $1.01004250775$. If the original coefficients are rounded down at the tenth decimal place, their actual no-signalling excess $m_{\rm act}$ satisfies <a id="exp:mupper"></a>


$$

 0.01004250775\le m_{\rm act}\le m_+:=0.01004250785.

$$

Equation (12).

 Put <a id="exp:deltaplus"></a>


$$

 \delta_+=\left[1-\frac{\exp(\ln(pv)/n)-1}{2m_+}\right]^n,
 \qquad b_+=-\log_2\delta_+.

$$

Equation (13).

 For the parameters [(11)](/sealed-or-leaky/experimental-anchoring#exp:parameters), <a id="exp:numericalintervals"></a>


$$

 1344.91401726<b_+<1344.91401728,
 \qquad
 b_++\log_2\kappa+5\log_2\epsilon_{\rm ext}-11>1073.05>1064.

$$

Equation (14).

 Consequently $\delta_+$ is a conservative entropy-production threshold, and the extraction constraint for $\ell=1024$ remains satisfied. These checks do not reconstruct the experimental product from the rounded table. 

 <a id="source-proof-11"></a>

**Proof.**

Enumerate the sixteen local assignments $(a_0,a_1,b_0,b_1)\in\{0,1\}^4$ and their means $\frac14\sum_{xy}b_{xy}^{a_xb_y}$. The maximum is one, attained by all nondetections. The other eight vertices of the binary no-signalling polytope are the PR boxes <a id="citation-19"></a>[[22](/sealed-or-leaky/references#bib-Pironio10), App. A.3]; their means are 

$$

 \frac18\sum_{x,y,a\in\{0,1\}}
 b_{xy}^{a,\ a\oplus xy\oplus rx\oplus sy\oplus t},
 \qquad (r,s,t)\in\{0,1\}^3.

$$

 Their maximum occurs at $(r,s,t)=(0,0,0)$ and equals $4040170031/4000000000$; each of the other seven means is below one. These finite sums can be checked directly with the displayed decimal rationals. Increasing every coefficient by less than $10^{-10}$ changes the expectation under any normalized distribution by less than $10^{-10}$. Monotonicity of the maximum then proves [(12)](/sealed-or-leaky/experimental-anchoring#exp:mupper). The largest printed local mean other than the all-nondetection strategy is $1-5.25\times10^{-10}$. Raising every uncertain coefficient by $10^{-10}$ still leaves each such mean below one. The all-nondetection coefficients are fixed to exactly one by the published training constraint. Thus the local bound for the original function also follows from this rounding envelope; no unchecked numerical optimization tolerance is needed.

For $pv>1$, the entropy-production expression for $\delta$ is increasing in $m$ wherever its bracket is positive. The actual theorem therefore also holds with the larger $\delta_+$. Its admissible range $pv\le(1+3m_{\rm act}/2)^n$ holds already with the lower endpoint in [(12)](/sealed-or-leaky/experimental-anchoring#exp:mupper). Numerically stable evaluation is 

$$

 b_+=-\frac{n}{\ln2}\ln\!\left(1-
 \frac{\exp(\ln(pv)/n)-1}{2m_+}\right).

$$

 The intervals in [(14)](/sealed-or-leaky/experimental-anchoring#exp:numericalintervals) follow by bounding logarithms with $\ln x=2\sum_{j\ge0}((x-1)/(x+1))^{2j+1}/(2j+1)$ after binary range reduction, and bounding the positive exponential and $-\ln(1-u)$ series by their geometric tail bounds. Twenty terms in the range-reduced logarithms and four terms in each of the latter small-argument series suffice for the displayed intervals. Finally $\ell+4\log_2\ell=1064$. The conservative value agrees with the fragment's rounded $1344.9$, but the rounded printed $m$ is not treated as an exact extremal value. 

□





<a id="paragraph-8"></a>

#### The exact imports used.

 

*Status: Imported conditional theorems from [[28](/sealed-or-leaky/references#bib-Bierhorst18), Eq. (4), Eqs. (5)–(6), SI S.2 and S.5].*

 With $T$ B-admissible, the entropy-production theorem gives, almost everywhere in $t$, <a id="exp:EPT"></a>


$$

 {\mathbb P}_t\{P_t(C\mid W)>\delta_+,\ J=1\}\le p.

$$

Equation (15).

 Here $P_t(C\mid W)$ is the probability assigned to the *realized* word and settings, not a maximum taken after observing the data. For the soundness theorem, additionally take $R$ uniform on $\{0,1\}^d$ and independent of $(C,W,T,J)$, use the specified extractor $K=\mathrm{Ext}(C,R)$, and suppose $\pi\ge\kappa$. Then <a id="exp:soundness"></a>


$$

 {\mathrm{TV}}\!\left(P_{KWRT\mid J=1},\,
 U_\ell\otimes P_{WRT\mid J=1}\right)
 \le p/\pi+\epsilon_{\rm ext}\le10^{-12}.

$$

Equation (16).

 Here $U_\ell$ and $U_d$ are uniform laws and $P_{WRT\mid J=1}$ is the product of $P_{WT\mid J=1}$ and $U_d$, with coordinates put in the displayed order. The independence of $R$ makes the real and ideal $(W,R,T)$ marginals identical after passing. Equations [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT)–[(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) are not assumed for a larger class of side information than Definition [3.3](/sealed-or-leaky/experimental-anchoring#exp:admissible).



<a id="section-3-4"></a>

### 3.4 Extracted randomness translated into source-response entropy

 <a id="source-lemma-7"></a>

**Lemma 3.6 (Uniformity-to-entropy continuity with the correct dimension).**

<a id="exp:Audenaert"></a> 

*Status: Proved; imports the entropy-continuity inequality of [[29](/sealed-or-leaky/references#bib-Audenaert07)].*

 Let $K$ take $M=2^\ell$ values and let $E$ be classical. If ${\mathrm{TV}}(P_{KE},U_\ell\otimes P_E)\le\epsilon\le1-1/M$, then <a id="exp:continuity"></a>


$$

 H(K\mid E)\ge\ell-h_2(\epsilon)-\epsilon\log_2(M-1)
 \ge\ell(1-\epsilon)-h_2(\epsilon),
 \quad
 p_{\rm guess}(K\mid E)\le M^{-1}+\epsilon.

$$

Equation (17).

 

 <a id="source-proof-12"></a>

**Proof.**

Write $\delta_e={\mathrm{TV}}(P_{K\mid e},U_\ell)$. Equality of the $E$ marginals gives ${\mathbb E}\delta_e\le\epsilon$. Always $0\le\delta_e\le1-1/M$, since a point mass is farthest from the uniform law on $M$ points. Apply Audenaert's bound to the diagonal $M$-dimensional density matrices: 

$$

 H(K\mid E=e)\ge\log_2M-h_2(\delta_e)-\delta_e\log_2(M-1).

$$

 The loss function is concave and nondecreasing on $[0,1-1/M]$, since its derivative is $\log_2((M-1)(1-u)/u)\ge0$ there. Jensen and monotonicity give the first inequality of [(17)](/sealed-or-leaky/experimental-anchoring#exp:continuity); $\log_2(M-1)\le\ell$ gives the second. No uncontrolled $\delta_e>1/2$ exception or auxiliary majorant is needed. Finally, under the ideal law any guess measurable in $E$ succeeds with probability $1/M$. Total variation changes that success probability by at most $\epsilon$, including for the optimal real-law guess. 

□



<a id="source-lemma-8"></a>

**Lemma 3.7 (Translation of the certified extracted string).**

<a id="exp:translation"></a> 

*Status: Proved conditional on B-admissibility, the published protocol and seed hypotheses, $\pi\ge\kappa$, single outcomes and runwise outcome determinism.*

 Suppose the processed word is a deterministic function $C=F(\lambda,W)$ of an initial source state and the full setting word; let $T=\tau(\lambda)$ be B-admissible. Let $Z_{\rm run}=F(\lambda,\cdot)$ be the finite response function on the finite set of setting words. With the extraction hypotheses of [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness), <a id="exp:extractedShannon"></a>
<a id="exp:extractedguess"></a>


$$
\begin{aligned}H(Z_{\rm run}\mid T,J=1)
 &\ge H(Z_{\rm run}\mid T,W,R,J=1)\\
 &\ge H(K\mid T,W,R,J=1)\\
 &\ge1024(1-10^{-12})-h_2(10^{-12})
 >1024-1.1\times10^{-9},\\
 p_{\rm guess}(Z_{\rm run}\mid T,W,R,J=1)
 &\le2^{-1024}+10^{-12}.
\end{aligned}
$$

Equation (18, 19).

 Thus the unsmoothed conditional min-entropy is at least $-\log_2(2^{-1024}+10^{-12})>39.86$ bits, also after dropping $W,R$ from the conditioning. No independence of $\lambda$ from $W$ is needed beyond the stated B-admissibility of $T$ for these implications. 

 <a id="source-proof-13"></a>

**Proof.**

Apply Lemma [3.6](/sealed-or-leaky/experimental-anchoring#exp:Audenaert) to the law conditioned on $J=1$, with $E=(T,W,R)$. The numerical Shannon loss is less than $1.06531\times10^{-9}$ bits. The output satisfies $K=\mathrm{Ext}(Z_{\rm run}(W),R)$, so conditioning and deterministic data processing give the entropy chain in [(18)](/sealed-or-leaky/experimental-anchoring#exp:extractedShannon). They do *not* require the generally false identity $H(Z_{\rm run}\mid T)=H(Z_{\rm run}\mid T,W,R,J=1)$. Any guess of $Z_{\rm run}$ from $(T,W,R)$ induces a guess of $K$ correct whenever the response guess is correct. Its ideal-law success probability is $2^{-1024}$, so [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) gives [(19)](/sealed-or-leaky/experimental-anchoring#exp:extractedguess). Dropping conditioning cannot improve guessing. All distributions in this argument are conditional passing-ensemble laws, not entropies assigned to one realized string. 

□



<a id="source-corollary-1"></a>

**Corollary 3.8 (The correctly scoped 1024-bit Shannon consequence).**

<a id="exp:bierhorst"></a> 

*Status: Proved conditional on all hypotheses of Lemma [3.7](/sealed-or-leaky/experimental-anchoring#exp:translation).*

 The Data Set 5 soundness certificate implies the lower bound in [(18)](/sealed-or-leaky/experimental-anchoring#exp:extractedShannon) for every separately specified B-admissible classical readout $T$. It is a Shannon bound on the finite response function conditional on passing. The number $1024$ is the extracted output length, not its certified unsmoothed min-entropy and not unsmoothed min-entropy of an unrestricted $\lambda$. 

 <a id="source-proof-14"></a>

**Proof.**

This is Lemma [3.7](/sealed-or-leaky/experimental-anchoring#exp:translation) with the published parameters. Keeping its probability space, conditioning and side-information class is essential to the statement. 

□





<a id="section-3-5"></a>

### 3.5 A stronger finite-sample consequence without an extractor or source–setting independence

 <a id="source-lemma-9"></a>

**Lemma 3.9 (Atom-tail transfer through determinism and postselection).**

<a id="exp:tailtransfer"></a> 

*Status: Proved.*

 Let $Z,C$ be finite, $E$ classical standard Borel, $C=f(Z,E)$, and $J$ a pass event of probability $\pi>0$. Suppose $0<p<\pi$, $0<\delta<1$ and <a id="exp:abstracttail"></a>


$$

 {\mathbb P}\{J=1,\ P(C\mid E)>\delta\}\le p.

$$

Equation (20).

 Then <a id="exp:rawguess"></a>
<a id="exp:rawShannon"></a>


$$
\begin{aligned}p_{\rm guess}(Z\mid E,J=1)&\le\min\{1,(\delta+p)/\pi\},\\
 H(Z\mid E,J=1)&\ge
 (1-p/\pi)\left[\log_2\frac{\pi-p}{\delta}\right]_+.
 
\end{aligned}
$$

Equation (21, 22).

 For clarity, define *deletion-smoothed conditional min-entropy* of a normalized law $P$ by optimizing over subprobability measures $Q\le P$ of mass at least $1-\eta$: 

$$

 H_{\min}^{\mathrm{del},\eta}(Z\mid E)_P
 =\sup_{\substack{0\le Q\le P\\Q(\mathrm{all})\ge1-\eta}}
 \left[-\log_2\int\max_z\frac{dQ(z,\cdot)}{d\mu}(e)\,d\mu(e)\right],

$$

 where $\mu$ dominates the $E$ measures. The value is independent of that dominating choice. For the conditional passing law, <a id="exp:smoothraw"></a>


$$

 H_{\min}^{\mathrm{del},p/\pi}(Z\mid E,J=1)
 \ge-\log_2\delta+\log_2\pi.

$$

Equation (23).

 The smoothing parameter is discarded probability mass; no claim that it equals a purified-distance or normalized-TV smoothing convention is made. 

 <a id="source-proof-15"></a>

**Proof.**

Let $B$ indicate the good event $P(C\mid E)\le\delta$, and restrict the conditional passing law to $B=1$: 

$$

 Q(z,de)={\mathbb P}(Z=z,E\in de,B=1\mid J=1).

$$

 This deletes mass at most $p/\pi$. For every $(z,e)$ that survives, determinism and the good-event definition give $P(Z=z\mid E=e)\le P(C=f(z,e)\mid E=e)\le\delta$. Taking $\mu=P_E$ therefore gives 

$$

 \frac{dQ(z,\cdot)}{dP_E}(e)\le\frac{\delta}{\pi},\qquad
 p_{\rm guess}(Q;Z\mid E)\le\frac{\delta}{\pi}.

$$

 This proves [(23)](/sealed-or-leaky/experimental-anchoring#exp:smoothraw). The deleted submeasure has guessing probability at most its mass, proving [(21)](/sealed-or-leaky/experimental-anchoring#exp:rawguess).

Let $g={\mathbb P}(B=1\mid J=1)\ge1-p/\pi$. The normalized good law has guessing probability at most $\delta/(\pi g)$ and hence Shannon entropy at least $[\log_2(\pi g/\delta)]_+$. Conditioning on $B$ can only reduce average Shannon entropy, and the bad-law entropy is nonnegative. Therefore 

$$

 H(Z\mid E,J=1)\ge g[\log_2(\pi g/\delta)]_+.

$$

 The right side is nondecreasing in $g\ge0$, giving [(22)](/sealed-or-leaky/experimental-anchoring#exp:rawShannon). No independence between $Z$ and $E$ was used. In particular the lemma is stronger, for postselected posterior-response entropy, than a transfer argument requiring an independent prior response law. 

□



<a id="source-corollary-2"></a>

**Corollary 3.10 (Published-parameter finite-sample source-response certificate).**

<a id="exp:rawcor"></a> 

*Status: Proved conditional on B-admissibility, the published entropy-production certificate, single outcomes, runwise outcome determinism and $\pi\ge\kappa$.*

 For Data Set 5, take $E=(T,W)$, $Z=Z_{\rm run}$ and $\delta=\delta_+$ of [(13)](/sealed-or-leaky/experimental-anchoring#exp:deltaplus). Without using the extractor or assuming source–setting independence, the published quantities imply <a id="exp:1304H"></a>
<a id="exp:1304smooth"></a>
<a id="exp:39raw"></a>


$$
\begin{aligned}H(Z_{\rm run}\mid T,W,J=1)&>1304.97\ \text{bits},\\
 H_{\min}^{\mathrm{del},\,9.5\times10^{-13}}
 (Z_{\rm run}\mid T,W,J=1)&>1304.97\ \text{bits},\\
 H_{\min}(Z_{\rm run}\mid T,W,J=1)&>39.93\ \text{bits}.
 
\end{aligned}
$$

Equation (24, 25, 26).

 The Shannon and ordinary guessing conclusions remain true when $W$ is dropped from the conditioning. These are not obtained by substituting a central CHSH value into ${f_{\mathrm{NS}}}$. 

 <a id="source-proof-16"></a>

**Proof.**

Average [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT) over $t$ and apply Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer) to $C=Z_{\rm run}(W)$. Since $\pi\ge\kappa$, deletion mass is at most $p/\kappa=\kappa$, and the smooth bound is at least $b_++\log_2\kappa$. The Shannon bound is at least 

$$

 (1-p/\kappa)[b_++\log_2(\kappa-p)]
 >1304.9768>1304.97.

$$

 Here monotonicity in $\pi$ follows directly because both nonnegative factors in [(22)](/sealed-or-leaky/experimental-anchoring#exp:rawShannon) increase with $\pi$. The unsmoothed bound is 

$$

 -\log_2\bigl((\delta_++p)/\kappa\bigr)>39.93.

$$

 Numerically $b_++\log_2\kappa$ lies between $1304.97687$ and $1304.97689$; the Shannon correction to it is less than $1.3\times10^{-9}$. These conservative intervals follow from Lemma [3.5](/sealed-or-leaky/experimental-anchoring#exp:rounding); they do not identify $1344.9$ with an unconditional or unsmoothed entropy. Dropping public settings can only reduce guessing and increase Shannon entropy. 

□



<a id="source-lemma-10"></a>

**Lemma 3.11 (The fragment's prior-response tail and its additional premise).**

<a id="exp:prioratom"></a> 

*Status: Proved conditional on B-admissibility, the entropy-production certificate, runwise outcome determinism and $Z_{\rm run}\perp W\mid T$.*

 With the additional conditional independence just stated, for almost every $t$, <a id="exp:prioratomtail"></a>


$$

 {\mathbb P}_t\{P_t(Z_{\rm run}=z_{\rm obs})>\delta_+,\ J=1\}\le p,

$$

Equation (27).

 where $z_{\rm obs}$ is the realized response function. Independence of the full $\lambda$ and $W$ conditional on $T$ is sufficient but not necessary: response-level conditional independence suffices. In particular, runwise (MI) and $T=\tau(\lambda)$ imply that sufficient condition. This does not redefine the (MI) premise of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting). 

 <a id="source-proof-17"></a>

**Proof.**

At the realized setting word $w$, 

$$

 P_t(C=z_{\rm obs}(w)\mid W=w)
 \ge P_t(Z_{\rm run}=z_{\rm obs}\mid W=w)
 =P_t(Z_{\rm run}=z_{\rm obs}).

$$

 The event in [(27)](/sealed-or-leaky/experimental-anchoring#exp:prioratomtail) is therefore contained in that of [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT). This is an exceptional-event bound on a *prior* atom, not itself a conditional entropy after passing. Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) instead proves a posterior entropy statement without this independence premise. 

□



<a id="source-lemma-11"></a>

**Lemma 3.12 (Threshold test of a complete deterministic admissible readout).**

<a id="exp:thresholdtest"></a> 

*Status: Proved conditional on B-admissibility and the published entropy-production theorem; reported threshold crossing imported.*

 For a predetermined threshold $v>1$ and the same Bell-function protocol, any source-complete model with single outcomes and $C=F(\lambda,W)$ satisfies 

$$

 {\mathbb P}(J=1)\le v^{-1}.

$$

 At the published $v=1.5\times10^{32}$ this is $2/(3\times10^{32})$. Unlike Corollaries [3.8](/sealed-or-leaky/experimental-anchoring#exp:bierhorst) and [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor), this test bound does not require $\pi\ge\kappa$. Its rejection event is the reported crossing of the fixed threshold, not a threshold fitted to the final raw product. 

 <a id="source-proof-18"></a>

**Proof.**

Source completeness makes $C$ a function of $(T,W)$, so the realized conditional likelihood $P_t(C\mid W)$ equals one almost surely. In the entropy-production theorem choose an error parameter $p'>v^{-1}$ arbitrarily close to $v^{-1}$. Then $p'v>1$, the corresponding $\delta(p')$ is less than one, and the admissible-range condition holds for all sufficiently close choices. Its event inequality consequently bounds the probability of passing by $p'$, for almost every $t$ and hence unconditionally. Let $p'\downarrow v^{-1}$. This is a frequentist bound under the joint model hypotheses, not a posterior probability that a source ontology is false. The physical applicability of B-admissibility is not proved by the test. 

□





<a id="section-3-6"></a>

### 3.6 Who certifies what, and what remains a gap

<a id="exp:whocertifies"></a> <a id="source-remark-3"></a>

**Remark 3.13 (Certification and source interpretation).**

 

*Status: Scope; imported certificate and proved translation distinguished.*

 **Published certificate.** Bierhorst et al.'s theorem concerns pre-existing classical information isolated from the protocol. Their passing-ensemble soundness inequality, seed requirement and statistical assumptions are [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) and Definition [3.3](/sealed-or-leaky/experimental-anchoring#exp:admissible), not security against every physically imaginable no-signalling observer. The Methods section reports pseudorandom settings generated by the Mersenne Twister and explains the additional device-trust basis for effective independence <a id="citation-20"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]. Possession of its predictive internal state is outside the present admissible class. Neither the article nor this translation certifies independence from such a state. Merely hiding that state is also insufficient to prove the exact sequential law: Lemma [3.4](/sealed-or-leaky/experimental-anchoring#exp:seednecessity) requires $2n=110{,}220{,}420$ bits of conditional settings-resource entropy. Counting this many pseudorandom output bits does not certify that entropy. The source does not supply an independent verification of this exact generator-entropy condition, and no quantified replacement error for it is imported here. Thus the numerical implications remain conditional model statements, not unconditional information-theoretic certification of the pseudorandom implementation.

**Proved here under determinism.** Determinism turns recorded-word unpredictability into lower bounds on an initial finite response function, which is a function of $\lambda$. The extracted-string route gives nearly $1024$ conditional Shannon bits but only $39.86$ guaranteed unsmoothed min-entropy bits. The entropy-production route gives over $1304.97$ Shannon and deletion-smoothed min-entropy bits and over $39.93$ unsmoothed bits. The smooth and unsmoothed quantities are not interchangeable. No cardinality, differential entropy, or universal observer-access assertion about an arbitrary $\lambda$ is inferred merely from the output length. Without deterministic source responses, the same statistics can instead represent fresh chance.

**Passing matters.** All near-$1024$ and $1304.97$ entropy bounds refer to the passing-ensemble law and require the displayed lower bound on its pass probability. Conditioning on passing need not preserve no-signalling; none of the proofs assumes it does. One observed pass is not a measurement of $\pi$, and an ensemble conditional entropy is not a property of one known output string. If $L$ denotes the conditional Shannon lower bound, the unconditioned conclusion is only $H(Z_{\rm run}\mid T)\ge\pi L\ge\kappa L$, by conditioning additionally on $J$ and nonnegativity. A large unconditional entropy would need an independently justified much larger lower bound on $\pi$. 





<a id="paragraph-9"></a>

#### Explicit unresolved empirical scope.

 

*Status: Not established.*

 The supplied summaries do not establish the actual pass probability, exact sequential setting independence for the pseudorandom implementation, independence from every proposed additional variable, security with quantum side information, or an unconditional high-entropy bound for $\lambda$. Nor do they provide the exact scores and setting analyses needed to certify the three central-value CHSH examples. Those gaps are not filled by inventing trial lists. For the Data Set 5 theorem-level translation, the reported threshold crossing and published aggregate parameters do suffice under the stated hypotheses; independent reproduction of the experiment or extractor execution is not claimed. A claim about another error level, a different data set, or biased settings requires its own published or recomputed parameters.
