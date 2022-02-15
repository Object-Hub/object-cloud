import { passwordService } from '../../Services/User/Password-Services';
import { IPasswordRequest, IForgotPassword } from '../../Interfaces/Auth';
import { createTransport } from 'nodemailer';
import { Request, Response } from 'express';

class PasswordController {
  async changePassword(req: Request, res: Response) {
    const { oldPassword, newPassword }: IPasswordRequest = req.body;

    try {
      const data = passwordService.changePassword({ oldPassword, newPassword });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  async forgotPassword(req: Request, res: Response) {
    const { email }: IForgotPassword = req.body;

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
}

export const passwordController = new PasswordController();
