const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './entry.js',
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    // -> SHORTHAND SYNTAX - DIRECTLY ASSIGN A NAME
    //   library: 'mylib',
    // -> LONG VERSION
    library: {
      name: 'mylib', //NAME OF THE LIBRARY
      //   type: 'var', //DECIDES HOW LIBRARY WILL BE EXPOSED
      //   type: 'commonjs',
      //   type: 'commonjs2',
      //   type: 'amd',
      type: 'umd', //--> UMD supports commonjs, commonjs2, AMD, browsers
      export: ['product', 'spec', 'engine', 'fuel'],
    },
  },
  //-> SPECIFY PACKAGES THAT WILL BE EXCLUDED FROM BUNDLED FILES
  externals: {
    //--> 'jquery' FIELD NAME corresponds to import name of the npm package
    // jquery: '$', // or jQuery; decided by CDN file
    jquery: {
      root: '$',
      commonjs: 'apple',
      commonjs2: 'orange',
      amd: 'brown',
    },
  },
};
