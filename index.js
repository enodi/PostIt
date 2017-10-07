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
import config from './webpack.config';

dotenv.config();

const app = express(),
  compiler = webpack(config);

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application, Conversation just became easy',
}));

app.use('/api/v1/user', UserRouter);
app.use('/api/v1/group', GroupsRouter);

app.get('*', (req, res) => res.redirect(301, '/'));

app.listen(process.env.PORT || 3200);

export default app;
