import webpackMerge from 'webpack-merge'
import commonConfig from './common'
import {
  context,
  entry,
  externals,
  name,
  output,
  plugins,
  target
} from './configuration'

const type = 'server'

const config = webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
})

export default config
