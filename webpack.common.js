/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin")
const DotEnv = require('dotenv-webpack')

module.exports = {
	entry: './src/index.tsx',
	plugins: [
		new DotEnv({
			path: path.resolve(__dirname, '.env'),
			systemvars: true
		}),
		new InterpolateHtmlPlugin({
			PUBLIC_URL: 'static',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'swc-loader',
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsWebpackPlugin({
			extensions: ['*', '.ts', '.tsx', '.js'],
		})]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
}
