import { passwordService } from '../../Services/User/Password-Services';
import { IPasswordRequest } from '../../Interfaces/Auth';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class PasswordController {
  async changePassword(req: Request, res: Response) {
    const { oldPassword, newPassword }: IPasswordRequest = req.body;
    const { username } = req.params;

    try {
      const data = await passwordService.changePassword({ username, oldPassword, newPassword });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    if (!email)
      return res.status(400).json({
        error: 'É necessario um email para recuperar senha.',
      });

    try {
      const data = await passwordService.forgotPassword({ email });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  async forgotPasswordToken(req: Request, res: Response) {
    const { id, token } = req.params;
    const { newPassword } = req.body;

    if (!id || !token) return res.status(404);

    if (!newPassword)
      return res.status(400).json({
        error: 'É necessário uma nova senha para efeutar a alteração.',
      });

    try {
      const verifyToken = jwt.verify(token, 'secret');
      if (!verifyToken) return res.status(404);

      const data = await passwordService.forgotPasswordToken({ id, token, newPassword });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }
}

export const passwordController = new PasswordController();
