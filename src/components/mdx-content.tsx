/**
 * SERVER-SIDE MDX RENDERER
 *
 * Renders an MDX module (from a generated import map) on the server so the
 * content is present in the initial HTML — readable by crawlers and AI
 * systems without JavaScript.
 */
import { mdxComponents } from "@/components/mdx-components";

export default async function MdxContent({
  loader,
}: {
  loader?: () => Promise<any>;
}) {
  if (!loader) return null;
  let mod: any;
  try {
    mod = await loader();
  } catch {
    return null;
  }
  const Content = mod?.default ?? mod?.MDXContent ?? null;
  if (!Content) return null;
  return <Content components={mdxComponents} />;
}
