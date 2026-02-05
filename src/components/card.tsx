import { ReactNode } from 'react';
import Link from 'next/link';

export interface CardProps {
  href?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/**
 * A simple card component used on listing pages to link to problems and
 * papers. When `href` is provided the card is rendered as a link.
 */
export default function Card({ href, title, description, children }: CardProps) {
  const classes =
    'rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:shadow-md transition-shadow bg-white dark:bg-slate-800';
  if (href) {
    return (
      <Link href={href} className={classes} prefetch={false}>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {description && <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>}
        {children}
      </Link>
    );
  }
  return (
    <div className={classes}>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>}
      {children}
    </div>
  );
}