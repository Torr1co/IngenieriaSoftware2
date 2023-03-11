module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "no-console": "warn",
    "no-nested-ternary": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-unknown-property": ["warn", {}],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-warning-comments": "warn",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
  },
};
