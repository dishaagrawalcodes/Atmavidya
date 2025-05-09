/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customE9: '#E9DCC9',
        softBeige: "#E4D9A3",
        Emerald: "#FFDAB9",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        lora: ['"Lora"', 'serif'],
        mukta: ['"Mukta"', 'sans-serif'],
        prata: ['"Prata"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        spectral: ['"Spectral"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        amiri: ['"Amiri"', 'serif'],
        gotu: ['"Gotu"', 'sans-serif'],
        eczar: ['"Eczar"', 'serif'],
        yatra: ['"Yatra One"', 'cursive'],
        kalam: ['"Kalam"', 'cursive'],
      },
      backgroundImage: {
        'header-pattern': "url('/assets/header.jpg')",
      },
    },
  },
  plugins: [scrollbarHide], // ✅ Add this line
};
