# Chapter 8: Discrimination, retained information and constitutive scope

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

<a id="p:chapter-discrimination"></a><a id="p:sec-rivals"></a> 

<a id="section-8-1"></a>

## 8.1 A stationary coherent cycle tests individual edge ownership

 Take three vertices with $w_r=1/3$, $\Psi=(1,1,1)^T/\sqrt3$, and 

$$

 H=\frac{3\hbar j}{2}
 \begin{pmatrix}0&-i&i\\i&0&-i\\-i&i&0\end{pmatrix},\qquad j>0.

$$

 Then $H\Psi=0$ but $J_{21}=J_{32}=J_{13}=j$. The canonical exporters therefore produce clockwise packets even though every vertex population is stationary. Theorem [6.3](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:main) gives a clockwise Bell cycle at rate $3j$, with Poisson$(3jT)$ jump count and its full continuous event times. A generator which simply keeps the configuration fixed has the same one-time equilibrium and zero divergence, yet differs in path law by $1-e^{-3jT}$. It is excluded by individual primitive bond ownership, not by the continuity equation alone. 

The nearest Markov surplus rival adds a constant $K>0$ to both directional equilibrium fluxes on each cycle bond. It also preserves $w$. Its clockwise rate is $3(j+K)$ and its counterclockwise rate is $3K$, independently of the occupied vertex. The probability of at least one backward jump is $1-e^{-3KT}$, whereas Bell's probability is zero. Thus full-path distance is at least that number. The microscopic theory suppresses this rival by the proved recombination hierarchy, rather than declaring two-way reactions impossible. 



<a id="section-8-2"></a>

## 8.2 The finite-recombination rival really has dark traffic

 On a two-vertex edge in a zero-current interval, put one packet of each species, no new births, and all $N$ carriers at the two endpoints. Total service rate is $\kappa\mu_N$ and recombination rate is $a$. The probability of at least one actual carrier event before $T$ is exactly <a id="p:eq-darkrival"></a>


$$
\frac{\kappa\mu_N}{a+\kappa\mu_N}
       \left(1-e^{-(a+\kappa\mu_N)T}\right).
 

$$

