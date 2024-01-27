import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:9090/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/api/v1')
			}
		}
	}
});
