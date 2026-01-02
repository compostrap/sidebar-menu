import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'if-function',
					'global-builtin',
					'color-functions'
				]
			}
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: path.resolve(__dirname, 'vite.build.js'),
			formats: ['es']
		},
		cssMinify: false,
		rollupOptions: {
			output: {
				assetFileNames: 'sidebar.menu.[ext]',
				entryFileNames: 'sidebar.menu.js'
			}
		}
	}
});
