module.exports = {
  content: ["./*/*.*"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#313742",
          50: "#4E586A",
          100: "#4B5465",
          200: "#454D5C",
          300: "#3E4654",
          400: "#383E4B",
          500: "#313742",
          600: "#2A3039",
          700: "#242830",
          800: "#1D2128",
          900: "#171A1F",
        },
        blue: {
          DEFAULT: "#366AC9",
          50: "#6C92D8",
          100: "#668ED6",
          200: "#5A85D3",
          300: "#4E7CCF",
          400: "#4273CC",
          500: "#366AC9",
          600: "#3364BD",
          700: "#305DB1",
          800: "#2C57A5",
          900: "#295199",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
