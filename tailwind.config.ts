import defaultTheme from "tailwindcss/defaultTheme"
import tailwindTypography from "@tailwindcss/typography"
import { type Config } from "tailwindcss"
import { type PluginUtils } from "tailwindcss/types/config"

export default {
  content: ["./src/**/*.{tsx,ts,md,mdx}"],
  safelist: ["animate-flicker", "reset", "fade_*"],
  darkMode: "class",
  plugins: [tailwindTypography],
  theme: {
    fontSize: {
      xs: "clamp(0.46rem, 0.18vw + 0.57rem, 0.75rem)",
      sm: "clamp(0.76rem, 0.2vw + 0.71rem, 0.87rem)",
      base: "clamp(0.88rem, 0.23vw + 0.82rem, 1rem)",
      lg: "clamp(1.16rem, 0.3vw + 1.08rem, 1.27rem)",
      xl: "clamp(1.25rem, 0.31vw + 1.24rem, 1.39rem)",
      "2xl": "clamp(1.53rem, 0.4vw + 1.43rem, 1.75rem)",
      "3xl": "clamp(1.76rem, 0.46vw + 1.65rem, 2.01rem)",
      "4xl": "clamp(2.02rem, 0.53vw + 1.89rem, 2.31rem)",
      "5xl": "clamp(2.33rem, 0.6vw + 2.18rem, 2.66rem)",
      "6xl": "clamp(2.68rem, 0.7vw + 2.5rem, 3.06rem)",
      "7xl": "clamp(3.08rem, 0.8vw + 2.88rem, 3.52rem)",
      "8xl": "clamp(3.54rem, 0.92vw + 3.31rem, 4.05rem)",
      "9xl": "clamp(3.80rem, 0.92vw + 3.81rem, 4.75rem)",
      "9.5xl": "clamp(4.30rem, 0.92vw + 4.91rem, 6.25rem)",
      "10xl": "clamp(4.50rem, 0.92vw + 5.75rem, 7.95rem)",
    },
    boxShadow: {
      xs: "var(--shadow-1)",
      sm: "var(--shadow-2)",
      md: "var(--shadow-3)",
      lg: "var(--shadow-4)",
      xl: "var(--shadow-5)",
      "2xl": "var(--shadow-6)",
    },
    extend: {
      fontFamily: {
        sans: ["Neue Montreal", ...defaultTheme.fontFamily.sans],
        // sans: ["GT America", ...defaultTheme.fontFamily.sans],
        mono: ["Victor Mono", ...defaultTheme.fontFamily.mono],
        block: ["Silkscreen", ...defaultTheme.fontFamily.mono],
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
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "400",
            },
          },
        },
        light: {
          css: {
            blockquote: {
              color: theme("colors.gray.300") as string,
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.gray.100") as string,
              textDecoration: "none",
              fontWeight: "400",
            },
            '[class~="lead"]': { color: theme("colors.gray.400") as string },
            strong: { color: theme("colors.gray.100") as string },
            "ul > li::marker": {
              color: theme("colors.palevioletred") as string,
            },
            "ol > li::before": { color: theme("colors.palevioletred") as string },
            "ol > li::marker": { color: theme("colors.palevioletred") as string },
            hr: { borderColor: theme("colors.palevioletred") as string },
            blockquote: {
              color: theme("colors.gray.100") as string,
              borderLeftColor: theme("colors.palevioletred") as string,
            },
            h1: { color: theme("colors.gray.100") as string },
            h2: { color: theme("colors.gray.100") as string },
            h3: { color: theme("colors.gray.100") as string },
            h4: { color: theme("colors.gray.100") as string },
            code: { color: theme("colors.palevioletred") as string },
            "a code": { color: theme("colors.palevioletred") as string },
            "pre code": {
              color: theme("colors.gray.200") as string,
              backgroundColor: theme("colors.gray.800") as string,
            },
            th: {
              color: theme("colors.gray.100") as string,
            },
            thead: {
              color: theme("colors.gray.100") as string,
              borderBottomColor: theme("colors.palevioletred") as string,
            },
            "tbody tr": {
              borderBottomColor: theme("colors.zinc.800") as string,
            },
          },
        },
      }),
      animation: {
        blob: "blob 12s infinite",
        fade_in: "fade_in 1000ms forwards",
        fade_in_up: "fade_in_up 750ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards",
        fade_in_up_5_rotate: "fade_in_up_5_rotate 1000ms var(--ease-spring-3) 600ms forwards",
        fade_in_up_10: "fade_in_up_10 750ms cubic-bezier(0.68, -0.6, 0.32, 2.2) forwards",
        fade_in_up_30: "fade_in_up_30 750ms cubic-bezier(0.68, -0.6, 0.32, 2.5) forwards",
        flicker: "flicker 3s linear forwards alternate infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(75px, -100px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-60px, 40px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
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
        fade_in_up_5_rotate: {
          "0%": {
            opacity: "0",
            transform: "translateX(50%) translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(50%) translateY(0) rotate(var(--image_rotation, 3deg))",
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
        flicker: {
          "0%": {
            opacity: "1",
          },
          "19.999%": {
            opacity: "1",
          },
          "22%": {
            opacity: "1",
          },
          "32.999%": {
            opacity: "1",
          },
          "34%": {
            opacity: "1",
          },
          "34.999%": {
            opacity: "1",
          },
          "42%": {
            opacity: "1",
          },
          "83%": {
            opacity: "1",
          },
          "84%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
          "20%": {
            opacity: "0.33",
          },
          "21.999%": {
            opacity: "0.33",
          },
          "33%": {
            opacity: "0.33",
          },
          "33.999%": {
            opacity: "0.33",
          },
          "35%": {
            opacity: "0.33",
          },
          "41.999%": {
            opacity: "0.33",
          },
          "83.999%": {
            opacity: "0.33",
          },
        },
      },
    },
  },
} satisfies Config
