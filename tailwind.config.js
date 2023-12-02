/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        DarkColorbg: '#232323',
        lightColorBg: '#AEC3AE',
        taskCardColor: '#000',
        taskListBg: '#191A1F',
        textColor:'#a1c6ea'
      },
      fontFamily: {
        PrimaryFont: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
