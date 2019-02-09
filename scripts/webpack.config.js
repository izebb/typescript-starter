/*eslint-disable*/
const path  = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cwd = process.cwd();

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(cwd, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
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
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CheckerPlugin(),
    new CleanWebpackPlugin([path.resolve(cwd, 'dist')])
  ]
};