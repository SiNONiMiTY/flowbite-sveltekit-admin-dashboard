import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        import( 'flowbite/plugin' ),
    ],
    darkMode: 'class',
}

export default config
