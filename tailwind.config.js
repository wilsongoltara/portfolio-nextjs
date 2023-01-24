/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/infra/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        me: 'url(\'/assets/me.jpg\')',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
