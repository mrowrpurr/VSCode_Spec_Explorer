import { defineConfig } from "@vscode/test-cli";

export default defineConfig({
	files: "dist/**/*.spec.js",
	// workspaceFolder: "D:/",
	mocha: {
		timeout: 10000
	}
});
