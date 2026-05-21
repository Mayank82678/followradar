/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce8ff',
          200: '#b8d4ff',
          300: '#8bb8ff',
          400: '#5d95ff',
          500: '#3469ff',
          600: '#2e54e6',
          700: '#2944bf',
          800: '#253b91',
          900: '#21336f',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.16)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 30%)',
        'section-glow': 'radial-gradient(circle at 20% 10%, rgba(59,130,246,0.28), transparent 28%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.24), transparent 24%)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
