/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightstudy: {
          primary: "#2563EB",
          secondary: "#14B8A6",
          accent: "#F59E0B",
          neutral: "#1F2937",
          "base-100": "#F9FAFB",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937",
        },
      },
      {
        darkstudy: {
          primary: "#60A5FA",
          secondary: "#2DD4BF",
          accent: "#FBBF24",
          neutral: "#E5E7EB",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
          "base-300": "#334155",
          "base-content": "#E5E7EB",
        },
      },
    ],
    darkTheme: "darkstudy",
  },
};
