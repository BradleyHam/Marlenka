// tailwind.config.js
module.exports = {
     content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        textColor: {
          'primary-color': '#7e0e06',
          'feature-color': '#f3dcaa',
          'secondary-color': '#4d4f5c;',
        },
        backgroundColor: {
          'primary-color': '#7e0e06',
          'secondary-color': '#4d4f5c',
          'feature-color': '#f3dcaa',
          'light': '#FFFBF4'
        },
        fontFamily: {
          'sans': ['Lato', 'sans-serif'],
          'serif': ['Playfair Display', 'serif'],
          'display': ['Great Vibes', 'cursive'],
        },
        height: {
          '15': '3.75rem', // 60px
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };