import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	base: "",
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				silenceDeprecations: [
					"import",
					"if-function",
					"global-builtin",
					"color-functions"
				]
			}
		}
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
		cssCodeSplit: false,
		cssMinify: false,
		lib: {
			entry: {
				index: path.resolve(__dirname, "src/index.js"),
				"sidebar-menu": path.resolve(__dirname, "src/sidebar-menu.js")
			},
			formats: ["es"]
		},
		rollupOptions: {
			external: ["bootstrap"],
			output: {
				entryFileNames: "[name].js",
				assetFileNames: (assetInfo) => {
					return assetInfo.name?.endsWith(".css") ? "sidebar-menu.css" : "assets/[name].[ext]";
				}
			}
		}
	}
});
