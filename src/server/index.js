var express = require('express')
var webpack = require("webpack")
var devMiddleware = require("webpack-dev-middleware")
var hotMiddleware = require("webpack-hot-middleware")
var webpackConfig = require("../../webpack.config")

var app = express();
var compiler = webpack(webpackConfig);

app.use(devMiddleware(compiler, {
  publicPath: "/",
  noInfo: true
}))
app.use(hotMiddleware(compiler))

app.use(express.static('dist'))

app.listen(3000, function () {
  console.log('listening on port 3000') // eslint-disable-line no-console
})
