const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './page.js',
  optimization: {
    chunkIds: 'named', // default to 'deterministic' under prod. mode
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
    new html({
      filename: 'index.html',
      template: './template/tpl.html',
      title: 'Asset Modules',
      minify: false,
      favicon: './assets/favicon.ico',
    }),
  ],
};
