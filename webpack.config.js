const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const extractCSSPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)$/, use: 'file-loader' },
      { test: /\.scss$/, use: extractCSSPlugin.extract({ use: ['css-loader', 'sass-loader'] }) },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  plugins: [HtmlWebpackPluginConfig, extractCSSPlugin]
};
