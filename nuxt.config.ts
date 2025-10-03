import path from 'path';

const getPath = (localPath: string) => path.resolve(__dirname, localPath);
const baseURL = '/clothing-shop';

export default defineNuxtConfig({
	compatibilityDate: '2025-10-03',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint'],
	app: {
		baseURL,
		head: {
			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{ charset: 'UTF-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			link: [
				{
					rel: 'icon',
					href: `${baseURL}/favicon.ico`,
					sizes: 'any',
				},
				{
					rel: 'icon',
					href: `${baseURL}/favicon.svg`,
					type: 'image/svg+xml',
				},
				{
					rel: 'apple-touch-icon',
					href: `${baseURL}/apple-touch-icon.png`,
					type: 'image/png',
					sizes: '180x180',
				},
				{
					rel: 'apple-touch-icon',
					href: `${baseURL}/icon-512.png`,
					type: 'image/png',
					sizes: '512x512',
				},
				{
					rel: 'apple-touch-icon',
					href: `${baseURL}/icon-192.png`,
					type: 'image/png',
					sizes: '192x192',
				},
			],
		},
	},
	css: [
		'@styles/normalize.scss',
		'@styles/fonts.scss',
	],
	postcss: { plugins: {
		'postcss-preset-env': {},
		'postcss-combine-media-query': {},
	}},

	alias: {
		'@styles': getPath('./app/assets/styles'),
		'@images': getPath('./app/assets/images'),
		'@icons': getPath('./app/assets/icons'),
		'@fonts': getPath('./app/assets/fonts'),
	},
});