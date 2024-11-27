import { defineConfig } from "@vscode/test-cli";

export default defineConfig({
	files: "../spec/dist/integration/**/*.spec.js",
	mocha: { timeout: 3000 }
});
