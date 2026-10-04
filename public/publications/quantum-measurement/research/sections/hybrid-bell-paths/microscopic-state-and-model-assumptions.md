# Section 2: Microscopic state and model assumptions

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

<a id="section-2"></a>

## 2 Microscopic state and model assumptions

<a id="sec:model"></a> 

<a id="section-2-1"></a>

### 2.1 Complete state and interaction catalogue

 Let $V$ be the finite configuration set of *all ordinary material systems in the experiment*. A configuration specifies source, actuator, excitation, fuel, loss remnants, working display, archive, every reset receiver, control clock and any finite inaccessible reference. A reference with an actual basis coordinate is included in $V$; already-isolated reference experiments use blocks $H_{\rm local}\otimes I_R$. The explicit preparation variant below first entangles the reference, then proves its isolation beyond a one-way clock boundary. An internal reference fibre is an alternative declared sector convention, not an unnoticed coarse graining of a finer Bell process.

Fix an orientation $e=(r,q)$ for each off-diagonal bond in the union of the programme's nonzero supports and set $b_e=e_q-e_r$, where $(e_r)_{r\in V}$ is the free vertex basis. The incidence matrix $B$ has columns $b_e$. The complete microstate consists of <a id="eq:microstate"></a>


$$
\left(\Psi,(\chi_e,\Pi_e)_e,(u_e,k_e)_e,
       (X_a)_{a=1}^N,\mathcal P,\mathcal F,\mathcal G,\mathcal R\right).
 

$$

Equation (2).

 Here $\mathcal P$ is the finite bank of charged, unused and spent packet slots; $\mathcal F$ contains exporter blank/fuel cells; $\mathcal G$ contains every incoming and outgoing gas coordinate; and $\mathcal R$ contains all contact products and history receivers. One predesignated carrier, say $Q=X_1$, is the actual ordinary configuration. All carrier labels obey identical rules. The remaining carrier positions are pilot degrees of freedom on configuration space, not extra independently prepared copies of the ordinary quantum input.

The following assumptions specify the model. They are hypotheses of the convergence theorem, not conclusions of the continuity equation. 

1. P1. The normalized canonical field and primitive bond connections obey the action in Section [3](/quantum-measurement/research/hybrid-bell-paths/canonical-edge-ownership-and-conservative-export#sec:source). All ordinary forces, including coherent feedback, enter its numerical Hermitian matrix $H$. An ordinary controller is another factor in that same matrix.

2. P2. The pilot medium has the bounded action exporter, packet spectrum and contact reactions specified below. The reaction list is complete. Scalar carrier response and the common action unit are physical assumptions.

3. P3. There is no additional force vertex $f(\Pi,\mathcal P,\mathcal G,\mathcal R,X_2,\ldots)B_{\rm ordinary}$ in the field energy or a direct classical rewrite of an ordinary display. The pilot medium influences ordinary configurations through the specified carrier motion only. All new ordinary apparatus must be represented in $H$ and obey the same rule.

4. P4. Gas flight and collision contact are deterministic. The only randomness is a declared initial ensemble: independent spatial pilot-gas positions and marks, and an initial carrier ensemble. Conditional on the declared initial field, the joint law factors as gas ensemble times carrier ensemble. No future event times or desired Bell transition probabilities are used in preparation.

 P3 is a new interaction law. It is not an instruction to disregard a readable variable after permitting its read coupling. It asserts that such a coupling is absent from the equations. This differentiates the pilot gas from unrestricted ordinary classical matter. Quadratic ordinary energies form a closed algebra, 

$$

 \{\Psi^\dagger A\Psi,\Psi^\dagger D\Psi\}
   =\Psi^\dagger[A,D]\Psi/(i\hbar),

$$

 which motivates using the same coherent constitution for arbitrary composed apparatus. This algebraic observation does not derive P3. The force catalogue, species spectrum and initial ensemble are additional physical postulates. Their empirical adequacy is not established by the mathematical limit.



<a id="section-2-2"></a>

### 2.2 Energy, reversibility and finite resources

 The microscopic theory is a *hybrid* theory: a canonical field, deterministic free flight and explicit deterministic contact/export rules. It is not advertised as a derivation of all these laws from one smooth Hamiltonian. The autonomous ordinary circuit is a single finite Hermitian Hamiltonian. Appendix [B](/quantum-measurement/research/hybrid-bell-paths/appendix-b-a-smooth-autonomous-realization-of-the-finite-contact-module#app:mechanical) separately supplies a smooth positive kinetic Hamiltonian for a finite contact-permutation module; the main theorem uses the exact hybrid contact law.

Every contact map has a reversible finite lift with a blank receiver: pair the input $(s,\mathrm{blank})$ with $(F_c(s),\mathrm{record}(c,s))$ by a transposition, on a disjoint flagged output bank, and fix unused states. Here $s$ is the finite local logical input (packet species, carrier vertex and local flags), not the continuous complete field state. The outgoing receiver retains that local input. This proves finite reversible logic, not by itself smooth mechanical realizability. The incoming ensemble uses blank receivers, so inverse collisions require a different prepared incoming product. There are at most $M_N$ contacts and $\sum_e B_e$ exports on the promised horizon, hence finite preallocated capacity suffices. Spent particles and cells stay in [(2)](/quantum-measurement/research/hybrid-bell-paths/microscopic-state-and-model-assumptions#eq:microstate).

For a total definition outside the promised resource horizon, an attempted export after the last unused slot sets a retained exhaustion flag, disables further exports, and leaves $\Pi$ and the now unbounded residue to their continuous evolution. Existing packets can still react. An exhausted contact-record bank sets its own retained flag and uses a fixed identity contact rule. Every exact tie is processed in a fixed order of channel and export labels. These branches make the finite device total; the stated budgets render them unreachable on the proved physical horizon. The final gas particle simply leaves the plane and remains in the outgoing inventory.

For a minimal energy assignment all pilot register states are degenerate and gas momentum is unchanged at ideal contact. The source action energy is conserved for static $H$. An export changes only the decomposition of a continuous stored action into a packet and a bounded remainder, not $\Psi,\Pi$ or this energy. Finite blank registers are consumed as low-entropy resources; a reset never produces them for free. Nondegenerate ordinary fuel and loss accounting is displayed in the material construction. A stronger universal smooth Hamiltonian or empirical material implementation is outside the constitutive claim.
