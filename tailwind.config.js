const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
    safelist: ["animate-flicker", "reset"],
  },
  darkMode: "class",
  mode: "jit",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        bgGray: "#0e141b",
        palevioletred: "#DB7093",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.gray.700"),
              textDecoration: "none",
              fontWeight: "400",
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.gray.300"),
              textDecoration: "none",
              fontWeight: "400",
            },
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
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "6xl": "2.75rem",
        "6.5xl": "3.25rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "sm-smooth": `0 1.4px 0.9px rgba(0, 0, 0, 0.02),
          0 3.3px 2.3px rgba(0, 0, 0, 0.028),
          0 6.1px 4.3px rgba(0, 0, 0, 0.035),
          0 10.9px 7.6px rgba(0, 0, 0, 0.042),
          0 20.5px 14.2px rgba(0, 0, 0, 0.05),
          0 49px 34px rgba(0, 0, 0, 0.07)`,
        "md-smooth": `0 2.8px 2.2px rgba(0, 0, 0, 0.02),
          0 6.7px 5.3px rgba(0, 0, 0, 0.028),
          0 12.5px 10px rgba(0, 0, 0, 0.035),
          0 22.3px 17.9px rgba(0, 0, 0, 0.042),
          0 41.8px 33.4px rgba(0, 0, 0, 0.05),
          0 100px 80px rgba(0, 0, 0, 0.07)`,
        "lg-smooth": `0 3.7px 2.2px rgba(0, 0, 0, 0.034),
          0 8.8px 5.3px rgba(0, 0, 0, 0.048),
          0 16.7px 10px rgba(0, 0, 0, 0.06),
          0 29.7px 17.9px rgba(0, 0, 0, 0.072),
          0 55.6px 33.4px rgba(0, 0, 0, 0.086),
          0 133px 80px rgba(0, 0, 0, 0.12)`,
        "xl-smooth": `0 6.1px 2.2px rgba(0, 0, 0, 0.037),
          0 14.6px 5.3px rgba(0, 0, 0, 0.053),
          0 27.4px 10px rgba(0, 0, 0, 0.065),
          0 48.9px 17.9px rgba(0, 0, 0, 0.077),
          0 91.5px 33.4px rgba(0, 0, 0, 0.093),
          0 219px 80px rgba(0, 0, 0, 0.13)`,
      },
      animation: {
        blob: "blob 7s infinite",
        "staggered-lines": "staggered-lines 1000ms forwards 500ms",
        "fade-in": "fade-in 1000ms forwards",
        "fade-in-down": "fade-in-down 500ms ease-out",
        "fade-out-down": "fade-out-down 500ms ease-out",
        "fade-in-up":
          "fade-in-up 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards",
        "fade-in-up-5":
          "fade-in-up-5 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards",
        "fade-in-up-10":
          "fade-in-up-10 750ms cubic-bezier(0.68, -0.6, 0.32, 2.2) forwards",
        "fade-in-up-30":
          "fade-in-up-30 750ms cubic-bezier(0.68, -0.6, 0.32, 2.5) forwards",
        "fade-in-up-500": "fade-in-up-10 750ms ease-out forwards 500ms",
        "fade-out-up": "fade-out-up 500ms ease-out",
        flicker: "flicker 3s linear forwards alternate infinite",
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
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-5": {
          "0%": {
            opacity: "0",
            transform: "translateX(50%) translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(50%) translateY(0)",
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
        flicker: {
          "0%": {
            opacity: 1,
          },
          "19.999%": {
            opacity: 1,
          },
          "22%": {
            opacity: 1,
          },
          "32.999%": {
            opacity: 1,
          },
          "34%": {
            opacity: 1,
          },
          "34.999%": {
            opacity: 1,
          },
          "42%": {
            opacity: 1,
          },
          "83%": {
            opacity: 1,
          },
          "84%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
          },
          "20%": {
            opacity: 0.33,
          },
          "21.999%": {
            opacity: 0.33,
          },
          "33%": {
            opacity: 0.33,
          },
          "33.999%": {
            opacity: 0.33,
          },
          "35%": {
            opacity: 0.33,
          },
          "41.999%": {
            opacity: 0.33,
          },
          "83.999%": {
            opacity: 0.33,
          },
        },
      },
    },
  },
}
