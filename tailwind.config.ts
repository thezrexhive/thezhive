import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Purple
        primary: {
          50:  "#f5f0fb",
          100: "#ece0f7",
          200: "#d8c1ef",
          300: "#be9ae4",
          400: "#a172d8",
          500: "#8050cc",
          600: "#5E3088",
          700: "#4e2870",
          800: "#3f205a",
          900: "#321a48",
          950: "#1e0f2c",
        },
        // Accent: Yellow
        yellow: {
          50:  "#fffdf0",
          100: "#fff8d6",
          200: "#fff0a8",
          300: "#ffe46e",
          400: "#fdd43a",
          500: "#F1C81D",
          600: "#d4a80d",
          700: "#a8820a",
          800: "#7d6008",
          900: "#5a4506",
        },
        // Accent: Pink
        pink: {
          50:  "#fef0f7",
          100: "#fce0ef",
          200: "#f9bfe0",
          300: "#f591cb",
          400: "#f260b0",
          500: "#EF338D",
          600: "#d01c75",
          700: "#a8185d",
          800: "#7d1246",
          900: "#540d2f",
        },
        // Accent: Blue
        blue: {
          50:  "#f0fafd",
          100: "#dff3fa",
          200: "#b8e7f5",
          300: "#83d4ed",
          400: "#33B0D4",
          500: "#1a96bb",
          600: "#157a97",
          700: "#116077",
          800: "#0d4858",
          900: "#09313c",
        },
        // Neutrals (warm-tinted)
        neutral: {
          0:   "#ffffff",
          50:  "#faf9fb",
          100: "#f4f2f7",
          200: "#e8e4ee",
          300: "#d5cfe0",
          400: "#a89dba",
          500: "#776c8a",
          600: "#564f65",
          700: "#3e3949",
          800: "#28242f",
          900: "#1a1720",
          950: "#0e0c12",
        },
        // Semantic
        success: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        warning: {
          50:  "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        error: {
          50:  "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "75rem",
      },
      fontSize: {
        "hero":    ["clamp(2.5rem, 5vw, 4rem)",    { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "title":   ["clamp(1.5rem, 3vw, 2rem)",    { lineHeight: "1.2", letterSpacing: "-0.02em",  fontWeight: "600" }],
        "heading": ["clamp(1.125rem, 2vw, 1.5rem)",{ lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "xs":             "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        "card":           "0 1px 4px 0 rgb(94 48 136 / 0.06), 0 1px 2px -1px rgb(94 48 136 / 0.04)",
        "card-hover":     "0 8px 24px -4px rgb(94 48 136 / 0.15), 0 2px 8px -2px rgb(94 48 136 / 0.08)",
        "elevated":       "0 4px 12px -2px rgb(94 48 136 / 0.12), 0 2px 4px -2px rgb(0 0 0 / 0.04)",
        "modal":          "0 20px 40px -8px rgb(0 0 0 / 0.12), 0 8px 16px -4px rgb(94 48 136 / 0.1)",
        "glow-purple":    "0 0 0 3px rgb(94 48 136 / 0.18), 0 4px 16px -2px rgb(94 48 136 / 0.2)",
        "glow-pink":      "0 0 0 3px rgb(239 51 141 / 0.18), 0 4px 16px -2px rgb(239 51 141 / 0.2)",
        "glow-yellow":    "0 0 0 3px rgb(241 200 29 / 0.25), 0 4px 16px -2px rgb(241 200 29 / 0.25)",
        "glow-blue":      "0 0 0 3px rgb(51 176 212 / 0.2),  0 4px 16px -2px rgb(51 176 212 / 0.2)",
        // Dark surface shadows
        "glass":          "0 4px 24px -4px rgb(0 0 0 / 0.4), 0 1px 0 0 rgb(255 255 255 / 0.06) inset",
        "glass-hover":    "0 8px 32px -4px rgb(0 0 0 / 0.5), 0 1px 0 0 rgb(255 255 255 / 0.1) inset",
      },
      backgroundImage: {
        // Primary gradients
        "gradient-pp":      "linear-gradient(135deg, #5E3088 0%, #EF338D 100%)",
        "gradient-pb":      "linear-gradient(135deg, #5E3088 0%, #33B0D4 100%)",
        "gradient-py":      "linear-gradient(135deg, #EF338D 0%, #F1C81D 100%)",
        "gradient-full":    "linear-gradient(135deg, #5E3088 0%, #EF338D 50%, #F1C81D 100%)",
        "gradient-dark-pp": "linear-gradient(135deg, #3e2070 0%, #c01875 100%)",
        // Legacy alias
        "gradient-primary": "linear-gradient(135deg, #5E3088 0%, #EF338D 100%)",
        // Tinted backgrounds
        "tint-purple": "linear-gradient(135deg, #f5f0fb 0%, #fce0ef 100%)",
        "tint-yellow": "linear-gradient(135deg, #fffdf0 0%, #fff8d6 100%)",
        "tint-pink":   "linear-gradient(135deg, #fef0f7 0%, #fce0ef 100%)",
        "tint-blue":   "linear-gradient(135deg, #f0fafd 0%, #dff3fa 100%)",
        "tint-warm":   "linear-gradient(160deg, #faf9fb 0%, #f5f0fb 50%, #fef0f7 100%)",
        // Subtle
        "gradient-subtle":  "linear-gradient(135deg, #f5f0fb 0%, #fef0f7 100%)",
        // Dark dashboard
        "gradient-dark":    "linear-gradient(135deg, #0e0c12 0%, #1e0f2c 40%, #2a1040 70%, #1a0f25 100%)",
        "gradient-dark-side":"linear-gradient(180deg, #16101f 0%, #0e0c12 100%)",
      },
      animation: {
        "fade-in":        "fadeIn 0.25s ease-out",
        "slide-up":       "slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "float":          "float 3s ease-in-out infinite",
        "wiggle":         "wiggle 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "bounce-soft":    "bounceSoft 1.2s ease-in-out infinite",
        "pulse-soft":     "pulseSoft 2s ease-in-out infinite",
        "pop":            "pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "shimmer":        "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        wiggle: {
          "0%":   { transform: "rotate(0deg)" },
          "25%":  { transform: "rotate(-10deg)" },
          "75%":  { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)",    animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%":      { transform: "translateY(-4px)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" },
        },
        pop: {
          "0%":   { transform: "scale(0.95)" },
          "60%":  { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
