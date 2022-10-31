import { Request, Response } from 'express';

import { passwordService } from '../../Services/User/Password-Services';
import { IPasswordRequest } from '../../Interfaces/Auth';

class PasswordController {
  async changePassword(req: Request, res: Response) {
    const { oldPassword, newPassword }: IPasswordRequest = req.body;
    const { username } = req.params;

    try {
      const data = await passwordService.changePassword({ username, oldPassword, newPassword });

      console.log('[SYSTEM]: Senha alterada.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
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
      const data = await passwordService.forgotPassword(email);

      console.log('[SYSTEM]: Email de recuperação de senha enviado.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
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
      const data = await passwordService.forgotPasswordToken({ id, token, newPassword });

      console.log('[SYSTEM]: Senha recuperada.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(404).json({
        error: message,
      });
    }
  }
}

export const passwordController = new PasswordController();
