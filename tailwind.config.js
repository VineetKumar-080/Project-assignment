/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffd980',
          300: '#ffc246',
          400: '#ffa91c',
          500: '#f59000',
          600: '#db6d00',
          700: '#b64a00',
          800: '#933a06',
          900: '#7a310b',
          950: '#461802',
        },
        dark: {
          DEFAULT: '#0c0c0c',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1f1f1f',
          950: '#0c0c0c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'about-pattern': "url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};