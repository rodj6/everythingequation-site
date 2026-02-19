import { loadProblems, loadPapers } from "@/lib/registry";
import Card from "@/components/card";
import Link from "next/link";
import katex from "katex";

export const dynamic = "force-static";

/**
 * Home page: Introduces the Everything Equation platform and highlights
 * recently added problems and papers. Data is fetched at build time.
 */
export default async function HomePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const publicProblems = problems.filter((p) => p.status === "public");
  const publicPapers = papers.filter((p) => p.status === "public");
  const latestProblems = publicProblems.slice(0, 3);
  const latestPapers = publicPapers.slice(0, 3);

  const renderKatex = (tex: string, displayMode = true) => ({
    __html: katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
    }),
  });

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to the Everything Equation</h2>
        <p className="text-lg font-semibold mb-4 text-slate-600 dark:text-slate-400">
          And The Tier-0 Framework
        </p>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 dark:text-slate-300">
          A premium research platform curating open problems and scholarly articles, connecting ideas
          across disciplines.
        </p>
      </section>

      {/* Tier-0 gateway */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h3 className="text-2xl font-semibold mb-2">What is the Everything Equation?</h3>

          <div
            className="not-prose my-4"
            dangerouslySetInnerHTML={renderKatex(String.raw`\mathcal{L}=\Omega\Delta\partial(\mathcal{L})`, true)}
          />

          <p className="mb-4">
            The Everything Equation is a unifying structural principle proposed to govern physical law,
            mathematics, and information under a single closure condition.
          </p>

          <Link href="/what-is-the-everything-equation" className="inline-block text-blue-600 hover:underline">
            Learn more
          </Link>
        </div>
      </section>

      {/* Tier-1 dynamical realization */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h3 className="text-2xl font-semibold mb-2">Tier-1 Dynamical Realization</h3>

          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Tier-0 provides a closure/admissibility criterion. Tier-1 makes it concrete: a coupled Dirac–Λ
            operator system whose low-energy expansion recovers GR + Yang–Mills + fermions, while enforcing
            non-tunable admissibility constraints.
          </p>

          <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/20 p-4">
            <div className="space-y-4">
              <div
                dangerouslySetInnerHTML={renderKatex(
                  String.raw`S[g,A,\psi]=\mathrm{Tr}^\ast\!\big(f(D_E^2/\Lambda^2)\big)+\langle \psi, D_E\psi\rangle`,
                  true
                )}
              />
              <div
                dangerouslySetInnerHTML={renderKatex(
                  String.raw`S_{\Omega}(D_E;T)\le D_T(K)\quad \text{for}\quad T\in[T_{\mathrm{UV}},T_{\mathrm{IR}}]`,
                  true
                )}
              />
              <div
                dangerouslySetInnerHTML={renderKatex(
                  String.raw`S_{\Omega}(D_E;T_{\mathrm{UV}})=D_{T_{\mathrm{UV}}}(c_M K)\qquad\text{(UV anchor)}`,
                  true
                )}
              />
              <div
                dangerouslySetInnerHTML={renderKatex(
                  String.raw`\delta\!\left(S+\int_{T_{\mathrm{UV}}}^{T_{\mathrm{IR}}}\big(S_{\Omega}-D_T\big)\,d\mu\right)=0\qquad\text{(KKT stationarity)}`,
                  true
                )}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/tier-1" className="inline-block text-blue-600 hover:underline">
              View Tier-1 field equations
            </Link>
            <Link href="/problems/quantum-measurement" className="inline-block text-slate-700 dark:text-slate-300 hover:underline">
              See downstream physics problems
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Problems */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Problems</h3>
        {latestProblems.length === 0 ? (
          <p>No public problems have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestProblems.map((p) => (
              <Card key={p.id} href={`/problems/${p.id}`} title={p.title} description={p.claim} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Papers */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Papers</h3>
        {latestPapers.length === 0 ? (
          <p>No public papers have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestPapers.map((paper) => (
              <Card
                key={paper.id}
                href={`/papers/${paper.id}`}
                title={paper.metadata?.title ?? paper.role ?? paper.id}
                description={paper.metadata?.description?.substring(0, 120) || ""}
              />
            ))}
          </div>
        )}
      </section>

      {/* JSON-LD for the home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Everything Equation",
            url: "https://everythingequation.com",
            description: "A premium research platform curating open problems and scholarly articles.",
          }),
        }}
      />
    </div>
  );
}
