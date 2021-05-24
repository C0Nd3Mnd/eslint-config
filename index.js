const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  root: true,
  env: {
    node: true
  },
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
    'max-len': OFF,
    'eqeqeq': ERROR,
    'no-else-return': [
      ERROR,
      {
        allowElseIf: false
      }
    ],
    'lines-between-class-members': [ERROR, 'always'],
    'curly': [ERROR, 'all'],
    'no-lonely-if': ERROR,
    'no-console': WARN,
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-eval': ERROR,
    'no-labels': ERROR,
    'no-implied-eval': ERROR,
    'no-lone-blocks': ERROR,
    'no-return-assign': ERROR,
    'no-return-await': ERROR,
    'no-script-url': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unused-expressions': ERROR,
    'no-useless-call': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-return': ERROR,
    'no-void': ERROR,
    'require-await': ERROR,
    // Prettier
    'prettier/prettier': [
      ERROR,
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
      ERROR,
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
      ERROR,
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ERROR,
    '@typescript-eslint/no-explicit-any': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
    // ESLint Comments
    'eslint-comments/no-use': ERROR
  }
}
