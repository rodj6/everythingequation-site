import { generateFeed } from '@/lib/registry';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://everythingequation.com';
  const xml = await generateFeed(baseUrl);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}