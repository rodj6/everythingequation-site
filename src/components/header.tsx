import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/problems', label: 'Problems' },
  { href: '/papers', label: 'Papers' },
  { href: '/monograph', label: 'Monograph' },
  { href: '/research-intelligence', label: 'Research Intelligence' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold"><Link href="/">Everything Equation</Link></h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  'text-sm font-medium ' +
                  (active
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400')
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}