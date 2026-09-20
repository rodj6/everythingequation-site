import type { Metadata } from "next";
import Link from "next/link";
import { mdxComponents } from "@/components/mdx-components";
import { isValidElement, type ComponentProps, type ReactNode } from "react";
import { manualProblems } from "@/generated/manualProblems";
import { consciousnessPublication as publication } from "@/config/consciousness";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Consciousness Field — superseded historical notes",
  description: "Preserved notes for the earlier Consciousness Field account, superseded by Shadow Theory and Consciousness, SPC-2, Version 2.",
  alternates: { canonical: "/legacy/consciousness-field-theorem" },
  robots: { index: false, follow: true },
};

function textContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textContent).join("");
  return isValidElement<{ children?: ReactNode }>(node) ? textContent(node.props.children) : "";
}
function headingAnchor(node: ReactNode) {
  return textContent(node).toLowerCase().replace(/[–—]/g, "-").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}
function HistoricalHeading(props: ComponentProps<"h2">) {
  return <h2 {...props} id={props.id || headingAnchor(props.children)} className="mt-10 scroll-mt-24 border-b border-edge pb-2 text-2xl font-semibold" />;
}
function HistoricalSubheading(props: ComponentProps<"h3">) {
  return <h3 {...props} id={props.id || headingAnchor(props.children)} className="mt-8 scroll-mt-24 text-xl font-semibold" />;
}

export default async function ConsciousnessHistoryPage() {
  const { default: Content } = await manualProblems["consciousness-field-theorem"]();
  return <article className="mx-auto max-w-3xl">
    <header><p className="section-label">Publication history · superseded</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The earlier Consciousness Field account</h1></header>
    <aside className="my-8 rounded-xl border border-[hsl(var(--amber)/0.4)] bg-[hsl(var(--amber)/0.08)] p-6 text-sm leading-relaxed text-fg/90">
      <p className="font-semibold">{publication.versionNote}</p>
      <p className="mt-3">The original notes below are preserved with their section anchors. Their fixed-point and EEG claims belong to that earlier account; they are not evidence or results of SPC-2. The current monograph reports no new neural-data validation.</p>
      <div className="mt-4 flex flex-wrap gap-4 text-glow"><Link href="/consciousness">Current consciousness programme →</Link><Link href="/papers/zenodo-19324253">Historical publication record →</Link></div>
    </aside>
    <Content components={{ ...mdxComponents, h2: HistoricalHeading, h3: HistoricalSubheading }} />
  </article>;
}
