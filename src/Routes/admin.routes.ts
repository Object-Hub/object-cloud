import { Router } from 'express';

const adminsRoutes = Router();

adminsRoutes.get('/settings'); // Settings

adminsRoutes.get('/api'); // API ADMIN
adminsRoutes.get('/databases'); // Database
adminsRoutes.post('/api/new'); // API ADMIN Create

adminsRoutes.get('/nodes'); // View VPS Online
adminsRoutes.post('/nodes/new'); // Create VPS

adminsRoutes.get('/nodes/:id'); // View Especific VPS
adminsRoutes.get('/nodes/:id/servers'); // Servers Especific VPS
adminsRoutes.post('/nodes/:id/settings'); // Settings Especific VPS

adminsRoutes.get('/servers'); // View All Servers
adminsRoutes.post('/servers/new'); // Create new Server

adminsRoutes.get('/servers/:id'); // View Especific Server
adminsRoutes.get('/servers/:id/details'); // Informations Especific Server
adminsRoutes.post('/servers/:id/settings'); // Settings Especific Server
adminsRoutes.post('/servers/:id/manager'); // Manager/Delete/Transfer/Suspend Especific Server

adminsRoutes.get('/users'); // View All Users
adminsRoutes.post('/users/:id'); // View and Settings Especific User

export default adminsRoutes;
