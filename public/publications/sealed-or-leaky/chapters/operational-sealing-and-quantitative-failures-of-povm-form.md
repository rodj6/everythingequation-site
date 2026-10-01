# Section 9: Operational sealing and quantitative failures of POVM form

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

<a id="section-9"></a>

## 9 Operational sealing and quantitative failures of POVM form

 <a id="ctx:sealingsection"></a>

A finite proper ensemble $\mathfrak E=((q_a,\psi_a))$ prepares a unit ray $\psi_a$ with probability $q_a$ and discards the classical choice. A fixed experiment with pure-input outcome law $\mu_\psi$ has law $\mu_{\mathfrak E}=\sum_aq_a\mu_{\psi_a}$ and density matrix $\rho_{\mathfrak E}=\sum_aq_a|\psi_a\rangle\langle\psi_a|$. All randomization and any common apparatus preparation are included in this specification. The experiment is *sealed relative to the density matrix* when equal density matrices give equal complete record laws.

<a id="source-theorem-9"></a>

**Theorem 9.1 (Exact sealing and POVM form).**

<a id="ctx:povm"></a> 

*Status: Proved.*

 In finite dimension $d$, suppose the experiment is defined on every pure state and every finite proper ensemble, with the mixture rule just stated. It is sealed relative to the density matrix if and only if a POVM $E$ on its outcome space satisfies 

$$

 \mu_\psi(A)=\langle\psi,E(A)\psi\rangle,
 \qquad \mu_{\mathfrak E}(A)=\operatorname{tr}(E(A)\rho_{\mathfrak E})

$$

 for every measurable record event $A$. 

 <a id="source-proof-27"></a>

**Proof.**

POVM form implies sealing by linearity. Conversely, sealing makes $F_A(\rho)=\mu_{\mathfrak E}(A)$ well defined for any decomposition of $\rho$. Randomized mixtures make $F_A$ affine on the density matrices. An affine function on a finite-dimensional convex set with nonempty relative interior extends uniquely to its affine hull: choose an affine basis forming a simplex around a relative-interior point, match the function at the vertices, and extend the equality from that simplex to any other point along a segment from the interior point. Therefore $F_A(\rho)=\operatorname{tr}(E(A)\rho)$ for a unique Hermitian $E(A)$. Since $F_A$ takes values in $[0,1]$ on every pure state, $0\le E(A)\le I$, and $E(\mathcal D)=I$. Countable additivity of each $\mu_\psi$ makes $E$ weakly countably additive: for disjoint events the positive partial sums are bounded by $I$, and their limiting quadratic forms agree with those of $E$ of the union. This is a POVM. 

□



The quantifiers matter. An experiment on a restricted preparation domain need not have a unique extension to all density matrices. A family of positive event operators is a POVM only after normalization and countable additivity have been checked. Sealing is a statement about the nominated readout and admitted experiment class; it does not imply that its fibers contain physically distinct source states.

<a id="source-theorem-10"></a>

**Theorem 9.2 (Quantitative ensemble witness for a nonquadratic event).**

 <a id="ctx:quantitativepovm"></a> 

*Status: Proved.*

 Let $h(\psi)\in[0,1]$ be the probability of a fixed recorded event on every unit ray in $\mathbb C^d$. Define 

