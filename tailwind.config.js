// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default {
//   content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1E293B", // Dark Blue
//         secondary: "#38BDF8", // Sky Blue
//         accent: "#FACC15", // Yellow
//         textMain: "#E2E8F0", // Light Gray
//         bgDark: "#0F172A", // Very Dark Blue
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // Custom yellow
        dark: "#1a1a2e",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
