import { passwordService } from '../../Services/User/Password-Services';
import { IForgotPasswordToken, IPasswordRequest } from '../../Interfaces/Auth';
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

  // forgotPasswordToken(req: Request, res: Response) {
  //   const { token } = req.params;
  //   const CheckToken = jwt.verify(token, 'secret') as IForgotPasswordToken;

  //   if (!CheckToken)
  //     return res.status(400).json({
  //       error: 'Link inválido ou expirado.',
  //     });

  //   try {
  //     const data = passwordService.forgotPasswordToken({ token });
  //     return res.status(200).json(data);
  //   } catch (error) {
  //     const { message } = error as Error;
  //     return res.status(400).json({
  //       error: message,
  //     });
  //   }
  // }
}

export const passwordController = new PasswordController();
