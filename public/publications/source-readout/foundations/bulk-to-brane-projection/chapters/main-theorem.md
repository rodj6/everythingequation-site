# Main theorem

<div id="sec:main">

</div>

<div class="theorem">

**Theorem 12.1** (RS2 source projection and its exact discrimination boundary).

<div id="thm:main">

</div>

*Consider the two-sided, $Z_2$-symmetric, positive-tension RS2 model defined by [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action), with pure five-dimensional Einstein gravity and a negative cosmological constant in the bulk. Tune $\Lambda_5=-6/\ell^2$ and $\lambda=6/(\kappa_5^2\ell)$, so that $\Lambda_4=0$, and let the instantaneous readout be Definition [2.3](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#def:readout). Assume the full source domain contains smooth finite-energy TT bulk initial data. For the stationary weak-field coefficients, impose the regular retarded/no-incoming bulk condition. Then:*

1.  *the readout has physically distinct fibers on which future induced brane observables differ, so no deterministic evolution on that instantaneous readout is valid for all admissible bulk initial data;*

2.  *the exact projected tensor equation contains the model-specific correction $\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}$ with $\Pi_{\mu\nu}$ as in [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi), and predictive closure requires either bulk response data or an equivalent causal, generally nonlocal brane history law;*

3.  *in the homogeneous and long-distance weak-field regimes the observable coefficients obey $A_\Psi=\tfrac12A_\Phi$ and $B=\tfrac{\kappa_4^4}{24}A_\Phi$;*

4.  *these statements distinguish minimal RS2 from any independently specified Tier-1 model class that cannot realize the correlated quadratic term, slip ratio, and continuum response ,  but no experiment restricted to brane observables distinguishes the five-dimensional source model from its *unrestricted* exact four-dimensional pushforward theory.*

</div>

<div class="proof">

*Proof.* **Part 1.** Take zero bulk perturbation and a nonzero, normalizable TT wave packet initially supported away from the brane, with the perturbation and its first time derivative vanishing in a brane neighborhood. The two induced Cauchy data sets coincide (Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness)). Their five-dimensional Weyl curvatures do not, so they are not related by a diffeomorphism. Hyperbolic finite propagation permits the packet to reach the brane and change the induced perturbation. Hence one readout fiber is not preserved by source evolution, contradicting the defining condition for a deterministic quotient flow (Corollary [3.2](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#cor:nonproj)).

**Part 2.** The Israel equation [(23)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:israel) with $Z_2$ symmetry gives [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed). The contracted Gauss identity separates the bulk Riemann tensor into its Ricci part, fixed by $\Lambda_5$ via [(5)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:bulkEE), and its Weyl part $E_{\mu\nu}$. The terms quadratic in $K_{\mu\nu}$ expand into a constant, a term linear in $T_{\mu\nu}$, and $\kappa_5^4\Pi_{\mu\nu}$, as computed line by line in [(34)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qexpanded)–[(36)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsorted) with $\Pi_{\mu\nu}$ given by [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi), giving $$G_{\mu\nu}
=-\tfrac12\Bigl(\Lambda_5+\tfrac{\kappa_5^4\lambda^2}{6}\Bigr)q_{\mu\nu}
+\frac{\kappa_5^4\lambda}{6}T_{\mu\nu}
+\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu},$$ which proves [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) and [(39)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:constants). The Bianchi identity fixes only $\nabla^\mu E_{\mu\nu}$, [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE). Part 1 supplies two solutions with the same instantaneous brane data and different later $E_{\mu\nu}$; the remaining information must therefore be supplied as bulk initial/boundary response data or, after exact elimination, as a causal functional of the brane history and the chosen bulk state (Section [8](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#sec:completion)).

**Part 3.** Perfect-fluid substitution gives $\Pi_{00}=\rho^2/12$ (Lemma [5.1](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#lem:PiFRW)), while FRW symmetry gives $-E_{00}=3\mu/a^4$ [(46)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:EFRW). The $00$ equation therefore gives $B=\kappa_5^4/36$. RS tuning with $\kappa_4^2=\kappa_5^2/\ell$ gives $B=\kappa_4^4\ell^2/36$. Independently, the regular brane-to-brane propagator gives $A_\Phi=2\ell^2/3$ and $A_\Psi=\ell^2/3$ at $r\gg\ell$ [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials). Eliminating $\ell^2$ proves $A_\Psi=A_\Phi/2$ and $B=\kappa_4^4A_\Phi/24$ (Theorem [7.2](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#thm:crossregime)).

**Part 4.** A restricted theory that cannot realize one of these fixed relations is falsified when all assumptions and coefficients are fixed before observing the test data. Conversely, for every brane protocol, push the RS2 source-history measure forward through the complete brane readout. Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward) shows the resulting four-dimensional history theory has exactly the same record distribution for that protocol, including adaptive interventions; their total-variation distance vanishes for every brane experiment. This proves both the positive antecedent and the negative ontological-discrimination statement. ◻

</div>

Theorem [12.1](/source-readout/bulk-to-brane-projection/main-theorem#thm:main) establishes a concrete, quantitative source-projection realization together with its exact discrimination boundary. A stronger conclusion requires an independently justified restriction on admissible Tier-1 dynamics ,  fixed finite-pole local quadratic dynamics, prescribed finite perturbative content, or finite memory.
