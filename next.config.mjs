import withMDX from '@next/mdx';

const nextConfig = {
  typedRoutes: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
