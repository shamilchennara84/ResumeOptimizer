/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed": "#001b3f",
        "surface": "#f7f9fb",
        "surface-dim": "#d8dadc",
        "secondary-fixed": "#d8e2ff",
        "primary-container": "#002d62",
        "on-primary-container": "#7796d1",
        "surface-container": "#eceef0",
        "secondary-container": "#0070ea",
        "surface-bright": "#f7f9fb",
        "error-container": "#ffdad6",
        "on-tertiary-container": "#8b97ac",
        "primary-fixed": "#d7e2ff",
        "outline-variant": "#c4c6d1",
        "surface-container-highest": "#e0e3e5",
        "outline": "#747781",
        "primary": "#00193c",
        "on-secondary-container": "#fefcff",
        "inverse-on-surface": "#eff1f3",
        "secondary-fixed-dim": "#adc7ff",
        "on-tertiary-fixed": "#111c2c",
        "on-secondary-fixed": "#001a41",
        "on-primary": "#ffffff",
        "background": "#f7f9fb",
        "surface-container-high": "#e6e8ea",
        "surface-tint": "#3e5e95",
        "on-tertiary": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-container": "#242f40",
        "on-error-container": "#93000a",
        "on-surface-variant": "#43474f",
        "inverse-surface": "#2d3133",
        "tertiary-fixed-dim": "#bcc7dd",
        "on-secondary": "#ffffff",
        "on-surface": "#191c1e",
        "primary-fixed-dim": "#abc7ff",
        "on-secondary-fixed-variant": "#004493",
        "secondary": "#0059bb",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed-variant": "#24467c",
        "on-tertiary-fixed-variant": "#3c475a",
        "surface-container-low": "#f2f4f6",
        "error": "#ba1a1a",
        "surface-variant": "#e0e3e5",
        "tertiary": "#0f1a2b",
        "on-background": "#191c1e",
        "inverse-primary": "#abc7ff",
        "tertiary-fixed": "#d8e3fa"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
