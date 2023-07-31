/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '767px',
      // => @media (min-width: 767px) { ... }
      'laptop-small': '1000px',
      // => @media (min-width: 1000px) { ... }
      'laptop': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        'primary-green-bold': '#53B89D',
        'primary-green': '#5DC2A7',
        'primary-orange-bold': '#DD8024',
        'primary-orange': '#EB9138;',
        'primary-blue': "#0062DA",
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
