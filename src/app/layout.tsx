import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Everything Equation",
  description: "A curated platform for research problems and papers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased">
        {/* Subtle background accents */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.06),transparent)]" />
          <div className="absolute -top-[30%] -right-[20%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.04),transparent)]" />
        </div>

        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 mx-auto w-full max-w-3xl px-6 sm:px-8 py-12 sm:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
