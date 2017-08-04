// Import express, morgan and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Create an instance of express
const app = express();

// Log requests to console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require routes for the Application
require('./server/routes')(app);

// Default route that sends a welcome message in JSON format
/* app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application',
}));*/

module.exports = app;
