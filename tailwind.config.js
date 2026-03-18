/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{tsx,ts,jsx,js}',
    '!./node_modules/**',
    '!./dist/**',
    '!./next/**',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9A77C',
        secondary: '#F4EBE2',
        accent: '#D4AF37',
        background: '#FFFFFF',
        surface: '#FCFBFA',
        dark: '#121212',
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
      },
    },
  },
  plugins: [],
};
