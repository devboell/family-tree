import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

const app = express()

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig)
  app.use(devMiddleware(compiler, {
    publicPath: '/',
    noInfo: true,
  }))
  app.use(hotMiddleware(compiler))
}

app.use(express.static('dist/client'))

const portNr = process.env.PORT || 3000
app.listen(portNr, () => {
  console.log('listening on port', portNr) // eslint-disable-line no-console
})
