module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        '@devallama/eslint-config/react',
        '@devallama/eslint-config/typescript',
        '@devallama/eslint-config/prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    overrides: [
        {
            files: ['**/*.context.ts'],
            rules: {
                '@typescript-eslint/no-unused-vars': 0,
                '@typescript-eslint/no-empty-function': 0
            }
        }
    ]
};
