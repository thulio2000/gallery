const tailwindcss = require('tailwindcss');
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
