module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C60048",
          200: "#990D81",
          300: "#990D81",
        },
        tgray: {
          100: "#FAFAFA",
          200: "#D6D7E3",
          300: "#767676",
          400: "#AAAAAA",
          500: "#BDBDBD",
          600: "#8392AB",
          700: "#B9B9B9",
        },
        tdark: {
          100: "#171717",
          200: "#141414",
        },
        tblue: {
          100: "#2F49D1",
          200: "#509FEF",
        },
        tyellow: {
          100: "#FFB648",
        },
        tpurple: {
          100: "#5F2EEA",
        },
        tgreen: {
          100: "#4BDE97",
        },
      },
      boxShadow: {
        "card-shadow": "0px 0px 25px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
