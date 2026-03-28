module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        md1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
        md2: "0 3px 6px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
        md3: "0 10px 20px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.05)",
        md4: "0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.05)",
        md5: "0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.05)",
      },
      transitionTimingFunction: {
        "md-standard": "cubic-bezier(0.2, 0, 0, 1)",
        "md-emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "md-decelerate": "cubic-bezier(0, 0, 0, 1)",
      },
      transitionDuration: {
        "md-short": "200ms",
        "md-medium": "300ms",
        "md-long": "500ms",
      },
      borderRadius: {
        "md-sm": "8px",
        "md-md": "12px",
        "md-lg": "16px",
        "md-xl": "28px",
      },
    },
  },
  plugins: [],
};
