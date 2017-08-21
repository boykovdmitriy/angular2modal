const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const merge = require('webpack-merge');

const common = require('./webpack.common');
const loaders = require('./webpack.loaders');
const dev = {
    devtool: "source-map",
    plugins: [
        /*clean build path*/
        new CleanWebpackPlugin('public', {
            root: path.resolve(__dirname, '..'),
            exclude: ['index.html']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'public'),
        historyApiFallback: true,
        compress: true,
        quiet: false,
        headers: {"X-Custom-Header": "yes"},
        stats: {colors: true},
        port: 5000,
        inline: true
    }
};

module.exports = merge(common, loaders, dev);