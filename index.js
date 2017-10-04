import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import UserRouter from './server/routes/users';
import GroupsRouter from './server/routes/groups';
import config from './webpack.config';

const app = express(),
  compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application, Conversation just became easy',
}));

app.use('/api/user', UserRouter);
app.use('/api/group', GroupsRouter);

app.listen(process.env.PORT || 3200);

export default app;
