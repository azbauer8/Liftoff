import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/system/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.1rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fafafa",
            foreground: "#11181C",
            primary: {
              DEFAULT: "#006FEE",
            },
            secondary: {
              DEFAULT: "#0E8AAA",
            },
          },
        },
        dark: {
          colors: {
            background: "#0d0d0f",
            foreground: "#ECEDEE",
            primary: {
              DEFAULT: "#006FEE",
            },
            secondary: {
              DEFAULT: "#09AACD",
            },
          },
        },
      },
    }),
  ],
}
