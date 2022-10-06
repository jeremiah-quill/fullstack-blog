/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {},
      gridTemplateColumns: {
        // Simple autofit equal columns grid
        auto: "repeat(autofit, minmax(250px, 1fr))",

        // Complex site-specific column configuration
        // footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
