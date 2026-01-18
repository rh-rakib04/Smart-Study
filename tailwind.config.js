/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
  themes: [
    {
      light: {
        "primary": "#4F46E5",      // Indigo
        "secondary": "#06B6D4",    // Cyan
        "accent": "#F59E0B",       // Amber
        "neutral": "#1E293B",      // Slate 800
        "base-100": "#FFFFFF",     // Pure White
        "base-200": "#F8FAFC",     // Very light slate
        "base-300": "#F1F5F9",     // Light slate
        "base-content": "#0F172A", // Dark Slate Text
      },
    },
    {
      dark: {
        "primary": "#818CF8",      // Soft Indigo
        "secondary": "#22D3EE",    // Bright Cyan
        "accent": "#FBBF24",
        "neutral": "#111827",
        "base-100": "#020617",     // Rich Black-Navy
        "base-200": "#0F172A",     // Navy
        "base-300": "#1E293B",     // Slate
        "base-content": "#F8FAFC", // Off-white text
      },
    },
  ],
},
};
