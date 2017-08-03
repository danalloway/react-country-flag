const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    env = env || 'development';
    const IS_PROD = env === 'production';

    let config = {
        devtool: IS_PROD ? 'source-map' : 'eval',
        entry: {
            'react-country-flag': IS_PROD ? './lib/index.js' : './lib/demo.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: './index.html',
                filename: 'docs/index.html'
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
        }
    };

    if (IS_PROD) {
        config.output['library'] = 'ReactCountryFlag';
        config.output['libraryTarget'] = 'umd';
        config['externals'] = {
            'react': 'React',
            'react-dom': 'ReactDOM'
        };
    } else {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
        config['devServer'] = {
            host: 'localhost',
            port: 3001,
            contentBase: 'build',
            hot: true,
            quiet: true
        };
    }

    return config;
};
