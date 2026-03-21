/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0eaff",
          500: "#4f6ef7",
          600: "#3b5bf5",
          700: "#2945e8",
          900: "#1a2fa0",
        },
        dark: {
          900: "#0d0f1a",
          800: "#131525",
          700: "#1a1d30",
          600: "#222540",
          500: "#2e3354",
        },
      },
      fontFamily: {
        display: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
