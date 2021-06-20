const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  darkMode: "class",
  mode: process.env.NODE_ENV ? "jit" : undefined,
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        warmGray: colors.warmGray,
        bgGray: "#151216",
        palevioletred: "#DB7093",
      },
      typography: (theme) => ({
        pink: {
          css: {
            a: { color: "#db7093" },
          },
        },
        dark: {
          css: {
            '[class~="lead"]': { color: theme("colors.gray.400") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: { color: theme("colors.palevioletred") },
            "a code": { color: theme("colors.palevioletred") },
            "pre code": {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      borderWidth: {
        10: "12px",
      },
      animation: {
        blob: "blob 7s infinite",
        "staggered-lines": "staggered-lines 1000ms forwards 500ms",
        "fade-in": "fade-in 1000ms forwards",
        "fade-in-down": "fade-in-down 500ms ease-out",
        "fade-out-down": "fade-out-down 500ms ease-out",
        "fade-in-up-10": "fade-in-up-10 750ms ease-out forwards",
        "fade-in-up-30": "fade-in-up-30 750ms ease-out forwards",
        "fade-in-up-500": "fade-in-up-10 750ms ease-out forwards 500ms",
        "fade-out-up": "fade-out-up 500ms ease-out",
      },
      keyframes: {
        "staggered-lines": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-40px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up-10": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-30": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
    },
  },
}
