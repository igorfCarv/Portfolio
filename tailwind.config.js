import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                primary: "Playfair Display",
                body: "work Sans",
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    lg: "3rem",
                },
            },
            colors: {
                "light-primary": "#FFFFFF",
                "light-secondary": "#FDFAF6",
                "light-secondary-blue":"#e0efff",
                "light-tail-100": "#8AC3FF",
                "light-tail-500": "#20558D",
                "dark-primary": "#050402",
                "dark-secondary": "#1C1D24",
                "dark-navy-100": "#07567D",
                "dark-navy-500": "#292D42",
                accent: {
                    DEFAULT: "#152C4E",
                    hover: "#925a2b",
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red,
            },

        },
    },

    plugins: [require("@tailwindcss/forms")],
};
