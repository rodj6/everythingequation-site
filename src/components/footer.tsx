import Link from "next/link";
import { navigation, footerLinks } from "@/config/navigation";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-edge">
      <div className="mx-auto w-full max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-fg">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-mute">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="section-label">Explore</p>
            <ul className="mt-3 space-y-2">
              {navigation
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-sm text-mute hover:text-fg">
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="Machine-readable endpoints">
            <p className="section-label">Machine-readable</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-mute hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-edge pt-6">
          <p className="text-xs leading-relaxed text-faint">
            © {new Date().getFullYear()} {site.author.name}. {site.name} is a public
            mathematical framework presented with explicit claim boundaries: it is not
            empirically validated physics, and no result here claims that one equation
            solves everything.
          </p>
        </div>
      </div>
    </footer>
  );
}
