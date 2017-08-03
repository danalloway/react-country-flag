const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        'react-country-flag': './lib/demo.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/static'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader')
                }
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3001,
        contentBase: 'build',
        hot: true,
        quiet: true
    }
};
