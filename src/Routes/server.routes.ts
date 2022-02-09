import { Router } from 'express';

const ServerRoutes = Router();

ServerRoutes.get('/:id'); // Console
ServerRoutes.get('/:id/files'); // File Manager
ServerRoutes.get('/:id/databases'); // Database
ServerRoutes.get('/:id/users'); // Add Users to Panel
ServerRoutes.get('/:id/backups'); // Backups
ServerRoutes.get('/:id/settings'); // Settings
ServerRoutes.get('/:id/manager'); // Manager Minecraft Server
ServerRoutes.get('/:id/network'); // Settings Server IP Custom 
ServerRoutes.get('/:id/tutorial'); // Tutorial How to Manage Server

export default ServerRoutes;
