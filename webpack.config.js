const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const prodConfig = require('./config/webpack.prod.config')
const devConfig = require('./config/webpack.dev.config')
const merge = require('webpack-merge')


const commonConfig = {
  context: path.resolve(__dirname, './src/client'),
  output: {
    path: path.resolve(__dirname, './dist/client'),
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],

  resolve: {
    modules: ['src', 'src/client', 'src/images', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
    ],
  },
}

function envConfig() {
  return process.env.NODE_ENV === 'development'
    ? devConfig
    : prodConfig
}

module.exports = merge(commonConfig, envConfig())
