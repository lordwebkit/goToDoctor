/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Base Font', 'system-ui']
    },
    extend: {
      colors: {
        cyan: {
          700: '#00B9C2',
          600: '#16D0CA',
          100: '#E5F2FC'
        }
      },
      borderRadius: {
        '4xl': '1.75rem' /* 28px */
      }
    }
  },
  plugins: []
}
