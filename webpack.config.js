var webpack = require("webpack"),
    path    = require("path");

module.exports = {
	devtool  : "source-map",
	entry    : {
		"app": "./app/boot.ts"
	},
	output   : {
		"filename": "./public/[name].js"
	},
	resolve  : {
		extensions: ["", ".js", ".ts", ".css"]
	},
	module   : {
		loaders: [
			{
				test  : /\.ts/,
				loader: "ts"
			},
			{
				test   : /\.css$/,
				exclude: /node_modules/,
				loader : "to-string-loader!css"
			},
			{
				test  : /\.html/,
				loader: 'raw'
			},
			{
				test  : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			}, {
				test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}]
	},
	devServer: {
		historyApiFallback: true,
		compress          : false,
		quiet             : false,
		noInfo            : false,
		headers           : {"X-Custom-Header": "yes"},
		stats             : {colors: true},
		port              : 5000,
		inline            : true,
		watch             : true,
		open              : true
	}
};