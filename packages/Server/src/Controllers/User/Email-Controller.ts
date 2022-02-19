import { emailService } from '../../Services/User/Email-Service';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

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
}

export const emailController = new EmailController();
