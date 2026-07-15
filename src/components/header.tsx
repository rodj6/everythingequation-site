"use client";

/**
 * SITE HEADER: desktop nav + accessible mobile menu.
 * Navigation items come from src/config/navigation.ts (edit there, not here).
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

function Glyph() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* layered "shadow projection" mark */}
      <rect x="9" y="9" width="14" height="14" rx="3" className="fill-none stroke-[hsl(var(--violet))]" strokeWidth="1.5" opacity="0.55" />
      <rect x="5.5" y="5.5" width="14" height="14" rx="3" className="fill-none stroke-[hsl(var(--accent))]" strokeWidth="1.5" opacity="0.8" />
      <rect x="2" y="2" width="14" height="14" rx="3" className="fill-[hsl(var(--surface-raised))] stroke-[hsl(var(--foreground))]" strokeWidth="1.5" />
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
    const desktop = window.matchMedia("(min-width: 1280px)");
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
    <header className="sticky top-0 z-50 border-b border-edge bg-[hsl(var(--background)/0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} homepage`}
          className="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight text-fg"
        >
          <Glyph />
          <span className="truncate text-[1.05rem]">{site.name}</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    "rounded-md px-3 py-2 text-sm transition-colors " +
                    (isActive(item.href)
                      ? "text-glow-strong bg-[hsl(var(--accent)/0.08)]"
                      : "text-mute hover:text-fg hover:bg-[hsl(var(--surface-raised))]")
                  }
                >
                  {item.label}
                </Link>
              </li>
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
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-edge text-fg transition-colors hover:bg-[hsl(var(--surface-raised))] xl:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-edge bg-[hsl(var(--background)/0.98)] shadow-2xl xl:hidden"
        >
          <ul className="mx-auto max-w-content space-y-1 px-4 py-3 sm:px-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    "block rounded-lg px-4 py-3 text-base " +
                    (isActive(item.href)
                      ? "bg-[hsl(var(--accent)/0.1)] text-glow-strong"
                      : "text-fg hover:bg-[hsl(var(--surface-raised))]")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
