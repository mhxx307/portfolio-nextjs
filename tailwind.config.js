/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primaryBg: '#252423',
                randomColor: '#2d2b2b',
                primary: '#797878',
                colorTem: '#cc6c06',
                secondary: '#000',
                anchor: '#adabab',
                sideBarBg: '#222222',
                lightBg: '#ddd',
                typical: 'rgb(0, 0, 0)',
                themeWrapperBg: '#252423',
                primaryText: '#878787',
                hover: '#fff',
            },
            boxShadow: {
                shadowCustom: '0 0 15px 0px #0808084c',
            },
        },
    },
    plugins: [],
};
