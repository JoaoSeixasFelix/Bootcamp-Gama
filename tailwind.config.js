module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      borderRadius: { "md-qr": "15%" },
      height: { "8/10":"80%", "9/10": "90%", "1/10": "10%", "9.5":"95%", "9.7":"97%", "0.5":"5%" },
      colors:{Fig: "#71B455"},
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },

  plugins: [],
};
