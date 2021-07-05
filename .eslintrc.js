module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'plugin:shopify/react',
    'plugin:shopify/polaris',
    'plugin:shopify/jest',
    'plugin:shopify/webpack',
    'plugin:prettier/recommended'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'quotes': [2, "single", { "avoidEscape": true }],
    'react/react-in-jsx-scope': "off",
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0
  },
  overrides: [
    {
      files: ['*.test.*'],
      rules: {
        'shopify/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
};
