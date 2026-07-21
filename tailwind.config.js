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
        "primary-light": "#496e66",
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
          primary: "#496e66",
          secondary: "#5f7f78",
          accent: "#256d85",
          neutral: "#2d2a25",
          "base-100": "#f7f2e9",
          "base-200": "#eee6d8",
          "base-300": "#d9cebd",
          "base-content": "#2d2a25",
          info: "#256d85",
          success: "#4f7f52",
          warning: "#b7791f",
          error: "#b42318",
        },
      },
    ],
  },
};
