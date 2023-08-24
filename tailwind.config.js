/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      signature: ['midnight-signature', 'cursive'],
      neon: ['neon-absolute', 'sans'],
      orbitron: ['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        'cream': '#D9D9D9',
        // 'headings': '#343A40',
        'lavender': '#9a8c98',
        'purple': '#4a4e69',
        'platinum': '#8D8D8D',
        'button-logo': '#F5EBE0',
        'button-bg': '#9a8c98',
      },
    },
  },
  plugins: [],
}

