/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./site/(templates|snippets|controllers|models|layouts)/**/*.twig',
		'./site/(templates|snippets|controllers|models|layouts)/**/*.php',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
