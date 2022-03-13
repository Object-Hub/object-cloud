import routes from './Routes/index';
import express from 'express';
import 'dotenv/config';

import { DataBase } from './Database';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5555, () => {
  DataBase.Connect();
  console.log('[SYSTEM]: Painel Iniciado na porta: 5555');
});
