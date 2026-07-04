import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remark-frontmatter strips YAML frontmatter blocks from rendered MDX.
    // Frontmatter metadata itself is parsed by scripts/generate-content-maps.mjs.
    remarkPlugins: [remarkFrontmatter, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // Legacy routes from the Everything Equation era. Old URLs keep working
  // but land on the current Shadow Theory pages.
  async redirects() {
    return [
      { source: "/research", destination: "/research-map", permanent: true },
      { source: "/research-intelligence", destination: "/research-map", permanent: true },
      { source: "/tier-1", destination: "/legacy/tier-1", permanent: false },
      { source: "/monograph", destination: "/legacy/monograph", permanent: false },
      {
        source: "/what-is-the-everything-equation",
        destination: "/legacy/what-is-the-everything-equation",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
