import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      errorCode: 'token.invalid',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, 'secret') as IPayload;
    req.userIDMiddle = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ errorCode: 'token.expired' });
  }
}
