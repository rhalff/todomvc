import webpackMerge from 'webpack-merge'
import commonConfig from './common'
import {
  context,
  devtool,
  entry,
  name,
  output,
  plugins,
  target
} from './configuration'

const type = 'client'

export default webpackMerge(commonConfig(type), {
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
})
