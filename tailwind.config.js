/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-start": "#0a84ff",
        "custom-blue-end": "#46a9ff",
        "custom-vanilla": "#f9f8f6",
        customBlue: "#001526",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, hsla(194, 97%, 29%, 1) 0%, hsla(207, 100%, 10%, 1) 100%, hsla(263, 58%, 45%, 1) 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
