/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        branding: ['"Josefin Sans"', 'sans-serif'],
        heading: ['"DM Serif Display"', 'serif']
      },
      colors: {
        kiwi: {
          100: "#6D886D",
          150: "#113B22",
          200: "#195736",
          600: "#001F09",
          700: "#0D2618",
          900: "#001304"
        }
      }
    },
  },
  plugins: [],
}

