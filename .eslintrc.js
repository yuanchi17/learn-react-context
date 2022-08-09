module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0, // https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation/64707357#64707357
    'multiline-ternary': 0, // 0 = off, 1 = warn, 2 = error
    'no-return-await': 0, // 0 = off, 1 = warn, 2 = error
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
  },
}
