import type { Config } from 'tailwindcss'
import twAnimate from 'tw-animate'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [twAnimate],
}

export default config
