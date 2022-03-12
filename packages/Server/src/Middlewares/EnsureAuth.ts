import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function EnsureAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      message: 'Não autorizado.',
    });
  }

  const splitToken = token.split(' ')[1];

  try {
    const { sub } = jwt.verify(splitToken, process.env.SECRET_KEY || 'secret') as IPayload;

    req.userId = sub;

    return next();
  } catch (error) {
    return res.status(401).json({
      error: 'Token inválido.',
    });
  }
}
