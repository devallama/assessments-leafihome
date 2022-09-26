module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'entry',
                corejs: 3
            }
        ],
        '@babel/react',
        '@babel/preset-typescript'
    ],
    plugins: ['babel-plugin-styled-components']
};
