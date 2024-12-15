import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'my-color-1': '#425059',
        'my-color-2': '#BDBFB8',
        'my-color-3': '#F2F1DF',
        'my-color-4': '#F2C744',
        'my-color-5': '#F2B035',
        'my-color-6': '#F2E641',
        'my-color-7': '#687E8C',
        'my-color-8': '#735A10',
        'react-blue': '#61dbfb',
        'typescript-blue': '#007acc',
        'minion-yellow': '#f0db4f',
        'dark-charcoal': '#323330'
      },
      backgroundImage: {
        snowing: "url('/snowing.gif')"
      }
    }
  },
  plugins: []
} satisfies Config
