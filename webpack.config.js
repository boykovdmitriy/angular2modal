var webpack           = require("webpack"),
    path              = require("path");

module.exports = {
	devtool  : "source-map",
	entry    : {
		"app": "./app/boot.ts"
	},
	output   : {
		"filename"  : "./public/[name].js"
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
				loader : "style!css"
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		compress          : false,
		quiet             : false,
		noInfo            : false,
		stats             : {colors: true},
		port              : 5000,
		inline            : false,
		watch             : true,
		open              : true
	}
};