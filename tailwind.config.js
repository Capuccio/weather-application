/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				"gray": "#d3d5da",
				"white-card": "#FBFBFB",
			},
			boxShadow: {
				"card": "0 0 27px -4px rgb(0 0 0 / 0.11)",
				"list": "0 14px 17px -4px rgb(0 0 0 / 0.11)"
			}
		},
	},
	plugins: [],
}
