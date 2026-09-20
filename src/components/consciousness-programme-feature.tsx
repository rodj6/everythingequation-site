import Link from "next/link";
import { consciousnessPublication as publication } from "@/config/consciousness";

/** Static homepage introduction; motion remains isolated to the programme entrance. */
export default function ConsciousnessProgrammeFeature() {
  return (
    <section aria-labelledby="consciousness-programme-heading" className="relative overflow-hidden rounded-2xl border border-[hsl(var(--accent)/0.32)] bg-[linear-gradient(125deg,hsl(var(--surface)),hsl(var(--violet)/0.10))] px-6 py-9 sm:px-10 sm:py-12">
      <div aria-hidden="true" className="glow-cyan pointer-events-none absolute -bottom-32 -left-16 h-72 w-80" />
      <div className="relative">
        <p className="section-label">Consciousness · SPC-2 · Version 2</p>
        <h2 id="consciousness-programme-heading" className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">From awareness to a lived world.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mute">What makes a physical organization a perspective? Shadow Theory and Consciousness develops an explicit account of who experiences, what a lived scene contains, and when a subject continues.</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["01 · A perspective", "Certified realization and native self-return determine which vessels qualify under A1."],
            ["02 · A lived scene", "A2 assigns the full endogenous predictive structure, keeping experience distinct from report or recall."],
            ["03 · A continuing subject", "A3 follows nonbranching process provenance, separating continuity from a copy of information."],
          ].map(([title, body]) => <li key={title} className="rounded-xl border border-edge bg-[hsl(var(--background)/0.35)] p-5"><h3 className="text-sm font-semibold text-glow">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{body}</p></li>)}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/consciousness" className="rounded-lg bg-[hsl(var(--accent))] px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[hsl(var(--accent-strong))]">Explore the consciousness model →</Link>
          <Link href={publication.webUrl} className="text-sm font-medium text-glow hover:text-glow-strong">Read the complete monograph →</Link>
          <Link href="/consciousness/guides" className="text-sm font-medium text-glow hover:text-glow-strong">Eight explanatory guides →</Link>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-faint">{publication.status} Realization selection and empirical assessment remain open obligations. {publication.versionNote}</p>
      </div>
    </section>
  );
}
