import { Router } from 'express';

const ServerRoutes = Router();

ServerRoutes.get('/server');
ServerRoutes.get('/server/:id'); // Console
ServerRoutes.get('/server/:id/files'); // File Manager
ServerRoutes.get('/server/:id/databases'); // Database
ServerRoutes.get('/server/:id/users'); // Add Users to Panel
ServerRoutes.get('/server/:id/backups'); // Backups
ServerRoutes.get('/server/:id/settings'); // Settings

export default ServerRoutes;
