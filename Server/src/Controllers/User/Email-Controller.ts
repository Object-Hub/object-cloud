import { Request, Response } from 'express';

import { emailService } from '../../Services/User/Email-Services';

class EmailController {
  async confirmEmail(req: Request, res: Response) {
    const { id, token } = req.params;
    if (!id || !token) return res.status(404);

    try {
      const data = await emailService.confirmEmail(id, token);

      console.log('[SYSTEM]: Email verificado.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(404).json({
        error: message,
      });
    }
  }

  async changeEmail(req: Request, res: Response) {
    const { newEmail } = req.body;
    const { username } = req.params;

    try {
      const data = await emailService.changeEmail({ newEmail, username });

      console.log('[SYSTEM]: Email alterado.');
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;

      console.error('[SYSTEM]: Ocorreu um erro: ' + message);
      return res.status(400).json({
        error: message,
      });
    }
  }

  async changeEmailToken(req: Request, res: Response) {
    const { id, token } = req.params;
    if (!id || !token) return res.status(404);

    try {
      const data = await emailService.confirmEmail(id, token);

      console.log('[SYSTEM]: Novo email confirmado.');
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

export const emailController = new EmailController();
