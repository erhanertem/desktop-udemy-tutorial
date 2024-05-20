const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/app.ts',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool: false,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	// plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
