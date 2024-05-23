// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF4713',
        secondary: '#FFFFFF',
        textPrimary: '#000000',
        textSecondary: '#FFFFFF',
        progressInactive: '#D1D3D9',
      },
      fontSize: {
        '3xl': '2rem', // 32px
        'xl': '1.25rem', // 20px
        'l': '1rem', // 16px
        'sm': '0.875rem', // 14px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
