/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        me: 'url(\'/images/me.jpg\')',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
