const path = require('path');

module.exports = {
  //NOTE: REMEMBER TO FIRST RUN 'npx webpack --config ../webpack.config.js' (INPUT PATH) & (OUTPUT PATH)
  context: path.resolve(__dirname, 'src'), //DECIDES WHERE ROOT(./) POINTS TO SRC FOLDER - THIS HELP WEBPACK BUNDLING FIND THE SRC FOLDER REGARDLES OF WHERE ITS TRIGGERED FROM.
  mode: 'development',
  devtool: 'inline-source-map', //FOR DEVELOPMENT MODE recomended setting
  // entry: './src/entry.js', //ENTRY POINT FILE, if index then rename to index.js - ./ is the root as well as the location of the webpack config file -
  // ENTRY SHORTHAND IS SAME AS BELOW - name PLACEHOLDER IS MAIN BY DEFAULT
  entry: {
    //->#1
    // main: './src/entry.js', //THIS KICKS INTO output.fimename [name] option - DIST FOLDER NOW HAS main.js bundle file
    //->#2
    // molly: './src/entry.js', //THIS KICKS INTO output.fimename [name] option - DIST FOLDER NOW HAS molly.js bundle file
    //->#3
    // main: path.resolve(__dirname, './src/entry.js'), //NODEJS PATH.RESOLVE() POINTS TO ABSOLUTE LOCATION OF THE ENTRY FILE - HELPS US FIND THE SRC FILE WHILE RUNNING WEBPACK COMAND FROM ANY RELATIVE LOCATION.
    //->#4
    main: './entry.js', //BASED ON THE CONTEXT ./ REPRESENTS THE ABSOLUTE PATH TO SRC FOLDER IN WHICH ENTRY.JS RESIDES - WORKS HAND IN HAND WITH CONTEXT FIELD!
  },
  output: {
    iife: true, //WHEN BUNDLED TO DIST, THE EXECUTION OF THE ENTIRE BUNDLE IS THRU IIFE FUNCTION WRAPPER FOR INCREASED SECURITY
    clean: true, //IT AUTOMATICALLY EMPTIES THE DIST DIRECTORY BEFORE BUNDLING PROCESS
    filename: '[name].js', //BY DEFAULT ITS MAIN.JS IF NONE SPECIFIED.
    //NOTE: default is 'path.resolve(process.cwd(),'dist') WHICH IS NONE-ROOT DIRECTORY.
    path: path.resolve(__dirname, 'dist'), //DECIDES WHERE ROOT(./) POINTS TO DIST FOLDER - THIS HELP WEBPACK BUNDLING FIND THE DIST FOLDER REGARDLES OF WHERE ITS TRIGGERED FROM.
  }, //output compose of several settings, so its an object
};
