import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
<<<<<<< HEAD
import remarkGfm from "remark-gfm";
=======
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remark-frontmatter strips YAML frontmatter blocks from rendered MDX.
    // Frontmatter metadata itself is parsed by scripts/generate-content-maps.mjs.
<<<<<<< HEAD
    // remark-gfm enables pipe tables (used heavily by the monograph web edition).
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
=======
    remarkPlugins: [remarkFrontmatter, remarkMath],
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
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
<<<<<<< HEAD
      // NOTE: /monograph now serves the Version 1.0 TOE monograph web edition.
      // The historical Everything Equation era monograph page remains at
      // /legacy/monograph.
=======
      { source: "/monograph", destination: "/legacy/monograph", permanent: false },
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
      {
        source: "/what-is-the-everything-equation",
        destination: "/legacy/what-is-the-everything-equation",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
