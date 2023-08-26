const path = require('path');
const html = require('html-webpack-plugin');
const css = require('mini-css-extract-plugin');
const cssMinimizer = require('css-minimizer-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './page.js',
  optimization: {
    chunkIds: 'named', // default to 'deterministic' under prod. mode
    minimizer: ['...', new cssMinimizer()], //spread operator tells webpack to keep the existing JS minimizer - terser.
  },
  output: {
    clean: true,
    filename: '[name].ini.js',
    chunkFilename: '[id].chunk.js',
    assetModuleFilename: 'assets/[name].[hash][ext]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [css.loader, 'css-loader', 'sass-loader'], //Order from right to left - first compile the sass css to regular css, then css-loader to inject code and then css.loader to form a css file
      },
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [css.loader, 'css-loader'],
      },
      {
        test: /\.txt$/i,
        type: 'asset/source', // raw-loader
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/i,
        type: 'asset/resource', // file-loader
        generator: {
          filename: 'IMG/[hash].[name][ext]',
          publicPath: '/apple/',
          outputPath: 'apple/',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline', // url-loader
      },
    ],
  },
  plugins: [
    new css({
      filename: '[name].css',
      chunkFilename: '[name].chunk_css.css',
    }),
    new html({
      filename: 'index.html',
      template: './template/tpl.html',
      title: 'Asset Modules',
      minify: false,
      favicon: './assets/favicon.ico',
    }),
  ],
};
