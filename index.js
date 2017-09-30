import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import UserRouter from './server/routes/users';
import GroupsRouter from './server/routes/groups';


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to PostIt Application, Conversation just became easy',
}));

app.use('/api/users', UserRouter);
app.use('/api/groups', GroupsRouter);

export default app;
