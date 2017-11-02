const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const extractCSSPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});
const hotModuleReplacement = new webpack.HotModuleReplacementPlugin({});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['webpack-hot-middleware/client', './client/index.jsx'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      loader: 'file-loader'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }]
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'stage-2'],
      }
    },
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compressor: {
        warnings: false,
      },
    }),
    HtmlWebpackPluginConfig,
    extractCSSPlugin,
    hotModuleReplacement,
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
