const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './entry.js',
  optimization: {
    minimize: true, // default to true under prod. mode and false under the development mode - GENERALLY NOT REQUIRED TO SET AS ITS IMPOSED BY MODE SELECTION
    // minimizer:['...', new plugin()] // JS, CSS, HTML
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: { ignored: [path.resolve(__dirname, 'node_modules')] },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
