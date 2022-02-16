import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
interface AuthRequest extends Request {
  user?: string;
}

export function EnsureAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).send({
      message: 'No token provided',
    });
  }

  const token = authToken.split(' ')[1];

  try {
    const { sub } = verify(token, 'secret') as { sub: string };

    req.user = sub;

    return next();
  } catch (error) {
    return res.status(400).send({
      message: 'Invalid token',
    });
  }
}
