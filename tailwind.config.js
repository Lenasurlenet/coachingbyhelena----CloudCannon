module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito sans', 'sans-serif']
    },
    colors: {
      "white": "#fafbfc",
      "black": "#18191F",
      "gray-dark": "#635f69",
      "gray": "#a8a5ab",
      "gray-accent": "#C5C3C7",
      "primary": "#4687c7",
      "primary-dark": "#317AC1",
      "primary-accent": "#6fa2d4",
      "secondary": "#F9968B",
      "secondary-dark": "#e0877d",
      "secondary-accent": "#fbb6ae"
    },
    boxShadow: {
      sm: '0px 2px 4px 0x rgba(11, 10, 55, 0.15)',
      lg: 'Opx 8px 20px 0px rgba(18, 16, 99, 0.06)',
    },
    fontSize: {
      xs: ['0.875rem', { lineheight: '24px', letterSpacing: '-0.03em' }],
      base: ['1rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      lg: ['1.15rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      xl: ['1.25rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      '2xl': ['1.5rem', { lineheight: '36px', letterSpacing: '-0.032em' }],
      '3xl': ['1.9rem', { lineheight: '48px', letterSpacing: '-0.032em' }],
      '4xl': ['2.4rem', { lineheight: '56px', letterSpacing: '-0.032em' }],
      '5xl': ['3rem', { lineheight: '56px', letterSpacing: '-0.034em' }],
      '6xl': ['3.8rem', { lineheight: '72px', letterSpacing: '-0.034em' }],
      '7xl': ['4.7rem', { lineheight: '88px', letterSpacing: '-0.036em' }]
    },

    extend: {

    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}