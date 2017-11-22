## PostIt 
[![Build Status](https://travis-ci.org/enodi/PostIt.svg?branch=add-license)](https://travis-ci.org/enodi/PostIt)  [![Code Climate](https://codeclimate.com/github/enodi/PostIt/badges/gpa.svg)](https://codeclimate.com/github/enodi/PostIt/)  [![Coverage Status](https://coveralls.io/repos/github/enodi/PostIt/badge.svg?branch=staging)](https://coveralls.io/github/enodi/PostIt?branch=staging)

### Introduction
PostIt is a JavaScript application that allow registered users communicate with each other via groups. It allows you post messages and retrieve messages from groups you belong to. It includes a well structured API documentation that can be used by anyone.

You can view the deployed application [here](https://postit-enodi.herokuapp.com/)

### Features
  * It has the following features:
      * Creating an account
      * Signing in as an existing user
      * Creating a new group
      * Adding new users to groups
      * Post messages to groups in real-time
      * Display posted messages
      * Search for users in a group
      * Reset password
      * Receive email notification when a message is posted in the group you belong to based on priority level i.e `Normal`,         `Critical` and `Urgent`

### Project Dependencies
* Dependencies

  * [axios](https://www.npmjs.com/package/axios): A JavaScript library used to make http requests from nodejs or        XMLHttpRequests from the browser
  * [babel-cli](https://www.npmjs.com/package/babel-cli) : Used to transpile es6 code to es5 on the command line
  * [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015): Plugin that adds support for es6
  * [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) : Plugin that adds support for jsx
  * [bcryptjs](https://www.npmjs.com/package/bcryptjs) : Used to hash passwords 
  * [dotenv](https://www.npmjs.com/package/dotenv) : Used to load environment variable from .env file
  * [express](https://www.npmjs.com/package/express) : Web application framework. Used as application web server.
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) : Used to create access tokens that asserts some number of claims.
  * [react](https://www.npmjs.com/package/react) : A Javascript library for building user interfaces
  * [sequelize](https://www.npmjs.com/package/sequelize) : Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features         solid transaction support, relations, read replication and more.

* Development Dependencies

  * [chai](https://www.npmjs.com/package/chai) : Chai is a BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascript         testing framework
  * [coveralls](https://www.npmjs.com/package/coveralls) : Coveralls.io support for node.js. Get the great coverage reporting of coveralls.io and add a cool coverage         button to your README.
  * [istanbul](https://www.npmjs.com/package/istanbul) : a JavaScript code coverage tool.
  * [supertest](https://www.npmjs.com/package/supertest) : HTTP assertions made easy via superagent.
  

### Installation and Setup

* Navigate to a directory with your terminal
* Clone this repo to your directory
* Using HTTP; ```$ git clone https://github.com/enodi/PostIt.git```
* Using SSH; ```$ git clone git@github.com:enodi/PostIt.git```
* Navigate to the repo directory
* ```$ cd postit```
* install app dependencies
* ```$ npm install```
* Run the app
  * ```$ npm start```
  * Running the above command will run the app on http://localhost:3200


### Tests
* The tests were written using Mocha, Supertest and Chai.
* To run test, navigate to app directory
* run test
* ```$ npm test```

### Want To Contribute?
* Fork this repo to your repository, clone the repo and configure
* Create a new branch [(see wiki for branch naming convention)](https://github.com/enodi/PostIt/wiki/Branch-Naming-Convention)
* Make your contribution
* Commit your change [(see wiki for commit message convention)](https://github.com/enodi/PostIt/wiki/Commit-Message-Convention)
* Make sure to test your work
* Raise a pull request against develop branch [(see wiki for pull request convention)](https://github.com/enodi/PostIt/wiki/Pull-Request-Naming-and-Description-Convention)

### API Documentation
For detailed information on how to use api, view [api documentation](http://postit-enodi.herokuapp.com/apidocs/#introduction)

### FAQ
* Click [here](https://github.com/enodi/PostIt/wiki/Frequently-Asked-Questions) to read our FAQ.

### License
* https://github.com/enodi/PostIt/blob/master/LICENSE

### Author
Enodi Audu - @enodi
