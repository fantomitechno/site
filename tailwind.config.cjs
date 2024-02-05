const headerHeight = '128px';

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            flex: {
                "0": 0,
                "1": 1,
            },
            colors: {
                primary: '#f08e70',
                'primary-dark': 'rgb(175 52 14)',
                secondary: '#77167f'
            },
            height: {
                header: headerHeight,
                screen: '100dvh',
                'screen-no-header': `calc(100dvh - ${headerHeight})`
            },
            width: {
                'h-screen': '100dvw'
            },
            backgroundImage: {
                banner: "url('/images/background.webp')"
            }
        },
        screens: {
            s: '320px',
            l: '425px',
            m: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        }
    },
    plugins: []
};
