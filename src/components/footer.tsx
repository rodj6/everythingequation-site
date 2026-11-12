import Link from "next/link";
import { footerLinks, groupedNavigation } from "@/config/navigation";
import { site } from "@/config/site";

const groups = groupedNavigation();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-lead">
          <p className="site-footer-name">{site.name}</p>
          <p className="site-footer-tagline">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="site-footer-nav">
          {groups.map((group) => (
            <div key={group.id}>
              <p className="section-label">{group.label}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav aria-label="Machine-readable endpoints" className="site-footer-machine">
          <p className="section-label">Machine-readable</p>
          <ul>
            {footerLinks.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer-colophon">
          © {new Date().getFullYear()} {site.author.name}. {site.name} publishes a
          seven-paper mathematical foundation, an RS2 physical witness, complete
          TOE, quantum measurement and SPC-2 consciousness web editions, and research results with explicit domains.
        </p>
      </div>
    </footer>
  );
}
