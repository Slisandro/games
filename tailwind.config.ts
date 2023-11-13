import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "c4": "#5C2CD5",
        "c4-pink": "#F26389",
        "c4-white": "#FFFFFF",
        "c4-yellow": "#F2C166",
        "c4-purple": "#7A45FF",
        "c4-purple-light": "#9685C1"
      },
      borderColor: {
        "c4": "black"
      },
      boxShadow: {
        'c4-default': '0px 2px 0px black',
        'c4-button': '0px 4px 0px black',
        'c4-card': '0px 8px 0px black',
        'c4-board-item': '0px -4px 0px black',
      },
    },
  },
  plugins: [],
}
export default config
