import { authController } from '../Controllers/User/Auth-controller';
import { Router } from 'express';

const UserRoutes = Router();

UserRoutes.get('/api'); // API User
UserRoutes.post('/login', authController.login); // Login User
UserRoutes.post('/register', authController.register); // Register User
UserRoutes.post('/password'); // Forgot Password User

export default UserRoutes;
