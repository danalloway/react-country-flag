const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'react-country-flag': './lib/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: 'ReactCountryFlag',
        libraryTarget: 'umd',
    },
    externals: [
        'react',
        'react-dom',
        'prop-types'
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
