// var express = require('express')
import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

var app = express();

if (process.env.NODE_ENV === 'development') {
  var compiler = webpack(webpackConfig);
  app.use(devMiddleware(compiler, {
    publicPath: "/",
    noInfo: true
  }))
  app.use(hotMiddleware(compiler))
}

app.use(express.static('dist/client'))

app.listen(3000, function () {
  console.log('listening on port 3000') // eslint-disable-line no-console
})
