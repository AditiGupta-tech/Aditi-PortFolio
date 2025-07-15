module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "neon-pink": "#f72585",
        "neon-green": "#00f5c3",
        "neon-blue": "#4cc9f0",
      },
      boxShadow: {
        'neon-lg': '0 0 25px rgba(255, 0, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.5)',
        'tag-neon': '0 0 8px rgba(255, 255, 255, 0.4)',
        'tag-neon-hover': '0 0 12px rgba(255, 255, 255, 0.7)',
      },
      dropShadow: {
        'neon-pink-blue': '0 0 5px #ff00ff, 0 0 10px #00ffff',
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        'fade-in': {
      '0%': { opacity: '0', transform: 'scale(0.9)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
        "radial-pulse": {
          "0%, 100%": { opacity: 0.1 },
          "50%": { opacity: 0.3 },
        },
        "text-glow-pulse": {
          "0%, 100%": { textShadow: "0 0 5px rgba(255, 255, 255, 0.4)" },
          "50%": { textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.5)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        "radial-pulse": "radial-pulse 2s ease-in-out infinite",
        "text-glow-pulse": "text-glow-pulse 1.5s ease-in-out infinite",
        "shimmer": "shimmer 1.5s linear infinite",
        'spin-slow': 'spin 1.5s linear infinite',
      }
    },
  },
  plugins: [],
};