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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    modules: ['src', 'src/client', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
    ]
  },
  devtool: 'eval-source-map'
};
