const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        app: './client/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    '@svgr/webpack',
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'static/assets'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'static/assets'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        publicPath: '/',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, './tsconfig.json')
            })
        ]
    }
};
