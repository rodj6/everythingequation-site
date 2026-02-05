import { generateSitemap } from '@/lib/registry';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://everythingequation.com';
  const xml = await generateSitemap(baseUrl);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}