/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            fontFamily: {
                'karan': 'Karantina',
                'varela': 'Varela Round'
            },
            colors: {
                'byellow': '#EBC678',
                'bwhite': '#DFE1E0',
                'bred': '#D28782',
                'bcyan': '#B4C6D0',
                'bblue': '#1B78AF'
            },
            variants: {
                animation: ["motion-safe"]
            },
            animation: {
                fadeIn: "fadeIn 0.7s ease-in forwards "
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: 'translate(0, 50px)' },
                    "100%": { opacity: 1 }
                }
            }
        },

    },
    plugins: [require("tailwindcss-animation-delay")],
}