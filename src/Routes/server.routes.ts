import { Router } from 'express';

const ServerRoutes = Router();

ServerRoutes.get('/:id'); // Console
ServerRoutes.get('/:id/tutorial'); // Tutorial How to Manage Server
ServerRoutes.get('/:id/manager'); // Manager Server (only minecraft server)
ServerRoutes.get('/:id/files'); // File Manager
ServerRoutes.get('/:id/databases'); // Database
ServerRoutes.get('/:id/backups'); // Backups

ServerRoutes.post('/:id/users'); // Add Users to Panel
ServerRoutes.post('/:id/settings'); // Settings
ServerRoutes.post('/:id/network'); // Settings Server IP Custom

export default ServerRoutes;
