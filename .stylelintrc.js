module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  plugins: ['stylelint-scss'],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'mixin',
          'include',
          'return',
          'if',
          'else',
          'each',
          'for',
          'at-root',
          'use',
          'forward',
          'debug',
          'warn'
        ]
      }
    ],

    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z_0-9-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,

    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'mixin',
          'include',
          'return',
          'if',
          'else',
          'each',
          'for',
          'at-root',
          'use',
          'forward',
          'debug',
          'warn'
        ]
      }
    ]
  }
}
