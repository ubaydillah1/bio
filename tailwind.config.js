/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#007aff",
        "primary-dark": "rgb(40, 233, 140)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["black", "winter"] },
};
