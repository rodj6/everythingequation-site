# Synthesis

<div id="sec:synthesis">

</div>

The architecture, assembled, reads as follows. Each line is a separate theorem, and each contributes something the others do not. $$
\begin{aligned}
&\text{physical reduction} && \Omega\longrightarrow S=\Omega/\!\simeq_{\mathrm{phys}} &&\text{(Def.\ \href{#def:source}{2.1})}\\
&\text{exact readout} && S\xrightarrow{\;p\;}T_1\cong S/\!\sim_p &&\text{(Lem.\ \href{#lem:induced}{2.3})}\\
&\text{descent test} && r=\bar r\circ p \iff r\ \text{fiber-constant} &&\text{(Lem.\ \href{#lem:descent}{3.2})}\\
&\text{completeness} && \text{(C1)}\Leftrightarrow\cdots\Leftrightarrow\text{(C5)} &&\text{(Thm.\ \href{#thm:completeness}{3.4})}\\
&\text{target obstruction} && p(s_0)=p(s_1),\ a_Q(s_0)\neq a_Q(s_1) &&\text{(Thm.\ \href{#thm:nonsource}{4.5})}\\
&\text{minimal completion} && E_Q=\mathop{\mathrm{Im}}(p,a_Q),\ \text{terminal} &&\text{(Thm.\ \href{#thm:universal}{4.6})}\\
&\text{geometric realization} && E_A^{\mathrm{geo}}=\mathop{\mathrm{Im}}(p_{\mathrm{geo}},J_A) &&\text{(Ex.\ \href{#ex:geo}{2.8})}\\
&\text{observable quotient} && \mathcal{H}_{\mathrm{src}}/\ker K\cong\mathop{\mathrm{Ran}}K &&\text{(Ex.\ \href{#ex:linear}{2.9})}\\
&\text{dynamical descent} && p\Phi_t=U_tp \iff \text{fibers preserved} &&\text{(Thm.\ \href{#thm:dichotomy}{5.2})}\\
&\text{linear form} && U(t)\ker K\subseteq\ker K,\quad PLQ^{\!\perp}=0 &&\text{(Prop.\ \href{#prop:invariance}{5.4})}\\
&\text{identifiability} && \textstyle\bigcap_{i}\sim_{P_i}\;=\;\Delta_S &&\text{(Thm.\ \href{#thm:identifiability}{6.2})}\\
&\text{internal ceiling} && P_i=\bar P_i\circ p \implies \sim_p\subseteq\sim_I &&\text{(Thm.\ \href{#thm:ceiling}{7.2})}\\
&\text{statistical ceiling} && \mu_s=\mathsf M_{p(s)} \implies \|\mu_{s_0}-\mu_{s_1}\|_{\mathrm{TV}}=0 &&\text{(Cor.\ \href{#cor:statceiling}{8.4})}\\
&\text{Markov projection} && \textstyle\sum_{j\in B_b}g_{ij}\ \text{independent of}\ i\in B_a &&\text{(Thm.\ \href{#thm:lumpability}{9.3})}
\end{aligned}\tag{38}$$

Read as a whole, [(38)](/source-readout/non-source-projection-and-internal-identifiability/synthesis#eq:synthesis) makes four points that no single line makes alone.

*The source/readout distinction is not inferred from the word “projection.”* It is established, for a specified model, by a physically reduced nontrivial fiber carrying an essential distinction ,  and by nothing less.

*Completion is not arbitrary extra structure.* $E_Q$ is the terminal object among exact extensions sufficient for $Q$ (Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal)): it is forced, not chosen, and every adequate extension surjects onto it.

*Geometric realization is a restriction, not an automatic step.* In a geometrically realized source, the completion takes the form $E_A^{\mathrm{geo}}=\mathop{\mathrm{Im}}(p_{\mathrm{geo}},J_A)$ of [(7)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:EAgeo), whose elements are exactly the completed signatures *attained by compatible global geometric fields*. Not every abstract signature is so realized: field equations, global compatibility, and topological obstructions restrict the image. Which signatures survive is a geometric question, answered by geometry and not by the quotient formalism.

*The three failures are ordered, not independent.* They stand in the exact relations of Proposition [8.6](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#prop:relations). Fiber-breaking dynamical nonclosure *requires* two distinct source states sharing a readout, so it *implies* kinematic incompleteness: noninjectivity of $p$ is necessary for it. The converse fails ,  Example [5.5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#ex:fiberpreserving) and Example [9.6](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#ex:lumpability)(i) are kinematically incomplete yet dynamically closed ,  so noninjectivity is not sufficient, and, equivalently, autonomy of the projected law does not imply injectivity of $p$. Statistical nonidentifiability, by contrast, has no unconditional relation to $p$ in either direction; it acquires one only under the outcome-law factorization hypothesis [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor), and under that hypothesis noninjectivity of $p$ implies statistical nonidentifiability within at least one fiber. The one moral that survives all three cases is negative: autonomy of the projected law is evidence of *fiber preservation*, never of *fiber triviality*.

*The ceiling is exactly as wide as the input restriction.* Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) bites only under Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization), and a genuinely new probe ,  one not factoring through $p$ ,  lifts it. Source identification is possible exactly when the joint probe family separates physical source states, and not otherwise.
