import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  {
    ignores: [
      "dist/",
      "build/",
      "node_modules/",
      "*.min.js",
      "*.min.css",
      ".cache/",
      "coverage/",
      "*.log",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      ".DS_Store",
      "Thumbs.db",
      "vite.config.ts.timestamp-*",
      "*.tsbuildinfo",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
