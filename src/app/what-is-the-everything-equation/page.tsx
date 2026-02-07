import { mdxComponents } from '@/components/mdx-components';

export const dynamic = 'force-static';

// This page loads the MDX explainer for the Everything Equation and wraps it with our MDX components.
// If the MDX cannot be loaded at build time, it renders a descriptive error instead of a placeholder.

export default async function WhatIsTheEverythingEquationPage() {
  let ManualComponent: React.ComponentType | null = null;
  let error: any = null;

     const mod = await import('../../../content/manual/pages/what-is-the-everything-equation.mdx');
    ManualComponent = mod.dfault; 
  } catch (err) {
    error = err;
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-12 py-16">
      <h1 className="text-3xl font-bold">What is the Everything Equation?</h1>
      {ManualComponent ? (
        <>
          {/* Render the MDX component */}
          <ManualComponent components={mdxComponents} />
        </>
      ) : (
        <div className="prose dark:prose-invert mt-8">
          <h2>Error loading article</h2>
          <p>
            The Everything Equation article could not be loaded.
            {error ? ` ${error.message}` : ''}
          </p>
        </div>
      )}
    </div>
  );
}
