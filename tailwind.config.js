/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        slate: {
          1: "transparent",
          2: "rgba(213, 254, 255, 0.026)",
          3: "rgba(214, 251, 252, 0.057)",
          4: "rgba(226, 240, 253, 0.083)",
          5: "rgba(223, 243, 253, 0.109)",
          6: "rgba(223, 239, 254, 0.139)",
          7: "rgba(224, 243, 255, 0.182)",
          8: "rgba(229, 242, 254, 0.265)",
          10: "rgba(231, 243, 255, 0.472)",
          11: "rgba(239, 247, 255, 0.615)",
          12: "rgba(253, 254, 255, 0.927)",
        },
      },
    },
  },
  plugins: [],
};
