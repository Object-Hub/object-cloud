import { Router } from 'express';
import cors from 'cors';

import AdminsRoutes from './admin.routes';
import ServerRoutes from './server.routes';
import UserRoutes from './user.routes';

const routes = Router();

const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Toke', 'Authorization'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

routes.use(cors(options));

routes.use('/admin', AdminsRoutes);

routes.get('/server');
routes.use('/server', ServerRoutes);

routes.get('/account');
routes.use('/account', UserRoutes);

console.log('[SYSTEM]: Rota: Account Carregada.');
console.log('[SYSTEM]: Rota: Admin Carregada.');
console.log('[SYSTEM]: Rota: Server Carregada.');

setTimeout(() => console.log('[SYSTEM]: Todas as rotas carregadas com sucesso.'), 500);

export default routes;
