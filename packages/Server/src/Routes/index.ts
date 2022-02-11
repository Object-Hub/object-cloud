import { Router } from 'express';
import AdminsRoutes from './admin.routes';
import ServerRoutes from './server.routes';
import UserRoutes from './user.routes';

const routes = Router();

routes.use('/admin', AdminsRoutes);

routes.get('/server');
routes.use('/server', ServerRoutes);

routes.get('/account');
routes.use('/account', UserRoutes);

export default routes;
