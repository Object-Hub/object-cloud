import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  id: string;
}

export default function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    console.error('[SYSTEM]: Token inválido');

    return res.status(401).json({
      error: 'Token Inválido.',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const sub = verify(token, 'LoginSecToken') as IPayload;
    req.userIDMiddle = sub.id;

    console.log('[SYSTEM]: Token autorizado.');
    return next();
  } catch (err) {
    const { message } = err as Error;

    console.error('[SYSTEM]: Ocorreu um erro: ' + message);
    return res.status(401).json({ error: message });
  }
}
