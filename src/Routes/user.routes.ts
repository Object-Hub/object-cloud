import { Router } from 'express';

const UserRoutes = Router();

UserRoutes.get('/api'); // API User
UserRoutes.get('/login'); // Login User
UserRoutes.get('/register'); // Register User
UserRoutes.get('/password'); // Forgot Password User

export default UserRoutes;
