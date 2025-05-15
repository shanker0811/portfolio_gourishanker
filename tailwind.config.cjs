// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'bitBrown': "#6e7176",
        'backgroundPrimary': "#d3d3d3" // or use 'lightgray' (CSS valid color)
      }
    },
  },
  plugins: [],
};
