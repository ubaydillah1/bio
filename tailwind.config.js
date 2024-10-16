/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#007aff",
        "primary-dark": "#28e98c",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["black", "winter"] },
};
