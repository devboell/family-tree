const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src/client'),
  entry: {
    main: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
