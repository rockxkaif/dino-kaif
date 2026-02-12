/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          25: "#F5F3FF",
          50: "#F0F0FE",
          100: "#E0E0FE",
          200: "#C7C7FD",
          300: "#A8A8FC",
          400: "#8888FB",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81"
        },
        accent: {
          blue: "#4F46E5",
          indigo: "#6366F1",
          light: "#F0F0FE"
        }
      },

      backgroundColor: {
        lightBg: "#F8FAFF",
        lightCard: "#FFFFFF",
        lightHover: "#F0F0FE"
      },

      textColor: {
        lightPrimary: "#0F172A",
        lightSecondary: "#475569",
        lightTertiary: "#94A3B8"
      },

      boxShadow: {
        "premium-sm": "0 1px 3px rgba(79,70,229,0.08)",
        "premium-md": "0 4px 12px rgba(79,70,229,0.1)",
        "premium-lg": "0 12px 24px rgba(79,70,229,0.12)",
        "premium-xl": "0 20px 40px rgba(79,70,229,0.15)"
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
