// @ts-check

// eslint config < 9.0.0
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

// eslint flat config >= 9.0.0
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
// import next from "@next/eslint-plugin-next"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
    },
    // plugins: {
    //   "@next/next": next,
    // },
    // rules: {
    //   ...next.configs.recommended.rules,
    // },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  }
)
