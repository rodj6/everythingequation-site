# Section 6: Recombination and the removal of surplus

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-6"></a>

## 6 Recombination and the removal of surplus

 For the Poisson contact comparison, every eligible packet–carrier pair has derived rate $\kappa_e\mu_N/N$, and every opposite slot pair has derived rate $a_e$. Let $P_e^\pm$ be species counts, $m_e^{\rm mix}=\min(P_e^+,P_e^-)$, and $A_e,D_e$ the recombination and service counts. Starting from empty packet stock, exactly <a id="eq:stock"></a>


$$
P_e^+(t)+P_e^-(t)+2A_e(t)+D_e(t)=\#\mathrm{births}_e(t)\le B_e.
 

$$

Equation (12).

 The accepted reaction process is nonexplosive. Both service directions are active whenever both species and their origins are populated.



**Theorem 6.1 (Full reaction-state recombination comparison).**

<a id="thm:annihilation"></a> Assume initially empty packet stock and the stated per-edge birth budgets. Let $S^a$ denote the reaction state of the Poisson comparison: field, actions, residues, all packet slots, carriers and reaction-product receivers, including null-contact records. It does not denote the original gas flight coordinates. The two-species reaction process has a lifted comparison process whose aggregate is exactly the instantaneous signed-queue model, with <a id="eq:annerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(S^{a}_{[0,T]}),{\operatorname{Law}}(S^{\rm lift}_{[0,T]})\bigr)
 \le \Delta_{\rm ann}:=\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}.
 

$$

Equation (13).

 Both processes retain slots, products and receivers. In particular this bound holds for their complete aggregate carrier paths and exact event times. It holds for any prescribed signed birth sequence of the stated budgets, including reversals and arbitrarily close births. 

 

**Proof.**

In each state match all minority packets with the same number of majority packets by a fixed ordering of their physical labels. This matching is a proof device. The lifted reference has the same births and all the same recombination channels, but services only the $|Z_e|$ unmatched excess packets. Let $\pi$ retain the field, actions, residues, net queues $Z$, all carrier coordinates and the common edge/carrier/direction service marks. It omits physical recombination times and does not identify their product archive with an instantaneous-cancellation archive. Recombination leaves $Z_e=P_e^+-P_e^-$ invariant; excess service changes it exactly as a signed-queue service. For each carrier at the excess-species origin there are $|Z_e|$ possible packet partners. Consequently the generator on functions of $\pi$ is exactly the signed-queue generator, independent of hidden matching and slot labels. This explicitly proves lumpability for this projection.

Couple all common transitions while full states agree. The physical process additionally services matched packets, with discrepancy hazard 

$$

 h_e=\frac{\kappa_e\mu_N}{N}m_e^{\rm mix}(n_r+n_q)\le\kappa_e\mu_Nm_e^{\rm mix}.

$$

 Continue correct marginals after the first such event. Since $m_e^{\rm mix}\le P_e^+P_e^-$ and the annihilation compensator gives 

$$

 a_e{\mathbb E}\int_0^T P_e^+P_e^-{\,\mathrm d} t={\mathbb E} A_e(T)\le B_e/2,

$$

 the stopping time $\tau$ of the first discrepancy obeys 

$$

 {\mathbb P}(\tau\le T)\le
 {\mathbb E}\int_0^{T\wedge\tau}\sum_e h_e(t){\,\mathrm d} t
 \le\sum_e\kappa_e\mu_N{\mathbb E}\int_0^T P_e^+(t)P_e^-(t){\,\mathrm d} t
 \le\Delta_{\rm ann}.

$$

 The stopped integral is bounded by the complete physical marginal integral. Probability of any discrepancy bounds entire-path total variation. The construction agrees on every retained receiver up to that discrepancy. 

□

 The physical finite-$a$ aggregate is generally not Markov in $Z$ and carriers alone; its rates depend also on the mixed stock. No closure is assumed for that projection. An additional direct consequence is 

$$

 {\mathbb P}(\text{any service while an edge is mixed})\le\Delta_{\rm ann},

$$

 because, on $m_e^{\rm mix}>0$, its total service rate is at most $\kappa_e\mu_N\max(P_e^+,P_e^-)\le\kappa_e\mu_NP_e^+P_e^-$. Minority suppression follows from a competition of physical reaction speeds, not an imposed positive-part gate.
