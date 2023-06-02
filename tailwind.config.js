/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: { cyellow: '#F3DE2C', cdark: '#1C110A', cblue: '#013880' },
        },
    },
    plugins: [require('tailwind-scrollbar')],
}
