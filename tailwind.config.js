/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'XS': '360px',
      'S': '768px',
      'L': '1024px',
      'XL': '1280px',
      'XXL': '1440px',
      'XXXL': '1600px',
    },
    colors: {
      'transparent': '#FFFFFF00',
      'primary-blue': '#51A1FF',
      'blue-50': '#EAF4FF',
      'blue-100': '#D0E6FF',
      'blue-200': '#B7D8FF',
      'blue-300': '#84BCFF',
      'blue-500': '#2189ff',
      'blue-600': '#0477FF',
      'blue-700': '#006BEA',
      'blue-800': '#005fd0',
      'blue-900': '#0054B7',
      'blue-4d': '#4dabf6',
      'blk': '#000',
      'blk-22': '#222',
      'blk-444': '#444',
      'wht': '#fff',
      'red-700': '#F13C61',
      'red-600': '#F46381',
      'red-d7': '#d7263d',
      'green-700': '#73C7AC',
      'grey-66': '#666',
      'grey-77': '#777',
      'grey-88': '#888',
      'grey-85': '#858585',
      'grey-99': '#999',
      'grey-cc': '#CCC',
      'grey-dd': '#DDD',
      'grey-e1': '#E1E1E1',
      'grey-ee': '#EEE',
      'grey-f5': '#F5F7FE',
      'grey-bg': '#f4f4f4',
      'success': '#3ac144b3',
    },
    fontSize: {
      xs: ['12px', '1.25'],
      sm: ['14px', '1.25'],
      base: ['16px', '1.25'],
      lg: ['18px', '1.25'],
      xl: ['36px', '1.25'],
      nav: ['24px', '1']
    },
    extend: {
      fontFamily: {
        'sans': ['SamsungOne', ...defaultTheme.fontFamily.sans],
        'sharp': ['SamsungSharp', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '4.5': '1.125rem',
        '15': '3.75rem',
        '25': '6.25rem',
      },
    },
  },
  plugins: [],
}

