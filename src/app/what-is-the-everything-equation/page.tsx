import { MdxWrapper } from '@/components/mdx-components';

// Force Next.js to render this page as static at build time
export const dynamic = 'force-static';

// This page loads the MDX explainer for the Everything Equation and wraps it in the shared MDX wrapper.
// If the MDX is missing, it falls back to a simple placeholder message.
export default async function WhatIsTheEverythingEquationPage() {
  let ManualComponent: React.ComponentType | null = null;
  try {
    // Adjust the relative import to three parent directories so the MDX file is correctly resolved
    const mod = await import('../../../content/manual/pages/what-is-the-everything-equation.mdx');
    ManualComponent = mod.default;
  } catch (error) {
    // If the MDX cannot be loaded, leave ManualComponent null to trigger the fallback
    ManualComponent = null;
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-12 py-16">
      <h1 className="text-3xl font-bold">What is the Everything Equation?</h1>
      {ManualComponent ? (
        <MdxWrapper>
          {/* Render the MDX component */}
          <ManualComponent />
        </MdxWrapper>
      ) : (
        <div className="prose dark:prose-invert mt-8">
          <h2>Coming soon</h2>
          <p>Content coming soon.</p>
        </div>
      )}
    </div>
  );
}
