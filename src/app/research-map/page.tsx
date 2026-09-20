import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalPapers, loadProblems } from "@/lib/registry";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Research Map",
  description:
    "The Shadow Theory research map: source–readout mathematics, quantum measurement, SPC-2 consciousness, declared assumptions and open realization and validation obligations.",
  alternates: { canonical: "/research-map" },
};

const stageWord: Record<number, string> = {
  1: "Non-equivalence",
  2: "Target obstruction",
  3: "Minimal completion",
  4: "Geometric realization",
  5: "Projected dynamics",
  6: "Identifiability",
  7: "Physical witness",
};

/**
 * The real handoff structure, as the papers themselves state it. The sequence
 * reads in order, but the dependencies are not a single assembly line:
 * Papers 1–3 are the abstract completion core; Paper 4 realizes it
 * geometrically; Paper 5 is the (self-contained) dynamical layer; Paper 6
 * integrates 1–5 into the non-source projection theorem; Paper 7 instantiates the whole
 * architecture physically.
 */
const handoff: Record<number, string> = {
  1: "Hands the descent criterion to Paper 2 (answer maps) and Paper 3 (relation families); its equivariant obstruction returns in Paper 6's reconstruction corollary.",
  2: "Supplies the single-target completion and the flat-U(1) spectral rigidity input that Paper 3 generalizes to families of relations.",
  3: "Emits the canonical minimal completion that Paper 4 realizes geometrically; its target-relative minimality is the phenomenon Papers 5 and 6 meet again dynamically.",
  4: "Hands closure, retention, and memory to Paper 5; its orbit-space architecture is one of Paper 6's three standard specializations.",
  5: "Provides the closure criterion, exact memory equation, and minimal dynamical completion that Paper 6 restates as its projected-law dichotomy and Paper 7 instantiates in RS2.",
  6: "Proves the non-source projection theorem and states exactly what a physical model must supply: a source domain, an equivalence, a readout, a target, and a witness pair.",
  7: "Supplies that witness in RS2 gravity, derives linked physical residues, and proves exact operational equivalence for brane-only protocols.",
};

