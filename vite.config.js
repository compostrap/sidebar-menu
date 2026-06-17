import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	base: "",
	build: {
		outDir: "dist",
		emptyOutDir: true,
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
				entryFileNames: "[name].js"
			}
		}
	}
});
