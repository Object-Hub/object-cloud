import { Router } from 'express';

import { authController } from '../Controllers/User/Auth-Controller';
import { passwordController } from '../Controllers/User/Password-Controller';
import { emailController } from '../Controllers/User/Email-Controller';

const UserRoutes = Router();

UserRoutes.post('/login', authController.login);
UserRoutes.post('/register', authController.register);
UserRoutes.post('/forgot-password/:id/:token', passwordController.forgotPasswordToken);
UserRoutes.post('/forgot-password', passwordController.forgotPassword);
UserRoutes.post('/change-password/:username', passwordController.changePassword);
UserRoutes.post('/confirm-email/:id/:token', emailController.confirmEmail);

export default UserRoutes;
