module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prefer-const': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'static-field',
                    'instance-field',
                    'constructor',
                    'static-method',
                    'instance-method',
                    'abstract-method'
                ]
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0
    }
};
