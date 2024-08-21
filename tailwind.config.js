/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'Prime': '0 1px 2px 0px #ffffff1f',
      },
      keyframes: {
        opacityAnime: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        opacityAnime: 'opacityAnime .2s ease-in-out 1',
      },
      colors: {
        shadow:'#ffffff1f',
        Red: "#D14757",
        red_100:'#d1475729',
        darkGray: "#242424", 
        lightGray: '#ffffff8f',
        lightBlack: '#ffffff0a',
        gray_50: '#ffffffde',
        gray_100: '#ffffff4f',
        gray_200: '#ffffff14',
      
        
      },

      fontFamily: {
        iransans: "iransans",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
 
};
