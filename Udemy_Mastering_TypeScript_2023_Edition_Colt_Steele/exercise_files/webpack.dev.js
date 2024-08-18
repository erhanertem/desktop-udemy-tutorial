const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/exercises.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 9000,
    client: {
      overlay: true, //print error on the browser window
      progress: true, //shows the compilation process on the browser window
    },
    // allowedHosts: ['.host.com', 'host2.com'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
};
