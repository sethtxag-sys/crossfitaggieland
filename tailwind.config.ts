import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#500000',
          dark: '#3a0000',
          light: '#6b1515',
          accent: '#cc6a5e',
        },
        charcoal: '#1a1a1a',
        'dark-gray': '#313338',
        'mid-gray': '#595959',
        'text-gray': '#49515b',
      },
      fontFamily: {
        display: ['var(--font-display)', '"Bebas Neue"', 'sans-serif'],
        body: ['var(--font-body)', '"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
