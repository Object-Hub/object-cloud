import { Router, Response, Request } from 'express';

const AdminsRoutes = Router();

AdminsRoutes.get('/settings', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from AdminsRoutes',
  });
}); // Settings

AdminsRoutes.get('/api'); // API ADMIN
AdminsRoutes.get('/api/new'); // API ADMIN Create
AdminsRoutes.get('/databases'); // Database

AdminsRoutes.get('/nodes'); // View VPS Online
AdminsRoutes.get('/nodes/new'); // Create VPS
AdminsRoutes.get('/nodes/:id'); // View Especific VPS
AdminsRoutes.get('/nodes/:id/settings'); // Settings Especific VPS
AdminsRoutes.get('/nodes/:id/servers'); // Servers Especific VPS

AdminsRoutes.get('/servers'); // View All Servers
AdminsRoutes.get('/servers/new'); // Create new Server
AdminsRoutes.get('/servers/:id'); // View Especific Server
AdminsRoutes.get('/servers/:id/details'); // Informations Especific Server
AdminsRoutes.get('/servers/:id/settings'); // Settings Especific Server
AdminsRoutes.get('/servers/:id/manager'); // Manager/Delete/Transfer Especific Server

AdminsRoutes.get('/users'); // View All Users
AdminsRoutes.get('/users/new'); // Create Users
AdminsRoutes.get('/users/:id'); // View and Settings Especific User

export default AdminsRoutes;