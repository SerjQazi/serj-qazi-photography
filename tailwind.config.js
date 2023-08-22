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
        'signature-blue': '#343A40',
        'faded-gray': '#6C757D',
        'platinum': '#8D8D8D',
        'buttonLogo': '#F5EBE0',
        'buttonBg': '#9a8c98',
      },
    },
  },
  plugins: [],
}

