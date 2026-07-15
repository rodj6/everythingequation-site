/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--background))',
        surface: 'hsl(var(--surface))',
        raised: 'hsl(var(--surface-raised))',
        edge: 'hsl(var(--border))',
        'edge-strong': 'hsl(var(--border-strong))',
        fg: 'hsl(var(--foreground))',
        mute: 'hsl(var(--muted-foreground))',
        faint: 'hsl(var(--faint-foreground))',
        glow: 'hsl(var(--accent))',
        'glow-strong': 'hsl(var(--accent-strong))',
        vio: 'hsl(var(--violet))',
        amberc: 'hsl(var(--amber))',
        greenc: 'hsl(var(--green))',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground) / 0.9)',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--accent))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-bullets': 'hsl(var(--muted-foreground))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--muted-foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--accent) / 0.5)',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--surface))',
            '--tw-prose-pre-code': 'hsl(var(--foreground) / 0.9)',
            '--tw-prose-th-borders': 'hsl(var(--border-strong))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
