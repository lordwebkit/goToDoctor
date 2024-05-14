/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'Base Font',
        'system-ui'
      ]
    },
    extend: {
      colors: {
        cyan: {
          600: '#16D0CA',
        },
      },
    },
  },
  plugins: [],
}

