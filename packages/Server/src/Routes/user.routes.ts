import { authController } from '../Controllers/User/Auth-Controller';
import { Router } from 'express';
import { passwordController } from '../Controllers/User/Password-Controller';
import { EnsureAuth } from '../middlewares/auth';

const UserRoutes = Router();

UserRoutes.get('/api', EnsureAuth, (req, res) => {
  res.status(200).json({
    message: 'teste',
  });
});

UserRoutes.post('/login', authController.login);
UserRoutes.post('/register', authController.register);
UserRoutes.post('/:username/forgot-password', passwordController.forgotPassword);

export default UserRoutes;
