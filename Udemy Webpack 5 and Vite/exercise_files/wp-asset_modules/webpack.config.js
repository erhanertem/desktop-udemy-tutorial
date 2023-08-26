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
    // assetModuleFilename: '[name].[hash][ext]', //default is [hash][ext]
    assetModuleFilename: 'assets/[name].[hash][ext]', //w/folder definition
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        type: 'asset/source', // raw-loader
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/i,
        // type: 'asset/resource', // file-loader
        type: 'asset', // file-loader
        generator: {
          filename: 'IMG/[hash].[name][ext]',
          publicPath: '/apple/',
          outputPath: 'apple/',
        },
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 1000 * 1024, //threshold pic size - THROWS WARNING. NOT EFFIFCIENT
        //   },
        // },
      },
      {
        test: /\.svg$/i,
        // type: 'asset/inline', // url-loader
        type: 'asset', // url-loader
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 10, //bytes - DEFAULT IS 8BYTES. KEEPING IT @ 8BYTES IS RECOMMENDED.
        //   },
        // },
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
