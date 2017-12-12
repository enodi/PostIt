const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// const extractCSSPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });
// const hotModuleReplacement = new webpack.HotModuleReplacementPlugin({});

// module.exports = {
//   entry: ['./client/index.jsx'],
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js',
//     publicPath: '/'
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   module: {
//     rules: [{
//       test: /\.(png|jpg)$/,
//       loader: 'file-loader'
//     },
//     {
//       test: /\.scss$/,
//       exclude: /node_modules/,
//       use: [{
//         loader: 'style-loader',
//       }, {
//         loader: 'css-loader',
//         options: {
//           sourceMap: true,
//         },
//       }, {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: true,
//         },
//       }]
//     },
//     {
//       test: /\.(js|jsx)$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       query: {
//         cacheDirectory: true,
//         presets: ['react', 'es2015', 'stage-2'],
//       }
//     },
//     ]
//   },

//   plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery'
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(process.env.NODE_ENV)
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       minimize: true,
//       compressor: {
//         warnings: false,
//       },
//     }),
//     HtmlWebpackPluginConfig,
//     extractCSSPlugin,
//     hotModuleReplacement,
//     new webpack.NoEmitOnErrorsPlugin()
//   ]
// };

module.exports = {
  entry: [
    path.join(__dirname, './client/index.jsx'),
    path.resolve(__dirname, 'client/src/assets/main.scss')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|styl)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 250000,
        },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }
};
