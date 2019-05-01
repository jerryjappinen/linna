module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'import',
    'standard',
    'vue'
  ],
  extends: [
    // 'esnext',
    // 'esnext/style-guide',
    'standard',
    '@vue/standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'no-var': ['error'],
    'prefer-const': ['error'],
    'array-bracket-spacing': ['error', 'never'],

    'brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],

    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],

    // Number of consecutive blank lines allowed
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 3,
        maxBOF: 2,
        maxEOF: 1
      }
    ],

    // Use spaces when declaring, not calling a method
    'space-before-function-paren': ['warn', 'always'],

    // This depends on situation: sometimes whitespace is good, sometimes not
    'padded-blocks': ['off'],



    // Import

    'import/no-commonjs': ['off'],
    'import/prefer-default-export': ['off'],
    'sort-imports': ['off'],
    'import/no-unresolved': ['off'],
    'import/no-namespace': ['off'],



    // Vue
    // https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off'

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
