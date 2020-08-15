// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      Inter: ["Inter"],
      body: ['"Helvetica Neue"'],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
