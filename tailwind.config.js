// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fondo principal (azul verdoso del logo)
        oceano: '#2E6F78',
        // Acento “concha” (durazno/dorado suave)
        coral: '#E7A977',
        // Secundario suave para detalles si lo necesitas
        turquesa: '#7EC8CD',
        // Crema para superficies claras
        arena: '#F6EFE7',
        // Tinta para textos oscuros sobre fondos claros
        tinta: '#10262C',
      },
    },
  },
  plugins: [],
}
