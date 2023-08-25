const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './entry.js',
  optimization: {
    // chunkIds: 'named',
    chunkIds: 'deterministic',

    splitChunks: {
      minSize: 2000, // bytes
    },
  },
  output: {
    asyncChunks: true, // default to true - IF YOU WANT TO TURN LAZY LOADING OFF MAKE IT FALSE
    clean: true,
    filename: '[name].ini.js', // initial chunk - ENTRY FILE
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: { ignored: [path.resolve(__dirname, 'node_modules')] },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
