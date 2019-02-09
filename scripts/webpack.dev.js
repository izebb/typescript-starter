/*eslint-disable*/
const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require("./webpack.config")

module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimize: true
  },
  devServer: {
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
