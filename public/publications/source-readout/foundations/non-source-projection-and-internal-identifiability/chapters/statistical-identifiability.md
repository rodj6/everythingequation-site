# Statistical identifiability

<div id="sec:statistical">

</div>

The preceding sections treated probes as deterministic maps, and the ceiling obtained there is correspondingly deterministic. Real experiments return random data, and the ceiling must therefore be established *again*, from its own hypothesis, at the level of probability laws. We stress that this is not a restatement of Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) but an independent result resting on the separate assumption [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor): only at the level of complete outcome laws does one earn the stronger conclusion that no test, at any sample size and with any randomization, can discriminate.

<div class="definition">

**Definition 8.1** (Statistical experiment).

<div id="def:experiment">

</div>

Let $(\mathcal D,\Sigma)$ be a measurable space, the *data space*. Suppose each source state $s\in S$ induces a probability measure $\mu_s$ on $(\mathcal D,\Sigma)$, the *complete outcome law* of the experiment (or of a whole family of experiments, in which case $\mathcal D$ is the corresponding product space and $\mu_s$ the joint law of all of them, including all repetitions). The experiment *identifies the source* if $\mu_s=\mu_{s'}\Rightarrow s=s'$.

</div>

We use total variation in the convention $$
\|\mu-\nu\|_{\mathrm{TV}}\;:=\;\sup_{A\in\Sigma}\,|\mu(A)-\nu(A)| ,\tag{29}$$ so that $\|\mu-\nu\|_{\mathrm{TV}}\in[0,1]$ for probability measures. (Some authors insert a factor $2$; nothing below depends on the choice, but the statements are made for [(29)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:TVconvention).)

<div class="theorem">

**Theorem 8.2** (Statistical indistinguishability).

<div id="thm:statistical">

</div>

*Let $s_0,s_1\in S$.*

1.  *If $\mu_{s_0}=\mu_{s_1}$, then for every measurable statistic $f\colon(\mathcal D,\Sigma)\to(Z,\mathcal Z)$ the pushforwards agree: $f_*\mu_{s_0}=f_*\mu_{s_1}$.*

2.  *If $\mu_{s_0}=\mu_{s_1}$, then every randomized test $\varphi\colon\mathcal D\to[0,1]$ (measurable) has equal rejection probability: $$\int_{\mathcal D}\varphi\,d\mu_{s_0}=\int_{\mathcal D}\varphi\,d\mu_{s_1}.$$*

3.  *If $\mu_{s_0}=\mu_{s_1}$, then $\|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}=0$.*

4.  *Conversely, if $\mu_{s_0}\neq\mu_{s_1}$, then there exists $A\in\Sigma$ with $\mu_{s_0}(A)\neq\mu_{s_1}(A)$, and $\|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}>0$.*

</div>

<div class="proof">

*Proof.* (S1) For $B\in\mathcal Z$, $(f_*\mu_{s_0})(B)=\mu_{s_0}(f^{-1}(B))=\mu_{s_1}(f^{-1}(B))=(f_*\mu_{s_1})(B)$, using $f^{-1}(B)\in\Sigma$ by measurability and equality of the measures on $\Sigma$.

(S2) $\varphi$ is a bounded measurable function and the two measures are equal, so the integrals coincide. (Explicitly: the integral of a fixed bounded measurable function is determined by the measure, being the limit of integrals of simple functions, each of which is a finite combination of measure values.)

(S3) Immediate from [(29)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:TVconvention): every summand $|\mu_{s_0}(A)-\mu_{s_1}(A)|$ vanishes.

(S4) Two measures on $(\mathcal D,\Sigma)$ are *equal* by definition iff they agree on every $A\in\Sigma$. Hence $\mu_{s_0}\neq\mu_{s_1}$ means precisely that some $A\in\Sigma$ has $\mu_{s_0}(A)\neq\mu_{s_1}(A)$; and then the supremum in [(29)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:TVconvention) is at least $|\mu_{s_0}(A)-\mu_{s_1}(A)|>0$. ◻

