// export default {
//   root: true,
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   extends: [
//     "next/core-web-vitals",
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended",
//     "prettier",
//   ],
//   rules: {
//     "@typescript-eslint/ban-ts-comment": "warn",
//     "@typescript-eslint/no-var-requires": "warn",
//     "@typescript-eslint/no-unused-vars": "warn",
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     sourceType: "module",
//     ecmaVersion: "esnext",
//   },
//   env: {
//     es6: true,
//     browser: true,
//     jest: true,
//     node: true,
//   },
// }
// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended)
