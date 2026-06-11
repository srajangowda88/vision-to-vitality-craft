/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          fixed: '#FFFFFF',
          container: '#2D5016',
        },
        secondary: {
          DEFAULT: '#D9A441',
          fixed: '#FFD700',
          container: '#FFF8DC',
        },
        background: '#FEFEFE',
        surface: {
          DEFAULT: '#F8F9FA',
          container: {
            DEFAULT: '#F1F3F4',
            low: '#F8F9FA',
            high: '#E8EAED',
            lowest: '#FFFFFF',
          },
          bright: '#FFFFFF',
        },
        'on-primary': '#FFFFFF',
        'on-primary-container': '#E8F5E8',
        'on-secondary': '#1B4332',
        'on-secondary-container': '#2D5016',
        'on-background': '#1C1B1F',
        'on-surface': '#1C1B1F',
        'on-surface-variant': '#49454F',
        outline: {
          DEFAULT: '#79747E',
          variant: '#CAC4D0',
        },
        'gold-accent': '#D9A441',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        'subheading': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'headline-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.33', fontWeight: '600' }],
        'subheading-md': ['1.125rem', { lineHeight: '1.44', fontWeight: '500' }],
        'body-rt': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'button-text': ['0.875rem', { lineHeight: '1.43', fontWeight: '500' }],
        'label-sm': ['0.75rem', { lineHeight: '1.33', fontWeight: '500' }],
      },
      spacing: {
        'margin-desktop': '5%',
        'margin-mobile': '1rem',
        'section-gap': '5rem',
        'gutter': '2rem',
        'container-max': '1280px',
      },
      animation: {
        'pulse-gold': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}