/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/features/**/*.{js,ts,jsx,tsx}',
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
                colorTem: 'cyan', //#cc6c06
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
        screens: {
            '4xl': { min: '2000px' },
            m4xl: { max: '1900px' },
            m2xl: { max: '1535px' },
            // => @media (max-width: 1535px) { ... }
            mxl: { max: '1200px' },
            // => @media (max-width: 1279px) { ... }
            mlg: { max: '1024px' },
            // => @media (max-width: 1023px) { ... }
            mmd: { max: '768px' },
            // => @media (max-width: 767px) { ... }
            msm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
            mss: { max: '450px' },
            xs: '480px',
            ss: '640px',
            sm: '768px',
            md: '1024px',
            lg: '1280px',
            xl: '1536px',
        },
        fontFamily: {
            helvetica: ['Helvetica Neue', 'sans-serif'],
        },
    },
    plugins: [],
};
