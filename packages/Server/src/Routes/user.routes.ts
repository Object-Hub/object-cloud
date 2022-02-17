import { authController } from '../Controllers/User/Auth-Controller';
import { Router } from 'express';
import { passwordController } from '../Controllers/User/Password-Controller';
import { EnsureAuth } from '../middlewares/auth';

const UserRoutes = Router();

UserRoutes.get('/api');

UserRoutes.post('/login', authController.login);
UserRoutes.post('/register', authController.register);
UserRoutes.post('/forgot-password/:token', passwordController.forgotPassword);
UserRoutes.post('/forgot-password/', passwordController.forgotPassword);

export default UserRoutes;
