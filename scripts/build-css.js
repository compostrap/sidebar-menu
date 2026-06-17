import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import * as sass from "sass";

const input = "src/scss/sidebar-menu.scss";
const output = "dist/sidebar-menu.css";

const result = sass.compile(input, {
	loadPaths: ["node_modules"],
	style: "expanded",
	quietDeps: true,
	silenceDeprecations: [
		"import",
		"if-function",
		"global-builtin",
		"color-functions"
	]
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, result.css);
