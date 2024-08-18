const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  //->#1.SINGLE ENTRY POINT - ONE FILE
  //entry:'./entry.js', //SHORTHAND VERSION
  //   entry: {
  //     main: './entry.js',
  //   }, //LONG VERSION
  // NOTE: MULTIPLE FILES ARE WRAPPED BY [] OR {}
  //->#2.SINGLE ENTRY POINT, MULTIPLE FILES
  //NOTE: DIST FOLDER WILL BEAR ONE BUNDLED FILE AS ITS STILLA SINGLE ENTRY POINT
  //entry:['./entry.js','./entryTwo.js'],
  //->#3.MULTIPLE ENTRY POINTS, MULTIPLE FILES
  //NOTE: DIST FOLDER WILL BEAR TWO BUNDLED FILE AS ITS A DOUBLE ENTRY POINT
  entry: {
    //-->#3.1 DOES NOT SHARE CODE TO REDUCE THE TOTAL FILE SIZE
    // pageOne: './entry.js',
    // pageTwo: './entryTwo.js',
    //-->#3.2 DOES SHARE CODE TO REDUCE THE TOTAL FILE SIZE
    pageOne: {
      import: './entry.js', //FILE NAME AS APPEARS ON THE DIST FOLDER
      filename: './PageOne/[name].js', //MAKES IT BE STORED IN A CUSTOM DIRECTORY INSIDE DIST FOLDER
      dependOn: 'shared', //DEPEND ON LIST
    },
    pageTwo: {
      import: './entryTwo.js', //FILE NAME AS APPEARS ON THE DIST FOLDER
      dependOn: 'shared', //DEPEND ON LIST
    },
    //->FOR EVERY ENTRY POINT WE HAVE TO SPECIFY THE SHARED FILE AS APPEARS ON THE DIST FOLDER
    shared: './shared.js',
  },
  optimization: {
    minimize: true, // default to true under prod. mode
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
