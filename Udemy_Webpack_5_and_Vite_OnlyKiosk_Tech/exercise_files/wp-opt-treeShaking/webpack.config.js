const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  //   mode: 'production', // treeShaking under prod. mode
  mode: 'development', // treeShaking under prod. mode
  devtool: 'inline-source-map',
  entry: './entry.js',
  optimization: {
    //NOTE: DISABLING BOTH OPTIONS WILL DISABLE TREE SHAKING MODE
    // providedExports: true, //ENABLED BY DEFAULT IN PROD - DETERMINES WHICH EXPORTS ARE PROVIDED BY MODULES.
    usedExports: true, //ENABLED BY DEFAULT IN PROD - DETERMINES USED EXPORTS
    //minimize:true, // default to true under prod. mode
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
