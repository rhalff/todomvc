import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const isDevelopment = process.env.NODE_ENV !== 'production'
const isAnalyzer = process.env.ANALYZER === 'true'

export default type => {
  const plugins = [
    new ExtractTextPlugin({
      filename: '../../public/css/style.css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: !isDevelopment,
      options: {
        postcss: [autoprefixer]
      }
    })
  ]

  if (isAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    )
  }

  if (type === 'client') {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: mod => /node_modules/.test(mod.context)
      })
    )
  }

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    )
  } else {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: {
          screw_ie8: true
        },
        compress: {
          screw_ie8: true,
          dead_code: true,
          unused: true
        },
        output: {
          comments: false
        }
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  return plugins
}
