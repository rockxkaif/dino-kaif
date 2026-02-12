/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          25: "#FAFBFF",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        },
        accent: {
          blue: "#4F46E5",
          purple: "#A78BFA",
          indigo: "#6366F1"
        }
      },

      backgroundColor: {
        lightBg: "#F8FAFF",
        lightCard: "#FFFFFF",
        lightHover: "#F1F5F9"
      },

      textColor: {
        lightPrimary: "#0F172A",
        lightSecondary: "#475569",
        lightTertiary: "#94A3B8"
      },

      boxShadow: {
        "premium-sm": "0 1px 2px rgba(0,0,0,0.05)",
        "premium-md": "0 4px 6px rgba(0,0,0,0.08)",
        "premium-lg": "0 10px 20px rgba(15,23,42,0.06)",
        "premium-xl": "0 20px 40px rgba(15,23,42,0.08)"
      },

      animation: {
        "fade-in": "fadeIn 0.25s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.25s ease-out"
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        scaleIn: {
          "0%": { transform: "scale(0.97)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
