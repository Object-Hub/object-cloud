import { IUserRegister, IUserLogin } from '../../Interfaces/User';
import { authService } from '../../Services/User/Auth-Services';
import { Request, Response } from 'express';

class AuthController {
  register(req: Request, res: Response) {
    const { name, username, email, password }: IUserRegister = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        error: 'É necessário informar todos os dados para se registrar.',
      });
    }

    try {
      const data = authService.register({ name, username, email, password });
      return res.status(201).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  login(req: Request, res: Response) {
    const { username, email, password }: IUserLogin = req.body;

    if ((!username || !email) && !password)
      return res.status(400).json({
        error: 'É necessário informar todos os dados para se logar.',
      });

    try {
      const data = authService.login({ username, email, password });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }
}

export const authController = new AuthController();
