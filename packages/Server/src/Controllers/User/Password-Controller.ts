import { users } from '../../Database/cache/User-Cache';
import IPasswordRequest from '../../interfaces/Auth';
import { Request, Response } from 'express';
import { createTransport } from 'nodemailer';

const { cache } = users;

class PasswordController {
  async changePassword(req: Request, res: Response) {
    const { oldPassword, newPassword, confirmPassword }: IPasswordRequest = req.body;

    if (cache.find((user) => user.password !== oldPassword))
      return res.status(400).json({
        error: 'Senha incorreta.',
      });

    return res.status(200).json({
      message: 'Senha alterada com sucesso.',
    });
  }

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email não informado.' });

    const user = cache.find((user) => user.email === email);

    if (!user) return res.status(400).json({ error: 'Usuário não encontrado com este e-mail.' });

    const transporter = createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const message = transporter.sendMail({
      from: `"Control Panel" <controlpanel@gmail.com>`,
      to: user.email,
      subject: 'Recuperação de senha',
      text: 'Sua senha é: 123456',
    });

    return res.status(200).json({
      message: 'E-mail encontrado.',
    });
  }
}

export const passwordController = new PasswordController();
