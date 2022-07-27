module.exports = {
  content: ['./src/**/*.{html,vue,ts,tsx,js}'],
  safelist: [
    'bg-primary', 'bg-info', 'bg-success', 'bg-danger',
    'text-white'
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        success: '#25B865',
        warning: '#E6A23C',
        danger: '#F53232',
        info: '#909399',
        primary: '#2D84FB',
        disabled: '#909399',
        speare: '#44BED0',
        logo: '#5993F1'
      },
    },
    fontSize: {
      '2xl': ['24px', {
        lineHeight: ''
      }]
    }
  },
  plugins: [
    '@tailwindcss/line-clamp'
  ]
}
