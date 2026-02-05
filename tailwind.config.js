/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#0d67b5',
              '&:hover': {
                color: '#094c80',
              },
            },
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600' },
            h3: { fontWeight: '600' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};