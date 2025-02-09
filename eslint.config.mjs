// eslint.config.js
import { ESLint } from "eslint";

export default new ESLint({
  baseConfig: {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "tailwindcss"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended",
      "next",
      "next/core-web-vitals"
    ],
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"]
        }
      }
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off"
    }
  }
});
