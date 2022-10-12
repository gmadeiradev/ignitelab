/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
      colors: {
        "gray-900": "#121214",
        "gray-900": "#202024",
        "gray-900": "#7c7c8a",
        "gray-900": "#c4c4cc",
        "gray-900": "#e1e1e6",

        "cyan-500": "#81d8f7",
        "cyan-300": "#9BE1FB",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
