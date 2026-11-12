"use client";

/**
 * SITE HEADER: desktop nav + accessible mobile menu.
 * Navigation items come from src/config/navigation.ts (edit there, not here).
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { groupedNavigation } from "@/config/navigation";
import { site } from "@/config/site";

const groups = groupedNavigation();

/** The site mark: a source, and the two readouts it casts. */
function Glyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="9.5" y="9.5" width="14" height="14" rx="3" stroke="hsl(var(--brass))" strokeWidth="1.25" opacity="0.5" />
      <rect x="6" y="6" width="14" height="14" rx="3" stroke="hsl(var(--brass))" strokeWidth="1.25" opacity="0.85" />
      <rect x="2.5" y="2.5" width="14" height="14" rx="3" fill="hsl(var(--surface-raised))" stroke="hsl(var(--foreground))" strokeWidth="1.25" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 80em)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousPaddingRight = root.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <Link href="/" aria-label={`${site.name} homepage`} className="site-brand">
          <Glyph />
          <span>{site.name}</span>
        </Link>

        {/* Desktop navigation: one row, grouped by a hairline. */}
        <nav aria-label="Primary" className="site-nav">
          <ul>
            {groups.map((group, groupIndex) => (
              <Fragment key={group.id}>
                {groupIndex > 0 ? <li aria-hidden="true" className="site-nav-rule" /> : null}
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="site-menu-toggle"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      <noscript>
        <style>{".site-menu-toggle { display: none !important; }"}</style>
        <details className="site-menu-fallback border-t border-edge bg-surface px-4 py-3">
          <summary className="cursor-pointer text-sm font-medium text-fg">Browse the site</summary>
          <nav aria-label="Primary without JavaScript" className="mt-3">
            <ul className="grid grid-cols-2 gap-1">
              {groups.flatMap((group) => group.items).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-md px-2 py-3 text-sm text-fg hover:bg-raised">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </noscript>

      {/* Mobile menu panel: the same tabs, under their headings, each with a one-line hint. */}
      {open && (
        <nav id="mobile-menu" aria-label="Primary mobile" className="site-menu">
          <div className="site-menu-inner">
            {groups.map((group) => (
              <section key={group.id} aria-labelledby={`menu-${group.id}`}>
                <h2 id={`menu-${group.id}`} className="section-label">{group.label}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        <strong>{item.label}</strong>
                        {item.description ? <span>{item.description}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
