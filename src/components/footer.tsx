export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Everything Equation. All rights reserved.
      </div>
    </footer>
  );
}