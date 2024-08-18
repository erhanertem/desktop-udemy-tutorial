const path = require('path');
const html = require('html-webpack-plugin');
const webpack = require('webpack'); //REQUIRED FOR SHIMMING

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  // entry: './entry.js',
  entry: {
    pageOne: {
      import: './entry.js',
      dependOn: 'shared',
    },
    pageTwo: {
      import: './entryTwo.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  optimization: {
    chunkIds: 'named',
    // chunkIds: 'deterministic',
    splitChunks: {
      minSize: 2000, // bytes
      chunks: 'async', //OPTIONS ARE async, all, initial - SPECIFY CHUNKS TO BE FURTHER SPLIT. FILES NEEDS TO HAVE DEPENDENCIES (imports) TO BE FURTHER SPLIT INTO CHUNKS.
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      //SHIMMING PLUGIN - THIS IS TO MAKE MODULE AVAILABLE TO ALL MODULES IN THE PROJECT GLOBALLY
      //NODEMODULE
      _: 'lodash',
      join: ['lodash', 'join'],
      //FILE
      func: './functions.js', //MAKE FUNCTIONS TYPES GLOBAL FROM THIS FILE
      default_func: ['./functions.js', 'default'], //ALIAS with default to diffrentiate from funcs - MAKE DEFAULT FUNC TYPE GLOBAL FROM THIS FILE
      default_func2: ['./functions2.js', 'default'],
      sayHi: ['./functions.js', 'sayHi'], //NAME THE FUNCTION TO BE ASSIGNED GLOBALLY AFTER ABOVE
    }),
    new html({
      filename: 'pageOne.html',
      chunks: ['pageOne', 'shared'], //Creates a seperate chunk for this entry point - SEPERATES THE LINK FROM OTHER ENTRY POINTS
      minify: false, //true under prod. mode
      inject: 'body', //default head
      title: 'by htmlWebpackPlugin page One', //custom title name for the page
      template: './template.html',
    }),
    new html({
      filename: 'pageTwo.html',
      chunks: ['pageTwo', 'shared'], //Creates a seperate chunk for this entry point - SEPERATES THE LINK FROM OTHER ENTRY POINTS
      minify: false, //true under prod. mode
      inject: 'body', //default head
      title: 'by htmlWebpackPlugin page Two', //custom title name for the page
      template: './template.html',
    }),
  ], //THIS FIELD ALLOWS MULTIPLE PLUGINS INSTALLATION
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
