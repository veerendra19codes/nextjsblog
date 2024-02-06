/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgDark" : "#0d0c22",
        "bgSoft": "#2d2b42",
        "textSoft": "e5e5e5",
        "btnColor": "#3673fd",
      },
    },
  },
  plugins: [],
};
