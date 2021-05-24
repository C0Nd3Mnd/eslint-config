const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended'
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        param: 'param',
        returns: 'returns'
      }
    }
  },
  rules: {
    // Basic
    'camelcase': WARN,
    'max-len': OFF,
    'eqeqeq': WARN,
    'no-else-return': [
      WARN,
      {
        allowElseIf: false
      }
    ],
    'lines-between-class-members': [WARN, 'always'],
    'curly': [WARN, 'all'],
    'no-lonely-if': WARN,
    'no-console': WARN,
    'no-alert': WARN,
    'no-caller': WARN,
    'no-eval': WARN,
    'no-labels': WARN,
    'no-implied-eval': WARN,
    'no-lone-blocks': WARN,
    'no-return-assign': WARN,
    'no-return-await': WARN,
    'no-script-url': WARN,
    'no-self-compare': WARN,
    'no-sequences': WARN,
    'no-throw-literal': WARN,
    'no-unused-expressions': WARN,
    'no-useless-call': WARN,
    'no-useless-concat': WARN,
    'no-useless-return': WARN,
    'no-void': WARN,
    'require-await': WARN,
    // Prettier
    'prettier/prettier': [
      WARN,
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        trailingComma: 'none',
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'lf'
      }
    ],
    // JSDoc
    'jsdoc/check-alignment': WARN,
    'jsdoc/check-indentation': WARN,
    'jsdoc/check-param-names': WARN,
    'jsdoc/check-syntax': WARN,
    'jsdoc/check-tag-names': WARN,
    'jsdoc/newline-after-description': WARN,
    'jsdoc/no-types': WARN,
    'jsdoc/require-description-complete-sentence': WARN,
    'jsdoc/require-description': WARN,
    'jsdoc/require-example': OFF,
    'jsdoc/require-hyphen-before-param-description': WARN,
    'jsdoc/require-jsdoc': [
      WARN,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: [
          'ClassProperty',
          'TSInterfaceDeclaration',
          'TSPropertySignature'
        ]
      }
    ],
    'jsdoc/require-param-description': WARN,
    'jsdoc/require-param-name': WARN,
    'jsdoc/require-param-type': OFF,
    'jsdoc/require-param': WARN,
    'jsdoc/require-returns-check': WARN,
    'jsdoc/require-returns-description': WARN,
    'jsdoc/require-returns-type': OFF,
    'jsdoc/require-returns': WARN,
    'jsdoc/valid-types': OFF,
    // TypeScript
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/member-delimiter-style': [
      WARN,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      WARN,
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': WARN,
    '@typescript-eslint/no-explicit-any': WARN,
    '@typescript-eslint/no-non-null-assertion': WARN,
    '@typescript-eslint/no-unused-vars': WARN,
    // ESLint Comments
    'eslint-comments/no-use': WARN
  }
}
