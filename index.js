module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: [
      'error',
      2,
      { MemberExpression: 'off', SwitchCase: 1, ignoreComments: true },
    ],
    'max-len': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-continue': 'off',
    'no-loop-func': 'off',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-self-compare': 'off',
    'no-shadow': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'warn',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    radix: 'off',
    semi: ['error', 'never'],
    'semi-style': ['error', 'first'],
    'space-infix-ops': 'error',
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
  },
}
