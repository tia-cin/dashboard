module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://imgs.search.brave.com/uBsJ3R1Sccm6Sq8phMGGro2dpEzMRX_XePZSjGl2lrI/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdG9wbGlu/ZWZpbG0uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9Db3Jwb3Jh/dGVBbmltYXRpb24u/anBnP2ZpdD0xOTAw/JTJDOTUwJnNzbD0x/JnJlc2l6ZT0xNjAw/LDgwMCZxdWFsaXR5/PTgwOw')",
      },
    },
  },
  plugins: [],
};
