const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/client'),
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './main.js'
    ],
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
]
};
