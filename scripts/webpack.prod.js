/*eslint-disable*/

const merge = require("webpack-merge")

const base = require("./webpack.config")

module.exports = merge(base, {
  mode: "production",
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename: "[name].bundle.js",
          chunks: 'all'
        }
      }
    }
  }
})
