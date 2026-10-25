import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
	base: '',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: {
				index: path.resolve(import.meta.dirname, 'src/index.js'),
				'sidebar-menu': path.resolve(import.meta.dirname, 'src/sidebar-menu.js')
			},
			formats: ['es']
		},
		rollupOptions: {
			external: ['bootstrap'],
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
});
