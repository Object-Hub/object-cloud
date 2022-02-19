import { DataBase } from '../Database/Connections/Connect';
import routes from '../Routes/index';
import express from 'express';

DataBase.Connect();

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5555, () => console.log('[SYSTEM]: Painel Iniciado na porta: 5555'));

export { app };