$$
\begin{aligned}\Gamma(h)&:=\sup_{\rho_{\mathfrak E}=\rho_{\mathfrak E'}}
 \left|\sum_aq_ah(\psi_a)-\sum_br_bh(\phi_b)\right|,\\
 d(h)&:=\inf_{H=H^*}\sup_\psi
 |h(\psi)-\langle\psi,H\psi\rangle|,\\
 d_{\mathrm{eff}}(h)&:=\inf_{0\le E\le I}\sup_\psi
 |h(\psi)-\langle\psi,E\psi\rangle|.
\end{aligned}
$$

 The supremum defining $\Gamma$ is over finite proper ensembles. Then <a id="ctx:duality"></a>


$$

 \Gamma(h)=2d(h),\qquad
 \tfrac12\Gamma(h)\le d_{\mathrm{eff}}(h)\le\Gamma(h).

$$

Equation (34).

 For every $c<\Gamma(h)$ with $c\ge0$, there are two equal-density ensembles whose event probabilities differ by more than $c$, using at most $d^2+1$ pure-state occurrences in total. Their complete outcome laws therefore have total-variation distance greater than $c$. 

 <a id="source-proof-28"></a>

**Proof.**

Fix a finite set $F$ of pure projectors $\rho_a$ and values $h_a$. The finite linear program minimizing $t$ subject to $|h_a-\operatorname{tr}(H\rho_a)|\le t$ has dual 

$$

 \max_v\left\{\sum_av_ah_a:
       \sum_av_a\rho_a=0,\ \sum_a|v_a|\le1\right\}.

$$

 Taking traces gives $\sum_av_a=0$, so the positive and negative parts have the same mass, at most $1/2$. Dividing each by that mass gives two equal-density ensembles; conversely half the difference of any two such ensemble weight vectors is dual feasible. Thus finite linear-programming duality gives $\Gamma_F(h)=2d_F(h)$, also when both sides vanish.

Put $D=\sup_Fd_F(h)$. Clearly $D\le d(h)$. Fix a finite tomographically complete pure-state frame $F_0$. For any $\eta>0$, all the constraints on $F_0$ with error at most $D+\eta$ bound the coefficients of $H$; their solution set is compact. The constraint sets obtained by also adding any finite $F$ have the finite-intersection property, since $d_{F\cup F_0}(h)\le D$. Compactness supplies one $H$ satisfying every pure-state constraint with error $D+\eta$. Letting $\eta$ tend to zero gives $d(h)\le D$. Since every pair of finite ensembles is contained in some finite $F$, $\Gamma(h)=\sup_F\Gamma_F(h)=2D=2d(h)$. No continuity of $h$ was needed.

A minimizer for $d(h)$ exists by the same compactness argument. Its spectrum lies in $[-d(h),1+d(h)]$, as follows by evaluating at its eigenvectors. Clipping that spectrum to $[0,1]$ changes $H$ by operator norm at most $d(h)$ and gives an effect with uniform error at most $2d(h)$. This proves the upper effect bound; the lower follows because effects are a subset of Hermitian matrices.

Finally, on any finite $F$ the maximization over pairs of ensemble weights is a linear program with nonnegative variables and constraints $\sum_aq_a=\sum_ar_a=1$ and $\sum_a(q_a-r_a)\rho_a=0$. The rank is at most $d^2+1$, since the trace of the matrix constraint is redundant with the two normalization conditions. A maximizing basic feasible solution uses at most $d^2+1$ nonzero weights in total. Choose $F$ with $\Gamma_F(h)>c$ to obtain the stated witness. The difference of event probabilities lower-bounds total variation. 

□



This result converts a failure of quadratic probability response into a finite preparation witness with an exact variational characterization. It does not establish physical access to a proposed nonquadratic event: that must be supplied by an admissible detector and retained record. The eventwise approximation also does not by itself construct one normalized approximate POVM for all events simultaneously.

<a id="source-proposition-5"></a>

**Proposition 9.3 (Detectable leaks and independent repetition).**

 <a id="ctx:amplification"></a> 

*Status: Proved conditional on independently resettable preparations and an implementable test.*

 Suppose two physically available preparations with the same nominated readout give record laws $P,Q$ with ${\mathrm{TV}}(P,Q)=\delta>0$. If both preparations can be reset and repeated independently with the same fixed laws, then 

$$

 {\mathrm{TV}}(P^{\otimes n},Q^{\otimes n})\ge
 1-(1-\delta^2)^{n/2}\ge1-e^{-n\delta^2/2}.

$$

 The optimal equal-prior discrimination error is at most $\frac12e^{-n\delta^2/2}$, when the requisite measurable decision rule is available. 

 <a id="source-proof-29"></a>

**Proof.**

For a common dominating measure, let $B(P,Q)=\int\sqrt{dP\,dQ}$. Cauchy–Schwarz gives ${\mathrm{TV}}(P,Q)\le\sqrt{1-B(P,Q)^2}$, while ${\mathrm{TV}}(P,Q)\ge1-B(P,Q)$. Affinity multiplies under independent products, so $B(P^{\otimes n},Q^{\otimes n})\le(1-\delta^2)^{n/2}$. The optimal equal-prior error is $(1-{\mathrm{TV}})/2$. 

□



Without independent preparation, reset, and a realizable test, positive separation of abstract laws is not an unconditional experimental amplification theorem. For example, repeated copies of one shared random bit retain the original single-bit discrimination error regardless of the number of displayed copies.
