//Env variables
require('dotenv').config(); //necessário para usar o .env

import express from 'express';
import config from 'config';

const app = express();

//Json middleware, para trafegar dados JSON
app.use(express.json());

//DB
import db from '../config/db';

//Routes
import router from './router';

//Logger
import Logger from '../config/logger';

//Middlewares
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);

app.use('/api/', router);

//app port
const port = config.get<number>('port');

app.listen(port, async () => {
  await db();
  Logger.info(`aplicação rodando na porta: ${port}`);
});
