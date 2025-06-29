import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'sveltekit-adapter-chrome-extension';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	env: {
		dir: './'
	},
	kit: {
		adapter: adapter({
			pages: '../Zenflow-extension/build',
			assets: '../Zenflow-extension/build',
			fallback: null,
			precompress: false,
			manifest: 'manifest.json'
		}),
		appDir: 'app'
	}
};

export default config;
