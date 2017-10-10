# PostIt [![Build Status](https://travis-ci.org/enodi/PostIt.svg?branch=master)](https://travis-ci.org/enodi/PostIt)  [![Coverage Status](https://coveralls.io/repos/github/enodi/PostIt/badge.svg?branch=master)](https://coveralls.io/github/enodi/PostIt?branch=master)

# Introduction
PostIt is a JavaScript application that allow registered users communicate with each other via groups. It allows you post messages and retrieve messages from groups you belong to. It includes a well structured API documentation that can be used by anyone.

You can view the deployed application [here](https://postit-enodi.herokuapp.com/)

# Features
  * It has the following features:
     * Signin
     * Signup
     * Create group
     * Add users to group
     * Post messages to groups
     * Display messages posted

# Project Dependencies
* Dependies

  * [axios](https://www.npmjs.com/package/axios): A JavaScript library used to make http requests from nodejs or        XMLHttpRequests from the browser
  * [babel-cli](https://www.npmjs.com/package/babel-cli) : Used to transpile es6 code to es5 on the command line
  * [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015): Plugin that adds support for es6
  * babel-preset-react: Plugin that adds support for jsx
  * bcryptjs: Used to hash passwords
  * body-parser: Nodejs body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available     under the req.body property. 
  * dotenv: Used to load environment variable from .env file
  * express: Web application framework. Used as application web server.
  * jsonwebtoken: Used to create access tokens that asserts some number of claims.
  * morgan: HTTP request logger middleware for node.js
  * pg: Non-blocking PostgreSQL client for node.js.
  * pg-hstore: A node package for serializing and deserializing JSON data to hstore format
  * react: A Javascript library for building user interfaces
  * sequelize: Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features         solid transaction support, relations, read replication and more.

* Development Dependencies

  * chai: Chai is a BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascript         testing framework
  * coveralls: Coveralls.io support for node.js. Get the great coverage reporting of coveralls.io and add a cool coverage         button to your README.
  * istanbul: a JavaScript code coverage tool.
  * supertest: HTTP assertions made easy via superagent.
  

# Installation and Setup

* Navigate to a directory with your terminal
* Clone this repo to your directory
* Using HTTP; ```$ git clone https://github.com/enodi/PostIt.git```
* Navigate to the repo directory
* ```$ cd postit```
* install app dependencies
* ```$ npm install```
* Run the app
* ```$ npm start```


# Tests
* The tests were written using supertest and chai.
* To run test, navigate to app directory
* run test
* ```$ npm test```

# Want To Contribute?
* Fork this repo to your private repository 
* Make your contribution
* Make sure to test your work
* Create a pull request
Note: Certain guidelines and style guides must be followed when contributing. More info can be found on the repo's [wiki](https://github.com/enodi/PostIt/wiki)

# FAQ
* Can I contribute to this project?
  * Yes

# Author
Enodi Audu - @enodi
