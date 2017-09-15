// Import express, morgan and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
// const webpack = require('webpack');
require('dotenv').config();

// Create an instance of express
const app = express();

// Log requests to console
app.use(logger('dev'));

const config = require('./webpack.config');

// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }));
//   app.use(require('webpack-hot-middleware')(compiler));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('dist'));

// Require routes for the Application
require('./server/routes')(app);

// Default route that sends a welcome message in JSON format
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

module.exports = app;
