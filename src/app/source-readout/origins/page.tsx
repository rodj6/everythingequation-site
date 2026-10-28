import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";

export const metadata: Metadata = {
  title: "From the Everything Equation to Source–Readout Theory",
  description: "The mathematical development from a lawhood and closure schema to precise descent, minimal completion, projected dynamics, quantum sources and certified readers.",
  alternates: { canonical: "/source-readout/origins" },
};

const equation = (source: string) => ({ __html: katex.renderToString(source, { displayMode: true, throwOnError: true, strict: "ignore" }) });

export default function SourceReadoutOrigins() {
  return <article className="mx-auto max-w-3xl space-y-12 pb-12">
    <header>
      <Link href="/source-readout" className="text-sm font-medium text-glow">← Source–Readout Theory</Link>
      <p className="section-label mt-8">Origins and mathematical development</p>
      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">From the Everything Equation to Source–Readout Theory</h1>
      <p className="mt-6 text-lg leading-relaxed text-mute">EverythingEquation.com takes its name from an early organizing question: what makes a candidate description lawful, independent of its presentation, and complete for the structure it is meant to describe? Shadow Theory develops that question through exact mathematics and concrete constructions.</p>
      <p className="mt-4 leading-relaxed text-mute">The connection is a progression in definitions, proofs and realizations. The original schema supplies the historical starting point. The current papers supply the specific results.</p>
      <nav aria-label="Article contents" className="card-surface mt-6 p-5"><p className="font-semibold">In this article</p><ul className="mt-3 space-y-2 text-sm text-glow"><li><a href="#original-question">The original lawhood question</a></li><li><a href="#precise-objects">From schema to precise objects</a></li><li><a href="#completion">A concrete fixed-point connection</a></li><li><a href="#dynamics">Completion and dynamical closure</a></li><li><a href="#construction">From information objects to readers</a></li><li><a href="#notation">How to read the historical notation</a></li><li><a href="#reading">Follow the development</a></li></ul></nav>
    </header>

    <section id="original-question" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">The original lawhood question</h2>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`L=\Omega\,\Delta\,\partial(L)`)} />
      <p className="leading-relaxed text-mute">The Everything Equation expressed lawhood as stability under a sequence of structural operations. In the law-level formulation, presentation collapse removes representational artifacts, admissibility filtering retains the permitted content, and canonical completion closes that content under the declared structural requirements. The fixed-point expression asks whether the candidate remains the same after the complete process.</p>
      <p className="mt-4 leading-relaxed text-mute">This is a schema for organizing a foundational problem. It is not one equation that calculates every physical quantity, a replacement for domain-specific dynamics, or a universal algorithm. A mathematical use requires defined objects, typed operations, stated hypotheses and an actual proof for the chosen domain.</p>
      <p className="mt-4 leading-relaxed text-mute">The early manuscripts explored several realizations of these roles. Some use a boundary involution; the later lawhood formulation uses a semantic quotient. Those definitions belong to their respective settings. A shared symbol does not make them the same map.</p>
    </section>

    <section id="precise-objects" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">From schema to precise objects</h2>
      <p className="mt-4 leading-relaxed text-mute">The source–readout foundation begins with an independently specified source model. Declared gauge and coordinate redundancy is removed first. A readout then maps the reduced source into the observable description:</p>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`p:S\longrightarrow T.`)} />
      <p className="leading-relaxed text-mute">This separates two questions that an undifferentiated idea of completeness can obscure. Is the readout exact as a quotient? Does it retain the source distinctions needed for the question being asked? An affirmative answer to the first does not settle the second.</p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-edge"><table className="w-full text-left text-sm"><thead className="bg-surface text-fg"><tr><th className="p-4">Original concern</th><th className="p-4">Current mathematical formulation</th></tr></thead><tbody className="divide-y divide-edge text-mute">
        <tr><td className="p-4 align-top">Presentation independence</td><td className="p-4">Reduce declared redundancy, then test invariant relations on readout fibers.</td></tr>
        <tr><td className="p-4 align-top">Adequacy of a description</td><td className="p-4">A target is determined exactly when its answer map is constant on each fiber.</td></tr>
        <tr><td className="p-4 align-top">Canonical completion</td><td className="p-4">Construct the coarsest extension retaining the nominated relation or target values.</td></tr>
        <tr><td className="p-4 align-top">Self-contained observable law</td><td className="p-4">Test whether source evolution preserves the readout equivalence relation.</td></tr>
        <tr><td className="p-4 align-top">Realization and access</td><td className="p-4">Specify generators, interventions, records, resource costs and certification procedures.</td></tr>
      </tbody></table></div>
      <p className="mt-4 leading-relaxed text-mute">The seven foundational papers establish these distinctions and their exact consequences. Their RS2 application supplies a physical model in which equal instantaneous readouts can have different futures. Establishing a model-relative witness and identifying nature's source ontology remain different tasks.</p>
    </section>

    <section id="completion" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">A concrete fixed-point connection</h2>
      <p className="mt-4 leading-relaxed text-mute">Fix a source, its readout, and a nominated family of invariant relations. Write the joint relation map as <span className="font-mono text-fg">R</span>. The canonical sufficient extension is the reachable joint image:</p>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`e_{\mathcal R}:S\longrightarrow E_{\mathcal R},\qquad e_{\mathcal R}(s)=(p(s),R(s)),\qquad E_{\mathcal R}=\operatorname{Im}(p,R).`)} />
      <p className="leading-relaxed text-mute">Every sufficient extension determines both coordinates, so it maps uniquely onto this joint image. The construction retains exactly the distinctions required by the original readout and nominated relations. It does not choose a preferred source representative.</p>
      <p className="mt-4 leading-relaxed text-mute">Completing this already sufficient readout for the same relations adds no new distinctions. The image of the repeated construction has coordinates <span className="font-mono text-fg">((p,R),R)</span>; dropping the repeated relation coordinate gives a canonical isomorphism with the first completion:</p>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`\operatorname{Im}(e_{\mathcal R},R)\cong E_{\mathcal R}.`)} />
      <p className="leading-relaxed text-mute">Here the original fixed-point intuition has a precise descendant. The source, readout and relation family stay fixed, and the isomorphism expresses information equivalence. Enlarging the family or changing the source model can require a further completion. This construction does not prove the historical operator factorization for every possible law.</p>
    </section>

    <section id="dynamics" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">Completion and dynamical closure</h2>
      <p className="mt-4 leading-relaxed text-mute">An observable evolution is well defined on present readouts exactly when equal present readouts have equal future readouts under the source evolution. For a deterministic evolution, this means that a map on the readout exists with</p>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`p\circ\Phi_t=U_t\circ p.`)} />
      <p className="leading-relaxed text-mute">This is a different closure question from retaining a nominated static relation. A noninjective readout may obey an autonomous law. If the source dynamics break its fibers, the instantaneous readout alone cannot reproduce every source future. Dynamical completion, or a separately constructed history-level description, then addresses the missing information.</p>
      <p className="mt-4 leading-relaxed text-mute">The programme distinguishes these forms of closure because their hypotheses and conclusions differ. Their relationship carries the research forward without collapsing all of them into one universal operator.</p>
    </section>

    <section id="construction" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">From information objects to physical readers</h2>
      <p className="mt-4 leading-relaxed text-mute">The five constructive papers ask what abstract sufficiency requires in an admitted implementation. Quantum-source constructions reproduce complete passive word laws with explicit memory and output costs. Phase-sensitive interactions convert distinctions invisible to separate-mode intensities into stable detector flags. Local-reader results determine when feedback improves target decisions. Retained-record likelihoods quantify the resources needed to validate a frozen reader.</p>
      <p className="mt-4 leading-relaxed text-mute">Finite readout-design algorithms complete the connection to the earlier descent theorem. They produce pairs of sources with equal proposed readouts and different target values, then use those witnesses to synthesize a minimum-cost sufficient selection from a declared sensor menu. Abstract completion identifies the required distinctions; the design problem determines which permitted access can acquire them.</p>
      <p className="mt-4 leading-relaxed text-mute">These results use their stated classical or quantum models. Matching passive records does not establish equivalence under every intervention, and minimizing internal memory does not minimize all apparatus resources. The constructive programme makes those differences calculable.</p>
      <Link href="/source-readout#constructive" className="mt-5 inline-block text-sm font-medium text-glow">Explore the five constructive papers →</Link>
    </section>

    <section id="notation" className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">How to read the historical notation</h2>
      <p className="mt-4 leading-relaxed text-mute">The site's later typed schema writes the completion/readout role with a Tier-1 subscript:</p>
      <div className="my-6 overflow-x-auto" dangerouslySetInnerHTML={equation(String.raw`L=\Omega_{T1}\,\Delta\,\partial[L].`)} />
      <p className="leading-relaxed text-mute">The subscript clarifies intended scope. It is not a derivation, and the later papers do not depend on treating this expression as a universal theorem. Their definitions and proofs carry the technical claims.</p>
      <p className="mt-4 leading-relaxed text-mute">Historical closure operators, a realization space denoted by the same Greek letter, and a source-signature object have distinct formal roles. The unspecified ground in the broader philosophical account receives no additional variable in this schema. Preserved early publications remain records of their own formulations; current results are read from their specific published editions.</p>
      <p className="mt-4 leading-relaxed text-mute">The Everything Equation therefore has a continuing place as the programme's originating closure schema. Source–readout theory develops the underlying problem through increasingly explicit objects, conditions, realizations and tests.</p>
    </section>

    <section id="reading" className="card-surface scroll-mt-24 p-6">
      <h2 className="text-2xl font-bold tracking-tight">Follow the development</h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-glow"><li><Link href="/source-readout#foundations">Read the seven mathematical foundations and physical witness →</Link></li><li><Link href="/source-readout#constructive">Read the constructive sources, readers and certification results →</Link></li><li><Link href="/sealed-or-leaky">Continue into hidden information and operational access →</Link></li><li><Link href="/monograph">Explore the wider source-to-readout architecture →</Link></li><li><Link href="/legacy/what-is-the-everything-equation">Consult the preserved historical Everything Equation page →</Link></li></ul>
    </section>
  </article>;
}