export default async function ResearchMapPage() {
  const canonical = await getCanonicalPapers();
  const problems = (await loadProblems()).filter(
    (p) => p.status === "public" && p.programme !== "legacy"
  );
  const featured = problems.filter((p) => p.programme === "featured");
  const additional = problems.filter((p) => p.programme === "additional");

  return (
    <div className="space-y-16">
      <header className="max-w-3xl">
        <p className="section-label">Research map</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          The shape of the programme
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          Seven canonical papers, read in order: six build the source–readout
          mathematics, and the seventh realizes it in a concrete physical model. A
          machine-readable version of this map is published at{" "}
          <a href="/graph.json" className="text-glow hover:text-glow-strong">
            /graph.json
          </a>
          .
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-faint">
          The dependencies are not a single assembly line. Papers 1–3 form the abstract
          completion core; Paper 4 realizes it geometrically; Paper 5 is the dynamical
          layer (deliberately self-contained); Paper 6 integrates everything into a
          non-source projection theorem; Paper 7 is the physical witness that theorem
          calls for.
        </p>
      </header>

      <section aria-labelledby="measurement-map-heading" className="card-surface p-6 sm:p-8">
        <p className="section-label">Published programme · September 2026</p>
        <h2 id="measurement-map-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Where quantum measurement enters</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-mute">The source–readout foundation identifies what a bounded description retains and what it loses. The measurement programme adds physical constitutions that specify event histories and material records. The relation to the foundation is conceptual; the interaction catalogue, guidance law and initial statistics are additional physical premises.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-edge">
          <table className="w-full min-w-[38rem] text-left text-sm leading-relaxed">
            <caption className="sr-only">Dependencies of the two quantum measurement constructions</caption>
            <thead className="bg-raised text-fg"><tr><th className="p-4">Construction</th><th className="p-4">Physical premises</th><th className="p-4">Proved connection</th></tr></thead>
            <tbody className="divide-y divide-edge text-mute">
              <tr><th className="p-4 align-top font-medium text-glow"><Link href="/quantum-measurement/pilot-medium">Pilot medium →</Link></th><td className="p-4 align-top">P1–P4 interaction catalogue; independent spatial-gas preparation; finite graph and horizon</td><td className="p-4 align-top">Bond currents → exported packets → gas contacts and recombination → controlled complete Bell-path limit → autonomous physical records</td></tr>
              <tr><th className="p-4 align-top font-medium text-vio"><Link href="/quantum-measurement/massive-configuration">Massive configuration →</Link></th><td className="p-4 align-top">Universal spinor inventory; kinetic-momentum guidance; complete initial equilibrium and finite independent ready stock</td><td className="p-4 align-top">Continuous configuration paths → trapped pointers and retained resources → autonomous finite programme → output and archive-history bounds</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-mute">Each row is an assumption-to-result chain inside its own constitution. Neither row derives the other's motion law. The TOE monograph remains a separate fixed publication; the integrated quantum monograph preserves the earlier detector and record results alongside both completions.</p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-glow"><Link href="/quantum-measurement">Programme and visual reading paths →</Link><Link href="/quantum-measurement/monograph">Complete technical monograph →</Link><Link href="/atlas?focus=measurement-programme">Locate the programme in the Atlas →</Link><Link href="/atlas/quantum-measurement">Read the Atlas field guide →</Link></div>
      </section>

      {/* Sequence */}
      <section aria-labelledby="consciousness-map-heading" className="card-surface p-6 sm:p-8">
        <p className="section-label">Consciousness · SPC-2 · Version 2</p>
        <h2 id="consciousness-map-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">From a certified vessel to a perspective</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-mute">The source–readout foundation and physical constitutions are antecedents. SPC-2 adds its own psychophysical premises; the awareness-aspect commitment is not derived from physics. Certified realization includes a declared selection doctrine before the constitutive laws apply.</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["A0 · Awareness", "An ontological aspect commitment, distinct from a localized subject or an additional force."],
            ["A1 · Admission", "Qualifying native organization with executable return and predictive conditions."],
            ["A2 · Content", "Full endogenous predictive structure across all admitted finite native continuations."],
            ["A3 · Continuation", "Nonbranching process provenance, with a genuine qualification gap ending the episode."],
          ].map(([title, body]) => <li key={title} className="rounded-xl border border-edge p-4"><h3 className="font-semibold text-glow">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{body}</p></li>)}
        </ol>
        <p className="mt-5 text-sm leading-relaxed text-mute">The finite completion theorem is conditional on these inputs. Realization selection, neural applications and empirical assessment retain their open status. The earlier Consciousness Field account is superseded; its claim inventory is not merged into SPC-2.</p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-glow"><Link href="/consciousness">The complete model →</Link><Link href="/consciousness/monograph">Monograph and formal dependencies →</Link><Link href="/problems/consciousness">Research status →</Link></div>
      </section>

      <section aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading" className="text-2xl font-bold tracking-tight">
          The canonical sequence
        </h2>
        <ol className="relative mt-8 space-y-0 border-l border-edge-strong pl-6 sm:pl-8">
          {canonical.map((p, i) => {
            const n = p.number ?? i + 1;
            const isWitness = n === 7;
            return (
              <li key={p.slug} className="research-node relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className={
                    "absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-[39px] " +
                    (isWitness
                      ? "border-[hsl(var(--green)/0.6)] bg-[hsl(var(--green)/0.15)]"
                      : "border-[hsl(var(--accent)/0.6)] bg-[hsl(var(--accent)/0.12)]")
                  }
                >
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (isWitness ? "bg-[hsl(var(--green))]" : "bg-[hsl(var(--accent))]")
                    }
                  />
                </span>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-vio">
                  {isWitness ? "Witness layer" : `Stage ${n}`} · {stageWord[n]}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug">
                  <Link href={`/papers/${p.slug}`} className="hover:text-glow-strong">
                    {p.displayTitle}
                  </Link>
                </h3>
                {p.role ? (
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mute">{p.role}</p>
                ) : null}
                <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-faint">
                  {handoff[n]}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Branches */}
      <section aria-labelledby="branches-heading">
        <h2 id="branches-heading" className="text-2xl font-bold tracking-tight">
          Branch results and open targets
        </h2>
        <p className="mt-2 max-w-3xl text-mute">
          Open problems attach downstream of the seven-paper foundation as branch
          targets. Each identifies a concrete question and the assumptions, method,
          support, and result a dedicated public record must establish.
        </p>

        <div className="card-surface mt-8 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-greenc">
            The seven-paper foundation
          </p>
          <div aria-hidden="true" className="my-4 ml-3 h-6 w-px bg-edge-strong" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/problems/${p.slug}`}
                className="rounded-lg border border-[hsl(var(--amber)/0.3)] bg-[hsl(var(--amber)/0.05)] px-4 py-3 text-sm font-medium text-fg transition hover:border-[hsl(var(--amber)/0.6)]"
              >
                {p.title}
                <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                  {p.maturity === "constitutive-results" ? "published constitutive results" : "branch target · open"}
                </span>
              </Link>
            ))}
          </div>
          {additional.length > 0 ? (
            <>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Further targets
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {additional.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/problems/${p.slug}`}
                      className="inline-block rounded-full border border-edge px-3 py-1 text-xs text-mute transition hover:border-edge-strong hover:text-fg"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      {/* Historical layer */}
      <section aria-labelledby="history-heading" className="max-w-3xl">
        <h2 id="history-heading" className="text-2xl font-bold tracking-tight">
          Beneath the map: superseded and historical layers
        </h2>
        <p className="mt-3 leading-relaxed text-mute">
          The current seven-paper sequence (July 2026) replaced an earlier six-paper
          canonical stack (June 2026), whose records remain published and are listed in
          the{" "}
          <Link href="/papers" className="text-glow hover:text-glow-strong">
            paper index
          </Link>{" "}
          as superseded canonical versions. Beneath both lies the original Everything
          Equation archive, retained as historical background. Where any superseded or
          historical material conflicts with Papers 1–7, the current canonical sequence
          controls.
        </p>
      </section>
    </div>
  );
}
