import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { emailService } from '../../Services/User/Email-Services';

class EmailController {
  async confirmEmail(req: Request, res: Response) {
    const { id, token } = req.params;

    if (!id || !token) return res.status(404);

    try {
      const verifyToken = jwt.verify(token, 'EmailSecretToken');
      if (!verifyToken) return res.status(404);

      const data = await emailService.confirmEmail(id);
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  async changeEmail(req: Request, res: Response) {
    const { newEmail } = req.body;
    const { username } = req.params;

    try {
      const data = await emailService.changeEmail({ newEmail, username });
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }

  async changeEmailToken(req: Request, res: Response) {
    const { id, token } = req.params;

    if (!id || !token) return res.status(404);

    try {
      const verifyToken = jwt.verify(token, 'EmailChangeToken');
      if (!verifyToken) return res.status(404);

      const data = await emailService.confirmEmail(id);
      return res.status(200).json(data);
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({
        error: message,
      });
    }
  }
}

export const emailController = new EmailController();
