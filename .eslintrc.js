module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: [
    '**/framework/commerce/**/*.tsx',
    '**/framework/commerce/**/*.ts',
    '**/framework/commerce/**/*.js',
    '**/framework/bigcommerce/**/*.tsx',
    '**/framework/bigcommerce/**/*.ts',
    '**/framework/bigcommerce/**/*.js',
    '**/framework/bigcommerce/**/*.js',
    'components/common/UserNav/**',
    'components/common/Searchbar/**',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    semi: [1, 'never'],
    'arrow-body-style': [
      2,
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    'import/extensions': [1, 'never'],
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-unused-vars': 'off',

    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,

    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'react/button-has-type': 0,

    // reduced ruleset
    'react/function-component-definition': [
      0,
      { namedComponents: 'arrow-function' },
    ],
    '@typescript-eslint/no-unused-vars': 0,
    'react/no-children-prop': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/display-name': 0,
    'react/require-default-props': 0,
    'import/no-anonymous-default-export': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-undef': 0,
    'no-restricted-exports': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    // reduced ruleset
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
}
