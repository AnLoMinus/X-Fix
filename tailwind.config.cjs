module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        'fix-blue': '#0f172a',
        'fix-light': '#f8fafc',
        'fix-accent': '#10b981',
        'fix-accent-hover': '#059669',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};