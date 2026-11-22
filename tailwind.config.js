/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EB',
        beige: '#E8DDCB',
        brown: '#6B4632',
        ink: '#38271F',
        terracotta: '#B87956',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        wideish: '0.16em',
      },
    },
  },
  plugins: [],
}
