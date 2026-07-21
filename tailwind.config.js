/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#c46a2d",
        "primary-dark": "#28e98c",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 5s linear infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "black",
      {
        winter: {
          primary: "#c46a2d",
          secondary: "#8f5d2e",
          accent: "#256d85",
          neutral: "#2f241a",
          "base-100": "#fff7ed",
          "base-200": "#f8ead8",
          "base-300": "#ead7bd",
          "base-content": "#2f241a",
          info: "#256d85",
          success: "#4f7f52",
          warning: "#b7791f",
          error: "#b42318",
        },
      },
    ],
  },
};
