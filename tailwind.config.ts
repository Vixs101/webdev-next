import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '99': '44rem',
        '96.567': '497px',
        '97': '635px',
        '98': '600px',
        '100' : '680.99px',
      },
      Width: {
        '97': '33.6875rem',
        '2/2' : '60%',
        '98': '644px',
        '101': '721px',
      },
      lineHeight: {
        '12': '55.2px',
      }
    },
  },
  plugins: [],
}
export default config
