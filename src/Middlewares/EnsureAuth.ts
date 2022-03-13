import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export default function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      error: 'Token Inválido.',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, 'secret') as IPayload;
    req.userIDMiddle = sub;

    return next();
  } catch (err) {
    const { message } = err as Error;
    return res.status(401).json({ error: message });
  }
}
