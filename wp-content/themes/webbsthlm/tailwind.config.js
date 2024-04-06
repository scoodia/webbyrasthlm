/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Assistant', 'sans-serif'],
      },
      colors: {
        body: '#2E2A21',
        headers: '#102A21',
        secondary: '#E8E5DC',
        btndark: '#102A21',
        btnlight: '#E8E5DC',
        light: '#f5f5dc',
        white: '#ffffff', 
        black: '#000000',
        bg: '#fae4b1',
        footerbg: '#fae4b1',
        bordercolor: '#e8e5dc',
      },
      fontSize: {
        'c40': '2.5rem',
      },
      lineHeight: {
				'c48': '3rem',
			},
    },
  },
  plugins: [],
  safelist: [
    'sm:pb-0', 'sm:pt-0', 'sm:mb-0', 'sm:mt-0',
    'sm:pb-1', 'sm:pt-1', 'sm:mb-1', 'sm:mt-1',
    'sm:pb-2', 'sm:pt-2', 'sm:mb-2', 'sm:mt-2',
    'sm:pb-3', 'sm:pt-3', 'sm:mb-3', 'sm:mt-3',
    'sm:pb-4', 'sm:pt-4', 'sm:mb-4', 'sm:mt-4',
    'sm:pb-5', 'sm:pt-5', 'sm:mb-5', 'sm:mt-5',
    'sm:pb-6', 'sm:pt-6', 'sm:mb-6', 'sm:mt-6',
    'sm:pb-7', 'sm:pt-7', 'sm:mb-7', 'sm:mt-7',
    'sm:pb-8', 'sm:pt-8', 'sm:mb-8', 'sm:mt-8',
    'sm:pb-9', 'sm:pt-9', 'sm:mb-9', 'sm:mt-9',
    'sm:pb-10', 'sm:pt-10', 'sm:mb-10', 'sm:mt-10',
    'sm:pb-11', 'sm:pt-11', 'sm:mb-11', 'sm:mt-11',
    'sm:pb-12', 'sm:pt-12', 'sm:mb-12', 'sm:mt-12',
    'sm:pb-14', 'sm:pt-14', 'sm:mb-14', 'sm:mt-14',
    'sm:pb-16', 'sm:pt-16', 'sm:mb-16', 'sm:mt-16',
    'sm:pb-20', 'sm:pt-20', 'sm:mb-20', 'sm:mt-20',
    'sm:pb-24', 'sm:pt-24', 'sm:mb-24', 'sm:mt-24',
    'sm:pb-28', 'sm:pt-28', 'sm:mb-28', 'sm:mt-28',
    'sm:pb-32', 'sm:pt-32', 'sm:mb-32', 'sm:mt-32',
    'sm:pb-36', 'sm:pt-36', 'sm:mb-36', 'sm:mt-36',
    'sm:pb-40', 'sm:pt-40', 'sm:mb-40', 'sm:mt-40',
    'sm:pb-44', 'sm:pt-44', 'sm:mb-44', 'sm:mt-44',
    'sm:pb-48', 'sm:pt-48', 'sm:mb-48', 'sm:mt-48',
    'sm:pb-52', 'sm:pt-52', 'sm:mb-52', 'sm:mt-52',
    'sm:pb-56', 'sm:pt-56', 'sm:mb-56', 'sm:mt-56',
    'sm:pb-60', 'sm:pt-60', 'sm:mb-60', 'sm:mt-60',
    'sm:pb-64', 'sm:pt-64', 'sm:mb-64', 'sm:mt-64',
    'sm:pb-72', 'sm:pt-72', 'sm:mb-72', 'sm:mt-72',
    'sm:pb-80', 'sm:pt-80', 'sm:mb-80', 'sm:mt-80',
    'sm:pb-96', 'sm:pt-96', 'sm:mb-96', 'sm:mt-96',
    'object-cover', 'text-white', 'text-black', 'text-beige', 'text-sandy', 'text-beigedeep',
  ]
};

export default config;
