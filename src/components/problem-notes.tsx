"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import { manualProblems } from "@/generated/manualProblems";

export default function ProblemNotes({ slug }: { slug: string }) {
  const [Component, setComponent] = React.useState<React.ComponentType<any> | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const loader = (manualProblems as Record<string, (() => Promise<any>) | undefined>)[slug];
        if (!loader) return;

        const mod = await loader();
        const C = (mod?.default ?? mod?.MDXContent ?? null) as React.ComponentType<any> | null;

        if (!cancelled) setComponent(() => C);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? String(e));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error) {
    return (
      <div className="mt-6 rounded border border-red-300 bg-red-50 p-4 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100">
        <strong>Manual MDX import failed:</strong> {error}
      </div>
    );
  }

  if (!Component) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">Notes</h2>
      <div className="prose dark:prose-invert max-w-none">
        <Component components={mdxComponents} />
      </div>
    </section>
  );
}
