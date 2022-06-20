module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      yellow: "#fefce8",
      yellow1: "#fef08a",
      orange: "#fff7ed",
      orange1: "#fed7aa",
      grey: "#e5e7eb",
    },
    extend: {
      height: {
        650: "650px",
      },
    },
  },
  plugins: [],
};
