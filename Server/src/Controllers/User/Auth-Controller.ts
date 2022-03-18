import { Request, Response } from 'express';

import { IUserRegister, IUserLogin } from '../../Interfaces/User';
import { authService } from '../../Services/User/Auth-services';

class AuthController {
  async register(req: Request, res: Response) {
    const { name, username, email, password }: IUserRegister = req.body;

    if (!name || !username || !email || !password) {
      console.error('[SYSTEM]: Dados incompletos.');

      return res.status(400).json({
        error: 'É necessário informar todos os dados para se registrar.',
      });
    }

    try {
      const data = await authService.register({ name, username, email, password });

      console.log('[SYSTEM]: Novo usuário registrado.');
      return res.status(201).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(400).json({
        error: message,
      });
    }
  }

  async login(req: Request, res: Response) {
    const { username, email, password }: IUserLogin = req.body;

    if ((!username || !email) && !password) {
      console.error('[SYSTEM]: Dados incompletos.');

      return res.status(400).json({
        error: 'É necessário informar todos os dados para se logar.',
      });
    }

    try {
      const data = await authService.login({ username, email, password });

      console.log('[SYSTEM]: Novo Login efetuado.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(400).json({
        error: message,
      });
    }
  }

  async profile(req: Request, res: Response) {
    const { userIDMiddle } = req;

    try {
      const data = await authService.profile(userIDMiddle);

      console.log('[SYSTEM]: Usuário Logado.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(400).json({
        error: message,
      });
    }
  }
}

export const authController = new AuthController();
