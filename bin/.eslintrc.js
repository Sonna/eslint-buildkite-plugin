module.exports = {
    parser: '@typescript-eslint/parser',
    env: { browser: true, jquery: true, jasmine: true, amd: true, es6: true },
    parserOptions: { ecmaVersion: 8, sourceType: 'module' },
    plugins: ['@typescript-eslint', 'react', 'jest', 'jsx-a11y'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    globals: {
        module: false,
        require: false,
        spyOnEvent: false,
        loadFixtures: false,
        readFixtures: false,
        global: false,
        process: false,
        __: false,
        __dirname: false,
        __DEV__: false,
        jest: false,
        exports: false,
    },
    settings: {
        react: {
            version: '16.8',
        },
    },
    rules: {
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    FunctionComponent: {
                        message: 'Use FC instead',
                        fixWith: 'FC',
                    },
                    StatelessFunctionComponent: {
                        message: 'Use FC instead',
                        fixWith: 'FC',
                    },
                    SFC: {
                        message: 'Use FC instead',
                        fixWith: 'FC',
                    },
                },
            },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'jsx-a11y/aria-role': [
            'error',
            {
                ignoreNonDOM: true,
            },
        ],
        'react/prop-types': ['error', { ignore: ['children'] }],
        'no-restricted-imports': [
            'warn',
            {
                paths: [
                    {
                        name: '@99designs/common/components',
                        message:
                            'Please import just the necessary component(s), rather than all common components',
                    },
                    {
                        name: 'chai',
                        message: 'Use Jest instead!',
                    },
                    {
                        name: 'flightjs',
                        message: 'Please just use anything else instead!',
                    },
                    {
                        name: 'jquery',
                        message: 'Please avoid using jQuery http://youmightnotneedjquery.com/',
                    },
                    {
                        name: 'moment',
                        message: 'Use date-fns or Luxon instead!',
                    },
                    {
                        name: 'lodash',
                        message:
                            'Please do not import lodash directly, use a sub-package instead; e.g. lodash.debounce!',
                    },
                    {
                        name: 'sinon',
                        message: 'Try jest.fn() instead!',
                    },
                    {
                        name: 'superagent',
                        message: 'Use fetch instead!',
                    },
                ],
                patterns: ['!@99designs/common/components/*'],
            },
        ],
    },
    overrides: [
        {
            files: ['**/*{.,-}story.{js,jsx,ts,tsx}'],
            rules: {
                'react/display-name': 'off',
            },
        },
        {
            files: ['**/*{.,-}{story,test}.{js,jsx,ts,tsx}'],
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-object-literal-type-assertion': 'off',
            },
        },
        {
            files: ['**/*{.,-}test.{js,jsx,ts,tsx}'],
            env: { 'jest/globals': true },
            plugins: ['jest'],
            rules: {
                'jest/no-alias-methods': 'warn',
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/no-jest-import': 'error',
                'jest/no-jasmine-globals': 'warn',
                'jest/no-test-prefixes': 'error',
                'jest/valid-describe': 'error',
                'jest/valid-expect': 'error',
                'jest/valid-expect-in-promise': 'error',
            },
        },
    ],
};
