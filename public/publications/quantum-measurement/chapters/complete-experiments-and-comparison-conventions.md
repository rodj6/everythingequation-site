# Chapter 2: Complete experiments and comparison conventions

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

<a id="found:experiments"></a> 



<a id="section-2-1"></a>

## 2.1 Constitutions and permissible transfers

 The source in a theorem is its mathematical physical domain, not a claimed exhaustive description of source reality. The following six inherited domains organize the earlier constructions. The two added completions are compared in the roadmap and specified in Parts [II](/quantum-measurement/monograph/deterministic-pilot-medium-and-autonomous-material-records#part:pilot) and [IX](/quantum-measurement/monograph/a-separate-massive-configuration-completion#part:massive).  

| Constitution | Complete state and statistical input | Event and null rule |
| --- | --- | --- |
| Canonical reactive source | Coherent canonical field, action coordinates, finite packets and carriers; intrinsic reaction chemistry | Carrier jumps; unfinished queues survive zero-current holds |
| Classical–quantum reader | Classical provenance and coherent bank; native Wiener law or CPC reconstruction premises | Conditional ray evolution and continuous physical records |
| Absorbing extraction | Loaded coherent outlets; fundamental actual transition law | Alternatives removed at capture; held-null rule explicitly specified |
| Full-wave configuration | Surviving joint wave and actual configuration; guidance or an equivariant generator and preparation law | Configuration moves without global wave collapse; unused waves may return |
| Variational discrete source | Complete coherent wave and sector history; expected current matching and a path-entropy principle | Selected Markov history and its zero-background limit |
| Material contacts | Chamber geometry, conversion field or chiral reservoir with stated readiness | Model-specific reactions or first passage; transfer needs a theorem |

  The variational finite-configuration source may supply the generator of a full-wave record model when the complete graph and preparations agree. A continuous configuration detector is not automatically that discrete model. Neither a reduced quantum-latch instrument nor a dissipative detector current is silently identified with the Hamiltonian process [(1.4)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:bell). 

A complete finite experiment specifies the initial source and apparatus law, one unknown input and its inaccessible reference, a control programme, all physical records and retained quantum states, failures, nulls and exhaustion, and every later return interaction. An event record $z$ and its normalized daughter $\rho_z$ are compared together through the unnormalized output $\sigma_z=p_z\rho_z$. An approximate declaration retains its actual daughter; it is not replaced by an ideal state after the declaration. 



<a id="section-2-2"></a>

## 2.2 Distances and composition

 For probability measures $P,Q$ on the same measurable output space, $d_{\rm TV}(P,Q)=\sup_E|P(E)-Q(E)|$. For states, $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$. A classical–quantum output has norm $\int\|\sigma(dz)\|_1$, with sums in the finite case. Half-diamond distance is used only for linear maps with the declared reference extension. A deterministic pushforward or a common Markov kernel contracts total variation. A quantum channel contracts trace distance even after an identity reference extension. Unknown nonlinear continuation has no such automatic property. 



**Lemma 2.1 (Sequential replacement and rare conditioning).**

<a id="found:errors"></a> If $m$ successive complete Markov kernels on the same retained state spaces differ uniformly by at most $\epsilon_j$ in total variation, their complete history laws differ by at most $\sum_j\epsilon_j$. The same conclusion holds for completely positive trace-preserving instruments in half-diamond distance, including adaptive classical control. 

If $\|\sigma-\tau\|_1\le\delta$, $p=\operatorname{tr}\sigma>0$, $q=\operatorname{tr}\tau>0$, then 

$$

 D(\sigma/p,\tau/q)\le\min\{1,\delta/p\}.

$$

 If $d_{\rm TV}(P,Q)\le\epsilon$ and $P(E)=p>0$, $Q(E)>0$, then 

$$

 d_{\rm TV}(P(\cdot\mid E),Q(\cdot\mid E))\le\min\{1,2\epsilon/p\}.

$$

 

 

**Proof.**

Replace one stage at a time. The prefix supplies an admitted input and the remaining common suffix contracts the chosen distance. Retaining every prior classical record makes the same argument valid on the full history and for record-controlled kernels. For quantum instruments, attach the entire reference and retained history in each half-diamond bound. For conditioning, 

$$

 \|\sigma/p-\tau/q\|_1\le\|\sigma-\tau\|_1/p+|q-p|/p\le2\delta/p.

$$

 For measures, apply the analogous triangle argument to restrictions to $E$; both $|P(B\cap E)-Q(B\cap E)|$ and $|p-q|$ are at most $\epsilon$. 

□

 

The lemma requires uniform control on all actual suffix inputs. Calibrating a finite list of preparations is not such a bound. An archive discarded in one theorem cannot later return in its claimed domain. A failure branch may consume a resource or alter a source even if the displayed apparatus has reset. These conventions are used throughout the constructions rather than repaired only in the final comparison.
