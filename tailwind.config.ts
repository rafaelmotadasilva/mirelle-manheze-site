import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bordeaux:  '#73061B',
        bronze:    '#897257',
        champagne: '#A79479',
        cream:     '#E5DBCF',
        linen:     '#EAE7E2',
        warm:      '#3D3530',
      },
      fontFamily: {
        'bona-nova': ['var(--font-bona-nova)', 'Georgia', 'serif'],
        'ephesis':   ['var(--font-ephesis)', 'cursive'],
        'red-hat':   ['var(--font-red-hat)', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        // Para headings de display (h1 em tamanhos grandes)
        'display': '1.05',
        // Para headings de seção (h2)
        'heading': '1.2',
      },
      letterSpacing: {
        brand: '0.2em',
      },
      borderRadius: {
        brand: '2px',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}

export default config
