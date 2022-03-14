import { Router } from 'express';

import { authController } from '../Controllers/User/Auth-Controller';
import { passwordController } from '../Controllers/User/Password-Controller';
import { emailController } from '../Controllers/User/Email-Controller';
import ensureAuth from '../Middlewares/EnsureAuth';

const UserRoutes = Router();

UserRoutes.post('/login', authController.login);
UserRoutes.post('/register', authController.register);
UserRoutes.get('/profile', ensureAuth, authController.profile); // teste de middleware

UserRoutes.post('/forgot-password', passwordController.forgotPassword);
UserRoutes.post('/change-password/:username', passwordController.changePassword);
UserRoutes.post('/forgot-password/:id/:token', passwordController.forgotPasswordToken);

UserRoutes.get('/confirm-email/:id/:token', emailController.confirmEmail);
UserRoutes.post('/change-email/:username', emailController.changeEmail);
UserRoutes.get('/change-email/:id/:token', emailController.changeEmailToken);

export default UserRoutes;
