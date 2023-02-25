/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "soft-red": "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
        "soft-orange": "hsl(35,77%,62%)",
      },
    },
  },
  plugins: [],
};
