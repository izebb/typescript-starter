/*eslint-disable*/
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.config');

module.exports = merge(base, {
  mode: 'development',
  optimization: {
    minimize: true
  },
  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000
  },
  devServer: {
    hot: true,
    port: 3000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
