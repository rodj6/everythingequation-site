import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-faint">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        This readout has no realization
      </h1>
      <p className="mt-4 text-mute">
        The page you requested doesn't exist — or has been superseded. Try the paper
        index or the research map.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
        >
          Home
        </Link>
        <Link
          href="/papers"
          className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)]"
        >
          Papers
        </Link>
      </div>
    </div>
  );
}
