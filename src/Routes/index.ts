import { Router } from 'express';
import AdminsRoutes from './admin.routes';

const routes = Router();

routes.use('/admin', AdminsRoutes)

export default routes;