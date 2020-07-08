module.exports = {
  purge: ["./web/index.html"],
  theme: {
    colors: {
      black: "#000",
      blue: {
        500: "#42a7ff",
      },
      gray: {
        200: "#aaa",
        700: "#36393e",
        750: "#2e3136",
        800: "#1e2125",
        900: "#18171b",
      },
      silver: {
        500: "#c0c0c0",
      },
      white: "#fff",
    },
    fontFamily: {
      serif: ["Lucida Grande"],
      georgia: ["Georgia"],
    },
    extend: {},
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
