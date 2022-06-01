module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { borderRadius: { "md-qr": "15%" } },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },

  plugins: [],
};
