import { MdxWrapper } from '@/components/mdx-components';
export const dynamic = 'force-static';

export default async function WhatIsTheEverythingEquationPage() {
  let ManualComponent: React.ComponentType | null = null;

  try {
    const mod = await import(`../../../content/manual/pages/what-is-the-everything-equation.mdx`);
    ManualComponent = mod.default;
  } catch (err) {
    ManualComponent = null;
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      {ManualComponent ? (
        <MdxWrapper>
          <ManualComponent />
        </MdxWrapper>
      ) : (
        <>
          <h1>What is the Everything Equation?</h1>
          <p>Content coming soon.</p>
        </>
      )}
    </article>
  );
}
