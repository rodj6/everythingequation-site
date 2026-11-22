import Link from "next/link";
import { rhChapters, rhChapterUrl, type RhChapter } from "@/lib/riemann-hypothesis";

function RhContentsLink({ chapter, active }: { chapter: RhChapter; active?: string }) {
  return (
    <Link href={rhChapterUrl(chapter.slug)} prefetch={false} aria-current={chapter.slug === active ? "page" : undefined}>
      {chapter.number && <span className="rh-number">{chapter.number} </span>}
      {chapter.title}
    </Link>
  );
}

export default function RhContents({ active }: { active?: string }) {
  const current = rhChapters.find(chapter => chapter.slug === active);
  const currentSection = current?.number.split(".")[0];
  return (
    <ol className="rh-contents">
      {rhChapters.filter(chapter => chapter.level <= 1).map(chapter => {
        const children = chapter.number
          ? rhChapters.filter(item => item.number.startsWith(chapter.number + "."))
          : [];
        return (
          <li key={chapter.slug}>
            <RhContentsLink chapter={chapter} active={active} />
            {children.length > 0 && (
              <details open={currentSection === chapter.number}>
                <summary>Subsections</summary>
                <ol>
                  {children.map(child => (
                    <li className={child.level === 3 ? "rh-subsection" : undefined} key={child.slug}>
                      <RhContentsLink chapter={child} active={active} />
                    </li>
                  ))}
                </ol>
              </details>
            )}
          </li>
        );
      })}
    </ol>
  );
}
