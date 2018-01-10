const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const cssLoaders = [
  'style-loader',
  ({ resource }) => {
    const modules = !/\.global\./.test(resource)

    return {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
        modules: modules,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: ['src/app']
    }
  }
]

module.exports = (storybookBaseConfig, configType = 'DEVELOPMENT') => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.svg$/,
      loader: 'file-loader'
    },
    {
      test: /\.scss$/,
      use: cssLoaders,
      include: path.resolve(__dirname, '../')
    }
  )

  storybookBaseConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    })
  )

  return storybookBaseConfig
}
