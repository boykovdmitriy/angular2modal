const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".js", ".ts", ".css"]
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader'
        }, {
            test: /\.ts/,
            loaders: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader?keepUrl=true']
        }, {
            /*for templates included in app*/
            test: /\.html/,
            loader: 'file-loader?name=templates/[hash].[ext]',
            include: [
                path.resolve(__dirname, "../src")
            ]
        }, {
            /*for styles included in app*/
            test: /\.css/,
            loader: 'file-loader?name=styles/[hash].[ext]',
            include: [
                path.resolve(__dirname, "../src")
            ],
            exclude: [
                path.resolve(__dirname, "../src/styles")
            ]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),
            include: [
                path.resolve(__dirname, "../src/styles")
            ]
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.png$/,
            loader: 'url-loader',
            query: {mimetype: 'image/png'}
        }, {
            test: /\.gif$/,
            loader: 'url-loader',
            query: {mimetype: 'image/gif'}
        }, {
            test: /\.jpeg$/,
            loader: 'url-loader',
            query: {mimetype: 'image/jpeg'}
        }]
    }
};