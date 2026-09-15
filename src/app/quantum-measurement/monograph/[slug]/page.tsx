import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuantumReader } from "@/components/quantum-reader";
import { quantumMonograph } from "@/config/quantum";
import { getQuantumDocument, listQuantumChapters } from "@/lib/quantum";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return listQuantumChapters().map(document => ({ slug: document.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const document = getQuantumDocument("monograph", slug);
  if (!document) return {};
  return {
    title: `${document.label ? `${document.label}: ` : ""}${document.title} · Quantum Measurement`,
    description: `${document.title}. Complete scientific text from ${quantumMonograph.shortTitle}, Version 2, ${quantumMonograph.dateLabel}. ${document.stats.theorems} statements and ${document.stats.proofs} proofs.`,
    alternates: { canonical: document.url },
    openGraph: { title: document.title, type: "article", url: document.url },
  };
}
export default async function QuantumMonographChapter({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const document = getQuantumDocument("monograph", slug);
  if (!document) notFound();
  return <QuantumReader document={document} />;
}
