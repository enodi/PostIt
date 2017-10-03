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
module.exports = {
  entry: ['./client/index.jsx'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 5000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8888',
        secure: false,
        changeOrigin: true,
      }
    }
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      loader: 'file-loader'
    },
    {
      test: /\.scss$/,
      use: extractCSSPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015'],
      }

    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    HtmlWebpackPluginConfig,
    extractCSSPlugin,
    hotModuleReplacement,
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};
