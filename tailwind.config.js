
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        light: '#f8fafc'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero': 'linear-gradient(135deg, #0f172a 0%, #14b8a6 100%)'
      }
    }
  },
  plugins: []
};
