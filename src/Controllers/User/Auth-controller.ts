import { Request, Response } from 'express';
import IUserRequest from '../../interfaces/User';
import { v4 as Uuidv4 } from 'uuid';

// criar array de usuários para teste de autenticação e autorização do sistema
export const users: IUserRequest[] = [];

class AuthController {
  async register(req: Request, res: Response) {
    const { name, email, password }: IUserRequest = req.body;

    if (!name || !email || !password)
      return res.status(400).json({
        error: 'É necessário informar todos os dados para se cadastrar.',
      });

    if (users.find((user) => user.email == email))
      return res.status(400).json({
        error: 'Já existe um usuário com este email.',
      });

    const NewUser: IUserRequest = {
      id: Uuidv4(),
      name,
      email,
      password,
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    users.push(NewUser);

    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso.',
      user: NewUser,
    });
  }

  async login(req: Request, res: Response) {
    const { email, password }: IUserRequest = req.body;

    if (!email || !password)
      return res.status(400).json({
        error: 'É necessário informar todos os dados para se logar.',
      });

    const fetchUser = users.find((user) => user.email === email);

    if (!fetchUser)
      return res.status(400).json({
        error: 'Usuário não encontrado.',
      });

    if (fetchUser.password !== password)
      return res.status(400).json({
        error: 'Senha incorreta.',
      });

    return res.json({
      fetchUser,
    });
  }
}

export const authController = new AuthController();
