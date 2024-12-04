/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FEE7E7",
          500: "#F75252",
        },
        neutral: {
          100: "#DAE0E7",
          200: "#F3F5F7",
          300: "#677A8E",
          400: "#ACB8C3",
          500: "#31475E",
        },
      },
      objectPosition: {
        "middle-bottom": "0px -210px",
      },
    },
  },
  plugins: [],
};
