import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Everything Equation',
  description: 'A curated platform for research problems and papers.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}