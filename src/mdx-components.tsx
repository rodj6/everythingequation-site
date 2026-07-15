/**
 * NEXT.JS MDX CONVENTION FILE: do not move or rename.
 *
 * Next.js App Router looks for this file (src/mdx-components.tsx) to supply
 * components to every compiled MDX file. It wires in the Shadow Theory
 * component library (headings, math environments, StatusCard, ResultScope,
 * EquationPanel, ...) so MDX renders on the server as crawlable HTML.
 *
 * To change how MDX elements look, edit src/components/mdx-components.tsx.
 */
import { mdxComponents } from "@/components/mdx-components";

export function useMDXComponents(components: Record<string, any>) {
  return { ...mdxComponents, ...components };
}
