import createMDX from "@next/mdx";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remark-frontmatter strips YAML frontmatter blocks from rendered MDX.
    // Frontmatter metadata itself is parsed by scripts/generate-content-maps.mjs.
    // remark-gfm enables pipe tables (used heavily by the monograph web edition).
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  outputFileTracingRoot: projectRoot,

  // Legacy routes from the Everything Equation era. Old URLs keep working
  // but land on the current Shadow Theory pages.
  async redirects() {
    return [
      { source: "/research", destination: "/research-map", permanent: true },
      { source: "/research-intelligence", destination: "/research-map", permanent: true },
      { source: "/tier-1", destination: "/legacy/tier-1", permanent: false },
      // NOTE: /monograph now serves the Version 1.0 TOE monograph web edition.
      // The historical Everything Equation era monograph page remains at
      // /legacy/monograph.
      {
        source: "/what-is-the-everything-equation",
        destination: "/legacy/what-is-the-everything-equation",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
