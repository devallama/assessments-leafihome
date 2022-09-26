const BASE_CONFIG = require('./webpack.config');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

const CONFIG = {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './client/views/index.ejs'),
            filename: 'index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 4001,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
};

module.exports = merge(BASE_CONFIG, CONFIG);
