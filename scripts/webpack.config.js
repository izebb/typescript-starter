/*eslint-disable*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cwd = process.cwd();
const OUTPUT_PATH = path.resolve(cwd, './dist');
const ENTRY_FILES = './src/index.tsx';
const PUBLIC_PATH = '/';

module.exports = {
  entry: ENTRY_FILES,
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[hash].js',
    publicPath: PUBLIC_PATH
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
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
          filename: '[name].bundle.js',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CheckerPlugin(),
    new CleanWebpackPlugin([OUTPUT_PATH], {
      root: cwd
    })
  ]
};
