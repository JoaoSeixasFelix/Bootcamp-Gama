module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      borderRadius: { "md-qr": "15%" },
      height: { "9/10": "90%", "1/10": "10%", "9.5":"95%" },
      colors:{Fig: "#71B455"},
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },

  plugins: [],
};
