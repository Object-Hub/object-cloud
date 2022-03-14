import express from 'express';
import 'dotenv/config';

import routes from './Routes/index';
import './Database/index';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5555, () => console.log('[SYSTEM]: Painel Iniciado na porta: 5555'));
