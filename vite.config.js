/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 очень важно!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
