const { Nunito } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#163A34",
        "neutral-600": "#395852",
        "neutral-300": "#D0DCD9",
        "neutral-200": "#E0E6E3",
        "neutral-100": "#F6F5F1",
        "neutral-0": "#ffffff",
        "orange-500": "#fe9f6b",
        "teal-500": "#49AC9B",
        "indigo-500": "#697DDB",
      },
      borderRadius: {
        "radius-0": "0px",
        "radius-4": "4px",
        "radius-6": "6px",
        "radius-8": "8px",
        "radius-10": "10px",
        "radius-12": "12px",
        "radius-16": "16px",
        "radius-20": "20px",
        "radius-24": "24px",
        "radius-full": "999px",
      },
      spacing: {
        60: "60px",
        20: "20px",
        40: "40px",
        "100%": "100%",
        102: "102px",
        36: "36px",
        16: "16px",
        10: "10px",
      },
      fontSize: {
        1: "71px",
        7: "18px",
        5: "20px",
      },
      lineHeight: {
        110: "110%",
        150: "150%",
        140: "140%",
      },
      letterSpacing: {
        "-2": "-2px",
        "-0.3": "-0.3px",
        "-0.5": "-0.5px",
      },
      fontFamily: {
        "nunito-semibold": ['"nunito-semibold", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
