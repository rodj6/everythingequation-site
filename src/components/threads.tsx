"use client";

/**
 * "Keep exploring": shown at the foot of every page except the homepage and
 * the Atlas (which have their own ways in). It offers the question threads
 * that belong with the page, and the visitor's own trail: the last few pages
 * they read on this device, so an interesting place is easy to return to.
 *
 * The trail is kept in the browser only (localStorage). Nothing is sent
 * anywhere, and the band works without it.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { threadsNear, type Thread } from "@/data/threads";

interface TrailStop { path: string; title: string }
const TRAIL_KEY = "shadow-theory:trail:v1";
const TRAIL_LENGTH = 7;

function readTrail(): TrailStop[] {
  try {
    const stored = JSON.parse(window.localStorage.getItem(TRAIL_KEY) ?? "[]");
    return Array.isArray(stored) ? stored.filter((stop) => typeof stop?.path === "string" && typeof stop?.title === "string").slice(0, TRAIL_LENGTH) : [];
  } catch {
    return [];
  }
}

export function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <article className="thread-card">
      <h3>{thread.question}</h3>
      <p>{thread.teaser}</p>
      <ol>
        <li><span>See</span><Link href={thread.see.href} prefetch={false}>{thread.see.label}</Link></li>
        <li><span>Understand</span><Link href={thread.explain.href} prefetch={false}>{thread.explain.label}</Link></li>
        <li><span>Check</span><Link href={thread.prove.href} prefetch={false}>{thread.prove.label}</Link></li>
      </ol>
    </article>
  );
}

export default function KeepExploring() {
  const pathname = usePathname() ?? "/";
  const [trail, setTrail] = useState<TrailStop[]>([]);

  useEffect(() => {
    // Record this page at the head of the trail, once its title is known.
    const timer = window.setTimeout(() => {
      const title = pathname === "/" ? "Homepage" : document.title.replace(/\s*[|·–-]\s*Shadow Theory.*$/i, "").trim() || "Shadow Theory";
      const before = readTrail().filter((stop) => stop.path !== pathname);
      setTrail(before.slice(0, TRAIL_LENGTH - 1));
      try {
        window.localStorage.setItem(TRAIL_KEY, JSON.stringify([{ path: pathname, title }, ...before].slice(0, TRAIL_LENGTH)));
      } catch { /* private browsing: the trail is simply not kept */ }
    }, 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (pathname === "/" || pathname === "/atlas") return null;
  const near = threadsNear(pathname, 3);

  return (
    <aside className="keep-exploring" aria-labelledby="keep-exploring-heading">
      <div className="keep-exploring-inner">
        <p className="section-label" id="keep-exploring-heading">Keep exploring</p>
        <div className="thread-grid">
          {near.map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
        </div>
        {trail.length ? (
          <nav className="trail" aria-label="Pages you read recently">
            <p className="section-label">Your trail</p>
            <ol>
              {trail.slice(0, 5).map((stop) => (
                <li key={stop.path}><Link href={stop.path} prefetch={false}>{stop.title}</Link></li>
              ))}
            </ol>
          </nav>
        ) : null}
      </div>
    </aside>
  );
}
