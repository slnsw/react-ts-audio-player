/**
 * @file
 * Webpack config.
 */

const path = require('path');

const suffix = process.env.NODE_ENV === 'production' ? '' : '.dev';

const config = {
  entry: {
    index: './index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: `[name]${suffix}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: process.env.NODE_ENV === 'production' ?
    'production' : 'development',
};

module.exports = config;