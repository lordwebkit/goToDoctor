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
          900: '#006879',
          800: '#00939A',
          700: '#00B9C2',
          600: '#16D0CA',
          150: '#E5F2FC',
          100: '#E5F2FC'
        },
        gray: {
          400: '#979797'
        }
      },
      borderRadius: {
        '4xl': '1.75rem' /* 28px */
      }
    }
  },
  plugins: []
}
