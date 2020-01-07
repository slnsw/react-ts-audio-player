module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: [
    // Typescript recommended settings disabled for now - too many errors!
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    // 'react-app',
    // Prettier config disables any formatting rules
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  //   'plugin:css-modules/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // Next JS has a Link component that wraps around <a></a>, inserting the href during compilation. Disable for now.
    'jsx-a11y/anchor-is-valid': 0,
    // Disable JS no-unused-vars and enable TS no-unused-vars, otherwise there is confusion.
    'no-unused-vars': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'linebreak-style': 0,
  },
  settings: {
    // Enable Typescript imports to be recognised
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
