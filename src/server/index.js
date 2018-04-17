// @flow
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import webpackConfig from '../../webpack.config'
import api from './api'

const isDevelopment = process.env.NODE_ENV !== 'production'
const isDeployment = process.env.DEPLOYMENT === 'true'
const isAnalyzer = process.env.ANALIZER === 'true'

const app = express()
const compiler = webpack(webpackConfig)
const port = isDeployment ? 80 : process.env.PORT || 8080

if (!isDevelopment) {
  app.get(
    /\.js$/,
    (
      req: express$Request,
      res: express$Response,
      next: express$NextFunction
    ) => {
      req.url = `${req.url}.gz`
      res.set('Content-Encoding', 'gzip')
      next()
    }
  )
}
app.use(express.static(path.join(__dirname, '../../public'))).use('/api', api)

if (isDevelopment) {
  app
    .use(webpackDevMiddleware(compiler))
    .use(
      webpackHotMiddleware(
        compiler.compilers.find(compiler => compiler.name === 'client')
      )
    )
    .use(webpackHotServerMiddleware(compiler))
} else {
  const serverRender = require('../../dist/server.js').default

  app.use(serverRender())
}

app.listen(port, error => {
  if (!error && !isAnalyzer) {
    setTimeout(
      () =>
        console.log(`Application listening at: ==> http://localhost:${port}`),
      12533
    )
  }
})