</div>

<div class="remark">

*Remark 47* (The three distinctions that must not collapse).

<div id="rem:statscope">

</div>

Theorem [8.2](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#thm:statistical) is easy to over-read in *both* directions.

*Forward.* (S1)–(S3) say that when the complete outcome laws are *exactly equal*, statistical discrimination is not difficult but *impossible*: not by any statistic, not by any test, not at any sample size, not with any amount of randomization, not asymptotically. There is no procedure to improve, because the two hypotheses induce literally the same distribution over all possible data. This is the strongest negative available, and it is what Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling) exploits.

*Backward.* (S4) says only that unequal laws *differ on some event*. It emphatically does *not* say that a single observation classifies the state with certainty. If $\mu_{s_0}(A)=0.51$ and $\mu_{s_1}(A)=0.49$, the laws are unequal, $\|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}\ge0.02>0$, and yet one observation of $\mathbf 1_A$ is nearly worthless. What (S4) supplies is a *nonzero* signal, hence ,  given i.i.d. repetition, which is an additional assumption about $\mathcal D$ and $\mu_s$ ,  consistency of a suitable test as the sample size grows. One must therefore keep apart: *exact identifiability* (distinct states have distinct laws); *asymptotic identifiability* (some consistent procedure separates them in the limit); and *finite-sample power* (how much data a given error level costs). Only the first is a purely measure-theoretic property, and only the failure of the first is what §[7](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#sec:ceiling) and Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling) are about.

</div>

<div class="corollary">

**Corollary 8.4** (Statistical readout ceiling).

<div id="cor:statceiling">

</div>

*Suppose the complete outcome law depends on the source only through the readout: there is a family $\{\mathsf M_t\}_{t\in T_1}$ of probability measures on $(\mathcal D,\Sigma)$ with $$
\mu_s=\mathsf M_{p(s)}\qquad\text{for all }s\in S .\tag{30}$$ Then any two source states in a common readout fiber are *statistically indistinguishable* by that experiment: for $p(s_0)=p(s_1)$, every statistic has the same law, every test has the same power, and the total-variation distance is zero.*

</div>

<div class="proof">

*Proof.* If $p(s_0)=p(s_1)$ then [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) gives $\mu_{s_0}=\mathsf M_{p(s_0)}=\mathsf M_{p(s_1)}=\mu_{s_1}$. Apply Theorem [8.2](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#thm:statistical)(S1)–(S3). ◻

</div>

<div class="remark">

*Remark 49* (The two ceilings, stated separately).

<div id="rem:twoceilings">

</div>

Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling) is the probabilistic *analogue* of Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling), and [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) the probabilistic analogue of Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization). It is not a consequence of them. The two results must be kept apart, because their hypotheses differ and so do their conclusions.

*Deterministic ceiling.* <span class="smallcaps">Hypothesis:</span> every admissible probe factors through the readout, $P_i=\bar P_i\circ p$. <span class="smallcaps">Conclusion:</span> within a readout fiber, all probe values coincide, so no deterministic selector, statistic, or post-processing rule *applied to those values* can distinguish its members (Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling), Corollary [7.3](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#cor:noselector)).

*Statistical ceiling.* <span class="smallcaps">Hypothesis:</span> the complete outcome law factors through the readout, $\mu_s=\mathsf M_{p(s)}$. <span class="smallcaps">Conclusion:</span> within a readout fiber, the complete data laws are *equal*, so no statistic, no randomized test, no sample size, and no asymptotic procedure can discriminate; the total-variation distance is zero (Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling)).

The second does not follow from the first. Deterministic factorization constrains probe *values*; it says nothing about the law of a stochastic experiment unless that experiment’s complete law is itself identified as a probe factoring through $p$ ,  an identification which must be made explicitly, and which is exactly the content of [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor). Both are hypotheses about the model, to be discharged by the model. Neither is a theorem about observers in general.

