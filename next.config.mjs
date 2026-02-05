import withMDX from '@next/mdx';

/**
 * Next.js configuration for Everything Equation
 *
 * We enable the App Router (via the experimental `appDir` flag) and add
 * support for MDX files using the official `@next/mdx` plugin. This
 * configuration allows us to import `.md` and `.mdx` files directly as
 * React components. We also enable typed routes for improved type safety.
 */

const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);