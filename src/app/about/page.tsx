/**
 * About page. Explains the mission behind Everything Equation and
 * introduces the team behind it. This is a static page that can be
 * customised freely without affecting the generated content.
 */
export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>About Everything Equation</h2>
      <p>
        Everything Equation is an independent initiative to map the space
        of open problems and key research articles across science and
        engineering. Our goal is to provide a premium, curated platform
        where researchers can discover connections between ideas, follow
        the evolution of hypotheses, and contribute their own insights.
      </p>
      <p>
        The platform is built using Next.js, TypeScript, MDX and
        Tailwind CSS with a focus on speed, accessibility and longevity.
        All content is driven from simple YAML registries and manual
        MDX blocks, ensuring transparency and reproducibility.
      </p>
      <p>
        Questions or feedback? Feel free to reach out to our team at{' '}
        <a href="mailto:info@everythingequation.com">info@everythingequation.com</a>.
      </p>
    </div>
  );
}