Equation (8.1).

 The first event is a race of the two derived contact mechanisms. Recombination first removes both packets; service first already makes the path nonconstant. The instantaneous net queue has $Z=0$ and never moves, so [(8.1)](/quantum-measurement/monograph/discrimination-retained-information-and-constitutive-scope#p:eq-darkrival) is its exact carrier-path distance from this finite reaction experiment. A mixed stock can occur after opposite exports before recombination completes. This local test does not replace the empty-queue initialization of Theorem [6.3](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:main). It shows that the new mechanism has finite-speed predictions and is not a renamed Jordan decomposition. If recombination is absent or too slow, surplus survives. 



<a id="section-8-3"></a>

## 8.3 The spatial ensemble selects timing beyond mean flux

 Let $\Delta=1/R$, $M\ge3$, and choose a single uniform $U\in[0,\Delta)$. Put the arrival positions at times $U+k\Delta$, $k=0,\ldots,M-1$, and randomly permute particle labels. Every individual arrival time is uniform on $[0,M/R)$, just as for the independent gas, and mean flux is $R$. Nevertheless on $[0,2/R]$ there are exactly two contacts with separation exactly $1/R$. The Poisson comparison assigns zero probability to that exact spacing. The complete contact-history distance is therefore one. Independence of initial positions, not their one-body density or mean pressure, excludes this rival. P4 makes that additional statistical content explicit. 



<a id="section-8-4"></a>

## 8.4 Recombination does not conceal a readable pilot ledger

 Let $E_\pm$ be signed export counts, $D_\pm$ signed consumption counts and $A$ the recombination count on one bond. For empty initial stock, 

$$

 E_+=P^++D_++A,\qquad E_-=P^-+D_-+A.

$$

 Consequently <a id="p:eq-ledger"></a>


$$
N(\Pi(t)-\Pi(0))=P^+(t)-P^-(t)+D_+(t)-D_-(t)+u(t).
 

$$

Equation (8.2).

 All retained recombination products cancel from the signed identity. Fast recombination removes surplus service but does not erase the source action from a joint ledger. A hypothetical ordinary classical reader of this ledger remains a countermodel to the unrestricted material source; the following physical-access part retains the corresponding explicit constructions. P3 replaces that unrestricted coupling constitution. Gauge invariance and finite work do not imply P3: $\Pi$ is gauge invariant and can be put in an additional invariant mixed energy if that extra force is permitted. 

Within the new theory a reader is an ordinary device in the common $H$. Its probabilities in the Bell limit have the positive-effect form <a id="p:eq-effect"></a>


$$
{\mathbb P}(M=m)=\|P_mU(\psi\otimes\alpha)\|^2
       =\langle\psi,E_m\psi\rangle,\qquad 0\le E_m\le I.
 

$$

Equation (8.3).

 This follows from full-configuration equivariance and the actual joint unitary; it is not a separate measurement postulate. For a fixed compiled clock implementation, Proposition [7.8](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:kinetic-rate) supplies an input-uniform finite-resource error $\Delta_N$. An inaccessible reference remains in $U$ and is acted on by the identity. A direct rewrite of an actual ordinary source bit into a memory while leaving the joint field at $\psi\otimes|0_M\rangle$ would instead give positive actual probability to $M=1$ at zero coherent weight. It is not an allowed material interaction. 



**Proposition 8.1 (A finite native-counter obstruction survives the new theory).**

 For $H=\hbar g\sigma_x$, $\tau=gT\in(0,\pi/4)$, no fixed positive record effect can reproduce the probability of an unchanged native $0\to1$ Bell event for all three inputs $|0\rangle$, $|1\rangle$ and $(|0\rangle-i|1\rangle)/\sqrt2$ with error smaller than <a id="p:eq-nativegap"></a>


$$
\frac{\sin\tau(\cos\tau-\sin\tau)}{3}.
 

$$

Equation (8.4).

 

 

**Proof.**

Direct two-state wave evolution gives event probabilities $\sin^2\tau,0,\sin\tau\cos\tau$. For the first and third preparations the current is forward throughout the interval, so there is at most one forward event and its probability is the loss of origin weight. For the second it is backward. If a positive effect has error at most $\varepsilon$ on all three, its trace is at most $\sin^2\tau+2\varepsilon$, whereas its expectation in the third vector is at least $\sin\tau\cos\tau-\varepsilon$. A positive expectation cannot exceed the trace. Rearrangement gives [(8.4)](/quantum-measurement/monograph/discrimination-retained-information-and-constitutive-scope#p:eq-nativegap). 

□

 At $gT=\pi/8$ the gap is $(\sqrt2-1)/6$. A material apparatus with path error $\Delta_N$ cannot be a universal passive native counter with record error below this gap minus $\Delta_N$. The permitted coherent copy changes the complete source–memory field, so it does not claim to evade this obstruction. Its archive attests its own actual copy crossing. This explicitly distinguishes successful measurement from a fictitious passive record of every earlier native excursion. 



<a id="section-8-5"></a>

## 8.5 Fine and coarse paths remain distinct

 For any coarse boundary with microscopic currents $j_1,\ldots,j_k$, forward mean incidence is $\sum_i[j_i]_+$, not generally $[\sum_i j_i]_+$. Their discrepancy is 

$$

 \frac12\left(\sum_i|j_i|-\left|\sum_i j_i\right|\right).

$$

 The monomial-copy theorem computes every fine current and makes this discrepancy zero at that specific boundary. It does not infer the result from a coarse clock population. Arbitrary circuit gates can have negative fine forward factors. Reduced null maps are used only to compute probabilities after retaining every receiver in the joint model; they do not supply actual trajectory rates. Expected flux integrals likewise remain expectations of counts, not sample counting measures. 



<a id="section-8-6"></a>

## 8.6 Dependencies and the strength of the conclusion

 

<a id="section-8-6-1"></a>

### 8.6.1 Dependency map

 

| Component | Prior status or premise | Present consequence |
| --- | --- | --- |
| Canonical edge source | Primitive binary quadratic action; common $\hbar$; passive ownership | Retained. It fixes every individual Hamiltonian edge current, including cycles. |
| Packet production | Bounded conservative action exporter with finite elementary charge | Retained as explicit deterministic hybrid physics. No target waiting-time sampler. |
| Signed queue | Instant opposite cancellation was supplied | Replaced by actual two-species coexistence and finite recombination; new full-state error [(6.11)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-annerror). |
| Reaction clocks | Additive Markov pair generator was supplied | Replaced by deterministic finite flight and independent spatial preparation; new complete-history error [(6.8)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-gaserror). |
| Scalar response | Equal pair response and complete reaction list | Retained microscopic premises, with explicit charge routing and channel geometry. |
| Initial equilibrium | Calibrated population and tag law | General input premise retained. The explicit basis-ready preparation derives the example's distribution with randomness only in the pilot gas. |
| Ordinary admission | Unrestricted pilot-action/ledger readers obstruct common measurement | Replaced by P3: one coherent ordinary force algebra and an explicit absent mixed pilot force. Not derived from older mechanics. |
| Actuator and archive | Conditional physical record results | Explicit autonomous common $H_F$ with actual monomial crossing proofs, loss, pending, fuel and retained reset recipients. |
| Continuation | Complete-field conditional composition | Demonstrated through archive-controlled noncommuting source gates with an inaccessible reference and joint probabilities. |
| Entropy, chamber and MPBT routes | Their stated statistical, boundary and measure premises | Preserved as separate conditional results; not invoked to select this theory's event law. |

 



<a id="section-8-6-2"></a>

### 8.6.2 What has been established

 With P1–P4 as its physical constitution, the finite theory has a fully specified state, deterministic event mechanism and finite resource inventory on every promised horizon. The controlled limit derives the *original minimal Bell path*, not merely an operationally equivalent alternative, for the complete declared ordinary configuration. No positive part of $J$ or division by $w$ occurs in the microscopic service or contact law. Positive and negative packet species coexist at finite resources; the proved fast-recombination estimate explains their limiting directional selection. The gas preparation explains complete conditional timing rather than just its mean. 

The autonomous ordinary experiment establishes more than Born endpoints. Fine-current signs prove that copies are actual historical records at their unique crossing boundaries and remain protected through the included reset and noncommuting continuation. The full material-path bound transfers this history statement to finite pilot resources with error at most $\Delta_N$. The example retains a nontrivial reference, null branch, pending and loss weight, fuel changes and both reset receivers. Its extended preparation starts all ordinary configurations and pilot carriers at one definite ready state, with no random carrier sampler; the same dynamics produces the entangled preparation before a one-way boundary isolates its reference. 

This is verdict **(b)**, an explicit new constitutive internal completion, together with **(c)**, a controlled effective Bell closure. It is not verdict **(a)** relative to the old unrestricted source constitution. In particular neither the absence of a mixed pilot read force, the scalar reaction spectrum, nor the independent equilibrium/spatial ensemble is claimed to follow from gauge symmetry or generic mechanics. If any of those premises is refused, the corresponding countermodels above survive. That refusal distinguishes a different physical theory; it does not undo the conditional mathematics of this one. 



<a id="section-8-6-3"></a>

### 8.6.3 Limits of the result

 The theorem is for fixed finite ordinary programmes and growing finite pilot resources. It does not give an economical material substrate, a unique empirically selected new theory, a universal continuum-field limit, Bell rates conditional on every hidden pilot coordinate, or exact finite-resource equivariance. Its exact copy theorem protects records on the first pass of the retained clock. An unmodified later clock echo unwrites them, and a longer desired retention experiment must be included in a larger declared programme. The auxiliary smooth contact module does not prove a smooth common Hamiltonian for canonical export interleaved with all reactions; such an embedding is a stronger open mechanics problem, not a premise concealed in the present hybrid claim. 

Thus the original unrestricted programme is not proved inevitable. A precisely stated replacement constitution now supplies a complete event-selection and measurement-chain realization with quantitative path errors. The massive continuous-configuration constitution developed separately in this monograph remains an alternative; its operational agreement must not be mislabeled as this Bell-path derivation. 



<a id="section-8-7"></a>

## 8.7 Connection to the remaining constitutions

 The physical-access results that follow allow couplings which P3 excludes. They therefore remain precise tests of what the new law changes. The relative-entropy, MPBT and chamber arguments retain their own probability, boundary and incidence premises. They are neither needed in the gas–recombination–kinetic proof nor invalidated by it. A complete experiment must choose one compatible source and material constitution, as required in Chapter [2](/quantum-measurement/monograph/complete-experiments-and-comparison-conventions#found:experiments). 

The finite clock identity uses the engineered spin-chain matrix of Christandl et al. [[P-Clock](/quantum-measurement/monograph/bibliography#bib-pChristandl2004)]; its gate-carrying conjugacy is the Feynman construction [[P-Computer](/quantum-measurement/monograph/bibliography#bib-pFeynman1986)]. The required matrices, currents and histories were proved above rather than imported as an unspecified computation theorem. Bell-process existence retains the provenance and proof in Lemma [4.2](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:existence) and [[DGGTZ](/quantum-measurement/monograph/bibliography#bib-BellQFT)]. No historical-priority or empirical-confirmation claim follows from these mathematical constructions.
