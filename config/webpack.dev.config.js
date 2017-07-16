const webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './main.js',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'eval-source-map',
}
