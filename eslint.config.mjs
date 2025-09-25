// import js from "@eslint/js";
import globals from "globals";
import pluginJs from "@eslint/js";
// import { defineConfig } from "eslint/config";

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: { globals: globals.node },
    rules: {
      semi: "error",
      "no-unused-vars": "off",
      "no-undef": "error",
    },
  },
];
