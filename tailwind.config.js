/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kumar: ['Kumar One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'primary-button': 'radial-gradient(151.38% 103.34% at 32.05% 64.79%, #323232 0%, #000 100%)',
        background: 'radial-gradient(151.38% 103.34% at 32.05% 64.79%, #323232 0%, #000 100%)'
      },
      dropShadow: {
        white: 'drop-shadow(0 1px 2px rgb(256 256 256 / 0.1)) drop-shadow(0 1px 1px rgb(256 256 256 / 0.06));',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
