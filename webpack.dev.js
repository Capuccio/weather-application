/** @format */

const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [new ReactRefreshWebpackPlugin()],
	devServer: {
		https: true,
		host: "0.0.0.0",
		compress: true,
		port: 5000,
		historyApiFallback: true,
		hot: true,
		client: false,
		open: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		client: {
			reconnect: true,
		},
	},
})