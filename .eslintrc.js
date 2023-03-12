module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],

  // add your custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'lines-between-class-members': ['error', 'always'],
    'space-before-function-paren': ['error'],
    'no-console': ['off'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'vue/require-prop-types': 'off',
    'linebreak-style': 'off'
  }
}
