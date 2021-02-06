const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.vue',
            './src/**/*.js'
        ],
    },
    theme: {
        colors: {
            white: colors.white,
            gray: colors.trueGray,
        },
    },
    variants: {},
    plugins: []
}