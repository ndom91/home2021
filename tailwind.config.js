const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/*.tsx",
    "./src/pages/**/*.tsx",
  ],
  safelist: ["animate-flicker", "reset", "fade_*"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter var', 'Inter'", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        gray: {
          50: "#f3f3f4",
          100: "#e7e8e8",
          200: "#c3c4c6",
          300: "#9fa1a4",
          400: "#565b5f",
          500: "#0e141b",
          600: "#0d1218",
          700: "#0b0f14",
          800: "#080c10",
          900: "#05080a",
        },
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
            h2: {
              fontFamily: "JetBrains Mono",
              fontWeight: "200",
            },
            h3: {
              fontFamily: "JetBrains Mono",
              fontWeight: "200",
            },
            h4: {
              fontFamily: "JetBrains Mono",
              fontWeight: "200",
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.gray.100"),
              textDecoration: "none",
              fontWeight: "400",
            },
            '[class~="lead"]': { color: theme("colors.gray.400") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::marker": {
              color: theme("colors.palevioletred"),
            },
            "ol > li::before": { color: theme("colors.palevioletred") },
            "ol > li::marker": { color: theme("colors.palevioletred") },
            hr: { borderColor: theme("colors.palevioletred") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.palevioletred"),
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
        blob: "blob 12s infinite",
        "staggered-lines": "staggered-lines 1000ms forwards 500ms",
        fade_in: "fade_in 1000ms forwards",
        fade_in_down: "fade_in_down 500ms ease-out",
        fade_out_down: "fade_out-down 500ms ease-out",
        fade_in_up:
          "fade_in_up 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards",
        fade_in_up_5:
          "fade_in_up_5 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards",
        fade_in_up_10:
          "fade_in_up_10 750ms cubic-bezier(0.68, -0.6, 0.32, 2.2) forwards",
        fade_in_up_30:
          "fade_in_up_30 750ms cubic-bezier(0.68, -0.6, 0.32, 2.5) forwards",
        fade_in_up_500: "fade_in_up_10 750ms ease-out forwards 500ms",
        fade_out_up: "fade_out_up 500ms ease-out",
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
            transform: "translate(0px, 0px) scale(1) skew(0deg, 0deg)",
          },
          "33%": {
            transform: "translate(75px, -100px) scale(1.2) skew(10deg)",
          },
          "66%": {
            transform: "translate(-60px, 40px) scale(0.8) skew(-10deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) skew(0deg, 0deg)",
          },
        },
        fade_in: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fade_in_down: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fade_out_down: {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        fade_in_up: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fade_in_up_5: {
          "0%": {
            opacity: "0",
            transform: "translateX(50%) translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(50%) translateY(0)",
          },
        },
        fade_in_up_10: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fade_in_up_30: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fade_out_up: {
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
