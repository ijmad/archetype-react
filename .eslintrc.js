module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: true,
  },
  plugins: ["import", "prettier", "react"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "no-unused-vars": "error",
    "import/export": "error",
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-mutable-exports": "error",
    "import/no-restricted-paths": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "error",
    "import/no-unresolved": "error",
  },
};
