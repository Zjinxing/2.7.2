const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /.san$/,
				use: 'san-loader'
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	plugins: [
	    new UglifyJSPlugin(),
	    new HtmlWebpackPlugin({
	    	template: './src/index.html'
	    }),
	    new CleanWebpackPlugin(['dist'])
	],
	entry: './src/index.js',

	output: {
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development'
};
