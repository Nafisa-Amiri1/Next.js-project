import type { Config } from 'tailwindcss'
import twAnimate from 'tw-animate'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // بهتره اضافه کنی
  ],
  theme: {
    extend: {
      fontFamily: { // ✅ f کوچک
        inter: ['var(--font-inter)'],
        "space-grotesk": ['var(--font-space-grotesk)'],
      },
      borderRadius: {
        "2": '8px',
        "1.5": '6px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
    },
  },
  plugins: [twAnimate],
}

export default config