</div>

## The exact relations among the three obstructions

<div id="subsec:relations">

</div>

We can now state precisely how kinematic incompleteness, dynamical nonclosure, and statistical nonidentifiability are related. They are *not* logically independent, and it is worth being exact, since the pattern of implication is what licenses ,  and what forbids ,  inferring one from another.

<div class="proposition">

**Proposition 8.6** (Logical relations).

<div id="prop:relations">

</div>

*Let $p\colon S\to T_1$ be an exact readout.*

1.  ***Dynamical nonclosure implies noninjectivity.** If $\Phi_t$ is fiber-breaking (Case II of Theorem [5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#thm:dichotomy)), then $p$ is noninjective. Thus kinematic incompleteness is *necessary* for fiber-breaking.*

2.  ***The converse fails.** Noninjectivity of $p$ does not imply fiber-breaking: there exist noninjective $p$ with fiber-preserving, autonomous dynamics. Hence kinematic incompleteness is *not sufficient* for dynamical nonclosure, and, equivalently, autonomy of the projected law does not imply injectivity of $p$.*

3.  ***Statistical nonidentifiability is unconditionally unrelated to $p$.** Without a hypothesis tying $\{\mu_s\}$ to $p$, the existence of $s_0\neq s_1$ with $\mu_{s_0}=\mu_{s_1}$ neither implies nor is implied by noninjectivity of $p$.*

4.  ***Under the factorization hypothesis it is implied.** If $\mu_s=\mathsf M_{p(s)}$ as in [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) and $p$ is noninjective, then there exist $s_0\neq s_1$ with $\mu_{s_0}=\mu_{s_1}$: statistical nonidentifiability holds within at least one readout fiber.*

</div>

<div class="proof">

*Proof.* (R1) Case II supplies $s_0,s_1$ with $p(s_0)=p(s_1)$ and $p(\Phi_t(s_0))\neq p(\Phi_t(s_1))$ for some $t$. The latter forces $\Phi_t(s_0)\neq\Phi_t(s_1)$, hence $s_0\neq s_1$. So $p$ identifies two distinct points and is noninjective.

(R2) Example [5.5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#ex:fiberpreserving) exhibits a noninjective $p$ with $p\circ\Phi_t=U_t\circ p$ for an autonomous $U_t$. The equivalent formulation is the contrapositive: if autonomy implied injectivity, that example would be impossible.

(R3) Both directions fail, by example. *Noninjectivity without statistical nonidentifiability:* take $p$ noninjective with fiber $\{s_0,s_1\}$, and let the experiment couple to a fiber coordinate ,  say $\mathcal D=\{0,1\}$ with $\mu_{s_0}=\delta_0$ and $\mu_{s_1}=\delta_1$. The laws are distinct (indeed mutually singular, so a single sample identifies the state), while $p$ is noninjective. *Statistical nonidentifiability without noninjectivity:* take $p=\mathop{\mathrm{id}}_S$, which is injective, and let $\mu_s=\mathsf M$ be one fixed law for every $s$ ,  an experiment that measures nothing. Then $\mu_{s_0}=\mu_{s_1}$ for all pairs while $p$ is bijective. So no unconditional implication holds in either direction; the outcome laws are simply extra data, unconstrained by $p$ until a hypothesis links them.

(R4) Noninjectivity supplies $s_0\neq s_1$ with $p(s_0)=p(s_1)$. Then [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) gives $\mu_{s_0}=\mathsf M_{p(s_0)}=\mathsf M_{p(s_1)}=\mu_{s_1}$, and Theorem [8.2](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#thm:statistical)(S1)–(S3) applies to that pair. ◻

</div>

The moral of (R3) and (R4) together is that the statistical ceiling is *not* a corollary of the kinematic one. It requires the separate hypothesis [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor), which is a claim about what the experiment couples to, and which the deterministic data $(S,p,\Phi_t)$ does not supply. We return to this in Remark [8.5](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#rem:twoceilings).

<div class="example">

**Example 8.7** (Equal laws versus unequal but overlapping laws).

<div id="ex:statistical">

</div>

Let $S=\{s_0,s_1,s_2\}$ with $p(s_0)=p(s_1)=t$, $p(s_2)=t'$ as in Example [4.13](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#ex:finite). Let $\mathcal D=\{0,1\}$ with $\Sigma=2^{\mathcal D}$, and let each state induce a Bernoulli law $\mu_s(\{1\})=\theta_s$.

*(i) Equal laws.* Suppose the experiment factors through the readout as in [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor): $\theta_{s_0}=\theta_{s_1}=0.3$ and $\theta_{s_2}=0.8$. Then $\mu_{s_0}=\mu_{s_1}$ exactly. Consider *any* test based on $n$ i.i.d. repetitions ,  so the data space is $\{0,1\}^n$ and the law is $\mathrm{Bin}(n,\theta_s)$ coordinatewise. The joint laws under $s_0$ and $s_1$ are identical for every $n$. Hence for every test $\varphi_n$, the rejection probabilities coincide, the power against $s_1$ equals the size under $s_0$, and no amount of data helps: the discrimination problem between $s_0$ and $s_1$ has *zero* information at every sample size. This is Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling). Note that $s_2$ is *statistically identifiable* against both $s_0$ and $s_1$: its law is different ($\theta_{s_2}=0.8\neq0.3$), so by Theorem [8.2](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#thm:statistical)(S4) some event distinguishes it, and under i.i.d. repetition it is consistently distinguishable. It is *not* perfectly discriminable from a finite sample: the Bernoulli laws with parameters $0.3$ and $0.8$ have the same support $\{0,1\}$, so every finite data set has positive probability under both hypotheses and no finite-sample test is infallible. The ceiling is confined to the fiber, but what lies outside the fiber is identifiability and asymptotic consistency, not certainty.

*(ii) Unequal but overlapping laws.* Now suppose the model is refined so that $\theta_{s_0}=0.5$ and $\theta_{s_1}=0.55$, so [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) fails. The laws are unequal: on the event $A=\{1\}$, $|\mu_{s_0}(A)-\mu_{s_1}(A)|=0.05$, so $\|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}=0.05>0$, and Theorem [8.2](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#thm:statistical)(S4) is satisfied. But a *single* observation is nearly useless: the optimal single-sample test has error probability $$\tfrac12\bigl(1-\|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}\bigr)=\tfrac12(1-0.05)=0.475 ,$$ barely better than a coin flip. With $n$ i.i.d. samples the laws are $\mathrm{Bin}(n,0.5)$ and $\mathrm{Bin}(n,0.55)$, which separate as $n\to\infty$: the states are asymptotically identifiable and a consistent test exists. The finite-sample power, however, depends quantitatively on the error levels one demands, and we make no numerical claim about the required $n$ here, since that would need a testing criterion and a calculation we do not supply.

The example thus exhibits all four notions that Remark [8.3](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#rem:statscope) insists on keeping apart. *Equal laws* (case (i), the pair $s_0,s_1$): discrimination is impossible at every sample size. *Unequal but overlapping laws* (case (ii), and also $s_2$ against $s_0$ in case (i)): the laws differ, so some event distinguishes them, but their common support means no finite sample is conclusive. *Perfect finite-sample discrimination*: absent here, and it would require laws that are mutually singular ,  e.g. disjoint supports, as in the degenerate $\delta_0$ versus $\delta_1$ of Proposition [8.6](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#prop:relations)(R3). *Asymptotic consistency*: available in every unequal-law case above. Only the first is a ceiling; the others are matters of cost.

</div>
