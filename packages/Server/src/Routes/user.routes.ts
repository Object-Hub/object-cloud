import { Request, Response, Router } from 'express';

import { authController } from '../Controllers/User/Auth-Controller';
import { passwordController } from '../Controllers/User/Password-Controller';
import { emailController } from '../Controllers/User/Email-Controller';

import { EnsureAuth } from '../Middlewares/EnsureAuth';

const UserRoutes = Router();

UserRoutes.post('/login', authController.login);
UserRoutes.post('/register', authController.register);
UserRoutes.get('/profile', EnsureAuth, authController.profile);

UserRoutes.post('/forgot-password', passwordController.forgotPassword);
UserRoutes.post('/change-password/:username', passwordController.changePassword);
UserRoutes.post('/forgot-password/:id/:token', passwordController.forgotPasswordToken);

UserRoutes.get('/confirm-email/:id/:token', emailController.confirmEmail);
UserRoutes.post('/change-email', emailController.changeEmail);

export default UserRoutes;
