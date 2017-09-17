// Import express, morgan and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// Create an instance of express
const app = express();

// Log requests to console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(express.static('dist'));

// Require routes for the Application
require('./server/routes')(app);

module.exports = app;
