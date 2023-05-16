/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '64px',
      },
      spacing: {
        header: '64px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      backgroundColor: {
        main: 'var(--bg-main)',
        overlay: 'var(--overlay)',
      },
      backgroundImage: {
        rainbow: 'var(--bg-rainbow)',
      },
    },
  },
  plugins: [],
};
