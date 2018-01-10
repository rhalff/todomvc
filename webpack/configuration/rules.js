import ExtractTextPlugin from 'extract-text-webpack-plugin'
const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.gzip?$/,
      use: [
        {
          loader: 'gzip-loader'
        }
      ]
    },
    {
      test: /\.(png|jpg)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            context: 'this.options.context',
            useRelativePath: false,
            emitFile: true
          }
        }
      ]
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
      ]
    }
  ]

  const cssLoaders = [
    ({ resource }) => {
      const useModules = !/\.global\./.test(resource)
      return {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: useModules,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['src/app']
      }
    },
    'postcss-loader'
  ]

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: cssLoaders
      })
    })
  } else {
    rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-modules-flow-types-loader'].concat(cssLoaders)
    })
  }

  return rules
}
