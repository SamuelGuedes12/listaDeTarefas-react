import js from "@eslint/js";
import globals from "globals";
import pluginReact, { rules } from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], parser: 'babel-eslint', plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], rules: {"react/jsx-filename-extension": 0, "react/state-in-constructor": 0},
  } languageOptions: { globals: globals.browser },
  pluginReact.configs.flat.recommended,
]);
