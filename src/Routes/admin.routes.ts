import { Router, Response, Request } from 'express';

const adminsRoutes = Router();

adminsRoutes.get('/settings', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from adminsRoutes',
  });
}); // Settings

adminsRoutes.get('/api'); // API ADMIN
adminsRoutes.get('/api/new'); // API ADMIN Create
adminsRoutes.get('/databases'); // Database

adminsRoutes.get('/nodes'); // View VPS Online
adminsRoutes.get('/nodes/new'); // Create VPS
adminsRoutes.get('/nodes/:id'); // View Especific VPS
adminsRoutes.get('/nodes/:id/settings'); // Settings Especific VPS
adminsRoutes.get('/nodes/:id/servers'); // Servers Especific VPS

adminsRoutes.get('/servers'); // View All Servers
adminsRoutes.get('/servers/new'); // Create new Server
adminsRoutes.get('/servers/:id'); // View Especific Server
adminsRoutes.get('/servers/:id/details'); // Informations Especific Server
adminsRoutes.get('/servers/:id/settings'); // Settings Especific Server
adminsRoutes.get('/servers/:id/manager'); // Manager/Delete/Transfer Especific Server

adminsRoutes.get('/users'); // View All Users
adminsRoutes.get('/users/new'); // Create Users
adminsRoutes.get('/users/:id'); // View and Settings Especific User

export default adminsRoutes;
