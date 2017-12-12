import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import webpack from 'webpack';
import dotenv from 'dotenv';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import UserRouter from './server/routes/users';
import GroupsRouter from './server/routes/groups';
import config from './webpack.config.dev';

dotenv.config();

const app = express();

app.use('/apiDocs', express.static(path.resolve(__dirname, './apiDocs/')));
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api/v1/user', UserRouter);
app.use('/api/v1/group', GroupsRouter);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/',
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (request, response) => response.status(200)
    .sendFile(path.join(__dirname, './client/index.html')));
}

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => response.status(200)
    .sendFile(path.join(__dirname, './dist/index.html')));
}

app.get('/', (request, response) => response.status(200).send({
  message: 'Welcome to PostIt Application, Conversation just became easy',
}));

app.listen(process.env.PORT || 3200);

export default app;
