/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
