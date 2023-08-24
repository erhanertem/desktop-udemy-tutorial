const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  //PRODUCTION MODE SETTINGS
  mode: 'production',
  devtool: 'source-map',

  //DEVELOPEMENT MODE SETTINGS
  // mode: 'development',
  // devtool: 'inline-source-map',

  //SHORTHAND FORMAT
  // entry: './entry.js',
  //FULL FLEDGED FORMAT
  entry: {
    main: './entry.js',
  },

  output: {
    // iife: false,
    iife: true, //DEFAULT OPTION
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  watch: true, //EITHER INCLUDE --watch IN THE COMMAND OR STATE HERE
  watchOptions: {
    // ignored: /node_modules/,
    // ignored: [path.resolve(__dirname, 'node_modules')],
    ignored: ['**/node_modules', '**/src/info.js'], //GLOBE PATTTERN INCLUDED WITH WEBPACK
  },
};
